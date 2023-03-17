import { useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
const FinalOrder = ({ totalCost, selectedTitles, totalCosts,items }) => {
    const selectedTitle = Object.keys(selectedTitles);
    const selectedTitleCounts = Object.values(selectedTitles);

    const tax = 10;
    const total = totalCost ? totalCost + tax : 0;


    return (
        <View style={styles.container}>
            <View style={styles.orderWrapper}>
                <View style={styles.orderalign}>
                    <View style={styles.ordernumWrapper}>
                        <Text style={styles.ordernumText}>Order #123</Text>
                        <Text style={styles.twobagsText}>(2 bags)</Text>
                    </View>
                    <Text style={styles.orderTimeText}>11:35 AM, Thu, 15 Jun 2023</Text>
                </View>
                <View style={{alignItems:'center'}}>
                <View style={styles.lineWrapper}></View>
                </View>
                <View>
                    <Text style={styles.washText}>Wash & Fold</Text>
                    {selectedTitle.map((title, index) => (
                        <View style={styles.selectedItemWrapper} key={title + index}>
                            <View style={styles.titleWrapper}>
                                <Text>{selectedTitleCounts[index]} x {title} (Men)</Text>
                            </View>
                            <View>
                            <Text style={[styles.priceText,{marginTop:5}]}>${selectedTitleCounts[index] * items.find((item) => item.Title === title).Price}</Text>
                            </View>
                        </View>
                    ))}
                </View>
                <View>
                    <Text style={styles.washText}>Wash & Iron</Text>
                    {selectedTitle.map((title, index) => (
                        <View style={styles.selectedItemWrapper} key={title + index}>
                            <View style={styles.titleWrapper}>
                                <Text>{selectedTitleCounts[index]} x {title} (Men)</Text>
                            </View>
                            <View>
                            <Text style={[styles.priceText,{marginTop:5}]}>${selectedTitleCounts[index] * items.find((item) => item.Title === title).Price}</Text>
                            </View>
                        </View>
                    ))}
                </View>
                <View style={{alignItems:'center'}}>
                <View style={styles.lineWrapper}></View>
                </View>
                <View style={{marginTop:5}}>
                    <View style={styles.SubtotalCountWrapper}>
                    <Text style={styles.subTotalText}>Subtotal</Text>
                    <Text style={styles.taxVal}>${totalCost.toFixed(2)}</Text>
                    </View>
                    <View style={styles.SubtotalCountWrapper}>
                    <Text style={styles.taxText}>Tax</Text>
                    <Text style={styles.taxVal}>${tax}</Text>
                    </View>
                    <View style={{alignItems:'center'}}>
                    <View style={styles.lineWrapper}></View>
                    </View>
                    <View style={[styles.SubtotalCountWrapper,{marginTop:5,paddingBottom:5}]}>
                    <Text style={styles.totalText}>Total</Text>
                    <Text style={styles.totalVal}>${total.toFixed(2)}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
export default FinalOrder

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:5,
        paddingLeft:20,
        paddingRight:20
    },
    orderWrapper: {
        width:'100%',
        justifyContent:'center',
        borderRadius:15,
        borderWidth:2,
        paddingTop:5,
        borderColor:'rgb(244, 247, 250)'
    },
    ordernumWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    ordernumText: {
        fontSize: 17,
        fontWeight: '700',
    },
    orderalign: {
        paddingLeft: 20,
    },
    twobagsText: {
        color: 'grey'
    },
    orderTimeText: {
        color: 'grey',
        marginTop: 5
    },
    lineWrapper: {
        borderWidth: 1,
        marginTop: 5,
        borderColor:'rgb(244, 247, 250)',
        // paddingRight:90,
        // paddingLeft:50,
        // width:335,
        // marginLeft:20
        // width:'100%',
        paddingLeft:160,
        paddingRight:160
    },
    washText: {
        marginLeft: 20,
        marginTop: 5,
        fontSize: 17,
        fontWeight: '600',
        color: 'rgb(106, 76, 143)',
    },
    selectedItemWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center',
        // marginTop:5
    },
    titleWrapper: {
        flexDirection: 'column'
    },
    numbersItemText: {
        fontSize: 15,
    },
    titleItemsNameText: {
        marginLeft: 5,
        fontSize: 15,
    },
    menText: {
        fontSize: 15,
        color: 'grey',
        marginLeft: 5,
    },
    priceText: {
        fontSize: 15,
        color: 'rgb(206, 21, 103)'
    },
    SubtotalCountWrapper:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingRight:20,
        marginTop:5,
        paddingLeft:20
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