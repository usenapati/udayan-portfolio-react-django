import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

//export default function App() {
class App extends React.Component {

/*
const [project, setProject] = useState([])
  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const projectResponse = await fetch('http://127.0.0.1:8000/project')
    const projectData = await projectResponse.json()
    setProject(projectData)
    console.log(projectData)
  } */
  /* useEffect(() => {
    fetch("http://127.0.0.1:8000/project/").then(
      res=> res.json()).then(
        data=> console.log(data))
  }, []) */

  state = {
    details: [],
  };
  componentDidMount() {
    let data;
    axios
      .get("http://localhost:8000/project/")
      .then((res) => {
        data = res.data;
        this.setState({
          details: data,
        });
        console.log(data)
        console.log(this.state)
      })
      .catch((err) => {})
      
  }
  render() {
    return (
      <main className="text-gray-400 bg-gray-900 body-font">
        <Navbar />
        <About />
        <Projects />
        <Skills />
      </main>
    );
  }
}
export default App;
