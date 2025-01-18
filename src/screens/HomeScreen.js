import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../constants/Colors";

const width = Dimensions.get("window").width / 2 - 30;

const HomeScreen = ({ navigation }) => {
  const products = [
    {
      id: 1,
      name: "Her Perfume",
      price: "102.99",
      like: true,
      img: require("../assets/perfume.png"),
      about: "A captivating fragrance that leaves a lasting impression.",
    },
    {
      id: 2,
      name: "Brushes",
      price: "25.99",
      like: false,
      img: require("../assets/puff_powder.png"),
      about: "A lightweight powder that gives your skin a flawless finish.",
    },
    {
      id: 3,
      name: "Puff Powder",
      price: "45.99",
      like: true,
      img: require("../assets/makeup_brushes.png"),
      about: "Brushes made to give you a stunning makeup finish.",
    },
    {
      id: 4,
      name: "Lipstick",
      price: "15.99",
      like: true,
      img: require("../assets/lipstick.png"),
      about: "Long-lasting lipstick for an elegant look.",
    },
    {
      id: 5,
      name: "Nail Polish",
      price: "10.99",
      like: false,
      img: require("../assets/nail_polish.png"),
      about: "Vibrant nail polish for an exquisite look.",
    },
    {
      id: 6,
      name: "Face Serum",
      price: "55.99",
      like: true,
      img: require("../assets/face_serum.png"),
      about: "A revitalizing serum for radiant and healthy skin.",
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={style.header}>
          <View>
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>Welcome to</Text>
            <Text style={{ fontSize: 38, color: COLORS.green, fontWeight: "bold" }}>
              Beauty Shop
            </Text>
          </View>
        </View>

        {/* Banner */}
        <View style={style.bannerContainer}>
          <Image source={require("../assets/banner.png")} style={style.banner} />
        </View>

        {/* Products Label */}
        <View style={{ marginTop: 20 }}>
          <Text style={style.productsLabel}>Products</Text>

          {/* Product Cards */}
          <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
            {products.map((product) => (
              <TouchableOpacity key={product.id} activeOpacity={0.8}>
                <View style={style.card}>
                  <View style={{ alignItems: "flex-end" }}>
                    <View
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: 15,
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: product.like
                          ? "rgba(245, 42, 42, 0.2)"
                          : "rgba(0,0,0,0.2)",
                      }}
                    >
                      <Icon
                        name="favorite"
                        size={18}
                        color={product.like ? COLORS.red : COLORS.dark}
                      />
                    </View>
                  </View>
                  <View style={{ height: 100, alignItems: "center" }}>
                    <Image source={product.img} style={{ flex: 1, resizeMode: "contain" }} />
                  </View>
                  <Text style={{ fontWeight: "bold", fontSize: 17, marginTop: 10 }}>
                    {product.name}
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginTop: 5,
                    }}
                  >
                    <Text style={{ fontSize: 19, fontWeight: "bold" }}>R {product.price}</Text>
                    <TouchableOpacity
                      onPress={() => navigation.navigate("DetailsScreen", product)}
                    >
                      <View
                        style={{
                          height: 25,
                          width: 25,
                          backgroundColor: COLORS.green,
                          borderRadius: 5,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Text style={{ fontSize: 22, color: COLORS.white, fontWeight: "bold" }}>
                          +
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
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
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  card: {
    height: 225,
    backgroundColor: COLORS.light,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
});

export default HomeScreen;
