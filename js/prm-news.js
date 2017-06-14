app.factory('FeedService', ['$http', function ($http) {
    var feedAntiCache = "?&t=" + new Date().getTime() + randomNum;
    var randomNum = Math.floor(Math.random() * 10000 + 1);
    var feeddaysold = 60;

    var dm = new Date();
    dm.setHours(24, 0, 0, 0);

    var api_endpoint = 'https://services.libis.be/feed_aggregator?';
    function readFeedConfig(url) {
        return $http({ url: url, headers: { "X-From-ExL-API-Gateway": undefined } });
    }
    function readFeed(url) {
        return $http({ url: api_endpoint + url, headers: { "X-From-ExL-API-Gateway": undefined } });
    }
    function parseFeed(conf) {
        return readFeed(conf.feedUrl).then(function (res) {
            console.log(conf.feedUrl);
            console.log(conf.feedFilter);
            var patt = /^entry\.|^item\./i;
            var filteredResults = res.data.items.filter(function (item, index) {
                var retval = false;
                if (item.pubDate === "") {
                    item.pubDate = dm;
                    res.data.items[index].pubDate = dm;
                }
                /* no filter configured */
                if (conf.feedFilter.length === 0) {
                    retval = true;
                }
                conf.feedFilter.forEach(function (f) {
                    if (patt.test(f.param)) {
                        var ff = f.param.replace(patt, "");
                        if (Array.isArray(item[ff])) {
                            if (item[ff].indexOf(f.value) != -1) {
                                retval = true;
                            }
                        } else {
                            if (item[ff] == f.value) {
                                retval = true;
                            }
                        }
                    }
                });
                /* filter old items */
                if (feeddaysold < Math.ceil(dm.getTime() - new Date(item.pubDate).getTime()) / (1000 * 60 * 60 * 24)) {
                    retval = false;
                }

                return retval;
            });
            return filteredResults;
        });
    }
    function sortFeed(feeds) {
        //return feeds.sort(compareDates);
        return feeds.sort(function (a, b) {
            var dateA = new Date(a.pubDate);
            var dateB = new Date(b.pubDate);
            if (dateA.getTime() === dm.getTime()) {
                dateA = new Date(0);
            }
            if (dateB.getTime() === dm.getTime()) {
                dateB = new Date(0);
            }
            return dateB - dateA;
        });
    }

    return {
        readFeedConfig: readFeedConfig,
        readFeed: readFeed,
        parseFeed: parseFeed,
        sortFeed: sortFeed
    };
}]);