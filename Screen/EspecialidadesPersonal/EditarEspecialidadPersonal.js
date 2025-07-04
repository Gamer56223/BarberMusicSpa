import { useEffect, useState } from "react";
import { ActivityIndicator, Alert, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import BotonComponent from "../../components/BottonComponent";

export default function EditarEspecialidadPersonal({ route, navigation }) {

    const { especialidadpersonalId } = route.params || {};

    const [especialidadpersonal, setEspecialidadPersonal] = useState(null);
    const [loading, setLoading] = useState(true);

  
    const [id, setId] = useState('');
    const [especialidad_id, setEspecialidad_Id] = useState('');
    const [personal_id, setPersonal_Id] = useState('');


   const especialidadespersonalEjemplo = [
        { id: '1', especialidad_id: '20', personal_id: '6'},
        { id: '2', especialidad_id: '22', personal_id: '7'},
        { id: '3', especialidad_id: '21', personal_id: '5'},

    ];

    useEffect(() => {
        if (especialidadpersonalId) {
            const foundEspecialidadPersonal = especialidadespersonalEjemplo.find(ep => ep.id === especialidadpersonalId);
            if (foundEspecialidadPersonal) {
                setEspecialidadPersonal(foundEspecialidadPersonal);
                setId(foundEspecialidadPersonal.id);
                setEspecialidad_Id(foundEspecialidadPersonal.Especialidad_Id);
                setPersonal_Id(foundEspecialidadPersonal.Personal_Id);

            } else {
                Alert.alert("Error", "Especialidad Personal no encontrado.");
                navigation.goBack(); 
            }
        } else {
        }
        setLoading(false);
    }, [especialidadpersonalId]);

    const handleSave = () => {
        const especialidadpersonalData = {
            id: especialidadpersonalId || new Date().getTime().toString(), // Generar ID si es nueva
            Especialidad_Id: especialidad_id,
            Personal_Id: personal_id,
        };
        console.log("Datos a guardar:", especialidadpersonalData);
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
                <Text style={styles.loadingText}>Cargando datos de la especialidad del personal...</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>{especialidadpersonalId ? "Editar Especialidad personal" : "Crear Nueva Especialidad Personal"}</Text>

            <ScrollView style={styles.formScrollView}>
                <View style={styles.formCard}>
                    <Text style={styles.label}>Nombre de la Especialidad Personal:</Text>
                    <TextInput
                        style={styles.input}
                        value={id}
                        onChangeText={setId}
                        placeholder="Id"
                        placeholderTextColor="#999"
                    />

                    <Text style={styles.label}>Especialidad Id:</Text>
                    <TextInput
                        style={styles.input}
                        value={especialidad_id}
                        onChangeText={setEspecialidad_Id}
                        placeholder="Especialid Id"
                        placeholderTextColor="#999"
                        keyboardType="default" // Podrías usar 'datetime' o una librería de selección de fecha
                    />

                    <Text style={styles.label}>Personal Id:</Text>
                    <TextInput
                        style={styles.input}
                        value={personal_id}
                        onChangeText={setPersonal_Id}
                        placeholder="Personal Id"
                        placeholderTextColor="#999"
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