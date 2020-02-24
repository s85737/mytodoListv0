from rest_framework import serializers
from .models import MytodoPosts
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')


class PostSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = MytodoPosts
        fields = (
            'user',
            'id',
            'priority',
            'content',
            'author',
            'date_posted',
            'checked',
        )

        read_only_fields = ('created_at',)