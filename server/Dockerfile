FROM node:lts-alpine
WORKDIR /server
# копируем оба 'package.json' и 'package-lock.json' (если есть)
COPY package*.json ./

# устанавливаем зависимости проекта
RUN npm install
# копируем файлы и каталоги проекта в текущий рабочий каталог (т.е. в каталог 'app')
COPY . .

# осбождаем порт 5000
EXPOSE 5000

# запуск команды в командной строке
CMD [ "node", "server.js" ]