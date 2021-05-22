import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
export default class App extends React.Component {
  render(){
    return (
      
      <View style={styles.container}>
        <Text style={styles.logo}>Explore</Text>
        <View style={styles.inputView} > 
        <TextInput style={styles.inputText}
        onChangeText={text => this.setState({search:text})}/> 
        </View>
        <View style= {styles.imagesRow}>
          
        <Image
        style={styles.images}
        resizeMode= "contain"
        source= {{ uri: "https://images.unsplash.com/photo-1589254066213-a0c9dc853511?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"}}
/>
<Text style={{position: 'absolute', fontSize: 22, right: 220, top: 100, color: '#FFFFFF', textalign: 'center', fontWeight: 'bold' }}>Robotics</Text>
<Image
        style={styles.images}
        resizeMode= "contain"
        source= {{ uri: "https://lh3.googleusercontent.com/ze_cWSe3Y0rUcQuTD-H3TmzCBTJwkv2iUgVud8FzS-0EohQatCYPagCq1YINUm0-TC_IkQ=s94" }}
/>
<Text style={{position: 'absolute', fontSize: 22, left: 225, top: 100, color: '#FFFFFF', textalign: 'center', fontWeight: 'bold'}}>App </Text>
<Text style={{position: 'absolute', fontSize: 22, left: 175, top: 126, color: '#FFFFFF', fontWeight: 'bold'}}> Development</Text>

        </View>
        <View style= {styles.imagesRow}>
          
        <Image
        style={styles.images}
        resizeMode= "contain"
        source= {{ uri: "https://lh3.googleusercontent.com/fp5KTE6H8WtZcX3l7YW06xd-k2n8vBdi0-99n_Vt0XAEUn1XF77mmhouQl9Sfb4SH7qnZQ=s94"}}
/>
<Text style={{position: 'absolute', fontSize: 22, right: 243, top: 100, color: '#FFFFFF', textalign: 'center', fontWeight: 'bold' }}>VR</Text>
<Image
        style={styles.images}
        resizeMode= "contain"
        source= {{ uri: "https://lh3.googleusercontent.com/0_S2LT240Gh38U2Ibrj1g7qqgp4UAfQQasGO-hadtAHLf8aSj_p6SedadjjJaO4EEq-veQ=s94"}}
/>
<Text style={{position: 'absolute', fontSize: 22, right: 35, top: 100, color: '#FFFFFF', textalign: 'center', fontWeight: 'bold' }}>UI/UX</Text>
        </View>
        <View style= {styles.imagesRow}>
          
        <Image
        style={styles.images}
        resizeMode= "contain"
        source= {{ uri: "https://lh3.googleusercontent.com/uw1xAL_FcHAPTBiGM4bXE_8BKBN1AN_X5GdvsbuLOKryBVkgLoxNocffYZRPGzrS9zGu=s94"}}
/>
<Text style={{position: 'absolute', fontSize: 22, right: 220, top: 100, color: '#FFFFFF', textalign: 'center', fontWeight: 'bold' }}>Sports</Text>
<Image
        style={styles.images}
        resizeMode= "contain"
        source= {{ uri: "https://lh3.googleusercontent.com/W7cmVJB7_PijudnmMuS6txFsc3OWMJ9Lh9vasdzpmH3f_mWY_7ACNXtDbkBsKBRhqgqjjg=s94"}}
/>
<Text style={{position: 'absolute', fontSize: 22, right: 20, top: 100, color: '#FFFFFF', textalign: 'center', fontWeight: 'bold' }}>Robotics</Text>

        </View>
        
        <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Sign in</Text>
      </TouchableOpacity>
        </View>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
    
  },
    logo: {
      flex: 1,
      fontSize: 40,
      fontFamily: 'RougeScript_400Regular',
      right: 120,
      color: '#031C34',
      top: -50
  },
  inputView:{
    width:"80%",
    backgroundColor:"#E8E8E8",
    borderRadius:40,
    height:50,
    width:328,
    marginBottom:20,
    justifyContent:"center",
    padding:20,
    top: 35
  },
  inputText:{
    height:50,
    color:"black"
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#EDA772",
    width: 68,
    borderRadius:25,
    height:28,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10,
    fontSize: 16,
    fontWeight: 'bold',
    top: -607,
    left: 140
  },
  imagesRow: {
    marginLeft: 10,
    flexDirection: 'row',
    justifyContent:'space-around'
  },
  
  images:{
    width: 170,
    height: 150,
    right: 10,
    borderRadius: 15,
    marginLeft: 50,
    marginRight: 110,
    resizeMode: 'cover',
    top: 40,
    marginBottom: 10
  },
});