# [355. Design Twitter (Medium)](https://leetcode.com/problems/design-twitter/)

<p>Design a simplified version of Twitter where users can post tweets, follow/unfollow another user, and is able to see the 10 most recent tweets in the user's news feed.

Implement the Twitter class:

- Twitter() Initializes your twitter object.
- void postTweet(int userId, int tweetId) Composes a new tweet with ID tweetId by the user userId. Each call to this function will be made with a unique tweetId.
- List<Integer> getNewsFeed(int userId) Retrieves the 10 most recent tweet IDs in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user themself. Tweets must be ordered from most recent to least recent.
- void follow(int followerId, int followeeId) The user with ID followerId started following the user with ID followeeId.
- void unfollow(int followerId, int followeeId) The user with ID followerId started unfollowing the user with ID followeeId.</p>

<p><strong>Example 1:</strong></p>

<pre>
<strong>Input:</strong>
["Twitter", "postTweet", "getNewsFeed", "follow", "postTweet", "getNewsFeed", "unfollow", "getNewsFeed"]
[[], [1, 5], [1], [1, 2], [2, 6], [1], [1, 2], [1]]
<strong>Output:</strong> 
[null, null, [5], null, null, [6, 5], null, [5]]
<strong>Explanation:</strong>
Twitter twitter = new Twitter();
twitter.postTweet(1, 5); // User 1 posts a new tweet (id = 5).
twitter.getNewsFeed(1);  // User 1's news feed should return a list with 1 tweet id -> [5]. return [5]
twitter.follow(1, 2);    // User 1 follows user 2.
twitter.postTweet(2, 6); // User 2 posts a new tweet (id = 6).
twitter.getNewsFeed(1);  // User 1's news feed should return a list with 2 tweet ids -> [6, 5]. Tweet id 6 should precede tweet id 5 because it is posted after tweet id 5.
twitter.unfollow(1, 2);  // User 1 unfollows user 2.
twitter.getNewsFeed(1);  // User 1's news feed should return a list with 1 tweet id -> [5], since user 1 is no longer following user 2.
</pre>

## Solution 1

```ts
type Tweet = {
  tweetId: number;
  userId: number;
  postedDate: number;
};

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
    const tweet: Tweet = {
      tweetId,
      userId,
      postedDate: ++this.time,
    };

    const tweets = this.tweets.get(userId) ?? [];
    tweets.push(tweet);

    this.tweets.set(userId, tweets);
  }

  getNewsFeed(userId: number): number[] {
    let feed = this.tweets.get(userId) ?? [];
    this.follows.get(userId)?.forEach((followeeId) => {
      const followeeTweets = this.tweets.get(followeeId) ?? [];
      feed = feed.concat(followeeTweets);
    });

    feed.sort((tweet1, tweet2) => tweet2.postedDate - tweet1.postedDate);

    return feed.slice(0, 10).map((tweet) => tweet.tweetId);
  }

  follow(followerId: number, followeeId: number): void {
    const followees = this.follows.get(followerId) ?? new Set();
    followees.add(followeeId);

    this.follows.set(followerId, followees);
  }

  unfollow(followerId: number, followeeId: number): void {
    const followees = this.follows.get(followerId) ?? new Set();
    followees.delete(followeeId);

    this.follows.set(followerId, followees);
  }
}
```
