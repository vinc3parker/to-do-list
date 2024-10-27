import react from "react";
import { View, Text, SafeAreaView, StyleSheet, FlatList} from "react-native";
import test from "../../data/test";

const Projects = () => {

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>{item.name}</Text>
      <Text>Category: {item.category}</Text>
      <Text>Due Date: {item.dueDate}</Text>
      <Text>Icon: {item.icon}</Text>
    </View>
  )
  return (
    <SafeAreaView>
      <Text>Projects Page</Text>
      <FlatList
        data={test}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  itemContainer: {
    paddnig: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default Projects;
