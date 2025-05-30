import { useTheme } from '@/contexts/theme-context';
import { useLocalSearchParams } from 'expo-router';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function MovieDetails() {
	const { id, title, poster, year } = useLocalSearchParams();
	const { theme } = useTheme();

	const isDark = theme === 'dark';

	return (
		<View
			style={[
				styles.container,
				{ backgroundColor: isDark ? '#121212' : '#f2f2f2' },
			]}
		>
			{poster && (
				<Image
					source={{ uri: `https://image.tmdb.org/t/p/w500${poster}` }}
					style={styles.poster}
				/>
			)}
			<View style={styles.textContainer}>
				<Text style={[styles.title, { color: isDark ? '#fff' : '#111' }]}>
					{title}
				</Text>
				<Text style={[styles.year, { color: isDark ? '#bbb' : '#666' }]}>
					Released: {year}
				</Text>
				<Text style={[styles.id, { color: isDark ? '#888' : '#999' }]}>
					ID: {id}
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		alignItems: 'center',
	},
	poster: {
		width: '90%',
		height: 400,
		borderRadius: 12,
		resizeMode: 'cover',
		marginBottom: 24,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.3,
		shadowRadius: 6,
		elevation: 8,
	},
	textContainer: {
		alignItems: 'center',
	},
	title: {
		fontSize: 24,
		fontWeight: '700',
		textAlign: 'center',
		marginBottom: 12,
	},
	year: {
		fontSize: 18,
		marginBottom: 8,
	},
	id: {
		fontSize: 14,
	},
});
