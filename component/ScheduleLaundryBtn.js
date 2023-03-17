import { View, Text ,StyleSheet,TouchableOpacity} from 'react-native'
const ScheduleLaundryBtn = ({navigation}) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity 
        style={styles.btnWrapper}
        onPress={()=> navigation.navigate('Order List')}>
      <Text style={styles.colorText}>Schedule a laundry</Text>
      </TouchableOpacity>
    </View>
  )
}
export default ScheduleLaundryBtn

const styles = StyleSheet.create({
    container:{
       alignItems:'center',
      //  width:'100%',
      //  padding:13,
       backgroundColor: 'white',
       borderTopLeftRadius: 30,
       borderTopRightRadius: 30,
       shadowRadius: 10,
       shadowColor: 'rgb(189, 189, 189)',
       shadowOpacity: 0.6,
       justifyContent:'center',
       paddingRight:20,
       paddingLeft:20,
       paddingTop:13,
       paddingBottom:13
    },
    btnWrapper:{
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'rgb(206, 21, 103)',
        paddingTop:20,
        paddingBottom:20,
        width:'100%',
        borderRadius:10,
        borderColor:'rgb(206, 21, 103)',
        borderWidth:2
    },
    colorText:{
        color:'rgb(206, 21, 103)',
        fontWeight:'600'
    }
})