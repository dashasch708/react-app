import { Button, Container } from '@chakra-ui/react'
import { useState, useEffect } from 'react'

export default function Emty() {
  const [count, setCount] = useState(4)
  useEffect(() => {
    document.title = count
  }, [count])
  return (
    <Container>
      {count}
      <Button
        w={{ base: '200px', lg: '400px' }}
        onClick={() => {
          setCount((oldCount) => oldCount + 1)
        }}
      >
        relax
      </Button>
      <button style={{ background: 'tomato' }}>hello</button>
    </Container>
  )
}
