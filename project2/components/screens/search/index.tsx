import { useTheme } from '@/contexts/theme-context';
import { useLocalSearchParams, Link } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  release_date: string | null;
}

export default function SearchScreens() {
  const { theme } = useTheme();
  const { query } = useLocalSearchParams<{ query: string }>();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  const isDark = theme === "dark";

  useEffect(() => {
    if (!query) return;

    async function fetchMovies() {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=cf977f4fcd2ee7144a67c432cdbd85f7&query=${query}`
        );
        const data = await response.json();
        setMovies(data.results || []);
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
  }, [query]);

  const renderMovieItem = ({ item }: { item: Movie }) => (
    <View
      style={[
        styles.movieItem,
        { backgroundColor: theme === 'dark' ? '#2c2c2e' : '#f9f9f9' },
      ]}
    >
      {item.poster_path && (
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w200${item.poster_path}` }}
          style={styles.moviePoster}
        />
      )}
      <View style={styles.movieInfo}>
        <Text
          style={[
            styles.movieTitle,
            { color: theme === 'dark' ? '#fff' : '#000' },
          ]}
        >
          {item.title}
        </Text>
        <Text
          style={[
            styles.movieYear,
            { color: theme === 'dark' ? '#aaa' : '#666' },
          ]}
        >
          {item.release_date
            ? new Date(item.release_date).getFullYear()
            : 'N/A'}
        </Text>
      </View>
      <Link
        href={{
          pathname: `/details/[id]`,
          params: {
            id: item.id,
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
  );

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: theme === 'dark' ? '#1c1c1e' : '#fff' },
      ]}
    >
      <Text style={[styles.text, { color: isDark ? '#fff' : '#000' }]}>
        Results:
      </Text>
      {loading ? (
        <Text style={{ color: theme === 'dark' ? '#fff' : '#000', padding: 20 }}>
          Loading...
        </Text>
      ) : (
        <FlatList
          data={movies}
          renderItem={renderMovieItem}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.listContainer}
          style={styles.movieList}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: 
  { 
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  listContainer: { padding: 10 },
  movieItem: {
    flexDirection: 'row',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  movieList: {
		width: '100%',
	},
  moviePoster: { width: 80, height: 120, borderRadius: 6, marginRight: 10 },
  movieInfo: { flex: 1 },
  movieTitle: { fontSize: 16, fontWeight: 'bold' },
  movieYear: { fontSize: 14, marginTop: 4 },
  detailsButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  detailsButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  text: {
    fontSize: 16, 
    fontFamily: "Bold",
    paddingTop: 16,
    paddingBottom: 16
  }
});
