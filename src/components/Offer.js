import { Heading, Text, Image, Flex, Box } from '@chakra-ui/react'

export default function Offer({ head, text, icon, wid }) {
  return (
    <Flex
      alignItems='center'
      my={{ base: '1em', lg: '1.5em' }}
      px={{ base: '4%', lg: '2%' }}
    >
      <Box>
        <Image src={icon} w={wid} />
      </Box>
      <Box mx='1em' px={{ base: 'none', lg: '4em' }}>
        <Heading
          fontSize={{ base: 'xl', lg: '2xl' }}
          mb={{ base: 'none', lg: '0.6em' }}
        >
          {head}
        </Heading>
        <Text fontSize={{ base: 'md', lg: 'xl' }}>{text}</Text>
      </Box>
    </Flex>
  )
}
