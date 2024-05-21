import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem ({text, onDelete, id}) {
    return (
            <View style={styles.goalItem} >
                <Pressable style={({pressed}) => pressed && styles.itemPressed} android_ripple={{color: "#dddddd"}} onPress={onDelete.bind(this, id)}>
                    <Text  style={styles.itemText}>{text}</Text>
                </Pressable>
            </View>
    )
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        backgroundColor: '#f9b9eade',
        padding: 8,
        margin: 8,
        borderRadius: 4,
      },
      itemText: {
        color: 'white',
      },
      itemPressed: {
        opacity: 0.5
      }
})