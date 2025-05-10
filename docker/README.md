
---

# 🐳 Docker Notes

## 📌 Table of Contents
1. [What is Docker? Why do we need it?](#1-what-is-docker-why-do-we-need-it)
2. [Docker Images & Containers](#2-docker-images--containers)
3. [Installation of Docker CLI & Desktop](#3-installation-of-docker-cli--desktop)
4. [Important Docker Commands](#4-important-docker-commands)
5. [Docker vs VM](#5-docker-vs-vm)
6. [Port Mapping & Setting Env Variables](#6-port-mapping--setting-env-variables)
7. [Troubleshooting Containers](#7-troubleshooting-containers)
8. [Using Containers to build Node Application](#8-using-containers-to-build-node-application)
9. [Dockerization of Node.js Application (Dockerfile)](#9-dockerization-of-nodejs-application-dockerfile)
10. [Docker Compose](#10-docker-compose)
11. [Publishing to DockerHub](#11-publishing-to-dockerhub)
12. [Layering in Docker Images](#12-layering-in-docker-images)
13. [Volume Mounting](#13-volume-mounting)
14. [Docker Networking](#14-docker-networking)

---

## 1. What is Docker? Why do we need it? 🧩
- Solves the classic problem: **"It works on my machine."**
- Core Docker Concepts:
  - **Docker Container**:
    - A lightweight, portable unit containing your app and its dependencies.
    - Deployable anywhere.
    - Supports running multiple containers on a single machine with different runtime environments.
  - **Docker Image**:
    - Read-only template to create containers.
    - Shareable (like MongoDB, MySQL images).
    - Made up of multiple layers for optimization.
    - Run multiple containers from the same image.

🧠 **How Docker Works (in short)**:
1. Docker Client talks to Docker Daemon.
2. Daemon pulls image from Docker Hub.
3. Daemon creates a container from image.
4. Executable in container runs → Produces output.
5. Output sent back to client.

---

## 2. Docker Images & Containers 🧱
- **Image**:
  - Blueprint to create containers.
  - Contains all dependencies.
  - Immutable and versionable.
- **Container**:
  - A running instance of an image.
  - Isolated environment.
  - Lightweight and efficient.

---

## 3. Installation of Docker CLI & Desktop 💻
- Download from [Docker official site](https://www.docker.com/products/docker-desktop)
- Follow platform-specific install instructions.

---

## 4. Important Docker Commands 📜

| Command | Description |
|--------|-------------|
| `docker images` | List all images |
| `docker pull imageName` | Pull image from DockerHub |
| `docker run imageName` | Create & run container from image |
| `docker start containerName` | Start existing container |
| `docker stop containerName` | Stop a running container |
| `docker run --name myContainer imageName` | Run container with custom name |
| `docker rmi imageName` | Remove image (after removing containers) |
| `docker rm containerName` | Remove container |
| `docker run -d mysql -e MYSQL_ROOT_PASSWORD=rahul@123` | Run in detached mode |
| `docker logs containerName` | View container logs |
| `docker exec -it containerId /bin/bash` | Access container terminal |
| `docker volume ls` | List volumes |
| `docker volume create myVolume` | Create volume |

---

## 5. Docker vs VM ⚖️

| Feature | Docker | Virtual Machine |
|--------|--------|-----------------|
| OS Kernel | Shared with host | Separate kernel |
| Performance | Lightweight | Heavy |
| Isolation | Application-level | OS-level |
| Boot Time | Seconds | Minutes |
| Use Case | Fast, multiple microservices | Full OS simulation |

---

## 6. Port Mapping & Setting Env Variables 🔌

```bash
docker run -p 8080:3306 -e MYSQL_ROOT_PASSWORD=rahul@123 mysql
````

* Binds **host port 8080** to **container port 3306**
* Useful for accessing internal container services from the host.

---

## 7. Troubleshooting Containers 🛠️

* Use `docker logs containerName` to check logs.
* Use `docker exec -it containerId /bin/bash` to get terminal access and debug.

---

## 8. Using Containers to Build Node Application 🧪

* Pull MongoDB using Docker.
* Run it as a container.
* Let Node.js App connect via exposed port.
* Use Docker Network to connect containers without manually exposing ports.

---

## 9. Dockerization of Node.js Application (Dockerfile) 📦

```Dockerfile
# Dockerfile
FROM node:18
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]
```

🔧 **Build Docker Image**:

```bash
docker build -t testapp:1.0 .
```

---

## 10. Docker Compose 🧬

* Tool for running **multi-container apps**.
* YAML-based configuration.

```yaml
version: "3"
services:
  app:
    build: .
    ports:
      - "3000:3000"
    volumes:
      - .:/app
    environment:
      - NODE_ENV=development
  mongo:
    image: mongo
    ports:
      - "27017:27017"
```

### 🛠 Commands:

```bash
docker compose -f docker-compose.yaml up -d   # Start
docker compose -f docker-compose.yaml down    # Stop
```

* Automatically creates a **default network**.
* Supports volumes for **data persistence**.

---

## 11. Publishing to DockerHub 🚀

1. Build Image:

   ```bash
   docker build -t yourusername/appname:tag .
   ```
2. Login:

   ```bash
   docker login
   ```
3. Push:

   ```bash
   docker push yourusername/appname:tag
   ```

---

## 12. Layering in Docker Images 📚

* Docker images are built in **layers**.
* Each command in Dockerfile creates a new layer.
* Shared layers are **cached** and reused between builds → Faster.

---

## 13. Volume Mounting 💾

```bash
docker run -it -v /host/path:/container/path ubuntu
```

* Volumes store **persistent data** on the host machine.
* Decoupled from the container lifecycle.
* You can delete containers and still retain the data.

---

## 14. Docker Networking 🌐

### a. Default & Custom Networks

* Check available networks:

  ```bash
  docker network ls
  ```

### b. Multi-Container Networking

* Use docker compose or create custom networks.

### c. Network Drivers:

| Driver | Use                                            |
| ------ | ---------------------------------------------- |
| bridge | Default, for containers on same host           |
| host   | Removes network isolation (direct host access) |
| null   | Disable networking entirely                    |

---

## ❓ FAQs

### Q1: Can I change code inside Docker Image?

* No. But you can:

  1. Start a container from the image.
  2. Modify code inside container.
  3. Commit as new image:

     ```bash
     docker commit containerId newImageName
     ```

### Q2: What are Layers in Docker?

* Each instruction in Dockerfile adds a layer.
* Layers are reused across images to speed up build and reduce size.

---