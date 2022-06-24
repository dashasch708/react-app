import {
  Heading,
  Image,
  Text,
  Button,
  Flex,
  Center,
  Stack,
  Spacer,
  Box,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

import pic1 from '../assets/imgs/pic1.png'
import logo from '../assets/imgs/logo.svg'
import line1 from '../assets/imgs/line1.png'
import line2 from '../assets/imgs/line2.png'

const clr = '#E0E2E1'

export default function Frame1() {
  return (
    <Flex backgroundColor={clr} position='relative' m='0 auto' h='100vh'>
      <Center flex='4' backgroundColor={clr}></Center>

      <Box flex='7' display={{ base: 'none', lg: 'block' }} bg={clr}>
        <Image
          src={pic1}
          allbackSrc='placeholdit.com/200x200'
          alt='main pic'
          height='100vh'
          width='100vw'
        />
      </Box>

      <Flex position='absolute' h='100vh' w='100%' direction='column'>
        <Center top='1em' px='10%' w='100%' paddingTop='30px' mb={16}>
          <Flex flex='1' justifyContent='flex-start'>
            <Button
              colorScheme='black'
              variant='link'
              leftIcon={<HamburgerIcon color='black' w='1.5em' h='1.5em' />}
            ></Button>
          </Flex>
          <Flex flex='1' justifyContent={{ base: 'flex-end', lg: 'center' }}>
            <Image src={logo} />
          </Flex>
          <Flex
            flex='1'
            display={{ base: 'none', lg: 'flex' }}
            justifyContent='flex-end'
          >
            <Text>+7 (985) 673-45-08</Text>
          </Flex>
        </Center>
        <Flex top='25%'>
          <Box>
            <Image src={line2} />
          </Box>
        </Flex>
        <Spacer />
        <FrameBody display={{ base: 'flex', lg: 'none' }} />
        <FrameBodyDesktop display={{ base: 'none', lg: 'flex' }} />
        <Spacer />

        <Flex w='100%' justifyContent='flex-end' top='90%'>
          <Box>
            <Image src={line1} mb='1.5em' />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  )
}

function FrameBody({ flex, display, px, pl }) {
  return (
    <Stack display={display} spacing={8} px={px ? px : 4} pl={pl} flex={flex}>
      <Flex
        justifyContent={{ base: 'center', lg: 'flex-start' }}
        flexDirection='column'
        left='10%'
        top='38%'
      >
        <Flex>
          <Heading size={{ base: 'lg', lg: '2xl' }}>Туры в</Heading>
          <Heading
            size={{ base: 'lg', lg: '2xl' }}
            fontFamily='Montserrat Alternates'
            ml='.3em'
          >
            Калининград
          </Heading>
        </Flex>
        <Heading size={{ base: 'lg', lg: '2xl' }}>по выгодным ценам</Heading>
      </Flex>

      <Text fontSize={{ base: 'md', lg: 'xl' }} px='4'>
        Хотели бы оказаться в Европе не покидая России? Бронируте туры в
        Калининград выгодно.
      </Text>

      <Flex justifyContent='center'>
        <Box
          as='button'
          h='47px'
          w='273px'
          borderRadius='md'
          bg='black'
          fontSize='15px'
          fontWeight='bold'
          color='white'
          boxShadow='6px 4px 13px rgba(0, 0, 0, 0.34)'
          _hover={{
            boxShadow: '8px 6px 15px rgba(0, 0, 0, 0.54)',
          }}
        >
          За впечатлениями
        </Box>
      </Flex>
    </Stack>
  )
}

function FrameBodyDesktop({ display }) {
  return (
    <Flex display={display}>
      <FrameBody flex={5} px='0' pl='10%' />
      <Flex flex={6} />
    </Flex>
  )
}
