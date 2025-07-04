import { createStackNavigator } from "@react-navigation/stack";

import DetalleTransaccionPago from "../../../Screen/TransaccionesPagos/DetalleTransaccionPago";
import EditarTransaccionPago from "../../../Screen/TransaccionesPagos/EditarTransaccionPago";
import ListarTransaccionPago from "../../../Screen/TransaccionesPagos/ListarTransaccionPago";

const Stack = createStackNavigator();

export default function TransaccionPagosStack () {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name= "ListarTransaccionPagos"
                component={ListarTransaccionPago}
                options={{ title: "transaccionpagos" }}
            />
             <Stack.Screen 
                name= "DetalleTransaccionPagos"
                component={DetalleTransaccionPago}
                options={{ title: "Detalle Transaccion Pago" }}
            />
             <Stack.Screen 
                name= "EditarTransaccionPagos"
                component={EditarTransaccionPago}
                options={{ title: "Nuevo/Editar TransaccionPagos" }}
            />
        </Stack.Navigator>
    );
}