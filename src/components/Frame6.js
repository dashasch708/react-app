import { Heading, Image, Text, Flex, Center } from '@chakra-ui/react'

import line6 from '../assets/imgs/line6.png'
import pic6 from '../assets/imgs/pic6.png'
import pic61 from '../assets/imgs/pic61.png'
import pic62 from '../assets/imgs/pic62.png'
import pic63 from '../assets/imgs/pic63.png'

const clr = '#E0E2E1'

export default function Frame6() {
  return (
    <Flex
      position='relative'
      bg={clr}
      h='350px'
      backgroundImage={pic6}
      backgroundSize='cover'
    >
      <Flex position='absolute' w='100%' justifyContent='flex-end' top='9%'>
        <Image src={line6} />
      </Flex>
      <Flex position='absolute' left='10%' flexDirection='column' top='14%'>
        <Heading fontSize='40px' mb='30px'>
          Наши партнеры
        </Heading>
        <Text fontSize='19px'>
          Мы сотрудничаем только с лучшими, чтобы ваш отдых прошел как по маслу!{' '}
        </Text>
      </Flex>
      <Center
        position='absolute'
        alignItems='center'
        w='100%'
        top='60%'
        columnGap='125px'
      >
        <Image src={pic61} w='230px' />
        <Image src={pic62} w='230px' />
        <Image src={pic63} w='190px' />
      </Center>
    </Flex>
  )
}
