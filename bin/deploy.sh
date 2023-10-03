#!/bin/bash
if [[ $1 = "prod" || $1 = "dev" ]] && [[ $2 = "down" || $2 = "up" ]]; then
    cd ..
    fileEnv="docker-compose.${1}.yaml"
    downOrUp=$2
    echo "Running docker-compose -f docker.compose.yaml -f $fileEnv $downOrUp"
    docker-compose -f docker-compose.yaml -f $fileEnv $downOrUp
else
    echo "Need to follow format ./deploy.sh prod|dev down|up"
fi


# Run in development:  ./deploy.sh dev up 
# Stop development:  ./deploy.sh dev down 
# Run in production:  ./deploy.sh prod up
# Tear down production:  ./deploy.sh prod down