

function ___$insertStyle(css) {
    if (!css || typeof window === 'undefined') {
        return;
    }
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var axios = require('axios');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n["default"] = e;
    return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);
var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

___$insertStyle("@charset \"UTF-8\";\n@font-face {\n  font-family: \"Pretendard\";\n  src: url(\"https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Medium.eot\");\n  src: url(\"https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Medium.eot?#iefix\") format(\"embedded-opentype\"), url(\"https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Medium.woff2\") format(\"woff2\"), url(\"https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Medium.woff\") format(\"woff\"), url(\"https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Medium.ttf\") format(\"truetype\");\n  font-display: swap;\n}\n.MsgContainerHeader {\n  background-color: #ffffff;\n  height: 8.8%;\n  top: 0;\n  left: 0;\n  box-shadow: 0 4px 4px rgba(222, 222, 222, 0.2);\n  border-radius: 10px 10px 0 0;\n}\n\n.MsgContainerHeaderLogo {\n  width: 15%;\n  display: flex;\n  justify-content: center;\n  height: 1.12rem;\n  align-items: center;\n  padding: 1.1rem 0 1.1rem 0;\n  float: left;\n}\n\n.MsgContainerHeaderContent {\n  width: 70%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  float: left;\n}\n\n.MsgContainerHeaderText {\n  font-family: \"Pretendard\", serif;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 1rem;\n  line-height: 150%;\n  letter-spacing: -0.02em;\n  text-align: center;\n  cursor: pointer;\n  margin: 0 0.3rem 0 0;\n  color: #404040;\n}\n\n.MsgContainerHeaderOnOff {\n  font-family: \"Pretendard\", serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 0.675rem;\n  line-height: 150%;\n  letter-spacing: -0.02em;\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n  margin: 0 0 0 0.3rem;\n  float: right;\n  color: #626262;\n  width: 3.43125rem;\n  height: 1.40625rem;\n  border: 0.04rem solid #DDDDDD;\n  border-radius: 2.25rem;\n}\n\n.MsgContainerHeaderMenu {\n  width: 15%;\n  display: flex;\n  justify-content: center;\n  height: 1.12rem;\n  right: 0;\n  align-items: center;\n  padding: 1.1rem 0 1.1rem 0;\n  float: left;\n}\n\n.MsgContainerFooter {\n  background-color: #ffffff;\n  height: 15.2%;\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  box-shadow: 0 4px 4px rgba(222, 222, 222, 0.2);\n  border-radius: 0 0 10px 10px;\n}\n\n.MsgContainerFooterTextBox {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0.69rem 1.125rem;\n  padding: 0.675rem 1.0125rem;\n  border: 1.5px solid #8BB7F2;\n  border-radius: 1rem;\n}\n\n.MsgContainerFooterText {\n  font-family: \"Pretendard\", serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 0.8rem;\n  line-height: 150%;\n  letter-spacing: -0.02em;\n  color: #A7A7A7;\n  width: 90%;\n  float: left;\n  padding: 0 0.5rem 0 0;\n}\n.MsgContainerFooterText textarea {\n  font-family: \"Pretendard\", serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 0.8rem;\n  line-height: 150%;\n  letter-spacing: -0.02em;\n  width: 100%;\n  border: 0;\n  outline: none;\n  resize: none;\n}\n\n.MsgContainerFooterSendBtn {\n  font-family: \"Pretendard\", serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 0.8rem;\n  line-height: 150%;\n  letter-spacing: -0.02em;\n  width: 10%;\n  cursor: pointer;\n  float: left;\n}\n\n.MsgContainerMain {\n  width: 100%;\n  height: 76%;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  -ms-overflow-style: none; /* 인터넷 익스플로러 */\n  scrollbar-width: none; /* 파이어폭스 */\n}\n\n.MsgContainerMain::-webkit-scrollbar {\n  display: none;\n}\n\n.MsgContainerMainDate {\n  font-family: \"Pretendard\", serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 0.5625rem;\n  line-height: 150%;\n  letter-spacing: -0.02em;\n  display: flex;\n  justify-content: center;\n  width: fit-content;\n  background-color: #ffffff;\n  padding: 0.225rem 0.675rem;\n  text-align: center;\n  border: 0.04rem solid #DDDDDD;\n  border-radius: 2.25rem;\n  color: #626262;\n  margin: 0.6rem auto 0.9rem auto;\n}\n\n.SendMsgBox {\n  max-width: 65%;\n  font-family: \"Pretendard\", serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 0.8rem;\n  line-height: 150%;\n  letter-spacing: -0.02em;\n  color: #ffffff;\n  width: fit-content;\n  margin: 0.28rem 1.25rem 0.28rem 0.375rem;\n  box-shadow: 1px 4px 6px rgba(145, 145, 145, 0.1);\n  border-radius: 14px 14px 0 14px;\n  padding: 0.5rem 1rem;\n  background: linear-gradient(82.02deg, #2F80ED 11.93%, #2F80ED 11.94%, #70A0E0 104.3%);\n}\n\n.ReceivedMsgBox {\n  max-width: 50%;\n  font-family: \"Pretendard\", serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 0.8rem;\n  line-height: 150%;\n  letter-spacing: -0.02em;\n  color: #404040;\n  width: fit-content;\n  margin: 0.28rem 0.375rem 0.28rem 0.625rem;\n  border: 0.5px solid #DDDDDD;\n  box-shadow: 1px 4px 6px rgba(144, 144, 144, 0.1);\n  border-radius: 14px 14px 14px 0;\n  padding: 0.5rem 1rem;\n  background: #ffffff;\n}\n\n.MsgContainerRight {\n  width: 100%;\n  justify-content: end;\n  display: flex;\n}\n\n.MsgContainerLeft {\n  width: 100%;\n  justify-content: start;\n  display: flex;\n}\n\n.HostProfileBox {\n  float: left;\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 70%;\n  padding: 0 0 0 1rem;\n}\n.HostProfileBox img {\n  width: inherit;\n  border-radius: 70%;\n}\n\n.MsgTimeStamp {\n  font-family: \"Pretendard\", serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 0.5625rem;\n  line-height: 150%;\n  letter-spacing: -0.02em;\n  color: #B1b1b1;\n  height: 2.5rem;\n  display: flex;\n  align-items: end;\n}\n\n.RoomCreateBtn {\n  font-family: \"Pretendard\", serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 0.8rem;\n  line-height: 150%;\n  letter-spacing: -0.02em;\n  background-color: #2F80ED;\n  color: white;\n  text-align: center;\n  font-weight: bold;\n  width: fit-content;\n  box-shadow: 8px 8px 8px rgba(144, 144, 144, 0.1);\n  border-radius: 14px 14px 14px 14px;\n  padding: 0.5rem 1rem;\n  margin: 0.6rem 1.313rem 0.6rem 1.313rem;\n  cursor: pointer;\n}\n\n.CreateNewChat {\n  font-family: \"Pretendard\", serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 0.8rem;\n  line-height: 150%;\n  letter-spacing: -0.02em;\n  color: #A7A7A7;\n  text-align: center;\n  width: 100%;\n  margin: 0.3rem;\n}\n\n.Modal {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: rgba(0, 0, 0, 0.5);\n  border-radius: 10px;\n  z-index: 1;\n  display: flex;\n}\n\n.ModalContainer {\n  background-color: #FFFFFF;\n  box-shadow: 0 8px 15px rgba(186, 186, 186, 0.1);\n  border-radius: 10px;\n  width: 80%;\n  display: flex;\n  position: relative;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 1rem;\n  margin: auto;\n  z-index: 1000;\n}\n\n.ModalCloseButton {\n  text-align: right;\n  width: 100%;\n}\n.ModalCloseButton svg {\n  position: absolute;\n  right: 0.8rem;\n}\n\n.ModalProfileImg {\n  width: 5rem;\n  height: 5rem;\n  border-radius: 70%;\n}\n.ModalProfileImg img {\n  width: inherit;\n  border-radius: 70%;\n}\n\n.ModalServiceName {\n  font-family: \"Pretendard\", serif;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 1rem;\n  line-height: 150%;\n  letter-spacing: -0.02em;\n  width: fit-content;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0.3rem;\n}\n\n.ModalOnOff {\n  font-family: \"Pretendard\", serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 0.675rem;\n  line-height: 150%;\n  letter-spacing: -0.02em;\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n  float: right;\n  color: #626262;\n  width: 3.43125rem;\n  height: 1.40625rem;\n  border: 0.04rem solid #DDDDDD;\n  border-radius: 2.25rem;\n}\n\n.ModalDescription {\n  font-family: \"Pretendard\", serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 0.8rem;\n  line-height: 150%;\n  letter-spacing: -0.02em;\n  color: #7b7b7b;\n  width: fit-content;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0.5rem;\n}\n\n.WidgetContainer {\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  height: 100%;\n  width: 100%;\n  z-index: 1000;\n}\n\n.MsgContainer {\n  background-color: #f5f5f5;\n  width: 20.8125rem;\n  height: 38.25rem;\n  bottom: 100px;\n  right: 3rem;\n  position: absolute;\n  border-radius: 10px;\n  box-shadow: 0 4px 26px rgba(201, 201, 201, 0.25);\n  z-index: 1001;\n}");

