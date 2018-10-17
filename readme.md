# pay attention to:
* httpClientModule was added in "app.module.ts" (angular app)
* I added model (angular app)
* I use Rss model in rss service (angular app)
* route "/getrss" was upadted (I added a request to DB) (nodejs server) and made it async
* cors (server side) pls read why I did it (pls do it as last point of homework it is a not major task)

final homework:
1) link <a> has to be dynamicly and inserts _id into href like "/article/5bab2d4f38d7f548090d5c23"
2) you have to create new component for extended display Article ( or if you wish RSS)
3) this route http://localhost:4808/article/5bab2d4f38d7f548090d5c23 has to lead to this new component
4) when this new component init, it has to load data from service and you have to extend service (add new method: getRssById )
5) on server side: pls add new route (e g. http://localhost:4707/getRssById) which will be return rss by id


