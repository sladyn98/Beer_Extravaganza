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


""" 
  BeerList is used to get the list of beers in the database
  
   Parameters: 
   A standard API view
   
   Request
   GET
   http://127.0.0.1:8000/beer_list

   Response: 
   A response body of the form:
   [
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

"""

class BeerList(APIView):

    def get(self, request):
        beer_list = BeerCard.objects.all()
        serializer = BeerCardSerializer(beer_list, many=True)
        return Response(serializer.data)


""" 
  BeerCardUpvoteView is used to upvote a particular beer card.

   Parameters: 
   A standard API view

   Request
   POST
   http://127.0.0.1:8000/beer_upvote/{pk}
   
   eg:
   http://127.0.0.1:8000/beer_upvote/2

   Response: 
   A response body of the form:
   [
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

"""
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


""" 
  BeerCardDownVoteView is used to downvote a particular beer card.

   Parameters: 
   A standard API view

   Request
   POST
   http://127.0.0.1:8000/beer_downvote/{pk}

   eg:
   http://127.0.0.1:8000/beer_downvote/2

   Response: 
   A response body of the form:
   [
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

"""
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


""" 
   IndividualBeerView is used to get information about a particular beer card.

   Parameters: 
   A standard API view

   Request
   POST
   http://127.0.0.1:8000/beer/{pk}

   eg:
   http://127.0.0.1:8000/beer/2

   Response: 
   A response body of the form:
   [
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

"""
class IndividualBeerView(APIView):

    def post(self, request,pk):
        model = get_object_or_404(BeerCard, pk=pk)
        serializer = BeerCardSerializer(model)
        return Response(serializer.data)


""" 
   AddBeerView is used to upload a new Beer Card.

   Parameters: 
   A standard API view

   Request
   POST
   http://127.0.0.1:8000/beer/data
   
   RequestBody
   data = [
   
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

   eg:
   http://127.0.0.1:8000/beer/data

   Response: 
   A response body of the form:
   [
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

"""
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


