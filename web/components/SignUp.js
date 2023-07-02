import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import { auth } from './Firebase';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { useState } from 'react';

export default function SignUp() {
  const [phone, setPhone] = useState('+91');
  const [hasFilled, setHasFilled] = useState(false);
  const [otp, setOtp] = useState('');

  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha', {
      size: 'invisible',
      callback: (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        // ...
      },
    }, auth);
  };

  const handleSend = (event) => {
    event.preventDefault();
    setHasFilled(true);
    generateRecaptcha();
    let appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phone, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
      }).catch((error) => {
        // Error; SMS not sent
        console.log(error);
      });
  };

  const verifyOtp = (event) => {
    let otp = event.target.value;
    setOtp(otp);

    if (otp.length === 6) {
      // Verify OTP
      let confirmationResult = window.confirmationResult;
      confirmationResult.confirm(otp).then((result) => {
        // User signed in successfully.
        let user = result.user;
        console.log(user);
        alert('User signed in successfully');
      }).catch((error) => {
        // User couldn't sign in (bad verification code?)
        alert("User couldn't sign in (bad verification code?)");
      });
    }
  };

  if (!hasFilled) {
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('yellow.100', 'black')}
      >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} color={useColorModeValue('blue', 'white')}>
              Sign in to your account
            </Heading>
            <Text fontSize={'lg'} color={useColorModeValue('gray.600', 'gray.400')}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌
            </Text>
            <Text fontSize={'lg'} fontWeight={'bold'} color={useColorModeValue('blue', 'white')}>
              Together we make a difference!
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="Phone Number" onSubmit={handleSend}>
                <FormLabel>Enter Your Mobile Number</FormLabel>
                <Input
                  type="tel"
                  label="Phone Number"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                />
                <Stack spacing={10}>
                  <Button
                    bg={'yellow.400'}
                    color={'white'}
                    padding={'10px'}
                    marginTop={'10px'}
                    _hover={{
                      bg: 'blue.500',
                    }}
                    onClick={handleSend}
                  >
                    Generate OTP
                  </Button>
                </Stack>
              </FormControl>
            </Stack>
          </Box>
        </Stack>
        <div id="recaptcha"></div>
      </Flex>
    );
  } else {
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('yellow.100', 'black')}
      >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} color={useColorModeValue('blue', 'white')}>
              Sign in to your account
            </Heading>
            <Text fontSize={'lg'} color={useColorModeValue('gray.600', 'gray.400')}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌
            </Text>
            <Text fontSize={'lg'} fontWeight={'bold'} color={useColorModeValue('blue', 'white')}>
              Together we make a difference!
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="otp">
                <FormLabel>Enter the OTP</FormLabel>
                <Input
                  type="text"
                  value={otp}
                  onChange={verifyOtp}
                  maxLength={6}
                  autoFocus
                />
              </FormControl>
            </Stack>
          </Box>
        </Stack>
        <div id="recaptcha"></div>
      </Flex>
    );
  }
}
