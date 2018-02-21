import React, { Component } from 'react';
import { 
    Text,
    TextInput,
    View,
    Image,
    Button,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class ChangePassword extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.boxContainer, styles.boxIcon]}>
                    <View style= {styles.boxIconLeft}>
                        <Icon size={20} color="#333" name="arrow-left"/>
                    </View>
                    <View style= {styles.boxIconCheck}>
                        <Icon size={20} color="#BD303f" name="check"/>
                    </View>
                </View>

                <View style= {[styles.boxContainer,styles.boxTextChange]}>
                    <Text style= {styles.textChange}>
                        Change Password
                    </Text>
                </View>

                <View style= {[styles.boxContainer,styles.boxInput]}>
                    <View style={{flex: 0.4}}>
                        <View style={{
                            flex: 0.2,
                            flexDirection: 'row',
                            alignItems: 'flex-end'
                        }} >
                            <Text style={{ fontSize: 16 }}>Old Password :</Text>
                        </View>
                        <View style={{
                                flex: 0.5,
                                justifyContent: 'space-around'
                            }}>
                                <TextInput
                                    style={[styles.inputText, { flex: 0.7 }]}
                                    autoCapitalize="none"
                                    underlineColorAndroid="transparent"
                                />
                        </View>
                        <View style={{
                            flex: 0.2,
                            flexDirection: 'row',
                            alignItems: 'flex-end'
                        }} >
                            <Text style={{ fontSize: 16 }}>New Password :</Text>
                        </View>
                        <View style={{
                                flex: 0.5,
                                justifyContent: 'space-around'
                            }}>
                                <TextInput
                                    style={[styles.inputText, { flex: 0.7 }]}
                                    autoCapitalize="none"
                                    underlineColorAndroid="transparent"
                                />
                        </View>
                        <View style={{
                            flex: 0.2,
                            flexDirection: 'row',
                            alignItems: 'flex-end'
                        }} >
                            <Text style={{ fontSize: 16 }}>Retype New Password :</Text>
                        </View>
                        <View style={{
                                flex: 0.5,
                                justifyContent: 'space-around'
                            }}>
                                <TextInput
                                    style={[styles.inputText, { flex: 0.7 }]}
                                    autoCapitalize="none"
                                    underlineColorAndroid="transparent"
                                />
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
    },
    boxContainer: {
        marginLeft: 25,
        marginRight: 25,
    },

    boxIcon: {
        flexDirection:'row',
        justifyContent: 'space-between',
        marginTop: 10
    },

    boxIconCheck: {

    },

    boxIconLeft: {        

    },

    boxTextChange: {
        marginTop:10,
        marginBottom:20,
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    
    textChange: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333'
    },

    boxInput: {
        flex:1,
    },

    inputText: {
        flex: 1,
        height: 20,
        borderWidth: 1,
        borderColor: '#BD303f',
        borderRadius: 50,
        paddingLeft: 20
    },
    
});
export default ChangePassword;