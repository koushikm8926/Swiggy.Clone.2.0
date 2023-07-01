import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Menucomponent from './Menucomponent';
const Fooditem = ({item}) => {
    const data=[item];
    console.log(data);
    const [selected, setSelected]=useState(["Recommended"]);
  const handleItemSelect = (item)=>{
    const itemSelected = selected.find((c)=> c===item);
    if (itemSelected){
      setSelected(selected.filter((sel)=> sel !==item));
    }else{
      setSelected([...selected, item]);
    }
  }
  return (
    <View>
      {data.map((item,i)=>(
        <>
        <Pressable  onPress={()=>handleItemSelect(item.name)} key={i}style={{flexDirection:'row', alignItems:'center', justifyContent:"space-between", margin:10,}} >
            <Text style={{fontSize:20,fontWeight:'bold'}}>{item.name}</Text>
            <AntDesign name="down" size={24} color="black" />
        </Pressable>

        {selected.includes(item.name) ? (
           item.items.map((food,index)=>(
            <Menucomponent food={food} key={index} />
           ))
        ):(
            null
        )}
        </>
      ))}
    </View>
  )
}

export default Fooditem

const styles = StyleSheet.create({})