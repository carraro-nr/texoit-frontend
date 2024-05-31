import axios from 'axios';

const BASE_URL = 'https://tools.texoit.com/backend-java/api/movies';

export const fetchMovies = async ({ page = 1, size = 10, winner = null, year = null }) => {
    try {
      const params = { page, size };
      
      if (year !== null) {
        params.year = year;
      }

      if (winner !== null) {
        params.winner = winner;
      }

      const response = await axios.get(BASE_URL, { params });
      return response.data.content;
    } catch (error) {
      console.error('Erro ao buscar filmes:', error);
      return [];
    }
  };

export const fetchWinnersByYear = async () => {
  try {
    const response = await axios.get(`${BASE_URL}?projection=years-with-multiple-winners`);
    return response.data.years;
  } catch (error) {
    console.error('Erro ao buscar anos com múltiplos vencedores:', error);
    return [];
  }
};

export const fetchTopStudios = async () => {
  try {
    const response = await axios.get(`${BASE_URL}?projection=top-studios`);
    return response.data.studios;
  } catch (error) {
    console.error('Erro ao buscar os estúdios com mais vitórias:', error);
    return [];
  }
};

export const fetchProducersWithInterval = async () => {
  try {
    const response = await axios.get(`${BASE_URL}?projection=producers-with-interval`);
    return response.data.producers;
  } catch (error) {
    console.error('Erro ao buscar produtores com maior intervalo:', error);
    return [];
  }
};
