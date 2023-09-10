INSERT INTO department (department_name)
VALUES
('Stark Tower'),
('S.H.I.E.L.D Helicarrier'),
('Avengers Compound'),
('Avengers Mansion'),
('Wakanda');

INSERT INTO position (title, salary, department_id)
VALUES
('Avenger', 400000, 1),
('Avenger', 400000, 1),
('Avenger', 300000, 1),

('Lead Scientist', 350000, 4),
('Scientist', 90000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Tony', 'Stark', 2, 1),
('Steve', 'Rogers', 1, 2),
('Natasha', 'Romanoff', 4, NULL)
('Bruce', 'Banner', 6, 3),
('Gwen', 'Stacy', 7, NULL),


