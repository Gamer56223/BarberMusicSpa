import { useEffect, useState } from "react";
import { ActivityIndicator, Alert, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import BotonComponent from "../../components/BottonComponent";

export default function EditarPersonal({ route, navigation }) {

    const { personalId } = route.params || {};

    const [personal, setPersonal] = useState(null);
    const [loading, setLoading] = useState(true);

  
    const [id, setId] = useState('');
    const [tipo_personal, setTipo_Personal] = useState('');
    const [numero_empleado, setNumero_Empleado] = useState('');
    const [fecha_contratacion, setFecha_Contratacion] = useState('');
    const [activo_en_empresa, setActivo_En_Empresa] = useState('');

   

    useEffect(() => {
        if (personalId) {
            const foundPersonal = personalEjemplo.find(pe => pe.id === personalId);
            if (foundPersonal) {
                setPersonal(foundPersonal);
                setId(foundPersonal.id);
                setTipo_Personal(foundPersonal.Tipo_Personal);
                setNumero_Empleado(foundPersonal.Numero_Empleado);
                setFecha_Contratacion(foundPersonal.Fecha_Contratacion);
                setActivo_En_Empresa(foundPersonal.Activo_En_Empresa);

            } else {
                Alert.alert("Error", "Personal no encontrado.");
                navigation.goBack(); 
            }
        } else {
        }
        setLoading(false);
    }, [personalId]);

    const handleSave = () => {
        const personalData = {
            id: personalId || new Date().getTime().toString(), // Generar ID si es nueva
            Tipo_Personal: tipo_personal,
            Numero_Empleado: numero_empleado,
            Fecha_Contratacion: fecha_contratacion,
            Activo_En_Empresa: activo_en_empresa,
        };
        console.log("Datos a guardar:", personalData);
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
                <Text style={styles.loadingText}>Cargando datos del personal...</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>{citaId ? "Editar Personal" : "Crear Nuevo Personal"}</Text>

            <ScrollView style={styles.formScrollView}>
                <View style={styles.formCard}>
                    <Text style={styles.label}>Nombre del Personal:</Text>
                    <TextInput
                        style={styles.input}
                        value={id}
                        onChangeText={setId}
                        placeholder="Id"
                        placeholderTextColor="#999"
                    />

                    <Text style={styles.label}>Tipo Personal:</Text>
                    <TextInput
                        style={styles.input}
                        value={tipo_personal}
                        onChangeText={setTipo_Personal}
                        placeholder="Tipo Personal"
                        placeholderTextColor="#999"
                        keyboardType="default" // Podrías usar 'datetime' o una librería de selección de fecha
                    />

                    <Text style={styles.label}>Número Empleado:</Text>
                    <TextInput
                        style={styles.input}
                        value={numero_empleado}
                        onChangeText={setNumero_Empleado}
                        placeholder="Número Empleado"
                        placeholderTextColor="#999"
                    />

                    <Text style={styles.label}>Fecha Contratación:</Text>
                    <TextInput
                        style={styles.input}
                        value={fecha_contratacion}
                        onChangeText={setFecha_Contratacion}
                        placeholder="Fecha Contratación"
                        placeholderTextColor="#999"
                        keyboardType="default" 
                    />

                    <Text style={styles.label}>Activo En Empresa:</Text>
                    <TextInput
                        style={styles.input}
                        value={activo_en_empresa}
                        onChangeText={setActivo_En_Empresa}
                        placeholder="Estado"
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