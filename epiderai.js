"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const lucide_react_1 = require("lucide-react");
const EpiderAIPresentation = () => {
    const [currentSlide, setCurrentSlide] = (0, react_1.useState)(0);
    const slides = [
        // Title Slide
        {
            title: "EpiderAI",
            subtitle: "Your AI-Powered Skin Health Companion",
            tagline: "From skin problem to prescribed care, delivered to your door",
            icon: lucide_react_1.Sparkles,
            gradient: "from-purple-600 via-pink-500 to-rose-500"
        },
        // Slide 1: Customer Segment
        {
            title: "Customer Segments",
            icon: lucide_react_1.Users,
            gradient: "from-blue-600 to-cyan-500",
            content: {
                b2b: {
                    title: "B2B Partners",
                    items: ["Beauty Parlours", "Doctor's Chambers", "Dermatology Clinics"]
                },
                b2c: {
                    title: "B2C Target Audience",
                    demographic: "Primarily women aged 16-30",
                    characteristics: [
                        "Deeply care about skin health",
                        "Seek premium imported products",
                        "Care for family members' skin needs",
                        "Willing and able to invest in quality skincare"
                    ]
                }
            }
        },
        // Slide 2: Problem
        {
            title: "The Problem We Solve",
            icon: lucide_react_1.AlertCircle,
            gradient: "from-red-500 to-orange-500",
            problems: [
                {
                    issue: "Diagnostic Uncertainty",
                    detail: "Inability to distinguish between minor and major skin conditions"
                },
                {
                    issue: "Healthcare Hassle",
                    detail: "Multiple doctor visits even for minor issues, wasting time and effort"
                },
                {
                    issue: "Financial Burden",
                    detail: "High consultation costs and unnecessary treatment expenses"
                }
            ]
        },
        // Slide 3: Value Proposition
        {
            title: "Unique Value Proposition",
            icon: lucide_react_1.Target,
            gradient: "from-emerald-600 to-teal-500",
            content: {
                main: "From skin problem to prescribed care, delivered to your door",
                concept: "Digital version of Bio-xin",
                benefits: [
                    "Instant AI-powered skin analysis",
                    "Expert dermatologist consultation",
                    "Prescribed products delivered home"
                ]
            }
        },
        // Slide 4: Solution
        {
            title: "Our Solution",
            icon: lucide_react_1.Lightbulb,
            gradient: "from-yellow-500 to-amber-500",
            solutions: [
                {
                    step: "Scan & Identify",
                    detail: "Advanced AI analyzes your skin and identifies issues instantly"
                },
                {
                    step: "Smart Recommendations",
                    detail: "AI suggests the perfect specialist for your specific condition"
                },
                {
                    step: "Affordable Care",
                    detail: "Low-cost consultations and treatment plans"
                }
            ]
        },
        // Slide 5: Marketing Strategy
        {
            title: "Go-to-Market Strategy",
            icon: lucide_react_1.Megaphone,
            gradient: "from-indigo-600 to-purple-500",
            channels: [
                {
                    type: "Strategic Partnerships",
                    details: "Collaborate with premium clinics: Bio-xin, Laser Treat, Skinic Dermatology Center, Signature Aesthetic & Wellness Centre, Aesthetica Skin Care & Laser Centre"
                },
                {
                    type: "Campus Marketing",
                    details: "Targeted campaigns at universities, colleges, and youth events"
                },
                {
                    type: "Digital Advertising",
                    details: "Comprehensive online advertising across social media and search platforms"
                }
            ]
        },
        // Slide 6: Revenue Model
        {
            title: "Revenue Model",
            icon: lucide_react_1.DollarSign,
            gradient: "from-green-600 to-emerald-500",
            streams: [
                {
                    source: "B2B Revenue",
                    model: "Monthly subscription fees from partner clinics and parlours"
                },
                {
                    source: "B2C Revenue",
                    model: "Per-scan charges and consultation fees from individual users"
                },
                {
                    source: "Product Sales",
                    model: "Commission from prescribed and recommended skincare products"
                }
            ]
        },
        // Slide 7: Financial Projections
        {
            title: "12-Month Budget",
            icon: lucide_react_1.Calculator,
            gradient: "from-slate-700 to-gray-600",
            budget: [
                { category: "UI/UX Design (Web, Android, iOS)", amount: "150000" },
                { category: "Website Development", amount: "100000" },
                { category: "Android App Development", amount: "120000" },
                { category: "iOS App Development", amount: "150000" },
                { category: "AI Training & Development", amount: "300000" },
                { category: "Office Space (12 months)", amount: "360000" },
                { category: "Utilities", amount: "120000" },
                { category: "Marketing (12 months)", amount: "4800000" },
                { category: "Employee Salaries (6 members)", amount: "3600000" },
                { category: "Registration & Setup", amount: "80000" },
                { category: "Miscellaneous", amount: "600000" }
            ],
            total: "10380000"
        },
        // Slide 8: Vision & Impact
        {
            title: "Our Vision",
            icon: lucide_react_1.Heart,
            gradient: "from-pink-600 to-rose-500",
            content: {
                problem: "Many people use clinically unproven products in pursuit of fair and clear skin, leading to serious skin diseases and complications",
                solution: "We provide scientifically-backed, personalized solutions for:",
                benefits: [
                    "Fresh & Smooth Skin",
                    "Brightened Complexion",
                    "Healthier Skin Barrier",
                    "Clear, Problem-Free Skin"
                ]
            }
        },
        // Slide 9: Unique Features
        {
            title: "What Sets Us Apart",
            icon: lucide_react_1.Star,
            gradient: "from-violet-600 to-purple-500",
            features: [
                {
                    name: "Advanced AI Progress Tracker",
                    detail: "Sophisticated core AI model with 2-3 week trend analysis showing real results over time"
                },
                {
                    name: "Unique Skin ID",
                    detail: "Individual skin fingerprint technology for personalized tracking and analysis"
                },
                {
                    name: "Custom Formulations",
                    detail: "Personalized skincare products with proprietary formulas tailored to your unique skin profile"
                }
            ]
        }
    ];
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };
    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };
    const CurrentSlide = slides[currentSlide];
    return (react_1.default.createElement("div", { className: "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4" },
        react_1.default.createElement("div", { className: "w-full max-w-6xl" },
            react_1.default.createElement("div", { className: "bg-white rounded-3xl shadow-2xl overflow-hidden" }, currentSlide === 0 ? (
            // Title Slide
            react_1.default.createElement("div", { className: `relative h-[600px] bg-gradient-to-br ${CurrentSlide.gradient} flex flex-col items-center justify-center text-white p-12` },
                react_1.default.createElement(CurrentSlide.icon, { className: "w-24 h-24 mb-8 animate-pulse" }),
                react_1.default.createElement("h1", { className: "text-7xl font-bold mb-4 text-center" }, CurrentSlide.title),
                react_1.default.createElement("p", { className: "text-3xl mb-4 text-center opacity-90" }, CurrentSlide.subtitle),
                react_1.default.createElement("div", { className: "mt-8 px-8 py-4 bg-white/20 backdrop-blur-sm rounded-full" },
                    react_1.default.createElement("p", { className: "text-xl italic text-center" }, CurrentSlide.tagline)))) : currentSlide === 1 ? (
            // Customer Segments
            react_1.default.createElement("div", { className: "h-[600px] p-12 overflow-y-auto" },
                react_1.default.createElement("div", { className: `flex items-center mb-8 bg-gradient-to-r ${CurrentSlide.gradient} text-white p-6 rounded-2xl` },
                    react_1.default.createElement(CurrentSlide.icon, { className: "w-12 h-12 mr-4" }),
                    react_1.default.createElement("h2", { className: "text-4xl font-bold" }, CurrentSlide.title)),
                react_1.default.createElement("div", { className: "grid grid-cols-2 gap-8" },
                    react_1.default.createElement("div", { className: "bg-blue-50 p-6 rounded-xl" },
                        react_1.default.createElement("h3", { className: "text-2xl font-bold text-blue-900 mb-4" }, CurrentSlide.content.b2b.title),
                        react_1.default.createElement("ul", { className: "space-y-2" }, CurrentSlide.content.b2b.items.map((item, idx) => (react_1.default.createElement("li", { key: idx, className: "flex items-center text-blue-800" },
                            react_1.default.createElement("div", { className: "w-2 h-2 bg-blue-500 rounded-full mr-3" }),
                            item))))),
                    react_1.default.createElement("div", { className: "bg-pink-50 p-6 rounded-xl" },
                        react_1.default.createElement("h3", { className: "text-2xl font-bold text-pink-900 mb-4" }, CurrentSlide.content.b2c.title),
                        react_1.default.createElement("p", { className: "text-pink-700 font-semibold mb-4" }, CurrentSlide.content.b2c.demographic),
                        react_1.default.createElement("div", { className: "space-y-3" }, CurrentSlide.content.b2c.characteristics.map((char, idx) => (react_1.default.createElement("div", { key: idx, className: "flex items-start" },
                            react_1.default.createElement("div", { className: "w-2 h-2 bg-pink-500 rounded-full mr-3 mt-2" }),
                            react_1.default.createElement("p", { className: "text-pink-800" }, char))))))))) : currentSlide === 2 ? (
            // Problems
            react_1.default.createElement("div", { className: "h-[600px] p-12 overflow-y-auto" },
                react_1.default.createElement("div", { className: `flex items-center mb-8 bg-gradient-to-r ${CurrentSlide.gradient} text-white p-6 rounded-2xl` },
                    react_1.default.createElement(CurrentSlide.icon, { className: "w-12 h-12 mr-4" }),
                    react_1.default.createElement("h2", { className: "text-4xl font-bold" }, CurrentSlide.title)),
                react_1.default.createElement("div", { className: "space-y-6" }, CurrentSlide.problems.map((problem, idx) => (react_1.default.createElement("div", { key: idx, className: "bg-red-50 p-6 rounded-xl border-l-4 border-red-500" },
                    react_1.default.createElement("h3", { className: "text-2xl font-bold text-red-900 mb-3" }, problem.issue),
                    react_1.default.createElement("p", { className: "text-red-700 text-lg" }, problem.detail))))))) : currentSlide === 3 ? (
            // Value Proposition
            react_1.default.createElement("div", { className: "h-[600px] p-12 overflow-y-auto" },
                react_1.default.createElement("div", { className: `flex items-center mb-8 bg-gradient-to-r ${CurrentSlide.gradient} text-white p-6 rounded-2xl` },
                    react_1.default.createElement(CurrentSlide.icon, { className: "w-12 h-12 mr-4" }),
                    react_1.default.createElement("h2", { className: "text-4xl font-bold" }, CurrentSlide.title)),
                react_1.default.createElement("div", { className: "text-center mb-8" },
                    react_1.default.createElement("p", { className: "text-3xl font-bold text-emerald-900 mb-4" },
                        "\"",
                        CurrentSlide.content.main,
                        "\""),
                    react_1.default.createElement("div", { className: "inline-block bg-emerald-100 border-2 border-emerald-500 px-8 py-4 rounded-xl mt-4" },
                        react_1.default.createElement("p", { className: "text-2xl text-emerald-900 font-bold" }, CurrentSlide.content.concept))),
                react_1.default.createElement("div", { className: "grid grid-cols-3 gap-6 mt-12" }, CurrentSlide.content.benefits.map((benefit, idx) => (react_1.default.createElement("div", { key: idx, className: "bg-emerald-50 p-6 rounded-xl text-center" },
                    react_1.default.createElement("div", { className: "w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4" },
                        react_1.default.createElement("span", { className: "text-white font-bold text-xl" }, idx + 1)),
                    react_1.default.createElement("p", { className: "text-emerald-900 font-semibold" }, benefit))))))) : currentSlide === 4 ? (
            // Solution
            react_1.default.createElement("div", { className: "h-[600px] p-12 overflow-y-auto" },
                react_1.default.createElement("div", { className: `flex items-center mb-8 bg-gradient-to-r ${CurrentSlide.gradient} text-white p-6 rounded-2xl` },
                    react_1.default.createElement(CurrentSlide.icon, { className: "w-12 h-12 mr-4" }),
                    react_1.default.createElement("h2", { className: "text-4xl font-bold" }, CurrentSlide.title)),
                react_1.default.createElement("div", { className: "space-y-6" }, CurrentSlide.solutions.map((solution, idx) => (react_1.default.createElement("div", { key: idx, className: "bg-amber-50 p-6 rounded-xl flex items-start" },
                    react_1.default.createElement("div", { className: "w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mr-6 flex-shrink-0" },
                        react_1.default.createElement("span", { className: "text-white font-bold text-2xl" }, idx + 1)),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("h3", { className: "text-2xl font-bold text-amber-900 mb-2" }, solution.step),
                        react_1.default.createElement("p", { className: "text-amber-700 text-lg" }, solution.detail)))))))) : currentSlide === 5 ? (
            // Marketing Strategy
            react_1.default.createElement("div", { className: "h-[600px] p-12 overflow-y-auto" },
                react_1.default.createElement("div", { className: `flex items-center mb-8 bg-gradient-to-r ${CurrentSlide.gradient} text-white p-6 rounded-2xl` },
                    react_1.default.createElement(CurrentSlide.icon, { className: "w-12 h-12 mr-4" }),
                    react_1.default.createElement("h2", { className: "text-4xl font-bold" }, CurrentSlide.title)),
                react_1.default.createElement("div", { className: "space-y-6" }, CurrentSlide.channels.map((channel, idx) => (react_1.default.createElement("div", { key: idx, className: "bg-purple-50 p-6 rounded-xl" },
                    react_1.default.createElement("h3", { className: "text-2xl font-bold text-purple-900 mb-3" }, channel.type),
                    react_1.default.createElement("p", { className: "text-purple-700 text-lg" }, channel.details))))))) : currentSlide === 6 ? (
            // Revenue Model
            react_1.default.createElement("div", { className: "h-[600px] p-12 overflow-y-auto" },
                react_1.default.createElement("div", { className: `flex items-center mb-8 bg-gradient-to-r ${CurrentSlide.gradient} text-white p-6 rounded-2xl` },
                    react_1.default.createElement(CurrentSlide.icon, { className: "w-12 h-12 mr-4" }),
                    react_1.default.createElement("h2", { className: "text-4xl font-bold" }, CurrentSlide.title)),
                react_1.default.createElement("div", { className: "space-y-6" }, CurrentSlide.streams.map((stream, idx) => (react_1.default.createElement("div", { key: idx, className: "bg-green-50 p-6 rounded-xl border-l-4 border-green-500" },
                    react_1.default.createElement("h3", { className: "text-2xl font-bold text-green-900 mb-3" }, stream.source),
                    react_1.default.createElement("p", { className: "text-green-700 text-lg" }, stream.model))))))) : currentSlide === 7 ? (
            // Financial Projections
            react_1.default.createElement("div", { className: "h-[600px] p-12 overflow-y-auto" },
                react_1.default.createElement("div", { className: `flex items-center mb-8 bg-gradient-to-r ${CurrentSlide.gradient} text-white p-6 rounded-2xl` },
                    react_1.default.createElement(CurrentSlide.icon, { className: "w-12 h-12 mr-4" }),
                    react_1.default.createElement("h2", { className: "text-4xl font-bold" }, CurrentSlide.title)),
                react_1.default.createElement("div", { className: "bg-gray-50 rounded-xl overflow-hidden" },
                    react_1.default.createElement("table", { className: "w-full" },
                        react_1.default.createElement("thead", null,
                            react_1.default.createElement("tr", { className: "bg-gray-200" },
                                react_1.default.createElement("th", { className: "text-left p-4 text-gray-900 font-bold" }, "Category"),
                                react_1.default.createElement("th", { className: "text-right p-4 text-gray-900 font-bold" }, "Amount (BDT)"))),
                        react_1.default.createElement("tbody", null,
                            CurrentSlide.budget.map((item, idx) => (react_1.default.createElement("tr", { key: idx, className: "border-t border-gray-200" },
                                react_1.default.createElement("td", { className: "p-4 text-gray-700" }, item.category),
                                react_1.default.createElement("td", { className: "p-4 text-right text-gray-900 font-semibold" }, parseInt(item.amount).toLocaleString())))),
                            react_1.default.createElement("tr", { className: "border-t-4 border-gray-900 bg-gray-900 text-white" },
                                react_1.default.createElement("td", { className: "p-4 font-bold text-lg" }, "Total Investment"),
                                react_1.default.createElement("td", { className: "p-4 text-right font-bold text-lg" }, parseInt(CurrentSlide.total).toLocaleString()))))))) : currentSlide === 8 ? (
            // Vision
            react_1.default.createElement("div", { className: "h-[600px] p-12 overflow-y-auto" },
                react_1.default.createElement("div", { className: `flex items-center mb-8 bg-gradient-to-r ${CurrentSlide.gradient} text-white p-6 rounded-2xl` },
                    react_1.default.createElement(CurrentSlide.icon, { className: "w-12 h-12 mr-4" }),
                    react_1.default.createElement("h2", { className: "text-4xl font-bold" }, CurrentSlide.title)),
                react_1.default.createElement("div", { className: "bg-pink-50 p-8 rounded-xl mb-8" },
                    react_1.default.createElement("h3", { className: "text-xl font-bold text-pink-900 mb-4" }, "The Challenge"),
                    react_1.default.createElement("p", { className: "text-pink-700 text-lg" }, CurrentSlide.content.problem)),
                react_1.default.createElement("div", { className: "bg-rose-50 p-8 rounded-xl" },
                    react_1.default.createElement("h3", { className: "text-xl font-bold text-rose-900 mb-4" }, CurrentSlide.content.solution),
                    react_1.default.createElement("div", { className: "grid grid-cols-2 gap-4" }, CurrentSlide.content.benefits.map((benefit, idx) => (react_1.default.createElement("div", { key: idx, className: "flex items-center bg-white p-4 rounded-lg shadow-sm" },
                        react_1.default.createElement("div", { className: "w-3 h-3 bg-rose-500 rounded-full mr-3" }),
                        react_1.default.createElement("span", { className: "text-rose-900 font-semibold" }, benefit)))))))) : (
            // Unique Features
            react_1.default.createElement("div", { className: "h-[600px] p-12 overflow-y-auto" },
                react_1.default.createElement("div", { className: `flex items-center mb-8 bg-gradient-to-r ${CurrentSlide.gradient} text-white p-6 rounded-2xl` },
                    react_1.default.createElement(CurrentSlide.icon, { className: "w-12 h-12 mr-4" }),
                    react_1.default.createElement("h2", { className: "text-4xl font-bold" }, CurrentSlide.title)),
                react_1.default.createElement("div", { className: "space-y-6" }, CurrentSlide.features.map((feature, idx) => (react_1.default.createElement("div", { key: idx, className: "bg-purple-50 p-6 rounded-xl border-l-4 border-purple-500" },
                    react_1.default.createElement("h3", { className: "text-2xl font-bold text-purple-900 mb-3 flex items-center" },
                        react_1.default.createElement(lucide_react_1.Star, { className: "w-6 h-6 mr-2 text-purple-500" }),
                        feature.name),
                    react_1.default.createElement("p", { className: "text-purple-700 text-lg" }, feature.detail)))))))),
            react_1.default.createElement("div", { className: "flex items-center justify-between mt-8" },
                react_1.default.createElement("button", { onClick: prevSlide, className: "flex items-center px-6 py-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-slate-800 font-semibold", disabled: currentSlide === 0 },
                    react_1.default.createElement(lucide_react_1.ChevronLeft, { className: "w-5 h-5 mr-2" }),
                    "Previous"),
                react_1.default.createElement("div", { className: "flex items-center space-x-2" }, slides.map((_, idx) => (react_1.default.createElement("button", { key: idx, onClick: () => setCurrentSlide(idx), className: `h-3 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-8 bg-white' : 'w-3 bg-white/50'}` })))),
                react_1.default.createElement("button", { onClick: nextSlide, className: "flex items-center px-6 py-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-slate-800 font-semibold", disabled: currentSlide === slides.length - 1 },
                    "Next",
                    react_1.default.createElement(lucide_react_1.ChevronRight, { className: "w-5 h-5 ml-2" }))),
            react_1.default.createElement("div", { className: "text-center mt-4" },
                react_1.default.createElement("span", { className: "text-white text-lg font-semibold" },
                    "Slide ",
                    currentSlide + 1,
                    " of ",
                    slides.length)))));
};
exports.default = EpiderAIPresentation;