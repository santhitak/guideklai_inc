import db from "../config/db.server.js"

export const getBlogs = (result) => {
    db.query("SELECT * FROM blogs", (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}