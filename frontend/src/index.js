import React from "react";
import { render } from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import Header from "./components/Header";
import Home from "./components/Home"
import Fornecedores from "./components/Fornecedores"
// import Teste from "./components/Teste"

function App() {
  return (
    <Router>
    <ChakraProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/teste" element={<Teste />} /> */}
        <Route path="/fornecedores" element={<Fornecedores />} />
      </Routes>
    </ChakraProvider>
    </Router>
  )
}

const rootElement = document.getElementById("root")
render(<App />, rootElement)