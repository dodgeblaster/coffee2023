var J = Object.defineProperty,
    K = Object.defineProperties
var Q = Object.getOwnPropertyDescriptors
var z = Object.getOwnPropertySymbols
var V = Object.prototype.hasOwnProperty,
    Z = Object.prototype.propertyIsEnumerable
var c = (t, e, s) =>
        e in t
            ? J(t, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: s
              })
            : (t[e] = s),
    i = (t, e) => {
        for (var s in e || (e = {})) V.call(e, s) && c(t, s, e[s])
        if (z) for (var s of z(e)) Z.call(e, s) && c(t, s, e[s])
        return t
    },
    S = (t, e) => K(t, Q(e))
var d = (t, e, s) => (c(t, typeof e != 'symbol' ? e + '' : e, s), s)
function u(t) {
    return t.split('-')[0]
}
function _(t) {
    let e = Number(t.split('w-')[1])
    return 'width: '.concat(e * 4, 'px;')
}
function tt(t) {
    let e = Number(t.split('h-')[1])
    return 'height: '.concat(e * 4, 'px;')
}
function et(t) {
    let e = Number(t.split('p-')[1])
    return 'padding: '.concat(e * 4, 'px;')
}
function rt(t) {
    let e = Number(t.split('pt-')[1])
    return 'padding-top: '.concat(e * 4, 'px;')
}
function st(t) {
    let e = Number(t.split('pb-')[1])
    return 'padding-bottom: '.concat(e * 4, 'px;')
}
function nt(t) {
    let e = Number(t.split('pr-')[1])
    return 'padding-right: '.concat(e * 4, 'px;')
}
function at(t) {
    let e = Number(t.split('pl-')[1])
    return 'padding-left: '.concat(e * 4, 'px;')
}
function ot(t) {
    let e = Number(t.split('px-')[1])
    return 'padding-right: '
        .concat(e * 4, 'px; padding-left: ')
        .concat(e * 4, 'px;')
}
function it(t) {
    let e = Number(t.split('py-')[1])
    return 'padding-top: '
        .concat(e * 4, 'px; padding-bottom: ')
        .concat(e * 4, 'px;')
}
function lt(t) {
    let e = Number(t.split('m-')[1])
    return 'margin: '.concat(e * 4, 'px;')
}
function mt(t) {
    let e = Number(t.split('mt-')[1])
    return 'margin-top: '.concat(e * 4, 'px;')
}
function ct(t) {
    let e = Number(t.split('mb-')[1])
    return 'margin-bottom: '.concat(e * 4, 'px;')
}
function dt(t) {
    let e = Number(t.split('mr-')[1])
    return 'margin-right: '.concat(e * 4, 'px;')
}
function ut(t) {
    let e = Number(t.split('ml-')[1])
    return 'margin-left: '.concat(e * 4, 'px;')
}
function ft(t) {
    let e = Number(t.split('mx-')[1])
    return 'margin-right: '
        .concat(e * 4, 'px; margin-left: ')
        .concat(e * 4, 'px;')
}
function pt(t) {
    let e = Number(t.split('my-')[1])
    return 'margin-top: '
        .concat(e * 4, 'px; margin-bottom: ')
        .concat(e * 4, 'px;')
}
var $ = {
        w: (t) => _(t),
        h: (t) => tt(t),
        p: (t) => et(t),
        pt: (t) => rt(t),
        pb: (t) => st(t),
        pr: (t) => nt(t),
        pl: (t) => at(t),
        px: (t) => ot(t),
        py: (t) => it(t),
        m: (t) => lt(t),
        mt: (t) => mt(t),
        mb: (t) => ct(t),
        mr: (t) => dt(t),
        ml: (t) => ut(t),
        mx: (t) => ft(t),
        my: (t) => pt(t)
    },
    f = (t) => (u(t) && $[u(t)] ? $[u(t)](t) : !1),
    Y = {
        'w-full': 'width: 100%;',
        'w-screen': 'width: 100vw;',
        'w-min': 'width: min-content;',
        'w-max': 'width: max-content;',
        'w-1/2': 'width: 50%;',
        'w-1/3': 'width: 33.333333%;',
        'w-2/3': 'width: 66.666667%;',
        'w-1/4': 'width: 25%;',
        'w-2/4': 'width: 50%;',
        'w-3/4': 'width: 75%;',
        'w-0:': 'width: 0px;',
        'w-px': 'width: 1px;',
        'h-0': 'height: 0px;',
        'h-px': 'height: 1px;',
        'h-full': 'height: 100%;',
        'h-screen': 'height: 100vh;',
        'h-1/2': 'height: 50%;',
        'h-1/3': 'height: 33.333333%;',
        'h-2/3': 'height: 66.666667%;',
        'h-1/4': 'height: 25%;',
        'h-2/4': 'height: 50%;',
        'h-3/4': 'height: 75%;'
    }
