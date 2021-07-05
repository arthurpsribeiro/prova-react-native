import React from "react";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";

import Home from "./views/Home";
import Tela1 from "./views/View1";
import Tela2 from "./views/View2";
import Menu from "./components/Menu";

const menuConfig = {
	initialRouteName: "Home",
	contentComponent: Menu,
	contentOptions: {
		labelStyles: {
			fontWeight: "normal",
			fontSize: 20,
		},
		activeLabelStyle: {
			color: "red",
			fontWeight: "bold",
		},
	},
};

const menuRoutes = {
	Home,
	Tela1,
	Tela2,
};

const menuNavigator = createDrawerNavigator(menuRoutes, menuConfig);

export default createAppContainer(menuNavigator);
