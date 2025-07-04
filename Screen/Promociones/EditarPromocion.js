import { useEffect, useState } from "react";
import { ActivityIndicator, Alert, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import BotonComponent from "../../components/BottonComponent";

export default function EditarPromocion({ route, navigation }) {

    const { promocionId } = route.params || {};

    const [promocion, setPromocion] = useState(null);
    const [loading, setLoading] = useState(true);

  
    const [id, setId] = useState('');
    const [codigo, setCodigo] = useState('');
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [tipo_descuento, setTipo_Descuento] = useState('');
    const [valor_descuento, setValor_Descuento] = useState('');
    const [fecha_inicio, setInicio] = useState('');
    const [fecha_fin, setFecha_Fin] = useState('');
    const [usos_maximos_total, setUsos_Maximos_Total] = useState('');
    const [usos_maximos_Por_cliente, setUsos_Maximos_Por_Cliente] = useState('');
    const [usos_actuales, setUsos_Actuales] = useState('');
    const [activo, setActivo] = useState('');
    const [aplica_a_todos_productos, setAplica_A_Todos_Productos] = useState('');
    const [aplica_a_todos_servicios, setAplica_A_Todos_Servicios] = useState('');



    const promocionesEjemplo = [
        { id: '1', codigo: 'Maquillaje', nombre: 'Piel brillante y suave', descripcion: 'Spa', tipo_descuento: 'activo', valor_descuento: 'Consulta', fecha_inicio: 'null', fecha_fin: 'null', usos_maximos_total: 'null', usos_maximos_Por_cliente: 'null', usos_actuales: 'null', activo: 'null', aplica_a_todos_productos: 'null', aplica_a_todos_servicios: 'null'},
        { id: '2', codigo: 'Corporativo', nombre: 'Eliminación de grasa', descripcion: 'Spa', tipo_descuento: 'activo', valor_descuento: 'Revisión' , fecha_inicio: 'null', fecha_fin: 'null', usos_maximos_total: 'null' , usos_maximos_Por_cliente: 'null', usos_actuales:'null', activo: 'null', aplica_a_todos_productos: 'null', aplica_a_todos_servicios: 'null' },
        { id: '3', codigo: 'Estetico', nombre: 'Eliminación de acne', descripcion: 'Barberia', tipo_descuento: 'activo', valor_descuento: 'urgencia', fecha_inicio: 'null', fecha_fin: 'null', usos_maximos_total: 'null', usos_maximos_Por_cliente: 'null', usos_actuales: 'null', activo: 'null', aplica_a_todos_productos: 'null', aplica_a_todos_servicios: 'null' },
    ];

    useEffect(() => {
        if (promocionId) {
            const foundPromocion = promocionesEjemplo.find(pr => pr.id === promocionId);
            if (foundPromocion) {
                setPromocion(foundPromocion);
                setId(foundPromocion.id);
                setCodigo(foundPromocion.Codigo);
                setNombre(foundPromocion.Nombre);
                setDescripcion(foundPromocion.Descripcion);
                setTipo_Descuento(foundPromocion.Tipo_Descuento);
                setValor_Descuento(foundPromocion.Valor_Descuento);
                setFecha_Inicio(foundPromocion.Fecha_Inicio);
                setFecha_Fin(foundPromocion.Fecha_Fin);
                set_Usos_Maximos_Total(foundPromocion.Usos_Maximos_Total);
                set_Usos_Maximos_Por_Cliente(foundPromocion.Usos_Maximos_Por_Cliente);
                setUsos_Actuales(foundPromocion.Usos_Actuales);
                setActivo(foundPromocion.Activo);
                setAplica_A_Todos_Productos(foundPromocion.Valor_Descuento);
                setAplica_A_Todos_Servicios(foundPromocion.Aplica_A_Todos_Servicios);


            } else {
                Alert.alert("Error", "Promoción no encontrada.");
                navigation.goBack(); 
            }
        } else {
        }
        setLoading(false);
    }, [promocionId]);

    const handleSave = () => {
        const promocionData = {
            id: categoriaId || new Date().getTime().toString(), // Generar ID si es nueva
            Codigo: codigo,
            Nombre: nombre,
            Descripcion: descripcion,
            Tipo_Descuento: tipo_descuento,
            Valor_Descuento: valor_descuento,
            Fecha_Inicio: fecha_inicio,
            Fecha_Fin: fecha_fin,
            Usos_Maximos_Total: usos_maximos_total,
            Usos_Maximos_Por_Cliente: usos_maximos_por_cliente,
            Usos_Actuales: usos_actuales,
            Activo: activo,
            Aplica_A_Todos_Productos: aplica_a_todos_productos,
            Aplica_A_Todos_Servicios: aplica_a_todos_servicios,
          
        };
        console.log("Datos a guardar:", promocionData);
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
                <Text style={styles.loadingText}>Cargando datos de la promoción...</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>{citaId ? "Editar promoción" : "Crear Nueva promoción"}</Text>

            <ScrollView style={styles.formScrollView}>
                <View style={styles.formCard}>
                    <Text style={styles.label}>Nombre de la Promoción:</Text>
                    <TextInput
                        style={styles.input}
                        value={id}
                        onChangeText={setId}
                        placeholder="Id"
                        placeholderTextColor="#999"
                    />

                    <Text style={styles.label}>Código:</Text>
                    <TextInput
                        style={styles.input}
                        value={codigo}
                        onChangeText={setCodigo}
                        placeholder="Codigo"
                        placeholderTextColor="#999"
                        keyboardType="default" // Podrías usar 'datetime' o una librería de selección de fecha
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

                    <Text style={styles.label}>Tipo Descuento:</Text>
                    <TextInput
                        style={styles.input}
                        value={tipo_descuento}
                        onChangeText={setTipo_Descuento}
                        placeholder="Tipo Descuento "
                        placeholderTextColor="#999"
                        keyboardType="default" 
                    />

                    <Text style={styles.label}>Valor Descuento:</Text>
                    <TextInput
                        style={styles.input}
                        value={valor_descuento}
                        onChangeText={setValor_Descuento}
                        placeholder="Valor Descuento"
                        placeholderTextColor="#999"
                    />

                    <Text style={styles.label}>Fecha Inicio:</Text>
                    <TextInput
                        style={styles.inputTextArea}
                        value={fecha_inicio}
                        onChangeText={setFecha_Inicio}
                        placeholder="Fecha Inicio"
                        placeholderTextColor="#999"
                        multiline={true}
                        numberOfLines={4}
                    />

                    <Text style={styles.label}>Fecha Fin:</Text>
                    <TextInput
                        style={styles.inputTextArea}
                        value={fecha_fin}
                        onChangeText={setFecha_Fin}
                        placeholder="Fecha Fin"
                        placeholderTextColor="#999"
                        multiline={true}
                        numberOfLines={4}
                    />

                    <Text style={styles.label}>Usos Maximos Total:</Text>
                    <TextInput
                        style={styles.inputTextArea}
                        value={usos_maximos_total}
                        onChangeText={setUsos_Maximos_Total}
                        placeholder="Usos Maximos Total"
                        placeholderTextColor="#999"
                        multiline={true}
                        numberOfLines={4}
                    />

                    <Text style={styles.label}>Usos Maximos Por Cliente:</Text>
                    <TextInput
                        style={styles.inputTextArea}
                        value={usos_maximos_por_cliente}
                        onChangeText={setUsos_Maximos_Por_Cliente}
                        placeholder="Usos Maximos Por Cliente"
                        placeholderTextColor="#999"
                        multiline={true}
                        numberOfLines={4}
                    />

                    <Text style={styles.label}>Usos Actuales:</Text>
                    <TextInput
                        style={styles.inputTextArea}
                        value={usos_actuales}
                        onChangeText={setUsos_Actuales}
                        placeholder="Usos Actuales"
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

                    <Text style={styles.label}>Aplica A Todos Productos:</Text>
                    <TextInput
                        style={styles.inputTextArea}
                        value={aplica_a_todos_productos}
                        onChangeText={setAplica_A_Todos_Productos}
                        placeholder="Aplica a Todos Productos"
                        placeholderTextColor="#999"
                        multiline={true}
                        numberOfLines={4}
                    />

                    <Text style={styles.label}>Aplica A Todos Servicios:</Text>
                    <TextInput
                        style={styles.inputTextArea}
                        value={aplica_a_todos_servicios}
                        onChangeText={setAplica_A_Todos_Servicios}
                        placeholder="Aplica a Todos Servicios"
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