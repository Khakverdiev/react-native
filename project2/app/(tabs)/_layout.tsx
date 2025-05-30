import { ThemeProvider, useTheme } from '@/contexts/theme-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';

function ThemedTabs() {
	const { theme } = useTheme();
	const isDark = theme === 'dark';

	const iconColor = isDark ? '#fff' : '#000';
	const backgroundColor = isDark ? '#1c1c1e' : '#fff';
	const labelColor = isDark ? '#fff' : '#000';

	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarStyle: {
					backgroundColor: backgroundColor,
				},
				tabBarLabelStyle: {
					color: labelColor,
				},
			}}
		>
			<Tabs.Screen
				options={{
					title: 'Home',
					animation: 'none',
					tabBarIcon: ({ focused }) => (
						<Ionicons
							name={focused ? 'home' : 'home-outline'}
							size={24}
							color={iconColor}
						/>
					),
				}}
				name="home"
			/>
			<Tabs.Screen
				options={{
					title: 'Profile',
					animation: 'none',
					tabBarIcon: ({ focused }) => (
						<Ionicons
							name={focused ? 'person' : 'person-outline'}
							size={24}
							color={iconColor}
						/>
					),
				}}
				name="profile"
			/>
			<Tabs.Screen
				options={{
					title: 'Settings',
					animation: 'none',
					tabBarIcon: ({ focused }) => (
						<Ionicons
							name={focused ? 'settings' : 'settings-outline'}
							size={24}
							color={iconColor}
						/>
					),
				}}
				name="settings"
			/>
		</Tabs>
	);
}

export default function TabLayout() {
	return (
		<ThemedTabs />
	);
}

const styles = StyleSheet.create({});
