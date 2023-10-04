import {VStack, Box, Link, Text, Image} from 'native-base';
import { TouchableOpacity } from 'react-native';
import Logo from './assets/Logo.png'
import { Titulo } from './component/Titulo';
import { Botao } from './component/Botao';
import { EntradaTexto } from './component/EstradaTexto';
import { lSecoes } from './utils/LoginEntradaTexto';


export default function Login({navigation}){
   
    return(
        <VStack flex={1} justifyContent={'center'} alignItems={'center'}>
            <Image source={Logo} alt='Logo da Voll' alignSelf={'center'} />

            {/**Titulo da página */}
            <Titulo>Faça login para continuar</Titulo>

            <Box>
                {/**Inputs de Email e Senha */}
                {
                    lSecoes[0].entradaTexto.map(entrada => {
                        return <EntradaTexto key={entrada.id} children={entrada.children}
                        placeholder={entrada.placeholder} secureTextEntry={entrada.secureTextEntry} w={'80%'} />
                    })
                }
            
            </Box>        
                {/**Botão de Login */}
                <Botao w={'80%'} onPress={() => navigation.navigate('Tabs')}>Login</Botao>
            
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