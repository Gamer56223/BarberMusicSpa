import { ScrollView, StyleSheet, Text, View } from "react-native";
import BotonComponent from "../../components/BottonComponent";


export default function ListarEspecialidadPersonal({ navigation }) {

    const especialidadespersonalEjemplo = [
        { id: '1', especialidad_id: '20', personal_id: '6'},
        { id: '2', especialidad_id: '22', personal_id: '7'},
        { id: '3', especialidad_id: '21', personal_id: '5'},

    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Listado de Especialidades del Personal</Text> 

            <ScrollView style={styles.especialidadespersonalEjemploContainer}>
                {especialidadespersonalEjemploEjemplo.map((especialidadpersonal) => (
                    <View key={agendamiento.id} style={styles.agendamientoCard}>
                        <Text style={styles.especialidadpersonalTitle}>{agendamiento.Nombre}</Text>
                        <Text style={styles.especialidadpersonalDetail}><Text style={styles.detailLabel}>Id: </Text>{especialidadpersonal.Id}</Text>
                        <Text style={styles.especialidadpersonalDetail}><Text style={styles.detailLabel}>Especialidad Id: </Text>{especialidadpersonal.Especialidad_Id}</Text>
                        <Text style={styles.especialidadpersonalDetail}><Text style={styles.detailLabel}>Personal Id: </Text>{especialidadpersonal.Fecha_Personal_Id}</Text>
                       

                        <View style={styles.buttonContainer}>
                            <BotonComponent
                                title="Ver Detalles" // Título completo
                                onPress={() => navigation.navigate("Detalleespecialidadespersonal", { especialidadpersonalId: especialidadpersonal.id })}
                                buttonStyle={styles.viewButton}
                                textStyle={styles.buttonText}
                            />
                            <BotonComponent
                                title="Editar especialidad personal" // Título completo
                                onPress={() => navigation.navigate("Editaragendamientos", { especialidadpersonalId: especialidadpersonal.id })}
                                buttonStyle={styles.editButton}
                                textStyle={styles.buttonText}
                            />
                        </View>
                    </View>
                ))}
            </ScrollView>

            <BotonComponent
                title="Agendar Nueva Especialidad Personal" // Título completo
                onPress={() => { /* navigation.navigate("Crearagendamiento") */ }}
                buttonStyle={styles.newespecialidadpersonalButton}
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
    especialidadespersonalContainer: {
        width: "100%", 
        flex: 1, 
    },
    especialidadpersonalCard: {
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
    especialidadpersonalTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 8,
        color: "#34495E", 
    },
    
    especialidadpersonalDetail: {
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
    newespecialidadpersonalButton: {
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