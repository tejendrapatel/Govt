from django.contrib import admin
from zapp.models import*

# Register your models here.
admin.site.register(CoreTeam)
admin.site.register(TeamMember)
admin.site.register(OurPartner)

admin.site.register(Story_category)
admin.site.register(Story)
################EXPLORE################
admin.site.register(Blog_category)
admin.site.register(Blogs)
admin.site.register(Gallery)
################PROJECT################
admin.site.register(faqss)

################IMPACT################
admin.site.register(StoriesOfChange)