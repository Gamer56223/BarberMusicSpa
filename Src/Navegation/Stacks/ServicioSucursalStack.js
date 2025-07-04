import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ListarServicioSucursal from "../../../Screen/ServiciosSucursales/ListarServicioSucursal";
import DetalleServicioSucursal from "../../../Screen/ServiciosSucursales/DetalleServicioSucursal";
import EditarServicioSucursal from "../../../Screen/ServiciosSucursales/EditarServicioSucursal";

const Stack = createStackNavigator();

export default function ServicioSucursalesStack () {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name= "ListarServicioSucursales"
                component={ListarServicioSucursal}
                options={{ title: "serviciosucursales" }}
            />
             <Stack.Screen 
                name= "DetalleServicioSucursales"
                component={DetalleServicioSucursal}
                options={{ title: "Detalle Sucursal" }}
            />
             <Stack.Screen 
                name= "EditarSucursales"
                component={EditarSucursal}
                options={{ title: "Nuevo/Editar Sucursales" }}
            />
        </Stack.Navigator>
    );
}