import { PrimeReactProvider } from 'primereact/api';
import './App.css';
import RootPage from './modules/rootPage.tsx';
import { Layout } from './layout/layout.tsx';

function App() {
  return (
    <PrimeReactProvider>
      <Layout>
        <RootPage />
      </Layout>
    </PrimeReactProvider>
  );
}

export default App;
