import React from 'react';
import { View } from 'react-native';

export const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      {children}
    </View>
  );
};
