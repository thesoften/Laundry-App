import { View, Text, StyleSheet } from 'react-native'
const PriceDetails = ({totalCost}) => {
      
    const tax = 10;
    const total = totalCost ? totalCost + tax : 0;


  return (
    <View style={styles.container}>
        <Text style={styles.priceDetailsText}>Price details</Text>
      <View style={styles.subTotalWrapper}>
        <View style={styles.subtotalAmountWrapper}>
            <Text style={styles.subTotalText}>Subtotal</Text>
            <Text style={styles.taxVal}>{totalCost.toFixed(2)}</Text>
        </View>
        <View style={styles.subtotalAmountWrapper}>
           <Text style={styles.taxText}>Tax</Text>
           <Text style={styles.taxVal}>${tax}</Text>
        </View>
        <View style={{backgroundColor:'rgb(217, 217, 217)',height:1,marginTop:5}}></View>
        <View style={styles.subtotalAmountWrapper}>
            <Text style={styles.totalText}>Total</Text>
            <Text style={styles.totalVal}>${total.toFixed(2)}</Text>
        </View>
        </View>
    </View>
  )
}
export default PriceDetails

let styles = StyleSheet.create({
    container:{
        paddingLeft:20,
        paddingRight:20
    },
    priceDetailsText:{
        fontSize: 17,
        fontWeight: '600',
        color: 'rgb(106, 76, 143)',
        paddingBottom:10
    },
    subTotalWrapper:{
        backgroundColor:'rgb(249, 249, 249)',
        height:100,
        width:'100%',
        borderRadius:15,
        paddingLeft:20,
        paddingRight:20,
    },
    subtotalAmountWrapper:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:10
    },
    subTotalText:{
        fontSize:15,
        color: 'rgb(106, 76, 143)'
    },
    taxText:{
        color: 'rgb(106, 76, 143)',
        fontSize:15,
    },
    totalText:{
        color: 'rgb(106, 76, 143)',
        fontWeight:'700',
        fontSize:15,

    },
    taxVal:{
        fontSize:15,
        color: 'rgb(106, 76, 143)',
        fontWeight:'700'
    },
    totalVal:{
        fontSize:15,
        color:'rgb(206, 21, 103)',
        fontWeight:'700'
    }
})