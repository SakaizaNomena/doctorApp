import { StyleSheet } from "react-native";
import PADDING from '../../outils/constantes'

const ProfilesStyle = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical
    },
    header: {
        elevation: 5,
        backgroundColor: '#fff',
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center'
    },
    profileImg: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2
    },
    userInfo: {
        marginLeft: 15
    },
    userName: {
        fontWeight: 'bold'
    },
    userEmail: {
        
    }
})

export default ProfilesStyle;