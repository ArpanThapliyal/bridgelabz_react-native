import React,{useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

const scrolling = ()=>{
      const [selectedText, setSelectedText] = useState('All'); // Track the selected text

    return(
        <SafeAreaView>
            <View style={style.container} >
                <TouchableOpacity style={style.collectionbox}>
                    <Icon name='subscriptions' size={20}/>   
                    <Text style = {style.collectiontxt}>Collections</Text>
                </TouchableOpacity>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator ={false} style={style.scroll}>
            {['All', 'Trouser', 'Shirts', 'Shoes', 'Tshirts', 'Hoodie', 'Jeans', 'Lower'].map((item) => (
            <TouchableOpacity key={item} onPress={() => setSelectedText(item)}>
              <Text style={selectedText === item ? style.textB : style.textA}>{item}</Text>
            </TouchableOpacity>
          ))}
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
    collectionbox:{
        flexDirection:'row',
        backgroundColor:'#EAF0F1',
        marginRight:8,
        marginBottom:2,
        marginTop:3,
        padding:8,
        marginLeft:-14
    },
    collectiontxt:{
        fontSize:15,
        fontWeight:'bold',
        paddingTop:1,
        marginLeft:6
    },
    scroll:{
        borderLeftWidth:0.2
    },
    textA :{
        fontSize:14,
        color:'#535C68',
        marginHorizontal:5,
        padding:15,
        paddingVertical:10,
        borderWidth:1,
        borderRadius :20,
        borderColor:'#535C68'
    },
    textB :{
        fontSize:14,
        color:'red',
        marginHorizontal:5,
        padding:15,
        paddingVertical:10,
        borderWidth:1,
        borderRadius :20,
        borderColor:'red'
    },
});

export default scrolling;