import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons'

export default function TabLayout(){
  return (
		<Tabs
			screenOptions={{
				headerShown: false,
			}}
		>
			<Tabs.Screen
				options={{
					animation: 'none',
					title: 'Home',
					tabBarIcon: ({ focused }) => (
						<Ionicons
							name={focused ? 'home' : 'home-outline'}
							size={24}
							color='black'
						/>
					),
					tabBarLabelStyle: {
						color: 'black',
					},
				}}
				name='home'
			/>
			<Tabs.Screen
				options={{
					animation: 'none',
					title: 'Profile',
					tabBarIcon: ({ focused }) => (
						<Ionicons
							name={focused ? 'person' : 'person-outline'}
							size={24}
							color='black'
						/>
					),
					tabBarLabelStyle: {
						color: 'black',
					},
				}}
				name='profile'
			/>
		</Tabs>
	)
}

const styles = StyleSheet.create({})