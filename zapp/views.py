from django.shortcuts import render,redirect,get_object_or_404
from django.contrib.auth import authenticate,login,logout
from zapp.models import *
from django.shortcuts import render,redirect
from django.template.loader import get_template
from django.http import HttpResponse
from django.template.loader import get_template
from django.core.mail import EmailMultiAlternatives
from Govt.settings import EMAIL_HOST_USER
from django.contrib.auth.models import User


def Home(request):
    sto = Story_category.objects.all()
    d = {"sto":sto}
    return render(request, 'frontend/index.html',d)

def STORYOFCHANGE(request):
    sto = Story_category.objects.all()
    d = {"sto":sto}
    return render(request, 'frontend/Story_category.html',d)

####################EXPLORE#######################

def EXPLORE(request):
    sto = Story_category.objects.all()
    d = {"sto":sto}
    return render(request, 'explore/explore.html',d)

def GOAL(request):
    return render(request, 'explore/goal.html')

def NETWORK(request):
    return render(request, 'explore/network.html')

def BASIN(request):
    return render(request, 'explore/basin.html')

def ABOUT_US(request):
    return render(request, 'explore/about_us.html')

def ABOUT_TEAM(request):
    CT = CoreTeam.objects.all()
    TM = TeamMember.objects.all()
    OP = OurPartner.objects.all()
    d = {"ct":CT,"tm":TM,"op":OP}
    return render(request, 'explore/about_team.html',d)

def VILLAGE(request):
    return render(request, 'explore/village.html')

def LOCATION(request):
    return render(request, 'explore/location.html')

def VIDEOS(request):
    return render(request, 'explore/videos.html')

def AUDIOS(request):
    return render(request, 'explore/Audios.html')

def BLOGS(request):
    blo = Blogs.objects.all()
    d = {"blo":blo}
    return render(request, 'explore/Blogs.html',d)










####################JOURNEY#######################

def STORY(request):
    return render(request, 'journey/story.html')

def JOURNEY(request):
    return render(request, 'journey/journey.html')

def FIRSTSTEP(request):
    return render(request, 'journey/firststep.html')

def IMPLEMENTATION(request):
    return render(request, 'journey/implementation.html')

def ESTABLISHMENT_OF_PMU(request):
    return render(request, 'journey/establishment_of_pmu.html')

##################################################

####################PROJECT#######################

def PROJECT(request):
    return render(request, 'project/project.html')

def FAQS(request):
    fa = faqss.objects.all()
    d = {"fa": fa}
    return render(request, 'project/faqs.html',d)

def MOHANPURA(request):
    return render(request, 'project/mohanpura.html')

def KUNDALIYA(request):
    return render(request, 'project/kundaliya.html')

def MAPDETAIL(request):
    return render(request, 'project/mapdetail.html')


##################################################

####################IMPACT#######################

def IMPACT(request):
    return render(request, 'impact/impact.html')

def STORIESOFCHANGE(request):
    sto = StoriesOfChange.objects.all()
    d = {"sto": sto}
    return render(request, 'impact/storiesofchange.html',d)

def RESOURCES(request):
    return render(request, 'impact/resources.html')

def PEOPLESVOICE(request):
    return render(request, 'impact/peoplesvoice.html')

def LEARN(request):
    
    return render(request, 'impact/learn.html')

def WORKSHOP(request):

    return render(request, 'impact/workshop.html')



##################################################


####################DYNAMIC#######################

def CORETEAMDYNAMIC(request,blo_id):
    cat = CoreTeam.objects.get(id=blo_id)
    d = {"cat":cat,}
    return render(request, 'dynamic/team.html',d)

def TEAMMEMBERDYNAMIC(request,blo_id):
    cat = TeamMember.objects.get(id=blo_id)
    d = {"cat":cat,}
    return render(request, 'dynamic/team.html',d)

def OURPARTNERDYNAMIC(request,blo_id):
    cat = OurPartner.objects.get(id=blo_id)
    d = {"cat":cat,}
    return render(request, 'dynamic/team.html',d)

def BLOGDETAIL(request,blo_id):
    cat = Blogs.objects.get(id=blo_id)
    d = {"cat":cat,}
    return render(request, 'dynamic/Blog_dynamic.html',d)

def STORYDETAIL(request,blo_id):
    cat = Story_category.objects.get(id=blo_id)
    subdata = Story.objects.filter(categorys= cat)
    d = {"subdata":subdata,"cat":cat}
    return render(request, 'dynamic/storydetail.html',d)

def STORYDETAILDETAIL(request,bloo_id):
    cat = Story.objects.get(id=bloo_id)
    d = {"cat":cat}
    return render(request, 'dynamic/storydetaildetail.html',d)