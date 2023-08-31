# Complete MongoDB Tutorial #11 - Using $in & $nin

1. Find all the books whose ratings are 7, 8 OR 9
    - db.books.find({ rating: {$in: [7,8,9]} })

2. Find all the books whose ratings are NOT IN 7, 8 OR 9
    - db.books.find({ rating: {$nin: [7,8,9]} })