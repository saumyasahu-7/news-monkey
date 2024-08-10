import React from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App=()=>{
  const apiKey = process.env.REACT_APP_API_KEY;
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/business"
            element={
              <News apiKey={apiKey} key="business" category="business" />
            }
          ></Route>
          <Route
            exact
            path="/entertainment"
            element={
              <News
                apiKey={apiKey}
                key="entertainment"
                category="entertainment"
              />
            }
          ></Route>
          <Route
            exact
            path="/general"
            element={
              <News apiKey={apiKey} key="general" category="general" />
            }
          ></Route>
          <Route
            exact
            path="/health"
            element={
              <News apiKey={apiKey} key="health" category="health" />
            }
          ></Route>
          <Route
            exact
            path="/science"
            element={
              <News apiKey={apiKey} key="science" category="science" />
            }
          ></Route>
          <Route
            exact
            path="/sports"
            element={
              <News apiKey={apiKey} key="sports" category="sports" />
            }
          ></Route>
          <Route
            exact
            path="/technology"
            element={
              <News
                apiKey={apiKey}
                key="technology"
                category="technology"
              />
            }
          ></Route>
          <Route
            exact
            path="/"
            element={<News apiKey={apiKey} key="home" />}
          ></Route>
          <Route
            exact
            path="/"
            element={<News apiKey={apiKey} key="NewsDino" />}
          ></Route>
        </Routes>
      </Router>
    );
          }


export default App;
