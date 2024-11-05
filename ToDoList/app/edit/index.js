import React from "react";
import { View, Text, SafeAreaView, FlatList } from "react-native";
import TestCard from "../../components/Testing/Card";
import iconData from "../../data/iconData.json";

const Edit = () => {
  const tasks = Object.entries(iconData.categories).flatMap(([category, items]) => 
    items.map(item => ({ ...item, category }))
  );

  const renderItem = ({ item }) => (
    <TestCard name={item.name} icon={item.icon} category={item.category} />
  )

  return (
    <SafeAreaView>
      <Text>Edit Page</Text>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item.category}-${item.name}-${index}`}
      />
    </SafeAreaView>
  );
};

export default Edit;
