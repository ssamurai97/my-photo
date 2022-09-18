import React from "react";
import {graphql} from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";



const Photogrid = styled.div`
 display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(1000px, 1fr));
`

export default function SinglePhotoPage({data: {photo}}){

    return(
        <Photogrid>
            <Img fluid={photo.image.asset.fluid} alt={photo.name}></Img>
            <div>
                <h2>{photo.name}</h2>
            </div>
        </Photogrid>
    )
}


export const query = graphql`
  query($slug: String!) {
    photo: sanityPhoto(slug: {
      current: {eq: $slug}
    }){
      name
      id
      image {
        asset{
          fluid(maxWidth: 800){
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
