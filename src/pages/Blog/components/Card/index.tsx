import { CardContainer, HeaderCard } from './styles'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Markdown from 'react-markdown'
interface CardProps {
  title: string
  body: string
  createdAt: string
  onClick: () => void
}

export function Card({ title, body, createdAt, onClick }: CardProps) {
  return (
    <CardContainer onClick={onClick}>
      <HeaderCard>
        <h2>{title}</h2>
        <span>
          {formatDistanceToNow(new Date(createdAt), {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
      </HeaderCard>
      <p>
        <Markdown>
          {body}
        </Markdown>
      </p>

    </CardContainer>
  )
}
