@ECHO OFF
cd server
start cmd.exe /c "docker build -t tumie_server ."
cd ../tumie_frontend
start cmd.exe /c "docker build -t tumie_frontend ."


start cmd.exe /c "docker run -it -p 5000:5000 --rm --name tumie_server tumie_server"
start cmd.exe /c "docker run -it -p 8080:8080 --rm --name tumie_frontend tumie_frontend"
@REM start /bchrome https://localhost:8080
