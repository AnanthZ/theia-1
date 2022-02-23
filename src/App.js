
import './App.css';
import Teamcard from './Components/Teamcard/Teamcard';


const data={
  name:"lead",
  imag:"https://lh3.google.com/u/0/ogw/ADea4I6lFABZL71U_EC18K9_d0NNJwk59_zlQRTt8kjJ=s64-c-mo",
  team:[
    {
      name:"member1",
      imag:"https://lh3.google.com/u/0/ogw/ADea4I6lFABZL71U_EC18K9_d0NNJwk59_zlQRTt8kjJ=s64-c-mo",
    },
    {
      name:"member2",
      imag:"https://lh3.google.com/u/0/ogw/ADea4I6lFABZL71U_EC18K9_d0NNJwk59_zlQRTt8kjJ=s64-c-mo",
    },
    {
      name:"member3",
      imag:"https://lh3.google.com/u/0/ogw/ADea4I6lFABZL71U_EC18K9_d0NNJwk59_zlQRTt8kjJ=s64-c-mo",
    },
    {
      name:"member4",
      imag:"https://lh3.google.com/u/0/ogw/ADea4I6lFABZL71U_EC18K9_d0NNJwk59_zlQRTt8kjJ=s64-c-mo",
    }
  ]
}
function App() {
  return (
    <div className="App">
      <Teamcard data={data}/>
    </div>
  );
}

export default App;
