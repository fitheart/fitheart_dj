
from django.template import loader
from django.shortcuts import render, render_to_response
from django.views.generic.edit import CreateView, BaseCreateView, BaseDetailView,DeleteView
from django.views.generic import ListView
from django.forms import Form
from django.http import JsonResponse
from .models import (ProductGroup, Product, Articles)
import logging
# Create your views here.
logger = logging.getLogger(__name__)

def index(request):
    template = loader.get_template('fitheart/index.html')
    product_grp_list = ProductGroup.objects.all()

    context ={
        'product_grp_list': product_grp_list,
    }
    return render(request, 'fitheart/index.html', context=context)

def product_reviews(request):
    product_grp_list = ProductGroup.objects.all()
    template = loader.get_template('fitheart/product_reviews.html')
    context ={
        'product_grp_list': product_grp_list,
    }
    return render(request, 'fitheart/product_reviews.html', context)

def product_review_detail(request, id):
    product_grp_list = ProductGroup.objects.all()
    pro_grp = ProductGroup.objects.get(id=id)
    logging.info("ID="+  id + "GROUP NAME =" + pro_grp.name)
    #print "group:" + pro_grp.name
    template = loader.get_template('fitheart/product_review_base.html')
    articles = Articles.objects.filter(product__product_group_id=id)
    context ={
        'product_grp_list': product_grp_list,
        'group_id': pro_grp.id,
        'group_name': pro_grp.name,
        'article': articles,
    }
    return render(request, 'fitheart/product_review_base.html', context)

def article(request, id):
    product_grp_list = ProductGroup.objects.all()
    article = Articles.objects.get(pk=id)
    product = article.product
    product_group = product.product_group
    logging.info("ID="+  id + "GROUP NAME =" + product_group.name)
    #print "group:" + pro_grp.name
    template = loader.get_template('fitheart/article_base.html')
    article = Articles.objects.get(pk=id)
    context ={
        'product_grp_list': product_grp_list,
        'group_id': product_group.id,
        'group_name': product_group.name,
        'article': article,
    }
    return render(request, 'fitheart/article_base.html', context)
