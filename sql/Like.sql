-- LIKE Operator used with WHERE Clause to search for a specified pattern in a column.

-- There are 2 wild card operators are used in Conjuction with LIKE Operator.
    -- (% Sign):- ( Percentage ) It represent Zero, One OR Multiple characters.
    -- (_ Sign):- ( Underscore )It represent single characters.


-- Ref:
    -- https://www.w3schools.com/mysql/mysql_like.asp

-- Examples
    -- Select all customers with customername Starting with `a`
        -- SELECT * FROM Customers WHERE CustomerName LIKE 'a%'

    -- Select all customers with CustomerName Ending with `a`
        -- SELECT * FROM Customers WHERE CustomerName LIKE '%a'

    -- Select all Customers with CustomerName that have `or` in ANY position
        -- SELECT * FROM Customers WHERE CustomerName LIKE `%a%`

    -- Select all customer name which start with `a` and ends with `o`
        -- SELECT * FROM Customers WHERE CustomerName LIKE 'a%o'

    -- 