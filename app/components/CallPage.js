import { StyleSheet, View, Text } from "react-native";
import ZegoUIKitPrebuiltCall, { ONE_ON_ONE_VIDEO_CALL_CONFIG } from '@zegocloud/zego-uikit-prebuilt-call-rn';

const CallPage = ( { navigation, route } ) => {
    return (
        <View style={ styles.container }>
            <ZegoUIKitPrebuiltCall
                appID={ 1836119517 }
                appSign={ '9e275be5c882734525ad262fa4d251fe2156bb8d385eb2a12b7f4c4e245ddac7' }
                userID={ route.params.userName + Math.random() } // userID can be something like a phone number or the user id on your own user system. 
                userName={ route.params.userName }
                callID={ '55lst_65151' } // callID can be any unique string. 

                config={ {
                    // You can also use ONE_ON_ONE_VOICE_CALL_CONFIG/GROUP_VIDEO_CALL_CONFIG/GROUP_VOICE_CALL_CONFIG to make more types of calls.
                    ...ONE_ON_ONE_VIDEO_CALL_CONFIG,
                    onHangUp: () => {
                        navigation.navigate( 'Home' )
                    },
                } }
            />
        </View>
    );
}

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
} );

export default CallPage;