from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Resume(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    file = models.FileField(upload_to='resumes/')
    uploaded_at = models.DateTimeField(auto_now_add=True)
    parsed_text = models.TextField(blank=True)

    def __str__(self):
        return f"Resume ({self.id})"
    
class Job(models.Model):
    title = models.CharField(max_length=255)
    description = models.CharField()
    skill_required = models.TextField(blank=True)
    posted_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    is_online = models.BooleanField(default=False)

    def __str__(self):
        return self.title
    
class JobApplication(models.Model):
    resume = models.ForeignKey(Resume, on_delete=models.CASCADE)
    job = models.ForeignKey(Job, on_delete=models.CASCADE)
    matched_score = models.FloatField(default=0.0)
    missing_keywords = models.TextField(blank=True)

    def __str__(self):
        return f"Application: Resume {self.resume.id} - Job {self.job.title}"

