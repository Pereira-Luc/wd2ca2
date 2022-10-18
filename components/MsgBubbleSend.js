import { View, Text, Button, Dimensions, TextInput, TouchableHighlight } from "react-native";
import { StyleSheet } from "react-native";


const stylesMsgBox = StyleSheet.create({
    MsgBox: {
        display: 'flex',
        marginTop: '1%',
        marginBottom: '1%',
        justifyContent: 'flex-end',
    },
    textBubble: {
        maxWidth: Dimensions.get('window').width * 0.42,
        backgroundColor: '#AAB',
        borderRadius: 10,
    }, textBubblePadding: {
        padding: Dimensions.get('window').width * 0.02,
    },
    rightSide: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }
})

export function MsgBubbleSend() {
    return (
        <TouchableHighlight activeOpacity={0.6} underlayColor="#DDDDDD" style={stylesMsgBox.rightSide}>
            <View style={stylesMsgBox.MsgBox}>
                <View style={stylesMsgBox.textContent}>
                    <View style={stylesMsgBox.textBubble}>
                        <Text style={stylesMsgBox.textBubblePadding}>t t t t t t t t t t t tt t t t t t tt t </Text>
                    </View>
                </View>
            </View>
        </TouchableHighlight>
    )
}