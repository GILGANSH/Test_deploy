from django.shortcuts import render

# Create your views here.

import time

def index(request):
    return render(request, 'application_1/index.html')


def done(request):
    return render(request, 'application_1/done.html')