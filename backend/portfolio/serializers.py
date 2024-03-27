from .models import Article, Project,CV, Book, ProgrammingLunguage, Profile
from rest_framework import serializers


class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ('title', 'preview')

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'

class CVSerializer(serializers.ModelSerializer):
    class Meta:
        model = CV
        fields = '__all__'

class BooksSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = '__all__'

class LunguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProgrammingLunguage
        fields = '__all__'

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'