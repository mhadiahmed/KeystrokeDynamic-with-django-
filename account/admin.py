from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin

from .forms import CustomUserCreateForm, CustomUserChangeForm
from .models import CustomUser

class CustomUserAdmin(UserAdmin):
	add_form = CustomUserCreateForm
	form = CustomUserChangeForm
	model = CustomUser
	list_display = ['email', 'username','finger_printe']
	list_display_links = ['username']
	fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Personal info', {'fields': ('first_name','finger_printe',)}),
       
    )
	add_fieldsets =(
		('finger printe',{'fields':('finger_printe',)}),)
	
admin.site.register(CustomUser, CustomUserAdmin)
