import {View, Text, TouchableOpacity, Image, useWindowDimensions, Button} from "react-native";
import {useNavigation, useRoute} from "@react-navigation/native";
import {Ionicons} from '@expo/vector-icons';

export const DetailsScreen = () => {
    const route = useRoute()
    const size = useWindowDimensions()
    const navigation = useNavigation()

    return <View style={{backgroundColor: "black", flex: 1}}>
        <TouchableOpacity onPress={() => navigation.goBack()}
                          style={{position: "absolute", zIndex: 2000, top: 50, left: 20}}>
            <Ionicons name="arrow-back-circle" size={45} color="white"/>
        </TouchableOpacity>
        <View style={{
            position: "absolute", zIndex: 1000, backgroundColor: "black", borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30, opacity: 0.5, height: size.height / 2, width: size.width
        }}/>
        <View style={{width: size.width, height: size.height / 2}}>
            <Image source={{uri: route.params.imageUri}}
                   style={{
                       width: size.width,
                       height: size.height / 2,
                       borderBottomLeftRadius: 30,
                       borderBottomRightRadius: 30
                   }}/>
        </View>
        <View style={{backgroundColor: "#fff", margin: 10, padding: 10, borderRadius: 10}}>
            <Text style={{}}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cum dicta harum magnam molestias
                quibusdam voluptatibus. Deleniti ea eaque expedita nemo quam quasi quis? Aliquam consequuntur eos facere
                officia sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cum dicta harum magnam molestias
                quibusdam voluptatibus. Deleniti ea eaque expedita nemo quam quasi quis? Aliquam consequuntur eos facere
                officia sapiente?
            </Text>
        </View>
        <Button title={"Commander"} />
    </View>
}