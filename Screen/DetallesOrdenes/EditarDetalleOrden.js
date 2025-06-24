import { useEffect, useState } from "react";
import { ActivityIndicator, Alert, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import BotonComponent from "../../components/BottonComponent";

export default function EditarDetalleOrden({ route, navigation }) {

    const { detalleordenId } = route.params || {};

    const [detalleorden, setDetalleOrden] = useState(null);
    const [loading, setLoading] = useState(true);

  
    const [id, setId] = useState('');
    const [numero_orden, setNumero_Orden] = useState('');
    const [fecha_orden, setFecha_Orden] = useState('');
    const [fecha_recibida, setFecha_Recibida] = useState('');
    const [subtotal, setSubTotal] = useState('');
    const [descuento_total, setDescuento_Total] = useState('');
    const [impuestos_total, setImpuestos_Total] = useState('');
    const [total_orden, setTotal_Orden] = useState('');
    const [estado_orden, setEstado_Orden] = useState('');
    const [direccion_envio_calle, setDireccion_Envio_Calle] = useState('');
    const [direccion_envio_numero_exterior, setDireccion_Envio_Numero_exterior] = useState('');
    const [direccion_envio_numero_interior, setDireccion_Envio_Numero_Interior] = useState('');
    const [direccion_envio_colonia, setDireccion_Envio_Colonia] = useState('');
    const [direccion_envio_codigo_postal, setDireccion_Envio_Codigo_Postal] = useState('');
    const [direccion_envio_municipio_alcaldia, setDireccion_Envio_Municipio_Alcaldia] = useState('');
    const [direccion_envio_ciudad, setDireccion_Envio_Ciudad] = useState('');
    const [direccion_envio_estado, setDireccion_Envio_Estado] = useState('');
    const [notas_orden, setNotas_Orden] = useState('');


    const detalleordenesEjemplo = [
        { id: '1', numero_orden: '20', fecha_orden: '22/06/2025', fecha_recibida: '23/06/2025', subtotal: '$50k', descuento_total: '$5k', impuestos_total: '$50k', total_orden:'$1.5M', estado_orden: 'Activo', direccion_envio_calle: 'venezuela', direccion_envio_numero_exterior: '96', direccion_numero_interior: 'caracas', direccion_envio_colonia: 'calle 13', direccion_envio_codigo_postal: '1010', direccion_envio_municipio_alcaldia: '560', direccion_envio_ciudad: '6789', direccion_envio_estado: '134', notas_orden: '1' },
        { id: '2', numero_orden: '22', fecha_orden: '22/06/2025', fecha_recibida: '23/06/2025', subtotal: '$70k', descuento_total: '$1.5k', impuestos_total: '$200k', total_orden:'$5.5M', estado_orden: 'Activo', direccion_envio_calle: 'venezuela', direccion_envio_numero_exterior: '69', direccion_numero_interior: 'caracas', direccion_envio_colonia: 'calle 9', direccion_envio_codigo_postal: '1015', direccion_envio_municipio_alcaldia: '654', direccion_envio_ciudad: '6778', direccion_envio_estado: '156', notas_orden: '2' },
        { id: '3', numero_orden: '23', fecha_orden: '22/06/2025', fecha_recibida: '23/06/2025', subtotal: '$150k', descuento_total: '$10k', impuestos_total: '$750k', total_orden:'$10M', estado_orden: 'Activo', direccion_envio_calle: 'Santa Fe de Bogotá', direccion_envio_numero_exterior: '67', direccion_numero_interior: 'colombia', direccion_envio_colonia: 'calle 10', direccion_envio_codigo_postal: '1016', direccion_envio_municipio_alcaldia: '535', direccion_envio_ciudad: '6790', direccion_envio_estado: '112', notas_orden: '3' },


        
    ];

    useEffect(() => {
        if (detalleordenId) {
            const foundDetalleOrden = detalleordenesEjemplo.find(c => c.id === detalleordenId);
            if (foundDetalleOrden) {
                setDetalleOrden(foundDetalleOrden);
                setId(foundDetalleOrden.id);
                setNumero_Orden(foundDetalleOrden.Fecha_Hora_Inicio);
                setFecha_Orden(foundDetalleOrden.Fecha_Hora_Fin);
                setFecha_Recibida(foundDetalleOrden.Precio_Final);
                setSubTotal(foundDetalleOrden.Estado);
                setDescuento_Total(foundDetalleOrden.Notas_Cliente);
                setImpuestos_Total(foundDetalleOrden.Notas_Internas);
                setTotal_Orden(foundDetalleOrden.Notas_Internas);
                setEstado_Orden(foundDetalleOrden.Notas_Internas);
                setDireccion_Envio_Calle(foundDetalleOrden.Notas_Internas);
                setDireccion_Envio_Numero_exterior(foundDetalleOrden.Notas_Internas);
                setDireccion_Envio_Numero_Interior(foundDetalleOrden.Notas_Internas);
                setDireccion_Envio_Colonia(foundDetalleOrden.Notas_Internas);
                setDireccion_Envio_Codigo_Postal(foundDetalleOrden.Notas_Internas);
                setDireccion_Envio_Municipio_Alcaldia(foundDetalleOrden.Notas_Internas);
                setDireccion_Envio_Ciudad(foundDetalleOrden.Notas_Internas);
                setDireccion_Envio_Estado(foundDetalleOrden.Notas_Internas);
                setNotas_Orden(foundDetalleOrden.Notas_Internas);
  
            } else {
                Alert.alert("Error", "Detalle Orden no encontrado.");
                navigation.goBack(); 
            }
        } else {
        }
        setLoading(false);
    }, [detalleordenId]);

    const handleSave = () => {
        const detalleordenData = {
            id: detalleordenId || new Date().getTime().toString(), // Generar ID si es nueva
            Numero_Orden: numero_orden,
            Fecha_Orden: fecha_orden,
            Fecha_Recibida: fecha_recibida,
            SubTotal: subtotal,
            Descuento_Total: descuento_total,
            Total_Orden: total_orden,
            Estado_Orden: estado_orden,
            Direccion_Envio_Calle: direccion_envio_calle,
            Direccion_Envio_Numero_Exteior: direccion_envio_numero_exterior,
            Direccion_Envio_Numero_Interior: direccion_envio_numero_interior,
            Direccion_Envio_Colonia: direccion_envio_colonia,
            Direccion_Envio_Codigo_Postal: direccion_envio_codigo_postal,
            Direccion_Envio_Municipio_Alcaldia: direccion_envio_municipio_alcaldia,
            Direccion_Envio_Ciudad: direccion_envio_ciudad,
            Direccion_Envio_Estado: direccion_envio_estado,
            Notas_Orden: notas_orden,

        };
        console.log("Datos a guardar:", detalleordenData);
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
                <Text style={styles.loadingText}>Cargando datos del Detalle de la Orden...</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>{citaId ? "Editar DetalleOrden" : "Crear Nuevo Detalle Orden"}</Text>

            <ScrollView style={styles.formScrollView}>
                <View style={styles.formCard}>
                    <Text style={styles.label}>Nombre del Detalle Orden:</Text>
                    <TextInput
                        style={styles.input}
                        value={id}
                        onChangeText={setId}
                        placeholder="Id"
                        placeholderTextColor="#999"
                    />

                    <Text style={styles.label}>Número Orden:</Text>
                    <TextInput
                        style={styles.input}
                        value={numero_orden}
                        onChangeText={setNumero_Orden}
                        placeholder="Número Orden"
                        placeholderTextColor="#999"
                        keyboardType="default" // Podrías usar 'datetime' o una librería de selección de fecha
                    />

                    <Text style={styles.label}>Fecha Orden:</Text>
                    <TextInput
                        style={styles.input}
                        value={fecha_orden}
                        onChangeText={setFecha_Orden}
                        placeholder="Fecha Orden"
                        placeholderTextColor="#999"
                    />

                    <Text style={styles.label}>Fecha Recibida:</Text>
                    <TextInput
                        style={styles.input}
                        value={fecha_recibida}
                        onChangeText={setFecha_Recibida}
                        placeholder="Fecha Recibida "
                        placeholderTextColor="#999"
                        keyboardType="default" 
                    />

                    <Text style={styles.label}>Sub Total:</Text>
                    <TextInput
                        style={styles.input}
                        value={subtotal}
                        onChangeText={setSubTotal}
                        placeholder="Sub Total"
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

                    <Text style={styles.label}>Impuestos Totales:</Text>
                    <TextInput
                        style={styles.inputTextArea}
                        value={impuestos_total}
                        onChangeText={setImpuestos_Total}
                        placeholder="Impuestos Total"
                        placeholderTextColor="#999"
                        multiline={true}
                        numberOfLines={4}
                    />

                    <Text style={styles.label}>Estado Ordén:</Text>
                    <TextInput
                        style={styles.inputTextArea}
                        value={estado_orden}
                        onChangeText={setEstado_Orden}
                        placeholder="Estado Orden"
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
                        placeholder="Direccion Envio Número Exterior"
                        placeholderTextColor="#999"
                        multiline={true}
                        numberOfLines={4}
                    />

                    <Text style={styles.label}>Dirección Envio Número Interior:</Text>
                    <TextInput
                        style={styles.inputTextArea}
                        value={direccion_envio_numero_interior}
                        onChangeText={setDireccion_Envio_Numero_Interior}
                        placeholder="Direccion Envio Número Exterior"
                        placeholderTextColor="#999"
                        multiline={true}
                        numberOfLines={4}
                    />

                    <Text style={styles.label}>Dirección Envio Número Exterior:</Text>
                    <TextInput
                        style={styles.inputTextArea}
                        value={direccion_envio_numero_exterior}
                        onChangeText={setDireccion_Envio_Numero_exterior}
                        placeholder="Direccion Envio Número Exterior"
                        placeholderTextColor="#999"
                        multiline={true}
                        numberOfLines={4}
                    />

                    <Text style={styles.label}>Dirección Envio Número Exterior:</Text>
                    <TextInput
                        style={styles.inputTextArea}
                        value={direccion_envio_numero_exterior}
                        onChangeText={setDireccion_Envio_Numero_exterior}
                        placeholder="Direccion Envio Número Exterior"
                        placeholderTextColor="#999"
                        multiline={true}
                        numberOfLines={4}
                    />

                    <Text style={styles.label}>Dirección Envio Número Interior:</Text>
                    <TextInput
                        style={styles.inputTextArea}
                        value={direccion_envio_numero_interior}
                        onChangeText={setDireccion_Envio_Numero_Interior}
                        placeholder="Direccion Envio Número Interior"
                        placeholderTextColor="#999"
                        multiline={true}
                        numberOfLines={4}
                    />

                    <Text style={styles.label}>Dirección Envio Colonia:</Text>
                    <TextInput
                        style={styles.inputTextArea}
                        value={direccion_envio_colonia}
                        onChangeText={setDireccion_Envio_Colonia}
                        placeholder="Direccion Envio Colonia"
                        placeholderTextColor="#999"
                        multiline={true}
                        numberOfLines={4}
                    />

                    <Text style={styles.label}>Dirección Envio Código postal:</Text>
                    <TextInput
                        style={styles.inputTextArea}
                        value={direccion_envio_codigo_postal}
                        onChangeText={setDireccion_Envio_Codigo_Postal}
                        placeholder="Direccion Envio Código Postal"
                        placeholderTextColor="#999"
                        multiline={true}
                        numberOfLines={4}
                    />

                    <Text style={styles.label}>Dirección Envio Municipio Alcaldia:</Text>
                    <TextInput
                        style={styles.inputTextArea}
                        value={direccion_envio_municipio_alcaldia}
                        onChangeText={setDireccion_Envio_Municipio_Alcaldia}
                        placeholder="Direccion Envio Municipio Alcaldia"
                        placeholderTextColor="#999"
                        multiline={true}
                        numberOfLines={4}
                    />

                    <Text style={styles.label}>Dirección Envio Ciudad:</Text>
                    <TextInput
                        style={styles.inputTextArea}
                        value={direccion_envio_ciudad}
                        onChangeText={setDireccion_Envio_Ciudad}
                        placeholder="Direccion Envio Colonia"
                        placeholderTextColor="#999"
                        multiline={true}
                        numberOfLines={4}
                    />

                    <Text style={styles.label}>Dirección Envio Estado:</Text>
                    <TextInput
                        style={styles.inputTextArea}
                        value={direccion_envio_estado}
                        onChangeText={setDireccion_Envio_Estado}
                        placeholder="Direccion Envio Estado"
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