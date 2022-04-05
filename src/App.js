import './App.css';
import Listing from './components/Listing';
import getDatas from './data/etsy';

function App() {
  const data = getDatas().map((item) => (item));
  return (
    <div className="wrapper">
      <div className="item-list">
        {data.map((item) => (<Listing key={item.listing_id} items={item} />))}
      </div>
    </div>
  );
}

export default App;
