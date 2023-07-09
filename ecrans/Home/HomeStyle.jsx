import { StyleSheet } from 'react-native'
import constantes, { COLORS } from '../../outils/constantes'

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
    symptomeTitle: {
        paddingVertical: PADDING.vertical,
        paddingHorizontal: PADDING.horizontal
    },
    title_space_between: {
        paddingVertical: PADDING.vertical,
        paddingHorizontal: PADDING.horizontal,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15
    },
    link: {
        color: 'blue'
    },
    doctorsContainer: {
        paddingVertical: PADDING.vertical,
        paddingHorizontal: PADDING.horizontal,
    },
    doctorCard: {
        paddingVertical: PADDING.vertical,
        paddingHorizontal: PADDING.horizontal,
        marginBottom: 20,
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'row',
        elevation: 2, //MITOVY AMIN'NY HOE BOX SHADOW
        borderRadius: 5
    },
    doctorImg: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        marginRight: 15
    },
    doctorInfo: {
        flexDirection: 'column'
    },
    doctorName: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 10
    },
    doctorSpeciality: {
        backgroundColor: COLORS.main,
        paddingVertical: 5,
        paddingHorizontal: 5,
        borderRadius: 15,
        color: '#fff'
    }
})

export default HomeStyle