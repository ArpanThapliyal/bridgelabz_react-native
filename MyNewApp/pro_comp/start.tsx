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
 
import Scrolling from './scrolling';
import Icon from 'react-native-vector-icons/MaterialIcons';
const start = ()=>{
    const[txt,settxt] = useState('MOVE TO BAG');
    return(
        <SafeAreaView>
            <View style={style.container}>
                <View style={style.heading1}>
                    <View>
                    <Text style={style.htext}>Wishlist</Text>
                    <Text style={style.hsub}>18 items</Text>
                    </View>
                    <View style={style.desgicons}>
                    <TouchableOpacity >  
                        <Icon name='search' size={30} style={style.search }/>          
                    </TouchableOpacity>
                    <TouchableOpacity >  
                        <Icon name='shopping-cart' size={30} style={style.search }/>          
                    </TouchableOpacity>
                    </View>
                </View>
                <View style={style.heading2}> 
                    <Scrolling/>
                </View>

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
                        </View>
                    
                </View>
            </View>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    container :{},
    heading1:{
        marginVertical :10,
        padding:10,
        flexDirection:'row'
    },
    htext:{
        fontSize :18
    },
    hsub:{
        fontSize :10,
    },
    desgicons:{
        flexDirection:'row',
        marginLeft:250,
        
    },
    heading2:{},
    cardcontainer:{
        flexDirection:'row'
    },
    cards:{
        borderBlockColor:'black',
        borderWidth :0.51,
        margin:12,
        elevation:6,
        backgroundColor:'white',
        borderRadius:6
    },
    img:{
        height :250,
        width:200,
        borderTopLeftRadius:6,
        borderTopRightRadius:6
    },
    text1:{
        fontSize :24,
        marginStart :5,
        color:'grey'
    },
    textdesg:{
        flexDirection:'row',
        marginTop:5,
        marginStart :2,
        
        
    },
    text2:{
        marginStart :6  
    },
    price :{
        fontWeight:'bold'
    },
    offer :{
        color :'red',
        
    },
    buytext:{
        fontSize:20,
        margin:20,
        padding:6,
        marginTop :30,
        color:'red',
        backgroundColor:'white',
        fontWeight:'bold',
        elevation:4,
        borderWidth:0.5,
    },
    search:{}
    
});

export default start;