var o = {
    transparent: 'transparent',
    black: '0 0 0',
    white: '255 255 255',
    'slate-50': '248 250 252',
    'slate-100': '241 245 249',
    'slate-200': '226 232 240',
    'slate-300': '203 213 225',
    'slate-400': '148 163 184',
    'slate-500': '100 116 139',
    'slate-600': '71 85 105',
    'slate-700': '51 65 85',
    'slate-800': '30 41 59',
    'slate-900': '15 23 42',
    'slate-950': '2 6 23',
    'gray-50': '249 250 251',
    'gray-100': '243 244 246',
    'gray-200': '229 231 235',
    'gray-300': '209 213 219',
    'gray-400': '156 163 175',
    'gray-500': '107 114 128',
    'gray-600': '75 85 99',
    'gray-700': '55 65 81',
    'gray-800': '31 41 55',
    'gray-900': '17 24 39',
    'gray-950': '3 7 18',
    'zinc-50': '250 250 250',
    'zinc-100': '244 244 245',
    'zinc-200': '228 228 231',
    'zinc-300': '212 212 216',
    'zinc-400': '161 161 170',
    'zinc-500': '113 113 122',
    'zinc-600': '82 82 91',
    'zinc-700': '63 63 70',
    'zinc-800': '39 39 42',
    'zinc-900': '24 24 27',
    'zinc-950': '9 9 11',
    'neutral-50': '250 250 250',
    'neutral-100': '245 245 245',
    'neutral-200': '229 229 229',
    'neutral-300': '212 212 212',
    'neutral-400': '163 163 163',
    'neutral-500': '115 115 115',
    'neutral-600': '82 82 82',
    'neutral-700': '64 64 64',
    'neutral-800': '38 38 38',
    'neutral-900': '23 23 23',
    'neutral-950': '10 10 10',
    'stone-50': '250 250 249',
    'stone-100': '245 245 244',
    'stone-200': '231 229 228',
    'stone-300': '214 211 209',
    'stone-400': '168 162 158',
    'stone-500': '120 113 108',
    'stone-600': '87 83 78',
    'stone-700': '68 64 60',
    'stone-800': '41 37 36',
    'stone-900': '28 25 23',
    'stone-950': '12 10 9',
    'red-50': '254 242 242',
    'red-100': '254 226 226',
    'red-200': '254 202 202',
    'red-300': '252 165 165',
    'red-400': '248 113 113',
    'red-500': '239 68 68',
    'red-600': '220 38 38',
    'red-700': '185 28 28',
    'red-800': '153 27 27',
    'red-900': '127 29 29',
    'red-950': '69 10 10',
    'orange-50': '255 247 237',
    'orange-100': '255 237 213',
    'orange-200': '254 215 170',
    'orange-300': '253 186 116',
    'orange-400': '251 146 60',
    'orange-500': '249 115 22',
    'orange-600': '234 88 12',
    'orange-700': '194 65 12',
    'orange-800': '154 52 18',
    'orange-900': '124 45 18',
    'orange-950': '67 20 7',
    'amber-50': '255 251 235',
    'amber-100': '254 243 199',
    'amber-200': '253 230 138',
    'amber-300': '252 211 77',
    'amber-400': '251 191 36',
    'amber-500': '245 158 11',
    'amber-600': '217 119 6',
    'amber-700': '180 83 9',
    'amber-800': '146 64 14',
    'amber-900': '120 53 15',
    'amber-950': '69 26 3',
    'yellow-50': '254 252 232',
    'yellow-100': '254 249 195',
    'yellow-200': '254 240 138',
    'yellow-300': '253 224 71',
    'yellow-400': '250 204 21',
    'yellow-500': '234 179 8',
    'yellow-600': '202 138 4',
    'yellow-700': '161 98 7',
    'yellow-800': '133 77 14',
    'yellow-900': '113 63 18',
    'yellow-950': '66 32 6',
    'lime-50': '247 254 231',
    'lime-100': '236 252 203',
    'lime-200': '217 249 157',
    'lime-300': "190 242 100':",
    'lime-400': '163 230 53',
    'lime-500': '132 204 22',
    'lime-600': '101 163 13',
    'lime-700': '77 124 15',
    'lime-800': '63 98 18',
    'lime-900': '54 83 20',
    'lime-950': '26 46 5',
    'green-50': '240 253 244',
    'green-100': '220 252 231',
    'green-200': '187 247 208',
    'green-300': '134 239 172',
    'green-400': '74 222 128',
    'green-500': '34 197 94',
    'green-600': '22 163 74',
    'green-700': '21 128 61',
    'green-800': '22 101 52',
    'green-900': '20 83 45',
    'green-950': '5 46 22',
    'emerald-50': '236 253 245',
    'emerald-100': '209 250 229',
    'emerald-200': '167 243 208',
    'emerald-300': '110 231 183',
    'emerald-400': '52 211 153',
    'emerald-500': '16 185 129',
    'emerald-600': '5 150 105',
    'emerald-700': '4 120 87',
    'emerald-800': '6 95 70',
    'emerald-900': '6 78 59',
    'emerald-950': '2 44 34',
    'teal-50': '240 253 250',
    'teal-100': '204 251 241',
    'teal-200': '153 246 228',
    'teal-300': '94 234 212',
    'teal-400': '45 212 191',
    'teal-500': '20 184 166',
    'teal-600': '13 148 136',
    'teal-700': '15 118 110',
    'teal-800': '17 94 89',
    'teal-900': '19 78 74',
    'teal-950': '4 47 46',
    'cyan-50': '236 254 255',
    'cyan-100': '207 250 254',
    'cyan-200': '165 243 252',
    'cyan-300': '103 232 249',
    'cyan-400': '34 211 238',
    'cyan-500': '6 182 212',
    'cyan-600': '8 145 178',
    'cyan-700': '14 116 144',
    'cyan-800': '21 94 117',
    'cyan-900': '22 78 99',
    'cyan-950': '8 51 68',
    'sky-50': '240 249 255',
    'sky-100': '224 242 254',
    'sky-200': '186 230 253',
    'sky-300': '125 211 252',
    'sky-400': '56 189 248',
    'sky-500': '14 165 233',
    'sky-600': '2 132 199',
    'sky-700': '3 105 161',
    'sky-800': '7 89 133',
    'sky-900': '12 74 110',
    'sky-950': '8 47 73',
    'blue-50': '239 246 255',
    'blue-100': '219 234 254',
    'blue-200': '191 219 254',
    'blue-300': '147 197 253',
    'blue-400': '96 165 250',
    'blue-500': '59 130 246',
    'blue-600': '37 99 235',
    'blue-700': '29 78 216',
    'blue-800': '30 64 175',
    'blue-900': '30 58 138',
    'blue-950': '23 37 84',
    'indigo-50': '238 242 255',
    'indigo-100': '224 231 255',
    'indigo-200': '199 210 254',
    'indigo-300': '165 180 252',
    'indigo-400': '129 140 248',
    'indigo-500': '99 102 241',
    'indigo-600': '79 70 229',
    'indigo-700': '67 56 202',
    'indigo-800': '55 48 163',
    'indigo-900': '49 46 129',
    'indigo-950': '30 27 75',
    'violet-50': '245 243 255',
    'violet-100': '237 233 254',
    'violet-200': '221 214 254',
    'violet-300': '196 181 253',
    'violet-400': '167 139 250',
    'violet-500': '139 92 246',
    'violet-600': '124 58 237',
    'violet-700': '109 40 217',
    'violet-800': '91 33 182',
    'violet-900': '76 29 149',
    'violet-950': '46 16 101',
    'purple-50': '250 245 255',
    'purple-100': '243 232 255',
    'purple-200': '233 213 255',
    'purple-300': '216 180 254',
    'purple-400': '192 132 252',
    'purple-500': '168 85 247',
    'purple-600': '147 51 234',
    'purple-700': '126 34 206',
    'purple-800': '107 33 168',
    'purple-900': '88 28 135',
    'purple-950': '59 7 100',
    'fuchsia-50': '253 244 255',
    'fuchsia-100': '250 232 255',
    'fuchsia-200': '245 208 254',
    'fuchsia-300': '240 171 252',
    'fuchsia-400': '232 121 249',
    'fuchsia-500': '217 70 239',
    'fuchsia-600': '192 38 211',
    'fuchsia-700': '162 28 175',
    'fuchsia-800': '134 25 143',
    'fuchsia-900': '112 26 117',
    'fuchsia-950': '74 4 78',
    'pink-50': '253 242 248',
    'pink-100': '252 231 243',
    'pink-200': '251 207 232',
    'pink-300': '249 168 212',
    'pink-400': '244 114 182',
    'pink-500': '236 72 153',
    'pink-600': '219 39 119',
    'pink-700': '190 24 93',
    'pink-800': '157 23 77',
    'pink-900': '131 24 67',
    'pink-950': '80 7 36',
    'rose-50': '255 241 242',
    'rose-100': '255 228 230',
    'rose-200': '254 205 211',
    'rose-300': '253 164 175',
    'rose-400': '251 113 133',
    'rose-500': '244 63 94',
    'rose-600': '225 29 72',
    'rose-700': '190 18 60',
    'rose-800': '159 18 57',
    'rose-900': '136 19 55',
    'rose-950': '76 5 25)'
}
var X = Object.keys(o).reduce(
    (t, e) => (
        (t['bg-'.concat(e)] =
            e === 'transparent'
                ? 'background-color: '.concat(o[e], ';')
                : 'background-color: rgb('.concat(o[e], ');')),
        t
    ),
    {}
)
var A = Object.keys(o).reduce(
    (t, e) => (
        (t['border-'.concat(e)] =
            e === 'transparent'
                ? 'border-color: '.concat(o[e], ';')
                : 'border-color: rgb('.concat(o[e], ');')),
        t
    ),
    {}
)
var M = {
    'rounded-none': 'border-radius: 0px;',
    'rounded-sm': 'border-radius: 0.125rem;',
    rounded: 'border-radius: 0.25rem;',
    'rounded-md': 'border-radius: 0.375rem;',
    'rounded-lg': 'border-radius: 0.5rem;',
    'rounded-xl': 'border-radius: 0.75rem; ',
    'rounded-2xl': 'border-radius: 1rem; ',
    'rounded-3xl': 'border-radius: 1.5rem; ',
    'rounded-full': 'border-radius: 9999px;',
    'border-0': 'border-width: 0px;',
    'border-2': 'border-width: 2px;',
    'border-4': 'border-width: 4px;',
    'border-8': 'border-width: 8px;',
    border: 'border-width: 1px; border-style: solid;',
    'border-solid': 'border-style: solid;',
    'border-dashed': 'border-style: dashed;',
    'border-dotted': 'border-style: dotted;',
    'border-double': 'border-style: double;',
    'border-hidden': 'border-style: hidden;',
    'border-none': 'border-style: none;'
}
var E = {
    'flex-row': 'flex-direction: row;',
    'flex-row-reverse': 'flex-direction: row-reverse;',
    'flex-col': 'flex-direction: column;',
    'flex-col-reverse': 'flex-direction: column-reverse;',
    'flex-wrap': 'flex-wrap: wrap;',
    'flex-wrap-reverse': 'flex-wrap: wrap-reverse;',
    'flex-nowrap': 'flex-wrap: nowrap;',
    'flex-1': 'flex: 1 1 0%;',
    'flex-auto': 'flex: 1 1 auto;',
    'flex-initial': 'flex: 0 1 auto;',
    'flex-none': 'flex: none;',
    'justify-normal': 'justify-content: normal;',
    'justify-start': 'justify-content: flex-start;',
    'justify-end': 'justify-content: flex-end;',
    'justify-center': 'justify-content: center;',
    'justify-between': 'justify-content: space-between;',
    'justify-around': 'justify-content: space-around;',
    'justify-evenly': 'justify-content: space-evenly;',
    'justify-stretch': 'justify-content: stretch;',
    'items-start': 'align-items: flex-start;',
    'items-end': 'align-items: flex-end;',
    'items-center': 'align-items: center;',
    'items-baseline': 'align-items: baseline;',
    'items-stretch': 'align-items: stretch;'
}
var C = {
    'text-xs': 'font-size: 0.75rem; line-height: 1rem;',
    'text-sm': 'font-size: 0.875rem; line-height: 1.25rem;',
    'text-base': 'font-size: 1rem; line-height: 1.5rem;',
    'text-lg': 'font-size: 1.125rem; line-height: 1.75rem;',
    'text-xl': 'font-size: 1.25rem; line-height: 1.75rem;',
    'text-2xl': 'font-size: 1.5rem; line-height: 2rem;',
    'text-3xl': 'font-size: 1.875rem; line-height: 2.25rem;',
    'text-4xl': 'font-size: 2.25rem; line-height: 2.5rem; ',
    'text-5xl': 'font-size: 3rem; line-height: 1;',
    'text-6xl': 'font-size: 3.75rem; line-height: 1;',
    'text-7xl': 'font-size: 4.5rem; line-height: 1;',
    'text-8xl': 'font-size: 6rem; line-height: 1;',
    'text-9xl': 'font-size: 8rem; line-height: 1;',
    italic: 'font-style: italic;',
    'not-italic': 'font-style: normal;',
    'font-thin': 'font-weight: 100;',
    'font-extralight': 'font-weight: 200;',
    'font-light': 'font-weight: 300;',
    'font-normal': 'font-weight: 400;',
    'font-medium': 'font-weight: 500;',
    'font-semibold': 'font-weight: 600;',
    'font-bold': 'font-weight: 700;',
    'font-extrabold': 'font-weight: 800;',
    'font-black': 'font-weight: 900;',
    'text-left': 'text-align: left;',
    'text-center': 'text-align: center;',
    'text-right': 'text-align: right;',
    'text-justify': 'text-align: justify;',
    'text-start': 'text-align: start;',
    'text-end': 'text-align: end;'
}
var j = {
    block: 'display: block;',
    'inline-block': 'display: inline-block;',
    inline: 'display: inline;',
    flex: 'display: flex;',
    'inline-flex': 'display: inline-flex;',
    'table	': 'display: table;',
    'inline-table': 'display: inline-table;',
    'table-caption': 'display: table-caption;',
    'table-cell': 'display: table-cell;',
    'table-column': 'display: table-column;',
    'table-column-group': 'display: table-column-group;',
    'table-footer-group': 'display: table-footer-group;',
    'table-header-group': 'display: table-header-group;',
    'table-row-group': 'display: table-row-group;',
    'table-row': 'display: table-row;',
    'flow-root': 'display: flow-root;',
    grid: 'display: grid;',
    'inline-grid': 'display: inline-grid;',
    contents: 'display: contents;',
    'list-item': 'display: list-item;',
    hidden: 'display: none;',
    'overflow-auto': 'overflow: auto;',
    'overflow-hidden': 'overflow: hidden;',
    'overflow-clip': 'overflow: clip;',
    'overflow-visible': 'overflow: visible;',
    'overflow-scroll': 'overflow: scroll;',
    'overflow-x-auto': 'overflow-x: auto;',
    'overflow-y-auto': 'overflow-y: auto;',
    'overflow-x-hidden': 'overflow-x: hidden;',
    'overflow-y-hidden': 'overflow-y: hidden;',
    'overflow-x-clip': 'overflow-x: clip;',
    'overflow-y-clip': 'overflow-y: clip;',
    'overflow-x-visible': 'overflow-x: visible;',
    'overflow-y-visible': 'overflow-y: visible;',
    'overflow-x-scroll': 'overflow-x: scroll;',
    'overflow-y-scroll': 'overflow-y: scroll;',
    static: 'position: static;',
    fixed: 'position: fixed;',
    absolute: 'position: absolute;',
    relative: 'position: relative;',
    sticky: 'position: sticky;',
    'top-0': 'top: 0px;',
    'right-0': 'right: 0px;',
    'bottom-0': 'bottom: 0px;',
    'left-0': 'left: 0px;',
    'z-0': 'z-index: 0;',
    'z-10': 'z-index: 10;',
    'z-20': 'z-index: 20;',
    'z-30': 'z-index: 30;',
    'z-40': 'z-index: 40;',
    'z-50': 'z-index: 50;',
    'z-auto': 'z-index: auto;'
}
var L = {
    'opacity-0': 'opacity: 0;',
    'opacity-10': 'opacity: 0.1;',
    'opacity-20': 'opacity: 0.2;',
    'opacity-25': 'opacity: 0.25;',
    'opacity-30': 'opacity: 0.3;',
    'opacity-40': 'opacity: 0.4;',
    'opacity-50': 'opacity: 0.5;',
    'opacity-60': 'opacity: 0.6;',
    'opacity-70': 'opacity: 0.7;',
    'opacity-75': 'opacity: 0.75;',
    'opacity-80': 'opacity: 0.8;',
    'opacity-90': 'opacity: 0.9;',
    'opacity-95': 'opacity: 0.95;',
    'opacity-100': 'opacity: 1;'
}
var H = Object.keys(o).reduce(
    (t, e) => (
        (t['text-'.concat(e)] =
            e === 'transparent'
                ? 'color: '.concat(o[e], ';')
                : 'color: rgb('.concat(o[e], ');')),
        t
    ),
    {}
)
var ht = Object.keys(o).reduce(
        (t, e) => (
            e !== 'transparent'
                ? ((t['from-'.concat(e)] =
                      '\n            --s-gradient-from: rgb('.concat(
                          o[e],
                          ');\n            --s-gradient-to: rgb(248 113 113 / 0);\n            --s-gradient-stops: var(--s-gradient-from), var(--s-gradient-to);\n        '
                      )),
                  (t['to-'.concat(e)] =
                      '\n            --s-gradient-to:  rgb('.concat(
                          o[e],
                          ');\n        '
                      )))
                : ((t['from-'.concat(e)] =
                      '\n            --s-gradient-from: transaprent;\n            --s-gradient-to: rgb(248 113 113 / 0);\n            --s-gradient-stops: var(--s-gradient-from), var(--s-gradient-to);\n        '),
                  (t['to-'.concat(e)] =
                      '\n            --s-gradient-to:  transparent;\n        ')),
            t
        ),
        {}
    ),
    N = S(i({}, ht), {
        'bg-gradient-to-r':
            'background-image: linear-gradient(to right, var(--s-gradient-stops));',
        'bg-gradient-to-t':
            'background-image: linear-gradient(to top, var(--s-gradient-stops));',
        'bg-gradient-to-tr':
            'background-image: linear-gradient(to top right, var(--s-gradient-stops));',
        'bg-gradient-to-tl':
            'background-image: linear-gradient(to top left, var(--s-gradient-stops));',
        'bg-gradient-to-l':
            'background-image: linear-gradient(to left, var(--s-gradient-stops));',
        'bg-gradient-to-b':
            'background-image: linear-gradient(to bottom, var(--s-gradient-stops));',
        'bg-gradient-to-bl':
            'background-image: linear-gradient(to bottom left, var(--s-gradient-stops));',
        'bg-gradient-to-br':
            'background-image: linear-gradient(to bottom right,var(--s-gradient-stops));'
    })
