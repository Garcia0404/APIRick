import useSWR from 'swr';
import { CardMain } from './CardMain';
import axios from 'axios';

export const SectionMain = ({ nombre }) => {
  const fetcher = async (url) => {
    const response = await axios.get(url);
    return response.data;
  };

  const apiUrl = `https://rickandmortyapi.com/api/character/?name=${nombre}`;

  const { data, error, isLoading } = useSWR(apiUrl, fetcher);


  if (error) {
    return (
      <div className='text-2xl text-center mt-6 text-blue-500'>No se encontraron resultados.</div>
    )
  }
  else if (isLoading) {
    return (
      <div className='flex justify-center animate-spin mt-20'>
        <svg className='fill-blue-500' fill="none" height="60" viewBox="0 0 20 20" width="60" xmlns="http://www.w3.org/2000/svg"><path d="M10 3.5C6.41015 3.5 3.5 6.41015 3.5 10C3.5 10.4142 3.16421 10.75 2.75 10.75C2.33579 10.75 2 10.4142 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C9.58579 18 9.25 17.6642 9.25 17.25C9.25 16.8358 9.58579 16.5 10 16.5C13.5899 16.5 16.5 13.5899 16.5 10C16.5 6.41015 13.5899 3.5 10 3.5Z" fill="#212121"/></svg>
      </div>
    )
  }
  else {
    return (
      <section className='grid grid-cols-1 min-[350px]:grid-cols-2 min-[530px]:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 p-7'>
        {data?.results.map((imagen) => (
          <CardMain key={imagen.id} name={imagen.name} image={imagen.image} location={imagen.location.name} episode={imagen.episode[0]} type={imagen.type} status={imagen.status} />
        ))}
      </section>
    );
  }
};
