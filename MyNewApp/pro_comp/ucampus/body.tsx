import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
} from 'react-native';

import FastImage from 'react-native-fast-image';
import Scroll from './scroll';
import LinearGradient from 'react-native-linear-gradient';
import List from './list';
const body = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={style.whole}>
          <View style={style.firstcontainer}>
            <View style={style.content1}>
              <View>
                <Text style={{fontSize: 16, fontWeight: '500'}}>Gym </Text>
                <Text style={{fontSize: 12, color: 'grey'}}>
                  Get Membership{' '}
                </Text>
              </View>
              <FastImage
                source={require('../../images/pro_img/ufood/gym.gif')}
                style={style.img1}
              />
            </View>
            <View style={style.content1}>
              <View>
                <Text style={{fontSize: 16, fontWeight: '500'}}>Uniform</Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: 'grey',
                    flexWrap: 'wrap',
                    maxWidth: 100,
                  }}>
                  Professionalism starts here
                </Text>
              </View>
              <FastImage
                source={require('../../images/pro_img/ufood/uniform.gif')}
                style={style.img1}
              />
            </View>
          </View>

          {/* 2nd box */}
          <View style={style.secondcontainer}>
            <View style={style.content2}>
              <View>
                <View style={style.newly}>
                  <Text style={{fontSize: 12}}>⭐</Text>
                  <Text style={{fontSize: 12, color: 'green'}}>
                    {' '}
                    Newly Launched
                  </Text>
                </View>
                <Text style={{fontSize: 16, fontWeight: '500', marginTop: 6}}>
                  {' '}
                  Venky's
                </Text>
                <Text style={{fontSize: 12, color: 'grey', marginTop: 2}}>
                  {' '}
                  Venky's- CU punjab Rajpura
                </Text>
                <TouchableOpacity style={style.menubtn}>
                  <Text style={{fontSize: 16, color: 'white'}}> Full menu</Text>
                </TouchableOpacity>
              </View>
              <View>
                <FastImage
                  source={require('../../images/pro_img/ufood/store.gif')}
                  style={style.img2}
                />
              </View>
            </View>
            {/* scrolling component */}
            <View>
              <Scroll />
            </View>
          </View>
          {/* 3rd box heading */}
          <View>
            <View>
              <Text style={{fontSize: 24, color: '#666600', zIndex: 1}}>
                Collections
              </Text>
            </View>
            <LinearGradient
              colors={['rgba(102, 102, 0,0.8)', 'rgba(102, 102, 0,0.0)']} // Fades from black to transparent
              start={{x: 0, y: 0}} // Starts from left
              end={{x: 1, y: 0}} // Ends at right
              style={style.gradient}
            />
          </View>

          {/* 3rd box */}
          <View>
            <List/>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  whole: {},
  firstcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 14,
  },
  content1: {
    flexDirection: 'row',
    borderRadius: 16,
    borderWidth: 0.1,
    padding: 10,
    paddingBottom: 14,
    elevation: 10,
    shadowRadius: 100,
    shadowOpacity: 0.1,
    shadowColor: 'grey',
    backgroundColor: 'white',
    maxWidth: 180,
  },
  img1: {
    height: 80,
    width: 60,
    marginTop: -14,
  },
  secondcontainer: {
    borderWidth: 1,
    height: 300,
    margin: 14,
    borderRadius: 10,
    padding: 12,
    paddingTop: 22,
    borderColor: '#00b300',
    elevation: 4,
    shadowOpacity: 0.1,
    shadowRadius: 100,
    backgroundColor: 'white',
  },
  content2: {
    flexDirection: 'row',
  },
  newly: {
    flexDirection: 'row',
    borderWidth: 1,
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
    backgroundColor: '#ccffcc',
    borderColor: 'green',
  },
  menubtn: {
    backgroundColor: '#cc0000',
    borderColor: '#cc0000',
    borderWidth: 2,
    alignSelf: 'flex-start',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 4,
    elevation: 20,
    marginTop: 8,
  },
  img2: {
    height: 200,
    width: 200,
    marginTop: -40,
  },
  gradient: {
    position: 'absolute',
    bottom: 12,
    left: 130,
    right: 0,
    height: '8%',
  },
});

export default body;
