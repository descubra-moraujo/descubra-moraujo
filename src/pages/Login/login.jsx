import React, { useState } from 'react';
import './login.css';
import { Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [codigo, setCodigo] = useState('');
  const [senha, setSenha] = useState('');

  const navigate= useNavigate();
  const [verSenha, setVerSenha] = useState(false);

 const handleLogin = async () => {
  try {
    const response = await fetch("http://localhost:3001/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ codigo, senha })
    });

    const data = await response.json();

    if (response.ok) {
      alert("Login realizado com sucesso!");
      localStorage.setItem("token", data.token); 
      navigate("/painel");
    } else {
      alert(data.error || "Erro ao fazer login");
    }
  } catch (error) {
    alert("Erro ao conectar ao servidor");
    console.error("Erro no login:", error);
  }
};


  if (codigo === codigoCorreto && senha === senhaCorreta) {
    alert('Login realizado com sucesso!');
    navigate('/painel')
  } else {
    alert('Código ou senha incorretos.');
  }

  return (
    <div className="admin-login-container">
      <h1 className="admin-login-title">Login Admin</h1>

      <div className="admin-login-box">
        <div>
          <label className="admin-label">Código de acesso:</label>
          <div className="admin-input-wrapper">
            <input
              type="text"
              className="admin-input"
              placeholder="Digite o código de acesso"
              value={codigo}
              onChange={(e) => setCodigo(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label className="admin-label">Senha:</label>
         <div className="admin-input-wrapper">
  <input
    type={verSenha ? 'text' : 'password'}
    className="admin-input"
    placeholder="Digite a senha"
    value={senha}
    onChange={(e) => setSenha(e.target.value)}
  />
  <button
    type="button"
    onClick={() => setVerSenha(!verSenha)}
    style={{
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      marginLeft: '8px'
    }}
  >
    {verSenha ? <EyeOff size={20} /> : <Eye size={20} />}
  </button>
</div>
</div>

        <button className="admin-login-button" onClick={handleLogin}>
          Entrar
        </button>
      </div>
      </div>
  );
  };

export default Login;
