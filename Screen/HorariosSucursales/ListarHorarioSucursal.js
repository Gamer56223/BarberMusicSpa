import { ScrollView, StyleSheet, Text, View } from "react-native";
import BotonComponent from "../../components/BottonComponent";


export default function ListarHorarioSucursal({ navigation }) {

    const horariosucursalesEjemplo = [
        { id: '1', dia_semana: 'monday', hora_apertura: '05:00 am', hora_cierre: '06:00 pm', esta_cerrado_regularmente: 'activo'},
        { id: '2', dia_semana: 'wednesday', hora_apertura: '06:00 am', hora_cierre: '05:00 pm', esta_cerrado_regularmente: 'activo'},
        { id: '3', dia_semana: 'friday', hora_apertura: '07:00 am', hora_cierre: '07:00 pm', esta_cerrado_regularmente: 'activo' },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Listado de Horarios de Sucursales</Text> 

            <ScrollView style={styles.horariosucursalesContainer}>
                {horariosucursalesEjemplo.map((horariosucursal) => (
                    <View key={categoria.id} style={styles.categoriaCard}>
                        <Text style={styles.horariosucursalTitle}>{categoria.Nombre}</Text>
                        <Text style={styles.horariosucursalDetail}><Text style={styles.detailLabel}>Id: </Text>{horariosucursal.Id}</Text>
                        <Text style={styles.horariosucursalDetail}><Text style={styles.detailLabel}>Dia Semana: </Text>{horariosucursal.Dia_Semana}</Text>
                        <Text style={styles.horariosucursalDetail}><Text style={styles.detailLabel}>Hora Apertura: </Text>{horariosucursal.Hora_Apertura}</Text>
                        <Text style={styles.horariosucursalDetail}><Text style={styles.detailLabel}>Hora Cierre: </Text>{horariosucursal.Hora_Cierre}</Text>
                        <Text style={styles.horariosucursalDetail}><Text style={styles.detailLabel}>Esta Cerrado Regularmente: </Text>{horariosucursal.Esta_Cerrado_Regularmente}</Text>

                        <View style={styles.buttonContainer}>
                            <BotonComponent
                                title="Ver Detalles" // Título completo
                                onPress={() => navigation.navigate("Detallecategorias", { horariosucursalId: horariosucursal.id })}
                                buttonStyle={styles.viewButton}
                                textStyle={styles.buttonText}
                            />
                            <BotonComponent
                                title="Editar Horario Sucursal" // Título completo
                                onPress={() => navigation.navigate("Editarhorariosucursales", { horariosucursalId: horariosucursal.id })}
                                buttonStyle={styles.editButton}
                                textStyle={styles.buttonText}
                            />
                        </View>
                    </View>
                ))}
            </ScrollView>

            <BotonComponent
                title="Agendar Nuevo Horario Sucursal" // Título completo
                onPress={() => { /* navigation.navigate("Crearhorariosucursal") */ }}
                buttonStyle={styles.newhorariosucursalButton}
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
    horariosucursalesContainer: {
        width: "100%", 
        flex: 1, 
    },
    horariosucursalCard: {
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
    horariosucursalTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 8,
        color: "#34495E", 
    },
    
    horariosucursalDetail: {
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
    newhorariosucursalButton: {
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