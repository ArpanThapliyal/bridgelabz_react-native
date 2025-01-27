import React from "react";
import {
View,
Text,
TextInput,
SafeAreaView,
ScrollView,
StyleSheet,
Image

} from 'react-native';

const flex_scrollview = ()=>{
    return(
    <>
    <View>
        <TextInput style = {s.text}>Flat cards</TextInput>
        <ScrollView horizontal ={true} style ={s.container} >
        <View style={[s.cards,s.card1]}>
            <TextInput style = {s.text}>red</TextInput>
        </View>
        <View style={[s.cards,s.card2]}>
            <TextInput style = {s.text}>green</TextInput>
        </View>
        <View style={[s.cards,s.card3]}>
            <TextInput style = {s.text}>blue</TextInput>
        </View>
        <View style={[s.cards,s.card4]}>
            <TextInput style = {s.text}>orange</TextInput>
        </View>
        <View style={[s.cards,s.card5]}>
            <TextInput style = {s.text}>pink</TextInput>
        </View>

        </ScrollView>
    </View>

    {/* new cards */}

    <View>
    <ScrollView 
    horizontal={true} 
    style ={s2.container}
    showsHorizontalScrollIndicator={false}
     >
        <View style={s2.cards}>
            <Image
              source={require('../images/demon_slayer.jpeg')}
              style = {s2.img}
            />
            <View style={[s2.card_below,s2.card1]}>
            <Text style = {s2.text_head}>Demon Slayer</Text>
            <Text style = {s2.text_sub_head}>On Crunchyroll</Text>
            <Text style = {s2.text_desc}>Demon Slayer: Kimetsu no Yaiba is an anime series about a young boy who becomes a demon slayer to avenge his family and cure his sister</Text>
            <Text style = {s2.text_foot}>Released </Text>
            </View>
        </View>    
        <View style={s2.cards}>
            <Image
              source={require('../images/solo_levling.jpeg')}
              style = {s2.img}
            />
            <View style={[s2.card_below,s2.card1]}>
            <Text style = {s2.text_head}>Solo Leveling</Text>
            <Text style = {s2.text_sub_head}>On Crunchyroll</Text>
            <Text style = {s2.text_desc}>Solo Leveling is a story about Sung Jinwoo, a weak hunter who gains the ability to level up and fight monsters in a world threatened by evil forces</Text>
            <Text style = {s2.text_foot}>OnHold </Text>
            </View>
        </View>      
        
        </ScrollView>
    </View>
    </>
    )
};

const s = StyleSheet.create({
    container :{
        flex :1,
        flexDirection : 'row',
        padding:6
    },
    cards :{
        // flex:1,
        // justifyContent :'center',
        // alignItems : 'center',
        height :100,
        width :100,
        borderBlockColor :'black',
        borderWidth :2,
        margin :10,
        borderRadius :8,
        elevation :10,
        // shadowOffset :{
        //     height :2,
        //     width :2
        // },
        shadowColor :'red',
        // shadowOpacity :1,
        // shadowRadius : 1
        
    },
    card1 :{
        backgroundColor :'red'
    },
    card2 :{
        backgroundColor : 'green',
    },
    card3 :{
        backgroundColor : 'blue',
    },
    card4 :{
        backgroundColor : 'orange',
    },
    card5 :{
        backgroundColor : 'pink',
    },
    text :{
        flex : 1,
        alignSelf :'center',
        color : 'white',
        fontSize :20,
        fontWeight :'bold'
    }
});
const s2 = StyleSheet.create({
    container :{
        flex:1,
        flexDirection :'row'
    },
    cards :{
        margin :20,
        borderRadius:10,
        elevation :10,
        width: 350,
    },
    img:{
        height :300,
        width :351, 
        borderTopLeftRadius :10,
        borderTopRightRadius :10
    },
    card_below:{
        backgroundColor:'#F4C724',
        padding :10,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10
    },
    text_head:{
        fontSize:30,
        fontWeight :'bold',
        color : 'purple',
        marginBottom :6,
        marginTop :-10
    },
    text_sub_head:{
        fontSize:20,
        color : '#0A3D62',
        marginBottom :5
    },
    text_desc:{
        color : '#192A56',
        lineHeight: 16,
    },
    text_foot:{
        fontSize:20,
        color : '#3C40C6',
        marginTop :5
    },
    card1 :{
        
    },
    

});

export default flex_scrollview;
