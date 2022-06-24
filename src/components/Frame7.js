import {
  Heading,
  Image,
  Text,
  Flex,
  Box,
  FormControl,
  Input,
} from '@chakra-ui/react'

import FooterButtons from '../components/FooterButtons'

import logoWh from '../assets/imgs/logoWh.svg'

export default function Frame7() {
  const btns = [
    { text: 'Главная', link: '/' },
    { text: 'Туры', link: '/tours' },
    { text: 'Отели', link: '/hotels' },
    { text: 'Достопримечательности', link: '/entertainment' },
    { text: 'FAQ', link: '/faq' },
    { text: 'Возврат', link: '/refund' },
  ]
  return (
    <Flex position='relative' bgColor='#3D3D3D' h='78vh'>
      <Flex position='absolute' left='10%' top='45%'>
        <Image src={logoWh} />
      </Flex>
      <Flex flexDirection='column' alignItems='flex-start' m='10% 34%'>
        {btns.map((btn) => (
          <FooterButtons key={`${btn.link}+${btn.text}`} {...btn} />
        ))}
      </Flex>
      <Flex
        position='absolute'
        flexDirection='column'
        right='10%'
        top='23%'
        mb='150px'
      >
        <Heading fontSize='24px' color='white' mb='21px'>
          Подпишитесь на рассылку
        </Heading>
        <Text fontSize='11px' color='white'>
          Дарим скидку 5% за подписку на новости! Подпишитесь, чтобы узнавать{' '}
        </Text>
        <Text fontSize='11px' color='white' mb='23px'>
          о самых актуальных и выгодных поездках.
        </Text>
        <FormControl isRequired mb='21px' borderRadius='0'>
          <Input id='first-name' placeholder='Имя' fontSize='11px' />
        </FormControl>
        <FormControl isRequired mb='23px'>
          <Input id='email' type='email' placeholder='E-mail' fontSize='11px' />
        </FormControl>
        <Box
          as='button'
          h='35px'
          w='169px'
          borderRadius='7px'
          bg='black'
          fontSize='10px'
          fontWeight='bold'
          color='white'
          boxShadow='6px 4px 13px rgba(0, 0, 0, 0.34)'
          _hover={{
            boxShadow: '8px 6px 15px rgba(0, 0, 0, 0.54)',
          }}
        >
          Подписаться
        </Box>
      </Flex>
      <Flex position='absolute' left='44%' bottom='4%'>
        <Text fontSize='9px' color='white'>
          OnTour © 2021 Все права защищены
        </Text>
      </Flex>
    </Flex>
  )
}
