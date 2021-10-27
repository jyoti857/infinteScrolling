import React from 'react'
import { View, Text, FlatList, RefreshControl, ScrollView, SafeAreaView } from 'react-native'
import { useSalesHook } from '../../hooks/useSalesHook'
import SalesListItem from './sales-list.item.component'

const SalesList = () => {
  const {sales, getNextSales, loading, refreshSalesData} = useSalesHook()
  console.log("sales ---> ", sales)
  return (
    // <ScrollView 
    //   contentContainerStyle={{flexGrow: 1}}
    //   style = {{borderColor: 'green', borderWidth: 2, backgroundColor: 'violet'}}>
    <View style={{ marginBottom: 2}}>
      <FlatList 
        data={sales}
        renderItem={({item}) => {
          return(<View>
            <SalesListItem saleItem={item} key={item._id}/>
          </View>)
        }}
        keyExtractor={(item) => item._id }
        onEndReached={getNextSales}
        refreshControl = {
          <RefreshControl refreshing={loading} onRefresh={refreshSalesData}/>
        }
        />
        </View>
    // </ScrollView>
  )
}

export default SalesList
