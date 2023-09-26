import Button from '../Button'
import Tag from '../Tag'
import { Imagem, Precos, Titulo } from './styles'

const Banner = () => (
  <Imagem>
    <div className="container">
      <Tag size="big">Destaque do dia</Tag>
      <div>
        <Titulo>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Titulo>
        <Precos>
          <span>De R$ 250,00</span> <br /> por apenas R$ 99,90
        </Precos>
      </div>
      <Button
        type="link"
        to="/produto"
        title="Clique aqui para aproveitar essa oferta"
      >
        Aproveitar
      </Button>
    </div>
  </Imagem>
)

export default Banner
