import { createStackNavigator } from "@react-navigation/stack";

import DetalleCategoria from "../../../Screen/Categorias/DetalleCategoria";
import EditarCategoria from "../../../Screen/Categorias/EditarCategoria";
import ListarCategoria from "../../../Screen/Categorias/ListarCategoria";

const Stack = createStackNavigator();

export default function CategoriasStack () {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name= "ListarCategorias"
                component={ListarCategoria}
                options={{ title: "categorias" }}
            />
             <Stack.Screen 
                name= "DetalleCategorias"
                component={DetalleCategoria}
                options={{ title: "Detalle Categoria" }}
            />
             <Stack.Screen 
                name= "EditarCategorias"
                component={EditarCategoria}
                options={{ title: "Nuevo/Editar Categorias" }}
            />
        </Stack.Navigator>
    );
}