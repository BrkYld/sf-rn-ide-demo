import React from "react";
import { useContext, useEffect } from "react";
import { StatusBar, View, ImageStyle, Image, Text, Pressable } from "react-native";
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
    title: "pgWelcome",
    classList: [".headerBar", "#pgWelcome-headerbar"],
    View: HeaderView,
    hasCustomView: false
};
export default (props: IPageProps) => {
    const { styles } = useContext(ThemeContext);
    useEffect(() => {
        props.navigation.setOptions({ header: headerBar.hasCustomView ? (props: NativeStackHeaderProps) => (<HeaderView {...props}/>) : undefined });
    }, [props.navigation]);
    const mergedPageStyle = mergeStyle([".page", ".padding-zero"]);
    const pageViewStyle = mergedPageStyle;
    return (<View style={pageViewStyle}>
            <StatusBar />
        <Image key="image1" style={[styles[".image"], styles[".imgbackground"]] as ImageStyle} source={require("@app/assets/images/forest_bg.png")}/><View key="container" style={[styles[".view"], styles["#pgWelcome-container"]]}><View key="view1" style={[styles[".view"], styles["#pgWelcome-view1"]]}><View key="avatarIcon" style={[styles[".view"], styles[".avatarIcon-container"]]}><Image key="imgAvatar" style={[styles[".image"], styles["#pgWelcome-imgAvatar"]] as ImageStyle} source={require("@app/assets/images/notification.png")}/></View></View><View key="brandTitle" style={[styles[".view"], styles["#pgWelcome-brandTitle"]]}><View key="avatarContainer" style={[styles[".view"], styles["#pgWelcome-avatarContainer"]]}><View key="brandAvatar" style={[styles[".view"], styles["#pgWelcome-brandAvatar"]]}><Image key="imgLogo" style={[styles[".image"], styles["#pgWelcome-imgLogo"]] as ImageStyle} source={require("@app/assets/images/garanti.png")}/></View></View><View key="titleContainer" style={[styles[".view"], styles["#pgWelcome-titleContainer"]]}><Text key="txtGaranti" style={[styles[".text"], styles["#pgWelcome-txtGaranti"]]}>{"Garanti BBVA'ya"}</Text><Text key="txtWelcome" style={[styles[".text"], styles["#pgWelcome-txtWelcome"]]}>{"Hos Geldiniz"}</Text></View><View key="buttonsContainer" style={[styles[".view"], styles["#pgWelcome-buttonsContainer"]]}><Pressable key="btnPersonal" style={[styles[".pressable"], styles["#pgWelcome-btnPersonal"]]}><Text key="txtPersonal" style={[styles[".text"], styles["#pgWelcome-txtPersonal"]]}>{"Bireysel"}</Text></Pressable><Pressable key="btnCompany" style={[styles[".pressable"], styles["#pgWelcome-btnPersonal"]]}><Text key="txtCompany" style={[styles[".text"], styles["#pgWelcome-txtPersonal"]]}>{"Kurumsal"}</Text></Pressable></View><View key="txtButtonsContainer" style={[styles[".view"], styles["#pgWelcome-txtButtonsContainer"]]}><View key="beCustomerWrapper" style={[styles[".view"], styles["#pgWelcome-beCustomerWrapper"]]}><Text key="txtBeCustomer" style={[styles[".text"], styles["#pgWelcome-txtBeCustomer"]]}>{"Musterimiz Olun"}</Text></View><View key="nearestAtmContainer" style={[styles[".view"], styles["#pgWelcome-nearestAtmContainer"]]}><Text key="txtNearestATM" style={[styles[".text"], styles["#pgWelcome-txtNearestATM"]]}>{"En Yak\u0131n ATM / Sube    |   Bize Ulas\u0131n"}</Text></View></View></View></View><View key="bottomSheet" style={[styles[".view"], styles["#pgWelcome-bottomSheet"]]}><View key="solidGray" style={[styles[".view"], styles["#pgWelcome-solidGray"]]}/><View key="gridItemsContainer" style={[styles[".view"], styles["#pgWelcome-gridItemsContainer"]]}><View key="item1" style={[styles[".view"], styles["#pgWelcome-item1"]]}><View key="container1" style={[styles[".view"], styles["#pgWelcome-container1"]]}><Image key="img1" style={[styles[".image"], styles["#pgWelcome-img1"]] as ImageStyle} source={require("@app/assets/images//atm.png")}/></View><Text key="txt1" style={[styles[".text"], styles["#pgWelcome-txt1"]]} numberOfLines={2}>{"ATM'den Para \u00C7ek/Yat\u0131r"}</Text></View><View key="item2" style={[styles[".view"], styles["#pgWelcome-item1"]]}><View key="container2" style={[styles[".view"], styles["#pgWelcome-container1"]]}><Image key="img2" style={[styles[".image"], styles["#pgWelcome-img1"]] as ImageStyle} source={require("@app/assets/images/payment.png")}/></View><Text key="txt2" style={[styles[".text"], styles["#pgWelcome-txt1"]]}>{"QR ile Ode"}</Text></View><View key="item3" style={[styles[".view"], styles["#pgWelcome-item1"]]}><View key="container3" style={[styles[".view"], styles["#pgWelcome-container1"]]}><Image key="img3" style={[styles[".image"], styles["#pgWelcome-img1"]] as ImageStyle} source={require("@app/assets/images/home.png")}/></View><Text key="txt3" style={[styles[".text"], styles["#pgWelcome-txt1"]]} numberOfLines={2}>{"Subeye Gitmeden Yap"}</Text></View></View></View></View>);
};
