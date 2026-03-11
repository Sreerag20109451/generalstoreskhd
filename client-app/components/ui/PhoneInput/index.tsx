import React from 'react';
import { TextInput, View } from 'react-native';

interface PhoneInputProps {
  handleChange: (text: string) => void;
}

const PhoneInput = ({ handleChange }: PhoneInputProps) => {
  return (
    <View className="flex-row items-center border border-slate-200 bg-slate-50 rounded-2xl px-4 py-3 h-14">
      <TextInput
        placeholder="Phone Number"
        placeholderTextColor="#94a3b8"
        onChangeText={handleChange}
        keyboardType="phone-pad"
        className="flex-1 text-slate-900 font-medium text-lg ml-2"
      />
    </View>
  );
};

export default PhoneInput;
