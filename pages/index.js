import Head from 'next/head';
import Header from '../components/Header';
import MovieResults from '../components/MovieResults';
import Navbar from '../components/Navbar';
import requests from '../utils/requests';

export default function Home({movies}) {
	
	console.log(movies?.results);
	return (
		<div>

			<Head>
				<title>Hulu 2.0</title>
				<meta name="description" content="Watch Movies for free!!" />
				<link rel="icon" href="https://play-lh.googleusercontent.com/4whGAVjZGrrlNxzheKAfBXrxggtyAb4euWLeQI8fDfVfdnFEZjE0DZTJ8DKoh64pqcIa" />
			</Head>

			<Header/>

			<Navbar/>

			<MovieResults results={movies?.results} />
		</div>
	)
}

export async function getServerSideProps(context){
	const genre = context.query.genre;

	const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url }`);

	const data = await request.json();

	return{
		props:{
			movies: data
		}
	}
}