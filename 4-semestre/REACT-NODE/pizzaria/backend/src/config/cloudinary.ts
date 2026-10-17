// Importa a versão 2 (v2) da biblioteca do Cloudinary
// Renomeia para "cloudinary" para facilitar a utilização no projeto
import { v2 as cloudinary } from "cloudinary";

// Configurar a conexão com a conta do Cloudinary
cloudinary.config({
  // Node da conta (Cloud name)
  // Obtido através das variáveis de ambiente
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME as string,

  // Chave pública da API
  // Utilizada para autenticar as requisições
  api_key: process.env.CLOUDINARY_API_KEY as string,

  // Chave secreta da API
  // Utilizada para autorizar operações como upload e exclusão de arquivos
  api_secret: process.env.CLOUDINARY_API_SECRET as string,
});

// Exporta a configuração do Cloudinary
// Assim ela pode ser utilizada em qualquer parte da aplicação
export default cloudinary;
