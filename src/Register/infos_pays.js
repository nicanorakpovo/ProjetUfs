import React, { useEffect } from "react";
import NigeriaFlag from "../assets/flags/ng.png"; // Assurez-vous d'importer ce fichier seulement si nécessaire
import "./register.css";

const CountryDropdown = () => {
  useEffect(() => {
    // La logique de manipulation DOM doit être ici, ou dans le fichier infos_pays.js
    const dropdownMenu = document.querySelector(".dropdown-menu");
    if (dropdownMenu) {
      const countries = [
        { country: "France", flag: "🇫🇷", dialCode: "+33" },
        { country: "United States", flag: "🇺🇸", dialCode: "+1" },
        { country: "Canada", flag: "🇨🇦", dialCode: "+1" },
        { country: "Germany", flag: "🇩🇪", dialCode: "+49" },
        { country: "Brazil", flag: "🇧🇷", dialCode: "+55" },
        { country: "India", flag: "🇮🇳", dialCode: "+91" },
        { country: "China", flag: "🇨🇳", dialCode: "+86" },
        { country: "Japan", flag: "🇯🇵", dialCode: "+81" },
        { country: "Nigeria", flag: "ng", dialCode: "+234" },
      ];

      // Crée les options de pays
      countries.forEach((country) => {
        const dropdownItem = document.createElement("button");
        dropdownItem.className = "dropdown-item";
        dropdownItem.type = "button";
        dropdownItem.innerHTML = `${country.flag} ${country.country} (${country.dialCode})`;
        dropdownItem.onclick = () => {
          document.getElementById("selected-flag").textContent = country.flag;
          document.getElementById("selected-code").textContent =
            country.dialCode;
        };
        dropdownMenu.appendChild(dropdownItem);
      });
    } else {
      console.error("Dropdown menu not found!");
    }
  }, []); // [] pour s'assurer que l'effet est exécuté seulement au montage du composant

  return (
    <div className="dropdown">
      <button
        className="btn btn-outline-secondary dropdown-toggle select"
        type="button"
        id="countryDropdown"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <span id="selected-flag">
          <img
            src={NigeriaFlag}
            alt="Drapeau du Nigéria"
            className=""
            style={{ width: "10px", marginRight: "8px" }}
          />
        </span>
        {/* <span id="selected-flag">ng</span> */}
        <span id="selected-code">+234</span>
      </button>
      <div
        className="dropdown-menu"
        aria-labelledby="countryDropdown"
        style={{ maxHeight: "200px", overflowY: "auto" }}
      ></div>
    </div>
  );
};

export default CountryDropdown;
