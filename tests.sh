#!/bin/bash

# Startup Chimp testing instance
MONGO_PORT=3001
METEOR_PORT=3100

echo After METEOR IS READY, run: chimp --path=tests \
     --ddp=http://localhost:$METEOR_PORT --watch
     
bash -c "MONGO_URL=mongodb://localhost:$MONGO_PORT/chimp_db \
     meteor --port $METEOR_PORT $@"
