#!/bin/bash
docker run -it -p 3000:3000 --entrypoint "/bin/bash" -v $PWD:/broyden broyden-dev-node20.10.0-bookworm