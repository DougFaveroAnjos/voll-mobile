import { Text, ITextProps, Box } from "native-base"
import { ReactNode } from "react"

{/**Criação da interface do Children */}
interface TextProps extends ITextProps{
    children: ReactNode
}


export function Titulo({children, ...rest}: TextProps){
    return (
    <Box w={'100%'} {...rest}>
        <Text
            textAlign={'center'}
            fontSize={'xl'}
            paddingTop={5}
            fontWeight={'bold'}
            color={'gray.500'}
            {...rest}
        > 
            {children} 
        </Text>
    </Box>
    )
}