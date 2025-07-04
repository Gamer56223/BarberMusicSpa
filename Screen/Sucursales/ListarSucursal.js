import { ScrollView, StyleSheet, Text, View } from "react-native";
import BotonComponent from "../../components/BottonComponent";


export default function ListarSucursal({ navigation }) {

     const sucursalesEjemplo = [
        { id: '1', nombre: 'Sede Soacha', imagen_path: 'www', direccion_calle: 'venezuela', direccion_numero_exterior: '657', direccion_numero_interior: '303', direccion_colonia: 'manzana a', direccion_codigo_postal: '78', direccion_municipio_alcaldia: 'floresta', direccion_ciudad: 'calle 4', direccion_estado: 'venezuela', telefono_contacto: '7603108', email_contacto: 'gmail', link_maps: 'www', latitud: '5', longitud: '20', activo: 'true'},
        { id: '2', nombre: 'Sede Bolivar', imagen_path: 'www', direccion_calle: 'venuezuela', direccion_numero_exterior: '657', direccion_numero_interior: '304', direccion_colonia: 'manzana b', direccion_codigo_postal: '77', direccion_municipio_alcaldia: 'tuta', direccion_ciudad: 'calle 5', direccion_estado: 'zulia', telefono_contacto: '7603102', email_contacto: 'gmail' , link_maps: 'www', latitud: '6', longitud: '22', activo: 'true'},
        { id: '3', nombre: 'Sede Santa Fe', imagen_path: 'www', direccion_calle: 'venezuela', direccion_numero_exterior: '657', direccion_numero_interior: '306', direccion_colonia:'manzana c', direccion_codigo_postal: '76', direccion_municipio_alcaldia: 'belen', direccion_ciudad: 'calle 6', direccion_estado: 'caracas', telefono_contacto: '7603103', email_contacto: 'gmail', link_maps: 'www', latitud: '7', longitud: '24', activo: 'true'},
    ];
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Listado de Sucursales</Text> 

            <ScrollView style={styles.categoriasContainer}>
                {categoriasEjemplo.map((sucursal) => (
                    <View key={categoria.id} style={styles.sucursalCard}>
                        <Text style={styles.sucursalTitle}>{sucursal.Nombre}</Text>
                        <Text style={styles.sucursalDetail}><Text style={styles.detailLabel}>Id: </Text>{sucursal.Id}</Text>
                        <Text style={styles.sucursalDetail}><Text style={styles.detailLabel}>Nombre: </Text>{sucursal.Nombre}</Text>
                        <Text style={styles.sucursalDetail}><Text style={styles.detailLabel}>Imagen Path: </Text>{sucursal.Descripcion}</Text>
                        <Text style={styles.sucursalDetail}><Text style={styles.detailLabel}>Dirección Calle: </Text>{sucursal.Tipo_Categoria}</Text>
                        <Text style={styles.sucursalDetail}><Text style={styles.detailLabel}>Dirección Número Exterior: </Text>{sucursal.Icono_Clave}</Text>
                        <Text style={styles.sucursalDetail}><Text style={styles.detailLabel}>Dirección Número Interior: </Text>{sucursal.Activo}</Text>
                        <Text style={styles.sucursalDetail}><Text style={styles.detailLabel}>Dirección Colonia: </Text>{sucursal.Activo}</Text>
                        <Text style={styles.sucursalDetail}><Text style={styles.detailLabel}>Dirección Código Postal: </Text>{sucursal.Activo}</Text>
                        <Text style={styles.sucursalDetail}><Text style={styles.detailLabel}>Dirección Municipio Alcaldia: </Text>{sucursal.Activo}</Text>
                        <Text style={styles.sucursalDetail}><Text style={styles.detailLabel}>Dirección Ciudad: </Text>{sucursal.Activo}</Text>
                        <Text style={styles.sucursalDetail}><Text style={styles.detailLabel}>Dirección Estado: </Text>{sucursal.Activo}</Text>
                        <Text style={styles.sucursalDetail}><Text style={styles.detailLabel}>Telefono Contacto: </Text>{sucursal.Activo}</Text>
                        <Text style={styles.sucursalDetail}><Text style={styles.detailLabel}>Email Contacto: </Text>{sucursal.Activo}</Text>
                        <Text style={styles.sucursalDetail}><Text style={styles.detailLabel}>Link Maps: </Text>{sucursal.Activo}</Text>
                        <Text style={styles.sucursalDetail}><Text style={styles.detailLabel}>Latitud: </Text>{sucursal.Activo}</Text>
                        <Text style={styles.sucursalDetail}><Text style={styles.detailLabel}>Longitud: </Text>{sucursal.Activo}</Text>
                        <Text style={styles.sucursalDetail}><Text style={styles.detailLabel}>Activo </Text>{sucursal.Activo}</Text>



                        <View style={styles.buttonContainer}>
                            <BotonComponent
                                title="Ver Detalles" // Título completo
                                onPress={() => navigation.navigate("Detallesucursales", { sucursalId: sucursal.id })}
                                buttonStyle={styles.viewButton}
                                textStyle={styles.buttonText}
                            />
                            <BotonComponent
                                title="Editar sucursal" // Título completo
                                onPress={() => navigation.navigate("Editarsucursales", { sucursalId: sucursal.id })}
                                buttonStyle={styles.editButton}
                                textStyle={styles.buttonText}
                            />
                        </View>
                    </View>
                ))}
            </ScrollView>

            <BotonComponent
                title="Agendar Nueva sucursal" // Título completo
                onPress={() => { /* navigation.navigate("Crearcategoria") */ }}
                buttonStyle={styles.newsucursalButton}
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

    sucursalesContainer: {
        width: "100%", 
        flex: 1, 
    },

    sucursalCard: {
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
    sucursalTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 8,
        color: "#34495E", 
    },
    
    sucursalDetail: {
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
    newsucursalButton: {
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