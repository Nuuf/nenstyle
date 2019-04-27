const fs = require('fs');
const uglifycss = require('uglifycss');
function fracsWidth(fracs, prefix, postfix) {
    let css = '';
    for (let i = 1; i <= fracs; ++i) {
        css += 
        `
            ${prefix}${i}-${fracs}${postfix} {
                width: ${100 / (fracs / i)}%;
            }
        `;
    }
    return css;
}
function paddMarginAll(val, prefix, postfix) {
    return (
        `
            ${prefix} .mt${postfix} {
                margin-top: ${val}px;
            }
            ${prefix} .mb${postfix} {
                margin-bottom: ${val}px;
            }
            ${prefix} .ml${postfix} {
                margin-left: ${val}px;
            }
            ${prefix} .mr${postfix} {
                margin-right: ${val}px;
            }
            ${prefix} .pt${postfix} {
                padding-top: ${val}px;
            }
            ${prefix} .pb${postfix} {
                padding-bottom: ${val}px;
            }
            ${prefix} .pl${postfix} {
                padding-left: ${val}px;
            }
            ${prefix} .pr${postfix} {
                padding-right: ${val}px;
            }
        `
    );
}
function paddMarginHalves(val, prefix, postfix) {
    return (
        `
            ${prefix} .pv${postfix} {
                padding-top: ${val}px;
                padding-bottom: ${val}px;
            }
            ${prefix} .ph${postfix} {
                padding-right: ${val}px;
                padding-left: ${val}px;
            }
            ${prefix} .mv${postfix} {
                margin-top: ${val}px;
                margin-bottom: ${val}px;
            }
            ${prefix} .mh${postfix} {
                margin-right: ${val}px;
                margin-left: ${val}px;
            }
        `
    );
}
function getCss() {
    const color = '#000';
    const backgroundColor = '#FFF';
    const borderColor = '#DDD';
    const buttonColor = '#000';
    const buttonBackgroundColor = '#EEE';
    const buttonBorderColor = '#CCC';
    const buttonHoverBackgroundColor = '#DDD';
    const buttonHoverColor = '#000';
    const buttonHoverBorderColor = '#000';
    const inputColor = '#000';
    const bigMargin = 24
    const smallMargin = bigMargin * 0.5;
    const borderRadius = 8;
    
    let css = 
    `
        html, body {
            margin: 0;
            font-family: 'Arial';
            font-size: 14px;
            color: ${color};
            background-color: ${backgroundColor};
        }
        .nen-container {
            position: relative;
            display: block;
            margin: 0;
            padding: ${smallMargin}px;
            font-size: 0;
            word-spacing: 0;
            letter-spacing: 0;
        }
        .nen-container > .row {
            position: relative;
            display: inline-block;
            box-sizing: border-box;
            font-size: initial;
            letter-spacing: initial;
            margin: 0;
            word-spacing: initial;
            width: 100%;
            border-bottom: 2px solid ${borderColor};
        }
        .nen-container > .row .row {
            position: relative;
            display: inline-block;
            box-sizing: border-box;
            font-size: initial;
            letter-spacing: initial;
            margin: 0;
            word-spacing: initial;
            width: 100%
        }
        .nen-container .row > .column {
            position: relative;
            display: block;
            margin: 0;
            box-sizing: border-box;
            float: left;
            height: 100%;
        }
        .nen-container > .row > .column {
            border-left: ${smallMargin}px solid ${borderColor};
        }
        .nen-container > .row > .column:first-child {
            border-left: 0;
        }
        .nen-container .row > .column .content {
            position: relative;
            padding: ${bigMargin}px;
        }
        .nen-container .content > * {
            position: relative;
            box-sizing: border-box;
            margin: ${bigMargin}px 0px;
        }
        .nen-container .row > .column .button {
            display: inline-block;
            border-color: ${buttonBorderColor};
            border-style: solid; 
            border-top-width: 1px;
            border-right-width: 3px;
            border-bottom-width: 1px;
            border-left-width: 3px;
            padding: ${smallMargin}px;
            outline: 0;
            background-color: ${buttonBackgroundColor};
            color: ${buttonColor};
            box-shadow: 0px 0px 5px 1px ${buttonBorderColor};
        }
        .nen-container .row > .column .button:hover {
            cursor: pointer;
            background-color: ${buttonHoverBackgroundColor};
            border-color: ${buttonHoverBorderColor};
            color: ${buttonHoverColor};
            box-shadow: 0px 0px 5px 1px ${buttonHoverBorderColor};
            border-right-width: 4px;
            border-left-width: 4px;
            transition: border 0.4s;
        }
        .nen-container .row > .column .input {
            display: block;
            border-color: ${borderColor};
            border-style: solid;
            border-width: 1px;
            border-bottom-width: 2px;
            border-top-width: 2px;
            padding: ${smallMargin}px;
            outline: 0;
            background-color: ${backgroundColor};
            color: ${inputColor};
            box-sizing: border-box;
        }
        .nen-container .row > .column .input:focus {
            border-color: ${color};
            transition: border-color 0.2s;
        }
        .nen-container .list {
            padding: 0;
            list-style-position: outside;
            display: block;
        }
        .nen-container .list .list {
            padding: ${smallMargin}px 0 ${smallMargin}px ${smallMargin}px;
        }
        .nen-container .list > li {
            margin-left: ${smallMargin + 4}px;
        }
        .nen-container .list.border {
            margin: ${smallMargin}px 0px;
            padding: ${smallMargin}px;
        }
        .nen-container .row.check input {
            margin: 0;
            width: 100%;
        }
        .nen-container .row.check label {
            width: 100%;
            text-align: center;
            display: block;
        }
        .nen-container .row.check.inl .content {
            display: table;
        }
        .nen-container .row.check.inl .content > * {
            display: table-cell;
            vertical-align: middle;
            width: auto;
            margin-right: ${bigMargin}px;
        }
        .nen-container .row > .column .m-rm {
            margin: 0;
        }
        .nen-container .row > .column .p-rm {
            padding: 0;
        }
        ${paddMarginAll(bigMargin, '.nen-container .row > .column', '')}
        ${paddMarginAll(smallMargin, '.nen-container .row > .column', '-half')}
        ${paddMarginAll(bigMargin * 2, '.nen-container .row > .column', '-double')}
        ${paddMarginAll(0, '.nen-container .row > .column', '-rm')}
        ${paddMarginHalves(0, '.nen-container .row > .column', '-rm')}
        .nen-container .row > .column .center, .nen-container > .row .center {
            display: block;
            float: none;
            margin-left: auto;
            margin-right: auto;
        }
        .nen-container .border {
            margin: ${bigMargin}px 0px;
            padding: ${smallMargin}px;
            border-color: ${borderColor};
            border-width: 1px;
            border-style: solid;
            border-bottom-width: 2px;
        }
        .nen-container .border.b2 {
            border-width: 2px;
            border-bottom-width: 3px;
        }
        .nen-container .border.b3 {
            border-width: 3px;
            border-bottom-width: 4px;
        }
        .nen-container .bt-rm {
            border-top: 0;
        }
        .nen-container .bb-rm {
            border-bottom: 0;
        }
        .nen-container .bl-rm {
            border-left: 0;
        }
        .nen-container .br-rm {
            border-right: 0;
        }
        .nen-container .round {
            border-radius: ${borderRadius}px;
        }
        .nen-container .row > .column .fill {
            width: 100%;
        }
        .nen-container .row > .column .fill-half {
            width: 50%;
        }
        .nen-container .row > .column .fill-third {
            width: 33.3333%;
        }
    `;
    css += fracsWidth(10, '.nen-container .column.x', 'th');
    css += fracsWidth(24, '.nen-container .column.x', 'th');
    css += 
    `
        @media (max-width: 800px) {
            .nen-container > .row > .column {
                width: 100%;
            }
        }
    `;
    return css;
}
fs.writeFile('./nenstyle.css', uglifycss.processString(getCss(), {maxLineLen: 500, expandVars: true}), error => {
    if (error) {
        console.log(error);
    } else {
        console.log('Generated CSS');
    }
});
