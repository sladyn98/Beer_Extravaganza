from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import viewsets, status
from rest_framework import generics
from django.shortcuts import get_object_or_404
from django.forms.models import model_to_dict


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


class BeerCardUpvoteView(APIView):

    def post(self, request, pk):
        model = get_object_or_404(BeerCard, pk=pk)
        actual_votes = BeerCardSerializer(model).data["upVotes"]
        data = {"upVotes": str(actual_votes + 1)}
        serializer = BeerCardSerializer(model, data=data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
            # return a meaningful error response
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# PostAPI
class BeerCardDownvoteView(APIView):

    def post(self,request,pk):
        model = get_object_or_404(BeerCard, pk=pk)
        actual_votes = BeerCardSerializer(model).data["downVotes"]
        data = {"downVotes": str(actual_votes + 1)}
        serializer = BeerCardSerializer(model, data=data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
            # return a meaningful error response
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class IndividualBeerView(APIView):

    def post(self, request,pk):
        model = get_object_or_404(BeerCard, pk=pk)
        serializer = BeerCardSerializer(model)
        return Response(serializer.data)


class AddBeerView(APIView):

    def post(self, request):

        data = {"imageUrl": request.data.get('imageUrl'),
                "brewer": request.data.get('brewer'),
                "price": request.data.get('price'),
                "rating": request.data.get('rating'),
                "servingType": request.data.get('servingType'),
                "flavourDesc": request.data.get('flavourDesc'),
                "upVotes": request.data.get('upVotes'),
                "downVotes": request.data.get('downVotes')}

        serializer = BeerCardSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
            # return a meaningful error response
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)




# Form validation
