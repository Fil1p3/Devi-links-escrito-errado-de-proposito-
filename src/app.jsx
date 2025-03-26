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
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function getUserData() {
      try {
        const response = await api.get("/users/Fil1p3");

        setUser(response.data);
      } catch (error) {
        console.log("Erro ao bsucar os dados do usuário", error);
      }
    }

    getUserData();
  }, []);

  return (
    <div className={`container ${theme}`}>
      <div className="profile">
        <img src={user.avatar_url} alt="" className="img-profile" />
        <p>@{user.login}</p>
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
        <a href="https://github.com/Fil1p3/dev-links" target="_blank">
          <GithubLogo size={24} />
        </a>
        <a href="https://www.instagram.com/filipe_fg.kk/" target="_blank">
          <InstagramLogo size={24} />
        </a>
        <a href="https://www.youtube.com/@filipegabriel6490" target="_blank">
          <YoutubeLogo size={24} />
        </a>
        <a href="https://www.linkedin.com/" target="_blank">
          <LinkedinLogo size={24} />
        </a>
      </div>
    </div>
  );
}
