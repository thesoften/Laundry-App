import { View, Text } from 'react-native'
import Itemlist from '../component/Itemlist'
import ClothItemList from '../component/ClothItemList'

const OrderList = ({navigation}) => {
  return (
    <View style={{backgroundColor:'white',flex:1,}}>
      <Itemlist/>
      <ClothItemList navigation={navigation}/>
    </View>
  )
}
export default OrderList