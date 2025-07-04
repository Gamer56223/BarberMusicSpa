import { createStackNavigator } from "@react-navigation/stack";

import DetalleSucursal from "../../../Screen/Sucursales/DetalleSucursal";
import EditarSucursal from "../../../Screen/Sucursales/EditarSucursal";
import ListarSucursal from "../../../Screen/Sucursales/ListarSucursal";

const Stack = createStackNavigator();

export default function SucursalesStack () {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name= "ListarSucursales"
                component={ListarSucursal}
                options={{ title: "sucursales" }}
            />
             <Stack.Screen 
                name= "DetalleSucursales"
                component={DetalleSucursal}
                options={{ title: "Detalle Sucursal" }}
            />
             <Stack.Screen 
                name= "EditarSucursales"
                component={EditarSucursal}
                options={{ title: "Nuevo/Editar Sucursales" }}
            />
        </Stack.Navigator>
    );
}