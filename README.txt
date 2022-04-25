docker build -t tumie_server .
docker run -it -p 5000:5000 --rm --name tumie_server tumie_server

docker build -t tumie_frontend .
docker run -it -p 8080:8080 --rm --name tumie_frontend tumie_frontend
