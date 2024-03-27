from django.db import models

# Create your models here.
class Project(models.Model):
    """
    Projects that I have worked on.
    """
    name = models.CharField(max_length=20)
    project_picture = models.ImageField(upload_to="", null=True)
    description = models.CharField(max_length=200)
    github = models.URLField(max_length=1000)
    start_date = models.DateField()
    end_date = models.DateField()

    def __str__(self):
        return self.name


class Article(models.Model):
    """
    Articles that I found time to write.
    """
    title = models.CharField(max_length=100)
    preview = models.ImageField(upload_to="")

    def __str__(self):
        return self.title
    
class CV(models.Model):
    """My Carriculum Vitae"""
    file = models.FileField(upload_to="", blank=False)
    
class Book(models.Model):
    """
    Books I have read and also in the process of reading.
    """

    BOOK_CATEGORY_CHOICES = (
        ('Technical', "Technical"), 
        ('Classics', 'Classics'),
    )

    category =  models.CharField(max_length=100, choices=BOOK_CATEGORY_CHOICES)
    name = models.CharField(max_length=200)
    file = models.FileField(blank=False, upload_to="", max_length=500) 
    year =  models.IntegerField(blank=True, null=True)

    def __str_(self):
        return self.file
    
    def download_book(self):
        return self.file.url

class ProgrammingLunguage(models.Model):
    """
    Programming Lungauges that I have mastered
    """
    lunguages = models.CharField(max_length=100)

    def __str__(self):
        return self.lunguages

class Profile(models.Model):
    """
    My profile details
    """
    GENDER_CHOICES = (
        ("Male", "Male"),
        ("Female", "Female"),
    )

    full_name = models.CharField(max_length=100, blank=False)
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES)
    photo = models.ImageField(blank=False, upload_to="")
    role_description = models.CharField(max_length=300, blank=False)
    lunguages = models.ForeignKey(ProgrammingLunguage, on_delete=models.CASCADE, blank=True)

    def __str__(self):
        return self.full_name