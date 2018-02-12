import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF'
    },
    inputTextContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputText: {
        flex: 1,
        height: 50,
        borderWidth: 1,
        borderColor: '#BD303f',
        borderRadius: 50,
        marginRight: -25
    },
    icon: {
        marginRight: 5
    }
});
