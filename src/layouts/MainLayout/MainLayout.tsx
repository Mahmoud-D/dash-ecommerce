import { Container } from 'react-bootstrap'
import styles from './styles.module.css'
import { Header, Footer } from '@components/common'

const { container, wrapper } = styles

const MainLayout = () => {
  return (
    <Container className={container}>
      <div className={wrapper}>
        <Header />
      </div>
      <Footer />
    </Container>
  )
}

export default MainLayout
