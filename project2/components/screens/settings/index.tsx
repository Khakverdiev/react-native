import { useTheme } from "@/contexts/theme-context";
import { StyleSheet, Switch, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SettingsScreen() {
	const { theme, toggleTheme } = useTheme();

	return (
		<SafeAreaView style={[styles.screen, theme === 'dark' ? styles.darkBg : styles.lightBg]}>
			<View style={styles.row}>
				<Text style={[styles.label, theme === 'dark' ? styles.darkText : styles.lightText]}>
					Dark Mode
				</Text>
				<Switch
					value={theme === 'dark'}
					onValueChange={toggleTheme}
					trackColor={{ false: '#767577', true: '#81b0ff' }}
					thumbColor={theme === 'dark' ? '#f5dd4b' : '#f4f3f4'}
					ios_backgroundColor="#3e3e3e"
				/>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 20,
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	label: {
		fontSize: 18,
		fontWeight: '500',
	},
	lightBg: {
		backgroundColor: '#fff',
	},
	darkBg: {
		backgroundColor: '#1c1c1e',
	},
	lightText: {
		color: '#000',
	},
	darkText: {
		color: '#fff',
	},
});
