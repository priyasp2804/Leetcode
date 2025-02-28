SELECT w.id
FROM Weather w
JOIN Weather w1
ON DATEDIFF(w.recorddate, w1.recorddate) = 1
AND w.temperature > w1.temperature