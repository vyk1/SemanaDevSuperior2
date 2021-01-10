import { useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import api from '../api';
import Header from '../Header';
import OrderCard from '../OrderCard';
import { Order } from '../types';

const Orders = () => {
    const [error, setError] = useState(false)
    const [loaded, setLoaded] = useState(false)
    const [orders, setOrders] = useState<Order[]>([]);

    const navigation = useNavigation()
    const isFocused = useIsFocused()

    useEffect(() => {
        const getOrders = async () => {
            try {
                setLoaded(false)
                const res = await api.get('/orders')
                setOrders(res.data)

            } catch (error) {
                setError(error)
            } finally {
                setLoaded(true)
            }
        }
        getOrders()
    }, [isFocused]);

    const handleOnPress = (order: Order) => {
        navigation.navigate('OrderDetails', { order })
    }

    return (
        <>
            <Header />
            <ScrollView style={styles.container}>
                {
                    !loaded ?
                        <Text>Aguarde um pouco</Text>
                        :
                        error ?
                            <Text>Ocorreu um erro...</Text>
                            :
                            orders.map(o => (
                                <TouchableWithoutFeedback
                                    onPress={() => handleOnPress(o)}
                                    key={o.id}>
                                    <OrderCard order={o} />
                                </TouchableWithoutFeedback>
                            ))
                }
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingRight: '5%',
        paddingLeft: '5%',

    }
});
export default Orders;
