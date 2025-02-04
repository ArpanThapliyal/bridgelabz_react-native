import React, { useState } from "react";
import { Linking ,Modal,useWindowDimensions} from "react-native";
import {
View,
Text,
ScrollView,
StyleSheet,
Image,
TouchableOpacity,
Button

} from 'react-native';

const flex_scrollview = ()=>{

    function openwebsite(websitelink :string ){
        Linking.openURL(websitelink);
    }

    const {height,width,fontScale,scale} = useWindowDimensions();

    // modal
    const [modal, setmodal] = useState(false);
    return(
    <>
    <View>
        <Text style = {s.text}>Flat cards</Text>
        <ScrollView horizontal ={true} style ={s.container} >
        <View style={[s.cards,s.card1]}>
            <Text style = {s.text}>red</Text>
        </View>
        <View style={[s.cards,s.card2]}>
            <Text style = {s.text}>green</Text>
        </View>
        <View style={[s.cards,s.card3]}>
            <Text style = {s.text}>blue</Text>
        </View>
        <View style={[s.cards,s.card4]}>
            <Text style = {s.text}>orange</Text>
        </View>
        <View style={[s.cards,s.card5]}>
            <Text style = {s.text}>pink</Text>
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
              source={require('../../images/demon_slayer.jpeg')}
              style = {s2.img}
            />
            <View style={[s2.card_below,s2.card1]}>
            <Text style = {s2.text_head}>Demon Slayer</Text>
            <Text style = {s2.text_sub_head}>On Crunchyroll</Text>
            <Text style = {s2.text_desc}>Demon Slayer: Kimetsu no Yaiba is an anime series about a young boy who becomes a demon slayer to avenge his family and cure his sister</Text>
            
            <TouchableOpacity style={s2.link_button} 
            onPress={()=>{openwebsite('https://youtube.com')} }>
            <Text style = {s2.text_foot}>Released </Text>
            </TouchableOpacity>
            
            </View>
        </View>    
        <View style={s2.cards}>
            <Image
              source={require('../../images/solo_levling.jpeg')}
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

    {/* dimensions */}

    <Text style={{fontSize:20}}>{height}</Text>
    <Text style={{fontSize:20}}>{width}</Text>
    <Text style={{fontSize:20}}>{fontScale}</Text>
    <Text style={{fontSize:20}}>{scale}</Text>

    {/* modal */}
    <View style={s2.main}>
        <Modal
            transparent={true}
            visible={modal}
            animationType='slide'
        >
            <View style={s2.supermodal}>
                <View style={s2.modalcontainer}>
                    <Text style={{fontSize:30}}> your modal is here </Text>
                    <Button title="close" onPress={()=>setmodal(false)}/>
                </View>
            </View>
        </Modal>
        <View style={s2.buttonview}>
            <Button title="click here" onPress={()=>setmodal(true)} ></Button>
        </View>
    </View>
    
    </>
    )
};

const s = StyleSheet.create({
    container :{
        flex :1,
        flexDirection : 'row',
        padding:6,
        
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
        textAlignVertical:'center',
        color : 'white',
        fontSize :20,
        fontWeight :'bold'
    }
});
const s2 = StyleSheet.create({
    container :{
        flex:1,
        flexDirection :'row',
        flexWrap:'wrap',
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
    link_button:{
        backgroundColor:'grey',
        alignSelf: 'flex-start',
        marginTop:10,
        paddingHorizontal: 10,
        paddingVertical: 5, 
        borderRadius: 5, 
    },
    card1 :{
        
    },

    // modal
    main:{
        flex:1
    },
    supermodal:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    modalcontainer:{
        backgroundColor:'lightblue',
        padding:30,
        borderRadius:15,
        elevation:6
         
    },
    buttonview:{
        flex:1,
        justifyContent:'flex-end'
    }
    
});

export default flex_scrollview;
