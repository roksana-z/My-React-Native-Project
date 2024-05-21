import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";
import { useState } from 'react';


function GoalInput({onAddGoal, visible, onCancel}) {
    [enteredText, setEnteredText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredText(enteredText)
    }

    function addGoalHandler() {
        onAddGoal(enteredText)
        setEnteredText('')
    }

    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/goal.png')} />
                <TextInput value={enteredText} style={styles.textInput} placeholder='Your goal' onChangeText={goalInputHandler} />
                <View style={styles.buttonConteiner}>
                    <Button onPress={addGoalHandler} title='ADD GOAL'/>
                    <Button onPress={onCancel} title='CANCEL'/>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        backgroundColor: "#f9b9eade",
      },
      image: {
        width: 150,
        height: 150,
        marginBottom: 42
      },
      textInput: {
        borderWidth: 1,
        borderRadius: 4,
        backgroundColor: 'white',
        borderColor: 'white',
        width: '100%',
        padding: 8
      },
      buttonConteiner: {
        flexDirection: 'row',
        marginTop: 8,
        gap: 8
      }
})