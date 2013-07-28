editAreaLoader.load_syntax["c"] = {
	'DISPLAY_NAME' : 'C'
	,'COMMENT_SINGLE' : {1 : '//'}
	,'COMMENT_MULTI' : {'/*' : '*/'}
	,'QUOTEMARKS' : {1: "'", 2: '"'}
	,'KEYWORD_CASE_SENSITIVE' : true
	,'KEYWORDS' : {
    'keywords1' : [
      '__asm', '_asm', 'asm', 'explicit',
      'false', 'friend', 'inline', 'namespace', 'reinterpret_cast',
      'template', 'this', 'true', 'typename', 'using',
      'virtual', 'NULL'
    ]
    , 'keyword2' : [
        'private', 'protected', 'public',
        'const_cast', 'dynamic_cast', 'static_cast'
    ]
    , 'keyword3' : [
        '__cdecl', '_cdecl', 'cdecl', 'const',
        '__declspec', '__dispid', '__export', '_export',
        '__fastcall', '_fastcall', '__import', '_import',
        '__pascal', '_pascal', 'pascal', '__rtti', '__stdcall',
        '_stdcall', 'volatile'
    ]
    , 'keyword4' : [
        '__classid', 'delete', 'else',
        'if', 'new', 'operator', 'sizeof', 'typeid'
    ]
    , 'keyword5' : [
        'break', 'case', 'catch', 'continue', 'default',
        'do', '__except', '__finally', 'for', 'goto', 'return', 'switch',
        'throw', '__try', 'try', 'while'
    ]
    , 'keyword6' : [
        'auto', '__declspec', 'extern', 'mutable',
        'register', 'typedef', 'static'
    ]
    , 'keyword7' : [
        'char', 'class', 'double', 'enum', 'float', 'int', 'long', 'short',
        'signed', 'struct', 'union', 'unsigned', 'wchar_t', 'void',
        'bool', '__int8', '__int16', '__int32', '__int64'
    ]
    , 'keyword8' : [
        '#define', '#elif', '#else', '#endif',
        '#error', '#if',
        '#ifdef', '#ifndef', '#line', '#pragma', '#undef', '#include'
    ]
	}
	,'DELIMITERS' :[
		'(', ')', '[', ']', '{', '}'
	]
	,'REGEXPS' : {
		'precompiler' : {
			'search' : '()(#[^\r\n]*)()'
			,'class' : 'precompiler'
			,'modifiers' : 'g'
			,'execute' : 'before'
		}
/*		,'precompilerstring' : {
			'search' : '(#[\t ]*include[\t ]*)([^\r\n]*)([^\r\n]*[\r\n])'
			,'class' : 'precompilerstring'
		'COMMENTS': 'color:#;'
		,'QUOTESMARKS': 'color: #6381F8;'
		,'KEYWORDS' : {
			'constants' : 'color: #EE0000;'
			,'types' : 'color: #0000EE;'
			,'statements' : 'color: #60CA00;'
			,'keywords' : 'color: #48BDDF;'
		}
		,'OPERATORS' : 'color: #FF00FF;'
		,'DELIMITERS' : 'color: #0038E1;'
		,'REGEXPS' : {
			'precompiler' : 'color: #009900;'
			,'precompilerstring' : 'color: #994400;'
		}
	}
};
			,'modifiers' : 'g'
			,'execute' : 'before'
		}*/
	}
	,'STYLES' : {
		'COMMENTS': 'color: #00008B'
		,'QUOTESMARKS': 'color: #32CD32;'
		,'KEYWORDS' : {
			'keyword1' : 'color: #000066;'
			,'keyword2' : 'color: #660099;'
			,'keyword3' : 'color: #3300FF;'
			,'keyword4' : 'color: #3300FF;'
      ,'keyword5' : 'color: #3300FF;'
      ,'keyword6' : 'color: #660099;'
      ,'keyword7' : 'color: #FD3C2F;'
      ,'keyword8' : 'color: #33CC00;'
		}
		,'DELIMITERS' : 'color: #0038E1;'
		,'REGEXPS' : {
			'precompiler' : 'color: #009900;'
			,'precompilerstring' : 'color: #994400;'
		}
	}
};
