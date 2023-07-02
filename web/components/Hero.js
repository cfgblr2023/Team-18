import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';
import useAlan from "./Alan";
import { useRef } from 'react';

export default function WithBackgroundImage() {
  const alanBtnContainer = useRef();
  useAlan();
  
  return (
    <>
      <Flex
        w={'full'}
        h={'100vh'}
        backgroundImage={
          'url(https://www.brookings.edu/wp-content/uploads/2017/11/cue_group-work_bangladesh_001.jpg)'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}
        zIndex={-100}
      >
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
          spacing={8}
        >
          <Text
            color={'white'}
            top={0}
            fontWeight={900}
            lineHeight={1.2}
            textStyle={'display'}
            fontSize={useBreakpointValue({ base: '4xl', md: '5xl' })}
            marginTop={useBreakpointValue({ base: 4, md: 0 })}
          >
            Empower, Engage, Educate
          </Text>
          <Stack direction={'row'}>
            {/* Additional content or buttons can be added here */}
          </Stack>
        </VStack>
      </Flex>
      <div ref={alanBtnContainer}></div>
    </>
  );
}