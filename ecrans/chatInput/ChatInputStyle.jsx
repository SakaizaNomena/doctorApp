import { StyleSheet } from "react-native";
import { COLORS } from "../../outils/constantes";

const ChatInputStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#eee',
        justifyContent: 'space-between'
    },
    input: {
        flex: 1,
        backgroundColor: '#fff' 
    },
    send: {
        backgroundColor: COLORS.main,
        padding: 10,
        paddingHorizontal: 15,
        paddingVertical: 15,
        alignItems: 'center',
    }
})

export default ChatInputStyle;