import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, Linking, StyleSheet, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import api from '../api';
import OrderCard from '../OrderCard';
import Header from '../Header';
import { Order } from '../types';

type Props = {
    route: {
        params: {
            order: Order
        }
    }
}

const OrderDetails = ({ route }: Props) => {

    const { order } = route.params
    const [loaded, setLoaded] = useState(true)
    const navigation = useNavigation()

    const handleCancel = () => {
        navigation.navigate('Orders')
    }

    const handleConfirmDelivery = async () => {
        try {
            setLoaded(false)
            await api.put('/orders/' + order.id + '/delivered')
            Alert.alert("Pedido " + order.id + " confirmado com sucesso")
            navigation.navigate('Orders')
        } catch (error) {
            Alert.alert("Ocorreu um erro ao confirmar o pedido" + order.id)
        } finally {
            setLoaded(false)
        }
    }

    const handleStartNavigation = () => {
        try {
            Linking.openURL(`https://www.google.com/maps/dir/?api=1&travelmode=driving&dir_action=navigate&destination=${order.latitude},${order.longitude}`)

        } catch (error) {
            Alert.alert("Ocorreu um erro ao gerar o link")
        }
    }


    return (
        <>
            <Header />
            {!loaded ?
                <Text>Aguarde um pouco</Text>
                :
                <View style={styles.container}>
                    <OrderCard order={order} />
                    <RectButton style={styles.button} onPress={handleStartNavigation}>
                        <Text style={styles.buttonText}>INICIAR NAVEGAÇÃO</Text>
                    </RectButton>
                    <RectButton style={styles.button} onPress={handleConfirmDelivery}>
                        <Text style={styles.buttonText}>CONFIRMAR ENTREGA</Text>
                    </RectButton>
                    <RectButton style={styles.button} onPress={handleCancel}>
                        <Text style={styles.buttonText}>VOLTAR</Text>
                    </RectButton>
                </View>
            }
        </>
    );
}


const styles = StyleSheet.create({
    container: {
        paddingRight: '5%',
        paddingLeft: '5%'
    },
    button: {
        backgroundColor: '#DA5C5C',
        flexDirection: 'row',
        borderRadius: 10,
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 50,
        paddingRight: 50,
        fontWeight: 'bold',
        fontSize: 18,
        color: '#FFF',
        letterSpacing: -0.24,
        fontFamily: 'OpenSans_700Bold'
    }
});
export default OrderDetails;
