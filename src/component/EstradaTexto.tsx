import { FormControl, Input, IInputProps } from "native-base";
import { ReactNode } from "react";

interface InputProps extends IInputProps{
    children: ReactNode,
    secureTextEntry: boolean;
}

export function EntradaTexto({secureTextEntry, children, ...rest}:InputProps){
    return(
    <FormControl>
        <FormControl.Label fontWeight={"bold"} color={'blue.800'}> {children} </FormControl.Label>
        <Input
            placeholder='Senha'
            width={'100%'}
            size={'lg'}
            borderRadius={'lg'}
            backgroundColor={'gray.100'}
            shadow={2}
            _focus={{borderColor: 'blue.800'}}
            secureTextEntry = {secureTextEntry}
            {...rest}
        ></Input>
    </FormControl>
    )
}