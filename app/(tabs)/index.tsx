import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import {useHeaderHeight} from '@react-navigation/elements'
import CategoryButton from "@/components/CategoryButton";

const Page = () => {
  const headerHeight = useHeaderHeight()
  return (
    <>
      <Stack.Screen
      options={{
        headerTransparent: true,
        headerTitle: "",
        headerLeft: () => (
          <TouchableOpacity onPress={() => {}} style={{ marginLeft: 20 }}>
            <Image
              source={{
                uri: "https://xsgames.co/randomusers/avatar.php?g=pixel",
              }}
              style={{ width: 40, height: 40, borderRadius: 10 }}
            />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity
            onPress={() => {}}
            style={{
              marginRight: 20,
              backgroundColor: Colors.white,
              padding: 10,
              borderRadius: 10,
              shadowColor: "#171717",
              shadowOffset: { width: 2, height: 4 },
              shadowOpacity: 0.2,
              shadowRadius: 3,
            }}
          >
            <Ionicons name="notifications" size={20} color={Colors.black} />
          </TouchableOpacity>
        ),
      }}
    />

    <View style={[styles.container, {paddingTop: headerHeight}]}>
      <Text style={{fontSize:30, fontWeight:'800', color:Colors.black, marginTop:12}}>Explore the Beautiful World</Text>

      <View style={styles.searchSectionWrapper}>
        <View style={styles.searchBar}>
          <Ionicons name="search"  size={20} style={{marginRight:5}} color={Colors.black}/>
          <TextInput placeholder="Search..."/>
        </View>

        <TouchableOpacity onPress={() => {}} style={styles.filterBtn}>
          <Ionicons name="options" size={30} color={Colors.white}/>
        </TouchableOpacity>
      </View>


      <CategoryButton />
    </View>
    </>
  );
};

export default Page;

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingHorizontal:20,
    backgroundColor:Colors.bgColor,
  },
  searchSectionWrapper:{
    flexDirection:'row',
    marginVertical:20
  },
  searchBar:{
    flex:1,
    flexDirection:'row',
    backgroundColor:Colors.white,
    padding:16,
    borderRadius:10,
    alignItems:'center'
  },
  filterBtn:{
    backgroundColor:Colors.primaryColor,
    padding:18,
    borderRadius:10,
    marginLeft:20,
    justifyContent:'center'
  }
});
