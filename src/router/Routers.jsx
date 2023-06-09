import React from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "../page/home/Home";
import Fotos from "../page/fotos/Fotos";
import Ilutraciones from "../page/ilutraciones/Ilutraciones";
import Videos from "../page/videos/Videos";
import ResultSearcher from "../page/Result-Searcher/ResultSearcher";
import DetailCard from "../page/DetailCard/DetailCard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "fotos",
    element: <Fotos />,
  },
  {
    path: "ilutraciones",
    element: <Ilutraciones />,
  },
  {
    path: "videos",
    element: <Videos />,
  },
  {
    path: "resultsearcher",
    element: <ResultSearcher />,
  },
  {
    path: "detailcard",
    element: <DetailCard />,
  },
]);
