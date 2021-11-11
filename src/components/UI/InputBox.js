import React, { useState } from 'react'
import { StyleSheet, View, TextInput, ActivityIndicator } from 'react-native'
import colors from '../../constants/colors'

const InputBox = (props) => {
    const [editing, setEditing] = useState(false)
    const [watchError, setWatchError] = useState(false)

    const errorMessage = props.errorMessage ? props.errorMessage : 'Please insert a valid value!'
    const placeholder = editing ? '' : (watchError && props.error ? errorMessage : props.placeholder)

    if (props.hide) {
        return <View />
    }

    return (
        <View style={{ ...styles.container, ...props.style }}>
            <View style={{ ...styles.inputContainer }} >
                <TextInput
                    style={{
                        ...styles.input,
                        borderWidth: editing ? 1.5 : 1,
                        borderColor: editing ? colors.tertiary : (watchError && props.error) ? 'tomato' : '#ccc',
                        color: colors.primary,
                    }}
                    placeholderTextColor={watchError && props.error ? colors.danger : '#808080'}
                    onChangeText={(val) => { props.onChangeText(val) }}
                    placeholder={placeholder}
                    onTouchStart={() => setEditing(true)}
                    onBlur={() => { setEditing(false); setWatchError(true) }}
                    value={props.value}
                    autoCorrect={false}
                    autoCapitalize='none'
                    multiline={false}
                    keyboardType={props.keyboardType}
                />
                {props.loading && <ActivityIndicator style={{ position: 'absolute', right: 10, top: 5 }} size='small' color={labelColor} />}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    inputContainer: {
        width: '100%',
    },
    input: {
        width: '100%',
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingTop: 10,
        paddingBottom: 12,
        borderRadius: 5,
        textAlign: 'center'
    },
    error: {
        color: 'red',
        marginTop: 10,
    },
})

export default InputBox