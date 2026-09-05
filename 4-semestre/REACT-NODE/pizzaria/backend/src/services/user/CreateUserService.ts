// Importação do prismaClient
import prismaClient from "../../prisma/index";

// Importa a função hash do bcrypt para criptografar a senha
import { hash } from "bcryptjs";

// Interface que define os dados necessário para criar um usuário
interface CreateUserProps {
  name: string;
  email: string;
  password: string;
}

// Define uma classe responsável pela lógica de criação de usuário
class CreateUserService {

  // Método assincrono (permite usar o await futuramente como acesso ao banco)
  async execute({ name, email, password }: CreateUserProps) {

    // Exibe uma mensagem no console para indicar que o serviço foi executado
    // console.log("EXECUTANDO SERVIÇO!");

    // Busca no banco de já existe um usuário com o mesmo e-mail
    const userAlreadyExist = await prismaClient.user.findFirst({
      where: {
        email: email
      }
    });

    // Verifica se o usuário já existe
    if (userAlreadyExist) {
      // Lança um erro para impedir a criação de usuário duplicado
      throw new Error("Usuário já existente!");
    }

    // Criptografar a senha antes de salvar no banco (boa prática de segurança)
    const passwordHash = await hash(password, 8);

    // Cria um novo usuário no banco de dados
    const user = await prismaClient.user.create({
      data: {
        name: name,
        email: email,
        password: passwordHash,
      },
      // O select define exatamente quais campos do banco serão retornados após a execução.
      // Ou seja, exibidos no Postman
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true
      }
    });

    // Retorna o nome do usuário cadastrado
    return user;
  }
}

// Exporta a claase para que possa ser usada em outros arquivos (ex: controllers)
export { CreateUserService };
