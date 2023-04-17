import React from "react"
import {createBrowserRouter} from "react-router-dom";
import Home from "../page/home/Home";
import Fotos from "../page/fotos/Fotos";
import Ilutraciones from "../page/ilutraciones/Ilutraciones";
import Videos from "../page/videos/Videos";
import ResultSearcher from "../page/Result-Searcher/ResultSearcher";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home/>
    ),
  },
  {
    path: "fotos",
    element: (
      <Fotos/>
    ),
  },
  {
    path: "ilutraciones",
    element: (
      <Ilutraciones/>
    ),
  },
  {
    path: "videos",
    element: (
      <Videos/>
    ),
  },
  {
    path: "resultsearcher",
    element: (
      <ResultSearcher/>
    ),
  },
]);