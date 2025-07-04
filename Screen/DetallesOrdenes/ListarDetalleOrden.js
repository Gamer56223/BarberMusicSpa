import { ScrollView, StyleSheet, Text, View } from "react-native";
import BotonComponent from "../../components/BottonComponent";


export default function ListarDetalleOrden({ navigation }) {

    const detalleordenesEjemplo = [
        { id: '1', numero_orden: '20', fecha_orden: '22/06/2025', fecha_recibida: '23/06/2025', subtotal: '$50k', descuento_total: '$5k', impuestos_total: '$50k', total_orden:'$1.5M', estado_orden: 'Activo', direccion_envio_calle: 'venezuela', direccion_envio_numero_exterior: '96', direccion_numero_interior: 'caracas', direccion_envio_colonia: 'calle 13', direccion_envio_codigo_postal: '1010', direccion_envio_municipio_alcaldia: '560', direccion_envio_ciudad: '6789', direccion_envio_estado: '134', notas_orden: '1' },
        { id: '2', numero_orden: '22', fecha_orden: '22/06/2025', fecha_recibida: '23/06/2025', subtotal: '$70k', descuento_total: '$1.5k', impuestos_total: '$200k', total_orden:'$5.5M', estado_orden: 'Activo', direccion_envio_calle: 'venezuela', direccion_envio_numero_exterior: '69', direccion_numero_interior: 'caracas', direccion_envio_colonia: 'calle 9', direccion_envio_codigo_postal: '1015', direccion_envio_municipio_alcaldia: '654', direccion_envio_ciudad: '6778', direccion_envio_estado: '156', notas_orden: '2' },
        { id: '3', numero_orden: '23', fecha_orden: '22/06/2025', fecha_recibida: '23/06/2025', subtotal: '$150k', descuento_total: '$10k', impuestos_total: '$750k', total_orden:'$10M', estado_orden: 'Activo', direccion_envio_calle: 'Santa Fe de Bogotá', direccion_envio_numero_exterior: '67', direccion_numero_interior: 'colombia', direccion_envio_colonia: 'calle 10', direccion_envio_codigo_postal: '1016', direccion_envio_municipio_alcaldia: '535', direccion_envio_ciudad: '6790', direccion_envio_estado: '112', notas_orden: '3' }, 
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Listado de Detalles de Ordenes</Text> 

            <ScrollView style={styles.detalleordenesContainer}>
                {detalleordenesEjemplo.map((detalleorden) => (
                    <View key={detalleorden.id} style={styles.detalleordenCard}>
                        <Text style={styles.detalleordenTitle}>{detalleorden.Nombre}</Text>
                        <Text style={styles-detalleordenDetail}><Text style={styles.detailLabel}>Id: </Text>{detalleorden.Id}</Text>
                        <Text style={styles.detalleordenDetail}><Text style={styles.detailLabel}>Número Ordén: </Text>{detalleorden.Numero_Orden }</Text>
                        <Text style={styles.detalleordenDetail}><Text style={styles.detailLabel}>Fecha Ordén: </Text>{detalleorden.Fecha_Orden}</Text>
                        <Text style={styles.detalleordenDetail}><Text style={styles.detailLabel}>Fecha Recibida: </Text>{detalleorden.Fecha_Recibida}</Text>
                        <Text style={styles.detalleordenDetail}><Text style={styles.detailLabel}>Sub Total: </Text>{detalleorden.Sub_Total}</Text>
                        <Text style={styles.detalleordenDetail}><Text style={styles.detailLabel}>Descuento Total: </Text>{detalleorden.Descuento_Total}</Text>
                        <Text style={styles.detalleordenDetail}><Text style={styles.detailLabel}>Impuestos Totales: </Text>{detalleorden.Impuesto_Total}</Text>
                        <Text style={styles.detalleordenDetail}><Text style={styles.detailLabel}>Total Ordén: </Text>{detalleorden.Total_Orden}</Text>
                        <Text style={styles.detalleordenDetail}><Text style={styles.detailLabel}>Estado Ordén: </Text>{detalleorden.Estado_Orden}</Text>
                        <Text style={styles.detalleordenDetail}><Text style={styles.detailLabel}>Dirección Envio Calle: </Text>{detalleorden.Direccion_Envio_Calle}</Text>
                        <Text style={styles.detalleordenDetail}><Text style={styles.detailLabel}>Dirección Envio Número Exterior: </Text>{detalleorden.Direccion_Envio_Numero_Exterior}</Text>
                        <Text style={styles.detalleordenDetail}><Text style={styles.detailLabel}>Dirección Envio Número Interior: </Text>{detalleorden.Direccion_Envio_Numero_Interior}</Text>
                        <Text style={styles.detalleordenDetail}><Text style={styles.detailLabel}>Dirección Envio Colonia: </Text>{detalleorden.Direccion_Envio_Colonia}</Text>
                        <Text style={styles.detalleordenDetail}><Text style={styles.detailLabel}>Dirección Envio Código Postal: </Text>{detalleorden.Direccion_Envio_Codigo_Postal}</Text>
                        <Text style={styles.detalleordenDetail}><Text style={styles.detailLabel}>Dirección Envio Municipio Alcaldia: </Text>{detalleorden.Direccion_Envio_Municipio_Alcaldia}</Text>
                        <Text style={styles.detalleordenDetail}><Text style={styles.detailLabel}>Dirección Envio Ciudad: </Text>{detalleorden.Direccion_Envio_Ciudad}</Text>
                        <Text style={styles.detalleordenDetail}><Text style={styles.detailLabel}>Dirección Envio Estado:</Text>{detalleorden.Direccion_Envio_Estado}</Text>
                        <Text style={styles.detalleordenDetail}><Text style={styles.detailLabel}>Notas Ordén: </Text>{detalleorden.Notas_Orden}</Text>

                        <View style={styles.buttonContainer}>
                            <BotonComponent
                                title="Ver Detalles" // Título completo
                                onPress={() => navigation.navigate("Detalledetalleordenes", { detalleordenId: detalleorden.id })}
                                buttonStyle={styles.viewButton}
                                textStyle={styles.buttonText}
                            />
                            <BotonComponent
                                title="Editar Detalle Orden" // Título completo
                                onPress={() => navigation.navigate("Editardetalleordenes", { detalleordenId: detalleorden.id })}
                                buttonStyle={styles.editButton}
                                textStyle={styles.buttonText}
                            />
                        </View>
                    </View>
                ))}
            </ScrollView>

            <BotonComponent
                title="Agendar Nuevo Detalle Ordén" // Título completo
                onPress={() => { /* navigation.navigate("Crearagendamiento") */ }}
                buttonStyle={styles.newdetalleordenButton}
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
    detalleordenesContainer: {
        width: "100%", 
        flex: 1, 
    },
    detalleordenCard: {
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
    detalleordenTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 8,
        color: "#34495E", 
    },
    
    detalleordenDetail: {
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
    newdetalleordenButton: {
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