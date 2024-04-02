import React from "react";
import { useContext } from "react";
import { View } from "react-native";
import { ThemeContext } from "@app/context";
type IComponentProps = {
    style?: any;
};
export default (props: any) => {
    const { styles } = useContext(ThemeContext);
    return (<View style={[styles[".view"]]}/>);
};
