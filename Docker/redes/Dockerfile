FROM ubuntu:latest

RUN apt-get update -y
RUN apt-get install -y iputils-ping

CMD ["sleep", "1d"]


# Criar imagem Docker com o comando:
# sudo docker build -t  thiago/redes .

# Criar um tunel de rede com o comando:
# sudo docker network create -d bridge rede_webacademy

# listar as redes criadas:
# sudo docker network ls

# inspecionar a rede criada:
# sudo docker network inspect rede_webacademy

# remover a rede criada:
# sudo docker network rm rede_webacademy

# criar um container na rede rede_webacademy com o comando:
# sudo docker run -d --name webacademy-redes-1 --network rede_webacademy thiago/redes
# sudo docker run -d --name webacademy-redes-2 --network rede_webacademy thiago/redes

# executar um ping no container webacademy-redes-1 para o container webacademy-redes-2 com o comando:
# sudo docker exec -it webacademy-redes-1 ping 172.18.0.3


#----------Tipo de Drives de Rede----------#
#   - bridge: Define um túnel de comunicação entre contêineres 
#   - host:   Define um túnel de comunicação de um contêiner com o servidor
#   - null:   Não define nenhum túnel de comunicação, impedindo comunicação externa


 
