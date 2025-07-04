import { useEffect, useState } from "react";
import { ActivityIndicator, Alert, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import BotonComponent from "../../components/BottonComponent";

export default function EditarSucursal({ route, navigation }) {

    const { sucursalId } = route.params || {};

    const [sucursal, setSucursal] = useState(null);
    const [loading, setLoading] = useState(true);

  
    const [id, setId] = useState('');
    const [nombre, setNombre] = useState('');
    const [imagen_path, setImagen_Path] = useState('');
    const [direccion_calle, setDireccion_Calle] = useState('');
    const [direccion_numero_exterior, setNumero_Exterior] = useState('');
    const [direccion_numero_interior, setNumero_Interior] = useState('');
    const [direccion_colonia, setColonia] = useState('');
    const [direccion_codigo_postal, setCodigo_Postal] = useState('');
    const [direccion_municipio_alcaldia, setDireccion_Municipio_Alcaldia] = useState('');
    const [direccion_ciudad, setDireccion_Ciudad] = useState('');
    const [direccion_estado, setEstado] = useState('');
    const [telefono_contacto, setTelefono_Contacto] = useState('');
    const [email_contacto, setEmail_Contacto] = useState('');
    const [link_maps, setLink_Maps] = useState('');
    const [latitud, setLatitud] = useState('');
    const [longitud, setLongitud] = useState('');
    const [activo, setActivo] = useState('');

    const sucursalesEjemplo = [
        { id: '1', nombre: 'Sede Soacha', imagen_path: 'www', direccion_calle: 'venezuela', direccion_numero_exterior: '657', direccion_numero_interior: '303', direccion_colonia: 'manzana a', direccion_codigo_postal: '78', direccion_municipio_alcaldia: 'floresta', direccion_ciudad: 'calle 4', direccion_estado: 'venezuela', telefono_contacto: '7603108', email_contacto: 'gmail', link_maps: 'www', latitud: '5', longitud: '20', activo: 'true'},
        { id: '2', nombre: 'Sede Bolivar', imagen_path: 'www', direccion_calle: 'venuezuela', direccion_numero_exterior: '657', direccion_numero_interior: '304', direccion_colonia: 'manzana b', direccion_codigo_postal: '77', direccion_municipio_alcaldia: 'tuta', direccion_ciudad: 'calle 5', direccion_estado: 'zulia', telefono_contacto: '7603102', email_contacto: 'gmail' , link_maps: 'www', latitud: '6', longitud: '22', activo: 'true'},
        { id: '3', nombre: 'Sede Santa Fe', imagen_path: 'www', direccion_calle: 'venezuela', direccion_numero_exterior: '657', direccion_numero_interior: '306', direccion_colonia:'manzana c', direccion_codigo_postal: '76', direccion_municipio_alcaldia: 'belen', direccion_ciudad: 'calle 6', direccion_estado: 'caracas', telefono_contacto: '7603103', email_contacto: 'gmail', link_maps: 'www', latitud: '7', longitud: '24', activo: 'true'},
    ];

    useEffect(() => {
        if (sucursalId) {
            const foundSucursal = sucursalesEjemplo.find(su => su.id === sucursalId);
            if (foundSucursal) {
                setSucursal(foundSucursal);
                setId(foundSucursal.id);
                setNombre(foundSucursal.Nombre);
                setImagen_Path(foundSucursal.Imagen_Path);
                setDireccion_Calle(foundSucursal.Direccion_Calle);
                setDireccion_Numero_Exterior(foundSucursal.Numero_Exterior);
                setDireccion_Numero_Interior(foundSucursal.Numero_Interior);
                setDireccion_Colonia(foundSucursal.Colonia);
                setDireccion_Codigo_Postal(foundSucursal.Codigo_Postal);
                setDireccion_Municipio_Alcaldia(foundSucursal.Municipio_Alcaldia);
                setDireccion_Ciudad(foundSucursal.Ciudad);
                setDireccion_Estado(foundSucursal.Estado);
                setTelefono_Contacto(foundSucursal.Telefono_Contacto);
                setEmail_Contacto(foundSucursal.Email_Contacto);
                setLink_Maps(foundSucursal.Link_Maps);
                setLatitud(foundSucursal.Latitud);
                setLongitud(foundSucursal.Longitud);
                setActivo(foundSucursal.Activo);


            } else {
                Alert.alert("Error", "Sucursal no encontrada.");
                navigation.goBack(); 
            }
        } else {
        }
        setLoading(false);
    }, [sucursalId]);

    const handleSave = () => {
        const sucursalData = {
            id: sucursalId || new Date().getTime().toString(), // Generar ID si es nueva
            Nombre: nombre,
            Imagen_Path: imagen_path,
            Direccion_Calle: direccion_calle,
            Direccion_Numero_Exterior: direccion_numero_exterior,
            Direccion_Numero_Interior: direccion_numero_interior,
            Direccion_Colonia: direccion_colonia,
            Direccion_Codigo_Postal: direccion_codigo_postal,
            Direccion_Municipio_Alcaldia: direccion_municipio_alcaldia,
            Direccion_Ciudad: direccion_ciudad,
            Direccion_Estado: direccion_estado,
            Telefono_Contacto: telefono_contacto,
            Email_Contacto: email_contacto,
            Link_Maps: link_maps,
            Latitud: latitud,
            Longitud: longitud,
            Activo: activo,

        };
        console.log("Datos a guardar:", sucursalData);
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
                <Text style={styles.loadingText}>Cargando datos de la Sucursal...</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>{sucursalId ? "Editar sucursal" : "Crear Nueva sucursal"}</Text>

            <ScrollView style={styles.formScrollView}>
                <View style={styles.formCard}>
                    <Text style={styles.label}>Nombre de la Sucursal:</Text>
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

                    <Text style={styles.label}>Imagen Path:</Text>
                    <TextInput
                        style={styles.input}
                        value={imagen_path}
                        onChangeText={setImagen_Path}
                        placeholder="Imagen Path"
                        placeholderTextColor="#999"
                    />

                    <Text style={styles.label}>Dirección Calle:</Text>
                    <TextInput
                        style={styles.input}
                        value={direccion_calle}
                        onChangeText={setDireccion_Calle}
                        placeholder="Dirección Calle"
                        placeholderTextColor="#999"
                        keyboardType="default" 
                    />

                    <Text style={styles.label}>Dirección Número Exterior:</Text>
                    <TextInput
                        style={styles.input}
                        value={direccion_numero_exterior}
                        onChangeText={setDireccion_Numero_Exterior}
                        placeholder="Dirección Número Exterior"
                        placeholderTextColor="#999"
                    />

                    <Text style={styles.label}>Dirección Número Interior:</Text>
                    <TextInput
                        style={styles.inputTextArea}
                        value={direccion_numero_interior}
                        onChangeText={setDireccion_Numero_Interior}
                        placeholder="Dirección Número Interior"
                        placeholderTextColor="#999"
                        multiline={true}
                        numberOfLines={4}
                    />

                    <Text style={styles.label}>Dirección Colonia:</Text>
                    <TextInput
                        style={styles.inputTextArea}
                        value={direccion_colonia}
                        onChangeText={setDireccion_Colonia}
                        placeholder="Dirección Colonia"
                        placeholderTextColor="#999"
                        multiline={true}
                        numberOfLines={4}
                    />

                    <Text style={styles.label}>Dirección Código Postal:</Text>
                    <TextInput
                        style={styles.inputTextArea}
                        value={direccion_codigo_postal}
                        onChangeText={setDireccion_Codigo_Postal}
                        placeholder="Dirección Código Postal"
                        placeholderTextColor="#999"
                        multiline={true}
                        numberOfLines={4}
                    />

                    <Text style={styles.label}>Dirección Municipio Alcaldia:</Text>
                    <TextInput
                        style={styles.inputTextArea}
                        value={direccion_municipio_alcaldia}
                        onChangeText={setDireccion_Municipio_Alcaldia}
                        placeholder="Dirección Municipio Alcaldia"
                        placeholderTextColor="#999"
                        multiline={true}
                        numberOfLines={4}
                    />

                    <Text style={styles.label}>Dirección Ciudad:</Text>
                    <TextInput
                        style={styles.inputTextArea}
                        value={direccion_ciudad}
                        onChangeText={setDireccion_Ciudad}
                        placeholder="Dirección Ciudad"
                        placeholderTextColor="#999"
                        multiline={true}
                        numberOfLines={4}
                    />

                    <Text style={styles.label}>Dirección Estado:</Text>
                    <TextInput
                        style={styles.inputTextArea}
                        value={direccion_estado}
                        onChangeText={setDireccion_Estado}
                        placeholder="Dirección Estado"
                        placeholderTextColor="#999"
                        multiline={true}
                        numberOfLines={4}
                    />

                    <Text style={styles.label}>Telefono Contacto:</Text>
                    <TextInput
                        style={styles.inputTextArea}
                        value={telefono_contacto}
                        onChangeText={setTelefono_Contacto}
                        placeholder="Telefono Contacto"
                        placeholderTextColor="#999"
                        multiline={true}
                        numberOfLines={4}
                    />

                    <Text style={styles.label}>Email Contacto:</Text>
                    <TextInput
                        style={styles.inputTextArea}
                        value={email_contacto}
                        onChangeText={setEmail_Contacto}
                        placeholder="Email Contacto"
                        placeholderTextColor="#999"
                        multiline={true}
                        numberOfLines={4}
                    />

                    <Text style={styles.label}>Link Maps:</Text>
                    <TextInput
                        style={styles.inputTextArea}
                        value={link_maps}
                        onChangeText={setLink_Maps}
                        placeholder="Link Maps"
                        placeholderTextColor="#999"
                        multiline={true}
                        numberOfLines={4}
                    />

                    <Text style={styles.label}>Latitud:</Text>
                    <TextInput
                        style={styles.inputTextArea}
                        value={latitud}
                        onChangeText={setLatitud}
                        placeholder="Latitud"
                        placeholderTextColor="#999"
                        multiline={true}
                        numberOfLines={4}
                    />

                    <Text style={styles.label}>Longitud:</Text>
                    <TextInput
                        style={styles.inputTextArea}
                        value={longitud}
                        onChangeText={setLongitud}
                        placeholder="Longitud"
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