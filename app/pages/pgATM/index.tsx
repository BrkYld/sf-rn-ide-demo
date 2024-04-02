import React from "react";
import AdaptiveListItem from "@app/components/AdaptiveListItem";
import { useContext, useEffect } from "react";
import { StatusBar, View, FlatList, ImageStyle, Image, Text } from "react-native";
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
    title: "ATM/Sube",
    classList: [".headerBar", "#pgATM-headerBar"],
    View: HeaderView,
    hasCustomView: false
};
export default (props: IPageProps) => {
    const { styles } = useContext(ThemeContext);
    useEffect(() => {
        props.navigation.setOptions({ header: headerBar.hasCustomView ? (props: NativeStackHeaderProps) => (<HeaderView {...props}/>) : undefined });
    }, [props.navigation]);
    const mergedPageStyle = mergeStyle([".page", "#pgATM-pgATM"]);
    const pageViewStyle = mergedPageStyle;
    return (<View style={pageViewStyle}>
            <StatusBar />
        <FlatList key="flatList1" style={[styles[".flatList"], styles["#pgATM-flatList1"]]} contentContainerStyle={[styles[".contentContainer"], styles["#pgATM-contentContainer"]]} data={[1, 2, 3]} renderItem={({ item, index }) => <AdaptiveListItem key="adaptiveListItem" style={[styles[".view"], styles[".adaptiveListItem"]]}/>}/><View key="doItFromHomeContainer" style={[styles[".view"], styles["#pgATM-doItFromHomeContainer"]]}><View key="wrapper" style={[styles[".view"], styles["#pgATM-wrapper"]]}><View key="imgWrapper" style={[styles[".view"], styles["#pgATM-imgWrapper"]]}><Image key="imgDoitFromHome" style={[styles[".image"], styles["#pgATM-imgDoitFromHome"]] as ImageStyle} source={require("@app/assets/images/home.png")}/></View><View key="descWrapper" style={[styles[".view"], styles["#pgATM-descWrapper"]]}><Text key="txtBranchDesc" style={[styles[".text"], styles["#pgATM-txtBranchDesc"]]}>{"\u015Eubeye Gitmeden Yap\u0131n!"}</Text><Text key="txtOperationDesc" style={[styles[".text"], styles["#pgATM-txtOperationDesc"]]} numberOfLines={3}>{"\u0130\u015Flemlerinizi \u015Fubeye gitmeden dijitalden yapabilirsiniz!"}</Text><Text key="txtDetail" style={[styles[".text"], styles["#pgATM-txtDetail"]]}>{"Detayl\u0131 Bilgi"}</Text></View></View></View></View>);
};
