FROM python:3.9-slim

WORKDIR /app

# Installer les dépendances
COPY requirements.txt /app/requirements.txt
RUN pip install --no-cache-dir -r /app/requirements.txt

# Copier tout le projet (backend + frontend build)
COPY . /app

EXPOSE 5000

CMD ["python", "app.py"]
