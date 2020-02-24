from rest_framework import viewsets
from .serializers import PostSerializer
from .models import MytodoPosts
from rest_framework import permissions
# Create your views here.

# function based view 는 사용자가 세세하게 코딩, generic view 는 간편하게 사용 코드간결

# get 방식으로 받을을 때는 todo_main/index.html 로 이동


class PostView(viewsets.ModelViewSet):
    queryset = MytodoPosts.objects.all()
    serializer_class = PostSerializer
#    permission_classes = (permissions.IsAuthenticated,)

    def perform_create(self, serializer):
        serializer.save()