import { View, Text } from 'react-native'
import PriceDetails from '../component/PriceDetails'
import ScheduleDate from '../component/ScheduleDate'
import PaymentMethod from '../component/PaymentMethod'
import Address from '../component/Address'
import BtnConfirmOder from '../component/BtnConfirmOder'



const ConfirmOrder = ({route,navigation}) => {
    const {totalCost,selectedTitles,items,totalCosts} = route.params
  return (
    <View style={{backgroundColor:'white',flex:1}}>
      <PriceDetails totalCost={totalCost} />
      <ScheduleDate/>
      <PaymentMethod/>
      <Address/>
      <BtnConfirmOder 
      navigation={navigation}
      totalCost={totalCost}
      // title={title}
      selectedTitles={selectedTitles}
      items={items}
      totalCosts={totalCosts}
      />
    </View>
  )
}
export default ConfirmOrder