import Product from '../Product'
import { Container, List, Title } from './styles'

import resident from '../../assets/images/resident.png'
import fifa from '../../assets/images/fifa.png'
import diablo from '../../assets/images/diablo.png'
import jedi from '../../assets/images/star_wars.png'
import street from '../../assets/images/street-fighter.png'
import zelda from '../../assets/images/zelda.png'

export type Props = {
  title: string
  background: 'gray' | 'black'
}

const ProductsList = ({ title, background }: Props) => (
  <Container background={background}>
    <div className="container">
      <Title>{title}</Title>
      <List>
        <Product
          category="Ação"
          description="teste"
          image={title === 'Promoções' ? resident : diablo}
          infos={['-10%', 'R$ 150']}
          system="Windows"
          title="Nome do jogo"
        />
        <Product
          category="Ação"
          description="teste"
          image={title === 'Promoções' ? resident : jedi}
          infos={['-10%', 'R$ 150']}
          system="Windows"
          title="Nome do jogo"
        />
        <Product
          category="Ação"
          description="teste"
          image={title === 'Promoções' ? fifa : street}
          infos={['-10%', 'R$ 150']}
          system="Windows"
          title="Nome do jogo"
        />
        <Product
          category="Ação"
          description="teste"
          image={title === 'Promoções' ? fifa : zelda}
          infos={['-10%', 'R$ 150']}
          system="Windows"
          title="Nome do jogo"
        />
      </List>
    </div>
  </Container>
)

export default ProductsList
