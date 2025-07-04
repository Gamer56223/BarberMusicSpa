import { createStackNavigator } from "@react-navigation/stack";

import DetalleExcepcionHorario from "../../../Screen/ExcepcionesHorarioSucursales/DetalleExcepcionHorarioSucursal";
import EditarExcepcionHorario from "../../../Screen/ExcepcionesHorarioSucursales/EditarExcepcionHorarioSucursal";
import ListarExcepcionHorario from "../../../Screen/ExcepcionesHorarioSucursales/ListarExcepcionHorarioSucursal";

const Stack = createStackNavigator();

export default function ExcepcionHorariosStack () {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name= "ListarExcepcionHorarios"
                component={ListarExcepcionHorario}
                options={{ title: "excepcionhorarios" }}
            />
             <Stack.Screen 
                name= "DetalleExcepcionHorarios"
                component={DetalleExcepcionHorario}
                options={{ title: "Detalle excepcionhorario" }}
            />
             <Stack.Screen 
                name= "EditarExcepcionHorarios"
                component={EditarExcepcionHorario}
                options={{ title: "Nuevo/Editar excepcionhorarios" }}
            />
        </Stack.Navigator>
    );
}