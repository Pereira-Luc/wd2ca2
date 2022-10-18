import { View, Text, Dimensions, TouchableHighlight } from "react-native";
import { StyleSheet } from "react-native";


const stylesMsgBox = StyleSheet.create({
    MsgBox: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: '1%',
        marginBottom: '1%',
    },
    lastMsg: {
        color: '#000',
        fontSize: 8,
    },
    pfPic: {
        backgroundColor: '#000',
        width: Dimensions.get('window').width * 0.15,
        height: Dimensions.get('window').width * 0.15,
        borderRadius: 100,
        marginRight: '2%',
    },
    nameOfUser: {
    },
    textContent: {

    },
    lastMsgBox: {
        flexDirection: 'row',
    }
})

export function MsgBox({ navigation, lastMsg, nameOfUser, date }) {
    const onPress = () => navigation.navigate("MsgRoom", { navigation: navigation });
    return (
        <TouchableHighlight activeOpacity={0.6} underlayColor="#DDDDDD" onPress={onPress}>
            <View style={stylesMsgBox.MsgBox}>
                <View style={stylesMsgBox.pfPic}></View>
                <View style={stylesMsgBox.textContent}>
                    <Text style={stylesMsgBox.nameOfUser}>{nameOfUser}</Text>
                    <View style={stylesMsgBox.lastMsgBox}><Text style={stylesMsgBox.lastMsg}>{lastMsg}</Text><Text style={stylesMsgBox.lastMsg}> - {date}</Text></View>
                </View>
            </View>
        </TouchableHighlight>
    )
}