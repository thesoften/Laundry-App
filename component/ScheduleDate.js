import { View, Text, StyleSheet, Image} from 'react-native'
const ScheduleDate = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.scheduleText}>Schedule Date</Text>
      <View style={styles.scheduleWrapper}>
       <View style={[styles.pickupWrapper,{borderTopLeftRadius:10,borderBottomLeftRadius:10}]}>
       <Text style={styles.pickupText}>Pickup Time</Text>
       <View>
        <View style={styles.imgWrapper}>
         <Image style={{width:25,height:25}} source={require('../assets/add-event.png')}/>
         <View style={{marginLeft:10}}>
         <Text style={styles.thuText}>Thu, 1 Apr</Text>
         <Text style={styles.timeText}>10:00 AM</Text>
         </View>
        </View>
       </View>
       </View>
       <View style={[styles.pickupWrapper,{borderTopRightRadius:10,borderBottomRightRadius:10,borderLeftColor:'white',}]}>
       <Text style={styles.pickupText}>Delivery Time</Text>
       <View>
        <View style={styles.imgWrapper}>
         <Image  style={{width:25,height:25}} source={require('../assets/tick-mark.png')}/>
         <View style={{marginLeft:10}}>
         <Text style={styles.thuText}>Web, 2 Apr</Text>
         <Text style={styles.timeText}>21:00 PM</Text>
         </View>
        </View>
       </View>
       </View>
      </View>
      </View>
  )
}
export default ScheduleDate


const styles = StyleSheet.create({
    container:{
          justifyContent:'center',
          marginTop:10,
          paddingLeft:20,
          paddingRight:20
    },
    scheduleText:{
        fontSize:17,
        fontWeight: '600',
        color: 'rgb(106, 76, 143)',
    },
    scheduleWrapper:{
        flexDirection:'row',
        justifyContent:'space-between',
        // borderColor:'red',
        // borderWidth:1,
    },
    pickupWrapper:{
        borderWidth:2,
        marginTop:15,
        height:60,
        width:'50%',
        borderColor:'rgb(234, 235, 237)',
        justifyContent:'center',
        paddingLeft:20,
        paddingRight:20,
    },
    pickupText:{
        position: 'absolute',
        top: -10,
        zIndex: 100,
        backgroundColor: 'white',
        left:35,
        fontSize:13,
        paddingLeft:5,
        paddingRight:5,
        color:'rgb(173, 177, 186)',
        fontWeight:'600'
    },
    imgWrapper:{
        flexDirection:'row',
        alignItems:'center',
        paddingRight:20,
    },
    thuText:{
        fontSize:14,
    },
    timeText:{
        fontSize:16,
        fontWeight:'600',
        color: 'rgb(106, 76, 143)',
        marginTop:5
    }
})