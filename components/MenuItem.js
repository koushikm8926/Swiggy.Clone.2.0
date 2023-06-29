import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const MenuItem = ({ item }) => {
  // console.log(item);
  const navigation= useNavigation(); 

  return (
    <View style={{ margin: 10 }}>
      <Pressable onPress={()=> navigation.navigate("Menue", {
        id:item.id,
        name:item.name,
        image:item.image, 
        rating:item.rating,
        time:item.time,
        adress:item.adress,
        cost_for_two:item.cost_for_two,
        cuisines:item.cuisines,
        menu:item.menu,
      })} style={{ flexDirection: "row" }}>
        <View>
          <ImageBackground
            source={{ uri: item.image }}
            style={{ height: 150, aspectRatio: 4 / 5 }}
            imageStyle={{ borderRadius: 7 }}
          >
            <AntDesign
              name="hearto"
              size={24}
              color="white"
              style={{ position: "absolute", right: 10, top: 10 }}
            />
          </ImageBackground>
        </View>
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>{item.name}</Text>
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
          <Text style={{ fontSize: 16, color: "grey", marginTop: 6 }}>
            {item.adress}
          </Text>

          <View
            style={{ marginTop: 5, alignItems: "center", flexDirection: "row" }}
          >
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 11,
                height: 22,
                width: 22,
                backgroundColor: "#FFB6C1",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "white",
                  fontSize: 13,
                }}
              >
                $
              </Text>
            </View>
            <Text
              style={{
                marginTop: 3,
                marginBottom: 4,
                fontSize: 16,
                fontWeight: "400",
                marginLeft: 5,
              }}
            >
              {item.cost_for_two} for two
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <MaterialCommunityIcons name="bike-fast" size={24} color="black" />
            <Text style={{ marginLeft: 6, fontSize: 16 }}>FREE DELIVERY</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default MenuItem;

