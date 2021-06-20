// 1. +Вибрати усіх клієнтів, чиє ім'я має менше ніж 6 символів.
// SELECT * FROM client WHERE LENGTH(FirstName) < 6;
//
// 2. +Вибрати львівські відділення банку.+
// SELECT * FROM department WHERE DepartmentCity = 'Lviv';
//
// 3. +Вибрати клієнтів з вищою освітою та посортувати по прізвищу.
//     SELECT * FROM client WHERE Education = 'High' ORDER BY LastName;
//
// 4. +Виконати сортування у зворотньому порядку над таблицею Заявка і вивести 5 останніх елементів.
//     SELECT * FROM application ORDER BY idApplication DESC LIMIT 5;
//
// 5. +Вивести усіх клієнтів, чиє прізвище закінчується на OV чи OVA.
//     SELECT * FROM client WHERE LastName LIKE '%ov' OR '%ova';
//
// 6. +Вивести клієнтів банку, які обслуговуються київськими відділеннями.
//     SELECT * FROM client WHERE Department_idDepartment IN (1,4,5);
//
// 7. +Вивести імена клієнтів та їхні номера телефону, погрупувавши їх за іменами.
//     SELECT Passport, FirstName FROM client ORDER BY FirstName DESC;
//
// 8. +Вивести дані про клієнтів, які мають кредит більше ніж на 5000 тисяч гривень.
//     SELECT * FROM application WHERE Currency = 'Gryvnia' AND Sum > 5000 AND CreditState = 'Not returned' GROUP BY Client_idClient;
//
// 9. +Порахувати кількість клієнтів усіх відділень та лише львівських відділень.
//     SELECT COUNT(idClient) FROM client;
// SELECT COUNT(idClient) FROM client WHERE City = 'Lviv';
//
// 10. Знайти кредити, які мають найбільшу суму для кожного клієнта окремо.
//     SELECT MAX(Sum), Client_idClient FROM application GROUP BY Client_idClient;
//
// 11. Визначити кількість заявок на крдеит для кожного клієнта.
//     SELECT COUNT(Client_idClient), Client_idClient FROM application GROUP BY Client_idClient;
//
// 12. Визначити найбільший та найменший кредити.
//     SELECT MAX(Sum), MIN(Sum) FROM application;
//
// 13. Порахувати кількість кредитів для клієнтів,які мають вищу освіту.
//     SELECT COUNT(*) FROM application JOIN client ON application.Client_idClient = client.idClient  WHERE Education = 'high';
//
// 14. Вивести дані про клієнта, в якого середня сума кредитів найвища.
//     SELECT
// AVG(a.Sum) as avg_sum, c.FirstName, c.LastName, c.idClient
// FROM application a
// JOIN client c ON a.Client_idClient = c.idClient
// GROUP BY idClient
// ORDER BY avg_sum DESC LIMIT 1;
//
// 15. Вивести відділення, яке видало в кредити найбільше грошей
// SELECT d.idDepartment, d.DepartmentCity, SUM(a.Sum) as dep_sum FROM department d
// JOIN client c ON d.idDepartment = c.Department_idDepartment
// JOIN application a ON a.Client_idClient = c.idClient
// GROUP BY d.idDepartment LIMIT 1;
//
// 16. Вивести відділення, яке видало найбільший кредит.
//     SELECT d.idDepartment, d.DepartmentCity, MAX(a.Sum) as max_sum FROM department d
// JOIN client c ON d.idDepartment = c.Department_idDepartment
// JOIN application a ON a.Client_idClient = c.idClient;
//
// 17. Усім клієнтам, які мають вищу освіту, встановити усі їхні кредити у розмірі 6000 грн.
//     UPDATE application a
// JOIN client c ON c.idClient = a.Client_idClient
// SET Sum = 6000 WHERE c.Education = 'high';
//
// 18. Усіх клієнтів київських відділень пересилити до Києва.
//     UPDATE client c
// JOIN department d ON c.Department_idDepartment = d.idDepartment
// SET c.City = 'Kyiv' WHERE d.DepartmentCity = 'Kyiv';
//
// 19. Видалити усі кредити, які є повернені.
//     DELETE FROM application WHERE CreditState = 'Returned' LIMIT 10;
//
//
// 20. Видалити кредити клієнтів, в яких друга літера прізвища є голосною.
//     DELETE a FROM application a
// JOIN client c ON a.Client_idClient = c.idClient
// WHERE c.LastName LIKE '_[e,o,i,a,u]%';
//
//
// Знайти львівські відділення, які видали кредитів на загальну суму більше ніж 5000
// SELECT d.DepartmentCity, SUM(a.Sum) FROM department d
// JOIN client c ON d.idDepartment = c.Department_idDepartment
// JOIN application a ON c.idClient = a.Client_idClient
// WHERE d.DepartmentCity LIKE 'Lviv' AND a.Sum > 5000 GROUP BY a.Sum;
//
// Знайти клієнтів, які повністю погасили кредити на суму більше ніж 5000
// SELECT * FROM client c
// JOIN application a ON c.idClient = a.Client_idClient
// WHERE a.Sum > 5000 AND a.CreditState = 'Returned';
//
//
// /* Знайти максимальний неповернений кредит.*/
// SELECT c.FirstName, a.Sum, a.CreditState FROM client c
// JOIN application a ON c.idClient = a.Client_idClient
// WHERE a.CreditState = 'Not returned'
// ORDER BY Sum DESC LIMIT 1;
//
//
//
// /*Знайти клієнта, сума кредиту якого найменша*/
// SELECT c.FirstName, a.Sum, a.CreditState FROM client c
// JOIN application a ON c.idClient = a.Client_idClient
// ORDER BY Sum LIMIT 1;
//
//
//
// /*Знайти кредити, сума яких більша за середнє значення усіх кредитів*/
//
//
//
// /*Знайти клієнтів, які є з того самого міста, що і клієнт, який взяв найбільшу кількість кредитів*/
//
//
//
// #місто чувака який набрав найбільше кредитів
// SELECT SUM(a.Sum) max, c.City FROM application a
// JOIN client c ON a.Client_idClient = c.idClient
// GROUP BY idClient ORDER BY max DESC LIMIT 1;