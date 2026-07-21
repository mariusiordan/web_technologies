import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.render("home", {
        pageTitle: "Home"
    });
});

router.get("/contact", (req, res) => {
    res.render("contact", {
        pageTitle: "Contact Us"
    });
});

router.get("/faq", (req, res) => {
    res.render("faq", {
        pageTitle: "FAQ"
    });
});

export default router;