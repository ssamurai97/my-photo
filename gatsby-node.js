import * as path from "path";

async function turnPhotoIntoPages({ graphql, actions}){
   const photoTemplate = path.resolve('./src/templates/Photo.js')
    const { data } = await graphql(`
    query{
       photos: allSanityPhoto {
           nodes{
             name
             id
             slug{
              current
             }
           }
        }
      }
    `);

   console.log(data)
    data.photos.nodes.forEach((photo) => {
        actions.createPage({
            // url for this page
            path: `photo/${photo.slug.current}`,
            component: photoTemplate,
            context: {
                slug: photo.slug.current
            }
        })
    })
}



export async function createPages(params){

    await turnPhotoIntoPages(params)
}
