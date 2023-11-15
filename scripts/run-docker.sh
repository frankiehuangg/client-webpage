docker build -t client-webpage:latest .
docker-compose down -v
docker-compose up --build