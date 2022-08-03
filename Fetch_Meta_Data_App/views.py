# Admin libraries
from django.shortcuts import render
from django.http import HttpResponse
from Fetch_Meta_Data_App.utils_functions.functions import handle_uploaded_file
from .forms import FileUpload

# Fetch metadata packages


# Create your views here.
def upload_file(request):
    if request.method == 'POST':
        form = FileUpload(request.POST, request.FILES)
        if form.is_valid():
            handle_uploaded_file(request.FILES['user_file'])
            return HttpResponse('File Uploaded Succesfully!')
    else:
        form = FileUpload()
    return render(request, 'index.html', {'form': form})
