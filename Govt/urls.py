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
  path('videos', VIDEOS, name='videos'),
  path('audios', AUDIOS, name='audios'),
  path('blogs', BLOGS, name='blogs'),
  path('about', ABOUT, name='about'),
  path('story', STORY, name='story'),
  path('explore', EXPLORE, name='explore'),
  path('learn', LEARN, name='learn'),
  path('workshop', WORKSHOP, name='workshop'),

  ##################DYNAMIC###################
  path('team1/<int:blo_id>/',CORETEAMDYNAMIC, name='CoreTeamDynamic'),
  path('team2/<int:blo_id>/',TEAMMEMBERDYNAMIC, name='TeamMemberDynamic'),
  path('team3/<int:blo_id>/',OURPARTNERDYNAMIC, name='OurPartnerDynamic'),
  path('Blog/<int:blo_id>/',BLOGDETAIL, name='blogdetail'),
  path('story/<int:blo_id>/',STORYDETAIL, name='story'),
  path('storydetaildetail/<int:bloo_id>/',STORYDETAILDETAIL, name='storydetaildetail'),
]+ static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)
