const findIcon = (value) => {
    let icon = 'general'
    if (!value) {
        return
    }
    if (value.includes('Science')) {
        icon = 'science'
    }
    if (value.includes('Film')) {
        icon = 'film'
    }
    if (value.includes('Game')) {
        icon = 'game'
    }
    if (value.includes('Vehicle')) {
        icon = 'vehicle'
    }
    if (value.includes('Book')) {
        icon = 'book'
    }
    if (value.includes('Art')) {
        icon = 'art'
    }
    if (value.includes('Music')) {
        icon = 'music'
    }
    if (value.includes('Sport')) {
        icon = 'sport'
    }
    if (value.includes('History')) {
        icon = 'history'
    }
    if (value.includes('Cartoon')) {
        icon = 'cartoon'
    }
    if (value.includes('Anime')) {
        icon = 'cartoon'
    }
    if (value.includes('Television')) {
        icon = 'tv'
    }
    if (value.includes('Celebrities')) {
        icon = 'celebrity'
    }
    if (value.includes('Comics')) {
        icon = 'comics'
    }
    if (value.includes('Computers')) {
        icon = 'computer'
    }
    if (value.includes('Geography')) {
        icon = 'geography'
    }
    if (value.includes('Nature')) {
        icon = 'nature'
    }
    if (value.includes('Politics')) {
        icon = 'politics'
    }

    return icon
}

export default findIcon