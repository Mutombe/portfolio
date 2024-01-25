from django.contrib import admin
from .models import Project, Article

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

admin.site.register(Project, AdminProjectsOverview)
admin.site.register(Article, AdminArticlesOverview)
