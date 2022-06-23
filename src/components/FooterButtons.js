import { Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function FooterButtons({ text, link }) {
  return (
    <Button
      as={Link}
      to={link}
      variant='link'
      color='white'
      fontSize='13px'
      fontWeight='light'
      mb='18px'
      justifyContent='flex-start'
    >
      {text}
    </Button>
  )
}
