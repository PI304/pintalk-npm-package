/* eslint-disable */

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

Object.defineProperty(exports, '__esModule', {value: true});

var React = require('react');

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () {
                        return e[k];
                    }
                });
            }
        });
    }
    n['default'] = e;
    return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);

___$insertStyle('@font-face {\n  font-family: "Pretendard";\n  src: url("https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Medium.eot");\n  src: url("https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Medium.eot?#iefix") format("embedded-opentype"), url("https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Medium.woff2") format("woff2"), url("https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Medium.woff") format("woff"), url("https://cdn.jsdelivr.net/gh/webfontworld/pretendard/Pretendard-Medium.ttf") format("truetype");\n  font-display: swap;\n}\n.MsgContainerHeader {\n  background-color: #ffffff;\n  height: 8.8%;\n  top: 0;\n  left: 0;\n  box-shadow: 0 4px 4px rgba(222, 222, 222, 0.2);\n  border-radius: 10px 10px 0 0;\n}\n\n.MsgContainerHeaderLogo {\n  width: 15%;\n  display: flex;\n  justify-content: center;\n  height: 1.12rem;\n  align-items: center;\n  padding: 1.1rem 0 1.1rem 0;\n  float: left;\n}\n\n.MsgContainerHeaderContent {\n  width: 70%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  float: left;\n}\n\n.MsgContainerHeaderText {\n  font-family: "Pretendard", serif;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 1rem;\n  line-height: 150%;\n  letter-spacing: -0.02em;\n  text-align: center;\n  margin: 0 0.3rem 0 0;\n  color: #404040;\n}\n\n.MsgContainerHeaderOnOff {\n  font-family: "Pretendard", serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 0.675rem;\n  line-height: 150%;\n  letter-spacing: -0.02em;\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n  margin: 0 0 0 0.3rem;\n  float: right;\n  color: #626262;\n  width: 3.43125rem;\n  height: 1.40625rem;\n  border: 0.04rem solid #DDDDDD;\n  border-radius: 2.25rem;\n}\n\n.MsgContainerHeaderMenu {\n  width: 15%;\n  display: flex;\n  justify-content: center;\n  height: 1.12rem;\n  right: 0;\n  align-items: center;\n  padding: 1.1rem 0 1.1rem 0;\n  float: left;\n}\n\n.MsgContainerFooter {\n  background-color: #ffffff;\n  height: 15.2%;\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  box-shadow: 0 4px 4px rgba(222, 222, 222, 0.2);\n  border-radius: 0 0 10px 10px;\n}\n\n.MsgContainerFooterTextBox {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 1.0125rem 1.125rem;\n  padding: 0.675rem 1.0125rem;\n  border: 1.5px solid #8BB7F2;\n  border-radius: 1rem;\n}\n\n.MsgContainerFooterText {\n  font-family: "Pretendard", serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 0.8rem;\n  line-height: 150%;\n  letter-spacing: -0.02em;\n  color: #A7A7A7;\n  width: 90%;\n  float: left;\n  padding: 0 0.5rem 0 0;\n}\n.MsgContainerFooterText textarea {\n  width: 100%;\n  border: 0;\n  outline: none;\n  resize: none;\n}\n\n.MsgContainerFooterSendBtn {\n  font-family: "Pretendard", serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 0.8rem;\n  line-height: 150%;\n  letter-spacing: -0.02em;\n  width: 10%;\n  float: left;\n}\n.MsgContainerFooterSendBtn.false {\n  color: #A7A7A7;\n}\n.MsgContainerFooterSendBtn.true {\n  color: #2F80ED;\n}\n\n.MsgContainerMain {\n  width: 100%;\n  height: 76%;\n  text-align: center;\n}\n\n.MsgContainerMainDate {\n  font-family: "Pretendard", serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 0.5625rem;\n  line-height: 150%;\n  letter-spacing: -0.02em;\n  background-color: #ffffff;\n  padding: 0.225rem 0.675rem;\n  text-align: center;\n  border: 0.04rem solid #DDDDDD;\n  border-radius: 2.25rem;\n  color: #626262;\n  display: inline-block;\n  margin: 0.9rem auto 0.9rem auto;\n}\n\n.WidgetContainer {\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  height: 100%;\n  width: 100%;\n  z-index: 1000;\n}\n\n.MsgContainer {\n  background-color: #f5f5f5;\n  width: 20.8125rem;\n  height: 38.25rem;\n  bottom: 100px;\n  right: 3rem;\n  position: absolute;\n  border-radius: 10px;\n  box-shadow: 0 4px 26px rgba(201, 201, 201, 0.25);\n  z-index: 1001;\n}');

