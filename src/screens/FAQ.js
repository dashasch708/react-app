import {
  Heading,
  Image,
  Text,
  Button,
  Flex,
  Center,
  Box,
  FormControl,
  Input,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

import FooterButtons from '../components/FooterButtons'

import pic1 from '../assets/imgs/picF1.png'
import logo from '../assets/imgs/logo.svg'
import logoWh from '../assets/imgs/logoWh.svg'
import line1 from '../assets/imgs/lineF1.png'
import pic2 from '../assets/imgs/picF2.png'
import { useEffect } from 'react'

const clr = '#E0E2E1'
function FAQ() {
  const btns = [
    { text: 'Главная', link: '/' },
    { text: 'Туры', link: '/tours' },
    { text: 'Отели', link: '/hotels' },
    { text: 'Достопримечательности', link: '/entertainment' },
    { text: 'FAQ', link: '/faq' },
    { text: 'Возврат', link: '/refund' },
  ]
  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  return (
    <div className='App'>
      <Flex bg={clr} position='relative' h='100vh'>
        <Flex position='absolute'>
          <Image src={pic1} alt='main pic' h='100vh' w='41vw' />
        </Flex>

        <Flex position='absolute' w='100%' top='76%'>
          <Image src={line1} />
        </Flex>

        <Center
          position='absolute'
          top='1em'
          px='10%'
          w='100%'
          paddingTop='30px'
        >
          <Flex flex='1' justifyContent='flex-start'>
            <Button
              colorScheme='black'
              variant='link'
              leftIcon={<HamburgerIcon color='black' w='1.5em' h='1.5em' />}
            ></Button>
          </Flex>
          <Center flex='1'>
            <Image src={logo} position='center' />
          </Center>
          <Flex flex='1' justifyContent='flex-end'>
            <Text>+7 (985) 673-45-08</Text>
          </Flex>
        </Center>

        <Box position='absolute' right='10%' top='20%'>
          <Heading fontSize='40px' mb='65px'>
            Ответы на ваши вопросы:{' '}
          </Heading>
          <Box>
            <Heading fontSize='24px' mb='21px'>
              1. Как у вас дела?
            </Heading>
            <Flex flexDirection='column' right='10%' mb='50px'>
              <Text fontSize='19px'>
                Значимость этих проблем настолько очевидна,
              </Text>
              <Text fontSize='19px'>что начало повседневной работы по</Text>
              <Text fontSize='19px'>
                формированию позиции напрямую зависит от
              </Text>
              <Text fontSize='19px'>направлений прогрессивного развития.</Text>
            </Flex>
            <Flex position='absolute'>
              <Heading fontSize='24px'></Heading>
              <Text fontSize='19px'></Text>
            </Flex>
          </Box>

          <Box>
            <Heading fontSize='24px' mb='21px'>
              2. По чем сейчас рыба-капля?
            </Heading>
            <Flex flexDirection='column' right='10%'>
              <Text fontSize='19px'>Лишь явные признаки победы</Text>
              <Text fontSize='19px'>
                институционализации описаны максимально
              </Text>
              <Text fontSize='19px'>подробно.</Text>
            </Flex>
          </Box>
        </Box>
      </Flex>

      <Flex position='relative' backgroundColor={clr}>
        <Box
          bgImage={pic2}
          backgroundSize='cover'
          backgroundColor={clr}
          height='850px'
          width='100%'
        ></Box>
        <Center flexDirection='column' position='absolute' left='10%' h='100%'>
          <Box>
            <Heading fontSize='24px' mb='21px'>
              3. Какой самый модный цвет носков?
            </Heading>
            <Box mb='55px'>
              <Text fontSize='19px'>
                Лишь сделанные на базе интернет-аналитики выводы, инициированные
                исключительно
              </Text>
              <Text fontSize='19px'>
                синтетически, заблокированы в рамках своих собственных
                рациональных ограничений.
              </Text>
              <Text fontSize='19px'>
                Лишь активно развивающиеся страны третьего мира призывают нас к
                новым свершениям,{' '}
              </Text>
              <Text fontSize='19px'>
                которые, в свою очередь, должны быть призваны к ответу.
              </Text>
            </Box>
          </Box>
          <Box>
            <Heading fontSize='24px' mb='21px'>
              4. Как отметить День рождения?
            </Heading>
            <Box mb='55px'>
              <Text fontSize='19px'>
                Внезапно, сторонники тоталитаризма в науке набирают популярность
                среди определенных
              </Text>
              <Text fontSize='19px'>
                слоев населения, а значит, должны быть превращены в посмешище,
                хотя само их{' '}
              </Text>
              <Text fontSize='19px'>
                существование приносит несомненную пользу обществу!
              </Text>
            </Box>
          </Box>
          <Box>
            <Heading fontSize='24px' mb='21px'>
              5. Почему растет трава?
            </Heading>
            <Box>
              <Text fontSize='19px'>
                Прежде всего, синтетическое тестирование создаёт необходимость
                включения в
              </Text>
              <Text fontSize='19px'>
                производственный план целого ряда внеочередных мероприятий с
                учётом комплекса{' '}
              </Text>
              <Text fontSize='19px'>
                новых принципов формирования материально-технической и кадровой
                базы. Картельные
              </Text>
              <Text fontSize='19px'>
                сговоры не допускают ситуации, при которой элементы
                политического процесса и по сей
              </Text>
              <Text fontSize='19px'>
                день остаются уделом либералов, которые жаждут быть ограничены
                исключительно{' '}
              </Text>
              <Text fontSize='19px'>образом мышления.</Text>
            </Box>
          </Box>
        </Center>
      </Flex>

      <Flex position='relative' bgColor='#3D3D3D' h='78vh'>
        <Flex position='absolute' left='10%' top='45%'>
          <Image src={logoWh} />
        </Flex>
        <Flex flexDirection='column' alignItems='flex-start' m='10% 34%'>
          {btns.map((btn) => (
            <FooterButtons key={`${btn.link}+${btn.text}`} {...btn} />
          ))}
        </Flex>
        <Flex
          position='absolute'
          flexDirection='column'
          right='10%'
          top='23%'
          mb='150px'
        >
          <Heading fontSize='24px' color='white' mb='21px'>
            Подпишитесь на рассылку
          </Heading>
          <Text fontSize='11px' color='white'>
            Дарим скидку 5% за подписку на новости! Подпишитесь, чтобы узнавать{' '}
          </Text>
          <Text fontSize='11px' color='white' mb='23px'>
            о самых актуальных и выгодных поездках.
          </Text>
          <FormControl isRequired mb='21px' borderRadius='0'>
            <Input id='first-name' placeholder='Имя' fontSize='11px' />
          </FormControl>
          <FormControl isRequired mb='23px'>
            <Input
              id='email'
              type='email'
              placeholder='E-mail'
              fontSize='11px'
            />
          </FormControl>
          <Box
            as='button'
            h='35px'
            w='169px'
            borderRadius='7px'
            bg='black'
            fontSize='10px'
            fontWeight='bold'
            color='white'
            boxShadow='6px 4px 13px rgba(0, 0, 0, 0.34)'
            _hover={{
              boxShadow: '8px 6px 15px rgba(0, 0, 0, 0.54)',
            }}
          >
            Подписаться
          </Box>
        </Flex>
        <Flex position='absolute' left='44%' bottom='4%'>
          <Text fontSize='9px' color='white'>
            OnTour © 2021 Все права защищены
          </Text>
        </Flex>
      </Flex>
    </div>
  )
}

export default FAQ
