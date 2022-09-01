import "./App.css";
import CardSatu from './component/card1';
import CardDua from './component/card2';
import CardTiga from './component/card3';
import CardEmpat from './component/card4';
import CardLima from './component/card5';
import CardEnam from './component/card6';
import CardTujuh from './component/card7';
import CardDelapan from './component/card8';
import CardSembilan from './component/card9';
import CardSepuluh from './component/card10';
import SearchAppBar from './component/app';



function App() {
  return (
    <div className="App">
      <SearchAppBar />
      
      <header className="App-header">
      <div className="kotak">
        <CardSatu />
        </div>
      <div className="kotak">
      <CardDua />
      </div>
      <div className="kotak">
      <CardTiga /> 
      </div>
      <div className="kotak">
      <CardEmpat />
      </div>
      <div className="kotak">
      <CardLima />
      </div>
      <div className="kotak">
      <CardEnam />
      </div>
      <div className="kotak">
      <CardTujuh />
      </div>
      <div className="kotak">
      <CardDelapan />
      </div>
      <div className="kotak">
      <CardSembilan />
      </div>
      <div className="kotak">
      <CardSepuluh />
      </div>
      </header>
    </div>
  );
}



export default App;
