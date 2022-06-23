import { Heading, Image, Text, Flex, Box } from '@chakra-ui/react'

import pic3 from '../assets/imgs/pic3.png'
import icon31 from '../assets/imgs/icon31.svg'
import icon32 from '../assets/imgs/icon32.svg'
import icon33 from '../assets/imgs/icon33.svg'
import line4 from '../assets/imgs/line4.png'

const clr = '#E0E2E1'

export default function Frame3() {
  return (
    <Flex backgroundColor={clr} position='relative'>
      <Box flex='1' bg={clr}>
        <Flex position='absolute' left='10%' top='12%'>
          <Heading fontSize='40px'>Что мы предлагаем?</Heading>
        </Flex>
        <Flex position='absolute' alignItems='center' left='11%' top='30%'>
          <Box>
            <Image src={icon31} />
          </Box>
          <Box ml='25px'>
            <Heading fontSize='24px' mb='10px'>
              Трансфер туда и обратно
            </Heading>
            <Text fontSize='19px'>Наши сотрудники помогут с</Text>
            <Text fontSize='19px'>оформлением авиабилетов.</Text>
          </Box>
        </Flex>
        <Flex position='absolute' alignItems='center' left='11%' top='49%'>
          <Box>
            <Image src={icon32} />
          </Box>
          <Box ml='25px'>
            <Heading fontSize='24px' mb='10px'>
              Проживание в отеле
            </Heading>
            <Text fontSize='19px'>Проживание в трехзвездочном отеле с </Text>
            <Text fontSize='19px'>завтраками - все для вашего комфорта.</Text>
          </Box>
        </Flex>
        <Flex position='absolute' alignItems='center' left='11%' top='68%'>
          <Box>
            <Image src={icon33} />
          </Box>
          <Box ml='25px'>
            <Heading fontSize='24px' mb='10px'>
              Свободное время
            </Heading>
            <Text fontSize='19px'>Вы сами выбираете программу своего</Text>
            <Text fontSize='19px'>путешествия, а мы лишь помогаем в </Text>
            <Text fontSize='19px'>реализации ваших идей!</Text>
          </Box>
        </Flex>
      </Box>
      <Box flex='1' bg={clr}>
        <Image src={pic3} height='100vh' w='50vw' />
      </Box>
      <Flex position='absolute' w='100%' justifyContent='flex-end' top='82%'>
        <Image src={line4} />
      </Flex>
    </Flex>
  )
}
