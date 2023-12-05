-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 06, 2023 at 12:50 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `glu`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `approved` bit(1) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `approved`, `email`, `name`, `password`) VALUES
(1, b'1', 'ca@uncg.edu', 'Chandana Ariyawansa', 'ca2023');

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

CREATE TABLE `project` (
  `primary_key` int(11) NOT NULL,
  `collaborator_a` int(11) NOT NULL,
  `collaborator_b` int(11) NOT NULL,
  `creator_id` int(11) NOT NULL,
  `project_name` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `project`
--

INSERT INTO `project` (`primary_key`, `collaborator_a`, `collaborator_b`, `creator_id`, `project_name`, `status`) VALUES
(1, 14, 8, 14, 'Capstone project', 'done');

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `id` int(11) NOT NULL,
  `approved` bit(1) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `github_id` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `rating` double NOT NULL,
  `total_collaborators` int(11) NOT NULL,
  `total_ratings` int(11) NOT NULL,
  `yes_collaborators` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`id`, `approved`, `email`, `github_id`, `name`, `password`, `rating`, `total_collaborators`, `total_ratings`, `yes_collaborators`) VALUES
(1, b'1', 'aj@uncg.edu', 'ajasp26', 'Alex Jasper', 'aj2023', 4, 3, 3, 3),
(2, b'1', 'df@uncg.edu', 'Derek-Fox', 'Derek Fox', 'df2023', 4, 3, 3, 2),
(3, b'1', 'jc@uncg.edu', 'jescarter', 'Jesse Carter', 'jc2023', 3.8, 5, 5, 4),
(4, b'1', 'n@uncg.edu', 'NbrB-UNCG', 'Nick', 'n2023', 3.6666666666666665, 3, 3, 2),
(5, b'1', 'd@uncg.edu', 'Daviidr3', 'David', 'd2023', 2.6666666666666665, 3, 3, 2),
(6, b'1', 'np@uncg.edu', 'nlphil2', 'Noah Phillips', 'np2023', 3.6666666666666665, 3, 3, 2),
(7, b'1', 'rh@uncg.edu', 'RizikH', 'Rizik Haddad', 'rz2023', 4, 3, 3, 3),
(8, b'1', 'eh@uncg.edu', 'eric-hall', 'Eric Hall', 'eh2023', 3.6666666666666665, 3, 3, 2),
(9, b'1', 'c@uncg.edu', 'calliemh', 'Callie', '2023', 4, 1, 1, 1),
(10, b'1', 'jc@uncg.edu', 'jtcrews', 'Jacob Crews', 'jc2023', 0, 0, 0, 0),
(11, b'1', 'j@uncg.edu', 'JM-2001', 'Jonathan', 'j2023', 0, 0, 0, 0),
(12, b'1', 'mz@uncg.edu', 'bilalv14', 'Muhammad Zahid ', 'mz2023', 0, 0, 0, 0),
(13, b'1', 'kb@uncg.edu', 'cyberseckenny', 'Kenny Banks', 'kb2023', 5, 1, 1, 1),
(14, b'1', 'u_zia@uncg.edu', 'usman-z', 'Usman Zia', 'uzia', 0, 0, 0, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`primary_key`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `project`
--
ALTER TABLE `project`
  MODIFY `primary_key` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
