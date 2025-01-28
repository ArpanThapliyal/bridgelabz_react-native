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
  Image,
} from 'react-native';
 
const start = ()=>{
    const[txt,settxt] = useState('MOVE TO BAG');
    return(
        <SafeAreaView>
            <View style={style.container}>

                {/* cards */}
                <View style={style.cardcontainer}>
                    <View style={style.cards}>
                    <TouchableOpacity >
                    <Image
                    src='https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/11261278/2023/4/21/ca7de421-3d24-4c1b-a922-5641a2f062f61682057816466-HRX-by-Hrithik-Roshan-Men-White-Solid-Gamescape-Sneakers-929-1.jpg'
                    style = {style.img}
                    />
                        <View>
                            <Text style = {style.text1}>Puma</Text>
                            <View style = {style.textdesg}>
                            <Text style = {[style.text2, style.price]}>$100</Text>
                            <Text style = {[style.text2, style.offer]}>(30% OFF)</Text>
                            </View>
                        </View>
                        </TouchableOpacity>
                        
                        <View>
                            <TouchableOpacity onPress={()=>{settxt('MOVED!')}}>
                                <Text style = {style.buytext}>{txt}</Text>
                            </TouchableOpacity>
                        </View>  
                        <View style={style.ratingcontainer}>
                            <Text style={style.rating}>4.2</Text>
                            <Text style={style.review}>1.1k</Text>
                        </View>
                        </View>
                    
                </View>
            </View>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    container :{
        marginTop:8,
    },
    cardcontainer:{
        flexDirection:'row'
    },
    cards:{
        borderBlockColor:'black',
        borderWidth :0.3,
        margin:10,
        elevation:6,
        backgroundColor:'white',
        borderRadius:6
    },
    img:{
        height :220,
        width:180,
        borderTopLeftRadius:6,
        borderTopRightRadius:6
    },
    text1:{
        fontSize :21,
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
    buytext:{
        flex:1,
        alignSelf:'center',
        fontSize:17,
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
    ratingcontainer:{},
    rating:{},
    review:{}
    
});

export default start;