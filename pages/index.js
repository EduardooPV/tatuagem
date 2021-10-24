import styled from 'styled-components'
import Hero from '../components/Hero'
import About from '../components/About'
import Cases from '../components/Cases'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'
import Copyright from '../components/Copyright'

import Head from 'next/head'

const Container = styled.main`
  min-height: 100vh;
  width: 100%;
`

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Template Landing Page Tattoo</title>
        <meta name="description" content="Template para site de tatuagem" />
        <meta name="author" content="Luiz Eduardo Prado Veltroni" />
        <link rel="shortcut icon" href="favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Nunito:wght@400;600&display=swap" rel="stylesheet" />
      </Head>
      <Hero />
      <About />
      <Cases />
      <Gallery />
      <Footer />
      <Copyright />
    </Container>
  )
}
