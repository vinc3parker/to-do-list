import React from 'react';
import { Text, View } from 'react-native';
import { Swipeable, GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons'

import Icon from '../utils/icon';

const Task = ({ task, onCompleteTask, onRemoveTask }) => {
  console.log(task.icon)  
  
  const handleSwipeOpen = (direction) => {
      if (direction === "left") {
        onCompleteTask(task);
      } else if (direction === 'right') {
          onRemoveTask(task);
      }
    };

    const renderRightActions = () => (
      <View style={styles.rightAction}>
        <FontAwesome name="trash" size={24} color="#fff" />
        <Text style={styles.actionText}>Remove</Text>
      </View>
    );

    const renderLeftActions = () => (
      <View style={styles.leftAction}>
        <FontAwesome name="check" size={24} color="#fff" />
        <Text style={styles.actionText}>Complete</Text>
      </View>
    );

    return (
        <GestureHandlerRootView>
            <Swipeable
                renderLeftActions={renderLeftActions}
                renderRightActions={renderRightActions}
                leftThreshold={115}
                rightThreshold={115}
                overshootFriction={10}
                //overshootLeft={false}
                //overshootRight={false}
                dragOffsetFromLeftEdge={10}
                dragOffsetFromRightEdge={10}
                onSwipeableOpen={(direction) => handleSwipeOpen(direction)}
            >
                <View style={styles.card}>
                    <View style={[styles.iconContainer, { backgroundColor: task.iconColor }]}>
                        <Icon iconName={task.icon} size={32} color={'#000'} />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.taskName}>{task.title}</Text>
                        <Text style={styles.taskCategory}>{task.group}</Text>
                    </View>
                    <View style={styles.timeContainer}>
                        <Text style={styles.timeText}>{task.lengthOfTask} mins</Text>
                    </View>
                </View>
            </Swipeable>
        </GestureHandlerRootView>
    );

};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    marginVertical: 6,
    marginHorizontal: 16,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  iconContainer: {
    padding: 10,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
    marginLeft: 16,
  },
  taskName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  taskCategory: {
    fontSize: 14,
    color: "#6C757D",
  },
  timeContainer: {
    justifyContent: "center",
    alignItems: "flex-end",
  },
  timeText: {
    fontSize: 16,
    fontWeight: "600",
  },
  actionText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 8,
  },
  leftAction: {
    padding: 16,
    marginVertical: 6,
    marginHorizontal: 16,
    backgroundColor: "#4CAF50",
    justifyContent: "center",
    alignItems: "flex-start",
    //flex: 1,
    borderRadius: 10,
    width: 110,
  },
  rightAction: {
    padding: 8,
    marginVertical: 6,
    marginHorizontal: 16,
    backgroundColor: "#F44336",
    justifyContent: "center",
    alignItems: "flex-end",
    //flex: 1,
    borderRadius: 10,
    width: 110,
  },
});

export default Task;