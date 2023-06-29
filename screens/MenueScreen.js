import { Platform, StyleSheet, Text, View , SafeAreaView} from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from "@expo/vector-icons";

const MenueScreen = () => {
    const route= useRoute();
    // console.log(route.params)
    const navigation=useNavigation();

  return (
    <SafeAreaView style={{marginTop:Platform.OS==="android" ? 35:0,}}>
      <View style={{height:300, backgroundColor:'#B4C0DE', borderBottomRightRadius:40, borderBottomLeftRadius:40,}}>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', margin:10,}} >
            <Ionicons name="arrow-back-circle" size={40} color="black"  onPress={()=> navigation.navigate("Home")} />
            <View style={{flexDirection:'row', alignItems:'center'}} >
            <AntDesign name="search1" size={24} color="black" />
            <Text style={{fontSize:16, fontWeight:"600", marginLeft:7, }}>Search</Text>
            </View>
            </View>

            <View style={{height:210, backgroundColor:'white', marginHorizontal:20, marginVertical:5, padding:10, borderRadius:15,}}>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
              <Text style={{fontSize:19, fontWeight:'bold'}}>{route.params.name}</Text>
              <View style={{flexDirection:'row', alignItems:'center'}}>
              <AntDesign style={{marginHorizontal:7,}} name="sharealt" size={24} color="black" />
              <AntDesign name="hearto" size={24} color="black" />
              </View>
            </View>
            

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 7,
              }}
            >
              <MaterialIcons name="stars" size={24} color="green" />
              <Text style={{ marginLeft: 3, fontSize: 17, fontWeight: 400 }}>
                {route.params.rating}
              </Text>
              <Text style={{ marginLeft: 3 }}>.</Text>
              <Text style={{ marginLeft: 3, fontSize: 17, fontWeight: 400 }}>
                {route.params.time} mins
              </Text>
            </View>

            <Text style={{fontSize:17, marginTop:7, color:'grey'}}>{route.params.cuisines}</Text>

                <View style={{marginTop:10, flexDirection:'row',alignItems:'center'}}>
                  <Text style={{}}>Outlet</Text>
                  <Text style={{marginLeft:15,fontSize:14, fontWeight:'bold'}}>{route.params.adress}</Text>
                </View>

                <View style={{marginTop:10, flexDirection:'row',alignItems:'center'}}>
                  <Text style={{}}>22 mins</Text>
                  <Text style={{marginLeft:15,fontSize:14, fontWeight:'bold'}}>Home</Text>
                </View>

                <Text style={{borderColor:'grey', height:1, borderWidth:0.6,marginTop:12, }}/>

                <View style={{flexDirection:'row', alignItems:'center', marginTop:7,}}>
                <Ionicons name="bicycle" size={24} color="orange" />
                <Text style={{marginLeft:4, color:'grey', fontSize:15,}}>0-3 KM |</Text>
                <Text style={{marginLeft:4, color:'grey', fontSize:15,}}>35 Delivery Fee Will Apply</Text>
                </View>
            </View>
      </View>
    </SafeAreaView>
  )
}

export default MenueScreen

