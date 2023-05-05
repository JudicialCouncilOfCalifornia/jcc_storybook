# Code Management

## Branching Strategy

 - Cut new branches from `master`
 - Branches should be named with the following convention: `feature/[ticket id]--feature-name` or `bugfix/[ticket-id]--bug-name`
 - Make a pull request to `master` when you are ready to merge your changes.
 - In the future we may want to use a `develop` branch as well for QA before committing to a production branch, but for now we will keep it simple.

Including the `[ticket-id]` in the branch name will allow us to track/find code changes related to tasks a lot easier. It can also open up the possibility of automating branch and task management in the future.

## Code Style

 - Please follow Drupal coding standards: https://www.drupal.org/docs/develop/standards


## Commit Messages

All commit messages should begin with a type, followed by a colon, the [ticket-id] followed by a colon, followed by a short description. For example:

```
feat: [ticket-id]: Add new component [Component Name].
```

Other types include: fix, chore, docs, refactor, test, etc. See the Conventional Commits spec for more info:

https://www.conventionalcommits.org/en/v1.0.0-beta.2/

Inlcuding the `[ticket-id]` in the commit message makes it a lot easier to manage bad merges, or cherry pick commits if something goes wrong. It also makes it easier to track down code changes related to tasks after their branches have been deleted.


## New Releases

This project is currently a package hosted on Packagist. It should be moved to Drupal as a theme project in the future.

This project needs to be tagged to be installed in Drupal and is using [semantic versioning](https://semver.org/).


### BEFORE Tagging a Release

  - Update the History.md file with the new version number and any changes that have been made since the last release.
  - Export the libs folder for Drupal libraries:
    - `npm run lib`
    - Commit lib folder changes to master branch with message:
      - `chore: Export libs.`


When you are ready to tag a new release, follow these steps:

 - Determine the current version number using `git log` to see the latest tag on the master branch.
 - Use git tag to create a new tag, incrementing the correct Major, Minor or Patch number. For example: `git tag 1.0.0`
   - Major **1.#.#**: version when you make incompatible changes that will affect integration.
   - Minor **#.1.#**: version when you add functionality in a backwards-compatible manner
   - Patch **#.#.1**: version when you make backwards-compatible bug fixes

If you would like to automate this I recommend using the "git-release" extension. Which can be installed a number of ways.

  - Install as a custom git extension
    - Put this file in a directory in your $PATH and make sure it's executable `chmod +x [file]`: https://github.com/tj/git-extras/blob/master/bin/git-release
    - More info on custom git commands: https://gitbetter.substack.com/p/automate-repetitive-tasks-with-custom
  - Install git-extras which includes git-release and a lot more: https://github.com/tj/git-extras/blob/master/Installation.md
    - On a Mac you can install it with Homebrew: `brew install git-extras`
    - On a PC please see the documentation.
  - It's installed by Oh My Zsh if you're into that: https://ohmyz.sh

Then if you're really hardcore add this to your `.zshrc` or `.bashrc` file to save a few keystrokes and hassle on each release:

```bash
# Functions
release() {
  if [ ! -n "$1" ]
  then
    echo -e "\nPlease include a semver type: release [major|minor|patch]\n"
  else
    git release --semver $1 -c
  fi
}
```
*Don't forget to reload your config file `source ~/.zshrc` or open a new terminal.*

Now you can just type `release [major|minor|patch]` to create a new release. It will automatically update the History.md file and commit it to master. It will also create a new tag and push it to the remote repository. i.e. `release patch`

That's much easier than the manual process above, but it's up to you.

If you don't use the additional `release` function above, you will need to manually run the command `git release --semver [major|minor|patch] -c` to create a new release. That's a lot more to remember and a lot more typing.
