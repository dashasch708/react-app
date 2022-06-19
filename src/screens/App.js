import {
  Heading,
  Image,
  Text,
  Button,
  Flex,
  Center,
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

import pic1 from '../assets/imgs/pic1.png'
import logo from '../assets/imgs/logo.svg'
import logoWh from '../assets/imgs/logoWh.svg'
import line1 from '../assets/imgs/line1.png'
import line2 from '../assets/imgs/line2.png'
import line3 from '../assets/imgs/line3.png'
import bgPic2 from '../assets/imgs/bgPic2.png'
import pic21 from '../assets/imgs/pic21.png'
import pic22 from '../assets/imgs/pic22.png'
import pic23 from '../assets/imgs/pic23.png'
import pic3 from '../assets/imgs/pic3.png'
import icon31 from '../assets/imgs/icon31.svg'
import icon32 from '../assets/imgs/icon32.svg'
import icon33 from '../assets/imgs/icon33.svg'
import line4 from '../assets/imgs/line4.png'
import line41 from '../assets/imgs/line41.png'
import line42 from '../assets/imgs/line42.png'
import icon4 from '../assets/imgs/icon4.svg'
import pic51 from '../assets/imgs/pic51.png'
import pic52 from '../assets/imgs/pic52.png'
import pic53 from '../assets/imgs/pic53.png'
import pic54 from '../assets/imgs/pic54.png'
import pic55 from '../assets/imgs/pic55.png'
import line6 from '../assets/imgs/line6.png'
import pic6 from '../assets/imgs/pic6.png'
import pic61 from '../assets/imgs/pic61.png'
import pic62 from '../assets/imgs/pic62.png'
import pic63 from '../assets/imgs/pic63.png'

const clr = '#E0E2E1'
function App() {
  return (
    <div className='App'>
      <Flex backgroundColor={clr} position='relative'>
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
        <Center flex='4' backgroundColor={clr}></Center>
        <Box flex='7' bg={clr}>
          <Image
            src={pic1}
            allbackSrc='placeholdit.com/200x200'
            alt='main pic'
            height='100vh'
            width='100vw'
          />
        </Box>
        <Flex position='absolute' top='25%'>
          <Box>
            <Image src={line2} />
          </Box>
        </Flex>

        <Center position='absolute' flexDirection='column' left='10%' top='38%'>
          <Center alignItems='center'>
            <Heading
              fontSize='55px'
              flex='1'
              justifyContent='flex-start'
              lineHeight='60px'
            >
              Туры в{' '}
            </Heading>
            <Text
              fontFamily='Montserrat Alternates'
              fontSize='55px'
              flex='2'
              justifyContent='flex-end'
              lineHeight='60px'
            >
              Калининград
            </Text>
          </Center>
          <Heading fontSize='55px' lineHeight='60px'>
            по выгодным ценам
          </Heading>
        </Center>
        <Center
          position='absolute'
          flexDirection='column'
          alignItems='flex-start'
          left='10%'
          top='59%'
        >
          <Text fontSize='19px'>Хотели бы оказаться в Европе не покидая</Text>
          <Text fontSize='19px'>России? Бронируте туры в Калининград</Text>
          <Text fontSize='19px'> выгодно.</Text>
        </Center>
        <Flex position='absolute' left='23%' top='77%'>
          <Box
            as='button'
            h='47px'
            w='273px'
            borderRadius='7px'
            bg='black'
            fontSize='15px'
            fontWeight='bold'
            color='white'
            boxShadow='6px 4px 13px rgba(0, 0, 0, 0.34)'
            _hover={{
              boxShadow: '8px 6px 15px rgba(0, 0, 0, 0.54)',
            }}
          >
            За впечатлениями
          </Box>
        </Flex>
        <Flex position='absolute' w='100%' justifyContent='flex-end' top='90%'>
          <Box>
            <Image src={line1} />
          </Box>
        </Flex>
      </Flex>

      <Flex position='relative' backgroundColor={clr}>
        <Box
          bgImage={bgPic2}
          backgroundSize='cover'
          backgroundColor={clr}
          height='795px'
          width='100%'
        ></Box>
        <Flex position='absolute' left='5%' top='1%'>
          <Image src={pic22} dropShadow='0px 4px 30px rgba(0, 0, 0, 0.19)' />
        </Flex>
        <Flex position='absolute' left='6%' top='57%'>
          <Image src={pic23} dropShadow='0px 4px 30px rgba(0, 0, 0, 0.19)' />
        </Flex>
        <Flex position='absolute' left='23%' top='7%'>
          <Image src={pic21} dropShadow='0px 4px 30px rgba(0, 0, 0, 0.19)' />
        </Flex>
        <Flex
          position='absolute'
          flexDirection='column'
          alignItems='flex-end'
          right='5%'
          top='32%'
        >
          <Heading fontSize='40px'>Калининград - маленькая</Heading>
          <Heading fontSize='40px'>Европа прямо в России</Heading>
        </Flex>
        <Flex
          position='absolute'
          flexDirection='column'
          alignItems='flex-end'
          right='5%'
          top='50%'
        >
          <Text fontSize='19px'>
            Калининградская область богата историческими
          </Text>
          <Text fontSize='19px'>
            зданиями в европейском стиле, а также уникальной
          </Text>
          <Text fontSize='19px'>
            флорой Балтийского моря! Посетите Калининградскую
          </Text>
          <Text fontSize='19px'>область с нашим сервисом On tour!</Text>
        </Flex>
        <Flex position='absolute' w='100%' justifyContent='flex-end' top='76%'>
          <Image src={line3} />
        </Flex>
      </Flex>
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
              <Text fontSixe='19px'>Наши сотрудники помогут с</Text>
              <Text fontSixe='19px'>оформлением авиабилетов.</Text>
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
              <Text fontSixe='19px'>Проживание в трехзвездочном отеле с </Text>
              <Text fontSixe='19px'>завтраками - все для вашего комфорта.</Text>
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
              <Text fontSixe='19px'>Вы сами выбираете программу своего</Text>
              <Text fontSixe='19px'>путешествия, а мы лишь помогаем в </Text>
              <Text fontSixe='19px'>реализации ваших идей!</Text>
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
              <Text fontSize='19px'>
                несколько шагов - вы выбираете наиболее
              </Text>
              <Text fontSize='19px'>
                удобные билеты, подтверждаете выбранный
              </Text>
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

      <Flex
        position='relative'
        bg={clr}
        h='480px'
        backgroundImage={pic6}
        backgroundSize='cover'
      >
        <Flex position='absolute' w='100%' justifyContent='flex-end' top='9%'>
          <Image src={line6} />
        </Flex>
        <Flex position='absolute' left='10%' flexDirection='column' top='14%'>
          <Heading fontSize='40px' mb='30px'>
            Наши партнеры
          </Heading>
          <Text fontSize='19px'>
            Мы сотрудничаем только с лучшими, чтобы ваш отдых прошел как по
            маслу!{' '}
          </Text>
        </Flex>
        <Flex
          position='absolute'
          alignItems='center'
          left='22%'
          top='48%'
          columnGap='125px'
        >
          <Image src={pic61} w='168px' h='168px' />
          <Image src={pic62} w='168px' h='168px' />
          <Image src={pic63} w='266px' h='132px' />
        </Flex>
      </Flex>

      <Flex position='relative' bgColor='#3D3D3D' h='78vh'>
        <Flex position='absolute' left='10%' top='45%'>
          <Image src={logoWh} />
        </Flex>
        <Flex flexDirection='column' alignItems='flex-start' m='10% 34%'>
          <Button
            variant='link'
            color='white'
            fontSize='13px'
            fontWeight='light'
            mb='18px'
          >
            Главная
          </Button>
          <Button
            variant='link'
            color='white'
            fontSize='13px'
            fontWeight='light'
            mb='18px'
          >
            Туры
          </Button>
          <Button
            variant='link'
            color='white'
            fontSize='13px'
            fontWeight='light'
            mb='18px'
          >
            Отели
          </Button>
          <Button
            variant='link'
            color='white'
            fontSize='13px'
            fontWeight='light'
            mb='18px'
          >
            Достопримечательности
          </Button>
          <Button
            variant='link'
            color='white'
            fontSize='13px'
            fontWeight='light'
            mb='18px'
          >
            FAQ
          </Button>
          <Button
            variant='link'
            color='white'
            fontSize='13px'
            fontWeight='light'
            mb='18px'
          >
            Возврат
          </Button>
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
          <FormControl isRequired mb='21px'>
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

export default App