var R = {
    'transition-none': 'transition-property: none;',
    'transition-all':
        'transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;',
    transition:
        'transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;',
    'transition-colors':
        'transition-property: color, background-color, border-color, text-decoration-color, fill, stroke; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;',
    'transition-opacity':
        'transition-property: opacity; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;',
    'transition-shadow':
        'transition-property: box-shadow; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;',
    'transition-transform':
        'transition-property: transform; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms;',
    'duration-0': 'transition-duration: 0s;',
    'duration-75': 'transition-duration: 75ms;',
    'duration-100': 'transition-duration: 100ms;',
    'duration-150': 'transition-duration: 150ms;',
    'duration-200': 'transition-duration: 200ms;',
    'duration-300': 'transition-duration: 300ms;',
    'duration-500': 'transition-duration: 500ms;',
    'duration-700': 'transition-duration: 700ms;',
    'duration-1000': 'transition-duration: 1000ms;',
    'ease-linear': 'transition-timing-function: linear;',
    'ease-in': 'transition-timing-function: cubic-bezier(0.4, 0, 1, 1);',
    'ease-out': 'transition-timing-function: cubic-bezier(0, 0, 0.2, 1);',
    'ease-in-out': 'transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);',
    'delay-0': 'transition-delay: 0s;',
    'delay-75': 'transition-delay: 75ms;',
    'delay-100': 'transition-delay: 100ms;',
    'delay-150': 'transition-delay: 150ms;',
    'delay-200': 'transition-delay: 200ms;',
    'delay-300': 'transition-delay: 300ms;',
    'delay-500': 'transition-delay: 500ms;',
    'delay-700': 'transition-delay: 700ms;',
    'delay-1000': 'transition-delay: 1000ms;',
    'animate-none': 'animation: none;',
    'animate-spin': 'animation: spin 1s linear infinite;',
    'animate-ping': 'animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;',
    'animate-pulse':
        'animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;',
    'animate-bounce': '	animation: bounce 1s infinite;'
}
var T = {
    'scale-0': 'transform: scale(0);',
    'scale-x-0': 'transform: scaleX(0);',
    'scale-y-0': 'transform: scaleY(0);',
    'scale-50': 'transform: scale(.5);',
    'scale-x-50': 'transform: scaleX(.5);',
    'scale-y-50': 'transform: scaleY(.5);',
    'scale-75': 'transform: scale(.75);',
    'scale-x-75': 'transform: scaleX(.75);',
    'scale-y-75': 'transform: scaleY(.75);',
    'scale-90': 'transform: scale(.9);',
    'scale-x-90': 'transform: scaleX(.9);',
    'scale-y-90': 'transform: scaleY(.9);',
    'scale-95': 'transform: scale(.95);',
    'scale-x-95': 'transform: scaleX(.95);',
    'scale-y-95': 'transform: scaleY(.95);',
    'scale-100': 'transform: scale(1);',
    'scale-x-100': 'transform: scaleX(1);',
    'scale-y-100': 'transform: scaleY(1);',
    'scale-105': 'transform: scale(1.05);',
    'scale-x-105': 'transform: scaleX(1.05);',
    'scale-y-105': 'transform: scaleY(1.05);',
    'scale-110': 'transform: scale(1.1);',
    'scale-x-110': 'transform: scaleX(1.1);',
    'scale-y-110': 'transform: scaleY(1.1);',
    'scale-125': 'transform: scale(1.25);',
    'scale-x-125': 'transform: scaleX(1.25);',
    'scale-y-125': 'transform: scaleY(1.25);',
    'scale-150': 'transform: scale(1.5);',
    'scale-x-150': 'transform: scaleX(1.5);',
    'scale-y-150': 'transform: scaleY(1.5);',
    'rotate-0': 'transform: rotate(0deg);',
    'rotate-1': 'transform: rotate(1deg);',
    'rotate-2': 'transform: rotate(2deg);',
    'rotate-3': 'transform: rotate(3deg);',
    'rotate-6': 'transform: rotate(6deg);',
    'rotate-12': 'transform: rotate(12deg);',
    'rotate-45': 'transform: rotate(45deg);',
    'rotate-90': 'transform: rotate(90deg);',
    'rotate-180': 'transform: rotate(180deg);',
    'translate-x-0': 'transform: translateX(0px);',
    'translate-y-0': 'transform: translateY(0px);',
    'translate-x-px': 'transform: translateX(1px);',
    'translate-y-px': 'transform: translateY(1px);',
    'translate-x-0.5': 'transform: translateX(0.125rem);',
    'translate-y-0.5': 'transform: translateY(0.125rem);',
    'translate-x-1': 'transform: translateX(0.25rem);',
    'translate-y-1': 'transform: translateY(0.25rem);',
    'translate-x-1.5': 'transform: translateX(0.375rem);',
    'translate-y-1.5': 'transform: translateY(0.375rem);',
    'translate-x-2': 'transform: translateX(0.5rem);',
    'translate-y-2': 'transform: translateY(0.5rem);',
    'translate-x-2.5': 'transform: translateX(0.625rem);',
    'translate-y-2.5': 'transform: translateY(0.625rem);',
    'translate-x-3': 'transform: translateX(0.75rem);',
    'translate-y-3': 'transform: translateY(0.75rem);',
    'translate-x-3.5': 'transform: translateX(0.875rem);',
    'translate-y-3.5': 'transform: translateY(0.875rem);',
    'translate-x-4': 'transform: translateX(1rem);',
    'translate-y-4': 'transform: translateY(1rem);',
    'translate-x-5': 'transform: translateX(1.25rem);',
    'translate-y-5': 'transform: translateY(1.25rem);',
    'translate-x-6': 'transform: translateX(1.5rem);',
    'translate-y-6': 'transform: translateY(1.5rem);',
    'translate-x-7': 'transform: translateX(1.75rem);',
    'translate-y-7': 'transform: translateY(1.75rem);',
    'translate-x-8': 'transform: translateX(2rem);',
    'translate-y-8': 'transform: translateY(2rem);',
    'translate-x-9': 'transform: translateX(2.25rem);',
    'translate-y-9': 'transform: translateY(2.25rem);',
    'translate-x-10': 'transform: translateX(2.5rem);',
    'translate-y-10': 'transform: translateY(2.5rem);',
    'translate-x-11': 'transform: translateX(2.75rem);',
    'translate-y-11': 'transform: translateY(2.75rem);',
    'translate-x-12': 'transform: translateX(3rem);',
    'translate-y-12': 'transform: translateY(3rem);',
    'translate-x-14': 'transform: translateX(3.5rem);',
    'translate-y-14': 'transform: translateY(3.5rem);',
    'translate-x-16': 'transform: translateX(4rem);',
    'translate-y-16': 'transform: translateY(4rem);',
    'translate-x-20': 'transform: translateX(5rem);',
    'translate-y-20': 'transform: translateY(5rem);',
    'translate-x-24': 'transform: translateX(6rem);',
    'translate-y-24': 'transform: translateY(6rem);',
    'translate-x-28': 'transform: translateX(7rem);',
    'translate-y-28': 'transform: translateY(7rem);',
    'translate-x-32': 'transform: translateX(8rem);',
    'translate-y-32': 'transform: translateY(8rem);',
    'translate-x-36': 'transform: translateX(9rem);',
    'translate-y-36': 'transform: translateY(9rem);',
    'translate-x-40': 'transform: translateX(10rem);',
    'translate-y-40': 'transform: translateY(10rem);',
    'translate-x-44': 'transform: translateX(11rem);',
    'translate-y-44': 'transform: translateY(11rem);',
    'translate-x-48': 'transform: translateX(12rem);',
    'translate-y-48': 'transform: translateY(12rem);',
    'translate-x-52': 'transform: translateX(13rem);',
    'translate-y-52': 'transform: translateY(13rem);',
    'translate-x-56': 'transform: translateX(14rem);',
    'translate-y-56': 'transform: translateY(14rem);',
    'translate-x-60': 'transform: translateX(15rem);',
    'translate-y-60': 'transform: translateY(15rem);',
    'translate-x-64': 'transform: translateX(16rem);',
    'translate-y-64': 'transform: translateY(16rem);',
    'translate-x-72': 'transform: translateX(18rem);',
    'translate-y-72': 'transform: translateY(18rem);',
    'translate-x-80': 'transform: translateX(20rem);',
    'translate-y-80': 'transform: translateY(20rem);',
    'translate-x-96': 'transform: translateX(24rem);',
    'translate-y-96': 'transform: translateY(24rem);',
    'translate-x-1/2': 'transform: translateX(50%);',
    'translate-x-1/3': 'transform: translateX(33.333333%);',
    'translate-x-2/3': 'transform: translateX(66.666667%);',
    'translate-x-1/4': 'transform: translateX(25%);',
    'translate-x-2/4': 'transform: translateX(50%);',
    'translate-x-3/4': 'transform: translateX(75%);',
    'translate-x-full': 'transform: translateX(100%);',
    'translate-y-1/2': 'transform: translateY(50%);',
    'translate-y-1/3': 'transform: translateY(33.333333%);',
    'translate-y-2/3': 'transform: translateY(66.666667%);',
    'translate-y-1/4': 'transform: translateY(25%);',
    'translate-y-2/4': 'transform: translateY(50%);',
    'translate-y-3/4': 'transform: translateY(75%);',
    'translate-y-full': 'transform: translateY(100%);',
    'origin-center': 'transform-origin: center;',
    'origin-top': 'transform-origin: top;',
    'origin-top-right': 'transform-origin: top right;',
    'origin-right': 'transform-origin: right;',
    'origin-bottom-right': 'transform-origin: bottom right;',
    'origin-bottom': 'transform-origin: bottom;',
    'origin-bottom-left': 'transform-origin: bottom left;',
    'origin-left': 'transform-origin: left;',
    'origin-top-left': 'transform-origin: top left;'
}
var O = i(
        i(i(i(i(i(i(i(i(i(i(i({}, X), M), A), E), C), j), L), H), Y), N), R),
        T
    ),
    gt =
        '\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes ping {\n  75%, 100% {\n    transform: scale(2);\n    opacity: 0;\n  }\n}\n\n@keyframes pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: .5;\n  }\n}\n\n@keyframes bounce {\n  0%, 100% {\n    transform: translateY(-25%);\n    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);\n  }\n  50% {\n    transform: translateY(0);\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  }\n}\n'
