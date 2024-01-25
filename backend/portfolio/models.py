from django.db import models
from backend.settings import STATIC_URL

# Create your models here.
class Project(models.Model):
    name = models.CharField(max_length=20)
    description = models.CharField(max_length=200)
    github = models.URLField(max_length=1000)
    start_date = models.DateField()
    end_date = models.DateField()

    def __str__(self):
        return self.name


class Article(models.Model):
    title = models.CharField(max_length=100)
    preview = models.ImageField(upload_to="")

    def __str__(self):
        return self.title