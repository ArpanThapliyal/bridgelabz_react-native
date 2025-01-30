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
                    <TouchableOpacity style={style.arrow}>  
                        <Icon name='arrow-back' size={24} style={style.search }/>          
                    </TouchableOpacity>
                    <View>
                    <Text style={style.htext}>Wishlist</Text>
                    <Text style={style.hsub}>18 items</Text>
                    </View>
                    <View style={style.desgicons}>
                    <TouchableOpacity >  
                        <Icon name='search' size={30} style={style.search }/>          
                    </TouchableOpacity>
                    <TouchableOpacity >  
                        <Icon name='shopping-bag' size={30} style={style.bag }/>          
                    </TouchableOpacity>
                    </View>
                </View>
                <View style={style.heading2}> 
                    <Scrolling/>
                </View>

                <View style={style.supercardcontainer}>
                    {/* cards */}
                    <View style={style.cardcontainer}>
                        <View style={style.cards}>
                        <TouchableOpacity >
                        <Image
                        src='https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/11261278/2023/4/21/ca7de421-3d24-4c1b-a922-5641a2f062f61682057816466-HRX-by-Hrithik-Roshan-Men-White-Solid-Gamescape-Sneakers-929-1.jpg'
                        style = {style.img}
                        />
                        {/* Rating */}
                            <View style={style.ratingcontainer}>
                                <Text style={style.rating}>4.2 </Text>
                                <Text style={style.ratingstar}>★</Text>
                                <Text style={style.review}>1.1k</Text>
                            </View>
                            <TouchableOpacity>
                                <Icon name='cancel' size={28} style={style.cancel}/>
                            </TouchableOpacity>
                        </TouchableOpacity>    
                            {/* Text and Buy Button */}
                            <View>
                                <Text style = {style.text1}>Puma </Text>
                                <View style = {style.textdesg}>
                                <Text style = {[style.text2, style.price]}>₹2639  </Text>
                                <Text style={{ textDecorationLine: 'line-through', color: 'grey',fontSize:13 }}>₹4799</Text>
                                <Text style = {[style.text2, style.offer]}>(30% OFF)</Text>
                                </View>
                            </View>
                            
                            
                            <View>
                                <TouchableOpacity onPress={()=>{settxt('MOVED!')}}>
                                    <Text style = {style.buytext}>{txt}</Text>
                                </TouchableOpacity>
                            </View>  
                            </View>
                        
                    </View>
                   
                    {/* cards */}
                    <View style={style.cardcontainer}>
                        <View style={style.cards}>
                        <TouchableOpacity >
                        <Image
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCH_cBj_aDyGW0wH0NH66eGWVwA63Wjq0VqA&s'
                        style = {style.img}
                        />
                        {/* Rating */}
                            <View style={style.ratingcontainer}>
                                <Text style={style.rating}>4.2 </Text>
                                <Text style={style.ratingstar}>★</Text>
                                <Text style={style.review}>48.8k</Text>
                            </View>
                            <TouchableOpacity>
                                <Icon name='cancel' size={28} style={style.cancel}/>
                            </TouchableOpacity>
                        </TouchableOpacity>    
                            {/* Text and Buy Button */}
                            <View>
                                <Text style = {style.text1}>HRX by Hrithik</Text>
                                <View style = {style.textdesg}>
                                <Text style = {[style.text2, style.price]}>₹999  </Text>
                                <Text style={{ textDecorationLine: 'line-through', color: 'grey',fontSize:13 }}>₹2999</Text>
                                <Text style = {[style.text2, style.offer]}>(Rs. 2000 OFF)</Text>
                                </View>
                            </View>
                             
                            <View>
                                <TouchableOpacity onPress={()=>{settxt('MOVED!')}}>
                                    <Text style = {style.buytext}>{txt}</Text>
                                </TouchableOpacity>
                            </View>  
                            </View>
                        
                    </View>
                    {/* cards */}
                    <View style={style.cardcontainer}>
                        <View style={style.cards}>
                        <TouchableOpacity >
                        <Image
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPh1LN53VuJOF480Wu-WgIYtksL5bHo4XtFg&s'
                        style = {style.img}
                        />
                        {/* Rating */}
                            <View style={style.ratingcontainer}>
                                <Text style={style.rating}>4.3 </Text>
                                <Text style={style.ratingstar}>★</Text>
                                <Text style={style.review}>48</Text>
                            </View>
                            <TouchableOpacity>
                                <Icon name='cancel' size={28} style={style.cancel}/>
                            </TouchableOpacity>
                        </TouchableOpacity>    
                            {/* Text and Buy Button */}
                            <View>
                                <Text style = {style.text1}>Crazymonk</Text>
                                <View style = {style.textdesg}>
                                <Text style = {[style.text2, style.price]}>₹699  </Text>
                                <Text style={{ textDecorationLine: 'line-through', color: 'grey',fontSize:13 }}>₹1499</Text>
                                <Text style = {[style.text2, style.offer]}>(Rs. 800 OFF)</Text>
                                </View>
                            </View>
                            
                            
                            <View>
                                <TouchableOpacity onPress={()=>{settxt('MOVED!')}}>
                                    <Text style = {style.buytext}>{txt}</Text>
                                </TouchableOpacity>
                            </View>  
                            </View>
                        
                    </View>
                   
                    {/* cards */}
                    <View style={style.cardcontainer}>
                        <View style={style.cards}>
                        <TouchableOpacity >
                        <Image
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoGZD__oH6d8t7kSO1uJ_b2UaNiR-zFgDpdg&s'
                        style = {style.img}
                        />
                        {/* Rating */}
                            <View style={style.ratingcontainer}>
                                <Text style={style.rating}>4.5 </Text>
                                <Text style={style.ratingstar}>★</Text>
                                <Text style={style.review}>59</Text>
                            </View>
                            <TouchableOpacity>
                                <Icon name='cancel' size={28} style={style.cancel}/>
                            </TouchableOpacity>
                        </TouchableOpacity>    
                            {/* Text and Buy Button */}
                            <View>
                                <Text style = {style.text1}>The Souled Store</Text>
                                <View style = {style.textdesg}>
                                <Text style = {[style.text2, style.price]}>₹899  </Text>
                                <Text style={{ textDecorationLine: 'line-through', color: 'grey',fontSize:13 }}>₹1499</Text>
                                <Text style = {[style.text2, style.offer]}>(40% OFF)</Text>
                                </View>
                            </View>
                            
                            
                            <View>
                                <TouchableOpacity onPress={()=>{settxt('MOVED!')}}>
                                    <Text style = {style.buytext}>{txt}</Text>
                                </TouchableOpacity>
                            </View>  
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
    heading1:{
        padding:5,
        flexDirection:'row'
    },
    arrow:{
        marginTop:8
    },
    htext:{
        fontSize :15,
        fontWeight:'bold'
    },
    hsub:{
        fontSize :12,
        color:'grey'
    },
    desgicons:{
        flexDirection:'row',
        marginLeft:210,   
    },
    bag:{ },
    search:{
        marginRight:11,
    },
    heading2:{},
    supercardcontainer: {
        flexDirection: 'row', // Arrange items in a row
        flexWrap: 'wrap', // Allow items to wrap to the next row
        marginHorizontal: 10,    
        justifyContent: 'space-between', // Space items evenly
    },
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

export default start;