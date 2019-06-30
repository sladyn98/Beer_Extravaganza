from django.conf.urls import url, include
from django.contrib import admin
from rest_framework.urlpatterns import format_suffix_patterns
from beer_platform import views

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^beer_list', views.BeerList.as_view())
]
