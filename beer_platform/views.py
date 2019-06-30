from rest_framework.views import APIView
from rest_framework.response import Response

from .models import BeerCard
from .serializers import BeerCardSerializer


class BeerList(APIView):

    def get(self, request):
        beer_list = BeerCard.objects.all()
        serializer = BeerCardSerializer(beer_list, many=True)
        return Response(serializer.data)

    def post(self):
        pass
