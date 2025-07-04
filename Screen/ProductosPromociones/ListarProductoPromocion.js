import { ScrollView, StyleSheet, Text, View } from "react-native";
import BotonComponent from "../../components/BottonComponent";


export default function ListarProductoPromocion({ navigation }) {

    const productopromocionesEjemplo = [
        { id: '1', promocion_id: 'Maquillaje', producto_id: 'Piel brillante y suave'},
        { id: '2', promocion_id: 'Corporativo', producto_id: 'Eliminación de grasa' },
        { id: '3', promocion_id: 'Estetico', producto_id: 'Eliminación de acne'},
    ];
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Listado de Productos Promoción</Text> 

            <ScrollView style={styles.productopromocionesContainer}>
                {categoriasEjemplo.map((productopromocion) => (
                    <View key={productopromocion.id} style={styles.productopromocionCard}>
                        <Text style={styles.productopromocionTitle}>{productopromocion.Nombre}</Text>
                        <Text style={styles.productopromocionDetail}><Text style={styles.detailLabel}>Id: </Text>{productopromocion.Id}</Text>
                        <Text style={styles.productopromocionDetail}><Text style={styles.detailLabel}>Producto Id: </Text>{productopromocion.Nombre}</Text>
                        <Text style={styles.productopromocionDetail}><Text style={styles.detailLabel}>Promoción Id: </Text>{productopromocion.Nombre}</Text>

                        <View style={styles.buttonContainer}>
                            <BotonComponent
                                title="Ver Detalles" // Título completo
                                onPress={() => navigation.navigate("Detalleproductopromociones", { productopromocionId: productopromocion.id })}
                                buttonStyle={styles.viewButton}
                                textStyle={styles.buttonText}
                            />
                            <BotonComponent
                                title="Editar producto promociones" // Título completo
                                onPress={() => navigation.navigate("Editarproductopromociones", { productopromocionesId: productopromociones.id })}
                                buttonStyle={styles.editButton}
                                textStyle={styles.buttonText}
                            />
                        </View>
                    </View>
                ))}
            </ScrollView>

            <BotonComponent
                title="Agendar Nuevo Producto Promoción" // Título completo
                onPress={() => { /* navigation.navigate("Crearcategoria") */ }}
                buttonStyle={styles.newproductopromocionButton}
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
    productopromocionesContainer: {
        width: "100%", 
        flex: 1, 
    },

    productopromocionesCard: {
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

    productopromocionTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 8,
        color: "#34495E", 
    },
    
    productopromocionDetail: {
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
    newproductopromocionButton: {
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