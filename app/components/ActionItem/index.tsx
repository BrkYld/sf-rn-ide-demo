import React from "react";
import { useContext } from "react";
import { View, Text, ImageStyle, Image } from "react-native";
import { ThemeContext } from "@app/context";
type IComponentProps = {
    style?: any;
};
export default (props: any) => {
    const { styles } = useContext(ThemeContext);
    return (<View style={[styles[".view"], styles[".navItem"]]} left={258.54} top={685.37}><View key="avatarContainer" style={[styles[".view"], styles[".avatar"]]}><Image key="imgAvatar" style={[styles[".image"], styles[".avatar-image1"]] as ImageStyle} source={require("@app/assets/images/garanti.png")}/></View><Text key="text1" style={[styles[".text"], styles[".actionItem-text1"]]}>{"Action"}</Text></View>);
};
