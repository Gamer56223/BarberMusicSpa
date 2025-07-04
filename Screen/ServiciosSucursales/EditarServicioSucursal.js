import { useEffect, useState } from "react";
import { ActivityIndicator, Alert, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import BotonComponent from "../../components/BottonComponent";

export default function EditarServicioSucursal({ route, navigation }) {

    const { serviciosucursalId } = route.params || {};

    const [serviciosucursal, setServicioSucursal] = useState(null);
    const [loading, setLoading] = useState(true);

  
    const [id, setId] = useState('');
    const [precio_en_sucursal, setPrecio_En_Sucursal] = useState('');
    const [esta_disponible, setEsta_Disponible] = useState('');

    const serviciosucursalesEjemplo = [
        { id: '1', precio_en_sucursal: '$32k', esta_disponible: 'Disponible '},
        { id: '2', precio_en_sucursal: '$70k', esta_disponible: 'Disponible' },
        { id: '3', precio_en_sucursal: '$220', esta_disponible: 'Disponible'},
    ];

    useEffect(() => {
        if (serviciosucursalId) {
            const foundServicioSucursal = serviciosucursalesEjemplo.find(ss => ss.id === serviciosucursalId);
            if (foundServicioSucursal) {
                setServicioSucursal(foundServicioSucursal);
                setId(foundServicioSucursal.id);
                setprecio_En_Sucursal(foundServicioSucursal.Precio_En_Sucursal);
                setEstaDisponible(foundServicioSucursal.Esta_Disponible);

            } else {
                Alert.alert("Error", "Servicio sucursal no encontrado.");
                navigation.goBack(); 
            }
        } else {
        }
        setLoading(false);
    }, [serviciosucursalId]);

    const handleSave = () => {
        const serviciosucursalData = {
            id: serviciosucursalId || new Date().getTime().toString(), // Generar ID si es nueva
            Precio_En_Sucursal: precio_en_sucursal,
            Esta_Disponible: esta_disponible,
        };
        console.log("Datos a guardar:", serviciosucursalData);
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
                <Text style={styles.loadingText}>Cargando datos del Servicio Sucursal...</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>{citaId ? "Editar servicio" : "Crear Nuevo Servicio Sucursal"}</Text>

            <ScrollView style={styles.formScrollView}>
                <View style={styles.formCard}>
                    <Text style={styles.label}>Nombre del servicio Sucursal:</Text>
                    <TextInput
                        style={styles.input}
                        value={id}
                        onChangeText={setId}
                        placeholder="Id"
                        placeholderTextColor="#999"
                    />

                    <Text style={styles.label}>Precio en Sucursal:</Text>
                    <TextInput
                        style={styles.input}
                        value={precio_en_sucursal}
                        onChangeText={setPrecio_En_Sucursal}
                        placeholder="Precio en Sucursal"
                        placeholderTextColor="#999"
                        keyboardType="default" // Podrías usar 'datetime' o una librería de selección de fecha
                    />

                    <Text style={styles.label}>Esta Disponible:</Text>
                    <TextInput
                        style={styles.input}
                        value={esta_disponible}
                        onChangeText={setEsta_Disponible}
                        placeholder="Descripción"
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