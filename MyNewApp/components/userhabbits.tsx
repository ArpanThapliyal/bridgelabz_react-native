import { View,Text, Button, StyleSheet} from "react-native"

const userhabbits =()=>{
    const popup=()=>{
            console.warn("warning!");
    };
    return(
        <View style = {[style.bg,style.mg]}>
            <Text style = {style.textdec}>he play's football</Text>
            <Text style = {style.textdec}>he play's vollyball</Text>
            <Button title="popup" onPress={popup} />
        </View>
    )
}
const style = StyleSheet.create({
    textdec : {color : "red",fontSize : 40,margin:2},
    bg : {backgroundColor : "lightyellow"},
    mg : {margin:20,
        padding:8,
        borderWidth :2,
        borderColor:"grey",
        borderRadius:10,
        elevation:30,
        
    },
  })

export default userhabbits;