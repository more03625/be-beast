# Things to Learn
    1. Learn Distributed environment.
    2. Sticky sessions

## What us Rate Limiter?
    1. Rate limiter is used to control the rate of traffic sent by the client to server.

## Advantages of Rate Limiter
    1. It helps to avoid DOS attacks
    2. It helps to reduce the cost as there will be low number of requests to server.
    3. Prevent server from being overloaded, results in faster response to Priority users.

## Questions you might want to ask your interviewers.
    1. Rate limiter can be server side as well as client side.
    2. Rate limiter can throttle request based on the userId, Ip & other properties.
    3. You have to understand the scale of the system to create the rate limiter (startup/established company)
    4. Will It work on distributed environment.
    5. We can add rate limiter as separate service OR in application code.
        - API Gateway: It is the service: act as middleware. request will be sent first to API gateway then to API server.
    6. Inform users that they are throttled

# Algorithms for rate Limiting.
## Token Bucket Algorithm:
    1. This simply means, a "bucket" that holds a maximum number of tokens (capacity).
    2. Also, you will define a Refill rate, it will refill the bucket at a fix interval.
    3. For Every request 1 token will be consumed, Once you consumed all the tokens, requests will be dropped.
    4. If the refill rate is lower than the incoming request rate, then more and more requests will be dropped.

#### Advantages of Token Bucket Algorithm
    1. This is memory efficient solution
    2. Easy to implement.
    3. Widely used to large tech companies.
    4. This Algo allows burst of request for short amount of time.

#### Dis Advantages of Token Bucket Algorithm
    1. This Algo takes 2 params, token refill rate & Bucket Size However, it might be challenging to tune them.

## Leaking Bucket Algorithm:
    1. This is same as `Token Bucket Algo` But the requests are processed at the fixed rate.
    2. It is usually implemented in the FIFO Queue.
    3. When the request arrives, algo check if the queue is full, if it is not full then request will be added to queue.
    4. If the queue is full then the request will be dropped.
    5. Requests are pulled from Queue & will be processed at regular interval
    6. It Takes 2 Params:
        1. Queue Size:
        2. Outflow Rate: How many request can be processed at fixed rate/seconds.

#### Advantages of Leaking Bucket Algorithm
    1. Memory efficient, as we can define the queue size.
    2. Suitable for cases, where we need stable outflow rate as request are processed at a fixed rate/seconds.
        1. Video Streaming Services:
            The algorithm can be applied to control the rate at which video data is transmitted, ensuring a consistent flow to prevent buffering or sudden quality changes.
        
        2. Telecommunications Systems:
            The Leaky Bucket Algorithm is used in telecommunications to control the rate at which packets are sent over a network, particularly for real-time voice or video calls where maintaining a steady stream is crucial.

#### Dis Advantages of Leaking Bucket Algorithm
    1. Burst of traffic can fill up the queue with old request, and if the requests are not processed in time new request will be dropped.
    2. Two Params in the algo, it might not be easy to tune them.


### High Level Architecture of RateLimiter Algo.
    1. We need to keep track of how many req are sent from the same user, IP etc.
    2. If too may requests, then request should be throttled.

#### Where to store counters?
    1. Database is not a good idea to store counters, because slowness of disc access. but the in memory cache is a good option like redis.

### How it works?
    1. Client hits the API
    2. the request will be sent to rate limiting middleware (redis cache)
    3. Middleware checks if request can be processed? by doing counter + 1
    4. If counter + 1 does not exceeds the limit, then process the request & increment the counter by one.
    5. If counter + 1 exceeds the limit, then throttle the request.

### Rate Limiting Headers
    1. x-Ratelimit-Remaining: Number of remaining request in x time window.
    2. x-Ratelimit-Limit: Number of requests allowed in x time window.
    3. x-Ratelimit-Retry-After: The Number of seconds to wait, until you can make new request

## Rate Limiters in Distributed Envirments.
    1. Building rate limiter in single server environment is not difficult.
    2. Building rate limiter in multi server environment and concurrnet threads is diff story.
    3. There are 2 challenges
        1. Race Condition
        2. Synchronization issue.

### Race Condition
    1. if 2 request concurrently read the counter before either of them writes value back.
    2. Each request will increment the counter by one, and write it back.
    3. Both request (threads) belives that they have correct counter value.
    4. However the correct value should be 5.

#### Solution to race condition.
    1. LOCKS: Slows down the system
    2. Lua Script
    3. Sorted Set in Redis

### Synchronization issue
    1. To scale the application to millions of users, 1 rate limiter server not enough.
    2. And if there are multiple rate limiter servers then Synchronization is required.
    3. For eg. If there are multiple rate limiter servers, client 1 can send req to rate limiter 1 & client 2 to rate limiter 2.
    4. But the web tier is stateless, so this can be vice versa. but if no synchronization then, rate limiter 1 will not have info of client 2 and same the other side.
    5. To Avoid this we can use sticky sessions, but this is not recommended. Because not scalable.
    6. We can use centralized stores like redis to store.
    7. Client can send req to any rate limiting servers, and that rate limiting server will check with single redis server for the rules/counters.

### Performance Optimization.
    1. This is the common topic in system design.
    2. We will cover 2 areas here.
        i. Multi data center setup
        ii. Sync Data with Eventual consistency setup.

### Monitoring
    1. Once you setup the rate limiters in place, you have to check weather that are working properly or not.
    2. Weather valid user requests are getting dropped or not.
    3. If Rate limiting rules too strict, relax the rules if needed.


# Additional Points
    1. Hard Vs Soft rate Limiting.
    2. You can apply rate limiting at Application level, IP layers using IPTables.
    3. Use client cache to reduce frequent API calls.
    4. Catch exceptions or errors, so user can recover from exceptions.