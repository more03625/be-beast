# Git questions:

    1. What git fetch origin do? git fetch vs git pull.

### git fetch

        - The git fetch command downloads commits, files & refs from a remote repo to your local machine.
        - git fetch is the safe version of the git pull.
        - Because it will download the remote content but will not update the local repos working state.

### git pull

        - git pull is the most aggressive alternative

        - It will download the content for the active local branch and immediately execute the git merge command to create a merge commit for the new remote content.

    2. What is git reset (hard, soft)?
    3. Make a pull from a specific branch.

    4. `git checkout -b feature/featureName` What does -b indicates?
        - -b tells git create branch `feature/featureName` if its not already exits.

    5. `git push -u origin new-feature`
        What does *-u* & *origin* means here?

        -
    6. How to merge your code into main & then push
        ```git checkout main```
        ```git pull origin main```
        ```git merge feature/featureName```
        ```git push origin main```

    7. What does above command doing?
        ```git checkout -b feature/featureName main```

        - This command is checking out to `feature/featureName` based out of `main` branch.
        - And -b create that branch if not exits.

    8. What is rebase?

    9. How to rename a branch?

    10. What is --set-upstream

    11. How to delete local & remote branch?

    12. How to go back to previous branch?

    13. What is refs?

    14. Rollback to last commit

    15. git reset --soft vs git reset --hard
