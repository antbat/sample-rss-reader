module.exports = {
    url: 'http://k.img.com.ua/rss/ru/all_news2.0.xml',
    converter: (article) => {
        return {
            title: article && article.title,
            description: article && article.fulltext,
            link: article && article.link && article.link.length && article.link[0] || '',
            sourceName: 'корреспондент'
        }
    }
};
