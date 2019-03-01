-- Codewars LInk: https://www.codewars.com/kata/sql-basics-simple-table-totaling/sql
-- Challenge: create a querty to display each unique clan with their total points and ranked by theri total points

SELECT  ROW_NUMBER() OVER() AS "rank", *
FROM(
  SELECT     CASE WHEN clan = '' THEN '[no clan specified]' else clan END, SUM(points) AS "total_points", COUNT(id) AS "total_people"
  FROM people
  GROUP BY 1
  ORDER BY 2 DESC
  ) AS "x"
