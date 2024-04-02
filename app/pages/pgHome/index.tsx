import React from "react";
import Avatar from "@app/components/Avatar";
import { useContext, useEffect } from "react";
import { StatusBar, View, Text } from "react-native";
import { NavigationProp, ParamListBase, RouteProp } from "@react-navigation/native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ThemeContext } from "@app/context";
import { mergeStyle } from "@smartface-generated/utils";
export type IPageProps = {
    navigation: NavigationProp<ParamListBase>;
    route: RouteProp<any>;
};
export const HeaderView = (props: any) => {
    const { styles } = useContext(ThemeContext);
    const insets = useSafeAreaInsets();
    const headerViewStyle = mergeStyle([styles[".view"]]);
    const viewStyle = {
        ...headerViewStyle,
        flex: undefined,
        paddingTop: insets.top,
        height: headerViewStyle.height + insets.top
    };
    return <View style={viewStyle}/>;
};
export const headerBar = {
    title: "pgHome",
    classList: [".headerBar", "#pgHome-headerBar"],
    View: HeaderView,
    hasCustomView: false
};
export default (props: IPageProps) => {
    const { styles } = useContext(ThemeContext);
    useEffect(() => {
        props.navigation.setOptions({ header: headerBar.hasCustomView ? (props: NativeStackHeaderProps) => (<HeaderView {...props}/>) : undefined });
    }, [props.navigation]);
    const mergedPageStyle = mergeStyle([".page", "#pgHome-pgHome"]);
    const pageViewStyle = mergedPageStyle;
    return (<View style={pageViewStyle}>
            <StatusBar />
        <View key="customHeader" style={[styles[".view"], styles["#pgHome-customHeader"]]}>
            <View key="iconsContainer" style={[styles[".view"], styles["#pgHome-iconsContainer"]]}><View key="leftSide" style={[styles[".view"], styles["#pgHome-leftSide"]]}><Avatar key="avatar" style={[styles[".view"], styles[".avatar"]]}/><Avatar key="avatar1" style={[styles[".view"], styles[".avatar"]]}/></View><View key="rightSide" style={[styles[".view"], styles["#pgHome-rightSide"]]}><Avatar key="avatar2" style={[styles[".view"], styles[".avatar"]]}/><Avatar key="avatar3" style={[styles[".view"], styles[".avatar"]]}/></View></View></View><View key="segmentContainer" style={[styles[".view"], styles["#pgHome-segmentContainer"]]}><Text key="text1" style={[styles[".text"], styles["#pgHome-segmentActive"]]}>{"Hesaplar\u0131m"}</Text><Text key="text2" style={[styles[".text"], styles["#pgHome-segmentPassive"]]}>{"Kartlar\u0131m"}</Text></View><View key="solidMainBackground" style={[styles[".view"], styles["#pgHome-solidMainBackground"]]}/><View key="accountCard" style={[styles[".view"], styles["#pgHome-accountCard"]]}/></View>);
};
