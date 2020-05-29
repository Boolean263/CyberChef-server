import { Router } from "express";
const router = Router();
import { operations } from "cyberchef/src/node/index.mjs";

/**
 * operationsGet
 */
router.get("/", async (req, res, next) => {
    const ret = {};
    for (let op of operations) {
        if (op.opName) ret[op.opName] = op.args;
    }
    res.send(ret);
});

export default router;
