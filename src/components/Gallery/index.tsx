import Section from '../Section'

import spider from '../../assets/images/banner-homem-aranha.png'
import hogwarts from '../../assets/images/fundo_hogwarts.png'
import zoom from '../../assets/images/zoom.png'
import play from '../../assets/images/play.png'
import { Action, Item, Items } from './styles'

type GalleryItem = {
  type: 'image' | 'video'
  url: string
}

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: spider
  },
  {
    type: 'image',
    url: hogwarts
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/uHGShqcAHlQ'
  }
]

type Props = {
  defaultCover: string
  name: string
}

const Gallery = ({ defaultCover, name }: Props) => {
  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  return (
    <Section title="Galeria" background="black">
      <Items>
        {mock.map((media, index) => (
          <Item key={media.url}>
            <img
              src={getMediaCover(media)}
              alt={`Mídia ${index + 1} de ${name}`}
            />
            <Action>
              <img
                src={getMediaIcon(media)}
                alt="clique para maximizar a mídia"
              />
            </Action>
          </Item>
        ))}
      </Items>
    </Section>
  )
}

export default Gallery
