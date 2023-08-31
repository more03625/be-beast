Docker is a platform for building, running & shipping applications in consistent manner.

Your application work on your machine. but not on other machine.
    * Reason
        1. One or more files are missing.
        2. Software version mismatch.
        3. Different configuration, like diff node version.

    You can get package of your application to run on any machine that uses docker. so it will work all all the machine.

    * Advantages.
        * Your friend don't have to spend half or entire day to setup the project.
        ``` docker-compose up ```

        * This will install all the dependencies inside the isolated env, called `containers`.

        * This is the beauty of docker.

        * Once you done with development you can just remove it from your machine using the following command.
        ``` docker compose down --rmi all```