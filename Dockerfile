FROM nginx:alpine

# Copy the HTML, CSS, and JavaScript files to the Nginx web directory
COPY . /usr/share/nginx/html

# Expose port 80 to access the web server
EXPOSE 80

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]