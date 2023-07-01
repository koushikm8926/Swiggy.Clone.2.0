import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Pressable } from 'react-native'
import {FontAwesome} from "@expo/vector-icons";
const Menucomponent = ({food}) => {
  return (
    <View>
    <Pressable>
        <View>
          <Text>{food.name}</Text>
          <Text>{food.price}</Text>
          <Text style={{marginTop:5, borderRadius:4,}}>{[0,0,0,0,0].map((en,i)=>(
            <FontAwesome style={{paddingHorizontal:3, }} name= {i<Math.floor(food.rating)? "star": "star-o"} size={15} color="#FFD700" />
          ))}</Text>
        </View>
        <View>
          
        </View>
    </Pressable>
    </View>
  )
}

export default Menucomponent

const styles = StyleSheet.create({})