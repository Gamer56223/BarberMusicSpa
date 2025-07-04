import { createStackNavigator } from "@react-navigation/stack";

import DetalleEspecialidad from "../../../Screen/Especialidades/DetalleEspecialidad";
import EditarEspecialidad from "../../../Screen/Especialidades/EditarEspecialidad";
import ListarEspecialidad from "../../../Screen/Especialidades/ListarEspecialidad";

const Stack = createStackNavigator();

export default function EspecialidadesStack () {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name= "ListarEspecialidades"
                component={ListarEspecialidad}
                options={{ title: "especialidades" }}
            />
             <Stack.Screen 
                name= "DetalleEspecialidades"
                component={DetalleEspecialidad}
                options={{ title: "Detalle Especialidad" }}
            />
             <Stack.Screen 
                name= "EditarEspecialidades"
                component={EditarEspecialidad}
                options={{ title: "Nuevo/Editar Especialidades" }}
            />
        </Stack.Navigator>
    );
}