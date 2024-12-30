import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'

const CategoryButton = () => {
  return (
    <View>
      <Text style={styles.title}>Category</Text>

      <ScrollView></ScrollView>
    </View>
  )
}

export default CategoryButton

const styles = StyleSheet.create({
    title:{
        fontSize:25,
        fontWeight:'800',
        color:Colors.black,
    }
})