# Operators in MongoDB

1. Get all the books whose rating is equal to 7.
    - db.books.find({rating: 7})

2. Get all the books whose rating is greater than 7.
    - db.books.find({ rating: { $gt : 7 } })

3. Get all the books whose ratings are greater than or equal to 7
    - db.books.find({ rating: { $gte : 7 } })

4. Get all the books whose ratings are less than or equal to 7
    - db.books.find({ rating: { $lte : 7 } })

5. Get all the books whose ratings are less than or equal to 7 & Author is Ankur Wariko
    - db.books.find({ rating: {$lte: 7}, author: "Ankur Wariko"});

6. Get all the books whose rating is 7 OR 9.
    - db.books.find({ $or: [{rating: 7}, {rating: 9}] });

7. Get all the books whose rating is 7 OR Author is Ankur Wariko.
    - db.books.find({ $or: [{rating: 7}, {author: "Ankur Wariko"}] })

8. Get all the books whose pages are less than 300 OR greater than 400.
    - db.books.find({ $or: [{ pages: { $lt: 300 }}, {pages: {$gt: 400}}] })