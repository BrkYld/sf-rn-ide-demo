import React from "react";
import Avatar from "@app/components/Avatar";
import { useContext } from "react";
import { View, Text } from "react-native";
import { ThemeContext } from "@app/context";
type IComponentProps = {
    style?: any;
};
export default (props: any) => {
    const { styles } = useContext(ThemeContext);
    return (<View style={[styles[".view"], styles[".navItem"]]} left={258.54} top={685.37}><Avatar key="avatar" style={[styles[".view"], styles[".avatar"]]}/><Text key="text1" style={[styles[".text"], styles[".actionItem-text1"]]}>{"Action"}</Text></View>);
};
