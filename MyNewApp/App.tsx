import React,{useState} from 'react';
import {
  Text,
  View,
  Button,
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';

import Userhabbits from './components/userhabbits';
import Newtopic1 from './components/newtopic1';
import Flex_scrollview from './components/flex_scrollview';
import Start from './pro_comp/start';

// js variabels
let name = "poppye";
let email = "abc@gmail.com";
let age = 30 ;
const App =()=>{
  const [name,setname] = useState("amavas");
  function change(){
    (name=="amavas")?setname("maanas"):setname("amavas");
  };
         
  return (
    <>
    <ScrollView style = {style.bg1}>
    <SafeAreaView >
    {/* <View>
      <Text style = {{fontSize : 30 ,color : "red"}}>hello ji</Text>
      <Text style = {{fontSize : 30,color : "blue"}}>kese ho</Text>
      <Text style = {{fontSize : 60,color : "purple"}}>{name}</Text>
      <Button title='push me' onPress= {()=>Alert.alert("button pushed")}></Button>
      <Button title='naam karan' onPress={change}/>
    
    </View> */}
    
    {/* all the component are here*/}
    {/* <Userhabbits/>  */}
    {/* <Userdetail/>  */}
    {/* <Newtopic1/> */}
    {/* <Flex_scrollview/> */}

    <Start/>


    </SafeAreaView>
    </ScrollView> 

    </>
  )
};

const Userdetail =()=>{
  return(
    <View style = {style.bg2}>
    <Text style = {style.textdec}>username : {name}{5+5}</Text>
    <Text style = {style.textdec}>your email : {email}</Text>
    <Text style = {style.textdec}>you are : {age<18?"underage":"expiered"}</Text>
    </View>
  )
};



const style = StyleSheet.create({
  textdec : {color : "blue",fontSize : 40},
  bg1 : {backgroundColor : "white"},
  bg2 : {backgroundColor : "pink", marginTop : 20},
})



export default App;
