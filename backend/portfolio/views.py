from http.client import HTTPResponse
import os
from django.shortcuts import render
from backend.settings import MEDIA_ROOT
from rest_framework import viewsets
from .serializers import ArticleSerializer, ProjectSerializer,CVSerializer, BooksSerializer, LunguageSerializer, ProfileSerializer
from .models import Article, Project,CV, Book, ProgrammingLunguage, Profile
from django.http import FileResponse
from django.shortcuts import get_object_or_404
from .models import Book

class ArticleView(viewsets.ModelViewSet):
    serializer_class = ArticleSerializer
    queryset = Article.objects.all() 

class ProjectsView(viewsets.ModelViewSet):
    serializer_class = ProjectSerializer
    queryset = Project.objects.all()

class CvView(viewsets.ModelViewSet):
    serializer_class = CVSerializer
    queryset = CV.objects.all()

class BookView(viewsets.ModelViewSet):
    serializer_class = BooksSerializer
    queryset = Book.objects.all()

class LunguageView(viewsets.ModelViewSet):
    serializer_class = LunguageSerializer
    queryset = ProgrammingLunguage.objects.all()

class ProfileView(viewsets.ModelViewSet):
    serializer_class = ProfileSerializer
    queryset = Profile.objects.all()

def DownloadBookPDF(request, pdf_id):
    try:
        file_obj = Book.objects.get(id=pdf_id)
    except Book.DoedNotExist:
        return HTTPResponse(status=404)
    
    path_to_file = os.path.join(MEDIA_ROOT, file_obj.name)

    with open(path_to_file, 'rb') as f:
        file_data = Book(f)

        response = HTTPResponse(file_data.read())
        response['Content-Disposition'] = 'attachment; filename="{}"'.format(file_obj.name)
    return response
    
def download_book(request, pdf_id):
    try:
        book = Book.objects.get(id=pdf_id)
    except Book.DoesNotExist:
        return HTTPResponse(status=401)
    file_url = book.download_book()
    response = HTTPResponse(content_type='aplication/octet-stream')
    response['Content-Disposition'] = 'attachment; filename="{}"'.format(book.name)
    response['X-Accel-Redirect'] = file_url
    return response

def download_book_pdf(request, pdf_id):
    book = get_object_or_404(Book, id=pdf_id)
    file_path = book.download_book()
    return FileResponse(open(file_path, 'rb'), as_attachment=True)