import React,{ Component } from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    ImageBackground,
    Image,
    TextInput,
    Button,
    Dimensions,
    Keyboard,
    KeyboardAvoidingView,
    BackHandler,
    Easing,
    AsyncStorage
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import styles from '../../helpers/styles';
import { images } from '../../assets';
import * as actions from './reducer';
import * as selectors from './selectors';
import Toast from 'react-native-simple-toast';

const { width, height } = Dimensions.get('window');

class NewPassword extends Component {
    constructor(props) {
        super(props);
    }

    // componentWillMount(){
        
    //     try {
    //         var value = AsyncStorage.getItem('accessToken').then(
    //         (values) => {
    //         //   value = values;
    //             console.log('Then: ',values);
    //             callback(values)
    //         });
    //       } catch (error) {
    //         console.log('Error: ',error);
    //       }
    //   }

    componentWillMount(){
        
    }

    // componentWillReceiveProps(nextProps) {
    //     const { success, errorMessage } = nextProps;
    //     if (errorMessage !== '' && errorMessage !== this.props.errorMessage) {
    //         // Toast.show(errorMessage);
    //         console.log(" error gan "+errorMessage);
    //         this.props.clearErrorMessage();
    //     }
    //     if (success && this.props.success !== success) {
    //         const navigateAction = NavigationActions.reset({
    //             index: 0,
    //             actions: [
    //                 NavigationActions.navigate({ routeName: 'NewPassword' })
    //             ]
    //         });
    //         this.props.navigation.dispatch(navigateAction);
    //     }
    // }

    componentWillUnmount() {
        BackHandler.addEventListener('addEventListener', () =>
            BackHandler.exitApp()
        );
    }

    onClickNewPassword = () => {
        const { password, rePassword } = this.props.newPassword || {};
        this.props.newPasswordFlow({ password, rePassword });
    };

    setNewPasswordField = (field, value) => {
        this.props.updateNewPasswordField(field, value);
    };
    
    textInputFocus = field => {
        this.props.textInputFocus(field, '#F8E7E9');
    };

    textInputBlur = field => {
        this.props.textInputFocus(field, '#FFFFFF');
    };

    render() {
        const {
            newPassword,
            inputFocus
        } = this.props || {};

        const { password, rePassword } = newPassword;
        const disableButton = rePassword !== '' && password !== '';

        return (
            <View style={styles.container}>
                <View style={{
                        flex: 1,
                        justifyContent: 'space-between'
                    }}
                >
                    <View 
                        style={{ 
                            flex:1, 
                            justifyContent:'space-between', 
                            flexDirection: 'column', 
                            marginLeft: 25, 
                            marginRight: 25
                        }}
                    >
                        <View style={{
                                flex: 1.5,
                                marginTop: 40
                            }}
                        >
                            <Text style={{
                                    fontSize: 16,
                                    fontWeight: 'bold'
                                }}
                            >
                                Add your new password
                            </Text>
                        </View>
                        <View
                            style={{
                                flex: 2.2,
                                flexDirection: 'column'
                            }}
                        >
                            <View
                                style={{
                                    flex: 1,
                                    justifyContent: 'flex-start',
                                    alignItems: 'flex-start'
                                }}
                            >
                                <Text style={{ fontSize: 16 }}>
                                    Now you can change your password and fill the forms below
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View
                        style={{ flex: 1.5, 
                                marginLeft: 25, 
                                marginRight: 25,
                             }}
                    >
                       
                       <View
                            style={{
                                flex: 0.2,
                                marginTop:10,
                                flexDirection: 'row',
                                alignItems: 'flex-start'
                            }}
                        >
                            <Text style={{ fontSize: 16 }}>Your new password:</Text>
                        </View>
                        <View
                            style={{
                                flex: 0.4,
                                justifyContent: 'space-around'
                            }}
                        >
                            <TextInput
                                style={[styles.inputText, { flex: 0.8 },{ backgroundColor: inputFocus.password }]}
                                onFocus={() => 
                                    this.textInputFocus('password')
                                }
                                onBlur={() => 
                                    this.textInputBlur('password')
                                }
                                onChangeText={value =>
                                    this.setNewPasswordField(
                                        'password', value,
                                    )
                                }
                                value={password}
                                secureTextEntry
                                autoCapitalize="none"
                                autoCorrect={false}
                                underlineColorAndroid="transparent"
                            />
                        </View>

                        <View
                            style={{
                                flex: 0.2,
                                marginTop:10,
                                flexDirection: 'row',
                                alignItems: 'flex-start'
                            }}
                        >
                            <Text style={{ fontSize: 16 }}>Retype your new password:</Text>
                        </View>
                        <View
                            style={{
                                flex: 0.4,
                                justifyContent: 'space-around'
                            }}
                        >
                            <TextInput
                                style={[styles.inputText, { flex: 0.8 }, { backgroundColor: inputFocus.rePassword}]}
                                onFocus={() => 
                                    this.textInputFocus('rePassword')
                                }
                                onBlur={() => 
                                    this.textInputBlur('rePassword')
                                }
                                onChangeText={value =>
                                    this.setNewPasswordField(
                                        'rePassword', value
                                    )
                                }
                                value={rePassword}
                                secureTextEntry
                                autoCapitalize="none"
                                autoCorrect={false}
                                underlineColorAndroid="transparent"
                            />
                        </View>
                    </View>
                    <View style={{ flex: 1.9 }}
                    >
                        <Image
                        source={images.baseline}
                        style={[{position: 'absolute',
                            width: '100%',
                            height: '100%',
                            justifyContent: 'center',
                            flex:0.9,
                            marginTop:20,
                            resizeMode: 'stretch'}]}
                        />
                        <View style={{ flex: 0.1,flexDirection:'column', alignItems:'center' }}>
                            <TouchableOpacity
                                style={[styles.touchAbleButton, { height: 45,width:280, marginLeft: 30,
                                position: 'absolute',
                                top: 20,
                                marginRight: 20}]}
                                // disabled={!disableButton}
                                onPress={() => {
                                    this.onClickNewPassword();
                                }}
                                
                            >
                                <Text style={styles.textButton}>
                                    SAVE
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>  
            </View>
        );
    }
}
const mapDispatchToProps = dispatch =>
    bindActionCreators({
        textInputFocus: actions.textInputFocus,
        updateNewPasswordField: actions.updateNewPasswordField,
        newPasswordFlow: actions.newPasswordFlow,
        // clearErrorMessage: actions.clearErrorMessage
    }, dispatch
);

const mapStateProps =() => 
    createStructuredSelector({
        newPassword: selectors.getNewPasswordField,
        inputFocus: selectors.getTextInputFocus(),
        isLoading: selectors.getIsLoadingPassword,
        success: selectors.getNewPasswordSuccess,
        // errorMessage: selectors.getNewPasswordError
    });

export default connect(mapStateProps, mapDispatchToProps)(NewPassword);
