module.exports = {
    url: 'https://fakty.ua/rss_feed/all',
    converter: (article) => {
        return {
            title: article && article.title,
            description: article && article.description,
            link: article && article.link && article.link.length && article.link[0] || '',
            sourceName: 'факты'
        }
    }
};
