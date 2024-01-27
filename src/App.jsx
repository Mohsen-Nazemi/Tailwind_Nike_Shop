import Nav from './components/Nav'
import { Hero } from './sections'

const App = () => (
  <main className="relative">
    <Nav />    
   <section className="xl:padding-r wide:padding-r padding-b">
    <Hero />
   </section>
  </main>
);

export default App;