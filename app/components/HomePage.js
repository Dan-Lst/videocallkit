import { useState } from 'react';
import { Button, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';

const HomePage = ( { navigation } ) => {
    const [ userName, setUserName ] = useState('');

    return (
        <View style={ styles.container }>
            <StatusBar barStyle={ 'dark-content' } backgroundColor={ '#fff' } />

            <Text style={ styles.heading }>Join Video Call Now</Text>
            <TextInput style={ styles.input } placeholder='Enter Username' onChangeText={ ( val ) => {
                setUserName( val )
            } } />
            <Button title='Set Username' onPress={ () => {
                userName !== ''
                ?   navigation.navigate( 'Call', {
                        userName: userName
                    } )
                :   alert( 'Enter a username' )
            } }/>
        </View>
    );
}

const styles = StyleSheet.create( {
    container: {
        padding: 16,
        flex: 1,
        backgroundColor: '#fff',
    },
    
    input: {
        padding: 8,
        margin: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#333',
    },

    heading: {
        fontSize: 18,
        fontWeight: 'bold',
    },
  } );

export default HomePage;