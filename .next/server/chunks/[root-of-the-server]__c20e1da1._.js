module.exports = {

"[project]/.next-internal/server/app/api/check-username-unique/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

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
"[project]/src/app/Schemas/SignupSchema.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "signUpSchema": (()=>signUpSchema),
    "usernameValidation": (()=>usernameValidation)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/lib/index.mjs [app-route] (ecmascript)");
;
const usernameValidation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().min(2, "Username must be atleast 2 chararcters").max(20, 'Username must be not more than 20 characters').regex(/^[a-zA-Z0-9._-]+$/, "Username must contain special characters");
const signUpSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
    username: usernameValidation,
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().email({
        message: 'Invalid email address'
    }),
    password: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string().min(6, {
        message: 'password must be at least 6 characters'
    })
}) //This is a Zod validation schema meant to:
 // Validate user input on the frontend (e.g., in a form)
 // Or validate incoming data on the backend (e.g., API request body)
 //this does not define a database model or schema like Mongoose or Prisma would.
;
}}),
"[project]/src/app/api/check-username-unique/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "GET": (()=>GET)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$Dbconnect$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/Dbconnect.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$models$2f$user$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/models/user.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/lib/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Schemas$2f$SignupSchema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/Schemas/SignupSchema.ts [app-route] (ecmascript)");
;
;
;
;
const usernamequesrySchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
    username: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Schemas$2f$SignupSchema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["usernameValidation"]
});
async function GET(request) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$Dbconnect$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
    try {
        const { searchParams } = new URL(request.url);
        const queryparams = {
            username: searchParams.get('username')
        };
        console.log(queryparams);
        const result = usernamequesrySchema.safeParse(queryparams);
        // console.log(result);
        if (!result.success) {
            const usernameerrors = result.error?.format().username?._errors || [];
            console.log(usernameerrors);
            return Response.json({
                success: false,
                message: usernameerrors.join(' & ') || usernameerrors
            });
        }
        const { username } = result.data;
        const Isuser = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$models$2f$user$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOne({
            username
        });
        if (Isuser) {
            return Response.json({
                success: false,
                message: "Username already exist"
            }, {
                status: 400
            });
        }
        return Response.json({
            success: true,
            message: "username is unique"
        }, {
            status: 201
        });
    } catch (error) {
        console.log("error in checking the username", error);
        return Response.json({
            succes: false,
            message: "Error in checking the username"
        }, {
            status: 400
        });
    }
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__c20e1da1._.js.map