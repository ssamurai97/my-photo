import React from "react";
import {Link} from "gatsby";
import styled from 'styled-components'

const NavStyles = styled.nav`
  margin: 3rem;
  ul{
   display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
    padding: 3rem 2rem 2rem 2rem;
  }
  
  li{
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: start;
    align-content: center;
    grid-gap: 2rem ;
    
  }
`


export default function Nav(){
    return(
        <NavStyles>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li><Link to="/photos">Photos</Link></li>
            <li><Link to="/about">About</Link></li>

        </ul>
        </NavStyles>
    )
}
