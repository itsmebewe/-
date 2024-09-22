import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

const App = () => {
    const showAlert = () => {
        Alert.alert('مرحبا بك في تطبيقنا!');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>مرحباً بك في تطبيقنا!</Text>
            <Button title="اضغط هنا" onPress={showAlert} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
});

export default App;
