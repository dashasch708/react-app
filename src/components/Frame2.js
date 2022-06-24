import { Heading, Image, Text, Flex, Box } from '@chakra-ui/react'

import line3 from '../assets/imgs/line3.png'
import bgPic2 from '../assets/imgs/bgPic2.png'
import pic21 from '../assets/imgs/pic21.png'
import pic22 from '../assets/imgs/pic22.png'
import pic23 from '../assets/imgs/pic23.png'

const clr = '#E0E2E1'

export default function Frame2() {
  return (
    <Flex
      bgImage={{ base: 'none', lg: bgPic2 }}
      h='122vh'
      backgroundSize='cover'
      backgroundColor={clr}
      direction='column'
    >
      <Flex direction={{ base: 'column', lg: 'row' }}>
        {/* Images */}
        <Flex>
          <Flex
            direction='column'
            flex={{ base: '2', lg: 'none' }}
            mt={{ base: '1em', lg: '1.5em' }}
            ml={{ base: 'none', lg: '1.5em' }}
          >
            <Box>
              <Image
                maxH={{ base: 'unset', lg: '700px' }}
                flex={3}
                src={pic22}
                dropShadow='0px 4px 30px rgba(0, 0, 0, 0.19)'
              />
            </Box>
            <Box>
              <Image
                maxH={{ base: 'unset', lg: '700px' }}
                flex={2}
                src={pic23}
                dropShadow='0px 4px 30px rgba(0, 0, 0, 0.19)'
              />
            </Box>
          </Flex>
          <Box flex={{ base: '3', lg: 'none' }}>
            <Image
              maxH={{ base: 'unset', lg: '700px' }}
              mt={{ base: '2em', lg: '4em' }}
              src={pic21}
              dropShadow='0px 4px 30px rgba(0, 0, 0, 0.19)'
            />
          </Box>
        </Flex>

        {/* Text */}
        <Flex
          direction='column'
          alignItems={{ base: 'flex-start', lg: 'flex-end' }}
        >
          <Flex flexDirection='column' pt={{ base: '10%', lg: '27%' }} px='4%'>
            <Heading size={{ base: 'lg', lg: '2xl' }}>
              Калининград - маленькая
            </Heading>
            <Heading size={{ base: 'lg', lg: '2xl' }}>
              Европа прямо в России
            </Heading>
          </Flex>
          <Flex
            flexDirection='column'
            my={{ base: '1em', lg: '2em' }}
            ml={{ base: 'none', lg: '30%' }}
            px='4%'
          >
            <Text fontSize={{ base: 'md', lg: 'xl' }}>
              Калининградская область богата историческими зданиями в
              европейском стиле, а также уникальной флорой Балтийского моря!
              Посетите Калининградскую область с нашим сервисом On tour!
            </Text>
          </Flex>
          <Flex
            w='100%'
            justifyContent='flex-end'
            mt={{ base: '1.5em', lg: '5em' }}
          >
            <Image src={line3} />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
