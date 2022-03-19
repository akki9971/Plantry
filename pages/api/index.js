// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const users = []
export default function handler(req, res) {
    if(req.method == 'GET'){
        res.status(200).json(users)
    }
    if(req.method == 'POST'){
        const user = req.body
        users.push(user)
        res.send('submitted')
    }
}
