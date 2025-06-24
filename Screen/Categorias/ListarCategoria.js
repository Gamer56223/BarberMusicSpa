import { ScrollView, StyleSheet, Text, View } from "react-native";
import BotonComponent from "../../components/BottonComponent";


export default function ListarCategoria({ navigation }) {

    const categoriasEjemplo = [
        { id: '1', Nombre: 'Maquillaje', Descripcion: 'Piel brillante y suave', Tipo_Categoria: 'Spa', Icono_Clave: 'activo', Activo: 'Consulta'},
        { id: '2', Nombre: 'Corporativo', Descripcion: 'Eliminación de grasa', Tipo_Categoria: 'Spa', Icono_Clave: 'activo', Activo: 'Revisión' },
        { id: '3', Nombre: 'Estetico', Descripcion: 'Eliminación de acne', Tipo_Categoria: 'Barberia', Icono_Clave: 'activo', Activo: 'urgencia'},
    ];
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Listado de Categorias</Text> 

            <ScrollView style={styles.categoriasContainer}>
                {categoriasEjemplo.map((categoria) => (
                    <View key={categoria.id} style={styles.categoriaCard}>
                        <Text style={styles.categoriaTitle}>{categoria.Nombre}</Text>
                        <Text style={styles.categoriaDetail}><Text style={styles.detailLabel}>Id: </Text>{categoria.Id}</Text>
                        <Text style={styles.categoriaDetail}><Text style={styles.detailLabel}>Nombre: </Text>{categoria.Nombre}</Text>
                        <Text style={styles.categoriaDetail}><Text style={styles.detailLabel}>Descripción: </Text>{categoria.Descripcion}</Text>
                        <Text style={styles.categoriaDetail}><Text style={styles.detailLabel}>Tipo Categoria: </Text>{categoria.Tipo_Categoria}</Text>
                        <Text style={styles.categoriaDetail}><Text style={styles.detailLabel}>Icono Clave: </Text>{categoria.Icono_Clave}</Text>
                        <Text style={styles.categoriaDetail}><Text style={styles.detailLabel}>Activo: </Text>{categoria.Activo}</Text>

                        <View style={styles.buttonContainer}>
                            <BotonComponent
                                title="Ver Detalles" // Título completo
                                onPress={() => navigation.navigate("Detallecategorias", { categoriaId: categoria.id })}
                                buttonStyle={styles.viewButton}
                                textStyle={styles.buttonText}
                            />
                            <BotonComponent
                                title="Editar categoria" // Título completo
                                onPress={() => navigation.navigate("Editarcategorias", { categoriaId: categoria.id })}
                                buttonStyle={styles.editButton}
                                textStyle={styles.buttonText}
                            />
                        </View>
                    </View>
                ))}
            </ScrollView>

            <BotonComponent
                title="Agendar Nueva Categoria" // Título completo
                onPress={() => { /* navigation.navigate("Crearcategoria") */ }}
                buttonStyle={styles.newcategoriaButton}
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
    categoriasContainer: {
        width: "100%", 
        flex: 1, 
    },
    categoriaCard: {
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
    categoriaTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 8,
        color: "#34495E", 
    },
    
    categoriaDetail: {
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
    newcategoriaButton: {
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