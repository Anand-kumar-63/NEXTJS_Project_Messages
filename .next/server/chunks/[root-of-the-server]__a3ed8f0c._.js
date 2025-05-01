module.exports = {

"[project]/.next-internal/server/app/api/sign-up/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/crypto [external] (crypto, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[externals]/mongoose [external] (mongoose, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("mongoose", () => require("mongoose"));

module.exports = mod;
}}),
"[project]/src/app/lib/Dbconnect.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
const connection = {};
async function ConnectDb() {
    if (connection.isConnected) {
        console.log("Database is already connected");
        return;
    }
    // if (!process.env.MONGOOSE_DB) {
    //   throw new Error("Please define the MONGOOSE_DB environment variable");
    // }
    try {
        const db = await __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].connect("mongodb+srv://anand2327cse1077:XeEtUaFZZgosnsdr@devtindercluster.2y6ga.mongodb.net/Projectemail?retryWrites=true&w=majority&appName=DevtinderCluster", {
            dbName: "Projectemail"
        });
        connection.isConnected = db.connections[0].readyState;
        console.log("Database connected successfully");
    } catch (error) {
        console.log("ERROR IN DATABASE CONNECTION", error);
        process.exit(1); // Important: exit with error code
    }
}
const __TURBOPACK__default__export__ = ConnectDb;
}}),
"[project]/src/app/models/user.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
const MessageSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema({
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now()
    }
});
const UserSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema({
    username: {
        type: String,
        required: [
            true,
            'Username is required'
        ],
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: [
            true,
            'Email is required'
        ],
        unique: true,
        //   use regex to validate the email
        match: [
            /.+\@.+\..+/,
            'Please use a valid email address'
        ]
    },
    password: {
        type: String,
        required: [
            true,
            'Password is required'
        ]
    },
    verifyCode: {
        type: String,
        required: [
            true,
            'Verify Code is required'
        ]
    },
    verifyCodeExpiry: {
        type: Date,
        required: [
            true,
            'Verify Code Expiry is required'
        ]
    },
    isverified: {
        type: Boolean,
        default: false
    },
    isAcceptingMessages: {
        type: Boolean,
        default: true
    },
    message: [
        MessageSchema
    ]
});
// Nextjs doesn't know if the application is bootingup firsttime or The application is already being booted nextjs works on egde 
// so we have to check for the model if already exists in the database or if the user model doesnt exist so make the new one and use it
const UserModel = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models.User || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].model('User', UserSchema);
const __TURBOPACK__default__export__ = UserModel;
}}),
"[project]/src/app/helpers/savenewuser.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "saveuser": (()=>saveuser)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bcryptjs/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$Dbconnect$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/Dbconnect.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$models$2f$user$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/models/user.ts [app-route] (ecmascript)");
;
;
;
async function saveuser(userData) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$Dbconnect$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
    const { username, password, email } = userData;
    const hashedPassword = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].hash(password, 10);
    const expiryDate = new Date();
    expiryDate.setHours(expiryDate.getHours() + 1);
    const verifycode = Math.floor(10000 + Math.random() * 90000).toString();
    const user = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$models$2f$user$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]({
        username: username,
        email: email,
        password: hashedPassword,
        verifyCode: verifycode,
        verifyCodeExpiry: expiryDate,
        isAcceptingMessages: false,
        messages: []
    });
    await user.save();
    return user;
}
}}),
"[project]/src/app/api/sign-up/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "POST": (()=>POST)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$helpers$2f$savenewuser$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/helpers/savenewuser.ts [app-route] (ecmascript)");
;
;
async function POST(req) {
    try {
        const json = await req.json();
        const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$helpers$2f$savenewuser$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["saveuser"])(json);
        if (user) {
            console.log(user);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                message: "User is saved successfully",
                data: user,
                ok: true
            }, {
                status: 200
            });
        } else {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Error is saving the user",
                ok: false
            }, {
                status: 401
            });
        }
    } catch (err) {
        console.log(err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: err.message || "internal server error",
            ok: false
        }, {
            status: 400
        });
    }
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__a3ed8f0c._.js.map