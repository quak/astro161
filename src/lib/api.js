import dotenv from 'dotenv';

dotenv.config();

const API_URL = process.env.WP_URL



  export async function getAllPagesWithSlugsAlt(){
    
    const response = await fetch("https://wordpress-754698-3209078.cloudwaysapps.com/graphql",
    {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        query: `    {
        pages(first: 10000) {
          edges {
            node {
              slug
            }
          }
        }
      }`,
        variables: {
            name: "Toronto",
        },
      }),
    }).then(data=>data.json())

    const posts = response?.data?.pages;
    return posts;
  }

  export async function getPageBySlugAlt(slug) {
   
    const response = await fetch("https://wordpress-754698-3209078.cloudwaysapps.com/graphql",
    {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        query: `    {
          page(id: "${slug}", idType: URI) {
            title
            content
          }
        }`,
        variables: {
            name: "Toronto",
        },
      }),
    }).then(data=>data.json())

    
    const page = response?.data?.page;
    return page;
  }



  export async function getMenu(slug) {
   
    const response = await fetch("https://wordpress-754698-3209078.cloudwaysapps.com/graphql",
    {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        query: `{
          menus(where: {location: PRIMARY}) {
            nodes {
              menuItems {
                edges {
                  node {
                    path
                    label
                    connectedNode {
                      node {
                        ... on Page {
                          isPostsPage
                          slug
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }`,
        variables: {
            name: "Toronto",
        },
      }),
    }).then(data=>data.json())

    
    const page = response?.data?.menus?.nodes;
    return page;
  }