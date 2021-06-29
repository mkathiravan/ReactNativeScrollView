import React, {useState, useEffect} from 'react'
import {SafeAreaView, Text, StyleSheet, View, ScrollView} from 'react-native'

const App = () => {
  const [dataSource, setDataSource] = useState([])
  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((responseJson) => {
      setDataSource(responseJson)
    })
    .catch((error) => {
      console.error(error)
    })
  }

  const ItemView = (item, index) => {
    return(
      <View key={index}>

        <Text style={styles.itemStyle}>

         {item.id}.{item.title}

        </Text>

        <ItemSeparatorView/>

      </View>
    )
  }

  const ItemSeparatorView = () => {

    return(
      <View style={styles.ItemSeparatorStyle} />
    )
  }

  return(
    <SafeAreaView style={{flex: 1}}>

    <View style={styles.container}>

      <ScrollView>
        {
          dataSource.map(ItemView)
        }

      </ScrollView>

    </View>

    </SafeAreaView>
  )

}

export default App

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: 40,
    backgroundColor: 'white'
  },
  itemStyle : {
    padding: 10
  },
  ItemSeparatorStyle : {
    height: 0.5,
    width: '100%',
    backgroundColor: '#c8c8c8'

  }

})