import React, { Component } from 'react';
import { 
    Animated,
    Text,
    TextInput,
    View,
    Image,
    Button,
    StyleSheet
} from 'react-native';
import { images } from '../../assets';
import Icon from 'react-native-vector-icons/FontAwesome';

class EditProfile extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.boxContainer}>
                    <View style={[styles.boxIcon]}>
                        <View>
                            <Icon size={20} color="#333" name="arrow-left"/>
                        </View>
                        <View>
                            <Icon size={20} color="#BD303f" name="check"/>
                        </View>
                    </View>
                    <View style= {styles.boxTextChange}>
                        <Text style= {styles.textChange}>
                            Edit Profile
                        </Text>
                    </View>
                    <View style={styles.boxImage}>
                        <View style={styles.images}>
                            <Image
                                source={images.google}
                                style={{width: 80, height:80, borderRadius:10}}
                            />
                        </View>
                        <View
                            style={{
                            }} >
                            <Text style={{ textAlign: 'center', color: '#e65659'}}>
                                Change Foto
                            </Text>
                        </View>
                    </View>
                    <View style= {styles.boxInput}>
                        <View style={{flex: 0.7}}>
                            <View style={{
                                flex: 0.2,
                                flexDirection: 'row',
                                alignItems: 'flex-end'
                            }} >
                                <Text style={{ fontSize: 16 }}>Name</Text>
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
                                <Text style={{ fontSize: 16 }}>Email Address</Text>
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
                                <Text style={{ fontSize: 16 }}>Phone Number</Text>
                            </View>
                            <View style={{
                                    flex: 0.5,
                                    justifyContent: 'space-around'
                                }}>
                                    <TextInput
                                        style={[styles.inputText, { flex: 0.7 }]}
                                        autoCapitalize="none"
                                        underlineColorAndroid="transparent"
                                        placeholder="+62"
                                        placeholderTextColor="#4c4c4c"
                                    />
                            </View>

                            <View style={{
                                flex: 0.2,
                                flexDirection: 'row',
                                alignItems: 'flex-end'
                            }} >
                                <Text style={{ fontSize: 16 }}>Address</Text>
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
        flex:1,
        marginLeft: 25,
        marginRight: 25,
    },

    boxIcon: {
        flexDirection:'row',
        justifyContent: 'space-between',
        marginTop: 10
    },

    boxTextChange: {
        flex:0.1,
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

    boxImage: {
        flexDirection: 'column',
    },

    images: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    boxInput: {
        flex:1,
        marginTop:20
    },

    inputText: {
        flex: 1,
        height: 20,
        borderWidth: 1,
        borderColor: '#BD303f',
        borderRadius: 50,
        paddingLeft: 20
    }
    
});
export default EditProfile;