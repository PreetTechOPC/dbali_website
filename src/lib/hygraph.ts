export const HYGRAPH_ENDPOINT = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT;
export const HYGRAPH_TOKEN = process.env.HYGRAPH_TOKEN;

export async function fetchAPI(query: string, variables = {}) {
  if (!HYGRAPH_ENDPOINT) {
    console.warn("Missing HYGRAPH_ENDPOINT, returning null");
    return null;
  }

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  // We rely on the Public Content API, so we don't send the Management Token here
  // if (HYGRAPH_TOKEN) {
  //   headers["Authorization"] = `Bearer ${HYGRAPH_TOKEN}`;
  // }

  try {
    const res = await fetch(HYGRAPH_ENDPOINT, {
      method: "POST",
      headers,
      body: JSON.stringify({
        query,
        variables,
      }),
      // Revalidate content every 60 seconds (or 0 to disable caching during dev)
      next: { revalidate: 60 },
    });

    const json = await res.json();
    if (json.errors) {
      console.error(json.errors);
      throw new Error("Failed to fetch API");
    }
    return json.data;
  } catch (error) {
    console.error("Hygraph fetch error:", error);
    return null;
  }
}

// Queries

export async function getHeroSlides() {
  const data = await fetchAPI(`
    query GetHeroSlides {
      heroSlides {
        title
        badge
        description
        link
        image {
          url
        }
      }
    }
  `);
  return data?.heroSlides || null;
}

export async function getHomeSection(identifier: string) {
  const data = await fetchAPI(`
    query GetHomeSection($identifier: String!) {
      homeSection(where: { identifier: $identifier }) {
        title
        subtitle
        description
      }
    }
  `, { identifier });
  return data?.homeSection || null;
}

export async function getPageContent(slug: string) {
  const data = await fetchAPI(`
    query GetPageContent($slug: String!) {
      pageContent(where: { slug: $slug }) {
        title
        subtitle
        content {
          html
        }
        featuredImage {
          url
        }
      }
    }
  `, { slug });
  return data?.pageContent || null;
}

export async function getNewsArticles() {
  const data = await fetchAPI(`
    query GetNewsArticles {
      newsArticles(orderBy: date_DESC) {
        title
        slug
        date
        excerpt
        featuredImage {
          url
        }
      }
    }
  `);
  return data?.newsArticles || [];
}

export async function getNewsArticle(slug: string) {
  const data = await fetchAPI(`
    query GetNewsArticle($slug: String!) {
      newsArticle(where: { slug: $slug }) {
        title
        date
        content {
          html
        }
        featuredImage {
          url
        }
      }
    }
  `, { slug });
  return data?.newsArticle || null;
}

export async function getProjects() {
  const data = await fetchAPI(`
    query GetProjects {
      projects {
        title
        slug
        projectStatus
        location
        shortDescription
        featuredImage {
          url
        }
      }
    }
  `);
  return data?.projects || [];
}

export async function getProject(slug: string) {
  const data = await fetchAPI(`
    query GetProject($slug: String!) {
      project(where: { slug: $slug }) {
        title
        projectStatus
        location
        shortDescription
        content {
          html
        }
        featuredImage {
          url
        }
        gallery {
          url
        }
      }
    }
  `, { slug });
  return data?.project || null;
}

export async function getCareers() {
  const data = await fetchAPI(`
    query GetCareers {
      careers(where: { isActive: true }) {
        jobTitle
        department
        location
        description {
          html
        }
      }
    }
  `);
  return data?.careers || [];
}

export async function getAwards() {
  const data = await fetchAPI(`
    query GetAwards {
      awards {
        title
        year
        description
        image {
          url
        }
      }
    }
  `);
  return data?.awards || [];
}

export async function getPhotos() {
  const data = await fetchAPI(`
    query GetPhotos {
      photos(first: 100) {
        title
        category
        image {
          url
        }
      }
    }
  `);
  return data?.photos || [];
}

export async function getVideos() {
  const data = await fetchAPI(`
    query GetVideos {
      videos(first: 100) {
        title
        description
        category
        videoUrl
        thumbnail {
          url
        }
      }
    }
  `);
  return data?.videos || [];
}
