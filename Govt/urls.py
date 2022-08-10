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
  
  path('storyofchange', STORYOFCHANGE, name='storyofchange'),
  
  ##################EXPLORE###################
  path('explore', EXPLORE, name='explore'),
  path('goal', GOAL, name='goal'),
  path('network', NETWORK, name='network'),
  path('basin', BASIN, name='basin'),
  path('about_project', ABOUT_PROJECT, name='about_project'),
  path('about_team', ABOUT_TEAM, name='about_team'),
  path('village', VILLAGE, name='village'),
  path('location', LOCATION, name='location'),

  path('videos', VIDEOS, name='videos'),
  path('audios', AUDIOS, name='audios'),
  path('blogs', BLOGS, name='blogs'),
  ##################JOURNEY###################
  path('story', STORY, name='story'),
  path('journey', JOURNEY, name='journey'),
  path('firststep', FIRSTSTEP, name='firststep'),
  path('implementation', IMPLEMENTATION, name='implementation'),
  path('establishment_of_pmu', ESTABLISHMENT_OF_PMU, name='establishment_of_pmu'),

  ##################PROJECT###################
  path('project', PROJECT, name='project'),
  path('mapdetail', MAPDETAIL, name='mapdetail'),
  path('mohanpura', MOHANPURA, name='mohanpura'),
  path('kundaliya', KUNDALIYA, name='kundaliya'),
  path('faq', FAQS, name='faq'),

  ##################IMPACT###################
  path('impact', IMPACT, name='impact'),
  path('storiesofchange', STORIESOFCHANGE, name='storiesofchange'),
  path('resources', RESOURCES, name='resources'),
  path('peoplesvoice', PEOPLESVOICE, name='peoplesvoice'),
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
