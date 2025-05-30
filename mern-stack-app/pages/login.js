import React, { useState } from "react";
import { View, Text, Pressable, TextInput, Button, Alert } from "react-native";
import tailwind from "twrnc";
import { handleLogin } from "./Auth";
import { useNavigation } from "@react-navigation/native";

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigation = useNavigation();

  const onLogin = async () => {
    setError('');
    await handleLogin(email, password, navigation, setError);
  };

  // Show error dialog if login failed
  if (error) {
    Alert.alert("Login Failed", error, [{ text: "OK", onPress: () => setError('') }]);
  }

  return (
    <View style={tailwind`flex-1 w-full items-center justify-center bg-gray-950`}>
      <View style={tailwind`px-4 w-full max-w-sm`}>
        <Text style={tailwind`text-5xl font-bold mb-6 text-gray-50`}>
          Login
        </Text>

        <View style={tailwind`flex flex-col gap-4 bg-white border border-gray-200 rounded-lg p-4`}>
          <TextInput
            style={tailwind`border border-gray-200 rounded mb-2 px-2`}
            placeholder="Enter email address"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
          />
          <TextInput
            style={tailwind`border border-gray-200 rounded px-2`}
            placeholder="Enter password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <View style={tailwind`flex flex-row justify-between items-center my-8`}>
          <View style={tailwind`flex-row items-center`}>
            <Pressable style={tailwind`bg-gray-50 h-6 w-6 rounded-sm mr-2`} />
            <Text style={tailwind`text-gray-50`}>Remember me</Text>
          </View>
          <Pressable>
            <Text style={tailwind`text-gray-50 font-bold`}>Reset password</Text>
          </Pressable>
        </View>

        <Button title="Login" onPress={onLogin} />
      </View>
    </View>
  );
};