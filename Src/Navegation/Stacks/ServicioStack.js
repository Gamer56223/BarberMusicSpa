import { createStackNavigator } from "@react-navigation/stack";

import DetalleServicio from "../../../Screen/Servicios/DetalleServicio";
import EditarServicio from "../../../Screen/Servicios/EditarServicio";
import ListarServicio from "../../../Screen/Servicios/ListarServicio";

const Stack = createStackNavigator();

export default function serviciosStack () {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name= "ListarServicios"
                component={ListarServicio}
                options={{ title: "servicios" }}
            />
             <Stack.Screen 
                name= "DetalleServicios"
                component={DetalleServicio}
                options={{ title: "Detalle Servicio" }}
            />
             <Stack.Screen 
                name= "EditarServicios"
                component={EditarServicio}
                options={{ title: "Nuevo/Editar Servicios" }}
            />
        </Stack.Navigator>
    );
}