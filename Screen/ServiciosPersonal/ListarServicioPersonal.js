import { ScrollView, StyleSheet, Text, View } from "react-native";
import BotonComponent from "../../components/BottonComponent";


export default function ListarServicioPersonal({ navigation }) {

    const serviciopersonalesEjemplo = [
        { id: '1', servicio_id: '2', personal_id: '10'},
        { id: '2', servicio_id: '3', personal_id: '11' },
        { id: '3', servicio_id: '4', personal_id: '12'},
    ];
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Listado de Servicio Personal</Text> 

            <ScrollView style={styles.serviciopersonalesContainer}>
                {categoriasEjemplo.map((serviciopersonales) => (
                    <View key={categoria.id} style={styles.serviciopersonalCard}>
                        <Text style={styles.serviciopersonalTitle}>{categoria.Nombre}</Text>
                        <Text style={styles.serviciopersonalDetail}><Text style={styles.detailLabel}>Id: </Text>{serviciopersonal.Id}</Text>
                        <Text style={styles.serviciopersonalDetail}><Text style={styles.detailLabel}>Servicio Id: </Text>{serviciopersonal.Servicio_Id}</Text>
                        <Text style={styles.serviciopersonalDetail}><Text style={styles.detailLabel}>Personal Id: </Text>{serviciopersonal.Personal_Id}</Text>

                        <View style={styles.buttonContainer}>
                            <BotonComponent
                                title="Ver Detalles" // Título completo
                                onPress={() => navigation.navigate("Detalleserviciopersonales", { serviciopersonalId: serviciopersonal.id })}
                                buttonStyle={styles.viewButton}
                                textStyle={styles.buttonText}
                            />
                            <BotonComponent
                                title="Editar categoria" // Título completo
                                onPress={() => navigation.navigate("Editarserviciopersonales", { serviciopersonalId: serviciopersonal.id })}
                                buttonStyle={styles.editButton}
                                textStyle={styles.buttonText}
                            />
                        </View>
                    </View>
                ))}
            </ScrollView>

            <BotonComponent
                title="Agendar Nuevo Servicio Personal" // Título completo
                onPress={() => { /* navigation.navigate("Crearcategoria") */ }}
                buttonStyle={styles.newserviciopersonalButton}
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
    serviciopersonalesContainer: {
        width: "100%", 
        flex: 1, 
    },
    serviciopersonalCard: {
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
    serviciopersonalTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 8,
        color: "#34495E", 
    },
    
    serviciopersonalDetail: {
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
    newserviciopersonalButton: {
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