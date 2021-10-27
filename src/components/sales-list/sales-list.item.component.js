import React from 'react'
import { View, Text } from 'react-native'

const SalesListItem = ({saleItem}) => {
  const {storeLocation, couponUsed, purchaseMethod, customer: {email, age, satisfaction}} = saleItem
  return (
    <View style = {{
      marginBottom: 20, color: 'white', fontSize: 33,
      backgroundColor: '#f44336', padding: 23, borderRadius: 63, 
      borderWidth: 3, borderColor: 'black',
      marginTop: 12
      }}>
      <Text>Store Location: {storeLocation}</Text>
      <Text>Coupon Used: {couponUsed}</Text>
      <Text>Purchase Method: {purchaseMethod}</Text>
      <Text>Customer Details: {'\n'} email:{email} - age: {age} - satisfaction {satisfaction}</Text>
    </View>
  )
}

export default SalesListItem
