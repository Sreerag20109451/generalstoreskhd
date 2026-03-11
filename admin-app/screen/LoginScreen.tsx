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
                <View className="w-screen flex-row items-end justify-between pr-10" id="login-topbar">
                    <Image
                        source={logo}
                        alt="brand-logo"
                        aria-label="brand-logo"
                        className="h-40 w-40"></Image>
                    <Button className="mb-20" variant={'link'} action={'secondary'}>
                        <Text>Skip</Text>
                    </Button>
                </View>
            </View>
        </LoginLayout>
    );
};
