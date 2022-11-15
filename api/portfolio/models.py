from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=255)
    short_description = models.TextField()
    long_description = models.TextField()
    image = models.ImageField(upload_to='uploads/')
    engine_language = models.CharField(max_length=255)
    operating_system = models.CharField(max_length=255)
    last_date_updated = models.DateField()
    project_type = models.CharField(max_length=255)
    tags = models.CharField(max_length=255)
    repository_link = models.URLField()
    external_link = models.URLField()
    itch_link = models.URLField()
    play_link = models.URLField()
    ordinal = models.IntegerField()
 
 