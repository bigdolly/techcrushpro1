import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme } from 'react-native';

import { AnimatedSplashOverlay } from '@/components/animated-icon';

SplashScreen.preventAutoHideAsync();

export default function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AnimatedSplashOverlay />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="registration/register" />
        <Stack.Screen name="dashboard/create-post" />
        <Stack.Screen name="dashboard" />
        <Stack.Screen name="dashboard/request-received" />
        <Stack.Screen name="dashboard/rate-experience" />
        <Stack.Screen name="dashboard/collector-availability" />
        <Stack.Screen name="dashboard/collector-verification" />
        <Stack.Screen name="dashboard/collector-profile" />
        <Stack.Screen name="dashboard/collection-complete" />
        <Stack.Screen name="forgot-password" />
        <Stack.Screen name="verifycodescreen" />
        <Stack.Screen name="resetpasswordscreen" />
      </Stack>
    </ThemeProvider>
  );
}
