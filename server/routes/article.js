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

router.post(
  "/create/article/Review/:member_id",
  async function (req, res, next) {
    const type_article = req.body.type_article;
    try {
      const [rows1, fields1] = await db.query(
        "INSERT INTO `article` (`member_id`, `information`, `type_article`, `image`) VALUES (?, ?, ?, ?)",
        [
          req.params.member_id,
          req.body.information,
          type_article,
          req.body.image,
        ]
      );
      const [rows2, fields2] = await db.query(
        "INSERT INTO `review` (`article_id`, `title_review`) VALUES (?, ?)",
        [rows1.insertId, req.body.title]
      );
      const category = await db.query(
        "INSERT INTO `review_category` (`article_id`, `category_id`, category) VALUES (?, ?, ?)",
        [rows1.insertId, 1, req.body.type]
      );
      // await db.commit();
      return res.json(rows1[0]);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
);

router.post(
  "/create/article/Promote/:member_id",
  async function (req, res, next) {
    const type = req.body.type;
    const language = req.body.language;
    try {
      const [rows1, fields1] = await db.query(
        "INSERT INTO article (member_id, information, type_article, image) VALUES (?, ?, ?, ?)",
        [req.params.member_id, req.body.information, "Promote", req.body.image]
      );
      const [rows2, fields2] = await db.query(
        "INSERT INTO promote (article_id, title_promote, type_promote) VALUES (?, ?, ?)",
        [rows1.insertId, req.body.title, type]
      );

      if (type == "Attraction") {
        const attraction = await db.query(
          "INSERT INTO attraction (article_id, province_id, office_hour, attraction_price, image) VALUES (?, ?, ?, ?, ?)",
          [
            rows1.insertId,
            req.body.province,
            req.body.office_hour,
            req.body.price,
            req.body.image,
          ]
        );
      }
      if (type == "Tour") {
        const tour = await db.query(
          "INSERT INTO tour (article_id, tour_price, image) VALUES (?, ?, ?)",
          [rows1.insertId, req.body.price, req.body.image]
        );
        for (let i = 0; i < language.length; i++) {
          const tourlanguageskill = await db.query(
            "INSERT INTO tour_language_skill (article_id, language_id) VALUES (?, ?)",
            [rows1.insertId, language[i]]
          );
        }
        const tourprovince = await db.query(
          "INSERT INTO tour_province (article_id, province_id) VALUES (?, ?)",
          [rows1.insertId, req.body.province]
        );
      }

      if (type == "Guide") {
        const guide = await db.query(
          "INSERT INTO guide (article_id, age, gender, guide_price, image) VALUES (?, ?, ?, ?, ?)",
          [
            rows1.insertId,
            req.body.age,
            req.body.gender,
            req.body.price,
            req.body.image,
          ]
        );
        for (let i = 0; i < language.length; i++) {
          const guidelanguageskill = await db.query(
            "INSERT INTO guide_language_skill (article_id, language_id) VALUES (?, ?)",
            [rows1.insertId, language[i]]
          );
        }
      }

      if (type == "Rest") {
        const guide = await db.query(
          "INSERT INTO rest (article_id, province_id, lower_price, higher_price, image) VALUES (?, ?, ?, ?, ?)",
          [
            rows1.insertId,
            req.body.province,
            req.body.lowerprice,
            req.body.higherprice,
            req.body.image,
          ]
        );
      }

      // await db.commit();
      return res.json(rows1[0]);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
);

exports.router = router;
