import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";

import DashboardScreen from "../views/dashboard/dashboard";
import MapScreen from '../views/map/map';

//Screen in the Home tab
const DashboardContainer = createStackNavigator(
    {
        Home: DashboardScreen,
        MapView: MapScreen
    },
    {
        initialRouteName: "Home"
    }
);

//Root navigator
export const AppNavigator = createStackNavigator({
    dashboard: {
        screen: DashboardScreen
    },
    map: {
        screen: MapScreen
    },
}, {
    initialRouteName: 'dashboard',
    headerMode: 'none'
});


export default createAppContainer(AppNavigator);