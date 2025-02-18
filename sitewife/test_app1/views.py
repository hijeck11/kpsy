from django.shortcuts import render
from django.http import HttpResponse, HttpResponseNotFound

def home(request):
    return render(request, 'test_app1/home.html')

def test1(request):
    return render(request, 'test_app1/test-stress.html')

def page_not_found(request, exception):
    return HttpResponseNotFound("<h1>Страница не найдена</h1>")