import { NextApiRequest, NextApiResponse } from "next";

export default function clearPreview (req: NextApiRequest, res: NextApiResponse){
    res.clearPreviewData();
    res.redirect(req.query.route as string);
    // res.end('preview mode disabled'); // /api/clear-preview ?route=/
}