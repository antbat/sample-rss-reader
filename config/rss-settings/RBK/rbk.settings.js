module.exports = {
    url: 'https://www.rbc.ua/static/rss/all.rus.rss.xml',
    converter: (article) => {
        return {
            title: article && article.title,
            description: article && article.fulltext,
            link: article && article.link && article.link.length && article.link[0] || '',
            sourceName: 'РБК'
        }
    }
};
