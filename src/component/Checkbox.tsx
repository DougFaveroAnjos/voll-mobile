import { Box, Text, Checkbox, ITextProps} from "native-base";

interface CheckboxProps extends ITextProps{
    value: string
}

export function CheckBox({value, ...rest}){
    return(
        <Box>
            <Checkbox
            value={value}
            _checked={{backgroundColor: 'blue.800', borderColor:'blue.800'}}
            borderColor={"gray.400"}
            marginTop={2}
            {...rest}
            > 
                <Text
                fontSize={'md'}
                fontWeight={"bold"}
                color={"gray.500"}
                {...rest}>{value}</Text>
            
            </Checkbox>
        </Box>
    )
}