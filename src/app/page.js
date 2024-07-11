import Results from "@/components/Results";
import { notFound } from "next/navigation";

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || 'fetchTrending';
  const endpoint = genre === 'fetchTopRated' ? '/movie/top_rated' : '/trending/all/week';
  const url = `https://api.themoviedb.org/3${endpoint}?api_key=${API_KEY}&language=en-US&page=1`;

  console.log('Fetching data from URL:', url);

  try {
    const res = await fetch(url);
    if (!res.ok) {
      const errorText = await res.text();
      console.error('Fetch failed:', errorText);
      throw new Error('Failed to fetch');
    }
    const data = await res.json();
    const results = data.results;
   

    return <div>
        <Results results={results}/>
      </div>;
  } catch (error) {
    console.error('Error during fetch:', error);
    return <div>Error fetching data</div>;
  }
}
