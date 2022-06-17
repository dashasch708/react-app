import {
  Heading,
  Image,
  Text,
  Button,
  Flex,
  Center,
  Box,
} from '@chakra-ui/react'
import pic1 from '../assets/imgs/pic1.png'
import logo from '../assets/imgs/logo.png'
import line1 from '../assets/imgs/line1.png'
import line2 from '../assets/imgs/line2.png'
import line3 from '../assets/imgs/line3.png'
import bgPic2 from '../assets/imgs/bgPic2.png'
import pic21 from '../assets/imgs/pic21.png'
import pic22 from '../assets/imgs/pic22.png'
import pic23 from '../assets/imgs/pic23.png'
import { HamburgerIcon } from '@chakra-ui/icons'

function App() {
  return (
    <div className='App'>
      <Flex backgroundColor='#E0E2E1' position='relative'>
        <Center
          position='absolute'
          top='1em'
          px='10%'
          w='100%'
          paddingTop='30px'
        >
          <Flex flex='1' justifyContent='flex-start'>
            <Button
              colorScheme='black'
              variant='link'
              leftIcon={<HamburgerIcon color='black' w='1.5em' h='1.5em' />}
            ></Button>
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
        <Flex position='absolute' top='25%'>
          <Box>
            <Image src={line2} />
          </Box>
        </Flex>

        <Center position='absolute' flexDirection='column' left='10%' top='38%'>
          <Center alignItems='center'>
            <Heading
              fontSize='57px'
              flex='1'
              justifyContent='flex-start'
              lineHeight='60px'
            >
              Туры в{' '}
            </Heading>
            <Text
              fontFamily='Montserrat Alternates'
              fontSize='57px'
              flex='2'
              justifyContent='flex-end'
              lineHeight='60px'
            >
              Калининград
            </Text>
          </Center>
          <Heading fontSize='57px' lineHeight='60px'>
            по выгодным ценам
          </Heading>
        </Center>
        <Center
          position='absolute'
          flexDirection='column'
          alignItems='flex-start'
          left='10%'
          top='59%'
        >
          <Text fontSize='19px'>Хотели бы оказаться в Европе не покидая</Text>
          <Text fontSize='19px'>России? Бронируте туры в Калининград</Text>
          <Text fontSize='19px'> выгодно.</Text>
        </Center>
        <Flex position='absolute' left='23%' top='77%'>
          <Box
            as='button'
            h='47px'
            w='273px'
            borderRadius='7px'
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
        <Flex position='absolute' w='100%' justifyContent='flex-end' top='90%'>
          <Box>
            <Image src={line1} />
          </Box>
        </Flex>
      </Flex>

      <Flex position='relative' backgroundColor='#E0E2E1'>
        <Box
          bgImage={bgPic2}
          backgroundColor='#E0E2E1'
          height='795px'
          width='100%'
        ></Box>
        <Flex position='absolute' left='5%' top='1%'>
          <Image src={pic22} dropShadow='0px 4px 30px rgba(0, 0, 0, 0.19)' />
        </Flex>
        <Flex position='absolute' left='6%' top='57%'>
          <Image src={pic23} dropShadow='0px 4px 30px rgba(0, 0, 0, 0.19)' />
        </Flex>
        <Flex position='absolute' left='23%' top='7%'>
          <Image src={pic21} dropShadow='0px 4px 30px rgba(0, 0, 0, 0.19)' />
        </Flex>
        <Flex
          position='absolute'
          flexDirection='column'
          alignItems='flex-end'
          right='5%'
          top='32%'
        >
          <Heading fontSize='40px'>Калининград - маленькая</Heading>
          <Heading fontSize='40px'>Европа прямо в России</Heading>
        </Flex>
        <Flex
          position='absolute'
          flexDirection='column'
          alignItems='flex-end'
          right='5%'
          top='50%'
        >
          <Text fontSize='19px'>
            Калининградская область богата историческими
          </Text>
          <Text fontSize='19px'>
            зданиями в европейском стиле, а также уникальной
          </Text>
          <Text fontSize='19px'>
            флорой Балтийского моря! Посетите Калининградскую
          </Text>
          <Text fontSize='19px'>область с нашим сервисом On tour!</Text>
        </Flex>
        <Flex position='absolute' w='100%' justifyContent='flex-end' top='76%'>
          <Image src={line3} />
        </Flex>
      </Flex>
    </div>
  )
}

export default App
