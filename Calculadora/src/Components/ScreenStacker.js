import {createNativeStackNavigator} from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

function createStackScreen(screenComponent, nome, display) {
    return (
        <Stack.Screen name={nome} component={screenComponent} options={{title: `Calculadora${display ? `: ${display}` : ""}`}}/>
    )
}

function createStacksScreens(stacksScreens) {
    return stacksScreens.map((stackScreen) =>
        createStackScreen(stackScreen[0], stackScreen[1], stackScreen[2])
    );
}

export { Stack, createStackScreen, createStacksScreens}