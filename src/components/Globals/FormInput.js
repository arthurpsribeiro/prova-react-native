import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

export default (props) => {
	return (
		<View style={styles.container}>
			<Text style={styles.txt}>{props.label}</Text>
			<TextInput style={styles.input} placeholder={props.placeholder} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginVertical: 5,
	},
	txt: {
		fontSize: 18,
		marginBottom: 3,
	},
	input: {
		padding: 15,
		borderWidth: 2,
		borderColor: "#cecece",
		borderRadius: 5,
	},
});
