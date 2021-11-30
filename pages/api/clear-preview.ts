import { NextApiResponse } from "next";

export default function clearPreview (req, res: NextApiResponse){
    res.clearPreviewData();
    res.redirect(req.query.route);
    // res.end('preview mode disabled'); // /api/clear-preview ?route=/
}