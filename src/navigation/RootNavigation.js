import React, { useEffect } from 'react'

// React Native Navigation
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Screens
import MainNavigation from './MainNavigation';

const RootNavigation = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <MainNavigation />
            </NavigationContainer>
        </SafeAreaProvider>
    )
}

export default RootNavigation