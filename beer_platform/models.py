from django.db import models
from django.contrib.auth.models import AbstractBaseUser, UserManager

# Create your models here.


class BeerCard(models.Model):

    imageUrl = models.URLField(null=True)
    brewer = models.CharField(max_length=200, null=True)
    price = models.IntegerField()
    rating = models.CharField(max_length=10)
    servingType = models.CharField(max_length=200)
    flavourDesc = models.TextField()
    upVotes = models.IntegerField()
    downVotes = models.IntegerField()


def __str__(self):
    return '%s %s %s %s %s %s %s %s' % (self.brewer, self.price, self.rating, self.servingType, self.flavourDesc,
                                        self.upVotes, self.downVotes, self.imageUrl)



