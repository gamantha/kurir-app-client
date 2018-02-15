import { StyleSheet, Dimensions } from 'react-native';

const window = Dimensions.get('window');

export const IMAGE_HEIGHT = window.width / 2;
export const IMAGE_HEIGHT_SMALL = window.width / 4;

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
        paddingLeft: 20
    },
    icon: {
        marginRight: 5
    },
    touchAbleButton: {
        backgroundColor: '#BD303f',
        borderWidth: 1,
        borderRadius: 50,
        borderColor: '#BC2938',
        height: 50,
        justifyContent: 'center',
        marginLeft: 20,
        marginRight: 20
    },
    imageBackground: {
        justifyContent: 'space-around',
        width: '100%',
        height: '100%'
    },
    textButton: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold'
    }
});
