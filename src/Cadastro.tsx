import {ScrollView, Box, Image, Text} from 'native-base';
import Logo from './assets/Logo.png'
import  { Titulo } from './component/Titulo';
import { Botao } from './component/Botao';
import { EntradaTexto } from './component/EstradaTexto';
import { useState } from 'react';
import { CheckBox } from './component/Checkbox';
import { cSecoes } from './utils/CadastroEntradaTexto';
import { Toast } from 'native-base';
import { cadastrarPaciente } from './servicos/cadastroPaciente';

export default function Cadastro(){
    
    const [numSecao, setNumSecao] = useState(0)
    /**Variáveis da tela de cadastro */
    const [dados, setDados] = useState({} as any)
    const [planos, setPlanos] = useState([] as number[])

    function avancarSessao(){
        if(numSecao < cSecoes.length -1){
            setNumSecao(numSecao + 1)
        }
        else{
            /**Print das infos coletadas dos inputs de cadastro */
            console.log("Dados: ", dados)
            console.log("Planos selecionados: ", planos)
        }
    }
    function voltarSessao(){
        if(numSecao > 0){
            setNumSecao(numSecao - 1)
        }
    }

    /**função que percorre o map e cria variáveis com as informações da tela de cadastro */
    function atualizarDados(id:string, valor:string){
        /**Copia tudo que está dentro de dados e armazena tudo dentro de valor por id */
        setDados({...dados, [id]: valor})
    }

    async function cadastrar(){
        const resultado = await cadastrarPaciente({
           cpf: dados.cpf,
           nome: dados.nome,
           email: dados.email,
           endereco:{
            cep: dados.cep,
            rua: dados.rua,
            numero: dados.numero,
            estado: dados.estado,
            complemento: dados.complemento
           },
           senha: dados.senha,
           telefone: dados.telefone,
           possuiPlanoSaude: planos.length > 0,
           planosSaude: planos,           
        })
    }

    {/**Início da página */}
    return(        
        <ScrollView flex={1} p={'8%'}>
            <Image source={Logo} alt='Logo da Voll' alignSelf={'center'} />
            {/**Titulo da página */}
            <Titulo>{cSecoes[numSecao].titulo}</Titulo>
            {/**Inputs */}
            <Box>
                {
                   numSecao < 2 && cSecoes[numSecao].entradaTexto.map(entrada =>{
                        return <EntradaTexto 
                        children={entrada.children} 
                        placeholder={entrada.placeholder} 
                        key={entrada.id} 
                        secureTextEntry={entrada.secureTextEntry}
                        // vvvvv Recolhe as informações da tela de cadastro para colocar em variáveis
                        value={dados[entrada.children]}
                        onChangeText={(text)=> atualizarDados(entrada.name, text)}/>
                    })
                }
            </Box>
            <Box 
            width={'80%'}>
                {numSecao == 2 &&  
                    <Text
                        marginTop={3}
                        fontSize={'md'}
                        fontWeight={'bold'}
                        color={'blue.800'}
                        >Selecione os planos:
                    </Text>}
            {/**Checkbox do plano de saúde */}
                {numSecao > 1 && cSecoes[numSecao].checkBox.map(checkBox => {
                    return (
                    <CheckBox 
                    key={checkBox.id} 
                    value={checkBox.value}
                    onChange={() =>{
                        setPlanos((planosAnteriores)=> {
                            if(planosAnteriores.includes(checkBox.id)){
                                return planosAnteriores.filter((id) => id !== checkBox.id)
                            }
                            return [...planosAnteriores, checkBox.id]
                        })
                    }} 
                    isChecked={planos.includes(checkBox.id)}
                    />)
                })}
            </Box>
            {/**Botão de Avançar */}
                {/**Se o numero da sessão for maior que 0 ele mostra o botão */}
                {numSecao > 0 && <Botao onPress={() => voltarSessao()} backgroundColor={'gray.300'} _pressed={{backgroundColor: 'gray.200'}}>Voltar</Botao>}
                {numSecao < 2 && <Botao onPress={() => avancarSessao()} mb={20}> Avançar </Botao>}
                {numSecao > 1 && <Botao onPress={() => avancarSessao()} mb={20}>Cadastrar!</Botao>}
            
        </ScrollView>
    )
}