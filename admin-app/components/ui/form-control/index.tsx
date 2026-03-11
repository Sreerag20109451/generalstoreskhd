import React from 'react';
import { View, Text } from 'react-native';

interface FormControlProps {
  children?: React.ReactNode;
  isInvalid?: boolean;
  className?: string;
  size?: string;
  isRequired?: boolean;
}

export const FormControl = ({ children, isInvalid, className, size, isRequired }: FormControlProps) => {
  return <View className={className}>{children}</View>;
};

export const FormControlError = ({ children }: { children?: React.ReactNode }) => {
  return <View className="flex-row items-center mt-1">{children}</View>;
};

export const FormControlErrorText = ({ children, className }: { children?: React.ReactNode, className?: string }) => {
  return <Text className={className}>{children}</Text>;
};

export const FormControlErrorIcon = ({ as: Icon, className }: { as: React.ElementType, className?: string }) => {
  return <Icon className={className} />;
};
