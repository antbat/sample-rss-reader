
const request = require('request');
const parseString = require('xml2js').parseString;
const RSS = require('./../models/rss.model');


class ReadRss {
    constructor(settings){
        this.url = settings && settings.url || '';
        if(!settings ||  !settings.converter) {
            throw new Error('settings is not complete !!!');
        }
        this.converter = settings.converter;;
    }
    async dataProcess(){

        try {
            // #1 get data
            const xml = await this._getDataFromExternalSource();

            // #2 parsing
            const json = await this._parseToJson(xml);

            // #3 split into separate articles
            const articles = this._separateToArticles(json);

            // save to DB
            if(articles && articles.length > 0){
                const max =  articles.length;
                for(let i=0; i < max; i++) {
                    await this._saveArticlesToMonoDB(articles[i]);
                }
            }
        } catch(err) {
            console.log(err);
        }

    }
    async _getDataFromExternalSource(){
        return new Promise((resolve, reject) => {
            request.get(this.url, (error, data) => {
                // error handling
                if(error){
                    reject(error);
                    console.log('this is GET DATA from RSS error');
                    console.log(error);
                } else {
                    const xml = data.body;
                    // console.dir(xml);
                    resolve(xml);
                }
            });
        });
    }

    async _parseToJson(data){
        return new Promise( (resolve, reject) => {
            parseString(data, function (err, result) {
                console.dir(result);
                if(err){
                    reject(err);
                } else {
                    resolve(result);
                }

            });
        });

    }

    _separateToArticles(data){

        if (data && data.rss && data.rss.channel && data.rss.channel.length > 0 && data.rss.channel[0] && data.rss.channel[0].item) {
            const articles = [];
            const bulkOfArticles = data.rss.channel[0].item;
            for (let i = 0; i < bulkOfArticles.length; i++ ){
                let item = bulkOfArticles[i];
                articles.push(item);
            }
            return articles;
        } else {
            throw new Error('structure of data was changed');
        }
    }

    async _saveArticlesToMonoDB(article){
        if (article) {

            const articlesInDb = await RSS.find({title: article.title});

            if( articlesInDb && articlesInDb.length ) {
                console.log(`article was written with title "${article.title}"`);
            } else {
                console.log(`it's new article "${article.title}"`);
                const rawData = this.converter(article);
                const rss = new RSS(rawData);
                try {
                    await rss.save();
                    return;
                } catch(err){
                    console.log(err);
                }
            }
        }
        return;
    }
}

module.exports = ReadRss;
