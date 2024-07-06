

export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=qAzjRdLvnHpoHdFiyurwyChI9pF3uRAi&q=${category}&limit=20`;

    const respo = await fetch(url);

    const { data = [] } = await respo.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    console.log(gifs);

    return gifs;
}