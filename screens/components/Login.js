import React from "react"; 
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity,  } from "react-native";
import * as firebase from "firebase";
import { AsyncStorage } from "react-native";

export default class Login extends React.Component {
  state = { email: "", password: "", errorMessage: null };
  handleLogin = () => {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        // AsyncStorage.setItem("key", "I like to save it.");
        this.props.navigation.navigate("Main");
      })
      .catch(error => this.setState({ errorMessage: error.message }));
  };
  render(){
    return (
      <View>
      <View style={styles.container}>
        </View>
        <View style={styles.newcontainer}>
        <Text style={styles.logo}>Welcome</Text>
        <Text style={styles.instruction}>Sign in to your account</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email" 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({email:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password" 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password:text})}/>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText} onPress={this.handleLogin}>Sign In</Text>
        </TouchableOpacity>
        </View>
        
  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 510,
    height: 510,
    left: -54,
    top: -44,
    backgroundColor: '#031c33',
    borderBottomLeftRadius: 270,
    borderBottomRightRadius: 300,
  },
newcontainer: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
},

  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#000000",
  },
  instruction:{
    fontWeight:"normal",
    fontSize:23,
    color:"#000000",
    marginBottom: 50,
  },
  inputView:{
    width:"80%",
    backgroundColor:"#ffffff",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"black"
  },
  forgot:{
    color:"#FFA159",
    fontSize:15
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#FFA159",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  }
});