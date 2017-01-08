
from django.template import loader
from django.shortcuts import render, render_to_response
from django.views.generic.edit import CreateView, BaseCreateView, BaseDetailView,DeleteView
from django.views.generic import ListView
from django.forms import Form
from django.http import JsonResponse

# Create your views here.


def index(request):
    template = loader.get_template('fitheart/index.html')
    context ={
    }
    return render(request, 'fitheart/index.html', context)
