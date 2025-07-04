import { createStackNavigator } from "@react-navigation/stack";

import DetalleReseña from "../../../Screen/Reseñas/DetalleReseña";
import EditarReseña from "../../../Screen/Reseñas/EditarReseña";
import ListarReseña from "../../../Screen/Reseñas/ListarReseña";

const Stack = createStackNavigator();

export default function ReseñasStack () {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name= "ListarReseñas"
                component={ListarReseña}
                options={{ title: "reseñas" }}
            />
             <Stack.Screen 
                name= "DetalleReseñas"
                component={DetalleReseña}
                options={{ title: "Detalle Reseña" }}
            />
             <Stack.Screen 
                name= "EditarReseñas"
                component={EditarReseña}
                options={{ title: "Nuevo/Editar Reseñas" }}
            />
        </Stack.Navigator>
    );
}