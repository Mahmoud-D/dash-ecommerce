import ReactDOM from 'react-dom/client'

import AppRouter from '@routes/AppRouter'

import store from '@store/index'

import { Provider } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
)
