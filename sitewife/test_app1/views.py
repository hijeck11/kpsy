from django.shortcuts import render
from django.http import HttpResponse, HttpResponseNotFound

def home(request):
    return render(request, 'test_app1/home.html')

def contacts(request):
    return render(request, 'test_app1/contacts.html')

def reviews(request):
    return render(request, 'test_app1/reviews.html')


def page_not_found(request, exception):
    return HttpResponseNotFound("<h1>Страница не найдена</h1>")