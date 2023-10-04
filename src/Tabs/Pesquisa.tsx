import { ScrollView, Box, Text, Divider } from "native-base";
import { EntradaTexto } from "../component/EstradaTexto";
import { Botao } from "../component/Botao";
import { Titulo } from "../component/Titulo";
import { Cards } from "../component/Cards";
import { cCardsPesquisa } from "../utils/CardsPesquisa";

export default function Pesquisa(){
    return (
    <ScrollView p={5} >
        <Box 
                alignSelf={'center'}
                mt={5}
                p={4}
                w={'93%'}
                borderRadius={10}
                backgroundColor={"white"}
                shadow={8}>
                    <EntradaTexto secureTextEntry={false} 
                    placeholder="Busque por exames, médicos, clínicas" 
                    children mt={'-7'}></EntradaTexto>
                    <EntradaTexto secureTextEntry={false} 
                    placeholder="Digite sua localização" 
                    children mt={'-5'}></EntradaTexto>
                    <Botao>Buscar</Botao>
            </Box>

            <Titulo color={"blue.500"}>Resultado da busca</Titulo>

            {cCardsPesquisa[0].infos.map(infos =>{
                return (
                    <Cards
                    key={infos.id}
                    titulo={infos.titulo} 
                    prof={infos.profissao}
                    data={infos.data}
                    agendado={true}
                    />
                )
            })}
            <Divider mt={5} mb={9}/>

    </ScrollView>)
}