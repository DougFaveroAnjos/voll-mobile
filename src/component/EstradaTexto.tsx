import { FormControl, Input, IInputProps } from "native-base";
import { ReactNode } from "react";

interface InputProps extends IInputProps{
    children: ReactNode,
    secureTextEntry?: boolean;
    
    /**Recolhe as informações de email e senha para guardar dentro de uma vatiável */
    value?: string,
    onChangeText?: (text: string) => void;
}

export function EntradaTexto({secureTextEntry, value, onChangeText, children, ...rest}:InputProps){
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
            /**Adição dos props que vão receber o email e a senha*/
            value={value}
            onChangeText={onChangeText}
            {...rest}
        ></Input>
    </FormControl>
    )
}