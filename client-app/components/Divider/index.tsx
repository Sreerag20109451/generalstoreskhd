import React from 'react';
import { View, Text } from 'react-native';

export const DividerText = ({ text }: { text: string }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
      <View style={{ flex: 1, height: 1, backgroundColor: '#E2E8F0' }} />
      <Text style={{ marginHorizontal: 10, color: '#64748B' }}>{text}</Text>
      <View style={{ flex: 1, height: 1, backgroundColor: '#E2E8F0' }} />
    </View>
  );
};
