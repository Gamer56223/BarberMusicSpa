import { ScrollView, StyleSheet, Text, View } from "react-native";
import BotonComponent from "../../components/BottonComponent";


export default function ListarAgendamiento({ navigation }) {

    const agendamientosEjemplo = [
        { id: '1', Fecha_Hora_Inicio: '20/06/2025', Fecha_Hora_Fin: '22/06/2025', Precio_Final: '$72.000', Estado: 'activo', Notas_Cliente: 'Consulta', Notas_Internas: 'Paciente con síntomas leves de resfriado.' },
        { id: '2', Fecha_Hora_Inicio: '20/06/2025', Fecha_Hora_Fin: '22/06/2025', Precio_Final: '35.000', Estado: 'activo', Notas_Cliente: 'Revisión', Notas_Internas: 'Revisión anual y limpieza.' },
        { id: '3', Fecha_Hora_Inicio: '20/06/2025', Fecha_Hora_Fin: '22/06/2025', Precio_Final: '132.000', Estado: 'activo', Notas_Cliente: 'urgencia', Notas_Internas: 'Sesión para rehabilitación de rodilla.' },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Listado de Agendamientos</Text> 

            <ScrollView style={styles.agendamientosContainer}>
                {agendamientosEjemplo.map((agendamiento) => (
                    <View key={agendamiento.id} style={styles.agendamientoCard}>
                        <Text style={styles.agendamientoTitle}>{agendamiento.Nombre}</Text>
                        <Text style={styles.agendamientoDetail}><Text style={styles.detailLabel}>Id: </Text>{agendamiento.Id}</Text>
                        <Text style={styles.agendamientoDetail}><Text style={styles.detailLabel}>Fecha Hora Inicio: </Text>{agendamiento.Fecha_Hora_Inicio}</Text>
                        <Text style={styles.agendamientoDetail}><Text style={styles.detailLabel}>Fecha Hora Fin: </Text>{agendamiento.Fecha_Hora_Fin}</Text>
                        <Text style={styles.agendamientoDetail}><Text style={styles.detailLabel}>Precio Final: </Text>{agendamiento.Precio_Final}</Text>
                        <Text style={styles.agendamientoDetail}><Text style={styles.detailLabel}>Estado: </Text>{agendamiento.Estado}</Text>
                        <Text style={styles.agendamientoDetail}><Text style={styles.detailLabel}>Notas Cliente: </Text>{agendamiento.Notas_Cliente}</Text>
                        <Text style={styles.agendamientoDetail}><Text style={styles.detailLabel}>Notas Internas: </Text>{agendamiento.Notas_Internas}</Text>

                        <View style={styles.buttonContainer}>
                            <BotonComponent
                                title="Ver Detalles" // Título completo
                                onPress={() => navigation.navigate("Detalleagendamientos", { agendamientoId: agendamiento.id })}
                                buttonStyle={styles.viewButton}
                                textStyle={styles.buttonText}
                            />
                            <BotonComponent
                                title="Editar agendamiento" // Título completo
                                onPress={() => navigation.navigate("Editaragendamientos", { agendamientoId: agendamiento.id })}
                                buttonStyle={styles.editButton}
                                textStyle={styles.buttonText}
                            />
                        </View>
                    </View>
                ))}
            </ScrollView>

            <BotonComponent
                title="Agendar Nueva agendamiento" // Título completo
                onPress={() => { /* navigation.navigate("Crearagendamiento") */ }}
                buttonStyle={styles.newagendamientoButton}
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
    agendamientosContainer: {
        width: "100%", 
        flex: 1, 
    },
    agendamientoCard: {
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
    agendamientoTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 8,
        color: "#34495E", 
    },
    
    agendamientoDetail: {
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
    newagendamientoButton: {
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