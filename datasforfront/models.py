from django.db import models

#First model
class Category(models.Model):
  name = models.CharField(max_length=300)
  pict = models.CharField(max_length=300)

  class Meta:

    verbose_name = 'Category'
    verbose_name_plural = 'Categories'

#Manager model
class Top_List(models.Manager):
  def get_queryset(self):
    return super().get_queryset().filter(price='1650')

#Second model
class Authors(models.Model):
  name = models.CharField(max_length=300)
  pict = models.CharField(max_length=500)

  class Meta:
    verbose_name = 'Author'
    verbose_name_plural = 'Authors'

#Third model
class AuthorOfBook(models.Model):
  name_of_author = models.CharField(max_length=300, default='')
  book_name = models.CharField(max_length=300, default='')

  class Meta:
    verbose_name = 'Author Of Book'
    verbose_name_plural = 'Authors Of Books'

#Fourth model
class Products(models.Model):
  name = models.CharField(max_length=300)
  description = models.CharField(max_length=1000)
  price = models.CharField(max_length=300)
  pict = models.CharField(max_length=500)
  rating = models.IntegerField(range(1, 10), default=0)
  category = models.ForeignKey(Category, on_delete=models.CASCADE, default='', null = True)
  authors = models.ForeignKey(Authors, on_delete=models.CASCADE, default='' , null = True)
  author_book = models.ForeignKey(AuthorOfBook, on_delete=models.CASCADE, default='', null = True)

  class Meta:
    verbose_name = 'Product'
    verbose_name_plural = 'Products'

  objects = models.Manager()
  top_list = Top_List()
