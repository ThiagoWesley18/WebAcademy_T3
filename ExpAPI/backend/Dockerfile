FROM node:20-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npx prisma generate

EXPOSE 4466

CMD ["npm", "start"]

# sudo docker build -t backend_loja .

# sudo docker run --name  loja_docker_backend  -v /home/thiago/Documentos/WebAcademy_T3/ExpAPI/backend/src:/app/src/ -p4466:4466 backend_loja