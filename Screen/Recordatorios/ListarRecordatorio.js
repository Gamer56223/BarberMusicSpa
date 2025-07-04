import { ScrollView, StyleSheet, Text, View } from "react-native";
import BotonComponent from "../../components/BottonComponent";


export default function ListarRecordatorio({ navigation }) {

    const recordatoriosEjemplo = [
        { id: '1', titulo: 'Maquillaje', descripcion: 'Piel brillante y suave', fecha_hora_recordatorio: 'Spa', canal_oficial: 'activo', enviado: 'Consulta', fecha_envio: '27/06/2025', activo: 'true', fijado: 'true'},
        { id: '2', titulo: 'Corporativo', descripcion: 'Eliminación de grasa', fecha_hora_recordatorio: 'Spa', canal_oficial: 'activo', enviado: 'Revisión', fecha_envio: '27/06/2025', activo: 'true', fijado: 'true' },
        { id: '3', titulo: 'Estetico', descripcion: 'Eliminación de acne', fecha_hora_recordatorio: 'Barberia', canal_oficial: 'activo', enviado: 'urgencia', fecha_envio: '27/06/2025', activo: 'true', fijado: 'true'},
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Listado de Recordatorios</Text> 

            <ScrollView style={styles.recordatoriosContainer}>
                {categoriasEjemplo.map((recordatorio) => (
                    <View key={categoria.id} style={styles.recordatorioCard}>
                        <Text style={styles.recordatorioTitle}>{recordatorio.Nombre}</Text>
                        <Text style={styles.recordatorioDetail}><Text style={styles.detailLabel}>Id: </Text>{recordatorio.Id}</Text>
                        <Text style={styles.recordatorioDetail}><Text style={styles.detailLabel}>Titulo: </Text>{recordatorio.Titulo}</Text>
                        <Text style={styles.recordatorioDetail}><Text style={styles.detailLabel}>Descripción: </Text>{recordatorio.Descripcion}</Text>
                        <Text style={styles.recordatorioDetail}><Text style={styles.detailLabel}>Fecha_hora_Recordatorio: </Text>{recordatorio.Fecha_Hora_Recordatorio}</Text>
                        <Text style={styles.recordatorioDetail}><Text style={styles.detailLabel}>Canal Oficial: </Text>{recordatorio.Canal_Oficial}</Text>
                        <Text style={styles.recordatorioDetail}><Text style={styles.detailLabel}>Enviado: </Text>{recordatorio.Enviado}</Text>
                        <Text style={styles.recordatorioDetail}><Text style={styles.detailLabel}>Fecha_Envio: </Text>{recordatorio.Fecha_Envio}</Text>
                        <Text style={styles.recordatorioDetail}><Text style={styles.detailLabel}>Activo: </Text>{recordatorio.Activo}</Text>
                        <Text style={styles.recordatorioDetail}><Text style={styles.detailLabel}>Fijado: </Text>{recordatorio.Fijado}</Text>

                        <View style={styles.buttonContainer}>
                            <BotonComponent
                                title="Ver Detalles" // Título completo
                                onPress={() => navigation.navigate("Detallerecordatorios", { recordatorioId: recordatorio.id })}
                                buttonStyle={styles.viewButton}
                                textStyle={styles.buttonText}
                            />
                            <BotonComponent
                                title="Editar recordatorio" // Título completo
                                onPress={() => navigation.navigate("Editarrecordatorios", { recordatorioId: recordatorio.id })}
                                buttonStyle={styles.editButton}
                                textStyle={styles.buttonText}
                            />
                        </View>
                    </View>
                ))}
            </ScrollView>

            <BotonComponent
                title="Agendar Nuevorecordatorio" // Título completo
                onPress={() => { /* navigation.navigate("Crearcategoria") */ }}
                buttonStyle={styles.newrecordatorioButton}
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
    recordatoriosContainer: {
        width: "100%", 
        flex: 1, 
    },
    recordatorioCard: {
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
    recordatorioTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 8,
        color: "#34495E", 
    },
    
    recordatorioDetail: {
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
    newcrecordatorioButton: {
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