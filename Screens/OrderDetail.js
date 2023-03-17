import { View, Text,ScrollView } from 'react-native'
import OrderConfirm from '../component/OrderConfirm'
import FinalOrder from '../component/FinalOrder'
import OrderStatus from '../component/OrderStatus'
import ScheduleLaundryBtn from '../component/ScheduleLaundryBtn'

const OrderDetail = ({route,navigation}) => {
    const {totalCost,selectedTitles,items,totalCosts} = route.params
  return (
    <View style={{backgroundColor:'white',flex:1}}>
      <ScrollView>
      <OrderConfirm navigation={navigation}/>
      <FinalOrder 
      totalCost={totalCost}
      // title={title}
      selectedTitles={selectedTitles}
      items={items}
      totalCosts={totalCosts}
      />
      <OrderStatus/>
      </ScrollView>
      <ScheduleLaundryBtn navigation={navigation}/>
    </View>
  )
}
export default OrderDetail