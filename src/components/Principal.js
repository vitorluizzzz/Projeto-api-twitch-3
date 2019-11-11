import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import png3 from "../Img/png3.png";

function Principal() {
  return (
    <div>
      <h1>Veja os principais jogos e streamers da twitch</h1>
      <img src={png3} />
    </div>
  );
}

export default Principal;
