import { LoginLayout } from 'components/layouts/LoginLayout';
import { Image, Text, TextInput, View } from 'react-native';
import { Button } from '../ui/button';
import gicon from '../../assets/gicon.png';
import logo from '../../assets/logo.png';
import { DividerText } from '../Divider';
import PhoneInput from '../ui/PhoneInput';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/routing/RootStack';
import {
    FormControl,
    FormControlError,
    FormControlErrorText,
    FormControlErrorIcon,
} from '../ui/form-control';
import React, { ChangeEvent, useState } from 'react';
import AlertICon from '../customicons/AlertIcon';
import { onGoogleButtonPress, sendOtptoPhone } from '@/apis/auth';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/statemanagement/globalstore';
import { setConfirmationObject } from '@/statemanagement/authSlice';





type LoginRouteProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

export const LoginScreen = ({ route, navigation }: LoginRouteProps) => {
    const [isInvalid, setIsInvalid] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [errorMessage, seterrorMessage] = useState('');

    const dispatch: AppDispatch = useDispatch()



    const resetAll = () => {
        setIsInvalid(false);
        setPhoneNumber('');
        seterrorMessage('');
    };

    const handleChange = (text: string) => {
        setIsInvalid(false);
        setPhoneNumber(text);
    };

    const handleSubmit = async () => {
        const trimmedPhoneNumber = phoneNumber.trim();

        if (trimmedPhoneNumber == '') {
            seterrorMessage('The mobile number can not be empty');
            setIsInvalid(true);
            return;
        }
        if (trimmedPhoneNumber.startsWith('+') && trimmedPhoneNumber.length != 13) {
            seterrorMessage('Please provide a valid mobile number');
            setIsInvalid(true);
            return;
        } else if (!trimmedPhoneNumber.startsWith('+') && trimmedPhoneNumber.length != 10) {
            seterrorMessage('Please provide a valid mobile number');
            setIsInvalid(true);
            return;
        }
        resetAll();

        const confirmation = sendOtptoPhone(phoneNumber)
        dispatch(setConfirmationObject(confirmation))

        navigation.navigate('Verify');
    };

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

                <View className="mb-20 w-screen flex-col items-center justify-between" id="login-hero">
                    <Text className="text-4xl font-semibold text-slate-950">Welcome back</Text>
                    <Text className="text-md mt-4 font-light text-slate-400">
                        Sign in or create an account to continue
                    </Text>
                    <FormControl className='mt-8' isInvalid={isInvalid} size="md" isRequired={true}>
                        <PhoneInput handleChange={handleChange} />
                        <FormControlError>
                            <FormControlErrorIcon as={AlertICon} className="text-red-500" />
                            <FormControlErrorText className="text-red-500">{errorMessage}</FormControlErrorText>
                        </FormControlError>
                        <Button
                            onPress={handleSubmit}
                            className="h-50 mt-4 w-96 rounded-xl  border-slate-200 bg-sky-500 shadow-slate-400"
                            variant={'solid'}>
                            <Text className="text-md px-4 py-4 font-semibold text-slate-50">Continue</Text>
                        </Button>
                    </FormControl>
                    <DividerText text="OR"></DividerText>
                    <Button onPress={onGoogleButtonPress}
                        className="h-50 mt-4 w-96 rounded-xl border-slate-200 bg-slate-50 shadow-slate-400"
                        variant={'outline'}>
                        <Image source={gicon} className="h-6 w-6"></Image>
                        <Text className="text-md px-4 py-4 font-bold text-slate-900">Continue with Google</Text>
                    </Button>
                </View>

                <View id="login-bottombar">
                    <Text className="text-md text-center font-light text-slate-600">
                        By continuing, you agree to our
                        <Text className="font-semibold"> Terms of Services </Text> and
                        <Text className="font-semibold"> Privacy Policies</Text>
                    </Text>
                </View>
            </View>
        </LoginLayout>
    );
};