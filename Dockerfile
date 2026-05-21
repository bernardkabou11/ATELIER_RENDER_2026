FROM python:3.9-slim

WORKDIR /app

# Installer les dépendances depuis app/requirements.txt
COPY app/requirements.txt /app/requirements.txt
RUN pip install --no-cache-dir -r /app/requirements.txt

# Copier le reste de l'application
COPY app/ /app

EXPOSE 5000

CMD ["python", "app.py"]