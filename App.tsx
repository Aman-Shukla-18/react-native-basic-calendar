import React from "react";
import { View } from "react-native";
import { CalendarCard } from "./src/components";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <CalendarCard />
    </View>
  );
}
