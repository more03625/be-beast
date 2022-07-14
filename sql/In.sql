-- IN OR NOT IN

-- IN Operator allows you to specify multiple values in where clause.

-- it is a shortcut for multiple OR conditions.

-- Syntax
    -- SELECT column_name FROM table_name WHERE column_name IN (Value_1, Value_2);

    -- SELECT column_name FROM table_name WHERE column_name IN (SELECT STATEMENT)

-- Examples
    -- SELECT * FROM Customers WHERE Country IN ('India', 'Nepal', 'Bhutan');

    -- SELECT * FROM Customers WHERE Country IN (SELECT Country FROM Suppliers);