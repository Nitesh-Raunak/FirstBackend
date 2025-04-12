require('dotenv').config();
const express = require('express')
const app = express()
const port = 3000
const GithubData={
    "login": "Nitesh-Raunak",
    "id": 166865794,
    "node_id": "U_kgDOCfIrgg",
    "avatar_url": "https://avatars.githubusercontent.com/u/166865794?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Nitesh-Raunak",
    "html_url": "https://github.com/Nitesh-Raunak",
    "followers_url": "https://api.github.com/users/Nitesh-Raunak/followers",
    "following_url": "https://api.github.com/users/Nitesh-Raunak/following{/other_user}",
    "gists_url": "https://api.github.com/users/Nitesh-Raunak/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Nitesh-Raunak/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Nitesh-Raunak/subscriptions",
    "organizations_url": "https://api.github.com/users/Nitesh-Raunak/orgs",
    "repos_url": "https://api.github.com/users/Nitesh-Raunak/repos",
    "events_url": "https://api.github.com/users/Nitesh-Raunak/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Nitesh-Raunak/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Nitesh Kumar",
    "company": "Marwadi  university",
    "blog": "",
    "location": "Rajkot ,Gujrat",
    "email": null,
    "hireable": true,
    "bio": "I am a software developer and concentration on creating new things .",
    "twitter_username": null,
    "public_repos": 17,
    "public_gists": 0,
    "followers": 7,
    "following": 5,
    "created_at": "2024-04-12T19:27:22Z",
    "updated_at": "2025-04-12T07:23:08Z"
  }
app.get('/', (req, res) => {
  res.send('Hello World!')
})
// customize code
app.get('/tutor',(req,res)=>{
   res.send("nitesh.com")
})

app.get('/github',(req, res) => {
    res.json(GithubData)
  })


app.get('/login',(req,res)=>{
    res.send(`<h1>please login at nitesh.com</h1>`)
 })
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })


app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
  })
  