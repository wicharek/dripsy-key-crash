import { DripsyProvider, makeTheme, View, Text } from 'dripsy'
import { StatusBar } from 'expo-status-bar'

const theme = makeTheme({})

export default function App() {
  return (
    <DripsyProvider theme={theme}>
      <View
        sx={{
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style='auto' />
      </View>
    </DripsyProvider>
  )
}
