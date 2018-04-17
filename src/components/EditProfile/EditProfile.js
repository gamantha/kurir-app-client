import React, { Component } from 'react';
import { 
    Animated,
    Text,
    TextInput,
    View,
    Image,
    Button,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { images } from '../../assets';
import Icon from 'react-native-vector-icons/FontAwesome';
import globalStyles from '../../helpers/styles';
import styles from "./styles";

class EditProfile extends Component {
    render() {
        return (
                <View style={[styles.container]}>
                    <Text style={styles.header}>Edit Profile</Text>
                    <View style={styles.boxImage}>
                        <View style={styles.images}>
                            <Image
                                source={images.profile}
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
                    <View
                        style={{
                            flex: 0.8,
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Text style={styles.textTitle}>Name</Text>
                        <View style={styles.inputTextContainer}>
                            <TextInput
                                placeholder="Enter your name"
                                style={[
                                    styles.inputText
                                ]}
                                underlineColorAndroid="transparent"
                            />
                        </View>
                    </View>
                    <View
                        style={{
                            flex: 0.8,
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Text style={styles.textTitle}>Phone Number</Text>
                        <View style={styles.inputTextContainer}>
                            <TextInput
                                placeholder="Enter your phone number"
                                style={[
                                    styles.inputText
                                ]}
                                underlineColorAndroid="transparent"
                            />
                        </View>
                    </View>
                    <View
                        style={{
                            flex: 2,
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}
                    >

                        <TouchableOpacity
                            style={[
                                globalStyles.touchAbleButton,
                                { height: 40, marginBottom: 20, marginTop:20 }
                            ]}
                            disabled={false}
                        >
                            <Text style={globalStyles.textButton}>Edit Profile</Text>
                        </TouchableOpacity>
                    </View>
                </View>
        )
    }
}

export default EditProfile;