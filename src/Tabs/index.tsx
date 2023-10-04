import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons'

{/**Importação das páginas de navegação*/}
import Home from "./Home";
import Consultas from "./Consultas";
import Pesquisa from "./Pesquisa";
import Perfil from "./Perfil";

const Tab = createBottomTabNavigator()
const tabs = [
    {
        id:1,
        name: 'Home',
        component: Home,
        icon: 'home'
    },
    {
        id:2,
        name: 'Consultas',
        component: Consultas,
        icon: 'calendar'
    },
    {
        id:3,
        name: 'Pesquisar',
        component: Pesquisa,
        icon: 'search'
    },
    {
        id:4,
        name: 'Perfil',
        component: Perfil,
        icon: 'people'
    },
]


export default function Tabs(){
    return (
        <Tab.Navigator screenOptions={{
            tabBarStyle:{backgroundColor: "#0B3B60", height: '6%'},
            tabBarActiveTintColor: "#339CFF",
            tabBarInactiveTintColor: "#fff"
        }}>
            {/**Inicio das TABS*/}
            {
                tabs.map((tab) => ( 
                <Tab.Screen key={tab.id} name={tab.name} component={tab.component} options={{
                    headerShown: false,
                    tabBarIcon: ({color, size}) =>(
                        <Ionicons name={tab.icon} color={color} size={size} />)
                }}/>
                ))
            }
        </Tab.Navigator>
    )
}