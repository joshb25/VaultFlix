import React from "react"
import ReactDOM from "react-dom"
import SearchQuery from "./components/SearchQuery"

 const API_KEY=process.env.REACT_APP_API_KEY
     console.log(API_KEY)

ReactDOM.render(<SearchQuery />,document.getElementById("root"));


