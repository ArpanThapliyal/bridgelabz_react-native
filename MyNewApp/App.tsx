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

import Userhabbits from './components/learnings/userhabbits';
import Newtopic1 from './components/learnings/newtopic1';
import Flex_scrollview from './components/learnings/flex_scrollview';
import Start from './pro_comp/myntra/start';
import Password_start from './components/password_generator/password_start';
import Ucampus from './pro_comp/ucampus/ucampus';

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
    
    <ScrollView style={style.bg1}>
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
    
    {/* password generator */}
    {/* <Password_start/> */}
    
    {/* contain myntra wishlist clone */}
    {/* <Start/> */}

    {/* ucampus clone */}
    <Ucampus/>
    
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
  bg1 : {backgroundColor : "#FF362E",},
  bg2 : {backgroundColor : "pink", marginTop : 20},
})



export default App;
