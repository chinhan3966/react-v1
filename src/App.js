import './App.css';
import travel1 from './image/travel1.jpg'
import travel2 from './image/travel2.jpg'
import travel3 from './image/travel3.jpg'
import Hero from './component/Hero'
import Slide from './component/Slide'
import Navbar from './component/Navbar'
const listNav = [
  {url:'#', title:'Home'},
  {url:'#introduce', title:'Introduce'},
  {url:'#about', title:'About'}
]
function App() {
  return (
    <div className="App">
      <Navbar listNav={listNav}/>
      <Hero imageSrc={travel1}/>
      <Slide
          imageSrc={travel2}
          title='los angerles'
          subtitle='With an estimated population of nearly four million people, it is the second most populous city in the United States (after New York City) and the third most populous city in North America (after Mexico ...'
      />
      <Slide 
          imageSrc={travel3}
          title='chicago'
          subtitle='Chicago, city, seat of Cook county, northeastern Illinois, U.S. With a population hovering near three million, Chicago is the state’s largest and the country’s third most populous city.'
          flipped={true}
      />
    </div>
  );
}

export default App;
