import ReactDOM from 'react-dom/client'
import { store } from './app/store/store.ts'
import './index.css'
import { Provider } from 'react-redux'
import RouterApp from './app/RouterApp.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
      <RouterApp />
    </Provider>
)
