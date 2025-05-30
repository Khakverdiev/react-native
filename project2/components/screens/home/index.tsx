import { useTheme } from '@/contexts/theme-context';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { FlatList, Image, Pressable, StyleSheet, Text, TextInput, View, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
	const {theme} = useTheme();
	const router = useRouter();
	const [query, setQuery] = useState('');

	const onSearch = () => {
		if (!query.trim()) return;
		router.push({
			pathname: '/search-results',
			params: { query }
		});
	};

	return (
    	<KeyboardAvoidingView
    	  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    	  style={{ flex: 1 }}
   		>
    	  <SafeAreaView
    	    style={[
    	      styles.container,
    	      { backgroundColor: theme === 'dark' ? '#1c1c1e' : '#fff' },
    	    ]}
    	  >
    	    <View style={styles.centeredView}>
    	      <Image
    	        source={require('../../../assets/images/movie.png')}
    	        style={styles.image}
    	      />
    	      <TextInput
    	        placeholder='Find a movie...'
    	        placeholderTextColor={theme === 'dark' ? '#aaa' : '#666'}
    	        style={[
    	          styles.textArea,
    	          { 
    	            color: theme === 'dark' ? '#fff' : '#000',
    	            borderColor: theme === 'dark' ? '#aaa' : '#666',
    	          },
    	        ]}
    	        value={query}
    	        onChangeText={setQuery}
    	        onSubmitEditing={onSearch}
    	      />
    	      <Pressable 
    	        style={[
    	          styles.button,
    	          { 
    	            borderColor: theme === 'dark' ? '#aaa' : '#666',
    	            backgroundColor: theme === 'dark' ? '#333' : '#f0f0f0',
    	          }
    	        ]} 
    	        onPress={onSearch}
    	      >
    	        <Text style={[
    	          styles.buttonText,
    	          { color: theme === 'dark' ? '#fff' : '#000' }
    	        ]}>
    	          Search
    	        </Text>
    	      </Pressable>
    	    </View>
    	  </SafeAreaView>
    	</KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
	container: {
    flex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 30,
  },
  textArea: {
    borderWidth: 1,
    padding: 12,
    width: '100%',
    maxWidth: 300,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    borderWidth: 1,
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 8,
    width: '100%',
    maxWidth: 300,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
})