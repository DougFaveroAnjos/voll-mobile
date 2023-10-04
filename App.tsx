import {NativeBaseProvider, StatusBar} from 'native-base'
import {THEMAS} from './src/styles/temas';
{/**Import das rotas */}
import Rotas from './src/Rotas';


export default function App() {
  return (
    <NativeBaseProvider theme = {THEMAS}>
      <StatusBar backgroundColor = {THEMAS.colors.blue[800]} />
        <Rotas />
    </NativeBaseProvider>
  );
}