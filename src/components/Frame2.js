import { Heading, Image, Text, Flex, Box, Spacer } from '@chakra-ui/react'

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
      backgroundSize='cover'
      backgroundColor={clr}
      direction='column'
    >
      {/* Images */}
      <Flex>
        <Flex>
          <Flex direction='column' flex='2'>
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
          <Box flex={3}>
            <Image
              maxH={{ base: 'unset', lg: '700px' }}
              src={pic21}
              dropShadow='0px 4px 30px rgba(0, 0, 0, 0.19)'
            />
          </Box>
        </Flex>
        <Flex direction='column'>
          <Flex
            flexDirection='column'
            alignItems={{ base: 'flex-start', lg: 'flex-end' }}
            pl='10%'
          >
            <Heading size={{ base: 'lg', lg: '2xl' }}>
              Калининград - маленькая
            </Heading>
            <Heading size={{ base: 'lg', lg: '2xl' }}>
              Европа прямо в России
            </Heading>
          </Flex>
          <Flex flexDirection='column' alignItems='flex-end' my={4} pl='10%'>
            <Text fontSize={{ base: 'md', lg: 'xl' }}>
              Калининградская область богата историческими зданиями в
              европейском стиле, а также уникальной флорой Балтийского моря!
              Посетите Калининградскую область с нашим сервисом On tour!
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Spacer />
      <Flex w='100%' justifyContent='flex-end'>
        <Image src={line3} />
      </Flex>
    </Flex>
  )
}
