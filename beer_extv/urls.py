from django.conf.urls import url, include
from django.contrib import admin
from rest_framework.urlpatterns import format_suffix_patterns
from beer_platform import views

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^beer_list', views.BeerList.as_view()),
    url(r'^user_list/', include('beer_platform.urls')),
    url(r'^beer_upvote/(?P<pk>\d+)/$', views.BeerCardUpvoteView.as_view()),
    url(r'^beer_downvote/(?P<pk>\d+)/$', views.BeerCardDownvoteView.as_view()),

]
