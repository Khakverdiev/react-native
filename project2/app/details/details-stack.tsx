import { useTheme } from "@/contexts/theme-context"
import { Stack } from "expo-router"
import { Text } from "react-native"

export default function DetailsStack() {
    const { theme } = useTheme()
	const isDark = theme === 'dark'
    
	return (
		<Stack
			screenOptions={{
				headerTitle: () => (
					<Text style={{ fontSize: 18, fontWeight: 'bold', color: isDark ? '#fff' : '#000' }}>
						Movie Details
					</Text>
				),
				headerStyle: {
					backgroundColor: isDark ? '#1c1c1e' : '#fff',
				},
				headerTintColor: isDark ? '#fff' : '#000',
			}}
		/>
	)
}