import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#FFFFFF',
        paddingLeft: 16,
        paddingRight: 16,
    },
    header: {
        fontWeight: "400",
        fontSize: 16,
        letterSpacing: 3,
    },
    inputTextContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textTitle: {
        paddingTop: 12,
        paddingBottom: 5
    },
    inputText: {
        flex: 1,
        height: 50,
        borderWidth: 1,
        borderColor: '#BD303f',
        borderRadius: 40,
        paddingLeft: 20,
    },
    icon: {
        marginRight: 5
    },
    boxImage: {
        flexDirection: 'column',
    },

    images: {
        justifyContent: 'center',
        alignItems: 'center'
    },
});
