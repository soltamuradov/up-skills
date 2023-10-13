# syntax=docker/dockerfile:1

# Используем Node.js как базовый образ
FROM node:18.18

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

#Копируем package.json и package-lock.json
COPY package.json package-lock.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все оставшиеся файлы
COPY . .

# Указываем порт, который будет слушать приложение
EXPOSE 3000

# Запускаем приложение
CMD ["npm", "start"]