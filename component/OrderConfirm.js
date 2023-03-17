import { View, Text ,Image,StyleSheet} from 'react-native'

const OrderConfirm = () => {
  return (
    <View style={styles.container}>
        <View style={styles.imgWrapper}>
      <Image style={{width:90,height:90}} source={require('../assets/delivery-truck.png')}/>
      </View>
      <Text style={styles.thanksText}>Thanks for choosing Us!</Text>
      <Text style={styles.confirmText}>Your pickup has been confirmed</Text>
    </View>
  )
}
export default OrderConfirm

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center'
    },
    imgWrapper:{
        backgroundColor:'rgb(244, 247, 250)',
        padding:10,
        borderRadius:50
    },
    thanksText:{
        fontSize:17,
        fontWeight:'600',
        marginTop:5,
        color: 'rgb(106, 76, 143)',
    },
    confirmText:{
        fontSize:17,
        // marginTop:2,
        fontWeight:'500',
        color:'grey'
    }
})