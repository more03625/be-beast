-- JOIN Clause is used to combine 2 or more tables, based on the related cols between them.
-- Order and Customers table
-- Once the customer place the order we can save the order details in to the `Order` table along with its CustomerID

-- You can watch this video to understand the use of different types of JOINs 
    -- https://www.youtube.com/watch?v=EKOfCbxt5Po

-- There are 4 Types of Joins in MySQL.
    -- Inner JOIN:- It returns the records that are matching values in both of the table.

    -- LEFT JOIN:- Returns all the records from the left table & Matching records from the right table. Assignes NULL if no values in Right

    -- RIGHT JOIN:- Returns all the records from the RIGHT Table. & matching records from the left table. Assignes NULL if no values in LEFT

    -- CROSS JOIN:- Returns all the records from the both table. Assignes NULL if there are no match and returns everything from every table.

-- Examples
    --  SELECT * FROM Customers JOIN Orders ON Customers.CustomerID = Orders.CustomerID;

    --  SELECT * FROM Customers LEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID;

    --  SELECT * FROM Customers RIGHT JOIN Orders ON Customers.CustomerID = Orders.CustomerID;

    --  SELECT * FROM Customers FULL OUTER JOIN Orders ON Customers.CustomerID = Orders.CustomerID;