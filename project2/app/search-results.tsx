import { useTheme } from '@/contexts/theme-context';
import SearchScreens from '@/components/screens/search';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';

export default function SearchResults() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      navigation.setOptions({
        title: 'Search Results',
        headerShown: true,
        headerStyle: {
          backgroundColor: isDark ? '#1c1c1e' : '#fff',
        },
        headerTintColor: isDark ? '#fff' : '#000',
        headerTitleStyle: {
          color: isDark ? '#fff' : '#000',
        },
      });
    }, [navigation, isDark])
  );

  return <SearchScreens />;
}
