import { createStackNavigator } from "@react-navigation/stack";

import DetalleProductoPromocion from "../../../Screen/ProductosPromociones/DetalleProductoPromocion";
import EditarProductoPromocion from "../../../Screen/ProductosPromociones/EditarProductoPromocion";
import ListarProductoPromocion from "../../../Screen/ProductosPromociones/ListarProductoPromocion";

const Stack = createStackNavigator();

export default function ProductoPromocionesStack () {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name= "ListarProductoPromociones"
                component={ListarProductoPromocion}
                options={{ title: "productopromociones" }}
            />
             <Stack.Screen 
                name= "DetalleProductoPromociones"
                component={DetalleProductoPromocion}
                options={{ title: "Detalle Producto Promocion" }}
            />
             <Stack.Screen 
                name= "EditarProductoPromociones"
                component={EditarProductoPromocion}
                options={{ title: "Nuevo/Editar Producto Promociones" }}
            />
        </Stack.Navigator>
    );
}