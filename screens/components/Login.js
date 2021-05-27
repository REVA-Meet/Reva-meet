import React from "react"; 
import { StyleSheet, Text, TextInput, ActivityIndicator , View, Button, TouchableOpacity,  } from "react-native";
import firebase from 'firebase'
import { AsyncStorage } from "react-native"


export default class Login extends React.Component {

  state = { email: "", password: "", errorMessage: null, loading: false };
  handleLogin = () => {
    const { email, password } = this.state;



    firebase
    .auth()
    .onAuthStateChanged(() => {
      this.setState({pending: true})

    }
    );


    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        // AsyncStorage.setItem("key", "I like to save it.");
        this.props.navigation.navigate('Home')
      })
      .catch(
        error => this.setState({ errorMessage: error.message })
        );
  };

    render() {   

      if(this.state.pending) {
        return(
        <View style={styles.loadingContainer, styles.horizontal}>
          <ActivityIndicator size="large" color="#E57622"/>
        </View>
        )
      }

    return (
      <View>
      <View style={styles.container}>
        </View>
      <View style={styles.newcontainer}>
          <Text style={styles.logo}>Welcome</Text>
          <Text style={styles.instruction}>Sign in to your account</Text>
          <View style={styles.inputViewEmail} >
            <TextInput  
              style={styles.inputText}
              placeholder="Email" 
              placeholderTextColor="#003f5c"
              onChangeText={text => this.setState({email:text})}/>
          </View>
          <View style={styles.inputViewPassword} >
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
          <View style={styles.loginBtn}>
            <Text style={styles.loginText} onPress={this.handleLogin}>Sign In</Text>
          </View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({

  container: {
    position: 'absolute',
    width: 510,
    height: 580,
    left: -45,
    top: 180,
    backgroundColor: '#031c33',
    borderTopLeftRadius: 250,
    borderTopRightRadius: 270,
  },
newcontainer: {
  marginTop: 60,
  justifyContent: "center",
  alignItems: "center",
},
  logo:{
    fontWeight:"bold",
    fontSize: 32,
  },
  instruction:{
    fontWeight:"bold",
    fontSize: 16,
    color:"#000000",
    marginBottom: 180,
  },
  inputViewEmail:{
    width:"80%",
    backgroundColor:"#ffffff",
    borderRadius:25,
    height:50,
    marginBottom: 15,
    justifyContent:"center",
    padding:20,
  },
  inputViewPassword: {
    width:"80%",
    backgroundColor:"#ffffff",
    borderRadius:25,
    height:50,
    marginBottom: 4,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"black"
  },
  forgot:{
    color:"#EDA772",
    fontSize: 13,
    textAlign: 'right',
    position: 'absolute',
    marginLeft: 50,
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#EDA772",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop: 100,
    marginBottom:10,
    elevation: 3,
  },
  loginText:{
    fontSize: 18,
    fontWeight: 'bold',
  },
  horizontal: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    padding: 10
  }
});