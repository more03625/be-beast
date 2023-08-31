# Complete MongoDB Tutorial #12 - Querying Arrays
# Query Document in a Collection based on array values.

1. Get all the books where genres is ONLY fantasy. 
    * Note: genres is any array of string.
    - db.find.books({ genres: ['fantasy'] }) <!-- Exact Match -->

2. Get all the books where genres is 'fantasy'.
    * Note: genres is any array of string.
    - db.find.books({ genres: 'fantasy' }) <!-- NOT a Exact Match -->