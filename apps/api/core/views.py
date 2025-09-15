from django.shortcuts import render

# Create your views here.
# api/core/views.py
from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny

@api_view(['GET'])
@permission_classes([AllowAny])
def health_check(request):
    return JsonResponse({"status": "ok"})