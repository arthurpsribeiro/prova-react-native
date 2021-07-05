import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import Title from "../Globals/Title";
import SubTitle from "../Globals/SubTitle";

export default (props) => {
	return (
		<View style={styles.container}>
			<Image style={styles.img} source={props.image} />
			<View style={styles.subContainer}>
				<Title
					title={props.title}
					titleColor={props.titleColor}
					fontWeight={props.fontWeight}
				/>
				<SubTitle subTitle={props.subTitle} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
		// width: "100%",
		// height: 130,
		// marginVertical: 10,
		margin: 10,
		// borderRadius: 10,
		borderColor: "#cecece",
		borderStyle: "solid",
		borderWidth: 1,
		// backgroundColor: "red",
	},
	subContainer: {
		padding: 20,
		marginBottom: 15,
	},
	containerForBigCard: {
		alignItems: "center",
		justifyContent: "space-between",
		width: "100%",
		height: 390,
		marginVertical: 10,
		padding: 15,
		borderRadius: 10,
		borderColor: "#cecece",
		borderStyle: "solid",
		borderWidth: 3,
	},
	img: {
		width: "100%",
		height: 250,
	},
});
