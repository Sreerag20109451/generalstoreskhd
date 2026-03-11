import React from 'react';
import { View } from 'react-native';
import { AlertCircle } from 'lucide-react-native';

const AlertICon = ({ className }: { className?: string }) => {
  return <AlertCircle className={className} size={20} color="red" />;
};

export default AlertICon;
