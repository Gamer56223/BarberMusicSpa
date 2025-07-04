import { ScrollView, StyleSheet, Text, View } from "react-native";
import BotonComponent from "../../components/BottonComponent";


export default function ListarPersonal({ navigation }) {

    const personalEjemplo = [
        { id: '1', tipo_personal: 'Empleado', numero_empleado: '01', fecha_contratacion: '26/06/2025', activo_en_empresa: 'activo' },
        { id: '2', tipo_personal: 'Gerente', numero_empleado: '02', fecha_contratacion: '26/06/2025', activo_en_empresa: 'activo'},
        { id: '3', tipo_personal: 'Administrador', numero_empleado: '03', fecha_contratacion: '26/06/2025', activo_en_empresa: 'activo'},
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Listado del Personal</Text> 

            <ScrollView style={styles.personalesContainer}>
                {personalEjemplo.map((personal) => (
                    <View key={personal.id} style={styles.personalCard}>
                        <Text style={styles.personalTitle}>{personal.Nombre}</Text>
                        <Text style={styles.personalDetail}><Text style={styles.detailLabel}>Id: </Text>{personal.Id}</Text>
                        <Text style={styles.personalDetail}><Text style={styles.detailLabel}>Tipo Personal: </Text>{personal.Tipo_Personal}</Text>
                        <Text style={styles.personalDetail}><Text style={styles.detailLabel}>Número Empleado: </Text>{personal.Numero_Empleado}</Text>
                        <Text style={styles.personalDetail}><Text style={styles.detailLabel}>Fecha Contratación: </Text>{personal.Fecha_Contratacion}</Text>
                        <Text style={styles.personalDetail}><Text style={styles.detailLabel}>Activo en Empresa: </Text>{personal.Activo_En_Empresa}</Text>                  

                        <View style={styles.buttonContainer}>
                            <BotonComponent
                                title="Ver Detalles" // Título completo
                                onPress={() => navigation.navigate("Detallepersonales", { personalId: personal.id })}
                                buttonStyle={styles.viewButton}
                                textStyle={styles.buttonText}
                            />
                            <BotonComponent
                                title="Editar personal" // Título completo
                                onPress={() => navigation.navigate("Editarpersonales", { personalId: personal.id })}
                                buttonStyle={styles.editButton}
                                textStyle={styles.buttonText}
                            />
                        </View>
                    </View>
                ))}
            </ScrollView>

            <BotonComponent
                title="Agendar Nuevo Personal" // Título completo
                onPress={() => { /* navigation.navigate("Crearagendamiento") */ }}
                buttonStyle={styles.newpersonalButton}
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
    personalContainer: {
        width: "100%", 
        flex: 1, 
    },

    personalCard: {
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

    personalTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 8,
        color: "#34495E", 
    },
    
    personalDetail: {
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
    newpersonalButton: {
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