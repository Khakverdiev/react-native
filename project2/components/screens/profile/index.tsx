import { useTheme } from '@/contexts/theme-context';
import { Text, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {
  const { theme } = useTheme();

  return (
    <SafeAreaView style={[styles.container, theme === 'dark' && { backgroundColor: '#1c1c1e' }]}>
      <Image
        source={{ uri: 'https://i.pravatar.cc/150?img=12' }}
        style={styles.avatar}
      />
      <Text style={[styles.name, theme === 'dark' && { color: '#fff' }]}>John Doe</Text>
      <Text style={[styles.email, theme === 'dark' && { color: '#ccc' }]}>john.doe@example.com</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
    color: '#777',
  },
});
