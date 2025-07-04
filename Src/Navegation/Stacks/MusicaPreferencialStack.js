import { createStackNavigator } from "@react-navigation/stack";

import DetalleMusicaPreferencial from "../../../Screen/MusicaPreferenciales/DetalleMusicaPreferencial";
import EditarMusicaPreferencial from "../../../Screen/MusicaPreferenciales/EditarMusicaPreferencial";
import ListarMusicaPreferencial from "../../../Screen/MusicaPreferenciales/ListarMusicaPreferencial";

const Stack = createStackNavigator();

export default function MusicaPreferencialesStack () {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name= "ListarMusicaPreferenciales"
                component={ListarMusicaPreferencial}
                options={{ title: "musicapreferenciales" }}
            />
             <Stack.Screen 
                name= "DetalleMusicaPreferenciales"
                component={DetalleMusicaPreferencial}
                options={{ title: "Detalle Musica Preferencial" }}
            />
             <Stack.Screen 
                name= "EditarMusicaPreferenciales"
                component={EditarMusicaPreferencial}
                options={{ title: "Nuevo/Editar Musica Preferenciales" }}
            />
        </Stack.Navigator>
    );
}