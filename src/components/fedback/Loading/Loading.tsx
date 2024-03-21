import { TLoading } from '@customTypes/shared'

type LoadingPros = {
  status: TLoading
  error: null | string
  children: React.ReactNode
}
const Loading = ({ status, error, children }: LoadingPros) => {
  if (status === 'pending') {
    return <p>Loading...</p>
  }
  if (status === 'failed') {
    return <p>{error}</p>
  }

  return <>{children}</>
}

export default Loading
