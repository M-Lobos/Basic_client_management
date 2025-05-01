CREATE TABLE clients (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL, 
    email VARCHAR(100) UNIQUE NOT NULL,
    job VARCHAR(50),
    rate NUMERIC(10, 2), DEFAULT 100.00, 
    isActive BOOLEAN DEFAULT true
);

INSERT INTO clients (name, email, job, rate, isActive) VALUES
('Rodrigo Rodriguez', 'roro@mail.com','Web Developer', 120, TRUE),
('Benito Benitez', 'bebe@mail.com', 'Frontend developer', 150, TRUE),
('Gonzalo Gonzales','gongon@mail.com', 'Scrum Master',  80, TRUE),
('Domingo Dominguez', 'domdom@mail.com', 'Tester', 100, FALSE),
('Lupe Lopez', 'lulo@mail.com', 'QA and UX/UI', 110, TRUE)
('Hernán Hernández', 'herher@mail.com', 'HR specialist', 90.50, TRUE)  

SELECT * FROM clients
ORDER BY id DESC;