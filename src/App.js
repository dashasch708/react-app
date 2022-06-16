// import logo from './logo.svg'
import './App.css'
import { Heading, Image, Text } from '@chakra-ui/react'
import pic1 from './pic1.png'
import burger from './burger.png'
import logo from './logo.png'
import { Flex, Center, Box } from '@chakra-ui/react'

function App() {
  return (
    <div className='App'>
      <Flex backgroundColor='#E0E2E1' position='relative'>
        <Center
          position='absolute'
          top='1em'
          px='15%'
          w='100%'
          paddingTop='30px'
        >
          <Flex flex='1' justifyContent='flex-start'>
            <Image src={burger} position='center' />
          </Flex>
          <Center flex='1'>
            <Image src={logo} position='center' />
          </Center>
          <Flex flex='1' justifyContent='flex-end'>
            <Text>+7 (985) 673-45-08</Text>
          </Flex>
        </Center>
        <Center flex='4' backgroundColor='#E0E2E1'></Center>
        <Box flex='7' bg='#E0E2E1'>
          <Image
            src={pic1}
            allbackSrc='placeholdit.com/200x200'
            alt='main pic'
            height='100vh'
            width='100vw'
          />
        </Box>
        <Center position='absolute' flexDirection='column' left='15%' top='50%'>
          <Heading weight='700'>Туры в Калининград</Heading>
          <Heading>по выгодным ценам</Heading>
        </Center>
      </Flex>
    </div>
  )
}

export default App
