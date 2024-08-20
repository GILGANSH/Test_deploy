import os

bind = './test_project.sock'
workers = 3
worker_class = 'sync'
accesslog = '-'
errorlog = '-'

# Load your Django settings
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'test_project.settings')