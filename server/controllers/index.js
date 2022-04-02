import { getBlogs } from "../models/main.js"

export const blogs = (req, res) => {
    getBlogs((err, results) => {
        if (err) {
            res.send(err)
        } else {
            res.json(results)
        }
    })
}
