import { useEffect, useState } from "react";
import { ActivityIndicator, Alert, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import BotonComponent from "../../components/BottonComponent";

export default function EditarUsuario({ route, navigation }) {

    const { usuarioId } = route.params || {};

    const [usuario, setUsuario] = useState(null);
    const [loading, setLoading] = useState(true);

  
    const [id, setId] = useState('');
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [imagen_path, setImagen_Path] = useState('');
    const [direccion, setDireccion] = useState('');
    const [telefono, setTelefono] = useState('');
    const [rol, setRol] = useState('');
    const [estado, setEstado] = useState('');




    const usuariosEjemplo = [
        { id: '1', nombre: 'Laura Sofia Rodriguez', email: '@gmail', password: '12345', imagen_path: 'activo', direccion: 'venezuela', telefono: '7603108', rol: 'admin', estado: 'activo'},
        { id: '2', nombre: 'Carlos Estiven Rodriguez', email: '@gmail', password: '12345', imagen_path: 'activo', direccion: 'venezuela', telefono: '7603102', rol: 'admin', estado: 'activo' },
        { id: '3', nombre: 'Daniel Esteban Ortiz', email: '@gmail', password: '12345', imagen_path: 'activo', direccion: 'venezueal', telefono: '7603103', rol: 'admin', estado: 'activo'},
    ];


    useEffect(() => {
        if (usuarioId) {
            const foundUsuario = usuariosEjemplo.find(c => c.id === usuarioId);
            if (foundUsuario) {
                setUsuario(foundUsuario);
                setId(foundUsuario.id);
                setNombre(foundUsuario.Nombre);
                setEmail(foundUsuario.Email);
                setPassword(foundUsuario.Password);
                setImagen_Path(foundUsuario.Imagen_Path);
                setDireccion(foundUsuario.Direccion);
                setTelefono(foundUsuario.Telefono);
                setRol(foundUsuario.Rol);
                setEstado(foundUsuario.Estado);

            } else {
                Alert.alert("Error", "Usuario no encontrado.");
                navigation.goBack(); 
            }
        } else {
        }
        setLoading(false);
    }, [usuarioId]);

    const handleSave = () => {
        const usuarioData = {
            id: categoriaId || new Date().getTime().toString(), // Generar ID si es nueva
            Nombre: nombre,
            Email: email,
            Password: password,
            Imagen_Path: imagen_path,
            Direccion: direccion,
            Telefono: telefono,
            Rol: rol,
            Estado: estado,
        };
        console.log("Datos a guardar:", usuarioData);
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
                <Text style={styles.loadingText}>Cargando datos del Usuario...</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>{citaId ? "Editar usuario" : "Crear Nuevo Usuario"}</Text>

            <ScrollView style={styles.formScrollView}>
                <View style={styles.formCard}>
                    <Text style={styles.label}>Nombre del Usuario:</Text>
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

                    <Text style={styles.label}>Email:</Text>
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                        placeholder="Email"
                        placeholderTextColor="#999"
                    />

                    <Text style={styles.label}>Password:</Text>
                    <TextInput
                        style={styles.input}
                        value={password}
                        onChangeText={setPassword}
                        placeholder="Password"
                        placeholderTextColor="#999"
                        keyboardType="default" 
                    />

                    <Text style={styles.label}>Imagen Path:</Text>
                    <TextInput
                        style={styles.input}
                        value={imagen_path}
                        onChangeText={setImagen_Path}
                        placeholder="Imagen Path"
                        placeholderTextColor="#999"
                    />

                    <Text style={styles.label}>Dirección:</Text>
                    <TextInput
                        style={styles.inputTextArea}
                        value={direccion}
                        onChangeText={setDireccion}
                        placeholder="Direccion"
                        placeholderTextColor="#999"
                        multiline={true}
                        numberOfLines={4}
                    />

                     <Text style={styles.label}>Telefono:</Text>
                    <TextInput
                        style={styles.inputTextArea}
                        value={telefono}
                        onChangeText={setTelefono}
                        placeholder="Telefono"
                        placeholderTextColor="#999"
                        multiline={true}
                        numberOfLines={4}
                    />

                     <Text style={styles.label}>Rol:</Text>
                    <TextInput
                        style={styles.inputTextArea}
                        value={rol}
                        onChangeText={setRol}
                        placeholder="rol"
                        placeholderTextColor="#999"
                        multiline={true}
                        numberOfLines={4}
                    />

                     <Text style={styles.label}>Estado:</Text>
                    <TextInput
                        style={styles.inputTextArea}
                        value={estado}
                        onChangeText={setEstado}
                        placeholder="Estado"
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