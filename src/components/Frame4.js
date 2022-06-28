import { Heading, Image, Text, Flex, Box, Center } from '@chakra-ui/react'

import line41 from '../assets/imgs/line41.png'
import line42 from '../assets/imgs/line42.png'

import Points from './Points'

const clr = '#E0E2E1'

export default function Frame4() {
  const points = [
    {
      head: '1. Вы заполняете анкету',
      text: ' Это поможет нашей команде узнать даты и продолжительность поездки, город отправления и предпочтительный досуг. Далее на основе ваших предпочтений будет сформирован ваш особенный тур!',
    },
    {
      head: '2. Мы подбираем персональный тур',
      text: 'Вам не нужно беспокоиться о покупке билетов, бронировании отеля и построении маршрута - наша команда сделает это за вас, предложив вам несколько вариантов!',
    },
    {
      head: '3. Мы согласовываем поездку с вами',
      text: 'До вашего волшебного отдыха осталось несколько шагов - вы выбираете наиболее удобные билеты, подтверждаете выбранный отель и вносите оплату - электронные билеты и подтверждение бронирования будут на вашей почте!',
    },
    {
      head: '4. Вы получаете уникальный чек-лист',
      text: 'Мы отправим вам уникальный чек-лист с местами для посещения. Мы учитываем предпочтения каждого клиента, поэтому эти места точно вам понравятся!',
    },
  ]
  return (
    <Flex backgroundColor={clr} direction='column'>
      <Flex>
        <Image src={line41} w={{ base: '0%', lg: 'auto' }} />
      </Flex>
      <Center m='2em'>
        <Heading size={{ base: 'lg', lg: '2xl' }}>Как это работает?</Heading>
      </Center>
      <Flex px='4%' flexWrap='wrap' justifyContent='center'>
        {points.map((point) => (
          <Points key={`${point.head}`} {...point} />
        ))}
      </Flex>
      <Flex w='100%' justifyContent='flex-end'>
        <Image src={line42} />
      </Flex>
    </Flex>
  )
}
