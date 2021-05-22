import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
 <Text style={styles.logo}>Explore</Text>
        <View style={styles.inputView} >  
        </View>
<View>
    {/* first row */}
    <View style={styles.numbersRow}>
          <Text style={styles.numberText}><Image
        style={styles.images}
        
        source= {{ uri: "https://images.unsplash.com/photo-1589254066213-a0c9dc853511?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"}}
/></Text>
          <Text style={styles.numberText}><Image
        style={styles.images}
        
        source= {{ uri: "https://images.unsplash.com/photo-1589254066213-a0c9dc853511?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"}}
/></Text>
    </View>
    {/* second row */}
    <View style={styles.numbersRow}>
          <Text style={styles.numberText}><Image
        style={styles.images}
        
        source= {{ uri: "https://images.unsplash.com/photo-1589254066213-a0c9dc853511?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"}}
/></Text>
          <Text style={styles.numberText}><Image
        style={styles.images}
        
        source= {{ uri: "https://images.unsplash.com/photo-1589254066213-a0c9dc853511?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"}}
/></Text>
    </View>
    <View style={styles.numbersRow}>
          <Text style={styles.numberText}><Image
        style={styles.images}
        
        source= {{ uri: "https://images.unsplash.com/photo-1589254066213-a0c9dc853511?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"}}
/></Text>
          <Text style={styles.numberText}><Image
        style={styles.images}
        
        source= {{ uri: "https://images.unsplash.com/photo-1589254066213-a0c9dc853511?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"}}
/></Text>
    </View>
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
    flex: 1
  },
  logo: {
    fontSize: 40,
    fontFamily: 'RougeScript_400Regular',
    right: 10,
    color: '#031C34',
    top: 50,
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
  top: -163
},
inputText:{
  height:50,
  color:"white"
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
  top: -800,
  right: -270
},
  numbersRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around', // to adjust the spacing
    marginTop: 30
    
  },
  numberText: {
    flex: 0.4, // 40% of the parent
    paddingVertical: 0, // 30px padding from top and bottom makes it vertically centered
    borderRadius: 8,
    textAlign: 'center', // horizontally centered
   
    color: '#fff',
    fontSize: 30,
  },
  imagesRow: {
    marginLeft:17
  },
  
  images:{
    flex:2,
    width: 100,
    height: 120,
    right: 10,
    borderRadius: 15,
    top: 10,
   
  },  
});