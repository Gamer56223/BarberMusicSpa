import { createStackNavigator } from "@react-navigation/stack";

import DetalleAgendamiento from "../../../Screen/Agendamientos/DetalleAgendamiento";
import EditarAgendamiento from "../../../Screen/Agendamientos/EditarAgendamiento";
import ListarAgendamiento from "../../../Screen/Agendamientos/ListarAgendamiento";


const Stack = createStackNavigator();

export default function AgendamientosStack () {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name= "ListarAgendamientos"
                component={ListarAgendamiento}
                options={{ title: "agendamientos" }}
            />
             <Stack.Screen 
                name= "DetalleAgendamientos"
                component={DetalleAgendamiento}
                options={{ title: "Detalle Agendamiento" }}
            />
             <Stack.Screen 
                name= "EditarAgendamientos"
                component={EditarAgendamiento}
                options={{ title: "Nuevo/Editar Agendamientos" }}
            />
        </Stack.Navigator>
    );
}