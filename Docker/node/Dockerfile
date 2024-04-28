FROM node

# Crie o diretório de trabalho no container
WORKDIR /home/app

# Copie os arquivos do aplicativo no diretório de trabalho do container
COPY . .

# Exponha a porta 3000
EXPOSE 3000

# Execute antes de iniciar o aplicativo no container
RUN npm install

# Inicie o aplicativo
CMD ["npm", "start"]

# Criar imagem Docker com o comando:
# sudo docker build -t thiago/webacademy-docker .

# Rodar a imagem Docker com o comando:
# sudo docker run --name webacademy-docker -p 3000:3000 thiago/webacademy-docker
