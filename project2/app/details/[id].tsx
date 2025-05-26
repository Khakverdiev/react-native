import { useLocalSearchParams } from "expo-router";
import { View, Image, Text, StyleSheet } from "react-native";

export default function MovieDetails() {
    const {id, title, poster, year} = useLocalSearchParams();

    return (
		<View style={styles.container}>
			{poster && (
				<Image
					source={{ uri: `https://image.tmdb.org/t/p/w500${poster}` }}
                    style={styles.poster}
				></Image>
			)}
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.year}>{year}</Text>
            <Text style={styles.id}>ID: {id}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
	},
	poster: {
		width: '100%',
		height: 300,
		resizeMode: 'contain',
		marginBottom: 20,
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 10,
	},
	year: {
		fontSize: 16,
		marginBottom: 10,
	},
	id: {
		fontSize: 14,
		color: '#666',
	},
})