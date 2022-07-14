    -- BETWEEN Operator selects the value with in a given range.
    -- The values can be Numbers, texts, or dates.

-- Syntax
    -- SELECT column_name FROM tableName WHERE column_name BETWEEN value_1 AND value_2

-- Example:
    -- SELECT * FROM Products WHERE Price BETWEEN 10 AND 20;

-- * NOT BETWEEN Example *

-- TO display to the products outside the range, you can use NOT BETWEEN

    -- SELECT * FROM Products WHERE Price NOT BETWEEN 10 AND 20 

-- BETWEEN With IN
    -- SELECT * FROM Products WHERE Price Between 10 AND 20 AND CategoryID NOT IN (1, 2, 3)

    -- SELECT * FROM Products WHERE ProductName BETWEEN 'Balls' AND 'T-Shirts' ORDER BY ProductName;

-- BETWEEN With Dates
    -- SELECT * FROM Orders WHERE OrderDate BETWEEN '1996-07-01' AND '1997-08-01'