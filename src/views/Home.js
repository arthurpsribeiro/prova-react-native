import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Constants from "expo-constants";

import Header from "../components/Header";

export default (props) => {
	return (
		<View style={styles.container}>
			<Header navigation={props.navigation} />
			<Text>Home</Text>
			<Button
				title="Ir para tela 1"
				onPress={() => props.navigation.navigate("Tela1")}
			/>
			<Button
				title="Ir para tela 2"
				onPress={() => props.navigation.navigate("Tela2")}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Constants.statusBarHeight,
	},
});
