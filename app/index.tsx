import { Text, View } from "react-native";
import Login from './../components/Login';
import { auth } from './../configs/FirebaseConfig';
import { Redirect, RelativePathString } from "expo-router";

export default function Index() {
  const user = auth.currentUser;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {user ? <Redirect href={'/mytrip' as RelativePathString} /> : <Login />}
    </View>
  );
}
