from django.urls import path
from . import views



urlpatterns = [
    path('', views.home, name='home'),
    path('test-stress/', views.test1, name='test1'),
]