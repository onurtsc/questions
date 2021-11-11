import React from 'react'
import { TouchableOpacity, Image, View, ActivityIndicator } from 'react-native'
import colors from '../../constants/colors';


const ButtonIcon = (props) => {

    const width = props.size ? props.size : 20

    const iconObject = icons.find(ic => ic.name === props.name)

    if(props.loading) {
        <View style={{paddingHorizontal: 10, ...props.style}}>
            <ActivityIndicator size='small' color={colors.primary} />
        </View>
    }

    return (
        <TouchableOpacity style={{...props.style}} onPress={props.onPress} >
            <Image
                style={{
                    width: width,
                    height: width,
                    resizeMode: 'cover'
                }}
                source={iconObject?.link}
            />
        </TouchableOpacity>
    )
}

const icons = [
    { name: 'back', link: require('../../assets/icons/back.png'), },
    { name: 'add', link: require('../../assets/icons/add.png'), },
    { name: 'next', link: require('../../assets/icons/next.png'), },

]

export default ButtonIcon