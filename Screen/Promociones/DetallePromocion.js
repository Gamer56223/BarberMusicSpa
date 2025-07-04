import { useEffect, useState } from "react";
import { ActivityIndicator, SafeAreaView, StyleSheet, Text, View } from "react-native";
import BotonComponent from "../../components/BottonComponent"; // Asegúrate de que la ruta sea correcta

export default function DetallePromocion({ route, navigation }) {

    const { promocionId } = route.params;
    const [promocion, setPromocion] = useState(null);
    const [loading, setLoading] = useState(true);

    const promocionesEjemplo = [
        { id: '1', codigo: 'Maquillaje', nombre: 'Piel brillante y suave', descripcion: 'Spa', tipo_descuento: 'activo', valor_descuento: 'Consulta', fecha_inicio: 'null', fecha_fin: 'null', usos_maximos_total: 'null', usos_maximos_Por_cliente: 'null', usos_actuales: 'null', activo: 'null', aplica_a_todos_productos: 'null', aplica_a_todos_servicios: 'null'},
        { id: '2', codigo: 'Corporativo', nombre: 'Eliminación de grasa', descripcion: 'Spa', tipo_descuento: 'activo', valor_descuento: 'Revisión' , fecha_inicio: 'null', fecha_fin: 'null', usos_maximos_total: 'null' , usos_maximos_Por_cliente: 'null', usos_actuales:'null', activo: 'null', aplica_a_todos_productos: 'null', aplica_a_todos_servicios: 'null' },
        { id: '3', codigo: 'Estetico', nombre: 'Eliminación de acne', descripcion: 'Barberia', tipo_descuento: 'activo', valor_descuento: 'urgencia', fecha_inicio: 'null', fecha_fin: 'null', usos_maximos_total: 'null', usos_maximos_Por_cliente: 'null', usos_actuales: 'null', activo: 'null', aplica_a_todos_productos: 'null', aplica_a_todos_servicios: 'null' },
    ];

    useEffect(() => {
        const foundPromocion = promocionesEjemplo.find(pr => pr.id === promocionId);
        setPromocion(foundPromocion);
        setLoading(false);
    }, [promocionId]); 

    if (loading) {
        return (
            <View style={[styles.container, { justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f4f8' }]}>
                <ActivityIndicator size="large" color="#007B8C" />
                <Text style={{ marginTop: 15, fontSize: 18, color: '#555' }}>Cargando detalles de la Promoción...</Text>
            </View>
        );
    }

    if (!promocion) {
        return (
            <SafeAreaView style={[styles.container, {backgroundColor: '#f0f4f8'}]}>
                <Text style={[styles.title, {color: '#2c3e50'}]}>Detalle de la Promoción</Text>
                <View style={[styles.detailCard, {backgroundColor: '#FFFFFF', shadowColor: 'rgba(0, 0, 0, 0.1)'}]}>
                    <Text style={[styles.errorText, {color: 'red'}]}>No se encontraron detalles para esta Promoción.</Text>
                    <BotonComponent
                        title="Volver al Listado"
                        onPress={() => navigation.goBack()}
                        buttonStyle={styles.backButton}
                        textStyle={styles.buttonText}
                    />
                </View>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={[styles.container, {backgroundColor: '#f0f4f8'}]}>
            <Text style={[styles.title, {color: '#2c3e50'}]}>Detalles de la Promoción</Text>

            <View style={[styles.detailCard, {backgroundColor: '#FFFFFF', shadowColor: 'rgba(0, 0, 0, 0.1)'}]}>
                <Text style={[styles.categoriaName, {color: '#2c3e50'}]}>{categoria.Nombre}</Text>
                <Text style={[styles.detailText, {color: '#5C6F7F'}]}><Text style={styles.detailLabel}>ID: </Text>{promocion.id}</Text>
                <Text style={[styles.detailText, {color: '#5C6F7F'}]}><Text style={styles.detailLabel}>Código: </Text>{promocion.nombre}</Text>
                <Text style={[styles.detailText, {color: '#5C6F7F'}]}><Text style={styles.detailLabel}>Nombre: </Text>{promocion.descripcion}</Text>
                <Text style={[styles.detailText, {color: '#5C6F7F'}]}><Text style={styles.detailLabel}>Descripción: </Text>{promocion.tipo_categoria}</Text>
                <Text style={[styles.detailText, {color: '#5C6F7F'}]}><Text style={styles.detailLabel}>Tipo_Descuento: </Text>{promocion.icono_clave}</Text>
                <Text style={[styles.detailText, {color: '#5C6F7F'}]}><Text style={styles.detailLabel}>Valor_Descuento: </Text>{promocion.activo}</Text> 
                <Text style={[styles.detailText, {color: '#5C6F7F'}]}><Text style={styles.detailLabel}>Fecha_Inicio: </Text>{promocion.activo}</Text>      
                <Text style={[styles.detailText, {color: '#5C6F7F'}]}><Text style={styles.detailLabel}>Fecha_Fin: </Text>{promocion.activo}</Text>
                <Text style={[styles.detailText, {color: '#5C6F7F'}]}><Text style={styles.detailLabel}>Usos Maximos Total: </Text>{promocion.activo}</Text>  
                <Text style={[styles.detailText, {color: '#5C6F7F'}]}><Text style={styles.detailLabel}>Usos Maximos Por Cliente: </Text>{promocion.activo}</Text>
                <Text style={[styles.detailText, {color: '#5C6F7F'}]}><Text style={styles.detailLabel}>Usos Actuales: </Text>{promocion.activo}</Text> 
                <Text style={[styles.detailText, {color: '#5C6F7F'}]}><Text style={styles.detailLabel}>Activo: </Text>{promocion.activo}</Text>
                <Text style={[styles.detailText, {color: '#5C6F7F'}]}><Text style={styles.detailLabel}>Aplica a Todos Los Productos: </Text>{promocion.activo}</Text>  
                <Text style={[styles.detailText, {color: '#5C6F7F'}]}><Text style={styles.detailLabel}>Aplica a Todos Los Servicios: </Text>{promocion.activo}</Text> 
                        

            </View>

            <BotonComponent
                title="Volver al Listado"
                onPress={() => navigation.goBack()}
                buttonStyle={styles.backButton}
                textStyle={styles.buttonText}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 25,
        textAlign: 'center',
    },
    detailCard: {
        width: "100%",
        maxWidth: 400,
        padding: 25,
        borderRadius: 15,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 8,
        alignItems: "flex-start",
        marginBottom: 20,
    },
    promocionName: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 15,
        textAlign: 'center',
        width: '100%',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#ccc',
        paddingBottom: 10,
    },
    detailText: {
        fontSize: 18,
        marginBottom: 8,
        width: '100%',
    },
    detailLabel: {
        fontWeight: 'bold',
    },
    errorText: {
        fontSize: 18,
        color: 'red',
        textAlign: 'center',
        marginBottom: 20,
        width: '100%',
    },
    backButton: {
        backgroundColor: "#007B8C", // Color consistente con el tema
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 8,
        marginTop: 15,
        width: '80%',
        maxWidth: 300,
        alignSelf: 'center',
    },
    buttonText: {
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 16,
    },
});
