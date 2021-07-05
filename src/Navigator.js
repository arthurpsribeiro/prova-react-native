import React from "react";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";

import Menu from "./components/Menu";
import Dashboard from "./views/Dashboard";
import DefaultCards from "./views/DefaultCards";
import PricingTables from "./views/PricingTables";
import ContentBlocks from "./views/ContentBlocks";
import Forms from "./views/Forms";

const menuConfig = {
	initialRouteName: "Dashboard",
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
	Dashboard,
	DefaultCards,
	PricingTables,
	ContentBlocks,
	PricingTables,
	Forms,
};

const menuNavigator = createDrawerNavigator(menuRoutes, menuConfig);

export default createAppContainer(menuNavigator);
