import "./App.css";
import Homepage from "./Pages/Homepage";
import { Route } from "react-router-dom";
import Chatpage from "./Pages/Chatpage";
import axios from "axios";
import { useEffect } from "react";
function App() {
  const getData = async()=>{
    const res = await axios.get('https://geolocation-db.com/json/')
    console.log(res.data.IPv4);
}

useEffect(()=>{
    //passing getData method to the lifecycle method
    getData()
},[])
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={Chatpage} />
    </div>
  );
}

export default App;
