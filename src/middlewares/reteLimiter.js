import reteLimit from "express-rate-limit";

export const limiter =  reteLimit({
    windowMs:15 *60 *1000 ,// 15 min
    max: 100, // limit each IP address to 100 requests pre 15 min
    standardHeaders: true,
    legacyHeaders: false,
})
