# from django.db import models

# class Task(models.Model):
#     title = models.CharField(max_length=255)
#     description = models.TextField()
#     completed = models.BooleanField(default=False)
#     created_at = models.DateTimeField(auto_now_add=True)
#     updated_at = models.DateTimeField(auto_now=True)

#     def __str__(self):
#         return self.title

from django.db import models

class Todo(models.Model):
    text = models.CharField(max_length=255)
    completed = models.BooleanField(default=False)

    def __str__(self):
        return self.text


