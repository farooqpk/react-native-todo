
import { SafeAreaView} from "react-native";
import { Todo } from "./components/todo";

export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <Todo />
     </SafeAreaView>
  );
}
