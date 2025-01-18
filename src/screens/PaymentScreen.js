import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { CardField, useStripe } from '@stripe/stripe-react-native';
import COLORS from '../constants/Colors';

const PaymentScreen = ({ navigation, route }) => {
  const { product } = route.params;
  const { confirmPayment } = useStripe();
  const [cardDetails, setCardDetails] = useState({});

  const handlePayment = async () => {
    if (!cardDetails.complete) {
      Alert.alert('Error', 'Please fill out all card details.');
      return;
    }

    try {
      const response = await fetch('http://192.168.112.93:5000/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: product.price * 100, // amount in cents
          currency: 'zar',
        }),
      });

      const data = await response.json();
      console.log('Server response:', data);

      const { clientSecret } = data;
      if (!clientSecret) throw new Error('Failed to retrieve client secret');

      const { error, paymentIntent } = await confirmPayment(clientSecret, {
        paymentMethodType: 'Card',
        paymentMethodData: {
          billingDetails: {
            name: 'Test User',
            email: 'testuser@example.com',
            address: {
              line1: '123 Test St',
              city: 'Test City',
              state: 'Test State',
              postalCode: '12345',
              country: 'US',
            },
          },
        },
      });

      if (error) {
        console.log('Payment confirmation error', error);
      } else if (paymentIntent) {
        console.log('Payment successful', paymentIntent);
        navigation.navigate('Success', { product });
      }
    } catch (error) {
      console.log('Payment error', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment for {product.name}</Text>
      <View style={styles.cardContainer}>
        <CardField
          postalCodeEnabled={false}
          placeholder={{ number: '4242 4242 4242 4242' }}
          cardStyle={styles.card}
          style={styles.cardField}
          onCardChange={(cardDetails) => setCardDetails(cardDetails)}
        />
      </View>
      <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
        <Text style={styles.payButtonText}>Pay Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  cardContainer: { width: '100%', padding: 10, backgroundColor: COLORS.light, borderRadius: 8 },
  card: { backgroundColor: COLORS.light, borderRadius: 8 },
  cardField: { height: 50, marginVertical: 30 },
  payButton: { width: '100%', height: 50, backgroundColor: COLORS.green, justifyContent: 'center', alignItems: 'center', borderRadius: 10 },
  payButtonText: { color: COLORS.white, fontSize: 18, fontWeight: 'bold' },
});

export default PaymentScreen;
