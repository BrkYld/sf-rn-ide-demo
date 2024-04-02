import React from "react";
import { useContext } from "react";
import { View, ImageStyle, Image } from "react-native";
import { ThemeContext } from "@app/context";
type IComponentProps = {
    style?: any;
};
export default (props: any) => {
    const { styles } = useContext(ThemeContext);
    return (<View style={[styles[".view"], styles[".avatar"]]} left={53.66} top={318.29}><Image key="image1" style={[styles[".image"], styles[".avatar-image1"]] as ImageStyle} source={require("@app/assets/images//garanti.png")}/></View>);
};
