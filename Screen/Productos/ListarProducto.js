import { ScrollView, StyleSheet, Text, View } from "react-native";
import BotonComponent from "../../components/BottonComponent";


export default function Listarproducto({ navigation }) {

    const productosEjemplo = [
        { id: '1', Nombre: 'Shampoo', Descripcion: 'Suaviza el cabello', Imagen_Path: 'Spa', Precio: '$20k', Stock: 'Consulta', Sku: 'null', Activo: 'true'},
        { id: '2', Nombre: 'Crema Eliminación de Acne', Descripcion: 'Elimina los granos', Imagen_Path: 'Spa', Precio: '$70k', Stock: 'Revisión', Sku: 'null', Activo: 'true' },
        { id: '3', Nombre: 'Cera', Descripcion: 'Mejor firmeza para el cabello', Imagen_Path: 'Barberia', Precio: '$150k', Stock: 'urgencia', Sku: 'null', Activo: 'true'},
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Listado de Productos</Text> 

            <ScrollView style={styles.productosContainer}>
                {productosEjemplo.map((producto) => (
                    <View key={producto.id} style={styles.productoCard}>
                        <Text style={styles.productoTitle}>{producto.Nombre}</Text>
                        <Text style={styles.productoDetail}><Text style={styles.detailLabel}>Id: </Text>{producto.Id}</Text>
                        <Text style={styles.productoDetail}><Text style={styles.detailLabel}>Nombre: </Text>{producto.Nombre}</Text>
                        <Text style={styles.productoDetail}><Text style={styles.detailLabel}>Descripción: </Text>{producto.Descripcion}</Text>
                        <Text style={styles.productoDetail}><Text style={styles.detailLabel}>Imagen Path: </Text>{producto.Imagen_Path}</Text>
                        <Text style={styles.productoDetail}><Text style={styles.detailLabel}>Precio: </Text>{producto.Precio}</Text>
                        <Text style={styles.productoDetail}><Text style={styles.detailLabel}>Stock: </Text>{producto.Stock}</Text>
                        <Text style={styles.productoDetail}><Text style={styles.detailLabel}>Sku: </Text>{producto.Sku}</Text>
                        <Text style={styles.productoDetail}><Text style={styles.detailLabel}>Activo: </Text>{producto.Activo}</Text>

                        <View style={styles.buttonContainer}>
                            <BotonComponent
                                title="Ver Detalles" // Título completo
                                onPress={() => navigation.navigate("Detalleproductos", { productoId: producto.id })}
                                buttonStyle={styles.viewButton}
                                textStyle={styles.buttonText}
                            />
                            <BotonComponent
                                title="Editar producto" // Título completo
                                onPress={() => navigation.navigate("Editarproductos", { productoId: producto.id })}
                                buttonStyle={styles.editButton}
                                textStyle={styles.buttonText}
                            />
                        </View>
                    </View>
                ))}
            </ScrollView>

            <BotonComponent
                title="Agendar Nueva producto" // Título completo
                onPress={() => { /* navigation.navigate("Crearproducto") */ }}
                buttonStyle={styles.newproductoButton}
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
    productosContainer: {
        width: "100%", 
        flex: 1, 
    },
    productoCard: {
        backgroundColor: "skyblue", // Fondo blanco para cada tarjeta de producto
        borderRadius: 10,
        padding: 15,
        marginBottom: 15, // Espacio entre tarjetas
        shadowColor: "#000", // Sombra suave
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3, // Elevación para Android
    },
    productoTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 8,
        color: "#34495E", 
    },
    
    productoDetail: {
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
    newproductoButton: {
        backgroundColor: "#E67E22", // Naranja para "Agendar Nueva producto"
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