import { StyleSheet } from "react-native"
export const ActivityItemStyle = StyleSheet.create({
    scrollableItem: {
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        paddingVertical: 15,
        marginRight: 15,
        elevation: 1,
        flexDirection: 'column'
   },
    mainText: {
        fontWeight: 'bold',
        fontSize: 16
    },
    subText: {
        marginTop: 10,
        fontSize: 12
    }
})