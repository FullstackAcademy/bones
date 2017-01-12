# Git team workflow

Here's the basic idea:
  1. Grab a story  
  2. Create a new git branch the story
  3. Commit specs and code to the branch
  4. Push your branch
  5. Make a pull request
    * *someone else* will eventually merge it

## 1. Grab a story

You've probably got them in [waffle]. I like using things like this even
for projects that only I am working on.

[waffle]: https://waffle.io

## 2. Creating a new git branch

Most likely, you'll want to base your branch off `master`. First, let's
make sure our local master is up-to-date:

```
git checkout master
git pull origin master
```

Now make a branch. I like to name my feature branches like
`f/the-name-of-some-feature` and bug branches `b/the-name-of-some-bug`.

```
git checkout -b f/add-product-model
```

## 3. Commit specs and code to the branch

Write specs, watch 'em fail, write code. You know this part :)

Try to commit often. It's particularly nice if your commits follow
some kind of logical progression, but don't worry about that too much.

Tips:

`git commit -a -m "A commit message"` will add all unadded files in the
working tree and commit them with "A commit message" as the message.

`git add -p` will walk through every change in the working tree and ask
you if you want to add it to the commit. This lets you break up big
commits into smaller ones, or decide not to commit some change. You can
even commit some changes but not others from a single file.

## 4. Push your branch

`git push origin f/add-product-model`


## 5. Make a pull request

You can do this in the Github UI.

I prefer the command line. You can install [Hub] to do github stuff
from the command line. If you install [Hub], you can do:

`hub pull-request`

To make a pull request. Note that if you've forgotten to push, you get
a weird `Unprocessable` error message. Push and try again.

After you've made a pull request, take a break, then come back and
review someone else's pull request, or grab the next story.

😃

[Hub]: https://hub.github.com/