var OpenLogo = (React__namespace.createElement('svg', {
        width: '100%',
        height: '100%',
        viewBox: '0 0 128 128',
        preserveAspectRatio: 'none',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg'
    },
    React__namespace.createElement('g', {filter: 'url(#filter0_d_209_338)'},
        React__namespace.createElement('path', {
            d: 'M102 60C102 80.9868 84.9868 98 64 98C43.0132 98 26 80.9868 26 60C26 39.0132 43.0132 22 64 22C84.9868 22 102 39.0132 102 60Z',
            fill: 'url(#paint0_linear_209_338)'
        }),
        React__namespace.createElement('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M73.8372 61.9006C73.4524 61.9103 73.0696 61.8429 72.7113 61.7023C72.353 61.5617 72.0265 61.3508 71.751 61.0821C71.4755 60.8133 71.2565 60.4921 71.1071 60.1374C70.9577 59.7828 70.8807 59.4017 70.8809 59.0169C70.881 58.632 70.9582 58.251 71.1078 57.8964C71.2575 57.5418 71.4766 57.2208 71.7523 56.9522C72.028 56.6836 72.3547 56.4729 72.7131 56.3326C73.0715 56.1922 73.4543 56.1251 73.8391 56.135C74.5909 56.1544 75.3054 56.4668 75.8302 57.0055C76.355 57.5442 76.6486 58.2666 76.6484 59.0187C76.6481 59.7708 76.3541 60.493 75.8289 61.0314C75.3037 61.5698 74.589 61.8817 73.8372 61.9006ZM64.6234 61.9006C64.2384 61.9103 63.8554 61.8428 63.4968 61.7022C63.1383 61.5615 62.8116 61.3505 62.5359 61.0815C62.2602 60.8126 62.0411 60.4912 61.8916 60.1363C61.7421 59.7814 61.6651 59.4001 61.6652 59.015C61.6653 58.6298 61.7426 58.2486 61.8923 57.8938C62.0421 57.539 62.2614 57.2177 62.5372 56.949C62.8131 56.6802 63.14 56.4694 63.4986 56.329C63.8572 56.1885 64.2403 56.1213 64.6253 56.1313C65.3776 56.1507 66.0926 56.4632 66.6178 57.0023C67.1429 57.5414 67.4367 58.2643 67.4365 59.0169C67.4362 59.7694 67.142 60.4921 66.6165 61.0309C66.091 61.5696 65.3758 61.8817 64.6234 61.9006ZM55.4078 61.9006C55.023 61.9103 54.6402 61.8429 54.2819 61.7023C53.9236 61.5617 53.5971 61.3508 53.3216 61.0821C53.0461 60.8133 52.8272 60.4921 52.6777 60.1374C52.5283 59.7828 52.4514 59.4017 52.4515 59.0169C52.4516 58.632 52.5288 58.251 52.6784 57.8964C52.8281 57.5418 53.0473 57.2208 53.3229 56.9522C53.5986 56.6836 53.9253 56.4729 54.2837 56.3326C54.6421 56.1922 55.0249 56.1251 55.4097 56.135C56.1615 56.1544 56.876 56.4668 57.4008 57.0055C57.9256 57.5442 58.2192 58.2666 58.219 59.0187C58.2187 59.7708 57.9247 60.493 57.3995 61.0314C56.8744 61.5698 56.1597 61.8817 55.4078 61.9006ZM64.4997 40.8125C53.5628 40.8125 44.6641 48.9012 44.6641 58.8444C44.6641 63.1006 46.4641 68.8925 51.4778 72.6313L50.8872 78.8075C50.865 79.0351 50.9052 79.2644 51.0034 79.4709C51.1016 79.6774 51.2542 79.8533 51.4448 79.9797C51.6353 80.1061 51.8567 80.1783 52.0852 80.1885C52.3136 80.1986 52.5405 80.1465 52.7416 80.0375L59.1747 76.5763C59.9753 76.6588 62.3266 76.8763 64.4997 76.8763C75.4366 76.8763 84.3353 68.7875 84.3353 58.8444C84.3353 48.9012 75.4366 40.8125 64.4997 40.8125Z',
            fill: 'white'
        })),
    React__namespace.createElement('defs', null,
        React__namespace.createElement('filter', {
                id: 'filter0_d_209_338',
                x: '0',
                y: '0',
                width: '128',
                height: '128',
                filterUnits: 'userSpaceOnUse',
                colorInterpolationFilters: 'sRGB'
            },
            React__namespace.createElement('feFlood', {floodOpacity: '0', result: 'BackgroundImageFix'}),
            React__namespace.createElement('feColorMatrix', {
                in: 'SourceAlpha',
                type: 'matrix',
                values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
                result: 'hardAlpha'
            }),
            React__namespace.createElement('feOffset', {dy: '4'}),
            React__namespace.createElement('feGaussianBlur', {stdDeviation: '13'}),
            React__namespace.createElement('feComposite', {in2: 'hardAlpha', operator: 'out'}),
            React__namespace.createElement('feColorMatrix', {
                type: 'matrix',
                values: '0 0 0 0 0.554167 0 0 0 0 0.554167 0 0 0 0 0.554167 0 0 0 0.25 0'
            }),
            React__namespace.createElement('feBlend', {
                mode: 'normal',
                in2: 'BackgroundImageFix',
                result: 'effect1_dropShadow_209_338'
            }),
            React__namespace.createElement('feBlend', {
                mode: 'normal',
                in: 'SourceGraphic',
                in2: 'effect1_dropShadow_209_338',
                result: 'shape'
            })),
        React__namespace.createElement('linearGradient', {
                id: 'paint0_linear_209_338',
                x1: '31.5',
                y1: '63.5',
                x2: '110',
                y2: '52.5',
                gradientUnits: 'userSpaceOnUse'
            },
            React__namespace.createElement('stop', {stopColor: '#2F80ED'}),
            React__namespace.createElement('stop', {offset: '0.0001', stopColor: '#2F80ED'}),
            React__namespace.createElement('stop', {offset: '1', stopColor: '#70A0E0'})))));
