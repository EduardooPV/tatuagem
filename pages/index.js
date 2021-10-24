import styled from 'styled-components'
import Hero from '../components/Hero'
import About from '../components/About'
import Cases from '../components/Cases'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'
import Copyright from '../components/Copyright'

import Background from '../public/components/bg-home.png'

const Container = styled.main`
  min-height: 100vh;
  width: 100%;
`

export default function Home() {
  return (
    <Container>
      <Hero />
      <About />
      <Cases />
      <Gallery />
      <Footer />
      <Copyright />
    </Container>
  )
}
