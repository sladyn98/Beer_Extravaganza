from rest_framework import serializers

from beer_platform.models import BeerCard


class BeerCardSerializer(serializers.ModelSerializer):
    class Meta:
        model = BeerCard
        fields = [
            'pk',
            'brewer',
            'price',
            'rating',
            'servingType',
            'flavourDesc',
            'upVotes',
            'downVotes',
        ]

