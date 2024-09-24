import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'

import { api } from '../lib/axios'
import { useNavigate } from 'react-router-dom'

interface Issue {
  id: number;
  title: string;
  body: string;
  created_at: string
  comments: number
  html_url: string
}

interface User {
  login: string
  name: string
  followers: number
  company: string
  bio: string
  avatar_url: string
  html_url: string
}

interface DataContextType {
  fetchIssues: (query?: string) => void
  fetchUser: () => void
  navigateToPost: (id: number) => void
  loadIssueSelected: (issueSelected: string | null) => void

  issueSelected: Issue | null
  user: User | null
  issues: Issue[] | null
}

export const DataContext = createContext({} as DataContextType)

interface DataProviderProps {
  children: ReactNode
}

export function DataProvider({ children }: DataProviderProps) {
  const [issues, setIssues] = useState<Issue[]>([])
  const [user, setUser] = useState<User | null>(null)
  const [
    issueSelected,
    setIssueSelected,
  ] = useState<Issue | null>(null)
  const navigate = useNavigate()

  const fetchIssues = useCallback(async (query?: string) => {
    try {
      const response = await api
        .get(query
          ? 'search/issues'
          : 'repos/igorcariello/github-blog/issues', {
          params: query
            ? { q: `${query} repo:igorcariello/github-blog` }
            : {},
        })

      setIssues(query
        ? response.data.items
        : response.data)
    } catch (error) {
      console.log('Erro ao buscar as issues:', error)
    }
  }, [])

  const fetchUser = useCallback(async () => {
    try {
      const response = await api.get('users/igorcariello')
      setUser(response.data)
    } catch (error) {
      console.log('Erro ao buscar o usuário:', error)
    }
  }, [])

  async function navigateToPost(id: number) {
    const issueFind = issues?.find(issue => {
      return issue.id === id
    })

    if (issueFind) {
      setIssueSelected(issueFind)
    } else {
      setIssueSelected(null)
    }

    navigate(`/post/${id}`)
  }

  function loadIssueSelected(issueSelected: string | null) {
    if (issueSelected) {
      try {
        const parsedIssue = JSON.parse(issueSelected)
        setIssueSelected(parsedIssue)
      } catch (error) {
        console.log('Erro ao carregar o issue do localStorage', error)
      }
    }
  }

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  useEffect(() => {
    fetchIssues()
  }, [fetchIssues])

  return (
    <DataContext.Provider
      value={{
        fetchIssues,
        fetchUser,
        navigateToPost,
        loadIssueSelected,
        issueSelected,
        user,
        issues,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}
