import { HStack, Box, Text, Avatar, VStack, ITextProps } from "native-base";
import { Botao } from "./Botao";

interface CardsProps extends ITextProps{
    titulo: String,
    prof: String,
    data?: String,
    agendado?: Boolean,
    atendido?: Boolean
}


export function Cards({titulo, prof, data, agendado, atendido, ...rest}: CardsProps){
    return(
        <Box bgColor={atendido ? 'blue.200' : 'white'} 
        borderRadius={8} 
        mt={5}
        shadow={5} w={'93%'} 
        alignSelf={'center'} 
        justifyContent={'center'} 
        alignItems={'center'}
        p={3}
        {...rest}
        >
            <HStack space={3}>
            <Avatar size={"lg"} bg={"gray.200"} 
            source={{uri: "https://avatars.githubusercontent.com/u/108644233?v=4"}}></Avatar>
                <VStack>
                        <Text fontWeight={"bold"} 
                        color={"gray.500"}
                        fontSize={'md'}
                        {...rest}
                        >{titulo}
                        </Text>
                        
                        <Text color={"gray.400"} {...rest}>{prof}</Text>
                        <Text color={"gray.400"} {...rest}>{data}</Text>
                </VStack>
            </HStack>
            <Botao >{atendido ? 'Agendar Consulta' : 'Cancelar'}</Botao>

        </Box>
    )
}