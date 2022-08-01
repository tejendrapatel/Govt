from django.db import models
from django.contrib.auth.models import User
from django.db.models.fields import IntegerField
from djrichtextfield.models import RichTextField


class CoreTeam(models.Model):
    name =  models.CharField(max_length=50)
    Designation =  models.CharField(max_length=50)
    detail = RichTextField(null=True)
    image = models.FileField(null=True)
    date = models.DateField(null=True)
    def __str__(self):
        return self.name

class TeamMember(models.Model):
    name =  models.CharField(max_length=50)
    Designation =  models.CharField(max_length=50)
    detail = RichTextField(null=True)
    image = models.FileField(null=True)
    date = models.DateField(null=True)
    def __str__(self):
        return self.name

class OurPartner(models.Model):
    name =  models.CharField(max_length=50)
    Designation =  models.CharField(max_length=50)
    detail = RichTextField(null=True)
    image = models.FileField(null=True)
    date = models.DateField(null=True)
    def __str__(self):
        return self.name

class Blog_category(models.Model):
    name = models.CharField(max_length=100)
    def __str__(self):
        return self.name


class Blogs(models.Model):
    categorys = models.ForeignKey(Blog_category, on_delete=models.CASCADE, null=True)
    name =  models.CharField(max_length=50)
    detail = models.TextField(null=True)
    discription = RichTextField(null=True)
    image = models.FileField(null=True)
    date = models.DateField(auto_now=True)
    def __str__(self):
        return self.name


class Story_category(models.Model):
    name = models.CharField(max_length=100)
    image = models.FileField(null=True)
    para = models.TextField(null=True)
    def __str__(self):
        return self.name


class Story(models.Model):
    categorys = models.ForeignKey(Story_category, on_delete=models.CASCADE, null=True)
    name =  models.CharField(max_length=50)
    detail = models.TextField(null=True)
    discription = RichTextField(null=True)
    image = models.FileField(null=True)
    date = models.DateField(auto_now=True)
    def __str__(self):
        return self.name



######################PROJECT###############

class faqss(models.Model):
    quction =  models.CharField(null=True,max_length=50)
    answer = models.TextField(null=True)
############################################

######################IMPACT###############

class StoriesOfChange(models.Model):
    name =  models.CharField(max_length=300)
    detail = models.TextField(null=True)
    discription = RichTextField(null=True)
    image = models.FileField(null=True)
    date = models.DateField(auto_now=True)
    def __str__(self):
        return self.name
############################################