module.exports = {	rules: {		// 配置数组的中括号内前后的换行格式		// @off 配置项无法配制成想要的样子		'array-bracket-newline': 'off',		// 数组的括号内的前后禁止有空格		'array-bracket-spacing': [			'error',			'never'		],		// 配置数组的元素之间的换行格式		// @off 允许一行包含多个元素，方便大数量的数组的书写		'array-element-newline': 'off',		// 代码块如果在一行内，那么大括号内的首尾必须有空格，比如 function () { alert('Hello') }		'block-spacing': ['off'],		// if 与 else 的大括号风格必须一致		// @off else 代码块可能前面需要有一行注释		'brace-style': 'off',		// 变量名必须是 camelcase 风格的		// @off 很多 api 或文件名都不是 camelcase		'camelcase': 'off',		// 注释的首字母必须大写		// @off 没必要限制		'capitalized-comments': 'off',		// 对象的最后一个属性末尾必须有逗号		// @off 没必要限制		'comma-dangle': 'off',		// 逗号前后禁止有空格		'comma-spacing': ['off'],		// 禁止在行首写逗号		'comma-style': [			'error',			'last'		],		// 用作对象的计算属性时，中括号内的首尾禁止有空格		'computed-property-spacing': [			'error',			'never'		],		// 限制 this 的别名		// @off 没必要限制		'consistent-this': 'off',		// 文件最后一行必须有一个空行		// @off 没必要限制		'eol-last': 'off',		// 函数名和执行它的括号之间禁止有空格		'func-call-spacing': [			'error',			'never'		],		// 函数赋值给变量的时候，函数名必须与变量名一致		'func-name-matching': [			'error',			'always',			{				includeCommonJSModuleExports: false			}		],		// 函数必须有名字		// @off 没必要限制		'func-names': 'off',		// 必须只使用函数申明或只使用函数表达式		// @off 没必要限制		'func-style': 'off',		// 禁止使用指定的标识符		// @off 它用于限制某个具体的标识符不能使用		'id-blacklist': 'off',		// 限制变量名长度		// @off 没必要限制变量名长度		'id-length': 'off',		// 限制变量名必须匹配指定的正则表达式		// @off 没必要限制变量名		'id-match': 'off',		// 一个缩进必须用四个空格替代		'indent': ['off'],		// jsx 中的属性必须用双引号		'jsx-quotes': [			'error',			'prefer-double'		],		// 对象字面量中冒号前面禁止有空格，后面必须有空格		'key-spacing': [			'error',			{				beforeColon: false,				afterColon: true,				mode: 'strict'			}		],		// 关键字前后必须有空格		'keyword-spacing': [			'error',			{				before: true,				after: true			}		],		// 单行注释必须写在上一行		// @off 没必要限制		'line-comment-position': 'off',		// 限制换行符为 LF 或 CRLF		// @off 没必要限制		'linebreak-style': 'off',		// 注释前后必须有空行		// @off 没必要限制		'lines-around-comment': 'off',		// 代码块嵌套的深度禁止超过 5 层		'max-depth': [			'error',			5		],		// 限制一行的长度		// @off 现在编辑器已经很智能了，不需要限制一行的长度		'max-len': 'off',		// 限制一个文件最多的行数		// @off 没必要限制		'max-lines': 'off',		// 回调函数嵌套禁止超过 3 层，多了请用 async await 替代		'max-nested-callbacks': [			'error',			3		],		// 函数的参数禁止超过 7 个		'max-params': [			'error',			7		],		// 限制函数块中的语句数量		// @off 没必要限制		'max-statements': 'off',		// 限制一行中的语句数量		// @off 没必要限制		'max-statements-per-line': 'off',		// 三元表达式必须得换行		// @off 三元表达式可以随意使用		'multiline-ternary': 'off',		// new 后面的类名必须首字母大写		'new-cap': [			'error',			{				newIsCap: true,				capIsNew: false,				properties: true			}		],		// new 后面的类必须有小括号		'new-parens': 'error',		// 链式调用必须换行		// @off 没必要限制		'newline-per-chained-call': 'off',		// 禁止使用 Array 构造函数		'no-array-constructor': 'error',		// 禁止使用位运算		// @off 位运算很常见		'no-bitwise': 'off',		// 禁止使用 continue		// @off continue 很常用		'no-continue': 'off',		// 禁止在代码后添加内联注释		// @off 内联注释很常用		'no-inline-comments': 'off',		// 禁止 else 中只有一个单独的 if		// @off 单独的 if 可以把逻辑表达的更清楚		'no-lonely-if': 'off',		// 禁止混用不同的操作符，比如 let foo = a && b < 0 || c > 0 || d + 1 === 0		// @off 太严格了，可以由使用者自己去判断如何混用操作符		'no-mixed-operators': 'off',		// 禁止混用空格和缩进		'no-mixed-spaces-and-tabs': 'error',		// 禁止连续赋值，比如 a = b = c = 5		// @off 没必要限制		'no-multi-assign': 'off',		// 禁止出现超过三行的连续空行		'no-multiple-empty-lines': [			'error',			{				max: 3,				maxEOF: 1,				maxBOF: 1			}		],		// 禁止 if 里面有否定的表达式，比如：		// if (a !== b) {		//     doSomething();		// } else {		//     doSomethingElse();		// }		// @off 否定的表达式可以把逻辑表达的更清楚		'no-negated-condition': 'off',		// 禁止使用嵌套的三元表达式，比如 a ? b : c ? d : e		// @off 没必要限制		'no-nested-ternary': 'off',		// 禁止直接 new Object		'no-new-object': 'error',		// 禁止使用 ++ 或 --		// @off 没必要限制		'no-plusplus': 'off',		// 禁止使用特定的语法		// @off 它用于限制某个具体的语法不能使用		'no-restricted-syntax': 'off',		// 禁止使用 tabs		'no-tabs': 'off',		// 禁止使用三元表达式		// @off 三元表达式很常用		'no-ternary': 'off',		// 禁止行尾有空格		'no-trailing-spaces': 'error',		// 禁止变量名出现下划线		// @off 下划线在变量名中很常用		'no-underscore-dangle': 'off',		// 必须使用 !a 替代 a ? false : true		// @off 后者表达的更清晰		'no-unneeded-ternary': 'off',		// 禁止属性前有空格，比如 foo. bar()		'no-whitespace-before-property': 'error',		// 禁止 if 后面不加大括号而写两行代码		'nonblock-statement-body-position': [			'error',			'beside',			{				overrides: {					while: 'below'				}			}		],		// 大括号内的首尾必须有换行		'object-curly-newline': [			'error',			{				multiline: true,				consistent: true			}		],		// 对象字面量只有一行时，大括号内的首尾必须有空格		'object-curly-spacing': [			'error',			'always',			{				arraysInObjects: true,				objectsInObjects: false			}		],		// 对象字面量内的属性每行必须只有一个		// @off 没必要限制		'object-property-newline': 'off',		// 禁止变量申明时用逗号一次申明多个		'one-var': [			'error',			'never'		],		// 变量申明必须每行一个		'one-var-declaration-per-line': ['off'],		// 必须使用 x = x + y 而不是 x += y		// @off 没必要限制		'operator-assignment': 'off',		// 需要换行的时候，操作符必须放在行末，比如：		// let foo = 1 +		//     2		// @off 有时放在第二行开始处更易读		'operator-linebreak': 'off',		// 代码块首尾必须要空行		// @off 没必要限制		'padded-blocks': 'off',		// 限制语句之间的空行规则，比如变量定义完之后必须要空行		// @off 没必要限制		'padding-line-between-statements': 'off',		// 对象字面量的键名禁止用引号括起来		// @off 没必要限制		'quote-props': 'off',		// 必须使用单引号，禁止使用双引号		'quotes': [			'error',			'single',			{				avoidEscape: true,				allowTemplateLiterals: true			}		],		// 必须使用 jsdoc 风格的注释		// @off 太严格了		'require-jsdoc': 'off',		// 结尾必须有分号		'semi': [			'error',			'always',			{				omitLastInOneLineBlock: true			}		],		// 一行有多个语句时，分号前面禁止有空格，分号后面必须有空格		'semi-spacing': [			'error',			{				before: false,				after: true			}		],		// 分号必须写在行尾，禁止在行首出现		'semi-style': [			'error',			'last'		],		// 对象字面量的键名必须排好序		// @off 没必要限制		'sort-keys': 'off',		// 变量申明必须排好序		// @off 没必要限制		'sort-vars': 'off',		// if, function 等的大括号之前必须要有空格，比如 if (a) {		'space-before-blocks': [			'error',			'always'		],		// function 的小括号之前必须要有空格		'space-before-function-paren': [			'error',			{				anonymous: 'ignore',				named: 'never',				asyncArrow: 'always'			}		],		// 小括号内的首尾禁止有空格		'space-in-parens': [			'error',			'never'		],		// 操作符左右必须有空格，比如 let sum = 1 + 2;		'space-infix-ops': 'error',		// new, typeof 等后面必须有空格，++, -- 等禁止有空格，比如：		// let foo = new Person();		// bar = bar++;		'space-unary-ops': [			'error',			{				words: true,				nonwords: false			}		],		// 注释的斜线或 * 后必须有空格		'spaced-comment': ['off'],		// case 的冒号前禁止有空格，冒号后必须有空格		'switch-colon-spacing': [			'error',			{				after: true,				before: false			}		],		// 模版字符串的 tag 之后禁止有空格，比如 tag`Hello World`		'template-tag-spacing': [			'error',			'never'		],		// 文件开头禁止有 BOM		'unicode-bom': [			'error',			'never'		],		// 正则表达式必须有括号包起来		// @off 没必要限制		'wrap-regex': 'off'	}};