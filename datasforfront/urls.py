from django.urls import path
from rest_framework_jwt.views import obtain_jwt_token
from datasforfront.views import CategoryList, CategoryDetail, author_list, author_detail, author_products,author_of_book, top_products,\
  category_products, Products_Detail, Products_List


urlpatterns = [
    path('login/', obtain_jwt_token),
    path('categories', CategoryList.as_view()),
    path('categories/<int:pk>', CategoryDetail.as_view()),
    path('categories/<int:pk>/products', category_products),
    path('authors', author_list),
    path('authors/<int:pk>', author_detail),
    path('authors/<int:pk>/products', author_products),
    path('products/<int:pk>/authors', author_of_book),
    path('products', Products_List.as_view()),
    path('products/<int:pk>', Products_Detail.as_view()),
    path('products/top', top_products)
  ]
