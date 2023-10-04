import {ScrollView, Text, Image, Box, Divider } from "native-base";
import Logo from '../assets/Logo.png'
import { Titulo } from "../component/Titulo";
import { EntradaTexto } from "../component/EstradaTexto";
import { Botao } from "../component/Botao";
import { cDepoimentos } from "../utils/Depoimentos";

export default function Home(){
    return (
        <ScrollView p={5}>
            <Image source={Logo} alt="Logo da voll" />
                <Titulo color={"blue.500"} textAlign={'left'}>Boas-Vindas!</Titulo>

            <Box 
                alignSelf={'center'}
                mt={5}
                p={4}
                w={'93%'}
                borderRadius={10}
                backgroundColor={"white"}
                shadow={8}>
                    <EntradaTexto secureTextEntry={false} placeholder="Busque por exames, médicos, clínicas" children mt={'-7'}></EntradaTexto>
                    <EntradaTexto secureTextEntry={false} placeholder="Digite sua localização" children mt={'-5'}></EntradaTexto>
                    <Botao>Buscar</Botao>
            </Box>
            <Titulo color={"blue.800"} mb={3}> Depoimentos </Titulo>
            {cDepoimentos[0].depoimentos.map(dep => {
                return(
                    <Box key={dep.id}>
                        <Text textAlign={'justify'} 
                        fontSize={'md'}
                        color={"gray.200"}
                        >
                            {dep.dep}
                        </Text>

                        <Text children={dep.pessoa} 
                        textAlign={'center'}
                        fontSize={"lg"} 
                        color={"gray.500"}
                        mb={3}
                        mt={2}></Text>
                        <Divider bg={"gray.200"} mb={3} />
                    </Box>
                )
            })}

            <Divider mt={5} mb={9} />
        </ScrollView>
    )
}