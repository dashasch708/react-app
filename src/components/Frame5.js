import { Heading, Image, Flex } from '@chakra-ui/react'

import pic51 from '../assets/imgs/pic51.png'
import pic52 from '../assets/imgs/pic52.png'
import pic53 from '../assets/imgs/pic53.png'
import pic54 from '../assets/imgs/pic54.png'
import pic55 from '../assets/imgs/pic55.png'

const clr = '#E0E2E1'

export default function Frame5() {
  return (
    <Flex position='relative' bg={clr} h='100vh'>
      <Flex position='absolute' left='10%' top='17%'>
        <Image src={pic51} dropShadow='0px 4px 30px rgba(0, 0, 0, 0.19)' />
      </Flex>
      <Flex position='absolute' left='12%' top='60%'>
        <Image src={pic52} dropShadow='0px 4px 30px rgba(0, 0, 0, 0.19)' />
      </Flex>
      <Flex position='absolute' left='39%' top='18%'>
        <Image src={pic53} dropShadow='0px 4px 30px rgba(0, 0, 0, 0.19)' />
      </Flex>
      <Flex position='absolute' right='11%' top='6%'>
        <Image src={pic54} dropShadow='0px 4px 30px rgba(0, 0, 0, 0.19)' />
      </Flex>
      <Flex position='absolute' right='10%' top='46%'>
        <Image src={pic55} dropShadow='0px 4px 30px rgba(0, 0, 0, 0.19)' />
      </Flex>
    </Flex>
  )
}
