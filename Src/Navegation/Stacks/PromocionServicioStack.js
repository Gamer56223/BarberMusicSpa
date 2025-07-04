import { createStackNavigator } from "@react-navigation/stack";


import DetallePromocionServicio from "../../../Screen/PromocionesServicios/DetallePromocionServicio";
import ListarPromocionServicio from "../../../Screen/PromocionesServicios/ListarPromocionServicio";

const Stack = createStackNavigator();

export default function PromocionServiciosStack () {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name= "ListarPromocionServicios"
                component={ListarPromocionServicio}
                options={{ title: "promocionservicios" }}
            />
             <Stack.Screen 
                name= "DetallePromocionServicios"
                component={DetallePromocionServicio}
                options={{ title: "Detalle Promocion Servicio" }}
            />
             <Stack.Screen 
                name= "EditarPromocionServicios"
                component={EditarPromocionServicio}
                options={{ title: "Nuevo/Editar Promoción Servicios" }}
            />
        </Stack.Navigator>
    );
}