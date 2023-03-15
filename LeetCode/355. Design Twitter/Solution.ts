type Tweet = {
    tweetId: number;
    userId: number;
    postedDate: number;
}


class Twitter {
    tweets: Map<number, Array<Tweet>>;
    follows: Map<number, Set<number>>;
    time: number;

    constructor() {
        this.tweets = new Map();
        this.follows = new Map();
        this.time = 0;
    }

    postTweet(userId: number, tweetId: number): void {
        const tweet : Tweet = {
            tweetId,
            userId,
            postedDate: ++this.time
        }

        const tweets = this.tweets.get(userId)?? [];
        tweets.push(tweet);

        this.tweets.set(userId, tweets);
    }

    getNewsFeed(userId: number): number[] {
        let feed = this.tweets.get(userId)?? [];
        this.follows.get(userId)?.forEach(followeeId => {
            const followeeTweets = this.tweets.get(followeeId)?? [];
            feed = feed.concat(followeeTweets)
        });
        
        feed.sort((tweet1, tweet2) => tweet2.postedDate - tweet1.postedDate);
        
        return feed.slice(0,10).map(tweet => tweet.tweetId);
    }

    follow(followerId: number, followeeId: number): void {
        const followees = this.follows.get(followerId)?? new Set();
        followees.add(followeeId);

        this.follows.set(followerId, followees);
    } 

    unfollow(followerId: number, followeeId: number): void {
        const followees = this.follows.get(followerId)?? new Set();
        followees.delete(followeeId);

        this.follows.set(followerId, followees);
    }
};
/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */