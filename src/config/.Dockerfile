  # DO NOT MODIFY
  # This file is automatically generated. You can copy this file and add a
  # Dockerfile to the root of the project if you would like to use a custom
  # docker setup.
  FROM truecar/gluestick:1.0.0-rc.3
  ADD . /app
  RUN yarn
  RUN ASSET_URL=__GS_ASSET_URL__ gluestick build