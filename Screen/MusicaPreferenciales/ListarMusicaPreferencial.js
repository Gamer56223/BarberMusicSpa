import { ScrollView, StyleSheet, Text, View } from "react-native";
import BotonComponent from "../../components/BottonComponent";


export default function ListarMusicaPreferencial({ navigation }) {

    const musicapreferencialesEjemplo = [
        { id: '1', nombre_opcion: 'chamo', descripcion: 'aleatorio', stream_url_ejemplo: 'www', activo: 'activo'},
        { id: '2', nombre_opcion: 'venezuela', descripcion: 'aleatorio', stream_url_ejemplo: 'www', activo: 'activo'},
        { id: '3', nombre_opcion: 'caracas', descripcion: 'aleatorio', stream_url_ejemplo: 'www', activo: 'activo'},
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Listado de Musica Preferencial</Text> 

            <ScrollView style={styles.agendamientosContainer}>
                {musicapreferencialesEjemplo.map((agendamiento) => (
                    <View key={musicapreferencial.id} style={styles.musicapreferencialCard}>
                        <Text style={styles.musicapreferencialTitle}>{agendamiento.Nombre}</Text>
                        <Text style={styles.musicapreferencialDetail}><Text style={styles.detailLabel}>Id: </Text>{musicapreferencial.Id}</Text>
                        <Text style={styles.musicapreferencialDetail}><Text style={styles.detailLabel}>Nombre Opción: </Text>{musicapreferencial.Nombre_Opcion}</Text>
                        <Text style={styles.musicapreferencialDetail}><Text style={styles.detailLabel}>Descripción: </Text>{musicapreferencial.Descripcion}</Text>
                        <Text style={styles.musicapreferencialDetail}><Text style={styles.detailLabel}>Stream Url: </Text>{musicapreferencial.Stream_Url}</Text>
                        <Text style={styles.musicapreferencialDetail}><Text style={styles.detailLabel}>Activo: </Text>{musicapreferencial.Activo}</Text>
                      
                        <View style={styles.buttonContainer}>
                            <BotonComponent
                                title="Ver Detalles" // Título completo
                                onPress={() => navigation.navigate("Detallemusicapreferenciales", { musicapreferencialId: musicapreferencial.id })}
                                buttonStyle={styles.viewButton}
                                textStyle={styles.buttonText}
                            />
                            <BotonComponent
                                title="Editar Musica Preferencial" // Título completo
                                onPress={() => navigation.navigate("Editarmusicapreferenciales", { agendamientoId: agendamiento.id })}
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