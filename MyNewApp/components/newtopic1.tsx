import React, { useRef, useState } from "react";
import { Text, View, TextInput, StyleSheet, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const NewTopic1 = () => {
  //name
  const [text, setText] = useState(""); // State for submitted name
  const [sub, newSub] = useState("");  // State for name input
  //password
  const [ptext, psetText] = useState(""); // State for submitted password
  const [psub, pnewSub] = useState("");  // State for password input
  //eye for password
  const [eye,seteye] = useState(false);
  //feedback
  const [feed,setfeed] = useState('');
  const [fsub,fnewSub] = useState('');
  //phone
  const [phone,setphone] = useState('');
  const [phSub,phnewSub] = useState('');


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
        secureTextEntry ={eye? false:true}
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
      <TouchableOpacity onPress={()=>{seteye(!eye)}}>
      <MaterialCommunityIcons
            style={styles.eye}
            name={eye?"eye":"eye-remove"}
            size={30}
          
          />
      </TouchableOpacity>
      </View>
      <Text style={styles.textdec}>give feedback :</Text>
      <TextInput
      style={styles.text}
      selectionColor={'red'}
      placeholder="Type your feedback "
      value={feed}
      multiline
      numberOfLines={6}
      maxLength={10}
      onChangeText={fnewSub}
      onSubmitEditing={()=>{
        refrence3.current?.focus();
        setfeed(fsub);
        fnewSub(''); 
      }}
      ref={refrence2}
      />
      <Text style={styles.textdec}>phone no. :</Text>
      <TextInput
      style={styles.text}
      selectionColor={'red'}
      placeholder="phone number"
      value={phone}
      keyboardType="numeric"
      maxLength={10}
      onChangeText={phnewSub}
      onSubmitEditing={()=>{
        setphone(phSub);
        phnewSub('');
      }}
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
    marginTop:-60,
    marginLeft : 320
  }
});

export default NewTopic1;
