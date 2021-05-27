import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import categories from '../SearchCategories.json';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  renderCategories = ({ item }) => {
    return (
      
      <View >
      
        <View style= {styles.imagesRow}>
          
        <Image
          style={styles.images}
          resizeMode= "contain"
          source= {{ uri: item.categoriesPoster}}
        />
        <Text style={styles.categoriesTextTitle}>
          {item.categoriesTitle}
        </Text>

        </View>
      
        </View>  
    )
  }

  render(){ 

    return(
      <View style={styles.container}>

        <TextInput  
              style={styles.inputText}
              placeholder="Search"
              placeholderTextColor="#003f5c"
              onChangeText={text => this.setState({search:text})}/>
          
        <View style={{
          left: 26,
          top: 72,
          position: 'absolute'
        }}> 
          <Ionicons name="md-search" size={22} color="#3E5163"/>
        </View>

        <View style={{
          right: 29,
          top: 72,
          position: 'absolute',
          elevation: 2
        }}>
        <SimpleLineIcons name="equalizer" size={20} color="#3E5163" />
           </View>
  


        <FlatList
          data={categories}
          renderItem={this.renderCategories}
          keyExtractor={item => item.id}
          contentContainerStyle={{paddingBottom: 200}}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
      </View>
    )

  }


}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30, 
  },
  categoriesTextTitle: {
    position: 'absolute', 
    fontSize: 20,
    top: 120,
    color: '#FFFFFF', 
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 30,
    marginRight: 20,
  },
  inputText:{
    backgroundColor:"#FFFFFF",
    borderRadius:40,
    height: 50,
    width: 355,
    justifyContent:"center",
    top: 60,
    marginBottom: 20,
    paddingLeft: 40,
  },
  imagesRow: {
    marginLeft: 15,
  },
  
  images:{
    width: 170,
    height: 150,
    right: 10,
    borderRadius: 18,
    resizeMode: 'cover',
    top: 70,
    marginBottom: 30,
  },
  
});