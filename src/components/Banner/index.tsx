import { Imagem, Precos, Titulo } from './styles'

const Banner = () => (
  <Imagem>
    <div className="container">
      <Titulo>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Titulo>
      <Precos>
        <span>De R$ 250,00</span> <br /> por apenas R$ 99,90
      </Precos>
    </div>
  </Imagem>
)

export default Banner
