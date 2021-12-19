import react , {useState} from 'react'
import resolve from 'resolve';
import './App.css';
const api_url = "https://api.nasa.gov/planetary/apod?api_key=ue7hsRW5Us1KxiKZYMRl2J6LnioOA1QVrpT9dGSK"


function App() {


  const [src , setSrc] = useState(``)
  const [date , setDate] = useState(``)
  const [title , setTitle] = useState(``)
  const [explanation , setExplanation] = useState(``)
  const [copyright , setCopyright] = useState(``)

  async function sendApiRequest() {

    fetch(api_url) 
  .then((response) => response.json())
  .then((data) => {
    setSrc(data.url)
    setDate(data.date)
    setTitle(data.title)
    setExplanation(data.explanation)
    setCopyright(data.copyright)
    console.log(data)
})
  }
setTimeout(() => {
  sendApiRequest();
}, 1);

  return (
    <div className="container">
      <h2 className="heading">Astronomy Picture Of Day</h2>
      <h5 className="date"> {date}</h5>
      <h2 className="title">{title}</h2>
      <h4 className="copyright"> By {copyright}</h4>
      <img src={src} id="image" />
      <p className="explanation">{explanation}</p>
    </div>
    );
}

export default App;
