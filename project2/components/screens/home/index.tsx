import {StyleSheet, Text, View, Image, TextInput, Pressable, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router';

interface Movie {
	id: number;
	title: string;
	poster_path: string | null;
	release_date: string | null;
}

export default function HomeScreen() {
	const [query, setQuery] = useState('');
	const [movies, setMovies] = useState<Movie[]>([]);

	const searchMovies = async () => {
		try {
			const response = await fetch(
				`https://api.themoviedb.org/3/search/movie?api_key=cf977f4fcd2ee7144a67c432cdbd85f7&query=${query}`,
				{
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
					},
				}
			)
			const data = await response.json();
			setMovies(data.results || []);
		}
		catch (error) {
			console.error('Error fetching movies:', error);
		}
	}

	const renderMovieItem = ({ item }: { item: Movie }) => (
		<View style={styles.movieItem}>
			{item.poster_path && (
				<Image
					source={{ uri: `https://image.tmdb.org/t/p/w200${item.poster_path}` }}
					style={styles.moviePoster}
				/>
			)}
			<View style={styles.movieInfo}>
				<Text style={styles.movieTitle}>{item.title}</Text>
				<Text style={styles.movieYear}>
					{item.release_date
						? new Date(item.release_date).getFullYear()
						: 'N/A'}
				</Text>
			</View>
			<Link
				href={{
					pathname: `/details/[id]`,
					params: {
						title: item.title,
						poster: item.poster_path,
						year: item.release_date
							? new Date(item.release_date).getFullYear()
							: 'N/A',
					},
				}}
				asChild
			>
				<Pressable style={styles.detailsButton}>
					<Text style={styles.detailsButtonText}>Info</Text>
				</Pressable>
			</Link>
		</View>
	)

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				data={movies}
				renderItem={renderMovieItem}
				keyExtractor={item => item.id.toString()}
				contentContainerStyle={styles.listContainer}
				style={styles.movieList}
				ListHeaderComponent={
					<View style={styles.viewContainer}>
						<Image
							source={require('../../../assets/images/movie.png')}
							style={styles.image}
						/>
						<TextInput
							placeholder='Find a movie...'
							style={styles.textArea}
							value={query}
							onChangeText={setQuery}
							onSubmitEditing={searchMovies}
						/>
						<Pressable style={styles.button} onPress={searchMovies}>
							<Text style={styles.buttonText}>Search</Text>
						</Pressable>
					</View>
				}
			/>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	viewContainer: {
		justifyContent: 'flex-start',
		alignItems: 'center',
		marginTop: 20,
	},
	image: {
		width: 80,
		height: 80,
	},
	textArea: {
		borderColor: '#000',
		borderWidth: 1,
		padding: 8,
		width: 200,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 20,
	},
	button: {
		marginTop: 20,
		marginBottom: 20,
		borderWidth: 1,
		borderColor: '#000',
		paddingHorizontal: 30,
		paddingVertical: 10,
		borderRadius: 5,
		backgroundColor: '#f0f0f0',
	},
	buttonText: {
		textAlign: 'center',
		fontSize: 16,
		color: '#000',
	},
	movieList: {
		width: '100%',
	},
	listContainer: {
		paddingHorizontal: 10,
	},
	movieItem: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 15,
		backgroundColor: '#f9f9f9',
		padding: 10,
		borderRadius: 8,
	},
	moviePoster: {
		width: 60,
		height: 90,
		borderRadius: 4,
		marginRight: 15,
	},
	movieInfo: {
		flex: 1,
	},
	movieTitle: {
		fontSize: 16,
		fontWeight: 'bold',
	},
	movieYear: {
		fontSize: 14,
		color: '#666',
	},
	favoriteButton: {
		padding: 10,
	},
	favoriteIcon: {
		fontSize: 24,
	},
	detailsButton: {
		backgroundColor: '#2196F3',
		padding: 8,
		borderRadius: 4,
		marginLeft: 10,
	},
	detailsButtonText: {
		color: 'white',
		fontSize: 14,
	},
})