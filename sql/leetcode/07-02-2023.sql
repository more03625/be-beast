595. Big Countries
    SELECT name, population, area FROM World WHERE area >= 3000000 OR population >= 25000000;

1757. Recyclable and Low Fat Products
    SELECT product_id FROM Products WHERE low_fats = 'Y' AND recyclable = 'Y'
    SELECT product_id FROM Products WHERE 'N' NOT IN (low_fats, recyclable);