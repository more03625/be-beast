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

----------- 25 July 2022
Scence: Select all the trending categories & sort them with their number of views.

SELECT
	COUNT(c.id),
	ct. `name`,
	v. `views`
FROM
	categories c
	JOIN category_translations ct ON ct.category_id = c.id
	JOIN `views` v ON v.entity_id = c.id
WHERE
	c.status = 1
	AND ct.language_code = 'en'
	AND v.entity_type = 'categories'
	AND v.is_trending = 1
GROUP BY
	c.id,
	ct. `name`,
	v. `views`
ORDER BY
	v. `views` DESC
-----------
Scence: Load the filters of `brands` for coupons wishlisted by user.

SELECT
	b.id,
	bt. `name`
FROM
	brands b
	JOIN brand_translations bt ON bt.brand_id = b.id
WHERE
	b.id IN( SELECT DISTINCT
			brand_id FROM coupons c
		WHERE
			c.id IN(
				SELECT
					coupon_id FROM wishlists w
				WHERE
					user_id = 35)
				AND c.status = 1)
	AND b.status = 1
	AND bt.language_code = 'en'
GROUP BY
	b.id, bt.name
ORDER BY
	b.id DESC

	----------------------------------------

Scence: Load only those categores whose coupons are wishlisted by userId = 32

SELECT
	cc.category_id,
	ct. `name`
FROM
	coupons c
	JOIN coupon_categories cc ON cc.coupon_id = c.id
	JOIN category_translations ct ON ct.category_id = cc.category_id
WHERE
	c.id IN(
		SELECT
			coupon_id FROM wishlists w
		WHERE
			user_id = 35)
	AND c.status = 1
	AND ct.language_code = 'en'
GROUP BY
	cc.category_id, ct. `name`
ORDER BY
	cc.category_id


-----------------------------------------------------------------------

Scence: Featch all coupons with the count of their coupon type.

SELECT
	coupon_type AS couponType,
	count(id) AS numberOfCoupons
FROM
	coupons
GROUP BY
	coupon_type
ORDER BY
	numberOfCoupons DESC

-----------------------------------------------------------------------
Scence:- Sort the coupons by category names OR by country name

SELECT
	c.id AS couponId,
	ctrans.name
FROM
	coupons c
	JOIN coupon_categories cc ON cc.coupon_id = c.id
	JOIN category_translations ON category_translations.category_id = cc.category_id
	JOIN coupon_translations ct ON ct.coupon_id = c.id
	JOIN coupon_countries ON coupon_countries.coupon_id = c.id
	JOIN countries ON countries.id = coupon_countries.country_id
	JOIN countries_translations ctrans ON ctrans.country_id = countries.id
WHERE
	ctrans.language_code = 'en'
	AND category_translations.language_code = 'en'
	AND ct.language_code = 'en'
	AND countries.status = 1
	AND c.status = 1
GROUP BY
	couponId,
	ctrans.name
ORDER BY
	couponId