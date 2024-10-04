import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PasswordInput from "../Register/PasswordInput";
// import Logo from "../assets/image/logo-colorful-removebg-preview.png";
// import Two_woman from "../assets/image/look-this-it-s-so-funny 1.png"
// import background_Two_woman from "../assets/image/Group 1000001976.png";
import "./Login.css";

const Login = () => {
  const [password, setPassword] = useState(""); // État global pour le mot de passe dans le formulaire
  return (
    <div className="container-fluid login">
      <div className="row offset-1">
        <div
          className="mt-5 mb-4 Form col-lg-5 col-md-6 col-sm-9 "
          style={{ marginLeft: "0px" }}
        >
          {/* Grand titre S'inscrire : Title : S'inscrire */}

          <form className="container">
            <h1 className="Title">SE CONNECTER</h1>
            <p className="info_after_title">
              Veuillez remplir le formulaire pour vous connecter
            </p>
            <p className="connection_option">
              Vous n'avez pas un compte?{" "}
              <span className="Se_connecter">S'inscrire'</span>
            </p>
            {/* Formulaire de l'identifiant : Id form */}

            <div className="form-group">
              <label for="Id" className="Id text">
                Idenifiant de courrier électronique
              </label>
              <input type="text" className="form-control" />
            </div>

            {/* Forulaire du mot de passe : Password form */}

            <div className="form-group">
              <label for="password" className="password text">
                Mot de passe
              </label>
              <div>
                <PasswordInput onPasswordChange={setPassword} />
              </div>
            </div>

            {/* Bouton Se souvenir de moi et mot de passe oublié : Remember me button and forgotten password*/}

            <div className=" mb-4 row">
              <input
                type="checkbox"
                className="checkbox col-1"
                style={{ height: "20px" }}
              ></input>
              <span className="col-lg-7 col-md-5">Se souvenir de moi</span>
              <span className="col-md-6 col-lg-4 text forgot_password" href="#">
                Mot de passe oublié?
              </span>
            </div>

            {/* Bouton d'envoi : Submit button */}

            <button type="submit" className="btn_next mb-4 w-100" href="#">
              Suivant{" "}
              <svg
                width="29"
                height="30"
                viewBox="0 0 29 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="0.5" width="29" height="29" rx="14.5" fill="white" />
                <path
                  d="M16.7277 9.43585L22.2918 15L16.7277 20.5642M6.7085 15H22.136"
                  stroke="#015192"
                  stroke-width="1.375"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </form>
        </div>
        {/* <div className="container col-md-6 mt-5 d-flex flex-column align-items-center order-1 order-sm-2">
           Le logo : the logo

          <div className="Logo">
            <img src={Logo} alt="Logo" />
          </div>

          Texte d'information parents et proches : Information text for parents and  relative 

          <p className="information_family mt-4 offset-1">
            LES PARENTS ET PROCHES PEUVENT SUIVRE ET ACCOMPAGNER EFFICACEMENT
            LES ETUDIANTS DANS LEUR DEMARCHES ADMINISTRATIVES, FINANCIAIRES ET
            LOGISTIQUES
          </p>
           Image des deux hommes : the two man pictures

          <div className="Two_woman col-md-7 mt-3 d-flex justify-content-center">
            
            <img
              src={Two_woman}
              alt="Two_man"
              className="img-fluid w-100 h-auto  justify-content-center img-responsive"
            />
          </div>
        </div>
  
         <div className="background-two_woman col-md-6 d-flex position-absolute">
          <img
              src={background_Two_woman}
              alt="background_Two_woman"
              className=" h-auto "
            />
        </div> */}
      </div>
    </div>
  );
};

export default Login;
