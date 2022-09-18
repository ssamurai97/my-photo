import React from "react";
import {Link} from "gatsby";
import Img from 'gatsby-image'
import styled from "styled-components";
const PhotoGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  grid-auto-rows: auto auto 500px;
  padding: 2rem 2rem 2rem 2rem;
`


const PhotoStyles = styled.div`
 display: grid;
  @support not (grid-template-rows: subgrid){
  --rows: auto auto 1fr;
}
  grid-template-rows: var(--rows, subgrid);
  grid-row: span 3;
  grid-gap: 1rem;
  h2, p {
    margin: 0
  }
`

function SinglePhoto({photo}){

    return(<PhotoStyles>
            <Link to={`/photo/${photo.slug.current}`} >
                <h2>{photo.name}</h2>
            </Link>
        <Img fluid={photo?.image?.asset.fluid} alt={photo.name}/>
        </PhotoStyles>
    )
}

export default function PhotoList({ photos}){
    return(
        <PhotoGridStyles>
            {photos.map((photo)=> (
                <SinglePhoto key={photo.id} photo={photo} />
            ))}
        </PhotoGridStyles>
    )
}