var CloseLogo = (React__namespace.createElement('svg', {
        width: '100%',
        height: '100%',
        viewBox: '0 0 128 128',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg'
    },
    React__namespace.createElement('g', {filter: 'url(#filter0_d_209_339)'},
        React__namespace.createElement('path', {
            d: 'M102 60C102 80.9868 84.9868 98 64 98C43.0132 98 26 80.9868 26 60C26 39.0132 43.0132 22 64 22C84.9868 22 102 39.0132 102 60Z',
            fill: 'url(#paint0_linear_209_339)'
        }),
        React__namespace.createElement('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d: 'M52.5246 55.2188C52.5246 54.73 52.7158 54.2413 53.0771 53.8588C53.4355 53.5019 53.9207 53.3016 54.4264 53.3016C54.9322 53.3016 55.4174 53.5019 55.7758 53.8588L63.9996 62.0825L72.2021 53.8588C72.5605 53.5019 73.0457 53.3016 73.5514 53.3016C74.0572 53.3016 74.5424 53.5019 74.9008 53.8588C75.2577 54.2172 75.458 54.7024 75.458 55.2081C75.458 55.7139 75.2577 56.1991 74.9008 56.5575L65.3383 66.12C64.9799 66.4769 64.4947 66.6772 63.9889 66.6772C63.4832 66.6772 62.998 66.4769 62.6396 66.12L53.0771 56.5575C52.7158 56.1963 52.5246 55.7075 52.5246 55.2188Z',
            fill: 'white'
        })),
    React__namespace.createElement('defs', null,
        React__namespace.createElement('filter', {
                id: 'filter0_d_209_339',
                x: '0',
                y: '0',
                width: '128',
                height: '128',
                filterUnits: 'userSpaceOnUse',
                colorInterpolationFilters: 'sRGB'
            },
            React__namespace.createElement('feFlood', {floodOpacity: '0', result: 'BackgroundImageFix'}),
            React__namespace.createElement('feColorMatrix', {
                in: 'SourceAlpha',
                type: 'matrix',
                values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
                result: 'hardAlpha'
            }),
            React__namespace.createElement('feOffset', {dy: '4'}),
            React__namespace.createElement('feGaussianBlur', {stdDeviation: '13'}),
            React__namespace.createElement('feComposite', {in2: 'hardAlpha', operator: 'out'}),
            React__namespace.createElement('feColorMatrix', {
                type: 'matrix',
                values: '0 0 0 0 0.554167 0 0 0 0 0.554167 0 0 0 0 0.554167 0 0 0 0.25 0'
            }),
            React__namespace.createElement('feBlend', {
                mode: 'normal',
                in2: 'BackgroundImageFix',
                result: 'effect1_dropShadow_209_339'
            }),
            React__namespace.createElement('feBlend', {
                mode: 'normal',
                in: 'SourceGraphic',
                in2: 'effect1_dropShadow_209_339',
                result: 'shape'
            })),
        React__namespace.createElement('linearGradient', {
                id: 'paint0_linear_209_339',
                x1: '31.5',
                y1: '63.5',
                x2: '110',
                y2: '52.5',
                gradientUnits: 'userSpaceOnUse'
            },
            React__namespace.createElement('stop', {stopColor: '#2F80ED'}),
            React__namespace.createElement('stop', {offset: '0.0001', stopColor: '#2F80ED'}),
            React__namespace.createElement('stop', {offset: '1', stopColor: '#70A0E0'})))));
