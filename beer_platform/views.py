from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import viewsets

from .models import BeerCard
from .serializers import BeerCardSerializer
from .serializers import UserSerializer
from django.contrib.auth.models import User


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class BeerList(APIView):

    def get(self, request):
        beer_list = BeerCard.objects.all()
        serializer = BeerCardSerializer(beer_list, many=True)
        return Response(serializer.data)

    def post(self):
        pass