function l(t, e) {
    let s = e.split(' '),
        a = '',
        r = ''.concat(t, ' {')
    return (
        s.forEach((n) => {
            O[n] ? (r = r + O[n]) : f(n) && (r = r + f(n)),
                n.startsWith('animate-') && (a = a + gt)
        }),
        (r = r + '}' + a),
        r
    )
}
var p = class extends HTMLElement {
    constructor() {
        super(), (this.shadow = this.attachShadow({ mode: 'open' }))
        let e = this.getAttribute('tag') || 'p'
        this.tag = e
        let s = this.getAttribute('for') || !1
        this.forAttr = s
        let a = this.getAttribute('css') || ''
        ;(this.cssStyles = l(':host', a)), this.render()
    }
    render() {
        this.shadow.innerHTML =
            "\n            <style>\n                * {\n                    box-sizing: border-box;\n                    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n                }\n                blockquote,\n                dl,\n                dd,\n                h1,\n                h2,\n                h3,\n                h4,\n                h5,\n                h6,\n                hr,\n                figure,\n                p,\n                pre {\n                    margin: 0;padding: 0;\n                }\n\n                h1,\n                h2,\n                h3,\n                h4,\n                h5,\n                h6 {\n                font-size: inherit;\n                font-weight: inherit;\n                }\n\n                "
                .concat(this.cssStyles, '\n            </style>\n            <')
                .concat(this.tag, ' ')
                .concat(
                    this.forAttr ? 'for="'.concat(this.forAttr, '"') : '',
                    '>\n                <slot></slot>\n            </'
                )
                .concat(this.tag, '>    \n        ')
    }
}
customElements.define('s-text', p)
var q = 's-text'
var h = class extends HTMLElement {
    constructor() {
        super(), (this.shadow = this.attachShadow({ mode: 'open' }))
        let e = this.getAttribute('css') || ''
        ;(this.cssStyles = l('div', e)), this.render()
    }
    static get observedAttributes() {
        return ['css']
    }
    attributeChangedCallback(e, s, a) {
        if (e === 'css') {
            this.shadowRoot.querySelector('style').remove()
            let n = document.createElement('style')
            ;(n.innerHTML =
                "\n              * {\n                    box-sizing: border-box;\n                    margin: 0;\n                    padding: 0;\n                    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n                }\n                \n                ".concat(
                    l('div', a),
                    '\n            '
                )),
                this.shadowRoot.appendChild(n)
        }
    }
    render() {
        this.shadow.innerHTML =
            "\n            <style>\n                * {\n                    box-sizing: border-box;\n                    margin: 0;\n                    padding: 0;\n                    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n                }\n                \n                ".concat(
                this.cssStyles,
                '\n            </style>\n            <div>\n                <slot></slot>\n            </div>    \n        '
            )
    }
}
customElements.define('s-div', h)
var B = 's-div'
var g = class extends HTMLElement {
    constructor() {
        super(),
            (this.id = this.getAttribute('id') || 'hello'),
            (this.name = this.getAttribute('name') || 'hello'),
            (this.placeholder = this.getAttribute('placeholder') || ''),
            (this.value = this.getAttribute('value') || ''),
            (this.shadow = this.attachShadow({ mode: 'open' })),
            (this.submitting = this.getAttribute('submitting') === 'true')
        let e = this.getAttribute('css') || ''
        ;(this.cssStyles = l('input', e)), this.render(), this.setupEvents()
    }
    static get observedAttributes() {
        return ['name', 'value', 'submitting', 'css']
    }
    attributeChangedCallback(e, s, a) {
        if (e === 'value') {
            let r = this.shadowRoot.querySelector('input')
            r.value = a
        }
        if (e === 'submitting') {
            let r = this.shadowRoot.querySelector('input')
            a === 'true'
                ? (r.classList.add('input-submitting'),
                  r.setAttribute('disabled', ''))
                : (r.classList.remove('input-submitting'),
                  r.removeAttribute('disabled'))
        }
        e === 'css' &&
            this.shadowRoot.querySelector('input').setAttribute('css', a)
    }
    render() {
        this.shadow.innerHTML =
            "\n            <style>\n                :host {\n                    width: 100%;\n                }\n                input {\n                    box-sizing: border-box;\n                    margin: 0;\n                    padding: 0;\n                    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n                }\n                "
                .concat(
                    this.cssStyles,
                    '\n            </style>\n            <input\n                id="'
                )
                .concat(this.id, '"\n                class="')
                .concat(
                    this.submitting && 'input-submitting',
                    '"\n                '
                )
                .concat(
                    this.submitting && 'disabled',
                    "\n                placeholder='"
                )
                .concat(this.placeholder, "'\n                value='")
                .concat(this.value, "'\n            />\n        ")
    }
    setupEvents() {
        this.shadow.querySelector('input').addEventListener('change', (e) => {
            let s = new CustomEvent('s-change', {
                bubbles: !0,
                composed: !0,
                detail: { value: e.target.value }
            })
            this.dispatchEvent(s)
        })
    }
}
customElements.define('s-input', g)
var U = 's-input'
var b = class extends HTMLElement {
    constructor() {
        super(),
            (this.text = this.getAttribute('text') || 'hello'),
            (this.shadow = this.attachShadow({ mode: 'open' }))
        let e = this.getAttribute('css') || ''
        ;(this.cssStyles = l('button', e)), this.render(), this.setupEvents()
    }
    static get observedAttributes() {
        return ['text', 'css']
    }
    attributeChangedCallback(e, s, a) {
        if (e === 'text') {
            let r = this.shadowRoot.querySelector('button')
            r.textContent = a
        }
        e === 'css' &&
            this.shadowRoot.querySelector('button').setAttribute('css', a)
    }
    render() {
        this.shadow.innerHTML =
            "\n            <style>\n                :host {\n                    width: 100%;\n                }\n                button {\n                    box-sizing: border-box;\n                    margin: 0;\n                    padding: 0;\n                    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n                    border: none;\n                }\n                button:hover {\n                    cursor: pointer;\n                }\n                "
                .concat(
                    this.cssStyles,
                    '\n            </style>\n               <button>\n                '
                )
                .concat(this.text, '\n            </button>\n        ')
    }
    setupEvents() {
        this.shadow.querySelector('button').addEventListener('click', (e) => {
            let s = new CustomEvent('s-click', { bubbles: !0, composed: !0 })
            this.dispatchEvent(s)
        })
    }
}
customElements.define('s-button', b)
var P = 's-button'
var y = class extends HTMLElement {
    constructor() {
        super(),
            (this.src = this.getAttribute('src') || ''),
            (this.shadow = this.attachShadow({ mode: 'open' }))
        let e = this.getAttribute('css') || ''
        ;(this.cssStyles = l('img', e)), this.render()
    }
    static get observedAttributes() {
        return ['css']
    }
    attributeChangedCallback(e, s, a) {
        e === 'css' &&
            this.shadowRoot.querySelector('img').setAttribute('css', a)
    }
    render() {
        this.shadow.innerHTML =
            '\n            <style>\n                :host {\n                    width: 100%;\n                }\n                img  {\n                    max-width: 100%;\n                    height: auto;\n                    display: block;\n                    vertical-align: middle;\n                }\n                '
                .concat(
                    this.cssStyles,
                    "\n            </style>\n            <img src='"
                )
                .concat(this.src, "'></img>\n        ")
    }
}
customElements.define('s-image', y)
var F = 's-image'
var x = {
        alert: (t, e) =>
            '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="'
                .concat(e, '" style="')
                .concat(
                    t,
                    '">\n  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />\n</svg>\n'
                ),
        success: (t, e) =>
            '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"  stroke="'
                .concat(e, '" style="')
                .concat(
                    t,
                    '">\n  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />\n</svg>\n'
                ),
        updating: (t, e) =>
            '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="'
                .concat(e, '" style="')
                .concat(
                    t,
                    '">\n  <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />\n</svg>\n'
                )
    },
    w = (t) => (o[t] ? 'rgb('.concat(o[t], ')') : '#000'),
    v = (t) => {
        let e = Number(t)
        return 'height: '.concat(e, 'px; width: ').concat(e, 'px;')
    },
    k = class extends HTMLElement {
        constructor() {
            super(),
                (this.src = this.getAttribute('src') || ''),
                (this.shadow = this.attachShadow({ mode: 'open' }))
            let e = this.getAttribute('css') || ''
            this.cssStyles = l('img', e)
            let s = this.getAttribute('type') || 'alert'
            ;(this.type = s),
                (this.color = this.getAttribute('color') || 'black'),
                (this.size = this.getAttribute('size') || '12'),
                this.render()
        }
        static get observedAttributes() {
            return ['css', 'type', 'color']
        }
        attributeChangedCallback(e, s, a) {
            if (
                (e === 'css' &&
                    this.shadowRoot.querySelector('div').setAttribute('css', a),
                e === 'type')
            ) {
                let r = this.shadowRoot.querySelector('div'),
                    n = w(this.color),
                    m = v(this.size)
                r.innerHTML = x[a](m, n)
            }
            if (e === 'color') {
                let r = this.shadowRoot.querySelector('div'),
                    n = w(a),
                    m = v(this.size)

                r.innerHTML = x[this.type](m, n)
            }
        }
        render() {
            let e = w(this.color),
                s = v(this.size)
            this.shadow.innerHTML =
                '\n            <style>\n               \n                '
                    .concat(
                        this.cssStyles,
                        '\n                div {\n                    height: '
                    )
                    .concat(this.size, 'px;\n                    width: ')
                    .concat(
                        this.size,
                        "px;\n                }\n            </style>\n            <div id='container' css='"
                    )
                    .concat(this.css, "'>\n                ")
                    .concat(
                        x[this.type](s, e),
                        '\n            </div>\n        '
                    )
        }
    }
