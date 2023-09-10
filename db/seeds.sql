INSERT INTO department (department_name)
VALUES
('Stark Tower'),
('S.H.I.E.L.D Helicarrier'),
('Avengers Compound'),
('Avengers Mansion'),
('Wakanda');

INSERT INTO job position (title, salary, department_id)
VALUES
('Avenger', 400000, 1),
('Vigilante', 100000, 1),
('X-MEN', 300000, 1),

('Lead Scientist', 120000, 4),
('Scientist', 65000, 4);

('S.H.I.E.L.D Director', 250000, 2)
('S.H.I.E.L.D Secretary', 80000, 2)
('S.H.I.E.L.D Officer', 60000, 2)
('S.H.I.E.L.D Accountant', 90000, 2)

('Custodian', 50000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Peter', 'Parker', 4, NULL),
('Tony', 'Stark', 2, 1),
('Gwen', 'Stacy', 7, 5),
('Bruce', 'Banner', 6, 3),
('Natasha', 'Romanoff', 4, NULL)
('Steve', 'Rogers', 5, 2),
('Thor', 'Son of Odin', 9, 4);

