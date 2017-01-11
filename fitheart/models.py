from __future__ import unicode_literals

from django.db import models
from django.utils.timezone import now

from django.db import models
from tinymce.models import HTMLField
#from froala_editor.fields import FroalaField
#from froala_editor.widgets import FroalaEditor
from django import forms

class Page(models.Model):
    content= models.TextField()
  #content = FroalaField()

# Create your models here.
class ProductGroup(models.Model):
    name = models.CharField(max_length=100, default="")
    #products = models.ForeignKey(Product, on_delete=models.CASCADE)
    url = models.CharField(max_length=100, default="")
    img = models.ImageField()
    def __str__(self):
        return ' '.join([
            self.name,
        ])



class Product(models.Model):
    """
        Product
    """
    name = models.CharField(max_length=100, default="")
    model = models.CharField(max_length=100,  default="")
    #url = models.URLField( default="")
    description = models.TextField(max_length=200,  default="")
    product_group = models.ForeignKey(ProductGroup, on_delete=models.CASCADE)
    def __str__(self):
        return ' '.join([
            self.name,
            self.model,
        ])


class Articles(models.Model):
    title = models.CharField(max_length =100, default="")
    author = 'bichkhe'
    img_icon = models.ImageField()
    img = models.ImageField()
    content_shortcut = models.TextField(max_length=200, default ="")
    content = models.TextField(max_length=2000, default="")
    #content = FroalaField(plugins=('font_size', 'font_family'), options={
    #toolbarInline': True,
    #})
    content_editor = HTMLField()
    #content = models.TextField(widget=FroalaEditor)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    def __str__(self):
        return ' '.join([
            self.title,
            "-",
            self.author
        ])




