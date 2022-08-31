# Redis 6379

1. Redis can be implemented in every single production level application to make you application more performant.

2. Redis is a type of database & more specifically nosql database. all data stored in key value pairs.

3. Redis store all the data inside your working memory, RAM. mysql runs on disk. thats why it is faster than MYSQL, MONGODB.

4. Its not persistent database. its use for caching.

5. in redis we can only store strings. you use JSON.stringify(data).

6. While getting data from api check if the redis has that data or not if its having return that from redis store else fetch data from api and set that to redis store and repeat step 6 again.

# Cli Commands

## Store key & values

1. set keyName Value
2. get keyName
3. del keyName
4. (keys \*): - returns all the keys.
5. flushall: Deletes all the keys.
6. clear
7. ttl keyName: Returns ttl of the given key
8. expire keyName ttlTime
   - (-2:- Means key is expired now.)
   - (1: Means key is their)
9. setex

## Store Arrays

1. lpush, rpush
2. lpop, lpush
3. lrange keyName 0 -1:- returns all the elements of given keyName.

## Sets (Every value is unique)

1. SADD hobbies "love to sing old songs" OR sadd hobbies gym coding crying: Add members to sets. set is unique so you cannot add same keys OR values in the sets.
2. smembers hobbies: Returns all the members of sets.
3. SREM hobbies coding: removes coding from the list.

## Hashes

## Video 2 Redis

1. What is redis? Use cases & benefits of redis.
2. Why it is suitable for microservice apps.
3. How redis supports multiple data formate.
4. Data persistent.
5. Redis on flash
6. Scaling redis
7. Replicate to geographic points.
8. Run Kubernates on redis.

Hi Prateek,
My name is Rahul More. I am working as Senior Software Engineer at Squareboat. i mostly work on backend technologies.
I have 3.5 yrs of experience of Full Stack software development. in this 3.5 Years of journey i have created lot of projects, from different different domains, most of that projects i have created from scratch only.

I have created projects like E-commerce Apps, Job Websites, Conference Apps, My own crypto currency like bitcoin, & Recently i have created Coupons, Cashback Website which is as same as Cashkaro.com.

TO Build these kinds of websites OR Apps i have use technologies like ReactJs, NodeJS, NestJs, MySql, Sometimes i have use mongodb as well.

Apart from the tech i like to sing a song, like to play foosball, i trade crypto currencies as well.
