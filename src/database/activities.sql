DROP DATABASE IF EXISTS activities;
CREATE DATABASE activities;

\c activities;

CREATE TABLE teenactivities (
  ID INT PRIMARY KEY NOT NULL,
  TYPE VARCHAR(125) NOT NULL,
  ACTIVITY TEXT NOT NULL,
  DESCRIPTION TEXT NOT NULL,
  LOCATION VARCHAR(125) NOT NULL,
  SEASON TEXT NOT NULL,
  LEADER TEXT NOT NULL,
  PHONE VARCHAR(10) NOT NULL,
  AGE INT NOT NULL
);


INSERT INTO TEENACTIVITIES (ID,TYPE,ACTIVITY,DESCRIPTION,LOCATION,SEASON,LEADER,PHONE,AGE) VALUES (1, 'Meet and Greet', 'Summer Hangouts for non-traditional schooled teens', 'A place to meet', '4250 Shoshone St. Denver CO 80211', 'Summer', 'Nadia Comansky', 7205765098, 16),(2, 'Meet and Greet', 'Teen Girls Connect', 'A place for teen girls to meet new friends', '100 Poplar St Denver, CO 80220', 'Summer', 'Mary Olsen', 7205553456, 16-18),(3, 'Meet and Greet', 'Bar-b-que and Chat', 'Summer fun cookout!', 'Washington Park S. Downing Street & Louisiana Ave., Denver CO 80210', 'Summer', 'Racine Weathers', '7202139876', 16-19),((4, 'Meet and Greet', 'Girls Night Out', 'Games and fun Sleep over', '2000 S. Colorado Blvd, Denver, CO 80222', 'Twice Monthly', 'Laura Overton', 7205209876, 16),(5, 'Meet and Greet', 'Boardgame Hangout', 'Games and fun Sleep over', '2000 S. Colorado Blvd, Denver, CO 80222', 'Twice Monthly', 'Laura Overton', 7205209876, 16);;
