from django.shortcuts import render
from django.views.generic.detail import DetailView

from mytodomain.models import MytodoPosts


def index(request):
    return render(request, 'frontend/index.html')


class TodoDetailView(DetailView):
    model = MytodoPosts
    template_name = 'frontend/index.html'