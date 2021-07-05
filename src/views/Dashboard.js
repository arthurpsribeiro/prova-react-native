import React from "react";
import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import Constants from "expo-constants";

import Header from "../components/Header";
import Title from "../components/Globals/Title";
import SubTitle from "../components/Globals/SubTitle";
import Card from "../components/Dashboard/Card";

export default (props) => {
	return (
		<View style={styles.container}>
			<Header navigation={props.navigation} />
			<ScrollView style={styles.scroll}>
				<Title title="Hi John, Welcome back" />
				<SubTitle subTitle="Very detailed and featured admin." />
				<Card
					title="28.75 M"
					titleColor="#007bff"
					fontWeight="bold"
					subTitle="Total Users"
					size="small"
					style="container"
				/>
				<Card
					title="51.25 K"
					titleColor="#6c757d"
					fontWeight="bold"
					subTitle="Daily Visitors"
					size="small"
				/>
				<Card
					title="166.89 M"
					titleColor="#28a745"
					fontWeight="bold"
					subTitle="Downloads"
					size="small"
				/>
				<Card
					title="1.250 K"
					titleColor="#dc3545"
					fontWeight="bold"
					subTitle="Purchased"
					size="small"
				/>
				<Card
					title="Bar Chart"
					titleColor="#4755AB"
					subTitle="Updated 2 hours ago"
					size="big"
				/>
				<Card
					title="Line Chart"
					titleColor="#4755AB"
					subTitle="Updated just now"
					size="big"
				/>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Constants.statusBarHeight,
	},
	scroll: {
		paddingHorizontal: 15,
		backgroundColor: "#eff1f9",
	},
});
