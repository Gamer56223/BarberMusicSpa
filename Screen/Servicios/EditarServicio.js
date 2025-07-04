import { useEffect, useState } from "react";
import { ActivityIndicator, Alert, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import BotonComponent from "../../components/BottonComponent";

export default function EditarServicio({ route, navigation }) {

    const { servicioId } = route.params || {};

    const [servicio, setServicio] = useState(null);
    const [loading, setLoading] = useState(true);

  
    const [id, setId] = useState('');
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [imagen_path, setImagen_Path] = useState('');
    const [precio_base, setPrecio_Base] = useState('');
    const [duracion_minutos, setDuracion_Minutos] = useState('');
    const [categoria_id, setCategoria_Id] = useState('');
    const [especialidad_requerida_id, setEspecialidad_Requerida_Id] = useState('');
    const [activo, setActivo] = useState('');




    const serviciosEjemplo = [
        { id: '1', nombre: 'Maquillaje', descripcion: 'Piel brillante y suave', imagen_path: 'Spa', precio_base: '$75k', duracion_minutos: '15 minutos', categoria_id:'3', especialidad_requerida_id: '8', activo: 'true'},
        { id: '2', nombre: 'Corporativo', descripcion: 'Eliminación de grasa', imagen_path: 'Spa', precio_base: '$220k', duracion_minutos: '20 minutos', categoria_id: '4', especialidad_requerida_id: '9', activo: 'true'},
        { id: '3', nombre: 'Estetico', descripcion: 'Eliminación de acne', imagen_path: 'Barberia', precio_base: '$300k', duracion_minutos: '30 minutos', categoria_id: '7', especialidad_requerida_id:'6', activo: 'true'},
    ];

    useEffect(() => {
        if (servicioId) {
            const foundServicio = serviciosEjemplo.find(se => se.id === servicioId);
            if (foundServicio) {
                setServicio(foundServicio);
                setId(foundServicio.id);
                setNombre(foundServicio.Nombre);
                setDescripcion(foundServicio.Descripcion);
                setImagen_Path(foundServicio.Imagen_Path);
                setPrecio_Base(foundServicio.Precio_Base);
                setDuracion_Minutos(foundServicio.Duracion_Minutos);
                setCategoria_Id(foundServicio.Categoria_Id);
                setEspecialidad_Requerida_Id(foundServicio.Especialidad_Requerida_Id);
                setActivo(foundServicio.Activo);

            } else {
                Alert.alert("Error", "Servicio no encontrado.");
                navigation.goBack(); 
            }
        } else {
        }
        setLoading(false);
    }, [servicioId]);

    const handleSave = () => {
        const servicioData = {
            id: servicioId || new Date().getTime().toString(), // Generar ID si es nueva
            Nombre: nombre,
            Descripcion: descripcion,
            Imagen_Path: imagen_path,
            Precio_Base: precio_base,
            Duracion_Minutos: duracion_minutos,
            Categoria_Id: categoria_id,
            Especialidad_Requerida_Id: especialidad_requerida_id,
            Activo: activo,
        };
        console.log("Datos a guardar:", servicioData);
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
                <Text style={styles.loadingText}>Cargando datos del Servicio...</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>{citaId ? "Editar servicio" : "Crear Nuevo Servicio"}</Text>

            <ScrollView style={styles.formScrollView}>
                <View style={styles.formCard}>
                    <Text style={styles.label}>Nombre del servicio:</Text>
                    <TextInput
                        style={styles.input}
                        value={id}
                        onChangeText={setId}
                        placeholder="Id"
                        placeholderTextColor="#999"
                    />

                    <Text style={styles.label}>Nombre:</Text>
                    <TextInput
                        style={styles.input}
                        value={nombre}
                        onChangeText={setNombre}
                        placeholder="Nombre"
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

                    <Text style={styles.label}>Imagen Path:</Text>
                    <TextInput
                        style={styles.input}
                        value={imagen_path}
                        onChangeText={setImagen_Path}
                        placeholder="Imagen Path "
                        placeholderTextColor="#999"
                        keyboardType="default" 
                    />

                    <Text style={styles.label}>Precio Base:</Text>
                    <TextInput
                        style={styles.input}
                        value={precio_base}
                        onChangeText={setPrecio_Base}
                        placeholder="Icono Clave"
                        placeholderTextColor="#999"
                    />

                    <Text style={styles.label}>Duración Minutos:</Text>
                    <TextInput
                        style={styles.inputTextArea}
                        value={duracion_minutos}
                        onChangeText={setDuracion_Minutos}
                        placeholder="Duración Minutos"
                        placeholderTextColor="#999"
                        multiline={true}
                        numberOfLines={4}
                    />

                    <Text style={styles.label}>Categoria Id:</Text>
                    <TextInput
                        style={styles.inputTextArea}
                        value={categoria_id}
                        onChangeText={setCategoria_Id}
                        placeholder="Categoria Id"
                        placeholderTextColor="#999"
                        multiline={true}
                        numberOfLines={4}
                    />

                    <Text style={styles.label}>Especialidad Requerida Id:</Text>
                    <TextInput
                        style={styles.inputTextArea}
                        value={especialidad_requerida_id}
                        onChangeText={setEspecialidad_Requerida_Id}
                        placeholder="Especialidad Requerida"
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