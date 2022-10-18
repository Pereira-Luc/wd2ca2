import { View, Text, Button, Dimensions, TextInput, ScrollView } from "react-native";
import { StyleSheet } from "react-native";
import { MsgBox } from "../components/MsgBox";
import { getFriends } from "../lib/getAllAboutMsg";
import React, { useState, useEffect } from 'react';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    spacer: {
        top: '0%',
        padding: '7%',
    },
    bubbleButtonRight: {
        marginLeft: '5%',
        display: 'flex',
        top: '0%',
        backgroundColor: '#000',
        width: '7%',
        height: Dimensions.get('window').width * 0.07,
        borderRadius: 100,
    },
    bubbleButtonLeft: {
        marginRight: '5%',
        display: 'flex',
        top: '0%',
        backgroundColor: '#000',
        width: '7%',
        height: Dimensions.get('window').width * 0.07,
        borderRadius: 100,
    },
    header: {
        position: 'fixed',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textH1Style: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    searchBox: {
        margin: '5%',
        marginTop: '2%',
        backgroundColor: '#AAA',
        borderRadius: 10,
        padding: '3%',
    },
    footer: {
        position: 'fixed',
        height: '10%',
        backgroundColor: '#AAA',
    },
    msgScroll: {
        overflow: 'visible',
    }
})


export const MainPage = ({ navigation }) => {
    let firends = []



    return (
        <View style={styles.container}>
            <View style={styles.spacer}></View>
            <View style={styles.header}>
                <View style={styles.bubbleButtonRight}>
                    <Button title="" ></Button>
                </View>
                <Text style={styles.textH1Style}>Chats</Text>
                <View style={styles.bubbleButtonLeft}>
                    <Button title="" ></Button>
                </View>
            </View>
            <View style={styles.searchBox}>
                <TextInput placeholder="Search"></TextInput>
            </View>
            <ScrollView>

            </ScrollView>
            <View style={styles.footer}></View>
        </View >
    )
}


