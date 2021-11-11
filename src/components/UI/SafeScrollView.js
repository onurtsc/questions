import React, { useState, useEffect, useRef } from 'react'
import { ScrollView, Keyboard, StyleSheet, View, KeyboardAvoidingView, Platform } from 'react-native'

const SafeScrollView = props => {
    const [keyboardHeight, setKeyboardHeight] = useState(0)

    const scrollRef = useRef(null)

    const keyboarOpenHandler = (e) => {
        setKeyboardHeight(e.endCoordinates.height)
    }
    const keyboarCloseHandler = (e) => {
        setKeyboardHeight(0)
    }


    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener("keyboardDidShow", keyboarOpenHandler);
        const keyboardDidHideListener = Keyboard.addListener("keyboardDidHide", keyboarCloseHandler);
        return () => {
            keyboardDidShowListener.remove()
            keyboardDidHideListener.remove()
        };
    }, []);

    return (
        <View style={{
            ...styles.screen,
            ...props.containerStyle,
            paddingBottom: Platform.OS === 'android' ? null : keyboardHeight ? keyboardHeight : 0
        }} >
            <ScrollView
                style={styles.scrollStyle}
                contentContainerStyle={{ ...styles.contentContainerStyle, ...props.contentContainerStyle }}
                keyboardShouldPersistTaps="handled"
                ref={scrollRef}
                onScroll={props.onScroll}
                showsVerticalScrollIndicator={props.showsVerticalScrollIndicator ? props.showsVerticalScrollIndicator : false}
            >

                <KeyboardAvoidingView style={{ flex: 1, ...props.style }} >
                    {props.children}
                </KeyboardAvoidingView>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingHorizontal: 20
    },
    scrollStyle: {},
    contentContainerStyle: {},
})

export default SafeScrollView