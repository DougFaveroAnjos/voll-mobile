import {ScrollView, Box, Image, Text} from 'native-base';
import Logo from './assets/Logo.png'
import { Titulo } from './component/Titulo';
import { Botao } from './component/Botao';
import { EntradaTexto } from './component/EstradaTexto';
import { useState } from 'react';
import { CheckBox } from './component/Checkbox';
import { cSecoes } from './utils/CadastroEntradaTexto';



export default function Cadastro(){
    
    const [numSecao, setNumSecao] = useState(0)

    /**Variáveis da tela de cadastro */
    const [dados, setDados] = useState({} as any)

    function avancarSessao(){
        if(numSecao < cSecoes.length -1){
            setNumSecao(numSecao + 1)
        }
        else{
            alert('Não é possível avançar no momento, aguarde e tente novamente mais tarde...')
        }
    }
    function voltarSessao(){
        if(numSecao > 0){
            setNumSecao(numSecao - 1)
        }
    }

    /**função que percorre o map e cria variáveis com as informações da tela de cadastro */

    function atualizarDados(id:string, valor:string){
        setDados({...dados, [id]: valor})
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
                        return <EntradaTexto children={entrada.children} placeholder={entrada.placeholder} 
                        key={entrada.id} secureTextEntry={entrada.secureTextEntry}/>
                    })
                }
            </Box>
            <Box 
            width={'80%'}>
                {numSecao > 1 &&  
                    <Text
                        marginTop={3}
                        fontSize={'md'}
                        fontWeight={'bold'}
                        color={'blue.800'}
                        >Selecione os planos:
                    </Text>}
            {/**Checkbox do plano de saúde */}
                {numSecao > 1 && cSecoes[numSecao].checkBox.map(checkBox => {
                    return <CheckBox key={checkBox.id} value={checkBox.value} />
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