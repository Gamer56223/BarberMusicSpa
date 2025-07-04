import { createStackNavigator } from "@react-navigation/stack";

import DetallePromocion from "../../../Screen/Promociones/DetallePromocion";
import EditarPromocion from "../../../Screen/Promociones/EditarPromocion";
import ListarPromocion from "../../../Screen/Promociones/ListarPromocion";

const Stack = createStackNavigator();

export default function PromocionesStack () {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name= "ListarPromociones"
                component={ListarPromocion}
                options={{ title: "promociones" }}
            />
             <Stack.Screen 
                name= "DetallePromociones"
                component={DetallePromocion}
                options={{ title: "Detalle Promoción" }}
            />
             <Stack.Screen 
                name= "EditarPromociones"
                component={EditarPromocion}
                options={{ title: "Nuevo/Editar Promociones" }}
            />
        </Stack.Navigator>
    );
}