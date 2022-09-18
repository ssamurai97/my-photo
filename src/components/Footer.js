import React from "react";
import styled from 'styled-components'



const FooterStyles = styled.footer`
  background: var(--dark, black) ;
  background-size: 500px;
  padding-top: 180px;
  padding-bottom: 80px;
  //clip-path: polygon(0 100px, 100% 0, 100% 100%, 0% 100%);
  overflow: hidden;
  & > div {
    width: 100%;
    color: var(--dark, darkred);
    display: grid;
    max-width: var(--maxWidth);
    margin: 0 auto;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    @media (max-width: 1100px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 575px) {
      grid-template-columns: 1fr;
    }
    grid-gap: 3rem;
    .bottom {
      grid-column: 1 / -1;
      text-align: center;
      background: none;
      color: var(--light);
    }
    & > * {
      padding: 2rem;
      background: wheat;
      background-size: 500px;
      h3 {
        margin: 0;
        padding: 2px;
        margin-bottom: 2rem;
        text-align: center;
        margin-top: -30px;
        
        background: none;
        svg {
          position: relative;
          top: 3.5px;
          margin-right: 3px;
        }
        a {
          text-decoration: none;
        }
      }
      p {
        font-size: 1.6rem;
      }
    }
  }
  a.socialLink {
    background: var(--dark);
    padding: 2px 6px;
    border-radius: 4px;
    text-decoration: none;
    color: var(--light);
    display: inline-flex;
    align-items: center;
    margin: 2px;
    &[href*='youtube.com'] {
      /* Kind of interesting, so I'm leaving this in: https://twitter.com/wesbos/status/1248252653953601538 */
      background: #ff0000; /* Red */
      background: #dd0000; /* AA Grade */
      background: #ec1212;
    }
    &[href*='github.com'] {
      background: var(--light);
      color: var(--dark);
    }
    svg {
      margin-right: 3px;
    }
  }
  a.terms {
    color: white;
    text-decoration: none;
    font-size: 10px;
    &:before {
      display: none;
    }
  }
`
export default function Footer(){

    return(
        <FooterStyles>
            <div>
                <p>&copy; kuchlong's photos {new Date().getFullYear()}</p>
            </div>
        </FooterStyles>
    )

}
