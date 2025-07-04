import { useEffect, useState } from "react";
import { ActivityIndicator, SafeAreaView, StyleSheet, Text, View } from "react-native";
import BotonComponent from "../../components/BottonComponent"; // Asegúrate de que la ruta sea correcta

export default function DetalleSucursal({ route, navigation }) {

    const { sucursalId } = route.params;
    const [sucursal, setSucursal] = useState(null);
    const [loading, setLoading] = useState(true);

    const sucursalesEjemplo = [
        { id: '1', nombre: 'Sede Soacha', imagen_path: 'www', direccion_calle: 'venezuela', direccion_numero_exterior: '657', direccion_numero_interior: '303', direccion_colonia: 'manzana a', direccion_codigo_postal: '78', direccion_municipio_alcaldia: 'floresta', direccion_ciudad: 'calle 4', direccion_estado: 'venezuela', telefono_contacto: '7603108', email_contacto: 'gmail', link_maps: 'www', latitud: '5', longitud: '20', activo: 'true'},
        { id: '2', nombre: 'Sede Bolivar', imagen_path: 'www', direccion_calle: 'venuezuela', direccion_numero_exterior: '657', direccion_numero_interior: '304', direccion_colonia: 'manzana b', direccion_codigo_postal: '77', direccion_municipio_alcaldia: 'tuta', direccion_ciudad: 'calle 5', direccion_estado: 'zulia', telefono_contacto: '7603102', email_contacto: 'gmail' , link_maps: 'www', latitud: '6', longitud: '22', activo: 'true'},
        { id: '3', nombre: 'Sede Santa Fe', imagen_path: 'www', direccion_calle: 'venezuela', direccion_numero_exterior: '657', direccion_numero_interior: '306', direccion_colonia:'manzana c', direccion_codigo_postal: '76', direccion_municipio_alcaldia: 'belen', direccion_ciudad: 'calle 6', direccion_estado: 'caracas', telefono_contacto: '7603103', email_contacto: 'gmail', link_maps: 'www', latitud: '7', longitud: '24', activo: 'true'},
    ];

    useEffect(() => {
        const foundSucursal = sucursalesEjemplo.find(c => c.id === sucursalId);
        setSucursal(foundCSucursal);
        setLoading(false);
    }, [sucursalId]); 

    if (loading) {
        return (
            <View style={[styles.container, { justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f4f8' }]}>
                <ActivityIndicator size="large" color="#007B8C" />
                <Text style={{ marginTop: 15, fontSize: 18, color: '#555' }}>Cargando detalles de la Sucursal...</Text>
            </View>
        );
    }

    if (!sucursal) {
        return (
            <SafeAreaView style={[styles.container, {backgroundColor: '#f0f4f8'}]}>
                <Text style={[styles.title, {color: '#2c3e50'}]}>Detalle de la Sucursal</Text>
                <View style={[styles.detailCard, {backgroundColor: '#FFFFFF', shadowColor: 'rgba(0, 0, 0, 0.1)'}]}>
                    <Text style={[styles.errorText, {color: 'red'}]}>No se encontraron detalles para esta Sucursal.</Text>
                    <BotonComponent
                        title="Volver al Listado"
                        onPress={() => navigation.goBack()}
                        buttonStyle={styles.backButton}
                        textStyle={styles.buttonText}
                    />
                </View>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={[styles.container, {backgroundColor: '#f0f4f8'}]}>
            <Text style={[styles.title, {color: '#2c3e50'}]}>Detalle de la Sucursal</Text>

            <View style={[styles.detailCard, {backgroundColor: '#FFFFFF', shadowColor: 'rgba(0, 0, 0, 0.1)'}]}>
                <Text style={[styles.sucursalName, {color: '#2c3e50'}]}>{sucursal.Nombre}</Text>
                <Text style={[styles.detailText, {color: '#5C6F7F'}]}><Text style={styles.detailLabel}>ID: </Text>{sucursal.id}</Text>
                <Text style={[styles.detailText, {color: '#5C6F7F'}]}><Text style={styles.detailLabel}>Nombre: </Text>{sucursal.nombre}</Text>
                <Text style={[styles.detailText, {color: '#5C6F7F'}]}><Text style={styles.detailLabel}>Imagen Path: </Text>{sucursal.imagen_path}</Text>
                <Text style={[styles.detailText, {color: '#5C6F7F'}]}><Text style={styles.detailLabel}>Dirección Calle: </Text>{sucursal.direccion_calle}</Text>
                <Text style={[styles.detailText, {color: '#5C6F7F'}]}><Text style={styles.detailLabel}>Dirección Número Exterior: </Text>{sucursal.direccion_numero_exterior}</Text>
                <Text style={[styles.detailText, {color: '#5C6F7F'}]}><Text style={styles.detailLabel}>Dirección Número Interior: </Text>{sucursal.direccion_numero_interior}</Text> 
                <Text style={[styles.detailText, {color: '#5C6F7F'}]}><Text style={styles.detailLabel}>Dirección Colonia: </Text>{sucursal.direccion_colonia}</Text> 
                <Text style={[styles.detailText, {color: '#5C6F7F'}]}><Text style={styles.detailLabel}>Dirección Código Postal: </Text>{sucursal.direccion_codigo_postal}</Text> 
                <Text style={[styles.detailText, {color: '#5C6F7F'}]}><Text style={styles.detailLabel}>Dirección Municipio Alcaldia: </Text>{sucursal.direccion_municipio_alcaldia}</Text>  
                <Text style={[styles.detailText, {color: '#5C6F7F'}]}><Text style={styles.detailLabel}>Dirección Ciudad: </Text>{sucursal.direccion_ciudad}</Text>  
                <Text style={[styles.detailText, {color: '#5C6F7F'}]}><Text style={styles.detailLabel}>Dirección Estado: </Text>{sucursal.direccion_estado}</Text> 
                <Text style={[styles.detailText, {color: '#5C6F7F'}]}><Text style={styles.detailLabel}>Telefono Contacto: </Text>{sucursal.telefono_contacto}</Text> 
                <Text style={[styles.detailText, {color: '#5C6F7F'}]}><Text style={styles.detailLabel}>Email Contacto: </Text>{sucursal.email_contacto}</Text>  
                <Text style={[styles.detailText, {color: '#5C6F7F'}]}><Text style={styles.detailLabel}>Link Maps: </Text>{sucursal.link_maps}</Text>
                <Text style={[styles.detailText, {color: '#5C6F7F'}]}><Text style={styles.detailLabel}>Latitud: </Text>{sucursal.latitud}</Text>  
                <Text style={[styles.detailText, {color: '#5C6F7F'}]}><Text style={styles.detailLabel}>Longitud: </Text>{sucursal.longitud}</Text> 
                <Text style={[styles.detailText, {color: '#5C6F7F'}]}><Text style={styles.detailLabel}>Activo: </Text>{sucursal.activo}</Text>  


            </View>

            <BotonComponent
                title="Volver al Listado"
                onPress={() => navigation.goBack()}
                buttonStyle={styles.backButton}
                textStyle={styles.buttonText}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 25,
        textAlign: 'center',
    },
    detailCard: {
        width: "100%",
        maxWidth: 400,
        padding: 25,
        borderRadius: 15,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 8,
        alignItems: "flex-start",
        marginBottom: 20,
    },
    sucursalName: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 15,
        textAlign: 'center',
        width: '100%',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#ccc',
        paddingBottom: 10,
    },
    detailText: {
        fontSize: 18,
        marginBottom: 8,
        width: '100%',
    },
    detailLabel: {
        fontWeight: 'bold',
    },
    errorText: {
        fontSize: 18,
        color: 'red',
        textAlign: 'center',
        marginBottom: 20,
        width: '100%',
    },
    backButton: {
        backgroundColor: "#007B8C", // Color consistente con el tema
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 8,
        marginTop: 15,
        width: '80%',
        maxWidth: 300,
        alignSelf: 'center',
    },
    buttonText: {
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 16,
    },
});
