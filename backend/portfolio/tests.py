from django.test import TestCase
from .models import Project, Article

class ProjectModelTest(TestCase):
    """Tests for the "Project" model fields"""
    @classmethod
    def setUpTestData(cls):
        Project.objects.create(
                               name="BGUN African Quiz", 
                               description="A BGUN African Quizz Platform for the Youth to understand Black Priviledge and History", 
                               github="https://github.com/marketplace/actions/deploy-to-clever-cloud", 
                               start_date="2024-01-01",  
                               end_date="2024-01-31"
                               )
        
    def test_name_content(self):
        project = Project.objects.get(id=1)
        expected_object_name = f'{project.name}'
        self.assertEquals(expected_object_name, 'BGUN African Quiz')

    def test_description_content(self):
        project = Project.objects.get(id=1)
        expected_object_name = f'{project.description}'
        self.assertEquals(expected_object_name, 'A BGUN African Quizz Platform for the Youth to understand Black Priviledge and History')

    def test_github_content(self):
        project = Project.objects.get(id=1)
        expected_object_name = f'{project.github}'
        self.assertEquals(expected_object_name, 'https://github.com/marketplace/actions/deploy-to-clever-cloud')  

    def test_start_date_content(self):
        project = Project.objects.get(id=1)
        expected_object_name = f'{project.start_date}'
        self.assertEquals(expected_object_name, '2024-01-01')

    def test_end_date_content(self):
        project = Project.objects.get(id=1)
        expected_object_name = f'{project.end_date}'
        self.assertEquals(expected_object_name, '2024-01-31')


