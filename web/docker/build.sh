PROJECT=openfaas-demo
APP=web
IMAGE=harbor.nxai.io:8080/$PROJECT/$APP

# Build production dist
cd ..
npm i
npm run build
rm -rf docker/dist
mv dist docker/

# Build image
cd docker
sudo docker build -t $APP -f Dockerfile .
sudo docker tag $APP $IMAGE

echo "Image: $IMAGE"

