import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import quickfood from "../data/quickfood";
import { ScrollView } from "react-native";
import { Pressable } from "react-native";
import { ImageBackground } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
const QuickFood = () => {
  const data = quickfood;

  return (
    <View style={{ margin: 10 }}>
      <Text style={{ fontSize: 16, fontWeight: "bold" }}>Get it Quickly</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item, index) => (
          <Pressable key={index} style={{ margin: 10 }}>
            <ImageBackground
              source={{ uri: item.image }}
              imageStyle={{ borderRadius: 7 }}
              style={{ height: 170, aspectRatio: 5 / 6 }}
            >
              <Text
                style={{
                  position: "absolute",
                  bottom: 10,
                  left: 10,
                  fontSize: 27,
                  color: "white",
                  fontWeight: "900",
                }}
              >
                {item.offer} OFF
              </Text>
            </ImageBackground>
            <Text style={{ marginTop: 10, fontSize: 16, fontWeight: "500" }}>
              {item.name}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 3,
              }}
            >
              <MaterialIcons name="stars" size={24} color="green" />
              <Text style={{ marginLeft: 3, fontSize: 15, fontWeight: 400 }}>
                {item.rating}
              </Text>
              <Text style={{ marginLeft: 3 }}>.</Text>
              <Text style={{ marginLeft: 3, fontSize: 15, fontWeight: 400 }}>
                {item.time} mins
              </Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default QuickFood;

const styles = StyleSheet.create({});
