import React from 'react';
import { TextInput, View } from 'react-native';

interface PhoneInputProps {
  handleChange: (text: string) => void;
}

const PhoneInput = ({ handleChange }: PhoneInputProps) => {
  return (
    <View className="flex-row items-center border border-slate-200 rounded-xl px-4 py-2">
      <TextInput
        placeholder="Phone Number"
        onChangeText={handleChange}
        keyboardType="phone-pad"
        className="flex-1 text-slate-900"
      />
    </View>
  );
};

export default PhoneInput;
