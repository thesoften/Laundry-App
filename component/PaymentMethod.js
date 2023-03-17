import { useState } from 'react'
import { View, Text,Image,StyleSheet ,TouchableOpacity} from 'react-native'

const PaymentMethod = () => {
  const [show,setShow] = useState(null)

  const paymentMethods = [
    {
      title: 'Pay Via Paypal',
      // icon: require('../assets/paypal.png'),
    },
    {
      title: 'Visa/Master Card',
      // icon: require('../assets/visa.png'),
    },
    {
      title: 'Pay Via Paypal',
      // icon: require('../assets/delivery.png'),
    },
  ]

  return (
    // <View style={styles.container}>
    //   <Text style={styles.paymentText}>Payment method</Text>
    //   <View style={styles.paymentWrapper}>
    //     <View style={styles.paypalWrapper}>
    //       <TouchableOpacity
    //        style={[styles.imageWrapper,{borderColor: index === show ? 'white' :'rgb(234, 235, 237)'}]}
    //        onPress={()=>setShow(index)}>
    //        {index === show && <Image source={require('../assets/correct.png')}/>}
    //       </TouchableOpacity>
    //       <View style={styles.paypalTextWrapper}>
    //       <Text style={styles.paypalText}>Pay Via Paypal</Text>
    //        <View style={styles.addaccountWrapper}>
    //         <Text style={[styles.addAccountText,{marginRight:5}]}>+</Text>
    //         <Text style={styles.addAccountText}>Add account</Text>
    //        </View>
    //       </View>
    //       <Image style={styles.img} source={require('../assets/paypal.png')}/>
    //     </View>
    //     <View style={styles.paypalWrapper}>
    //       <TouchableOpacity
    //        style={[styles.imageWrapper,{borderColor:show? 'white' :'rgb(234, 235, 237)'}]}
    //        onPress={()=>setShow(!show)}>
    //        {show && <Image source={require('../assets/correct.png')}/>}
    //       </TouchableOpacity>
    //       <View style={styles.paypalTextWrapper}>
    //       <Text style={styles.paypalText}>Visa/Master Card</Text>
    //        <View style={styles.addaccountWrapper}>
    //         <Text style={{marginRight:10,color:'grey'}}>**** **** **** 1234</Text>
    //         <Image source={require('../assets/pencil.png')}/>
    //        </View>
    //       </View>
    //       <Image style={{height:40,width:40,marginLeft:85}} source={require('../assets/visa.png')}/>
    //     </View>
    //     <View style={styles.paypalWrapper}>
    //       <TouchableOpacity
    //        style={[styles.imageWrapper,{borderColor:show? 'white' :'rgb(234, 235, 237)'}]}
    //        onPress={()=>setShow(!show)}>
    //        {show && <Image source={require('../assets/correct.png')}/>}
    //       </TouchableOpacity>
    //       <View style={styles.paypalTextWrapper}>
    //       <Text style={styles.paypalText}>Pay Via Paypal</Text>
    //       </View>
    //       <Image style={styles.img} source={require('../assets/delivery.png')}/>
    //     </View>
        
    //   </View>
    // </View>
    <View style={styles.container}>
      <Text style={styles.paymentText}>Payment method</Text>
      <View style={styles.paymentWrapper}>
        <View>
        {paymentMethods.map((method, index) => (
          <View key={index} style={styles.paypalWrapper}>
          {/* <View key={index}> */}
            <TouchableOpacity
              style={[
                styles.imageWrapper,
                { borderColor: index === show ? 'white' : 'rgb(234, 235, 237)' },
              ]}
              onPress={() => setShow(index)} // Set show state to index of current method
            >
              {index === show && <Image source={require('../assets/correct.png')} />}
            </TouchableOpacity>
            <View style={styles.paypalTextWrapper}>
              <Text style={styles.paypalText}>{method.title}</Text>
              {method.title === 'Visa/Master Card' ? (
                <View style={styles.addaccountWrapper}>
                  <Text style={{ marginRight: 10, color: 'grey' }}>**** **** **** 1234</Text>
                  <Image source={require('../assets/pencil.png')} />
                </View>
              ) : (
                <View style={styles.addaccountWrapper}>
                  <Text style={[styles.addAccountText, { marginRight: 5 }]}>+</Text>
                  <Text style={styles.addAccountText}>Add account</Text>
                </View>
              )}
            </View>
          </View>
        ))}
        </View>
         <View style={styles.threeImgWrapper}>
            <Image style={styles.img} source={require('../assets/paypal.png')} />
            <Image style={styles.img} source={require('../assets/visa.png')} />
            <Image style={styles.img} source={require('../assets/delivery.png')} />
          </View>
      </View>
    </View>
  )
}
export default PaymentMethod


const styles = StyleSheet.create({
  container:{
    paddingTop:5,
    justifyContent:'center',
    paddingLeft:20,
    paddingRight:20,
  },
  paymentText:{
    fontSize:17,
    fontWeight: '600',
    color: 'rgb(106, 76, 143)',
  },
  paymentWrapper:{
    borderWidth:2,
    borderColor:'rgb(234, 235, 237)',
    marginTop:10,
    borderRadius:10,
    flexDirection:'row',
    width:'100%',
    paddingBottom:5

  },
  imageWrapper:{
    borderWidth:2,
    borderRadius:50,
    width:25,
    height:25,
    alignItems:'center',
    justifyContent:'center',
    // flexDirection:'row'
  },
  paypalWrapper:{
    flexDirection:'row',
    paddingLeft:20,
    paddingTop:5,
    alignItems:'center'
  },
  img:{
      //  marginLeft:135,
       height:35,
       width:35
  },
  addaccountWrapper:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginTop:5
  },
  paypalTextWrapper:{
    marginLeft:20,
    // flexDirection:'column'/
  },
  paypalText:{
    fontSize:15,
    fontWeight: '700',
    color: 'rgb(106, 76, 143)',
  },
  addAccountText:{
    fontSize:14,
    color:'rgb(206, 21, 103)',
    fontWeight:'500'
  },
  threeImgWrapper:{
    flexDirection:'column',
    justifyContent:'space-around',
    marginLeft:100
  }
})