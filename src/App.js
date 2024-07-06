import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  useEffect(() => {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    const showSlide = (index) => {
      slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
      });
    };

    const nextSlide = () => {
      slideIndex = (slideIndex + 1) % totalSlides;
      showSlide(slideIndex);
    };

    setInterval(nextSlide, 3000); // Change slide every 3 seconds
    showSlide(slideIndex);

    // Fade-in effect on scroll
    const sections = document.querySelectorAll('.carousel-section');
    const options = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
        }
      });
    }, options);

    sections.forEach(section => {
      observer.observe(section);
    });

    // Show footer at the bottom
    const footer = document.querySelector('footer');
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollTop + windowHeight >= documentHeight - 1) { // Ajuste fino para detectar o final da página
        footer.classList.add('visible');
      } else {
        footer.classList.remove('visible');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <header className="custom-navbar text-white p-3 fixed-top animated-navbar">
        <nav className="container d-flex justify-content-center">
          <img src="/img/logo.png" alt="Logo" className="logo" />
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link" href="#slide">INICIO</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">SOBRE</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#faq">FALE CONOSCO</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#social">REDES SOCIAIS</a>
              </li>
            </ul>
        </nav>
      </header>

      <main className="pt-5">
        {/* Seção de Slides */}
        <section id="slide" className="carousel-section d-flex align-items-center justify-content-center">
          <div className="slider">
            <div className="slides">
              <div className="slide"><img src="/img/img1.jpg" alt="Imagem 1" className="img-fluid" /></div>
              <div className="slide"><img src="/img/img2.jpg" alt="Imagem 2" className="img-fluid" /></div>
              <div className="slide"><img src="/img/img3.jpg" alt="Imagem 3" className="img-fluid" /></div>
            </div>
          </div>
        </section>

        {/* Seção Sobre o Projeto */}
        <section id="about" className="carousel-section container text-center my-5 p-5 bg-light rounded shadow">
          <h2 id="titulo">Sobre o Projeto</h2>
          <p>A campanha política do partido Podemos em Catanduvas, Santa Catarina, está ganhando força e mobilizando a comunidade local
            com propostas inovadoras e centradas no bem-estar social. Liderada por candidatos comprometidos com a transparência e a participação popular,
            a campanha destaca a importância de investimentos em educação, saúde e infraestrutura. Uma das principais bandeiras é a melhoria do sistema
            de saúde municipal, garantindo atendimento de qualidade para todos os cidadãos. Além disso, o partido promete revitalizar a economia local,
            incentivando o empreendedorismo e criando oportunidades de emprego. O Podemos também está focado em promover a sustentabilidade,
            com projetos voltados para a preservação do meio ambiente. A segurança pública é outra prioridade, com propostas para fortalecer a atuação das
             forças de segurança. A campanha busca envolver a população em um diálogo aberto, promovendo audiências públicas e encontros comunitários.
              O objetivo é construir um futuro melhor para Catanduvas, onde todos possam prosperar e viver com dignidade.</p>
        </section>

        {/* Seção FAQ */}
        <section id="faq" className="carousel-section container text-center my-5 p-5 bg-light rounded shadow">
          <h2>Perguntas Frequentes</h2>
          <form>
            <div className="form-group">
              <label htmlFor="question">Envie sua dúvida:</label>
              <textarea id="question" name="question" className="form-control" rows="4"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
          </form>
        </section>

        {/* Seção Redes Sociais */}
        <section id="social" className="carousel-section container text-center my-5 p-5 bg-light rounded shadow">
          <h2>Redes Sociais</h2>
          <div className="d-flex justify-content-center">
            <a href="https://www.facebook.com" className="text-primary mx-3" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook fa-3x"></i>
            </a>
            <a href="https://www.twitter.com" className="text-primary mx-3" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter fa-3x"></i>
            </a>
            <a href="https://www.instagram.com" className="text-primary mx-3" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram fa-3x"></i>
            </a>
            <a href="https://www.linkedin.com" className="text-primary mx-3" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin fa-3x"></i>
            </a>
          </div>
        </section>
      </main>

      <footer className="custom-footer text-white text-center p-3">
        <p>&copy; 2024 Campanha Política</p>
        <div className="d-flex justify-content-center">
          <a href="https://www.facebook.com" className="text-white mx-3" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a href="https://www.twitter.com" className="text-white mx-3" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter fa-2x"></i>
          </a>
          <a href="https://www.instagram.com" className="text-white mx-3" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
