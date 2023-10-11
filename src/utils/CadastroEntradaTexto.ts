const cSecoes = [
    {
        id: 1,
        titulo: 'Insita alguns dados básicos', 
        entradaTexto: [
            {
                id:1,
                children: 'Nome',
                placeholder: 'Digite seu nome completo',
                name: 'nome'
            },
            {
                id:2,
                children: 'Email',
                placeholder: 'Digite seu endereço de E-mail',
                name: 'email'
            },
            {
                id:3,
                children: 'Senha',
                placeholder: 'Digite sua nova senha',
                secureTextEntry: true,
                name: 'senha'
            },
            {
                id:4,
                children: 'Confirme sua senha',
                placeholder: 'Confirme sua senha',
                secureTextEntry: true,
                name: 'confirmaSenha'
            },
            {
                id:5,
                children: 'CPF',
                placeholder: 'Insira seu CPF',
                name: 'CPF'
            }]
        
    },
    {
        id: 2,
        titulo: 'Agora, mais alguns dados sobre você:', 
        entradaTexto: [
            {
                id:1,
                children: 'CEP',
                placeholder: 'Insira seu CEP',
                name: 'cep'
            },
            {
                id:2,
                children: 'Endereço',
                placeholder: 'Insira o nome da sua Rua',
                name: 'rua'
            },
            {
                id:3,
                children: 'Número',
                placeholder: 'Insira o número da sua residência',
                name: 'numero'
            },
            {
                id:4,
                children: 'Complemento',
                placeholder: 'Ex: Bloco 3 Ap 307',
                name: 'complemento'
            },
            {
                id:5,
                children: 'Estado',
                placeholder: 'Ex: PR',
                name: 'estado'
            },
            {
                id:6,
                children: 'Telefone',
                placeholder: '(00) 0 0000-0000',
                name: 'telefone'
            }
        ]
    },
    {
        id: 3,
        titulo: 'Para finalizar, qual seu plano de saúde?', 
        checkBox: [
            {
                id:1,
                value: 'Sulamerica',
            },
            {
                id:2,
                value: 'Unimed',
            },
            {
                id:3,
                value: 'Bradesco',
            },
            {
                id:4,
                value: 'Amil',
            },
            {
                id:5,
                value: 'Biosaúde',
            },
            {
                id:6,
                value: 'Biovida',
            },
            {
                id:7,
                value: 'Outro',
            },
            {
                id:8,
                value: 'Não possuo plano de saúde',
            }
        ]
    }
]

export { cSecoes }