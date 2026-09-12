declare namespace Express {
  // Aqui estamos "reabrindo" (extendendo) o namespace do Express
  // O TypeScript permite adicionar novas propriedades a tipos já existentes
  // (chamado de Declaration Merging)
  export interface Request {
    // Estamos adicionando uma nova propriedade ao objeto Request do Express
    // Ou seja, agora toda requisição (req) pode ter um campo "user_id"
    user_id: string;

    // Isso é muito úti quando usamos autenticação
    // Ex: um middleware (como o isAuthenticated) adiciona o user_id no req

    // Sem isso, o TypeScript daria erro:
    //"Property 'user_id' does not exist on type request"
  }
}
