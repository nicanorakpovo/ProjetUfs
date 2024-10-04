import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./PasswordInput.css";

function PasswordInput() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="input-group mb-3">
      {/* Champ de saisie du mot de passe */}
      <input
        type={showPassword ? "text" : "password"}
        className="form-control"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {/* Bouton pour basculer la visibilité */}
      <span
        className="input-group-text"
        onClick={togglePasswordVisibility}
        style={{ cursor: "pointer" }}
      >
        {showPassword ? <FaEye /> : <FaEyeSlash />}
      </span>
    </div>
  );
}

export default PasswordInput;
 