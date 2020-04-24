from django.contrib import admin
from api.models import Products,Authors,Category
# Register your models here.
admin.site.register(Products)
admin.site.register(Category)
admin.site.register(Authors)