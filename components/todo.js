import React, { useState } from "react";
import { View, Text, Button, TextInput, ScrollView } from "react-native";

export const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  const [isClick, setIsClick] = useState(false);

  const handleClick = () => {
    if(text==="")return
    setTodo((prev) => [...prev, text]);
    setIsClick(true);
    setText("");
  };

  return (
    <View
      style={{ flex: 1, backgroundColor: "skyblue", justifyContent: "center" }}
    >
      <View
        style={{
          alignItems: "center",
          marginHorizontal: 10,
          borderRadius: 30,
          marginTop: "30%",
          paddingHorizontal: 20,
          paddingVertical: 30,
          backgroundColor: "white",
        }}
      >
        <Text style={{ fontSize: 20, marginBottom: 10 }}>My Todo</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <TextInput
            style={{
              flex: 1,
              marginRight: 10,
              paddingHorizontal: 10,
              height: 40,
              borderColor: "gray",
              borderWidth: 1,
              borderRadius: 15,
            }}
            placeholder="Type your todo here..."
            value={text}
            onChangeText={setText}
          />
          <Button title="Save" onPress={handleClick} />
        </View>
        <ScrollView style={{ width: "100%" }}>
          {isClick &&
            todo.map((item, index) => (
              <Text key={index} style={{ marginBottom: 9 }}>
                {item}
              </Text>
            ))}
        </ScrollView>
      </View>
    </View>
  );
};