var OpenLogo = (React__namespace.createElement("svg", { width: "100%", height: "100%", viewBox: "0 0 128 128", preserveAspectRatio: "none", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    React__namespace.createElement("g", { filter: "url(#filter0_d_209_338)" },
        React__namespace.createElement("path", { d: "M102 60C102 80.9868 84.9868 98 64 98C43.0132 98 26 80.9868 26 60C26 39.0132 43.0132 22 64 22C84.9868 22 102 39.0132 102 60Z", fill: "url(#paint0_linear_209_338)" }),
        React__namespace.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M73.8372 61.9006C73.4524 61.9103 73.0696 61.8429 72.7113 61.7023C72.353 61.5617 72.0265 61.3508 71.751 61.0821C71.4755 60.8133 71.2565 60.4921 71.1071 60.1374C70.9577 59.7828 70.8807 59.4017 70.8809 59.0169C70.881 58.632 70.9582 58.251 71.1078 57.8964C71.2575 57.5418 71.4766 57.2208 71.7523 56.9522C72.028 56.6836 72.3547 56.4729 72.7131 56.3326C73.0715 56.1922 73.4543 56.1251 73.8391 56.135C74.5909 56.1544 75.3054 56.4668 75.8302 57.0055C76.355 57.5442 76.6486 58.2666 76.6484 59.0187C76.6481 59.7708 76.3541 60.493 75.8289 61.0314C75.3037 61.5698 74.589 61.8817 73.8372 61.9006ZM64.6234 61.9006C64.2384 61.9103 63.8554 61.8428 63.4968 61.7022C63.1383 61.5615 62.8116 61.3505 62.5359 61.0815C62.2602 60.8126 62.0411 60.4912 61.8916 60.1363C61.7421 59.7814 61.6651 59.4001 61.6652 59.015C61.6653 58.6298 61.7426 58.2486 61.8923 57.8938C62.0421 57.539 62.2614 57.2177 62.5372 56.949C62.8131 56.6802 63.14 56.4694 63.4986 56.329C63.8572 56.1885 64.2403 56.1213 64.6253 56.1313C65.3776 56.1507 66.0926 56.4632 66.6178 57.0023C67.1429 57.5414 67.4367 58.2643 67.4365 59.0169C67.4362 59.7694 67.142 60.4921 66.6165 61.0309C66.091 61.5696 65.3758 61.8817 64.6234 61.9006ZM55.4078 61.9006C55.023 61.9103 54.6402 61.8429 54.2819 61.7023C53.9236 61.5617 53.5971 61.3508 53.3216 61.0821C53.0461 60.8133 52.8272 60.4921 52.6777 60.1374C52.5283 59.7828 52.4514 59.4017 52.4515 59.0169C52.4516 58.632 52.5288 58.251 52.6784 57.8964C52.8281 57.5418 53.0473 57.2208 53.3229 56.9522C53.5986 56.6836 53.9253 56.4729 54.2837 56.3326C54.6421 56.1922 55.0249 56.1251 55.4097 56.135C56.1615 56.1544 56.876 56.4668 57.4008 57.0055C57.9256 57.5442 58.2192 58.2666 58.219 59.0187C58.2187 59.7708 57.9247 60.493 57.3995 61.0314C56.8744 61.5698 56.1597 61.8817 55.4078 61.9006ZM64.4997 40.8125C53.5628 40.8125 44.6641 48.9012 44.6641 58.8444C44.6641 63.1006 46.4641 68.8925 51.4778 72.6313L50.8872 78.8075C50.865 79.0351 50.9052 79.2644 51.0034 79.4709C51.1016 79.6774 51.2542 79.8533 51.4448 79.9797C51.6353 80.1061 51.8567 80.1783 52.0852 80.1885C52.3136 80.1986 52.5405 80.1465 52.7416 80.0375L59.1747 76.5763C59.9753 76.6588 62.3266 76.8763 64.4997 76.8763C75.4366 76.8763 84.3353 68.7875 84.3353 58.8444C84.3353 48.9012 75.4366 40.8125 64.4997 40.8125Z", fill: "white" })),
    React__namespace.createElement("defs", null,
        React__namespace.createElement("filter", { id: "filter0_d_209_338", x: "0", y: "0", width: "128", height: "128", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
            React__namespace.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
            React__namespace.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
            React__namespace.createElement("feOffset", { dy: "4" }),
            React__namespace.createElement("feGaussianBlur", { stdDeviation: "13" }),
            React__namespace.createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
            React__namespace.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.554167 0 0 0 0 0.554167 0 0 0 0 0.554167 0 0 0 0.25 0" }),
            React__namespace.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow_209_338" }),
            React__namespace.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow_209_338", result: "shape" })),
        React__namespace.createElement("linearGradient", { id: "paint0_linear_209_338", x1: "31.5", y1: "63.5", x2: "110", y2: "52.5", gradientUnits: "userSpaceOnUse" },
            React__namespace.createElement("stop", { stopColor: "#2F80ED" }),
            React__namespace.createElement("stop", { offset: "0.0001", stopColor: "#2F80ED" }),
            React__namespace.createElement("stop", { offset: "1", stopColor: "#70A0E0" })))));
var CloseLogo = (React__namespace.createElement("svg", { width: "100%", height: "100%", viewBox: "0 0 128 128", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    React__namespace.createElement("g", { filter: "url(#filter0_d_209_339)" },
        React__namespace.createElement("path", { d: "M102 60C102 80.9868 84.9868 98 64 98C43.0132 98 26 80.9868 26 60C26 39.0132 43.0132 22 64 22C84.9868 22 102 39.0132 102 60Z", fill: "url(#paint0_linear_209_339)" }),
        React__namespace.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M52.5246 55.2188C52.5246 54.73 52.7158 54.2413 53.0771 53.8588C53.4355 53.5019 53.9207 53.3016 54.4264 53.3016C54.9322 53.3016 55.4174 53.5019 55.7758 53.8588L63.9996 62.0825L72.2021 53.8588C72.5605 53.5019 73.0457 53.3016 73.5514 53.3016C74.0572 53.3016 74.5424 53.5019 74.9008 53.8588C75.2577 54.2172 75.458 54.7024 75.458 55.2081C75.458 55.7139 75.2577 56.1991 74.9008 56.5575L65.3383 66.12C64.9799 66.4769 64.4947 66.6772 63.9889 66.6772C63.4832 66.6772 62.998 66.4769 62.6396 66.12L53.0771 56.5575C52.7158 56.1963 52.5246 55.7075 52.5246 55.2188Z", fill: "white" })),
    React__namespace.createElement("defs", null,
        React__namespace.createElement("filter", { id: "filter0_d_209_339", x: "0", y: "0", width: "128", height: "128", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
            React__namespace.createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
            React__namespace.createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
            React__namespace.createElement("feOffset", { dy: "4" }),
            React__namespace.createElement("feGaussianBlur", { stdDeviation: "13" }),
            React__namespace.createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
            React__namespace.createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.554167 0 0 0 0 0.554167 0 0 0 0 0.554167 0 0 0 0.25 0" }),
            React__namespace.createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow_209_339" }),
            React__namespace.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow_209_339", result: "shape" })),
        React__namespace.createElement("linearGradient", { id: "paint0_linear_209_339", x1: "31.5", y1: "63.5", x2: "110", y2: "52.5", gradientUnits: "userSpaceOnUse" },
            React__namespace.createElement("stop", { stopColor: "#2F80ED" }),
            React__namespace.createElement("stop", { offset: "0.0001", stopColor: "#2F80ED" }),
            React__namespace.createElement("stop", { offset: "1", stopColor: "#70A0E0" })))));
var HeaderLogo = (React__namespace.createElement("svg", { width: "100%", height: "100%", viewBox: "0 0 22 22", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    React__namespace.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.9799 11.747C15.7747 11.7522 15.5705 11.7162 15.3794 11.6412C15.1883 11.5662 15.0142 11.4538 14.8673 11.3104C14.7203 11.1671 14.6035 10.9958 14.5238 10.8066C14.4441 10.6175 14.4031 10.4143 14.4032 10.209C14.4033 10.0037 14.4444 9.80053 14.5242 9.61141C14.6041 9.4223 14.7209 9.25107 14.868 9.10783C15.015 8.96459 15.1892 8.85223 15.3804 8.77738C15.5715 8.70253 15.7757 8.6667 15.9809 8.672C16.3819 8.68236 16.7629 8.84895 17.0428 9.13627C17.3227 9.42358 17.4793 9.80888 17.4792 10.21C17.4791 10.6111 17.3222 10.9963 17.0421 11.2834C16.7621 11.5706 16.3809 11.7369 15.9799 11.747ZM11.0659 11.747C10.8606 11.7522 10.6563 11.7162 10.465 11.6412C10.2738 11.5661 10.0996 11.4536 9.95254 11.3102C9.8055 11.1667 9.68866 10.9953 9.60891 10.806C9.52916 10.6167 9.48811 10.4134 9.48817 10.208C9.48824 10.0026 9.52943 9.79927 9.6093 9.61003C9.68917 9.42079 9.80612 9.24945 9.95325 9.10612C10.1004 8.96279 10.2747 8.85036 10.466 8.77546C10.6572 8.70055 10.8616 8.6647 11.0669 8.67C11.4681 8.68036 11.8495 8.84706 12.1295 9.13457C12.4096 9.42207 12.5663 9.80761 12.5662 10.209C12.566 10.6104 12.4091 10.9958 12.1288 11.2831C11.8486 11.5704 11.4671 11.7369 11.0659 11.747ZM6.1509 11.747C5.94569 11.7522 5.74152 11.7162 5.55043 11.6412C5.35934 11.5662 5.18519 11.4538 5.03825 11.3104C4.89131 11.1671 4.77455 10.9958 4.69485 10.8066C4.61515 10.6175 4.57412 10.4143 4.57419 10.209C4.57425 10.0037 4.61541 9.80053 4.69524 9.61141C4.77506 9.4223 4.89193 9.25107 5.03897 9.10783C5.186 8.96459 5.36022 8.85223 5.55136 8.77738C5.7425 8.70253 5.94669 8.6667 6.1519 8.672C6.55288 8.68236 6.93395 8.84895 7.21384 9.13627C7.49374 9.42358 7.65032 9.80888 7.65019 10.21C7.65006 10.6111 7.49323 10.9963 7.21314 11.2834C6.93306 11.5706 6.55188 11.7369 6.1509 11.747ZM10.9999 0.5C5.1669 0.5 0.420898 4.814 0.420898 10.117C0.420898 12.387 1.3809 15.476 4.0549 17.47L3.7399 20.764C3.72807 20.8854 3.7495 21.0077 3.80189 21.1178C3.85427 21.228 3.93565 21.3218 4.03728 21.3892C4.13891 21.4566 4.25698 21.4951 4.37881 21.5005C4.50065 21.5059 4.62167 21.4781 4.7289 21.42L8.1599 19.574C8.5869 19.618 9.8409 19.734 10.9999 19.734C16.8329 19.734 21.5789 15.42 21.5789 10.117C21.5789 4.814 16.8329 0.5 10.9999 0.5Z", fill: "#2F80ED" })));
var OnCircle = (React__namespace.createElement("svg", { width: "4", height: "5", viewBox: "0 0 4 5", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    React__namespace.createElement("circle", { cx: "2", cy: "2.5", r: "2", fill: "#71E07C" })));
var OffCircle = (React__namespace.createElement("svg", { width: "4", height: "5", viewBox: "0 0 4 5", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    React__namespace.createElement("circle", { cx: "2", cy: "2.5", r: "2", fill: "#DDDDDD" })));
var ModalCloseButton = (React__namespace.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    React__namespace.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.8151 12.0001L19.4661 6.34912C19.5775 6.23769 19.666 6.1054 19.7264 5.95978C19.7867 5.81417 19.8178 5.6581 19.8179 5.50047C19.8179 5.34284 19.7869 5.18675 19.7266 5.0411C19.6664 4.89546 19.578 4.76311 19.4666 4.65162C19.3551 4.54013 19.2228 4.45167 19.0772 4.39131C18.9316 4.33094 18.7755 4.29985 18.6179 4.2998C18.4603 4.29976 18.3042 4.33076 18.1585 4.39104C18.0129 4.45132 17.8805 4.53969 17.7691 4.65112L12.1181 10.3031L6.46605 4.65112C6.23841 4.43849 5.93706 4.32263 5.62561 4.32799C5.31416 4.33335 5.01698 4.4595 4.79678 4.67983C4.57658 4.90015 4.4506 5.19741 4.44543 5.50887C4.44026 5.82032 4.5563 6.1216 4.76905 6.34912L10.4211 12.0001L4.76905 17.6511C4.60201 17.8193 4.48843 18.0331 4.4426 18.2657C4.39677 18.4983 4.42073 18.7392 4.51147 18.9582C4.60221 19.1772 4.75568 19.3645 4.95258 19.4965C5.14947 19.6285 5.381 19.6994 5.61805 19.7001C5.92505 19.7001 6.23205 19.5831 6.46605 19.3491L12.1181 13.6971L17.7691 19.3491C17.8803 19.4608 18.0126 19.5494 18.1582 19.6098C18.3038 19.6703 18.4599 19.7014 18.6176 19.7014C18.7752 19.7014 18.9313 19.6703 19.0769 19.6098C19.2225 19.5494 19.3548 19.4608 19.4661 19.3491C19.5776 19.2377 19.6661 19.1053 19.7265 18.9596C19.7869 18.814 19.818 18.6578 19.818 18.5001C19.818 18.3424 19.7869 18.1863 19.7265 18.0406C19.6661 17.8949 19.5776 17.7626 19.4661 17.6511L13.8151 12.0001Z", fill: "#626262" })));

var HostProfileModal = function (_a) {
    var setModalOpen = _a.setModalOpen, status = _a.status;
    var client = React.useContext(Client);
    var onCloseModal = function () {
        setModalOpen(false);
    };
    return (React__namespace.createElement("div", { className: 'Modal', onClick: onCloseModal },
        React__namespace.createElement("div", { className: 'ModalContainer' },
            React__namespace.createElement("div", { className: 'ModalCloseButton', onClick: onCloseModal }, ModalCloseButton),
            React__namespace.createElement("div", { className: 'ModalProfileImg' },
                React__namespace.createElement("img", { src: client === null || client === void 0 ? void 0 : client.profileImage, alt: '유저 프로필' })),
            React__namespace.createElement("div", { className: 'ModalServiceName' }, client === null || client === void 0 ? void 0 : client.serviceName),
            React__namespace.createElement("div", { className: 'ModalOnOff' },
                status ? OnCircle : OffCircle,
                status ? '온라인' : '오프라인'),
            React__namespace.createElement("div", { className: 'ModalDescription' }, client === null || client === void 0 ? void 0 : client.description))));
};

var MsgContainerHeader = function () {
    var client = React.useContext(Client);
    var _a = React.useState(false), modalOpen = _a[0], setModalOpen = _a[1];
    var _b = React.useState(false), isOnline = _b[0], setIsOnline = _b[1];
    var onShowModal = function () {
        var _a;
        var statusNode = (_a = document.querySelector('.MsgContainerHeaderOnOff')) === null || _a === void 0 ? void 0 : _a.childNodes[1];
        setIsOnline((statusNode === null || statusNode === void 0 ? void 0 : statusNode.nodeValue) === '온라인');
        setModalOpen(!modalOpen);
    };
    return (React__namespace.createElement(React__namespace.Fragment, null,
        React__namespace.createElement("div", { className: 'MsgContainerHeader' },
            React__namespace.createElement("div", { className: 'MsgContainerHeaderLogo' }, HeaderLogo),
            React__namespace.createElement("div", { className: 'MsgContainerHeaderContent' },
                React__namespace.createElement("div", { className: 'MsgContainerHeaderText', onClick: onShowModal },
                    (client === null || client === void 0 ? void 0 : client.configs.useOnlineStatus) && (React__namespace.createElement("div", { className: 'MsgContainerHeaderOnOff' },
                        OnCircle,
                        "\uC628\uB77C\uC778")), client === null || client === void 0 ? void 0 :
                    client.serviceName)),
            React__namespace.createElement("div", { className: 'MsgContainerHeaderMenu' })),
        modalOpen && (React__namespace.createElement(HostProfileModal, { setModalOpen: setModalOpen, status: isOnline }))));
};

var MsgContainerFooter = function (_a) {
    var roomName = _a.roomName, socketClient = _a.socketClient;
    var _b = React.useState(), message = _b[0], setMessage = _b[1];
    var _c = React.useState(false), hasValue = _c[0], setHasValue = _c[1];
    var onChangeMsgValue = function (e) {
        setMessage(e.target.value);
        if (e.target.value.length !== 0)
            setHasValue(true);
        else
            setHasValue(false);
    };
    var onSendMsg = function () {
        if ((message === null || message === void 0 ? void 0 : message.trim()) !== '') {
            socketClient === null || socketClient === void 0 ? void 0 : socketClient.sendMessage(message);
        }
        setMessage('');
        setHasValue(false);
    };
    var btnTextColor = {
        color: hasValue ? '#2F80ED' : '#A7A7A7',
    };
    var onKeyPress = function (e) {
        if (e.nativeEvent.isComposing)
            return;
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            if (hasValue && roomName != null && socketClient != null) {
                onSendMsg();
            }
        }
    };
    return (React__namespace.createElement("div", { className: 'MsgContainerFooter' },
        React__namespace.createElement("div", { className: 'MsgContainerFooterTextBox' },
            React__namespace.createElement("div", { className: 'MsgContainerFooterText' },
                React__namespace.createElement("textarea", { value: message, onKeyDown: onKeyPress, onChange: onChangeMsgValue, placeholder: '메시지 작성하기' })),
            React__namespace.createElement("div", { className: 'MsgContainerFooterSendBtn', onClick: hasValue && roomName != null && socketClient != null
                    ? onSendMsg
                    : undefined, style: btnTextColor }, "\uC804\uC1A1"))));
};

var MsgContainerMain = function (_a) {
    var socketClient = _a.socketClient;
    var targetRef = React.useRef(null);
    React.useEffect(function () {
        var observer = null;
        if (socketClient !== null) {
            observer = new IntersectionObserver(function (entries) {
                if (entries[0].isIntersecting && socketClient.getIsInitialized()) {
                    console.log('Intersection detected!');
                    socketClient.requestPastMessages();
                }
            }, { threshold: 0.5 });
            observer.observe(targetRef.current);
        }
    }, [socketClient]);
    return (React__namespace.createElement("div", { className: 'MsgContainerMain' },
        React__namespace.createElement("div", { style: {
                width: '100%',
                height: '0.3rem',
            }, ref: targetRef }),
        React__namespace.createElement("div", { className: 'MsgContainerMainDate' }, "3/15(\uC218)")));
};

var setCookie = function (name, value, exp) {
    var date = new Date();
    date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
    document.cookie =
        name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
};
var getCookie = function (name) {
    var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value != null ? value[2] : null;
};
var deleteCookie = function (name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
};

var SocketClient = /** @class */ (function () {
    function SocketClient(cookie, client, setRoomName) {
        this.cookie = cookie;
        this.uuid = client === null || client === void 0 ? void 0 : client.uuid;
        this.useOnlineStatus = client === null || client === void 0 ? void 0 : client.configs.useOnlineStatus;
        this.client = client;
        this.clientSocket = null;
        this.statusSocket = null;
        this.oldestMsgDatetime = null;
        this.appendBack = true;
        this.isInitialized = false;
        this.msgHeight = 0;
        this.setRoomName = setRoomName;
    }
    SocketClient.prototype.connect = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var root;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        root = (_a = document.querySelector('.MsgContainerMain')) !== null && _a !== void 0 ? _a : document.createElement('div');
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                _this.clientSocket = new WebSocket("wss://api.pintalk.app/ws/chat/".concat(_this.cookie, "/"));
                                // open event
                                _this.clientSocket.addEventListener('open', function () {
                                    console.log('Socket connected');
                                    console.log(_this.name);
                                    resolve();
                                });
                                _this.clientSocket.addEventListener('error', function (error) {
                                    reject(error);
                                });
                                _this.clientSocket.addEventListener('close', function (event) {
                                    _this.clientSocket = null;
                                    if (event.code === 4004) {
                                        var msg = '호스트에 의해 채팅이 삭제되었습니다. 새로운 대화를 시작하시려면 아래 버튼을 눌러주세요.';
                                        var dateTime = _this.formatTimeStamp(_this.getDatetime());
                                        var deleteMsgContainer = _this.createElement(true, dateTime, msg);
                                        var roomCreateBtn = document.createElement('div');
                                        roomCreateBtn.className = 'RoomCreateBtn';
                                        roomCreateBtn.innerHTML = '새 채팅방 생성하기';
                                        var secondChild = deleteMsgContainer.childNodes[1];
                                        secondChild.appendChild(roomCreateBtn);
                                        root.appendChild(deleteMsgContainer);
                                        roomCreateBtn.addEventListener('click', function () {
                                            if (getCookie('pintalk')) {
                                                deleteCookie('pintalk');
                                                var roomName = getCookie('pintalk');
                                                _this.setRoomName(roomName);
                                                var createdNewChat = document.createElement('div');
                                                createdNewChat.className = 'CreateNewChat';
                                                createdNewChat.innerHTML =
                                                    '새로운 채팅방이 생성되었어요. 메시지를 보내 보세요!';
                                                root.appendChild(createdNewChat);
                                            }
                                        });
                                    }
                                    console.log('client Socket disconnected', event.wasClean, event.code, event.reason);
                                });
                                _this.clientSocket.addEventListener('message', function (event) {
                                    var data = JSON.parse(event.data);
                                    if (data.data) {
                                        // 다중 메시지
                                        var items = data.data;
                                        items.forEach(function (item) {
                                            var msgContainer = _this.createMsgBox(item);
                                            if (_this.appendBack) {
                                                // 초기 소켓 연결 시 메시지 수신하는 경우
                                                if (_this.oldestMsgDatetime === null)
                                                    _this.oldestMsgDatetime = item.datetime;
                                                console.log(_this.appendBack);
                                                root.appendChild(msgContainer);
                                                root.scrollTop = root.scrollHeight;
                                            }
                                            else {
                                                // request 로 과거 메시지 수신하는 경우
                                                _this.oldestMsgDatetime = item.datetime;
                                                var base = root.firstChild;
                                                if (base) {
                                                    root.insertBefore(msgContainer, base.nextSibling);
                                                    _this.msgHeight = _this.msgHeight + msgContainer.offsetHeight;
                                                    root.scrollTop = _this.msgHeight;
                                                }
                                            }
                                        });
                                        _this.isInitialized = true;
                                        _this.appendBack = true;
                                        _this.msgHeight = 0;
                                    }
                                    else {
                                        // 단일 메시지 - undefined
                                        var msgContainer = _this.createMsgBox(data);
                                        console.log(_this.appendBack);
                                        if (_this.appendBack) {
                                            console.log(_this.appendBack);
                                            root.appendChild(msgContainer);
                                            root.scrollTop = root.scrollHeight;
                                        }
                                    }
                                });
                                if (_this.uuid !== undefined && _this.useOnlineStatus === true) {
                                    _this.statusSocket = new WebSocket("wss://api.pintalk.app/ws/status/".concat(_this.uuid, "/"));
                                    _this.statusSocket.addEventListener('open', function () {
                                        console.log('status socket opened');
                                    });
                                    _this.statusSocket.addEventListener('error', function (error) {
                                        reject(error);
                                    });
                                    _this.statusSocket.addEventListener('message', function (event) {
                                        var _a, _b, _c;
                                        var data = JSON.parse(event.data);
                                        console.log('status socket received:', data);
                                        var isOnline = data.message === 'online';
                                        var OnOff = (_a = document.querySelector('.MsgContainerHeaderOnOff')) !== null && _a !== void 0 ? _a : document.createElement('div');
                                        var textNode = OnOff.childNodes[1];
                                        textNode.nodeValue = isOnline ? '온라인' : '오프라인';
                                        var color = isOnline ? '#71E07C' : '#DDDDDD';
                                        (_b = OnOff.querySelector('svg circle')) === null || _b === void 0 ? void 0 : _b.setAttribute('fill', color);
                                        var ModalOnOff = document.querySelector('.ModalOnOff');
                                        (_c = ModalOnOff === null || ModalOnOff === void 0 ? void 0 : ModalOnOff.querySelector('svg circle')) === null || _c === void 0 ? void 0 : _c.setAttribute('fill', color);
                                    });
                                    _this.statusSocket.addEventListener('close', function (event) {
                                        _this.statusSocket = null;
                                        console.log('status Socket disconnected', event.wasClean, event.code, event.reason);
                                    });
                                }
                            })];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SocketClient.prototype.setAppendBack = function (appendBack) {
        this.appendBack = appendBack;
    };
    SocketClient.prototype.getIsInitialized = function () {
        return this.isInitialized;
    };
    SocketClient.prototype.createMsgBox = function (data) {
        var type = data.type;
        var isHost = data.is_host;
        var datetime = data.datetime;
        var timeStamp = this.formatTimeStamp(datetime);
        var msg = type === 'notice' && data.message === 'closed'
            ? '채팅이 종료되었습니다. 메시지를 전송하여 기존 대화를 다시 시작할 수 있습니다.'
            : data.message;
        var formatMsg = msg.replace(/\n/g, '<br/>');
        console.log('Socket received data:', data);
        return this.createElement(isHost, timeStamp, formatMsg);
    };
    SocketClient.prototype.createElement = function (isHost, timeStamp, msg) {
        var _a, _b;
        var msgContainer = document.createElement('div');
        var msgBox = document.createElement('div');
        msgContainer.className = isHost ? 'MsgContainerLeft' : 'MsgContainerRight';
        msgBox.innerHTML = msg;
        msgBox.className = isHost ? 'ReceivedMsgBox' : 'SendMsgBox';
        var msgTimeStamp = document.createElement('div');
        msgTimeStamp.className = 'MsgTimeStamp';
        var msgTimeStampText = document.createElement('div');
        msgTimeStamp.appendChild(msgTimeStampText);
        msgTimeStampText.innerHTML = timeStamp;
        if (msgBox.className === 'ReceivedMsgBox') {
            var hostProfile = document.createElement('div');
            hostProfile.className = 'HostProfileBox';
            var ProfileImg = document.createElement('img');
            ProfileImg.src =
                ((_a = this.client) === null || _a === void 0 ? void 0 : _a.profileImage) != null
                    ? (_b = this.client) === null || _b === void 0 ? void 0 : _b.profileImage
                    : 'https://www.figma.com/file/FfkwfY2NPbl4eufVPM5CLD/PinTalk_UI?node-id=209-209&t=jiqk5vYLsJX8R75e-4';
            hostProfile.appendChild(ProfileImg);
            msgContainer.appendChild(hostProfile);
            msgContainer.appendChild(msgBox);
            msgContainer.appendChild(msgTimeStamp);
        }
        else if (msgBox.className === 'SendMsgBox') {
            msgContainer.appendChild(msgTimeStamp);
            msgContainer.appendChild(msgBox);
        }
        return msgContainer;
    };
    SocketClient.prototype.getDatetime = function () {
        var now = new Date();
        now.setHours(now.getHours() + 9);
        return now.toISOString().substring(0, 19);
    };
    SocketClient.prototype.formatTimeStamp = function (datetime) {
        var date = new Date(datetime);
        // 시간을 12시간제로 변환
        var hours = date.getHours();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        var min = date.getMinutes().toString().length === 1
            ? '0' + date.getMinutes().toString()
            : date.getMinutes().toString();
        // 변환된 시간 문자열
        var timeString = "".concat(ampm, " ").concat(hours, ":").concat(min);
        return timeString;
    };
    SocketClient.prototype.sendMessage = function (data) {
        if (this.clientSocket != null &&
            this.clientSocket.readyState === WebSocket.OPEN) {
            var message = JSON.stringify({
                type: 'chat_message',
                is_host: false,
                message: data,
                datetime: this.getDatetime(),
            });
            console.log('Sending message:', message);
            this.clientSocket.send(message);
        }
        else {
            console.log('Socket is not connected');
        }
    };
    SocketClient.prototype.requestPastMessages = function () {
        if (this.clientSocket != null &&
            this.clientSocket.readyState === WebSocket.OPEN) {
            var oldest = this.oldestMsgDatetime;
            this.oldestMsgDatetime = null;
            if (oldest !== null) {
                this.appendBack = false;
                var message = JSON.stringify({
                    type: 'request',
                    is_host: false,
                    message: oldest,
                    datetime: this.getDatetime(),
                });
                console.log('Requesting past messages:', message);
                this.clientSocket.send(message);
            }
        }
        else {
            console.log('Socket is not connected');
        }
    };
    SocketClient.prototype.disconnect = function () {
        var _a, _b;
        if ((this.clientSocket !== null &&
            this.clientSocket.readyState === WebSocket.OPEN) ||
            (this.statusSocket !== null &&
                this.statusSocket.readyState === WebSocket.OPEN)) {
            (_a = this.clientSocket) === null || _a === void 0 ? void 0 : _a.close();
            (_b = this.statusSocket) === null || _b === void 0 ? void 0 : _b.close();
        }
    };
    return SocketClient;
}());

var MsgContainer = function () {
    var client = React.useContext(Client);
    var attr = React.useContext(Attribute);
    var _a = React.useState(getCookie('pintalk') != null ? getCookie('pintalk') : null), roomName = _a[0], setRoomName = _a[1];
    var _b = React.useState(null), socketClient = _b[0], setSocketClient = _b[1];
    console.log(client);
    var createChat = function () { return __awaiter(void 0, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios__default["default"].post('https://api.pintalk.app/api/chat/', {}, {
                            headers: {
                                Accept: 'application/json; version=1',
                                'X-PinTalk-Access-Key': attr === null || attr === void 0 ? void 0 : attr.accessKey,
                                'X-PinTalk-Secret-Key': attr === null || attr === void 0 ? void 0 : attr.secretKey,
                            },
                        })];
                case 1: return [2 /*return*/, _a.sent()];
                case 2:
                    error_1 = _a.sent();
                    console.log(error_1);
                    if (error_1.response.data.code === 401) {
                        throw new Error(error_1.response.data.detail);
                    }
                    throw new Error(error_1.response.data.detail);
                case 3: return [2 /*return*/];
            }
        });
    }); };
    React.useEffect(function () {
        if (roomName == null) {
            void createChat().then(function (r) { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (r != null) {
                        setCookie('pintalk', r.data.name, 7);
                        setRoomName(getCookie('pintalk'));
                    }
                    return [2 /*return*/];
                });
            }); });
        }
        // TODO: 스트릭트 모드
        var socketClientInstance = roomName != null ? new SocketClient(roomName, client, setRoomName) : null;
        void (socketClientInstance === null || socketClientInstance === void 0 ? void 0 : socketClientInstance.connect());
        setSocketClient(socketClientInstance);
        return function () {
            void (socketClientInstance === null || socketClientInstance === void 0 ? void 0 : socketClientInstance.disconnect());
        };
    }, [roomName]);
    return (React__namespace.createElement("div", { className: 'MsgContainer' },
        React__namespace.createElement(MsgContainerHeader, null),
        React__namespace.createElement(MsgContainerMain, { socketClient: socketClient }),
        React__namespace.createElement(MsgContainerFooter, { roomName: roomName, socketClient: socketClient })));
};

var WidgetContainer = function () {
    var _a = React.useState(false), widgetOpen = _a[0], setWidgetOpen = _a[1];
    var onShowMessageContainer = function () {
        setWidgetOpen(!widgetOpen);
    };
    return (React__namespace.createElement(React__namespace.Fragment, null,
        React__namespace.createElement("div", { className: 'WidgetContainer', onClick: onShowMessageContainer }, widgetOpen ? CloseLogo : OpenLogo),
        widgetOpen && React__namespace.createElement(MsgContainer, null)));
};

var Client = React__namespace.createContext(undefined);
var Attribute = React__namespace.createContext(undefined);
var App = function (obj) {
    var _a = React.useState(), client = _a[0], setClient = _a[1];
    var clientInit = function (obj) { return __awaiter(void 0, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios__default["default"].get('https://api.pintalk.app/api/users/client', {
                            headers: {
                                Accept: 'application/json; version=1',
                                'X-PinTalk-Access-Key': obj.accessKey,
                                'X-PinTalk-Secret-Key': obj.secretKey,
                            },
                        })];
                case 1: return [2 /*return*/, _a.sent()];
                case 2:
                    error_1 = _a.sent();
                    console.log(error_1);
                    if (error_1.response.data.code === 401) {
                        throw new Error(error_1.response.data.detail);
                    }
                    throw new Error(error_1.response.data.detail);
                case 3: return [2 /*return*/];
            }
        });
    }); };
    React.useEffect(function () {
        void clientInit(obj).then(function (r) {
            setClient(r.data);
        });
    }, []);
    return (React__namespace.createElement(Client.Provider, { value: client },
        React__namespace.createElement(Attribute.Provider, { value: obj },
            React__namespace.createElement(WidgetContainer, null))));
};

exports.Attribute = Attribute;
exports.Client = Client;
exports["default"] = App;
//# sourceMappingURL=index.js.map
