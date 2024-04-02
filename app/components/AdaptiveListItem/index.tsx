import React from "react";
import { useContext } from "react";
import { View, Text, ImageStyle, Image } from "react-native";
import { ThemeContext } from "@app/context";
type IComponentProps = {
    style?: any;
};
export default (props: any) => {
    const { styles } = useContext(ThemeContext);
    return (<View style={[styles[".view"], styles[".adaptiveListItem"]]} left={30} top={202.22}><View key="itemContainer" style={[styles[".view"], styles[".adaptiveListItem-itemContainer"]]}><Text key="text1" style={[styles[".text"], styles[".adaptiveListItem-text1"]]} numberOfLines={2}>{"Adaptive List Item Title"}</Text><Image key="image1" style={[styles[".image"], styles[".adaptiveListItem-image1"]] as ImageStyle} source={require("@app/assets/images/arrow_right.png")}/></View><View key="separator" style={[styles[".view"], styles[".adaptiveListItem-separator"]]}/></View>);
};
