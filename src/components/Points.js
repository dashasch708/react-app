import { Heading, Text, Image, Flex, Box } from '@chakra-ui/react'

import icon4 from '../assets/imgs/icon4.svg'

export default function Points({ head, text }) {
  return (
    <Flex w={{ base: '100%', lg: '40vw' }} m={{ base: '0.3em', lg: '1.5em' }}>
      <Box>
        <Image src={icon4} mt='4px' w={{ base: '6em', lg: '3em' }} />
      </Box>
      <Box ml='1em' mb='2em'>
        <Heading fontSize={{ base: 'xl', lg: '2xl' }} mb='10px'>
          {head}
        </Heading>
        <Text fontSize={{ base: 'md', lg: 'xl' }}>{text}</Text>
      </Box>
    </Flex>
  )
}
