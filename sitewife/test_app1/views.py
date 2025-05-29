from django.shortcuts import render


def home(request):
    return render(request, 'test_app1/home.html')

def page_not_found(request, exception):
    return render(request, 'test_app1/404.html', status=404)

