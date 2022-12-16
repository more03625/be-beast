CASE In Mysql
    SELECT emi_end_date, 
    CASE 
        WHEN emi_end_date > CURRENT_DATE() THEN 'EMI end date is greater than current date'
        WHEN emi_end_date = CURRENT_DATE() THEN 'Today is the EMI end date'
        ELSE 'EMI already overd' 
    END as emiDate
    FROM deal_utilisation 

