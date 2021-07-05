import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default (props) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={() => props.navigation.openDrawer()}>
				<Icon name="bars" size={30} />
			</TouchableOpacity>
			<TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
				<Text>Logo</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		padding: 20,
	},
});
