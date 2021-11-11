import React from 'react'
import { View, Image } from 'react-native'

const CustomIcon = (props) => {

    const width = props.size ? props.size : 20

    const iconObject = icons.find(ic => ic.name === props.name)

    return (
        <View style={{ ...props.style }} >
            <Image
                style={{
                    width: width,
                    height: width,
                    resizeMode: 'cover',
                }}
                source={iconObject?.link}
            />
        </View>
    )
}

const icons = [
    { name: 'thinking', link: require('../../assets/icons/thinking.png')},
    { name: 'running', link: require('../../assets/icons/running.png')},
    { name: 'tag', link: require('../../assets/icons/tag.png')},
    { name: 'science', link: require('../../assets/icons/science.png')},
    { name: 'entertaintment', link: require('../../assets/icons/entertaintment.png')},
    { name: 'film', link: require('../../assets/icons/film.png')},
    { name: 'general', link: require('../../assets/icons/general.png')},
    { name: 'game', link: require('../../assets/icons/game.png')},
    { name: 'vehicle', link: require('../../assets/icons/vehicle.png')},
    { name: 'book', link: require('../../assets/icons/book.png')},
    { name: 'art', link: require('../../assets/icons/art.png')},
    { name: 'sport', link: require('../../assets/icons/sport.png')},
    { name: 'music', link: require('../../assets/icons/music.png')},
    { name: 'history', link: require('../../assets/icons/history.png')},
    { name: 'cartoon', link: require('../../assets/icons/cartoon.png')},
    { name: 'done', link: require('../../assets/icons/done.png')},
    { name: 'success', link: require('../../assets/icons/success.png')},
    { name: 'fail', link: require('../../assets/icons/fail.png')},
    { name: 'tv', link: require('../../assets/icons/tv.png')},
    { name: 'celebrity', link: require('../../assets/icons/celebrity.png')},
    { name: 'comics', link: require('../../assets/icons/comics.png')},
    { name: 'computer', link: require('../../assets/icons/computer.png')},
    { name: 'geography', link: require('../../assets/icons/geography.png')},
    { name: 'nature', link: require('../../assets/icons/nature.png')},
    { name: 'politics', link: require('../../assets/icons/politics.png')},

]

export default CustomIcon