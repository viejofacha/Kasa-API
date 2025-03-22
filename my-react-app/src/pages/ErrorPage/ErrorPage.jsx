import React from 'react'; // eslint-disable-line no-unused-vars
import ImageError from "../../assets/404.svg"
import "../../pages/ErrorPage/errorPage.css"
export default function ErrorPage() {
  return (
    <div className= "ErrorPage">
      
      <ul>
         <img src={ImageError} alt="Page Error" className="img404" />
        <h1 className="ErrorPage-h1">Oups! La page que vous demandez n`existe pas.</h1>
        <div className="ErrorPage-a"><a href={'http://localhost:5173/'}>Retourner sur la page d’accueil</a></div>
      </ul>
      
    </div>
  )
}
