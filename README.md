**Task 1**

Pulled and ran the hello-world Docker image 

![image](https://github.com/user-attachments/assets/2e85acd4-ef15-471c-a947-3b54e7478543)

**Task 2**

Dockerfile
```
FROM nginx:alpine

# Copy the HTML, CSS, and JavaScript files to the Nginx web directory
COPY . /usr/share/nginx/html

# Expose port 80 to access the web server
EXPOSE 80

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]
```
Docker Build Process

![Screenshot 2024-11-09 222813](https://github.com/user-attachments/assets/b15f4385-f5a5-4e0a-a9c5-c602d42a7c3e)

Docker Run Process

![Screenshot 2024-11-09 222845](https://github.com/user-attachments/assets/a9a6278c-3b83-4d7c-8e6b-7b83aa21880f)

Docker image pushed to DockerHub

[ Link to DockerHub ](https://hub.docker.com/repository/docker/nsuhas991/caluclator-app-main) 

[LIVE PREVIEW](https://suhas991.github.io/Simple_Caluclator/)
