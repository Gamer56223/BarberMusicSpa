import { ScrollView, StyleSheet, Text, View } from "react-native";
import BotonComponent from "../../components/BottonComponent";


export default function ListarServicio({ navigation }) {

    const serviciosEjemplo = [
        { id: '1', nombre: 'Maquillaje', descripcion: 'Piel brillante y suave', imagen_path: 'Spa', precio_base: '$75k', duracion_minutos: '15 minutos', categoria_id:'3', especialidad_requerida_id: '8', activo: 'true'},
        { id: '2', nombre: 'Corporativo', descripcion: 'Eliminación de grasa', imagen_path: 'Spa', precio_base: '$220k', duracion_minutos: '20 minutos', categoria_id: '4', especialidad_requerida_id: '9', activo: 'true'},
        { id: '3', nombre: 'Estetico', descripcion: 'Eliminación de acne', imagen_path: 'Barberia', precio_base: '$300k', duracion_minutos: '30 minutos', categoria_id: '7', especialidad_requerida_id:'6', activo: 'true'},
    ];
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Listado de Servicios</Text> 

            <ScrollView style={styles.serviciosContainer}>
                {categoriasEjemplo.map((servicio) => (
                    <View key={servicio.id} style={styles.servicioCard}>
                        <Text style={styles.servicioTitle}>{servicio.Nombre}</Text>
                        <Text style={styles.servicioDetail}><Text style={styles.detailLabel}>Id: </Text>{servicio.Id}</Text>
                        <Text style={styles.servicioDetail}><Text style={styles.detailLabel}>Nombre: </Text>{servicio.Nombre}</Text>
                        <Text style={styles.servicioDetail}><Text style={styles.detailLabel}>Descripción: </Text>{servicio.Descripcion}</Text>
                        <Text style={styles.servicioDetail}><Text style={styles.detailLabel}>Imagen Path: </Text>{servicio.Imagen_Path}</Text>
                        <Text style={styles.servicioDetail}><Text style={styles.detailLabel}>Precio Base: </Text>{servicio.Precio}</Text>
                        <Text style={styles.servicioDetail}><Text style={styles.detailLabel}>Duración Minutos: </Text>{servicio.Duracion_Minutos}</Text>
                        <Text style={styles.servicioDetail}><Text style={styles.detailLabel}>Categoria Id: </Text>{servicio.Categoria_Id}</Text>
                        <Text style={styles.servicioDetail}><Text style={styles.detailLabel}>Especialidad Requerida Id: </Text>{servicio.Especialidad_Requerida_Id}</Text>
                        <Text style={styles.servicioDetail}><Text style={styles.detailLabel}>Activo: </Text>{servicio.Activo}</Text>
                        

                        <View style={styles.buttonContainer}>
                            <BotonComponent
                                title="Ver Detalles" // Título completo
                                onPress={() => navigation.navigate("Detalleservicios", { servicioId: servicio.id })}
                                buttonStyle={styles.viewButton}
                                textStyle={styles.buttonText}
                            />
                            <BotonComponent
                                title="Editar categoria" // Título completo
                                onPress={() => navigation.navigate("Editarservicios", { servicioId: servicio.id })}
                                buttonStyle={styles.editButton}
                                textStyle={styles.buttonText}
                            />
                        </View>
                    </View>
                ))}
            </ScrollView>

            <BotonComponent
                title="Agendar Nuevo Servicio" // Título completo
                onPress={() => { /* navigation.navigate("Crearcategoria") */ }}
                buttonStyle={styles.newservicioButton}
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
    serviciosContainer: {
        width: "100%", 
        flex: 1, 
    },
    servicioCard: {
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
    servicioTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 8,
        color: "#34495E", 
    },
    
    servicioDetail: {
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
    newservicioButton: {
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