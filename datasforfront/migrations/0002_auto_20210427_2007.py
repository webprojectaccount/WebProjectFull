# Generated by Django 2.2.20 on 2021-04-27 14:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('datasforfront', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='authors',
            options={'verbose_name': 'Author', 'verbose_name_plural': 'Authors'},
        ),
        migrations.AlterModelOptions(
            name='category',
            options={'verbose_name': 'Category', 'verbose_name_plural': 'Categories'},
        ),
        migrations.AlterModelOptions(
            name='products',
            options={'verbose_name': 'Product', 'verbose_name_plural': 'Products '},
        ),
    ]
