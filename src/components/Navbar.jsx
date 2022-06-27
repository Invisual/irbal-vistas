import React, { useState } from 'react'
import styled from 'styled-components'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()

    const url = `https://irbal.invisual.pt/?s=${query}&post_type=product`
    if (window && query) {
      window.open(url, '_blank')
    }
  }

  return (
    <StyledNav>
      <div className="nav-container desktop">
        <div className="left">
          <a href="https://irbal.invisual.pt/shop/">
            <button>Loja Online</button>
          </a>
          <a href="https://irbal.invisual.pt/sobre-nos/">Sobre Nós</a>
          <a className="active" href="https://vistas.irbal.pt">
            Vistas Explodidas
          </a>
        </div>

        <div className="center">
          <a href="https://irbal.invisual.pt/">
            <img
              className="logo"
              src="https://irbal.invisual.pt/wp-content/uploads/2022/04/logotipo-para-site-02.png"
              alt="Irbal"
            />
          </a>
        </div>

        <div className="right">
          <a href="https://irbal.invisual.pt/my-account/">Minha Conta</a>
          <a href="https://irbal.invisual.pt/cart/">Carrinho</a>
        </div>
      </div>

      <div className="nav-container mbl">
        <div className="hamburguer" onClick={() => setIsOpen(true)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="center">
          <a href="https://irbal.invisual.pt/">
            <img
              className="logo"
              src="https://irbal.invisual.pt/wp-content/uploads/2022/04/logotipo-para-site-02.png"
              alt="Irbal"
            />
          </a>
        </div>
      </div>

      <div className={isOpen ? 'sidebar open' : 'sidebar'}>
        <div className="container">
          <div className="content">
            <div className="header">
              <h4>Menu</h4>
              <div className="close" onClick={() => setIsOpen(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  x="0"
                  y="0"
                  width="12"
                  height="12"
                  viewBox="1.1 1.1 12 12"
                  enableBackground="new 1.1 1.1 12 12"
                  xmlSpace="preserve"
                >
                  <path d="M8.3 7.1l4.6-4.6c0.3-0.3 0.3-0.8 0-1.2 -0.3-0.3-0.8-0.3-1.2 0L7.1 5.9 2.5 1.3c-0.3-0.3-0.8-0.3-1.2 0 -0.3 0.3-0.3 0.8 0 1.2L5.9 7.1l-4.6 4.6c-0.3 0.3-0.3 0.8 0 1.2s0.8 0.3 1.2 0L7.1 8.3l4.6 4.6c0.3 0.3 0.8 0.3 1.2 0 0.3-0.3 0.3-0.8 0-1.2L8.3 7.1z"></path>
                </svg>
              </div>
            </div>

            <form onSubmit={handleSearch}>
              <div className="input">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Pesquisar produtos..."
                />
                <button type="submit"></button>
              </div>
            </form>

            <ul>
              <li>
                <a href="https://irbal.invisual.pt/shop/">Loja Online</a>
              </li>

              <li>
                <a href="https://irbal.invisual.pt/sobre-nos/">Sobre Nós</a>
              </li>

              <li>
                <a href="https://vistas.irbal.pt/">Vistas Explodidas</a>
              </li>
            </ul>

            <div className="account">
              <a href="https://irbal.invisual.pt/my-account/">Minha Conta</a>
            </div>
          </div>

          <div className="footer">
            <span>Copyright © {new Date().getFullYear()} Irbal</span>
          </div>
        </div>
      </div>

      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)} />}
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1.5rem 3rem;
  min-height: 45px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  z-index: 1;
  box-sizing: content-box;

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 1;
    pointer-events: none;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.06);
  }

  .nav-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1390px;
    margin-right: auto;
    margin-left: auto;

    &.mbl {
      display: none;
    }
  }

  .center {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  .logo {
    max-height: 60px;
  }

  a {
    min-height: 45px;
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.blue};
    transition: color 0.25s ease;

    &:not(:first-child) {
      margin-left: 22px;
    }

    button {
      color: ${({ theme }) => theme.white};
      background-color: ${({ theme }) => theme.orange};
      border-radius: 50px;
      padding: 10px 20px;
      font-size: 14px;
      min-height: 45px;
      font-weight: 500;
      border: none;
      transition: background 0.25s ease;

      &:hover {
        background-color: ${({ theme }) => theme.blue};
      }
    }

    &:hover,
    :active,
    .active {
      color: ${({ theme }) => theme.orange};
    }
  }

  .hamburguer {
    span {
      display: block;
      width: 18px;
      height: 2px;
      background: #282626;
      margin: 4px 0;
    }
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 340px;
    padding: 0 14px 14px 0;
    background-color: #fafafa;
    transform: translateX(-100%);
    transition: transform 0.25s linear;
    z-index: 11;

    &.open {
      transform: translate(0);
    }

    .container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      padding: 15px;
      background-color: #fff;
      border-right: 1px solid #e8e8e8;
      border-bottom: 1px solid #e8e8e8;
    }

    .header {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      h4 {
        position: absolute;
        top: 50%;
        left: 50%;
        font-size: 18px;
        font-weight: 400;
        color: #272525;
        transform: translate(-50%, -50%);
      }
    }

    form {
      margin-top: 15px;

      .input {
        display: flex;
        position: relative;
        border: 1px solid #e0e0e0;
        border-radius: 5px;
        padding-right: 38px;
        width: 100%;
        max-width: 500px;

        input {
          height: 38px;
          margin: 0;
          font-size: 14px;
          width: 100%;
          text-indent: 15px;
          background-color: transparent;
          color: #272525;
          border: none;
          outline: none;

          ::placeholder {
            /* Chrome, Firefox, Opera, Safari 10.1+ */
            color: #a5a4a4;
            opacity: 1; /* Firefox */
          }
        }

        button {
          position: absolute;
          top: 0;
          right: 1px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          background: url('https://irbal.invisual.pt/wp-content/themes/restoration/assets/img/svg/search.svg')
            center center no-repeat;
          background-size: 16px 16px;
          text-indent: -999em;
          border: none;
          cursor: pointer;
        }
      }
    }

    ul {
      list-style-type: none;
      margin-top: 25px;

      li {
        border-bottom: 1px solid #eee;

        &:last-child {
          border-bottom: none;
        }

        a {
          display: flex;
          align-items: center;
          text-transform: none;
          font-size: 14px;
          text-transform: uppercase;
          padding: 15px 0;
          line-height: 1;
          transition: none;
          color: #272525;
        }
      }
    }

    .account {
      margin-top: 30px;

      a {
        font-size: 12px;
        line-height: 1;
        padding: 7px 0;
        color: rgba(0, 0, 0, 0.7);
      }
    }

    .footer {
      margin-bottom: 5px;

      span {
        font-size: 12px;
        color: #5a5958;
      }
    }
  }

  .overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: radial-gradient(
      circle at center,
      rgba(0, 0, 0, 0.05),
      rgba(0, 0, 0, 0.2)
    );
    z-index: 1;
  }

  @media screen and (max-width: 1068px) {
    backdrop-filter: none;

    .nav-container {
      display: none;

      &.mbl {
        display: flex;
        transform: translateY(12px);
      }
    }
  }

  @media screen and (max-width: 400px) {
    .logo {
      max-height: 51px;
    }

    .sidebar {
      width: 90%;
    }
  }
`
