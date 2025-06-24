import { useEffect, useState } from "react";
import { ActivityIndicator, Alert, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import BotonComponent from "../../components/BottonComponent";

export default function EditarExcepcionHorarioSucursal({ route, navigation }) {

    const { editarexcepcionhorariosucursalId } = route.params || {};

    const [editarexcepcionhorariosucursal, setExcepcionHorarioSucursal] = useState(null);
    const [loading, setLoading] = useState(true);

  
    const [id, setId] = useState('');
    const [fecha, setFecha] = useState('');
    const [esta_cerrado, setEsta_Cerrado] = useState('');
    const [hora_apertura, setHora_Apertura] = useState('');
    const [hora_cierre, setHora_Cierre] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const detalleexcepcionhorariosucursalesEjemplo = [
        { id: '1', fecha: '20/06/2025', esta_cerrado: '22/06/2025', hora_apertura: '10:00 am', hora_cierre: '05:00 pm', descripcion: 'Consulta'},
        { id: '2', fecha: '20/06/2025', esta_cerrado: '22/06/2025', hora_apertura: '02:00 pm', hora_cierre: '06:00 pm', descripcion: 'Revisión' },
        { id: '3', fecha: '20/06/2025', esta_cerrado: '22/06/2025', hora_apertura: '06:00 pm', hora_cierre: '08:00 pm', descripcion: 'urgencia'},
    ];

    useEffect(() => {
        if (excepcionhorariosucursalId) {
            const foundExcepcionHorarioSucursal = excepcionhorariosucursalesEjemplo.find(c => c.id === excepcionhorariosucursalId);
            if (foundExcepcionHorarioSucursal) {
                setAgendamiento(foundExcepcionHorarioSucursal);
                setId(foundExcepcionHorarioSucursal.id);
                setFecha(foundExcepcionHorarioSucursal.Fecha);
                setEsta_Cerrado(foundExcepcionHorarioSucursal.esta_cerrado);
                setHora_Apertura(foundExcepcionHorarioSucursal.hora_apertura);
                setHora_Cierre(foundExcepcionHorarioSucursal.hora_cierre);
                setDescripcion(foundExcepcionHorarioSucursal.descripcion);

            } else {
                Alert.alert("Error", "Excepción Del Horario Sucursal no encontrado.");
                navigation.goBack(); 
            }
        } else {
        }
        setLoading(false);
    }, [excepcionhorariosucursalId]);

    const handleSave = () => {
        const excepcionhorariosucursalData = {
            id: agendamientoId || new Date().getTime().toString(), // Generar ID si es nueva
            Fecha: fecha,
            Esta_Cerrado: esta_cerrado,
            Hora_Apertura: hora_apertura,
            Hora_Cierre: hora_cierre,
            Descripcion: descripcion,
        };
        console.log("Datos a guardar:", excepcionhorariosucursalData);
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
                <Text style={styles.loadingText}>Cargando datos de la Excepcion Horaria de la Sucursal...</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>{citaId ? "Editar Excepcion Horario Sucursal" : "Crear Nueva Excepcion Sucursal3"}</Text>

            <ScrollView style={styles.formScrollView}>
                <View style={styles.formCard}>
                    <Text style={styles.label}>Nombre de la Excepcion Horario Sucursal:</Text>
                    <TextInput
                        style={styles.input}
                        value={id}
                        onChangeText={setId}
                        placeholder="Id"
                        placeholderTextColor="#999"
                    />

                    <Text style={styles.label}>Fecha:</Text>
                    <TextInput
                        style={styles.input}
                        value={fecha}
                        onChangeText={setFecha}
                        placeholder="Fecha"
                        placeholderTextColor="#999"
                        keyboardType="default" // Podrías usar 'datetime' o una librería de selección de fecha
                    />

                    <Text style={styles.label}>Estado:</Text>
                    <TextInput
                        style={styles.input}
                        value={esta_cerrado}
                        onChangeText={setEsta_Cerrado}
                        placeholder="Esta Cerrado"
                        placeholderTextColor="#999"
                    />

                    <Text style={styles.label}>Hora Apertura:</Text>
                    <TextInput
                        style={styles.input}
                        value={hora_apertura}
                        onChangeText={setHora_Apertura}
                        placeholder="Hora Apertura"
                        placeholderTextColor="#999"
                        keyboardType="default" 
                    />

                    <Text style={styles.label}>Hora Cierre:</Text>
                    <TextInput
                        style={styles.input}
                        value={hora_cierre}
                        onChangeText={setHora_Cierre}
                        placeholder="Hora Cierre"
                        placeholderTextColor="#999"
                    />

                    <Text style={styles.label}>Descripción:</Text>
                    <TextInput
                        style={styles.inputTextArea}
                        value={descripcion}
                        onChangeText={setDescripcion}
                        placeholder="Descripción"
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