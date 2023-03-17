import { useEffect } from 'react'
import { View, Text ,StyleSheet,Image} from 'react-native'

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(()=>{
      navigation.replace('Order List')
    },3000)
  },[])
  return (
    <View style={styles.container}>
      <Image source={require('../assets/SplashScrn.png')}/>
    </View>
  )
}
export default Splash

let styles = StyleSheet.create({
    container:{
       flex:1,
       backgroundColor:'rgb(206, 21, 103)',
       alignItems:'center',
       justifyContent:'center'
    },
})