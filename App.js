import React from 'react'
import {
  SafeAreaView,
  ScrollView, StyleSheet, View,
} from 'react-native';

import SalesList from './src/components/sales-list/sales-list.component';



const App  = () => {


  return (
    <SafeAreaView style={{flex:1, borderColor: 'green', borderWidth: 13}}>
      <SalesList />
     </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  scrollView: {
    height: '20%',
    width: '80%',
    margin: 20,
    alignSelf: 'center',
    padding: 20,
    borderWidth: 5,
    borderRadius: 5,
    borderColor: 'black',
    backgroundColor: 'lightblue'
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    paddingBottom: 50
  }
});
export default App;
