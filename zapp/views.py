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
    return render(request, 'frontend/index.html')


def VIDEOS(request):
    return render(request, 'frontend/videos.html')

def AUDIOS(request):
    return render(request, 'frontend/Audios.html')

def BLOGS(request):
    blo = Blogs.objects.all()
    d = {"blo":blo}
    return render(request, 'frontend/Blogs.html',d)

def ABOUT(request):
    CT = CoreTeam.objects.all()
    TM = TeamMember.objects.all()
    OP = OurPartner.objects.all()
    d = {"ct":CT,"tm":TM,"op":OP}
    return render(request, 'frontend/About.html',d)



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