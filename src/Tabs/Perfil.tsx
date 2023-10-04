import { ScrollView, VStack, Avatar, Divider, Text} from "native-base";
import { Titulo } from "../component/Titulo";
import { cCardsConsultas } from "../utils/CardsConsultas";
import { Cards } from "../component/Cards";

const perfil =[
    {
        id:1,
        Titulo: 'Meu Perfil',
    }
]

export default function Perfil(){
    return (
    <ScrollView flex={1}>
        <VStack flex={1} alignItems={'center'} p={5}>
            <Titulo color={"blue.500"}>{perfil[0].Titulo}</Titulo>
            <Avatar size={"2xl"} bg={"gray.200"} 
            source={{uri: "https://avatars.githubusercontent.com/u/108644233?v=4"}} mt={5}> 
            </Avatar>

            <Titulo color={"blue.500"} fontSize={18}>Informações Pessoais</Titulo>
            <Titulo fontSize={16} mt={-2}>Douglas Favero dos Anjos</Titulo>
            <Text>17/07/2000</Text>
            <Text>Curitiba - PR</Text>

            <Divider width={"90%"} bg={"gray.400"} mt={8}/>
        
            <Titulo color={"blue.500"}>Histórico de consultas</Titulo>

            {cCardsConsultas[1].infos.map(infos => {
                return(
                    <Cards
                    key={infos.id}
                    titulo={infos.titulo} 
                    prof={infos.profissao}
                    data={infos.data}
                    atendido={true}
                    />
                )
            })}

        </VStack>
    </ScrollView>
    )
}