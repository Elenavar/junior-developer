// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method==='POST'){
     fetch('http://localhost:3001/data',{
      method: 'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(req.body)
    })}
    return res.status(201).json({response: 'todo ok'})
}
