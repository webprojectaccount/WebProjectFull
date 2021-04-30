from rest_framework import serializers
from datasforfront.models import Category, Products, Authors, AuthorOfBook

#First serializer.Serializer
class CategorySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    pict =serializers.CharField()
    def create(self, validated_data):
        category = Category.objects.create(name=validated_data.get('name'),pict=validated_data.get('pict'))
        return category

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.pict = validated_data.get('pict',instance.pict)
        instance.save()
        return instance

#Second serializer.Serializer
class AuthorsSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    pict =serializers.CharField()

    def create(self, validated_data):
        author = Authors.objects.create(name=validated_data.get('name') , pict= validated_data.get('pict'))
        return author

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.pict =validated_data.get('pict',instance.pict)
        instance.save()
        return instance

#First serializer.ModelSerializer
class ProductsSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)
    author = AuthorsSerializer(read_only=True)
    category_id = serializers.IntegerField(write_only=True)
    authors_id = serializers.IntegerField(write_only=True)

    class Meta:
        model = Products
        fields = ('id', 'name', 'description', 'price', 'pict', 'category', 'rating', 'category_id', 'author', 'authors_id')

#Second serializer.ModelSerializer
class AuthorOfBookSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    name_of_author = serializers.CharField()
    book_name = serializers.CharField()

    class Meta:
        model = AuthorOfBook
        fields = ('id', 'name_of_author', 'book_name')
