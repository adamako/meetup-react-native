import {Dimensions, Image, Text, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";

export const Item = ({imageUri}) => {
    const size = Dimensions.get("window")
    const navigation = useNavigation()

    return <TouchableOpacity onPress={() => navigation.navigate("Details", {imageUri: imageUri})} style={{
        flexDirection: "row",
        padding: 10,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 20,
        marginBottom: 10
    }}>
        <View style={{width: size.width * 0.2}}>
            <Image style={{height: 80, width: 80, marginTop: 10, borderRadius: 100, marginRight: 10}}
                   source={{uri: imageUri}}/>
        </View>
        <View style={{width: size.width * 0.6}}>
            <Text numberOfLines={4} style={{fontSize: 18, textAlign: "justify"}}>Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. A atque
                consectetur dolorem tenetur.
                Amet aut commodi deleniti dolores earum facilis illum nulla officiis possimus, quasi quod
                repellat saepe tenetur veritatis?</Text>
        </View>
    </TouchableOpacity>
}