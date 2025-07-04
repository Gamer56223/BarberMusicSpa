import { useEffect, useState } from "react";
import { ActivityIndicator, Alert, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import BotonComponent from "../../components/BottonComponent";

export default function EditarRecordatorio({ route, navigation }) {

    const { recordatorioId } = route.params || {};

    const [recordatorio, setRecordatorio] = useState(null);
    const [loading, setLoading] = useState(true);

  
    const [id, setId] = useState('');
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [fecha_hora_recordatorio, setFecha_Hora_Recordatorio] = useState('');
    const [canal_oficial, setCanal_Oficial] = useState('');
    const [enviado, setEnviado] = useState('');
    const [fecha_envio, setFecha_Envio] = useState('');
    const [activo, setActivo] = useState('');
    const [fijado, setFijado] = useState('');


    const recordatoriosEjemplo = [
        { id: '1', titulo: 'Maquillaje', descripcion: 'Piel brillante y suave', fecha_hora_recordatorio: 'Spa', canal_oficial: 'activo', enviado: 'Consulta', fecha_envio: '27/06/2025', activo: 'true', fijado: 'true'},
        { id: '2', titulo: 'Corporativo', descripcion: 'Eliminación de grasa', fecha_hora_recordatorio: 'Spa', canal_oficial: 'activo', enviado: 'Revisión', fecha_envio: '27/06/2025', activo: 'true', fijado: 'true' },
        { id: '3', titulo: 'Estetico', descripcion: 'Eliminación de acne', fecha_hora_recordatorio: 'Barberia', canal_oficial: 'activo', enviado: 'urgencia', fecha_envio: '27/06/2025', activo: 'true', fijado: 'true'},
    ];

    useEffect(() => {
        if (recordatorioId) {
            const foundRecordatorio = recordatoriosEjemplo.find(re => re.id === recordatorioId);
            if (foundRecordatorio) {
                setRecordatorio(foundRecordatorio);
                setId(foundRecordatorio.id);
                setTitulo(foundRecordatorio.Titulo);
                setDescripcion(foundRecordatorio.Descripcion);
                setFecha_Hora_Recordatorio(foundRecordatorio.Hora_Recordatorio);
                setCanal_Oficial(foundRecordatorio.Canal_Oficial);
                setEnviado(foundRecordatorio.Enviado);
                setFecha_Envio(foundRecordatorio.Fecha_Envio);
                setActivo(foundRecordatorio.Activo);
                setFijado(foundRecordatorio.Fijado);


            } else {
                Alert.alert("Error", "Recordatorio no encontrado.");
                navigation.goBack(); 
            }
        } else {
        }
        setLoading(false);
    }, [recordatorioId]);

    const handleSave = () => {
        const recordatorioData = {
            id: recordatorioId || new Date().getTime().toString(), // Generar ID si es nueva
            Titulo: titulo,
            Descripcion: descripcion,
            Fecha_hora_Recordatorio: fecha_hora_recordatorio,
            Canal_Oficial: canal_oficial,
            Enviado: enviado,
            Fecha_Envio: fecha_envio,
            Activo: activo,
            Fijado: fijado,

        };
        console.log("Datos a guardar:", recordatorioData);
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
                <Text style={styles.loadingText}>Cargando datos del Recordatorio...</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>{recordatorioId ? "Editar recordatorio" : "Crear Nuevo recordatorio"}</Text>

            <ScrollView style={styles.formScrollView}>
                <View style={styles.formCard}>
                    <Text style={styles.label}>Nombre del recordatorio:</Text>
                    <TextInput
                        style={styles.input}
                        value={id}
                        onChangeText={setId}
                        placeholder="Id"
                        placeholderTextColor="#999"
                    />

                    <Text style={styles.label}>Titulo:</Text>
                    <TextInput
                        style={styles.input}
                        value={titulo}
                        onChangeText={setTitulo}
                        placeholder="Titulo"
                        placeholderTextColor="#999"
                        keyboardType="default" // Podrías usar 'datetime' o una librería de selección de fecha
                    />

                    <Text style={styles.label}>Descripción:</Text>
                    <TextInput
                        style={styles.input}
                        value={descripcion}
                        onChangeText={setDescripcion}
                        placeholder="Descripción"
                        placeholderTextColor="#999"
                    />

                    <Text style={styles.label}>Fecha Hora Recordatorio:</Text>
                    <TextInput
                        style={styles.input}
                        value={fecha_hora_recordatorio}
                        onChangeText={setFecha_Hora_Recordatorio}
                        placeholder="Tipo Categoria "
                        placeholderTextColor="#999"
                        keyboardType="default" 
                    />

                    <Text style={styles.label}>Canal Oficial:</Text>
                    <TextInput
                        style={styles.input}
                        value={canal_oficial}
                        onChangeText={setCanal_Oficial}
                        placeholder="Canal Oficial"
                        placeholderTextColor="#999"
                    />

                    <Text style={styles.label}>Enviado:</Text>
                    <TextInput
                        style={styles.inputTextArea}
                        value={enviado}
                        onChangeText={setEnviado}
                        placeholder="Enviado"
                        placeholderTextColor="#999"
                        multiline={true}
                        numberOfLines={4}
                    />

                    <Text style={styles.label}>Fecha Envio:</Text>
                    <TextInput
                        style={styles.inputTextArea}
                        value={fecha_envio}
                        onChangeText={setFecha_Envio}
                        placeholder="Fecha Envio"
                        placeholderTextColor="#999"
                        multiline={true}
                        numberOfLines={4}
                    />

                    <Text style={styles.label}>Activo:</Text>
                    <TextInput
                        style={styles.inputTextArea}
                        value={activo}
                        onChangeText={setActivo}
                        placeholder="Activo"
                        placeholderTextColor="#999"
                        multiline={true}
                        numberOfLines={4}
                    />

                    <Text style={styles.label}>Fijado:</Text>
                    <TextInput
                        style={styles.inputTextArea}
                        value={fijado}
                        onChangeText={setFijado}
                        placeholder="Fijado"
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