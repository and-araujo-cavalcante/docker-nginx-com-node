USE nodedb;

CREATE TABLE IF NOT EXISTS people (
  id int(11) NOT NULL AUTO_INCREMENT,  
  name varchar(225) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;

SET character_set_client = utf8;
SET character_set_connection = utf8;
SET character_set_results = utf8;
SET collation_connection = utf8_general_ci;

-- Filling of peoples
INSERT INTO people(name) values('Anderson');
INSERT INTO people(name) values('Lucian');		