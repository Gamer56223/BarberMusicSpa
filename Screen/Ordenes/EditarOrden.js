import { useEffect, useState } from "react";
import { ActivityIndicator, Alert, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import BotonComponent from "../../components/BottonComponent";

export default function EditarOrden({ route, navigation }) {

    const { ordenId } = route.params || {};

    const [orden, setOrden] = useState(null);
    const [loading, setLoading] = useState(true);

  
    const [id, setId] = useState('');
    const [numero_orden, setNumero_Orden] = useState('');
    const [fecha_orden, setFecha_Orden] = useState('');
    const [fecha_recibida, setFecha_Recibida] = useState('');
    const [subtotal, setSubtotal] = useState('');
    const [descuento_total, setDescuento_Total] = useState('');
    const [impuestos_total, setImpuestos_Total] = useState('');
    const [total_orden, setTotal_Orden] = useState('');
    const [estado_orden, setEstado_Orden] = useState('');
    const [direccion_envio_calle, setDireccion_Envio_Calle] = useState('');
    const [direccion_envio_numero_exterior, setDireccion_Envio_Numero_Exterior] = useState('');
    const [direccion_envio_numero_interior, setDireccion_Envio_Numero_Interior] = useState('');
    const [direccion_envio_colonia, setDireccion_Envio_Colonia] = useState('');
    const [direccion_envio_codigo_postal, setDireccion_Envio_Codigo_Postal] = useState('');
    const [direccion_envio_municipio_alcaldia, setDireccion_Envio_Municipio_Alcaldia] = useState('');
    const [direccion_envio_ciudad, setDireccion_Envio_Ciudad] = useState('');
    const [direccion_envio_estado, setDireccion_Envio_Estado] = useState('');
    const [notas_orden, setNotas_Orden] = useState('');

    const ordenesEjemplo = [
        { id: '1', numero_orden: '50', fecha_orden: '03/07/2025', fecha_recibida: '05/07/2025', subtotal: '$45K', descuento_total: '$20K', impuestos_total: '700K', total_orden: '25K', estado_orden: 'activo', direccion_envio_calle: 'venezuela', direccion_envio_numero_exterior: '505', direccion_envio_numero_interior: '404', direccion_envio_colonia: '90', direccion_envio_codigo_postal: '9090', direccion_envio_municipio_alcaldia: 'carrera 12', direccion_envio_ciudad: '599', direccion_envio_estado: 'activo', notas_orden: 'null'},
        
    ];

    useEffect(() => {
        if (ordenId) {
            const foundOrden = ordenesEjemplo.find(or => or.id === ordenId);
            if (foundOrden) {
                setOrden(foundOrden);
                setId(foundOrden.id);
                setNumero_Orden(foundOrden.Numero_Orden);
                setFecha_Orden(foundOrden.Fecha_Orden);
                setFecha_Recibida(foundOrden.Fecha_Recibida);
                setSubtotal(foundOrden.Subtotal);
                setDescuento_Total(foundOrden.Descuento_Total);
                setImpuestos_Total(foundOrden.Impuestos_Total);
                setTotal_Orden(foundOrden.Total_Orden);
                setEstado_Orden(foundOrden.Estado_Orden);
                setDireccion_Envio_Calle(foundOrden.Direccion_Envio_Calle);
                setDireccion_Envio_Numero_Exterior(foundOrden.Direccion_Envio_Numero_Exterior);
                setDireccion_Envio_Numero_Interior(foundOrden.Direccion_Envio_Numero_Interior);
                setDireccion_Envio_Colonia(foundOrden.Direccion_Envio_Colonia);
                setDireccion_Envio_Codigo_Postal(foundOrden.Direccion_Envio_Codigo_Postal);
                setDireccion_Envio_Municipio_Alcaldia(foundOrden.Direccion_Envio_Municipio_Alcaldia);
                setDireccion_Envio_Ciudad(foundOrden.Direccion_Envio_Ciudad);
                setDireccion_Envio_Estado(foundOrden.Direccion_Envio_Estado);
                setNotas_Orden(foundOrden.Notas_Orden);

            } else {
                Alert.alert("Error", "Orden no encontrada.");
                navigation.goBack(); 
            }
        } else {
        }
        setLoading(false);
    }, [ordenId]);

    const handleSave = () => {
        const ordenData = {
            id: ordenId || new Date().getTime().toString(), // Generar ID si es nueva
            Numero_Orden: numero_orden,
            Fecha_Orden: fecha_orden,
            Fecha_Recibida: fecha_recibida,
            Descuento_Total: descuento_total,
            Impuestos_Total: impuestos_total,
            Total_Orden: total_orden,
            Estado_Orden: estado_orden,
            Direccion_Envio_Calle: direccion_envio_calle,
            Direccion_Envio_Numero_Exterior: direccion_envio_numero_exterior,
            Direccion_Envio_Numero_Interior: direccion_envio_numero_interior,
            Direccion_Envio_Colonia: direccion_envio_colonia,
            Direccion_Envio_Codigo_Postal: direccion_envio_codigo_postal,
            Direccion_Envio_Municipio_Alcaldia: direccion_envio_municipio_alcaldia,
            Direccion_Envio_Ciudad: direccion_envio_ciudad,
            Direccion_Envio_Estado: direccion_envio_estado,
            Notas_Orden: notas_orden,
        };
        console.log("Datos a guardar:", ordenData);
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
                <Text style={styles.loadingText}>Cargando datos de la Ordén...</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>{ordenId ? "Editar Orden" : "Crear Nueva Orden"}</Text>

            <ScrollView style={styles.formScrollView}>
                <View style={styles.formCard}>
                    <Text style={styles.label}>Nombre de la Ordén:</Text>
                    <TextInput
                        style={styles.input}
                        value={id}
                        onChangeText={setId}
                        placeholder="Id"
                        placeholderTextColor="#999"
                    />

                    <Text style={styles.label}>Número Ordén:</Text>
                    <TextInput
                        style={styles.input}
                        value={numero_orden}
                        onChangeText={setNumero_Orden}
                        placeholder="Número Ordén"
                        placeholderTextColor="#999"
                        keyboardType="default" // Podrías usar 'datetime' o una librería de selección de fecha
                    />

                    <Text style={styles.label}>Fecha Ordén:</Text>
                    <TextInput
                        style={styles.input}
                        value={fecha_orden}
                        onChangeText={setFecha_Orden}
                        placeholder="Fecha Ordén"
                        placeholderTextColor="#999"
                    />

                    <Text style={styles.label}>Fecha Recibida:</Text>
                    <TextInput
                        style={styles.input}
                        value={fecha_recibida}
                        onChangeText={setFecha_Recibida}
                        placeholder="Fecha Recibida"
                        placeholderTextColor="#999"
                        keyboardType="default" 
                    />

                    <Text style={styles.label}>Subtotal:</Text>
                    <TextInput
                        style={styles.input}
                        value={subtotal}
                        onChangeText={setSubtotal}
                        placeholder="Subtotal"
                        placeholderTextColor="#999"
                    />

                    <Text style={styles.label}>Descuento Total:</Text>
                    <TextInput
                        style={styles.inputTextArea}
                        value={descuento_total}
                        onChangeText={setDescuento_Total}
                        placeholder="Descuento Total"
                        placeholderTextColor="#999"
                        multiline={true}
                        numberOfLines={4}
                    />

                    <Text style={styles.label}>Impuestos Total:</Text>
                    <TextInput
                        style={styles.inputTextArea}
                        value={impuestos_total}
                        onChangeText={setImpuestos_Total}
                        placeholder="Impuestos Total"
                        placeholderTextColor="#999"
                        multiline={true}
                        numberOfLines={4}
                    />

                    <Text style={styles.label}>Total Ordén:</Text>
                    <TextInput
                        style={styles.inputTextArea}
                        value={total_orden}
                        onChangeText={setTotal_Orden}
                        placeholder="Total Ordén"
                        placeholderTextColor="#999"
                        multiline={true}
                        numberOfLines={4}
                    />

                    <Text style={styles.label}>Estado Ordén:</Text>
                    <TextInput
                        style={styles.inputTextArea}
                        value={estado_orden}
                        onChangeText={setEstado_Orden}
                        placeholder="Estado Ordén"
                        placeholderTextColor="#999"
                        multiline={true}
                        numberOfLines={4}
                    />

                    <Text style={styles.label}>Dirección Envio Calle:</Text>
                    <TextInput
                        style={styles.inputTextArea}
                        value={direccion_envio_calle}
                        onChangeText={setDireccion_Envio_Calle}
                        placeholder="Dirección Envio Calle"
                        placeholderTextColor="#999"
                        multiline={true}
                        numberOfLines={4}
                    />

                    <Text style={styles.label}>Dirección Envio Número Exterior:</Text>
                    <TextInput
                        style={styles.inputTextArea}
                        value={direccion_envio_numero_exterior}
                        onChangeText={setDireccion_Envio_Numero_Exterior}
                        placeholder="Dirección Envio Número Exterior"
                        placeholderTextColor="#999"
                        multiline={true}
                        numberOfLines={4}
                    />

                    <Text style={styles.label}>Dirección Envio Número Interior:</Text>
                    <TextInput
                        style={styles.inputTextArea}
                        value={direccion_envio_numero_interior}
                        onChangeText={setDireccion_Envio_Numero_Interior}
                        placeholder="Impuestos Total"
                        placeholderTextColor="#999"
                        multiline={true}
                        numberOfLines={4}
                    />

                    <Text style={styles.label}>Dirección Envio Colonia:</Text>
                    <TextInput
                        style={styles.inputTextArea}
                        value={direccion_envio_colonia}
                        onChangeText={setDireccion_Envio_Colonia}
                        placeholder="Dirección Envio Colonia"
                        placeholderTextColor="#999"
                        multiline={true}
                        numberOfLines={4}
                    />

                    <Text style={styles.label}>Dirección Envio Código Postal:</Text>
                    <TextInput
                        style={styles.inputTextArea}
                        value={direccion_envio_codigo_postal}
                        onChangeText={setDireccion_Envio_Codigo_Postal}
                        placeholder="Impuestos Total"
                        placeholderTextColor="#999"
                        multiline={true}
                        numberOfLines={4}
                    />

                    <Text style={styles.label}>Dirección Envio Municipio Alcaldia:</Text>
                    <TextInput
                        style={styles.inputTextArea}
                        value={direccion_envio_municipio_alcaldia}
                        onChangeText={setDireccion_Envio_Municipio_Alcaldia}
                        placeholder="Dirección Envio Municipio Alcaldia"
                        placeholderTextColor="#999"
                        multiline={true}
                        numberOfLines={4}
                    />

                    <Text style={styles.label}>Dirección Envio Ciudad:</Text>
                    <TextInput
                        style={styles.inputTextArea}
                        value={direccion_envio_ciudad}
                        onChangeText={setDireccion_Envio_Ciudad}
                        placeholder="Dirección Envio Ciudad"
                        placeholderTextColor="#999"
                        multiline={true}
                        numberOfLines={4}
                    />

                    <Text style={styles.label}>Dirección Envio Estado:</Text>
                    <TextInput
                        style={styles.inputTextArea}
                        value={direccion_envio_estado}
                        onChangeText={setDireccion_Envio_Estado}
                        placeholder="Dirección Envio Estado"
                        placeholderTextColor="#999"
                        multiline={true}
                        numberOfLines={4}
                    />

                    <Text style={styles.label}>Notas Ordén:</Text>
                    <TextInput
                        style={styles.inputTextArea}
                        value={notas_orden}
                        onChangeText={setNotas_Orden}
                        placeholder="Notas Ordén"
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