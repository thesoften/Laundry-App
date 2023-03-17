import { View, Text,TouchableOpacity ,StyleSheet} from 'react-native'
const BtnConfirmOder = ({totalCost,navigation,selectedTitles,items,totalCosts}) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity 
        style={styles.btnWrapper}
        onPress={()=>navigation.navigate('Order Detail',{totalCost,selectedTitles,items,totalCosts})}
        >
      <Text style={styles.btnText}>Confirm Order</Text>
      </TouchableOpacity>
    </View>
  )
}
export default BtnConfirmOder


const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        shadowRadius: 10,
        shadowColor: 'rgb(189, 189, 189)',
        shadowOpacity: 0.6,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        flex:0.5,
        justifyContent:'center',
        paddingLeft:20,
        paddingRight:20
    },
    btnWrapper:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(206, 21, 103)',
        paddingTop:20,
        paddingBottom:20,
        width: '100%',
        borderRadius:10
    },
    btnText: {
        color:'white',
        fontWeight:'600'
    }
})