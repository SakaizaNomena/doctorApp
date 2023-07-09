import { StyleSheet } from 'react-native'
import constantes from '../../outils/constantes'

const HomeStyle = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,
        marginTop: 10,
        backgroundColor: '#fff'
    },
    profile_image: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2
    },

    userName: {
        fontSize: 18,
        color: '#37373B'
    },
    //stiliser le flatlist
    scrollableList: {
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical
    },   
})

export default HomeStyle