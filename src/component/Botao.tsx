import { Button, IButtonProps } from "native-base";
import { ReactNode } from "react";


interface BotaoProps extends IButtonProps{
    children: ReactNode
}

export function Botao({children, ...rest}: BotaoProps){
    return(
        <Button
            mt={3}
            size={'lg'}
            width={'100%'}
            isLoading = {false}
            backgroundColor={'blue.800'}
            borderRadius={'lg'}
            shadow={2}
            _pressed={{backgroundColor: "blue.700"}}
            {...rest}
            >{children}
        </Button>
    )
}