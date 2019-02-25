git checkout -b heroku
npm run-script build 
git add dist/ -f
git commit -m "Forcing commit on dist folder for heroku"
git push heroku heroku
git checkout master
git branch -D heroku
