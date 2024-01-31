from django.contrib import admin
from .models import Project, Article, Book, ProgrammingLunguage, Profile

class AdminProjectsOverview(admin.ModelAdmin):
    list_display = ("name", )
    search_fields = ("name", )
    ordering = ("name", )
    list_filter = ("name", )

class AdminArticlesOverview(admin.ModelAdmin):
    list_display = ("title", )
    search_fields = ("title", )
    ordering = ("title", )
    list_filter = ("title", )

class AdminBooksOverview(admin.ModelAdmin):
    list_display = ("name", )
    search_fields = ("name", )
    ordering = ("name", )
    list_filter = ("name", )

class AdminLunguageOverview(admin.ModelAdmin):
    list_display = ("lunguages", )
    search_fields = ("lunguages", )
    ordering = ("lunguages", )
    list_filter = ("lunguages", )

class AdminProfileOverview(admin.ModelAdmin):
    list_display = ("full_name", )
    search_fields = ("full_name", )
    ordering = ("full_name", )
    list_filter = ("full_name", )

admin.site.register(Project, AdminProjectsOverview)
admin.site.register(Article, AdminArticlesOverview)
admin.site.register(Book, AdminBooksOverview)
admin.site.register(ProgrammingLunguage, AdminLunguageOverview)
admin.site.register(Profile, AdminProfileOverview)
