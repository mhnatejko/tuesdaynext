import { NextApiRequest, NextApiResponse } from "next";

export default function preview (req: NextApiRequest, res: NextApiResponse){
    res.setPreviewData({});
    res.redirect(req.query.route as string); // /api/preview?route=/
}