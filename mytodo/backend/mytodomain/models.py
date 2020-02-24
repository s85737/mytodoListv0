from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
# Create your models here.

class MytodoPosts(models.Model):
    id = models.AutoField(primary_key=True)
    priority = models.IntegerField(default=3)
    content = models.CharField(max_length=50)
    author = models.ForeignKey(User, related_name="leads", on_delete=models.CASCADE, null=True)
    date_posted = models.DateTimeField(default=timezone.now)
    checked = models.BooleanField(default=False)


    def __self__ (self):
        return self.author