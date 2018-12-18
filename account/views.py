from django.shortcuts import render

from django.urls import reverse_lazy
from django.views import generic
from .models import CustomUser
from .forms import CustomUserCreateForm
from django.http import JsonResponse,HttpResponse
from django.core import serializers
from django.core.serializers.json import DjangoJSONEncoder
def home(request):
	querysets = CustomUser.objects.all()
	context = {
	'querysets':querysets,
	}
	return render(request,'home.html',context)




def validate_username(request):
	username = request.GET.get('username', None)
	data = {
		'is_taken': CustomUser.objects.filter(username__iexact=username).exists()
	}
	if data['is_taken']:
		#data = CustomUser.objects.filter(username__iexact=username).values('finger_printe')
		# data = serializers.serialize("json", CustomUser.objects.filter(username__iexact=username),cls=DjangoJSONEncoder)
		data = dict(genres=list(CustomUser.objects.filter(username__iexact=username).values('finger_printe')))
	return JsonResponse(data,safe=False)

class SignUp(generic.CreateView):
    form_class = CustomUserCreateForm
    success_url = reverse_lazy('login')
    template_name = 'singup.html'