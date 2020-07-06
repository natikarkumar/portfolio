…or create a new repository on the command line
echo "# getting-started-github-apps" >> README.md
git init
git add README.md
git commit -m "first commit"
<<<<<<< HEAD
git remote add origin https://github.com/natikarkumar/portfolio.git
=======
git remote add origin https://github.com/natikarkumar/getting-started-github-apps.git
>>>>>>> f76c5aef4b865662d9c2178670602a6afc6c92d6
git push -u origin master
                
…or push an existing repository from the command line
git remote add origin https://github.com/natikarkumar/portfolio.git
git push -u origin master