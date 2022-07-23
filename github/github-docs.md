## What is git

1. Git is the most popular version control system which records the changes in the code in the special database called repository.

2. We can revert code anytime.

3. **Git is the distributed version control system**. here all team members has the copy of the project, with its history on their machine.

4. If the central server is offline we can sync our work directly with others (Git, mercurial) are the examples of distributed version control systems.

## Using Git

## Check version of Git

1. git --version

## Configuration Settings.

1. Name
2. Email
3. Default Editor
4. Line ending

### Add name

    git config --global user.name "Rahul More"

### Add Email

    git config --global user.email "more03625@gmail.com"

### Set Default editor

    git config --global code.editor "code --wait"

1. All the configuration settings are stored in text files. You can open that text file using command

   ```
    git config --global -e
   ```

## Basic Git work flow.

1. Creating a commit is like taking a snapshot of the project.

2. There is special are in git called staging area. staging area allows us to first review the work before recording the snapshot.

3.

## Instead of memorizing this commands try to underhand the github commands

1. `git init`
   This command will initialized empty git repository. in the specified path. this will basically create an empty .git folder and by default this folder will be hidden because you are not supposed to touch this folder.

   `ls -a` Will give you all the hidden folders, so you can have a look at them.

   If you delete this folder you are going to loose you project history.

2. `open .git`
   This command will open your folder, so you can have a look at folder structure.

3. `git add .`
   This will add your files to staging area. we review this files and if everything is good we can use commit command to permanently store code to repository.

   Flow will like this.

   You code ----> git add . ----> everything goes to staging area ---> You review ---> You commit.

   **Once you use commit staging area will not get empty.** that is there only.

   _So when you next time make any changes in the file you can compare the current changes with the staging area which is the last git add ._

   ### Uses of the git add .

   - You can commit single file.
     `git add fileName.js`

   - You can commit multiple files.
     `git add fileName1.js fileName2.js `

   - You can commit files of specific extensions.
     `git add *.txt`

   - You can add entire directory recursively.
     `git add .`

4. `git commit -m "Your Message"`
   Git contains unique identifier id, Message, Date Time, Author etc...
   Git does'nt store the deltas of what was change.
   It Stores the full the content.

   - It actually compress the content
   - It doesn't stores the duplicate content.

   ### Each commit store the complete snap shot of the project & this allows us to quickly get back to previous state.

5. `git status`
   This command allow us to check the status of the current working directory.
