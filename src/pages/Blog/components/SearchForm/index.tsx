import { ContainerSearchForm } from './styles'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { DataContext } from '../../../../contexts/DataContexts'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer< typeof searchFormSchema>

export function SearchForm() {
  const { fetchIssues } = useContext(DataContext)
  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  function handleSearchPost(data: SearchFormInputs) {
    const { query } = data
    fetchIssues(query)
  }

  return (
    <ContainerSearchForm onSubmit={handleSubmit(handleSearchPost)}>
      <input
        {...register('query')}
        type="text"
        placeholder="Buscar conteúdo"
      />
    </ContainerSearchForm>
  )
}
