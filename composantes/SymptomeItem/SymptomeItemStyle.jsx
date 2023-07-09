import { StyleSheet } from "react-native";

const SymptomeItemStyle = StyleSheet.create({
    item: {
        marginRight: 15, 
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#fff',
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical
    },
    itemImg: {
        width: 30,
        height: 30,
        marginRight: 5
    }
})

export default SymptomeItemStyle
