from django.db import models
from django.contrib.auth.models import AbstractBaseUser, UserManager

# Create your models here.

""" 
  BeerCard is the model chosen as per the user requirements.
  The fields are pretty much self-explanatory:P

"""


class BeerCard(models.Model):

    imageUrl = models.URLField(null=True)
    brewer = models.CharField(max_length=200, null=True)
    price = models.IntegerField()
    rating = models.CharField(max_length=10)
    servingType = models.CharField(max_length=200)
    flavourDesc = models.TextField()
    upVotes = models.IntegerField()
    downVotes = models.IntegerField()

# Required only if we wanted to get the fields as a string


def __str__(self):
    return self.upVotes




