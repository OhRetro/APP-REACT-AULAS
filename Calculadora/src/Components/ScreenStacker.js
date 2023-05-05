import {createNativeStackNavigator} from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const  createStackScreen = (screenComponent, name, title, subtitle) => (
    <Stack.Screen name={name} component={screenComponent} options={{title: `${title}${subtitle ? `: ${subtitle}` : ""}`}}/>
)

function createStacksScreens(stacksScreens) {
    return stacksScreens.map((stackScreen) =>
        createStackScreen(stackScreen[0], stackScreen[1], stackScreen[2])
    );
}

export { Stack, createStackScreen, createStacksScreens}