var HeaderLogo = (React__namespace.createElement('svg', {
        width: '100%',
        height: '100%',
        viewBox: '0 0 22 22',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg'
    },
    React__namespace.createElement('path', {
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        d: 'M15.9799 11.747C15.7747 11.7522 15.5705 11.7162 15.3794 11.6412C15.1883 11.5662 15.0142 11.4538 14.8673 11.3104C14.7203 11.1671 14.6035 10.9958 14.5238 10.8066C14.4441 10.6175 14.4031 10.4143 14.4032 10.209C14.4033 10.0037 14.4444 9.80053 14.5242 9.61141C14.6041 9.4223 14.7209 9.25107 14.868 9.10783C15.015 8.96459 15.1892 8.85223 15.3804 8.77738C15.5715 8.70253 15.7757 8.6667 15.9809 8.672C16.3819 8.68236 16.7629 8.84895 17.0428 9.13627C17.3227 9.42358 17.4793 9.80888 17.4792 10.21C17.4791 10.6111 17.3222 10.9963 17.0421 11.2834C16.7621 11.5706 16.3809 11.7369 15.9799 11.747ZM11.0659 11.747C10.8606 11.7522 10.6563 11.7162 10.465 11.6412C10.2738 11.5661 10.0996 11.4536 9.95254 11.3102C9.8055 11.1667 9.68866 10.9953 9.60891 10.806C9.52916 10.6167 9.48811 10.4134 9.48817 10.208C9.48824 10.0026 9.52943 9.79927 9.6093 9.61003C9.68917 9.42079 9.80612 9.24945 9.95325 9.10612C10.1004 8.96279 10.2747 8.85036 10.466 8.77546C10.6572 8.70055 10.8616 8.6647 11.0669 8.67C11.4681 8.68036 11.8495 8.84706 12.1295 9.13457C12.4096 9.42207 12.5663 9.80761 12.5662 10.209C12.566 10.6104 12.4091 10.9958 12.1288 11.2831C11.8486 11.5704 11.4671 11.7369 11.0659 11.747ZM6.1509 11.747C5.94569 11.7522 5.74152 11.7162 5.55043 11.6412C5.35934 11.5662 5.18519 11.4538 5.03825 11.3104C4.89131 11.1671 4.77455 10.9958 4.69485 10.8066C4.61515 10.6175 4.57412 10.4143 4.57419 10.209C4.57425 10.0037 4.61541 9.80053 4.69524 9.61141C4.77506 9.4223 4.89193 9.25107 5.03897 9.10783C5.186 8.96459 5.36022 8.85223 5.55136 8.77738C5.7425 8.70253 5.94669 8.6667 6.1519 8.672C6.55288 8.68236 6.93395 8.84895 7.21384 9.13627C7.49374 9.42358 7.65032 9.80888 7.65019 10.21C7.65006 10.6111 7.49323 10.9963 7.21314 11.2834C6.93306 11.5706 6.55188 11.7369 6.1509 11.747ZM10.9999 0.5C5.1669 0.5 0.420898 4.814 0.420898 10.117C0.420898 12.387 1.3809 15.476 4.0549 17.47L3.7399 20.764C3.72807 20.8854 3.7495 21.0077 3.80189 21.1178C3.85427 21.228 3.93565 21.3218 4.03728 21.3892C4.13891 21.4566 4.25698 21.4951 4.37881 21.5005C4.50065 21.5059 4.62167 21.4781 4.7289 21.42L8.1599 19.574C8.5869 19.618 9.8409 19.734 10.9999 19.734C16.8329 19.734 21.5789 15.42 21.5789 10.117C21.5789 4.814 16.8329 0.5 10.9999 0.5Z',
        fill: '#2F80ED'
    })));
