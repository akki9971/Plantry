// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const remainder = []
export default function handler(req, res) {
    if(req.method == 'GET'){
        res.status(200).json(remainder)
    } else if(req.method == 'POST'){
        const user = req.body
        remainder.push(user)
        res.status(300).send('submitted')
    }
}
