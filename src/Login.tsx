import {VStack, Box, Link, Text, Image, useToast} from 'native-base';
import { TouchableOpacity } from 'react-native';
import Logo from './assets/Logo.png'
import { Titulo } from './component/Titulo';
import { Botao } from './component/Botao';
import { EntradaTexto } from './component/EstradaTexto';
import {useEffect, useState} from 'react'
import { fazerLogin } from './servicos/AutSevico';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';

export default function Login({navigation} : any){
   
    /**Recolhe as informações de email e senha e guarda dentro de uma vatiável */
    /** Criação das variáveis de email e senha iniciando no estado " " (String Vazia)*/
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [Carregando, setCarregando] = useState(false)
    /**TOAST serve para exibir mensagem na tela */
    const Toast = useToast()

    useEffect(()=>{
        async function verificarLogin(){
            const token = await AsyncStorage.getItem('token')
            if(token){
                navigation.replace('Tabs')
            }
        }
        verificarLogin()
    })


    async function fLogin() {
        const resultado = await fazerLogin(email, senha)
        if (resultado){
            /**Coletar dados assincrono para manter o usuário logado*/
            const { token } = resultado
            AsyncStorage.setItem('token', token)

            /**pegar ID do usuário */
            const tokenID = jwtDecode(token) as any
            const pacienteID = tokenID.id
            AsyncStorage.setItem('pacienteID', pacienteID)

            /**Após logado, envia para a tela Home*/
            navigation.replace('Tabs')
            setCarregando(true)
            console.log('TOKEN DECODIFICADO:', tokenID)
            }
        else{
            /**Configuração do alerta TOAST */
            Toast.show({
                title: "Erro ao efetuar login",
                description: "E-mail ou senha inválidos",
                backgroundColor: 'red.500',
            })
            console.log("O usuário errou o email ou a senha")
        }
    }


    /**apagar o FALSE para pular a tela de login quando o usuário permanecer conectado*/
    if(Carregando){
        return null
    }

    return(
        <VStack flex={1} justifyContent={'center'} alignItems={'center'}>
            <Image source={Logo} alt='Logo da Voll' alignSelf={'center'} />

            {/**Titulo da página */}
            <Titulo>Faça login para continuar</Titulo>

            <Box>
                {/**Inputs de Email e Senha */}
                <EntradaTexto 
                w={'80%'}
                placeholder='insira seu Email'
                value={email}
                onChangeText={setEmail}>Email</EntradaTexto>
                
                <EntradaTexto 
                w={'80%'}
                placeholder='insira sua Senha' 
                secureTextEntry={true}
                value={senha}
                onChangeText={setSenha}>Senha</EntradaTexto>
            
            </Box>        
                {/**Botão de Login */}
                <Botao w={'80%'} 
                onPress={fLogin}>
                    Login
                </Botao>
            
                {/**Link Esqueceu a senha? */}
                <Box justifyContent={'center'} alignItems={'center'}>
                    <Link
                        marginTop={5}
                        fontSize={'xl'}
                    >Esqueceu sua senha?
                    </Link>
                </Box>
                {/**Link cadastro */}
            <Box flexDirection={'row'} justifyContent={'center'} alignItems={'center'} marginTop={3}>
                <Text fontSize={'md'}>Ainda não tem conta?</Text>
                    <TouchableOpacity>
                        <Link  onPress={() => navigation.navigate('Cadastro')}>
                            <Text color={'blue.500'} fontWeight={'bold'} fontSize={'md'}> Faça seu cadastro!</Text>    
                        </Link>
                    </TouchableOpacity>
            </Box>
        </VStack>
    )
}