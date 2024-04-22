import {cadastro, atualiza, deleta} from "./connetMeDAO"

cadastro();

atualiza('bobo@prisma.io', 'Oliveira', '12346', "", '12345678989');

deleta('bobo@prisma.io');