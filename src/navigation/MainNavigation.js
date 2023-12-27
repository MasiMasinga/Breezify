import React from 'react'

// React Navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import TabNavigation from './TabNavigation';
import Settings from '../screens/settings';
import Search from '../screens/search';
import Onboarding from '../screens/onboarding';
import Favourite from '../screens/favourite';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRoutName="OnboardingScreen"
        >
            <Stack.Screen name='OnboardingScreen' component={Onboarding} />
            <Stack.Screen name='TabNavigation' component={TabNavigation} />
            <Stack.Screen name='FavouriteScreen' component={Favourite} />
            <Stack.Screen name='SearchScreen' component={Search} />
            <Stack.Screen name='SettingsScreen' component={Settings} />
        </Stack.Navigator>
    )
}

export default MainNavigation