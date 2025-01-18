import React from "react";
import { View, SafeAreaView, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../constants/Colors";

const CheckoutScreen = ({ navigation, route }) => {
  const { product } = route.params;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={style.header}>
        <Icon name="arrow-back" size={28} onPress={() => navigation.goBack()} />
        <Text style={style.headerTitle}>Checkout Summary</Text>
      </View>
      <View style={style.container}>
        <View style={style.summaryContainer}>
          <Text style={style.text}>Product: {product.name}</Text>
          <Text style={style.text}>Price: R {product.price}</Text>
          <Text style={style.text}>Quantity: 1</Text>
          <View style={style.line} />
          <View style={style.totalContainer}>
            <Text style={style.totalText}>Total:</Text>
            <Text style={style.totalAmount}>R {product.price}</Text>
          </View>
        </View>
        <View style={style.buttonContainer}>
          <TouchableOpacity
            style={style.checkoutBtn}
            onPress={() => navigation.navigate("Payment", { product })}
          >
            <Text style={style.checkoutBtnText}>Checkout Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 10,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  summaryContainer: {
    backgroundColor: COLORS.light,
    padding: 20,
    borderRadius: 10,
    width: "100%",
    marginTop: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  line: {
    height: 1,
    backgroundColor: COLORS.dark,
    marginVertical: 10,
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonContainer: {
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  checkoutBtn: {
    width: "100%",
    height: 50,
    backgroundColor: COLORS.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  checkoutBtnText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CheckoutScreen;
