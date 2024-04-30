"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const changeLanguage = async (req, res) => {
    const { lang } = req.body;
    res.cookie('lang', lang);
    res.status(200).json({ msg: 'Language changed' });
};
exports.default = { changeLanguage };
