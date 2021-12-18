from rest_framework import serializers
from .models import Post, Comment,Like
from django.contrib.auth.models import User


#We determine the areas we want to present from the api according to the models.

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'is_staff']

class PostSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Post
        fields = ['url',"image", 'content', 'author',"created_at","likes_count","comments_count"]

class CommentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Comment
        fields = ['url', 'post',"user","content","created_at"]

class LikeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Like
        fields = ['url', 'post',"user","created_at"]