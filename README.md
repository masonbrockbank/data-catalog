

# Follow these steps to run this project locally

1. Go to this link: https://developer.domo.com/portal/d9520f5752d56-get-access-token
2. Fill out the username and password in the top right: username being a domo client id and password being a domo client secret
   
 <img width="520" alt="image" src="https://github.com/masonbrockbank/data-catalog/assets/90272781/534af092-0d36-402b-b009-54cfec310142">
 
4. Do not press send API request.  In the Request sample shell command directly below: copy the authorization header (just the hash value after the word basic)
   
 <img width="552" alt="image" src="https://github.com/masonbrockbank/data-catalog/assets/90272781/363b59fd-afcd-4fe6-8d4c-a2fa436c39b0">
 
5. Paste this value in step 3 in the env file
6. Open the terminal in visual studio (hold down control `).  Type in npm start.  A browser window will open with localhost:3000


