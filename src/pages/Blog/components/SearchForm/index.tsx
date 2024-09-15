import { ContainerSearchForm } from './styles'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer< typeof searchFormSchema>

export function SearchForm() {
  const { register } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  return (
    <ContainerSearchForm>
      <input
        {...register('query')}
        type="text"
        placeholder="Buscar conteúdo"
      />
    </ContainerSearchForm>
  )
}
