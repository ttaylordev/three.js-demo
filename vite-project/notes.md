# Project progress notes.

## TODO's

 - TODO: better stars that don't occlude the globe - currently commented out confetti randomized stars
 - TODO: ISS space station - tied to further scroll wheel action
 - TODO: Moon - orbit into frame then out on scroll wheel
 - TODO: Mars - tiny red dot that passes slowly in the distant background
 - TODO: weather layer - ...



## next commit:

 - populated index.html with lorum ipsum content
 - updated TODO's
 - position: absolute of main containter
 - moved unused canvas elements into seperate files
 - formatted notes.md
 - fixed text appearing behind canvas element
 - 1353 


## Better Commits:

### 7 Rules for Better Commits

1. Seperate the body from the subject with a blank line
2. Limit subject line to 50 characters
3. Capitalize the subject line
4. Do not end subject with a period
5. Use imperative mood in the subject line.
    - If applied, this commit will ____...
6. Wrap body at 72 characters
7. Use the body to explain what and why, not how.
    - the diff will show how, this information is already documented elsewhere

 - Always commit code in a functional, self contained state
   - use git stash or a private branch otherwise 
   - private branches should be labeled as such.
     - here commits can be a little sloppier, used as a way to save work between breaks etc.
     - squash into one well formed commit into the feature branch once feature is in a workable, non-breaking state.

   ```shell
    git checkout feature/ticket-42-nameOfFeature
    git merge --squash private/nameOfFeature
   ```
     - if the squashed commit would be too large and hard to review, you can rebase instead as long as the private branch commits are in a progressive order.
   ```shell
   git rebase feature/ticket-42-nameOfFeature private/nameOfFeature
   ```
     - they keyword prior to each commit can be changed to signal what git should do with each commit.
    [Original]:
   ```shell
    pick 3e3lk1e6 add html
    pick 987lk1e9 add css
    pick 164lkd23 Fix css
    pick 387lkd23 connect db
    pick 223add42 fixed bugs
    pick 55fkjb39 colors everywhere
    pick 63lgb239 I animated it
   ```
    [changed]:
   ```shell
    pick 3e3lk1e6 add html
    squash 987lk1e9 add css
    squash 164lkd23 Fix css
    pick 387lkd23 connect db
    squash 223add42 fixed bugs
    reword 55fkjb39 colors everywhere
    reword 63lgb239 I animated it
   ```
   [becomes]: 
   ```shell
    pick 3e3lk1e6 add html
    pick 387lkd23 connect db
    reword 55fkjb39 add colors
    reword 63lgb239 add animations
   ```

 - Each change should be atomic, small and functional
   - reliable for rewinding back to previous commits
 - Conventional Commits 
   - auto generrated changelogs
   - determine semantic version
   - structured commit history
   - Format: `<type>[scope]:description`
  
  - Types:
    - fix  - bug fixes
    - feat  - code features
    - build
    - chore
    - ci
    - docs
    - style
    - refactor
    - test
  - Scopes:
    - any additional information
    - Use nouns
    - surround by parenthesis
    - add ! before colon to notate breaking changes
  - Description
    - short message
    - written in the imperative (use add instead of added or adds)
  - body(Optional)
    - free form
    - explain changes made and why
  - footer(Optional)
    - must use a word token followed by a ":" or "#"
    - example:

     ```sh
    Resolves Issue #42
    Development-Method: Pair Programming
    With: Tyler 
    ```
