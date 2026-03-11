import { LoginLayout } from '../components/layouts/LoginLayout';
import { Image, Text, View } from 'react-native';
import { Button } from '../components/ui/button';
import gicon from '../assets/images/gicon.png';
import logo from '../assets/images/logo.png';
import { DividerText } from '../components/Divider';
import PhoneInput from '../components/ui/PhoneInput';
import {
    FormControl,
    FormControlError,
    FormControlErrorText,
    FormControlErrorIcon,
} from '../components/ui/form-control';
import React, { useState } from 'react';
import AlertICon from '../components/customicons/AlertIcon';

export const LoginScreen = () => {
    return (
        <LoginLayout>
            <View className="h-full  flex-col items-center justify-between gap-y-4 p-10 pb-16">
                <View>
                    <Text className='h1'>Login</Text>
                </View>
            </View>
        </LoginLayout>
    );
};
