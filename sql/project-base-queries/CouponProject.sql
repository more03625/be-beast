Scence:- Select all the trending categories & sort them with their number of views

SELECT
	c.id, v.`views`, ct.`name`
FROM
	categories c
	JOIN `views` v ON v.entity_id = c.id
	JOIN category_translations ct ON ct.category_id = c.id
WHERE
	entity_type = 'categories'
	AND v.is_trending = 1
	AND ct.language_code = 'en'
GROUP BY
	c.id, v.`views`, ct.`name`

ORDER BY
	v. `views` DESC

------------------------------------

Scence:- Select all the coupons who are trending in UAE country.

SELECT
	c.id,
	countries.code AS countryCode,
	v. `views` AS viewsOnCoupon
FROM
	coupons c
	INNER JOIN coupon_countries cc ON cc.coupon_id = c.id
	INNER JOIN countries ON countries.id = cc.country_id
	INNER JOIN `views` v ON v.entity_id = c.id
WHERE
	cc.country_id = 2
	AND countries.id = 2
	AND v.is_trending = 1
GROUP BY
	c.id,
	viewsOnCoupon
ORDER BY
	viewsOnCoupon DESC

------------------------------------

Scence: Fetch all the coupons of brands addidas & show the brands name infront of them & show the number of count.

SELECT
	b.id as brandId,
	bt.name as brandName,
	COUNT(c.id) as numberOfCoupons
FROM
	coupons c
	INNER JOIN brands b ON b.id = c.brand_id
	INNER JOIN brand_translations bt ON bt.brand_id = b.id
WHERE
	c.brand_id = 1
	AND bt.language_code = 'en'
GROUP BY
	brandId,
	brandName
------------------------------------

Scence: Select all the coupons whose discount is less than or equal 5%

SELECT
	*
FROM
	coupons
WHERE
	reward_value <= 5
	AND reward_type = 2 -- 	Percent Reward Type = 2

------------------------------------
 
Scence: Get all the active coupons of UAE country & sort them according to their views.

SELECT
	c.id AS couponId,
	v. `views` AS numberOfViews
FROM
	coupons c
	INNER JOIN coupon_countries cc ON cc.coupon_id = c.id
	INNER JOIN countries ON countries.id = cc.country_id
	INNER JOIN countries_translations ct ON ct.country_id = countries.id
	INNER JOIN views v ON v.entity_id = c.id
WHERE
	c.status = 1
	AND cc.country_id = 2
	AND ct.language_code = 'en'
	AND v.entity_type = 'coupons'
	AND v.is_trending = 1
GROUP BY
	c.id,
	numberOfViews
ORDER BY
	numberOfViews DESC