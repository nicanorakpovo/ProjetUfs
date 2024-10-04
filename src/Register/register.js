import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./register.css";
import CountryDropdown from "./infos_pays";
import PasswordInput from "./PasswordInput";
import { Link } from "react-router-dom";
import "./infos_pays";
// $const countries =[
//   {code : '+234' , names : 'Nigeria', image :'../assets/flags/ng.png'}
// ]

const Register = () => {
  const [password, setPassword] = useState(""); // État global pour le mot de passe dans le formulaire
  return (
    <div className="container-fluid register">
      <div className="row offset-1 ">
        <div
          className="mt-5 mb-5 Form container col-md-6 col-sm-9"
          style={{ marginLeft: "0px" }}
        >
          {/* Grand titre S'inscrire : Title : S'inscrire */}

          <form className="container">
            <h1 className="Title">S'INSCRIRE</h1>
            <p className="info_after_title">
              Veuillez remplir le formulaire pour vous inscrire
            </p>
            <p className="connection_option">
              Vous avez déjà un compte?{" "}
              <Link to={"/Login"}>
                <span className="Se_connecter">Se connecter</span>
              </Link>
            </p>
            {/* Formulaire du nom : Full name form */}

            <div className="form-group">
              <label for="Name" className="Name mt-2">
                Nom
              </label>
              <input type="text" className="form-control" />
            </div>
            {/* Formulaire de l'identifiant : Id form */}

            <div className="form-group">
              <label for="Id" className="Id">
                Idenifiant de courrier électronique
              </label>
              <input type="text" className="form-control" />
            </div>

            {/* Formulaire du numéro de téléphone : Phone number form */}

            <div className="form-group">
              <label for="Num" className="Num">
                Numéro de téléphone
              </label>
              <div className="row">
                {/* Sélecteur de code de pays : country code selector */}
                <div className="col-2">
                    <CountryDropdown/>
                </div>

                {/* Champ de saisie pour le numéro de téléphone : input field for phone number*/}
                <div className="col-lg-9 col-md-8 ms-md-5">
                  <input
                    type="tel"
                    className="form-control phone-number-input "
                    placeholder="XXX-XXX-XXX"
                    aria-label="Phone Number"
                  />
                </div>
              </div>
            </div>

            {/* Formulaire de pays et date de naissance : Country and birthday form */}

            <div className="form-group">
              <div className="row">
                <div className="col-md-6 d-flex flex-column">
                  <label for="Country_name" className="Country_name">
                    Pays
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-6 d-flex flex-column">
                  <label for="Birth_date" className="Birth_date">
                    Date de naissance
                  </label>
                  <input type="Date" className="form-control" />
                </div>
              </div>
            </div>

            {/* Forulaire du mot de passe : Password form */}

            <div className="form-group">
              <label for="password" className="password">
                Créer votre mot de passe
              </label>
              <div>
                <PasswordInput onPasswordChange={setPassword} />
              </div>
            </div>

            {/* Conditions et termes checkbox : terms and conditions form */}

            <div className="Conditions_termes mb-4 row">
              <input
                type="checkbox"
                className="checkbox col-md-1"
                style={{ height: "20px" }}
              ></input>
              <span className="col-md-10">
                J'accepte les termes et conditions
              </span>
            </div>

            {/* Bouton d'envoi : Submit button */}

            <button type="submit" className="btn_next mb-5 w-100" href="#">
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

          <div className="Two_man col-md-6 position-absolute d-flex justify-content-center">
            
            <img
              src={Two_man}
              alt="Two_man"
              className="img-Two_man "
            />
          </div>
        </div>
        <div className="background-two_man col-md-6 d-flex justify-content-center position-absolute offset-5">
          <img
              src={background_Two_man}
              alt="background_Two_man"
              className=" h-auto "
            />
        </div> */}
      </div>
    </div>
  );
};

export default Register;
