INSERT INTO departments (name) VALUES
('Marketing'),
('Finance'),
('Operations'),
('Research and Development'),
('Customer Service');

INSERT INTO roles (title, salary, department_id) VALUES
('Marketing Specialist', 45000, 1),
('Financial Analyst', 55000, 2),
('Operations Coordinator', 50000, 3),
('R&D Scientist', 70000, 4),
('Customer Service Representative', 30000, 5),
('Product Manager', 60000, 1),
('Budget Analyst', 53000, 2);

INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES
('Emily', 'Wilson', 1, NULL),
('James', 'Taylor', 2, 1),
('Jessica', 'Moore', 3, 2),
('Andrew', 'Miller', 4, 3),
('Sophia', 'White', 5, 4),
('David', 'Brown', 6, 1),
('Lucas', 'Jones', 7, 2),
('Isabella', 'Martin', 1, 1),
('Benjamin', 'Thompson', 2, 2),
('Charlotte', 'Anderson', 3, 3),
('Matthew', 'Clark', 4, 4),
('Olivia', 'Lewis', 5, 5),
('Daniel', 'Young', 6, 1);
