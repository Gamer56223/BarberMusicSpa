import { useEffect, useState } from "react";
import { ActivityIndicator, Alert, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import BotonComponent from "../../components/BottonComponent";

export default function EditarAgendamiento({ route, navigation }) {

    const { agendamientoId } = route.params || {};

    const [agendamiento, setAgendamiento] = useState(null);
    const [loading, setLoading] = useState(true);

  
    const [id, setId] = useState('');
    const [fecha_hora_inicio, setFecha_Hora_Inicio] = useState('');
    const [fecha_hora_fin, setFecha_Hora_Fin] = useState('');
    const [precio_final, setPrecio_Final] = useState('');
    const [estado, setEstado] = useState('');
    const [notas_cliente, setNotas_Cliente] = useState('');
    const [notas_internas, setNotas_Internas] = useState('');

    const agendamientosEjemplo = [
        { id: '1', Fecha_Hora_Inicio: '20/06/2025', Fecha_Hora_Fin: '22/06/2025', Precio_Final: '$72.000', Estado: 'activo', Notas_Cliente: 'Consulta', Notas_Internas: 'Paciente con síntomas leves de resfriado.' },
        { id: '2', Fecha_Hora_Inicio: '20/06/2025', Fecha_Hora_Fin: '22/06/2025', Precio_Final: '35.000', Estado: 'activo', Notas_Cliente: 'Revisión', Notas_Internas: 'Revisión anual y limpieza.' },
        { id: '3', Fecha_Hora_Inicio: '20/06/2025', Fecha_Hora_Fin: '22/06/2025', Precio_Final: '132.000', Estado: 'activo', Notas_Cliente: 'urgencia', Notas_Internas: 'Sesión para rehabilitación de rodilla.' },
    ];

    useEffect(() => {
        if (agendamientoId) {
            const foundAgendamiento = agendamientosEjemplo.find(a => a.id === agendamientoId);
            if (foundAgendamiento) {
                setAgendamiento(foundAgendamiento);
                setId(foundAgendamiento.id);
                setFecha_Hora_Inicio(foundAgendamiento.Fecha_Hora_Inicio);
                setFecha_Hora_Fin(foundAgendamiento.Fecha_Hora_Fin);
                setPrecio_Final(foundAgendamiento.Precio_Final);
                setEstado(foundAgendamiento.Estado);
                setNotas_Cliente(foundAgendamiento.Notas_Cliente);
                setNotas_Internas(foundAgendamiento.Notas_Internas);

            } else {
                Alert.alert("Error", "Agendamiento no encontrado.");
                navigation.goBack(); 
            }
        } else {
        }
        setLoading(false);
    }, [agendamientoId]);

    const handleSave = () => {
        const agendamientoData = {
            id: agendamientoId || new Date().getTime().toString(), // Generar ID si es nueva
            Fecha_Hora_Inicio: fecha_hora_inicio,
            Fecha_Hora_Fin: fecha_hora_fin,
            Precio_Final: precio_final,
            Estado: estado,
            Notas_Cliente: notas_cliente,
            Notas_Internas: notas_internas,
        };
        console.log("Datos a guardar:", agendamientoData);
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
                <Text style={styles.loadingText}>Cargando datos del agendamiento...</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>{agendamientoId ? "Editar Agendamiento" : "Crear Nuevo Agendamiento"}</Text>

            <ScrollView style={styles.formScrollView}>
                <View style={styles.formCard}>
                    <Text style={styles.label}>Nombre del Agendamiento:</Text>
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
                        value={fecha_hora_inicio}
                        onChangeText={setFecha_Hora_Inicio}
                        placeholder="Fecha Hora"
                        placeholderTextColor="#999"
                        keyboardType="default" // Podrías usar 'datetime' o una librería de selección de fecha
                    />

                    <Text style={styles.label}>Estado:</Text>
                    <TextInput
                        style={styles.input}
                        value={fecha_hora_fin}
                        onChangeText={setFecha_Hora_Fin}
                        placeholder="Fecha Hora Fin"
                        placeholderTextColor="#999"
                    />

                    <Text style={styles.label}>Hora:</Text>
                    <TextInput
                        style={styles.input}
                        value={precio_final}
                        onChangeText={setPrecio_Final}
                        placeholder="Precio Final "
                        placeholderTextColor="#999"
                        keyboardType="default" 
                    />

                    <Text style={styles.label}>Estado:</Text>
                    <TextInput
                        style={styles.input}
                        value={estado}
                        onChangeText={setEstado}
                        placeholder="Estado"
                        placeholderTextColor="#999"
                    />

                    <Text style={styles.label}>Notas Clientes:</Text>
                    <TextInput
                        style={styles.inputTextArea}
                        value={notas_cliente}
                        onChangeText={setNotas_Cliente}
                        placeholder="Notas Cliente"
                        placeholderTextColor="#999"
                        multiline={true}
                        numberOfLines={4}
                    />

                    <Text style={styles.label}>Notas Internas:</Text>
                    <TextInput
                        style={styles.inputTextArea}
                        value={notas_internas}
                        onChangeText={setNotas_Internas}
                        placeholder="Notas Internas"
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