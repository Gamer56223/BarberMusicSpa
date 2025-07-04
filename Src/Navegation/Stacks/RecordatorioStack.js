import { createStackNavigator } from "@react-navigation/stack";

import DetalleRecordatorio from "../../../Screen/Recordatorios/DetalleRecordatorio";
import EditarRecordatorio from "../../../Screen/Recordatorios/EditarRecordatorio";
import ListarRecordatorio from "../../../Screen/Recordatorios/ListarRecordatorio";

const Stack = createStackNavigator();

export default function RecordatoriosStack () {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name= "ListarRecordatorios"
                component={ListarRecordatorio}
                options={{ title: "recordatorios" }}
            />
             <Stack.Screen 
                name= "DetalleRecordatorios"
                component={DetalleRecordatorio}
                options={{ title: "Detalle Recordatorio" }}
            />
             <Stack.Screen 
                name= "EditarRecordatorios"
                component={EditarRecordatorio}
                options={{ title: "Nuevo/Editar Recordatorios" }}
            />
        </Stack.Navigator>
    );
}