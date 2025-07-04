import { createStackNavigator } from "@react-navigation/stack";

import DetalleHorarioSucursal from "../../../Screen/HorariosSucursales/DetalleHorarioSucursal";
import EditarHorarioSucursal from "../../../Screen/HorariosSucursales/EditarHorarioSucursal";
import ListarHorarioSucursal from "../../../Screen/HorariosSucursales/ListarHorarioSucursal";

const Stack = createStackNavigator();

export default function HorarioSucursalesStack () {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name= "ListarHorarioSucursales"
                component={ListarHorarioSucursal}
                options={{ title: "horariosucursales" }}
            />
             <Stack.Screen 
                name= "DetalleHorarioSucursales"
                component={DetalleHorarioSucursal}
                options={{ title: "Detalle horariosucursal" }}
            />
             <Stack.Screen 
                name= "EditarHorarioSucursales"
                component={EditarHorarioSucursal}
                options={{ title: "Nuevo/Editar Horario Sucursales" }}
            />
        </Stack.Navigator>
    );
}