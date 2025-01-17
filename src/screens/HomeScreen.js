import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
import React from "react";
import COLORS from "../constants/Colors";
import Icon from "react-native-vector-icons/MaterialIcons";
import products from "../../src/constants/products";

const width = Dimensions.get("screen").width / 2 - 30;

const HomeScreen = () => {
  // A simple Card component rendering only an empty green card.
  const Card = ({ product }) => {
    return (
      <View style={style.card}>
        <View style={{ alignItems: "flex-end" }}>
          <View
            style={{
              width: 30,
              height: 30,
              borderRadius: 15,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: products.like
                ? "rgba(245, 42, 42, 0.2)"  
                : "rgba(0,0,0,0.2)",    
            }}
          >
            <Icon
              name="favorite"
              size={18}
              color={products.like ? COLORS.red : COLORS.dark}
            />
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{ flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white }}
    >
      <View style={style.header}>
        <View>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>Welcome to</Text>
          <Text
            style={{ fontSize: 38, fontWeight: "bold", color: COLORS.green }}
          >
            Beauty Shop
          </Text>
        </View>
      </View>

      <View style={style.bannerContainer}>
        <Image source={require("../assets/banner.png")} style={style.banner} />
      </View>

      {/* Products Label */}
      <Text style={style.productsLabel}>Products</Text>

      {/* FlatList with placeholder empty data */}
      <FlatList
        columnWrapperStyle={{ justifyContent: "space-between" }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
            marginTop: 10,
            paddingBottom: 50,
        }}
        numColumns={2}
        data={products.length ? products : Array(6).fill({})} // Use products array or placeholders
        renderItem={({ item }) => item.id ? <Card product={item} /> : <Card />} // Render Card with product data or empty Card
        keyExtractor={(item, index) => item.id ? item.id.toString() : index.toString()} // Use product id or index as key
        />

    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bannerContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  banner: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 10,
    marginBottom: 5,
  },
  productsLabel: {
    fontSize: 16,
    fontWeight: "bold",
    // color: 'grey',
    marginVertical: 20,
  },
  card: {
    height: 225,
    backgroundColor: COLORS.light,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 18,
    padding: 15,
  },
});

export default HomeScreen;
