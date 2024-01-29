import Nav from './components/Nav'
import { Hero, PopularProducts } from './sections'

const App = () => (
  <main className="relative">
        <Nav />    
      <section className="xl:padding-r wide:padding-r">
        <Hero />
      </section>
      <section className='padding'>
            <PopularProducts />
      </section>
  </main>
);

export default App;