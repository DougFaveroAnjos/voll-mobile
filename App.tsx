import {NativeBaseProvider, StatusBar} from 'native-base'
import {THEMAS} from './src/styles/temas';
{/**Import das rotas */}
import Rotas from './src/Rotas';
import { useEffect } from 'react';
import { API } from './src/servicos/api';

export default function App() {


  {/**

  ** Teste de comunicação entre a aplicação e a WEB API

  useEffect(() => {
    async function testConexao(){
      const conexao = await API.get('/paciente')
      console.log(conexao.data)
    }
    testConexao()
  }, [])
   
*/}



  return (
    <NativeBaseProvider theme = {THEMAS}>
      <StatusBar backgroundColor = {THEMAS.colors.blue[800]} />
        <Rotas />
    </NativeBaseProvider>
  );
}