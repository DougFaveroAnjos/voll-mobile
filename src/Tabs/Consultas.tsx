import { Divider, ScrollView} from "native-base";
import { Titulo } from "../component/Titulo";
import { Botao } from "../component/Botao";
import { cCardsConsultas } from "../utils/CardsConsultas";
import { Cards } from "../component/Cards";


export default function Consultas(){
    return (
    <ScrollView p={5}>
        <Titulo color={"blue.500"}>Minhas Consultas</Titulo>
        <Botao mt={5}>Agendar outra consulta</Botao>
        <Titulo textAlign={'left'} fontSize={'md'} color={'blue.500'}>Próximas Consultas</Titulo>
        {/**Cards brancos*/}
        {cCardsConsultas[0].infos.map(infos => {
            return(
                <Cards
                    key={infos.id}
                    titulo={infos.titulo} 
                    prof={infos.profissao}
                    data={infos.data}
                    agendado
                    />
            )
        })}
        <Divider mt={10}/>

        <Titulo textAlign={'left'} fontSize={'md'} color={'blue.500'}>Consultas anteriores</Titulo>
        {/**Consultas Anteriores */}
        {cCardsConsultas[1].infos.map(infos => {
            return(
                <Cards
                    key={infos.id}
                    titulo={infos.titulo} 
                    prof={infos.profissao}
                    data={infos.data}
                    atendido
                    />
            )
        })}
        
        <Divider mt={10}/>
    </ScrollView>)
}