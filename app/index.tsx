import { useState } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
		<SafeAreaView>
			<View style={styles.container}>
				<Text style={styles.buttonText}>{count}</Text>
				<Pressable style={styles.button} onPress={increment}>
          <Text style={styles.buttonText}>Increment</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={reset}>
          <Text style={styles.buttonText}>Reset</Text>
        </Pressable>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		gap: 12,
		padding: 16,
	},
	button: {
		padding: 24,
		borderRadius: 8,
		backgroundColor: '#444666',
	},
	buttonText: {
		color: '#000',
		fontSize: 24,
	},
})