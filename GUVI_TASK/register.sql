CREATE TABLE `profile` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(244) NOT NULL,
  `name` varchar(255) NOT NULL
  `dob` varchar(255) NOT NULL
  `age` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



INSERT INTO `profile` (`id`, `email`, `password`, `name`,`dob`,`age`) VALUES
(1, 'ks@gmail.com', 'Sha', ' Ssf','19-2-2002','17'),
(2, 'aa@gmail.com', 'Sad', 'Sha','19-2-2002','17'),
(3, 'ada@gmail.com', 'Sh', 'asasa','19-2-2002','17');


ALTER TABLE `profile`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `profile`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;


