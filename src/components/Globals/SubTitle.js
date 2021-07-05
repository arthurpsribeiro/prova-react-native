import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default (props) => {
	return (
		<View style={styles.container}>
			<Text>{props.subTitle}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {},
	txt: {
		fontSize: 16,
		color: "#5d6b71",
	},
});
