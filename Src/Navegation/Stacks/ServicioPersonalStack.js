import { createStackNavigator } from "@react-navigation/stack";

import DetalleServicioPersonal from "../../../Screen/ServiciosPersonal/DetalleServicioPersonal";
import EditarServicioPersonal from "../../../Screen/ServiciosPersonal/EditarServicioPersonal";
import ListarServicioPersonal from "../../../Screen/ServiciosPersonal/ListarServicioPersonal";

const Stack = createStackNavigator();

export default function ServicioPersonalesStack () {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name= "ListarServicioPersonales"
                component={ListarServicioPersonal}
                options={{ title: "serviciopersonales" }}
            />
             <Stack.Screen 
                name= "DetalleServicioPersonales"
                component={DetalleServicioPersonal}
                options={{ title: "Detalle Servicio Personal" }}
            />
             <Stack.Screen 
                name= "EditarServicioPersonales"
                component={EditarServicioPersonal}
                options={{ title: "Nuevo/Editar Servicio Personales" }}
            />
        </Stack.Navigator>
    );
}