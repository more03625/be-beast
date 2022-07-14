-- AND, OR, NOT Conditions are used to fiter records based on one or more conditions.
    -- The `AND` Operatros displays the record if `All` Conditions separated by AND are TRUE.
    -- The `OR` Operator Displays a record if any of the conditions separated by OR is True.
    -- The `NOT` Operator displays a record if the condition is NOT TRUE.

-- Eg: Quries

-- SELECT * FROM Customers WHERE Country = 'Germany' OR City = 'London' ORDER BY Country DESC
-- SELECT * FROM Customers WHERE Country = 'Germany' OR Country = 'UK'
-- SELECT * FROM Customers WHERE Country IN ('Germany', 'UK') (Diff of above)
-- SELECT * FROM Customers WHERE NOT Country = 'Venezuela' ORDER BY Country DESC

