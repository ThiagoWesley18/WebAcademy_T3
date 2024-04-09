import { Request, Response, NextFunction } from "express";
import fs from "fs/promises";

const salvelogger = async (filename: string, logs: string) => {
  const logPath = process.env.FOLDER_LOGS!;
  try {
    await fs.access(logPath);
  } catch (error) {
    await fs.mkdir(logPath);
  }

  try {
    await fs.appendFile(`${logPath}/${filename}.log`, logs);
  } catch (error) {
    if (error) throw new Error(error.toString());
  }
};

const logger = (formato: "simples" | "completo") => {
  if (formato === "simples") {
    return async (req: Request, Res: Response, next: NextFunction) => {
      const logs = ` ${new Date().toISOString()} - ${req.url} - ${req.method}\n`;
      await salvelogger(`${formato}`, logs);
      next();
    };
  } else if (formato === "completo") {
    return async (req: Request, Res: Response, next: NextFunction) => {
      const logs = ` ${new Date().toISOString()} - ${req.method}  - ${req.url} - ${req.httpVersion} - ${req.get("User-Agent")}\n`;
      await salvelogger(`${formato}`, logs);
      next();
    };
  } else {
    return (req: Request, Res: Response, next: NextFunction) => {
      console.log("Formato de log não suportado");
      next();
    };
  }
};

export default logger;

/*
– fs.access(): verifica se o arquivo existe
– fs.chmod(): muda as permissos de acesso do arquivo
– fs.close(): fecha um descritor de arquivo
– fs.copyFile(): copia um arquivo
– fs.mkdir(): cria um novo diretório
– fs.open(): abre um arquivo para leitura
– fs.readdir(): lê o conteúdo de um diretório
– fs.readFile(): lê o conteúdo de um arquivo
– fs.symlink(): cria um link simbólico
– fs.unlink(): apaga um arquivo ou link
– fs.writeFile(): escreve dados em um arquivo
*/
