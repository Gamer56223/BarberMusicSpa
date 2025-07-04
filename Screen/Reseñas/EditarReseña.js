import { useEffect, useState } from "react";
import { ActivityIndicator, Alert, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import BotonComponent from "../../components/BottonComponent";

export default function EditarReseña({ route, navigation }) {

    const { reseñaId } = route.params || {};

    const [reseña, setReseña] = useState(null);
    const [loading, setLoading] = useState(true);

  
    const [id, setId] = useState('');
    const [calificacion, setCalificacion] = useState('');
    const [comentario, setComentario] = useState('');
    const [reseñable_id, setReseñable_Id] = useState('');
    const [reseñable_type, setReseñable_Type] = useState('');
    const [aprobada, setAprobada] = useState('');
    const [fecha_reseña, setFecha_Reseña] = useState('');

    const reseñasEjemplo = [
        { id: '1', calificacion: '5', comentario: 'Piel brillante y suave', reseñable_id: '2', reseñable_type: 'activo', aprobada: 'true', fecha_reseña: '27/06/2025'},
        { id: '2', calificacion: '4', comentario: 'Eliminación de grasa', reseñable_id: '3', reseñable_type: 'activo', aprobada: 'true', fecha_reseña: '27/06/2025' },
        { id: '3', calificacion: '3', comentario: 'Eliminación de acne', reseñable_id: '4', reseñable_type: 'activo', aprobada: 'true', fecha_reseña: '27/06/2025'},
    ];

    useEffect(() => {
        if (reseñaId) {
            const foundReseña = reseñasEjemplo.find(rr => rr.id === reseñaId);
            if (foundReseña) {
                setReseña(foundReseña);
                setId(foundReseña.id);
                setCalificacion(foundReseña.Calificacion);
                setComentario(foundReseña.Comentario);
                setReseñable_Id(foundReseña.Reseñable_Id);
                setReseñable_Type(foundReseña.Reseñable_Type);
                setAprobada(foundReseña.Aprobada);
                setFecha_Reseña(foundReseña.Fecha_Reseña);


            } else {
                Alert.alert("Error", "Reseña no encontrado.");
                navigation.goBack(); 
            }
        } else {
        }
        setLoading(false);
    }, [reseñaId]);

    const handleSave = () => {
        const reseñaData = {
            id: reseñaId || new Date().getTime().toString(), // Generar ID si es nueva
            Calificacion: calificacion,
            Comentario: comentario,
            Reseñable_Id: reseñable_id,
            Reseñable_Type: reseñable_type,
            Aprobada: aprobada,
            Fecha_Reseña: fecha_reseña,

        };
        console.log("Datos a guardar:", reseñaData);
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
                <Text style={styles.loadingText}>Cargando datos de la reseña...</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>{citaId ? "Editar reseña" : "Crear Nueva reseña"}</Text>

            <ScrollView style={styles.formScrollView}>
                <View style={styles.formCard}>
                    <Text style={styles.label}>Nombre de la reseña:</Text>
                    <TextInput
                        style={styles.input}
                        value={id}
                        onChangeText={setId}
                        placeholder="Id"
                        placeholderTextColor="#999"
                    />

                    <Text style={styles.label}>Calificación:</Text>
                    <TextInput
                        style={styles.input}
                        value={calificacion}
                        onChangeText={setCalificacion}
                        placeholder="Calificación"
                        placeholderTextColor="#999"
                        keyboardType="default" // Podrías usar 'datetime' o una librería de selección de fecha
                    />

                    <Text style={styles.label}>Comentario:</Text>
                    <TextInput
                        style={styles.input}
                        value={comentario}
                        onChangeText={setComentario}
                        placeholder="Comentario"
                        placeholderTextColor="#999"
                    />

                    <Text style={styles.label}>Reseñable Id:</Text>
                    <TextInput
                        style={styles.input}
                        value={reseñable_id}
                        onChangeText={setReseñable_Id}
                        placeholder="Reseñable Id"
                        placeholderTextColor="#999"
                        keyboardType="default" 
                    />

                    <Text style={styles.label}>Reseñable Type:</Text>
                    <TextInput
                        style={styles.input}
                        value={reseñable_type}
                        onChangeText={setReseñable_Type}
                        placeholder="Reseñable Type"
                        placeholderTextColor="#999"
                    />

                    <Text style={styles.label}>Aprobada:</Text>
                    <TextInput
                        style={styles.inputTextArea}
                        value={aprobada}
                        onChangeText={setAprobada}
                        placeholder="Aprobada"
                        placeholderTextColor="#999"
                        multiline={true}
                        numberOfLines={4}
                    />

                    <Text style={styles.label}>Fecha Reseña:</Text>
                    <TextInput
                        style={styles.inputTextArea}
                        value={fecha_reseña}
                        onChangeText={setFecha_Reseña}
                        placeholder="Fecha Reseña"
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