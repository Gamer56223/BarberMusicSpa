import { ScrollView, StyleSheet, Text, View } from "react-native";
import BotonComponent from "../../components/BottonComponent";


export default function ListarUsuario({ navigation }) {

    const usuariosEjemplo = [
        { id: '1', nombre: 'Laura Sofia Rodriguez', email: '@gmail', password: '12345', imagen_path: 'activo', direccion: 'venezuela', telefono: '7603108', rol: 'admin', estado: 'activo'},
        { id: '2', nombre: 'Carlos Estiven Rodriguez', email: '@gmail', password: '12345', imagen_path: 'activo', direccion: 'venezuela', telefono: '7603102', rol: 'admin', estado: 'activo' },
        { id: '3', nombre: 'Daniel Esteban Ortiz', email: '@gmail', password: '12345', imagen_path: 'activo', direccion: 'venezueal', telefono: '7603103', rol: 'admin', estado: 'activo'},
    ];
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Listado de Usuarios</Text> 

            <ScrollView style={styles.usuariosContainer}>
                {usuariosEjemplo.map((usuario) => (
                    <View key={usuario.id} style={styles.usuarioCard}>
                        <Text style={styles.usuarioTitle}>{categoria.Nombre}</Text>
                        <Text style={styles.usuarioDetail}><Text style={styles.detailLabel}>Id: </Text>{usuario.Id}</Text>
                        <Text style={styles.usuarioDetail}><Text style={styles.detailLabel}>Nombre: </Text>{usuario.Nombre}</Text>
                        <Text style={styles.usuarioDetail}><Text style={styles.detailLabel}>Email: </Text>{usuario.Email}</Text>
                        <Text style={styles.usuarioDetail}><Text style={styles.detailLabel}>Password: </Text>{usuario.Password}</Text>
                        <Text style={styles.usuarioDetail}><Text style={styles.detailLabel}>Imagen_Path: </Text>{usuario.Imagen_Path}</Text>
                        <Text style={styles.usuarioDetail}><Text style={styles.detailLabel}>Direccion: </Text>{usuario.Direccion}</Text>
                        <Text style={styles.usuarioDetail}><Text style={styles.detailLabel}>Rol: </Text>{usuario.Rol}</Text>
                        <Text style={styles.usuarioDetail}><Text style={styles.detailLabel}>Estado: </Text>{usuario.Estado}</Text>


                        <View style={styles.buttonContainer}>
                            <BotonComponent
                                title="Ver Detalles" // Título completo
                                onPress={() => navigation.navigate("Detalleusuarios", { usuarioId: usuario.id })}
                                buttonStyle={styles.viewButton}
                                textStyle={styles.buttonText}
                            />
                            <BotonComponent
                                title="Editar usuario" // Título completo
                                onPress={() => navigation.navigate("Editarusuarios", { usuarioId: usuario.id })}
                                buttonStyle={styles.editButton}
                                textStyle={styles.buttonText}
                            />
                        </View>
                    </View>
                ))}
            </ScrollView>

            <BotonComponent
                title="Agendar Nuevo Usuario" // Título completo
                onPress={() => { /* navigation.navigate("Crearcategoria") */ }}
                buttonStyle={styles.newusuarioButton}
                textStyle={styles.buttonText}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#F0F4F8", // Fondo suave
        alignItems: "center", // Centra el contenido horizontalmente
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 25,
        color: "#2C3E50", // Color de título oscuro
    },
    usuariosContainer: {
        width: "100%", 
        flex: 1, 
    },
    usuarioCard: {
        backgroundColor: "skyblue", // Fondo blanco para cada tarjeta de categoria
        borderRadius: 10,
        padding: 15,
        marginBottom: 15, // Espacio entre tarjetas
        shadowColor: "#000", // Sombra suave
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3, // Elevación para Android
    },
    usuarioTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 8,
        color: "#34495E", 
    },
    
    usuarioDetail: {
        fontSize: 16,
        color: "#5C6F7F", 
        marginBottom: 4,
    },
    
    detailLabel: {
        fontWeight: 'bold',
    },
    buttonContainer: {
        flexDirection: "row", 
        justifyContent: "space-around",
        marginTop: 15,
    },
    // Estilos para BotonComponent
    viewButton: {
        backgroundColor: "#3498DB", // Azul para "Ver Detalles"
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
        minWidth: 120, 
        alignItems: 'center',
    },
    editButton: {
        backgroundColor: "#2ECC71", // Verde para "Editar"
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
        minWidth: 120,
        alignItems: 'center',
    },
    newusuarioButton: {
        backgroundColor: "#E67E22", // Naranja para "Agendar Nueva categoria"
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 10,
        marginTop: 20, 
        marginBottom: 10, 
    },
    buttonText: {
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 16,
    },
});