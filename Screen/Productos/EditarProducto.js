import { useEffect, useState } from "react";
import { ActivityIndicator, Alert, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import BotonComponent from "../../components/BottonComponent";

export default function EditarProducto({ route, navigation }) {

    const { productoId } = route.params || {};

    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);

  
    const [id, setId] = useState('');
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [imagen_path, setImagen_Path] = useState('');
    const [precio, setPrecio] = useState('');
    const [stock, setStock] = useState('');
    const [sku, setSku] = useState('');
    const [activo, setActivo] = useState('');



    const productosEjemplo = [
        { id: '1', Nombre: 'Shampoo', Descripcion: 'Suaviza el cabello', Imagen_Path: 'Spa', Precio: '$20k', Stock: 'Consulta', Sku: 'null', Activo: 'true'},
        { id: '2', Nombre: 'Crema Eliminación de Acne', Descripcion: 'Elimina los granos', Imagen_Path: 'Spa', Precio: '$70k', Stock: 'Revisión', Sku: 'null', Activo: 'true' },
        { id: '3', Nombre: 'Cera', Descripcion: 'Mejor firmeza para el cabello', Imagen_Path: 'Barberia', Precio: '$150k', Stock: 'urgencia', Sku: 'null', Activo: 'true'},
    ];

    useEffect(() => {
        if (productoId) {
            const foundProducto = productosEjemplo.find(pr => pr.id === productoId);
            if (foundProducto) {
                setProducto(foundProducto);
                setId(foundProducto.id);
                setNombre(foundProducto.Nombre);
                setDescripcion(foundProducto.Descripcion);
                setImagen_Path(foundProducto.Precio_Final);
                setPrecio(foundProducto.Estado);
                setStock(foundProducto.Notas_Cliente);
                setSku(foundProducto.Notas_Cliente);
                setActivo(foundProducto.Notas_Cliente);

            } else {
                Alert.alert("Error", "Producto no encontrado.");
                navigation.goBack(); 
            }
        } else {
        }
        setLoading(false);
    }, [productoId]);

    const handleSave = () => {
        const productoData = {
            id: productoId || new Date().getTime().toString(), // Generar ID si es nueva
            Nombre: nombre,
            Descripcion: descripcion,
            Imagen_Path: imagen_path,
            Precio: precio,
            Stock: stock,
            Sku: sku,
            Activo: activo,
        };
        console.log("Datos a guardar:", productoData);
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
                <Text style={styles.loadingText}>Cargando datos del Producto...</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>{citaId ? "Editar producto" : "Crear Nuevo producto"}</Text>

            <ScrollView style={styles.formScrollView}>
                <View style={styles.formCard}>
                    <Text style={styles.label}>Nombre del producto:</Text>
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
                        placeholder="Imagen Path"
                        placeholderTextColor="#999"
                        keyboardType="default" 
                    />

                    <Text style={styles.label}>Precio:</Text>
                    <TextInput
                        style={styles.input}
                        value={precio}
                        onChangeText={setPrecio}
                        placeholder="Precio"
                        placeholderTextColor="#999"
                    />

                    <Text style={styles.label}>Stock:</Text>
                    <TextInput
                        style={styles.inputTextArea}
                        value={stock}
                        onChangeText={setStock}
                        placeholder="Stock"
                        placeholderTextColor="#999"
                        multiline={true}
                        numberOfLines={4}
                    />

                    <Text style={styles.label}>Sku:</Text>
                    <TextInput
                        style={styles.inputTextArea}
                        value={sku}
                        onChangeText={setSku}
                        placeholder="Sku"
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