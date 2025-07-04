import { createStackNavigator } from "@react-navigation/stack";



import DetalleProducto from "../../../Screen/Productos/DetalleProducto";
import EditarProducto from "../../../Screen/Productos/EditarProducto";
import ListarProducto from "../../../Screen/Productos/ListarProducto";

const Stack = createStackNavigator();

export default function ProductosStack () {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name= "ListarProductos"
                component={ListarProducto}
                options={{ title: "productos" }}
            />
             <Stack.Screen 
                name= "DetalleProductos"
                component={DetalleProducto}
                options={{ title: "Detalle Producto" }}
            />
             <Stack.Screen 
                name= "EditarProductos"
                component={EditarProducto}
                options={{ title: "Nuevo/Editar Productos" }}
            />
        </Stack.Navigator>
    );
}