from rest_framework import serializers

from beer_platform.models import BeerCard
from django.contrib.auth.models import User

""" 
  UserSerializer is used to serialize and deserialize the usermodel.
  The model for this has been chosen according to the srs document.
   Parameters: 
   A standard Django Provided model Serializer

   Returns: 
   A model for the User.

"""


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True, 'required': True},
                        'email': {'required': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)

        return user


""" 
   BeerCardSerializer is used to serialize and deserialize the data.
   The model for this has been chosen according to the srs document.
    Parameters: 
    A standard ModelSerializer

    Returns: 
    A model for the BeerCard

"""


class BeerCardSerializer(serializers.ModelSerializer):
    class Meta:
        model = BeerCard
        fields = [
            'pk',
            'imageUrl',
            'brewer',
            'price',
            'rating',
            'servingType',
            'flavourDesc',
            'upVotes',
            'downVotes',
        ]

