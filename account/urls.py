from django.urls import path,re_path
from . import views

urlpatterns = [

    path('signup/', views.SignUp.as_view(), name='signup'),
    re_path(r'^validate_username/$', views.validate_username, name='validate_username'),
]