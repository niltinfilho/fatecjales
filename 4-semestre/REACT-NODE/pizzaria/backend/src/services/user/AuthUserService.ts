// Importa a função compare do bcryptjs
// Serve para comparar a senha digitada com a senha criptografada
import { compare } from "bcryptjs";

// Importa a função sign do jsonwebtoken
// Serve para gerar um token JWT (autenticação)
import { sign } from "jsonwebtoken";

// Importa o cliente do Prisma (conexão com o Banco de Dados)
import prismaClient from "../../prisma/index";

// Interface que define o tipo dos dados recebidos
interface AuthUserServiceProps {
  email: string
  password: string
}

// Classe responsável pela autenticação do usuário
class AuthUserService {
  // Método principal que executa a autenticação
  async execute({ email, password }: AuthUserServiceProps) {
    // Busca um usuário no banco pelo email
    const user = await prismaClient.user.findFirst({
      where: {
        email: email,
      }
    });

    // Se não encontrar o usuário, retorna erro
    if (!user) {
      throw new Error("E-mail/Senha são obrigatórios!");
    }

    // Verifica se a senha digitada é igual a senha criptografada no banco
    const passwordMatch = await compare(password, user.password);

    // Se a senha estiver incorreta, retorna erro
    if (!passwordMatch) {
      throw new Error("E-mail/Senha incorretos!");
    }

    // Gerar token JWT
    // O token é usado para autenticar o usuário nas próximas requisições
    const token = sign(
      {
        // Dados que vão dentro do token (payload)
        name: user.name,
        email: user.email
      },
      process.env.JWT_SECRET as string, // Chave secreta (fica no .env)
      {
        subject: user.id, // Identifica o usuário no token
        expiresIn: "30d", // Tempo de expiração (30 dias)
      }
    );

    // Retorna os dados do usuário + token
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: token,
    };
  }
}

// Exporta a classe para ser usada em outros arquivos
export { AuthUserService };
