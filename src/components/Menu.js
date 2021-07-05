import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { DrawerItems } from "react-navigation-drawer";
import Constants from "expo-constants";

export default (props) => {
	return (
		<ScrollView>
			<View style={styles.container}>
				<Text style={styles.header}>COLLECTIVE</Text>
			</View>
			<DrawerItems {...props} />
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingTop: Constants.statusBarHeight,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#4755AB",
	},
	header: {
		color: "#fff",
		fontSize: 30,
		lineHeight: 60,
		fontWeight: "bold",
		margin: 0,
	},
});
