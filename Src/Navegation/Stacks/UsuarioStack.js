import { createStackNavigator } from "@react-navigation/stack";

import DetalleUsuario from "../../../Screen/Usuarios/DetalleUsuario";
import EditarUsuario from "../../../Screen/Usuarios/EditarUsuario";
import ListarUsuario from "../../../Screen/Usuarios/ListarUsuario";

const Stack = createStackNavigator();

export default function UsuariosStack () {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name= "ListarUsuarios"
                component={ListarUsuario}
                options={{ title: "usuarios" }}
            />
             <Stack.Screen 
                name= "DetalleUsuarios"
                component={DetalleUsuario}
                options={{ title: "Detalle Consultorio" }}
            />
             <Stack.Screen 
                name= "EditarUsuarios"
                component={EditarUsuario}
                options={{ title: "Nuevo/Editar Usuarios" }}
            />
        </Stack.Navigator>
    );
}