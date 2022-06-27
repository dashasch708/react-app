import { Heading, Image, Flex } from '@chakra-ui/react'

import pic3 from '../assets/imgs/pic3.png'
import icon31 from '../assets/imgs/icon31.svg'
import icon32 from '../assets/imgs/icon32.svg'
import icon33 from '../assets/imgs/icon33.svg'
import line4 from '../assets/imgs/line4.png'

import Offer from './Offer'

const clr = '#E0E2E1'

export default function Frame3() {
  const offer = [
    {
      head: 'Трансфер туда и обратно',
      text: 'Наши сотрудники помогут с оформлением авиабилетов.',
      icon: { icon31 },
      wid: '1.7em',
    },
    {
      head: 'Проживание в отеле',
      text: 'Проживание в трехзвездочном отеле с завтраками - все для вашего комфорта.',
      icon: { icon32 },
      wid: '2.5em',
    },
    {
      head: 'Свободное время',
      text: 'Вы сами выбираете программу своего путешествия, а мы лишь помогаем в реализации ваших идей!',
      icon: { icon33 },
      wid: '3.5em',
    },
  ]
  return (
    <Flex direction={{ base: 'column', lg: 'row' }} backgroundColor={clr}>
      {/* Text */}
      <Flex
        direction='column'
        pb={{ base: '10%', lg: '0' }}
        pt={{ base: 'none', lg: '3em' }}
        ml={{ base: 'none', lg: '4em' }}
      >
        <Flex px='4%'>
          <Heading
            size={{ base: 'lg', lg: '2xl' }}
            my={{ base: '6', lg: '0.6em' }}
          >
            Что мы предлагаем?
          </Heading>
        </Flex>

        {offer.map((off) => (
          <Offer key={`${off.head}`} {...off} />
        ))}
      </Flex>

      {/* Images   */}
      <Flex position='relative'>
        <Flex
          justifyContent={{ base: 'flex-start', lg: 'flex-end' }}
          w={{ base: '100vw', lg: 'auto' }}
          bg={clr}
        >
          <Image
            src={pic3}
            h={{ base: 'auto', lg: '100vh' }}
            w={{ base: '100vw', lg: '70vw' }}
          />
        </Flex>
        <Flex
          w={{ base: '100%', lg: 'auto' }}
          justifyContent='flex-end'
          position='absolute'
          mt={{ base: '18em', lg: '37em' }}
          ml={{ base: '1.7em', lg: '29em' }}
        >
          <Image src={line4} />
        </Flex>
      </Flex>
    </Flex>
  )
}
