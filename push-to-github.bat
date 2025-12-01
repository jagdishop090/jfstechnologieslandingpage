@echo off
echo Initializing Git repository...
git init

echo Adding remote repository...
git remote add origin https://github.com/jagdishop090/jfstechnologieslandingpage.git

echo Adding all files...
git add .

echo Committing files...
git commit -m "Initial commit: JFS Technologies Landing Page"

echo Pushing to GitHub...
git branch -M main
git push -u origin main

echo Done! Your code has been pushed to GitHub.
pause

