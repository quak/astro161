import dotenv from 'dotenv';

dotenv.config();

const API_URL = process.env.WP_URL


  export async function getAllProjects(){
      
    const response = await fetch("https://wordpress-754698-3209078.cloudwaysapps.com/graphql",
    {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        query: `    {
          projects {
            nodes {
              projectsacf {
                customer
                excerpt
                projectimage {
                  id
                  sourceUrl(size: AVAX_PROJECTS)
                }
              }
              title
              categories {
                edges {
                  node {
                    id
                    name
                  }
                }
              }
            }
          }
      }`
      }),
    }).then(data=>data.json())

    const posts = response?.data?.projects?.nodes;
    return posts;
  }

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
            blocks {
              name
              attributesJSON
            }
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

  export async function getAllCategories(){
    
    const response = await fetch("https://wordpress-754698-3209078.cloudwaysapps.com/graphql",
    {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        query: `    {
          categories(where:{parent:8}){
            edges {
              node {
                slug
                name
              }
            }
          }
        }`,
      }),
    }).then(data=>data.json())

    const posts = response?.data?.categories;
    return posts;
  }

  export async function getCategoryBySlug(slug) {
   
    const response = await fetch("https://wordpress-754698-3209078.cloudwaysapps.com/graphql",
    {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        query: `    {
          category(id: "${slug}", idType: SLUG) {
            name
          }
        }`,
      }),
    }).then(data=>data.json())

    
    const page = response?.data?.category;
    return page;
  }