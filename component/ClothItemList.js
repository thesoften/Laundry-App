import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import ClothData from './ClothData'
import React, { useState } from 'react'
import AddItem from './AddItem'


const ClothItemList = ({navigation}) => {

    const [items, setItems] = useState(ClothData)
    const [selectedTitles, setSelectedTitles] = useState({});
    const [totalCosts, setTotalCosts] = useState(0);


    const incrementCount = (id,title,price) => {
        const updatedItems = items.map((item) => {
            if (item.id === id) {
                return { ...item, count: item.count + 1 }
            } else {
                return item
            }
        })
        setItems(updatedItems) 
        setSelectedTitles((titles) => ({ ...titles, [title]: (titles[title] || 0) + 1 }));

        const newTotalCost = totalCosts + price;
        setTotalCosts(newTotalCost);
        // setTotalCosts((total) => total + price);
    }


    const decrementCount = (id,title,price) => {
        const updatedItems = items.map((item) => {
            if (item.id === id && item.count > 0) {
                return { ...item, count: item.count - 1 }
            } else {
                return item
            }
            
        })
        setItems(updatedItems)
        console.log(`Decremented count of ${title}`);
        // setSelectedTitles((titles) => ({ ...titles, [title]: (titles[title] || 0) - 1 }));

        setSelectedTitles((titles) => {
            const updatedTitles = { ...titles, [title]: (titles[title] || 0) - 1 };
            if (updatedTitles[title] === 0) {
              const { [title]: value, ...remainingTitles } = updatedTitles;
              return remainingTitles;
            }
            return updatedTitles;
          });

          const newTotalCost = totalCosts - price;
          setTotalCosts(newTotalCost);
        // setTotalCosts((total) => total - price);

    }

    // console.warn(totalCosts)
    // console.log(totalCosts)
     
    const totalQuantity = items.reduce((total, item) => total + item.count, 0)

    const validItems = items.filter((item) => !isNaN(item.Price))
    const totalCost = validItems.reduce((total, item) => total + item.count * item.Price, 0)
    
    
    return (
        <View style={styles.container}>
            {items.map((item) => (
                <View key={item.id} style={styles.ClothItemWrapper}>
                    <Image source={item.uri} style={{width:40,height:40}}/>
                    <View style={styles.titleWrapper}>
                        <Text style={styles.title}>{item.Title}</Text>
                        <View style={styles.PriceWrapper} key={item.id}>
                            <Text style={styles.Price}>${item.Price}</Text>
                            <Text style={styles.Gender}>{item.Gender}</Text>
                            <Image source={item.DropDown} />
                        </View>
                    </View>
                    <View style={styles.countWrapper}>
                        <TouchableOpacity onPress={() => decrementCount(item.id,item.Title,item.Price)}>
                            <Image source={item.Minus} style={styles.ImgCount} />
                        </TouchableOpacity>
                        <Text style={{ padding: 5, fontSize: 17, fontWeight: '700' }}>{item.count}</Text>
                        <TouchableOpacity onPress={() => incrementCount(item.id,item.Title,item.Price)}>
                            <Image source={item.Plus} style={styles.ImgCount} />
                        </TouchableOpacity>
                    </View>
                </View>
            ))}
            <AddItem
             totalCount={totalQuantity}
             totalCost={totalCost}
             navigation={navigation}
            selectedTitles={selectedTitles}
            totalCosts={totalCosts}
             items={items}
             />


        </View>
    )
}

export default ClothItemList

let styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: 10,
        // flex:1
    },
    ClothItemWrapper: {
        flexDirection: 'row',
        marginTop: 10,
        backgroundColor: 'rgb(249, 249, 249)',
        padding: 6,
        width: 375,
        borderRadius: 15,
        alignItems: 'center',
    },
    titleWrapper: {
        marginLeft: 15
    },
    title: {
        fontSize: 15,
        fontWeight: '600',
        color: 'rgb(106, 76, 143)'
    },
    PriceWrapper: {
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    Price: {
        color: 'red'
    },
    Gender: {
        marginLeft: 30,
        color: 'rgb(106, 76, 143)',
        fontWeight: '600',
        fontSize:13
    },
    countWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 145
    },
    ImgCount: {
        height: 20,
        width: 20
    }
})