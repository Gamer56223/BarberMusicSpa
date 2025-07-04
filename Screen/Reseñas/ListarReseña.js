import { ScrollView, StyleSheet, Text, View } from "react-native";
import BotonComponent from "../../components/BottonComponent";


export default function ListarReseña({ navigation }) {
    const reseñasEjemplo = [
        { id: '1', calificacion: '5', comentario: 'Piel brillante y suave', reseñable_id: '2', reseñable_type: 'activo', aprobada: 'true', fecha_reseña: '27/06/2025'},
        { id: '2', calificacion: '4', comentario: 'Eliminación de grasa', reseñable_id: '3', reseñable_type: 'activo', aprobada: 'true', fecha_reseña: '27/06/2025' },
        { id: '3', calificacion: '3', comentario: 'Eliminación de acne', reseñable_id: '4', reseñable_type: 'activo', aprobada: 'true', fecha_reseña: '27/06/2025'},
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Listado de Reseñas</Text> 

            <ScrollView style={styles.reseñasContainer}>
                {categoriasEjemplo.map((reseña) => (
                    <View key={reseña.id} style={styles.reseñaCard}>
                        <Text style={styles.reseñaTitle}>{reseña.Nombre}</Text>
                        <Text style={styles.reseñaDetail}><Text style={styles.detailLabel}>Id: </Text>{reseña.Id}</Text>
                        <Text style={styles.reseñaDetail}><Text style={styles.detailLabel}>Calificación: </Text>{reseña.Calificacion}</Text>
                        <Text style={styles.reseñaDetail}><Text style={styles.detailLabel}>Comentario: </Text>{reseña.Comentario}</Text>
                        <Text style={styles.reseñaDetail}><Text style={styles.detailLabel}>Reseñable Id: </Text>{reseña.Reseñable_Id}</Text>
                        <Text style={styles.reseñaDetail}><Text style={styles.detailLabel}>Reseñable Type: </Text>{reseña.Reseñable_Type}</Text>
                        <Text style={styles.reseñaDetail}><Text style={styles.detailLabel}>Aprobada: </Text>{reseña.Aprobada}</Text>
                        <Text style={styles.reseñaDetail}><Text style={styles.detailLabel}>Fecha_Reseña: </Text>{reseña.Fecha_Reseña}</Text>


                        <View style={styles.buttonContainer}>
                            <BotonComponent
                                title="Ver Detalles" // Título completo
                                onPress={() => navigation.navigate("Detallereseñas", { reseñaId: reseña.id })}
                                buttonStyle={styles.viewButton}
                                textStyle={styles.buttonText}
                            />
                            <BotonComponent
                                title="Editar reseña" // Título completo
                                onPress={() => navigation.navigate("Editarreseñas", { reseñaId: reseña.id })}
                                buttonStyle={styles.editButton}
                                textStyle={styles.buttonText}
                            />
                        </View>
                    </View>
                ))}
            </ScrollView>

            <BotonComponent
                title="Agendar Nueva Reseña" // Título completo
                onPress={() => { /* navigation.navigate("Crearcategoria") */ }}
                buttonStyle={styles.newreseñaButton}
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
    reseñasContainer: {
        width: "100%", 
        flex: 1, 
    },
    reseñaCard: {
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
    reseñaTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 8,
        color: "#34495E", 
    },
    
    reseñaDetail: {
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
    newreseñaButton: {
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