import { useEffect, useState } from "react";
import { ActivityIndicator, SafeAreaView, StyleSheet, Text, View } from "react-native";
import BotonComponent from "../../components/BottonComponent"; // Asegúrate de que la ruta sea correcta

export default function DetalleExcepcionHorarioSucursal({ route, navigation }) {

    const { detalleexcepcionhorariosucursalId } = route.params;
    const [detalleexcepcionhorariosucursal, setADetalleExcepcionHorarioSucursal] = useState(null);
    const [loading, setLoading] = useState(true);

    const excepcionhorariosucursalesEjemplo = [
        { id: '1', fecha: '20/06/2025', esta_cerrado: '22/06/2025', hora_apertura: '10:00 am', hora_cierre: '05:00 pm', descripcion: 'Consulta'},
        { id: '2', fecha: '20/06/2025', esta_cerrado: '22/06/2025', hora_apertura: '02:00 pm', hora_cierre: '06:00 pm', descripcion: 'Revisión' },
        { id: '3', fecha: '20/06/2025', esta_cerrado: '22/06/2025', hora_apertura: '06:00 pm', hora_cierre: '08:00 pm', descripcion: 'urgencia'},
    ];

    useEffect(() => {
        const foundDetalleExcepcionHorarioSucursal = detalleexcepcionhorariosucursalesEjemplo.find(eh => eh.id === detalleexcepcionhorariosucursalId);
        setCita(foundDetalleExcepcionHorarioSucursal);
        setLoading(false);
    }, [detalleexcepcionhorariosucursalId]); 

    if (loading) {
        return (
            <View style={[styles.container, { justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f4f8' }]}>
                <ActivityIndicator size="large" color="#007B8C" />
                <Text style={{ marginTop: 15, fontSize: 18, color: '#555' }}>Cargando detalles de la Excepción Horario de la Sucursal...</Text>
            </View>
        );
    }

    if (!detalleexcepcionhorariosucursal) {
        return (
            <SafeAreaView style={[styles.container, {backgroundColor: '#f0f4f8'}]}>
                <Text style={[styles.title, {color: '#2c3e50'}]}>Detalle de la Excepción Horario Sucursal</Text>
                <View style={[styles.detailCard, {backgroundColor: '#FFFFFF', shadowColor: 'rgba(0, 0, 0, 0.1)'}]}>
                    <Text style={[styles.errorText, {color: 'red'}]}>No se encontraron detalles para esta Excepción de Horario de la Sucursal.</Text>
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
            <Text style={[styles.title, {color: '#2c3e50'}]}>Detalle de la Excepción Horaria de la Sucursal</Text>

            <View style={[styles.detailCard, {backgroundColor: '#FFFFFF', shadowColor: 'rgba(0, 0, 0, 0.1)'}]}>
                <Text style={[styles.detallexcepcionhorariosucursalName, {color: '#2c3e50'}]}>{cita.Nombre}</Text>
                <Text style={[styles.detailText, {color: '#5C6F7F'}]}><Text style={styles.detailLabel}>ID: </Text>{detalleexcepcionhorariosucursal.id}</Text>
                <Text style={[styles.detailText, {color: '#5C6F7F'}]}><Text style={styles.detailLabel}>Fecha: </Text>{detalleexcepcionhorariosucursal.fecha}</Text>
                <Text style={[styles.detailText, {color: '#5C6F7F'}]}><Text style={styles.detailLabel}>Estado de Cierre: </Text>{detalleexcepcionhorariosucursal.esta_cerrado}</Text>
                <Text style={[styles.detailText, {color: '#5C6F7F'}]}><Text style={styles.detailLabel}>Hora Apertura: </Text>{detalleexcepcionhorariosucursal.hora_apertura}</Text>
                <Text style={[styles.detailText, {color: '#5C6F7F'}]}><Text style={styles.detailLabel}>Hora Cierre: </Text>{detalleexcepcionhorariosucursal.hora_cierre}</Text>
                <Text style={[styles.detailText, {color: '#5C6F7F'}]}><Text style={styles.detailLabel}>Descripción: </Text>{detalleexcepcionhorariosucursal.descripcion}</Text>        
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
    excepcionhorariosucursalName: {
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
