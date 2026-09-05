//carrega automaticamerte as variaies de ambiente do arquivo .env
import 'dotenv/config'

//iMPORTA o PrismaClient gerado (responsável por fazer consultas no banco)
import { PrismaClient } from "../generated/prisma/client";

//importa o adapter para postgresSQL   (usado para conectar via driverr pg)
import { PrismaPg } from "@prisma/adapter-pg";

//obtém a string de conexão do banco a apartir do .env
const connectionString = `${process.env.DATABASE_URL!}`;

//cria uma instância do adapter passando a conecctionString, Esse adapter faz a ponte entre o Prisma e o PostgreSQL
const adapter = new PrismaPg( { connectionString });

//Cria a instância do PrismaClient configurada com o adapter, essa será usada para acessar o banco (CRUD: create, read, update, delete)
const prismaClient = new PrismaClient({ adapter });

//Exporta a instância do Prisma para ser reutilizada em toda a aplicação
export default prismaClient;
