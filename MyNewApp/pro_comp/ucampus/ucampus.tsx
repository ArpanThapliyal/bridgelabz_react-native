import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Body from './body'

const ucampus = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={style.main}>
          <View style={style.firstcontainer}>
            <View style={[style.subfirstcontainer, style.direction]}>
              <View>
                <View style={style.direction}>
                  <TouchableOpacity>
                    <Icon
                      name="near-me"
                      size={20}
                      style={[style.nearme, style.color]}
                    />
                  </TouchableOpacity>
                  <Text style={[style.color, style.firsttxt]}>
                    Campus Punjab
                  </Text>
                  <TouchableOpacity>
                    <Icon
                      name="keyboard-arrow-down"
                      size={28}
                      style={[style.keyboardarrowdown, style.color]}
                    />
                  </TouchableOpacity>
                </View>
                <View>
                  <Text style={style.color}>Chitkara University, Punjab</Text>
                </View>
              </View>
              <View style={[style.moneycontainer, style.direction]}>
                <View>
                  <Text
                    style={{
                      fontSize: 12,
                      backgroundColor: 'white',
                      paddingHorizontal: 6,
                      paddingVertical: 2,
                      borderRadius: 100,
                    }}>
                    ₹
                  </Text>
                </View>
                <View>
                  <Text style={[style.color, {fontSize: 13}]}> Umoney</Text>
                  <Text
                    style={[style.color, {fontWeight: 'bold', fontSize: 14}]}>     ₹0</Text>
                </View>
              </View>
            </View>
          </View>

          <Icon name="search" size={28} style={style.search} />
          <View style={style.secondcontainer}>
            <TextInput
              style={style.textinput}
              placeholder="Search food..."
              placeholderTextColor={'grey'}
              selectionColor={'red'}
            />
            {/* body */}
            
            <View >
              {/* component */}
               <Body/>
            </View>
            
          </View>
        </View>
        </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  main: {
    
  },
  firstcontainer: {
    marginHorizontal: 10,
    marginVertical: 25,
  },
  subfirstcontainer: {},
  direction: {flexDirection: 'row'},
  color: {
    color: 'white',
  },
  nearme: {},
  keyboardarrowdown: {
    marginTop: -2,
  },
  firsttxt: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  moneycontainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'white',
    marginLeft: 110,
    padding: 4,
    borderRadius: 30,
    alignItems: 'center',
  },
  search: {
    zIndex: 1,
    elevation: 5,
    color: 'grey',
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: -23,
  },
  secondcontainer: {
    backgroundColor: 'white',
    height: 820,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  textinput: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 40,
    backgroundColor: 'white',
    color: 'red',
    fontWeight: 'bold',
    elevation: 6,
    margin: 10,
    marginTop: -15,
    paddingHorizontal: 40,
    height: 52,
  },
});

export default ucampus;
