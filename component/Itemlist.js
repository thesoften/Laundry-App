import { useState } from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import Data from './ItemData'


let myData = Data
const Itemlist = () => {
    const [buttonColors, setButtonColors] = useState('');

    const onButtonPress = (id) => {
        setButtonColors({
            ...buttonColors,
            [id]: buttonColors[id] === 'white' ? undefined : 'white',
        });
    };

    return (
        <View style={{ backgroundColor: 'white' }}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.container}>
                    {myData.map((item) => (
                        <TouchableOpacity key={item.id}
                            style={[styles.itemWrapper,
                            { backgroundColor: buttonColors[item.id] === 'white' ? 'rgb(206, 21, 103)' : 'white', }]}
                            onPress={() => onButtonPress(item.id)}>
                            <Text style={[styles.title, {
                                color: buttonColors[item.id] === 'white' ? 'white' : 'rgb(106, 76, 143)'
                            }]}>
                                {item.title}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </View>
    )
}
export default Itemlist


let styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginLeft: 10,
        backgroundColor: 'white',
        marginTop: 2,
        width: '100%'
    },
    itemWrapper: {
        borderWidth: 1,
        paddingLeft: 17,
        paddingRight: 17,
        paddingTop: 3,
        paddingBottom: 3,
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        borderColor: 'rgb(106, 76, 143)'
    },
    title: {
        fontSize: 16,
        fontWeight: '500',
    },

})