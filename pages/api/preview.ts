import { NextApiResponse } from "next";

export default function preview (req, res: NextApiResponse){
    res.setPreviewData({});
    res.redirect(req.query.route); // /api/preview?route=/
}