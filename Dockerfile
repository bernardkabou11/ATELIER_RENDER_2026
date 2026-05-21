FROM python:3.9-slim

WORKDIR /app

# Installer les dépendances
COPY requirements.txt /app
RUN pip install --no-cache-dir -r requirements.txt

# Copier le reste du code
COPY . /app

# Exposer le port utilisé par Flask
EXPOSE 5000

# Lancer l'application
CMD ["python", "app.py"]
