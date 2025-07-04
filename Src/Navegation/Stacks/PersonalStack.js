import { createStackNavigator } from "@react-navigation/stack";

import DetallePersonal from "../../../Screen/Personal/DetallePersonal";
import EditarPersonal from "../../../Screen/Personal/EditarPersonal";
import ListarPersonal from "../../../Screen/Personal/ListarPersonal";

const Stack = createStackNavigator();

export default function PersonalesStack () {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name= "ListarPersonales"
                component={ListarPersonal}
                options={{ title: "personales" }}
            />
             <Stack.Screen 
                name= "DetallePersonales"
                component={DetallePersonal}
                options={{ title: "Detalle Personal" }}
            />
             <Stack.Screen 
                name= "EditarPersonales"
                component={EditarPersonal}
                options={{ title: "Nuevo/Editar Personales" }}
            />
        </Stack.Navigator>
    );
}