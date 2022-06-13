from django.contrib import admin
from django.urls import path
from zapp.views import *
from django.conf.urls.static import static
from django.conf import settings
from django.conf.urls import include

urlpatterns = [
  path('djrichtextfield/', include('djrichtextfield.urls')),
  path('admin/', admin.site.urls),
  path('', Home, name='home'),
]+ static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)