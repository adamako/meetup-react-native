import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {HomeScreen} from "./HomeScreen";
import {DetailsScreen} from "./DetailsScreen";


const Stack = createNativeStackNavigator();

export const MainNavigation = () => {
    return <Stack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: "#00539CFF"
        }, headerTintColor: "white", headerBackTitleVisible: false
    }}>
        <Stack.Screen options={{headerTitle: "Mets Locaux"}} name="Home" component={HomeScreen}/>
        <Stack.Screen name="Details" options={{headerShown:false}} component={DetailsScreen}/>
    </Stack.Navigator>
}