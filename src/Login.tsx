import {VStack, Box, Link, Text, Image, useToast} from 'native-base';
import { TouchableOpacity } from 'react-native';
import Logo from './assets/Logo.png'
import { Titulo } from './component/Titulo';
import { Botao } from './component/Botao';
import { EntradaTexto } from './component/EstradaTexto';
import {useState} from 'react'
import { fazerLogin } from './servicos/AutSevico';

export default function Login({navigation} : any){
   
    /**Recolhe as informações de email e senha e guarda dentro de uma vatiável */
    /** Criação das variáveis de email e senha iniciando no estado " " (String Vazia)*/
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    /**TOAST serve para exibir mensagem na tela */
    const Toast = useToast()

    async function fLogin() {
        const resultado = await fazerLogin(email, senha)
        if (resultado){
            /**Usar replace */
            navigation.navigate('Tabs')
            }
        else{
            /**Configuração do alerta TOAST */
            Toast.show({
                title: "Erro ao efetuar login",
                description: "E-mail ou senha inválidos",
                backgroundColor: 'red.500',
            })
        }
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