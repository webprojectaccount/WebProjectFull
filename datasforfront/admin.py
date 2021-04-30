from django.contrib import admin

from datasforfront.models import Products,Authors, AuthorOfBook, Category
# Register your models here.
admin.site.register(Products)
admin.site.register(Category)
admin.site.register(Authors)
admin.site.register(AuthorOfBook)