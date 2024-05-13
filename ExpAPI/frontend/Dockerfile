FROM node:20-alpine

WORKDIR /app

COPY package*.json .

RUN npm install

EXPOSE 4477

COPY . .

CMD ["npm","start"]

# sudo docker build -t frontend_loja .

#  sudo docker run --name  loja_docker_frontend  -v /home/thiago/Documentos/WebAcademy_T3/ExpAPI/frontend/src:/app/src/ -p4477:4477 frontend_loja