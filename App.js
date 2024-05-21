import { useState } from 'react';
import { StyleSheet, View, FlatList, Button, } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput'

export default function App() {
  [goals, setGoals] = useState([]);
  [isModalVisible, setIsModalVisible] = useState(false)

  function startGoalHandler() {
    setIsModalVisible(true)
  }

  function endGoalHandler() {
    setIsModalVisible(false)
  }

  function addGoalHandler (enteredText) {
    setGoals(currentGoals => [...currentGoals, {text: enteredText, id: Math.random().toString()}])
    setIsModalVisible(false)
  }

  function deleteHandler(id) {
   setGoals(currentGoals => {
    return currentGoals.filter(goal => goal.id !== id)
   })
  }


  return (
    <View style={styles.appContainer}>
      <Button title='Add Goal' onPress={startGoalHandler} />
      <GoalInput onCancel={endGoalHandler} onAddGoal={addGoalHandler} visible={isModalVisible}/>
      <View style={styles.goalsContainer}>
        <FlatList data={goals} keyExtractor={(item, index) => item.id} 
        renderItem={(itemData) => {
          return <GoalItem id={itemData.item.id} onDelete={deleteHandler} text={itemData.item.text} />
        }} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16
  },
  goalsContainer: {
    flex: 4
  },
});
