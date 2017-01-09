from __future__ import unicode_literals

from django.db import models

# Create your models here.
class ProductGroup(models.Model):
    name = models.CharField(max_length=100, default="")
    #products = models.ForeignKey(Product, on_delete=models.CASCADE)
    url = models.CharField(max_length=100, default="")
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
    date_created = models.DateTimeField()
    content= models.TextField(max_length=2000, default="")