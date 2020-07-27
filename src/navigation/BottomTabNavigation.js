import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import APP_SCREEN from '../screen';
import SCREEN_NAME from './ScreenName';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigation = () => {
    const { HOME_SCREEN_NAME, NEW_POST_SCREEN_NAME, NOTIFICATION_SCREEN_NAME, PROFILE_SCREEN_NAME, SETTING_SCREEN_NAME } = SCREEN_NAME;
    const { HOME_SCREEN, NEW_POST_SCREEN, NOTIFICATION_SCREEN, PROFILE_SCREEN, SETTING_SCREEN } = APP_SCREEN;
    const icSize = 26;
    return (
        <Tab.Navigator initialRouteName={HOME_SCREEN_NAME}
            activeColor="#f0edf6"
            inactiveColor="#3e2465"
            barStyle={{ backgroundColor: '#694fad' }}>

            <Tab.Screen
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name={'home'} color={color} size={icSize} />
                    )
                }}
                name={HOME_SCREEN_NAME}
                component={HOME_SCREEN}
            />


            <Tab.Screen
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name={'home'} color={color} size={icSize} />
                    )
                }}
                name={PROFILE_SCREEN_NAME}
                component={PROFILE_SCREEN}
            />

            <Tab.Screen
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name={'home'} color={color} size={icSize} />
                    )
                }}
                name={NEW_POST_SCREEN_NAME}
                component={NEW_POST_SCREEN}
            />

            <Tab.Screen
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name={'home'} color={color} size={icSize} />
                    )
                }}
                name={NOTIFICATION_SCREEN_NAME}
                component={NOTIFICATION_SCREEN}
            />

            <Tab.Screen
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name={'home'} color={color} size={icSize} />
                    )
                }}
                name={SETTING_SCREEN_NAME}
                component={SETTING_SCREEN}
            />
        </Tab.Navigator>
    );
}

export default BottomTabNavigation;