import { StyleSheet } from "react-native";

const ChatListStyle = StyleSheet.create({
    chatContainer: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#fff',
        elevation: 3,
        margin: 10,
        overflow: 'hidden'
    },
    chatImg: {
        width: 50,
        height: 50,
        borderRadius: 65 / 2
    }, 
    chatInfo: {
        marginLeft: 15,
    },
    chatName: {
        fontWeight: 'bold'
    },
    last_msg: {
        fontSize: 13
    },
    date_name: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default ChatListStyle;