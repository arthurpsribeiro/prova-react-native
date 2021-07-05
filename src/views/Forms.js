import React from "react";
import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import Constants from "expo-constants";

import Header from "../components/Header";
import Title from "../components/Globals/Title";
import SubTitle from "../components/Globals/SubTitle";
import Card from "../components/Dashboard/Card";
import FormInput from "../components/Globals/FormInput";

export default (props) => {
	return (
		<View style={styles.container}>
			<Header navigation={props.navigation} />
			<ScrollView style={styles.scroll}>
				<View style={styles.subContainer}>
					<Title title="Forms" fontWeight="bold" titleColor="#4755AB" />
					<View style={styles.formArea}>
						<FormInput label="Email" placeholder="Email" />
						<FormInput label="PassWord" placeholder="PassWord" />
						<FormInput label="Address" placeholder="1234 Main St" />
						<FormInput
							label="Address 2"
							placeholder="Apartment, studio, or floor"
						/>
						<FormInput label="City" placeholder="" />
						<FormInput label="Zip" placeholder="" />
					</View>
					<Button title=" Sign In" />
				</View>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Constants.statusBarHeight,
	},
	subContainer: {
		backgroundColor: "#fff",
		// backgroundColor: "yellow",
		padding: 20,
		marginBottom: 35,
		width: "100%",
	},
	scroll: {
		paddingHorizontal: 15,
		backgroundColor: "#eff1f9",
	},
	formArea: {
		marginVertical: 30,
	},
});
