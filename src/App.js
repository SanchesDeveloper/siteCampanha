import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import emailjs from '@emailjs/browser';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';

function App() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const isMobile = useMediaQuery({ query: '(max-width: 780px)' });
  const [isExpanded, setIsExpanded] = useState(false);

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

    const slideInterval = setInterval(nextSlide, 5000);
    showSlide(slideIndex);

    const sections = document.querySelectorAll('.carousel-section');
    const options = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
        }
      });
    }, options);

    sections.forEach(section => {
      observer.observe(section);
    });

    const footer = document.querySelector('footer');
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollTop + windowHeight >= documentHeight - 1) {
        footer.classList.add('visible');
      } else {
        footer.classList.remove('visible');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(slideInterval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function sendEmail(e) {
    e.preventDefault();
    if (nome === '' || email === '' || telefone === '' || message === '') {
      alert('Preencha todos os campos');
      return;
    }
    emailjs.send("service_yn9lqop", "template_knm7wdo", templateParams, "kgjrpeuKtmGTMJcGi")
      .then((response) => {
        alert("Informações enviadas");
        console.log("Informações enviadas", response.status, response.text);
        setNome('');
        setTelefone('');
        setEmail('');
        setMessage('');
      }, (err) => {
        console.log("ERRO: ", err);
      });
  };

  const templateParams = {
    from_name: nome,
    message: message,
    telefone: telefone,
    email: email
  };

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <header>
        <Navbar collapseOnSelect expand="lg" fixed="top" className='navbar'>
          <Container>
            <Navbar.Brand href="#banner">
              <img src="/img/logo.png" alt="Logo" className="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="#about">SOBRE</Nav.Link>
                <Nav.Link href="#social">INSTITUCIONAL</Nav.Link>
                <Nav.Link href="#form">FALE CONOSCO</Nav.Link>
                <Nav.Link href="https://filie.podemos.org.br/">FILIE-SE</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <main className="pt-5">
        <div id="banner" className="banner">
          <div className="slider">
            <div className="slides">
              {isMobile ? (
                <>
                  <div><img src="/img/mobile2.png" alt="Imagem Mobile 2" className="img-fluid full-screen-img"/></div>
                </>
              ) : (
                <>
                  <div className="slide"><img src="/img/bactv.png" alt="Imagem 1" className="img-fluid" /></div>
                  <div className="slide"><img src="/img/boasvindas.png" alt="Imagem 2" className="img-fluid" /></div>
                  <div className="slide"><img src="/img/ba.png" alt="Imagem 3" className="img-fluid" /></div>
                </>
              )}
            </div>
          </div>
        </div>
        <section id="about" className="carousel-section text-center rounded shadow">
          <div id="historiaimg"><img className="historiaimg" alt='img' src="/img/historia2.png" /></div>
          <div className="divHistoria">
            <p className='paragrafoHistoria'>
              No inicio de 2024, numa roda de amigos conversávamos sobre os rumos  e desafios de nosso município.
              {isMobile && !isExpanded && '...'}
              <br></br>
              {!isMobile && (
                <>
                  A preocupação nossa era sobre o futuro de nossas crianças e adolescentes, bem como o futuro econômico e as oportunidades que Catanduvas poderia estar perdendo.
                  Com isso passamos a reunir um grupo maior de pessoas que pensavam e compartilhavam das mesmas ideias. O que fazer para que nossa cidade fosse mais desenvolvida e apresentasse novas oportunidades sobre tudo aos mais jovens.
                  A visão empreendedora do grupo, fazia com que os debates ficassem mais fortes, e o entendimento dessas pessoas era de que esta transformação somente seria possível se passasse pela gestão publica.
                  Obviamente não teríamos outra alternativa senão nos envolvermos e participarmos do momento politico que se avizinhava, buscando formar um grupo que tivesse vez e voz no processo politico municipal e assim poder expor suas ideais e pensamentos.
                  O surgimento do grupo fez com que fossemos em busca de uma sigla partidária, uma vez, que não é possível almejar qualquer transformação politica sem envolvimento e sem a utilização  de um instrumento neste caso um partido político.
                  Assim buscamos uma sigla que representasse nossos desejos, nossos anseios e principalmente que nossas ideais fossem aceitas. Foi ai que nasceu o PODEMOS.
                  Apesar de ser um partido pouco conhecido ele é resultado da fusão de outros partidos, mas que aqui em Catanduvas, nasceu forte, alicerçado em princípios e principalmente formado por pessoas que desejam  transformar os rumos políticos e administrativos de nossa cidade,  não esquecendo do momento em que vivemos, mas olhando para o futuro e projetando Catanduvas para os próximos 20 ou 30 anos.
                  Juntos, construiremos um futuro promissor para Catanduvas! Com o PODEMOS, a mudança é agora! Catanduvas: um novo capítulo rumo ao progresso e à esperança!
                </>
              )}
              {isMobile && isExpanded && (
                <>
                  A preocupação nossa era sobre o futuro de nossas crianças e adolescentes, bem como o futuro econômico e as oportunidades que Catanduvas poderia estar perdendo.
                  Com isso passamos a reunir um grupo maior de pessoas que pensavam e compartilhavam das mesmas ideias. O que fazer para que nossa cidade fosse mais desenvolvida e apresentasse novas oportunidades sobre tudo aos mais jovens.
                  A visão empreendedora do grupo , fazia com que os debates ficassem mais fortes, e o entendimento dessas pessoas era de que esta transformação somente seria possível se passasse pela gestão publica.
                  Obviamente não teríamos outra alternativa senão nos envolvermos e participarmos do momento politico que se avizinhava, buscando formar um grupo que tivesse vez e voz no processo politico municipal e assim poder expor suas ideais e pensamentos.
                  O surgimento do grupo fez com que fossemos em busca de uma sigla partidária, uma vez, que não é possível almejar qualquer transformação politica sem envolvimento e sem a utilização  de um instrumento neste caso um partido político.
                  Assim buscamos uma sigla que representasse nossos desejos, nossos anseios e principalmente que nossas ideais fossem aceitas. Foi ai que nasceu o PODEMOS.
                  Apesar de ser um partido pouco conhecido ele é resultado da fusão de outros partidos, mas que aqui em Catanduvas, nasceu forte, alicerçado em princípios e principalmente formado por pessoas que desejam  transformar os rumos políticos e administrativos de nossa cidade,  não esquecendo do momento em que vivemos, mas olhando para o futuro e projetando Catanduvas para os próximos 20 ou 30 anos.
                  Juntos, construiremos um futuro promissor para Catanduvas! Com o PODEMOS, a mudança é agora! Catanduvas: um novo capítulo rumo ao progresso e à esperança!
                </>
              )}
            </p>
            {isMobile && (
              <p onClick={toggleReadMore} className="toggle-read-more">
                {isExpanded ? 'Ver menos' : 'Ver mais'}
              </p>
            )}
          </div>
        </section>
        <section id="social" className="carousel-section text-center my-5 p-5 rounded shadow">
          <div>
            <h1>VIDEO INSTITUCIONAL</h1>
          </div>
          <div className="mt-4">
            <iframe width="1280" height="720" src="https://www.youtube.com/embed/4v1-jOPRHEE"
              title="JUNTOS PODEMOS MUITO MAIS" frameborder="0" allow="accelerometer; autoplay;
            clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </section>
        <section id="acrostico" className="carousel-section text-center my-5 p-5 rounded shadow">
          <h1 id="tituloAcrostico" class="display-3 text-center text-dark p-3 rounded shadow">INTERAJA COM O PODEMOS PARA SABER NOSSOS VALORES.</h1>
          <div class="campaign">
            <span class="P" data-content="rogresso">P</span>
            <span class="O" data-content="portunidade">O</span>
            <span class="D" data-content="esenvolvimento">D</span>
            <span class="E" data-content="quidade">E</span>
            <span class="M" data-content="odernidade">M</span>
            <span class="O" data-content="rganização">O</span>
            <span class="S" data-content="ustentabilidade">S</span>
          </div>
        </section>
        <section id="form" className="carousel-section text-center my-5 p-5 rounded shadow">
          <h2>Como podemos te ajudar?</h2>
          <form className="form" onSubmit={sendEmail}>
            <input
              className="input"
              type="text"
              placeholder="Digite seu nome"
              onChange={(e) => setNome(e.target.value)}
              value={nome}
            />
            <input
              className="input"
              type="tel"
              placeholder="Digite seu telefone"
              onChange={(e) => setTelefone(e.target.value)}
              value={telefone}
            />
            <input
              className="input"
              type="email"
              placeholder="Digite seu email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <textarea
              className="input"
              placeholder="Fale conosco"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              rows="5"
            />
            <input className="button" type="submit" value="Enviar" />
          </form>
        </section>
      </main>
      <footer>
        <div className="container text-center py-3">
          <p>&copy; {new Date().getFullYear()} PODEMOS Catanduvas. Todos os direitos reservados.</p>
          <a href="https://www.facebook.com/people/Podemos-Catanduvas/61562635679503/" className="text-primary mx-3" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a href="https://www.instagram.com/podemoscatanduvas/" className="text-danger mx-3" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a href="https://www.twitter.com" className="text-info mx-3" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter fa-2x"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
