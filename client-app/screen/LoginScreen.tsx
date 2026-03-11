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
            <View className="flex-1 px-8 py-12 justify-between">
                {/* Header Section */}
                <View className="flex-row items-center justify-between">
                    <Image
                        source={logo}
                        className="h-16 w-32"
                        resizeMode="contain"
                    />
                    <Button variant='link' action='secondary'>
                        <Text className="text-slate-500 font-medium">Skip</Text>
                    </Button>
                </View>

                {/* Form Section */}
                <View className="w-full">
                    <View className="mb-8">
                        <Text className="text-3xl font-bold text-slate-900 tracking-tight">Welcome back</Text>
                        <Text className="text-slate-500 text-lg mt-2 font-medium">
                            Sign in to your account
                        </Text>
                    </View>

                    <View className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
                        <FormControl isInvalid={false} size="md" isRequired={true}>
                            <Text className="text-slate-700 font-semibold mb-2 ml-1">Phone Number</Text>
                            <PhoneInput handleChange={() => {}} />
                            <FormControlError>
                                <FormControlErrorIcon as={AlertICon} className="text-red-500" />
                                <FormControlErrorText className="text-red-500"></FormControlErrorText>
                            </FormControlError>
                            
                            <Button
                                className="h-14 mt-6 w-full rounded-2xl bg-indigo-600 flex-row items-center justify-center shadow-lg shadow-indigo-200"
                                variant='solid'
                            >
                                <Text className="text-lg font-bold text-white">Continue</Text>
                            </Button>
                        </FormControl>

                        <DividerText text="OR" />

                        <Button
                            className="h-14 w-full rounded-2xl border border-slate-200 bg-white flex-row items-center justify-center"
                            variant='outline'
                        >
                            <Image source={gicon} className="h-6 w-6 mr-3" />
                            <Text className="text-lg font-semibold text-slate-800">Google</Text>
                        </Button>
                    </View>
                </View>

                {/* Footer Section */}
                <View className="mt-8">
                    <Text className="text-sm text-center font-medium text-slate-400 leading-5">
                        By continuing, you agree to our{"\n"}
                        <Text className="text-indigo-600 font-bold">Terms of Services</Text> and 
                        <Text className="text-indigo-600 font-bold"> Privacy Policies</Text>
                    </Text>
                </View>
            </View>
        </LoginLayout>
    );
};
