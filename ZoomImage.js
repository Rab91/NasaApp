import React from 'react'
import { View, Dimensions, Animated,TouchableOpacity, TouchableWithoutFeedback} from 'react-native'
import { PinchGestureHandler, State, TapGestureHandler } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window')

const ZoomImage = ({image}) => {
  const navigation = useNavigation();

  scale = new Animated.Value(1)

  onZoomEvent = Animated.event(
    [
      {
        nativeEvent: { scale: this.scale }
      }
    ],
    {
      useNativeDriver: true
    }
  )

  onZoomStateChange = event => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      Animated.spring(this.scale, {
        toValue: 1,
        useNativeDriver: true
      }).start()
    }
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <PinchGestureHandler
        onGestureEvent={this.onZoomEvent}
        onHandlerStateChange={this.onZoomStateChange}>

         <Animated.View>
          <TouchableWithoutFeedback onPress={() => {navigation.goBack()}}>
          <Animated.Image
          source={require('./data.json')}
          style={{
            width: width,
            height: 400,
            transform: [{ scale: this.scale }]
          }}
          resizeMode='contain'
        />
          </TouchableWithoutFeedback>
         
         </Animated.View>
       
      </PinchGestureHandler>
    </View>
  )
}

export default ZoomImage