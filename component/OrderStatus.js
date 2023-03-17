import { View, Text, StyleSheet, Image } from 'react-native'
const OrderStatus = () => {
    return (
        <View style={styles.container}>
            <View style={styles.orderStatusWrapper}>
                <View style={styles.statusTextWrapper}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Image source={require('../assets/location-pin.png')} />
                    <Text style={styles.statusText}>Order Status</Text>
                    </View>
                    <Text style={styles.detailText}>View detail</Text>
                </View>
                <View style={{ flexDirection: 'row' , alignItems:'center',paddingLeft:10}}>
                    <View style={styles.imgWrapper}>
                        <Image style={[styles.img, { marginTop: 5 }]} source={require('../assets/recordgreen.png')} />
                        <View style={[styles.dottedWrapper]}></View>
                    </View>
                    <View style={styles.deliveryWrapper}>
                        <Text style={styles.deliveredText}>Delivered</Text>
                        <Text style={styles.timeText}>7:00 AM, Wed, 6 Jun 2023</Text>
                    </View>
                </View>
            </View>
            <View style={styles.ScheduleWrapper}>
                <View style={{ padding: 20, flexDirection: 'row' }}>
                    <Image style={{ width: 25, height: 25 }} source={require('../assets/add-event.png')} />
                    <Text style={styles.ScheduleText}>Schedule Date</Text>
                </View>
            </View>
        </View>

     
    

    )
}
export default OrderStatus



const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        paddingLeft: 20,
        paddingRight: 20
    },
    orderStatusWrapper: {
        width: '100%',
        height: 80,
        borderWidth: 2,
        marginTop: 5,
        borderColor: 'rgb(234, 235, 237)',
        borderRadius: 10,

    },
    imgWrapper: {
        alignItems: 'center',
        marginTop: 5,
        flexDirection: 'column'
    },
    dottedWrapper: {
        borderWidth: 1,
        height: 18,
        borderStyle: 'dashed',
        borderColor: 'grey',
    },
    img: {
        width: 20,
        height: 20
    },
    statusTextWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft:10,
        paddingRight:20,
        paddingTop:5
    },
    deliveryWrapper: {
        paddingLeft:20
    },
    deliveredText: {
        fontSize: 14,
        fontWeight: '700'
    },
    timeText: {
        color: 'grey',
        marginTop: 2,
        fontSize: 13
    },
    statusText: {
        color: 'rgb(106, 76, 143)',
        fontSize: 15,
        fontWeight: '700',
        marginLeft:15
    },
    detailText: {
        color: 'rgb(206, 21, 103)',
        fontSize: 14,
        fontWeight: '500',
    },
    ScheduleWrapper: {
        width: '100%',
        height: 80,
        borderWidth: 2,
        marginTop: 5,
        flexDirection: 'row',
        // alignItems:'center',
        borderColor: 'rgb(234, 235, 237)',
        borderRadius: 10,
    },
    ScheduleText: {
        marginLeft: 10,
        color: 'rgb(106, 76, 143)',
        fontSize: 17,
        fontWeight: '700'
    }
})