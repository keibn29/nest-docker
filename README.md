#### 1. Init Nestjs project
#### 2. Dockerfile build nest app
<img src='./docs/docker-file.png'>

#### 3. Nginx config
<img src='./docs/nginx-config.png'>

#### 4. Docker compose stack
<img src='./docs/docker-compose.png'>

#### 5. Run container
```bash
docker compose -p nest-api up -d
```
<img src='./docs/container-run.png'>

#### 6. Connect mysql
<img src='./docs/connect-mysql.png'>

#### 7. Insert data into mysql table
> Create table users
```bash
docker exec -it db mysql -u root -p123456 db -e "CREATE TABLE users (id INT, name VARCHAR(255));"
```
> Show tables
```bash
docker exec -it db mysql -u root -p123456 -e "USE db; SHOW TABLES;"
```
> Insert data into users
```bash
docker exec -it db mysql -u root -p -e "USE db; INSERT INTO users (name) VALUES ('john_doe');"
```
> Show users
```bash
docker exec -it db mysql -u root -p -e "USE db; INSERT INTO users (name) VALUES ('john_doe');"  
```
<img src='./docs/insert-data.png'>

#### 8. API get users
<img src='./docs/api-get-users.png'>

#### 9. Demo postman
<img src='./docs/demo-postman.png'>