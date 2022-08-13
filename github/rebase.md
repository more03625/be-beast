# rebase in git

## What is git rebase

1. Lets say there are 2 branches `master` & `feature/user`.

2. You done few changes in `feature/user` & then made a commit 3 OR 4 times.

3. then you ran a command called `git rebase master`

4. what git rebase is doing is deleting your that 3-4 commits & arranging that onto the main branch. on the tip of last commit of main. you now your main tree looks like.

5. mainLastCommitHashHead ----> `feature/user` commitsHashHead.

6. then you will be getting a straight (Linear) lines of commits for main branch

# git merge Vs. git rebase
