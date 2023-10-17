export interface Paciente{
    cpf: String;
    nome: String;
    email: String;
    endereco:{};
    senha: String;
    telefone: String;
    possuiPlanoSaude: Boolean;
    planosSaude?: number[]; 
}

export interface Endereco{
    cep: String;
    rua: String;
    numero: String;
    estado: String;
    complemento?: String
}