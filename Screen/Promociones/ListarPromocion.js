import { ScrollView, StyleSheet, Text, View } from "react-native";
import BotonComponent from "../../components/BottonComponent";


export default function ListarPromocion({ navigation }) {

    const promocionesEjemplo = [
        { id: '1', codigo: 'Maquillaje', nombre: 'Piel brillante y suave', descripcion: 'Spa', tipo_descuento: 'activo', valor_descuento: 'Consulta', fecha_inicio: 'null', fecha_fin: 'null', usos_maximos_total: 'null', usos_maximos_Por_cliente: 'null', usos_actuales: 'null', activo: 'null', aplica_a_todos_productos: 'null', aplica_a_todos_servicios: 'null'},
        { id: '2', codigo: 'Corporativo', nombre: 'Eliminación de grasa', descripcion: 'Spa', tipo_descuento: 'activo', valor_descuento: 'Revisión' , fecha_inicio: 'null', fecha_fin: 'null', usos_maximos_total: 'null' , usos_maximos_Por_cliente: 'null', usos_actuales:'null', activo: 'null', aplica_a_todos_productos: 'null', aplica_a_todos_servicios: 'null' },
        { id: '3', codigo: 'Estetico', nombre: 'Eliminación de acne', descripcion: 'Barberia', tipo_descuento: 'activo', valor_descuento: 'urgencia', fecha_inicio: 'null', fecha_fin: 'null', usos_maximos_total: 'null', usos_maximos_Por_cliente: 'null', usos_actuales: 'null', activo: 'null', aplica_a_todos_productos: 'null', aplica_a_todos_servicios: 'null' },
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Listado de Promociones</Text> 

            <ScrollView style={styles.promocionesContainer}>
                {categoriasEjemplo.map((promocion) => (
                    <View key={categoria.id} style={styles.promocionCard}>
                        <Text style={styles.promocionTitle}>{categoria.Nombre}</Text>
                        <Text style={styles.promocionDetail}><Text style={styles.detailLabel}>Id: </Text>{promocion.Id}</Text>
                        <Text style={styles.promocionDetail}><Text style={styles.detailLabel}>Código: </Text>{promocion.Codigo}</Text>
                        <Text style={styles.promocionDetail}><Text style={styles.detailLabel}>Nombre: </Text>{promocion.Nombre}</Text>
                        <Text style={styles.promocionDetail}><Text style={styles.detailLabel}>Descripción: </Text>{promocion.Descripcion}</Text>
                        <Text style={styles.promocionDetail}><Text style={styles.detailLabel}>Tipo Descuento: </Text>{promocion.Tipo_Descuento}</Text>
                        <Text style={styles.promocionDetail}><Text style={styles.detailLabel}>Valor Descuento: </Text>{promocion.Valor_Descuento}</Text>
                        <Text style={styles.promocionDetail}><Text style={styles.detailLabel}>Fecha Inicio: </Text>{promocion.Fecha_Inicio}</Text>
                        <Text style={styles.promocionDetail}><Text style={styles.detailLabel}>Fecha Fin: </Text>{promocion.Fecha_Fin}</Text>
                        <Text style={styles.promocionDetail}><Text style={styles.detailLabel}>Usos Maximos Total: </Text>{promocion.Usos_Maximos_Total}</Text>
                        <Text style={styles.promocionDetail}><Text style={styles.detailLabel}>Usos Maximos Por Cliente: </Text>{promocion.Usos_Maximos_Por_Cliente}</Text>
                        <Text style={styles.promocionDetail}><Text style={styles.detailLabel}>Usos Actuales: </Text>{promocion.Usos_Actuales}</Text>
                        <Text style={styles.promocionDetail}><Text style={styles.detailLabel}>Activo: </Text>{promocion.Activo}</Text>
                        <Text style={styles.promocionDetail}><Text style={styles.detailLabel}>Aplica A Todos Productos: </Text>{promocion.Aplica_A_Todos_Productos}</Text>
                        <Text style={styles.promocionDetail}><Text style={styles.detailLabel}>Aplica A Todos Servicios: </Text>{promocion.Aplica_A_Todos_Servicios}</Text>


                        <View style={styles.buttonContainer}>
                            <BotonComponent
                                title="Ver Detalles" // Título completo
                                onPress={() => navigation.navigate("Detallepromociones", { promocionId: promocion.id })}
                                buttonStyle={styles.viewButton}
                                textStyle={styles.buttonText}
                            />
                            <BotonComponent
                                title="Editar categoria" // Título completo
                                onPress={() => navigation.navigate("Editarpromociones", { promocionId: promocion.id })}
                                buttonStyle={styles.editButton}
                                textStyle={styles.buttonText}
                            />
                        </View>
                    </View>
                ))}
            </ScrollView>

            <BotonComponent
                title="Agendar Nueva Promoción" // Título completo
                onPress={() => { /* navigation.navigate("Crearcategoria") */ }}
                buttonStyle={styles.newpromocionButton}
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
    promocionesContainer: {
        width: "100%", 
        flex: 1, 
    },
    promocionCard: {
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
    promocionTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 8,
        color: "#34495E", 
    },
    
    promocionDetail: {
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
    newpromocionButton: {
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