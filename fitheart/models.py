from __future__ import unicode_literals

from django.db import models

class Product(models.Model):
    """
        Product
    """
    name = models.CharField(max_length=100, default="")
    model = models.CharField(max_length=100,  default="")
    url = models.URLField( default="")
    description = models.TextField(max_length=200,  default="")
    def __init__(self):
        self.name = ""
        self.model = ""
        self.description = ""

    def __str__(self):
        return ' '.join([
            self.name,
            self.model,
        ])


# Create your models here.
class ProductGroup(models.Model):
    name = models.CharField(max_length=100)
    products = models.ForeignKey(Product, on_delete=models.CASCADE)
    def __init__(self):
        self.name = ""

    def __str__(self):
        return ' '.join([
            self.name,
        ])


