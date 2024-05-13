import { Request, Response } from 'express';
import { changeLanguageDto } from "./language.types";

const changeLanguage = async (req: Request, res: Response) => {
    const { lang } = req.body as changeLanguageDto;
    res.cookie('lang', lang);
    res.status(200).json({ msg: 'Language changed' });
};

export default { changeLanguage };