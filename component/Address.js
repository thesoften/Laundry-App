import { View, Text ,StyleSheet,Image} from 'react-native'
// import DashedBorder from 'react-native-dashed-border';
const Address = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.addressText}>Address</Text>
      <View style={styles.addressBorderWrapper}>
            <View style={styles.imgWrapper}>
                <Image style={styles.img} source={require('../assets/record.png')}/>
                <View style={styles.dottedWrapper}></View>
                <Image style={styles.img} source={require('../assets/location.png')}/>
            </View>
            <View style={styles.addressWrapper}>
              <View>
                <Text style={styles.pickupText}>Pickup Address</Text>
                <Text style={styles.pickupAddressText}>CT7B The Sparks, KDT Duong Noi, Str. Ha Dong,</Text>
                <Text style={styles.pickupAddressText}>Ha Noi</Text>
              </View>
              <View style={styles.midLineWrapper}></View>
              <View>
                <Text style={styles.pickupText}>Delivery Address</Text>
                <Text style={styles.pickupAddressText}>CT7B The Sparks, KDT Duong Noi, Str. Ha Dong,</Text>
                <Text style={styles.pickupAddressText}>Ha Noi</Text>
              </View>
        </View>
      </View>
    </View>
  )
}
export default Address

const styles = StyleSheet.create({
    container:{
        // paddingLeft:20,
        paddingTop:10,
        flex:1,
        paddingLeft:20,
        paddingRight:20
    },
    addressText:{
        fontSize:17,
        fontWeight: '600',
        color: 'rgb(106, 76, 143)',
    },
    addressBorderWrapper:{
        // width:375,
        width:'100%',
        height:160,
        borderWidth:2,
        marginTop:5,
        flexDirection:'row',
        // justifyContent:'center'
        alignItems:'center',
        borderColor:'rgb(234, 235, 237)',
        borderRadius:10
    },
    imgWrapper:{
        // flexDirection:'column',
        alignItems:'center',
        // flexDirection:'column'
        marginLeft:10
    },
    dottedWrapper:{
        // borderLeftWidth:1,
        borderWidth:1,
        height:50,
        position:'relative',
        borderStyle:'dashed',
        borderColor:'black' ,
    },
    img:{
      width:20,
      height:20
    },
    addressWrapper:{
      marginLeft:20
    },
    pickupText:{
      fontSize:15,
    fontWeight: '700',
    color: 'rgb(106, 76, 143)',
    marginTop:5
    },
    pickupAddressText:{
      color:'grey', 
      marginTop:2
    },
    midLineWrapper:{
      borderWidth:1,
      borderColor:'rgb(234, 235, 237)',
      marginTop:5
    }
})