import dotenv from 'dotenv';

dotenv.config();

const API_URL = process.env.WP_URL

async function fetchAPI(query, { variables } = {}) {
    const headers = { 'Content-Type': 'application/json' };
    const res = await fetch(API_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({ query, variables }),
    });
  
    const json = await res.json();
    if (json.errors) {
      console.log(json.errors);
      throw new Error('Failed to fetch API');
    }
  
    return json.data;
  }


  export async function getAllPagesWithSlugs() {
    const data = await fetchAPI(`
    {
      pages(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
    `);
    return data?.pages;
  }

  export async function getPageBySlug(slug) {
    const data = await fetchAPI(`
    {
      page(id: "${slug}", idType: URI) {
        title
        content
      }
    }
    `);
    return data?.page;
  }

  export async function getAllPagesWithSlugsAlt(){
    const headers2 = { 'Content-Type': 'application/json' };
    const postData = fetch(API_URL ,{
      method: 'post',
      headers2,
      body: JSON.stringify({
        query: `{
          pages {
            nodes {
              title
              content
              testACF {
                testacf
              }
            }
          }
        }`
      })
    }).then(data=>data.json())

    const posts = postData?.data?.pages?.nodes;
    return posts;
  }