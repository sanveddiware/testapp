require('dotenv').config();

const express = require('express')
const app = express()
const PORT=process.env.PORT||4000;
const githubData={
  "login": "sanveddiware",
  "id": 154737109,
  "node_id": "U_kgDOCTkZ1Q",
  "avatar_url": "https://avatars.githubusercontent.com/u/154737109?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/sanveddiware",
  "html_url": "https://github.com/sanveddiware",
  "followers_url": "https://api.github.com/users/sanveddiware/followers",
  "following_url": "https://api.github.com/users/sanveddiware/following{/other_user}",
  "gists_url": "https://api.github.com/users/sanveddiware/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/sanveddiware/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/sanveddiware/subscriptions",
  "organizations_url": "https://api.github.com/users/sanveddiware/orgs",
  "repos_url": "https://api.github.com/users/sanveddiware/repos",
  "events_url": "https://api.github.com/users/sanveddiware/events{/privacy}",
  "received_events_url": "https://api.github.com/users/sanveddiware/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 8,
  "public_gists": 0,
  "followers": 1,
  "following": 5,
  "created_at": "2023-12-24T11:55:58Z",
  "updated_at": "2025-07-11T15:09:27Z"
};

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('Sanved Diware')
})

app.get('/login',(req,res)=>{
    res.send('<h1>Hello</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h1>Chat with code</h1>');
})


app.get('/github',(req,res)=>{
    res.json(githubData);
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${process.env.port}`)
})
