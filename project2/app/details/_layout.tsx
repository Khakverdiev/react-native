import { ThemeProvider } from '@/contexts/theme-context'
import { Stack } from 'expo-router'
import { Text } from 'react-native'
import DetailsStack from './details-stack'

export default function DetailsLayout() {
	return (
		<DetailsStack />
	)
}
