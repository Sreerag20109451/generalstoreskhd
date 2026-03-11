import React from 'react';
import { TouchableOpacity } from 'react-native';

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  variant?: string;
  action?: string;
  onPress?: () => void;
}

export const Button = ({ children, className, variant, action, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity className={className} onPress={onPress} activeOpacity={0.8}>
      {children}
    </TouchableOpacity>
  );
};
