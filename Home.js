
import React, { Component } from 'react';
import { AppRegistry, View, Image, StyleSheet, Text, FlatList, Dimensions, ScrollView, TouchableOpacity} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

let users=require('./data.json');
let {width:screenwidth,height:screenHeight}=Dimensions.get('window')


class Home extends Component {

  renderImages=item=>{
    const image= item.item.url;
   
    return(
      <View style={{flex:1,padding:5, flexDirection:'column'}}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>   
       <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('ZoomImage')}>
       <Image source={{uri:image}}
          style={{
            height:screenHeight / 3,
            width:screenwidth / 3,
            
          }}
          />         
          <Text>{item.item.title}</Text>
       </TouchableWithoutFeedback>
           
        
        </ScrollView>
        
      </View>
    );
  }
  render() {
    return (
      <View style={styles.container}>
       <FlatList
      horizontal={false}
      data={users}
      keyExtractor={(item,index)=>index.toString()}
      renderItem={this.renderImages}
      numColumns={3}                  
      />
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
});
