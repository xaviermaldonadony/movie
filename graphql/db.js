export let movies = [
	{
		id: 0,
		name: 'Avengers',
		score: 8,
	},
	{
		id: 1,
		name: 'Star Wars',
		score: 7,
	},
	{
		id: 2,
		name: 'Friday the 13th',
		score: 7,
	},
	{
		id: 3,
		name: 'Logan',
		score: 6,
	},
	{
		id: 4,
		name: 'Cast Away',
		score: 4,
	},
	{
		id: 5,
		name: 'Batman',
		score: 9,
	},
];

export const getMovies = () => movies;

export const getById = (id) => {
	const filteredMovies = movies.filter((movie) => id === movie.id);
	return filteredMovies[0];
};

export const deleteMovie = (id) => {
	const cleanedMovies = movies.filter((movie) => movie.id !== id);
	if (movies.length > cleanedMovies.length) {
		movies = cleanedMovies;
		return true;
	} else {
		return false;
	}
};

export const addMovie = (name, score) => {
	const newMovie = {
		id: `${movies.length}`,
		name,
		score,
	};
	movies.push(newMovie);
	return newMovie;
};
