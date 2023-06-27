import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  TextInput,
  Pressable,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import Carousel from "../components/Carousel";
import FoodTypes from "../components/FoodTypes";
import QuickFood from "../components/QuickFood";
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from "react-native";
const HomeScreen = () => {
  return (
    <ScrollView style={{ paddingTop: Platform.OS === "android" ? 35 : 0 }} showsVerticalScrollIndicator={false} >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderColor: "#C0C0C0",
          borderWidth: 1,
          padding: 10,
          margin: 10,
          borderRadius: 7,
        }}
      >
        <TextInput
          placeholder="Search for Restaurent item or more"
          style={{ fontSize: 17, width: "90%" }}
        />
        <Feather name="search" size={24} color="#E52B50" />
      </View>
      <Carousel/>
      <FoodTypes/>
      <QuickFood/>
      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>
      <Pressable style={{ marginHorizontal:10, flexDirection:'row', alignItems:'center', borderWidth:1, borderColor:'#d0d0d0', padding:10, borderRadius:20, justifyContent:'center',  width:120}}>
        <Text style={{marginRight:6}}>Filter</Text>
        <Ionicons name="filter" size={20} color="black" />
      </Pressable>

      <Pressable style={{ marginHorizontal:10, flexDirection:'row', alignItems:'center', borderWidth:1, borderColor:'#d0d0d0', padding:10, borderRadius:20, justifyContent:'center', width:120}}>
        <Text>Sort By Value</Text>

      </Pressable>

      <Pressable style={{ marginHorizontal:10, flexDirection:'row', alignItems:'center', borderWidth:1, borderColor:'#d0d0d0', padding:10, borderRadius:20, justifyContent:'center', width:120}}>
        <Text>Sort By Price</Text>
        
      </Pressable>
      </View>
  </ScrollView>
  );
};

export default HomeScreen;

