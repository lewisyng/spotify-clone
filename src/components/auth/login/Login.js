import React from "react";
import { loginUrl } from "../../../spotify/index.js";

function Login() {
  return (
    <div className="login">
      <a href={loginUrl}>Login with Spotify</a>
    </div>
  );
}

export default Login;
