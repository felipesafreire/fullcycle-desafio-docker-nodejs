use nodedb;

CREATE TABLE `people` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`nome` VARCHAR(255) NOT NULL DEFAULT '',
	PRIMARY KEY (`id`)
);
