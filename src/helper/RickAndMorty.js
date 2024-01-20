export const apiRYM = async (name) => {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`);
    
    if (!response.ok) {
      throw alert('No se encontraron coincidencias');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('No se encontraron coincidencias');
  }
};
