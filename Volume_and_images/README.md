# Using a shared volume and Images  (mounting a volume from machine on a docker container)

Running a shared volume:
`docker run -d --name sharedvol -v $(pwd):/usr/share/nginx/html -p 8080:80 nginx`

Getting inside the container:
`docker exec -it sharedvol bash`

Docker image was created from the file `dockerfile` for this website
`docker build --tag website:latest .`
