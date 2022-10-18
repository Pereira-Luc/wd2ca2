import { View, Text, Button, Dimensions, TextInput, ScrollView, KeyboardAvoidingView } from "react-native";
import { StyleSheet } from "react-native";
import { MsgBubbleReceive } from "./MsgBubbleReceive";
import { MsgBubbleSend } from "./MsgBubbleSend";


const stylesMsgRoom = StyleSheet.create({
    MsgBox: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: '1%',
        marginBottom: '1%',

    },
    header: {
        position: 'fixed',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#AAA',
        paddingBottom: '2%',
    },
    spacer: {
        top: '0%',
        padding: '6%',
    },
    bubbleButtonLeft: {
        marginLeft: '5%',
        display: 'flex',
        top: '0%',
        backgroundColor: '#000',
        width: Dimensions.get('window').width * 0.10,
        height: Dimensions.get('window').width * 0.10,
        borderRadius: 100,
    }, leftSideHeader: {
        display: 'flex',
        flexDirection: 'row',
    }, centerAlignText: {
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    containerMain: {
        flex: 1,
    }, head: {
        position: 'absolute',
        width: '100%',
        height: Dimensions.get('window').height * 0.11,
        backgroundColor: '#AAA',
    }, footer: {
        display: 'flex',
        position: 'fixed',
        height: '10%',
        backgroundColor: '#AAA',
        width: '100%',
        flexDirection: 'row',
    }, msgInput: {
        backgroundColor: '#000',
        width: '75%',
        padding: '2,5%',
        borderRadius: 15,
        marginTop: '3%',
        marginLeft: '3%',
    }, container: {
        flex: 1,
        marginLeft: '5%',
        marginRight: '5%',
    }, msgInputContainer: {
        display: 'flex',
        flexDirection: 'row',
    }, msgInputContainerCenter: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        marginTop: '3%',
        borderRadius: 15,
        marginLeft: '3%',
    }
})

export function MsgRoom({ navigation }) {
    const onPress = () => navigation.navigate("MainPage");
    return (


        <View style={stylesMsgRoom.containerMain}>
            <View style={stylesMsgRoom.head}></View>
            <View style={stylesMsgRoom.container}>
                <View style={stylesMsgRoom.spacer}></View>
                <View style={stylesMsgRoom.header}>
                    <View style={stylesMsgRoom.leftSideHeader}>
                        <View style={{ justifyContent: "center" }}><Button title="Back" onPress={onPress}></Button></View>
                        <View style={stylesMsgRoom.bubbleButtonLeft}></View>
                        <View style={{ justifyContent: "center" }}><Text style={{ marginLeft: "5%" }}>Name Of User</Text></View>
                    </View>
                </View>
                <ScrollView>
                    <MsgBubbleReceive></MsgBubbleReceive>
                    <MsgBubbleSend></MsgBubbleSend>
                    <MsgBubbleReceive></MsgBubbleReceive>
                    <MsgBubbleReceive></MsgBubbleReceive>
                    <MsgBubbleReceive></MsgBubbleReceive>
                    <MsgBubbleSend></MsgBubbleSend>
                    <MsgBubbleSend></MsgBubbleSend>
                    <MsgBubbleReceive></MsgBubbleReceive>
                    <MsgBubbleReceive></MsgBubbleReceive>
                    <MsgBubbleSend></MsgBubbleSend>
                    <MsgBubbleReceive></MsgBubbleReceive>
                    <MsgBubbleSend></MsgBubbleSend>
                </ScrollView >
            </View>
            <View style={stylesMsgRoom.footer} >
                <View style={stylesMsgRoom.container}>
                    <View style={stylesMsgRoom.msgInputContainer}>
                        <TextInput placeholder="Msg" style={stylesMsgRoom.msgInput}></TextInput>
                        <View style={stylesMsgRoom.msgInputContainerCenter}>
                            <Button title="Send" ></Button>
                        </View>
                    </View>
                </View>
            </View>
            <KeyboardAvoidingView behavior="padding">
            </KeyboardAvoidingView>
        </View >
    )
}