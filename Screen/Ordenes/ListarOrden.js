import { ScrollView, StyleSheet, Text, View } from "react-native";
import BotonComponent from "../../components/BottonComponent";


export default function ListarOrden({ navigation }) {

    const ordenesEjemplo = [
        { id: '1', numero_orden: '50', fecha_orden: '03/07/2025', fecha_recibida: '05/07/2025', subtotal: '$45K', descuento_total: '$20K', impuestos_total: '700K', total_orden: '25K', estado_orden: 'activo', direccion_envio_calle: 'venezuela', direccion_envio_numero_exterior: '505', direccion_envio_numero_interior: '404', direccion_envio_colonia: '90', direccion_envio_codigo_postal: '9090', direccion_envio_municipio_alcaldia: 'carrera 12', direccion_envio_ciudad: '599', direccion_envio_estado: 'activo', notas_orden: 'null'},
        
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Listado de Ordenes</Text> 

            <ScrollView style={styles.ordenesContainer}>
                {ordensEjemplo.map((orden) => (
                    <View key={orden.id} style={styles.ordenCard}>
                        <Text style={styles.ordenTitle}>{orden.Nombre}</Text>
                        <Text style={styles.ordenDetail}><Text style={styles.detailLabel}>Id: </Text>{orden.Id}</Text>
                        <Text style={styles.ordenDetail}><Text style={styles.detailLabel}>Número Orden: </Text>{orden.Fecha_Hora_Inicio}</Text>
                        <Text style={styles.ordenDetail}><Text style={styles.detailLabel}>Fecha Orden: </Text>{orden.Fecha_Hora_Fin}</Text>
                        <Text style={styles.ordenDetail}><Text style={styles.detailLabel}>Fecha Recibida: </Text>{orden.Precio_Final}</Text>
                        <Text style={styles.ordenDetail}><Text style={styles.detailLabel}>Subtotal: </Text>{orden.Estado}</Text>
                        <Text style={styles.ordenDetail}><Text style={styles.detailLabel}>Descuento Total: </Text>{orden.Notas_Cliente}</Text>
                        <Text style={styles.ordenDetail}><Text style={styles.detailLabel}>Impuestos Total: </Text>{orden.Notas_Internas}</Text>
                        <Text style={styles.ordenDetail}><Text style={styles.detailLabel}>Total Ordén: </Text>{orden.Notas_Internas}</Text>
                        <Text style={styles.ordenDetail}><Text style={styles.detailLabel}>Estado Ordén: </Text>{orden.Notas_Internas}</Text>
                        <Text style={styles.ordenDetail}><Text style={styles.detailLabel}>Dirección Envio Calle: </Text>{orden.Notas_Internas}</Text>
                        <Text style={styles.ordenDetail}><Text style={styles.detailLabel}>Dirección Envio Número Exterior: </Text>{orden.Notas_Internas}</Text>
                        <Text style={styles.ordenDetail}><Text style={styles.detailLabel}>Dirección Envio Número Interior: </Text>{orden.Notas_Internas}</Text>
                        <Text style={styles.ordenDetail}><Text style={styles.detailLabel}>Dirección Envio Colonia: </Text>{orden.Notas_Internas}</Text>
                        <Text style={styles.ordenDetail}><Text style={styles.detailLabel}>Dirección Envio Código Postal: </Text>{orden.Notas_Internas}</Text>
                        <Text style={styles.ordenDetail}><Text style={styles.detailLabel}>Dirección Envio Municipio Alcaldia: </Text>{orden.Notas_Internas}</Text>
                        <Text style={styles.ordenDetail}><Text style={styles.detailLabel}>Dirección Envio Ciudad: </Text>{orden.Notas_Internas}</Text>
                        <Text style={styles.ordenDetail}><Text style={styles.detailLabel}>Dirección Envio Estado: </Text>{orden.Notas_Internas}</Text>
                        <Text style={styles.ordenDetail}><Text style={styles.detailLabel}>Notas Ordén: </Text>{orden.Notas_Internas}</Text>

                        <View style={styles.buttonContainer}>
                            <BotonComponent
                                title="Ver Detalles" // Título completo
                                onPress={() => navigation.navigate("Detalleordenes", { ordenId: orden.id })}
                                buttonStyle={styles.viewButton}
                                textStyle={styles.buttonText}
                            />
                            <BotonComponent
                                title="Editar orden" // Título completo
                                onPress={() => navigation.navigate("Editarordenes", { ordenId: orden.id })}
                                buttonStyle={styles.editButton}
                                textStyle={styles.buttonText}
                            />
                        </View>
                    </View>
                ))}
            </ScrollView>

            <BotonComponent
                title="Agendar Nueva Orden" // Título completo
                onPress={() => { /* navigation.navigate("Crearorden") */ }}
                buttonStyle={styles.newordenButton}
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
    ordenesContainer: {
        width: "100%", 
        flex: 1, 
    },
    ordenCard: {
        backgroundColor: "skyblue", // Fondo blanco para cada tarjeta de orden
        borderRadius: 10,
        padding: 15,
        marginBottom: 15, // Espacio entre tarjetas
        shadowColor: "#000", // Sombra suave
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3, // Elevación para Android
    },
    ordenTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 8,
        color: "#34495E", 
    },
    
    ordenDetail: {
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
    newordenButton: {
        backgroundColor: "#E67E22", // Naranja para "Agendar Nueva orden"
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