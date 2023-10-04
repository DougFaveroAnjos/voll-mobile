const cSecoes = [
    {
        id: 1,
        titulo: 'Insita alguns dados básicos', 
        entradaTexto: [
            {
                id:1,
                children: 'Nome',
                placeholder: 'Digite seu nome completo',
            },
            {
                id:2,
                children: 'Email',
                placeholder: 'Digite seu endereço de E-mail',
            },
            {
                id:3,
                children: 'Senha',
                placeholder: 'Digite sua nova senha',
                secureTextEntry: true
            },
            {
                id:4,
                children: 'Confirme sua senha',
                placeholder: 'Confirme sua senha',
                secureTextEntry: true
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
            },
            {
                id:2,
                children: 'Endereço',
                placeholder: 'Insira seu endereço',
            },
            {
                id:3,
                children: 'Número',
                placeholder: 'Insira o número da sua residência',
            },
            {
                id:4,
                children: 'Complemento',
                placeholder: 'Ex: Bloco 3 Ap 307',
            },
            {
                id:5,
                children: 'Telefone',
                placeholder: '(00) 0 0000-0000'
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