-- Inner Join keywords select all the records that have matching records in both tables.

-- INNER JOIN is Default.

-- https://www.youtube.com/watch?v=EKOfCbxt5Po
-- https://joins.spathon.com/
-- https://www.youtube.com/watch?v=zGSv0VaOtR0

-- WATCH this video to clearly understand how it selects the records.

-- Basically: There are 10 records into Customer table. but only 5 customer has ordered something and we have that record in `Orders` Table.
-- So on running below query we will ve getting Only those customer name, & order details those are matched. means orders orderd by cust.

-- SELECT * FROM Customers INNER JOIN Orders ON Customers.CustomerID = Orders.CustomerID
-- 
