import React from 'react'
import {graphql} from "gatsby";

import PhotoList from "../components/PhotoList";


export default function PhotosPage({data}){

    const photos = data.photos.nodes;
    return (
        <>
            <div>
                <p> photos { photos.length}</p>
                <PhotoList photos={photos} />
            </div>

        </>
    )
}

export const query = graphql`
  query photoQuery{
    photos: allSanityPhoto{
     nodes{
       id
       name
       slug{
        current
       }
       image{
         asset{
         fixed(width: 600, height: 400) {
            ...GatsbySanityImageFixed
         }
           fluid(maxWidth: 400){
              ...GatsbySanityImageFluid
           }
         }
       }
     }
    }
  }
`
