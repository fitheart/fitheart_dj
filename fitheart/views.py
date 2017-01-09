
from django.template import loader
from django.shortcuts import render, render_to_response
from django.views.generic.edit import CreateView, BaseCreateView, BaseDetailView,DeleteView
from django.views.generic import ListView
from django.forms import Form
from django.http import JsonResponse
from .models import (ProductGroup, Product, Articles)

# Create your views here.


def index(request):
    template = loader.get_template('fitheart/index.html')
    product_grp_list = ProductGroup.objects.all()

    context ={
        'product_grp_list': product_grp_list,
    }
    return render(request, 'fitheart/index.html', context=context)

def product_reviews(request):
    template = loader.get_template('fitheart/product_reviews.html')
    context ={
    }
    return render(request, 'fitheart/product_reviews.html', context)

def product_review_detail(request, id):
    print "id:" , id
    pro_grp = ProductGroup.objects.get(id=id)
    print "group:" + pro_grp.name
    template = loader.get_template('fitheart/product_review_detail.html')
    articles = Articles.objects.all()
    context ={
        'group_id': pro_grp.id,
        'group_name': pro_grp.name,
        'article': articles,
    }
    return render(request, 'fitheart/product_review_detail.html', context)

