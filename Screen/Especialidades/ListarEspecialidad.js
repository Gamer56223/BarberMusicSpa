import { ScrollView, StyleSheet, Text, View } from "react-native";
import BotonComponent from "../../components/BottonComponent";


export default function ListarEspecialidad({ navigation }) {

     const especialidadesEjemplo = [
        { id: '1', nombre: 'Masajista', descripcion: 'profesional', icono_clave: 'h', activo: 'activo'},
        { id: '2', nombre: 'Corporista', descripcion: 'profesional', icono_clave: 'h', activo: 'activo'},
        { id: '3', nombre: 'Estetico', descripcion: 'profesional', icono_clave: 'h', activo: 'activo'},
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Listado de Especialidades</Text> 

            <ScrollView style={styles.especialidadesContainer}>
                {especialidadesEjemplo.map((especialidad) => (
                    <View key={especialidad.id} style={styles.especialidadCard}>
                        <Text style={styles.especialidadTitle}>{especialidad.Nombre}</Text>
                        <Text style={styles.especialidadDetail}><Text style={styles.detailLabel}>Id: </Text>{especialidad.Id}</Text>
                        <Text style={styles.especialidadDetail}><Text style={styles.detailLabel}>Nombre: </Text>{especialidad.Nombre}</Text>
                        <Text style={styles.especialidadDetail}><Text style={styles.detailLabel}>Descripción: </Text>{especialidad.Descripcion}</Text>
                        <Text style={styles.especialidadDetail}><Text style={styles.detailLabel}>Icono Clave: </Text>{especialidad.Icono_Clave}</Text>
                        <Text style={styles.especialidadDetail}><Text style={styles.detailLabel}>Activo: </Text>{especialidad.Activo}</Text>

                        <View style={styles.buttonContainer}>
                            <BotonComponent
                                title="Ver Detalles" // Título completo
                                onPress={() => navigation.navigate("Detalleagendamientos", { especialidadId: especialidad.id })}
                                buttonStyle={styles.viewButton}
                                textStyle={styles.buttonText}
                            />
                            <BotonComponent
                                title="Editar Especialidad" // Título completo
                                onPress={() => navigation.navigate("Editarespecialidades", { especialidadId: especialidad.id })}
                                buttonStyle={styles.editButton}
                                textStyle={styles.buttonText}
                            />
                        </View>
                    </View>
                ))}
            </ScrollView>

            <BotonComponent
                title="Agendar Nueva Especialidad" // Título completo
                onPress={() => { /* navigation.navigate("Crearespecialidad") */ }}
                buttonStyle={styles.newespecialidadButton}
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
    especialidadesContainer: {
        width: "100%", 
        flex: 1, 
    },

    especialidadCard: {
        backgroundColor: "skyblue", // Fondo blanco para cada tarjeta de agendamiento
        borderRadius: 10,
        padding: 15,
        marginBottom: 15, // Espacio entre tarjetas
        shadowColor: "#000", // Sombra suave
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3, // Elevación para Android
    },

    especialidadTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 8,
        color: "#34495E", 
    },
    
    especialidadDetail: {
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
    newespecialidadButton: {
        backgroundColor: "#E67E22", // Naranja para "Agendar Nueva agendamiento"
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