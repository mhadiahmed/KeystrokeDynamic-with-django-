from django import forms
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from .models import CustomUser

class CustomUserCreateForm(UserCreationForm):
	#finger_printe = forms.CharField(widget=forms.HiddenInput())
	class Meta:
		model = CustomUser
		fields = ('username','email','finger_printe')
		widgets = {'finger_printe': forms.HiddenInput()}



class CustomUserChangeForm(UserChangeForm):

	class Meta:
		model = CustomUser
		fields = ('username', 'email','finger_printe')
		
