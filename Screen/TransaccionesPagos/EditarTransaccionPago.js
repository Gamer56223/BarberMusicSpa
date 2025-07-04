import { useEffect, useState } from "react";
import { ActivityIndicator, Alert, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import BotonComponent from "../../components/BottonComponent";

export default function EditarTransaccionPago({ route, navigation }) {

    const { transaccionpagoId } = route.params || {};

    const [transaccionpago, setTransaccionPago] = useState(null);
    const [loading, setLoading] = useState(true);

  
    const [id, setId] = useState('');
    const [monto, setMonto] = useState('');
    const [moneda, setMoneda] = useState('');
    const [metodo_pago, setMetodo_Pago] = useState('');
    const [transaccion_pasarela, setTransaccion_Pasarela] = useState('');
    const [estado_pago, setEstado_Pago] = useState('');
    const [fecha_transaccion, setFecha_Transaccion] = useState('');
    const [datos_pasarela_request, setDatos_Pasarela_Request] = useState('');
    const [datos_pasarela_response, setDatos_Pasarela_Response] = useState('');




    const transaccionpagosEjemplo = [
        { id: '1', monto: '$74k', moneda: 'bolivar', metodo_pago: 'efectivo', estado_pago: 'activo', fecha_transaccion: '02/07/2025', datos_pasarela_request: 'none', datos_pasarela_response: 'none'},
        { id: '2', monto: '$120k', moneda: 'bolivar', metodo_pago: 'efectivo', estado_pago: 'activo', fecha_transaccion: '02/07/2025', datos_pasarela_request: 'none', datos_pasarela_response: 'none' },
        { id: '3', monto: '$10M', moneda: 'bolivar', metodo_pago: 'efectivo', estado_pago: 'activo', fecha_transaccion: '02/07/2025,', datos_pasarela_request: 'none', datos_pasarela_response: 'none'},
    ];

    useEffect(() => {
        if (transaccionpagoId) {
            const foundTransaccionPago = transaccionpagosEjemplo.find(tp => tp.id === transaccionpagoId);
            if (foundTransaccionPago) {
                setTransaccionPago(foundTransaccionPago);
                setId(foundTransaccionPago.id);
                setMonto(foundTransaccionPago.Nombre);
                setMetodo_Pago(foundTransaccionPago.Descripcion);
                setEstado_Pago(foundTransaccionPago.Precio_Final);
                setFecha_Transaccion(foundTransaccionPago.Estado);
                setDatos_Pasarela_Request(foundTransaccionPago.Notas_Cliente);
                setDatos_Pasarela_Response(foundTransaccionPago.Notas_Cliente);


            } else {
                Alert.alert("Error", "Transacción Pago no encontrada.");
                navigation.goBack(); 
            }
        } else {
        }
        setLoading(false);
    }, [transaccionpagoId]);

    const handleSave = () => {
        const transaccionpagoData = {
            id: transaccionpagoId || new Date().getTime().toString(), // Generar ID si es nueva
            Monto: monto,
            Moneda: moneda,
            Metodo_Pago: metodo_pago,
            Transaccion_Pasarela: transaccion_pasarela,
            Estado_Pago: estado_pago,
            Fecha_Transacccion: fecha_transaccion,
            Pasarela_Request: pasarela_request,
            Pasarela_Response: pasarela_response,



        };
        console.log("Datos a guardar:", transaccionpagoData);
        Alert.alert("Guardar", "Funcionalidad de guardar pendiente. Datos en consola.");
        navigation.goBack(); 
    };

    const handleCancel = () => {
        navigation.goBack(); 
    };

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#007B8C" />
                <Text style={styles.loadingText}>Cargando datos de la Transacción Pago...</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>{transaccionpagoId ? "Editar transacción Pago" : "Crear Nueva Transacción Pago"}</Text>

            <ScrollView style={styles.formScrollView}>
                <View style={styles.formCard}>
                    <Text style={styles.label}>Nombre de la Transacción Pago:</Text>
                    <TextInput
                        style={styles.input}
                        value={id}
                        onChangeText={setId}
                        placeholder="Id"
                        placeholderTextColor="#999"
                    />

                    <Text style={styles.label}>Monto:</Text>
                    <TextInput
                        style={styles.input}
                        value={monto}
                        onChangeText={setMonto}
                        placeholder="Monto"
                        placeholderTextColor="#999"
                        keyboardType="default" // Podrías usar 'datetime' o una librería de selección de fecha
                    />

                    <Text style={styles.label}>Moneda:</Text>
                    <TextInput
                        style={styles.input}
                        value={moneda}
                        onChangeText={setMoneda}
                        placeholder="Moneda"
                        placeholderTextColor="#999"
                    />

                    <Text style={styles.label}>Metodo Pago:</Text>
                    <TextInput
                        style={styles.input}
                        value={metodo_pago}
                        onChangeText={setMetodo_Pago}
                        placeholder="Metodo Pago"
                        placeholderTextColor="#999"
                        keyboardType="default" 
                    />

                    <Text style={styles.label}>Estado Pago:</Text>
                    <TextInput
                        style={styles.input}
                        value={estado_pago}
                        onChangeText={setEstado_Pago}
                        placeholder="Estado Pago"
                        placeholderTextColor="#999"
                    />

                    <Text style={styles.label}>Fecha Transacción:</Text>
                    <TextInput
                        style={styles.inputTextArea}
                        value={fecha_transaccion}
                        onChangeText={setFecha_Transaccion}
                        placeholder="Fecha Transacción"
                        placeholderTextColor="#999"
                        multiline={true}
                        numberOfLines={4}
                    />

                    <Text style={styles.label}>Datos Pasarela Request:</Text>
                    <TextInput
                        style={styles.inputTextArea}
                        value={datos_pasarela_request}
                        onChangeText={setDatos_Pasarela_Request}
                        placeholder="Datos Request"
                        placeholderTextColor="#999"
                        multiline={true}
                        numberOfLines={4}
                    />

                    <Text style={styles.label}>Datos Pasarela Response:</Text>
                    <TextInput
                        style={styles.inputTextArea}
                        value={datos_pasarela_response}
                        onChangeText={setDatos_Pasarela_Response}
                        placeholder="Datos Response"
                        placeholderTextColor="#999"
                        multiline={true}
                        numberOfLines={4}
                    />

                    <View style={styles.buttonContainer}>
                        <BotonComponent
                            title="Guardar Cambios"
                            onPress={handleSave}
                            buttonStyle={styles.saveButton}
                            textStyle={styles.buttonText}
                        />
                        <BotonComponent
                            title="Cancelar"
                            onPress={handleCancel}
                            buttonStyle={styles.cancelButton}
                            textStyle={styles.buttonText}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E0F2F7", // Fondo suave, co nsistente
        alignItems: "center",
        paddingTop: 20, // Ajuste para SafeAreaView
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f4f8',
    },
    loadingText: {
        marginTop: 15,
        fontSize: 18,
        color: '#555',
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 25,
        color: "#2C3E50",
        textAlign: 'center',
    },
    formScrollView: {
        width: "100%",
        paddingHorizontal: 20,
    },
    formCard: {
        backgroundColor: "#FFFFFF",
        borderRadius: 15,
        padding: 20,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 8,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: "#34495E",
        marginBottom: 8,
        marginTop: 10,
    },
    input: {
        height: 48,
        borderColor: "#BDC3C7", // Borde suave
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 12,
        fontSize: 16,
        color: "#34495E",
        backgroundColor: "#F9F9F9", // Fondo claro para inputs
        marginBottom: 15,
    },
    inputTextArea: {
        borderColor: "#BDC3C7",
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10, // Ajuste para multiline
        fontSize: 16,
        color: "#34495E",
        backgroundColor: "#F9F9F9",
        marginBottom: 15,
        minHeight: 100, // Altura mínima para el área de texto
        textAlignVertical: 'top', // Para que el texto empiece arriba
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 20,
    },
    saveButton: {
        backgroundColor: "#28A745", // Verde para guardar
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        minWidth: 140,
        alignItems: 'center',
    },
    cancelButton: {
        backgroundColor: "#6C757D", // Gris para cancelar
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        minWidth: 140,
        alignItems: 'center',
    },
    buttonText: {
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 16,
    },
});