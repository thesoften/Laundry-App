import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'


const AddItem = ({ totalCount, totalCost, navigation, selectedTitles, items, totalCosts }) => {


    return (
        <View style={styles.container}>
            <View style={styles.footerbtnWrapper}>
                <View style={styles.boxWrapper}>
                    <Image source={require('../assets/box.png')} />
                </View>
                <View style={styles.totalWrapper}>
                    <Text style={styles.totalText}>Total</Text>
                    <Text style={styles.itemsText}>{totalCount} Items</Text>
                </View>
                <View style={styles.costWrapper}>
                    <Text style={styles.costText}>Cost</Text>
                    <Text style={styles.totalcostText}>${totalCost}</Text>
                </View>
            </View>
            <View style={styles.alignWrapper}>
                <TouchableOpacity
                    style={styles.confirmOrderWrapper}
                    onPress={() => navigation.navigate('Schedule A Pickup', { totalCost, selectedTitles, items, totalCosts })}>
                    <Text style={styles.confirmText}>Confirm Order</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default AddItem


let styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        shadowRadius: 5,
        shadowColor: 'rgb(189, 189, 189)',
        shadowOpacity: 0.5,
        marginTop: 20,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20
    },
    footerbtnWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        width: '100%'

    },
    boxWrapper: {
        flexDirection: 'row',
        backgroundColor: 'rgb(255, 232, 241)',
        padding: 10,
        borderRadius: 50,
    },
    totalWrapper: {
        marginLeft: 10
    },
    totalText: {
        color: 'grey'
    },
    itemsText: {
        fontSize: 17,
        fontWeight: '600'
    },
    costWrapper: {
        marginLeft: 210
    },
    costText: {
        color: 'grey'
    },
    totalcostText: {
        fontSize: 17,
        fontWeight: '600',
        color: 'rgb(206, 21, 103)'
    },
    confirmOrderWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        backgroundColor: 'rgb(206, 21, 103)',
        padding: 20,
        width: 375,
        borderRadius: 15
    },
    confirmText: {
        color: 'white',
        fontWeight: '600'
    },
    alignWrapper: {
        alignItems: 'center'
    }
})