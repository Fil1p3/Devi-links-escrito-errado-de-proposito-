import { useEffect, useState } from "react";
import {
  Sun,
  MoonStars,
  GithubLogo,
  InstagramLogo,
  YoutubeLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import { api } from "./services/api";
import { useTheme } from "./context/ThemeContext";
import { ButtonLink } from "./components/button-link";

export function App() {
  const { theme, toggleTheme } = useTheme();
  const [user, setUser] = useState({});

  useEffect(() => {
    async function getUserData() {
      try {
        const response = await api.get("/users/Fil1p3");
        console.log(response.data);
        setUser(response.data);
      } catch (error) {
        console.log("Erro ao buscar os dados do usuário", error);
      }
    }

    getUserData();
  }, []);

  return (
    <div className={`container ${theme}`}>
      <div className="profile">
        {user.avatar_url ? (
          <img
            src={user.avatar_url}
            alt="Foto de perfil"
            className="img-profile"
          />
        ) : (
          <p>Carregando...</p>
        )}
        {user.login ? <p>@{user.login}</p> : <p>Carregando...</p>}
      </div>

      <div className="toggle-container" onClick={toggleTheme}>
        <div className="toggle-switch">
          {theme === "dark" ? <Sun size={16} /> : <MoonStars size={16} />}
        </div>
      </div>

      <div className="links">
        <ButtonLink
          name="Inscreva-se no NLW"
          link="https://www.rocketseat.com.br"
        />
        <ButtonLink
          name="Baixar meu e-book"
          link="https://www.rocketseat.com.br"
        />
        <ButtonLink
          name="Veja meu portfólio"
          link="https://www.rocketseat.com.br"
        />
        <ButtonLink
          name="Conheça o Explorer"
          link="https://www.rocketseat.com.br"
        />
      </div>

      <div className="social-media">
        <a
          href={`https://github.com/${user.login}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubLogo size={24} />
        </a>
        <a
          href="https://www.instagram.com/filipe_fg.kk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramLogo size={24} />
        </a>
        <a
          href="https://www.youtube.com/@filipegabriel6490"
          target="_blank"
          rel="noopener noreferrer"
        >
          <YoutubeLogo size={24} />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinLogo size={24} />
        </a>
      </div>
    </div>
  );
}
