import { ScrollView, StyleSheet, Text, View } from "react-native";
import BotonComponent from "../../components/BottonComponent";


export default function ListarPromocionServicio({ navigation }) {

    const promocionserviciosEjemplo = [
        { id: '1', promocion_id: '33', servicio_id: '60'},
        { id: '2', promocion_id: '36', servicio_id: '62' },
        { id: '3', promocion_id: '39', servicio_id: '64' },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Listado de Promociones Servicio</Text> 

            <ScrollView style={styles.promocionserviciosContainer}>
                {promocionserviciosEjemplo.map((promocionservicio) => (
                    <View key={promocionservicio.id} style={styles.promocionservicioCard}>
                        <Text style={styles.promocionTitle}>{promocionservicio.Nombre}</Text>
                        <Text style={styles.promocionDetail}><Text style={styles.detailLabel}>Id: </Text>{promocionservicio.Id}</Text>
                        <Text style={styles.promocionDetail}><Text style={styles.detailLabel}>Promoción Id: </Text>{promocionservicio.Codigo}</Text>
                        <Text style={styles.promocionDetail}><Text style={styles.detailLabel}>Servicio Id: </Text>{promocionservicio.Codigo}</Text>

     

                        <View style={styles.buttonContainer}>
                            <BotonComponent
                                title="Ver Detalles" // Título completo
                                onPress={() => navigation.navigate("Detallepromociones", { promocionservicioId: promocionservicio.id })}
                                buttonStyle={styles.viewButton}
                                textStyle={styles.buttonText}
                            />
                            <BotonComponent
                                title="Editar categoria" // Título completo
                                onPress={() => navigation.navigate("Editarpromociones", { promocionservicioId: promocionservicio.id })}
                                buttonStyle={styles.editButton}
                                textStyle={styles.buttonText}
                            />
                        </View>
                    </View>
                ))}
            </ScrollView>

            <BotonComponent
                title="Agendar Nueva Promoción Servicio" // Título completo
                onPress={() => { /* navigation.navigate("Crearcategoria") */ }}
                buttonStyle={styles.newpromocionservicioButton}
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
    promocionserviciosContainer: {
        width: "100%", 
        flex: 1, 
    },
    promocionservicioCard: {
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
    promocionservicioTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 8,
        color: "#34495E", 
    },
    
    promocionservicioDetail: {
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
    newpromocionservicioButton: {
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