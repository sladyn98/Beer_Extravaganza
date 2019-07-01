from rest_framework import serializers

from beer_platform.models import BeerCard
from django.contrib.auth.models import User


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True, 'required': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user


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

