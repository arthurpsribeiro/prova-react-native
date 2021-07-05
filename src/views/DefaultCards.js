import React from "react";
import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import Constants from "expo-constants";

import Image1 from "../../assets/images/cart.jpg";
import Image2 from "../../assets/images/template2.jpg";
import Image3 from "../../assets/images/dashboard.jpg";
import Image4 from "../../assets/images/desk.jpg";

import Header from "../components/Header";
import Title from "../components/Globals/Title";
import Card from "../components/DefaultCards/Card";

export default (props) => {
	return (
		<View style={styles.container}>
			<Header navigation={props.navigation} />
			<ScrollView style={styles.scroll}>
				<View style={styles.subContainer}>
					<Title title="Card Columns" fontWeight="bold" titleColor="#4755AB" />
					<Card
						title="Card title that wraps to a new line"
						titleColor="#000"
						subTitle="This is a longer card with supporting text below as a natural lead-in to
						additional content. This content is a little bit longer."
						image={Image1}
					/>
					<Card
						title="Card title"
						titleColor="#000"
						subTitle="This card has supporting text below as a natural lead-in to additional
						content."
						image={Image2}
					/>
					<Card
						title="Card title"
						titleColor="#000"
						subTitle="This is another card with title and supporting text below. This card has
						some
						additional content to make it slightly taller overall."
						image={Image3}
					/>
				</View>

				<View style={styles.subContainer}>
					<Title title="Grid Columns" fontWeight="bold" titleColor="#4755AB" />
					<Card
						title="Card title"
						titleColor="#000"
						subTitle="This is a longer card with supporting text below as a natural lead-in to
						additional
						content. This content is a little bit longer."
						image={Image2}
					/>
					<Card
						title="Card title"
						titleColor="#000"
						subTitle="This is a longer card with supporting text below as a natural lead-in to
						additional
						content. This content is a little bit longer."
						image={Image4}
					/>
					<Card
						title="Card title"
						titleColor="#000"
						subTitle="This is a longer card with supporting text below as a natural lead-in to
						additional
						content. This content is a little bit longer."
						image={Image3}
					/>
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
});
