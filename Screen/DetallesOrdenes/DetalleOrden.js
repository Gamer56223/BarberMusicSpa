import { useEffect, useState } from "react";
import { ActivityIndicator, SafeAreaView, StyleSheet, Text, View } from "react-native";
import BotonComponent from "../../components/BottonComponent"; // Asegúrate de que la ruta sea correcta

export default function DetalleOrden({ route, navigation }) {

    const { detalleordenId } = route.params;
    const [detalleorden, setOrden] = useState(null);
    const [loading, setLoading] = useState(true);
    const detalleordenesEjemplo = [
        { id: '1', numero_orden: '20', fecha_orden: '22/06/2025', fecha_recibida: '23/06/2025', subtotal: '$50k', descuento_total: '$5k', impuestos_total: '$50k', total_orden:'$1.5M', estado_orden: 'Activo', direccion_envio_calle: 'venezuela', direccion_envio_numero_exterior: '96', direccion_numero_interior: 'caracas', direccion_envio_colonia: 'calle 13', direccion_envio_codigo_postal: '1010', direccion_envio_municipio_alcaldia: '560', direccion_envio_ciudad: '6789', direccion_envio_estado: '134', notas_orden: '1' },
        { id: '2', numero_orden: '22', fecha_orden: '22/06/2025', fecha_recibida: '23/06/2025', subtotal: '$70k', descuento_total: '$1.5k', impuestos_total: '$200k', total_orden:'$5.5M', estado_orden: 'Activo', direccion_envio_calle: 'venezuela', direccion_envio_numero_exterior: '69', direccion_numero_interior: 'caracas', direccion_envio_colonia: 'calle 9', direccion_envio_codigo_postal: '1015', direccion_envio_municipio_alcaldia: '654', direccion_envio_ciudad: '6778', direccion_envio_estado: '156', notas_orden: '2' },
        { id: '3', numero_orden: '23', fecha_orden: '22/06/2025', fecha_recibida: '23/06/2025', subtotal: '$150k', descuento_total: '$10k', impuestos_total: '$750k', total_orden:'$10M', estado_orden: 'Activo', direccion_envio_calle: 'Santa Fe de Bogotá', direccion_envio_numero_exterior: '67', direccion_numero_interior: 'colombia', direccion_envio_colonia: 'calle 10', direccion_envio_codigo_postal: '1016', direccion_envio_municipio_alcaldia: '535', direccion_envio_ciudad: '6790', direccion_envio_estado: '112', notas_orden: '3' },


        
    ];

    useEffect(() => {
        const foundDetalleOrden = detalleordenesEjemplo.find(c => o.id === detalleordenId);
        setCita(foundDetalleOrden);
        setLoading(false);
    }, [detalleordenId]); 

    if (loading) {
        return (
            <View style={[styles.container, { justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f4f8' }]}>
                <ActivityIndicator size="large" color="#007B8C" />
                <Text style={{ marginTop: 15, fontSize: 18, color: '#555' }}>Cargando detalles de la Orden...</Text>
            </View>
        );
    }

    if (!orden) {
        return (
            <SafeAreaView style={[styles.container, {backgroundColor: '#f0f4f8'}]}>
                <Text style={[styles.title, {color: '#2c3e50'}]}>Detalle de la Ordén</Text>
                <View style={[styles.detailCard, {backgroundColor: '#FFFFFF', shadowColor: 'rgba(0, 0, 0, 0.1)'}]}>
                    <Text style={[styles.errorText, {color: 'red'}]}>No se encontraron detalles para esta Orden.</Text>
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
            <Text style={[styles.title, {color: '#2c3e50'}]}>Detalle de la Orden</Text>

            <View style={[styles.detailCard, {backgroundColor: '#FFFFFF', shadowColor: 'rgba(0, 0, 0, 0.1)'}]}>
                <Text style={[styles.detalleordenName, {color: '#2c3e50'}]}>{detalleorden.Nombre}</Text>
                <Text style={[styles.detailText, {color: '#5C6F7F'}]}><Text style={styles.detailLabel}>ID: </Text>{detalleorden.id}</Text>
                <Text style={[styles.detailText, {color: '#5C6F7F'}]}><Text style={styles.detailLabel}>Número de Orden: </Text>{detalleorden.numero_orden}</Text>
                <Text style={[styles.detailText, {color: '#5C6F7F'}]}><Text style={styles.detailLabel}>Fecha Orden: </Text>{detalleorden.fecha_orden}</Text>
                <Text style={[styles.detailText, {color: '#5C6F7F'}]}><Text style={styles.detailLabel}>Fecha Recibida: </Text>{detalleorden.fecha_recibida}</Text>
                <Text style={[styles.detailText, {color: '#5C6F7F'}]}><Text style={styles.detailLabel}>Sub Total: </Text>{detalleorden.subtotal}</Text>
                <Text style={[styles.detailText, {color: '#5C6F7F'}]}><Text style={styles.detailLabel}>Descuento Total: </Text>{detalleorden.descuento_total}</Text>
                <Text style={[styles.detailText, {color: '#5C6F7F'}]}><Text style={styles.detailLabel}>Impuestos Totales: </Text>{detalleorden.impuestos_total}</Text>   
                <Text style={[styles.detailText, {color: '#5C6F7F'}]}><Text style={styles.detailLabel}>Total Orden: </Text>{detalleorden.total_orden}</Text> 
                <Text style={[styles.detailText, {color: '#5C6F7F'}]}><Text style={styles.detailLabel}>Estado Orden: </Text>{detalleorden.estado_orden}</Text> 
                <Text style={[styles.detailText, {color: '#5C6F7F'}]}><Text style={styles.detailLabel}>Dirección Envio Calle: </Text>{detalleorden.direccion_envio_calle}</Text>
                <Text style={[styles.detailText, {color: '#5C6F7F'}]}><Text style={styles.detailLabel}>Dirección Envio Número Exterior: </Text>{detalleorden.direccion_envio_numero_exterior}</Text> 
                <Text style={[styles.detailText, {color: '#5C6F7F'}]}><Text style={styles.detailLabel}>Dirección Envio Número Interior: </Text>{detalleorden.direccion_envio_numero_interior}</Text>  
                <Text style={[styles.detailText, {color: '#5C6F7F'}]}><Text style={styles.detailLabel}>Dirección Envio Colonia: </Text>{detalleorden.direccion_envio_colonia}</Text> 
                <Text style={[styles.detailText, {color: '#5C6F7F'}]}><Text style={styles.detailLabel}>Dirección Envio Código Postal: </Text>{detalleorden.direccion_envio_codigo_postal}</Text>  
                <Text style={[styles.detailText, {color: '#5C6F7F'}]}><Text style={styles.detailLabel}>Dirección Envio Municipio Alcaldia: </Text>{detalleorden.direccion_envio_municipio_alcaldia}</Text>  
                <Text style={[styles.detailText, {color: '#5C6F7F'}]}><Text style={styles.detailLabel}>Dirección Envio Ciudad: </Text>{detalleorden.direccion_envio_ciudad}</Text> 
                <Text style={[styles.detailText, {color: '#5C6F7F'}]}><Text style={styles.detailLabel}>Dirección Envio Estado: </Text>{detalleorden.direccion_envio_estado}</Text>  
                <Text style={[styles.detailText, {color: '#5C6F7F'}]}><Text style={styles.detailLabel}>Notas Orden: </Text>{detalleorden.notas_orden}</Text>           


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
    detalleordenName: {
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
