import { Button, Text, TextInput, View } from "react-native";

export function Profile() {
  return (
    <View>
      <Text testID="text-title">
        Perfil
      </Text>

      <TextInput 
        testID="input-name"
        placeholder="Nome"
        autoCorrect={false}
        value="Carlos"
      />

      <TextInput 
        testID="input-surname"
        placeholder="Sobrenome"
        value="Roberto"
      />

      <Button 
        title="Salvar"
        onPress={() => {}}
      />
    </View>
  )
}