import { View, Text, Button, Dimensions, TextInput, TouchableHighlight } from "react-native";
import { StyleSheet } from "react-native";


const stylesMsgBox = StyleSheet.create({
    MsgBox: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '1%',
        marginBottom: '1%',
    },
    lastMsg: {
        color: '#000',
        fontSize: 8,
    },
    pfPic: {
        backgroundColor: '#000',
        width: Dimensions.get('window').width * 0.07,
        height: Dimensions.get('window').width * 0.07,
        borderRadius: 100,
        marginRight: '2%',
    },
    textBubble: {
        maxWidth: Dimensions.get('window').width * 0.42,
        backgroundColor: '#AAB',
        borderRadius: 10,
    }, textBubblePadding: {
        padding: Dimensions.get('window').width * 0.02,
    }
})

export function MsgBubbleReceive() {
    return (
        <TouchableHighlight activeOpacity={0.6} underlayColor="#DDDDDD">
            <View style={stylesMsgBox.MsgBox}>
                <View style={stylesMsgBox.pfPic}></View>
                <View style={stylesMsgBox.textContent}>
                    <View style={stylesMsgBox.textBubble}>
                        <Text style={stylesMsgBox.textBubblePadding}>This Is a Test Of how Big it gets</Text>
                    </View>
                </View>
            </View>
        </TouchableHighlight>
    )
}