customElements.define('s-icon', k)
var I = 's-icon'
var D = (t) => {
    class e extends HTMLElement {
        constructor() {
            super()
            d(this, 'handlers', {})
            d(this, 'unsublist', [])
            let r = {}
            if (t.props)
                for (let n of Object.keys(t.props)) r[n] = this.getAttribute(n)
            if (t.start) {
                let n = t.start(r)
                this.state = i(i({}, r), n)
            } else this.state = r
            if (
                ((this.shadow = this.attachShadow({ mode: 'open' })),
                t.handlers)
            )
                for (let n of t.handlers)
                    this.handlers[n.name] = () => n(this.state)
            this.render(),
                t.listeners && this.setupListeners(),
                t.events && this.setupEvents()
        }
        disconnectedCallback() {
            for (let r of this.unsublist) r()
        }
        setupListeners() {
            for (let r of t.listeners) {
                let n = r(this.shadow, this.state)
                this.unsublist.push(n)
            }
        }
        setupEvents() {
            for (let r of t.events)
                r(this.shadow, this.state, this.dispatchEvent)
        }
        render() {
            let r = /@click={(.*?)}/g,
                m = t.render(this.state).replace(r, (W) => {
                    let G = W.split(/@click={|}/).filter(Boolean)[0]
                    return 'onclick="this.getRootNode().host.handlers.'.concat(
                        G,
                        '()"'
                    )
                })
            this.shadow.innerHTML = m
        }
    }
    return customElements.define(t.name, e), t.name
}
var ye = [q, B, U, P, F, I],
    xe = async (t) => {
        await Promise.allSettled(t.map(customElements.whenDefined)),
            (document.body.style.opacity = 1)
    },
    we = D
export { xe as showApp, we as summit, ye as summitComponents }
