from django.urls import path
from . import views

urlpatterns = [
    path('save-users/', views.save_users),
    path('get-users/', views.get_users),
]
