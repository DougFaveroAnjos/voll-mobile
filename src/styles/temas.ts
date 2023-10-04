import { extendTheme } from 'native-base'

export const THEMAS = extendTheme({
    colors: {
        gray:{
            200: '#A0A0AC',
            300:'#8d8d99',
            500: '#6B6E71',
        },
        blue:{
            200:'#C2E1FF',
            500:'#339cff',
            700:'#1B4C72',
            800:'#0B3B60'
        },
        white: '#fff',
        black: '#000'
    },
    fontSizes:{
        xs: 12,
        sm: 14,
        md: 16,
        lg: 20,
        xl: 24
    }
})