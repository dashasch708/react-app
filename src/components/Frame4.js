import { Heading, Image, Text, Flex, Box, Center } from '@chakra-ui/react'

import line41 from '../assets/imgs/line41.png'
import line42 from '../assets/imgs/line42.png'
import icon4 from '../assets/imgs/icon4.svg'

const clr = '#E0E2E1'

export default function Frame4() {
  return (
    <Flex backgroundColor={clr} position='relative' h='706px'>
      <Flex position='absolute' top='5%'>
        <Image src={line41} />
      </Flex>
      <Center w='100vw' h='25vh'>
        <Heading fontSize='40px' m='73px'>
          Как это работает?
        </Heading>
      </Center>
      <Flex
        position='absolute'
        flexWrap='wrap'
        gap='62px 127px'
        left='7%'
        right='9%'
        top='25%'
      >
        <Flex>
          <Box>
            <Image src={icon4} mt='4px' />
          </Box>
          <Box ml='21px'>
            <Heading fontSize='24px' mb='10px'>
              {' '}
              1. Вы заполняете анкету
            </Heading>
            <Text fontSize='19px'>
              Это поможет нашей команде узнать даты и{' '}
            </Text>
            <Text fontSize='19px'>продолжительность поездки, город</Text>
            <Text fontSize='19px'>отправления и предпочтительный досуг.</Text>
            <Text fontSize='19px'>
              Далее на основе ваших предпочтений будет
            </Text>
            <Text fontSize='19px'>сформирован ваш особенный тур!</Text>
          </Box>
        </Flex>
        <Flex ml='39px'>
          <Box>
            <Image src={icon4} mt='4px' />
          </Box>
          <Box ml='21px'>
            <Heading fontSize='24px' mb='10px'>
              2. Мы подбираем персональный тур
            </Heading>
            <Text fontSize='19px'>Вам не нужно беспокоиться о покупке</Text>
            <Text fontSize='19px'>
              билетов, бронировании отеля и построении
            </Text>
            <Text fontSize='19px'>
              маршрута - наша команда сделает это за вас,{' '}
            </Text>
            <Text fontSize='19px'>предложив вам несколько вариантов!</Text>
          </Box>
        </Flex>
        <Flex>
          <Box>
            <Image src={icon4} mt='4px' />
          </Box>
          <Box ml='21px'>
            <Heading fontSize='24px' mb='10px'>
              3. Мы согласовываем поездку с вами
            </Heading>
            <Text fontSize='19px'>До вашего волшебного отдыха осталось</Text>
            <Text fontSize='19px'>несколько шагов - вы выбираете наиболее</Text>
            <Text fontSize='19px'>удобные билеты, подтверждаете выбранный</Text>
            <Text fontSize='19px'>
              отель и вносите оплату - электронные билеты
            </Text>
            <Text fontSize='19px'>и подтверждение бронирования будут на</Text>
            <Text fontSize='19px'>вашей почте!</Text>
          </Box>
        </Flex>
        <Flex>
          <Box>
            <Image src={icon4} mt='4px' />
          </Box>
          <Box ml='21px'>
            <Heading fontSize='24px' mb='10px'>
              4. Вы получаете уникальный чек-лист
            </Heading>
            <Text fontSize='19px'>Мы отправим вам уникальный чек-лист с</Text>
            <Text fontSize='19px'>местами для посещения. Мы учитываем</Text>
            <Text fontSize='19px'>
              предпочтения каждого клиента, поэтому эти
            </Text>
            <Text fontSize='19px'>места точно вам понравятся!</Text>
          </Box>
        </Flex>
      </Flex>
      <Flex position='absolute' w='100%' justifyContent='flex-end' top='88%'>
        <Image src={line42} />
      </Flex>
    </Flex>
  )
}
