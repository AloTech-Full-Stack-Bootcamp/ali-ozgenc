from django.contrib import admin
from . import models


class CommentInline(admin.TabularInline):
    model = models.Comment
    extra = 0
    readonly_fields = ("content",)
    can_delete = False

    def has_add_permission(self,request, obj):
        return False

class LikeInline(admin.TabularInline):
    model = models.Like
    extra = 0
    readonly_fields = ("user",)
    can_delete = False

    def has_add_permission(self,request, obj):
        return False


class PostAdmin(admin.ModelAdmin):
    list_display = ["id","content","author","created_at","like_comment_count"]
    list_filter = ["author","created_at"]
    search_fields = ["content","author__username"]
    inlines = [CommentInline,LikeInline]
    
    def like_comment_count(self,post):
        return f"{post.likes_count}/{post.comments_count}"
    

class LikeAdmin(admin.ModelAdmin):
    list_display = ["id","post","user"]
    list_filter = ["created_at"]
    autocomplete_fields = ["post","user"]


    
admin.site.register(models.Post, PostAdmin)
admin.site.register(models.Like, LikeAdmin)
admin.site.register(models.Comment)

# Register your models here.
