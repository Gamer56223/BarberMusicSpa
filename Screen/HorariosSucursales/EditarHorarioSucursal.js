import { useEffect, useState } from "react";
import { ActivityIndicator, Alert, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import BotonComponent from "../../components/BottonComponent";

export default function EditarHorarioSucursal({ route, navigation }) {

    const { horariosucursalId } = route.params || {};

    const [horariosucursal, setHorarioSucursal] = useState(null);
    const [loading, setLoading] = useState(true);

  
    const [id, setId] = useState('');
    const [dia_semana, setDia_Semana] = useState('');
    const [hora_apertura, setHora_Apertura] = useState('');
    const [hora_cierre, setHora_Cierre] = useState('');
    const [esta_cerrado_regularmente, setEsta_Cerrado_Regularmente] = useState('');

    const horariosucursalesEjemplo = [
        { id: '1', dia_semana: 'monday', hora_apertura: '05:00 am', hora_cierre: '06:00 pm', esta_cerrado_regularmente: 'activo'},
        { id: '2', dia_semana: 'wednesday', hora_apertura: '06:00 am', hora_cierre: '05:00 pm', esta_cerrado_regularmente: 'activo'},
        { id: '3', dia_semana: 'friday', hora_apertura: '07:00 am', hora_cierre: '07:00 pm', esta_cerrado_regularmente: 'activo' },
    ];

    useEffect(() => {
        if (horariosucursalId) {
            const foundHorarioSucursal = horariosucursalesEjemplo.find(hs => hs.id === horariosucursalId);
            if (foundHorarioSucursal) {
                setAgendamiento(foundHorarioSucursal);
                setId(foundHorarioSucursal.id);
                setDia_Semana(foundHorarioSucursal.Dia_Semana);
                setHora_Apertura(foundHorarioSucursal.Hora_Apertura);
                setHora_Cierre(foundHorarioSucursal.Hora_Cierre);
                setEsta_Cerrado_Regularmente(foundHorarioSucursal.Esta_Cerrado_Regularmente);

            } else {
                Alert.alert("Error", "Horario Sucursal no encontrado.");
                navigation.goBack(); 
            }
        } else {
        }
        setLoading(false);
    }, [agendamientoId]);

    const handleSave = () => {
        const horariosucursalData = {
            id: horariosucursalId || new Date().getTime().toString(), // Generar ID si es nueva
            Dia_Semana: dia_semana,
            Hora_Apertura: hora_apertura,
            Hora_Cierre: hora_cierre,
            Esta_Cerrado_Regularmente: esta_cerrado_regularmente,
        };
        console.log("Datos a guardar:", horariosucursalData);
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
                <Text style={styles.loadingText}>Cargando datos del Horario Sucursal...</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>{horariosucursalId ? "Editar Horario Sucursal" : "Crear Nuevo Horario Sucursal"}</Text>

            <ScrollView style={styles.formScrollView}>
                <View style={styles.formCard}>
                    <Text style={styles.label}>Nombre del Horario Sucursal:</Text>
                    <TextInput
                        style={styles.input}
                        value={id}
                        onChangeText={setId}
                        placeholder="Id"
                        placeholderTextColor="#999"
                    />

                    <Text style={styles.label}>Dia Semana:</Text>
                    <TextInput
                        style={styles.input}
                        value={dia_semana}
                        onChangeText={setDia_Semana}
                        placeholder="Dia Semana"
                        placeholderTextColor="#999"
                        keyboardType="default" // Podrías usar 'datetime' o una librería de selección de fecha
                    />

                    <Text style={styles.label}>Hora Apertura:</Text>
                    <TextInput
                        style={styles.input}
                        value={hora_apertura}
                        onChangeText={setHora_Apertura}
                        placeholder="Hora Apertura"
                        placeholderTextColor="#999"
                    />

                    <Text style={styles.label}>Hora Cierre:</Text>
                    <TextInput
                        style={styles.input}
                        value={hora_cierre}
                        onChangeText={setHora_Cierre}
                        placeholder="Hora Cierre"
                        placeholderTextColor="#999"
                        keyboardType="default" 
                    />

                    <Text style={styles.label}>Esta Cerrado Regularmente:</Text>
                    <TextInput
                        style={styles.input}
                        value={esta_cerrado_regularmente}
                        onChangeText={setEsta_Cerrado_Regularmente}
                        placeholder="Esta Cerrado Regularmente"
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