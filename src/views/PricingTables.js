import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Constants from "expo-constants";

import Header from "../components/Header";

export default (props) => {
	return (
		<View style={styles.container}>
			<Header navigation={props.navigation} />
			<Text>Pricing Tables</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Constants.statusBarHeight,
	},
});
