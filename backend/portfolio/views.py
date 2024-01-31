from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ArticleSerializer, ProjectSerializer, BooksSerializer, LunguageSerializer, ProfileSerializer
from .models import Article, Project, Book, ProgrammingLunguage, Profile

class ArticleView(viewsets.ModelViewSet):
    serializer_class = ArticleSerializer
    queryset = Article.objects.all() 

class ProjectsView(viewsets.ModelViewSet):
    serializer_class = ProjectSerializer
    queryset = Project.objects.all()

class BookView(viewsets.ModelViewSet):
    serializer_class = BooksSerializer
    queryset = Book.objects.all()

class LunguageView(viewsets.ModelViewSet):
    serializer_class = LunguageSerializer
    queryset = ProgrammingLunguage.objects.all()

class ProfileView(viewsets.ModelViewSet):
    serializer_class = ProfileSerializer
    queryset = Profile.objects.all()
