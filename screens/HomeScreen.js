import { View, Text, Image, TextInput, ScrollView, } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {AdjustmentsVerticalIcon, ChevronDownIcon, UserIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline'
import Categories from "../components/Categories";
import FeaturedRows from "../components/FeaturedRows";

const HomeScreen = () =>{
  const navigation = useNavigation();

  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown:false,
    })
  }, [])

  return(
    <SafeAreaView className='bg-white pt-5'>

        {/* Header */}
        <View className='flex-row pb-3 items-center mx-4 space-x-2 px-1'>
          <Image 
          source={{
            uri:'https://links.papareact.com/wru',
          }}
          className='h-7 w-7 bg-gray-300 p-4 rounded-full'/>
          

          <View className="flex-1">
            <Text className='font-bold text-gray-400 text-xs'>
              Deliver now
            </Text>
            <Text className='font-bold text-xl'>Current Location
            <ChevronDownIcon size={20} color="#00CCBB"/>
            </Text>
          </View>
  
          <UserIcon size={35} color="#00CCBB" className='justify-self-end'/>
        </View>

        {/* Search */}
        <View className='flex-row items-center space-x-2 pb-2 mx-4 px-1'>
          <View className='flex-row flex-1 space-x-2 bg-gray-200 p-3'>
            <MagnifyingGlassIcon color="gray" size={25}/>
            <TextInput placeholder="Restaurants and Cuisines"
            keyboardType="default"
            />
          </View>

          <AdjustmentsVerticalIcon color="#00CCBB"/>
        </View>

        {/* Body */}
        <ScrollView className='bg-gray-100'>
          {/* Categories */}
          <Categories />

          {/* Featured Rows */}

          {/* Featured */}
          <FeaturedRows
            id='1' 
            title='Featured'
            description='Paid Placement from our partners'
            />

          {/* Tasty Discounts */}
          <FeaturedRows
            id='2' 
            title='Tasty Discounts'
            description='Paid Placement from our partners'
            />

            {/* Offers Near You */}
          <FeaturedRows
            id='3' 
            title='Offers near you'
            description='Paid Placement from our partners'
            />
        </ScrollView>
    </SafeAreaView>
    )
}

export default HomeScreen