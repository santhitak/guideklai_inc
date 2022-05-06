const db = require("../config/db.server");
const express = require("express");
const router = express.Router();

router.get("/article", async function (req, res, next) {
  try {
    let sql =
      "SELECT * FROM article a join member using(member_id)  left join promote using(article_id) left join review using(article_id) left join review_category using(article_id) order by create_time DESC";

    const [rows, fields] = await db.query(sql);
    return res.json(rows);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get("/images", async function (req, res, next) {
  try {
    let sql =
      "SELECT * FROM (select *, row_number() over (PARTITION BY  article_id ORDER BY image DESC) rn from images) x where x.rn = 1";

    const [rows, fields] = await db.query(sql);
    return res.json(rows);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get("/images/:id", async function (req, res, next) {
  try {
    let sql = `SELECT image FROM images where article_id = ${req.params.id}`;

    const [rows, fields] = await db.query(sql);
    return res.json(rows);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.delete("/article/delete/:id", async function (req, res, next) {
  try {
    const [rows1, fields1] = await db.query(
      "DELETE FROM article WHERE comment_id=?",
      [req.params.id]
    );
    res.json("success");
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/article/filter/:type", async function (req, res, next) {
  try {
    let sql = `SELECT * FROM article left join promote using(article_id)  left join review using(article_id) left join review_category using(article_id) where type_Promote = "${req.params.type}" or category = "${req.params.type}" order by create_time DESC`;
    const [rows, fields] = await db.query(sql);
    return res.json(rows);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get("/article/:id", async function (req, res, next) {
  await db.query(
    `update article set view = view + 1 where article_id = ${req.params.id}`
  );
  try {
    let sql = `SELECT * FROM article left join member using(member_id)  left join review_category using(article_id) left join promote using(article_id) left join review using(article_id) where article_id = ${req.params.id}`;
    const [rows, fields] = await db.query(sql);
    return res.json(rows);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get("/article/comment/:id", async function (req, res, next) {
  try {
    let sql = `SELECT * FROM comment left join member using(member_id) where article_id = ${req.params.id} `;
    const [rows, fields] = await db.query(sql);
    return res.json(rows);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// router.get("/article/show/attraction", async function (req, res, next) {
//   try {
//     let sql = `SELECT * FROM article left join member using(member_id) left join promote using(article_id) left join review_category using(article_id) left join attraction using(article_id)  left join province using(province_id) where category = "Attraction" OR type_promote = "Attraction" `;
//     const [rows, fields] = await db.query(sql);
//     return res.json(rows);
//   } catch (err) {
//     return res.status(500).json(err);
//   }
// });

router.get(
  "/article/show/:category/:type_promote/:id",
  async function (req, res, next) {
    console.log(req.params.category);
    console.log(req.params.type_promote);
    try {
      if (
        req.params.category == "Guide" ||
        req.params.type_promote == "Guide"
      ) {
        let sql = `SELECT * FROM article left join member using(member_id) left join promote using(article_id) left join review_category using(article_id) left join guide using(article_id)  left join guide_language_skill using(article_id) left join language_skill using(language_id)  where article_id = ${req.params.id} AND (category = "Guide" OR type_promote = "Guide" ) `;
        const [rows, fields] = await db.query(sql);
        return res.json(rows);
      } else if (
        req.params.category == "Attraction" ||
        req.params.type_promote == "Attraction"
      ) {
        let sql = `SELECT * FROM article left join member using(member_id) left join promote using(article_id) left join review_category using(article_id) left join attraction using(article_id)  left join province using(province_id)  where article_id = ${req.params.id} AND (category = "Attraction"  OR type_promote = "Attraction" ) `;
        const [rows, fields] = await db.query(sql);
        return res.json(rows);
      } else if (
        req.params.category == "Rest" ||
        req.params.type_promote == "Rest"
      ) {
        let sql = `SELECT * FROM article left join entrepreneur using(member_id) left join member using(member_id) left join promote using(article_id) left join review_category using(article_id) left join rest using(article_id)  left join province using(province_id)  where article_id = ${req.params.id} AND (category = "Rest" OR type_promote = "Rest" ) `;
        const [rows, fields] = await db.query(sql);
        return res.json(rows);
      } else if (
        req.params.category == "Tour" ||
        req.params.type_promote == "Tour"
      ) {
        let sql = `SELECT * FROM article left join entrepreneur using(member_id) left join member using(member_id) left join promote using(article_id) left join review_category using(article_id) left join tour using(article_id) left join tour_language_skill using(article_id) left join language_skill using(language_id)  left join tour_province using(article_id) left join province using(province_id) where article_id = ${req.params.id} AND (category = "Tour"  OR type_promote = "Tour")  `;
        const [rows, fields] = await db.query(sql);
        return res.json(rows);
      }
    } catch (err) {
      return res.status(500).json(err);
    }
  }
);

// router.get("/article/show/rest", async function (req, res, next) {
//   try {
//     let sql = `SELECT * FROM article left join member using(member_id) left join promote using(article_id) left join review_category using(article_id) left join rest using(article_id)  left join province using(province_id) where category = "Rest" OR type_promote = "Rest" `;
//     const [rows, fields] = await db.query(sql);
//     return res.json(rows);
//   } catch (err) {
//     return res.status(500).json(err);
//   }
// });

// router.get("/article/show/tour", async function (req, res, next) {
//   try {
//     let sql = `SELECT * FROM article left join member using(member_id) left join promote using(article_id) left join review_category using(article_id) left join tour using(article_id) left join tour_language_skill using(article_id) left join language_skill using(language_id)  left join tour_province using(article_id) left join province using(province_id) where category = "Tour" OR type_promote = "Tour" `;
//     const [rows, fields] = await db.query(sql);
//     return res.json(rows);
//   } catch (err) {
//     return res.status(500).json(err);
//   }
// });

router.get("/article/show/all", async function (req, res, next) {
  try {
    let sql = `SELECT  * FROM article left join promote using(article_id) left join review using(article_id) order by view DESC`;
    const [rows, fields] = await db.query(sql);
    return res.json(rows);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get("/article/show/review/all", async function (req, res, next) {
  try {
    let sql = `SELECT  * FROM article left join review using(article_id) left join review_category using(article_id) order by view DESC`;
    const [rows, fields] = await db.query(sql);
    return res.json(rows);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get(
  "/article/show/review/tour/rating/get",
  async function (req, res, next) {
    try {
      let sql = `SELECT  * FROM article left join review using(article_id) left join review_category using(article_id) left join tour using(article_id)  where category = 'Tour' AND view >= 100 order by rating_avg DESC`;
      const [rows, fields] = await db.query(sql);
      return res.json(rows);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
);

router.get("/article/show/review/rest/view", async function (req, res, next) {
  try {
    let sql = `SELECT * FROM article left join review using(article_id) left join review_category using(article_id) left join rest using(article_id)  where category = 'Rest' AND lower_price IS NOT null AND higher_price IS NOT null order by view DESC, rating DESC`;
    const [rows, fields] = await db.query(sql);
    return res.json(rows);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get("/article/show/promote/rest/view", async function (req, res, next) {
  try {
    let sql = `SELECT * FROM article left join promote using(article_id) left join rest using(article_id) where type_promote = 'Rest' AND lower_price IS NOT null AND higher_price IS NOT null order by view DESC`;
    const [rows, fields] = await db.query(sql);
    return res.json(rows);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get(
  "/article/show/promote/attraction/province/view",
  async function (req, res, next) {
    try {
      let sql = `SELECT province_name, COUNT(article_id) promote FROM article left join attraction using(article_id) left join province using(province_id) where type_article = 'Promote' AND province_name IS NOT null GROUP BY province_id`;
      const [rows, fields] = await db.query(sql);
      return res.json(rows);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
);

router.get(
  "/article/show/promote/rest/province/view",
  async function (req, res, next) {
    try {
      let sql = `SELECT province_name, COUNT(article_id) promote FROM article left join rest using(article_id) left join province using(province_id) where type_article = 'Promote' AND province_name IS NOT null GROUP BY province_id`;
      const [rows, fields] = await db.query(sql);
      return res.json(rows);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
);

router.get("/star/:article_id/:member_id", async function (req, res, next) {
  try {
    let sql = `SELECT * FROM rating where article_id = ${req.params.article_id} and member_id = ${req.params.member_id}`;
    console.log(sql);
    const [rows, fields] = await db.query(sql);
    return res.json(rows);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.post(
  "/star/:article_id/:member_id/give",
  async function (req, res, next) {
    try {
      const [rows1, fields1] = await db.query(
        "INSERT INTO `rating` (`article_id`, `rating`, `member_id` ) VALUES (?, ?, ?)",
        [req.params.article_id, req.body.star, req.params.member_id]
      );
      const [rows2, fields2] = await db.query(
        `UPDATE article
        SET rating_avg = (SELECT AVG(rating) from rating where rating.article_id = ${req.params.article_id} group by article_id)
        WHERE article.article_id = ${req.params.article_id}`
      );
      // await db.commit();
      return res.json(rows2[0]);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
);

router.get("/province", async function (req, res, next) {
  try {
    let sql = "SELECT * FROM province";
    const [rows, fields] = await db.query(sql);
    return res.json(rows);
  } catch (err) {
    return res.status(500).json(err);
  }
});

exports.router = router;
