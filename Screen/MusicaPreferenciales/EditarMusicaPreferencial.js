import { useEffect, useState } from "react";
import { ActivityIndicator, Alert, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function EditarMusicaPreferencial({ route, navigation }) {

    const { musicapreferencialId } = route.params || {};

    const [categoria, setMusicaPreferencial] = useState(null);
    const [loading, setLoading] = useState(true);

  
    const [id, setId] = useState('');
    const [nombre_opcion, setNombre_Opcion] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [stream_url_ejemplo, setStream_Url_Ejemplo] = useState('');
    const [activo, setActivo] = useState('');

    const musicapreferencialesEjemplo = [
        { id: '1', nombre_opcion: 'chamo', descripcion: 'aleatorio', stream_url_ejemplo: 'www', activo: 'activo'},
        { id: '2', nombre_opcion: 'venezuela', descripcion: 'aleatorio', stream_url_ejemplo: 'www', activo: 'activo'},
        { id: '3', nombre_opcion: 'caracas', descripcion: 'aleatorio', stream_url_ejemplo: 'www', activo: 'activo'},
    ];

    useEffect(() => {
        if (musicapreferencialId) {
            const foundMusicaPreferencial = musicapreferencialesEjemplo.find(mp => mp.id === musicapreferencialId);
            if (foundMusicaPreferencial) {
                setCategoria(foundMusicaPreferencial);
                setId(foundMusicaPreferencial.id);
                setNombre_Opcion(foundMusicaPreferencial.Nombre_Opcion);
                setDescripcion(foundMusicaPreferencial.Descripcion);
                setStream_Url_Ejemplo(foundMusicaPreferencial.Stream_Url_Ejemplo);
                setActivo(foundMusicaPreferencial.Activo);

            } else {
                Alert.alert("Error", "Musica Preferencial no encontrado.");
                navigation.goBack(); 
            }
        } else {
        }
        setLoading(false);
    }, [musicapreferencialId]);

    const handleSave = () => {
        const musicapreferencialData = {
            id: musicapreferencialId || new Date().getTime().toString(), // Generar ID si es nueva
            Nombre_Opcion: nombre_opcion,
            Descripcion: descripcion,
            Stream_Url_Ejemplo: stream_url_ejemplo,
            Activo: activo,
        };
        console.log("Datos a guardar:", musicapreferencialData);
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
                <Text style={styles.loadingText}>Cargando datos de la Musica preferencial...</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>{citaId ? "Editar Musica Preferencial" : "Crear Nueva Musica preferencial"}</Text>

            <ScrollView style={styles.formScrollView}>
                <View style={styles.formCard}>
                    <Text style={styles.label}>Nombre de la Musica Preferencial:</Text>
                    <TextInput
                        style={styles.input}
                        value={id}
                        onChangeText={setId}
                        placeholder="Id"
                        placeholderTextColor="#999"
                    />

                    <Text style={styles.label}>Nombre Opción:</Text>
                    <TextInput
                        style={styles.input}
                        value={nombre_opcion}
                        onChangeText={setNombreOpcion}
                        placeholder="Nombre Opción"
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

                    <Text style={styles.label}>Stream Url::</Text>
                    <TextInput
                        style={styles.input}
                        value={stream_url_ejemplo}
                        onChangeText={setStream_Url_Ejemplo}
                        placeholder="Tipo Stream Url "
                        placeholderTextColor="#999"
                        keyboardType="default" 
                    />

                    <Text style={styles.label}>Activo:</Text>
                    <TextInput
                        style={styles.input}
                        value={activo}
                        onChangeText={setActivo}
                        placeholder="Activo"
                        placeholderTextColor="#999"
                    />
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