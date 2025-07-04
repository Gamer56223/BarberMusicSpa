import { createStackNavigator } from "@react-navigation/stack";

import DetalleOrden from "../../../Screen/DetallesOrdenes/DetalleOrden";
import EditarOrden from "../../../Screen/Ordenes/EditarOrden";
import ListarOrden from "../../../Screen/Ordenes/ListarOrden";

const Stack = createStackNavigator();

export default function OrdenesStack () {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name= "ListarOrdenes"
                component={ListarOrden}
                options={{ title: "ordenes" }}
            />
             <Stack.Screen 
                name= "DetalleOrdenes"
                component={DetalleOrden}
                options={{ title: "Detalle Orden" }}
            />
             <Stack.Screen 
                name= "EditarOrdenes"
                component={EditarOrden}
                options={{ title: "Nuevo/Editar Ordenes" }}
            />
        </Stack.Navigator>
    );
}