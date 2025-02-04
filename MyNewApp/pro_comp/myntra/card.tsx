import React,{useState} from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons';

const card = (prop: { item: any; })=>{
    const item = prop.item;
    const[txt,settxt] = useState('MOVE TO BAG');
    return(
        <View style={style.cardcontainer}>
        <View style={style.cards}>
        <TouchableOpacity >
        <Image
        src={item.img}
        style = {style.img}
        />
        {/* Rating */}
            <View style={style.ratingcontainer}>
                <Text style={style.rating}>{item.rating} </Text>
                <Text style={style.ratingstar}>★</Text>
                <Text style={style.review}>{item.review}</Text>
            </View>
            <TouchableOpacity>
                <Icon name='cancel' size={28} style={style.cancel}/>
            </TouchableOpacity>
        </TouchableOpacity>    
            {/* Text and Buy Button */}
            <View>
                <Text style = {style.text1}>{item.name}</Text>
                <View style = {style.textdesg}>
                    <Text style = {[style.text2, style.price]}>{item.price}  </Text>
                    <Text style={{ textDecorationLine: 'line-through', color: 'grey',fontSize:13 }}>{item.prev_price}</Text>
                    <Text style = {[style.text2, style.offer]}>{item.off}</Text>
                </View>
                    <Text style = {[style.text2,style.limit]}>{item.limited}</Text>
            </View>
             
            <View>
                <TouchableOpacity onPress={()=>{settxt('MOVED!')}}>
                    <Text style = {style.buytext}>{txt}</Text>
                </TouchableOpacity>
            </View>  
            </View>
        
    </View>
    );
};

const style = StyleSheet.create({
    
    cardcontainer: {
        width: '48%', // Make each card take up 48% of the width for spacing
        marginVertical: 6, // Add spacing between rows
    },
    cards: {
        borderBlockColor: 'black',
        borderWidth: 0.18,
        elevation: 6,
        backgroundColor: 'white',
        borderRadius: 6,
    },
    img:{
        height :220,
        width: '100%',
        borderTopLeftRadius:6,
        borderTopRightRadius:6
    },
    text1:{
        fontSize :18,
        marginStart :5,
        color:'grey'
    },
    textdesg:{
        flexDirection:'row',
        marginTop:4,
        marginStart :1,   
    },
    text2:{
        marginStart :6  
    },
    price :{
        fontWeight:'bold',
        fontSize:13 
    },
    offer :{
        color :'red',
        fontSize:13   
    },
    limit:{
        color:'#FF4848',
        fontSize:12,
        fontWeight:'bold',
        marginTop:3
    },
    buytext:{
        flex:1,
        alignSelf:'center',
        fontSize:16,
        margin:18,
        padding:6,
        marginTop :22,
        color:'red',
        backgroundColor:'white',
        fontWeight:'bold',
        elevation:6,
        // shadowOffset : {
        //     width:1,
        //     height:1
        // },
        shadowColor:'transparent',
        // shadowOpacity:0.4,
        // shadowRadius:10,
        borderWidth:0.2,
        borderRadius:4,
    },
    ratingcontainer: {
        position: 'absolute', // Position it absolutely within the parent
        bottom: 8, // Distance from the bottom of the image
        left: 8, // Distance from the left of the image
        flexDirection: 'row', // Arrange rating and review horizontally
        alignItems: 'center', // Center items vertically
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background for better visibility
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12, // Rounded edges
    },
    rating: {
        fontSize: 12,
        fontWeight:'bold',
        color: 'black', // White text for contrast
        marginRight: 4,
    },
    ratingstar:{
        fontSize: 9,
        fontWeight:'bold',
        color: 'green', // White text for contrast
        marginRight: 4,
        marginLeft:-4
    },
    review: {
        fontSize: 12,
        fontWeight:'bold',
        color: 'black',
        borderLeftWidth: 1, // Divider between rating and review
        borderLeftColor: 'grey',
        paddingLeft: 4,
    },
    cancel:{
        position: 'absolute', // Position it absolutely within the parent
        bottom: 185, // Distance from the bottom of the image
        left: 142, // Distance from the left of the image
        flexDirection: 'row', // Arrange rating and review horizontally
        alignItems: 'center', // Center items vertically
        color: 'rgba(255, 255, 255, 0.7)', // Semi-transparent background for better visibility
        borderRadius: 12, // Rounded edges
        elevation:35
    }
    
    
});

export default card;