import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Title from "../Globals/Title";
import SubTitle from "../Globals/SubTitle";

export default (props) => {
	return (
		<View
			// style={`styles.${style}`}
			style={
				props.size == "small" ? styles.container : styles.containerForBigCard
			}
		>
			<Title
				title={props.title}
				titleColor={props.titleColor}
				fontWeight={props.fontWeight}
			/>
			<SubTitle subTitle={props.subTitle} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "flex-end",
		width: "100%",
		height: 130,
		marginVertical: 10,
		padding: 30,
		borderRadius: 10,
		borderColor: "#cecece",
		borderTopColor: "#4755AB",
		borderStyle: "solid",
		borderWidth: 3,
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
});
