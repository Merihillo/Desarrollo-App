import React, { useContext } from 'react';  
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { myColors } from './src/styles/Colors';
import { ThemeContext } from './src/context/ThemeContext';
import MyKeyboard from './src/components/MyKeyboard';

const CalculatorScreen = () => {
  const theme = useContext(ThemeContext);  

  return (
    <View style={theme === 'light' ? styles.container : [styles.container, { backgroundColor: 'black' }]}>
      <MyKeyboard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CalculatorScreen;