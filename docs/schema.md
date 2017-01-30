# DB Schema


## profile
column name | data type | details
------------|-----------|-----------------------
id         | integer   | not null, primary
name       | char field  | not null
user       | foreign key  | optional (null=true blank=true)

## user_ethnicities
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
profile     |  foreign key |  
ethncitiy   |  foreign key   |  
percent     |           |  

## ethnicities
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        |  char field   |  not null
lat         |
log         |

## sub_populations
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | char field    |  not null
specific	| boolean field | not null  

## data_points
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key      	sub_population | foreign key |
snp | foreign key |
percent | integer | not null  

## snp
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | char field | not null
summary     | text field | not null
description  | text field   |  not null
