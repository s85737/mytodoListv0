# Generated by Django 3.0.3 on 2020-02-21 08:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mytodomain', '0004_auto_20200221_1340'),
    ]

    operations = [
        migrations.CreateModel(
            name='Todo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('task', models.CharField(max_length=255)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
