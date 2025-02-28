SELECT eu.unique_id, e.name
FROM Employees as e
LEFT JOIN  EmployeeUNI AS eu
on(e.id = eu.id)