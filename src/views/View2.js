import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default (props) => {
	return (
		<View style={styles.container}>
			<Text>Tela 2</Text>
			<Button
				title="Ir para tela 1"
				onPress={() => props.navigation.navigate("Tela1")}
			/>
			<Button
				title="Ir para home"
				onPress={() => props.navigation.navigate("Home")}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {},
});
