export const getGif = async (category) => {
    const apiKey = "33LDJOCMMHbSm3BrYbWn9NQEXnJNcfi0";
    const urlGif = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&&limit=20`;
    const response = await fetch(urlGif);
    const { data } = await response.json();

    const gifs = data.map((img) =>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    return gifs
  };

