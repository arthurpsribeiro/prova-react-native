import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default (props) => {
	return (
		<View style={styles.container}>
			<Text
				style={[
					styles.txt,
					{ color: props.titleColor || "#000" },
					{ fontWeight: props.fontWeight || "normal" },
				]}
			>
				{props.title}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {},
	txt: {
		fontSize: 24,
	},
});
