# Generated by Django 2.2.20 on 2021-04-29 20:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('datasforfront', '0002_auto_20210427_2007'),
    ]

    operations = [
        migrations.CreateModel(
            name='AuthorOfBook',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=300)),
            ],
            options={
                'verbose_name': 'AuthorOfBook',
                'verbose_name_plural': 'AuthorOfBooks',
            },
        ),
        migrations.AlterModelOptions(
            name='products',
            options={'verbose_name': 'Product', 'verbose_name_plural': 'Products'},
        ),
    ]
