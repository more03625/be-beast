-- A field with a NULL value is a field with no value.
-- Null value is different from Zero value OR a feild that contain spaces.
-- A feild with Null value is one that has been left blank, during the record creation.

-- How can you check if the value is NULL.
    -- You cannot check NULL values with comparision operators, such as =, < OR >
    -- Inorder to check for null values you have to use `IS NULL` OR `IS NOT NULL` operators 

    -- Syntax
        -- SELECT * FROM Customers WHERE Address IS NULL.
        -- SELECT * FROM Customers WHERE Address IS NOT NULL.
