import React,{useState} from 'react';
import {
  Text,
  View,
  Button,
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const scrolling = ()=>{
    return(
        <SafeAreaView>
            <View style={style.container} >
            <ScrollView horizontal={true} showsHorizontalScrollIndicator ={false}>
                <TouchableOpacity>
                <Text style = {style.text}>All</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                <Text style = {style.text}>Trouser</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                <Text style = {style.text}>Shirts</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                <Text style = {style.text}>Shoes</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                <Text style = {style.text}>Tshirts</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                <Text style = {style.text}>hoodie</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                <Text style = {style.text}>Jeans</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                <Text style = {style.text}>Lower</Text>
                </TouchableOpacity>
               </ScrollView>
            </View>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    container :{
        margin :15,
        flex:1,
        flexDirection:'row',
    },
    text :{
        fontSize:18,
        marginHorizontal:5,
        padding:15,
        paddingVertical:10,
        backgroundColor:'#EAF0F1',
        borderRadius :20

    },
});

export default scrolling;