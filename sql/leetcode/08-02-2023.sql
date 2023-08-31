584. Find Customer Referee
    SELECT name FROM Customer WHERE referee_id NOT IN (2) OR referee_id IS NULL;

183. Customers Who Never Order
    SELECT name as Customers FROM Customers c
    LEFT JOIN Orders o ON c.id = o.customerId
    WHERE o.customerId IS NULL;