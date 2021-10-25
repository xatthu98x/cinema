const apiConfig = {
    baseUrl: 'http://api.themoviedb.org/3/',
    apiKey: '1745671dcf1be54ea4af21fcff8928cf',
    originalImage: (imgPath)=> `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath)=> `https://image.tmdb.org/t/p/w500/${imgPath}`,

}

export default apiConfig;