import React from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Image,
	TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import profileImg from "../../assets/images/profileimg.jpg";

export default (props) => {
	return (
		<>
			<View style={styles.container}>
				<TouchableOpacity onPress={() => props.navigation.openDrawer()}>
					<Icon name="bars" size={30} />
				</TouchableOpacity>
				<TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
					<Image style={styles.img} source={profileImg} />
				</TouchableOpacity>
			</View>
			<View style={styles.subContainer}>
				<View style={styles.search}>
					<TextInput placeholder="Search Here..." />
					<TouchableOpacity>
						<Icon name="search" size={14} color="#333" />
					</TouchableOpacity>
				</View>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 20,
	},
	subContainer: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		marginBottom: 20,
	},
	img: {
		width: 40,
		height: 40,
		borderRadius: 20,
	},
	search: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		width: "95%",
		backgroundColor: "#eff1f9",
		paddingHorizontal: 10,
		paddingVertical: 5,
		borderRadius: 5,
	},
});
