from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import int_list_validator
# Create your models here.


class CustomUser(AbstractUser):
	finger_printe = models.TextField(validators=[int_list_validator])
	class Meta:
		verbose_name = "CustomUser"
		verbose_name_plural = "CustomUsers"

	def __str__(self):
		return self.username
    