import React,{useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  RefreshControl
} from 'react-native';
 
import Scrolling from './scrolling';
import Card from './card';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DATA =[
    {
        id:'1',
        img:'https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/11261278/2023/4/21/ca7de421-3d24-4c1b-a922-5641a2f062f61682057816466-HRX-by-Hrithik-Roshan-Men-White-Solid-Gamescape-Sneakers-929-1.jpg',
        rating:'4.2', 
        review:'1.1k',
        name:'Puma',
        price:'₹2639',
        prev_price:'₹4799',
        off:'(30% OFF)',

    },
    {
        id:'2',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCH_cBj_aDyGW0wH0NH66eGWVwA63Wjq0VqA&s',
        rating:'4.2', 
        review:'48.8k',
        name:'HRX by Hrithik',
        price:'₹999',
        prev_price:'₹2999',
        off:'(Rs. 2000 OFF)',

    },
    {
        id:'3',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPh1LN53VuJOF480Wu-WgIYtksL5bHo4XtFg&s',
        rating:'4.3', 
        review:'48',
        name:'Crazymonk',
        price:'₹699',
        prev_price:'₹1499',
        off:'(Rs. 800 OFF)',

    },
    {
        id:'4',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoGZD__oH6d8t7kSO1uJ_b2UaNiR-zFgDpdg&s',
        rating:'4.5', 
        review:'59',
        name:'The Souled Store',
        price:'₹899',
        prev_price:'₹1499',
        off:'(40% OFF)',
        limited:'Only Few Left!',

    },
    {
        id:'5',
        img:'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/24439310/2024/9/26/db521cb8-8b5b-4e98-bbe0-5f68f718b6321727353577527-Red-Tape-Men-Colourblocked-Lace-Ups-Sneakers-890172735357708-1.jpg',
        rating:'4.4', 
        review:'2.6k',
        name:'Red Tape',
        price:'₹1679',
        prev_price:'₹5599',
        off:'(70% OFF)',

    },
    {
        id:'6',
        img:'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/27462412/2024/9/26/1e397323-1acf-47d6-948b-d71afc2ee4681727354498635-Red-Tape-Men-Perforations-Lace-Up-Sneakers-1411727354498430-1.jpg',
        rating:'4.5', 
        review:'1.1k',
        name:'Red Tape',
        price:'₹1385',
        prev_price:'₹7699',
        off:'(82% OFF)',

    },
    {
        id:'7',
        img:'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/31072311/2024/10/23/277d19da-a34c-4d13-8e81-b3e96aca3ba01729623408183-Powerlook-Men-Pure-Cotton-Loose-Fit-Cargos-Trousers-66617296-1.jpg',
        rating:'4.5', 
        review:'9',
        name:'Powerlook',
        price:'₹1503',
        prev_price:'₹3199',
        off:'(53% OFF)',
        limited:'Only Few Left!'

    },
]
const start = ()=>{
   const [refreshing,setrefreshing] = useState(false);

   const onRefresh =()=>{
    setrefreshing(true);
    setTimeout(()=>{
        setrefreshing(false);
    },1200);
   }

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
                    <FlatList
                        data={DATA}
                        renderItem={({item})=> <Card item={item}/>}
                        keyExtractor={item=>item.id}
                        numColumns={2}
                        contentContainerStyle={style.supercardcontainer}
                        ListHeaderComponent={<Scrolling/>}
                        columnWrapperStyle={{
                            justifyContent : "space-between",
                        }}
                        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
                        // ItemSeparatorComponent={()=><View style={style.card}/>}
                        // horizontal={true}
                        // inverted
                        // initialScrollIndex={3}

                    />
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
    heading2:{
        marginBottom:185,
    },
    supercardcontainer: {
        marginHorizontal: 8,    
    },
    
    
});

export default start;