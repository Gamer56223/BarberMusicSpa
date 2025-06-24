import { ScrollView, StyleSheet, Text, View } from "react-native";
import BotonComponent from "../../components/BottonComponent";


export default function ListarExcepcionHorarioSucursal({ navigation }) {

     const excepcionhorariosucursalesEjemplo = [
        { id: '1', fecha: '20/06/2025', esta_cerrado: '22/06/2025', hora_apertura: '10:00 am', hora_cierre: '05:00 pm', descripcion: 'Consulta'},
        { id: '2', fecha: '20/06/2025', esta_cerrado: '22/06/2025', hora_apertura: '02:00 pm', hora_cierre: '06:00 pm', descripcion: 'Revisión' },
        { id: '3', fecha: '20/06/2025', esta_cerrado: '22/06/2025', hora_apertura: '06:00 pm', hora_cierre: '08:00 pm', descripcion: 'urgencia'},
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Listado de Excepciones Horario Sucursal</Text> 

            <ScrollView style={styles.excepcionhorariosucursalesContainer}>
                {Ejemplo.map((excepcionhorariosucursal) => (
                    <View key={excepcionhorariosucursal.id} style={styles.excepcionhorariosucursalCard}>
                        <Text style={styles.excepcionhorariosucursalTitle}>{excepcionhorariosucursal.Nombre}</Text>
                        <Text style={styles.excepcionhorariosucursalDetail}><Text style={styles.detailLabel}>Id: </Text>{excepcionhorariosucursal.Id}</Text>
                        <Text style={styles.excepcionhorariosucursalDetail}><Text style={styles.detailLabel}>Fecha: </Text>{excepcionhorariosucursal.Fecha}</Text>
                        <Text style={styles.excepcionhorariosucursalDetail}><Text style={styles.detailLabel}>Esta Cerrado: </Text>{excepcionhorariosucursal.Esta_Cerrado}</Text>
                        <Text style={styles.excepcionhorariosucursalDetail}><Text style={styles.detailLabel}>Hora Apertura: </Text>{excepcionhorariosucursal.Hora_Apertura}</Text>
                        <Text style={styles.excepcionhorariosucursalDetail}><Text style={styles.detailLabel}>Hora Cierre: </Text>{excepcionhorariosucursal.Hora_Cierre}</Text>
                        <Text style={styles.excepcionhorariosucursalDetail}><Text style={styles.detailLabel}>Descripción: </Text>{agendamiento.Descripcion}</Text>

                        <View style={styles.buttonContainer}>
                            <BotonComponent
                                title="Ver Detalles" // Título completo
                                onPress={() => navigation.navigate("Detalleexcepcionhorariosucursales", { excepcionhorariosucursalId: excepcionhorariosucursal.id })}
                                buttonStyle={styles.viewButton}
                                textStyle={styles.buttonText}
                            />
                            <BotonComponent
                                title="Editar excepcionhorariosucursal" // Título completo
                                onPress={() => navigation.navigate("Editarexcepcionhorariosucursales", { excepcionhorariosucursalId: excepcionhorariosucursal.id })}
                                buttonStyle={styles.editButton}
                                textStyle={styles.buttonText}
                            />
                        </View>
                    </View>
                ))}
            </ScrollView>

            <BotonComponent
                title="Agendar Nueva Excepcióm Horario de la Sucursal" // Título completo
                onPress={() => { /* navigation.navigate("Crearexcepcionhorariosucursal") */ }}
                buttonStyle={styles.newexcepcionhorariosucursalButton}
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

    excepcionhorariosucursalesContainer: {
        width: "100%", 
        flex: 1, 
    },

    excepcionhorariosucursalCard: {
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
    excepcionhorariosucursalTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 8,
        color: "#34495E", 
    },
    
    excepcionhorariosucursalDetail: {
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
    newexcepcionhorariosucursalButton: {
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