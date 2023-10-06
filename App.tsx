import {NativeBaseProvider, StatusBar} from 'native-base'
import {THEMAS} from './src/styles/temas';
{/**Import das rotas */}
import Rotas from './src/Rotas';
import { useEffect } from 'react';
import API  from './src/servicos/api';

export default function App() {

/** 
 * Link do JSON para colocar no insomnia:
 * https://github.com/alura-cursos/voll-api-nodejs/archive/refs/heads/insomnia.zip
 * 
 * Link da API para conexão:
 * https://github.com/alura-cursos/voll-api-nodejs
 */


/** Testar conexão com a API
  useEffect(() => {
    async function testConexao(){
      const conexao = await API.get('/paciente')
      console.log(conexao.data)
    }
    testConexao()
  }, [])
 */


  return (
    <NativeBaseProvider theme = {THEMAS}>
      <StatusBar backgroundColor = {THEMAS.colors.blue[800]} />
        <Rotas />
    </NativeBaseProvider>
  );
}