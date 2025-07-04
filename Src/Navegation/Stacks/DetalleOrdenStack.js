import { createStackNavigator } from "@react-navigation/stack";

import DetalleOrden from "../../../Screen/DetallesOrdenes/DetalleOrden";
import EditarDetalleOrden from "../../../Screen/DetallesOrdenes/EditarDetalleOrden";
import ListarDetalleOrden from "../../../Screen/DetallesOrdenes/ListarDetalleOrden";

const Stack = createStackNavigator();

export default function DetalleOrdenesStack () {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name= "ListarDetalleOrdenes"
                component={ListarDetalleOrden}
                options={{ title: "detalleordenes" }}
            />
             <Stack.Screen 
                name= "DetalleOrdenes"
                component={DetalleOrden}
                options={{ title: "Detalle Orden" }}
            />
             <Stack.Screen 
                name= "EditarConsultorios"
                component={EditarDetalleOrden}
                options={{ title: "Nuevo/Editar detalle ordenes" }}
            />
        </Stack.Navigator>
    );
}