import React, { useRef, useState } from "react";
import { Text, View, TextInput, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'; 
const NewTopic1 = () => {
  //name
  const [text, setText] = useState(""); // State for submitted name
  const [sub, newSub] = useState("");  // State for name input
  //password
  const [ptext, psetText] = useState(""); // State for submitted password
  const [psub, pnewSub] = useState("");  // State for password input
  //eye for password
  const [peye,seteye] = useState(false);
  //phone
  const [phone,setphone] = useState('');
  const [phSub,phnewSub] = useState('');
  //feedback
  const [feed,setfeed] = useState('');


  const refrence = useRef<TextInput>(null); // Ref for focusing password input
  const refrence2 = useRef<TextInput>(null); // Ref for focusing password input
  const refrence3 = useRef<TextInput>(null); // Ref for focusing password input

  return (
    <View style={styles.container}>
      <Text style={styles.dec}>Enter your details :</Text>
      <Text style={styles.textdec}>Set name: {sub ||'guest!'}</Text>

      <TextInput
        selectionColor='red'
        // cursorColor={"red"}
        style={styles.text}
        placeholder="Type your name here"
        value={sub}
        returnKeyType="next"
        editable
        onChangeText={newSub}
        onSubmitEditing={() => {
          refrence.current?.focus(); // Ensure the ref exists
          setText(sub);
          newSub("");
        }}
      />

      <Text style={styles.textdec}>Set password: {psub ?"*****" : ""}</Text>
      <View>
      <TextInput
        style={styles.text}
        selectionColor={'red'}
        placeholder=" password "
        secureTextEntry ={peye? false:true}
        value={psub}
        onChangeText={pnewSub}
        onSubmitEditing={() => {
          refrence2.current?.focus()
          psetText(psub);
          pnewSub("");
        }}
        ref={refrence}
      />
      {/* eye */}
      <TouchableOpacity onPress={()=>{seteye(!peye)}}>
       <Icon
            style={styles.eye}
            name= {peye ? "eye" : "eye-slash"}
            size={24}
          />
      </TouchableOpacity>
      </View>
      
      <Text style={styles.textdec}>phone no. :</Text>
      <TextInput
      style={styles.text}
      selectionColor={'red'}
      placeholder="phone number"
      value={phSub}
      keyboardType="numeric"
      maxLength={10}
      onChangeText={phnewSub}
      onSubmitEditing={()=>{
        refrence3.current?.focus();
        setphone(phSub);
        phnewSub('');
      }}
      ref={refrence2}
      />
      <Text style={styles.textdec}>give feedback :</Text>
      <TextInput
      style={styles.text}
      selectionColor={'red'}
      placeholder="Type your feedback "
      value={feed}
      multiline
      numberOfLines={5}
      maxLength={30}
      onChangeText={setfeed}
      ref={refrence3}
      />

      <Text style={styles.textdec}>Your name is: {text}</Text>
      <Text style={styles.textdec}>Your password is: {ptext ? "*****" : ""}</Text>
      <Text style={styles.textdec}>your feedback: {feed}</Text>
      <Text style={styles.textdec}>your mob. no. {phone}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 6,
  },
  text: {
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 10,
    margin: 10,
    minHeight: 50,
    backgroundColor: "skyblue",
    paddingHorizontal: 8,
    
  },
  textdec: {
    color: "red",
    fontSize: 25,
    marginVertical: 4,
  },
  dec: {
    color: "blue",
    fontSize: 30,
    textAlign: "center",
    marginVertical: 8,
  },
  eye : {
    color:'blue',
    marginTop:-50,
    marginLeft : 325
  }
});

export default NewTopic1;
