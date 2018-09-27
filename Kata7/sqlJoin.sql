SELECT people.id, people.name, Count(*) AS "toy_count"
FROM people, toys
WHERE people.id = toys.people_id
GROUP BY people.id;