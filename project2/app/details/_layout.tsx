import { Stack } from 'expo-router'
import { Text } from 'react-native'

export default function DetailsLayout() {
	return (
		<Stack
			screenOptions={{
				headerTitle: () => (
					<Text style={{ fontSize: 18, fontWeight: 'bold' }}>
						Movie Details
					</Text>
				),
				headerStyle: {
					backgroundColor: '#1c1c1c',
				},
				headerTintColor: '#fff',
			}}
		/>
	)
}