var OnOffCircle = (React__namespace.createElement('svg', {
        width: '4',
        height: '5',
        viewBox: '0 0 4 5',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg'
    },
    React__namespace.createElement('circle', {cx: '2', cy: '2.5', r: '2', fill: '#71E07C'})));

var MsgContainerHeader = function () {
    return (React__namespace.createElement('div', {className: 'MsgContainerHeader'},
        React__namespace.createElement('div', {className: 'MsgContainerHeaderLogo'}, HeaderLogo),
        React__namespace.createElement('div', {className: 'MsgContainerHeaderContent'},
            React__namespace.createElement('div', {className: 'MsgContainerHeaderText'},
                React__namespace.createElement('div', {className: 'MsgContainerHeaderOnOff'},
                    OnOffCircle,
                    '\uC628\uB77C\uC778'),
                'PinTalk')),
        React__namespace.createElement('div', {className: 'MsgContainerHeaderMenu'})));
};

var MsgContainerFooter = function () {
    var _a = React.useState(), message = _a[0], setMessage = _a[1];
    var _b = React.useState('false'), hasValue = _b[0], setHasValue = _b[1];
    var onChangeMsgValue = function (e) {
        setMessage(e.target.value);
        if (e.target.value.length !== 0)
            setHasValue('true');
        else
            setHasValue('false');
    };
    var onSendMsg = function () {
    };
    return (React__namespace.createElement('div', {className: 'MsgContainerFooter'},
        React__namespace.createElement('div', {className: 'MsgContainerFooterTextBox'},
            React__namespace.createElement('div', {className: 'MsgContainerFooterText'},
                React__namespace.createElement('textarea', {
                    value: message,
                    onChange: onChangeMsgValue,
                    placeholder: '메시지 작성하기'
                })),
            React__namespace.createElement('div', {
                className: 'MsgContainerFooterSendBtn '.concat(hasValue),
                onClick: onSendMsg
            }, '\uC804\uC1A1'))));
};

var MsgContainerMain = function () {
    return (React__namespace.createElement('div', {className: 'MsgContainerMain'},
        React__namespace.createElement('span', {className: 'MsgContainerMainDate'}, '3/15(\uC218)')));
};

var MsgContainer = function () {
    return (React__namespace.createElement('div', {className: 'MsgContainer'},
        React__namespace.createElement(MsgContainerHeader, null),
        React__namespace.createElement(MsgContainerMain, null),
        React__namespace.createElement(MsgContainerFooter, null)));
};

var WidgetContainer = function () {
    var _a = React.useState(false), widgetOpen = _a[0], setWidgetOpen = _a[1];
    var onShowMessageContainer = function () {
        setWidgetOpen(!widgetOpen);
    };
    return (React__namespace.createElement(React__namespace.Fragment, null,
        React__namespace.createElement('div', {
            className: 'WidgetContainer',
            onClick: onShowMessageContainer
        }, widgetOpen ? CloseLogo : OpenLogo),
        widgetOpen && React__namespace.createElement(MsgContainer, null)));
};

var App = function (accessKey, secretKey) {
    var access = accessKey;
    var secret = secretKey;
    console.log(access, secret);
    return React__namespace.createElement(WidgetContainer, null);
};

exports['default'] = App;
//# sourceMappingURL=index.js.map
