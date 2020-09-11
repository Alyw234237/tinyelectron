(function(modules) {
  var installedModules = {};

  function __webpack_require__(moduleId) {
    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }
    var module = (installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {}
    });
    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    module.l = true;
    return module.exports;
  }
  __webpack_require__.m = modules;
  __webpack_require__.c = installedModules;
  __webpack_require__.d = function(exports, name, getter) {
    if (!__webpack_require__.o(exports, name)) {
      Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
    }
  };
  __webpack_require__.r = function(exports) {
    if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      Object.defineProperty(exports, Symbol.toStringTag, {
        value: "Module"
      });
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
  };
  __webpack_require__.t = function(value, mode) {
    if (mode & 1) value = __webpack_require__(value);
    if (mode & 8) return value;
    if (mode & 4 && typeof value === "object" && value && value.__esModule) return value;
    var ns = Object.create(null);
    __webpack_require__.r(ns);
    Object.defineProperty(ns, "default", {
      enumerable: true,
      value: value
    });
    if (mode & 2 && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function(key) {
            return value[key];
          }.bind(null, key)
        );
    return ns;
  };
  __webpack_require__.n = function(module) {
    var getter =
      module && module.__esModule ?
      function getDefault() {
        return module["default"];
      } :
      function getModuleExports() {
        return module;
      };
    __webpack_require__.d(getter, "a", getter);
    return getter;
  };
  __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  __webpack_require__.p = "";
  return __webpack_require__((__webpack_require__.s = 2));
})([
  function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_RESULT__;
    (function() {
      function getDefaultOpts(simple) {
        "use strict";
        var defaultOptions = {
          omitExtraWLInCodeBlocks: {
            defaultValue: false,
            describe: "Omit the default extra whiteline added to code blocks",
            type: "boolean"
          },
          noHeaderId: {
            defaultValue: false,
            describe: "Turn on/off generated header id",
            type: "boolean"
          },
          prefixHeaderId: {
            defaultValue: false,
            describe: "Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic 'section-' prefix",
            type: "string",
          },
          rawPrefixHeaderId: {
            defaultValue: false,
            describe: 'Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix)',
            type: "boolean",
          },
          ghCompatibleHeaderId: {
            defaultValue: false,
            describe: "Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)",
            type: "boolean"
          },
          rawHeaderId: {
            defaultValue: false,
            describe: "Remove only spaces, ' and \" from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids",
            type: "boolean"
          },
          headerLevelStart: {
            defaultValue: false,
            describe: "The header blocks level start",
            type: "integer"
          },
          parseImgDimensions: {
            defaultValue: false,
            describe: "Turn on/off image dimension parsing",
            type: "boolean"
          },
          simplifiedAutoLink: {
            defaultValue: false,
            describe: "Turn on/off GFM autolink style",
            type: "boolean"
          },
          excludeTrailingPunctuationFromURLs: {
            defaultValue: false,
            describe: "Excludes trailing punctuation from links generated with autoLinking",
            type: "boolean"
          },
          literalMidWordUnderscores: {
            defaultValue: false,
            describe: "Parse midword underscores as literal underscores",
            type: "boolean"
          },
          literalMidWordAsterisks: {
            defaultValue: false,
            describe: "Parse midword asterisks as literal asterisks",
            type: "boolean"
          },
          strikethrough: {
            defaultValue: false,
            describe: "Turn on/off strikethrough support",
            type: "boolean"
          },
          tables: {
            defaultValue: false,
            describe: "Turn on/off tables support",
            type: "boolean"
          },
          tablesHeaderId: {
            defaultValue: false,
            describe: "Add an id to table headers",
            type: "boolean"
          },
          ghCodeBlocks: {
            defaultValue: true,
            describe: "Turn on/off GFM fenced code blocks support",
            type: "boolean"
          },
          tasklists: {
            defaultValue: false,
            describe: "Turn on/off GFM tasklist support",
            type: "boolean"
          },
          smoothLivePreview: {
            defaultValue: false,
            describe: "Prevents weird effects in live previews due to incomplete input",
            type: "boolean"
          },
          smartIndentationFix: {
            defaultValue: false,
            description: "Tries to smartly fix indentation in es6 strings",
            type: "boolean"
          },
          disableForced4SpacesIndentedSublists: {
            defaultValue: false,
            description: "Disables the requirement of indenting nested sublists by 4 spaces",
            type: "boolean"
          },
          simpleLineBreaks: {
            defaultValue: false,
            description: "Parses simple line breaks as <br> (GFM Style)",
            type: "boolean"
          },
          requireSpaceBeforeHeadingText: {
            defaultValue: false,
            description: "Makes adding a space between `#` and the header text mandatory (GFM Style)",
            type: "boolean"
          },
          ghMentions: {
            defaultValue: false,
            description: "Enables github @mentions",
            type: "boolean"
          },
          ghMentionsLink: {
            defaultValue: "https://github.com/{u}",
            description: "Changes the link generated by @mentions. Only applies if ghMentions option is enabled.",
            type: "string"
          },
          encodeEmails: {
            defaultValue: true,
            description: "Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities",
            type: "boolean"
          },
          openLinksInNewWindow: {
            defaultValue: false,
            description: "Open all links in new windows",
            type: "boolean"
          },
          backslashEscapesHTMLTags: {
            defaultValue: false,
            description: "Support for HTML Tag escaping. ex: <div>foo</div>",
            type: "boolean"
          },
          emoji: {
            defaultValue: false,
            description: "Enable emoji support. Ex: `this is a :smile: emoji`",
            type: "boolean"
          },
          underline: {
            defaultValue: false,
            description: "Enable support for underline. Syntax is double or triple underscores: `__underline word__`. With this option enabled, underscores no longer parses into `<em>` and `<strong>`",
            type: "boolean",
          },
          completeHTMLDocument: {
            defaultValue: false,
            description: "Outputs a complete html document, including `<html>`, `<head>` and `<body>` tags",
            type: "boolean"
          },
          metadata: {
            //defaultValue: false,
            defaultValue: true,
            description: "Enable support for document metadata (defined at the top of the document between `Â«Â«Â«` and `Â»Â»Â»` or between `---` and `---`).",
            type: "boolean"
          },
          splitAdjacentBlockquotes: {
            defaultValue: false,
            description: "Split adjacent blockquote blocks",
            type: "boolean"
          },
        };
        if (simple === false) {
          return JSON.parse(JSON.stringify(defaultOptions));
        }
        var ret = {};
        for (var opt in defaultOptions) {
          if (defaultOptions.hasOwnProperty(opt)) {
            ret[opt] = defaultOptions[opt].defaultValue;
          }
        }
        return ret;
      }

      function allOptionsOn() {
        "use strict";
        var options = getDefaultOpts(true),
          ret = {};
        for (var opt in options) {
          if (options.hasOwnProperty(opt)) {
            ret[opt] = true;
          }
        }
        return ret;
      }
      var showdown = {},
        parsers = {},
        extensions = {},
        globalOptions = getDefaultOpts(true),
        //setFlavor = "vanilla",
        setFlavor = "github",
        flavor = {
          github: {
            omitExtraWLInCodeBlocks: true,
            simplifiedAutoLink: true,
            excludeTrailingPunctuationFromURLs: true,
            literalMidWordUnderscores: true,
            strikethrough: true,
            tables: true,
            tablesHeaderId: true,
            ghCodeBlocks: true,
            tasklists: true,
            disableForced4SpacesIndentedSublists: true,
            simpleLineBreaks: true,
            requireSpaceBeforeHeadingText: true,
            ghCompatibleHeaderId: true,
            //ghMentions: true,
            ghMentions: false,
            backslashEscapesHTMLTags: true,
            emoji: true,
            splitAdjacentBlockquotes: true,
            // Add ignore front matter (not working—had to set default true)
            metadata: true,
          },
          original: {
            noHeaderId: true,
            ghCodeBlocks: false
          },
          ghost: {
            omitExtraWLInCodeBlocks: true,
            parseImgDimensions: true,
            simplifiedAutoLink: true,
            excludeTrailingPunctuationFromURLs: true,
            literalMidWordUnderscores: true,
            strikethrough: true,
            tables: true,
            tablesHeaderId: true,
            ghCodeBlocks: true,
            tasklists: true,
            smoothLivePreview: true,
            simpleLineBreaks: true,
            requireSpaceBeforeHeadingText: true,
            ghMentions: false,
            encodeEmails: true,
          },
          vanilla: getDefaultOpts(true),
          allOn: allOptionsOn(),
        };
      showdown.helper = {};
      showdown.extensions = {};
      showdown.setOption = function(key, value) {
        "use strict";
        globalOptions[key] = value;
        return this;
      };
      showdown.getOption = function(key) {
        "use strict";
        return globalOptions[key];
      };
      showdown.getOptions = function() {
        "use strict";
        return globalOptions;
      };
      showdown.resetOptions = function() {
        "use strict";
        globalOptions = getDefaultOpts(true);
      };
      showdown.setFlavor = function(name) {
        "use strict";
        if (!flavor.hasOwnProperty(name)) {
          throw Error(name + " flavor was not found");
        }
        showdown.resetOptions();
        var preset = flavor[name];
        setFlavor = name;
        for (var option in preset) {
          if (preset.hasOwnProperty(option)) {
            globalOptions[option] = preset[option];
          }
        }
      };
      showdown.getFlavor = function() {
        "use strict";
        return setFlavor;
      };
      showdown.getFlavorOptions = function(name) {
        "use strict";
        if (flavor.hasOwnProperty(name)) {
          return flavor[name];
        }
      };
      showdown.getDefaultOptions = function(simple) {
        "use strict";
        return getDefaultOpts(simple);
      };
      showdown.subParser = function(name, func) {
        "use strict";
        if (showdown.helper.isString(name)) {
          if (typeof func !== "undefined") {
            parsers[name] = func;
          } else {
            if (parsers.hasOwnProperty(name)) {
              return parsers[name];
            } else {
              throw Error("SubParser named " + name + " not registered!");
            }
          }
        }
      };
      showdown.extension = function(name, ext) {
        "use strict";
        if (!showdown.helper.isString(name)) {
          throw Error("Extension 'name' must be a string");
        }
        name = showdown.helper.stdExtName(name);
        if (showdown.helper.isUndefined(ext)) {
          if (!extensions.hasOwnProperty(name)) {
            throw Error("Extension named " + name + " is not registered!");
          }
          return extensions[name];
        } else {
          if (typeof ext === "function") {
            ext = ext();
          }
          if (!showdown.helper.isArray(ext)) {
            ext = [ext];
          }
          var validExtension = validate(ext, name);
          if (validExtension.valid) {
            extensions[name] = ext;
          } else {
            throw Error(validExtension.error);
          }
        }
      };
      showdown.getAllExtensions = function() {
        "use strict";
        return extensions;
      };
      showdown.removeExtension = function(name) {
        "use strict";
        delete extensions[name];
      };
      showdown.resetExtensions = function() {
        "use strict";
        extensions = {};
      };

      function validate(extension, name) {
        "use strict";
        var errMsg = name ? "Error in " + name + " extension->" : "Error in unnamed extension",
          ret = {
            valid: true,
            error: ""
          };
        if (!showdown.helper.isArray(extension)) {
          extension = [extension];
        }
        for (var i = 0; i < extension.length; ++i) {
          var baseMsg = errMsg + " sub-extension " + i + ": ",
            ext = extension[i];
          if (typeof ext !== "object") {
            ret.valid = false;
            ret.error = baseMsg + "must be an object, but " + typeof ext + " given";
            return ret;
          }
          if (!showdown.helper.isString(ext.type)) {
            ret.valid = false;
            ret.error = baseMsg + 'property "type" must be a string, but ' + typeof ext.type + " given";
            return ret;
          }
          var type = (ext.type = ext.type.toLowerCase());
          if (type === "language") {
            type = ext.type = "lang";
          }
          if (type === "html") {
            type = ext.type = "output";
          }
          if (type !== "lang" && type !== "output" && type !== "listener") {
            ret.valid = false;
            ret.error = baseMsg + "type " + type + ' is not recognized. Valid values: "lang/language", "output/html" or "listener"';
            return ret;
          }
          if (type === "listener") {
            if (showdown.helper.isUndefined(ext.listeners)) {
              ret.valid = false;
              ret.error = baseMsg + '. Extensions of type "listener" must have a property called "listeners"';
              return ret;
            }
          } else {
            if (showdown.helper.isUndefined(ext.filter) && showdown.helper.isUndefined(ext.regex)) {
              ret.valid = false;
              ret.error = baseMsg + type + ' extensions must define either a "regex" property or a "filter" method';
              return ret;
            }
          }
          if (ext.listeners) {
            if (typeof ext.listeners !== "object") {
              ret.valid = false;
              ret.error = baseMsg + '"listeners" property must be an object but ' + typeof ext.listeners + " given";
              return ret;
            }
            for (var ln in ext.listeners) {
              if (ext.listeners.hasOwnProperty(ln)) {
                if (typeof ext.listeners[ln] !== "function") {
                  ret.valid = false;
                  ret.error = baseMsg + '"listeners" property must be an hash of [event name]: [callback]. listeners.' + ln + " must be a function but " + typeof ext.listeners[ln] + " given";
                  return ret;
                }
              }
            }
          }
          if (ext.filter) {
            if (typeof ext.filter !== "function") {
              ret.valid = false;
              ret.error = baseMsg + '"filter" must be a function, but ' + typeof ext.filter + " given";
              return ret;
            }
          } else if (ext.regex) {
            if (showdown.helper.isString(ext.regex)) {
              ext.regex = new RegExp(ext.regex, "g");
            }
            if (!(ext.regex instanceof RegExp)) {
              ret.valid = false;
              ret.error = baseMsg + '"regex" property must either be a string or a RegExp object, but ' + typeof ext.regex + " given";
              return ret;
            }
            if (showdown.helper.isUndefined(ext.replace)) {
              ret.valid = false;
              ret.error = baseMsg + '"regex" extensions must implement a replace string or function';
              return ret;
            }
          }
        }
        return ret;
      }
      showdown.validateExtension = function(ext) {
        "use strict";
        var validateExtension = validate(ext, null);
        if (!validateExtension.valid) {
          console.warn(validateExtension.error);
          return false;
        }
        return true;
      };
      if (!showdown.hasOwnProperty("helper")) {
        showdown.helper = {};
      }
      showdown.helper.isString = function(a) {
        "use strict";
        return typeof a === "string" || a instanceof String;
      };
      showdown.helper.isFunction = function(a) {
        "use strict";
        var getType = {};
        return a && getType.toString.call(a) === "[object Function]";
      };
      showdown.helper.isArray = function(a) {
        "use strict";
        return Array.isArray(a);
      };
      showdown.helper.isUndefined = function(value) {
        "use strict";
        return typeof value === "undefined";
      };
      showdown.helper.forEach = function(obj, callback) {
        "use strict";
        if (showdown.helper.isUndefined(obj)) {
          throw new Error("obj param is required");
        }
        if (showdown.helper.isUndefined(callback)) {
          throw new Error("callback param is required");
        }
        if (!showdown.helper.isFunction(callback)) {
          throw new Error("callback param must be a function/closure");
        }
        if (typeof obj.forEach === "function") {
          obj.forEach(callback);
        } else if (showdown.helper.isArray(obj)) {
          for (var i = 0; i < obj.length; i++) {
            callback(obj[i], i, obj);
          }
        } else if (typeof obj === "object") {
          for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
              callback(obj[prop], prop, obj);
            }
          }
        } else {
          throw new Error("obj does not seem to be an array or an iterable object");
        }
      };
      showdown.helper.stdExtName = function(s) {
        "use strict";
        return s
          .replace(/[_?*+\/\\.^-]/g, "")
          .replace(/\s/g, "")
          .toLowerCase();
      };

      function escapeCharactersCallback(wholeMatch, m1) {
        "use strict";
        var charCodeToEscape = m1.charCodeAt(0);
        return "Â¨E" + charCodeToEscape + "E";
      }
      showdown.helper.escapeCharactersCallback = escapeCharactersCallback;
      showdown.helper.escapeCharacters = function(text, charsToEscape, afterBackslash) {
        "use strict";
        var regexString = "([" + charsToEscape.replace(/([\[\]\\])/g, "\\$1") + "])";
        if (afterBackslash) {
          regexString = "\\\\" + regexString;
        }
        var regex = new RegExp(regexString, "g");
        text = text.replace(regex, escapeCharactersCallback);
        return text;
      };
      showdown.helper.unescapeHTMLEntities = function(txt) {
        "use strict";
        return txt
          .replace(/&quot;/g, '"')
          .replace(/&lt;/g, "<")
          .replace(/&gt;/g, ">")
          .replace(/&amp;/g, "&");
      };
      var rgxFindMatchPos = function(str, left, right, flags) {
        "use strict";
        var f = flags || "",
          g = f.indexOf("g") > -1,
          x = new RegExp(left + "|" + right, "g" + f.replace(/g/g, "")),
          l = new RegExp(left, f.replace(/g/g, "")),
          pos = [],
          t,
          s,
          m,
          start,
          end;
        do {
          t = 0;
          while ((m = x.exec(str))) {
            if (l.test(m[0])) {
              if (!t++) {
                s = x.lastIndex;
                start = s - m[0].length;
              }
            } else if (t) {
              if (!--t) {
                end = m.index + m[0].length;
                var obj = {
                  left: {
                    start: start,
                    end: s
                  },
                  match: {
                    start: s,
                    end: m.index
                  },
                  right: {
                    start: m.index,
                    end: end
                  },
                  wholeMatch: {
                    start: start,
                    end: end
                  }
                };
                pos.push(obj);
                if (!g) {
                  return pos;
                }
              }
            }
          }
        } while (t && (x.lastIndex = s));
        return pos;
      };
      showdown.helper.matchRecursiveRegExp = function(str, left, right, flags) {
        "use strict";
        var matchPos = rgxFindMatchPos(str, left, right, flags),
          results = [];
        for (var i = 0; i < matchPos.length; ++i) {
          results.push([
            str.slice(matchPos[i].wholeMatch.start, matchPos[i].wholeMatch.end),
            str.slice(matchPos[i].match.start, matchPos[i].match.end),
            str.slice(matchPos[i].left.start, matchPos[i].left.end),
            str.slice(matchPos[i].right.start, matchPos[i].right.end),
          ]);
        }
        return results;
      };
      showdown.helper.replaceRecursiveRegExp = function(str, replacement, left, right, flags) {
        "use strict";
        if (!showdown.helper.isFunction(replacement)) {
          var repStr = replacement;
          replacement = function() {
            return repStr;
          };
        }
        var matchPos = rgxFindMatchPos(str, left, right, flags),
          finalStr = str,
          lng = matchPos.length;
        if (lng > 0) {
          var bits = [];
          if (matchPos[0].wholeMatch.start !== 0) {
            bits.push(str.slice(0, matchPos[0].wholeMatch.start));
          }
          for (var i = 0; i < lng; ++i) {
            bits.push(
              replacement(
                str.slice(matchPos[i].wholeMatch.start, matchPos[i].wholeMatch.end),
                str.slice(matchPos[i].match.start, matchPos[i].match.end),
                str.slice(matchPos[i].left.start, matchPos[i].left.end),
                str.slice(matchPos[i].right.start, matchPos[i].right.end)
              )
            );
            if (i < lng - 1) {
              bits.push(str.slice(matchPos[i].wholeMatch.end, matchPos[i + 1].wholeMatch.start));
            }
          }
          if (matchPos[lng - 1].wholeMatch.end < str.length) {
            bits.push(str.slice(matchPos[lng - 1].wholeMatch.end));
          }
          finalStr = bits.join("");
        }
        return finalStr;
      };
      showdown.helper.regexIndexOf = function(str, regex, fromIndex) {
        "use strict";
        if (!showdown.helper.isString(str)) {
          throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
        }
        if (regex instanceof RegExp === false) {
          throw "InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp";
        }
        var indexOf = str.substring(fromIndex || 0).search(regex);
        return indexOf >= 0 ? indexOf + (fromIndex || 0) : indexOf;
      };
      showdown.helper.splitAtIndex = function(str, index) {
        "use strict";
        if (!showdown.helper.isString(str)) {
          throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
        }
        return [str.substring(0, index), str.substring(index)];
      };
      showdown.helper.encodeEmailAddress = function(mail) {
        "use strict";
        var encode = [
          function(ch) {
            return "&#" + ch.charCodeAt(0) + ";";
          },
          function(ch) {
            return "&#x" + ch.charCodeAt(0).toString(16) + ";";
          },
          function(ch) {
            return ch;
          },
        ];
        mail = mail.replace(/./g, function(ch) {
          if (ch === "@") {
            ch = encode[Math.floor(Math.random() * 2)](ch);
          } else {
            var r = Math.random();
            ch = r > 0.9 ? encode[2](ch) : r > 0.45 ? encode[1](ch) : encode[0](ch);
          }
          return ch;
        });
        return mail;
      };
      showdown.helper.padEnd = function padEnd(str, targetLength, padString) {
        "use strict";
        targetLength = targetLength >> 0;
        padString = String(padString || " ");
        if (str.length > targetLength) {
          return String(str);
        } else {
          targetLength = targetLength - str.length;
          if (targetLength > padString.length) {
            padString += padString.repeat(targetLength / padString.length);
          }
          return String(str) + padString.slice(0, targetLength);
        }
      };
      if (typeof console === "undefined") {
        console = {
          warn: function(msg) {
            "use strict";
            alert(msg);
          },
          log: function(msg) {
            "use strict";
            alert(msg);
          },
          error: function(msg) {
            "use strict";
            throw msg;
          },
        };
      }
      showdown.helper.regexes = {
        asteriskDashAndColon: /([*_:~])/g
      };
      showdown.helper.emojis = {
        "+1": "ðŸ‘",
        "-1": "ðŸ‘Ž",
        100: "ðŸ’¯",
        1234: "ðŸ”¢",
        "1st_place_medal": "ðŸ¥‡",
        "2nd_place_medal": "ðŸ¥ˆ",
        "3rd_place_medal": "ðŸ¥‰",
        "8ball": "ðŸŽ±",
        a: "ðŸ…°ï¸",
        ab: "ðŸ†Ž",
        abc: "ðŸ”¤",
        abcd: "ðŸ”¡",
        accept: "ðŸ‰‘",
        aerial_tramway: "ðŸš¡",
        airplane: "âœˆï¸",
        alarm_clock: "â°",
        alembic: "âš—ï¸",
        alien: "ðŸ‘½",
        ambulance: "ðŸš‘",
        amphora: "ðŸº",
        anchor: "âš“ï¸",
        angel: "ðŸ‘¼",
        anger: "ðŸ’¢",
        angry: "ðŸ˜ ",
        anguished: "ðŸ˜§",
        ant: "ðŸœ",
        apple: "ðŸŽ",
        aquarius: "â™’ï¸",
        aries: "â™ˆï¸",
        arrow_backward: "â—€ï¸",
        arrow_double_down: "â¬",
        arrow_double_up: "â«",
        arrow_down: "â¬‡ï¸",
        arrow_down_small: "ðŸ”½",
        arrow_forward: "â–¶ï¸",
        arrow_heading_down: "â¤µï¸",
        arrow_heading_up: "â¤´ï¸",
        arrow_left: "â¬…ï¸",
        arrow_lower_left: "â†™ï¸",
        arrow_lower_right: "â†˜ï¸",
        arrow_right: "âž¡ï¸",
        arrow_right_hook: "â†ªï¸",
        arrow_up: "â¬†ï¸",
        arrow_up_down: "â†•ï¸",
        arrow_up_small: "ðŸ”¼",
        arrow_upper_left: "â†–ï¸",
        arrow_upper_right: "â†—ï¸",
        arrows_clockwise: "ðŸ”ƒ",
        arrows_counterclockwise: "ðŸ”„",
        art: "ðŸŽ¨",
        articulated_lorry: "ðŸš›",
        artificial_satellite: "ðŸ›°",
        astonished: "ðŸ˜²",
        athletic_shoe: "ðŸ‘Ÿ",
        atm: "ðŸ§",
        atom_symbol: "âš›ï¸",
        avocado: "ðŸ¥‘",
        b: "ðŸ…±ï¸",
        baby: "ðŸ‘¶",
        baby_bottle: "ðŸ¼",
        baby_chick: "ðŸ¤",
        baby_symbol: "ðŸš¼",
        back: "ðŸ”™",
        bacon: "ðŸ¥“",
        badminton: "ðŸ¸",
        baggage_claim: "ðŸ›„",
        baguette_bread: "ðŸ¥–",
        balance_scale: "âš–ï¸",
        balloon: "ðŸŽˆ",
        ballot_box: "ðŸ—³",
        ballot_box_with_check: "â˜‘ï¸",
        bamboo: "ðŸŽ",
        banana: "ðŸŒ",
        bangbang: "â€¼ï¸",
        bank: "ðŸ¦",
        bar_chart: "ðŸ“Š",
        barber: "ðŸ’ˆ",
        baseball: "âš¾ï¸",
        basketball: "ðŸ€",
        basketball_man: "â›¹ï¸",
        basketball_woman: "â›¹ï¸&zwj;â™€ï¸",
        bat: "ðŸ¦‡",
        bath: "ðŸ›€",
        bathtub: "ðŸ›",
        battery: "ðŸ”‹",
        beach_umbrella: "ðŸ–",
        bear: "ðŸ»",
        bed: "ðŸ›",
        bee: "ðŸ",
        beer: "ðŸº",
        beers: "ðŸ»",
        beetle: "ðŸž",
        beginner: "ðŸ”°",
        bell: "ðŸ””",
        bellhop_bell: "ðŸ›Ž",
        bento: "ðŸ±",
        biking_man: "ðŸš´",
        bike: "ðŸš²",
        biking_woman: "ðŸš´&zwj;â™€ï¸",
        bikini: "ðŸ‘™",
        biohazard: "â˜£ï¸",
        bird: "ðŸ¦",
        birthday: "ðŸŽ‚",
        black_circle: "âš«ï¸",
        black_flag: "ðŸ´",
        black_heart: "ðŸ–¤",
        black_joker: "ðŸƒ",
        black_large_square: "â¬›ï¸",
        black_medium_small_square: "â—¾ï¸",
        black_medium_square: "â—¼ï¸",
        black_nib: "âœ’ï¸",
        black_small_square: "â–ªï¸",
        black_square_button: "ðŸ”²",
        blonde_man: "ðŸ‘±",
        blonde_woman: "ðŸ‘±&zwj;â™€ï¸",
        blossom: "ðŸŒ¼",
        blowfish: "ðŸ¡",
        blue_book: "ðŸ“˜",
        blue_car: "ðŸš™",
        blue_heart: "ðŸ’™",
        blush: "ðŸ˜Š",
        boar: "ðŸ—",
        boat: "â›µï¸",
        bomb: "ðŸ’£",
        book: "ðŸ“–",
        bookmark: "ðŸ”–",
        bookmark_tabs: "ðŸ“‘",
        books: "ðŸ“š",
        boom: "ðŸ’¥",
        boot: "ðŸ‘¢",
        bouquet: "ðŸ’",
        bowing_man: "ðŸ™‡",
        bow_and_arrow: "ðŸ¹",
        bowing_woman: "ðŸ™‡&zwj;â™€ï¸",
        bowling: "ðŸŽ³",
        boxing_glove: "ðŸ¥Š",
        boy: "ðŸ‘¦",
        bread: "ðŸž",
        bride_with_veil: "ðŸ‘°",
        bridge_at_night: "ðŸŒ‰",
        briefcase: "ðŸ’¼",
        broken_heart: "ðŸ’”",
        bug: "ðŸ›",
        building_construction: "ðŸ—",
        bulb: "ðŸ’¡",
        bullettrain_front: "ðŸš…",
        bullettrain_side: "ðŸš„",
        burrito: "ðŸŒ¯",
        bus: "ðŸšŒ",
        business_suit_levitating: "ðŸ•´",
        busstop: "ðŸš",
        bust_in_silhouette: "ðŸ‘¤",
        busts_in_silhouette: "ðŸ‘¥",
        butterfly: "ðŸ¦‹",
        cactus: "ðŸŒµ",
        cake: "ðŸ°",
        calendar: "ðŸ“†",
        call_me_hand: "ðŸ¤™",
        calling: "ðŸ“²",
        camel: "ðŸ«",
        camera: "ðŸ“·",
        camera_flash: "ðŸ“¸",
        camping: "ðŸ•",
        cancer: "â™‹ï¸",
        candle: "ðŸ•¯",
        candy: "ðŸ¬",
        canoe: "ðŸ›¶",
        capital_abcd: "ðŸ” ",
        capricorn: "â™‘ï¸",
        car: "ðŸš—",
        card_file_box: "ðŸ—ƒ",
        card_index: "ðŸ“‡",
        card_index_dividers: "ðŸ—‚",
        carousel_horse: "ðŸŽ ",
        carrot: "ðŸ¥•",
        cat: "ðŸ±",
        cat2: "ðŸˆ",
        cd: "ðŸ’¿",
        chains: "â›“",
        champagne: "ðŸ¾",
        chart: "ðŸ’¹",
        chart_with_downwards_trend: "ðŸ“‰",
        chart_with_upwards_trend: "ðŸ“ˆ",
        checkered_flag: "ðŸ",
        cheese: "ðŸ§€",
        cherries: "ðŸ’",
        cherry_blossom: "ðŸŒ¸",
        chestnut: "ðŸŒ°",
        chicken: "ðŸ”",
        children_crossing: "ðŸš¸",
        chipmunk: "ðŸ¿",
        chocolate_bar: "ðŸ«",
        christmas_tree: "ðŸŽ„",
        church: "â›ªï¸",
        cinema: "ðŸŽ¦",
        circus_tent: "ðŸŽª",
        city_sunrise: "ðŸŒ‡",
        city_sunset: "ðŸŒ†",
        cityscape: "ðŸ™",
        cl: "ðŸ†‘",
        clamp: "ðŸ—œ",
        clap: "ðŸ‘",
        clapper: "ðŸŽ¬",
        classical_building: "ðŸ›",
        clinking_glasses: "ðŸ¥‚",
        clipboard: "ðŸ“‹",
        clock1: "ðŸ•",
        clock10: "ðŸ•™",
        clock1030: "ðŸ•¥",
        clock11: "ðŸ•š",
        clock1130: "ðŸ•¦",
        clock12: "ðŸ•›",
        clock1230: "ðŸ•§",
        clock130: "ðŸ•œ",
        clock2: "ðŸ•‘",
        clock230: "ðŸ•",
        clock3: "ðŸ•’",
        clock330: "ðŸ•ž",
        clock4: "ðŸ•“",
        clock430: "ðŸ•Ÿ",
        clock5: "ðŸ•”",
        clock530: "ðŸ• ",
        clock6: "ðŸ••",
        clock630: "ðŸ•¡",
        clock7: "ðŸ•–",
        clock730: "ðŸ•¢",
        clock8: "ðŸ•—",
        clock830: "ðŸ•£",
        clock9: "ðŸ•˜",
        clock930: "ðŸ•¤",
        closed_book: "ðŸ“•",
        closed_lock_with_key: "ðŸ”",
        closed_umbrella: "ðŸŒ‚",
        cloud: "â˜ï¸",
        cloud_with_lightning: "ðŸŒ©",
        cloud_with_lightning_and_rain: "â›ˆ",
        cloud_with_rain: "ðŸŒ§",
        cloud_with_snow: "ðŸŒ¨",
        clown_face: "ðŸ¤¡",
        clubs: "â™£ï¸",
        cocktail: "ðŸ¸",
        coffee: "â˜•ï¸",
        coffin: "âš°ï¸",
        cold_sweat: "ðŸ˜°",
        comet: "â˜„ï¸",
        computer: "ðŸ’»",
        computer_mouse: "ðŸ–±",
        confetti_ball: "ðŸŽŠ",
        confounded: "ðŸ˜–",
        confused: "ðŸ˜•",
        congratulations: "ãŠ—ï¸",
        construction: "ðŸš§",
        construction_worker_man: "ðŸ‘·",
        construction_worker_woman: "ðŸ‘·&zwj;â™€ï¸",
        control_knobs: "ðŸŽ›",
        convenience_store: "ðŸª",
        cookie: "ðŸª",
        cool: "ðŸ†’",
        policeman: "ðŸ‘®",
        copyright: "Â©ï¸",
        corn: "ðŸŒ½",
        couch_and_lamp: "ðŸ›‹",
        couple: "ðŸ‘«",
        couple_with_heart_woman_man: "ðŸ’‘",
        couple_with_heart_man_man: "ðŸ‘¨&zwj;â¤ï¸&zwj;ðŸ‘¨",
        couple_with_heart_woman_woman: "ðŸ‘©&zwj;â¤ï¸&zwj;ðŸ‘©",
        couplekiss_man_man: "ðŸ‘¨&zwj;â¤ï¸&zwj;ðŸ’‹&zwj;ðŸ‘¨",
        couplekiss_man_woman: "ðŸ’",
        couplekiss_woman_woman: "ðŸ‘©&zwj;â¤ï¸&zwj;ðŸ’‹&zwj;ðŸ‘©",
        cow: "ðŸ®",
        cow2: "ðŸ„",
        cowboy_hat_face: "ðŸ¤ ",
        crab: "ðŸ¦€",
        crayon: "ðŸ–",
        credit_card: "ðŸ’³",
        crescent_moon: "ðŸŒ™",
        cricket: "ðŸ",
        crocodile: "ðŸŠ",
        croissant: "ðŸ¥",
        crossed_fingers: "ðŸ¤ž",
        crossed_flags: "ðŸŽŒ",
        crossed_swords: "âš”ï¸",
        crown: "ðŸ‘‘",
        cry: "ðŸ˜¢",
        crying_cat_face: "ðŸ˜¿",
        crystal_ball: "ðŸ”®",
        cucumber: "ðŸ¥’",
        cupid: "ðŸ’˜",
        curly_loop: "âž°",
        currency_exchange: "ðŸ’±",
        curry: "ðŸ›",
        custard: "ðŸ®",
        customs: "ðŸ›ƒ",
        cyclone: "ðŸŒ€",
        dagger: "ðŸ—¡",
        dancer: "ðŸ’ƒ",
        dancing_women: "ðŸ‘¯",
        dancing_men: "ðŸ‘¯&zwj;â™‚ï¸",
        dango: "ðŸ¡",
        dark_sunglasses: "ðŸ•¶",
        dart: "ðŸŽ¯",
        dash: "ðŸ’¨",
        date: "ðŸ“…",
        deciduous_tree: "ðŸŒ³",
        deer: "ðŸ¦Œ",
        department_store: "ðŸ¬",
        derelict_house: "ðŸš",
        desert: "ðŸœ",
        desert_island: "ðŸ",
        desktop_computer: "ðŸ–¥",
        male_detective: "ðŸ•µï¸",
        diamond_shape_with_a_dot_inside: "ðŸ’ ",
        diamonds: "â™¦ï¸",
        disappointed: "ðŸ˜ž",
        disappointed_relieved: "ðŸ˜¥",
        dizzy: "ðŸ’«",
        dizzy_face: "ðŸ˜µ",
        do_not_litter: "ðŸš¯",
        dog: "ðŸ¶",
        dog2: "ðŸ•",
        dollar: "ðŸ’µ",
        dolls: "ðŸŽŽ",
        dolphin: "ðŸ¬",
        door: "ðŸšª",
        doughnut: "ðŸ©",
        dove: "ðŸ•Š",
        dragon: "ðŸ‰",
        dragon_face: "ðŸ²",
        dress: "ðŸ‘—",
        dromedary_camel: "ðŸª",
        drooling_face: "ðŸ¤¤",
        droplet: "ðŸ’§",
        drum: "ðŸ¥",
        duck: "ðŸ¦†",
        dvd: "ðŸ“€",
        "e-mail": "ðŸ“§",
        eagle: "ðŸ¦…",
        ear: "ðŸ‘‚",
        ear_of_rice: "ðŸŒ¾",
        earth_africa: "ðŸŒ",
        earth_americas: "ðŸŒŽ",
        earth_asia: "ðŸŒ",
        egg: "ðŸ¥š",
        eggplant: "ðŸ†",
        eight_pointed_black_star: "âœ´ï¸",
        eight_spoked_asterisk: "âœ³ï¸",
        electric_plug: "ðŸ”Œ",
        elephant: "ðŸ˜",
        email: "âœ‰ï¸",
        end: "ðŸ”š",
        envelope_with_arrow: "ðŸ“©",
        euro: "ðŸ’¶",
        european_castle: "ðŸ°",
        european_post_office: "ðŸ¤",
        evergreen_tree: "ðŸŒ²",
        exclamation: "â—ï¸",
        expressionless: "ðŸ˜‘",
        eye: "ðŸ‘",
        eye_speech_bubble: "ðŸ‘&zwj;ðŸ—¨",
        eyeglasses: "ðŸ‘“",
        eyes: "ðŸ‘€",
        face_with_head_bandage: "ðŸ¤•",
        face_with_thermometer: "ðŸ¤’",
        fist_oncoming: "ðŸ‘Š",
        factory: "ðŸ­",
        fallen_leaf: "ðŸ‚",
        family_man_woman_boy: "ðŸ‘ª",
        family_man_boy: "ðŸ‘¨&zwj;ðŸ‘¦",
        family_man_boy_boy: "ðŸ‘¨&zwj;ðŸ‘¦&zwj;ðŸ‘¦",
        family_man_girl: "ðŸ‘¨&zwj;ðŸ‘§",
        family_man_girl_boy: "ðŸ‘¨&zwj;ðŸ‘§&zwj;ðŸ‘¦",
        family_man_girl_girl: "ðŸ‘¨&zwj;ðŸ‘§&zwj;ðŸ‘§",
        family_man_man_boy: "ðŸ‘¨&zwj;ðŸ‘¨&zwj;ðŸ‘¦",
        family_man_man_boy_boy: "ðŸ‘¨&zwj;ðŸ‘¨&zwj;ðŸ‘¦&zwj;ðŸ‘¦",
        family_man_man_girl: "ðŸ‘¨&zwj;ðŸ‘¨&zwj;ðŸ‘§",
        family_man_man_girl_boy: "ðŸ‘¨&zwj;ðŸ‘¨&zwj;ðŸ‘§&zwj;ðŸ‘¦",
        family_man_man_girl_girl: "ðŸ‘¨&zwj;ðŸ‘¨&zwj;ðŸ‘§&zwj;ðŸ‘§",
        family_man_woman_boy_boy: "ðŸ‘¨&zwj;ðŸ‘©&zwj;ðŸ‘¦&zwj;ðŸ‘¦",
        family_man_woman_girl: "ðŸ‘¨&zwj;ðŸ‘©&zwj;ðŸ‘§",
        family_man_woman_girl_boy: "ðŸ‘¨&zwj;ðŸ‘©&zwj;ðŸ‘§&zwj;ðŸ‘¦",
        family_man_woman_girl_girl: "ðŸ‘¨&zwj;ðŸ‘©&zwj;ðŸ‘§&zwj;ðŸ‘§",
        family_woman_boy: "ðŸ‘©&zwj;ðŸ‘¦",
        family_woman_boy_boy: "ðŸ‘©&zwj;ðŸ‘¦&zwj;ðŸ‘¦",
        family_woman_girl: "ðŸ‘©&zwj;ðŸ‘§",
        family_woman_girl_boy: "ðŸ‘©&zwj;ðŸ‘§&zwj;ðŸ‘¦",
        family_woman_girl_girl: "ðŸ‘©&zwj;ðŸ‘§&zwj;ðŸ‘§",
        family_woman_woman_boy: "ðŸ‘©&zwj;ðŸ‘©&zwj;ðŸ‘¦",
        family_woman_woman_boy_boy: "ðŸ‘©&zwj;ðŸ‘©&zwj;ðŸ‘¦&zwj;ðŸ‘¦",
        family_woman_woman_girl: "ðŸ‘©&zwj;ðŸ‘©&zwj;ðŸ‘§",
        family_woman_woman_girl_boy: "ðŸ‘©&zwj;ðŸ‘©&zwj;ðŸ‘§&zwj;ðŸ‘¦",
        family_woman_woman_girl_girl: "ðŸ‘©&zwj;ðŸ‘©&zwj;ðŸ‘§&zwj;ðŸ‘§",
        fast_forward: "â©",
        fax: "ðŸ“ ",
        fearful: "ðŸ˜¨",
        feet: "ðŸ¾",
        female_detective: "ðŸ•µï¸&zwj;â™€ï¸",
        ferris_wheel: "ðŸŽ¡",
        ferry: "â›´",
        field_hockey: "ðŸ‘",
        file_cabinet: "ðŸ—„",
        file_folder: "ðŸ“",
        film_projector: "ðŸ“½",
        film_strip: "ðŸŽž",
        fire: "ðŸ”¥",
        fire_engine: "ðŸš’",
        fireworks: "ðŸŽ†",
        first_quarter_moon: "ðŸŒ“",
        first_quarter_moon_with_face: "ðŸŒ›",
        fish: "ðŸŸ",
        fish_cake: "ðŸ¥",
        fishing_pole_and_fish: "ðŸŽ£",
        fist_raised: "âœŠ",
        fist_left: "ðŸ¤›",
        fist_right: "ðŸ¤œ",
        flags: "ðŸŽ",
        flashlight: "ðŸ”¦",
        fleur_de_lis: "âšœï¸",
        flight_arrival: "ðŸ›¬",
        flight_departure: "ðŸ›«",
        floppy_disk: "ðŸ’¾",
        flower_playing_cards: "ðŸŽ´",
        flushed: "ðŸ˜³",
        fog: "ðŸŒ«",
        foggy: "ðŸŒ",
        football: "ðŸˆ",
        footprints: "ðŸ‘£",
        fork_and_knife: "ðŸ´",
        fountain: "â›²ï¸",
        fountain_pen: "ðŸ–‹",
        four_leaf_clover: "ðŸ€",
        fox_face: "ðŸ¦Š",
        framed_picture: "ðŸ–¼",
        free: "ðŸ†“",
        fried_egg: "ðŸ³",
        fried_shrimp: "ðŸ¤",
        fries: "ðŸŸ",
        frog: "ðŸ¸",
        frowning: "ðŸ˜¦",
        frowning_face: "â˜¹ï¸",
        frowning_man: "ðŸ™&zwj;â™‚ï¸",
        frowning_woman: "ðŸ™",
        middle_finger: "ðŸ–•",
        fuelpump: "â›½ï¸",
        full_moon: "ðŸŒ•",
        full_moon_with_face: "ðŸŒ",
        funeral_urn: "âš±ï¸",
        game_die: "ðŸŽ²",
        gear: "âš™ï¸",
        gem: "ðŸ’Ž",
        gemini: "â™Šï¸",
        ghost: "ðŸ‘»",
        gift: "ðŸŽ",
        gift_heart: "ðŸ’",
        girl: "ðŸ‘§",
        globe_with_meridians: "ðŸŒ",
        goal_net: "ðŸ¥…",
        goat: "ðŸ",
        golf: "â›³ï¸",
        golfing_man: "ðŸŒï¸",
        golfing_woman: "ðŸŒï¸&zwj;â™€ï¸",
        gorilla: "ðŸ¦",
        grapes: "ðŸ‡",
        green_apple: "ðŸ",
        green_book: "ðŸ“—",
        green_heart: "ðŸ’š",
        green_salad: "ðŸ¥—",
        grey_exclamation: "â•",
        grey_question: "â”",
        grimacing: "ðŸ˜¬",
        grin: "ðŸ˜",
        grinning: "ðŸ˜€",
        guardsman: "ðŸ’‚",
        guardswoman: "ðŸ’‚&zwj;â™€ï¸",
        guitar: "ðŸŽ¸",
        gun: "ðŸ”«",
        haircut_woman: "ðŸ’‡",
        haircut_man: "ðŸ’‡&zwj;â™‚ï¸",
        hamburger: "ðŸ”",
        hammer: "ðŸ”¨",
        hammer_and_pick: "âš’",
        hammer_and_wrench: "ðŸ› ",
        hamster: "ðŸ¹",
        hand: "âœ‹",
        handbag: "ðŸ‘œ",
        handshake: "ðŸ¤",
        hankey: "ðŸ’©",
        hatched_chick: "ðŸ¥",
        hatching_chick: "ðŸ£",
        headphones: "ðŸŽ§",
        hear_no_evil: "ðŸ™‰",
        heart: "â¤ï¸",
        heart_decoration: "ðŸ’Ÿ",
        heart_eyes: "ðŸ˜",
        heart_eyes_cat: "ðŸ˜»",
        heartbeat: "ðŸ’“",
        heartpulse: "ðŸ’—",
        hearts: "â™¥ï¸",
        heavy_check_mark: "âœ”ï¸",
        heavy_division_sign: "âž—",
        heavy_dollar_sign: "ðŸ’²",
        heavy_heart_exclamation: "â£ï¸",
        heavy_minus_sign: "âž–",
        heavy_multiplication_x: "âœ–ï¸",
        heavy_plus_sign: "âž•",
        helicopter: "ðŸš",
        herb: "ðŸŒ¿",
        hibiscus: "ðŸŒº",
        high_brightness: "ðŸ”†",
        high_heel: "ðŸ‘ ",
        hocho: "ðŸ”ª",
        hole: "ðŸ•³",
        honey_pot: "ðŸ¯",
        horse: "ðŸ´",
        horse_racing: "ðŸ‡",
        hospital: "ðŸ¥",
        hot_pepper: "ðŸŒ¶",
        hotdog: "ðŸŒ­",
        hotel: "ðŸ¨",
        hotsprings: "â™¨ï¸",
        hourglass: "âŒ›ï¸",
        hourglass_flowing_sand: "â³",
        house: "ðŸ ",
        house_with_garden: "ðŸ¡",
        houses: "ðŸ˜",
        hugs: "ðŸ¤—",
        hushed: "ðŸ˜¯",
        ice_cream: "ðŸ¨",
        ice_hockey: "ðŸ’",
        ice_skate: "â›¸",
        icecream: "ðŸ¦",
        id: "ðŸ†”",
        ideograph_advantage: "ðŸ‰",
        imp: "ðŸ‘¿",
        inbox_tray: "ðŸ“¥",
        incoming_envelope: "ðŸ“¨",
        tipping_hand_woman: "ðŸ’",
        information_source: "â„¹ï¸",
        innocent: "ðŸ˜‡",
        interrobang: "â‰ï¸",
        iphone: "ðŸ“±",
        izakaya_lantern: "ðŸ®",
        jack_o_lantern: "ðŸŽƒ",
        japan: "ðŸ—¾",
        japanese_castle: "ðŸ¯",
        japanese_goblin: "ðŸ‘º",
        japanese_ogre: "ðŸ‘¹",
        jeans: "ðŸ‘–",
        joy: "ðŸ˜‚",
        joy_cat: "ðŸ˜¹",
        joystick: "ðŸ•¹",
        kaaba: "ðŸ•‹",
        key: "ðŸ”‘",
        keyboard: "âŒ¨ï¸",
        keycap_ten: "ðŸ”Ÿ",
        kick_scooter: "ðŸ›´",
        kimono: "ðŸ‘˜",
        kiss: "ðŸ’‹",
        kissing: "ðŸ˜—",
        kissing_cat: "ðŸ˜½",
        kissing_closed_eyes: "ðŸ˜š",
        kissing_heart: "ðŸ˜˜",
        kissing_smiling_eyes: "ðŸ˜™",
        kiwi_fruit: "ðŸ¥",
        koala: "ðŸ¨",
        koko: "ðŸˆ",
        label: "ðŸ·",
        large_blue_circle: "ðŸ”µ",
        large_blue_diamond: "ðŸ”·",
        large_orange_diamond: "ðŸ”¶",
        last_quarter_moon: "ðŸŒ—",
        last_quarter_moon_with_face: "ðŸŒœ",
        latin_cross: "âœï¸",
        laughing: "ðŸ˜†",
        leaves: "ðŸƒ",
        ledger: "ðŸ“’",
        left_luggage: "ðŸ›…",
        left_right_arrow: "â†”ï¸",
        leftwards_arrow_with_hook: "â†©ï¸",
        lemon: "ðŸ‹",
        leo: "â™Œï¸",
        leopard: "ðŸ†",
        level_slider: "ðŸŽš",
        libra: "â™Žï¸",
        light_rail: "ðŸšˆ",
        link: "ðŸ”—",
        lion: "ðŸ¦",
        lips: "ðŸ‘„",
        lipstick: "ðŸ’„",
        lizard: "ðŸ¦Ž",
        lock: "ðŸ”’",
        lock_with_ink_pen: "ðŸ”",
        lollipop: "ðŸ­",
        loop: "âž¿",
        loud_sound: "ðŸ”Š",
        loudspeaker: "ðŸ“¢",
        love_hotel: "ðŸ©",
        love_letter: "ðŸ’Œ",
        low_brightness: "ðŸ”…",
        lying_face: "ðŸ¤¥",
        m: "â“‚ï¸",
        mag: "ðŸ”",
        mag_right: "ðŸ”Ž",
        mahjong: "ðŸ€„ï¸",
        mailbox: "ðŸ“«",
        mailbox_closed: "ðŸ“ª",
        mailbox_with_mail: "ðŸ“¬",
        mailbox_with_no_mail: "ðŸ“­",
        man: "ðŸ‘¨",
        man_artist: "ðŸ‘¨&zwj;ðŸŽ¨",
        man_astronaut: "ðŸ‘¨&zwj;ðŸš€",
        man_cartwheeling: "ðŸ¤¸&zwj;â™‚ï¸",
        man_cook: "ðŸ‘¨&zwj;ðŸ³",
        man_dancing: "ðŸ•º",
        man_facepalming: "ðŸ¤¦&zwj;â™‚ï¸",
        man_factory_worker: "ðŸ‘¨&zwj;ðŸ­",
        man_farmer: "ðŸ‘¨&zwj;ðŸŒ¾",
        man_firefighter: "ðŸ‘¨&zwj;ðŸš’",
        man_health_worker: "ðŸ‘¨&zwj;âš•ï¸",
        man_in_tuxedo: "ðŸ¤µ",
        man_judge: "ðŸ‘¨&zwj;âš–ï¸",
        man_juggling: "ðŸ¤¹&zwj;â™‚ï¸",
        man_mechanic: "ðŸ‘¨&zwj;ðŸ”§",
        man_office_worker: "ðŸ‘¨&zwj;ðŸ’¼",
        man_pilot: "ðŸ‘¨&zwj;âœˆï¸",
        man_playing_handball: "ðŸ¤¾&zwj;â™‚ï¸",
        man_playing_water_polo: "ðŸ¤½&zwj;â™‚ï¸",
        man_scientist: "ðŸ‘¨&zwj;ðŸ”¬",
        man_shrugging: "ðŸ¤·&zwj;â™‚ï¸",
        man_singer: "ðŸ‘¨&zwj;ðŸŽ¤",
        man_student: "ðŸ‘¨&zwj;ðŸŽ“",
        man_teacher: "ðŸ‘¨&zwj;ðŸ«",
        man_technologist: "ðŸ‘¨&zwj;ðŸ’»",
        man_with_gua_pi_mao: "ðŸ‘²",
        man_with_turban: "ðŸ‘³",
        tangerine: "ðŸŠ",
        mans_shoe: "ðŸ‘ž",
        mantelpiece_clock: "ðŸ•°",
        maple_leaf: "ðŸ",
        martial_arts_uniform: "ðŸ¥‹",
        mask: "ðŸ˜·",
        massage_woman: "ðŸ’†",
        massage_man: "ðŸ’†&zwj;â™‚ï¸",
        meat_on_bone: "ðŸ–",
        medal_military: "ðŸŽ–",
        medal_sports: "ðŸ…",
        mega: "ðŸ“£",
        melon: "ðŸˆ",
        memo: "ðŸ“",
        men_wrestling: "ðŸ¤¼&zwj;â™‚ï¸",
        menorah: "ðŸ•Ž",
        mens: "ðŸš¹",
        metal: "ðŸ¤˜",
        metro: "ðŸš‡",
        microphone: "ðŸŽ¤",
        microscope: "ðŸ”¬",
        milk_glass: "ðŸ¥›",
        milky_way: "ðŸŒŒ",
        minibus: "ðŸš",
        minidisc: "ðŸ’½",
        mobile_phone_off: "ðŸ“´",
        money_mouth_face: "ðŸ¤‘",
        money_with_wings: "ðŸ’¸",
        moneybag: "ðŸ’°",
        monkey: "ðŸ’",
        monkey_face: "ðŸµ",
        monorail: "ðŸš",
        moon: "ðŸŒ”",
        mortar_board: "ðŸŽ“",
        mosque: "ðŸ•Œ",
        motor_boat: "ðŸ›¥",
        motor_scooter: "ðŸ›µ",
        motorcycle: "ðŸ",
        motorway: "ðŸ›£",
        mount_fuji: "ðŸ—»",
        mountain: "â›°",
        mountain_biking_man: "ðŸšµ",
        mountain_biking_woman: "ðŸšµ&zwj;â™€ï¸",
        mountain_cableway: "ðŸš ",
        mountain_railway: "ðŸšž",
        mountain_snow: "ðŸ”",
        mouse: "ðŸ­",
        mouse2: "ðŸ",
        movie_camera: "ðŸŽ¥",
        moyai: "ðŸ—¿",
        mrs_claus: "ðŸ¤¶",
        muscle: "ðŸ’ª",
        mushroom: "ðŸ„",
        musical_keyboard: "ðŸŽ¹",
        musical_note: "ðŸŽµ",
        musical_score: "ðŸŽ¼",
        mute: "ðŸ”‡",
        nail_care: "ðŸ’…",
        name_badge: "ðŸ“›",
        national_park: "ðŸž",
        nauseated_face: "ðŸ¤¢",
        necktie: "ðŸ‘”",
        negative_squared_cross_mark: "âŽ",
        nerd_face: "ðŸ¤“",
        neutral_face: "ðŸ˜",
        new: "ðŸ†•",
        new_moon: "ðŸŒ‘",
        new_moon_with_face: "ðŸŒš",
        newspaper: "ðŸ“°",
        newspaper_roll: "ðŸ—ž",
        next_track_button: "â­",
        ng: "ðŸ†–",
        no_good_man: "ðŸ™…&zwj;â™‚ï¸",
        no_good_woman: "ðŸ™…",
        night_with_stars: "ðŸŒƒ",
        no_bell: "ðŸ”•",
        no_bicycles: "ðŸš³",
        no_entry: "â›”ï¸",
        no_entry_sign: "ðŸš«",
        no_mobile_phones: "ðŸ“µ",
        no_mouth: "ðŸ˜¶",
        no_pedestrians: "ðŸš·",
        no_smoking: "ðŸš­",
        "non-potable_water": "ðŸš±",
        nose: "ðŸ‘ƒ",
        notebook: "ðŸ““",
        notebook_with_decorative_cover: "ðŸ“”",
        notes: "ðŸŽ¶",
        nut_and_bolt: "ðŸ”©",
        o: "â­•ï¸",
        o2: "ðŸ…¾ï¸",
        ocean: "ðŸŒŠ",
        octopus: "ðŸ™",
        oden: "ðŸ¢",
        office: "ðŸ¢",
        oil_drum: "ðŸ›¢",
        ok: "ðŸ†—",
        ok_hand: "ðŸ‘Œ",
        ok_man: "ðŸ™†&zwj;â™‚ï¸",
        ok_woman: "ðŸ™†",
        old_key: "ðŸ—",
        older_man: "ðŸ‘´",
        older_woman: "ðŸ‘µ",
        om: "ðŸ•‰",
        on: "ðŸ”›",
        oncoming_automobile: "ðŸš˜",
        oncoming_bus: "ðŸš",
        oncoming_police_car: "ðŸš”",
        oncoming_taxi: "ðŸš–",
        open_file_folder: "ðŸ“‚",
        open_hands: "ðŸ‘",
        open_mouth: "ðŸ˜®",
        open_umbrella: "â˜‚ï¸",
        ophiuchus: "â›Ž",
        orange_book: "ðŸ“™",
        orthodox_cross: "â˜¦ï¸",
        outbox_tray: "ðŸ“¤",
        owl: "ðŸ¦‰",
        ox: "ðŸ‚",
        package: "ðŸ“¦",
        page_facing_up: "ðŸ“„",
        page_with_curl: "ðŸ“ƒ",
        pager: "ðŸ“Ÿ",
        paintbrush: "ðŸ–Œ",
        palm_tree: "ðŸŒ´",
        pancakes: "ðŸ¥ž",
        panda_face: "ðŸ¼",
        paperclip: "ðŸ“Ž",
        paperclips: "ðŸ–‡",
        parasol_on_ground: "â›±",
        parking: "ðŸ…¿ï¸",
        part_alternation_mark: "ã€½ï¸",
        partly_sunny: "â›…ï¸",
        passenger_ship: "ðŸ›³",
        passport_control: "ðŸ›‚",
        pause_button: "â¸",
        peace_symbol: "â˜®ï¸",
        peach: "ðŸ‘",
        peanuts: "ðŸ¥œ",
        pear: "ðŸ",
        pen: "ðŸ–Š",
        pencil2: "âœï¸",
        penguin: "ðŸ§",
        pensive: "ðŸ˜”",
        performing_arts: "ðŸŽ­",
        persevere: "ðŸ˜£",
        person_fencing: "ðŸ¤º",
        pouting_woman: "ðŸ™Ž",
        phone: "â˜Žï¸",
        pick: "â›",
        pig: "ðŸ·",
        pig2: "ðŸ–",
        pig_nose: "ðŸ½",
        pill: "ðŸ’Š",
        pineapple: "ðŸ",
        ping_pong: "ðŸ“",
        pisces: "â™“ï¸",
        pizza: "ðŸ•",
        place_of_worship: "ðŸ›",
        plate_with_cutlery: "ðŸ½",
        play_or_pause_button: "â¯",
        point_down: "ðŸ‘‡",
        point_left: "ðŸ‘ˆ",
        point_right: "ðŸ‘‰",
        point_up: "â˜ï¸",
        point_up_2: "ðŸ‘†",
        police_car: "ðŸš“",
        policewoman: "ðŸ‘®&zwj;â™€ï¸",
        poodle: "ðŸ©",
        popcorn: "ðŸ¿",
        post_office: "ðŸ£",
        postal_horn: "ðŸ“¯",
        postbox: "ðŸ“®",
        potable_water: "ðŸš°",
        potato: "ðŸ¥”",
        pouch: "ðŸ‘",
        poultry_leg: "ðŸ—",
        pound: "ðŸ’·",
        rage: "ðŸ˜¡",
        pouting_cat: "ðŸ˜¾",
        pouting_man: "ðŸ™Ž&zwj;â™‚ï¸",
        pray: "ðŸ™",
        prayer_beads: "ðŸ“¿",
        pregnant_woman: "ðŸ¤°",
        previous_track_button: "â®",
        prince: "ðŸ¤´",
        princess: "ðŸ‘¸",
        printer: "ðŸ–¨",
        purple_heart: "ðŸ’œ",
        purse: "ðŸ‘›",
        pushpin: "ðŸ“Œ",
        put_litter_in_its_place: "ðŸš®",
        question: "â“",
        rabbit: "ðŸ°",
        rabbit2: "ðŸ‡",
        racehorse: "ðŸŽ",
        racing_car: "ðŸŽ",
        radio: "ðŸ“»",
        radio_button: "ðŸ”˜",
        radioactive: "â˜¢ï¸",
        railway_car: "ðŸšƒ",
        railway_track: "ðŸ›¤",
        rainbow: "ðŸŒˆ",
        rainbow_flag: "ðŸ³ï¸&zwj;ðŸŒˆ",
        raised_back_of_hand: "ðŸ¤š",
        raised_hand_with_fingers_splayed: "ðŸ–",
        raised_hands: "ðŸ™Œ",
        raising_hand_woman: "ðŸ™‹",
        raising_hand_man: "ðŸ™‹&zwj;â™‚ï¸",
        ram: "ðŸ",
        ramen: "ðŸœ",
        rat: "ðŸ€",
        record_button: "âº",
        recycle: "â™»ï¸",
        red_circle: "ðŸ”´",
        registered: "Â®ï¸",
        relaxed: "â˜ºï¸",
        relieved: "ðŸ˜Œ",
        reminder_ribbon: "ðŸŽ—",
        repeat: "ðŸ”",
        repeat_one: "ðŸ”‚",
        rescue_worker_helmet: "â›‘",
        restroom: "ðŸš»",
        revolving_hearts: "ðŸ’ž",
        rewind: "âª",
        rhinoceros: "ðŸ¦",
        ribbon: "ðŸŽ€",
        rice: "ðŸš",
        rice_ball: "ðŸ™",
        rice_cracker: "ðŸ˜",
        rice_scene: "ðŸŽ‘",
        right_anger_bubble: "ðŸ—¯",
        ring: "ðŸ’",
        robot: "ðŸ¤–",
        rocket: "ðŸš€",
        rofl: "ðŸ¤£",
        roll_eyes: "ðŸ™„",
        roller_coaster: "ðŸŽ¢",
        rooster: "ðŸ“",
        rose: "ðŸŒ¹",
        rosette: "ðŸµ",
        rotating_light: "ðŸš¨",
        round_pushpin: "ðŸ“",
        rowing_man: "ðŸš£",
        rowing_woman: "ðŸš£&zwj;â™€ï¸",
        rugby_football: "ðŸ‰",
        running_man: "ðŸƒ",
        running_shirt_with_sash: "ðŸŽ½",
        running_woman: "ðŸƒ&zwj;â™€ï¸",
        sa: "ðŸˆ‚ï¸",
        sagittarius: "â™ï¸",
        sake: "ðŸ¶",
        sandal: "ðŸ‘¡",
        santa: "ðŸŽ…",
        satellite: "ðŸ“¡",
        saxophone: "ðŸŽ·",
        school: "ðŸ«",
        school_satchel: "ðŸŽ’",
        scissors: "âœ‚ï¸",
        scorpion: "ðŸ¦‚",
        scorpius: "â™ï¸",
        scream: "ðŸ˜±",
        scream_cat: "ðŸ™€",
        scroll: "ðŸ“œ",
        seat: "ðŸ’º",
        secret: "ãŠ™ï¸",
        see_no_evil: "ðŸ™ˆ",
        seedling: "ðŸŒ±",
        selfie: "ðŸ¤³",
        shallow_pan_of_food: "ðŸ¥˜",
        shamrock: "â˜˜ï¸",
        shark: "ðŸ¦ˆ",
        shaved_ice: "ðŸ§",
        sheep: "ðŸ‘",
        shell: "ðŸš",
        shield: "ðŸ›¡",
        shinto_shrine: "â›©",
        ship: "ðŸš¢",
        shirt: "ðŸ‘•",
        shopping: "ðŸ›",
        shopping_cart: "ðŸ›’",
        shower: "ðŸš¿",
        shrimp: "ðŸ¦",
        signal_strength: "ðŸ“¶",
        six_pointed_star: "ðŸ”¯",
        ski: "ðŸŽ¿",
        skier: "â›·",
        skull: "ðŸ’€",
        skull_and_crossbones: "â˜ ï¸",
        sleeping: "ðŸ˜´",
        sleeping_bed: "ðŸ›Œ",
        sleepy: "ðŸ˜ª",
        slightly_frowning_face: "ðŸ™",
        slightly_smiling_face: "ðŸ™‚",
        slot_machine: "ðŸŽ°",
        small_airplane: "ðŸ›©",
        small_blue_diamond: "ðŸ”¹",
        small_orange_diamond: "ðŸ”¸",
        small_red_triangle: "ðŸ”º",
        small_red_triangle_down: "ðŸ”»",
        smile: "ðŸ˜„",
        smile_cat: "ðŸ˜¸",
        smiley: "ðŸ˜ƒ",
        smiley_cat: "ðŸ˜º",
        smiling_imp: "ðŸ˜ˆ",
        smirk: "ðŸ˜",
        smirk_cat: "ðŸ˜¼",
        smoking: "ðŸš¬",
        snail: "ðŸŒ",
        snake: "ðŸ",
        sneezing_face: "ðŸ¤§",
        snowboarder: "ðŸ‚",
        snowflake: "â„ï¸",
        snowman: "â›„ï¸",
        snowman_with_snow: "â˜ƒï¸",
        sob: "ðŸ˜­",
        soccer: "âš½ï¸",
        soon: "ðŸ”œ",
        sos: "ðŸ†˜",
        sound: "ðŸ”‰",
        space_invader: "ðŸ‘¾",
        spades: "â™ ï¸",
        spaghetti: "ðŸ",
        sparkle: "â‡ï¸",
        sparkler: "ðŸŽ‡",
        sparkles: "âœ¨",
        sparkling_heart: "ðŸ’–",
        speak_no_evil: "ðŸ™Š",
        speaker: "ðŸ”ˆ",
        speaking_head: "ðŸ—£",
        speech_balloon: "ðŸ’¬",
        speedboat: "ðŸš¤",
        spider: "ðŸ•·",
        spider_web: "ðŸ•¸",
        spiral_calendar: "ðŸ—“",
        spiral_notepad: "ðŸ—’",
        spoon: "ðŸ¥„",
        squid: "ðŸ¦‘",
        stadium: "ðŸŸ",
        star: "â­ï¸",
        star2: "ðŸŒŸ",
        star_and_crescent: "â˜ªï¸",
        star_of_david: "âœ¡ï¸",
        stars: "ðŸŒ ",
        station: "ðŸš‰",
        statue_of_liberty: "ðŸ—½",
        steam_locomotive: "ðŸš‚",
        stew: "ðŸ²",
        stop_button: "â¹",
        stop_sign: "ðŸ›‘",
        stopwatch: "â±",
        straight_ruler: "ðŸ“",
        strawberry: "ðŸ“",
        stuck_out_tongue: "ðŸ˜›",
        stuck_out_tongue_closed_eyes: "ðŸ˜",
        stuck_out_tongue_winking_eye: "ðŸ˜œ",
        studio_microphone: "ðŸŽ™",
        stuffed_flatbread: "ðŸ¥™",
        sun_behind_large_cloud: "ðŸŒ¥",
        sun_behind_rain_cloud: "ðŸŒ¦",
        sun_behind_small_cloud: "ðŸŒ¤",
        sun_with_face: "ðŸŒž",
        sunflower: "ðŸŒ»",
        sunglasses: "ðŸ˜Ž",
        sunny: "â˜€ï¸",
        sunrise: "ðŸŒ…",
        sunrise_over_mountains: "ðŸŒ„",
        surfing_man: "ðŸ„",
        surfing_woman: "ðŸ„&zwj;â™€ï¸",
        sushi: "ðŸ£",
        suspension_railway: "ðŸšŸ",
        sweat: "ðŸ˜“",
        sweat_drops: "ðŸ’¦",
        sweat_smile: "ðŸ˜…",
        sweet_potato: "ðŸ ",
        swimming_man: "ðŸŠ",
        swimming_woman: "ðŸŠ&zwj;â™€ï¸",
        symbols: "ðŸ”£",
        synagogue: "ðŸ•",
        syringe: "ðŸ’‰",
        taco: "ðŸŒ®",
        tada: "ðŸŽ‰",
        tanabata_tree: "ðŸŽ‹",
        taurus: "â™‰ï¸",
        taxi: "ðŸš•",
        tea: "ðŸµ",
        telephone_receiver: "ðŸ“ž",
        telescope: "ðŸ”­",
        tennis: "ðŸŽ¾",
        tent: "â›ºï¸",
        thermometer: "ðŸŒ¡",
        thinking: "ðŸ¤”",
        thought_balloon: "ðŸ’­",
        ticket: "ðŸŽ«",
        tickets: "ðŸŽŸ",
        tiger: "ðŸ¯",
        tiger2: "ðŸ…",
        timer_clock: "â²",
        tipping_hand_man: "ðŸ’&zwj;â™‚ï¸",
        tired_face: "ðŸ˜«",
        tm: "â„¢ï¸",
        toilet: "ðŸš½",
        tokyo_tower: "ðŸ—¼",
        tomato: "ðŸ…",
        tongue: "ðŸ‘…",
        top: "ðŸ”",
        tophat: "ðŸŽ©",
        tornado: "ðŸŒª",
        trackball: "ðŸ–²",
        tractor: "ðŸšœ",
        traffic_light: "ðŸš¥",
        train: "ðŸš‹",
        train2: "ðŸš†",
        tram: "ðŸšŠ",
        triangular_flag_on_post: "ðŸš©",
        triangular_ruler: "ðŸ“",
        trident: "ðŸ”±",
        triumph: "ðŸ˜¤",
        trolleybus: "ðŸšŽ",
        trophy: "ðŸ†",
        tropical_drink: "ðŸ¹",
        tropical_fish: "ðŸ ",
        truck: "ðŸšš",
        trumpet: "ðŸŽº",
        tulip: "ðŸŒ·",
        tumbler_glass: "ðŸ¥ƒ",
        turkey: "ðŸ¦ƒ",
        turtle: "ðŸ¢",
        tv: "ðŸ“º",
        twisted_rightwards_arrows: "ðŸ”€",
        two_hearts: "ðŸ’•",
        two_men_holding_hands: "ðŸ‘¬",
        two_women_holding_hands: "ðŸ‘­",
        u5272: "ðŸˆ¹",
        u5408: "ðŸˆ´",
        u55b6: "ðŸˆº",
        u6307: "ðŸˆ¯ï¸",
        u6708: "ðŸˆ·ï¸",
        u6709: "ðŸˆ¶",
        u6e80: "ðŸˆµ",
        u7121: "ðŸˆšï¸",
        u7533: "ðŸˆ¸",
        u7981: "ðŸˆ²",
        u7a7a: "ðŸˆ³",
        umbrella: "â˜”ï¸",
        unamused: "ðŸ˜’",
        underage: "ðŸ”ž",
        unicorn: "ðŸ¦„",
        unlock: "ðŸ”“",
        up: "ðŸ†™",
        upside_down_face: "ðŸ™ƒ",
        v: "âœŒï¸",
        vertical_traffic_light: "ðŸš¦",
        vhs: "ðŸ“¼",
        vibration_mode: "ðŸ“³",
        video_camera: "ðŸ“¹",
        video_game: "ðŸŽ®",
        violin: "ðŸŽ»",
        virgo: "â™ï¸",
        volcano: "ðŸŒ‹",
        volleyball: "ðŸ",
        vs: "ðŸ†š",
        vulcan_salute: "ðŸ––",
        walking_man: "ðŸš¶",
        walking_woman: "ðŸš¶&zwj;â™€ï¸",
        waning_crescent_moon: "ðŸŒ˜",
        waning_gibbous_moon: "ðŸŒ–",
        warning: "âš ï¸",
        wastebasket: "ðŸ—‘",
        watch: "âŒšï¸",
        water_buffalo: "ðŸƒ",
        watermelon: "ðŸ‰",
        wave: "ðŸ‘‹",
        wavy_dash: "ã€°ï¸",
        waxing_crescent_moon: "ðŸŒ’",
        wc: "ðŸš¾",
        weary: "ðŸ˜©",
        wedding: "ðŸ’’",
        weight_lifting_man: "ðŸ‹ï¸",
        weight_lifting_woman: "ðŸ‹ï¸&zwj;â™€ï¸",
        whale: "ðŸ³",
        whale2: "ðŸ‹",
        wheel_of_dharma: "â˜¸ï¸",
        wheelchair: "â™¿ï¸",
        white_check_mark: "âœ…",
        white_circle: "âšªï¸",
        white_flag: "ðŸ³ï¸",
        white_flower: "ðŸ’®",
        white_large_square: "â¬œï¸",
        white_medium_small_square: "â—½ï¸",
        white_medium_square: "â—»ï¸",
        white_small_square: "â–«ï¸",
        white_square_button: "ðŸ”³",
        wilted_flower: "ðŸ¥€",
        wind_chime: "ðŸŽ",
        wind_face: "ðŸŒ¬",
        wine_glass: "ðŸ·",
        wink: "ðŸ˜‰",
        wolf: "ðŸº",
        woman: "ðŸ‘©",
        woman_artist: "ðŸ‘©&zwj;ðŸŽ¨",
        woman_astronaut: "ðŸ‘©&zwj;ðŸš€",
        woman_cartwheeling: "ðŸ¤¸&zwj;â™€ï¸",
        woman_cook: "ðŸ‘©&zwj;ðŸ³",
        woman_facepalming: "ðŸ¤¦&zwj;â™€ï¸",
        woman_factory_worker: "ðŸ‘©&zwj;ðŸ­",
        woman_farmer: "ðŸ‘©&zwj;ðŸŒ¾",
        woman_firefighter: "ðŸ‘©&zwj;ðŸš’",
        woman_health_worker: "ðŸ‘©&zwj;âš•ï¸",
        woman_judge: "ðŸ‘©&zwj;âš–ï¸",
        woman_juggling: "ðŸ¤¹&zwj;â™€ï¸",
        woman_mechanic: "ðŸ‘©&zwj;ðŸ”§",
        woman_office_worker: "ðŸ‘©&zwj;ðŸ’¼",
        woman_pilot: "ðŸ‘©&zwj;âœˆï¸",
        woman_playing_handball: "ðŸ¤¾&zwj;â™€ï¸",
        woman_playing_water_polo: "ðŸ¤½&zwj;â™€ï¸",
        woman_scientist: "ðŸ‘©&zwj;ðŸ”¬",
        woman_shrugging: "ðŸ¤·&zwj;â™€ï¸",
        woman_singer: "ðŸ‘©&zwj;ðŸŽ¤",
        woman_student: "ðŸ‘©&zwj;ðŸŽ“",
        woman_teacher: "ðŸ‘©&zwj;ðŸ«",
        woman_technologist: "ðŸ‘©&zwj;ðŸ’»",
        woman_with_turban: "ðŸ‘³&zwj;â™€ï¸",
        womans_clothes: "ðŸ‘š",
        womans_hat: "ðŸ‘’",
        women_wrestling: "ðŸ¤¼&zwj;â™€ï¸",
        womens: "ðŸšº",
        world_map: "ðŸ—º",
        worried: "ðŸ˜Ÿ",
        wrench: "ðŸ”§",
        writing_hand: "âœï¸",
        x: "âŒ",
        yellow_heart: "ðŸ’›",
        yen: "ðŸ’´",
        yin_yang: "â˜¯ï¸",
        yum: "ðŸ˜‹",
        zap: "âš¡ï¸",
        zipper_mouth_face: "ðŸ¤",
        zzz: "ðŸ’¤",
        octocat: '<img alt=":octocat:" height="20" width="20" align="absmiddle" src="https://assets-cdn.github.com/images/icons/emoji/octocat.png">',
        showdown: "<span style=\"font-family: 'Anonymous Pro', monospace; text-decoration: underline; text-decoration-style: dashed; text-decoration-color: #3e8b8a;text-underline-position: under;\">S</span>",
      };
      showdown.Converter = function(converterOptions) {
        "use strict";
        var options = {},
          langExtensions = [],
          outputModifiers = [],
          listeners = {},
          setConvFlavor = setFlavor,
          metadata = {
            parsed: {},
            raw: "",
            format: ""
          };
        _constructor();

        function _constructor() {
          converterOptions = converterOptions || {};
          for (var gOpt in globalOptions) {
            if (globalOptions.hasOwnProperty(gOpt)) {
              options[gOpt] = globalOptions[gOpt];
            }
          }
          if (typeof converterOptions === "object") {
            for (var opt in converterOptions) {
              if (converterOptions.hasOwnProperty(opt)) {
                options[opt] = converterOptions[opt];
              }
            }
          } else {
            throw Error("Converter expects the passed parameter to be an object, but " + typeof converterOptions + " was passed instead.");
          }
          if (options.extensions) {
            showdown.helper.forEach(options.extensions, _parseExtension);
          }
        }

        function _parseExtension(ext, name) {
          name = name || null;
          if (showdown.helper.isString(ext)) {
            ext = showdown.helper.stdExtName(ext);
            name = ext;
            if (showdown.extensions[ext]) {
              console.warn("DEPRECATION WARNING: " + ext + " is an old extension that uses a deprecated loading method." + "Please inform the developer that the extension should be updated!");
              legacyExtensionLoading(showdown.extensions[ext], ext);
              return;
            } else if (!showdown.helper.isUndefined(extensions[ext])) {
              ext = extensions[ext];
            } else {
              throw Error('Extension "' + ext + '" could not be loaded. It was either not found or is not a valid extension.');
            }
          }
          if (typeof ext === "function") {
            ext = ext();
          }
          if (!showdown.helper.isArray(ext)) {
            ext = [ext];
          }
          var validExt = validate(ext, name);
          if (!validExt.valid) {
            throw Error(validExt.error);
          }
          for (var i = 0; i < ext.length; ++i) {
            switch (ext[i].type) {
              case "lang":
                langExtensions.push(ext[i]);
                break;
              case "output":
                outputModifiers.push(ext[i]);
                break;
            }
            if (ext[i].hasOwnProperty("listeners")) {
              for (var ln in ext[i].listeners) {
                if (ext[i].listeners.hasOwnProperty(ln)) {
                  listen(ln, ext[i].listeners[ln]);
                }
              }
            }
          }
        }

        function legacyExtensionLoading(ext, name) {
          if (typeof ext === "function") {
            ext = ext(new showdown.Converter());
          }
          if (!showdown.helper.isArray(ext)) {
            ext = [ext];
          }
          var valid = validate(ext, name);
          if (!valid.valid) {
            throw Error(valid.error);
          }
          for (var i = 0; i < ext.length; ++i) {
            switch (ext[i].type) {
              case "lang":
                langExtensions.push(ext[i]);
                break;
              case "output":
                outputModifiers.push(ext[i]);
                break;
              default:
                throw Error("Extension loader error: Type unrecognized!!!");
            }
          }
        }

        function listen(name, callback) {
          if (!showdown.helper.isString(name)) {
            throw Error("Invalid argument in converter.listen() method: name must be a string, but " + typeof name + " given");
          }
          if (typeof callback !== "function") {
            throw Error("Invalid argument in converter.listen() method: callback must be a function, but " + typeof callback + " given");
          }
          if (!listeners.hasOwnProperty(name)) {
            listeners[name] = [];
          }
          listeners[name].push(callback);
        }

        function rTrimInputText(text) {
          var rsp = text.match(/^\s*/)[0].length,
            rgx = new RegExp("^\\s{0," + rsp + "}", "gm");
          return text.replace(rgx, "");
        }
        this._dispatch = function dispatch(evtName, text, options, globals) {
          if (listeners.hasOwnProperty(evtName)) {
            for (var ei = 0; ei < listeners[evtName].length; ++ei) {
              var nText = listeners[evtName][ei](evtName, text, this, options, globals);
              if (nText && typeof nText !== "undefined") {
                text = nText;
              }
            }
          }
          return text;
        };
        this.listen = function(name, callback) {
          listen(name, callback);
          return this;
        };
        this.makeHtml = function(text) {
          if (!text) {
            return text;
          }
          var globals = {
            gHtmlBlocks: [],
            gHtmlMdBlocks: [],
            gHtmlSpans: [],
            gUrls: {},
            gTitles: {},
            gDimensions: {},
            gListLevel: 0,
            hashLinkCounts: {},
            langExtensions: langExtensions,
            outputModifiers: outputModifiers,
            converter: this,
            ghCodeBlocks: [],
            metadata: {
              parsed: {},
              raw: "",
              format: ""
            },
          };
          text = text.replace(/Â¨/g, "Â¨T");
          text = text.replace(/\$/g, "Â¨D");
          text = text.replace(/\r\n/g, "\n");
          text = text.replace(/\r/g, "\n");
          text = text.replace(/\u00A0/g, "&nbsp;");
          if (options.smartIndentationFix) {
            text = rTrimInputText(text);
          }
          text = "\n\n" + text + "\n\n";
          text = showdown.subParser("detab")(text, options, globals);
          text = text.replace(/^[ \t]+$/gm, "");
          showdown.helper.forEach(langExtensions, function(ext) {
            text = showdown.subParser("runExtension")(ext, text, options, globals);
          });
          text = showdown.subParser("metadata")(text, options, globals);
          text = showdown.subParser("hashPreCodeTags")(text, options, globals);
          text = showdown.subParser("githubCodeBlocks")(text, options, globals);
          text = showdown.subParser("hashHTMLBlocks")(text, options, globals);
          text = showdown.subParser("hashCodeTags")(text, options, globals);
          text = showdown.subParser("stripLinkDefinitions")(text, options, globals);
          text = showdown.subParser("blockGamut")(text, options, globals);
          text = showdown.subParser("unhashHTMLSpans")(text, options, globals);
          text = showdown.subParser("unescapeSpecialChars")(text, options, globals);
          text = text.replace(/Â¨D/g, "$$");
          text = text.replace(/Â¨T/g, "Â¨");
          text = showdown.subParser("completeHTMLDocument")(text, options, globals);
          showdown.helper.forEach(outputModifiers, function(ext) {
            text = showdown.subParser("runExtension")(ext, text, options, globals);
          });
          metadata = globals.metadata;
          return text;
        };
        this.makeMarkdown = this.makeMd = function(src, HTMLParser) {
          src = src.replace(/\r\n/g, "\n");
          src = src.replace(/\r/g, "\n");
          src = src.replace(/>[ \t]+</, ">Â¨NBSP;<");
          if (!HTMLParser) {
            if (window && window.document) {
              HTMLParser = window.document;
            } else {
              throw new Error("HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM");
            }
          }
          var doc = HTMLParser.createElement("div");
          doc.innerHTML = src;
          var globals = {
            preList: substitutePreCodeTags(doc)
          };
          clean(doc);
          var nodes = doc.childNodes,
            mdDoc = "";
          for (var i = 0; i < nodes.length; i++) {
            mdDoc += showdown.subParser("makeMarkdown.node")(nodes[i], globals);
          }

          function clean(node) {
            for (var n = 0; n < node.childNodes.length; ++n) {
              var child = node.childNodes[n];
              if (child.nodeType === 3) {
                if (!/\S/.test(child.nodeValue)) {
                  node.removeChild(child);
                  --n;
                } else {
                  child.nodeValue = child.nodeValue.split("\n").join(" ");
                  child.nodeValue = child.nodeValue.replace(/(\s)+/g, "$1");
                }
              } else if (child.nodeType === 1) {
                clean(child);
              }
            }
          }

          function substitutePreCodeTags(doc) {
            var pres = doc.querySelectorAll("pre"),
              presPH = [];
            for (var i = 0; i < pres.length; ++i) {
              if (pres[i].childElementCount === 1 && pres[i].firstChild.tagName.toLowerCase() === "code") {
                var content = pres[i].firstChild.innerHTML.trim(),
                  language = pres[i].firstChild.getAttribute("data-language") || "";
                if (language === "") {
                  var classes = pres[i].firstChild.className.split(" ");
                  for (var c = 0; c < classes.length; ++c) {
                    var matches = classes[c].match(/^language-(.+)$/);
                    if (matches !== null) {
                      language = matches[1];
                      break;
                    }
                  }
                }
                content = showdown.helper.unescapeHTMLEntities(content);
                presPH.push(content);
                pres[i].outerHTML = '<precode language="' + language + '" precodenum="' + i.toString() + '"></precode>';
              } else {
                presPH.push(pres[i].innerHTML);
                pres[i].innerHTML = "";
                pres[i].setAttribute("prenum", i.toString());
              }
            }
            return presPH;
          }
          return mdDoc;
        };
        this.setOption = function(key, value) {
          options[key] = value;
        };
        this.getOption = function(key) {
          return options[key];
        };
        this.getOptions = function() {
          return options;
        };
        this.addExtension = function(extension, name) {
          name = name || null;
          _parseExtension(extension, name);
        };
        this.useExtension = function(extensionName) {
          _parseExtension(extensionName);
        };
        this.setFlavor = function(name) {
          if (!flavor.hasOwnProperty(name)) {
            throw Error(name + " flavor was not found");
          }
          var preset = flavor[name];
          setConvFlavor = name;
          for (var option in preset) {
            if (preset.hasOwnProperty(option)) {
              options[option] = preset[option];
            }
          }
        };
        this.getFlavor = function() {
          return setConvFlavor;
        };
        this.removeExtension = function(extension) {
          if (!showdown.helper.isArray(extension)) {
            extension = [extension];
          }
          for (var a = 0; a < extension.length; ++a) {
            var ext = extension[a];
            for (var i = 0; i < langExtensions.length; ++i) {
              if (langExtensions[i] === ext) {
                langExtensions[i].splice(i, 1);
              }
            }
            for (var ii = 0; ii < outputModifiers.length; ++i) {
              if (outputModifiers[ii] === ext) {
                outputModifiers[ii].splice(i, 1);
              }
            }
          }
        };
        this.getAllExtensions = function() {
          return {
            language: langExtensions,
            output: outputModifiers
          };
        };
        this.getMetadata = function(raw) {
          if (raw) {
            return metadata.raw;
          } else {
            return metadata.parsed;
          }
        };
        this.getMetadataFormat = function() {
          return metadata.format;
        };
        this._setMetadataPair = function(key, value) {
          metadata.parsed[key] = value;
        };
        this._setMetadataFormat = function(format) {
          metadata.format = format;
        };
        this._setMetadataRaw = function(raw) {
          metadata.raw = raw;
        };
      };
      showdown.subParser("anchors", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("anchors.before", text, options, globals);
        var writeAnchorTag = function(wholeMatch, linkText, linkId, url, m5, m6, title) {
          if (showdown.helper.isUndefined(title)) {
            title = "";
          }
          linkId = linkId.toLowerCase();
          if (wholeMatch.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1) {
            url = "";
          } else if (!url) {
            if (!linkId) {
              linkId = linkText.toLowerCase().replace(/ ?\n/g, " ");
            }
            url = "#" + linkId;
            if (!showdown.helper.isUndefined(globals.gUrls[linkId])) {
              url = globals.gUrls[linkId];
              if (!showdown.helper.isUndefined(globals.gTitles[linkId])) {
                title = globals.gTitles[linkId];
              }
            } else {
              return wholeMatch;
            }
          }
          url = url.replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
          var result = '<a href="' + url + '"';
          if (title !== "" && title !== null) {
            title = title.replace(/"/g, "&quot;");
            title = title.replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
            result += ' title="' + title + '"';
          }
          if (options.openLinksInNewWindow && !/^#/.test(url)) {
            result += ' target="Â¨E95Eblank"';
          }
          result += ">" + linkText + "</a>";
          return result;
        };
        text = text.replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g, writeAnchorTag);
        text = text.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g, writeAnchorTag);
        text = text.replace(/\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g, writeAnchorTag);
        text = text.replace(/\[([^\[\]]+)]()()()()()/g, writeAnchorTag);
        if (options.ghMentions) {
          text = text.replace(/(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gim, function(wm, st, escape, mentions, username) {
            if (escape === "\\") {
              return st + mentions;
            }
            if (!showdown.helper.isString(options.ghMentionsLink)) {
              throw new Error("ghMentionsLink option must be a string");
            }
            var lnk = options.ghMentionsLink.replace(/\{u}/g, username),
              target = "";
            if (options.openLinksInNewWindow) {
              target = ' target="Â¨E95Eblank"';
            }
            return st + '<a href="' + lnk + '"' + target + ">" + mentions + "</a>";
          });
        }
        text = globals.converter._dispatch("anchors.after", text, options, globals);
        return text;
      });
      var simpleURLRegex = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi,
        simpleURLRegex2 = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi,
        delimUrlRegex = /()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi,
        simpleMailRegex = /(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gim,
        delimMailRegex = /<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi,
        replaceLink = function(options) {
          "use strict";
          return function(wm, leadingMagicChars, link, m2, m3, trailingPunctuation, trailingMagicChars) {
            link = link.replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
            var lnkTxt = link,
              append = "",
              target = "",
              lmc = leadingMagicChars || "",
              tmc = trailingMagicChars || "";
            if (/^www\./i.test(link)) {
              link = link.replace(/^www\./i, "http://www.");
            }
            if (options.excludeTrailingPunctuationFromURLs && trailingPunctuation) {
              append = trailingPunctuation;
            }
            if (options.openLinksInNewWindow) {
              target = ' target="Â¨E95Eblank"';
            }
            return lmc + '<a href="' + link + '"' + target + ">" + lnkTxt + "</a>" + append + tmc;
          };
        },
        replaceMail = function(options, globals) {
          "use strict";
          return function(wholeMatch, b, mail) {
            var href = "mailto:";
            b = b || "";
            mail = showdown.subParser("unescapeSpecialChars")(mail, options, globals);
            if (options.encodeEmails) {
              href = showdown.helper.encodeEmailAddress(href + mail);
              mail = showdown.helper.encodeEmailAddress(mail);
            } else {
              href = href + mail;
            }
            return b + '<a href="' + href + '">' + mail + "</a>";
          };
        };
      showdown.subParser("autoLinks", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("autoLinks.before", text, options, globals);
        text = text.replace(delimUrlRegex, replaceLink(options));
        text = text.replace(delimMailRegex, replaceMail(options, globals));
        text = globals.converter._dispatch("autoLinks.after", text, options, globals);
        return text;
      });
      showdown.subParser("simplifiedAutoLinks", function(text, options, globals) {
        "use strict";
        if (!options.simplifiedAutoLink) {
          return text;
        }
        text = globals.converter._dispatch("simplifiedAutoLinks.before", text, options, globals);
        if (options.excludeTrailingPunctuationFromURLs) {
          text = text.replace(simpleURLRegex2, replaceLink(options));
        } else {
          text = text.replace(simpleURLRegex, replaceLink(options));
        }
        text = text.replace(simpleMailRegex, replaceMail(options, globals));
        text = globals.converter._dispatch("simplifiedAutoLinks.after", text, options, globals);
        return text;
      });
      showdown.subParser("blockGamut", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("blockGamut.before", text, options, globals);
        text = showdown.subParser("blockQuotes")(text, options, globals);
        text = showdown.subParser("headers")(text, options, globals);
        text = showdown.subParser("horizontalRule")(text, options, globals);
        text = showdown.subParser("lists")(text, options, globals);
        text = showdown.subParser("codeBlocks")(text, options, globals);
        text = showdown.subParser("tables")(text, options, globals);
        text = showdown.subParser("hashHTMLBlocks")(text, options, globals);
        text = showdown.subParser("paragraphs")(text, options, globals);
        text = globals.converter._dispatch("blockGamut.after", text, options, globals);
        return text;
      });
      showdown.subParser("blockQuotes", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("blockQuotes.before", text, options, globals);
        text = text + "\n\n";
        var rgx = /(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;
        if (options.splitAdjacentBlockquotes) {
          rgx = /^ {0,3}>[\s\S]*?(?:\n\n)/gm;
        }
        text = text.replace(rgx, function(bq) {
          bq = bq.replace(/^[ \t]*>[ \t]?/gm, "");
          bq = bq.replace(/Â¨0/g, "");
          bq = bq.replace(/^[ \t]+$/gm, "");
          bq = showdown.subParser("githubCodeBlocks")(bq, options, globals);
          bq = showdown.subParser("blockGamut")(bq, options, globals);
          bq = bq.replace(/(^|\n)/g, "$1  ");
          bq = bq.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function(wholeMatch, m1) {
            var pre = m1;
            pre = pre.replace(/^  /gm, "Â¨0");
            pre = pre.replace(/Â¨0/g, "");
            return pre;
          });
          return showdown.subParser("hashBlock")("<blockquote>\n" + bq + "\n</blockquote>", options, globals);
        });
        text = globals.converter._dispatch("blockQuotes.after", text, options, globals);
        return text;
      });
      showdown.subParser("codeBlocks", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("codeBlocks.before", text, options, globals);
        text += "Â¨0";
        var pattern = /(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=Â¨0))/g;
        text = text.replace(pattern, function(wholeMatch, m1, m2) {
          var codeblock = m1,
            nextChar = m2,
            end = "\n";
          codeblock = showdown.subParser("outdent")(codeblock, options, globals);
          codeblock = showdown.subParser("encodeCode")(codeblock, options, globals);
          codeblock = showdown.subParser("detab")(codeblock, options, globals);
          codeblock = codeblock.replace(/^\n+/g, "");
          codeblock = codeblock.replace(/\n+$/g, "");
          if (options.omitExtraWLInCodeBlocks) {
            end = "";
          }
          codeblock = "<pre><code>" + codeblock + end + "</code></pre>";
          return showdown.subParser("hashBlock")(codeblock, options, globals) + nextChar;
        });
        text = text.replace(/Â¨0/, "");
        text = globals.converter._dispatch("codeBlocks.after", text, options, globals);
        return text;
      });
      showdown.subParser("codeSpans", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("codeSpans.before", text, options, globals);
        if (typeof text === "undefined") {
          text = "";
        }
        text = text.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm, function(wholeMatch, m1, m2, m3) {
          var c = m3;
          c = c.replace(/^([ \t]*)/g, "");
          c = c.replace(/[ \t]*$/g, "");
          c = showdown.subParser("encodeCode")(c, options, globals);
          c = m1 + "<code>" + c + "</code>";
          c = showdown.subParser("hashHTMLSpans")(c, options, globals);
          return c;
        });
        text = globals.converter._dispatch("codeSpans.after", text, options, globals);
        return text;
      });
      showdown.subParser("completeHTMLDocument", function(text, options, globals) {
        "use strict";
        if (!options.completeHTMLDocument) {
          return text;
        }
        text = globals.converter._dispatch("completeHTMLDocument.before", text, options, globals);
        var doctype = "html",
          doctypeParsed = "<!DOCTYPE HTML>\n",
          title = "",
          charset = '<meta charset="utf-8">\n',
          lang = "",
          metadata = "";
        if (typeof globals.metadata.parsed.doctype !== "undefined") {
          doctypeParsed = "<!DOCTYPE " + globals.metadata.parsed.doctype + ">\n";
          doctype = globals.metadata.parsed.doctype.toString().toLowerCase();
          if (doctype === "html" || doctype === "html5") {
            charset = '<meta charset="utf-8">';
          }
        }
        for (var meta in globals.metadata.parsed) {
          if (globals.metadata.parsed.hasOwnProperty(meta)) {
            switch (meta.toLowerCase()) {
              case "doctype":
                break;
              case "title":
                title = "<title>" + globals.metadata.parsed.title + "</title>\n";
                break;
              case "charset":
                if (doctype === "html" || doctype === "html5") {
                  charset = '<meta charset="' + globals.metadata.parsed.charset + '">\n';
                } else {
                  charset = '<meta name="charset" content="' + globals.metadata.parsed.charset + '">\n';
                }
                break;
              case "language":
              case "lang":
                lang = ' lang="' + globals.metadata.parsed[meta] + '"';
                metadata += '<meta name="' + meta + '" content="' + globals.metadata.parsed[meta] + '">\n';
                break;
              default:
                metadata += '<meta name="' + meta + '" content="' + globals.metadata.parsed[meta] + '">\n';
            }
          }
        }
        text = doctypeParsed + "<html" + lang + ">\n<head>\n" + title + charset + metadata + "</head>\n<body>\n" + text.trim() + "\n</body>\n</html>";
        text = globals.converter._dispatch("completeHTMLDocument.after", text, options, globals);
        return text;
      });
      showdown.subParser("detab", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("detab.before", text, options, globals);
        text = text.replace(/\t(?=\t)/g, "  ");
        text = text.replace(/\t/g, "Â¨AÂ¨B");
        text = text.replace(/Â¨B(.+?)Â¨A/g, function(wholeMatch, m1) {
          var leadingText = m1,
            numSpaces = 4 - (leadingText.length % 4);
          for (var i = 0; i < numSpaces; i++) {
            leadingText += " ";
          }
          return leadingText;
        });
        text = text.replace(/Â¨A/g, "  ");
        text = text.replace(/Â¨B/g, "");
        text = globals.converter._dispatch("detab.after", text, options, globals);
        return text;
      });
      showdown.subParser("ellipsis", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("ellipsis.before", text, options, globals);
        text = text.replace(/\.\.\./g, "â€¦");
        text = globals.converter._dispatch("ellipsis.after", text, options, globals);
        return text;
      });
      showdown.subParser("emoji", function(text, options, globals) {
        "use strict";
        if (!options.emoji) {
          return text;
        }
        text = globals.converter._dispatch("emoji.before", text, options, globals);
        var emojiRgx = /:([\S]+?):/g;
        text = text.replace(emojiRgx, function(wm, emojiCode) {
          if (showdown.helper.emojis.hasOwnProperty(emojiCode)) {
            return showdown.helper.emojis[emojiCode];
          }
          return wm;
        });
        text = globals.converter._dispatch("emoji.after", text, options, globals);
        return text;
      });
      showdown.subParser("encodeAmpsAndAngles", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("encodeAmpsAndAngles.before", text, options, globals);
        text = text.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, "&amp;");
        text = text.replace(/<(?![a-z\/?$!])/gi, "&lt;");
        text = text.replace(/</g, "&lt;");
        text = text.replace(/>/g, "&gt;");
        text = globals.converter._dispatch("encodeAmpsAndAngles.after", text, options, globals);
        return text;
      });
      showdown.subParser("encodeBackslashEscapes", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("encodeBackslashEscapes.before", text, options, globals);
        text = text.replace(/\\(\\)/g, showdown.helper.escapeCharactersCallback);
        text = text.replace(/\\([`*_{}\[\]()>#+.!~=|-])/g, showdown.helper.escapeCharactersCallback);
        text = globals.converter._dispatch("encodeBackslashEscapes.after", text, options, globals);
        return text;
      });
      showdown.subParser("encodeCode", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("encodeCode.before", text, options, globals);
        text = text
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/([*_{}\[\]\\=~-])/g, showdown.helper.escapeCharactersCallback);
        text = globals.converter._dispatch("encodeCode.after", text, options, globals);
        return text;
      });
      showdown.subParser("escapeSpecialCharsWithinTagAttributes", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("escapeSpecialCharsWithinTagAttributes.before", text, options, globals);
        var tags = /<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi,
          comments = /<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi;
        text = text.replace(tags, function(wholeMatch) {
          return wholeMatch.replace(/(.)<\/?code>(?=.)/g, "$1`").replace(/([\\`*_~=|])/g, showdown.helper.escapeCharactersCallback);
        });
        text = text.replace(comments, function(wholeMatch) {
          return wholeMatch.replace(/([\\`*_~=|])/g, showdown.helper.escapeCharactersCallback);
        });
        text = globals.converter._dispatch("escapeSpecialCharsWithinTagAttributes.after", text, options, globals);
        return text;
      });
      showdown.subParser("githubCodeBlocks", function(text, options, globals) {
        "use strict";
        if (!options.ghCodeBlocks) {
          return text;
        }
        text = globals.converter._dispatch("githubCodeBlocks.before", text, options, globals);
        text += "Â¨0";
        text = text.replace(/(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g, function(wholeMatch, delim, language, codeblock) {
          var end = options.omitExtraWLInCodeBlocks ? "" : "\n";
          codeblock = showdown.subParser("encodeCode")(codeblock, options, globals);
          codeblock = showdown.subParser("detab")(codeblock, options, globals);
          codeblock = codeblock.replace(/^\n+/g, "");
          codeblock = codeblock.replace(/\n+$/g, "");
          codeblock = "<pre><code" + (language ? ' class="' + language + " language-" + language + '"' : "") + ">" + codeblock + end + "</code></pre>";
          codeblock = showdown.subParser("hashBlock")(codeblock, options, globals);
          return "\n\nÂ¨G" + (globals.ghCodeBlocks.push({
            text: wholeMatch,
            codeblock: codeblock
          }) - 1) + "G\n\n";
        });
        text = text.replace(/Â¨0/, "");
        return globals.converter._dispatch("githubCodeBlocks.after", text, options, globals);
      });
      showdown.subParser("hashBlock", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("hashBlock.before", text, options, globals);
        text = text.replace(/(^\n+|\n+$)/g, "");
        text = "\n\nÂ¨K" + (globals.gHtmlBlocks.push(text) - 1) + "K\n\n";
        text = globals.converter._dispatch("hashBlock.after", text, options, globals);
        return text;
      });
      showdown.subParser("hashCodeTags", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("hashCodeTags.before", text, options, globals);
        var repFunc = function(wholeMatch, match, left, right) {
          var codeblock = left + showdown.subParser("encodeCode")(match, options, globals) + right;
          return "Â¨C" + (globals.gHtmlSpans.push(codeblock) - 1) + "C";
        };
        text = showdown.helper.replaceRecursiveRegExp(text, repFunc, "<code\\b[^>]*>", "</code>", "gim");
        text = globals.converter._dispatch("hashCodeTags.after", text, options, globals);
        return text;
      });
      showdown.subParser("hashElement", function(text, options, globals) {
        "use strict";
        return function(wholeMatch, m1) {
          var blockText = m1;
          blockText = blockText.replace(/\n\n/g, "\n");
          blockText = blockText.replace(/^\n/, "");
          blockText = blockText.replace(/\n+$/g, "");
          blockText = "\n\nÂ¨K" + (globals.gHtmlBlocks.push(blockText) - 1) + "K\n\n";
          return blockText;
        };
      });
      showdown.subParser("hashHTMLBlocks", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("hashHTMLBlocks.before", text, options, globals);
        var blockTags = [
            "pre",
            "div",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "blockquote",
            "table",
            "dl",
            "ol",
            "ul",
            "script",
            "noscript",
            "form",
            "fieldset",
            "iframe",
            "math",
            "style",
            "section",
            "header",
            "footer",
            "nav",
            "article",
            "aside",
            "address",
            "audio",
            "canvas",
            "figure",
            "hgroup",
            "output",
            "video",
            "p",
          ],
          repFunc = function(wholeMatch, match, left, right) {
            var txt = wholeMatch;
            if (left.search(/\bmarkdown\b/) !== -1) {
              txt = left + globals.converter.makeHtml(match) + right;
            }
            return "\n\nÂ¨K" + (globals.gHtmlBlocks.push(txt) - 1) + "K\n\n";
          };
        if (options.backslashEscapesHTMLTags) {
          text = text.replace(/\\<(\/?[^>]+?)>/g, function(wm, inside) {
            return "&lt;" + inside + "&gt;";
          });
        }
        for (var i = 0; i < blockTags.length; ++i) {
          var opTagPos,
            rgx1 = new RegExp("^ {0,3}(<" + blockTags[i] + "\\b[^>]*>)", "im"),
            patLeft = "<" + blockTags[i] + "\\b[^>]*>",
            patRight = "</" + blockTags[i] + ">";
          while ((opTagPos = showdown.helper.regexIndexOf(text, rgx1)) !== -1) {
            var subTexts = showdown.helper.splitAtIndex(text, opTagPos),
              newSubText1 = showdown.helper.replaceRecursiveRegExp(subTexts[1], repFunc, patLeft, patRight, "im");
            if (newSubText1 === subTexts[1]) {
              break;
            }
            text = subTexts[0].concat(newSubText1);
          }
        }
        text = text.replace(/(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g, showdown.subParser("hashElement")(text, options, globals));
        text = showdown.helper.replaceRecursiveRegExp(
          text,
          function(txt) {
            return "\n\nÂ¨K" + (globals.gHtmlBlocks.push(txt) - 1) + "K\n\n";
          },
          "^ {0,3}\x3c!--",
          "--\x3e",
          "gm"
        );
        text = text.replace(/(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g, showdown.subParser("hashElement")(text, options, globals));
        text = globals.converter._dispatch("hashHTMLBlocks.after", text, options, globals);
        return text;
      });
      showdown.subParser("hashHTMLSpans", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("hashHTMLSpans.before", text, options, globals);

        function hashHTMLSpan(html) {
          return "Â¨C" + (globals.gHtmlSpans.push(html) - 1) + "C";
        }
        text = text.replace(/<[^>]+?\/>/gi, function(wm) {
          return hashHTMLSpan(wm);
        });
        text = text.replace(/<([^>]+?)>[\s\S]*?<\/\1>/g, function(wm) {
          return hashHTMLSpan(wm);
        });
        text = text.replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g, function(wm) {
          return hashHTMLSpan(wm);
        });
        text = text.replace(/<[^>]+?>/gi, function(wm) {
          return hashHTMLSpan(wm);
        });
        text = globals.converter._dispatch("hashHTMLSpans.after", text, options, globals);
        return text;
      });
      showdown.subParser("unhashHTMLSpans", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("unhashHTMLSpans.before", text, options, globals);
        for (var i = 0; i < globals.gHtmlSpans.length; ++i) {
          var repText = globals.gHtmlSpans[i],
            limit = 0;
          while (/Â¨C(\d+)C/.test(repText)) {
            var num = RegExp.$1;
            repText = repText.replace("Â¨C" + num + "C", globals.gHtmlSpans[num]);
            if (limit === 10) {
              console.error("maximum nesting of 10 spans reached!!!");
              break;
            }
            ++limit;
          }
          text = text.replace("Â¨C" + i + "C", repText);
        }
        text = globals.converter._dispatch("unhashHTMLSpans.after", text, options, globals);
        return text;
      });
      showdown.subParser("hashPreCodeTags", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("hashPreCodeTags.before", text, options, globals);
        var repFunc = function(wholeMatch, match, left, right) {
          var codeblock = left + showdown.subParser("encodeCode")(match, options, globals) + right;
          return "\n\nÂ¨G" + (globals.ghCodeBlocks.push({
            text: wholeMatch,
            codeblock: codeblock
          }) - 1) + "G\n\n";
        };
        text = showdown.helper.replaceRecursiveRegExp(text, repFunc, "^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>", "^ {0,3}</code>\\s*</pre>", "gim");
        text = globals.converter._dispatch("hashPreCodeTags.after", text, options, globals);
        return text;
      });
      showdown.subParser("headers", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("headers.before", text, options, globals);
        var headerLevelStart = isNaN(parseInt(options.headerLevelStart)) ? 1 : parseInt(options.headerLevelStart),
          setextRegexH1 = options.smoothLivePreview ? /^(.+)[ \t]*\n={2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n=+[ \t]*\n+/gm,
          setextRegexH2 = options.smoothLivePreview ? /^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n-+[ \t]*\n+/gm;
        text = text.replace(setextRegexH1, function(wholeMatch, m1) {
          var spanGamut = showdown.subParser("spanGamut")(m1, options, globals),
            hID = options.noHeaderId ? "" : ' id="' + headerId(m1) + '"',
            hLevel = headerLevelStart,
            hashBlock = "<h" + hLevel + hID + ">" + spanGamut + "</h" + hLevel + ">";
          return showdown.subParser("hashBlock")(hashBlock, options, globals);
        });
        text = text.replace(setextRegexH2, function(matchFound, m1) {
          var spanGamut = showdown.subParser("spanGamut")(m1, options, globals),
            hID = options.noHeaderId ? "" : ' id="' + headerId(m1) + '"',
            hLevel = headerLevelStart + 1,
            hashBlock = "<h" + hLevel + hID + ">" + spanGamut + "</h" + hLevel + ">";
          return showdown.subParser("hashBlock")(hashBlock, options, globals);
        });
        var atxStyle = options.requireSpaceBeforeHeadingText ? /^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm : /^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;
        text = text.replace(atxStyle, function(wholeMatch, m1, m2) {
          var hText = m2;
          if (options.customizedHeaderId) {
            hText = m2.replace(/\s?\{([^{]+?)}\s*$/, "");
          }
          var span = showdown.subParser("spanGamut")(hText, options, globals),
            hID = options.noHeaderId ? "" : ' id="' + headerId(m2) + '"',
            hLevel = headerLevelStart - 1 + m1.length,
            header = "<h" + hLevel + hID + ">" + span + "</h" + hLevel + ">";
          return showdown.subParser("hashBlock")(header, options, globals);
        });

        function headerId(m) {
          var title, prefix;
          if (options.customizedHeaderId) {
            var match = m.match(/\{([^{]+?)}\s*$/);
            if (match && match[1]) {
              m = match[1];
            }
          }
          title = m;
          if (showdown.helper.isString(options.prefixHeaderId)) {
            prefix = options.prefixHeaderId;
          } else if (options.prefixHeaderId === true) {
            prefix = "section-";
          } else {
            prefix = "";
          }
          if (!options.rawPrefixHeaderId) {
            title = prefix + title;
          }
          if (options.ghCompatibleHeaderId) {
            title = title
              .replace(/ /g, "-")
              .replace(/&amp;/g, "")
              .replace(/Â¨T/g, "")
              .replace(/Â¨D/g, "")
              .replace(/[&+$,\/:;=?@"#{}|^Â¨~\[\]`\\*)(%.!'<>]/g, "")
              .toLowerCase();
          } else if (options.rawHeaderId) {
            title = title.replace(/ /g, "-").replace(/&amp;/g, "&").replace(/Â¨T/g, "Â¨").replace(/Â¨D/g, "$").replace(/["']/g, "-").toLowerCase();
          } else {
            title = title.replace(/[^\w]/g, "").toLowerCase();
          }
          if (options.rawPrefixHeaderId) {
            title = prefix + title;
          }
          if (globals.hashLinkCounts[title]) {
            title = title + "-" + globals.hashLinkCounts[title]++;
          } else {
            globals.hashLinkCounts[title] = 1;
          }
          return title;
        }
        text = globals.converter._dispatch("headers.after", text, options, globals);
        return text;
      });
      showdown.subParser("horizontalRule", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("horizontalRule.before", text, options, globals);
        var key = showdown.subParser("hashBlock")("<hr />", options, globals);
        text = text.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm, key);
        text = text.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm, key);
        text = text.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm, key);
        text = globals.converter._dispatch("horizontalRule.after", text, options, globals);
        return text;
      });
      showdown.subParser("images", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("images.before", text, options, globals);
        var inlineRegExp = /!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,
          crazyRegExp = /!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g,
          base64RegExp = /!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g,
          referenceRegExp = /!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g,
          refShortcutRegExp = /!\[([^\[\]]+)]()()()()()/g;

        function writeImageTagBase64(wholeMatch, altText, linkId, url, width, height, m5, title) {
          url = url.replace(/\s/g, "");
          return writeImageTag(wholeMatch, altText, linkId, url, width, height, m5, title);
        }

        function writeImageTag(wholeMatch, altText, linkId, url, width, height, m5, title) {
          var gUrls = globals.gUrls,
            gTitles = globals.gTitles,
            gDims = globals.gDimensions;
          linkId = linkId.toLowerCase();
          if (!title) {
            title = "";
          }
          if (wholeMatch.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1) {
            url = "";
          } else if (url === "" || url === null) {
            if (linkId === "" || linkId === null) {
              linkId = altText.toLowerCase().replace(/ ?\n/g, " ");
            }
            url = "#" + linkId;
            if (!showdown.helper.isUndefined(gUrls[linkId])) {
              url = gUrls[linkId];
              if (!showdown.helper.isUndefined(gTitles[linkId])) {
                title = gTitles[linkId];
              }
              if (!showdown.helper.isUndefined(gDims[linkId])) {
                width = gDims[linkId].width;
                height = gDims[linkId].height;
              }
            } else {
              return wholeMatch;
            }
          }
          altText = altText.replace(/"/g, "&quot;").replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
          url = url.replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
          var result = '<img src="' + url + '" alt="' + altText + '"';
          if (title && showdown.helper.isString(title)) {
            title = title.replace(/"/g, "&quot;").replace(showdown.helper.regexes.asteriskDashAndColon, showdown.helper.escapeCharactersCallback);
            result += ' title="' + title + '"';
          }
          if (width && height) {
            width = width === "*" ? "auto" : width;
            height = height === "*" ? "auto" : height;
            result += ' width="' + width + '"';
            result += ' height="' + height + '"';
          }
          result += " />";
          return result;
        }
        text = text.replace(referenceRegExp, writeImageTag);
        text = text.replace(base64RegExp, writeImageTagBase64);
        text = text.replace(crazyRegExp, writeImageTag);
        text = text.replace(inlineRegExp, writeImageTag);
        text = text.replace(refShortcutRegExp, writeImageTag);
        text = globals.converter._dispatch("images.after", text, options, globals);
        return text;
      });
      showdown.subParser("italicsAndBold", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("italicsAndBold.before", text, options, globals);

        function parseInside(txt, left, right) {
          return left + txt + right;
        }
        if (options.literalMidWordUnderscores) {
          text = text.replace(/\b___(\S[\s\S]*?)___\b/g, function(wm, txt) {
            return parseInside(txt, "<strong><em>", "</em></strong>");
          });
          text = text.replace(/\b__(\S[\s\S]*?)__\b/g, function(wm, txt) {
            return parseInside(txt, "<strong>", "</strong>");
          });
          text = text.replace(/\b_(\S[\s\S]*?)_\b/g, function(wm, txt) {
            return parseInside(txt, "<em>", "</em>");
          });
        } else {
          text = text.replace(/___(\S[\s\S]*?)___/g, function(wm, m) {
            return /\S$/.test(m) ? parseInside(m, "<strong><em>", "</em></strong>") : wm;
          });
          text = text.replace(/__(\S[\s\S]*?)__/g, function(wm, m) {
            return /\S$/.test(m) ? parseInside(m, "<strong>", "</strong>") : wm;
          });
          text = text.replace(/_([^\s_][\s\S]*?)_/g, function(wm, m) {
            return /\S$/.test(m) ? parseInside(m, "<em>", "</em>") : wm;
          });
        }
        if (options.literalMidWordAsterisks) {
          text = text.replace(/([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g, function(wm, lead, txt) {
            return parseInside(txt, lead + "<strong><em>", "</em></strong>");
          });
          text = text.replace(/([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g, function(wm, lead, txt) {
            return parseInside(txt, lead + "<strong>", "</strong>");
          });
          text = text.replace(/([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g, function(wm, lead, txt) {
            return parseInside(txt, lead + "<em>", "</em>");
          });
        } else {
          text = text.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g, function(wm, m) {
            return /\S$/.test(m) ? parseInside(m, "<strong><em>", "</em></strong>") : wm;
          });
          text = text.replace(/\*\*(\S[\s\S]*?)\*\*/g, function(wm, m) {
            return /\S$/.test(m) ? parseInside(m, "<strong>", "</strong>") : wm;
          });
          text = text.replace(/\*([^\s*][\s\S]*?)\*/g, function(wm, m) {
            return /\S$/.test(m) ? parseInside(m, "<em>", "</em>") : wm;
          });
        }
        text = globals.converter._dispatch("italicsAndBold.after", text, options, globals);
        return text;
      });
      showdown.subParser("lists", function(text, options, globals) {
        "use strict";

        function processListItems(listStr, trimTrailing) {
          globals.gListLevel++;
          listStr = listStr.replace(/\n{2,}$/, "\n");
          listStr += "Â¨0";
          var rgx = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(Â¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm,
            isParagraphed = /\n[ \t]*\n(?!Â¨0)/.test(listStr);
          if (options.disableForced4SpacesIndentedSublists) {
            rgx = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(Â¨0|\2([*+-]|\d+[.])[ \t]+))/gm;
          }
          listStr = listStr.replace(rgx, function(wholeMatch, m1, m2, m3, m4, taskbtn, checked) {
            checked = checked && checked.trim() !== "";
            var item = showdown.subParser("outdent")(m4, options, globals),
              bulletStyle = "";
            if (taskbtn && options.tasklists) {
              bulletStyle = ' class="task-list-item" style="list-style-type: none;"';
              item = item.replace(/^[ \t]*\[(x|X| )?]/m, function() {
                var otp = '<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';
                if (checked) {
                  otp += " checked";
                }
                otp += ">";
                return otp;
              });
            }
            item = item.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g, function(wm2) {
              return "Â¨A" + wm2;
            });
            if (m1 || item.search(/\n{2,}/) > -1) {
              item = showdown.subParser("githubCodeBlocks")(item, options, globals);
              item = showdown.subParser("blockGamut")(item, options, globals);
            } else {
              item = showdown.subParser("lists")(item, options, globals);
              item = item.replace(/\n$/, "");
              item = showdown.subParser("hashHTMLBlocks")(item, options, globals);
              item = item.replace(/\n\n+/g, "\n\n");
              if (isParagraphed) {
                item = showdown.subParser("paragraphs")(item, options, globals);
              } else {
                item = showdown.subParser("spanGamut")(item, options, globals);
              }
            }
            item = item.replace("Â¨A", "");
            item = "<li" + bulletStyle + ">" + item + "</li>\n";
            return item;
          });
          listStr = listStr.replace(/Â¨0/g, "");
          globals.gListLevel--;
          if (trimTrailing) {
            listStr = listStr.replace(/\s+$/, "");
          }
          return listStr;
        }

        function styleStartNumber(list, listType) {
          if (listType === "ol") {
            var res = list.match(/^ *(\d+)\./);
            if (res && res[1] !== "1") {
              return ' start="' + res[1] + '"';
            }
          }
          return "";
        }

        function parseConsecutiveLists(list, listType, trimTrailing) {
          var olRgx = options.disableForced4SpacesIndentedSublists ? /^ ?\d+\.[ \t]/gm : /^ {0,3}\d+\.[ \t]/gm,
            ulRgx = options.disableForced4SpacesIndentedSublists ? /^ ?[*+-][ \t]/gm : /^ {0,3}[*+-][ \t]/gm,
            counterRxg = listType === "ul" ? olRgx : ulRgx,
            result = "";
          if (list.search(counterRxg) !== -1) {
            (function parseCL(txt) {
              var pos = txt.search(counterRxg),
                style = styleStartNumber(list, listType);
              if (pos !== -1) {
                result += "\n\n<" + listType + style + ">\n" + processListItems(txt.slice(0, pos), !!trimTrailing) + "</" + listType + ">\n";
                listType = listType === "ul" ? "ol" : "ul";
                counterRxg = listType === "ul" ? olRgx : ulRgx;
                parseCL(txt.slice(pos));
              } else {
                result += "\n\n<" + listType + style + ">\n" + processListItems(txt, !!trimTrailing) + "</" + listType + ">\n";
              }
            })(list);
          } else {
            var style = styleStartNumber(list, listType);
            result = "\n\n<" + listType + style + ">\n" + processListItems(list, !!trimTrailing) + "</" + listType + ">\n";
          }
          return result;
        }
        text = globals.converter._dispatch("lists.before", text, options, globals);
        text += "Â¨0";
        if (globals.gListLevel) {
          text = text.replace(/^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(Â¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm, function(wholeMatch, list, m2) {
            var listType = m2.search(/[*+-]/g) > -1 ? "ul" : "ol";
            return parseConsecutiveLists(list, listType, true);
          });
        } else {
          text = text.replace(/(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(Â¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm, function(wholeMatch, m1, list, m3) {
            var listType = m3.search(/[*+-]/g) > -1 ? "ul" : "ol";
            return parseConsecutiveLists(list, listType, false);
          });
        }
        text = text.replace(/Â¨0/, "");
        text = globals.converter._dispatch("lists.after", text, options, globals);
        return text;
      });
      showdown.subParser("metadata", function(text, options, globals) {
        "use strict";
        if (!options.metadata) {
          return text;
        }
        text = globals.converter._dispatch("metadata.before", text, options, globals);

        function parseMetadataContents(content) {
          globals.metadata.raw = content;
          content = content.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
          content = content.replace(/\n {4}/g, " ");
          content.replace(/^([\S ]+): +([\s\S]+?)$/gm, function(wm, key, value) {
            globals.metadata.parsed[key] = value;
            return "";
          });
        }
        text = text.replace(/^\s*Â«Â«Â«+(\S*?)\n([\s\S]+?)\nÂ»Â»Â»+\n/, function(wholematch, format, content) {
          parseMetadataContents(content);
          return "Â¨M";
        });
        text = text.replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/, function(wholematch, format, content) {
          if (format) {
            globals.metadata.format = format;
          }
          parseMetadataContents(content);
          return "Â¨M";
        });
        text = text.replace(/Â¨M/g, "");
        text = globals.converter._dispatch("metadata.after", text, options, globals);
        return text;
      });
      showdown.subParser("outdent", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("outdent.before", text, options, globals);
        text = text.replace(/^(\t|[ ]{1,4})/gm, "Â¨0");
        text = text.replace(/Â¨0/g, "");
        text = globals.converter._dispatch("outdent.after", text, options, globals);
        return text;
      });
      showdown.subParser("paragraphs", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("paragraphs.before", text, options, globals);
        text = text.replace(/^\n+/g, "");
        text = text.replace(/\n+$/g, "");
        var grafs = text.split(/\n{2,}/g),
          grafsOut = [],
          end = grafs.length;
        for (var i = 0; i < end; i++) {
          var str = grafs[i];
          if (str.search(/Â¨(K|G)(\d+)\1/g) >= 0) {
            grafsOut.push(str);
          } else if (str.search(/\S/) >= 0) {
            str = showdown.subParser("spanGamut")(str, options, globals);
            str = str.replace(/^([ \t]*)/g, "<p>");
            str += "</p>";
            grafsOut.push(str);
          }
        }
        end = grafsOut.length;
        for (i = 0; i < end; i++) {
          var blockText = "",
            grafsOutIt = grafsOut[i],
            codeFlag = false;
          while (/Â¨(K|G)(\d+)\1/.test(grafsOutIt)) {
            var delim = RegExp.$1,
              num = RegExp.$2;
            if (delim === "K") {
              blockText = globals.gHtmlBlocks[num];
            } else {
              if (codeFlag) {
                blockText = showdown.subParser("encodeCode")(globals.ghCodeBlocks[num].text, options, globals);
              } else {
                blockText = globals.ghCodeBlocks[num].codeblock;
              }
            }
            blockText = blockText.replace(/\$/g, "$$$$");
            grafsOutIt = grafsOutIt.replace(/(\n\n)?Â¨(K|G)\d+\2(\n\n)?/, blockText);
            if (/^<pre\b[^>]*>\s*<code\b[^>]*>/.test(grafsOutIt)) {
              codeFlag = true;
            }
          }
          grafsOut[i] = grafsOutIt;
        }
        text = grafsOut.join("\n");
        text = text.replace(/^\n+/g, "");
        text = text.replace(/\n+$/g, "");
        return globals.converter._dispatch("paragraphs.after", text, options, globals);
      });
      showdown.subParser("runExtension", function(ext, text, options, globals) {
        "use strict";
        if (ext.filter) {
          text = ext.filter(text, globals.converter, options);
        } else if (ext.regex) {
          var re = ext.regex;
          if (!(re instanceof RegExp)) {
            re = new RegExp(re, "g");
          }
          text = text.replace(re, ext.replace);
        }
        return text;
      });
      showdown.subParser("spanGamut", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("spanGamut.before", text, options, globals);
        text = showdown.subParser("codeSpans")(text, options, globals);
        text = showdown.subParser("escapeSpecialCharsWithinTagAttributes")(text, options, globals);
        text = showdown.subParser("encodeBackslashEscapes")(text, options, globals);
        text = showdown.subParser("images")(text, options, globals);
        text = showdown.subParser("anchors")(text, options, globals);
        text = showdown.subParser("autoLinks")(text, options, globals);
        text = showdown.subParser("simplifiedAutoLinks")(text, options, globals);
        text = showdown.subParser("emoji")(text, options, globals);
        text = showdown.subParser("underline")(text, options, globals);
        text = showdown.subParser("italicsAndBold")(text, options, globals);
        text = showdown.subParser("strikethrough")(text, options, globals);
        text = showdown.subParser("ellipsis")(text, options, globals);
        text = showdown.subParser("hashHTMLSpans")(text, options, globals);
        text = showdown.subParser("encodeAmpsAndAngles")(text, options, globals);
        if (options.simpleLineBreaks) {
          if (!/\n\nÂ¨K/.test(text)) {
            text = text.replace(/\n+/g, "<br />\n");
          }
        } else {
          text = text.replace(/  +\n/g, "<br />\n");
        }
        text = globals.converter._dispatch("spanGamut.after", text, options, globals);
        return text;
      });
      showdown.subParser("strikethrough", function(text, options, globals) {
        "use strict";

        function parseInside(txt) {
          if (options.simplifiedAutoLink) {
            txt = showdown.subParser("simplifiedAutoLinks")(txt, options, globals);
          }
          return "<del>" + txt + "</del>";
        }
        if (options.strikethrough) {
          text = globals.converter._dispatch("strikethrough.before", text, options, globals);
          text = text.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g, function(wm, txt) {
            return parseInside(txt);
          });
          text = globals.converter._dispatch("strikethrough.after", text, options, globals);
        }
        return text;
      });
      showdown.subParser("stripLinkDefinitions", function(text, options, globals) {
        "use strict";
        var regex = /^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=Â¨0))/gm,
          base64Regex = /^ {0,3}\[(.+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=Â¨0)|(?=\n\[))/gm;
        text += "Â¨0";
        var replaceFunc = function(wholeMatch, linkId, url, width, height, blankLines, title) {
          linkId = linkId.toLowerCase();
          if (url.match(/^data:.+?\/.+?;base64,/)) {
            globals.gUrls[linkId] = url.replace(/\s/g, "");
          } else {
            globals.gUrls[linkId] = showdown.subParser("encodeAmpsAndAngles")(url, options, globals);
          }
          if (blankLines) {
            return blankLines + title;
          } else {
            if (title) {
              globals.gTitles[linkId] = title.replace(/"|'/g, "&quot;");
            }
            if (options.parseImgDimensions && width && height) {
              globals.gDimensions[linkId] = {
                width: width,
                height: height
              };
            }
          }
          return "";
        };
        text = text.replace(base64Regex, replaceFunc);
        text = text.replace(regex, replaceFunc);
        text = text.replace(/Â¨0/, "");
        return text;
      });
      showdown.subParser("tables", function(text, options, globals) {
        "use strict";
        if (!options.tables) {
          return text;
        }
        var tableRgx = /^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|Â¨0)/gm,
          singeColTblRgx = /^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|Â¨0)/gm;

        function parseStyles(sLine) {
          if (/^:[ \t]*--*$/.test(sLine)) {
            return ' style="text-align:left;"';
          } else if (/^--*[ \t]*:[ \t]*$/.test(sLine)) {
            return ' style="text-align:right;"';
          } else if (/^:[ \t]*--*[ \t]*:$/.test(sLine)) {
            return ' style="text-align:center;"';
          } else {
            return "";
          }
        }

        function parseHeaders(header, style) {
          var id = "";
          header = header.trim();
          if (options.tablesHeaderId || options.tableHeaderId) {
            id = ' id="' + header.replace(/ /g, "_").toLowerCase() + '"';
          }
          header = showdown.subParser("spanGamut")(header, options, globals);
          return "<th" + id + style + ">" + header + "</th>\n";
        }

        function parseCells(cell, style) {
          var subText = showdown.subParser("spanGamut")(cell, options, globals);
          return "<td" + style + ">" + subText + "</td>\n";
        }

        function buildTable(headers, cells) {
          var tb = "<table>\n<thead>\n<tr>\n",
            tblLgn = headers.length;
          for (var i = 0; i < tblLgn; ++i) {
            tb += headers[i];
          }
          tb += "</tr>\n</thead>\n<tbody>\n";
          for (i = 0; i < cells.length; ++i) {
            tb += "<tr>\n";
            for (var ii = 0; ii < tblLgn; ++ii) {
              tb += cells[i][ii];
            }
            tb += "</tr>\n";
          }
          tb += "</tbody>\n</table>\n";
          return tb;
        }

        function parseTable(rawTable) {
          var i,
            tableLines = rawTable.split("\n");
          for (i = 0; i < tableLines.length; ++i) {
            if (/^ {0,3}\|/.test(tableLines[i])) {
              tableLines[i] = tableLines[i].replace(/^ {0,3}\|/, "");
            }
            if (/\|[ \t]*$/.test(tableLines[i])) {
              tableLines[i] = tableLines[i].replace(/\|[ \t]*$/, "");
            }
            tableLines[i] = showdown.subParser("codeSpans")(tableLines[i], options, globals);
          }
          var rawHeaders = tableLines[0].split("|").map(function(s) {
              return s.trim();
            }),
            rawStyles = tableLines[1].split("|").map(function(s) {
              return s.trim();
            }),
            rawCells = [],
            headers = [],
            styles = [],
            cells = [];
          tableLines.shift();
          tableLines.shift();
          for (i = 0; i < tableLines.length; ++i) {
            if (tableLines[i].trim() === "") {
              continue;
            }
            rawCells.push(
              tableLines[i].split("|").map(function(s) {
                return s.trim();
              })
            );
          }
          if (rawHeaders.length < rawStyles.length) {
            return rawTable;
          }
          for (i = 0; i < rawStyles.length; ++i) {
            styles.push(parseStyles(rawStyles[i]));
          }
          for (i = 0; i < rawHeaders.length; ++i) {
            if (showdown.helper.isUndefined(styles[i])) {
              styles[i] = "";
            }
            headers.push(parseHeaders(rawHeaders[i], styles[i]));
          }
          for (i = 0; i < rawCells.length; ++i) {
            var row = [];
            for (var ii = 0; ii < headers.length; ++ii) {
              if (showdown.helper.isUndefined(rawCells[i][ii])) {}
              row.push(parseCells(rawCells[i][ii], styles[ii]));
            }
            cells.push(row);
          }
          return buildTable(headers, cells);
        }
        text = globals.converter._dispatch("tables.before", text, options, globals);
        text = text.replace(/\\(\|)/g, showdown.helper.escapeCharactersCallback);
        text = text.replace(tableRgx, parseTable);
        text = text.replace(singeColTblRgx, parseTable);
        text = globals.converter._dispatch("tables.after", text, options, globals);
        return text;
      });
      showdown.subParser("underline", function(text, options, globals) {
        "use strict";
        if (!options.underline) {
          return text;
        }
        text = globals.converter._dispatch("underline.before", text, options, globals);
        if (options.literalMidWordUnderscores) {
          text = text.replace(/\b___(\S[\s\S]*?)___\b/g, function(wm, txt) {
            return "<u>" + txt + "</u>";
          });
          text = text.replace(/\b__(\S[\s\S]*?)__\b/g, function(wm, txt) {
            return "<u>" + txt + "</u>";
          });
        } else {
          text = text.replace(/___(\S[\s\S]*?)___/g, function(wm, m) {
            return /\S$/.test(m) ? "<u>" + m + "</u>" : wm;
          });
          text = text.replace(/__(\S[\s\S]*?)__/g, function(wm, m) {
            return /\S$/.test(m) ? "<u>" + m + "</u>" : wm;
          });
        }
        text = text.replace(/(_)/g, showdown.helper.escapeCharactersCallback);
        text = globals.converter._dispatch("underline.after", text, options, globals);
        return text;
      });
      showdown.subParser("unescapeSpecialChars", function(text, options, globals) {
        "use strict";
        text = globals.converter._dispatch("unescapeSpecialChars.before", text, options, globals);
        text = text.replace(/Â¨E(\d+)E/g, function(wholeMatch, m1) {
          var charCodeToReplace = parseInt(m1);
          return String.fromCharCode(charCodeToReplace);
        });
        text = globals.converter._dispatch("unescapeSpecialChars.after", text, options, globals);
        return text;
      });
      showdown.subParser("makeMarkdown.blockquote", function(node, globals) {
        "use strict";
        var txt = "";
        if (node.hasChildNodes()) {
          var children = node.childNodes,
            childrenLength = children.length;
          for (var i = 0; i < childrenLength; ++i) {
            var innerTxt = showdown.subParser("makeMarkdown.node")(children[i], globals);
            if (innerTxt === "") {
              continue;
            }
            txt += innerTxt;
          }
        }
        txt = txt.trim();
        txt = "> " + txt.split("\n").join("\n> ");
        return txt;
      });
      showdown.subParser("makeMarkdown.codeBlock", function(node, globals) {
        "use strict";
        var lang = node.getAttribute("language"),
          num = node.getAttribute("precodenum");
        return "```" + lang + "\n" + globals.preList[num] + "\n```";
      });
      showdown.subParser("makeMarkdown.codeSpan", function(node) {
        "use strict";
        return "`" + node.innerHTML + "`";
      });
      showdown.subParser("makeMarkdown.emphasis", function(node, globals) {
        "use strict";
        var txt = "";
        if (node.hasChildNodes()) {
          txt += "*";
          var children = node.childNodes,
            childrenLength = children.length;
          for (var i = 0; i < childrenLength; ++i) {
            txt += showdown.subParser("makeMarkdown.node")(children[i], globals);
          }
          txt += "*";
        }
        return txt;
      });
      showdown.subParser("makeMarkdown.header", function(node, globals, headerLevel) {
        "use strict";
        var headerMark = new Array(headerLevel + 1).join("#"),
          txt = "";
        if (node.hasChildNodes()) {
          txt = headerMark + " ";
          var children = node.childNodes,
            childrenLength = children.length;
          for (var i = 0; i < childrenLength; ++i) {
            txt += showdown.subParser("makeMarkdown.node")(children[i], globals);
          }
        }
        return txt;
      });
      showdown.subParser("makeMarkdown.hr", function() {
        "use strict";
        return "---";
      });
      showdown.subParser("makeMarkdown.image", function(node) {
        "use strict";
        var txt = "";
        if (node.hasAttribute("src")) {
          txt += "![" + node.getAttribute("alt") + "](";
          // Remove '<' and '>' from image links/URLs
          //txt += "<" + node.getAttribute("src") + ">";
          txt += node.getAttribute("src");
          if (node.hasAttribute("width") && node.hasAttribute("height")) {
            txt += " =" + node.getAttribute("width") + "x" + node.getAttribute("height");
          }
          if (node.hasAttribute("title")) {
            txt += ' "' + node.getAttribute("title") + '"';
          }
          txt += ")";
        }
        return txt;
      });
      showdown.subParser("makeMarkdown.links", function(node, globals) {
        "use strict";
        var txt = "";
        if (node.hasChildNodes() && node.hasAttribute("href")) {
          var children = node.childNodes,
            childrenLength = children.length;
          txt = "[";
          for (var i = 0; i < childrenLength; ++i) {
            txt += showdown.subParser("makeMarkdown.node")(children[i], globals);
          }
          txt += "](";
          // Remove '<' and '>' from links
          //txt += "<" + node.getAttribute("href") + ">";
          txt += node.getAttribute("href");
          if (node.hasAttribute("title")) {
            txt += ' "' + node.getAttribute("title") + '"';
          }
          txt += ")";
        }
        return txt;
      });
      showdown.subParser("makeMarkdown.list", function(node, globals, type) {
        "use strict";
        var txt = "";
        if (!node.hasChildNodes()) {
          return "";
        }
        var listItems = node.childNodes,
          listItemsLenght = listItems.length,
          listNum = node.getAttribute("start") || 1;
        for (var i = 0; i < listItemsLenght; ++i) {
          if (typeof listItems[i].tagName === "undefined" || listItems[i].tagName.toLowerCase() !== "li") {
            continue;
          }
          var bullet = "";
          if (type === "ol") {
            bullet = listNum.toString() + ". ";
          } else {
            // Use "* " instead of "- " for lists
            //bullet = "- ";
            bullet = "* ";
          }
          txt += bullet + showdown.subParser("makeMarkdown.listItem")(listItems[i], globals);
          ++listNum;
        }
        txt += "\n\x3c!-- --\x3e\n";
        return txt.trim();
      });
      showdown.subParser("makeMarkdown.listItem", function(node, globals) {
        "use strict";
        var listItemTxt = "";
        var children = node.childNodes,
          childrenLenght = children.length;
        for (var i = 0; i < childrenLenght; ++i) {
          listItemTxt += showdown.subParser("makeMarkdown.node")(children[i], globals);
        }
        if (!/\n$/.test(listItemTxt)) {
          listItemTxt += "\n";
        } else {
          listItemTxt = listItemTxt
            .split("\n")
            .join("\n  ")
            .replace(/^ {4}$/gm, "")
            .replace(/\n\n+/g, "\n\n");
        }
        return listItemTxt;
      });
      showdown.subParser("makeMarkdown.node", function(node, globals, spansOnly) {
        "use strict";
        spansOnly = spansOnly || false;
        var txt = "";
        if (node.nodeType === 3) {
          return showdown.subParser("makeMarkdown.txt")(node, globals);
        }
        if (node.nodeType === 8) {
          return "\x3c!--" + node.data + "--\x3e\n\n";
        }
        if (node.nodeType !== 1) {
          return "";
        }
        var tagName = node.tagName.toLowerCase();
        switch (tagName) {
          case "h1":
            if (!spansOnly) {
              txt = showdown.subParser("makeMarkdown.header")(node, globals, 1) + "\n\n";
            }
            break;
          case "h2":
            if (!spansOnly) {
              txt = showdown.subParser("makeMarkdown.header")(node, globals, 2) + "\n\n";
            }
            break;
          case "h3":
            if (!spansOnly) {
              txt = showdown.subParser("makeMarkdown.header")(node, globals, 3) + "\n\n";
            }
            break;
          case "h4":
            if (!spansOnly) {
              txt = showdown.subParser("makeMarkdown.header")(node, globals, 4) + "\n\n";
            }
            break;
          case "h5":
            if (!spansOnly) {
              txt = showdown.subParser("makeMarkdown.header")(node, globals, 5) + "\n\n";
            }
            break;
          case "h6":
            if (!spansOnly) {
              txt = showdown.subParser("makeMarkdown.header")(node, globals, 6) + "\n\n";
            }
            break;
          case "p":
            if (!spansOnly) {
              txt = showdown.subParser("makeMarkdown.paragraph")(node, globals) + "\n\n";
            }
            break;
          case "blockquote":
            if (!spansOnly) {
              txt = showdown.subParser("makeMarkdown.blockquote")(node, globals) + "\n\n";
            }
            break;
          case "hr":
            if (!spansOnly) {
              txt = showdown.subParser("makeMarkdown.hr")(node, globals) + "\n\n";
            }
            break;
          case "ol":
            if (!spansOnly) {
              txt = showdown.subParser("makeMarkdown.list")(node, globals, "ol") + "\n\n";
            }
            break;
          case "ul":
            if (!spansOnly) {
              txt = showdown.subParser("makeMarkdown.list")(node, globals, "ul") + "\n\n";
            }
            break;
          case "precode":
            if (!spansOnly) {
              txt = showdown.subParser("makeMarkdown.codeBlock")(node, globals) + "\n\n";
            }
            break;
          case "pre":
            if (!spansOnly) {
              txt = showdown.subParser("makeMarkdown.pre")(node, globals) + "\n\n";
            }
            break;
          case "table":
            if (!spansOnly) {
              txt = showdown.subParser("makeMarkdown.table")(node, globals) + "\n\n";
            }
            break;
          case "code":
            txt = showdown.subParser("makeMarkdown.codeSpan")(node, globals);
            break;
          case "em":
          case "i":
            txt = showdown.subParser("makeMarkdown.emphasis")(node, globals);
            break;
          case "strong":
          case "b":
            txt = showdown.subParser("makeMarkdown.strong")(node, globals);
            break;
          case "del":
            txt = showdown.subParser("makeMarkdown.strikethrough")(node, globals);
            break;
          case "a":
            txt = showdown.subParser("makeMarkdown.links")(node, globals);
            break;
          case "img":
            txt = showdown.subParser("makeMarkdown.image")(node, globals);
            break;
          default:
            txt = node.outerHTML + "\n\n";
        }
        return txt;
      });
      showdown.subParser("makeMarkdown.paragraph", function(node, globals) {
        "use strict";
        var txt = "";
        if (node.hasChildNodes()) {
          var children = node.childNodes,
            childrenLength = children.length;
          for (var i = 0; i < childrenLength; ++i) {
            txt += showdown.subParser("makeMarkdown.node")(children[i], globals);
          }
        }
        txt = txt.trim();
        return txt;
      });
      showdown.subParser("makeMarkdown.pre", function(node, globals) {
        "use strict";
        var num = node.getAttribute("prenum");
        return "<pre>" + globals.preList[num] + "</pre>";
      });
      showdown.subParser("makeMarkdown.strikethrough", function(node, globals) {
        "use strict";
        var txt = "";
        if (node.hasChildNodes()) {
          txt += "~~";
          var children = node.childNodes,
            childrenLength = children.length;
          for (var i = 0; i < childrenLength; ++i) {
            txt += showdown.subParser("makeMarkdown.node")(children[i], globals);
          }
          txt += "~~";
        }
        return txt;
      });
      showdown.subParser("makeMarkdown.strong", function(node, globals) {
        "use strict";
        var txt = "";
        if (node.hasChildNodes()) {
          txt += "**";
          var children = node.childNodes,
            childrenLength = children.length;
          for (var i = 0; i < childrenLength; ++i) {
            txt += showdown.subParser("makeMarkdown.node")(children[i], globals);
          }
          txt += "**";
        }
        return txt;
      });
      showdown.subParser("makeMarkdown.table", function(node, globals) {
        "use strict";
        var txt = "",
          tableArray = [
            [],
            []
          ],
          headings = node.querySelectorAll("thead>tr>th"),
          rows = node.querySelectorAll("tbody>tr"),
          i,
          ii;
        for (i = 0; i < headings.length; ++i) {
          var headContent = showdown.subParser("makeMarkdown.tableCell")(headings[i], globals),
            allign = "---";
          if (headings[i].hasAttribute("style")) {
            var style = headings[i].getAttribute("style").toLowerCase().replace(/\s/g, "");
            switch (style) {
              case "text-align:left;":
                allign = ":---";
                break;
              case "text-align:right;":
                allign = "---:";
                break;
              case "text-align:center;":
                allign = ":---:";
                break;
            }
          }
          tableArray[0][i] = headContent.trim();
          tableArray[1][i] = allign;
        }
        for (i = 0; i < rows.length; ++i) {
          var r = tableArray.push([]) - 1,
            cols = rows[i].getElementsByTagName("td");
          for (ii = 0; ii < headings.length; ++ii) {
            var cellContent = " ";
            if (typeof cols[ii] !== "undefined") {
              cellContent = showdown.subParser("makeMarkdown.tableCell")(cols[ii], globals);
            }
            tableArray[r].push(cellContent);
          }
        }
        // Disable table cell padding with spaces and dashes
        //var cellSpacesCount = 3;
        var cellSpacesCount = 0;
        /*for (i = 0; i < tableArray.length; ++i) {
          for (ii = 0; ii < tableArray[i].length; ++ii) {
            var strLen = tableArray[i][ii].length;
            if (strLen > cellSpacesCount) {
              cellSpacesCount = strLen;
            }
          }
        }*/
        for (i = 0; i < tableArray.length; ++i) {
          for (ii = 0; ii < tableArray[i].length; ++ii) {
            if (i === 1) {
              if (tableArray[i][ii].slice(-1) === ":") {
                tableArray[i][ii] = showdown.helper.padEnd(tableArray[i][ii].slice(-1), cellSpacesCount - 1, "-") + ":";
              } else {
                tableArray[i][ii] = showdown.helper.padEnd(tableArray[i][ii], cellSpacesCount, "-");
              }
            } else {
              tableArray[i][ii] = showdown.helper.padEnd(tableArray[i][ii], cellSpacesCount);
            }
          }
          txt += "| " + tableArray[i].join(" | ") + " |\n";
        }
        return txt.trim();
      });
      showdown.subParser("makeMarkdown.tableCell", function(node, globals) {
        "use strict";
        var txt = "";
        if (!node.hasChildNodes()) {
          return "";
        }
        var children = node.childNodes,
          childrenLength = children.length;
        for (var i = 0; i < childrenLength; ++i) {
          txt += showdown.subParser("makeMarkdown.node")(children[i], globals, true);
        }
        return txt.trim();
      });
      showdown.subParser("makeMarkdown.txt", function(node) {
        "use strict";
        var txt = node.nodeValue;
        txt = txt.replace(/ +/g, " ");
        txt = txt.replace(/Â¨NBSP;/g, " ");
        txt = showdown.helper.unescapeHTMLEntities(txt);
        txt = txt.replace(/([*_~|`])/g, "\\$1");
        txt = txt.replace(/^(\s*)>/g, "\\$1>");
        txt = txt.replace(/^#/gm, "\\#");
        txt = txt.replace(/^(\s*)([-=]{3,})(\s*)$/, "$1\\$2$3");
        txt = txt.replace(/^( {0,3}\d+)\./gm, "$1\\.");
        txt = txt.replace(/^( {0,3})([+-])/gm, "$1\\$2");
        txt = txt.replace(/]([\s]*)\(/g, "\\]$1\\(");
        txt = txt.replace(/^ {0,3}\[([\S \t]*?)]:/gm, "\\[$1]:");
        return txt;
      });
      var root = this;
      if (true) {
        !((__WEBPACK_AMD_DEFINE_RESULT__ = function() {
            "use strict";
            return showdown;
          }.call(exports, __webpack_require__, exports, module)),
          __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
      } else {}
    }.call(this));
  },
  function(module, exports, __webpack_require__) {
    var require;
    var require;
    (function(f) {
      if (true) {
        module.exports = f();
      } else {
        var g;
      }
    })(function() {
      var define, module, exports;
      return (function e(t, n, r) {
        function s(o, u) {
          if (!n[o]) {
            if (!t[o]) {
              var a = typeof require == "function" && require;
              if (!u && a) return require(o, !0);
              if (i) return i(o, !0);
              var f = new Error("Cannot find module '" + o + "'");
              throw ((f.code = "MODULE_NOT_FOUND"), f);
            }
            var l = (n[o] = {
              exports: {}
            });
            t[o][0].call(
              l.exports,
              function(e) {
                var n = t[o][1][e];
                return s(n ? n : e);
              },
              l,
              l.exports,
              e,
              t,
              n,
              r
            );
          }
          return n[o].exports;
        }
        var i = typeof require == "function" && require;
        for (var o = 0; o < r.length; o++) s(r[o]);
        return s;
      })({
        1: [
          function(require, module, exports) {
            function patchShowdown(sdown) {
              var isMarkdownTable = function(table) {
                var thead = table.querySelector("thead");
                var tbody = table.querySelector("tbody");
                return (
                  thead &&
                  tbody &&
                  thead.querySelectorAll("tr").length === 1 &&
                  thead.querySelector("tr").querySelectorAll("td").length === 0 &&
                  thead.querySelector("tr").querySelectorAll("th").length > 0 &&
                  tbody.querySelectorAll("th").length === 0 &&
                  tbody.querySelectorAll("td").length > 0
                );
              };
              var isMarkdownList = function(list) {
                return false;
              };
              var wrapAsUnsupported = function(node) {
                var identifier = node.nodeType === 1 ? node.nodeName : "Type=" + node.nodeType;
                return "\n\x3c!-- UNSUPPORTED-HTML:begin(" + identifier + ") --\x3e\n" + node.outerHTML + "\n\x3c!-- UNSUPPORTED-HTML:end(" + identifier + ") --\x3e\n";
              };
              var outputNode = function(node) {
                return node.outerHTML;
              };
              var patchParser = function(predicate, wrapper, original) {
                return function(node, globals, extra) {
                  return predicate(node) ? original(node, globals, extra) : wrapper(node, globals, extra);
                };
              };
              var originalTableParser = sdown.subParser("makeMarkdown.table");
              var taggedTableParser = patchParser(isMarkdownTable, wrapAsUnsupported, originalTableParser);
              var outputTableParser = patchParser(isMarkdownTable, outputNode, originalTableParser);
              sdown.subParser("makeMarkdown.table", taggedTableParser);
              var parseTasklists = function(checkitems) {
                var blah = [];
                for (var i = 0; i < checkitems.length; i++) {
                  (function() {
                    if (checkitems[i].querySelector("input")) {
                      var input = checkitems[i].querySelector("input");
                      var text = checkitems[i].textContent;
                      blah.push("- [" + (input.checked ? "x" : "") + "] " + text);
                    }
                  })();
                }
                return "\n" + blah.join("\n") + "\n";
              };
              var hackListParser = function(node, globals, type) {
                var checkitems = node.querySelectorAll(".task-list-item");
                var allItems = node.querySelectorAll("li");
                if (checkitems.length === allItems.length) return parseTasklists(checkitems);
                //console.log("hackListParser", node);
                var txt = "";
                if (!node.hasChildNodes()) {
                  return "";
                }
                var listItems = node.childNodes,
                  listItemsLenght = listItems.length,
                  listNum = node.getAttribute("start") || 1;
                for (var i = 0; i < listItemsLenght; ++i) {
                  if (typeof listItems[i].tagName === "undefined" || listItems[i].tagName.toLowerCase() !== "li") {
                    continue;
                  }
                  // Use "* " instead of "- " for lists
                  //var bullet = type === "ol" ? listNum.toString() + ". " : "- ";
                  var bullet = type === "ol" ? listNum.toString() + ". " : "* ";
                  txt += bullet + sdown.subParser("makeMarkdown.listItem")(listItems[i], globals);
                  ++listNum;
                }
                var isNotNested = node.parentNode.nodeName.toLowerCase() !== "li";
                var listPrefix = !isNotNested ? "\n" : "";
                // Don't print this into the markdown
                //var listSuffix = isNotNested ? "\n\x3c!-- Comment ends this list --\x3e\n" : "";
                var listSuffix = !isNotNested ? "\n" : "";
                var result = listPrefix + txt.trim() + listSuffix;
                /*console.log({
                  listPrefix: listPrefix,
                  txt: txt,
                  txtTrimmed: txt.trim(),
                  suffix: listSuffix
                });*/
                return result;
              };
              var originalListParser = sdown.subParser("makeMarkdown.list");
              var taggedListParser = patchParser(isMarkdownList, hackListParser, originalListParser);
              var outputListParser = patchParser(isMarkdownList, outputNode, originalListParser);
              sdown.subParser("makeMarkdown.list", taggedListParser);
              var switchToTagging = function() {
                sdown.subParser("makeMarkdown.table", taggedTableParser);
                sdown.subParser("makeMarkdown.list", taggedListParser);
              };
              var switchToOutput = function() {
                sdown.subParser("makeMarkdown.table", outputTableParser);
                sdown.subParser("makeMarkdown.list", outputListParser);
              };
              var doesNotSupport = function(elem) {
                switch (elem.dom().nodeName.toLowerCase()) {
                  case "ul":
                    return false;
                  case "ol":
                    return false;
                  case "table":
                    return !isMarkdownTable(elem.dom());
                  default:
                    {
                      return false;
                    }
                }
              };
              //console.log("Patched Showdown (sdown) ...");
              return {
                switchToTagging: switchToTagging,
                switchToOutput: switchToOutput,
                doesNotSupport: doesNotSupport
              };
            }
            try {
              exports.patchShowdown = patchShowdown;
            } catch (err) {}
          },
          {},
        ],
      }, {}, [1])(1);
    });
  },
  function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    var DefaultEvents_namespaceObject = {};
    __webpack_require__.r(DefaultEvents_namespaceObject);
    __webpack_require__.d(DefaultEvents_namespaceObject, "events", function() {
      return DefaultEvents_events;
    });
    var ActivePosition_namespaceObject = {};
    __webpack_require__.r(ActivePosition_namespaceObject);
    __webpack_require__.d(ActivePosition_namespaceObject, "exhibit", function() {
      return exhibit;
    });
    var Navigation_namespaceObject = {};
    __webpack_require__.r(Navigation_namespaceObject);
    __webpack_require__.d(Navigation_namespaceObject, "view", function() {
      return view;
    });
    __webpack_require__.d(Navigation_namespaceObject, "owner", function() {
      return Navigation_owner;
    });
    var PositionApis_namespaceObject = {};
    __webpack_require__.r(PositionApis_namespaceObject);
    __webpack_require__.d(PositionApis_namespaceObject, "position", function() {
      return PositionApis_position;
    });
    __webpack_require__.d(PositionApis_namespaceObject, "positionWithin", function() {
      return positionWithin;
    });
    __webpack_require__.d(PositionApis_namespaceObject, "getMode", function() {
      return getMode;
    });
    var HighlightApis_namespaceObject = {};
    __webpack_require__.r(HighlightApis_namespaceObject);
    __webpack_require__.d(HighlightApis_namespaceObject, "dehighlightAll", function() {
      return dehighlightAll;
    });
    __webpack_require__.d(HighlightApis_namespaceObject, "dehighlight", function() {
      return HighlightApis_dehighlight;
    });
    __webpack_require__.d(HighlightApis_namespaceObject, "highlight", function() {
      return HighlightApis_highlight;
    });
    __webpack_require__.d(HighlightApis_namespaceObject, "highlightFirst", function() {
      return highlightFirst;
    });
    __webpack_require__.d(HighlightApis_namespaceObject, "highlightLast", function() {
      return highlightLast;
    });
    __webpack_require__.d(HighlightApis_namespaceObject, "highlightAt", function() {
      return highlightAt;
    });
    __webpack_require__.d(HighlightApis_namespaceObject, "highlightBy", function() {
      return highlightBy;
    });
    __webpack_require__.d(HighlightApis_namespaceObject, "isHighlighted", function() {
      return isHighlighted;
    });
    __webpack_require__.d(HighlightApis_namespaceObject, "getHighlighted", function() {
      return getHighlighted;
    });
    __webpack_require__.d(HighlightApis_namespaceObject, "getFirst", function() {
      return getFirst;
    });
    __webpack_require__.d(HighlightApis_namespaceObject, "getLast", function() {
      return getLast;
    });
    __webpack_require__.d(HighlightApis_namespaceObject, "getPrevious", function() {
      return getPrevious;
    });
    __webpack_require__.d(HighlightApis_namespaceObject, "getNext", function() {
      return getNext;
    });
    __webpack_require__.d(HighlightApis_namespaceObject, "getCandidates", function() {
      return getCandidates;
    });
    var ComposeApis_namespaceObject = {};
    __webpack_require__.r(ComposeApis_namespaceObject);
    __webpack_require__.d(ComposeApis_namespaceObject, "getCurrent", function() {
      return getCurrent;
    });
    var KeyingState_namespaceObject = {};
    __webpack_require__.r(KeyingState_namespaceObject);
    __webpack_require__.d(KeyingState_namespaceObject, "flatgrid", function() {
      return flatgrid;
    });
    __webpack_require__.d(KeyingState_namespaceObject, "init", function() {
      return init;
    });
    var KeyboardBranches_namespaceObject = {};
    __webpack_require__.r(KeyboardBranches_namespaceObject);
    __webpack_require__.d(KeyboardBranches_namespaceObject, "acyclic", function() {
      return acyclic;
    });
    __webpack_require__.d(KeyboardBranches_namespaceObject, "cyclic", function() {
      return cyclic;
    });
    __webpack_require__.d(KeyboardBranches_namespaceObject, "flow", function() {
      return flow;
    });
    __webpack_require__.d(KeyboardBranches_namespaceObject, "flatgrid", function() {
      return KeyboardBranches_flatgrid;
    });
    __webpack_require__.d(KeyboardBranches_namespaceObject, "matrix", function() {
      return KeyboardBranches_matrix;
    });
    __webpack_require__.d(KeyboardBranches_namespaceObject, "execution", function() {
      return execution;
    });
    __webpack_require__.d(KeyboardBranches_namespaceObject, "menu", function() {
      return KeyboardBranches_menu;
    });
    __webpack_require__.d(KeyboardBranches_namespaceObject, "special", function() {
      return special;
    });
    var RepresentApis_namespaceObject = {};
    __webpack_require__.r(RepresentApis_namespaceObject);
    __webpack_require__.d(RepresentApis_namespaceObject, "onLoad", function() {
      return onLoad;
    });
    __webpack_require__.d(RepresentApis_namespaceObject, "onUnload", function() {
      return onUnload;
    });
    __webpack_require__.d(RepresentApis_namespaceObject, "setValue", function() {
      return setValue;
    });
    __webpack_require__.d(RepresentApis_namespaceObject, "getValue", function() {
      return getValue;
    });
    __webpack_require__.d(RepresentApis_namespaceObject, "getState", function() {
      return getState;
    });
    var ActiveRepresenting_namespaceObject = {};
    __webpack_require__.r(ActiveRepresenting_namespaceObject);
    __webpack_require__.d(ActiveRepresenting_namespaceObject, "events", function() {
      return ActiveRepresenting_events;
    });
    var RepresentState_namespaceObject = {};
    __webpack_require__.r(RepresentState_namespaceObject);
    __webpack_require__.d(RepresentState_namespaceObject, "memory", function() {
      return memory;
    });
    __webpack_require__.d(RepresentState_namespaceObject, "dataset", function() {
      return dataset;
    });
    __webpack_require__.d(RepresentState_namespaceObject, "manual", function() {
      return manual;
    });
    __webpack_require__.d(RepresentState_namespaceObject, "init", function() {
      return RepresentState_init;
    });
    var FocusApis_namespaceObject = {};
    __webpack_require__.r(FocusApis_namespaceObject);
    __webpack_require__.d(FocusApis_namespaceObject, "focus", function() {
      return FocusApis_focus;
    });
    __webpack_require__.d(FocusApis_namespaceObject, "blur", function() {
      return FocusApis_blur;
    });
    __webpack_require__.d(FocusApis_namespaceObject, "isFocused", function() {
      return isFocused;
    });
    var ActiveFocus_namespaceObject = {};
    __webpack_require__.r(ActiveFocus_namespaceObject);
    __webpack_require__.d(ActiveFocus_namespaceObject, "exhibit", function() {
      return ActiveFocus_exhibit;
    });
    __webpack_require__.d(ActiveFocus_namespaceObject, "events", function() {
      return ActiveFocus_events;
    });
    var ToggleApis_namespaceObject = {};
    __webpack_require__.r(ToggleApis_namespaceObject);
    __webpack_require__.d(ToggleApis_namespaceObject, "onLoad", function() {
      return ToggleApis_onLoad;
    });
    __webpack_require__.d(ToggleApis_namespaceObject, "toggle", function() {
      return ToggleApis_toggle;
    });
    __webpack_require__.d(ToggleApis_namespaceObject, "isOn", function() {
      return isOn;
    });
    __webpack_require__.d(ToggleApis_namespaceObject, "on", function() {
      return ToggleApis_on;
    });
    __webpack_require__.d(ToggleApis_namespaceObject, "off", function() {
      return ToggleApis_off;
    });
    __webpack_require__.d(ToggleApis_namespaceObject, "set", function() {
      return ToggleApis_set;
    });
    var ActiveToggle_namespaceObject = {};
    __webpack_require__.r(ActiveToggle_namespaceObject);
    __webpack_require__.d(ActiveToggle_namespaceObject, "exhibit", function() {
      return ActiveToggle_exhibit;
    });
    __webpack_require__.d(ActiveToggle_namespaceObject, "events", function() {
      return ActiveToggle_events;
    });
    var TogglingState_namespaceObject = {};
    __webpack_require__.r(TogglingState_namespaceObject);
    __webpack_require__.d(TogglingState_namespaceObject, "init", function() {
      return TogglingState_init;
    });
    var ReplaceApis_namespaceObject = {};
    __webpack_require__.r(ReplaceApis_namespaceObject);
    __webpack_require__.d(ReplaceApis_namespaceObject, "append", function() {
      return ReplaceApis_append;
    });
    __webpack_require__.d(ReplaceApis_namespaceObject, "prepend", function() {
      return ReplaceApis_prepend;
    });
    __webpack_require__.d(ReplaceApis_namespaceObject, "remove", function() {
      return ReplaceApis_remove;
    });
    __webpack_require__.d(ReplaceApis_namespaceObject, "replaceAt", function() {
      return replaceAt;
    });
    __webpack_require__.d(ReplaceApis_namespaceObject, "replaceBy", function() {
      return replaceBy;
    });
    __webpack_require__.d(ReplaceApis_namespaceObject, "set", function() {
      return ReplaceApis_set;
    });
    __webpack_require__.d(ReplaceApis_namespaceObject, "contents", function() {
      return contents;
    });
    var DisableApis_namespaceObject = {};
    __webpack_require__.r(DisableApis_namespaceObject);
    __webpack_require__.d(DisableApis_namespaceObject, "enable", function() {
      return enable;
    });
    __webpack_require__.d(DisableApis_namespaceObject, "disable", function() {
      return disable;
    });
    __webpack_require__.d(DisableApis_namespaceObject, "isDisabled", function() {
      return isDisabled;
    });
    __webpack_require__.d(DisableApis_namespaceObject, "onLoad", function() {
      return DisableApis_onLoad;
    });
    var ActiveDisable_namespaceObject = {};
    __webpack_require__.r(ActiveDisable_namespaceObject);
    __webpack_require__.d(ActiveDisable_namespaceObject, "exhibit", function() {
      return ActiveDisable_exhibit;
    });
    __webpack_require__.d(ActiveDisable_namespaceObject, "events", function() {
      return ActiveDisable_events;
    });
    var ANGLE_instanced_arrays$1 = window["ANGLE_instanced_arrays"];
    var AbortController$1 = window["AbortController"];
    var AbortSignal$1 = window["AbortSignal"];
    var AnalyserNode$1 = window["AnalyserNode"];
    var Animation$1 = window["Animation"];
    var AnimationEvent$1 = window["AnimationEvent"];
    var AnimationPlaybackEvent$1 = window["AnimationPlaybackEvent"];
    var ApplicationCache$1 = window["ApplicationCache"];
    var Attr$1 = window["Attr"];
    var AudioBuffer$1 = window["AudioBuffer"];
    var AudioBufferSourceNode$1 = window["AudioBufferSourceNode"];
    var AudioContext$1 = window["AudioContext"];
    var AudioDestinationNode$1 = window["AudioDestinationNode"];
    var AudioListener$1 = window["AudioListener"];
    var AudioNode$1 = window["AudioNode"];
    var AudioParam$1 = window["AudioParam"];
    var AudioProcessingEvent$1 = window["AudioProcessingEvent"];
    var AudioTrack$1 = window["AudioTrack"];
    var AudioTrackList$1 = window["AudioTrackList"];
    var BarProp$1 = window["BarProp"];
    var BeforeUnloadEvent$1 = window["BeforeUnloadEvent"];
    var BhxBrowser$1 = window["BhxBrowser"];
    var BiquadFilterNode$1 = window["BiquadFilterNode"];
    var Blob$1 = window["Blob"];
    var BroadcastChannel$1 = window["BroadcastChannel"];
    var ByteLengthQueuingStrategy$1 = window["ByteLengthQueuingStrategy"];
    var CDATASection$1 = window["CDATASection"];
    var CSS$1 = window["CSS"];
    var CSSConditionRule$1 = window["CSSConditionRule"];
    var CSSFontFaceRule$1 = window["CSSFontFaceRule"];
    var CSSGroupingRule$1 = window["CSSGroupingRule"];
    var CSSImportRule$1 = window["CSSImportRule"];
    var CSSKeyframeRule$1 = window["CSSKeyframeRule"];
    var CSSKeyframesRule$1 = window["CSSKeyframesRule"];
    var CSSMediaRule$1 = window["CSSMediaRule"];
    var CSSNamespaceRule$1 = window["CSSNamespaceRule"];
    var CSSPageRule$1 = window["CSSPageRule"];
    var CSSRule$1 = window["CSSRule"];
    var CSSRuleList$1 = window["CSSRuleList"];
    var CSSStyleDeclaration$1 = window["CSSStyleDeclaration"];
    var CSSStyleRule$1 = window["CSSStyleRule"];
    var CSSStyleSheet$1 = window["CSSStyleSheet"];
    var CSSSupportsRule$1 = window["CSSSupportsRule"];
    var Cache$1 = window["Cache"];
    var CacheStorage$1 = window["CacheStorage"];
    var CanvasGradient$1 = window["CanvasGradient"];
    var CanvasPattern$1 = window["CanvasPattern"];
    var CanvasRenderingContext2D$1 = window["CanvasRenderingContext2D"];
    var ChannelMergerNode$1 = window["ChannelMergerNode"];
    var ChannelSplitterNode$1 = window["ChannelSplitterNode"];
    var CharacterData$1 = window["CharacterData"];
    var ClientRect$1 = window["ClientRect"];
    var ClientRectList$1 = window["ClientRectList"];
    var ClipboardEvent$1 = window["ClipboardEvent"];
    var CloseEvent$1 = window["CloseEvent"];
    var Comment$1 = window["Comment"];
    var CompositionEvent$1 = window["CompositionEvent"];
    var Console$1 = window["Console"];
    var ContentScriptGlobalScope$1 = window["ContentScriptGlobalScope"];
    var ConvolverNode$1 = window["ConvolverNode"];
    var Coordinates$1 = window["Coordinates"];
    var CountQueuingStrategy$1 = window["CountQueuingStrategy"];
    var Crypto$1 = window["Crypto"];
    var CryptoKey$1 = window["CryptoKey"];
    var CryptoKeyPair$1 = window["CryptoKeyPair"];
    var CustomEvent$1 = window["CustomEvent"];
    var DOMError$1 = window["DOMError"];
    var DOMException$1 = window["DOMException"];
    var DOMImplementation$1 = window["DOMImplementation"];
    var DOMParser$1 = window["DOMParser"];
    var DOMRect$1 = window["DOMRect"];
    var DOMRectReadOnly$1 = window["DOMRectReadOnly"];
    var DOMSettableTokenList$1 = window["DOMSettableTokenList"];
    var DOMStringList$1 = window["DOMStringList"];
    var DOMStringMap$1 = window["DOMStringMap"];
    var DOMTokenList$1 = window["DOMTokenList"];
    var DataCue$1 = window["DataCue"];
    var DataTransfer$1 = window["DataTransfer"];
    var DataTransferItem$1 = window["DataTransferItem"];
    var DataTransferItemList$1 = window["DataTransferItemList"];
    var DeferredPermissionRequest$1 = window["DeferredPermissionRequest"];
    var DelayNode$1 = window["DelayNode"];
    var DeviceAcceleration$1 = window["DeviceAcceleration"];
    var DeviceLightEvent$1 = window["DeviceLightEvent"];
    var DeviceMotionEvent$1 = window["DeviceMotionEvent"];
    var DeviceOrientationEvent$1 = window["DeviceOrientationEvent"];
    var DeviceRotationRate$1 = window["DeviceRotationRate"];
    var Document$1 = window["Document"];
    var DocumentFragment$1 = window["DocumentFragment"];
    var DocumentType$1 = window["DocumentType"];
    var DragEvent$1 = window["DragEvent"];
    var DynamicsCompressorNode$1 = window["DynamicsCompressorNode"];
    var EXT_texture_filter_anisotropic$1 = window["EXT_texture_filter_anisotropic"];
    var Element$1 = window["Element"];
    var ErrorEvent$1 = window["ErrorEvent"];
    var Event$1 = window["Event"];
    var EventSource$1 = window["EventSource"];
    var EventTarget$1 = window["EventTarget"];
    var ExtensionScriptApis$1 = window["ExtensionScriptApis"];
    var External$1 = window["External"];
    var File$1 = window["File"];
    var FileList$1 = window["FileList"];
    var FileReader$1 = window["FileReader"];
    var FocusEvent$1 = window["FocusEvent"];
    var FocusNavigationEvent$1 = window["FocusNavigationEvent"];
    var FormData$1 = window["FormData"];
    var GainNode$1 = window["GainNode"];
    var Gamepad$1 = window["Gamepad"];
    var GamepadButton$1 = window["GamepadButton"];
    var GamepadEvent$1 = window["GamepadEvent"];
    var GamepadHapticActuator$1 = window["GamepadHapticActuator"];
    var GamepadPose$1 = window["GamepadPose"];
    var Geolocation$1 = window["Geolocation"];
    var HTMLAllCollection$1 = window["HTMLAllCollection"];
    var HTMLAnchorElement$1 = window["HTMLAnchorElement"];
    var HTMLAppletElement$1 = window["HTMLAppletElement"];
    var HTMLAreaElement$1 = window["HTMLAreaElement"];
    var HTMLAreasCollection$1 = window["HTMLAreasCollection"];
    var HTMLAudioElement$1 = window["HTMLAudioElement"];
    var HTMLBRElement$1 = window["HTMLBRElement"];
    var HTMLBaseElement$1 = window["HTMLBaseElement"];
    var HTMLBaseFontElement$1 = window["HTMLBaseFontElement"];
    var HTMLBodyElement$1 = window["HTMLBodyElement"];
    var HTMLButtonElement$1 = window["HTMLButtonElement"];
    var HTMLCanvasElement$1 = window["HTMLCanvasElement"];
    var HTMLCollection$1 = window["HTMLCollection"];
    var HTMLDListElement$1 = window["HTMLDListElement"];
    var HTMLDataElement$1 = window["HTMLDataElement"];
    var HTMLDataListElement$1 = window["HTMLDataListElement"];
    var HTMLDetailsElement$1 = window["HTMLDetailsElement"];
    var HTMLDialogElement$1 = window["HTMLDialogElement"];
    var HTMLDirectoryElement$1 = window["HTMLDirectoryElement"];
    var HTMLDivElement$1 = window["HTMLDivElement"];
    var HTMLDocument$1 = window["HTMLDocument"];
    var HTMLElement$1 = window["HTMLElement"];
    var HTMLEmbedElement$1 = window["HTMLEmbedElement"];
    var HTMLFieldSetElement$1 = window["HTMLFieldSetElement"];
    var HTMLFontElement$1 = window["HTMLFontElement"];
    var HTMLFormControlsCollection$1 = window["HTMLFormControlsCollection"];
    var HTMLFormElement$1 = window["HTMLFormElement"];
    var HTMLFrameElement$1 = window["HTMLFrameElement"];
    var HTMLFrameSetElement$1 = window["HTMLFrameSetElement"];
    var HTMLHRElement$1 = window["HTMLHRElement"];
    var HTMLHeadElement$1 = window["HTMLHeadElement"];
    var HTMLHeadingElement$1 = window["HTMLHeadingElement"];
    var HTMLHtmlElement$1 = window["HTMLHtmlElement"];
    var HTMLIFrameElement$1 = window["HTMLIFrameElement"];
    var HTMLImageElement$1 = window["HTMLImageElement"];
    var HTMLInputElement$1 = window["HTMLInputElement"];
    var HTMLLIElement$1 = window["HTMLLIElement"];
    var HTMLLabelElement$1 = window["HTMLLabelElement"];
    var HTMLLegendElement$1 = window["HTMLLegendElement"];
    var HTMLLinkElement$1 = window["HTMLLinkElement"];
    var HTMLMainElement$1 = window["HTMLMainElement"];
    var HTMLMapElement$1 = window["HTMLMapElement"];
    var HTMLMarqueeElement$1 = window["HTMLMarqueeElement"];
    var HTMLMediaElement$1 = window["HTMLMediaElement"];
    var HTMLMenuElement$1 = window["HTMLMenuElement"];
    var HTMLMetaElement$1 = window["HTMLMetaElement"];
    var HTMLMeterElement$1 = window["HTMLMeterElement"];
    var HTMLModElement$1 = window["HTMLModElement"];
    var HTMLOListElement$1 = window["HTMLOListElement"];
    var HTMLObjectElement$1 = window["HTMLObjectElement"];
    var HTMLOptGroupElement$1 = window["HTMLOptGroupElement"];
    var HTMLOptionElement$1 = window["HTMLOptionElement"];
    var HTMLOptionsCollection$1 = window["HTMLOptionsCollection"];
    var HTMLOutputElement$1 = window["HTMLOutputElement"];
    var HTMLParagraphElement$1 = window["HTMLParagraphElement"];
    var HTMLParamElement$1 = window["HTMLParamElement"];
    var HTMLPictureElement$1 = window["HTMLPictureElement"];
    var HTMLPreElement$1 = window["HTMLPreElement"];
    var HTMLProgressElement$1 = window["HTMLProgressElement"];
    var HTMLQuoteElement$1 = window["HTMLQuoteElement"];
    var HTMLScriptElement$1 = window["HTMLScriptElement"];
    var HTMLSelectElement$1 = window["HTMLSelectElement"];
    var HTMLSourceElement$1 = window["HTMLSourceElement"];
    var HTMLSpanElement$1 = window["HTMLSpanElement"];
    var HTMLStyleElement$1 = window["HTMLStyleElement"];
    var HTMLSummaryElement$1 = window["HTMLSummaryElement"];
    var HTMLTableCaptionElement$1 = window["HTMLTableCaptionElement"];
    var HTMLTableCellElement$1 = window["HTMLTableCellElement"];
    var HTMLTableColElement$1 = window["HTMLTableColElement"];
    var HTMLTableDataCellElement$1 = window["HTMLTableDataCellElement"];
    var HTMLTableElement$1 = window["HTMLTableElement"];
    var HTMLTableHeaderCellElement$1 = window["HTMLTableHeaderCellElement"];
    var HTMLTableRowElement$1 = window["HTMLTableRowElement"];
    var HTMLTableSectionElement$1 = window["HTMLTableSectionElement"];
    var HTMLTemplateElement$1 = window["HTMLTemplateElement"];
    var HTMLTextAreaElement$1 = window["HTMLTextAreaElement"];
    var HTMLTimeElement$1 = window["HTMLTimeElement"];
    var HTMLTitleElement$1 = window["HTMLTitleElement"];
    var HTMLTrackElement$1 = window["HTMLTrackElement"];
    var HTMLUListElement$1 = window["HTMLUListElement"];
    var HTMLUnknownElement$1 = window["HTMLUnknownElement"];
    var HTMLVideoElement$1 = window["HTMLVideoElement"];
    var HTMLegendElement$1 = window["HTMLegendElement"];
    var HashChangeEvent$1 = window["HashChangeEvent"];
    var Headers$1 = window["Headers"];
    var History$1 = window["History"];
    var IDBCursor$1 = window["IDBCursor"];
    var IDBCursorWithValue$1 = window["IDBCursorWithValue"];
    var IDBDatabase$1 = window["IDBDatabase"];
    var IDBFactory$1 = window["IDBFactory"];
    var IDBIndex$1 = window["IDBIndex"];
    var IDBKeyRange$1 = window["IDBKeyRange"];
    var IDBObjectStore$1 = window["IDBObjectStore"];
    var IDBOpenDBRequest$1 = window["IDBOpenDBRequest"];
    var IDBRequest$1 = window["IDBRequest"];
    var IDBTransaction$1 = window["IDBTransaction"];
    var IDBVersionChangeEvent$1 = window["IDBVersionChangeEvent"];
    var IIRFilterNode$1 = window["IIRFilterNode"];
    var ImageData$1 = window["ImageData"];
    var IntersectionObserver$1 = window["IntersectionObserver"];
    var IntersectionObserverEntry$1 = window["IntersectionObserverEntry"];
    var KeyboardEvent$1 = window["KeyboardEvent"];
    var ListeningStateChangedEvent$1 = window["ListeningStateChangedEvent"];
    var Location$1 = window["Location"];
    var MSAssertion$1 = window["MSAssertion"];
    var MSBlobBuilder$1 = window["MSBlobBuilder"];
    var MSCredentials$1 = window["MSCredentials"];
    var MSDCCEvent$1 = window["MSDCCEvent"];
    var MSDSHEvent$1 = window["MSDSHEvent"];
    var MSFIDOCredentialAssertion$1 = window["MSFIDOCredentialAssertion"];
    var MSFIDOSignature$1 = window["MSFIDOSignature"];
    var MSFIDOSignatureAssertion$1 = window["MSFIDOSignatureAssertion"];
    var MSGesture$1 = window["MSGesture"];
    var MSGestureEvent$1 = window["MSGestureEvent"];
    var MSGraphicsTrust$1 = window["MSGraphicsTrust"];
    var MSInputMethodContext$1 = window["MSInputMethodContext"];
    var MSMediaKeyError$1 = window["MSMediaKeyError"];
    var MSMediaKeyMessageEvent$1 = window["MSMediaKeyMessageEvent"];
    var MSMediaKeyNeededEvent$1 = window["MSMediaKeyNeededEvent"];
    var MSMediaKeySession$1 = window["MSMediaKeySession"];
    var MSMediaKeys$1 = window["MSMediaKeys"];
    var MSPointerEvent$1 = window["MSPointerEvent"];
    var MSStream$1 = window["MSStream"];
    var MSStreamReader$1 = window["MSStreamReader"];
    var MediaDeviceInfo$1 = window["MediaDeviceInfo"];
    var MediaDevices$1 = window["MediaDevices"];
    var MediaElementAudioSourceNode$1 = window["MediaElementAudioSourceNode"];
    var MediaEncryptedEvent$1 = window["MediaEncryptedEvent"];
    var MediaError$1 = window["MediaError"];
    var MediaKeyMessageEvent$1 = window["MediaKeyMessageEvent"];
    var MediaKeySession$1 = window["MediaKeySession"];
    var MediaKeyStatusMap$1 = window["MediaKeyStatusMap"];
    var MediaKeySystemAccess$1 = window["MediaKeySystemAccess"];
    var MediaKeys$1 = window["MediaKeys"];
    var MediaList$1 = window["MediaList"];
    var MediaQueryList$1 = window["MediaQueryList"];
    var MediaSource$1 = window["MediaSource"];
    var MediaStream$1 = window["MediaStream"];
    var MediaStreamAudioSourceNode$1 = window["MediaStreamAudioSourceNode"];
    var MediaStreamError$1 = window["MediaStreamError"];
    var MediaStreamErrorEvent$1 = window["MediaStreamErrorEvent"];
    var MediaStreamEvent$1 = window["MediaStreamEvent"];
    var MediaStreamTrack$1 = window["MediaStreamTrack"];
    var MediaStreamTrackEvent$1 = window["MediaStreamTrackEvent"];
    var MessageChannel$1 = window["MessageChannel"];
    var MessageEvent$1 = window["MessageEvent"];
    var MessagePort$1 = window["MessagePort"];
    var MimeType$1 = window["MimeType"];
    var MimeTypeArray$1 = window["MimeTypeArray"];
    var MouseEvent$1 = window["MouseEvent"];
    var MutationEvent$1 = window["MutationEvent"];
    var MutationObserver$1 = window["MutationObserver"];
    var MutationRecord$1 = window["MutationRecord"];
    var NamedNodeMap$1 = window["NamedNodeMap"];
    var Navigator$1 = window["Navigator"];
    var Node$1 = window["Node"];
    var NodeFilter$1 = window["NodeFilter"];
    var NodeIterator$1 = window["NodeIterator"];
    var NodeList$1 = window["NodeList"];
    var Notification$1 = window["Notification"];
    var OES_element_index_uint$1 = window["OES_element_index_uint"];
    var OES_standard_derivatives$1 = window["OES_standard_derivatives"];
    var OES_texture_float$1 = window["OES_texture_float"];
    var OES_texture_float_linear$1 = window["OES_texture_float_linear"];
    var OES_texture_half_float$1 = window["OES_texture_half_float"];
    var OES_texture_half_float_linear$1 = window["OES_texture_half_float_linear"];
    var OfflineAudioCompletionEvent$1 = window["OfflineAudioCompletionEvent"];
    var OfflineAudioContext$1 = window["OfflineAudioContext"];
    var OscillatorNode$1 = window["OscillatorNode"];
    var OverflowEvent$1 = window["OverflowEvent"];
    var PageTransitionEvent$1 = window["PageTransitionEvent"];
    var PannerNode$1 = window["PannerNode"];
    var Path2D$1 = window["Path2D"];
    var PaymentAddress$1 = window["PaymentAddress"];
    var PaymentRequest$1 = window["PaymentRequest"];
    var PaymentRequestUpdateEvent$1 = window["PaymentRequestUpdateEvent"];
    var PaymentResponse$1 = window["PaymentResponse"];
    var PerfWidgetExternal$1 = window["PerfWidgetExternal"];
    var Performance$1 = window["Performance"];
    var PerformanceEntry$1 = window["PerformanceEntry"];
    var PerformanceMark$1 = window["PerformanceMark"];
    var PerformanceMeasure$1 = window["PerformanceMeasure"];
    var PerformanceNavigation$1 = window["PerformanceNavigation"];
    var PerformanceNavigationTiming$1 = window["PerformanceNavigationTiming"];
    var PerformanceResourceTiming$1 = window["PerformanceResourceTiming"];
    var PerformanceTiming$1 = window["PerformanceTiming"];
    var PeriodicWave$1 = window["PeriodicWave"];
    var PermissionRequest$1 = window["PermissionRequest"];
    var PermissionRequestedEvent$1 = window["PermissionRequestedEvent"];
    var Plugin$1 = window["Plugin"];
    var PluginArray$1 = window["PluginArray"];
    var PointerEvent$1 = window["PointerEvent"];
    var PopStateEvent$1 = window["PopStateEvent"];
    var Position$1 = window["Position"];
    var PositionError$1 = window["PositionError"];
    var ProcessingInstruction$1 = window["ProcessingInstruction"];
    var ProgressEvent$1 = window["ProgressEvent"];
    var PushManager$1 = window["PushManager"];
    var PushSubscription$1 = window["PushSubscription"];
    var PushSubscriptionOptions$1 = window["PushSubscriptionOptions"];
    var RTCDTMFToneChangeEvent$1 = window["RTCDTMFToneChangeEvent"];
    var RTCDtlsTransport$1 = window["RTCDtlsTransport"];
    var RTCDtlsTransportStateChangedEvent$1 = window["RTCDtlsTransportStateChangedEvent"];
    var RTCDtmfSender$1 = window["RTCDtmfSender"];
    var RTCIceCandidate$1 = window["RTCIceCandidate"];
    var RTCIceCandidatePairChangedEvent$1 = window["RTCIceCandidatePairChangedEvent"];
    var RTCIceGatherer$1 = window["RTCIceGatherer"];
    var RTCIceGathererEvent$1 = window["RTCIceGathererEvent"];
    var RTCIceTransport$1 = window["RTCIceTransport"];
    var RTCIceTransportStateChangedEvent$1 = window["RTCIceTransportStateChangedEvent"];
    var RTCPeerConnection$1 = window["RTCPeerConnection"];
    var RTCPeerConnectionIceEvent$1 = window["RTCPeerConnectionIceEvent"];
    var RTCRtpReceiver$1 = window["RTCRtpReceiver"];
    var RTCRtpSender$1 = window["RTCRtpSender"];
    var RTCSessionDescription$1 = window["RTCSessionDescription"];
    var RTCSrtpSdesTransport$1 = window["RTCSrtpSdesTransport"];
    var RTCSsrcConflictEvent$1 = window["RTCSsrcConflictEvent"];
    var RTCStatsProvider$1 = window["RTCStatsProvider"];
    var RandomSource$1 = window["RandomSource"];
    var Range$1 = window["Range"];
    var ReadableStream$1 = window["ReadableStream"];
    var ReadableStreamReader$1 = window["ReadableStreamReader"];
    var Request$1 = window["Request"];
    var Response$1 = window["Response"];
    var SVGAElement$1 = window["SVGAElement"];
    var SVGAngle$1 = window["SVGAngle"];
    var SVGAnimatedAngle$1 = window["SVGAnimatedAngle"];
    var SVGAnimatedBoolean$1 = window["SVGAnimatedBoolean"];
    var SVGAnimatedEnumeration$1 = window["SVGAnimatedEnumeration"];
    var SVGAnimatedInteger$1 = window["SVGAnimatedInteger"];
    var SVGAnimatedLength$1 = window["SVGAnimatedLength"];
    var SVGAnimatedLengthList$1 = window["SVGAnimatedLengthList"];
    var SVGAnimatedNumber$1 = window["SVGAnimatedNumber"];
    var SVGAnimatedNumberList$1 = window["SVGAnimatedNumberList"];
    var SVGAnimatedPreserveAspectRatio$1 = window["SVGAnimatedPreserveAspectRatio"];
    var SVGAnimatedRect$1 = window["SVGAnimatedRect"];
    var SVGAnimatedString$1 = window["SVGAnimatedString"];
    var SVGAnimatedTransformList$1 = window["SVGAnimatedTransformList"];
    var SVGCircleElement$1 = window["SVGCircleElement"];
    var SVGClipPathElement$1 = window["SVGClipPathElement"];
    var SVGComponentTransferFunctionElement$1 = window["SVGComponentTransferFunctionElement"];
    var SVGDefsElement$1 = window["SVGDefsElement"];
    var SVGDescElement$1 = window["SVGDescElement"];
    var SVGElement$1 = window["SVGElement"];
    var SVGElementInstance$1 = window["SVGElementInstance"];
    var SVGElementInstanceList$1 = window["SVGElementInstanceList"];
    var SVGEllipseElement$1 = window["SVGEllipseElement"];
    var SVGFEBlendElement$1 = window["SVGFEBlendElement"];
    var SVGFEColorMatrixElement$1 = window["SVGFEColorMatrixElement"];
    var SVGFEComponentTransferElement$1 = window["SVGFEComponentTransferElement"];
    var SVGFECompositeElement$1 = window["SVGFECompositeElement"];
    var SVGFEConvolveMatrixElement$1 = window["SVGFEConvolveMatrixElement"];
    var SVGFEDiffuseLightingElement$1 = window["SVGFEDiffuseLightingElement"];
    var SVGFEDisplacementMapElement$1 = window["SVGFEDisplacementMapElement"];
    var SVGFEDistantLightElement$1 = window["SVGFEDistantLightElement"];
    var SVGFEFloodElement$1 = window["SVGFEFloodElement"];
    var SVGFEFuncAElement$1 = window["SVGFEFuncAElement"];
    var SVGFEFuncBElement$1 = window["SVGFEFuncBElement"];
    var SVGFEFuncGElement$1 = window["SVGFEFuncGElement"];
    var SVGFEFuncRElement$1 = window["SVGFEFuncRElement"];
    var SVGFEGaussianBlurElement$1 = window["SVGFEGaussianBlurElement"];
    var SVGFEImageElement$1 = window["SVGFEImageElement"];
    var SVGFEMergeElement$1 = window["SVGFEMergeElement"];
    var SVGFEMergeNodeElement$1 = window["SVGFEMergeNodeElement"];
    var SVGFEMorphologyElement$1 = window["SVGFEMorphologyElement"];
    var SVGFEOffsetElement$1 = window["SVGFEOffsetElement"];
    var SVGFEPointLightElement$1 = window["SVGFEPointLightElement"];
    var SVGFESpecularLightingElement$1 = window["SVGFESpecularLightingElement"];
    var SVGFESpotLightElement$1 = window["SVGFESpotLightElement"];
    var SVGFETileElement$1 = window["SVGFETileElement"];
    var SVGFETurbulenceElement$1 = window["SVGFETurbulenceElement"];
    var SVGFilterElement$1 = window["SVGFilterElement"];
    var SVGForeignObjectElement$1 = window["SVGForeignObjectElement"];
    var SVGGElement$1 = window["SVGGElement"];
    var SVGGradientElement$1 = window["SVGGradientElement"];
    var SVGGraphicsElement$1 = window["SVGGraphicsElement"];
    var SVGImageElement$1 = window["SVGImageElement"];
    var SVGLength$1 = window["SVGLength"];
    var SVGLengthList$1 = window["SVGLengthList"];
    var SVGLineElement$1 = window["SVGLineElement"];
    var SVGLinearGradientElement$1 = window["SVGLinearGradientElement"];
    var SVGMarkerElement$1 = window["SVGMarkerElement"];
    var SVGMaskElement$1 = window["SVGMaskElement"];
    var SVGMatrix$1 = window["SVGMatrix"];
    var SVGMetadataElement$1 = window["SVGMetadataElement"];
    var SVGNumber$1 = window["SVGNumber"];
    var SVGNumberList$1 = window["SVGNumberList"];
    var SVGPathElement$1 = window["SVGPathElement"];
    var SVGPathSeg$1 = window["SVGPathSeg"];
    var SVGPathSegArcAbs$1 = window["SVGPathSegArcAbs"];
    var SVGPathSegArcRel$1 = window["SVGPathSegArcRel"];
    var SVGPathSegClosePath$1 = window["SVGPathSegClosePath"];
    var SVGPathSegCurvetoCubicAbs$1 = window["SVGPathSegCurvetoCubicAbs"];
    var SVGPathSegCurvetoCubicRel$1 = window["SVGPathSegCurvetoCubicRel"];
    var SVGPathSegCurvetoCubicSmoothAbs$1 = window["SVGPathSegCurvetoCubicSmoothAbs"];
    var SVGPathSegCurvetoCubicSmoothRel$1 = window["SVGPathSegCurvetoCubicSmoothRel"];
    var SVGPathSegCurvetoQuadraticAbs$1 = window["SVGPathSegCurvetoQuadraticAbs"];
    var SVGPathSegCurvetoQuadraticRel$1 = window["SVGPathSegCurvetoQuadraticRel"];
    var SVGPathSegCurvetoQuadraticSmoothAbs$1 = window["SVGPathSegCurvetoQuadraticSmoothAbs"];
    var SVGPathSegCurvetoQuadraticSmoothRel$1 = window["SVGPathSegCurvetoQuadraticSmoothRel"];
    var SVGPathSegLinetoAbs$1 = window["SVGPathSegLinetoAbs"];
    var SVGPathSegLinetoHorizontalAbs$1 = window["SVGPathSegLinetoHorizontalAbs"];
    var SVGPathSegLinetoHorizontalRel$1 = window["SVGPathSegLinetoHorizontalRel"];
    var SVGPathSegLinetoRel$1 = window["SVGPathSegLinetoRel"];
    var SVGPathSegLinetoVerticalAbs$1 = window["SVGPathSegLinetoVerticalAbs"];
    var SVGPathSegLinetoVerticalRel$1 = window["SVGPathSegLinetoVerticalRel"];
    var SVGPathSegList$1 = window["SVGPathSegList"];
    var SVGPathSegMovetoAbs$1 = window["SVGPathSegMovetoAbs"];
    var SVGPathSegMovetoRel$1 = window["SVGPathSegMovetoRel"];
    var SVGPatternElement$1 = window["SVGPatternElement"];
    var SVGPoint$1 = window["SVGPoint"];
    var SVGPointList$1 = window["SVGPointList"];
    var SVGPolygonElement$1 = window["SVGPolygonElement"];
    var SVGPolylineElement$1 = window["SVGPolylineElement"];
    var SVGPreserveAspectRatio$1 = window["SVGPreserveAspectRatio"];
    var SVGRadialGradientElement$1 = window["SVGRadialGradientElement"];
    var SVGRect$1 = window["SVGRect"];
    var SVGRectElement$1 = window["SVGRectElement"];
    var SVGSVGElement$1 = window["SVGSVGElement"];
    var SVGScriptElement$1 = window["SVGScriptElement"];
    var SVGStopElement$1 = window["SVGStopElement"];
    var SVGStringList$1 = window["SVGStringList"];
    var SVGStylable$1 = window["SVGStylable"];
    var SVGStyleElement$1 = window["SVGStyleElement"];
    var SVGSwitchElement$1 = window["SVGSwitchElement"];
    var SVGSymbolElement$1 = window["SVGSymbolElement"];
    var SVGTSpanElement$1 = window["SVGTSpanElement"];
    var SVGTextContentElement$1 = window["SVGTextContentElement"];
    var SVGTextElement$1 = window["SVGTextElement"];
    var SVGTextPathElement$1 = window["SVGTextPathElement"];
    var SVGTextPositioningElement$1 = window["SVGTextPositioningElement"];
    var SVGTitleElement$1 = window["SVGTitleElement"];
    var SVGTransform$1 = window["SVGTransform"];
    var SVGTransformList$1 = window["SVGTransformList"];
    var SVGUnitTypes$1 = window["SVGUnitTypes"];
    var SVGUseElement$1 = window["SVGUseElement"];
    var SVGViewElement$1 = window["SVGViewElement"];
    var SVGZoomAndPan$1 = window["SVGZoomAndPan"];
    var SVGZoomEvent$1 = window["SVGZoomEvent"];
    var ScopedCredential$1 = window["ScopedCredential"];
    var ScopedCredentialInfo$1 = window["ScopedCredentialInfo"];
    var Screen$1 = window["Screen"];
    var ScriptProcessorNode$1 = window["ScriptProcessorNode"];
    var SecurityPolicyViolationEvent$1 = window["SecurityPolicyViolationEvent"];
    var Selection$1 = window["Selection"];
    var ServiceUIFrameContext$1 = window["ServiceUIFrameContext"];
    var ServiceWorker$1 = window["ServiceWorker"];
    var ServiceWorkerContainer$1 = window["ServiceWorkerContainer"];
    var ServiceWorkerMessageEvent$1 = window["ServiceWorkerMessageEvent"];
    var ServiceWorkerRegistration$1 = window["ServiceWorkerRegistration"];
    var SourceBuffer$1 = window["SourceBuffer"];
    var SourceBufferList$1 = window["SourceBufferList"];
    var SpeechSynthesis$1 = window["SpeechSynthesis"];
    var SpeechSynthesisEvent$1 = window["SpeechSynthesisEvent"];
    var SpeechSynthesisUtterance$1 = window["SpeechSynthesisUtterance"];
    var SpeechSynthesisVoice$1 = window["SpeechSynthesisVoice"];
    var StereoPannerNode$1 = window["StereoPannerNode"];
    var Storage$1 = window["Storage"];
    var StorageEvent$1 = window["StorageEvent"];
    var StyleMedia$1 = window["StyleMedia"];
    var StyleSheet$1 = window["StyleSheet"];
    var StyleSheetList$1 = window["StyleSheetList"];
    var SubtleCrypto$1 = window["SubtleCrypto"];
    var SyncManager$1 = window["SyncManager"];
    var Text$1 = window["Text"];
    var TextDecoder$1 = window["TextDecoder"];
    var TextEncoder$1 = window["TextEncoder"];
    var TextEvent$1 = window["TextEvent"];
    var TextMetrics$1 = window["TextMetrics"];
    var TextTrack$1 = window["TextTrack"];
    var TextTrackCue$1 = window["TextTrackCue"];
    var TextTrackCueList$1 = window["TextTrackCueList"];
    var TextTrackList$1 = window["TextTrackList"];
    var TimeRanges$1 = window["TimeRanges"];
    var Touch$1 = window["Touch"];
    var TouchEvent$1 = window["TouchEvent"];
    var TouchList$1 = window["TouchList"];
    var TrackEvent$1 = window["TrackEvent"];
    var TransitionEvent$1 = window["TransitionEvent"];
    var TreeWalker$1 = window["TreeWalker"];
    var UIEvent$1 = window["UIEvent"];
    var URL$1 = window["URL"];
    var URLSearchParams$1 = window["URLSearchParams"];
    var VRDisplay$1 = window["VRDisplay"];
    var VRDisplayCapabilities$1 = window["VRDisplayCapabilities"];
    var VRDisplayEvent$1 = window["VRDisplayEvent"];
    var VREyeParameters$1 = window["VREyeParameters"];
    var VRFieldOfView$1 = window["VRFieldOfView"];
    var VRFrameData$1 = window["VRFrameData"];
    var VRPose$1 = window["VRPose"];
    var ValidityState$1 = window["ValidityState"];
    var VideoPlaybackQuality$1 = window["VideoPlaybackQuality"];
    var VideoTrack$1 = window["VideoTrack"];
    var VideoTrackList$1 = window["VideoTrackList"];
    var WEBGL_compressed_texture_s3tc$1 = window["WEBGL_compressed_texture_s3tc"];
    var WEBGL_debug_renderer_info$1 = window["WEBGL_debug_renderer_info"];
    var WEBGL_depth_texture$1 = window["WEBGL_depth_texture"];
    var WaveShaperNode$1 = window["WaveShaperNode"];
    var WebAuthentication$1 = window["WebAuthentication"];
    var WebAuthnAssertion$1 = window["WebAuthnAssertion"];
    var WebGLActiveInfo$1 = window["WebGLActiveInfo"];
    var WebGLBuffer$1 = window["WebGLBuffer"];
    var WebGLContextEvent$1 = window["WebGLContextEvent"];
    var WebGLFramebuffer$1 = window["WebGLFramebuffer"];
    var WebGLObject$1 = window["WebGLObject"];
    var WebGLProgram$1 = window["WebGLProgram"];
    var WebGLRenderbuffer$1 = window["WebGLRenderbuffer"];
    var WebGLRenderingContext$1 = window["WebGLRenderingContext"];
    var WebGLShader$1 = window["WebGLShader"];
    var WebGLShaderPrecisionFormat$1 = window["WebGLShaderPrecisionFormat"];
    var WebGLTexture$1 = window["WebGLTexture"];
    var WebGLUniformLocation$1 = window["WebGLUniformLocation"];
    var WebKitCSSMatrix$1 = window["WebKitCSSMatrix"];
    var WebKitDirectoryEntry$1 = window["WebKitDirectoryEntry"];
    var WebKitDirectoryReader$1 = window["WebKitDirectoryReader"];
    var WebKitEntry$1 = window["WebKitEntry"];
    var WebKitFileEntry$1 = window["WebKitFileEntry"];
    var WebKitFileSystem$1 = window["WebKitFileSystem"];
    var WebKitPoint$1 = window["WebKitPoint"];
    var WebSocket$1 = window["WebSocket"];
    var WheelEvent$1 = window["WheelEvent"];
    var Window$1 = window["Window"];
    var Worker$1 = window["Worker"];
    var WritableStream$1 = window["WritableStream"];
    var WritableStreamDefaultController$1 = window["WritableStreamDefaultController"];
    var WritableStreamDefaultWriter$1 = window["WritableStreamDefaultWriter"];
    var XMLDocument$1 = window["XMLDocument"];
    var XMLHttpRequest$1 = window["XMLHttpRequest"];
    var XMLHttpRequestUpload$1 = window["XMLHttpRequestUpload"];
    var XMLSerializer$1 = window["XMLSerializer"];
    var XPathEvaluator$1 = window["XPathEvaluator"];
    var XPathExpression$1 = window["XPathExpression"];
    var XPathNSResolver$1 = window["XPathNSResolver"];
    var XPathResult$1 = window["XPathResult"];
    var XSLTProcessor$1 = window["XSLTProcessor"];
    var webkitRTCPeerConnection$1 = window["webkitRTCPeerConnection"];
    var Audio$1 = window["Audio"];
    var Image$1 = window["Image"];
    var Option$1 = window["Option"];
    var applicationCache$1 = window["applicationCache"];
    var caches$1 = window["caches"];
    var clientInformation$1 = window["clientInformation"];
    var closed$1 = window["closed"];
    var crypto$1 = window["crypto"];
    var customElements$1 = window["customElements"];
    var defaultStatus$1 = window["defaultStatus"];
    var devicePixelRatio$1 = window["devicePixelRatio"];
    var doNotTrack$1 = window["doNotTrack"];
    var document$1 = window["document"];
    var event$1 = window["event"];
    var external$1 = window["external"];
    var frameElement$1 = window["frameElement"];
    var frames$1 = window["frames"];
    var history$1 = window["history"];
    var innerHeight$1 = window["innerHeight"];
    var innerWidth$1 = window["innerWidth"];
    var isSecureContext$1 = window["isSecureContext"];
    var length$1 = window["length"];
    var location$1 = window["location"];
    var locationbar$1 = window["locationbar"];
    var menubar$1 = window["menubar"];
    var msContentScript$1 = window["msContentScript"];
    var msCredentials$1 = window["msCredentials"];
    var name$1 = window["name"];
    var navigator$1 = window["navigator"];
    var offscreenBuffering$1 = window["offscreenBuffering"];
    var onabort$1 = window["onabort"];
    var onafterprint$1 = window["onafterprint"];
    var onbeforeprint$1 = window["onbeforeprint"];
    var onbeforeunload$1 = window["onbeforeunload"];
    var onblur$1 = window["onblur"];
    var oncanplay$1 = window["oncanplay"];
    var oncanplaythrough$1 = window["oncanplaythrough"];
    var onchange$1 = window["onchange"];
    var onclick$1 = window["onclick"];
    var oncompassneedscalibration$1 = window["oncompassneedscalibration"];
    var oncontextmenu$1 = window["oncontextmenu"];
    var ondblclick$1 = window["ondblclick"];
    var ondevicelight$1 = window["ondevicelight"];
    var ondevicemotion$1 = window["ondevicemotion"];
    var ondeviceorientation$1 = window["ondeviceorientation"];
    var ondrag$1 = window["ondrag"];
    var ondragend$1 = window["ondragend"];
    var ondragenter$1 = window["ondragenter"];
    var ondragleave$1 = window["ondragleave"];
    var ondragover$1 = window["ondragover"];
    var ondragstart$1 = window["ondragstart"];
    var ondrop$1 = window["ondrop"];
    var ondurationchange$1 = window["ondurationchange"];
    var onemptied$1 = window["onemptied"];
    var onended$1 = window["onended"];
    var onerror$1 = window["onerror"];
    var onfocus$1 = window["onfocus"];
    var onhashchange$1 = window["onhashchange"];
    var oninput$1 = window["oninput"];
    var oninvalid$1 = window["oninvalid"];
    var onkeydown$1 = window["onkeydown"];
    var onkeypress$1 = window["onkeypress"];
    var onkeyup$1 = window["onkeyup"];
    var onload$1 = window["onload"];
    var onloadeddata$1 = window["onloadeddata"];
    var onloadedmetadata$1 = window["onloadedmetadata"];
    var onloadstart$1 = window["onloadstart"];
    var onmessage$1 = window["onmessage"];
    var onmousedown$1 = window["onmousedown"];
    var onmouseenter$1 = window["onmouseenter"];
    var onmouseleave$1 = window["onmouseleave"];
    var onmousemove$1 = window["onmousemove"];
    var onmouseout$1 = window["onmouseout"];
    var onmouseover$1 = window["onmouseover"];
    var onmouseup$1 = window["onmouseup"];
    var onmousewheel$1 = window["onmousewheel"];
    var onmsgesturechange$1 = window["onmsgesturechange"];
    var onmsgesturedoubletap$1 = window["onmsgesturedoubletap"];
    var onmsgestureend$1 = window["onmsgestureend"];
    var onmsgesturehold$1 = window["onmsgesturehold"];
    var onmsgesturestart$1 = window["onmsgesturestart"];
    var onmsgesturetap$1 = window["onmsgesturetap"];
    var onmsinertiastart$1 = window["onmsinertiastart"];
    var onmspointercancel$1 = window["onmspointercancel"];
    var onmspointerdown$1 = window["onmspointerdown"];
    var onmspointerenter$1 = window["onmspointerenter"];
    var onmspointerleave$1 = window["onmspointerleave"];
    var onmspointermove$1 = window["onmspointermove"];
    var onmspointerout$1 = window["onmspointerout"];
    var onmspointerover$1 = window["onmspointerover"];
    var onmspointerup$1 = window["onmspointerup"];
    var onoffline$1 = window["onoffline"];
    var ononline$1 = window["ononline"];
    var onorientationchange$1 = window["onorientationchange"];
    var onpagehide$1 = window["onpagehide"];
    var onpageshow$1 = window["onpageshow"];
    var onpause$1 = window["onpause"];
    var onplay$1 = window["onplay"];
    var onplaying$1 = window["onplaying"];
    var onpopstate$1 = window["onpopstate"];
    var onprogress$1 = window["onprogress"];
    var onratechange$1 = window["onratechange"];
    var onreadystatechange$1 = window["onreadystatechange"];
    var onreset$1 = window["onreset"];
    var onresize$1 = window["onresize"];
    var onscroll$1 = window["onscroll"];
    var onseeked$1 = window["onseeked"];
    var onseeking$1 = window["onseeking"];
    var onselect$1 = window["onselect"];
    var onstalled$1 = window["onstalled"];
    var onstorage$1 = window["onstorage"];
    var onsubmit$1 = window["onsubmit"];
    var onsuspend$1 = window["onsuspend"];
    var ontimeupdate$1 = window["ontimeupdate"];
    var ontouchcancel$1 = window["ontouchcancel"];
    var ontouchend$1 = window["ontouchend"];
    var ontouchmove$1 = window["ontouchmove"];
    var ontouchstart$1 = window["ontouchstart"];
    var onunload$1 = window["onunload"];
    var onvolumechange$1 = window["onvolumechange"];
    var onvrdisplayactivate$1 = window["onvrdisplayactivate"];
    var onvrdisplayblur$1 = window["onvrdisplayblur"];
    var onvrdisplayconnect$1 = window["onvrdisplayconnect"];
    var onvrdisplaydeactivate$1 = window["onvrdisplaydeactivate"];
    var onvrdisplaydisconnect$1 = window["onvrdisplaydisconnect"];
    var onvrdisplayfocus$1 = window["onvrdisplayfocus"];
    var onvrdisplaypointerrestricted$1 = window["onvrdisplaypointerrestricted"];
    var onvrdisplaypointerunrestricted$1 = window["onvrdisplaypointerunrestricted"];
    var onvrdisplaypresentchange$1 = window["onvrdisplaypresentchange"];
    var onwaiting$1 = window["onwaiting"];
    var opener$1 = window["opener"];
    var orientation$1 = window["orientation"];
    var outerHeight$1 = window["outerHeight"];
    var outerWidth$1 = window["outerWidth"];
    var pageXOffset$1 = window["pageXOffset"];
    var pageYOffset$1 = window["pageYOffset"];
    var parent$1 = window["parent"];
    var performance$1 = window["performance"];
    var personalbar$1 = window["personalbar"];
    var screen$1 = window["screen"];
    var screenLeft$1 = window["screenLeft"];
    var screenTop$1 = window["screenTop"];
    var screenX$1 = window["screenX"];
    var screenY$1 = window["screenY"];
    var scrollX$1 = window["scrollX"];
    var scrollY$1 = window["scrollY"];
    var scrollbars$1 = window["scrollbars"];
    var self$1 = window["self"];
    var speechSynthesis$1 = window["speechSynthesis"];
    var status$1 = window["status"];
    var statusbar$1 = window["statusbar"];
    var styleMedia$1 = window["styleMedia"];
    var toolbar$1 = window["toolbar"];
    var top$1 = window["top"];
    var window$1 = window["window"];
    var alert$1 = window["alert"];
    var blur$1 = window["blur"];
    var cancelAnimationFrame$1 = window["cancelAnimationFrame"];
    var captureEvents$1 = window["captureEvents"];
    var close$1 = window["close"];
    var confirm$1 = window["confirm"];
    var createImageBitmap$1 = window["createImageBitmap"];
    var departFocus$1 = window["departFocus"];
    var focus$1 = window["focus"];
    var getComputedStyle$1 = window["getComputedStyle"];
    var getMatchedCSSRules$1 = window["getMatchedCSSRules"];
    var getSelection$1 = window["getSelection"];
    var matchMedia$1 = window["matchMedia"];
    var moveBy$1 = window["moveBy"];
    var moveTo$1 = window["moveTo"];
    var msWriteProfilerMark$1 = window["msWriteProfilerMark"];
    var open$1 = window["open"];
    var postMessage$1 = window["postMessage"];
    var print$1 = window["print"];
    var prompt$1 = window["prompt"];
    var releaseEvents$1 = window["releaseEvents"];
    var requestAnimationFrame$1 = window["requestAnimationFrame"];
    var resizeBy$1 = window["resizeBy"];
    var resizeTo$1 = window["resizeTo"];
    var scroll$1 = window["scroll"];
    var scrollBy$1 = window["scrollBy"];
    var scrollTo$1 = window["scrollTo"];
    var stop$1 = window["stop"];
    var webkitCancelAnimationFrame$1 = window["webkitCancelAnimationFrame"];
    var webkitConvertPointFromNodeToPage$1 = window["webkitConvertPointFromNodeToPage"];
    var webkitConvertPointFromPageToNode$1 = window["webkitConvertPointFromPageToNode"];
    var webkitRequestAnimationFrame$1 = window["webkitRequestAnimationFrame"];
    var toString$1 = window["toString"];
    var dispatchEvent$1 = window["dispatchEvent"];
    var clearInterval$1 = window["clearInterval"];
    var clearTimeout$1 = window["clearTimeout"];
    var setInterval$1 = window["setInterval"];
    var setTimeout$1 = window["setTimeout"];
    var clearImmediate$1 = window["clearImmediate"];
    var setImmediate$1 = window["setImmediate"];
    var sessionStorage$1 = window["sessionStorage"];
    var localStorage$1 = window["localStorage"];
    var console$1 = window["console"];
    var onpointercancel$1 = window["onpointercancel"];
    var onpointerdown$1 = window["onpointerdown"];
    var onpointerenter$1 = window["onpointerenter"];
    var onpointerleave$1 = window["onpointerleave"];
    var onpointermove$1 = window["onpointermove"];
    var onpointerout$1 = window["onpointerout"];
    var onpointerover$1 = window["onpointerover"];
    var onpointerup$1 = window["onpointerup"];
    var onwheel$1 = window["onwheel"];
    var indexedDB$1 = window["indexedDB"];
    var atob$1 = window["atob"];
    var btoa$1 = window["btoa"];
    var fetch$1 = window["fetch"];
    var addEventListener$1 = window["addEventListener"];
    var removeEventListener$1 = window["removeEventListener"];
    var Fun_noop = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
    };
    var noarg = function(f) {
      return function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        return f();
      };
    };
    var compose = function(fa, fb) {
      return function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        return fa(fb.apply(null, args));
      };
    };
    var constant = function(value) {
      return function() {
        return value;
      };
    };
    var identity = function(x) {
      return x;
    };
    var tripleEquals = function(a, b) {
      return a === b;
    };

    function curry(fn) {
      var initialArgs = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        initialArgs[_i - 1] = arguments[_i];
      }
      return function() {
        var restArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          restArgs[_i] = arguments[_i];
        }
        var all = initialArgs.concat(restArgs);
        return fn.apply(null, all);
      };
    }
    var not = function(f) {
      return function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        return !f.apply(null, args);
      };
    };
    var die = function(msg) {
      return function() {
        throw new Error(msg);
      };
    };
    var apply = function(f) {
      return f();
    };
    var Fun_call = function(f) {
      f();
    };
    var never = constant(false);
    var always = constant(true);
    var Option_never = never;
    var Option_always = always;
    var Option_none = function() {
      return NONE;
    };
    var NONE = (function() {
      var eq = function(o) {
        return o.isNone();
      };
      var call = function(thunk) {
        return thunk();
      };
      var id = function(n) {
        return n;
      };
      var noop = function() {};
      var nul = function() {
        return null;
      };
      var undef = function() {
        return undefined;
      };
      var me = {
        fold: function(n, s) {
          return n();
        },
        is: Option_never,
        isSome: Option_never,
        isNone: Option_always,
        getOr: id,
        getOrThunk: call,
        getOrDie: function(msg) {
          throw new Error(msg || "error: getOrDie called on none.");
        },
        getOrNull: nul,
        getOrUndefined: undef,
        or: id,
        orThunk: call,
        map: Option_none,
        ap: Option_none,
        each: noop,
        bind: Option_none,
        flatten: Option_none,
        exists: Option_never,
        forall: Option_always,
        filter: Option_none,
        equals: eq,
        equals_: eq,
        toArray: function() {
          return [];
        },
        toString: constant("none()"),
      };
      if (Object.freeze) Object.freeze(me);
      return me;
    })();
    var some = function(a) {
      var constant_a = function() {
        return a;
      };
      var self = function() {
        return me;
      };
      var map = function(f) {
        return some(f(a));
      };
      var bind = function(f) {
        return f(a);
      };
      var me = {
        fold: function(n, s) {
          return s(a);
        },
        is: function(v) {
          return a === v;
        },
        isSome: Option_always,
        isNone: Option_never,
        getOr: constant_a,
        getOrThunk: constant_a,
        getOrDie: constant_a,
        getOrNull: constant_a,
        getOrUndefined: constant_a,
        or: self,
        orThunk: self,
        map: map,
        ap: function(optfab) {
          return optfab.fold(Option_none, function(fab) {
            return some(fab(a));
          });
        },
        each: function(f) {
          f(a);
        },
        bind: bind,
        flatten: constant_a,
        exists: bind,
        forall: bind,
        filter: function(f) {
          return f(a) ? me : NONE;
        },
        equals: function(o) {
          return o.is(a);
        },
        equals_: function(o, elementEq) {
          return o.fold(Option_never, function(b) {
            return elementEq(a, b);
          });
        },
        toArray: function() {
          return [a];
        },
        toString: function() {
          return "some(" + a + ")";
        },
      };
      return me;
    };
    var from = function(value) {
      return value === null || value === undefined ? NONE : some(value);
    };
    var Option = {
      some: some,
      none: Option_none,
      from: from
    };
    var fromHtml = function(html, scope) {
      var doc = scope || document$1;
      var div = doc.createElement("div");
      div.innerHTML = html;
      if (!div.hasChildNodes() || div.childNodes.length > 1) {
        console$1.error("HTML does not have a single root node", html);
        throw new Error("HTML must have a single root node");
      }
      return fromDom(div.childNodes[0]);
    };
    var fromTag = function(tag, scope) {
      var doc = scope || document$1;
      var node = doc.createElement(tag);
      return fromDom(node);
    };
    var fromText = function(text, scope) {
      var doc = scope || document$1;
      var node = doc.createTextNode(text);
      return fromDom(node);
    };
    var fromDom = function(node) {
      if (node === null || node === undefined) {
        throw new Error("Node cannot be null or undefined");
      }
      return {
        dom: constant(node)
      };
    };
    var fromPoint = function(docElm, x, y) {
      var doc = docElm.dom();
      return Option.from(doc.elementFromPoint(x, y)).map(fromDom);
    };
    var Element = {
      fromHtml: fromHtml,
      fromTag: fromTag,
      fromText: fromText,
      fromDom: fromDom,
      fromPoint: fromPoint
    };
    var node_Element = Element;
    var typeOf = function(x) {
      if (x === null) return "null";
      var t = typeof x;
      if (t === "object" && Array.prototype.isPrototypeOf(x)) return "array";
      if (t === "object" && String.prototype.isPrototypeOf(x)) return "string";
      return t;
    };
    var isType = function(type) {
      return function(value) {
        return typeOf(value) === type;
      };
    };
    var isString = isType("string");
    var isObject = isType("object");
    var isArray = isType("array");
    var isNull = isType("null");
    var isBoolean = isType("boolean");
    var isUndefined = isType("undefined");
    var isFunction = isType("function");
    var isNumber = isType("number");
    var rawIndexOf = (function() {
      var pIndexOf = Array.prototype.indexOf;
      var fastIndex = function(xs, x) {
        return pIndexOf.call(xs, x);
      };
      var slowIndex = function(xs, x) {
        return slowIndexOf(xs, x);
      };
      return pIndexOf === undefined ? slowIndex : fastIndex;
    })();
    var indexOf = function(xs, x) {
      var r = rawIndexOf(xs, x);
      return r === -1 ? Option.none() : Option.some(r);
    };
    var contains = function(xs, x) {
      return rawIndexOf(xs, x) > -1;
    };
    var Arr_exists = function(xs, pred) {
      return findIndex(xs, pred).isSome();
    };
    var Arr_range = function(num, f) {
      var r = [];
      for (var i = 0; i < num; i++) {
        r.push(f(i));
      }
      return r;
    };
    var chunk = function(array, size) {
      var r = [];
      for (var i = 0; i < array.length; i += size) {
        var s = array.slice(i, i + size);
        r.push(s);
      }
      return r;
    };
    var Arr_map = function(xs, f) {
      var len = xs.length;
      var r = new Array(len);
      for (var i = 0; i < len; i++) {
        var x = xs[i];
        r[i] = f(x, i, xs);
      }
      return r;
    };
    var Arr_each = function(xs, f) {
      for (var i = 0, len = xs.length; i < len; i++) {
        var x = xs[i];
        f(x, i, xs);
      }
    };
    var eachr = function(xs, f) {
      for (var i = xs.length - 1; i >= 0; i--) {
        var x = xs[i];
        f(x, i, xs);
      }
    };
    var Arr_partition = function(xs, pred) {
      var pass = [];
      var fail = [];
      for (var i = 0, len = xs.length; i < len; i++) {
        var x = xs[i];
        var arr = pred(x, i, xs) ? pass : fail;
        arr.push(x);
      }
      return {
        pass: pass,
        fail: fail
      };
    };
    var Arr_filter = function(xs, pred) {
      var r = [];
      for (var i = 0, len = xs.length; i < len; i++) {
        var x = xs[i];
        if (pred(x, i, xs)) {
          r.push(x);
        }
      }
      return r;
    };
    var groupBy = function(xs, f) {
      if (xs.length === 0) {
        return [];
      } else {
        var wasType = f(xs[0]);
        var r = [];
        var group = [];
        for (var i = 0, len = xs.length; i < len; i++) {
          var x = xs[i];
          var type = f(x);
          if (type !== wasType) {
            r.push(group);
            group = [];
          }
          wasType = type;
          group.push(x);
        }
        if (group.length !== 0) {
          r.push(group);
        }
        return r;
      }
    };
    var foldr = function(xs, f, acc) {
      eachr(xs, function(x) {
        acc = f(acc, x);
      });
      return acc;
    };
    var foldl = function(xs, f, acc) {
      Arr_each(xs, function(x) {
        acc = f(acc, x);
      });
      return acc;
    };
    var Arr_find = function(xs, pred) {
      for (var i = 0, len = xs.length; i < len; i++) {
        var x = xs[i];
        if (pred(x, i, xs)) {
          return Option.some(x);
        }
      }
      return Option.none();
    };
    var findIndex = function(xs, pred) {
      for (var i = 0, len = xs.length; i < len; i++) {
        var x = xs[i];
        if (pred(x, i, xs)) {
          return Option.some(i);
        }
      }
      return Option.none();
    };
    var slowIndexOf = function(xs, x) {
      for (var i = 0, len = xs.length; i < len; ++i) {
        if (xs[i] === x) {
          return i;
        }
      }
      return -1;
    };
    var push = Array.prototype.push;
    var flatten = function(xs) {
      var r = [];
      for (var i = 0, len = xs.length; i < len; ++i) {
        if (!Array.prototype.isPrototypeOf(xs[i])) throw new Error("Arr.flatten item " + i + " was not an array, input: " + xs);
        push.apply(r, xs[i]);
      }
      return r;
    };
    var Arr_bind = function(xs, f) {
      var output = Arr_map(xs, f);
      return flatten(output);
    };
    var Arr_forall = function(xs, pred) {
      for (var i = 0, len = xs.length; i < len; ++i) {
        var x = xs[i];
        if (pred(x, i, xs) !== true) {
          return false;
        }
      }
      return true;
    };
    var equal = function(a1, a2) {
      return (
        a1.length === a2.length &&
        Arr_forall(a1, function(x, i) {
          return x === a2[i];
        })
      );
    };
    var slice = Array.prototype.slice;
    var reverse = function(xs) {
      var r = slice.call(xs, 0);
      r.reverse();
      return r;
    };
    var difference = function(a1, a2) {
      return Arr_filter(a1, function(x) {
        return !contains(a2, x);
      });
    };
    var mapToObject = function(xs, f) {
      var r = {};
      for (var i = 0, len = xs.length; i < len; i++) {
        var x = xs[i];
        r[String(x)] = f(x, i);
      }
      return r;
    };
    var pure = function(x) {
      return [x];
    };
    var sort = function(xs, comparator) {
      var copy = slice.call(xs, 0);
      copy.sort(comparator);
      return copy;
    };
    var Arr_head = function(xs) {
      return xs.length === 0 ? Option.none() : Option.some(xs[0]);
    };
    var Arr_last = function(xs) {
      return xs.length === 0 ? Option.none() : Option.some(xs[xs.length - 1]);
    };
    var Arr_from = isFunction(Array.from) ?
      Array.from :
      function(x) {
        return slice.call(x);
      };
    var LazyValue_nu = function(baseFn) {
      var data = Option.none();
      var callbacks = [];
      var map = function(f) {
        return LazyValue_nu(function(nCallback) {
          get(function(data) {
            nCallback(f(data));
          });
        });
      };
      var get = function(nCallback) {
        if (isReady()) call(nCallback);
        else callbacks.push(nCallback);
      };
      var set = function(x) {
        data = Option.some(x);
        run(callbacks);
        callbacks = [];
      };
      var isReady = function() {
        return data.isSome();
      };
      var run = function(cbs) {
        Arr_each(cbs, call);
      };
      var call = function(cb) {
        data.each(function(x) {
          setTimeout$1(function() {
            cb(x);
          }, 0);
        });
      };
      baseFn(set);
      return {
        get: get,
        map: map,
        isReady: isReady
      };
    };
    var LazyValue_pure = function(a) {
      return LazyValue_nu(function(callback) {
        callback(a);
      });
    };
    var LazyValue = {
      nu: LazyValue_nu,
      pure: LazyValue_pure
    };
    var bounce = function(f) {
      return function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        var me = this;
        setTimeout$1(function() {
          f.apply(me, args);
        }, 0);
      };
    };
    var Future_nu = function(baseFn) {
      var get = function(callback) {
        baseFn(bounce(callback));
      };
      var map = function(fab) {
        return Future_nu(function(callback) {
          get(function(a) {
            var value = fab(a);
            callback(value);
          });
        });
      };
      var bind = function(aFutureB) {
        return Future_nu(function(callback) {
          get(function(a) {
            aFutureB(a).get(callback);
          });
        });
      };
      var anonBind = function(futureB) {
        return Future_nu(function(callback) {
          get(function(a) {
            futureB.get(callback);
          });
        });
      };
      var toLazy = function() {
        return LazyValue.nu(get);
      };
      var toCached = function() {
        var cache = null;
        return Future_nu(function(callback) {
          if (cache === null) {
            cache = toLazy();
          }
          cache.get(callback);
        });
      };
      return {
        map: map,
        bind: bind,
        anonBind: anonBind,
        toLazy: toLazy,
        toCached: toCached,
        get: get
      };
    };
    var Future_pure = function(a) {
      return Future_nu(function(callback) {
        callback(a);
      });
    };
    var Future = {
      nu: Future_nu,
      pure: Future_pure
    };
    var unique = 0;
    var generate = function(prefix) {
      var date = new Date();
      var time = date.getTime();
      var random = Math.floor(Math.random() * 1e9);
      unique++;
      return prefix + "_" + random + unique + String(time);
    };
    var Obj_keys = Object.keys;
    var Obj_hasOwnProperty = Object.hasOwnProperty;
    var Obj_each = function(obj, f) {
      var props = Obj_keys(obj);
      for (var k = 0, len = props.length; k < len; k++) {
        var i = props[k];
        var x = obj[i];
        f(x, i, obj);
      }
    };
    var Obj_map = function(obj, f) {
      return tupleMap(obj, function(x, i, obj) {
        return {
          k: i,
          v: f(x, i, obj)
        };
      });
    };
    var tupleMap = function(obj, f) {
      var r = {};
      Obj_each(obj, function(x, i) {
        var tuple = f(x, i, obj);
        r[tuple.k] = tuple.v;
      });
      return r;
    };
    var bifilter = function(obj, pred) {
      var t = {};
      var f = {};
      Obj_each(obj, function(x, i) {
        var branch = pred(x, i) ? t : f;
        branch[i] = x;
      });
      return {
        t: t,
        f: f
      };
    };
    var mapToArray = function(obj, f) {
      var r = [];
      Obj_each(obj, function(value, name) {
        r.push(f(value, name));
      });
      return r;
    };
    var Obj_find = function(obj, pred) {
      var props = Obj_keys(obj);
      for (var k = 0, len = props.length; k < len; k++) {
        var i = props[k];
        var x = obj[i];
        if (pred(x, i, obj)) {
          return Option.some(x);
        }
      }
      return Option.none();
    };
    var Obj_values = function(obj) {
      return mapToArray(obj, function(v) {
        return v;
      });
    };
    var size = function(obj) {
      return Obj_keys(obj).length;
    };
    var Obj_get = function(obj, key) {
      return has(obj, key) ? Option.from(obj[key]) : Option.none();
    };
    var has = function(obj, key) {
      return Obj_hasOwnProperty.call(obj, key);
    };
    var showdown = __webpack_require__(0);
    var showdown_default = __webpack_require__.n(showdown);
    var PatchShowdown_bundle = __webpack_require__(1);
    var ConversionType;
    (function(ConversionType) {
      ConversionType["MarkdownToHtml"] = "markdown->html";
      ConversionType["HtmlToMarkdown"] = "html->markdown";
    })(ConversionType || (ConversionType = {}));
    var Navigation;
    (function(Navigation) {
      Navigation["Up"] = "up";
      Navigation["Down"] = "down";
    })(Navigation || (Navigation = {}));
    var MarkdownListType;
    (function(MarkdownListType) {
      MarkdownListType["Numeric"] = "1. ";
      // Use "* " instead of "- " for lists
      //MarkdownListType["Bullet"] = "- ";
      MarkdownListType["Bullet"] = "* ";
    })(MarkdownListType || (MarkdownListType = {}));
    var ViewMode;
    (function(ViewMode) {
      ViewMode[(ViewMode["Maximized"] = 0)] = "Maximized";
      ViewMode[(ViewMode["Normal"] = 1)] = "Normal";
    })(ViewMode || (ViewMode = {}));
    var HintActions;
    (function(HintActions) {
      HintActions[(HintActions["ShowHelpDialog"] = 0)] = "ShowHelpDialog";
    })(HintActions || (HintActions = {}));
    var modifiers = PatchShowdown_bundle["patchShowdown"](showdown_default.a);
    var showdownSettings = {
      tables: true,
      tasklists: true,
      strikethrough: true,
      emoji: false
    };
    var createSync = function() {
      var converter = new showdown_default.a.Converter(showdownSettings);
      var send = function(conversion) {
        return function(value) {
          modifiers.switchToOutput();
          var content = conversion === ConversionType.HtmlToMarkdown ? converter.makeMarkdown(value) : converter.makeHtml(value);
          modifiers.switchToTagging();
          return {
            type: conversion,
            content: content
          };
        };
      };
      return {
        markdownToHtml: send(ConversionType.MarkdownToHtml),
        htmlToMarkdown: send(ConversionType.HtmlToMarkdown)
      };
    };
    var createJs = function() {
      var converter = new showdown_default.a.Converter(showdownSettings);
      var send = function(conversion) {
        return function(value) {
          return Future.nu(function(callback) {
            callback({
              type: conversion,
              content: conversion === ConversionType.HtmlToMarkdown ? converter.makeMarkdown(value) : converter.makeHtml(value)
            });
          });
        };
      };
      return {
        doesNotSupport: modifiers.doesNotSupport,
        markdownToHtml: send(ConversionType.MarkdownToHtml),
        htmlToMarkdown: send(ConversionType.HtmlToMarkdown)
      };
    };
    var createWorker = function() {
      var requests = {};
      var worker = new Worker$1("../../main/js/Parser.js");
      worker.onmessage = function(e) {
        var requestId = e.data.requestId;
        Obj_get(requests, requestId).each(function(callback) {
          delete requests[requestId];
          callback({
            type: e.data.type,
            content: e.data.content
          });
        });
      };
      var send = function(conversion) {
        return function(value) {
          var requestId = generate(conversion);
          return Future.nu(function(callback) {
            requests[requestId] = callback;
            worker.postMessage({
              content: value,
              type: conversion,
              requestId: requestId
            });
          });
        };
      };
      var markdownToHtml = send(ConversionType.MarkdownToHtml);
      var htmlToMarkdown = send(ConversionType.HtmlToMarkdown);
      return {
        doesNotSupport: modifiers.doesNotSupport,
        markdownToHtml: markdownToHtml,
        htmlToMarkdown: htmlToMarkdown
      };
    };
    var addToStart = function(str, prefix) {
      return prefix + str;
    };
    var addToEnd = function(str, suffix) {
      return str + suffix;
    };
    var removeFromStart = function(str, numChars) {
      return str.substring(numChars);
    };
    var removeFromEnd = function(str, numChars) {
      return str.substring(0, str.length - numChars);
    };
    var StringParts_first = function(str, count) {
      return str.substr(0, count);
    };
    var StringParts_last = function(str, count) {
      return str.substr(str.length - count, str.length);
    };
    var StringParts_head = function(str) {
      return str === "" ? Option.none() : Option.some(str.substr(0, 1));
    };
    var tail = function(str) {
      return str === "" ? Option.none() : Option.some(str.substring(1));
    };
    var checkRange = function(str, substr, start) {
      if (substr === "") return true;
      if (str.length < substr.length) return false;
      var x = str.substr(start, start + substr.length);
      return x === substr;
    };
    var supplant = function(str, obj) {
      var isStringOrNumber = function(a) {
        var t = typeof a;
        return t === "string" || t === "number";
      };
      return str.replace(/\$\{([^{}]*)\}/g, function(fullMatch, key) {
        var value = obj[key];
        return isStringOrNumber(value) ? value.toString() : fullMatch;
      });
    };
    var removeLeading = function(str, prefix) {
      return Strings_startsWith(str, prefix) ? removeFromStart(str, prefix.length) : str;
    };
    var removeTrailing = function(str, prefix) {
      return endsWith(str, prefix) ? removeFromEnd(str, prefix.length) : str;
    };
    var ensureLeading = function(str, prefix) {
      return Strings_startsWith(str, prefix) ? str : addToStart(str, prefix);
    };
    var ensureTrailing = function(str, prefix) {
      return endsWith(str, prefix) ? str : addToEnd(str, prefix);
    };
    var Strings_contains = function(str, substr) {
      return str.indexOf(substr) !== -1;
    };
    var capitalize = function(str) {
      return StringParts_head(str)
        .bind(function(head) {
          return tail(str).map(function(tail) {
            return head.toUpperCase() + tail;
          });
        })
        .getOr(str);
    };
    var Strings_startsWith = function(str, prefix) {
      return checkRange(str, prefix, 0);
    };
    var endsWith = function(str, suffix) {
      return checkRange(str, suffix, str.length - suffix.length);
    };
    var trim = function(str) {
      return str.replace(/^\s+|\s+$/g, "");
    };
    var lTrim = function(str) {
      return str.replace(/^\s+/g, "");
    };
    var rTrim = function(str) {
      return str.replace(/\s+$/g, "");
    };
    var isSupported = function(dom) {
      return dom.style !== undefined;
    };
    var cached = function(f) {
      var called = false;
      var r;
      return function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        if (!called) {
          called = true;
          r = f.apply(null, args);
        }
        return r;
      };
    };
    var ATTRIBUTE = Node$1.ATTRIBUTE_NODE;
    var CDATA_SECTION = Node$1.CDATA_SECTION_NODE;
    var COMMENT = Node$1.COMMENT_NODE;
    var DOCUMENT = Node$1.DOCUMENT_NODE;
    var DOCUMENT_TYPE = Node$1.DOCUMENT_TYPE_NODE;
    var DOCUMENT_FRAGMENT = Node$1.DOCUMENT_FRAGMENT_NODE;
    var ELEMENT = Node$1.ELEMENT_NODE;
    var TEXT = Node$1.TEXT_NODE;
    var PROCESSING_INSTRUCTION = Node$1.PROCESSING_INSTRUCTION_NODE;
    var ENTITY_REFERENCE = Node$1.ENTITY_REFERENCE_NODE;
    var ENTITY = Node$1.ENTITY_NODE;
    var NOTATION = Node$1.NOTATION_NODE;
    var Node_name = function(element) {
      var r = element.dom().nodeName;
      return r.toLowerCase();
    };
    var Node_type = function(element) {
      return element.dom().nodeType;
    };
    var Node_value = function(element) {
      return element.dom().nodeValue;
    };
    var Node_isType = function(t) {
      return function(element) {
        return Node_type(element) === t;
      };
    };
    var isComment = function(element) {
      return Node_type(element) === COMMENT || Node_name(element) === "#comment";
    };
    var isElement = Node_isType(ELEMENT);
    var isText = Node_isType(TEXT);
    var isDocument = Node_isType(DOCUMENT);
    var inBody = function(element) {
      var dom = isText(element) ? element.dom().parentNode : element.dom();
      return dom !== undefined && dom !== null && dom.ownerDocument.body.contains(dom);
    };
    var Body_body = cached(function() {
      return getBody(node_Element.fromDom(document$1));
    });
    var getBody = function(doc) {
      var b = doc.dom().body;
      if (b === null || b === undefined) {
        throw new Error("Body is not available yet");
      }
      return node_Element.fromDom(b);
    };
    var rawSet = function(dom, key, value) {
      if (isString(value) || isBoolean(value) || isNumber(value)) {
        dom.setAttribute(key, value + "");
      } else {
        console$1.error("Invalid call to Attr.set. Key ", key, ":: Value ", value, ":: Element ", dom);
        throw new Error("Attribute value was not simple");
      }
    };
    var Attr_set = function(element, key, value) {
      rawSet(element.dom(), key, value);
    };
    var setAll = function(element, attrs) {
      var dom = element.dom();
      Obj_each(attrs, function(v, k) {
        rawSet(dom, k, v);
      });
    };
    var Attr_get = function(element, key) {
      var v = element.dom().getAttribute(key);
      return v === null ? undefined : v;
    };
    var Attr_getOpt = function(element, key) {
      return Option.from(Attr_get(element, key));
    };
    var Attr_has = function(element, key) {
      var dom = element.dom();
      return dom && dom.hasAttribute ? dom.hasAttribute(key) : false;
    };
    var Attr_remove = function(element, key) {
      element.dom().removeAttribute(key);
    };
    var hasNone = function(element) {
      var attrs = element.dom().attributes;
      return attrs === undefined || attrs === null || attrs.length === 0;
    };
    var Attr_clone = function(element) {
      return foldl(
        element.dom().attributes,
        function(acc, attr) {
          acc[attr.name] = attr.value;
          return acc;
        }, {}
      );
    };
    var transferOne = function(source, destination, attr) {
      if (Attr_has(source, attr) && !Attr_has(destination, attr)) {
        Attr_set(destination, attr, Attr_get(source, attr));
      }
    };
    var transfer = function(source, destination, attrs) {
      if (!isElement(source) || !isElement(destination)) {
        return;
      }
      Arr_each(attrs, function(attr) {
        transferOne(source, destination, attr);
      });
    };
    var internalSet = function(dom, property, value) {
      if (!isString(value)) {
        console$1.error("Invalid call to CSS.set. Property ", property, ":: Value ", value, ":: Element ", dom);
        throw new Error("CSS value must be a string: " + value);
      }
      if (isSupported(dom)) {
        dom.style.setProperty(property, value);
      }
    };
    var internalRemove = function(dom, property) {
      if (isSupported(dom)) {
        dom.style.removeProperty(property);
      }
    };
    var Css_set = function(element, property, value) {
      var dom = element.dom();
      internalSet(dom, property, value);
    };
    var Css_setAll = function(element, css) {
      var dom = element.dom();
      Obj_each(css, function(v, k) {
        internalSet(dom, k, v);
      });
    };
    var setOptions = function(element, css) {
      var dom = element.dom();
      Obj_each(css, function(v, k) {
        v.fold(
          function() {
            internalRemove(dom, k);
          },
          function(value) {
            internalSet(dom, k, value);
          }
        );
      });
    };
    var Css_get = function(element, property) {
      var dom = element.dom();
      var styles = window$1.getComputedStyle(dom);
      var r = styles.getPropertyValue(property);
      var v = r === "" && !inBody(element) ? getUnsafeProperty(dom, property) : r;
      return v === null ? undefined : v;
    };
    var getUnsafeProperty = function(dom, property) {
      return isSupported(dom) ? dom.style.getPropertyValue(property) : "";
    };
    var getRaw = function(element, property) {
      var dom = element.dom();
      var raw = getUnsafeProperty(dom, property);
      return Option.from(raw).filter(function(r) {
        return r.length > 0;
      });
    };
    var getAllRaw = function(element) {
      var css = {};
      var dom = element.dom();
      if (isSupported(dom)) {
        for (var i = 0; i < dom.style.length; i++) {
          var ruleName = dom.style.item(i);
          css[ruleName] = dom.style[ruleName];
        }
      }
      return css;
    };
    var isValidValue = function(tag, property, value) {
      var element = node_Element.fromTag(tag);
      Css_set(element, property, value);
      var style = getRaw(element, property);
      return style.isSome();
    };
    var Css_remove = function(element, property) {
      var dom = element.dom();
      internalRemove(dom, property);
      if (Attr_has(element, "style") && trim(Attr_get(element, "style")) === "") {
        Attr_remove(element, "style");
      }
    };
    var preserve = function(element, f) {
      var oldStyles = Attr_get(element, "style");
      var result = f(element);
      var restore = oldStyles === undefined ? Attr_remove : Attr_set;
      restore(element, "style", oldStyles);
      return result;
    };
    var copy = function(source, target) {
      var sourceDom = source.dom();
      var targetDom = target.dom();
      if (isSupported(sourceDom) && isSupported(targetDom)) {
        targetDom.style.cssText = sourceDom.style.cssText;
      }
    };
    var reflow = function(e) {
      return e.dom().offsetWidth;
    };
    var Css_transferOne = function(source, destination, style) {
      getRaw(source, style).each(function(value) {
        if (getRaw(destination, style).isNone()) {
          Css_set(destination, style, value);
        }
      });
    };
    var Css_transfer = function(source, destination, styles) {
      if (!isElement(source) || !isElement(destination)) {
        return;
      }
      Arr_each(styles, function(style) {
        Css_transferOne(source, destination, style);
      });
    };
    var Immutable = function() {
      var fields = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        fields[_i] = arguments[_i];
      }
      return function() {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          values[_i] = arguments[_i];
        }
        if (fields.length !== values.length) {
          throw new Error('Wrong number of arguments to struct. Expected "[' + fields.length + ']", got ' + values.length + " arguments");
        }
        var struct = {};
        Arr_each(fields, function(name, i) {
          struct[name] = constant(values[i]);
        });
        return struct;
      };
    };
    var BagUtils_sort = function(arr) {
      return arr.slice(0).sort();
    };
    var reqMessage = function(required, keys) {
      throw new Error("All required keys (" + BagUtils_sort(required).join(", ") + ") were not specified. Specified keys were: " + BagUtils_sort(keys).join(", ") + ".");
    };
    var unsuppMessage = function(unsupported) {
      throw new Error("Unsupported keys for object: " + BagUtils_sort(unsupported).join(", "));
    };
    var validateStrArr = function(label, array) {
      if (!isArray(array)) throw new Error("The " + label + " fields must be an array. Was: " + array + ".");
      Arr_each(array, function(a) {
        if (!isString(a)) throw new Error("The value " + a + " in the " + label + " fields was not a string.");
      });
    };
    var invalidTypeMessage = function(incorrect, type) {
      throw new Error("All values need to be of type: " + type + ". Keys (" + BagUtils_sort(incorrect).join(", ") + ") were not.");
    };
    var checkDupes = function(everything) {
      var sorted = BagUtils_sort(everything);
      var dupe = Arr_find(sorted, function(s, i) {
        return i < sorted.length - 1 && s === sorted[i + 1];
      });
      dupe.each(function(d) {
        throw new Error("The field: " + d + " occurs more than once in the combined fields: [" + sorted.join(", ") + "].");
      });
    };
    var MixedBag = function(required, optional) {
      var everything = required.concat(optional);
      if (everything.length === 0) throw new Error("You must specify at least one required or optional field.");
      validateStrArr("required", required);
      validateStrArr("optional", optional);
      checkDupes(everything);
      return function(obj) {
        var keys = Obj_keys(obj);
        var allReqd = Arr_forall(required, function(req) {
          return contains(keys, req);
        });
        if (!allReqd) reqMessage(required, keys);
        var unsupported = Arr_filter(keys, function(key) {
          return !contains(everything, key);
        });
        if (unsupported.length > 0) unsuppMessage(unsupported);
        var r = {};
        Arr_each(required, function(req) {
          r[req] = constant(obj[req]);
        });
        Arr_each(optional, function(opt) {
          r[opt] = constant(Object.prototype.hasOwnProperty.call(obj, opt) ? Option.some(obj[opt]) : Option.none());
        });
        return r;
      };
    };
    var toArray = function(target, f) {
      var r = [];
      var recurse = function(e) {
        r.push(e);
        return f(e);
      };
      var cur = f(target);
      do {
        cur = cur.bind(recurse);
      } while (cur.isSome());
      return r;
    };
    var Recurse = {
      toArray: toArray
    };
    var Global = typeof window$1 !== "undefined" ? window$1 : Function("return this;")();
    var Resolve_path = function(parts, scope) {
      var o = scope !== undefined && scope !== null ? scope : Global;
      for (var i = 0; i < parts.length && o !== undefined && o !== null; ++i) o = o[parts[i]];
      return o;
    };
    var resolve = function(p, scope) {
      var parts = p.split(".");
      return Resolve_path(parts, scope);
    };
    var step = function(o, part) {
      if (o[part] === undefined || o[part] === null) o[part] = {};
      return o[part];
    };
    var forge = function(parts, target) {
      var o = target !== undefined ? target : Global;
      for (var i = 0; i < parts.length; ++i) o = step(o, parts[i]);
      return o;
    };
    var namespace = function(name, target) {
      var parts = name.split(".");
      return forge(parts, target);
    };
    var unsafe = function(name, scope) {
      return resolve(name, scope);
    };
    var Global_getOrDie = function(name, scope) {
      var actual = unsafe(name, scope);
      if (actual === undefined || actual === null) throw name + " not available on this browser";
      return actual;
    };
    var util_Global = {
      getOrDie: Global_getOrDie
    };
    var Node_node = function() {
      var f = util_Global.getOrDie("Node");
      return f;
    };
    var compareDocumentPosition = function(a, b, match) {
      return (a.compareDocumentPosition(b) & match) !== 0;
    };
    var documentPositionPreceding = function(a, b) {
      return compareDocumentPosition(a, b, Node_node().DOCUMENT_POSITION_PRECEDING);
    };
    var documentPositionContainedBy = function(a, b) {
      return compareDocumentPosition(a, b, Node_node().DOCUMENT_POSITION_CONTAINED_BY);
    };
    var Node = {
      documentPositionPreceding: documentPositionPreceding,
      documentPositionContainedBy: documentPositionContainedBy
    };
    var firstMatch = function(regexes, s) {
      for (var i = 0; i < regexes.length; i++) {
        var x = regexes[i];
        if (x.test(s)) return x;
      }
      return undefined;
    };
    var Version_find = function(regexes, agent) {
      var r = firstMatch(regexes, agent);
      if (!r) return {
        major: 0,
        minor: 0
      };
      var group = function(i) {
        return Number(agent.replace(r, "$" + i));
      };
      return Version_nu(group(1), group(2));
    };
    var detect = function(versionRegexes, agent) {
      var cleanedAgent = String(agent).toLowerCase();
      if (versionRegexes.length === 0) return unknown();
      return Version_find(versionRegexes, cleanedAgent);
    };
    var unknown = function() {
      return Version_nu(0, 0);
    };
    var Version_nu = function(major, minor) {
      return {
        major: major,
        minor: minor
      };
    };
    var Version = {
      nu: Version_nu,
      detect: detect,
      unknown: unknown
    };
    var edge = "Edge";
    var chrome = "Chrome";
    var ie = "IE";
    var opera = "Opera";
    var firefox = "Firefox";
    var safari = "Safari";
    var isBrowser = function(name, current) {
      return function() {
        return current === name;
      };
    };
    var Browser_unknown = function() {
      return Browser_nu({
        current: undefined,
        version: Version.unknown()
      });
    };
    var Browser_nu = function(info) {
      var current = info.current;
      var version = info.version;
      return {
        current: current,
        version: version,
        isEdge: isBrowser(edge, current),
        isChrome: isBrowser(chrome, current),
        isIE: isBrowser(ie, current),
        isOpera: isBrowser(opera, current),
        isFirefox: isBrowser(firefox, current),
        isSafari: isBrowser(safari, current),
      };
    };
    var Browser = {
      unknown: Browser_unknown,
      nu: Browser_nu,
      edge: constant(edge),
      chrome: constant(chrome),
      ie: constant(ie),
      opera: constant(opera),
      firefox: constant(firefox),
      safari: constant(safari)
    };
    var windows = "Windows";
    var ios = "iOS";
    var android = "Android";
    var linux = "Linux";
    var osx = "OSX";
    var solaris = "Solaris";
    var freebsd = "FreeBSD";
    var isOS = function(name, current) {
      return function() {
        return current === name;
      };
    };
    var OperatingSystem_unknown = function() {
      return OperatingSystem_nu({
        current: undefined,
        version: Version.unknown()
      });
    };
    var OperatingSystem_nu = function(info) {
      var current = info.current;
      var version = info.version;
      return {
        current: current,
        version: version,
        isWindows: isOS(windows, current),
        isiOS: isOS(ios, current),
        isAndroid: isOS(android, current),
        isOSX: isOS(osx, current),
        isLinux: isOS(linux, current),
        isSolaris: isOS(solaris, current),
        isFreeBSD: isOS(freebsd, current),
      };
    };
    var OperatingSystem = {
      unknown: OperatingSystem_unknown,
      nu: OperatingSystem_nu,
      windows: constant(windows),
      ios: constant(ios),
      android: constant(android),
      linux: constant(linux),
      osx: constant(osx),
      solaris: constant(solaris),
      freebsd: constant(freebsd),
    };
    var DeviceType = function(os, browser, userAgent) {
      var isiPad = os.isiOS() && /ipad/i.test(userAgent) === true;
      var isiPhone = os.isiOS() && !isiPad;
      var isAndroid3 = os.isAndroid() && os.version.major === 3;
      var isAndroid4 = os.isAndroid() && os.version.major === 4;
      var isTablet = isiPad || isAndroid3 || (isAndroid4 && /mobile/i.test(userAgent) === true);
      var isTouch = os.isiOS() || os.isAndroid();
      var isPhone = isTouch && !isTablet;
      var iOSwebview = browser.isSafari() && os.isiOS() && /safari/i.test(userAgent) === false;
      return {
        isiPad: constant(isiPad),
        isiPhone: constant(isiPhone),
        isTablet: constant(isTablet),
        isPhone: constant(isPhone),
        isTouch: constant(isTouch),
        isAndroid: os.isAndroid,
        isiOS: os.isiOS,
        isWebView: constant(iOSwebview)
      };
    };
    var UaString_detect = function(candidates, userAgent) {
      var agent = String(userAgent).toLowerCase();
      return Arr_find(candidates, function(candidate) {
        return candidate.search(agent);
      });
    };
    var detectBrowser = function(browsers, userAgent) {
      return UaString_detect(browsers, userAgent).map(function(browser) {
        var version = Version.detect(browser.versionRegexes, userAgent);
        return {
          current: browser.name,
          version: version
        };
      });
    };
    var detectOs = function(oses, userAgent) {
      return UaString_detect(oses, userAgent).map(function(os) {
        var version = Version.detect(os.versionRegexes, userAgent);
        return {
          current: os.name,
          version: version
        };
      });
    };
    var UaString = {
      detectBrowser: detectBrowser,
      detectOs: detectOs
    };
    var normalVersionRegex = /.*?version\/\ ?([0-9]+)\.([0-9]+).*/;
    var checkContains = function(target) {
      return function(uastring) {
        return Strings_contains(uastring, target);
      };
    };
    var PlatformInfo_browsers = [{
        name: "Edge",
        versionRegexes: [/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],
        search: function(uastring) {
          var monstrosity = Strings_contains(uastring, "edge/") && Strings_contains(uastring, "chrome") && Strings_contains(uastring, "safari") && Strings_contains(uastring, "applewebkit");
          return monstrosity;
        },
      },
      {
        name: "Chrome",
        versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/, normalVersionRegex],
        search: function(uastring) {
          return Strings_contains(uastring, "chrome") && !Strings_contains(uastring, "chromeframe");
        },
      },
      {
        name: "IE",
        versionRegexes: [/.*?msie\ ?([0-9]+)\.([0-9]+).*/, /.*?rv:([0-9]+)\.([0-9]+).*/],
        search: function(uastring) {
          return Strings_contains(uastring, "msie") || Strings_contains(uastring, "trident");
        },
      },
      {
        name: "Opera",
        versionRegexes: [normalVersionRegex, /.*?opera\/([0-9]+)\.([0-9]+).*/],
        search: checkContains("opera")
      },
      {
        name: "Firefox",
        versionRegexes: [/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],
        search: checkContains("firefox")
      },
      {
        name: "Safari",
        versionRegexes: [normalVersionRegex, /.*?cpu os ([0-9]+)_([0-9]+).*/],
        search: function(uastring) {
          return (Strings_contains(uastring, "safari") || Strings_contains(uastring, "mobile/")) && Strings_contains(uastring, "applewebkit");
        },
      },
    ];
    var PlatformInfo_oses = [{
        name: "Windows",
        search: checkContains("win"),
        versionRegexes: [/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]
      },
      {
        name: "iOS",
        search: function(uastring) {
          return Strings_contains(uastring, "iphone") || Strings_contains(uastring, "ipad");
        },
        versionRegexes: [/.*?version\/\ ?([0-9]+)\.([0-9]+).*/, /.*cpu os ([0-9]+)_([0-9]+).*/, /.*cpu iphone os ([0-9]+)_([0-9]+).*/],
      },
      {
        name: "Android",
        search: checkContains("android"),
        versionRegexes: [/.*?android\ ?([0-9]+)\.([0-9]+).*/]
      },
      {
        name: "OSX",
        search: checkContains("os x"),
        versionRegexes: [/.*?os\ x\ ?([0-9]+)_([0-9]+).*/]
      },
      {
        name: "Linux",
        search: checkContains("linux"),
        versionRegexes: []
      },
      {
        name: "Solaris",
        search: checkContains("sunos"),
        versionRegexes: []
      },
      {
        name: "FreeBSD",
        search: checkContains("freebsd"),
        versionRegexes: []
      },
    ];
    var PlatformInfo = {
      browsers: constant(PlatformInfo_browsers),
      oses: constant(PlatformInfo_oses)
    };
    var PlatformDetection_detect = function(userAgent) {
      var browsers = PlatformInfo.browsers();
      var oses = PlatformInfo.oses();
      var browser = UaString.detectBrowser(browsers, userAgent).fold(Browser.unknown, Browser.nu);
      var os = UaString.detectOs(oses, userAgent).fold(OperatingSystem.unknown, OperatingSystem.nu);
      var deviceType = DeviceType(os, browser, userAgent);
      return {
        browser: browser,
        os: os,
        deviceType: deviceType
      };
    };
    var PlatformDetection = {
      detect: PlatformDetection_detect
    };
    var api_PlatformDetection_detect = cached(function() {
      var userAgent = navigator$1.userAgent;
      return PlatformDetection.detect(userAgent);
    });
    var api_PlatformDetection = {
      detect: api_PlatformDetection_detect
    };
    var Selectors_ELEMENT = ELEMENT;
    var Selectors_DOCUMENT = DOCUMENT;
    var Selectors_is = function(element, selector) {
      var elem = element.dom();
      if (elem.nodeType !== Selectors_ELEMENT) {
        return false;
      } else if (elem.matches !== undefined) {
        return elem.matches(selector);
      } else if (elem.msMatchesSelector !== undefined) {
        return elem.msMatchesSelector(selector);
      } else if (elem.webkitMatchesSelector !== undefined) {
        return elem.webkitMatchesSelector(selector);
      } else if (elem.mozMatchesSelector !== undefined) {
        return elem.mozMatchesSelector(selector);
      } else {
        throw new Error("Browser lacks native selectors");
      }
    };
    var bypassSelector = function(dom) {
      return (dom.nodeType !== Selectors_ELEMENT && dom.nodeType !== Selectors_DOCUMENT) || dom.childElementCount === 0;
    };
    var Selectors_all = function(selector, scope) {
      var base = scope === undefined ? document$1 : scope.dom();
      return bypassSelector(base) ? [] : Arr_map(base.querySelectorAll(selector), node_Element.fromDom);
    };
    var one = function(selector, scope) {
      var base = scope === undefined ? document$1 : scope.dom();
      return bypassSelector(base) ? Option.none() : Option.from(base.querySelector(selector)).map(node_Element.fromDom);
    };
    var Compare_eq = function(e1, e2) {
      return e1.dom() === e2.dom();
    };
    var isEqualNode = function(e1, e2) {
      return e1.dom().isEqualNode(e2.dom());
    };
    var member = function(element, elements) {
      return Arr_exists(elements, curry(Compare_eq, element));
    };
    var regularContains = function(e1, e2) {
      var d1 = e1.dom();
      var d2 = e2.dom();
      return d1 === d2 ? false : d1.contains(d2);
    };
    var ieContains = function(e1, e2) {
      return Node.documentPositionContainedBy(e1.dom(), e2.dom());
    };
    var Compare_browser = api_PlatformDetection.detect().browser;
    var Compare_contains = Compare_browser.isIE() ? ieContains : regularContains;
    var Compare_is = Selectors_is;
    var Traverse_owner = function(element) {
      return node_Element.fromDom(element.dom().ownerDocument);
    };
    var documentElement = function(element) {
      return node_Element.fromDom(element.dom().ownerDocument.documentElement);
    };
    var defaultView = function(element) {
      var el = element.dom();
      var defView = el.ownerDocument.defaultView;
      return node_Element.fromDom(defView);
    };
    var Traverse_parent = function(element) {
      var dom = element.dom();
      return Option.from(dom.parentNode).map(node_Element.fromDom);
    };
    var Traverse_findIndex = function(element) {
      return Traverse_parent(element).bind(function(p) {
        var kin = Traverse_children(p);
        return findIndex(kin, function(elem) {
          return Compare_eq(element, elem);
        });
      });
    };
    var parents = function(element, isRoot) {
      var stop = isFunction(isRoot) ? isRoot : constant(false);
      var dom = element.dom();
      var ret = [];
      while (dom.parentNode !== null && dom.parentNode !== undefined) {
        var rawParent = dom.parentNode;
        var p = node_Element.fromDom(rawParent);
        ret.push(p);
        if (stop(p) === true) {
          break;
        } else {
          dom = rawParent;
        }
      }
      return ret;
    };
    var siblings = function(element) {
      var filterSelf = function(elements) {
        return Arr_filter(elements, function(x) {
          return !Compare_eq(element, x);
        });
      };
      return Traverse_parent(element).map(Traverse_children).map(filterSelf).getOr([]);
    };
    var offsetParent = function(element) {
      var dom = element.dom();
      return Option.from(dom.offsetParent).map(node_Element.fromDom);
    };
    var prevSibling = function(element) {
      var dom = element.dom();
      return Option.from(dom.previousSibling).map(node_Element.fromDom);
    };
    var nextSibling = function(element) {
      var dom = element.dom();
      return Option.from(dom.nextSibling).map(node_Element.fromDom);
    };
    var prevSiblings = function(element) {
      return reverse(Recurse.toArray(element, prevSibling));
    };
    var nextSiblings = function(element) {
      return Recurse.toArray(element, nextSibling);
    };
    var Traverse_children = function(element) {
      var dom = element.dom();
      return Arr_map(dom.childNodes, node_Element.fromDom);
    };
    var Traverse_child = function(element, index) {
      var cs = element.dom().childNodes;
      return Option.from(cs[index]).map(node_Element.fromDom);
    };
    var Traverse_firstChild = function(element) {
      return Traverse_child(element, 0);
    };
    var lastChild = function(element) {
      return Traverse_child(element, element.dom().childNodes.length - 1);
    };
    var childNodesCount = function(element) {
      return element.dom().childNodes.length;
    };
    var hasChildNodes = function(element) {
      return element.dom().hasChildNodes();
    };
    var spot = Immutable("element", "offset");
    var leaf = function(element, offset) {
      var cs = Traverse_children(element);
      return cs.length > 0 && offset < cs.length ? spot(cs[offset], 0) : spot(element, offset);
    };
    var Insert_before = function(marker, element) {
      var parent = Traverse_parent(marker);
      parent.each(function(v) {
        v.dom().insertBefore(element.dom(), marker.dom());
      });
    };
    var Insert_after = function(marker, element) {
      var sibling = nextSibling(marker);
      sibling.fold(
        function() {
          var parent = Traverse_parent(marker);
          parent.each(function(v) {
            append(v, element);
          });
        },
        function(v) {
          Insert_before(v, element);
        }
      );
    };
    var prepend = function(parent, element) {
      var firstChild = Traverse_firstChild(parent);
      firstChild.fold(
        function() {
          append(parent, element);
        },
        function(v) {
          parent.dom().insertBefore(element.dom(), v.dom());
        }
      );
    };
    var append = function(parent, element) {
      parent.dom().appendChild(element.dom());
    };
    var appendAt = function(parent, element, index) {
      Traverse_child(parent, index).fold(
        function() {
          append(parent, element);
        },
        function(v) {
          Insert_before(v, element);
        }
      );
    };
    var wrap = function(element, wrapper) {
      Insert_before(element, wrapper);
      append(wrapper, element);
    };
    var InsertAll_before = function(marker, elements) {
      Arr_each(elements, function(x) {
        Insert_before(marker, x);
      });
    };
    var InsertAll_after = function(marker, elements) {
      Arr_each(elements, function(x, i) {
        var e = i === 0 ? marker : elements[i - 1];
        Insert_after(e, x);
      });
    };
    var InsertAll_prepend = function(parent, elements) {
      Arr_each(elements.slice().reverse(), function(x) {
        prepend(parent, x);
      });
    };
    var InsertAll_append = function(parent, elements) {
      Arr_each(elements, function(x) {
        append(parent, x);
      });
    };
    var makeTable = function() {
      return node_Element.fromTag("table");
    };
    var tableHead = function() {
      return node_Element.fromTag("thead");
    };
    var tableBody = function() {
      return node_Element.fromTag("tbody");
    };
    var tableRow = function() {
      return node_Element.fromTag("tr");
    };
    var tableHeaderCell = function() {
      return node_Element.fromTag("th");
    };
    var tableCell = function() {
      return node_Element.fromTag("td");
    };
    var renderRow = function(tr, columns, isTH) {
      for (var j = 0; j < columns; j++) {
        var tc = isTH ? tableHeaderCell() : tableCell();
        Css_set(tc, "width", 100 / columns + "%");
        append(tr, tc);
      }
    };
    var render = function(rawRows, columns) {
      var rows = Math.max(2, rawRows);
      var table = makeTable();
      var thead = tableHead();
      append(table, thead);
      var tbody = tableBody();
      append(table, tbody);
      var thr = tableRow();
      append(thead, thr);
      renderRow(thr, columns, true);
      var trs = [];
      for (var i = 1; i < rows; i++) {
        var tr = tableRow();
        renderRow(tr, columns, false);
        trs.push(tr);
      }
      InsertAll_append(tbody, trs);
      return table;
    };
    var Elements_fromHtml = function(html, scope) {
      var doc = scope || document$1;
      var div = doc.createElement("div");
      div.innerHTML = html;
      return Traverse_children(node_Element.fromDom(div));
    };
    var fromTags = function(tags, scope) {
      return Arr_map(tags, function(x) {
        return node_Element.fromTag(x, scope);
      });
    };
    var Elements_fromText = function(texts, scope) {
      return Arr_map(texts, function(x) {
        return node_Element.fromText(x, scope);
      });
    };
    var Elements_fromDom = function(nodes) {
      return Arr_map(nodes, node_Element.fromDom);
    };
    var empty = function(element) {
      element.dom().textContent = "";
      Arr_each(Traverse_children(element), function(rogue) {
        Remove_remove(rogue);
      });
    };
    var Remove_remove = function(element) {
      var dom = element.dom();
      if (dom.parentNode !== null) {
        dom.parentNode.removeChild(dom);
      }
    };
    var unwrap = function(wrapper) {
      var children = Traverse_children(wrapper);
      if (children.length > 0) {
        InsertAll_before(wrapper, children);
      }
      Remove_remove(wrapper);
    };
    var Html_get = function(element) {
      return element.dom().innerHTML;
    };
    var Html_set = function(element, content) {
      var owner = Traverse_owner(element);
      var docDom = owner.dom();
      var fragment = node_Element.fromDom(docDom.createDocumentFragment());
      var contentElements = Elements_fromHtml(content, docDom);
      InsertAll_append(fragment, contentElements);
      empty(element);
      append(element, fragment);
    };
    var Html_getOuter = function(element) {
      var container = node_Element.fromTag("div");
      var clone = node_Element.fromDom(element.dom().cloneNode(true));
      append(container, clone);
      return Html_get(container);
    };
    var addMenuItems = function(editor) {
      var tableRender = function(rows, columns) {
        var table = render(rows, columns);
        var html = Html_getOuter(table);
        editor.insertContent(html);
      };
      editor.ui.registry.addNestedMenuItem("inserttable", {
        text: "Table",
        icon: "table",
        getSubmenuItems: function() {
          return [{
            type: "fancymenuitem",
            fancytype: "inserttable",
            onAction: function(data) {
              tableRender(data.numRows, data.numColumns);
            },
          }, ];
        },
      });
    };
    var Result_value = function(o) {
      var is = function(v) {
        return o === v;
      };
      var or = function(opt) {
        return Result_value(o);
      };
      var orThunk = function(f) {
        return Result_value(o);
      };
      var map = function(f) {
        return Result_value(f(o));
      };
      var mapError = function(f) {
        return Result_value(o);
      };
      var each = function(f) {
        f(o);
      };
      var bind = function(f) {
        return f(o);
      };
      var fold = function(_, onValue) {
        return onValue(o);
      };
      var exists = function(f) {
        return f(o);
      };
      var forall = function(f) {
        return f(o);
      };
      var toOption = function() {
        return Option.some(o);
      };
      return {
        is: is,
        isValue: always,
        isError: never,
        getOr: constant(o),
        getOrThunk: constant(o),
        getOrDie: constant(o),
        or: or,
        orThunk: orThunk,
        fold: fold,
        map: map,
        mapError: mapError,
        each: each,
        bind: bind,
        exists: exists,
        forall: forall,
        toOption: toOption,
      };
    };
    var error = function(message) {
      var getOrThunk = function(f) {
        return f();
      };
      var getOrDie = function() {
        return die(String(message))();
      };
      var or = function(opt) {
        return opt;
      };
      var orThunk = function(f) {
        return f();
      };
      var map = function(f) {
        return error(message);
      };
      var mapError = function(f) {
        return error(f(message));
      };
      var bind = function(f) {
        return error(message);
      };
      var fold = function(onError, _) {
        return onError(message);
      };
      return {
        is: never,
        isValue: never,
        isError: always,
        getOr: identity,
        getOrThunk: getOrThunk,
        getOrDie: getOrDie,
        or: or,
        orThunk: orThunk,
        fold: fold,
        map: map,
        mapError: mapError,
        each: Fun_noop,
        bind: bind,
        exists: never,
        forall: always,
        toOption: Option.none,
      };
    };
    var Result = {
      value: Result_value,
      error: error
    };
    var Adt_generate = function(cases) {
      if (!isArray(cases)) {
        throw new Error("cases must be an array");
      }
      if (cases.length === 0) {
        throw new Error("there must be at least one case");
      }
      var constructors = [];
      var adt = {};
      Arr_each(cases, function(acase, count) {
        var keys = Obj_keys(acase);
        if (keys.length !== 1) {
          throw new Error("one and only one name per case");
        }
        var key = keys[0];
        var value = acase[key];
        if (adt[key] !== undefined) {
          throw new Error("duplicate key detected:" + key);
        } else if (key === "cata") {
          throw new Error("cannot have a case named cata (sorry)");
        } else if (!isArray(value)) {
          throw new Error("case arguments must be an array");
        }
        constructors.push(key);
        adt[key] = function() {
          var argLength = arguments.length;
          if (argLength !== value.length) {
            throw new Error("Wrong number of arguments to case " + key + ". Expected " + value.length + " (" + value + "), got " + argLength);
          }
          var args = new Array(argLength);
          for (var i = 0; i < args.length; i++) args[i] = arguments[i];
          var match = function(branches) {
            var branchKeys = Obj_keys(branches);
            if (constructors.length !== branchKeys.length) {
              throw new Error("Wrong number of arguments to match. Expected: " + constructors.join(",") + "\nActual: " + branchKeys.join(","));
            }
            var allReqd = Arr_forall(constructors, function(reqKey) {
              return contains(branchKeys, reqKey);
            });
            if (!allReqd) throw new Error("Not all branches were specified when using match. Specified: " + branchKeys.join(", ") + "\nRequired: " + constructors.join(", "));
            return branches[key].apply(null, args);
          };
          return {
            fold: function() {
              if (arguments.length !== cases.length) {
                throw new Error("Wrong number of arguments to fold. Expected " + cases.length + ", got " + arguments.length);
              }
              var target = arguments[count];
              return target.apply(null, args);
            },
            match: match,
            log: function(label) {
              console$1.log(label, {
                constructors: constructors,
                constructor: key,
                params: args
              });
            },
          };
        };
      });
      return adt;
    };
    var Adt = {
      generate: Adt_generate
    };
    var Merger_hasOwnProperty = Object.prototype.hasOwnProperty;
    var shallow = function(old, nu) {
      return nu;
    };
    var deep = function(old, nu) {
      var bothObjects = isObject(old) && isObject(nu);
      return bothObjects ? deepMerge(old, nu) : nu;
    };
    var baseMerge = function(merger) {
      return function() {
        var objects = new Array(arguments.length);
        for (var i = 0; i < objects.length; i++) objects[i] = arguments[i];
        if (objects.length === 0) throw new Error("Can't merge zero objects");
        var ret = {};
        for (var j = 0; j < objects.length; j++) {
          var curObject = objects[j];
          for (var key in curObject)
            if (Merger_hasOwnProperty.call(curObject, key)) {
              ret[key] = merger(ret[key], curObject[key]);
            }
        }
        return ret;
      };
    };
    var deepMerge = baseMerge(deep);
    var merge = baseMerge(shallow);
    var FieldPresence_adt = Adt.generate([{
      strict: []
    }, {
      defaultedThunk: ["fallbackThunk"]
    }, {
      asOption: []
    }, {
      asDefaultedOptionThunk: ["fallbackThunk"]
    }, {
      mergeWithThunk: ["baseThunk"]
    }]);
    var defaulted = function(fallback) {
      return FieldPresence_adt.defaultedThunk(constant(fallback));
    };
    var asDefaultedOption = function(fallback) {
      return FieldPresence_adt.asDefaultedOptionThunk(constant(fallback));
    };
    var mergeWith = function(base) {
      return FieldPresence_adt.mergeWithThunk(constant(base));
    };
    var strict = FieldPresence_adt.strict;
    var asOption = FieldPresence_adt.asOption;
    var defaultedThunk = FieldPresence_adt.defaultedThunk;
    var asDefaultedOptionThunk = FieldPresence_adt.asDefaultedOptionThunk;
    var mergeWithThunk = FieldPresence_adt.mergeWithThunk;
    var narrow = function(obj, fields) {
      var r = {};
      Arr_each(fields, function(field) {
        if (obj[field] !== undefined && has(obj, field)) {
          r[field] = obj[field];
        }
      });
      return r;
    };
    var indexOnKey = function(array, key) {
      var obj = {};
      Arr_each(array, function(a) {
        var keyValue = a[key];
        obj[keyValue] = a;
      });
      return obj;
    };
    var exclude = function(obj, fields) {
      var r = {};
      Obj_each(obj, function(v, k) {
        if (!contains(fields, k)) {
          r[k] = v;
        }
      });
      return r;
    };
    var readOpt = function(key) {
      return function(obj) {
        return has(obj, key) ? Option.from(obj[key]) : Option.none();
      };
    };
    var readOr = function(key, fallback) {
      return function(obj) {
        return has(obj, key) ? obj[key] : fallback;
      };
    };
    var readOptFrom = function(obj, key) {
      return readOpt(key)(obj);
    };
    var hasKey = function(obj, key) {
      return has(obj, key) && obj[key] !== undefined && obj[key] !== null;
    };
    var ObjWriter_wrap = function(key, value) {
      var r = {};
      r[key] = value;
      return r;
    };
    var wrapAll = function(keyvalues) {
      var r = {};
      Arr_each(keyvalues, function(kv) {
        r[kv.key] = kv.value;
      });
      return r;
    };
    var comparison = Adt.generate([{
      bothErrors: ["error1", "error2"]
    }, {
      firstError: ["error1", "value2"]
    }, {
      secondError: ["value1", "error2"]
    }, {
      bothValues: ["value1", "value2"]
    }]);
    var Results_partition = function(results) {
      var errors = [];
      var values = [];
      Arr_each(results, function(result) {
        result.fold(
          function(err) {
            errors.push(err);
          },
          function(value) {
            values.push(value);
          }
        );
      });
      return {
        errors: errors,
        values: values
      };
    };
    var compare = function(result1, result2) {
      return result1.fold(
        function(err1) {
          return result2.fold(
            function(err2) {
              return comparison.bothErrors(err1, err2);
            },
            function(val2) {
              return comparison.firstError(err1, val2);
            }
          );
        },
        function(val1) {
          return result2.fold(
            function(err2) {
              return comparison.secondError(val1, err2);
            },
            function(val2) {
              return comparison.bothValues(val1, val2);
            }
          );
        }
      );
    };
    var Objects_narrow = function(obj, fields) {
      return narrow(obj, fields);
    };
    var Objects_exclude = function(obj, fields) {
      return exclude(obj, fields);
    };
    var Objects_readOpt = function(key) {
      return readOpt(key);
    };
    var Objects_readOr = function(key, fallback) {
      return readOr(key, fallback);
    };
    var Objects_readOptFrom = function(obj, key) {
      return readOptFrom(obj, key);
    };
    var Objects_wrap = function(key, value) {
      return ObjWriter_wrap(key, value);
    };
    var Objects_wrapAll = function(keyvalues) {
      return wrapAll(keyvalues);
    };
    var Objects_indexOnKey = function(array, key) {
      return indexOnKey(array, key);
    };
    var mergeValues = function(values, base) {
      return values.length === 0 ? Result.value(base) : Result.value(deepMerge(base, merge.apply(undefined, values)));
    };
    var mergeErrors = function(errors) {
      return compose(Result.error, flatten)(errors);
    };
    var consolidate = function(objs, base) {
      var partitions = Results_partition(objs);
      return partitions.errors.length > 0 ? mergeErrors(partitions.errors) : mergeValues(partitions.values, base);
    };
    var Objects_hasKey = function(obj, key) {
      return hasKey(obj, key);
    };
    var SimpleResultType;
    (function(SimpleResultType) {
      SimpleResultType[(SimpleResultType["Error"] = 0)] = "Error";
      SimpleResultType[(SimpleResultType["Value"] = 1)] = "Value";
    })(SimpleResultType || (SimpleResultType = {}));
    var SimpleResult_fold = function(res, onError, onValue) {
      return res.stype === SimpleResultType.Error ? onError(res.serror) : onValue(res.svalue);
    };
    var SimpleResult_partition = function(results) {
      var values = [];
      var errors = [];
      Arr_each(results, function(obj) {
        SimpleResult_fold(
          obj,
          function(err) {
            return errors.push(err);
          },
          function(val) {
            return values.push(val);
          }
        );
      });
      return {
        values: values,
        errors: errors
      };
    };
    var SimpleResult_mapError = function(res, f) {
      if (res.stype === SimpleResultType.Error) {
        return {
          stype: SimpleResultType.Error,
          serror: f(res.serror)
        };
      } else {
        return res;
      }
    };
    var SimpleResult_map = function(res, f) {
      if (res.stype === SimpleResultType.Value) {
        return {
          stype: SimpleResultType.Value,
          svalue: f(res.svalue)
        };
      } else {
        return res;
      }
    };
    var SimpleResult_bind = function(res, f) {
      if (res.stype === SimpleResultType.Value) {
        return f(res.svalue);
      } else {
        return res;
      }
    };
    var bindError = function(res, f) {
      if (res.stype === SimpleResultType.Error) {
        return f(res.serror);
      } else {
        return res;
      }
    };
    var svalue = function(v) {
      return {
        stype: SimpleResultType.Value,
        svalue: v
      };
    };
    var serror = function(e) {
      return {
        stype: SimpleResultType.Error,
        serror: e
      };
    };
    var toResult = function(res) {
      return SimpleResult_fold(res, Result.error, Result.value);
    };
    var fromResult = function(res) {
      return res.fold(serror, svalue);
    };
    var SimpleResult = {
      fromResult: fromResult,
      toResult: toResult,
      svalue: svalue,
      partition: SimpleResult_partition,
      serror: serror,
      bind: SimpleResult_bind,
      bindError: bindError,
      map: SimpleResult_map,
      mapError: SimpleResult_mapError,
      fold: SimpleResult_fold,
    };
    var ResultCombine_mergeValues = function(values, base) {
      return values.length > 0 ? SimpleResult.svalue(deepMerge(base, merge.apply(undefined, values))) : SimpleResult.svalue(base);
    };
    var ResultCombine_mergeErrors = function(errors) {
      return compose(SimpleResult.serror, flatten)(errors);
    };
    var consolidateObj = function(objects, base) {
      var partition = SimpleResult.partition(objects);
      return partition.errors.length > 0 ? ResultCombine_mergeErrors(partition.errors) : ResultCombine_mergeValues(partition.values, base);
    };
    var consolidateArr = function(objects) {
      var partitions = SimpleResult.partition(objects);
      return partitions.errors.length > 0 ? ResultCombine_mergeErrors(partitions.errors) : SimpleResult.svalue(partitions.values);
    };
    var ResultCombine = {
      consolidateObj: consolidateObj,
      consolidateArr: consolidateArr
    };
    var typeAdt = Adt.generate([{
        setOf: ["validator", "valueType"]
      },
      {
        arrOf: ["valueType"]
      },
      {
        objOf: ["fields"]
      },
      {
        itemOf: ["validator"]
      },
      {
        choiceOf: ["key", "branches"]
      },
      {
        thunk: ["description"]
      },
      {
        func: ["args", "outputSchema"]
      },
    ]);
    var fieldAdt = Adt.generate([{
      field: ["name", "presence", "type"]
    }, {
      state: ["name"]
    }]);
    var json = function() {
      return util_Global.getOrDie("JSON");
    };
    var parse = function(text) {
      return json().parse(text);
    };
    var stringify = function(obj, replacer, space) {
      return json().stringify(obj, replacer, space);
    };
    var JSON = {
      parse: parse,
      stringify: stringify
    };
    var formatObj = function(input) {
      return isObject(input) && Obj_keys(input).length > 100 ? " removed due to size" : JSON.stringify(input, null, 2);
    };
    var formatErrors = function(errors) {
      var es =
        errors.length > 10 ?
        errors.slice(0, 10).concat([{
          path: [],
          getErrorInfo: function() {
            return "... (only showing first ten failures)";
          },
        }, ]) :
        errors;
      return Arr_map(es, function(e) {
        return "Failed path: (" + e.path.join(" > ") + ")\n" + e.getErrorInfo();
      });
    };
    var SchemaError_nu = function(path, getErrorInfo) {
      return SimpleResult.serror([{
        path: path,
        getErrorInfo: getErrorInfo
      }]);
    };
    var missingStrict = function(path, key, obj) {
      return SchemaError_nu(path, function() {
        return 'Could not find valid *strict* value for "' + key + '" in ' + formatObj(obj);
      });
    };
    var missingKey = function(path, key) {
      return SchemaError_nu(path, function() {
        return 'Choice schema did not contain choice key: "' + key + '"';
      });
    };
    var missingBranch = function(path, branches, branch) {
      return SchemaError_nu(path, function() {
        return 'The chosen schema: "' + branch + '" did not exist in branches: ' + formatObj(branches);
      });
    };
    var unsupportedFields = function(path, unsupported) {
      return SchemaError_nu(path, function() {
        return "There are unsupported fields: [" + unsupported.join(", ") + "] specified";
      });
    };
    var custom = function(path, err) {
      return SchemaError_nu(path, function() {
        return err;
      });
    };
    var SchemaError_toString = function(error) {
      return "Failed path: (" + error.path.join(" > ") + ")\n" + error.getErrorInfo();
    };
    var ValueProcessor_adt = Adt.generate([{
      field: ["key", "okey", "presence", "prop"]
    }, {
      state: ["okey", "instantiator"]
    }]);
    var ValueProcessor_output = function(okey, value) {
      return ValueProcessor_adt.state(okey, constant(value));
    };
    var snapshot = function(okey) {
      return ValueProcessor_adt.state(okey, identity);
    };
    var strictAccess = function(path, obj, key) {
      return readOptFrom(obj, key).fold(function() {
        return missingStrict(path, key, obj);
      }, SimpleResult.svalue);
    };
    var fallbackAccess = function(obj, key, fallbackThunk) {
      var v = readOptFrom(obj, key).fold(function() {
        return fallbackThunk(obj);
      }, identity);
      return SimpleResult.svalue(v);
    };
    var optionAccess = function(obj, key) {
      return SimpleResult.svalue(readOptFrom(obj, key));
    };
    var optionDefaultedAccess = function(obj, key, fallback) {
      var opt = readOptFrom(obj, key).map(function(val) {
        return val === true ? fallback(obj) : val;
      });
      return SimpleResult.svalue(opt);
    };
    var cExtractOne = function(path, obj, field, strength) {
      return field.fold(
        function(key, okey, presence, prop) {
          var bundle = function(av) {
            var result = prop.extract(path.concat([key]), strength, av);
            return SimpleResult.map(result, function(res) {
              return ObjWriter_wrap(okey, strength(res));
            });
          };
          var bundleAsOption = function(optValue) {
            return optValue.fold(
              function() {
                var outcome = ObjWriter_wrap(okey, strength(Option.none()));
                return SimpleResult.svalue(outcome);
              },
              function(ov) {
                var result = prop.extract(path.concat([key]), strength, ov);
                return SimpleResult.map(result, function(res) {
                  return ObjWriter_wrap(okey, strength(Option.some(res)));
                });
              }
            );
          };
          return (function() {
            return presence.fold(
              function() {
                return SimpleResult.bind(strictAccess(path, obj, key), bundle);
              },
              function(fallbackThunk) {
                return SimpleResult.bind(fallbackAccess(obj, key, fallbackThunk), bundle);
              },
              function() {
                return SimpleResult.bind(optionAccess(obj, key), bundleAsOption);
              },
              function(fallbackThunk) {
                return SimpleResult.bind(optionDefaultedAccess(obj, key, fallbackThunk), bundleAsOption);
              },
              function(baseThunk) {
                var base = baseThunk(obj);
                var result = SimpleResult.map(fallbackAccess(obj, key, constant({})), function(v) {
                  return deepMerge(base, v);
                });
                return SimpleResult.bind(result, bundle);
              }
            );
          })();
        },
        function(okey, instantiator) {
          var state = instantiator(obj);
          return SimpleResult.svalue(ObjWriter_wrap(okey, strength(state)));
        }
      );
    };
    var cExtract = function(path, obj, fields, strength) {
      var results = Arr_map(fields, function(field) {
        return cExtractOne(path, obj, field, strength);
      });
      return ResultCombine.consolidateObj(results, {});
    };
    var ValueProcessor_value = function(validator) {
      var extract = function(path, strength, val) {
        return SimpleResult.bindError(validator(val, strength), function(err) {
          return custom(path, err);
        });
      };
      var toString = function() {
        return "val";
      };
      var toDsl = function() {
        return typeAdt.itemOf(validator);
      };
      return {
        extract: extract,
        toString: toString,
        toDsl: toDsl
      };
    };
    var getSetKeys = function(obj) {
      var keys = Obj_keys(obj);
      return Arr_filter(keys, function(k) {
        return Objects_hasKey(obj, k);
      });
    };
    var objOfOnly = function(fields) {
      var delegate = objOf(fields);
      var fieldNames = foldr(
        fields,
        function(acc, f) {
          return f.fold(function(key) {
            return deepMerge(acc, Objects_wrap(key, true));
          }, constant(acc));
        }, {}
      );
      var extract = function(path, strength, o) {
        var keys = isBoolean(o) ? [] : getSetKeys(o);
        var extra = Arr_filter(keys, function(k) {
          return !Objects_hasKey(fieldNames, k);
        });
        return extra.length === 0 ? delegate.extract(path, strength, o) : unsupportedFields(path, extra);
      };
      return {
        extract: extract,
        toString: delegate.toString,
        toDsl: delegate.toDsl
      };
    };
    var objOf = function(fields) {
      var extract = function(path, strength, o) {
        return cExtract(path, o, fields, strength);
      };
      var toString = function() {
        var fieldStrings = Arr_map(fields, function(field) {
          return field.fold(
            function(key, okey, presence, prop) {
              return key + " -> " + prop.toString();
            },
            function(okey, instantiator) {
              return "state(" + okey + ")";
            }
          );
        });
        return "obj{\n" + fieldStrings.join("\n") + "}";
      };
      var toDsl = function() {
        return typeAdt.objOf(
          Arr_map(fields, function(f) {
            return f.fold(
              function(key, okey, presence, prop) {
                return fieldAdt.field(key, presence, prop);
              },
              function(okey, instantiator) {
                return fieldAdt.state(okey);
              }
            );
          })
        );
      };
      return {
        extract: extract,
        toString: toString,
        toDsl: toDsl
      };
    };
    var arrOf = function(prop) {
      var extract = function(path, strength, array) {
        var results = Arr_map(array, function(a, i) {
          return prop.extract(path.concat(["[" + i + "]"]), strength, a);
        });
        return ResultCombine.consolidateArr(results);
      };
      var toString = function() {
        return "array(" + prop.toString() + ")";
      };
      var toDsl = function() {
        return typeAdt.arrOf(prop);
      };
      return {
        extract: extract,
        toString: toString,
        toDsl: toDsl
      };
    };
    var setOf = function(validator, prop) {
      var validateKeys = function(path, keys) {
        return arrOf(ValueProcessor_value(validator)).extract(path, identity, keys);
      };
      var extract = function(path, strength, o) {
        var keys = Obj_keys(o);
        var validatedKeys = validateKeys(path, keys);
        return SimpleResult.bind(validatedKeys, function(validKeys) {
          var schema = Arr_map(validKeys, function(vk) {
            return ValueProcessor_adt.field(vk, vk, strict(), prop);
          });
          return objOf(schema).extract(path, strength, o);
        });
      };
      var toString = function() {
        return "setOf(" + prop.toString() + ")";
      };
      var toDsl = function() {
        return typeAdt.setOf(validator, prop);
      };
      return {
        extract: extract,
        toString: toString,
        toDsl: toDsl
      };
    };
    var func = function(args, schema, retriever) {
      var delegate = ValueProcessor_value(function(f, strength) {
        return isFunction(f) ?
          SimpleResult.svalue(function() {
            var gArgs = Array.prototype.slice.call(arguments, 0);
            var allowedArgs = gArgs.slice(0, args.length);
            var o = f.apply(null, allowedArgs);
            return retriever(o, strength);
          }) :
          SimpleResult.serror("Not a function");
      });
      return {
        extract: delegate.extract,
        toString: function() {
          return "function";
        },
        toDsl: function() {
          return typeAdt.func(args, schema);
        },
      };
    };
    var thunk = function(desc, processor) {
      var getP = cached(function() {
        return processor();
      });
      var extract = function(path, strength, val) {
        return getP().extract(path, strength, val);
      };
      var toString = function() {
        return getP().toString();
      };
      var toDsl = function() {
        return typeAdt.thunk(desc);
      };
      return {
        extract: extract,
        toString: toString,
        toDsl: toDsl
      };
    };
    var anyValue = constant(ValueProcessor_value(SimpleResult.svalue));
    var arrOfObj = compose(arrOf, objOf);
    var ValueProcessor_state = ValueProcessor_adt.state;
    var ValueProcessor_field = ValueProcessor_adt.field;
    var chooseFrom = function(path, strength, input, branches, ch) {
      var fields = Objects_readOptFrom(branches, ch);
      return fields.fold(
        function() {
          return missingBranch(path, branches, ch);
        },
        function(fs) {
          return objOf(fs).extract(path.concat(["branch: " + ch]), strength, input);
        }
      );
    };
    var choose = function(key, branches) {
      var extract = function(path, strength, input) {
        var choice = Objects_readOptFrom(input, key);
        return choice.fold(
          function() {
            return missingKey(path, key);
          },
          function(chosen) {
            return chooseFrom(path, strength, input, branches, chosen);
          }
        );
      };
      var toString = function() {
        return "chooseOn(" + key + "). Possible values: " + Obj_keys(branches);
      };
      var toDsl = function() {
        return typeAdt.choiceOf(key, branches);
      };
      return {
        extract: extract,
        toString: toString,
        toDsl: toDsl
      };
    };
    var _anyValue = ValueProcessor_value(SimpleResult.svalue);
    var ValueSchema_arrOfObj = function(objFields) {
      return arrOfObj(objFields);
    };
    var arrOfVal = function() {
      return arrOf(_anyValue);
    };
    var ValueSchema_valueOf = function(validator) {
      return ValueProcessor_value(function(v) {
        return validator(v).fold(SimpleResult.serror, SimpleResult.svalue);
      });
    };
    var ValueSchema_setOf = function(validator, prop) {
      return setOf(function(v) {
        return SimpleResult.fromResult(validator(v));
      }, prop);
    };
    var ValueSchema_extract = function(label, prop, strength, obj) {
      var res = prop.extract([label], strength, obj);
      return SimpleResult.mapError(res, function(errs) {
        return {
          input: obj,
          errors: errs
        };
      });
    };
    var asStruct = function(label, prop, obj) {
      return SimpleResult.toResult(ValueSchema_extract(label, prop, constant, obj));
    };
    var asRaw = function(label, prop, obj) {
      return SimpleResult.toResult(ValueSchema_extract(label, prop, identity, obj));
    };
    var ValueSchema_getOrDie = function(extraction) {
      return extraction.fold(function(errInfo) {
        throw new Error(formatError(errInfo));
      }, identity);
    };
    var asRawOrDie = function(label, prop, obj) {
      return ValueSchema_getOrDie(asRaw(label, prop, obj));
    };
    var asStructOrDie = function(label, prop, obj) {
      return ValueSchema_getOrDie(asStruct(label, prop, obj));
    };
    var formatError = function(errInfo) {
      return "Errors: \n" + formatErrors(errInfo.errors) + "\n\nInput object: " + formatObj(errInfo.input);
    };
    var ValueSchema_choose = function(key, branches) {
      return choose(key, branches);
    };
    var thunkOf = function(desc, schema) {
      return thunk(desc, schema);
    };
    var funcOrDie = function(args, prop) {
      var retriever = function(output, strength) {
        return ValueSchema_getOrDie(SimpleResult.toResult(ValueSchema_extract("()", prop, strength, output)));
      };
      return func(args, prop, retriever);
    };
    var ValueSchema_anyValue = constant(_anyValue);
    var typedValue = function(validator, expectedType) {
      return ValueProcessor_value(function(a) {
        var actualType = typeof a;
        return validator(a) ? SimpleResult.svalue(a) : SimpleResult.serror("Expected type: " + expectedType + " but got: " + actualType);
      });
    };
    var number = typedValue(isNumber, "number");
    var string = typedValue(isString, "string");
    var ValueSchema_boolean = typedValue(isBoolean, "boolean");
    var functionProcessor = typedValue(isFunction, "function");
    var validateEnum = function(values) {
      return ValueSchema_valueOf(function(value) {
        return contains(values, value) ? Result.value(value) : Result.error('Unsupported value: "' + value + '", choose one of "' + values.join(", ") + '".');
      });
    };
    var FieldSchema_strict = function(key) {
      return ValueProcessor_field(key, key, strict(), anyValue());
    };
    var strictOf = function(key, schema) {
      return ValueProcessor_field(key, key, strict(), schema);
    };
    var strictNumber = function(key) {
      return strictOf(key, number);
    };
    var strictString = function(key) {
      return strictOf(key, string);
    };
    var strictStringEnum = function(key, values) {
      return ValueProcessor_field(key, key, strict(), validateEnum(values));
    };
    var strictBoolean = function(key) {
      return strictOf(key, ValueSchema_boolean);
    };
    var strictFunction = function(key) {
      return strictOf(key, functionProcessor);
    };
    var forbid = function(key, message) {
      return ValueProcessor_field(
        key,
        key,
        asOption(),
        ValueProcessor_value(function(v) {
          return SimpleResult.serror("The field: " + key + " is forbidden. " + message);
        })
      );
    };
    var strictObjOf = function(key, objSchema) {
      return ValueProcessor_field(key, key, strict(), objOf(objSchema));
    };
    var strictArrayOfObj = function(key, objFields) {
      return ValueProcessor_field(key, key, strict(), arrOfObj(objFields));
    };
    var strictArrayOf = function(key, schema) {
      return ValueProcessor_field(key, key, strict(), arrOf(schema));
    };
    var FieldSchema_option = function(key) {
      return ValueProcessor_field(key, key, asOption(), anyValue());
    };
    var optionOf = function(key, schema) {
      return ValueProcessor_field(key, key, asOption(), schema);
    };
    var optionNumber = function(key) {
      return optionOf(key, number);
    };
    var optionString = function(key) {
      return optionOf(key, string);
    };
    var optionStringEnum = function(key, values) {
      return optionOf(key, validateEnum(values));
    };
    var optionBoolean = function(key) {
      return optionOf(key, ValueSchema_boolean);
    };
    var optionFunction = function(key) {
      return optionOf(key, functionProcessor);
    };
    var optionObjOf = function(key, objSchema) {
      return ValueProcessor_field(key, key, asOption(), objOf(objSchema));
    };
    var optionObjOfOnly = function(key, objSchema) {
      return ValueProcessor_field(key, key, asOption(), objOfOnly(objSchema));
    };
    var FieldSchema_defaulted = function(key, fallback) {
      return ValueProcessor_field(key, key, defaulted(fallback), anyValue());
    };
    var defaultedOf = function(key, fallback, schema) {
      return ValueProcessor_field(key, key, defaulted(fallback), schema);
    };
    var defaultedNumber = function(key, fallback) {
      return defaultedOf(key, fallback, number);
    };
    var defaultedString = function(key, fallback) {
      return defaultedOf(key, fallback, string);
    };
    var defaultedStringEnum = function(key, fallback, values) {
      return defaultedOf(key, fallback, validateEnum(values));
    };
    var defaultedBoolean = function(key, fallback) {
      return defaultedOf(key, fallback, ValueSchema_boolean);
    };
    var defaultedFunction = function(key, fallback) {
      return defaultedOf(key, fallback, functionProcessor);
    };
    var defaultedArrayOf = function(key, fallback, schema) {
      return ValueProcessor_field(key, key, defaulted(fallback), arrOf(schema));
    };
    var defaultedObjOf = function(key, fallback, objSchema) {
      return ValueProcessor_field(key, key, defaulted(fallback), objOf(objSchema));
    };
    var FieldSchema_state = function(okey, instantiator) {
      return ValueProcessor_state(okey, instantiator);
    };
    var NoState = {
      init: function() {
        return BehaviourState_nu({
          readState: function() {
            return "No State required";
          },
        });
      },
    };
    var BehaviourState_nu = function(spec) {
      return spec;
    };
    var isSource = function(component, simulatedEvent) {
      return Compare_eq(component.element(), simulatedEvent.event().target());
    };
    var EventHandler_nu = function(parts) {
      if (!Objects_hasKey(parts, "can") && !Objects_hasKey(parts, "abort") && !Objects_hasKey(parts, "run")) {
        throw new Error("EventHandler defined by: " + JSON.stringify(parts, null, 2) + " does not have can, abort, or run!");
      }
      return asRawOrDie("Extracting event.handler", objOfOnly([FieldSchema_defaulted("can", constant(true)), FieldSchema_defaulted("abort", constant(false)), FieldSchema_defaulted("run", Fun_noop)]), parts);
    };
    var EventHandler_all = function(handlers, f) {
      return function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        return foldl(
          handlers,
          function(acc, handler) {
            return acc && f(handler).apply(undefined, args);
          },
          true
        );
      };
    };
    var any = function(handlers, f) {
      return function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        return foldl(
          handlers,
          function(acc, handler) {
            return acc || f(handler).apply(undefined, args);
          },
          false
        );
      };
    };
    var read = function(handler) {
      return isFunction(handler) ? {
        can: constant(true),
        abort: constant(false),
        run: handler
      } : handler;
    };
    var fuse = function(handlers) {
      var can = EventHandler_all(handlers, function(handler) {
        return handler.can;
      });
      var abort = any(handlers, function(handler) {
        return handler.abort;
      });
      var run = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        Arr_each(handlers, function(handler) {
          handler.run.apply(undefined, args);
        });
      };
      return EventHandler_nu({
        can: can,
        abort: abort,
        run: run
      });
    };
    var extendStatics = function(d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({
            __proto__: []
          }
          instanceof Array &&
          function(d, b) {
            d.__proto__ = b;
          }) ||
        function(d, b) {
          for (var p in b)
            if (b.hasOwnProperty(p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };

    function __extends(d, b) {
      extendStatics(d, b);

      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
    }
    var __assign = function() {
      __assign =
        Object.assign ||
        function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
          return t;
        };
      return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)
          if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
        r = c < 3 ? target : desc === null ? (desc = Object.getOwnPropertyDescriptor(target, key)) : desc,
        d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else
        for (var i = decorators.length - 1; i >= 0; i--)
          if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function(target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new(P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ?
            resolve(result.value) :
            new P(function(resolve) {
              resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
          label: 0,
          sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
          },
          trys: [],
          ops: [],
        },
        f,
        y,
        t,
        g;
      return (
        (g = {
          next: verb(0),
          throw: verb(1),
          return: verb(2)
        }),
        typeof Symbol === "function" &&
        (g[Symbol.iterator] = function() {
          return this;
        }),
        g
      );

      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_)
          try {
            if (((f = 1), y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)) return t;
            if (((y = 0), t)) op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!((t = _.trys), (t = t.length > 0 && t[t.length - 1])) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2]) _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m)
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
        i = 0;
      if (m) return m.call(o);
      return {
        next: function() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        },
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
        r,
        ar = [],
        e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }
      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
      return ar;
    }

    function __await(v) {
      return this instanceof __await ? ((this.v = v), this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
        i,
        q = [];
      return (
        (i = {}),
        verb("next"),
        verb("throw"),
        verb("return"),
        (i[Symbol.asyncIterator] = function() {
          return this;
        }),
        i
      );

      function verb(n) {
        if (g[n])
          i[n] = function(v) {
            return new Promise(function(a, b) {
              q.push([n, v, a, b]) > 1 || resume(n, v);
            });
          };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if ((f(v), q.shift(), q.length)) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return (
        (i = {}),
        verb("next"),
        verb("throw", function(e) {
          throw e;
        }),
        verb("return"),
        (i[Symbol.iterator] = function() {
          return this;
        }),
        i
      );

      function verb(n, f) {
        i[n] = o[n] ?
          function(v) {
            return (p = !p) ? {
              value: __await(o[n](v)),
              done: n === "return"
            } : f ? f(v) : v;
          } :
          f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
        i;
      return m ?
        m.call(o) :
        ((o = typeof __values === "function" ? __values(o) : o[Symbol.iterator]()),
          (i = {}),
          verb("next"),
          verb("throw"),
          verb("return"),
          (i[Symbol.asyncIterator] = function() {
            return this;
          }),
          i);

      function verb(n) {
        i[n] =
          o[n] &&
          function(v) {
            return new Promise(function(resolve, reject) {
              (v = o[n](v)), settle(resolve, reject, v.done, v.value);
            });
          };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }
      return cooked;
    }

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null)
        for (var k in mod)
          if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    var contextmenu = constant("contextmenu");
    var touchstart = constant("touchstart");
    var touchmove = constant("touchmove");
    var touchend = constant("touchend");
    var gesturestart = constant("gesturestart");
    var mousedown = constant("mousedown");
    var mousemove = constant("mousemove");
    var mouseout = constant("mouseout");
    var mouseup = constant("mouseup");
    var mouseover = constant("mouseover");
    var focusin = constant("focusin");
    var focusout = constant("focusout");
    var keydown = constant("keydown");
    var keyup = constant("keyup");
    var NativeEvents_input = constant("input");
    var change = constant("change");
    var NativeEvents_focus = constant("focus");
    var click = constant("click");
    var transitionend = constant("transitionend");
    var selectstart = constant("selectstart");
    var paste = constant("paste");
    var alloy = {
      tap: constant("alloy.tap")
    };
    var SystemEvents_focus = constant("alloy.focus");
    var postBlur = constant("alloy.blur.post");
    var postPaste = constant("alloy.paste.post");
    var receive = constant("alloy.receive");
    var SystemEvents_execute = constant("alloy.execute");
    var focusItem = constant("alloy.focus.item");
    var tap = alloy.tap;
    var tapOrClick = api_PlatformDetection.detect().deviceType.isTouch() ? alloy.tap : click;
    var SystemEvents_longpress = constant("alloy.longpress");
    var sandboxClose = constant("alloy.sandbox.close");
    var typeaheadCancel = constant("alloy.typeahead.cancel");
    var systemInit = constant("alloy.system.init");
    var windowScroll = constant("alloy.system.scroll");
    var windowResize = constant("alloy.system.resize");
    var attachedToDom = constant("alloy.system.attached");
    var detachedFromDom = constant("alloy.system.detached");
    var dismissRequested = constant("alloy.system.dismissRequested");
    var focusShifted = constant("alloy.focusmanager.shifted");
    var slotVisibility = constant("alloy.slotcontainer.visibility");
    var changeTab = constant("alloy.change.tab");
    var dismissTab = constant("alloy.dismiss.tab");
    var highlight = constant("alloy.highlight");
    var dehighlight = constant("alloy.dehighlight");
    var emit = function(component, event) {
      dispatchWith(component, component.element(), event, {});
    };
    var emitWith = function(component, event, properties) {
      dispatchWith(component, component.element(), event, properties);
    };
    var emitExecute = function(component) {
      emit(component, SystemEvents_execute());
    };
    var dispatch = function(component, target, event) {
      dispatchWith(component, target, event, {});
    };
    var dispatchWith = function(component, target, event, properties) {
      var data = __assign({
        target: target
      }, properties);
      component.getSystem().triggerEvent(event, target, Obj_map(data, constant));
    };
    var dispatchEvent = function(component, target, event, simulatedEvent) {
      component.getSystem().triggerEvent(event, target, simulatedEvent.event());
    };
    var dispatchFocus = function(component, target) {
      component.getSystem().triggerFocus(target, component.element());
    };
    var ClosestOrAncestor = function(is, ancestor, scope, a, isRoot) {
      return is(scope, a) ? Option.some(scope) : isFunction(isRoot) && isRoot(scope) ? Option.none() : ancestor(scope, a, isRoot);
    };
    var PredicateFind_first = function(predicate) {
      return descendant(Body_body(), predicate);
    };
    var PredicateFind_ancestor = function(scope, predicate, isRoot) {
      var element = scope.dom();
      var stop = isFunction(isRoot) ? isRoot : constant(false);
      while (element.parentNode) {
        element = element.parentNode;
        var el = node_Element.fromDom(element);
        if (predicate(el)) {
          return Option.some(el);
        } else if (stop(el)) {
          break;
        }
      }
      return Option.none();
    };
    var PredicateFind_closest = function(scope, predicate, isRoot) {
      var is = function(s) {
        return predicate(s);
      };
      return ClosestOrAncestor(is, PredicateFind_ancestor, scope, predicate, isRoot);
    };
    var PredicateFind_sibling = function(scope, predicate) {
      var element = scope.dom();
      if (!element.parentNode) {
        return Option.none();
      }
      return PredicateFind_child(node_Element.fromDom(element.parentNode), function(x) {
        return !Compare_eq(scope, x) && predicate(x);
      });
    };
    var PredicateFind_child = function(scope, predicate) {
      var result = Arr_find(scope.dom().childNodes, compose(predicate, node_Element.fromDom));
      return result.map(node_Element.fromDom);
    };
    var descendant = function(scope, predicate) {
      var descend = function(node) {
        for (var i = 0; i < node.childNodes.length; i++) {
          if (predicate(node_Element.fromDom(node.childNodes[i]))) {
            return Option.some(node_Element.fromDom(node.childNodes[i]));
          }
          var res = descend(node.childNodes[i]);
          if (res.isSome()) {
            return res;
          }
        }
        return Option.none();
      };
      return descend(scope.dom());
    };
    var TransformFind_closest = function(target, transform, isRoot) {
      var delegate = PredicateFind_closest(
        target,
        function(elem) {
          return transform(elem).isSome();
        },
        isRoot
      );
      return delegate.bind(transform);
    };
    var derive = function(configs) {
      return Objects_wrapAll(configs);
    };
    var AlloyEvents_abort = function(name, predicate) {
      return {
        key: name,
        value: EventHandler_nu({
          abort: predicate
        })
      };
    };
    var AlloyEvents_can = function(name, predicate) {
      return {
        key: name,
        value: EventHandler_nu({
          can: predicate
        })
      };
    };
    var preventDefault = function(name) {
      return {
        key: name,
        value: EventHandler_nu({
          run: function(component, simulatedEvent) {
            simulatedEvent.event().prevent();
          },
        }),
      };
    };
    var AlloyEvents_run = function(name, handler) {
      return {
        key: name,
        value: EventHandler_nu({
          run: handler
        })
      };
    };
    var runActionExtra = function(name, action, extra) {
      return {
        key: name,
        value: EventHandler_nu({
          run: function(component) {
            action.apply(undefined, [component].concat(extra));
          },
        }),
      };
    };
    var runOnName = function(name) {
      return function(handler) {
        return AlloyEvents_run(name, handler);
      };
    };
    var runOnSourceName = function(name) {
      return function(handler) {
        return {
          key: name,
          value: EventHandler_nu({
            run: function(component, simulatedEvent) {
              if (isSource(component, simulatedEvent)) {
                handler(component, simulatedEvent);
              }
            },
          }),
        };
      };
    };
    var redirectToUid = function(name, uid) {
      return AlloyEvents_run(name, function(component, simulatedEvent) {
        component
          .getSystem()
          .getByUid(uid)
          .each(function(redirectee) {
            dispatchEvent(redirectee, redirectee.element(), name, simulatedEvent);
          });
      });
    };
    var redirectToPart = function(name, detail, partName) {
      var uid = detail.partUids[partName];
      return redirectToUid(name, uid);
    };
    var runWithTarget = function(name, f) {
      return AlloyEvents_run(name, function(component, simulatedEvent) {
        var ev = simulatedEvent.event();
        var target = component
          .getSystem()
          .getByDom(ev.target())
          .fold(
            function() {
              var closest = TransformFind_closest(
                ev.target(),
                function(el) {
                  return component.getSystem().getByDom(el).toOption();
                },
                constant(false)
              );
              return closest.getOr(component);
            },
            function(c) {
              return c;
            }
          );
        f(component, target, simulatedEvent);
      });
    };
    var AlloyEvents_cutter = function(name) {
      return AlloyEvents_run(name, function(component, simulatedEvent) {
        simulatedEvent.cut();
      });
    };
    var AlloyEvents_stopper = function(name) {
      return AlloyEvents_run(name, function(component, simulatedEvent) {
        simulatedEvent.stop();
      });
    };
    var runOnSource = function(name, f) {
      return runOnSourceName(name)(f);
    };
    var runOnAttached = runOnSourceName(attachedToDom());
    var runOnDetached = runOnSourceName(detachedFromDom());
    var runOnInit = runOnSourceName(systemInit());
    var runOnExecute = runOnName(SystemEvents_execute());
    var markAsBehaviourApi = function(f, apiName, apiFunction) {
      var delegate = apiFunction.toString();
      var endIndex = delegate.indexOf(")") + 1;
      var openBracketIndex = delegate.indexOf("(");
      var parameters = delegate.substring(openBracketIndex + 1, endIndex - 1).split(/,\s*/);
      f.toFunctionAnnotation = function() {
        return {
          name: apiName,
          parameters: cleanParameters(parameters.slice(0, 1).concat(parameters.slice(3)))
        };
      };
      return f;
    };
    var cleanParameters = function(parameters) {
      return Arr_map(parameters, function(p) {
        return endsWith(p, "/*") ? p.substring(0, p.length - "/*".length) : p;
      });
    };
    var markAsExtraApi = function(f, extraName) {
      var delegate = f.toString();
      var endIndex = delegate.indexOf(")") + 1;
      var openBracketIndex = delegate.indexOf("(");
      var parameters = delegate.substring(openBracketIndex + 1, endIndex - 1).split(/,\s*/);
      f.toFunctionAnnotation = function() {
        return {
          name: extraName,
          parameters: cleanParameters(parameters)
        };
      };
      return f;
    };
    var markAsSketchApi = function(f, apiFunction) {
      var delegate = apiFunction.toString();
      var endIndex = delegate.indexOf(")") + 1;
      var openBracketIndex = delegate.indexOf("(");
      var parameters = delegate.substring(openBracketIndex + 1, endIndex - 1).split(/,\s*/);
      f.toFunctionAnnotation = function() {
        return {
          name: "OVERRIDE",
          parameters: cleanParameters(parameters.slice(1))
        };
      };
      return f;
    };
    var getAnnotation = function(f) {
      return f.hasOwnProperty("toFunctionAnnotation") ? Option.some(f.toFunctionAnnotation()) : Option.none();
    };
    var DomModification_nu = function(s) {
      return {
        classes: s.classes !== undefined ? s.classes : [],
        attributes: s.attributes !== undefined ? s.attributes : {},
        styles: s.styles !== undefined ? s.styles : {}
      };
    };
    var modToStr = function(mod) {
      var raw = modToRaw(mod);
      return JSON.stringify(raw, null, 2);
    };
    var modToRaw = function(mod) {
      return mod;
    };
    var DomModification_merge = function(defnA, mod) {
      return __assign({}, defnA, {
        attributes: __assign({}, defnA.attributes, mod.attributes),
        styles: __assign({}, defnA.styles, mod.styles),
        classes: defnA.classes.concat(mod.classes)
      });
    };
    var executeEvent = function(bConfig, bState, executor) {
      return runOnExecute(function(component) {
        executor(component, bConfig, bState);
      });
    };
    var loadEvent = function(bConfig, bState, f) {
      return runOnInit(function(component, simulatedEvent) {
        f(component, bConfig, bState);
      });
    };
    var create = function(schema, name, active, apis, extra, state) {
      var configSchema = objOfOnly(schema);
      var schemaSchema = optionObjOf(name, [optionObjOfOnly("config", schema)]);
      return doCreate(configSchema, schemaSchema, name, active, apis, extra, state);
    };
    var createModes = function(modes, name, active, apis, extra, state) {
      var configSchema = modes;
      var schemaSchema = optionObjOf(name, [optionOf("config", modes)]);
      return doCreate(configSchema, schemaSchema, name, active, apis, extra, state);
    };
    var wrapApi = function(bName, apiFunction, apiName) {
      var f = function(component) {
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
          rest[_i - 1] = arguments[_i];
        }
        var args = [component].concat(rest);
        return component.config({
          name: constant(bName)
        }).fold(
          function() {
            throw new Error("We could not find any behaviour configuration for: " + bName + ". Using API: " + apiName);
          },
          function(info) {
            var rest = Array.prototype.slice.call(args, 1);
            return apiFunction.apply(undefined, [component, info.config, info.state].concat(rest));
          }
        );
      };
      return markAsBehaviourApi(f, apiName, apiFunction);
    };
    var revokeBehaviour = function(name) {
      return {
        key: name,
        value: undefined
      };
    };
    var doCreate = function(configSchema, schemaSchema, name, active, apis, extra, state) {
      var getConfig = function(info) {
        return Objects_hasKey(info, name) ? info[name]() : Option.none();
      };
      var wrappedApis = Obj_map(apis, function(apiF, apiName) {
        return wrapApi(name, apiF, apiName);
      });
      var wrappedExtra = Obj_map(extra, function(extraF, extraName) {
        return markAsExtraApi(extraF, extraName);
      });
      var me = __assign({}, wrappedExtra, wrappedApis, {
        revoke: curry(revokeBehaviour, name),
        config: function(spec) {
          var prepared = asRawOrDie(name + "-config", configSchema, spec);
          return {
            key: name,
            value: {
              config: prepared,
              me: me,
              configAsRaw: cached(function() {
                return asRawOrDie(name + "-config", configSchema, spec);
              }),
              initialConfig: spec,
              state: state,
            },
          };
        },
        schema: function() {
          return schemaSchema;
        },
        exhibit: function(info, base) {
          return getConfig(info)
            .bind(function(behaviourInfo) {
              return Objects_readOptFrom(active, "exhibit").map(function(exhibitor) {
                return exhibitor(base, behaviourInfo.config, behaviourInfo.state);
              });
            })
            .getOr(DomModification_nu({}));
        },
        name: function() {
          return name;
        },
        handlers: function(info) {
          return getConfig(info)
            .map(function(behaviourInfo) {
              var getEvents = Objects_readOr("events", function(a, b) {
                return {};
              })(active);
              return getEvents(behaviourInfo.config, behaviourInfo.state);
            })
            .getOr({});
        },
      });
      return me;
    };
    var Behaviour_derive = function(capabilities) {
      return Objects_wrapAll(capabilities);
    };
    var simpleSchema = objOfOnly([
      FieldSchema_strict("fields"),
      FieldSchema_strict("name"),
      FieldSchema_defaulted("active", {}),
      FieldSchema_defaulted("apis", {}),
      FieldSchema_defaulted("state", NoState),
      FieldSchema_defaulted("extra", {}),
    ]);
    var Behaviour_create = function(data) {
      var value = asRawOrDie("Creating behaviour: " + data.name, simpleSchema, data);
      return create(value.fields, value.name, value.active, value.apis, value.extra, value.state);
    };
    var modeSchema = objOfOnly([
      FieldSchema_strict("branchKey"),
      FieldSchema_strict("branches"),
      FieldSchema_strict("name"),
      FieldSchema_defaulted("active", {}),
      FieldSchema_defaulted("apis", {}),
      FieldSchema_defaulted("state", NoState),
      FieldSchema_defaulted("extra", {}),
    ]);
    var Behaviour_createModes = function(data) {
      var value = asRawOrDie("Creating behaviour: " + data.name, modeSchema, data);
      return createModes(ValueSchema_choose(value.branchKey, value.branches), value.name, value.active, value.apis, value.extra, value.state);
    };
    var revoke = constant(undefined);
    var noActive = constant({});
    var noApis = constant({});
    var noExtra = constant({});
    var AddEventsBehaviour_events = function(name, eventHandlers) {
      var events = derive(eventHandlers);
      return Behaviour_create({
        fields: [FieldSchema_strict("enabled")],
        name: name,
        active: {
          events: constant(events)
        }
      });
    };
    var AddEventsBehaviour_config = function(name, eventHandlers) {
      var me = AddEventsBehaviour_events(name, eventHandlers);
      return {
        key: name,
        value: {
          config: {},
          me: me,
          configAsRaw: constant({}),
          initialConfig: {},
          state: NoState
        }
      };
    };
    var fireDetaching = function(component) {
      emit(component, detachedFromDom());
      var children = component.components();
      Arr_each(children, fireDetaching);
    };
    var fireAttaching = function(component) {
      var children = component.components();
      Arr_each(children, fireAttaching);
      emit(component, attachedToDom());
    };
    var attach = function(parent, child) {
      attachWith(parent, child, append);
    };
    var attachWith = function(parent, child, insertion) {
      parent.getSystem().addToWorld(child);
      insertion(parent.element(), child.element());
      if (inBody(parent.element())) {
        fireAttaching(child);
      }
      parent.syncComponents();
    };
    var doDetach = function(component) {
      fireDetaching(component);
      Remove_remove(component.element());
      component.getSystem().removeFromWorld(component);
    };
    var detach = function(component) {
      var parent = Traverse_parent(component.element()).bind(function(p) {
        return component.getSystem().getByDom(p).fold(Option.none, Option.some);
      });
      doDetach(component);
      parent.each(function(p) {
        p.syncComponents();
      });
    };
    var detachChildren = function(component) {
      var subs = component.components();
      Arr_each(subs, doDetach);
      empty(component.element());
      component.syncComponents();
    };
    var attachSystem = function(element, guiSystem) {
      attachSystemInternal(element, guiSystem, append);
    };
    var attachSystemAfter = function(element, guiSystem) {
      attachSystemInternal(element, guiSystem, Insert_after);
    };
    var attachSystemInternal = function(element, guiSystem, inserter) {
      inserter(element, guiSystem.element());
      var children = Traverse_children(guiSystem.element());
      Arr_each(children, function(child) {
        guiSystem.getByDom(child).each(fireAttaching);
      });
    };
    var detachSystem = function(guiSystem) {
      var children = Traverse_children(guiSystem.element());
      Arr_each(children, function(child) {
        guiSystem.getByDom(child).each(fireDetaching);
      });
      Remove_remove(guiSystem.element());
    };
    var Cell = function(initial) {
      var value = initial;
      var get = function() {
        return value;
      };
      var set = function(v) {
        value = v;
      };
      var clone = function() {
        return Cell(get());
      };
      return {
        get: get,
        set: set,
        clone: clone
      };
    };
    var cat = function(arr) {
      var r = [];
      var push = function(x) {
        r.push(x);
      };
      for (var i = 0; i < arr.length; i++) {
        arr[i].each(push);
      }
      return r;
    };
    var findMap = function(arr, f) {
      for (var i = 0; i < arr.length; i++) {
        var r = f(arr[i], i);
        if (r.isSome()) {
          return r;
        }
      }
      return Option.none();
    };
    var liftN = function(arr, f) {
      var r = [];
      for (var i = 0; i < arr.length; i++) {
        var x = arr[i];
        if (x.isSome()) {
          r.push(x.getOrDie());
        } else {
          return Option.none();
        }
      }
      return Option.some(f.apply(null, r));
    };

    function lift() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var f = args.pop();
      return liftN(args, f);
    }
    var Replication_clone = function(original, isDeep) {
      return node_Element.fromDom(original.dom().cloneNode(isDeep));
    };
    var Replication_shallow = function(original) {
      return Replication_clone(original, false);
    };
    var Replication_deep = function(original) {
      return Replication_clone(original, true);
    };
    var shallowAs = function(original, tag) {
      var nu = node_Element.fromTag(tag);
      var attributes = Attr_clone(original);
      setAll(nu, attributes);
      return nu;
    };
    var Replication_copy = function(original, tag) {
      var nu = shallowAs(original, tag);
      var cloneChildren = Traverse_children(Replication_deep(original));
      InsertAll_append(nu, cloneChildren);
      return nu;
    };
    var mutate = function(original, tag) {
      var nu = shallowAs(original, tag);
      Insert_before(original, nu);
      var children = Traverse_children(original);
      InsertAll_append(nu, children);
      Remove_remove(original);
      return nu;
    };
    var getHtml = function(element) {
      var clone = Replication_shallow(element);
      return Html_getOuter(clone);
    };
    var AlloyLogger_element = function(elem) {
      return getHtml(elem);
    };
    var Debugging_unknown = "unknown";
    var debugging = true;
    var CHROME_INSPECTOR_GLOBAL = "__CHROME_INSPECTOR_CONNECTION_TO_ALLOY__";
    var EventConfiguration;
    (function(EventConfiguration) {
      EventConfiguration[(EventConfiguration["STOP"] = 0)] = "STOP";
      EventConfiguration[(EventConfiguration["NORMAL"] = 1)] = "NORMAL";
      EventConfiguration[(EventConfiguration["LOGGING"] = 2)] = "LOGGING";
    })(EventConfiguration || (EventConfiguration = {}));
    var eventConfig = Cell({});
    var makeEventLogger = function(eventName, initialTarget) {
      var sequence = [];
      var startTime = new Date().getTime();
      return {
        logEventCut: function(name, target, purpose) {
          sequence.push({
            outcome: "cut",
            target: target,
            purpose: purpose
          });
        },
        logEventStopped: function(name, target, purpose) {
          sequence.push({
            outcome: "stopped",
            target: target,
            purpose: purpose
          });
        },
        logNoParent: function(name, target, purpose) {
          sequence.push({
            outcome: "no-parent",
            target: target,
            purpose: purpose
          });
        },
        logEventNoHandlers: function(name, target) {
          sequence.push({
            outcome: "no-handlers-left",
            target: target
          });
        },
        logEventResponse: function(name, target, purpose) {
          sequence.push({
            outcome: "response",
            purpose: purpose,
            target: target
          });
        },
        write: function() {
          var finishTime = new Date().getTime();
          if (contains(["mousemove", "mouseover", "mouseout", systemInit()], eventName)) {
            return;
          }
          console$1.log(eventName, {
            event: eventName,
            time: finishTime - startTime,
            target: initialTarget.dom(),
            sequence: Arr_map(sequence, function(s) {
              if (!contains(["cut", "stopped", "response"], s.outcome)) {
                return s.outcome;
              } else {
                return "{" + s.purpose + "} " + s.outcome + " at (" + AlloyLogger_element(s.target) + ")";
              }
            }),
          });
        },
      };
    };
    var processEvent = function(eventName, initialTarget, f) {
      var status = Objects_readOptFrom(eventConfig.get(), eventName)
        .orThunk(function() {
          var patterns = Obj_keys(eventConfig.get());
          return findMap(patterns, function(p) {
            return eventName.indexOf(p) > -1 ? Option.some(eventConfig.get()[p]) : Option.none();
          });
        })
        .getOr(EventConfiguration.NORMAL);
      switch (status) {
        case EventConfiguration.NORMAL:
          return f(noLogger());
        case EventConfiguration.LOGGING:
          {
            var logger = makeEventLogger(eventName, initialTarget);
            var output = f(logger);
            logger.write();
            return output;
          }
        case EventConfiguration.STOP:
          return true;
      }
    };
    var Debugging_path = ["alloy/data/Fields", "alloy/debugging/Debugging"];
    var getTrace = function() {
      if (debugging === false) {
        return Debugging_unknown;
      }
      var err = new Error();
      if (err.stack !== undefined) {
        var lines = err.stack.split("\n");
        return Arr_find(lines, function(line) {
          return (
            line.indexOf("alloy") > 0 &&
            !Arr_exists(Debugging_path, function(p) {
              return line.indexOf(p) > -1;
            })
          );
        }).getOr(Debugging_unknown);
      } else {
        return Debugging_unknown;
      }
    };
    var logHandler = function(label, handlerName, trace) {};
    var ignoreEvent = {
      logEventCut: Fun_noop,
      logEventStopped: Fun_noop,
      logNoParent: Fun_noop,
      logEventNoHandlers: Fun_noop,
      logEventResponse: Fun_noop,
      write: Fun_noop
    };
    var monitorEvent = function(eventName, initialTarget, f) {
      return processEvent(eventName, initialTarget, f);
    };
    var inspectorInfo = function(comp) {
      var go = function(c) {
        var cSpec = c.spec();
        return {
          "(original.spec)": cSpec,
          "(dom.ref)": c.element().dom(),
          "(element)": AlloyLogger_element(c.element()),
          "(initComponents)": Arr_map(cSpec.components !== undefined ? cSpec.components : [], go),
          "(components)": Arr_map(c.components(), go),
          "(bound.events)": mapToArray(c.events(), function(v, k) {
            return [k];
          }).join(", "),
          "(behaviours)": cSpec.behaviours !== undefined ?
            Obj_map(cSpec.behaviours, function(v, k) {
              return v === undefined ? "--revoked--" : {
                config: v.configAsRaw(),
                "original-config": v.initialConfig,
                state: c.readState(k)
              };
            }) :
            "none",
        };
      };
      return go(comp);
    };
    var getOrInitConnection = function() {
      if (window$1[CHROME_INSPECTOR_GLOBAL] !== undefined) {
        return window$1[CHROME_INSPECTOR_GLOBAL];
      } else {
        var setEventStatus_1 = function(eventName, status) {
          var evs = eventConfig.get();
          evs[eventName] = status;
          eventConfig.set(evs);
        };
        window$1[CHROME_INSPECTOR_GLOBAL] = {
          systems: {},
          lookup: function(uid) {
            var systems = window$1[CHROME_INSPECTOR_GLOBAL].systems;
            var connections = Obj_keys(systems);
            return findMap(connections, function(conn) {
              var connGui = systems[conn];
              return connGui
                .getByUid(uid)
                .toOption()
                .map(function(comp) {
                  return Objects_wrap(AlloyLogger_element(comp.element()), inspectorInfo(comp));
                });
            }).orThunk(function() {
              return Option.some({
                error: "Systems (" + connections.join(", ") + ") did not contain uid: " + uid
              });
            });
          },
          events: {
            setToNormal: function(eventName) {
              setEventStatus_1(eventName, EventConfiguration.NORMAL);
            },
            setToLogging: function(eventName) {
              setEventStatus_1(eventName, EventConfiguration.LOGGING);
            },
            setToStop: function(eventName) {
              setEventStatus_1(eventName, EventConfiguration.STOP);
            },
          },
        };
        return window$1[CHROME_INSPECTOR_GLOBAL];
      }
    };
    var registerInspector = function(name, gui) {
      var connection = getOrInitConnection();
      connection.systems[name] = gui;
    };
    var noLogger = constant(ignoreEvent);
    var isDebugging = constant(debugging);
    var PredicateExists_any = function(predicate) {
      return PredicateFind_first(predicate).isSome();
    };
    var PredicateExists_ancestor = function(scope, predicate, isRoot) {
      return PredicateFind_ancestor(scope, predicate, isRoot).isSome();
    };
    var PredicateExists_closest = function(scope, predicate, isRoot) {
      return PredicateFind_closest(scope, predicate, isRoot).isSome();
    };
    var PredicateExists_sibling = function(scope, predicate) {
      return PredicateFind_sibling(scope, predicate).isSome();
    };
    var PredicateExists_child = function(scope, predicate) {
      return PredicateFind_child(scope, predicate).isSome();
    };
    var PredicateExists_descendant = function(scope, predicate) {
      return descendant(scope, predicate).isSome();
    };
    var Focus_focus = function(element) {
      element.dom().focus();
    };
    var Focus_blur = function(element) {
      element.dom().blur();
    };
    var Focus_hasFocus = function(element) {
      var doc = Traverse_owner(element).dom();
      return element.dom() === doc.activeElement;
    };
    var Focus_active = function(_DOC) {
      var doc = _DOC !== undefined ? _DOC.dom() : document$1;
      return Option.from(doc.activeElement).map(node_Element.fromDom);
    };
    var focusInside = function(element) {
      var doc = Traverse_owner(element);
      var inside = Focus_active(doc).filter(function(a) {
        return PredicateExists_closest(a, curry(Compare_eq, element));
      });
      inside.fold(function() {
        Focus_focus(element);
      }, Fun_noop);
    };
    var search = function(element) {
      return Focus_active(Traverse_owner(element)).filter(function(e) {
        return element.dom().contains(e.dom());
      });
    };
    var uncurried = function(handler, purpose) {
      return {
        handler: handler,
        purpose: constant(purpose)
      };
    };
    var curried = function(handler, purpose) {
      return {
        cHandler: handler,
        purpose: constant(purpose)
      };
    };
    var curryArgs = function(descHandler, extraArgs) {
      return curried(curry.apply(undefined, [descHandler.handler].concat(extraArgs)), descHandler.purpose());
    };
    var getCurried = function(descHandler) {
      return descHandler.cHandler;
    };
    var getUncurried = function(descHandler) {
      return descHandler.handler;
    };
    var mkEvent = function(target, x, y, stop, prevent, kill, raw) {
      return {
        target: constant(target),
        x: constant(x),
        y: constant(y),
        stop: stop,
        prevent: prevent,
        kill: kill,
        raw: constant(raw)
      };
    };
    var handle = function(filter, handler) {
      return function(rawEvent) {
        if (!filter(rawEvent)) {
          return;
        }
        var target = node_Element.fromDom(rawEvent.target);
        var stop = function() {
          rawEvent.stopPropagation();
        };
        var prevent = function() {
          rawEvent.preventDefault();
        };
        var kill = compose(prevent, stop);
        var evt = mkEvent(target, rawEvent.clientX, rawEvent.clientY, stop, prevent, kill, rawEvent);
        handler(evt);
      };
    };
    var binder = function(element, event, filter, handler, useCapture) {
      var wrapped = handle(filter, handler);
      element.dom().addEventListener(event, wrapped, useCapture);
      return {
        unbind: curry(FilteredEvent_unbind, element, event, wrapped, useCapture)
      };
    };
    var FilteredEvent_bind = function(element, event, filter, handler) {
      return binder(element, event, filter, handler, false);
    };
    var capture = function(element, event, filter, handler) {
      return binder(element, event, filter, handler, true);
    };
    var FilteredEvent_unbind = function(element, event, handler, useCapture) {
      element.dom().removeEventListener(event, handler, useCapture);
    };
    var DomEvent_filter = constant(true);
    var DomEvent_bind = function(element, event, handler) {
      return FilteredEvent_bind(element, event, DomEvent_filter, handler);
    };
    var DomEvent_capture = function(element, event, handler) {
      return capture(element, event, DomEvent_filter, handler);
    };
    var SelectorFind_first = function(selector) {
      return one(selector);
    };
    var SelectorFind_ancestor = function(scope, selector, isRoot) {
      return PredicateFind_ancestor(
        scope,
        function(e) {
          return Selectors_is(e, selector);
        },
        isRoot
      );
    };
    var SelectorFind_sibling = function(scope, selector) {
      return PredicateFind_sibling(scope, function(e) {
        return Selectors_is(e, selector);
      });
    };
    var SelectorFind_child = function(scope, selector) {
      return PredicateFind_child(scope, function(e) {
        return Selectors_is(e, selector);
      });
    };
    var SelectorFind_descendant = function(scope, selector) {
      return one(selector, scope);
    };
    var SelectorFind_closest = function(scope, selector, isRoot) {
      return ClosestOrAncestor(Selectors_is, SelectorFind_ancestor, scope, selector, isRoot);
    };
    var SelectorExists_any = function(selector) {
      return SelectorFind_first(selector).isSome();
    };
    var SelectorExists_ancestor = function(scope, selector, isRoot) {
      return SelectorFind_ancestor(scope, selector, isRoot).isSome();
    };
    var SelectorExists_sibling = function(scope, selector) {
      return SelectorFind_sibling(scope, selector).isSome();
    };
    var SelectorExists_child = function(scope, selector) {
      return SelectorFind_child(scope, selector).isSome();
    };
    var SelectorExists_descendant = function(scope, selector) {
      return SelectorFind_descendant(scope, selector).isSome();
    };
    var SelectorExists_closest = function(scope, selector, isRoot) {
      return SelectorFind_closest(scope, selector, isRoot).isSome();
    };
    var BACKSPACE = function() {
      return [8];
    };
    var TAB = function() {
      return [9];
    };
    var ENTER = function() {
      return [13];
    };
    var SHIFT = function() {
      return [16];
    };
    var CTRL = function() {
      return [17];
    };
    var ALT = function() {
      return [18];
    };
    var CAPSLOCK = function() {
      return [20];
    };
    var ESCAPE = function() {
      return [27];
    };
    var SPACE = function() {
      return [32];
    };
    var PAGEUP = function() {
      return [33];
    };
    var PAGEDOWN = function() {
      return [34];
    };
    var END = function() {
      return [35];
    };
    var HOME = function() {
      return [36];
    };
    var LEFT = function() {
      return [37];
    };
    var UP = function() {
      return [38];
    };
    var RIGHT = function() {
      return [39];
    };
    var DOWN = function() {
      return [40];
    };
    var INSERT = function() {
      return [45];
    };
    var DEL = function() {
      return [46];
    };
    var META = function() {
      return [91, 93, 224];
    };
    var F10 = function() {
      return [121];
    };
    var DelayedFunction = function(fun, delay) {
      var ref = null;
      var schedule = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        ref = setTimeout$1(function() {
          fun.apply(null, args);
          ref = null;
        }, delay);
      };
      var cancel = function() {
        if (ref !== null) {
          clearTimeout$1(ref);
          ref = null;
        }
      };
      return {
        cancel: cancel,
        schedule: schedule
      };
    };
    var SIGNIFICANT_MOVE = 5;
    var LONGPRESS_DELAY = 400;
    var getTouch = function(event) {
      var raw = event.raw();
      if (raw.touches === undefined || raw.touches.length !== 1) {
        return Option.none();
      }
      return Option.some(raw.touches[0]);
    };
    var isFarEnough = function(touch, data) {
      var distX = Math.abs(touch.clientX - data.x());
      var distY = Math.abs(touch.clientY - data.y());
      return distX > SIGNIFICANT_MOVE || distY > SIGNIFICANT_MOVE;
    };
    var monitor = function(settings) {
      var startData = Cell(Option.none());
      var longpress = DelayedFunction(function(event) {
        startData.set(Option.none());
        settings.triggerEvent(SystemEvents_longpress(), event);
      }, LONGPRESS_DELAY);
      var handleTouchstart = function(event) {
        getTouch(event).each(function(touch) {
          longpress.cancel();
          var data = {
            x: constant(touch.clientX),
            y: constant(touch.clientY),
            target: event.target
          };
          longpress.schedule(event);
          startData.set(Option.some(data));
        });
        return Option.none();
      };
      var handleTouchmove = function(event) {
        longpress.cancel();
        getTouch(event).each(function(touch) {
          startData.get().each(function(data) {
            if (isFarEnough(touch, data)) {
              startData.set(Option.none());
            }
          });
        });
        return Option.none();
      };
      var handleTouchend = function(event) {
        longpress.cancel();
        var isSame = function(data) {
          return Compare_eq(data.target(), event.target());
        };
        return startData
          .get()
          .filter(isSame)
          .map(function(data) {
            return settings.triggerEvent(tap(), event);
          });
      };
      var handlers = Objects_wrapAll([{
          key: touchstart(),
          value: handleTouchstart
        },
        {
          key: touchmove(),
          value: handleTouchmove
        },
        {
          key: touchend(),
          value: handleTouchend
        },
      ]);
      var fireIfReady = function(event, type) {
        return Objects_readOptFrom(handlers, type).bind(function(handler) {
          return handler(event);
        });
      };
      return {
        fireIfReady: fireIfReady
      };
    };
    var isDangerous = function(event) {
      var keyEv = event.raw();
      return keyEv.which === BACKSPACE()[0] && !contains(["input", "textarea"], Node_name(event.target())) && !SelectorExists_closest(event.target(), '[contenteditable="true"]');
    };
    var isFirefox = api_PlatformDetection.detect().browser.isFirefox();
    var settingsSchema = objOfOnly([strictFunction("triggerEvent"), FieldSchema_defaulted("stopBackspace", true)]);
    var bindFocus = function(container, handler) {
      if (isFirefox) {
        return DomEvent_capture(container, "focus", handler);
      } else {
        return DomEvent_bind(container, "focusin", handler);
      }
    };
    var bindBlur = function(container, handler) {
      if (isFirefox) {
        return DomEvent_capture(container, "blur", handler);
      } else {
        return DomEvent_bind(container, "focusout", handler);
      }
    };
    var setup = function(container, rawSettings) {
      var settings = asRawOrDie("Getting GUI events settings", settingsSchema, rawSettings);
      var pointerEvents = api_PlatformDetection.detect().deviceType.isTouch() ? ["touchstart", "touchmove", "touchend", "gesturestart"] : ["mousedown", "mouseup", "mouseover", "mousemove", "mouseout", "click"];
      var tapEvent = monitor(settings);
      var simpleEvents = Arr_map(pointerEvents.concat(["selectstart", "input", "contextmenu", "change", "transitionend", "drag", "dragstart", "dragend", "dragenter", "dragleave", "dragover", "drop", "keyup"]), function(type) {
        return DomEvent_bind(container, type, function(event) {
          tapEvent.fireIfReady(event, type).each(function(tapStopped) {
            if (tapStopped) {
              event.kill();
            }
          });
          var stopped = settings.triggerEvent(type, event);
          if (stopped) {
            event.kill();
          }
        });
      });
      var pasteTimeout = Cell(Option.none());
      var onPaste = DomEvent_bind(container, "paste", function(event) {
        tapEvent.fireIfReady(event, "paste").each(function(tapStopped) {
          if (tapStopped) {
            event.kill();
          }
        });
        var stopped = settings.triggerEvent("paste", event);
        if (stopped) {
          event.kill();
        }
        pasteTimeout.set(
          Option.some(
            setTimeout$1(function() {
              settings.triggerEvent(postPaste(), event);
            }, 0)
          )
        );
      });
      var onKeydown = DomEvent_bind(container, "keydown", function(event) {
        var stopped = settings.triggerEvent("keydown", event);
        if (stopped) {
          event.kill();
        } else if (settings.stopBackspace === true && isDangerous(event)) {
          event.prevent();
        }
      });
      var onFocusIn = bindFocus(container, function(event) {
        var stopped = settings.triggerEvent("focusin", event);
        if (stopped) {
          event.kill();
        }
      });
      var focusoutTimeout = Cell(Option.none());
      var onFocusOut = bindBlur(container, function(event) {
        var stopped = settings.triggerEvent("focusout", event);
        if (stopped) {
          event.kill();
        }
        focusoutTimeout.set(
          Option.some(
            setTimeout$1(function() {
              settings.triggerEvent(postBlur(), event);
            }, 0)
          )
        );
      });
      var unbind = function() {
        Arr_each(simpleEvents, function(e) {
          e.unbind();
        });
        onKeydown.unbind();
        onFocusIn.unbind();
        onFocusOut.unbind();
        onPaste.unbind();
        pasteTimeout.get().each(clearTimeout$1);
        focusoutTimeout.get().each(clearTimeout$1);
      };
      return {
        unbind: unbind
      };
    };
    var EventSource_derive = function(rawEvent, rawTarget) {
      var source = Objects_readOptFrom(rawEvent, "target")
        .map(function(getTarget) {
          return getTarget();
        })
        .getOr(rawTarget);
      return Cell(source);
    };
    var fromSource = function(event, source) {
      var stopper = Cell(false);
      var cutter = Cell(false);
      var stop = function() {
        stopper.set(true);
      };
      var cut = function() {
        cutter.set(true);
      };
      return {
        stop: stop,
        cut: cut,
        isStopped: stopper.get,
        isCut: cutter.get,
        event: constant(event),
        setSource: source.set,
        getSource: source.get
      };
    };
    var fromExternal = function(event) {
      var stopper = Cell(false);
      var stop = function() {
        stopper.set(true);
      };
      return {
        stop: stop,
        cut: Fun_noop,
        isStopped: stopper.get,
        isCut: constant(false),
        event: constant(event),
        setSource: die("Cannot set source of a broadcasted event"),
        getSource: die("Cannot get source of a broadcasted event"),
      };
    };
    var fromTarget = function(event, target) {
      var source = Cell(target);
      return fromSource(event, source);
    };
    var Triggers_adt = Adt.generate([{
      stopped: []
    }, {
      resume: ["element"]
    }, {
      complete: []
    }]);
    var doTriggerHandler = function(lookup, eventType, rawEvent, target, source, logger) {
      var handler = lookup(eventType, target);
      var simulatedEvent = fromSource(rawEvent, source);
      return handler.fold(
        function() {
          logger.logEventNoHandlers(eventType, target);
          return Triggers_adt.complete();
        },
        function(handlerInfo) {
          var descHandler = handlerInfo.descHandler();
          var eventHandler = getCurried(descHandler);
          eventHandler(simulatedEvent);
          if (simulatedEvent.isStopped()) {
            logger.logEventStopped(eventType, handlerInfo.element(), descHandler.purpose());
            return Triggers_adt.stopped();
          } else if (simulatedEvent.isCut()) {
            logger.logEventCut(eventType, handlerInfo.element(), descHandler.purpose());
            return Triggers_adt.complete();
          } else {
            return Traverse_parent(handlerInfo.element()).fold(
              function() {
                logger.logNoParent(eventType, handlerInfo.element(), descHandler.purpose());
                return Triggers_adt.complete();
              },
              function(parent) {
                logger.logEventResponse(eventType, handlerInfo.element(), descHandler.purpose());
                return Triggers_adt.resume(parent);
              }
            );
          }
        }
      );
    };
    var doTriggerOnUntilStopped = function(lookup, eventType, rawEvent, rawTarget, source, logger) {
      return doTriggerHandler(lookup, eventType, rawEvent, rawTarget, source, logger).fold(
        function() {
          return true;
        },
        function(parent) {
          return doTriggerOnUntilStopped(lookup, eventType, rawEvent, parent, source, logger);
        },
        function() {
          return false;
        }
      );
    };
    var triggerHandler = function(lookup, eventType, rawEvent, target, logger) {
      var source = EventSource_derive(rawEvent, target);
      return doTriggerHandler(lookup, eventType, rawEvent, target, source, logger);
    };
    var Triggers_broadcast = function(listeners, rawEvent, logger) {
      var simulatedEvent = fromExternal(rawEvent);
      Arr_each(listeners, function(listener) {
        var descHandler = listener.descHandler();
        var handler = getCurried(descHandler);
        handler(simulatedEvent);
      });
      return simulatedEvent.isStopped();
    };
    var triggerUntilStopped = function(lookup, eventType, rawEvent, logger) {
      var rawTarget = rawEvent.target();
      return triggerOnUntilStopped(lookup, eventType, rawEvent, rawTarget, logger);
    };
    var triggerOnUntilStopped = function(lookup, eventType, rawEvent, rawTarget, logger) {
      var source = EventSource_derive(rawEvent, rawTarget);
      return doTriggerOnUntilStopped(lookup, eventType, rawEvent, rawTarget, source, logger);
    };
    var AlloyTags_prefix = constant("alloy-id-");
    var idAttr = constant("data-alloy-id");
    var Tagger_prefix = AlloyTags_prefix();
    var Tagger_idAttr = idAttr();
    var write = function(label, elem) {
      var id = generate(Tagger_prefix + label);
      writeOnly(elem, id);
      return id;
    };
    var writeOnly = function(elem, uid) {
      Object.defineProperty(elem.dom(), Tagger_idAttr, {
        value: uid,
        writable: true
      });
    };
    var Tagger_read = function(elem) {
      var id = isElement(elem) ? elem.dom()[Tagger_idAttr] : null;
      return Option.from(id);
    };
    var readOrDie = function(elem) {
      return Tagger_read(elem).getOrDie("Could not find alloy uid in: " + AlloyLogger_element(elem));
    };
    var Tagger_generate = function(prefix) {
      return generate(prefix);
    };
    var Tagger_revoke = function(elem) {
      writeOnly(elem, null);
    };
    var attribute = constant(Tagger_idAttr);
    var EventRegistry_eventHandler = Immutable("element", "descHandler");
    var UncurriedHandler = (function() {
      function UncurriedHandler() {}
      return UncurriedHandler;
    })();
    var broadcastHandler = function(id, handler) {
      return {
        id: constant(id),
        descHandler: constant(handler)
      };
    };
    var EventRegistry = function() {
      var registry = {};
      var registerId = function(extraArgs, id, events) {
        Obj_each(events, function(v, k) {
          var handlers = registry[k] !== undefined ? registry[k] : {};
          handlers[id] = curryArgs(v, extraArgs);
          registry[k] = handlers;
        });
      };
      var findHandler = function(handlers, elem) {
        return Tagger_read(elem).fold(
          function() {
            return Option.none();
          },
          function(id) {
            var reader = Objects_readOpt(id);
            return handlers.bind(reader).map(function(descHandler) {
              return EventRegistry_eventHandler(elem, descHandler);
            });
          }
        );
      };
      var filterByType = function(type) {
        return Objects_readOptFrom(registry, type)
          .map(function(handlers) {
            return mapToArray(handlers, function(f, id) {
              return broadcastHandler(id, f);
            });
          })
          .getOr([]);
      };
      var find = function(isAboveRoot, type, target) {
        var readType = Objects_readOpt(type);
        var handlers = readType(registry);
        return TransformFind_closest(
          target,
          function(elem) {
            return findHandler(handlers, elem);
          },
          isAboveRoot
        );
      };
      var unregisterId = function(id) {
        Obj_each(registry, function(handlersById, eventName) {
          if (handlersById.hasOwnProperty(id)) {
            delete handlersById[id];
          }
        });
      };
      return {
        registerId: registerId,
        unregisterId: unregisterId,
        filterByType: filterByType,
        find: find
      };
    };
    var Registry = function() {
      var events = EventRegistry();
      var components = {};
      var readOrTag = function(component) {
        var elem = component.element();
        return Tagger_read(elem).fold(
          function() {
            return write("uid-", component.element());
          },
          function(uid) {
            return uid;
          }
        );
      };
      var failOnDuplicate = function(component, tagId) {
        var conflict = components[tagId];
        if (conflict === component) {
          unregister(component);
        } else {
          throw new Error(
            'The tagId "' +
            tagId +
            '" is already used by: ' +
            AlloyLogger_element(conflict.element()) +
            "\nCannot use it for: " +
            AlloyLogger_element(component.element()) +
            "\n" +
            "The conflicting element is" +
            (inBody(conflict.element()) ? " " : " not ") +
            "already in the DOM"
          );
        }
      };
      var register = function(component) {
        var tagId = readOrTag(component);
        if (Objects_hasKey(components, tagId)) {
          failOnDuplicate(component, tagId);
        }
        var extraArgs = [component];
        events.registerId(extraArgs, tagId, component.events());
        components[tagId] = component;
      };
      var unregister = function(component) {
        Tagger_read(component.element()).each(function(tagId) {
          delete components[tagId];
          events.unregisterId(tagId);
        });
      };
      var filter = function(type) {
        return events.filterByType(type);
      };
      var find = function(isAboveRoot, type, target) {
        return events.find(isAboveRoot, type, target);
      };
      var getById = function(id) {
        return Objects_readOpt(id)(components);
      };
      return {
        find: find,
        filter: filter,
        register: register,
        unregister: unregister,
        getById: getById
      };
    };
    var isRecursive = function(component, originator, target) {
      return Compare_eq(originator, component.element()) && !Compare_eq(originator, target);
    };
    var DefaultEvents_events = derive([
      AlloyEvents_can(SystemEvents_focus(), function(component, simulatedEvent) {
        var originator = simulatedEvent.event().originator();
        var target = simulatedEvent.event().target();
        if (isRecursive(component, originator, target)) {
          console$1.warn(
            SystemEvents_focus() +
            " did not get interpreted by the desired target. " +
            "\nOriginator: " +
            AlloyLogger_element(originator) +
            "\nTarget: " +
            AlloyLogger_element(target) +
            "\nCheck the " +
            SystemEvents_focus() +
            " event handlers"
          );
          return false;
        } else {
          return true;
        }
      }),
    ]);
    var CustomSpec_make = identity;
    var NoContextApi = function(getComp) {
      var fail = function(event) {
        return function() {
          throw new Error("The component must be in a context to send: " + event + "\n" + AlloyLogger_element(getComp().element()) + " is not in context.");
        };
      };
      return {
        debugInfo: constant("fake"),
        triggerEvent: fail("triggerEvent"),
        triggerFocus: fail("triggerFocus"),
        triggerEscape: fail("triggerEscape"),
        build: fail("build"),
        addToWorld: fail("addToWorld"),
        removeFromWorld: fail("removeFromWorld"),
        addToGui: fail("addToGui"),
        removeFromGui: fail("removeFromGui"),
        getByUid: fail("getByUid"),
        getByDom: fail("getByDom"),
        broadcast: fail("broadcast"),
        broadcastOn: fail("broadcastOn"),
        broadcastEvent: fail("broadcastEvent"),
        isConnected: constant(false),
      };
    };
    var singleton = NoContextApi();
    var premadeTag = generate("alloy-premade");
    var premade = function(comp) {
      return Objects_wrap(premadeTag, comp);
    };
    var getPremade = function(spec) {
      return Objects_readOptFrom(spec, premadeTag);
    };
    var makeApi = function(f) {
      return markAsSketchApi(function(component) {
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
          rest[_i - 1] = arguments[_i];
        }
        return f.apply(undefined, [component.getApis()].concat([component].concat(rest)));
      }, f);
    };
    var generateFrom = function(spec, all) {
      var schema = Arr_map(all, function(a) {
        return optionObjOf(a.name(), [FieldSchema_strict("config"), FieldSchema_defaulted("state", NoState)]);
      });
      var validated = asRaw("component.behaviours", objOf(schema), spec.behaviours).fold(
        function(errInfo) {
          throw new Error(formatError(errInfo) + "\nComplete spec:\n" + JSON.stringify(spec, null, 2));
        },
        function(v) {
          return v;
        }
      );
      return {
        list: all,
        data: Obj_map(validated, function(optBlobThunk) {
          var optBlob = optBlobThunk;
          var output = optBlob.map(function(blob) {
            return {
              config: blob.config,
              state: blob.state.init(blob.config)
            };
          });
          return function() {
            return output;
          };
        }),
      };
    };
    var getBehaviours = function(bData) {
      return bData.list;
    };
    var getData = function(bData) {
      return bData.data;
    };
    var byInnerKey = function(data, tuple) {
      var r = {};
      Obj_each(data, function(detail, key) {
        Obj_each(detail, function(value, indexKey) {
          var chain = Objects_readOr(indexKey, [])(r);
          r[indexKey] = chain.concat([tuple(key, value)]);
        });
      });
      return r;
    };
    var combine = function(info, baseMod, behaviours, base) {
      var modsByBehaviour = __assign({}, baseMod);
      Arr_each(behaviours, function(behaviour) {
        modsByBehaviour[behaviour.name()] = behaviour.exhibit(info, base);
      });
      var nameAndMod = function(name, modification) {
        return {
          name: name,
          modification: modification
        };
      };
      var byAspect = byInnerKey(modsByBehaviour, nameAndMod);
      var combineObjects = function(objects) {
        return foldr(
          objects,
          function(b, a) {
            return __assign({}, a.modification, b);
          }, {}
        );
      };
      var combinedClasses = foldr(
        byAspect.classes,
        function(b, a) {
          return a.modification.concat(b);
        }, []
      );
      var combinedAttributes = combineObjects(byAspect.attributes);
      var combinedStyles = combineObjects(byAspect.styles);
      return DomModification_nu({
        classes: combinedClasses,
        attributes: combinedAttributes,
        styles: combinedStyles
      });
    };
    var sortKeys = function(label, keyName, array, order) {
      var sliced = array.slice(0);
      try {
        var sorted = sliced.sort(function(a, b) {
          var aKey = a[keyName]();
          var bKey = b[keyName]();
          var aIndex = order.indexOf(aKey);
          var bIndex = order.indexOf(bKey);
          if (aIndex === -1) {
            throw new Error("The ordering for " + label + " does not have an entry for " + aKey + ".\nOrder specified: " + JSON.stringify(order, null, 2));
          }
          if (bIndex === -1) {
            throw new Error("The ordering for " + label + " does not have an entry for " + bKey + ".\nOrder specified: " + JSON.stringify(order, null, 2));
          }
          if (aIndex < bIndex) {
            return -1;
          } else if (bIndex < aIndex) {
            return 1;
          } else {
            return 0;
          }
        });
        return Result.value(sorted);
      } catch (err) {
        return Result.error([err]);
      }
    };
    var behaviourTuple = function(name, handler) {
      return {
        name: constant(name),
        handler: constant(handler)
      };
    };
    var nameToHandlers = function(behaviours, info) {
      var r = {};
      Arr_each(behaviours, function(behaviour) {
        r[behaviour.name()] = behaviour.handlers(info);
      });
      return r;
    };
    var groupByEvents = function(info, behaviours, base) {
      var behaviourEvents = __assign({}, base, nameToHandlers(behaviours, info));
      return byInnerKey(behaviourEvents, behaviourTuple);
    };
    var ComponentEvents_combine = function(info, eventOrder, behaviours, base) {
      var byEventName = groupByEvents(info, behaviours, base);
      return combineGroups(byEventName, eventOrder);
    };
    var assemble = function(rawHandler) {
      var handler = read(rawHandler);
      return function(component, simulatedEvent) {
        var rest = [];
        for (var _i = 2; _i < arguments.length; _i++) {
          rest[_i - 2] = arguments[_i];
        }
        var args = [component, simulatedEvent].concat(rest);
        if (handler.abort.apply(undefined, args)) {
          simulatedEvent.stop();
        } else if (handler.can.apply(undefined, args)) {
          handler.run.apply(undefined, args);
        }
      };
    };
    var missingOrderError = function(eventName, tuples) {
      return Result.error([
        "The event (" +
        eventName +
        ") has more than one behaviour that listens to it.\nWhen this occurs, you must " +
        'specify an event ordering for the behaviours in your spec (e.g. [ "listing", "toggling" ]).\nThe behaviours that ' +
        "can trigger it are: " +
        JSON.stringify(
          Arr_map(tuples, function(c) {
            return c.name();
          }),
          null,
          2
        ),
      ]);
    };
    var ComponentEvents_fuse = function(tuples, eventOrder, eventName) {
      var order = eventOrder[eventName];
      if (!order) {
        return missingOrderError(eventName, tuples);
      } else {
        return sortKeys("Event: " + eventName, "name", tuples, order).map(function(sortedTuples) {
          var handlers = Arr_map(sortedTuples, function(tuple) {
            return tuple.handler();
          });
          return fuse(handlers);
        });
      }
    };
    var combineGroups = function(byEventName, eventOrder) {
      var r = mapToArray(byEventName, function(tuples, eventName) {
        var combined = tuples.length === 1 ? Result.value(tuples[0].handler()) : ComponentEvents_fuse(tuples, eventOrder, eventName);
        return combined.map(function(handler) {
          var assembled = assemble(handler);
          var purpose =
            tuples.length > 1 ?
            Arr_filter(eventOrder, function(o) {
              return contains(tuples, function(t) {
                return t.name() === o;
              });
            }).join(" > ") :
            tuples[0].name();
          return Objects_wrap(eventName, uncurried(assembled, purpose));
        });
      });
      return consolidate(r, {});
    };
    var toInfo = function(spec) {
      return asRaw(
        "custom.definition",
        objOf([
          ValueProcessor_field(
            "dom",
            "dom",
            strict(),
            objOf([FieldSchema_strict("tag"), FieldSchema_defaulted("styles", {}), FieldSchema_defaulted("classes", []), FieldSchema_defaulted("attributes", {}), FieldSchema_option("value"), FieldSchema_option("innerHtml")])
          ),
          FieldSchema_strict("components"),
          FieldSchema_strict("uid"),
          FieldSchema_defaulted("events", {}),
          FieldSchema_defaulted("apis", {}),
          ValueProcessor_field(
            "eventOrder",
            "eventOrder",
            mergeWith({
              "alloy.execute": ["disabling", "alloy.base.behaviour", "toggling", "typeaheadevents"],
              "alloy.focus": ["alloy.base.behaviour", "focusing", "keying"],
              "alloy.system.init": ["alloy.base.behaviour", "disabling", "toggling", "representing"],
              input: ["alloy.base.behaviour", "representing", "streaming", "invalidating"],
              "alloy.system.detached": ["alloy.base.behaviour", "representing", "item-events", "tooltipping"],
              mousedown: ["focusing", "alloy.base.behaviour", "item-type-events"],
              mouseover: ["item-type-events", "tooltipping"],
            }),
            ValueSchema_anyValue()
          ),
          FieldSchema_option("domModification"),
        ]),
        spec
      );
    };
    var toDefinition = function(detail) {
      return __assign({}, detail.dom, {
        uid: detail.uid,
        domChildren: Arr_map(detail.components, function(comp) {
          return comp.element();
        }),
      });
    };
    var toModification = function(detail) {
      return detail.domModification.fold(function() {
        return DomModification_nu({});
      }, DomModification_nu);
    };
    var toApis = function(info) {
      return info.apis;
    };
    var CustomDefinition_toEvents = function(info) {
      return info.events;
    };
    var Toggler = function(turnOff, turnOn, initial) {
      var active = initial || false;
      var on = function() {
        turnOn();
        active = true;
      };
      var off = function() {
        turnOff();
        active = false;
      };
      var toggle = function() {
        var f = active ? off : on;
        f();
      };
      var isOn = function() {
        return active;
      };
      return {
        on: on,
        off: off,
        toggle: toggle,
        isOn: isOn
      };
    };
    var AttrList_read = function(element, attr) {
      var value = Attr_get(element, attr);
      return value === undefined || value === "" ? [] : value.split(" ");
    };
    var AttrList_add = function(element, attr, id) {
      var old = AttrList_read(element, attr);
      var nu = old.concat([id]);
      Attr_set(element, attr, nu.join(" "));
      return true;
    };
    var AttrList_remove = function(element, attr, id) {
      var nu = Arr_filter(AttrList_read(element, attr), function(v) {
        return v !== id;
      });
      if (nu.length > 0) {
        Attr_set(element, attr, nu.join(" "));
      } else {
        Attr_remove(element, attr);
      }
      return false;
    };
    var supports = function(element) {
      return element.dom().classList !== undefined;
    };
    var ClassList_get = function(element) {
      return AttrList_read(element, "class");
    };
    var ClassList_add = function(element, clazz) {
      return AttrList_add(element, "class", clazz);
    };
    var ClassList_remove = function(element, clazz) {
      return AttrList_remove(element, "class", clazz);
    };
    var toggle = function(element, clazz) {
      if (contains(ClassList_get(element), clazz)) {
        return ClassList_remove(element, clazz);
      } else {
        return ClassList_add(element, clazz);
      }
    };
    var Class_add = function(element, clazz) {
      if (supports(element)) {
        element.dom().classList.add(clazz);
      } else {
        ClassList_add(element, clazz);
      }
    };
    var cleanClass = function(element) {
      var classList = supports(element) ? element.dom().classList : ClassList_get(element);
      if (classList.length === 0) {
        Attr_remove(element, "class");
      }
    };
    var Class_remove = function(element, clazz) {
      if (supports(element)) {
        var classList = element.dom().classList;
        classList.remove(clazz);
      } else {
        ClassList_remove(element, clazz);
      }
      cleanClass(element);
    };
    var Class_toggle = function(element, clazz) {
      return supports(element) ? element.dom().classList.toggle(clazz) : toggle(element, clazz);
    };
    var toggler = function(element, clazz) {
      var hasClasslist = supports(element);
      var classList = element.dom().classList;
      var off = function() {
        if (hasClasslist) {
          classList.remove(clazz);
        } else {
          ClassList_remove(element, clazz);
        }
      };
      var on = function() {
        if (hasClasslist) {
          classList.add(clazz);
        } else {
          ClassList_add(element, clazz);
        }
      };
      return Toggler(off, on, Class_has(element, clazz));
    };
    var Class_has = function(element, clazz) {
      return supports(element) && element.dom().classList.contains(clazz);
    };
    var Classes_add = function(element, classes) {
      Arr_each(classes, function(x) {
        Class_add(element, x);
      });
    };
    var Classes_remove = function(element, classes) {
      Arr_each(classes, function(x) {
        Class_remove(element, x);
      });
    };
    var Classes_toggle = function(element, classes) {
      Arr_each(classes, function(x) {
        Class_toggle(element, x);
      });
    };
    var hasAll = function(element, classes) {
      return Arr_forall(classes, function(clazz) {
        return Class_has(element, clazz);
      });
    };
    var hasAny = function(element, classes) {
      return Arr_exists(classes, function(clazz) {
        return Class_has(element, clazz);
      });
    };
    var getNative = function(element) {
      var classList = element.dom().classList;
      var r = new Array(classList.length);
      for (var i = 0; i < classList.length; i++) {
        r[i] = classList.item(i);
      }
      return r;
    };
    var Classes_get = function(element) {
      return supports(element) ? getNative(element) : ClassList_get(element);
    };
    var Value_get = function(element) {
      return element.dom().value;
    };
    var Value_set = function(element, value) {
      if (value === undefined) {
        throw new Error("Value.set was undefined");
      }
      element.dom().value = value;
    };
    var renderToDom = function(definition) {
      var subject = node_Element.fromTag(definition.tag);
      setAll(subject, definition.attributes);
      Classes_add(subject, definition.classes);
      Css_setAll(subject, definition.styles);
      definition.innerHtml.each(function(html) {
        return Html_set(subject, html);
      });
      var children = definition.domChildren;
      InsertAll_append(subject, children);
      definition.value.each(function(value) {
        Value_set(subject, value);
      });
      if (!definition.uid) {
        debugger;
      }
      writeOnly(subject, definition.uid);
      return subject;
    };
    var CompBehaviours_getBehaviours = function(spec) {
      var behaviours = Objects_readOr("behaviours", {})(spec);
      var keys = Arr_filter(Obj_keys(behaviours), function(k) {
        return behaviours[k] !== undefined;
      });
      return Arr_map(keys, function(k) {
        return behaviours[k].me;
      });
    };
    var CompBehaviours_generateFrom = function(spec, all) {
      return generateFrom(spec, all);
    };
    var CompBehaviours_generate = function(spec) {
      var all = CompBehaviours_getBehaviours(spec);
      return CompBehaviours_generateFrom(spec, all);
    };
    var getDomDefinition = function(info, bList, bData) {
      var definition = toDefinition(info);
      var infoModification = toModification(info);
      var baseModification = {
        "alloy.base.modification": infoModification
      };
      var modification = bList.length > 0 ? combine(bData, baseModification, bList, definition) : infoModification;
      return DomModification_merge(definition, modification);
    };
    var Component_getEvents = function(info, bList, bData) {
      var baseEvents = {
        "alloy.base.behaviour": CustomDefinition_toEvents(info)
      };
      return ComponentEvents_combine(bData, info.eventOrder, bList, baseEvents).getOrDie();
    };
    var build = function(spec) {
      var getMe = function() {
        return me;
      };
      var systemApi = Cell(singleton);
      var info = ValueSchema_getOrDie(toInfo(spec));
      var bBlob = CompBehaviours_generate(spec);
      var bList = getBehaviours(bBlob);
      var bData = getData(bBlob);
      var modDefinition = getDomDefinition(info, bList, bData);
      var item = renderToDom(modDefinition);
      var events = Component_getEvents(info, bList, bData);
      var subcomponents = Cell(info.components);
      var connect = function(newApi) {
        systemApi.set(newApi);
      };
      var disconnect = function() {
        systemApi.set(NoContextApi(getMe));
      };
      var syncComponents = function() {
        var children = Traverse_children(item);
        var subs = Arr_bind(children, function(child) {
          return systemApi
            .get()
            .getByDom(child)
            .fold(
              function() {
                return [];
              },
              function(c) {
                return [c];
              }
            );
        });
        subcomponents.set(subs);
      };
      var config = function(behaviour) {
        var b = bData;
        var f = isFunction(b[behaviour.name()]) ?
          b[behaviour.name()] :
          function() {
            throw new Error("Could not find " + behaviour.name() + " in " + JSON.stringify(spec, null, 2));
          };
        return f();
      };
      var hasConfigured = function(behaviour) {
        return isFunction(bData[behaviour.name()]);
      };
      var getApis = function() {
        return info.apis;
      };
      var readState = function(behaviourName) {
        return bData[behaviourName]()
          .map(function(b) {
            return b.state.readState();
          })
          .getOr("not enabled");
      };
      var me = {
        getSystem: systemApi.get,
        config: config,
        hasConfigured: hasConfigured,
        spec: constant(spec),
        readState: readState,
        getApis: getApis,
        connect: connect,
        disconnect: disconnect,
        element: constant(item),
        syncComponents: syncComponents,
        components: subcomponents.get,
        events: constant(events),
      };
      return me;
    };
    var buildSubcomponents = function(spec) {
      var components = Objects_readOr("components", [])(spec);
      return Arr_map(components, GuiFactory_build);
    };
    var buildFromSpec = function(userSpec) {
      var _a = CustomSpec_make(userSpec),
        specEvents = _a.events,
        spec = __rest(_a, ["events"]);
      var components = buildSubcomponents(spec);
      var completeSpec = __assign({}, spec, {
        events: __assign({}, DefaultEvents_namespaceObject, specEvents),
        components: components
      });
      return Result.value(build(completeSpec));
    };
    var GuiFactory_text = function(textContent) {
      var element = node_Element.fromText(textContent);
      return external({
        element: element
      });
    };
    var external = function(spec) {
      var extSpec = asRawOrDie("external.component", objOfOnly([FieldSchema_strict("element"), FieldSchema_option("uid")]), spec);
      var systemApi = Cell(NoContextApi());
      var connect = function(newApi) {
        systemApi.set(newApi);
      };
      var disconnect = function() {
        systemApi.set(
          NoContextApi(function() {
            return me;
          })
        );
      };
      extSpec.uid.each(function(uid) {
        writeOnly(extSpec.element, uid);
      });
      var me = {
        getSystem: systemApi.get,
        config: Option.none,
        hasConfigured: constant(false),
        connect: connect,
        disconnect: disconnect,
        getApis: function() {
          return {};
        },
        element: constant(extSpec.element),
        spec: constant(spec),
        readState: constant("No state"),
        syncComponents: Fun_noop,
        components: constant([]),
        events: constant({}),
      };
      return premade(me);
    };
    var GuiFactory_uids = Tagger_generate;
    var GuiFactory_build = function(spec) {
      return getPremade(spec).fold(
        function() {
          var userSpecWithUid = spec.hasOwnProperty("uid") ? spec : __assign({
            uid: GuiFactory_uids("")
          }, spec);
          return buildFromSpec(userSpecWithUid).getOrDie();
        },
        function(prebuilt) {
          return prebuilt;
        }
      );
    };
    var GuiFactory_premade = premade;
    var SketchBehaviours_field = function(name, forbidden) {
      return defaultedObjOf(
        name, {},
        Arr_map(forbidden, function(f) {
          return forbid(f.name(), "Cannot configure " + f.name() + " for " + name);
        }).concat([FieldSchema_state("dump", identity)])
      );
    };
    var SketchBehaviours_get = function(data) {
      return data.dump;
    };
    var augment = function(data, original) {
      return __assign({}, data.dump, Behaviour_derive(original));
    };
    var SketchBehaviours = {
      field: SketchBehaviours_field,
      augment: augment,
      get: SketchBehaviours_get
    };
    var menuFields = constant([FieldSchema_strict("menu"), FieldSchema_strict("selectedMenu")]);
    var itemFields = constant([FieldSchema_strict("item"), FieldSchema_strict("selectedItem")]);
    var MenuMarkers_schema = constant(objOf(itemFields().concat(menuFields())));
    var itemSchema = constant(objOf(itemFields()));
    var _initSize = strictObjOf("initSize", [FieldSchema_strict("numColumns"), FieldSchema_strict("numRows")]);
    var itemMarkers = function() {
      return strictOf("markers", itemSchema());
    };
    var menuMarkers = function() {
      return strictOf("markers", MenuMarkers_schema());
    };
    var tieredMenuMarkers = function() {
      return strictObjOf("markers", [FieldSchema_strict("backgroundMenu")].concat(menuFields()).concat(itemFields()));
    };
    var markers = function(required) {
      return strictObjOf("markers", Arr_map(required, FieldSchema_strict));
    };
    var onPresenceHandler = function(label, fieldName, presence) {
      var trace = getTrace();
      return ValueProcessor_field(
        fieldName,
        fieldName,
        presence,
        ValueSchema_valueOf(function(f) {
          return Result.value(function() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }
            logHandler(label, fieldName, trace);
            return f.apply(undefined, args);
          });
        })
      );
    };
    var onHandler = function(fieldName) {
      return onPresenceHandler("onHandler", fieldName, defaulted(Fun_noop));
    };
    var onKeyboardHandler = function(fieldName) {
      return onPresenceHandler("onKeyboardHandler", fieldName, defaulted(Option.none));
    };
    var onStrictHandler = function(fieldName) {
      return onPresenceHandler("onHandler", fieldName, strict());
    };
    var onStrictKeyboardHandler = function(fieldName) {
      return onPresenceHandler("onKeyboardHandler", fieldName, strict());
    };
    var Fields_output = function(name, value) {
      return FieldSchema_state(name, constant(value));
    };
    var Fields_snapshot = function(name) {
      return FieldSchema_state(name, identity);
    };
    var initSize = constant(_initSize);
    var _placeholder = "placeholder";
    var UiSubstitutes_adt = Adt.generate([{
      single: ["required", "valueThunk"]
    }, {
      multiple: ["required", "valueThunks"]
    }]);
    var isSubstitute = function(uiType) {
      return contains([_placeholder], uiType);
    };
    var subPlaceholder = function(owner, detail, compSpec, placeholders) {
      if (
        owner.exists(function(o) {
          return o !== compSpec.owner;
        })
      ) {
        return UiSubstitutes_adt.single(true, constant(compSpec));
      }
      return Objects_readOptFrom(placeholders, compSpec.name).fold(
        function() {
          throw new Error("Unknown placeholder component: " + compSpec.name + "\nKnown: [" + Obj_keys(placeholders) + "]\nNamespace: " + owner.getOr("none") + "\nSpec: " + JSON.stringify(compSpec, null, 2));
        },
        function(newSpec) {
          return newSpec.replace();
        }
      );
    };
    var scan = function(owner, detail, compSpec, placeholders) {
      if (compSpec.uiType === _placeholder) {
        return subPlaceholder(owner, detail, compSpec, placeholders);
      } else {
        return UiSubstitutes_adt.single(false, constant(compSpec));
      }
    };
    var substitute = function(owner, detail, compSpec, placeholders) {
      var base = scan(owner, detail, compSpec, placeholders);
      return base.fold(
        function(req, valueThunk) {
          var value = valueThunk(detail, compSpec.config, compSpec.validated);
          var childSpecs = Objects_readOptFrom(value, "components").getOr([]);
          var substituted = Arr_bind(childSpecs, function(c) {
            return substitute(owner, detail, c, placeholders);
          });
          return [__assign({}, value, {
            components: substituted
          })];
        },
        function(req, valuesThunk) {
          var values = valuesThunk(detail, compSpec.config, compSpec.validated);
          var preprocessor = compSpec.validated.preprocess.getOr(identity);
          return preprocessor(values);
        }
      );
    };
    var substituteAll = function(owner, detail, components, placeholders) {
      return Arr_bind(components, function(c) {
        return substitute(owner, detail, c, placeholders);
      });
    };
    var oneReplace = function(label, replacements) {
      var called = false;
      var used = function() {
        return called;
      };
      var replace = function() {
        if (called === true) {
          throw new Error("Trying to use the same placeholder more than once: " + label);
        }
        called = true;
        return replacements;
      };
      var required = function() {
        return replacements.fold(
          function(req, _) {
            return req;
          },
          function(req, _) {
            return req;
          }
        );
      };
      return {
        name: constant(label),
        required: required,
        used: used,
        replace: replace
      };
    };
    var substitutePlaces = function(owner, detail, components, placeholders) {
      var ps = Obj_map(placeholders, function(ph, name) {
        return oneReplace(name, ph);
      });
      var outcome = substituteAll(owner, detail, components, ps);
      Obj_each(ps, function(p) {
        if (p.used() === false && p.required()) {
          throw new Error("Placeholder: " + p.name() + " was not found in components list\nNamespace: " + owner.getOr("none") + "\nComponents: " + JSON.stringify(detail.components, null, 2));
        }
      });
      return outcome;
    };
    var singleReplace = function(detail, p) {
      var replacement = p;
      return replacement.fold(
        function(req, valueThunk) {
          return [valueThunk(detail)];
        },
        function(req, valuesThunk) {
          return valuesThunk(detail);
        }
      );
    };
    var single = UiSubstitutes_adt.single;
    var multiple = UiSubstitutes_adt.multiple;
    var placeholder = constant(_placeholder);
    var PartType_adt = Adt.generate([{
      required: ["data"]
    }, {
      external: ["data"]
    }, {
      optional: ["data"]
    }, {
      group: ["data"]
    }]);
    var fFactory = FieldSchema_defaulted("factory", {
      sketch: identity
    });
    var fSchema = FieldSchema_defaulted("schema", []);
    var fName = FieldSchema_strict("name");
    var fPname = ValueProcessor_field(
      "pname",
      "pname",
      defaultedThunk(function(typeSpec) {
        return "<alloy." + generate(typeSpec.name) + ">";
      }),
      ValueSchema_anyValue()
    );
    var fGroupSchema = FieldSchema_state("schema", function() {
      return [FieldSchema_option("preprocess")];
    });
    var fDefaults = FieldSchema_defaulted("defaults", constant({}));
    var fOverrides = FieldSchema_defaulted("overrides", constant({}));
    var requiredSpec = objOf([fFactory, fSchema, fName, fPname, fDefaults, fOverrides]);
    var externalSpec = objOf([fFactory, fSchema, fName, fDefaults, fOverrides]);
    var optionalSpec = objOf([fFactory, fSchema, fName, fPname, fDefaults, fOverrides]);
    var groupSpec = objOf([fFactory, fGroupSchema, fName, FieldSchema_strict("unit"), fPname, fDefaults, fOverrides]);
    var asNamedPart = function(part) {
      return part.fold(Option.some, Option.none, Option.some, Option.some);
    };
    var PartType_name = function(part) {
      var get = function(data) {
        return data.name;
      };
      return part.fold(get, get, get, get);
    };
    var asCommon = function(part) {
      return part.fold(identity, identity, identity, identity);
    };
    var convert = function(adtConstructor, partSchema) {
      return function(spec) {
        var data = asRawOrDie("Converting part type", partSchema, spec);
        return adtConstructor(data);
      };
    };
    var PartType_required = convert(PartType_adt.required, requiredSpec);
    var PartType_external = convert(PartType_adt.external, externalSpec);
    var PartType_optional = convert(PartType_adt.optional, optionalSpec);
    var group = convert(PartType_adt.group, groupSpec);
    var PartType_original = constant("entirety");
    var PartSubstitutes_combine = function(detail, data, partSpec, partValidated) {
      var spec = partSpec;
      return deepMerge(data.defaults(detail, partSpec, partValidated), partSpec, {
        uid: detail.partUids[data.name]
      }, data.overrides(detail, partSpec, partValidated));
    };
    var PartSubstitutes_subs = function(owner, detail, parts) {
      var internals = {};
      var externals = {};
      Arr_each(parts, function(part) {
        part.fold(
          function(data) {
            internals[data.pname] = single(true, function(detail, partSpec, partValidated) {
              return data.factory.sketch(PartSubstitutes_combine(detail, data, partSpec, partValidated));
            });
          },
          function(data) {
            var partSpec = detail.parts[data.name];
            externals[data.name] = constant(data.factory.sketch(PartSubstitutes_combine(detail, data, partSpec[PartType_original()]), partSpec));
          },
          function(data) {
            internals[data.pname] = single(false, function(detail, partSpec, partValidated) {
              return data.factory.sketch(PartSubstitutes_combine(detail, data, partSpec, partValidated));
            });
          },
          function(data) {
            internals[data.pname] = multiple(true, function(detail, _partSpec, _partValidated) {
              var units = detail[data.name];
              return Arr_map(units, function(u) {
                return data.factory.sketch(deepMerge(data.defaults(detail, u, _partValidated), u, data.overrides(detail, u)));
              });
            });
          }
        );
      });
      return {
        internals: constant(internals),
        externals: constant(externals)
      };
    };
    var AlloyParts_generate = function(owner, parts) {
      var r = {};
      Arr_each(parts, function(part) {
        asNamedPart(part).each(function(np) {
          var g = doGenerateOne(owner, np.pname);
          r[np.name] = function(config) {
            var validated = asRawOrDie("Part: " + np.name + " in " + owner, objOf(np.schema), config);
            return __assign({}, g, {
              config: config,
              validated: validated
            });
          };
        });
      });
      return r;
    };
    var doGenerateOne = function(owner, pname) {
      return {
        uiType: placeholder(),
        owner: owner,
        name: pname
      };
    };
    var generateOne = function(owner, pname, config) {
      return {
        uiType: placeholder(),
        owner: owner,
        name: pname,
        config: config,
        validated: {}
      };
    };
    var schemas = function(parts) {
      return Arr_bind(parts, function(part) {
        return part
          .fold(Option.none, Option.some, Option.none, Option.none)
          .map(function(data) {
            return strictObjOf(data.name, data.schema.concat([Fields_snapshot(PartType_original())]));
          })
          .toArray();
      });
    };
    var names = function(parts) {
      return Arr_map(parts, PartType_name);
    };
    var substitutes = function(owner, detail, parts) {
      return PartSubstitutes_subs(owner, detail, parts);
    };
    var AlloyParts_components = function(owner, detail, internals) {
      return substitutePlaces(Option.some(owner), detail, detail.components, internals);
    };
    var getPart = function(component, detail, partKey) {
      var uid = detail.partUids[partKey];
      return component.getSystem().getByUid(uid).toOption();
    };
    var getPartOrDie = function(component, detail, partKey) {
      return getPart(component, detail, partKey).getOrDie("Could not find part: " + partKey);
    };
    var getParts = function(component, detail, partKeys) {
      var r = {};
      var uids = detail.partUids;
      var system = component.getSystem();
      Arr_each(partKeys, function(pk) {
        r[pk] = system.getByUid(uids[pk]);
      });
      return Obj_map(r, constant);
    };
    var getAllParts = function(component, detail) {
      var system = component.getSystem();
      return Obj_map(detail.partUids, function(pUid, k) {
        return constant(system.getByUid(pUid));
      });
    };
    var getAllPartNames = function(detail) {
      return Obj_keys(detail.partUids);
    };
    var getPartsOrDie = function(component, detail, partKeys) {
      var r = {};
      var uids = detail.partUids;
      var system = component.getSystem();
      Arr_each(partKeys, function(pk) {
        r[pk] = system.getByUid(uids[pk]).getOrDie();
      });
      return Obj_map(r, constant);
    };
    var defaultUids = function(baseUid, partTypes) {
      var partNames = names(partTypes);
      return Objects_wrapAll(
        Arr_map(partNames, function(pn) {
          return {
            key: pn,
            value: baseUid + "-" + pn
          };
        })
      );
    };
    var defaultUidsSchema = function(partTypes) {
      return ValueProcessor_field(
        "partUids",
        "partUids",
        mergeWithThunk(function(spec) {
          return defaultUids(spec.uid, partTypes);
        }),
        ValueSchema_anyValue()
      );
    };
    var getPartsSchema = function(partNames, _optPartNames, _owner) {
      var owner = _owner !== undefined ? _owner : "Unknown owner";
      var fallbackThunk = function() {
        return [Fields_output("partUids", {})];
      };
      var optPartNames = _optPartNames !== undefined ? _optPartNames : fallbackThunk();
      if (partNames.length === 0 && optPartNames.length === 0) {
        return fallbackThunk();
      }
      var partsSchema = strictObjOf(
        "parts",
        flatten([
          Arr_map(partNames, FieldSchema_strict),
          Arr_map(optPartNames, function(optPart) {
            return FieldSchema_defaulted(
              optPart,
              single(false, function() {
                throw new Error("The optional part: " + optPart + " was not specified in the config, but it was used in components");
              })
            );
          }),
        ])
      );
      var partUidsSchema = FieldSchema_state("partUids", function(spec) {
        if (!Objects_hasKey(spec, "parts")) {
          throw new Error("Part uid definition for owner: " + owner + ' requires "parts"\nExpected parts: ' + partNames.join(", ") + "\nSpec: " + JSON.stringify(spec, null, 2));
        }
        var uids = Obj_map(spec.parts, function(v, k) {
          return Objects_readOptFrom(v, "uid").getOrThunk(function() {
            return spec.uid + "-" + k;
          });
        });
        return uids;
      });
      return [partsSchema, partUidsSchema];
    };
    var getPartUidsSchema = function(label, spec) {
      return FieldSchema_state("partUids", function(spec) {
        if (!Objects_hasKey(spec, "parts")) {
          throw new Error("Part uid definition for owner: " + label + ' requires "parts\nSpec: ' + JSON.stringify(spec, null, 2));
        }
        var uids = Obj_map(spec.parts, function(v, k) {
          return Objects_readOptFrom(v, "uid").getOrThunk(function() {
            return spec.uid + "-" + k;
          });
        });
        return uids;
      });
    };
    var SpecSchema_base = function(label, partSchemas, partUidsSchemas, spec) {
      var ps = partSchemas.length > 0 ? [strictObjOf("parts", partSchemas)] : [];
      return ps.concat([FieldSchema_strict("uid"), FieldSchema_defaulted("dom", {}), FieldSchema_defaulted("components", []), Fields_snapshot("originalSpec"), FieldSchema_defaulted("debug.sketcher", {})]).concat(partUidsSchemas);
    };
    var SpecSchema_asRawOrDie = function(label, schema, spec, partSchemas, partUidsSchemas) {
      var baseS = SpecSchema_base(label, partSchemas, partUidsSchemas, spec);
      return asRawOrDie(label + " [SpecSchema]", objOfOnly(baseS.concat(schema)), spec);
    };
    var SpecSchema_asStructOrDie = function(label, schema, spec, partSchemas, partUidsSchemas) {
      var baseS = SpecSchema_base(label, partSchemas, partUidsSchemas, spec);
      return asStructOrDie(label + " [SpecSchema]", objOfOnly(baseS.concat(schema)), spec);
    };
    var UiSketcher_single = function(owner, schema, factory, spec) {
      var specWithUid = supplyUid(spec);
      var detail = SpecSchema_asRawOrDie(owner, schema, specWithUid, [], []);
      return factory(detail, specWithUid);
    };
    var composite = function(owner, schema, partTypes, factory, spec) {
      var specWithUid = supplyUid(spec);
      var partSchemas = schemas(partTypes);
      var partUidsSchema = defaultUidsSchema(partTypes);
      var detail = SpecSchema_asRawOrDie(owner, schema, specWithUid, partSchemas, [partUidsSchema]);
      var subs = substitutes(owner, detail, partTypes);
      var components = AlloyParts_components(owner, detail, subs.internals());
      return factory(detail, components, specWithUid, subs.externals());
    };
    var supplyUid = function(spec) {
      return spec.hasOwnProperty("uid") ? spec : __assign({}, spec, {
        uid: Tagger_generate("uid")
      });
    };

    function isSketchSpec(spec) {
      return spec.uid !== undefined;
    }
    var singleSchema = objOfOnly([FieldSchema_strict("name"), FieldSchema_strict("factory"), FieldSchema_strict("configFields"), FieldSchema_defaulted("apis", {}), FieldSchema_defaulted("extraApis", {})]);
    var compositeSchema = objOfOnly([
      FieldSchema_strict("name"),
      FieldSchema_strict("factory"),
      FieldSchema_strict("configFields"),
      FieldSchema_strict("partFields"),
      FieldSchema_defaulted("apis", {}),
      FieldSchema_defaulted("extraApis", {}),
    ]);
    var Sketcher_single = function(rawConfig) {
      var config = asRawOrDie("Sketcher for " + rawConfig.name, singleSchema, rawConfig);
      var sketch = function(spec) {
        return UiSketcher_single(config.name, config.configFields, config.factory, spec);
      };
      var apis = Obj_map(config.apis, makeApi);
      var extraApis = Obj_map(config.extraApis, function(f, k) {
        return markAsExtraApi(f, k);
      });
      return __assign({
        name: constant(config.name),
        partFields: constant([]),
        configFields: constant(config.configFields),
        sketch: sketch
      }, apis, extraApis);
    };
    var Sketcher_composite = function(rawConfig) {
      var config = asRawOrDie("Sketcher for " + rawConfig.name, compositeSchema, rawConfig);
      var sketch = function(spec) {
        return composite(config.name, config.configFields, config.partFields, config.factory, spec);
      };
      var parts = AlloyParts_generate(config.name, config.partFields);
      var apis = Obj_map(config.apis, makeApi);
      var extraApis = Obj_map(config.extraApis, function(f, k) {
        return markAsExtraApi(f, k);
      });
      return __assign({
        name: constant(config.name),
        partFields: constant(config.partFields),
        configFields: constant(config.configFields),
        sketch: sketch,
        parts: constant(parts)
      }, apis, extraApis);
    };
    var Container_factory = function(detail) {
      var _a = detail.dom,
        attributes = _a.attributes,
        domWithoutAttributes = __rest(_a, ["attributes"]);
      return {
        uid: detail.uid,
        dom: __assign({
          tag: "div",
          attributes: __assign({
            role: "presentation"
          }, attributes)
        }, domWithoutAttributes),
        components: detail.components,
        behaviours: SketchBehaviours_get(detail.containerBehaviours),
        events: detail.events,
        domModification: detail.domModification,
        eventOrder: detail.eventOrder,
      };
    };
    var Container = Sketcher_single({
      name: "Container",
      factory: Container_factory,
      configFields: [
        FieldSchema_defaulted("components", []),
        SketchBehaviours_field("containerBehaviours", []),
        FieldSchema_defaulted("events", {}),
        FieldSchema_defaulted("domModification", {}),
        FieldSchema_defaulted("eventOrder", {}),
      ],
    });
    var Gui_create = function() {
      var root = GuiFactory_build(Container.sketch({
        dom: {
          tag: "div"
        }
      }));
      return takeover(root);
    };
    var takeover = function(root) {
      var isAboveRoot = function(el) {
        return Traverse_parent(root.element()).fold(
          function() {
            return true;
          },
          function(parent) {
            return Compare_eq(el, parent);
          }
        );
      };
      var registry = Registry();
      var lookup = function(eventName, target) {
        return registry.find(isAboveRoot, eventName, target);
      };
      var domEvents = setup(root.element(), {
        triggerEvent: function(eventName, event) {
          return monitorEvent(eventName, event.target(), function(logger) {
            return triggerUntilStopped(lookup, eventName, event, logger);
          });
        },
      });
      var systemApi = {
        debugInfo: constant("real"),
        triggerEvent: function(eventName, target, data) {
          monitorEvent(eventName, target, function(logger) {
            triggerOnUntilStopped(lookup, eventName, data, target, logger);
          });
        },
        triggerFocus: function(target, originator) {
          Tagger_read(target).fold(
            function() {
              Focus_focus(target);
            },
            function(_alloyId) {
              monitorEvent(SystemEvents_focus(), target, function(logger) {
                triggerHandler(lookup, SystemEvents_focus(), {
                  originator: constant(originator),
                  kill: Fun_noop,
                  prevent: Fun_noop,
                  target: constant(target)
                }, target, logger);
              });
            }
          );
        },
        triggerEscape: function(comp, simulatedEvent) {
          systemApi.triggerEvent("keydown", comp.element(), simulatedEvent.event());
        },
        getByUid: function(uid) {
          return getByUid(uid);
        },
        getByDom: function(elem) {
          return getByDom(elem);
        },
        build: GuiFactory_build,
        addToGui: function(c) {
          add(c);
        },
        removeFromGui: function(c) {
          remove(c);
        },
        addToWorld: function(c) {
          addToWorld(c);
        },
        removeFromWorld: function(c) {
          removeFromWorld(c);
        },
        broadcast: function(message) {
          broadcast(message);
        },
        broadcastOn: function(channels, message) {
          broadcastOn(channels, message);
        },
        broadcastEvent: function(eventName, event) {
          broadcastEvent(eventName, event);
        },
        isConnected: constant(true),
      };
      var addToWorld = function(component) {
        component.connect(systemApi);
        if (!isText(component.element())) {
          registry.register(component);
          Arr_each(component.components(), addToWorld);
          systemApi.triggerEvent(systemInit(), component.element(), {
            target: constant(component.element())
          });
        }
      };
      var removeFromWorld = function(component) {
        if (!isText(component.element())) {
          Arr_each(component.components(), removeFromWorld);
          registry.unregister(component);
        }
        component.disconnect();
      };
      var add = function(component) {
        attach(root, component);
      };
      var remove = function(component) {
        detach(component);
      };
      var destroy = function() {
        domEvents.unbind();
        Remove_remove(root.element());
      };
      var broadcastData = function(data) {
        var receivers = registry.filter(receive());
        Arr_each(receivers, function(receiver) {
          var descHandler = receiver.descHandler();
          var handler = getCurried(descHandler);
          handler(data);
        });
      };
      var broadcast = function(message) {
        broadcastData({
          universal: constant(true),
          data: constant(message)
        });
      };
      var broadcastOn = function(channels, message) {
        broadcastData({
          universal: constant(false),
          channels: constant(channels),
          data: constant(message)
        });
      };
      var broadcastEvent = function(eventName, event) {
        var listeners = registry.filter(eventName);
        return Triggers_broadcast(listeners, event);
      };
      var getByUid = function(uid) {
        return registry.getById(uid).fold(function() {
          return Result.error(new Error('Could not find component with uid: "' + uid + '" in system.'));
        }, Result.value);
      };
      var getByDom = function(elem) {
        var uid = Tagger_read(elem).getOr("not found");
        return getByUid(uid);
      };
      addToWorld(root);
      return {
        root: constant(root),
        element: root.element,
        destroy: destroy,
        add: add,
        remove: remove,
        getByUid: getByUid,
        getByDom: getByDom,
        addToWorld: addToWorld,
        removeFromWorld: removeFromWorld,
        broadcast: broadcast,
        broadcastOn: broadcastOn,
        broadcastEvent: broadcastEvent,
      };
    };
    var exhibit = function(base, posConfig) {
      return DomModification_nu({
        classes: [],
        styles: posConfig.useFixed ? {} : {
          position: "relative"
        }
      });
    };
    var attached = function(element, scope) {
      var doc = scope || node_Element.fromDom(document$1.documentElement);
      return PredicateFind_ancestor(element, curry(Compare_eq, doc)).isSome();
    };
    var windowOf = function(element) {
      var dom = element.dom();
      if (dom === dom.window && element instanceof Window$1) {
        return element;
      }
      return isDocument(element) ? dom.defaultView || dom.parentWindow : null;
    };
    var Position_r = function(left, top) {
      var translate = function(x, y) {
        return Position_r(left + x, top + y);
      };
      return {
        left: constant(left),
        top: constant(top),
        translate: translate
      };
    };
    var Position = Position_r;
    var boxPosition = function(dom) {
      var box = dom.getBoundingClientRect();
      return Position(box.left, box.top);
    };
    var firstDefinedOrZero = function(a, b) {
      return a !== undefined ? a : b !== undefined ? b : 0;
    };
    var absolute = function(element) {
      var doc = element.dom().ownerDocument;
      var body = doc.body;
      var win = windowOf(node_Element.fromDom(doc));
      var html = doc.documentElement;
      var scrollTop = firstDefinedOrZero(win.pageYOffset, html.scrollTop);
      var scrollLeft = firstDefinedOrZero(win.pageXOffset, html.scrollLeft);
      var clientTop = firstDefinedOrZero(html.clientTop, body.clientTop);
      var clientLeft = firstDefinedOrZero(html.clientLeft, body.clientLeft);
      return viewport(element).translate(scrollLeft - clientLeft, scrollTop - clientTop);
    };
    var Location_relative = function(element) {
      var dom = element.dom();
      return Position(dom.offsetLeft, dom.offsetTop);
    };
    var viewport = function(element) {
      var dom = element.dom();
      var doc = dom.ownerDocument;
      var body = doc.body;
      var html = node_Element.fromDom(doc.documentElement);
      if (body === dom) {
        return Position(body.offsetLeft, body.offsetTop);
      }
      if (!attached(element, html)) {
        return Position(0, 0);
      }
      return boxPosition(dom);
    };
    var isSafari = api_PlatformDetection.detect().browser.isSafari();
    var Scroll_get = function(_DOC) {
      var doc = _DOC !== undefined ? _DOC.dom() : document$1;
      var x = doc.body.scrollLeft || doc.documentElement.scrollLeft;
      var y = doc.body.scrollTop || doc.documentElement.scrollTop;
      return Position(x, y);
    };
    var to = function(x, y, _DOC) {
      var doc = _DOC !== undefined ? _DOC.dom() : document$1;
      var win = doc.defaultView;
      win.scrollTo(x, y);
    };
    var by = function(x, y, _DOC) {
      var doc = _DOC !== undefined ? _DOC.dom() : document$1;
      var win = doc.defaultView;
      win.scrollBy(x, y);
    };
    var setToElement = function(win, element) {
      var pos = absolute(element);
      var doc = node_Element.fromDom(win.document);
      to(pos.left(), pos.top(), doc);
    };
    var Scroll_preserve = function(doc, f) {
      var before = Scroll_get(doc);
      f();
      var after = Scroll_get(doc);
      if (before.top() !== after.top() || before.left() !== after.left()) {
        to(before.left(), before.top(), doc);
      }
    };
    var Scroll_capture = function(doc) {
      var previous = Option.none();
      var save = function() {
        previous = Option.some(Scroll_get(doc));
      };
      var restore = function() {
        previous.each(function(p) {
          to(p.left(), p.top(), doc);
        });
      };
      save();
      return {
        save: save,
        restore: restore
      };
    };
    var intoView = function(element, alignToTop) {
      if (isSafari && isFunction(element.dom().scrollIntoViewIfNeeded)) {
        element.dom().scrollIntoViewIfNeeded(false);
      } else {
        element.dom().scrollIntoView(alignToTop);
      }
    };
    var intoViewIfNeeded = function(element, container) {
      var containerBox = container.dom().getBoundingClientRect();
      var elementBox = element.dom().getBoundingClientRect();
      if (elementBox.top < containerBox.top) {
        intoView(element, true);
      } else if (elementBox.bottom > containerBox.bottom) {
        intoView(element, false);
      }
    };
    var scrollBarWidth = function() {
      var scrollDiv = node_Element.fromHtml('<div style="width: 100px; height: 100px; overflow: scroll; position: absolute; top: -9999px;"></div>');
      Insert_after(Body_body(), scrollDiv);
      var w = scrollDiv.dom().offsetWidth - scrollDiv.dom().clientWidth;
      Remove_remove(scrollDiv);
      return w;
    };
    var Dimension = function(name, getOffset) {
      var set = function(element, h) {
        if (!isNumber(h) && !h.match(/^[0-9]+$/)) {
          throw new Error(name + ".set accepts only positive integer values. Value was " + h);
        }
        var dom = element.dom();
        if (isSupported(dom)) {
          dom.style[name] = h + "px";
        }
      };
      var get = function(element) {
        var r = getOffset(element);
        if (r <= 0 || r === null) {
          var css = Css_get(element, name);
          return parseFloat(css) || 0;
        }
        return r;
      };
      var getOuter = get;
      var aggregate = function(element, properties) {
        return foldl(
          properties,
          function(acc, property) {
            var val = Css_get(element, property);
            var value = val === undefined ? 0 : parseInt(val, 10);
            return isNaN(value) ? acc : acc + value;
          },
          0
        );
      };
      var max = function(element, value, properties) {
        var cumulativeInclusions = aggregate(element, properties);
        var absoluteMax = value > cumulativeInclusions ? value - cumulativeInclusions : 0;
        return absoluteMax;
      };
      return {
        set: set,
        get: get,
        getOuter: getOuter,
        aggregate: aggregate,
        max: max
      };
    };
    var Width_api = Dimension("width", function(element) {
      return element.dom().offsetWidth;
    });
    var Width_set = function(element, h) {
      Width_api.set(element, h);
    };
    var Width_get = function(element) {
      return Width_api.get(element);
    };
    var Width_getOuter = function(element) {
      return Width_api.getOuter(element);
    };
    var setMax = function(element, value) {
      var inclusions = ["margin-left", "border-left-width", "padding-left", "padding-right", "border-right-width", "margin-right"];
      var absMax = Width_api.max(element, value, inclusions);
      Css_set(element, "max-width", absMax + "px");
    };
    var Height_api = Dimension("height", function(element) {
      var dom = element.dom();
      return inBody(element) ? dom.getBoundingClientRect().height : dom.offsetHeight;
    });
    var Height_set = function(element, h) {
      Height_api.set(element, h);
    };
    var Height_get = function(element) {
      return Height_api.get(element);
    };
    var Height_getOuter = function(element) {
      return Height_api.getOuter(element);
    };
    var Height_setMax = function(element, value) {
      var inclusions = ["margin-top", "border-top-width", "padding-top", "padding-bottom", "border-bottom-width", "margin-bottom"];
      var absMax = Height_api.max(element, value, inclusions);
      Css_set(element, "max-height", absMax + "px");
    };
    var Reposition_decision = MixedBag(["x", "y", "width", "height", "maxHeight", "direction", "classes", "label", "candidateYforTest"], []);
    var Reposition_css = Immutable("position", "left", "top", "right", "bottom");
    var Direction_adt = Adt.generate([{
      southeast: []
    }, {
      southwest: []
    }, {
      northeast: []
    }, {
      northwest: []
    }, {
      south: []
    }, {
      north: []
    }, {
      east: []
    }, {
      west: []
    }]);
    var cata = function(subject, southeast, southwest, northeast, northwest, south, north, east, west) {
      return subject.fold(southeast, southwest, northeast, northwest, south, north, east, west);
    };
    var cataVertical = function(subject, south, middle, north) {
      return subject.fold(south, south, north, north, south, north, middle, middle);
    };
    var southeast = Direction_adt.southeast;
    var southwest = Direction_adt.southwest;
    var northeast = Direction_adt.northeast;
    var northwest = Direction_adt.northwest;
    var south = Direction_adt.south;
    var north = Direction_adt.north;
    var east = Direction_adt.east;
    var west = Direction_adt.west;
    var pointed = Immutable("point", "width", "height");
    var Boxes_rect = Immutable("x", "y", "width", "height");
    var Boxes_bounds = function(x, y, width, height) {
      return {
        x: constant(x),
        y: constant(y),
        width: constant(width),
        height: constant(height),
        right: constant(x + width),
        bottom: constant(y + height)
      };
    };
    var Boxes_box = function(element) {
      var xy = absolute(element);
      var w = Width_getOuter(element);
      var h = Height_getOuter(element);
      return Boxes_bounds(xy.left(), xy.top(), w, h);
    };
    var walkUp = function(navigation, doc) {
      var frame = navigation.view(doc);
      return frame.fold(constant([]), function(f) {
        var parent = navigation.owner(f);
        var rest = walkUp(navigation, parent);
        return [f].concat(rest);
      });
    };
    var pathTo = function(element, navigation) {
      var d = navigation.owner(element);
      var paths = walkUp(navigation, d);
      return Option.some(paths);
    };
    var view = function(doc) {
      var element = doc.dom() === document$1 ? Option.none() : Option.from(doc.dom().defaultView.frameElement);
      return element.map(node_Element.fromDom);
    };
    var Navigation_owner = function(element) {
      return Traverse_owner(element);
    };
    var OuterPosition_find = function(element) {
      var doc = node_Element.fromDom(document$1);
      var scroll = Scroll_get(doc);
      var path = pathTo(element, Navigation_namespaceObject);
      return path.fold(curry(absolute, element), function(frames) {
        var offset = viewport(element);
        var r = foldr(
          frames,
          function(b, a) {
            var loc = viewport(a);
            return {
              left: b.left + loc.left(),
              top: b.top + loc.top()
            };
          }, {
            left: 0,
            top: 0
          }
        );
        return Position(r.left + offset.left() + scroll.left(), r.top + offset.top() + scroll.top());
      });
    };
    var Boxes_absolute = function(element) {
      var position = OuterPosition_find(element);
      var width = Width_getOuter(element);
      var height = Height_getOuter(element);
      return Boxes_bounds(position.left(), position.top(), width, height);
    };
    var Boxes_win = function() {
      var width = window$1.innerWidth;
      var height = window$1.innerHeight;
      var doc = node_Element.fromDom(document$1);
      var scroll = Scroll_get(doc);
      return Boxes_bounds(scroll.left(), scroll.top(), width, height);
    };
    var Origins_adt = Adt.generate([{
      none: []
    }, {
      relative: ["x", "y", "width", "height"]
    }, {
      fixed: ["x", "y", "width", "height"]
    }]);
    var positionWithDirection = function(posName, decision, x, y, width, height) {
      var decisionX = decision.x() - x;
      var decisionY = decision.y() - y;
      var decisionWidth = decision.width();
      var decisionHeight = decision.height();
      var decisionRight = width - (decisionX + decisionWidth);
      var decisionBottom = height - (decisionY + decisionHeight);
      var left = Option.some(decisionX);
      var top = Option.some(decisionY);
      var right = Option.some(decisionRight);
      var bottom = Option.some(decisionBottom);
      var none = Option.none();
      return cata(
        decision.direction(),
        function() {
          return Reposition_css(posName, left, top, none, none);
        },
        function() {
          return Reposition_css(posName, none, top, right, none);
        },
        function() {
          return Reposition_css(posName, left, none, none, bottom);
        },
        function() {
          return Reposition_css(posName, none, none, right, bottom);
        },
        function() {
          return Reposition_css(posName, left, top, none, none);
        },
        function() {
          return Reposition_css(posName, left, none, none, bottom);
        },
        function() {
          return Reposition_css(posName, left, top, none, none);
        },
        function() {
          return Reposition_css(posName, none, top, right, none);
        }
      );
    };
    var Origins_reposition = function(origin, decision) {
      return origin.fold(
        function() {
          return Reposition_css("absolute", Option.some(decision.x()), Option.some(decision.y()), Option.none(), Option.none());
        },
        function(x, y, width, height) {
          return positionWithDirection("absolute", decision, x, y, width, height);
        },
        function(x, y, width, height) {
          return positionWithDirection("fixed", decision, x, y, width, height);
        }
      );
    };
    var toBox = function(origin, element) {
      var rel = curry(OuterPosition_find, element);
      var position = origin.fold(rel, rel, function() {
        var scroll = Scroll_get();
        return OuterPosition_find(element).translate(-scroll.left(), -scroll.top());
      });
      var width = Width_getOuter(element);
      var height = Height_getOuter(element);
      return Boxes_bounds(position.left(), position.top(), width, height);
    };
    var Origins_viewport = function(origin, getBounds) {
      return getBounds.fold(
        function() {
          return origin.fold(Boxes_win, Boxes_win, Boxes_bounds);
        },
        function(b) {
          return origin.fold(b, b, Boxes_bounds);
        }
      );
    };
    var Origins_translate = function(origin, x, y) {
      var pos = Position(x, y);
      var removeScroll = function() {
        var outerScroll = Scroll_get();
        return pos.translate(-outerScroll.left(), -outerScroll.top());
      };
      return origin.fold(constant(pos), constant(pos), removeScroll);
    };
    var Origins_cata = function(subject, onNone, onRelative, onFixed) {
      return subject.fold(onNone, onRelative, onFixed);
    };
    var Origins_none = Origins_adt.none;
    var Origins_relative = Origins_adt.relative;
    var fixed = Origins_adt.fixed;
    var Anchor_anchor = Immutable("anchorBox", "origin");
    var Anchor_element = function(anchorElement, origin) {
      var anchorBox = toBox(origin, anchorElement);
      return Anchor_anchor(anchorBox, origin);
    };
    var Anchor_box = function(anchorBox, origin) {
      return Anchor_anchor(anchorBox, origin);
    };
    var Bounder_adt = Adt.generate([{
      fit: ["reposition"]
    }, {
      nofit: ["reposition", "deltaW", "deltaH"]
    }]);
    var attempt = function(candidate, width, height, bounds) {
      var candidateX = candidate.x();
      var candidateY = candidate.y();
      var bubbleLeft = candidate.bubble().offset().left();
      var bubbleTop = candidate.bubble().offset().top();
      var boundsX = bounds.x();
      var boundsY = bounds.y();
      var boundsWidth = bounds.width();
      var boundsHeight = bounds.height();
      var newX = candidateX + bubbleLeft;
      var newY = candidateY + bubbleTop;
      var xInBounds = newX >= boundsX;
      var yInBounds = newY >= boundsY;
      var originInBounds = xInBounds && yInBounds;
      var xFit = newX + width <= boundsX + boundsWidth;
      var yFit = newY + height <= boundsY + boundsHeight;
      var sizeInBounds = xFit && yFit;
      var deltaW = xInBounds ? Math.min(width, boundsX + boundsWidth - newX) : Math.abs(boundsX - (newX + width));
      var deltaH = yInBounds ? Math.min(height, boundsY + boundsHeight - newY) : Math.abs(boundsY - (newY + height));
      var maxX = bounds.x() + bounds.width();
      var minX = Math.max(bounds.x(), newX);
      var limitX = Math.min(minX, maxX);
      var limitY = yInBounds ? newY : newY + (height - deltaH);
      var upAvailable = constant(limitY + deltaH - boundsY);
      var downAvailable = constant(boundsY + boundsHeight - limitY);
      var maxHeight = cataVertical(candidate.direction(), downAvailable, downAvailable, upAvailable);
      var reposition = Reposition_decision({
        x: limitX,
        y: limitY,
        width: deltaW,
        height: deltaH,
        maxHeight: maxHeight,
        direction: candidate.direction(),
        classes: {
          on: candidate.bubble().classesOn(),
          off: candidate.bubble().classesOff()
        },
        label: candidate.label(),
        candidateYforTest: newY,
      });
      return originInBounds && sizeInBounds ? Bounder_adt.fit(reposition) : Bounder_adt.nofit(reposition, deltaW, deltaH);
    };
    var attempts = function(candidates, anchorBox, elementBox, bubbles, bounds) {
      var panelWidth = elementBox.width();
      var panelHeight = elementBox.height();
      var attemptBestFit = function(layout, reposition, deltaW, deltaH) {
        var next = layout(anchorBox, elementBox, bubbles);
        var attemptLayout = attempt(next, panelWidth, panelHeight, bounds);
        return attemptLayout.fold(Bounder_adt.fit, function(newReposition, newDeltaW, newDeltaH) {
          var improved = newDeltaH > deltaH || newDeltaW > deltaW;
          return improved ? Bounder_adt.nofit(newReposition, newDeltaW, newDeltaH) : Bounder_adt.nofit(reposition, deltaW, deltaH);
        });
      };
      var abc = foldl(
        candidates,
        function(b, a) {
          var bestNext = curry(attemptBestFit, a);
          return b.fold(Bounder_adt.fit, bestNext);
        },
        Bounder_adt.nofit(
          Reposition_decision({
            x: anchorBox.x(),
            y: anchorBox.y(),
            width: elementBox.width(),
            height: elementBox.height(),
            maxHeight: elementBox.height(),
            direction: southeast(),
            classes: [],
            label: "none",
            candidateYforTest: anchorBox.y(),
          }), -1, -1
        )
      );
      return abc.fold(identity, identity);
    };
    var elementSize = function(p) {
      return {
        width: constant(Width_getOuter(p)),
        height: constant(Height_getOuter(p))
      };
    };
    var layout = function(anchorBox, element, bubbles, options) {
      Css_remove(element, "max-height");
      var elementBox = elementSize(element);
      return attempts(options.preference(), anchorBox, elementBox, bubbles, options.bounds());
    };
    var setClasses = function(element, decision) {
      var classInfo = decision.classes();
      Classes_remove(element, classInfo.off);
      Classes_add(element, classInfo.on);
    };
    var setHeight = function(element, decision, options) {
      var maxHeightFunction = options.maxHeightFunction();
      maxHeightFunction(element, decision.maxHeight());
    };
    var Callouts_position = function(element, decision, options) {
      var addPx = function(num) {
        return num + "px";
      };
      var newPosition = Origins_reposition(options.origin(), decision);
      setOptions(element, {
        position: Option.some(newPosition.position()),
        left: newPosition.left().map(addPx),
        top: newPosition.top().map(addPx),
        right: newPosition.right().map(addPx),
        bottom: newPosition.bottom().map(addPx)
      });
    };
    var setMaxHeight = function(element, maxHeight) {
      Height_setMax(element, Math.floor(maxHeight));
    };
    var anchored = constant(function(element, available) {
      setMaxHeight(element, available);
      Css_setAll(element, {
        "overflow-x": "hidden",
        "overflow-y": "auto"
      });
    });
    var expandable = constant(function(element, available) {
      setMaxHeight(element, available);
    });
    var reparteeOptions = MixedBag(["bounds", "origin", "preference", "maxHeightFunction"], []);
    var defaultOr = function(options, key, dephault) {
      return options[key] === undefined ? dephault : options[key];
    };
    var simple = function(anchor, element, bubble, layouts, getBounds, overrideOptions) {
      var maxHeightFunction = defaultOr(overrideOptions, "maxHeightFunction", anchored());
      var anchorBox = anchor.anchorBox();
      var origin = anchor.origin();
      var options = reparteeOptions({
        bounds: Origins_viewport(origin, getBounds),
        origin: origin,
        preference: layouts,
        maxHeightFunction: maxHeightFunction
      });
      SimpleLayout_go(anchorBox, element, bubble, options);
    };
    var SimpleLayout_go = function(anchorBox, element, bubble, options) {
      var decision = layout(anchorBox, element, bubble, options);
      Callouts_position(element, decision, options);
      setClasses(element, decision);
      setHeight(element, decision, options);
    };
    var allAlignments = ["valignCentre", "alignLeft", "alignRight", "alignCentre", "top", "bottom", "left", "right"];
    var Bubble_nu = function(width, yoffset, classes) {
      var getClasses = function(prop) {
        return Objects_readOptFrom(classes, prop).getOr([]);
      };
      var make = function(xDelta, yDelta, alignmentsOn) {
        var alignmentsOff = difference(allAlignments, alignmentsOn);
        return {
          offset: function() {
            return Position(xDelta, yDelta);
          },
          classesOn: function() {
            return Arr_bind(alignmentsOn, getClasses);
          },
          classesOff: function() {
            return Arr_bind(alignmentsOff, getClasses);
          },
        };
      };
      return {
        southeast: function() {
          return make(-width, yoffset, ["top", "alignLeft"]);
        },
        southwest: function() {
          return make(width, yoffset, ["top", "alignRight"]);
        },
        south: function() {
          return make(-width / 2, yoffset, ["top", "alignCentre"]);
        },
        northeast: function() {
          return make(-width, -yoffset, ["bottom", "alignLeft"]);
        },
        northwest: function() {
          return make(width, -yoffset, ["bottom", "alignRight"]);
        },
        north: function() {
          return make(-width / 2, -yoffset, ["bottom", "alignCentre"]);
        },
        east: function() {
          return make(width, -yoffset / 2, ["valignCentre", "left"]);
        },
        west: function() {
          return make(-width, -yoffset / 2, ["valignCentre", "right"]);
        },
      };
    };
    var Bubble_fallback = function() {
      return Bubble_nu(0, 0, {});
    };
    var SpotInfo_nu = Immutable("x", "y", "bubble", "direction", "label");
    var eastX = function(anchor) {
      return anchor.x();
    };
    var middleX = function(anchor, element) {
      return anchor.x() + anchor.width() / 2 - element.width() / 2;
    };
    var westX = function(anchor, element) {
      return anchor.x() + anchor.width() - element.width();
    };
    var northY = function(anchor, element) {
      return anchor.y() - element.height();
    };
    var southY = function(anchor) {
      return anchor.y() + anchor.height();
    };
    var centreY = function(anchor, element) {
      return anchor.y() + anchor.height() / 2 - element.height() / 2;
    };
    var eastEdgeX = function(anchor) {
      return anchor.x() + anchor.width();
    };
    var westEdgeX = function(anchor, element) {
      return anchor.x() - element.width();
    };
    var Layout_southeast = function(anchor, element, bubbles) {
      return SpotInfo_nu(eastX(anchor), southY(anchor), bubbles.southeast(), southeast(), "layout-se");
    };
    var Layout_southwest = function(anchor, element, bubbles) {
      return SpotInfo_nu(westX(anchor, element), southY(anchor), bubbles.southwest(), southwest(), "layout-sw");
    };
    var Layout_northeast = function(anchor, element, bubbles) {
      return SpotInfo_nu(eastX(anchor), northY(anchor, element), bubbles.northeast(), northeast(), "layout-ne");
    };
    var Layout_northwest = function(anchor, element, bubbles) {
      return SpotInfo_nu(westX(anchor, element), northY(anchor, element), bubbles.northwest(), northwest(), "layout-nw");
    };
    var Layout_north = function(anchor, element, bubbles) {
      return SpotInfo_nu(middleX(anchor, element), northY(anchor, element), bubbles.north(), north(), "layout-n");
    };
    var Layout_south = function(anchor, element, bubbles) {
      return SpotInfo_nu(middleX(anchor, element), southY(anchor), bubbles.south(), south(), "layout-s");
    };
    var Layout_east = function(anchor, element, bubbles) {
      return SpotInfo_nu(eastEdgeX(anchor), centreY(anchor, element), bubbles.east(), east(), "layout-e");
    };
    var Layout_west = function(anchor, element, bubbles) {
      return SpotInfo_nu(westEdgeX(anchor, element), centreY(anchor, element), bubbles.west(), west(), "layout-w");
    };
    var Layout_all = function() {
      return [Layout_southeast, Layout_southwest, Layout_northeast, Layout_northwest, Layout_south, Layout_north, Layout_east, Layout_west];
    };
    var allRtl = function() {
      return [Layout_southwest, Layout_southeast, Layout_northwest, Layout_northeast, Layout_south, Layout_north, Layout_east, Layout_west];
    };
    var Anchoring_nu = function(x) {
      return x;
    };
    var onDirection = function(isLtr, isRtl) {
      return function(element) {
        return getDirection(element) === "rtl" ? isRtl : isLtr;
      };
    };
    var getDirection = function(element) {
      return Css_get(element, "direction") === "rtl" ? "rtl" : "ltr";
    };
    var AnchorLayouts_schema = function() {
      return optionObjOf("layouts", [FieldSchema_strict("onLtr"), FieldSchema_strict("onRtl")]);
    };
    var AnchorLayouts_get = function(elem, info, defaultLtr, defaultRtl) {
      var ltr = info.layouts
        .map(function(ls) {
          return ls.onLtr(elem);
        })
        .getOr(defaultLtr);
      var rtl = info.layouts
        .map(function(ls) {
          return ls.onRtl(elem);
        })
        .getOr(defaultRtl);
      var f = onDirection(ltr, rtl);
      return f(elem);
    };
    var placement = function(component, anchorInfo, origin) {
      var hotspot = anchorInfo.hotspot;
      var anchorBox = toBox(origin, hotspot.element());
      var layouts = AnchorLayouts_get(component.element(), anchorInfo, Layout_all(), allRtl());
      return Option.some(Anchoring_nu({
        anchorBox: anchorBox,
        bubble: anchorInfo.bubble.getOr(Bubble_fallback()),
        overrides: {},
        layouts: layouts,
        placer: Option.none()
      }));
    };
    var HotspotAnchor = [FieldSchema_strict("hotspot"), FieldSchema_option("bubble"), AnchorLayouts_schema(), Fields_output("placement", placement)];
    var MakeshiftAnchor_placement = function(component, anchorInfo, origin) {
      var anchorBox = Boxes_bounds(anchorInfo.x, anchorInfo.y, anchorInfo.width, anchorInfo.height);
      var layouts = AnchorLayouts_get(component.element(), anchorInfo, Layout_all(), allRtl());
      return Option.some(Anchoring_nu({
        anchorBox: anchorBox,
        bubble: anchorInfo.bubble,
        overrides: {},
        layouts: layouts,
        placer: Option.none()
      }));
    };
    var MakeshiftAnchor = [
      FieldSchema_strict("x"),
      FieldSchema_strict("y"),
      FieldSchema_defaulted("height", 0),
      FieldSchema_defaulted("width", 0),
      FieldSchema_defaulted("bubble", Bubble_fallback()),
      AnchorLayouts_schema(),
      Fields_output("placement", MakeshiftAnchor_placement),
    ];
    var zeroWidth = function() {
      return "\ufeff";
    };
    var Situ_adt = Adt.generate([{
      before: ["element"]
    }, {
      on: ["element", "offset"]
    }, {
      after: ["element"]
    }]);
    var Situ_cata = function(subject, onBefore, onOn, onAfter) {
      return subject.fold(onBefore, onOn, onAfter);
    };
    var getStart = function(situ) {
      return situ.fold(identity, identity, identity);
    };
    var Situ_before = Situ_adt.before;
    var Situ_on = Situ_adt.on;
    var Situ_after = Situ_adt.after;
    var Situ = {
      before: Situ_before,
      on: Situ_on,
      after: Situ_after,
      cata: Situ_cata,
      getStart: getStart
    };
    var Selection_type = Adt.generate([{
      domRange: ["rng"]
    }, {
      relative: ["startSitu", "finishSitu"]
    }, {
      exact: ["start", "soffset", "finish", "foffset"]
    }]);
    var Selection_range = Immutable("start", "soffset", "finish", "foffset");
    var exactFromRange = function(simRange) {
      return Selection_type.exact(simRange.start(), simRange.soffset(), simRange.finish(), simRange.foffset());
    };
    var Selection_getStart = function(selection) {
      return selection.match({
        domRange: function(rng) {
          return node_Element.fromDom(rng.startContainer);
        },
        relative: function(startSitu, finishSitu) {
          return Situ.getStart(startSitu);
        },
        exact: function(start, soffset, finish, foffset) {
          return start;
        },
      });
    };
    var getWin = function(selection) {
      var start = Selection_getStart(selection);
      return defaultView(start);
    };
    var domRange = Selection_type.domRange;
    var Selection_relative = Selection_type.relative;
    var exact = Selection_type.exact;
    var makeRange = function(start, soffset, finish, foffset) {
      var doc = Traverse_owner(start);
      var rng = doc.dom().createRange();
      rng.setStart(start.dom(), soffset);
      rng.setEnd(finish.dom(), foffset);
      return rng;
    };
    var commonAncestorContainer = function(start, soffset, finish, foffset) {
      var r = makeRange(start, soffset, finish, foffset);
      return node_Element.fromDom(r.commonAncestorContainer);
    };
    var DocumentPosition_after = function(start, soffset, finish, foffset) {
      var r = makeRange(start, soffset, finish, foffset);
      var same = Compare_eq(start, finish) && soffset === foffset;
      return r.collapsed && !same;
    };
    var fromElements = function(elements, scope) {
      var doc = scope || document$1;
      var fragment = doc.createDocumentFragment();
      Arr_each(elements, function(element) {
        fragment.appendChild(element.dom());
      });
      return node_Element.fromDom(fragment);
    };
    var selectNodeContents = function(win, element) {
      var rng = win.document.createRange();
      selectNodeContentsUsing(rng, element);
      return rng;
    };
    var selectNodeContentsUsing = function(rng, element) {
      rng.selectNodeContents(element.dom());
    };
    var isWithin = function(outerRange, innerRange) {
      return innerRange.compareBoundaryPoints(outerRange.END_TO_START, outerRange) < 1 && innerRange.compareBoundaryPoints(outerRange.START_TO_END, outerRange) > -1;
    };
    var NativeRange_create = function(win) {
      return win.document.createRange();
    };
    var setStart = function(rng, situ) {
      situ.fold(
        function(e) {
          rng.setStartBefore(e.dom());
        },
        function(e, o) {
          rng.setStart(e.dom(), o);
        },
        function(e) {
          rng.setStartAfter(e.dom());
        }
      );
    };
    var setFinish = function(rng, situ) {
      situ.fold(
        function(e) {
          rng.setEndBefore(e.dom());
        },
        function(e, o) {
          rng.setEnd(e.dom(), o);
        },
        function(e) {
          rng.setEndAfter(e.dom());
        }
      );
    };
    var replaceWith = function(rng, fragment) {
      deleteContents(rng);
      rng.insertNode(fragment.dom());
    };
    var relativeToNative = function(win, startSitu, finishSitu) {
      var range = win.document.createRange();
      setStart(range, startSitu);
      setFinish(range, finishSitu);
      return range;
    };
    var exactToNative = function(win, start, soffset, finish, foffset) {
      var rng = win.document.createRange();
      rng.setStart(start.dom(), soffset);
      rng.setEnd(finish.dom(), foffset);
      return rng;
    };
    var deleteContents = function(rng) {
      rng.deleteContents();
    };
    var cloneFragment = function(rng) {
      var fragment = rng.cloneContents();
      return node_Element.fromDom(fragment);
    };
    var toRect = function(rect) {
      return {
        left: constant(rect.left),
        top: constant(rect.top),
        right: constant(rect.right),
        bottom: constant(rect.bottom),
        width: constant(rect.width),
        height: constant(rect.height)
      };
    };
    var getFirstRect = function(rng) {
      var rects = rng.getClientRects();
      var rect = rects.length > 0 ? rects[0] : rng.getBoundingClientRect();
      return rect.width > 0 || rect.height > 0 ? Option.some(rect).map(toRect) : Option.none();
    };
    var NativeRange_getBounds = function(rng) {
      var rect = rng.getBoundingClientRect();
      return rect.width > 0 || rect.height > 0 ? Option.some(rect).map(toRect) : Option.none();
    };
    var NativeRange_toString = function(rng) {
      return rng.toString();
    };
    var SelectionDirection_adt = Adt.generate([{
      ltr: ["start", "soffset", "finish", "foffset"]
    }, {
      rtl: ["start", "soffset", "finish", "foffset"]
    }]);
    var fromRange = function(win, type, range) {
      return type(node_Element.fromDom(range.startContainer), range.startOffset, node_Element.fromDom(range.endContainer), range.endOffset);
    };
    var getRanges = function(win, selection) {
      return selection.match({
        domRange: function(rng) {
          return {
            ltr: constant(rng),
            rtl: Option.none
          };
        },
        relative: function(startSitu, finishSitu) {
          return {
            ltr: cached(function() {
              return relativeToNative(win, startSitu, finishSitu);
            }),
            rtl: cached(function() {
              return Option.some(relativeToNative(win, finishSitu, startSitu));
            }),
          };
        },
        exact: function(start, soffset, finish, foffset) {
          return {
            ltr: cached(function() {
              return exactToNative(win, start, soffset, finish, foffset);
            }),
            rtl: cached(function() {
              return Option.some(exactToNative(win, finish, foffset, start, soffset));
            }),
          };
        },
      });
    };
    var doDiagnose = function(win, ranges) {
      var rng = ranges.ltr();
      if (rng.collapsed) {
        var reversed = ranges.rtl().filter(function(rev) {
          return rev.collapsed === false;
        });
        return reversed
          .map(function(rev) {
            return SelectionDirection_adt.rtl(node_Element.fromDom(rev.endContainer), rev.endOffset, node_Element.fromDom(rev.startContainer), rev.startOffset);
          })
          .getOrThunk(function() {
            return fromRange(win, SelectionDirection_adt.ltr, rng);
          });
      } else {
        return fromRange(win, SelectionDirection_adt.ltr, rng);
      }
    };
    var diagnose = function(win, selection) {
      var ranges = getRanges(win, selection);
      return doDiagnose(win, ranges);
    };
    var asLtrRange = function(win, selection) {
      var diagnosis = diagnose(win, selection);
      return diagnosis.match({
        ltr: function(start, soffset, finish, foffset) {
          var rng = win.document.createRange();
          rng.setStart(start.dom(), soffset);
          rng.setEnd(finish.dom(), foffset);
          return rng;
        },
        rtl: function(start, soffset, finish, foffset) {
          var rng = win.document.createRange();
          rng.setStart(finish.dom(), foffset);
          rng.setEnd(start.dom(), soffset);
          return rng;
        },
      });
    };
    var SelectionDirection_ltr = SelectionDirection_adt.ltr;
    var SelectionDirection_rtl = SelectionDirection_adt.rtl;
    var searchForPoint = function(rectForOffset, x, y, maxX, length) {
      if (length === 0) {
        return 0;
      } else if (x === maxX) {
        return length - 1;
      }
      var xDelta = maxX;
      for (var i = 1; i < length; i++) {
        var rect = rectForOffset(i);
        var curDeltaX = Math.abs(x - rect.left);
        if (y <= rect.bottom) {
          if (y < rect.top || curDeltaX > xDelta) {
            return i - 1;
          } else {
            xDelta = curDeltaX;
          }
        }
      }
      return 0;
    };
    var inRect = function(rect, x, y) {
      return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
    };
    var NodeValue = function(is, name) {
      var get = function(element) {
        if (!is(element)) {
          throw new Error("Can only get " + name + " value of a " + name + " node");
        }
        return getOption(element).getOr("");
      };
      var getOptionIE10 = function(element) {
        try {
          return getOptionSafe(element);
        } catch (e) {
          return Option.none();
        }
      };
      var getOptionSafe = function(element) {
        return is(element) ? Option.from(element.dom().nodeValue) : Option.none();
      };
      var browser = api_PlatformDetection.detect().browser;
      var getOption = browser.isIE() && browser.version.major === 10 ? getOptionIE10 : getOptionSafe;
      var set = function(element, value) {
        if (!is(element)) {
          throw new Error("Can only set raw " + name + " value of a " + name + " node");
        }
        element.dom().nodeValue = value;
      };
      return {
        get: get,
        getOption: getOption,
        set: set
      };
    };
    var Text_api = NodeValue(isText, "text");
    var Text_get = function(element) {
      return Text_api.get(element);
    };
    var Text_getOption = function(element) {
      return Text_api.getOption(element);
    };
    var Text_set = function(element, value) {
      Text_api.set(element, value);
    };
    var locateOffset = function(doc, textnode, x, y, rect) {
      var rangeForOffset = function(o) {
        var r = doc.dom().createRange();
        r.setStart(textnode.dom(), o);
        r.collapse(true);
        return r;
      };
      var rectForOffset = function(o) {
        var r = rangeForOffset(o);
        return r.getBoundingClientRect();
      };
      var length = Text_get(textnode).length;
      var offset = searchForPoint(rectForOffset, x, y, rect.right, length);
      return rangeForOffset(offset);
    };
    var locate = function(doc, node, x, y) {
      var r = doc.dom().createRange();
      r.selectNode(node.dom());
      var rects = r.getClientRects();
      var foundRect = findMap(rects, function(rect) {
        return inRect(rect, x, y) ? Option.some(rect) : Option.none();
      });
      return foundRect.map(function(rect) {
        return locateOffset(doc, node, x, y, rect);
      });
    };
    var searchInChildren = function(doc, node, x, y) {
      var r = doc.dom().createRange();
      var nodes = Traverse_children(node);
      return findMap(nodes, function(n) {
        r.selectNode(n.dom());
        return inRect(r.getBoundingClientRect(), x, y) ? locateNode(doc, n, x, y) : Option.none();
      });
    };
    var locateNode = function(doc, node, x, y) {
      var locator = isText(node) ? locate : searchInChildren;
      return locator(doc, node, x, y);
    };
    var ContainerPoint_locate = function(doc, node, x, y) {
      var r = doc.dom().createRange();
      r.selectNode(node.dom());
      var rect = r.getBoundingClientRect();
      var boundedX = Math.max(rect.left, Math.min(rect.right, x));
      var boundedY = Math.max(rect.top, Math.min(rect.bottom, y));
      return locateNode(doc, node, boundedX, boundedY);
    };
    var getEnd = function(element) {
      return Node_name(element) === "img" ?
        1 :
        Text_getOption(element).fold(
          function() {
            return Traverse_children(element).length;
          },
          function(v) {
            return v.length;
          }
        );
    };
    var isEnd = function(element, offset) {
      return getEnd(element) === offset;
    };
    var isStart = function(element, offset) {
      return offset === 0;
    };
    var NBSP = "Â ";
    var isTextNodeWithCursorPosition = function(el) {
      return Text_getOption(el)
        .filter(function(text) {
          return text.trim().length !== 0 || text.indexOf(NBSP) > -1;
        })
        .isSome();
    };
    var elementsWithCursorPosition = ["img", "br"];
    var isCursorPosition = function(elem) {
      var hasCursorPosition = isTextNodeWithCursorPosition(elem);
      return hasCursorPosition || contains(elementsWithCursorPosition, Node_name(elem));
    };
    var CursorPosition_first = function(element) {
      return descendant(element, isCursorPosition);
    };
    var CursorPosition_last = function(element) {
      return descendantRtl(element, isCursorPosition);
    };
    var descendantRtl = function(scope, predicate) {
      var descend = function(element) {
        var children = Traverse_children(element);
        for (var i = children.length - 1; i >= 0; i--) {
          var child = children[i];
          if (predicate(child)) {
            return Option.some(child);
          }
          var res = descend(child);
          if (res.isSome()) {
            return res;
          }
        }
        return Option.none();
      };
      return descend(scope);
    };
    var COLLAPSE_TO_LEFT = true;
    var COLLAPSE_TO_RIGHT = false;
    var getCollapseDirection = function(rect, x) {
      return x - rect.left < rect.right - x ? COLLAPSE_TO_LEFT : COLLAPSE_TO_RIGHT;
    };
    var createCollapsedNode = function(doc, target, collapseDirection) {
      var r = doc.dom().createRange();
      r.selectNode(target.dom());
      r.collapse(collapseDirection);
      return r;
    };
    var locateInElement = function(doc, node, x) {
      var cursorRange = doc.dom().createRange();
      cursorRange.selectNode(node.dom());
      var rect = cursorRange.getBoundingClientRect();
      var collapseDirection = getCollapseDirection(rect, x);
      var f = collapseDirection === COLLAPSE_TO_LEFT ? CursorPosition_first : CursorPosition_last;
      return f(node).map(function(target) {
        return createCollapsedNode(doc, target, collapseDirection);
      });
    };
    var locateInEmpty = function(doc, node, x) {
      var rect = node.dom().getBoundingClientRect();
      var collapseDirection = getCollapseDirection(rect, x);
      return Option.some(createCollapsedNode(doc, node, collapseDirection));
    };
    var EdgePoint_search = function(doc, node, x) {
      var f = Traverse_children(node).length === 0 ? locateInEmpty : locateInElement;
      return f(doc, node, x);
    };
    var caretPositionFromPoint = function(doc, x, y) {
      return Option.from(doc.dom().caretPositionFromPoint(x, y)).bind(function(pos) {
        if (pos.offsetNode === null) {
          return Option.none();
        }
        var r = doc.dom().createRange();
        r.setStart(pos.offsetNode, pos.offset);
        r.collapse();
        return Option.some(r);
      });
    };
    var caretRangeFromPoint = function(doc, x, y) {
      return Option.from(doc.dom().caretRangeFromPoint(x, y));
    };
    var searchTextNodes = function(doc, node, x, y) {
      var r = doc.dom().createRange();
      r.selectNode(node.dom());
      var rect = r.getBoundingClientRect();
      var boundedX = Math.max(rect.left, Math.min(rect.right, x));
      var boundedY = Math.max(rect.top, Math.min(rect.bottom, y));
      return ContainerPoint_locate(doc, node, boundedX, boundedY);
    };
    var searchFromPoint = function(doc, x, y) {
      return node_Element.fromPoint(doc, x, y).bind(function(elem) {
        var fallback = function() {
          return EdgePoint_search(doc, elem, x);
        };
        return Traverse_children(elem).length === 0 ? fallback() : searchTextNodes(doc, elem, x, y).orThunk(fallback);
      });
    };
    var availableSearch = document.caretPositionFromPoint ? caretPositionFromPoint : document.caretRangeFromPoint ? caretRangeFromPoint : searchFromPoint;
    var CaretRange_fromPoint = function(win, x, y) {
      var doc = node_Element.fromDom(win.document);
      return availableSearch(doc, x, y).map(function(rng) {
        return Selection_range(node_Element.fromDom(rng.startContainer), rng.startOffset, node_Element.fromDom(rng.endContainer), rng.endOffset);
      });
    };
    var PredicateFilter_all = function(predicate) {
      return descendants(Body_body(), predicate);
    };
    var ancestors = function(scope, predicate, isRoot) {
      return Arr_filter(parents(scope, isRoot), predicate);
    };
    var PredicateFilter_siblings = function(scope, predicate) {
      return Arr_filter(siblings(scope), predicate);
    };
    var PredicateFilter_children = function(scope, predicate) {
      return Arr_filter(Traverse_children(scope), predicate);
    };
    var descendants = function(scope, predicate) {
      var result = [];
      Arr_each(Traverse_children(scope), function(x) {
        if (predicate(x)) {
          result = result.concat([x]);
        }
        result = result.concat(descendants(x, predicate));
      });
      return result;
    };
    var SelectorFilter_all = function(selector) {
      return Selectors_all(selector);
    };
    var SelectorFilter_ancestors = function(scope, selector, isRoot) {
      return ancestors(
        scope,
        function(e) {
          return Selectors_is(e, selector);
        },
        isRoot
      );
    };
    var SelectorFilter_siblings = function(scope, selector) {
      return PredicateFilter_siblings(scope, function(e) {
        return Selectors_is(e, selector);
      });
    };
    var SelectorFilter_children = function(scope, selector) {
      return PredicateFilter_children(scope, function(e) {
        return Selectors_is(e, selector);
      });
    };
    var SelectorFilter_descendants = function(scope, selector) {
      return Selectors_all(selector, scope);
    };
    var withinContainer = function(win, ancestor, outerRange, selector) {
      var innerRange = NativeRange_create(win);
      var self = Selectors_is(ancestor, selector) ? [ancestor] : [];
      var elements = self.concat(SelectorFilter_descendants(ancestor, selector));
      return Arr_filter(elements, function(elem) {
        selectNodeContentsUsing(innerRange, elem);
        return isWithin(outerRange, innerRange);
      });
    };
    var Within_find = function(win, selection, selector) {
      var outerRange = asLtrRange(win, selection);
      var ancestor = node_Element.fromDom(outerRange.commonAncestorContainer);
      return isElement(ancestor) ? withinContainer(win, ancestor, outerRange, selector) : [];
    };
    var beforeSpecial = function(element, offset) {
      var name = Node_name(element);
      if ("input" === name) {
        return Situ.after(element);
      } else if (!contains(["br", "img"], name)) {
        return Situ.on(element, offset);
      } else {
        return offset === 0 ? Situ.before(element) : Situ.after(element);
      }
    };
    var preprocessRelative = function(startSitu, finishSitu) {
      var start = startSitu.fold(Situ.before, beforeSpecial, Situ.after);
      var finish = finishSitu.fold(Situ.before, beforeSpecial, Situ.after);
      return Selection_relative(start, finish);
    };
    var preprocessExact = function(start, soffset, finish, foffset) {
      var startSitu = beforeSpecial(start, soffset);
      var finishSitu = beforeSpecial(finish, foffset);
      return Selection_relative(startSitu, finishSitu);
    };
    var preprocess = function(selection) {
      return selection.match({
        domRange: function(rng) {
          var start = node_Element.fromDom(rng.startContainer);
          var finish = node_Element.fromDom(rng.endContainer);
          return preprocessExact(start, rng.startOffset, finish, rng.endOffset);
        },
        relative: preprocessRelative,
        exact: preprocessExact,
      });
    };
    var doSetNativeRange = function(win, rng) {
      Option.from(win.getSelection()).each(function(selection) {
        selection.removeAllRanges();
        selection.addRange(rng);
      });
    };
    var doSetRange = function(win, start, soffset, finish, foffset) {
      var rng = exactToNative(win, start, soffset, finish, foffset);
      doSetNativeRange(win, rng);
    };
    var findWithin = function(win, selection, selector) {
      return Within_find(win, selection, selector);
    };
    var setLegacyRtlRange = function(win, selection, start, soffset, finish, foffset) {
      selection.collapse(start.dom(), soffset);
      selection.extend(finish.dom(), foffset);
    };
    var setRangeFromRelative = function(win, relative) {
      return diagnose(win, relative).match({
        ltr: function(start, soffset, finish, foffset) {
          doSetRange(win, start, soffset, finish, foffset);
        },
        rtl: function(start, soffset, finish, foffset) {
          var selection = win.getSelection();
          if (selection.setBaseAndExtent) {
            selection.setBaseAndExtent(start.dom(), soffset, finish.dom(), foffset);
          } else if (selection.extend) {
            try {
              setLegacyRtlRange(win, selection, start, soffset, finish, foffset);
            } catch (e) {
              doSetRange(win, finish, foffset, start, soffset);
            }
          } else {
            doSetRange(win, finish, foffset, start, soffset);
          }
        },
      });
    };
    var setExact = function(win, start, soffset, finish, foffset) {
      var relative = preprocessExact(start, soffset, finish, foffset);
      setRangeFromRelative(win, relative);
    };
    var setRelative = function(win, startSitu, finishSitu) {
      var relative = preprocessRelative(startSitu, finishSitu);
      setRangeFromRelative(win, relative);
    };
    var toNative = function(selection) {
      var win = getWin(selection).dom();
      var getDomRange = function(start, soffset, finish, foffset) {
        return exactToNative(win, start, soffset, finish, foffset);
      };
      var filtered = preprocess(selection);
      return diagnose(win, filtered).match({
        ltr: getDomRange,
        rtl: getDomRange
      });
    };
    var readRange = function(selection) {
      if (selection.rangeCount > 0) {
        var firstRng = selection.getRangeAt(0);
        var lastRng = selection.getRangeAt(selection.rangeCount - 1);
        return Option.some(Selection_range(node_Element.fromDom(firstRng.startContainer), firstRng.startOffset, node_Element.fromDom(lastRng.endContainer), lastRng.endOffset));
      } else {
        return Option.none();
      }
    };
    var doGetExact = function(selection) {
      var anchor = node_Element.fromDom(selection.anchorNode);
      var focus = node_Element.fromDom(selection.focusNode);
      return DocumentPosition_after(anchor, selection.anchorOffset, focus, selection.focusOffset) ? Option.some(Selection_range(anchor, selection.anchorOffset, focus, selection.focusOffset)) : readRange(selection);
    };
    var WindowSelection_setToElement = function(win, element) {
      var rng = selectNodeContents(win, element);
      doSetNativeRange(win, rng);
    };
    var forElement = function(win, element) {
      var rng = selectNodeContents(win, element);
      return Selection_range(node_Element.fromDom(rng.startContainer), rng.startOffset, node_Element.fromDom(rng.endContainer), rng.endOffset);
    };
    var getExact = function(win) {
      return Option.from(win.getSelection())
        .filter(function(sel) {
          return sel.rangeCount > 0;
        })
        .bind(doGetExact);
    };
    var WindowSelection_get = function(win) {
      return getExact(win).map(function(range) {
        return exact(range.start(), range.soffset(), range.finish(), range.foffset());
      });
    };
    var WindowSelection_getFirstRect = function(win, selection) {
      var rng = asLtrRange(win, selection);
      return getFirstRect(rng);
    };
    var WindowSelection_getBounds = function(win, selection) {
      var rng = asLtrRange(win, selection);
      return NativeRange_getBounds(rng);
    };
    var getAtPoint = function(win, x, y) {
      return CaretRange_fromPoint(win, x, y);
    };
    var getAsString = function(win, selection) {
      var rng = asLtrRange(win, selection);
      return NativeRange_toString(rng);
    };
    var WindowSelection_clear = function(win) {
      var selection = win.getSelection();
      selection.removeAllRanges();
    };
    var WindowSelection_clone = function(win, selection) {
      var rng = asLtrRange(win, selection);
      return cloneFragment(rng);
    };
    var WindowSelection_replace = function(win, selection, elements) {
      var rng = asLtrRange(win, selection);
      var fragment = fromElements(elements, win.document);
      replaceWith(rng, fragment);
    };
    var deleteAt = function(win, selection) {
      var rng = asLtrRange(win, selection);
      deleteContents(rng);
    };
    var isCollapsed = function(start, soffset, finish, foffset) {
      return Compare_eq(start, finish) && soffset === foffset;
    };
    var Descend_point = Immutable("element", "offset");
    var descendOnce = function(element, offset) {
      var children = Traverse_children(element);
      if (children.length === 0) {
        return Descend_point(element, offset);
      } else if (offset < children.length) {
        return Descend_point(children[offset], 0);
      } else {
        var last = children[children.length - 1];
        var len = isText(last) ? Text_get(last).length : Traverse_children(last).length;
        return Descend_point(last, len);
      }
    };
    var CssPosition_adt = Adt.generate([{
      screen: ["point"]
    }, {
      absolute: ["point", "scrollLeft", "scrollTop"]
    }]);
    var toFixed = function(pos) {
      return pos.fold(
        function(point) {
          return point;
        },
        function(point, scrollLeft, scrollTop) {
          return point.translate(-scrollLeft, -scrollTop);
        }
      );
    };
    var toAbsolute = function(pos) {
      return pos.fold(
        function(point) {
          return point;
        },
        function(point, scrollLeft, scrollTop) {
          return point;
        }
      );
    };
    var sum = function(points) {
      return foldl(
        points,
        function(b, a) {
          return b.translate(a.left(), a.top());
        },
        Position(0, 0)
      );
    };
    var sumAsFixed = function(positions) {
      var points = Arr_map(positions, toFixed);
      return sum(points);
    };
    var sumAsAbsolute = function(positions) {
      var points = Arr_map(positions, toAbsolute);
      return sum(points);
    };
    var screen = CssPosition_adt.screen;
    var CssPosition_absolute = CssPosition_adt.absolute;
    var ContainerOffsets_getOffset = function(component, origin, anchorInfo) {
      var win = defaultView(anchorInfo.root).dom();
      var hasSameOwner = function(frame) {
        var frameOwner = Traverse_owner(frame);
        var compOwner = Traverse_owner(component.element());
        return Compare_eq(frameOwner, compOwner);
      };
      return Option.from(win.frameElement).map(node_Element.fromDom).filter(hasSameOwner).map(absolute);
    };
    var getRootPoint = function(component, origin, anchorInfo) {
      var doc = Traverse_owner(component.element());
      var outerScroll = Scroll_get(doc);
      var offset = ContainerOffsets_getOffset(component, origin, anchorInfo).getOr(outerScroll);
      return CssPosition_absolute(offset, outerScroll.left(), outerScroll.top());
    };
    var capRect = function(left, top, width, height) {
      var newLeft = left,
        newTop = top,
        newWidth = width,
        newHeight = height;
      if (left < 0) {
        newLeft = 0;
        newWidth = width + left;
      }
      if (top < 0) {
        newTop = 0;
        newHeight = height + top;
      }
      var point = screen(Position(newLeft, newTop));
      return Option.some(pointed(point, newWidth, newHeight));
    };
    var calcNewAnchor = function(optBox, rootPoint, anchorInfo, origin, elem) {
      return optBox.map(function(box) {
        var points = [rootPoint, box.point()];
        var topLeft = Origins_cata(
          origin,
          function() {
            return sumAsAbsolute(points);
          },
          function() {
            return sumAsAbsolute(points);
          },
          function() {
            return sumAsFixed(points);
          }
        );
        var anchorBox = Boxes_rect(topLeft.left(), topLeft.top(), box.width(), box.height());
        var layoutsLtr = function() {
          return anchorInfo.showAbove ?
            [Layout_northeast, Layout_northwest, Layout_southeast, Layout_southwest, Layout_north, Layout_south] :
            [Layout_southeast, Layout_southwest, Layout_northeast, Layout_northwest, Layout_south, Layout_south];
        };
        var layoutsRtl = function() {
          return anchorInfo.showAbove ?
            [Layout_northwest, Layout_northeast, Layout_southwest, Layout_southeast, Layout_north, Layout_south] :
            [Layout_southwest, Layout_southeast, Layout_northwest, Layout_northeast, Layout_south, Layout_north];
        };
        var layouts = AnchorLayouts_get(elem, anchorInfo, layoutsLtr(), layoutsRtl());
        return Anchoring_nu({
          anchorBox: anchorBox,
          bubble: anchorInfo.bubble.getOr(Bubble_fallback()),
          overrides: anchorInfo.overrides,
          layouts: layouts,
          placer: Option.none()
        });
      });
    };
    var ContentAnchorCommon = {
      capRect: capRect,
      calcNewAnchor: calcNewAnchor
    };
    var SelectionAnchor_point = Immutable("element", "offset");
    var SelectionAnchor_descendOnce = function(element, offset) {
      return isText(element) ? SelectionAnchor_point(element, offset) : descendOnce(element, offset);
    };
    var getAnchorSelection = function(win, anchorInfo) {
      var getSelection = anchorInfo.getSelection.getOrThunk(function() {
        return function() {
          return getExact(win);
        };
      });
      return getSelection().map(function(sel) {
        var modStart = SelectionAnchor_descendOnce(sel.start(), sel.soffset());
        var modFinish = SelectionAnchor_descendOnce(sel.finish(), sel.foffset());
        return Selection_range(modStart.element(), modStart.offset(), modFinish.element(), modFinish.offset());
      });
    };
    var SelectionAnchor_placement = function(component, anchorInfo, origin) {
      var win = defaultView(anchorInfo.root).dom();
      var rootPoint = getRootPoint(component, origin, anchorInfo);
      var selectionBox = getAnchorSelection(win, anchorInfo).bind(function(sel) {
        var optRect = WindowSelection_getFirstRect(win, exactFromRange(sel)).orThunk(function() {
          var x = node_Element.fromText(zeroWidth());
          Insert_before(sel.start(), x);
          return WindowSelection_getFirstRect(win, exact(x, 0, x, 1)).map(function(rect) {
            Remove_remove(x);
            return rect;
          });
        });
        return optRect.bind(function(rawRect) {
          return ContentAnchorCommon.capRect(rawRect.left(), rawRect.top(), rawRect.width(), rawRect.height());
        });
      });
      var targetElement = getAnchorSelection(win, anchorInfo).bind(function(sel) {
        return isElement(sel.start()) ? Option.some(sel.start()) : Traverse_parent(sel.start());
      });
      var elem = targetElement.getOr(component.element());
      return ContentAnchorCommon.calcNewAnchor(selectionBox, rootPoint, anchorInfo, origin, elem);
    };
    var SelectionAnchor = [
      FieldSchema_option("getSelection"),
      FieldSchema_strict("root"),
      FieldSchema_option("bubble"),
      AnchorLayouts_schema(),
      FieldSchema_defaulted("overrides", {}),
      FieldSchema_defaulted("showAbove", false),
      Fields_output("placement", SelectionAnchor_placement),
    ];
    var NodeAnchor_placement = function(component, anchorInfo, origin) {
      var rootPoint = getRootPoint(component, origin, anchorInfo);
      return anchorInfo.node.bind(function(target) {
        var rect = target.dom().getBoundingClientRect();
        var nodeBox = ContentAnchorCommon.capRect(rect.left, rect.top, rect.width, rect.height);
        var elem = anchorInfo.node.getOr(component.element());
        return ContentAnchorCommon.calcNewAnchor(nodeBox, rootPoint, anchorInfo, origin, elem);
      });
    };
    var NodeAnchor = [
      FieldSchema_strict("node"),
      FieldSchema_strict("root"),
      FieldSchema_option("bubble"),
      AnchorLayouts_schema(),
      FieldSchema_defaulted("overrides", {}),
      FieldSchema_defaulted("showAbove", false),
      Fields_output("placement", NodeAnchor_placement),
    ];
    var LinkedLayout_eastX = function(anchor) {
      return anchor.x() + anchor.width();
    };
    var LinkedLayout_westX = function(anchor, element) {
      return anchor.x() - element.width();
    };
    var LinkedLayout_northY = function(anchor, element) {
      return anchor.y() - element.height() + anchor.height();
    };
    var LinkedLayout_southY = function(anchor) {
      return anchor.y();
    };
    var LinkedLayout_southeast = function(anchor, element, bubbles) {
      return SpotInfo_nu(LinkedLayout_eastX(anchor), LinkedLayout_southY(anchor), bubbles.southeast(), southeast(), "link-layout-se");
    };
    var LinkedLayout_southwest = function(anchor, element, bubbles) {
      return SpotInfo_nu(LinkedLayout_westX(anchor, element), LinkedLayout_southY(anchor), bubbles.southwest(), southwest(), "link-layout-sw");
    };
    var LinkedLayout_northeast = function(anchor, element, bubbles) {
      return SpotInfo_nu(LinkedLayout_eastX(anchor), LinkedLayout_northY(anchor, element), bubbles.northeast(), northeast(), "link-layout-ne");
    };
    var LinkedLayout_northwest = function(anchor, element, bubbles) {
      return SpotInfo_nu(LinkedLayout_westX(anchor, element), LinkedLayout_northY(anchor, element), bubbles.northwest(), northwest(), "link-layout-nw");
    };
    var LinkedLayout_all = function() {
      return [LinkedLayout_southeast, LinkedLayout_southwest, LinkedLayout_northeast, LinkedLayout_northwest];
    };
    var LinkedLayout_allRtl = function() {
      return [LinkedLayout_southwest, LinkedLayout_southeast, LinkedLayout_northwest, LinkedLayout_northeast];
    };
    var SubmenuAnchor_placement = function(component, submenuInfo, origin) {
      var anchorBox = toBox(origin, submenuInfo.item.element());
      var layouts = AnchorLayouts_get(component.element(), submenuInfo, LinkedLayout_all(), LinkedLayout_allRtl());
      return Option.some(Anchoring_nu({
        anchorBox: anchorBox,
        bubble: Bubble_fallback(),
        overrides: {},
        layouts: layouts,
        placer: Option.none()
      }));
    };
    var SubmenuAnchor = [FieldSchema_strict("item"), AnchorLayouts_schema(), Fields_output("placement", SubmenuAnchor_placement)];
    var AnchorSchema = ValueSchema_choose("anchor", {
      selection: SelectionAnchor,
      node: NodeAnchor,
      hotspot: HotspotAnchor,
      submenu: SubmenuAnchor,
      makeshift: MakeshiftAnchor
    });
    var getFixedOrigin = function() {
      return fixed(0, 0, window$1.innerWidth, window$1.innerHeight);
    };
    var getRelativeOrigin = function(component) {
      var position = absolute(component.element());
      var bounds = component.element().dom().getBoundingClientRect();
      return Origins_relative(position.left(), position.top(), bounds.width, bounds.height);
    };
    var place = function(component, origin, anchoring, getBounds, placee) {
      var anchor = Anchor_box(anchoring.anchorBox, origin);
      simple(anchor, placee.element(), anchoring.bubble, anchoring.layouts, getBounds, anchoring.overrides);
    };
    var PositionApis_position = function(component, posConfig, posState, anchor, placee) {
      var boxElement = Option.none();
      positionWithin(component, posConfig, posState, anchor, placee, boxElement);
    };
    var positionWithin = function(component, posConfig, posState, anchor, placee, boxElement) {
      var anchorage = asRawOrDie("positioning anchor.info", AnchorSchema, anchor);
      Css_set(placee.element(), "position", "fixed");
      var oldVisibility = getRaw(placee.element(), "visibility");
      Css_set(placee.element(), "visibility", "hidden");
      var origin = posConfig.useFixed ? getFixedOrigin() : getRelativeOrigin(component);
      var placer = anchorage.placement;
      var getBounds = boxElement
        .map(function(boxElem) {
          return function() {
            return Boxes_box(boxElem);
          };
        })
        .or(posConfig.getBounds);
      placer(component, anchorage, origin).each(function(anchoring) {
        var doPlace = anchoring.placer.getOr(place);
        doPlace(component, origin, anchoring, getBounds, placee);
      });
      oldVisibility.fold(
        function() {
          Css_remove(placee.element(), "visibility");
        },
        function(vis) {
          Css_set(placee.element(), "visibility", vis);
        }
      );
      if (
        getRaw(placee.element(), "left").isNone() &&
        getRaw(placee.element(), "top").isNone() &&
        getRaw(placee.element(), "right").isNone() &&
        getRaw(placee.element(), "bottom").isNone() &&
        getRaw(placee.element(), "position").is("fixed")
      ) {
        Css_remove(placee.element(), "position");
      }
    };
    var getMode = function(component, pConfig, pState) {
      return pConfig.useFixed ? "fixed" : "absolute";
    };
    var PositionSchema = [FieldSchema_defaulted("useFixed", false), FieldSchema_option("getBounds")];
    var Positioning = Behaviour_create({
      fields: PositionSchema,
      name: "positioning",
      active: ActivePosition_namespaceObject,
      apis: PositionApis_namespaceObject
    });
    var adaptable = function(fn, rate) {
      var timer = null;
      var args = null;
      var cancel = function() {
        if (timer !== null) {
          clearTimeout$1(timer);
          timer = null;
          args = null;
        }
      };
      var throttle = function() {
        var newArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          newArgs[_i] = arguments[_i];
        }
        args = newArgs;
        if (timer === null) {
          timer = setTimeout$1(function() {
            fn.apply(null, args);
            timer = null;
            args = null;
          }, rate);
        }
      };
      return {
        cancel: cancel,
        throttle: throttle
      };
    };
    var Throttler_first = function(fn, rate) {
      var timer = null;
      var cancel = function() {
        if (timer !== null) {
          clearTimeout$1(timer);
          timer = null;
        }
      };
      var throttle = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        if (timer === null) {
          timer = setTimeout$1(function() {
            fn.apply(null, args);
            timer = null;
          }, rate);
        }
      };
      return {
        cancel: cancel,
        throttle: throttle
      };
    };
    var Throttler_last = function(fn, rate) {
      var timer = null;
      var cancel = function() {
        if (timer !== null) {
          clearTimeout$1(timer);
          timer = null;
        }
      };
      var throttle = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        if (timer !== null) clearTimeout$1(timer);
        timer = setTimeout$1(function() {
          fn.apply(null, args);
          timer = null;
        }, rate);
      };
      return {
        cancel: cancel,
        throttle: throttle
      };
    };
    var escaper = function(text, regex, entities) {
      return text.replace(regex, function(match) {
        return entities[match] || match;
      });
    };
    var entitiesRegexText = /[<>&]/g;
    var entitiesText = {
      "<": "&lt;",
      ">": "&gt;",
      "&": "&amp;"
    };
    var escapeText = function(text) {
      return escaper(text, entitiesRegexText, entitiesText);
    };
    var getLines = function(content) {
      return content.split("\n");
    };
    var isSeparate = function(structures, location, prefix) {
      return Option.from(structures[location.lineNum]).exists(function(line) {
        var prior = line.content.substring(0, location.offset);
        return endsWith(prior, prefix) && (location.offset === prefix.length || line.content.charAt(location.offset - (prefix.length + 1)) === " ");
      });
    };
    var getLocation = function(structures, index) {
      return findMap(structures, function(s, lineNum) {
        return index >= s.start && index <= s.finish ? Option.some({
          lineNum: lineNum,
          offset: index - s.start,
          absoluteOffset: index
        }) : Option.none();
      });
    };
    var getStructure = function(value) {
      var lines = getLines(value);
      return foldl(
        lines,
        function(acc, line) {
          var entry = {
            content: line + "\n",
            start: acc.offset,
            finish: acc.offset + line.length
          };
          var all = acc.all.concat([entry]);
          return {
            offset: acc.offset + line.length + 1,
            all: all
          };
        }, {
          offset: 0,
          all: []
        }
      ).all;
    };
    var isStartOfLine = function(value, startIndex, finishIndex) {
      var structures = getStructure(value);
      return isStartOfLineOf(structures, startIndex, finishIndex);
    };
    var isStartOfLineOf = function(structures, startIndex, finishIndex) {
      return Arr_exists(structures, function(s) {
        return s.start === startIndex;
      });
    };
    var hasLineStartingWith = function(structures, location, leading) {
      return Option.from(structures[location.lineNum]).exists(function(line) {
        return location.offset === leading.length && line.content.startsWith(leading);
      });
    };
    var isAfterSpace = function(structures, location) {
      return Option.from(structures[location.lineNum]).exists(function(line) {
        return location.offset === 0 || line.content.charAt(location.offset - 1) === " ";
      });
    };
    var buildInsertion = function(value, insertion, location, label, insertOffset) {
      var content = value.substring(0, location.absoluteOffset) + insertion + value.substring(location.absoluteOffset);
      return {
        type: "operation",
        selectionStart: location.absoluteOffset + insertOffset,
        selectionEnd: location.absoluteOffset + insertOffset,
        content: content,
        hint: escapeText(label)
      };
    };
    var startsWithHint = function(hint, startsWith, menuText, description, example, insertion, insertOffset, dialog) {
      return {
        hint: hint,
        operation: {
          insertion: insertion,
          offset: insertOffset
        },
        isValid: function(value, structures, location) {
          return Option.from(structures[location.lineNum]).bind(function(line) {
            if (isStartOfLine(value, location.absoluteOffset, location.absoluteOffset)) {
              return Option.some(buildInsertion(value, insertion, location, menuText, insertOffset));
            } else {
              return Option.none();
            }
          });
        },
        isLikely: function(structures, location) {
          return hasLineStartingWith(structures, location, startsWith) ? Option.some({
            description: description,
            example: example,
            dialog: dialog
          }) : Option.none();
        },
      };
    };
    var isAfterSpaceHint = function(hint, startsWith, menuText, description, example, insertion, insertOffset, dialog) {
      return {
        hint: hint,
        operation: {
          insertion: insertion,
          offset: insertOffset
        },
        isValid: function(value, structures, location) {
          return isAfterSpace(structures, location) ? Option.some(buildInsertion(value, insertion, location, menuText, insertOffset)) : Option.none();
        },
        isLikely: function(structures, location) {
          return isSeparate(structures, location, startsWith) ? Option.some({
            description: description,
            example: example,
            dialog: dialog
          }) : Option.none();
        },
      };
    };
    var blockquoteHint = function() {
      var hint = "Blockquote";
      var description = hint;
      var startsWith = ">";
      var menuText = "Blockquote :: >";
      var example = "> This can go on and on multiple lines";
      var insertion = startsWith + " ";
      var insertOffset = insertion.length;
      return startsWithHint(hint, startsWith, menuText, description, example, insertion, insertOffset, Option.none());
    };
    var fallbackHint = function() {
      return {
        hint: "Task List",
        isValid: function(value, structures, location) {
          return Option.none();
        },
        operation: {
          insertion: "",
          offset: 0
        },
        isLikely: function(structures, location) {
          return Option.from(structures[location.lineNum]).bind(function(line) {
            return line.content.trim().length === 0 ? Option.some({
              description: "Launch insertion options",
              example: "Ctrl+Space",
              dialog: Option.none()
            }) : Option.none();
          });
        },
      };
    };
    var headerHint = function(level) {
      var startsWith = "#".repeat(level);
      var hint = "Heading";
      var description = "Heading Level " + level;
      var menuText = "Heading " + level + " :: " + startsWith;
      var example = startsWith + " Heading " + level;
      var insertion = startsWith + " ";
      var insertOffset = insertion.length;
      return startsWithHint(hint, startsWith, menuText, description, example, insertion, insertOffset, Option.none());
    };
    var horizontalRuleHint = function() {
      var hint = "Horizontal Rule";
      var description = hint;
      var startsWith = "---";
      var menuText = "Horizontal Rule :: ---";
      var example = "---";
      var insertion = startsWith + "\n\n";
      var insertOffset = insertion.length;
      return startsWithHint(hint, startsWith, menuText, description, example, insertion, insertOffset, Option.none());
    };
    var imageHint = function() {
      var hint = "Image";
      var startsWith = "!";
      var menuText = "Image :: ![alt](src)";
      var description = hint;
      var example = "![A dog](http://pictures.com/dog.jpg)";
      var insertion = "![alt text](source)";
      var insertOffset = insertion.length;
      var dialog = Option.some({
        params: [{
            name: "source",
            field: {
              type: "input",
              label: "Source"
            }
          },
          {
            name: "text",
            field: {
              type: "input",
              label: "Image Description"
            }
          },
          {
            name: "size",
            field: {
              type: "sizeinput",
              label: "Dimensions"
            }
          },
        ],
        accept: function(values) {
          var hasDimensions = values.size.width.length > 0 && values.size.height.length > 0;
          var fullUrl = hasDimensions ? "<" + values.source + "> =" + values.size.width + "x" + values.size.height : values.source;
          var insertion = ("![" + values.text + "](" + fullUrl + ")").substring(startsWith.length);
          return {
            insertion: insertion,
            offset: insertion.length
          };
        },
      });
      return isAfterSpaceHint(hint, startsWith, menuText, description, example, insertion, insertOffset, dialog);
    };
    var inlineHintImpl = function(label, prefix, suffix, startsWith) {
      var insertOffset = prefix.length;
      var hint = prefix + "inline" + suffix;
      var menuText = label + " :: " + prefix + "..." + suffix;
      var description = label;
      var example = prefix + "formatted-word" + suffix;
      var insertion = "" + prefix + suffix;
      return isAfterSpaceHint(hint, startsWith, menuText, description, example, insertion, insertOffset, Option.none());
    };
    var inlineHint = function(label, prefix, suffix) {
      return inlineHintImpl(label, prefix, suffix, prefix);
    };
    var inlineHintStartsWith = inlineHintImpl;
    var linkHint = function() {
      var hint = "Link";
      var startsWith = "[";
      var menuText = "Link  :: [text](href)";
      var description = hint;
      var example = "[click here](http://tiny.cloud)";
      var insertion = "[text](link)";
      var insertOffset = insertion.length;
      var dialog = Option.some({
        params: [{
            name: "URL",
            field: {
              type: "input",
              label: "URL"
            }
          },
          {
            name: "Text",
            field: {
              type: "input",
              label: "Link Text"
            }
          },
        ],
        accept: function(values) {
          var insertion = ("[" + values.Text + "](" + values.URL + ")").substring(startsWith.length);
          return {
            insertion: insertion,
            offset: insertion.length
          };
        },
      });
      return isAfterSpaceHint(hint, startsWith, menuText, description, example, insertion, insertOffset, dialog);
    };
    var getLabel = function(lType) {
      return lType === MarkdownListType.Bullet ? "Unordered" : "Ordered";
    };
    var nestedListHint = function(lType) {
      var leading = "  " + lType;
      return {
        hint: "Nested " + getLabel(lType) + " List",
        operation: {
          insertion: leading,
          offset: leading.length
        },
        isValid: function(value, structures, location) {
          return Option.none();
        },
        isLikely: function(structures, location) {
          return hasLineStartingWith(structures, location, leading) ? Option.some({
            description: "Nested " + getLabel(lType) + " List",
            example: leading + " nested item",
            dialog: Option.none()
          }) : Option.none();
        },
      };
    };
    var outerListHint = function(lType) {
      var leading = lType;
      var menuText = getLabel(lType) + " List :: " + leading;
      return {
        hint: "Outer List",
        operation: {
          insertion: leading,
          offset: leading.length
        },
        isValid: function(value, structures, location) {
          if (isStartOfLine(value, location.absoluteOffset, location.absoluteOffset)) {
            var insertion = leading;
            var insertOffset = insertion.length;
            return Option.some(buildInsertion(value, insertion, location, menuText, insertOffset));
          } else {
            return Option.none();
          }
        },
        isLikely: function(structures, location) {
          return hasLineStartingWith(structures, location, leading) ? Option.some({
            description: getLabel(lType) + " List",
            example: leading + " outer item",
            dialog: Option.none()
          }) : Option.none();
        },
      };
    };
    var tableHint = function() {
      var menuText = "Table :: | column0 | column 1 |";
      var insertion = "|   |   |   |\n| --- | --- | --- |\n|   |   |   |";
      return {
        hint: "Table",
        operation: {
          insertion: insertion,
          offset: insertion.length
        },
        isValid: function(value, structures, location) {
          return Option.from(structures[location.lineNum]).bind(function(line) {
            if (isStartOfLine(value, location.absoluteOffset, location.absoluteOffset)) {
              var insertOffset = insertion.length;
              return Option.some(buildInsertion(value, insertion, location, menuText, insertOffset));
            } else {
              return Option.none();
            }
          });
        },
        isLikely: function(_structures, _location) {
          return Option.none();
        },
      };
    };
    var taskHint = function() {
      var hint = "Task List";
      var description = hint;
      var startsWith = "- [";
      var menuText = "Task List :: - [x] task";
      var example = "- [x] checked item";
      var insertion = "- [x]";
      var insertOffset = insertion.length;
      return startsWithHint(hint, startsWith, menuText, description, example, insertion, insertOffset, Option.none());
    };
    var codeblockHint = function() {
      var hint = "Code Block";
      var description = hint;
      var startsWith = "```";
      var menuText = "Code Block :: ```";
      var example = "``` ... ```";
      var insertion = startsWith + "\n" + "\n" + startsWith + "\n";
      var insertOffset = startsWith.length + 1;
      var dialog = Option.some({
        params: [{
          name: "code",
          field: {
            type: "textarea",
            label: "Code"
          }
        }],
        accept: function(values) {
          var rest = "\n" + values.code + "\n```\n";
          return {
            insertion: rest,
            offset: insertOffset - startsWith.length
          };
        },
      });
      return startsWithHint(hint, startsWith, menuText, description, example, insertion, insertOffset, dialog);
    };
    var hrHintInstance = horizontalRuleHint();
    var tableHintInstance = tableHint();
    var taskHintInstance = taskHint();
    var blockquoteHintInstance = blockquoteHint();
    var imageHintInstance = imageHint();
    var linkHintInstance = linkHint();
    var nestedUlHintInstance = nestedListHint(MarkdownListType.Bullet);
    var nestedOlHintInstance = nestedListHint(MarkdownListType.Numeric);
    var outerOlHintInstance = outerListHint(MarkdownListType.Numeric);
    var outerUlHintInstance = outerListHint(MarkdownListType.Numeric);
    var boldHintInstance = inlineHint("Bold", "**", "**");
    var italicHintInstance = inlineHint("Italic", "*", "*");
    var strikeHintInstance = inlineHint("Strikethrough", "~~", "~~");
    var codeHintInstance = inlineHint("Code Span", "`", "`");
    var codeblockHintInstance = codeblockHint();
    var commentHintInstance = inlineHintStartsWith("HTML Comment", "\x3c!-- ", " --\x3e", "<!");
    var h1HintInstance = headerHint(1);
    var h2HintInstance = headerHint(2);
    var h3HintInstance = headerHint(3);
    var h4HintInstance = headerHint(4);
    var h5HintInstance = headerHint(5);
    var h6HintInstance = headerHint(6);
    var allHints = [
      hrHintInstance,
      tableHintInstance,
      taskHintInstance,
      blockquoteHintInstance,
      imageHintInstance,
      linkHintInstance,
      nestedUlHintInstance,
      nestedOlHintInstance,
      outerOlHintInstance,
      outerUlHintInstance,
      boldHintInstance,
      italicHintInstance,
      strikeHintInstance,
      codeHintInstance,
      codeblockHintInstance,
      commentHintInstance,
      h6HintInstance,
      h5HintInstance,
      h4HintInstance,
      h3HintInstance,
      h2HintInstance,
      h1HintInstance,
      fallbackHint(),
    ];
    var getHint = function(value, startIndex, finishIndex) {
      if (startIndex !== finishIndex) {
        return Option.none();
      }
      var structures = getStructure(value);
      var startLocation = getLocation(structures, startIndex);
      return startLocation.bind(function(start) {
        return findMap(allHints, function(hint) {
          return hint.isLikely(structures, start);
        });
      });
    };
    var getHints = function(value, startIndex, finishIndex) {
      if (startIndex !== finishIndex) {
        return [];
      }
      var structures = getStructure(value);
      var startLocation = getLocation(structures, startIndex);
      var hints = startLocation
        .map(function(start) {
          return cat(
            Arr_map(allHints, function(hint) {
              return hint.isValid(value, structures, start);
            })
          );
        })
        .getOr([]);
      var operationHints = sort(hints, function(hintA, hintB) {
        if (hintA.type === "action") {
          return +1;
        } else if (hintB.type === "action") {
          return -1;
        } else {
          return hintA.hint.localeCompare(hintB.hint);
        }
      });
      return operationHints.slice(0, 5).concat([{
        hint: "Show All ...",
        type: "action",
        action: HintActions.ShowHelpDialog
      }]);
    };
    var Decoration = {
      forHtml: function(converter, editorBody) {
        var elements = SelectorFilter_children(editorBody, "table,ul");
        Arr_each(elements, function(e) {
          Attr_remove(e, "data-ephox-redpen-violation");
          if (converter.doesNotSupport(e)) {
            Attr_set(e, "data-ephox-redpen-violation", "1");
          }
        });
      },
    };
    var cycleBy = function(value, delta, min, max) {
      var r = value + delta;
      if (r > max) {
        return min;
      } else {
        return r < min ? max : r;
      }
    };
    var cap = function(value, min, max) {
      if (value <= min) {
        return min;
      } else {
        return value >= max ? max : value;
      }
    };
    var dehighlightAllExcept = function(component, hConfig, hState, skip) {
      var highlighted = SelectorFilter_descendants(component.element(), "." + hConfig.highlightClass);
      Arr_each(highlighted, function(h) {
        if (!Arr_exists(skip, function(skipComp) {
            return skipComp.element() === h;
          })) {
          Class_remove(h, hConfig.highlightClass);
          component
            .getSystem()
            .getByDom(h)
            .each(function(target) {
              hConfig.onDehighlight(component, target);
              emit(target, dehighlight());
            });
        }
      });
    };
    var dehighlightAll = function(component, hConfig, hState) {
      return dehighlightAllExcept(component, hConfig, hState, []);
    };
    var HighlightApis_dehighlight = function(component, hConfig, hState, target) {
      if (isHighlighted(component, hConfig, hState, target)) {
        Class_remove(target.element(), hConfig.highlightClass);
        hConfig.onDehighlight(component, target);
        emit(target, dehighlight());
      }
    };
    var HighlightApis_highlight = function(component, hConfig, hState, target) {
      dehighlightAllExcept(component, hConfig, hState, [target]);
      if (!isHighlighted(component, hConfig, hState, target)) {
        Class_add(target.element(), hConfig.highlightClass);
        hConfig.onHighlight(component, target);
        emit(target, highlight());
      }
    };
    var highlightFirst = function(component, hConfig, hState) {
      getFirst(component, hConfig, hState).each(function(firstComp) {
        HighlightApis_highlight(component, hConfig, hState, firstComp);
      });
    };
    var highlightLast = function(component, hConfig, hState) {
      getLast(component, hConfig, hState).each(function(lastComp) {
        HighlightApis_highlight(component, hConfig, hState, lastComp);
      });
    };
    var highlightAt = function(component, hConfig, hState, index) {
      getByIndex(component, hConfig, hState, index).fold(
        function(err) {
          throw new Error(err);
        },
        function(firstComp) {
          HighlightApis_highlight(component, hConfig, hState, firstComp);
        }
      );
    };
    var highlightBy = function(component, hConfig, hState, predicate) {
      var candidates = getCandidates(component, hConfig, hState);
      var targetComp = Arr_find(candidates, predicate);
      targetComp.each(function(c) {
        HighlightApis_highlight(component, hConfig, hState, c);
      });
    };
    var isHighlighted = function(component, hConfig, hState, queryTarget) {
      return Class_has(queryTarget.element(), hConfig.highlightClass);
    };
    var getHighlighted = function(component, hConfig, hState) {
      return SelectorFind_descendant(component.element(), "." + hConfig.highlightClass).bind(function(e) {
        return component.getSystem().getByDom(e).toOption();
      });
    };
    var getByIndex = function(component, hConfig, hState, index) {
      var items = SelectorFilter_descendants(component.element(), "." + hConfig.itemClass);
      return Option.from(items[index]).fold(function() {
        return Result.error("No element found with index " + index);
      }, component.getSystem().getByDom);
    };
    var getFirst = function(component, hConfig, hState) {
      return SelectorFind_descendant(component.element(), "." + hConfig.itemClass).bind(function(e) {
        return component.getSystem().getByDom(e).toOption();
      });
    };
    var getLast = function(component, hConfig, hState) {
      var items = SelectorFilter_descendants(component.element(), "." + hConfig.itemClass);
      var last = items.length > 0 ? Option.some(items[items.length - 1]) : Option.none();
      return last.bind(function(c) {
        return component.getSystem().getByDom(c).toOption();
      });
    };
    var getDelta = function(component, hConfig, hState, delta) {
      var items = SelectorFilter_descendants(component.element(), "." + hConfig.itemClass);
      var current = findIndex(items, function(item) {
        return Class_has(item, hConfig.highlightClass);
      });
      return current.bind(function(selected) {
        var dest = cycleBy(selected, delta, 0, items.length - 1);
        return component.getSystem().getByDom(items[dest]).toOption();
      });
    };
    var getPrevious = function(component, hConfig, hState) {
      return getDelta(component, hConfig, hState, -1);
    };
    var getNext = function(component, hConfig, hState) {
      return getDelta(component, hConfig, hState, +1);
    };
    var getCandidates = function(component, hConfig, hState) {
      var items = SelectorFilter_descendants(component.element(), "." + hConfig.itemClass);
      return cat(
        Arr_map(items, function(i) {
          return component.getSystem().getByDom(i).toOption();
        })
      );
    };
    var HighlightSchema = [FieldSchema_strict("highlightClass"), FieldSchema_strict("itemClass"), onHandler("onHighlight"), onHandler("onDehighlight")];
    var Highlighting = Behaviour_create({
      fields: HighlightSchema,
      name: "highlighting",
      apis: HighlightApis_namespaceObject
    });
    var reportFocusShifting = function(component, prevFocus, newFocus) {
      var noChange = prevFocus.exists(function(p) {
        return newFocus.exists(function(n) {
          return Compare_eq(n, p);
        });
      });
      if (!noChange) {
        emitWith(component, focusShifted(), {
          prevFocus: prevFocus,
          newFocus: newFocus
        });
      }
    };
    var FocusManagers_dom = function() {
      var get = function(component) {
        return search(component.element());
      };
      var set = function(component, focusee) {
        var prevFocus = get(component);
        component.getSystem().triggerFocus(focusee, component.element());
        var newFocus = get(component);
        reportFocusShifting(component, prevFocus, newFocus);
      };
      return {
        get: get,
        set: set
      };
    };
    var highlights = function() {
      var get = function(component) {
        return Highlighting.getHighlighted(component).map(function(item) {
          return item.element();
        });
      };
      var set = function(component, element) {
        var prevFocus = get(component);
        component
          .getSystem()
          .getByDom(element)
          .fold(Fun_noop, function(item) {
            Highlighting.highlight(component, item);
          });
        var newFocus = get(component);
        reportFocusShifting(component, prevFocus, newFocus);
      };
      return {
        get: get,
        set: set
      };
    };
    var getCurrent = function(component, composeConfig, composeState) {
      return composeConfig.find(component);
    };
    var ComposeSchema = [FieldSchema_strict("find")];
    var Composing = Behaviour_create({
      fields: ComposeSchema,
      name: "composing",
      apis: ComposeApis_namespaceObject
    });
    var cyclePrev = function(values, index, predicate) {
      var before = reverse(values.slice(0, index));
      var after = reverse(values.slice(index + 1));
      return Arr_find(before.concat(after), predicate);
    };
    var tryPrev = function(values, index, predicate) {
      var before = reverse(values.slice(0, index));
      return Arr_find(before, predicate);
    };
    var cycleNext = function(values, index, predicate) {
      var before = values.slice(0, index);
      var after = values.slice(index + 1);
      return Arr_find(after.concat(before), predicate);
    };
    var tryNext = function(values, index, predicate) {
      var after = values.slice(index + 1);
      return Arr_find(after, predicate);
    };
    var inSet = function(keys) {
      return function(event) {
        var raw = event.raw();
        return contains(keys, raw.which);
      };
    };
    var and = function(preds) {
      return function(event) {
        return Arr_forall(preds, function(pred) {
          return pred(event);
        });
      };
    };
    var KeyMatch_is = function(key) {
      return function(event) {
        var raw = event.raw();
        return raw.which === key;
      };
    };
    var isShift = function(event) {
      var raw = event.raw();
      return raw.shiftKey === true;
    };
    var isControl = function(event) {
      var raw = event.raw();
      return raw.ctrlKey === true;
    };
    var isNotControl = not(isControl);
    var isNotShift = not(isShift);
    var basic = function(key, action) {
      return {
        matches: KeyMatch_is(key),
        classification: action
      };
    };
    var rule = function(matches, action) {
      return {
        matches: matches,
        classification: action
      };
    };
    var KeyRules_choose = function(transitions, event) {
      var transition = Arr_find(transitions, function(t) {
        return t.matches(event);
      });
      return transition.map(function(t) {
        return t.classification;
      });
    };
    var FocusInsideModes;
    (function(FocusInsideModes) {
      FocusInsideModes["OnFocusMode"] = "onFocus";
      FocusInsideModes["OnEnterOrSpaceMode"] = "onEnterOrSpace";
      FocusInsideModes["OnApiMode"] = "onApi";
    })(FocusInsideModes || (FocusInsideModes = {}));
    var typical = function(infoSchema, stateInit, getKeydownRules, getKeyupRules, optFocusIn) {
      var schema = function() {
        return infoSchema.concat([
          FieldSchema_defaulted("focusManager", FocusManagers_dom()),
          defaultedOf(
            "focusInside",
            "onFocus",
            ValueSchema_valueOf(function(val) {
              return contains(["onFocus", "onEnterOrSpace", "onApi"], val) ? Result.value(val) : Result.error("Invalid value for focusInside");
            })
          ),
          Fields_output("handler", me),
          Fields_output("state", stateInit),
          Fields_output("sendFocusIn", optFocusIn),
        ]);
      };
      var processKey = function(component, simulatedEvent, getRules, keyingConfig, keyingState) {
        var rules = getRules(component, simulatedEvent, keyingConfig, keyingState);
        return KeyRules_choose(rules, simulatedEvent.event()).bind(function(rule) {
          return rule(component, simulatedEvent, keyingConfig, keyingState);
        });
      };
      var toEvents = function(keyingConfig, keyingState) {
        var onFocusHandler =
          keyingConfig.focusInside !== FocusInsideModes.OnFocusMode ?
          Option.none() :
          optFocusIn(keyingConfig).map(function(focusIn) {
            return AlloyEvents_run(SystemEvents_focus(), function(component, simulatedEvent) {
              focusIn(component, keyingConfig, keyingState);
              simulatedEvent.stop();
            });
          });
        var tryGoInsideComponent = function(component, simulatedEvent) {
          var isEnterOrSpace = inSet(SPACE().concat(ENTER()))(simulatedEvent.event());
          if (keyingConfig.focusInside === FocusInsideModes.OnEnterOrSpaceMode && isEnterOrSpace && isSource(component, simulatedEvent)) {
            optFocusIn(keyingConfig).each(function(focusIn) {
              focusIn(component, keyingConfig, keyingState);
              simulatedEvent.stop();
            });
          }
        };
        return derive(
          onFocusHandler.toArray().concat([
            AlloyEvents_run(keydown(), function(component, simulatedEvent) {
              processKey(component, simulatedEvent, getKeydownRules, keyingConfig, keyingState).fold(
                function() {
                  tryGoInsideComponent(component, simulatedEvent);
                },
                function(_) {
                  simulatedEvent.stop();
                }
              );
            }),
            AlloyEvents_run(keyup(), function(component, simulatedEvent) {
              processKey(component, simulatedEvent, getKeyupRules, keyingConfig, keyingState).each(function(_) {
                simulatedEvent.stop();
              });
            }),
          ])
        );
      };
      var me = {
        schema: schema,
        processKey: processKey,
        toEvents: toEvents
      };
      return me;
    };
    var TabbingTypes_create = function(cyclicField) {
      var schema = [
        FieldSchema_option("onEscape"),
        FieldSchema_option("onEnter"),
        FieldSchema_defaulted("selector", '[data-alloy-tabstop="true"]'),
        FieldSchema_defaulted("firstTabstop", 0),
        FieldSchema_defaulted("useTabstopAt", constant(true)),
        FieldSchema_option("visibilitySelector"),
      ].concat([cyclicField]);
      var isVisible = function(tabbingConfig, element) {
        var target = tabbingConfig.visibilitySelector
          .bind(function(sel) {
            return SelectorFind_closest(element, sel);
          })
          .getOr(element);
        return Height_get(target) > 0;
      };
      var findInitial = function(component, tabbingConfig) {
        var tabstops = SelectorFilter_descendants(component.element(), tabbingConfig.selector);
        var visibles = Arr_filter(tabstops, function(elem) {
          return isVisible(tabbingConfig, elem);
        });
        return Option.from(visibles[tabbingConfig.firstTabstop]);
      };
      var findCurrent = function(component, tabbingConfig) {
        return tabbingConfig.focusManager.get(component).bind(function(elem) {
          return SelectorFind_closest(elem, tabbingConfig.selector);
        });
      };
      var isTabstop = function(tabbingConfig, element) {
        return isVisible(tabbingConfig, element) && tabbingConfig.useTabstopAt(element);
      };
      var focusIn = function(component, tabbingConfig) {
        findInitial(component, tabbingConfig).each(function(target) {
          tabbingConfig.focusManager.set(component, target);
        });
      };
      var goFromTabstop = function(component, tabstops, stopIndex, tabbingConfig, cycle) {
        return cycle(tabstops, stopIndex, function(elem) {
          return isTabstop(tabbingConfig, elem);
        }).fold(
          function() {
            return tabbingConfig.cyclic ? Option.some(true) : Option.none();
          },
          function(target) {
            tabbingConfig.focusManager.set(component, target);
            return Option.some(true);
          }
        );
      };
      var go = function(component, simulatedEvent, tabbingConfig, cycle) {
        var tabstops = SelectorFilter_descendants(component.element(), tabbingConfig.selector);
        return findCurrent(component, tabbingConfig).bind(function(tabstop) {
          var optStopIndex = findIndex(tabstops, curry(Compare_eq, tabstop));
          return optStopIndex.bind(function(stopIndex) {
            return goFromTabstop(component, tabstops, stopIndex, tabbingConfig, cycle);
          });
        });
      };
      var goBackwards = function(component, simulatedEvent, tabbingConfig, tabbingState) {
        var navigate = tabbingConfig.cyclic ? cyclePrev : tryPrev;
        return go(component, simulatedEvent, tabbingConfig, navigate);
      };
      var goForwards = function(component, simulatedEvent, tabbingConfig, tabbingState) {
        var navigate = tabbingConfig.cyclic ? cycleNext : tryNext;
        return go(component, simulatedEvent, tabbingConfig, navigate);
      };
      var execute = function(component, simulatedEvent, tabbingConfig, tabbingState) {
        return tabbingConfig.onEnter.bind(function(f) {
          return f(component, simulatedEvent);
        });
      };
      var exit = function(component, simulatedEvent, tabbingConfig, tabbingState) {
        return tabbingConfig.onEscape.bind(function(f) {
          return f(component, simulatedEvent);
        });
      };
      var getKeydownRules = constant([rule(and([isShift, inSet(TAB())]), goBackwards), rule(inSet(TAB()), goForwards), rule(inSet(ESCAPE()), exit), rule(and([isNotShift, inSet(ENTER())]), execute)]);
      var getKeyupRules = constant([]);
      return typical(schema, NoState.init, getKeydownRules, getKeyupRules, function() {
        return Option.some(focusIn);
      });
    };
    var AcyclicType = TabbingTypes_create(FieldSchema_state("cyclic", constant(false)));
    var CyclicType = TabbingTypes_create(FieldSchema_state("cyclic", constant(true)));
    var EditableFields_inside = function(target) {
      return (Node_name(target) === "input" && Attr_get(target, "type") !== "radio") || Node_name(target) === "textarea";
    };
    var doDefaultExecute = function(component, simulatedEvent, focused) {
      dispatch(component, focused, SystemEvents_execute());
      return Option.some(true);
    };
    var defaultExecute = function(component, simulatedEvent, focused) {
      return EditableFields_inside(focused) && inSet(SPACE())(simulatedEvent.event()) ? Option.none() : doDefaultExecute(component, simulatedEvent, focused);
    };
    var stopEventForFirefox = function(component, simulatedEvent) {
      return Option.some(true);
    };
    var ExecutionType_schema = [
      FieldSchema_defaulted("execute", defaultExecute),
      FieldSchema_defaulted("useSpace", false),
      FieldSchema_defaulted("useEnter", true),
      FieldSchema_defaulted("useControlEnter", false),
      FieldSchema_defaulted("useDown", false),
    ];
    var ExecutionType_execute = function(component, simulatedEvent, executeConfig) {
      return executeConfig.execute(component, simulatedEvent, component.element());
    };
    var ExecutionType_getKeydownRules = function(component, simulatedEvent, executeConfig, executeState) {
      var spaceExec = executeConfig.useSpace && !EditableFields_inside(component.element()) ? SPACE() : [];
      var enterExec = executeConfig.useEnter ? ENTER() : [];
      var downExec = executeConfig.useDown ? DOWN() : [];
      var execKeys = spaceExec.concat(enterExec).concat(downExec);
      return [rule(inSet(execKeys), ExecutionType_execute)].concat(executeConfig.useControlEnter ? [rule(and([isControl, inSet(ENTER())]), ExecutionType_execute)] : []);
    };
    var ExecutionType_getKeyupRules = function(component, simulatedEvent, executeConfig, executeState) {
      return executeConfig.useSpace && !EditableFields_inside(component.element()) ? [rule(inSet(SPACE()), stopEventForFirefox)] : [];
    };
    var ExecutionType = typical(ExecutionType_schema, NoState.init, ExecutionType_getKeydownRules, ExecutionType_getKeyupRules, function() {
      return Option.none();
    });
    var flatgrid = function(spec) {
      var dimensions = Cell(Option.none());
      var setGridSize = function(numRows, numColumns) {
        dimensions.set(Option.some({
          numRows: constant(numRows),
          numColumns: constant(numColumns)
        }));
      };
      var getNumRows = function() {
        return dimensions.get().map(function(d) {
          return d.numRows();
        });
      };
      var getNumColumns = function() {
        return dimensions.get().map(function(d) {
          return d.numColumns();
        });
      };
      return BehaviourState_nu({
        readState: function() {
          return dimensions
            .get()
            .map(function(d) {
              return {
                numRows: d.numRows(),
                numColumns: d.numColumns()
              };
            })
            .getOr({
              numRows: "?",
              numColumns: "?"
            });
        },
        setGridSize: setGridSize,
        getNumRows: getNumRows,
        getNumColumns: getNumColumns,
      });
    };
    var init = function(spec) {
      return spec.state(spec);
    };
    var useH = function(movement) {
      return function(component, simulatedEvent, config, state) {
        var move = movement(component.element());
        return use(move, component, simulatedEvent, config, state);
      };
    };
    var DomMovement_west = function(moveLeft, moveRight) {
      var movement = onDirection(moveLeft, moveRight);
      return useH(movement);
    };
    var DomMovement_east = function(moveLeft, moveRight) {
      var movement = onDirection(moveRight, moveLeft);
      return useH(movement);
    };
    var useV = function(move) {
      return function(component, simulatedEvent, config, state) {
        return use(move, component, simulatedEvent, config, state);
      };
    };
    var use = function(move, component, simulatedEvent, config, state) {
      var outcome = config.focusManager.get(component).bind(function(focused) {
        return move(component.element(), focused, config, state);
      });
      return outcome.map(function(newFocus) {
        config.focusManager.set(component, newFocus);
        return true;
      });
    };
    var DomMovement_north = useV;
    var DomMovement_south = useV;
    var DomMovement_move = useV;
    var visibilityToggler = function(element, property, hiddenValue, visibleValue) {
      var initial = Css_get(element, property);
      if (initial === undefined) {
        initial = "";
      }
      var value = initial === hiddenValue ? visibleValue : hiddenValue;
      var off = curry(Css_set, element, property, initial);
      var on = curry(Css_set, element, property, value);
      return Toggler(off, on, false);
    };
    var Visibility_toggler = function(element) {
      return visibilityToggler(element, "visibility", "hidden", "visible");
    };
    var displayToggler = function(element, value) {
      return visibilityToggler(element, "display", "none", value);
    };
    var isHidden = function(dom) {
      return dom.offsetWidth <= 0 && dom.offsetHeight <= 0;
    };
    var Visibility_isVisible = function(element) {
      var dom = element.dom();
      return !isHidden(dom);
    };
    var indexInfo = MixedBag(["index", "candidates"], []);
    var ArrPinpoint_locate = function(candidates, predicate) {
      return findIndex(candidates, predicate).map(function(index) {
        return indexInfo({
          index: index,
          candidates: candidates
        });
      });
    };
    var locateVisible = function(container, current, selector) {
      var filter = Visibility_isVisible;
      return locateIn(container, current, selector, filter);
    };
    var locateIn = function(container, current, selector, filter) {
      var predicate = curry(Compare_eq, current);
      var candidates = SelectorFilter_descendants(container, selector);
      var visible = Arr_filter(candidates, Visibility_isVisible);
      return ArrPinpoint_locate(visible, predicate);
    };
    var DomPinpoint_findIndex = function(elements, target) {
      return findIndex(elements, function(elem) {
        return Compare_eq(target, elem);
      });
    };
    var withGrid = function(values, index, numCols, f) {
      var oldRow = Math.floor(index / numCols);
      var oldColumn = index % numCols;
      return f(oldRow, oldColumn).bind(function(address) {
        var newIndex = address.row() * numCols + address.column();
        return newIndex >= 0 && newIndex < values.length ? Option.some(values[newIndex]) : Option.none();
      });
    };
    var cycleHorizontal = function(values, index, numRows, numCols, delta) {
      return withGrid(values, index, numCols, function(oldRow, oldColumn) {
        var onLastRow = oldRow === numRows - 1;
        var colsInRow = onLastRow ? values.length - oldRow * numCols : numCols;
        var newColumn = cycleBy(oldColumn, delta, 0, colsInRow - 1);
        return Option.some({
          row: constant(oldRow),
          column: constant(newColumn)
        });
      });
    };
    var cycleVertical = function(values, index, numRows, numCols, delta) {
      return withGrid(values, index, numCols, function(oldRow, oldColumn) {
        var newRow = cycleBy(oldRow, delta, 0, numRows - 1);
        var onLastRow = newRow === numRows - 1;
        var colsInRow = onLastRow ? values.length - newRow * numCols : numCols;
        var newCol = cap(oldColumn, 0, colsInRow - 1);
        return Option.some({
          row: constant(newRow),
          column: constant(newCol)
        });
      });
    };
    var cycleRight = function(values, index, numRows, numCols) {
      return cycleHorizontal(values, index, numRows, numCols, +1);
    };
    var cycleLeft = function(values, index, numRows, numCols) {
      return cycleHorizontal(values, index, numRows, numCols, -1);
    };
    var cycleUp = function(values, index, numRows, numCols) {
      return cycleVertical(values, index, numRows, numCols, -1);
    };
    var cycleDown = function(values, index, numRows, numCols) {
      return cycleVertical(values, index, numRows, numCols, +1);
    };
    var FlatgridType_schema = [FieldSchema_strict("selector"), FieldSchema_defaulted("execute", defaultExecute), onKeyboardHandler("onEscape"), FieldSchema_defaulted("captureTab", false), initSize()];
    var FlatgridType_focusIn = function(component, gridConfig, gridState) {
      SelectorFind_descendant(component.element(), gridConfig.selector).each(function(first) {
        gridConfig.focusManager.set(component, first);
      });
    };
    var FlatgridType_findCurrent = function(component, gridConfig) {
      return gridConfig.focusManager.get(component).bind(function(elem) {
        return SelectorFind_closest(elem, gridConfig.selector);
      });
    };
    var FlatgridType_execute = function(component, simulatedEvent, gridConfig, gridState) {
      return FlatgridType_findCurrent(component, gridConfig).bind(function(focused) {
        return gridConfig.execute(component, simulatedEvent, focused);
      });
    };
    var doMove = function(cycle) {
      return function(element, focused, gridConfig, gridState) {
        return locateVisible(element, focused, gridConfig.selector).bind(function(identified) {
          return cycle(identified.candidates(), identified.index(), gridState.getNumRows().getOr(gridConfig.initSize.numRows), gridState.getNumColumns().getOr(gridConfig.initSize.numColumns));
        });
      };
    };
    var handleTab = function(component, simulatedEvent, gridConfig, gridState) {
      return gridConfig.captureTab ? Option.some(true) : Option.none();
    };
    var doEscape = function(component, simulatedEvent, gridConfig, gridState) {
      return gridConfig.onEscape(component, simulatedEvent);
    };
    var FlatgridType_moveLeft = doMove(cycleLeft);
    var FlatgridType_moveRight = doMove(cycleRight);
    var moveNorth = doMove(cycleUp);
    var moveSouth = doMove(cycleDown);
    var FlatgridType_getKeydownRules = constant([
      rule(inSet(LEFT()), DomMovement_west(FlatgridType_moveLeft, FlatgridType_moveRight)),
      rule(inSet(RIGHT()), DomMovement_east(FlatgridType_moveLeft, FlatgridType_moveRight)),
      rule(inSet(UP()), DomMovement_north(moveNorth)),
      rule(inSet(DOWN()), DomMovement_south(moveSouth)),
      rule(and([isShift, inSet(TAB())]), handleTab),
      rule(and([isNotShift, inSet(TAB())]), handleTab),
      rule(inSet(ESCAPE()), doEscape),
      rule(inSet(SPACE().concat(ENTER())), FlatgridType_execute),
    ]);
    var FlatgridType_getKeyupRules = constant([rule(inSet(SPACE()), stopEventForFirefox)]);
    var FlatgridType = typical(FlatgridType_schema, flatgrid, FlatgridType_getKeydownRules, FlatgridType_getKeyupRules, function() {
      return Option.some(FlatgridType_focusIn);
    });
    var horizontal = function(container, selector, current, delta) {
      var isDisabledButton = function(candidate) {
        return Node_name(candidate) === "button" && Attr_get(candidate, "disabled") === "disabled";
      };
      var tryCycle = function(initial, index, candidates) {
        var newIndex = cycleBy(index, delta, 0, candidates.length - 1);
        if (newIndex === initial) {
          return Option.none();
        } else {
          return isDisabledButton(candidates[newIndex]) ? tryCycle(initial, newIndex, candidates) : Option.from(candidates[newIndex]);
        }
      };
      return locateVisible(container, current, selector).bind(function(identified) {
        var index = identified.index();
        var candidates = identified.candidates();
        return tryCycle(index, index, candidates);
      });
    };
    var FlowType_schema = [
      FieldSchema_strict("selector"),
      FieldSchema_defaulted("getInitial", Option.none),
      FieldSchema_defaulted("execute", defaultExecute),
      onKeyboardHandler("onEscape"),
      FieldSchema_defaulted("executeOnMove", false),
      FieldSchema_defaulted("allowVertical", true),
    ];
    var FlowType_findCurrent = function(component, flowConfig) {
      return flowConfig.focusManager.get(component).bind(function(elem) {
        return SelectorFind_closest(elem, flowConfig.selector);
      });
    };
    var FlowType_execute = function(component, simulatedEvent, flowConfig) {
      return FlowType_findCurrent(component, flowConfig).bind(function(focused) {
        return flowConfig.execute(component, simulatedEvent, focused);
      });
    };
    var FlowType_focusIn = function(component, flowConfig) {
      flowConfig
        .getInitial(component)
        .orThunk(function() {
          return SelectorFind_descendant(component.element(), flowConfig.selector);
        })
        .each(function(first) {
          flowConfig.focusManager.set(component, first);
        });
    };
    var FlowType_moveLeft = function(element, focused, info) {
      return horizontal(element, info.selector, focused, -1);
    };
    var FlowType_moveRight = function(element, focused, info) {
      return horizontal(element, info.selector, focused, +1);
    };
    var FlowType_doMove = function(movement) {
      return function(component, simulatedEvent, flowConfig) {
        return movement(component, simulatedEvent, flowConfig).bind(function() {
          return flowConfig.executeOnMove ? FlowType_execute(component, simulatedEvent, flowConfig) : Option.some(true);
        });
      };
    };
    var FlowType_doEscape = function(component, simulatedEvent, flowConfig, _flowState) {
      return flowConfig.onEscape(component, simulatedEvent);
    };
    var FlowType_getKeydownRules = function(_component, _se, flowConfig, _flowState) {
      var westMovers = LEFT().concat(flowConfig.allowVertical ? UP() : []);
      var eastMovers = RIGHT().concat(flowConfig.allowVertical ? DOWN() : []);
      return [
        rule(inSet(westMovers), FlowType_doMove(DomMovement_west(FlowType_moveLeft, FlowType_moveRight))),
        rule(inSet(eastMovers), FlowType_doMove(DomMovement_east(FlowType_moveLeft, FlowType_moveRight))),
        rule(inSet(ENTER()), FlowType_execute),
        rule(inSet(SPACE()), FlowType_execute),
        rule(inSet(ESCAPE()), FlowType_doEscape),
      ];
    };
    var FlowType_getKeyupRules = constant([rule(inSet(SPACE()), stopEventForFirefox)]);
    var FlowType = typical(FlowType_schema, NoState.init, FlowType_getKeydownRules, FlowType_getKeyupRules, function() {
      return Option.some(FlowType_focusIn);
    });
    var MatrixNavigation_outcome = MixedBag(["rowIndex", "columnIndex", "cell"], []);
    var toCell = function(matrix, rowIndex, columnIndex) {
      return Option.from(matrix[rowIndex]).bind(function(row) {
        return Option.from(row[columnIndex]).map(function(cell) {
          return MatrixNavigation_outcome({
            rowIndex: rowIndex,
            columnIndex: columnIndex,
            cell: cell
          });
        });
      });
    };
    var MatrixNavigation_cycleHorizontal = function(matrix, rowIndex, startCol, deltaCol) {
      var row = matrix[rowIndex];
      var colsInRow = row.length;
      var newColIndex = cycleBy(startCol, deltaCol, 0, colsInRow - 1);
      return toCell(matrix, rowIndex, newColIndex);
    };
    var MatrixNavigation_cycleVertical = function(matrix, colIndex, startRow, deltaRow) {
      var nextRowIndex = cycleBy(startRow, deltaRow, 0, matrix.length - 1);
      var colsInNextRow = matrix[nextRowIndex].length;
      var nextColIndex = cap(colIndex, 0, colsInNextRow - 1);
      return toCell(matrix, nextRowIndex, nextColIndex);
    };
    var moveHorizontal = function(matrix, rowIndex, startCol, deltaCol) {
      var row = matrix[rowIndex];
      var colsInRow = row.length;
      var newColIndex = cap(startCol + deltaCol, 0, colsInRow - 1);
      return toCell(matrix, rowIndex, newColIndex);
    };
    var moveVertical = function(matrix, colIndex, startRow, deltaRow) {
      var nextRowIndex = cap(startRow + deltaRow, 0, matrix.length - 1);
      var colsInNextRow = matrix[nextRowIndex].length;
      var nextColIndex = cap(colIndex, 0, colsInNextRow - 1);
      return toCell(matrix, nextRowIndex, nextColIndex);
    };
    var MatrixNavigation_cycleRight = function(matrix, startRow, startCol) {
      return MatrixNavigation_cycleHorizontal(matrix, startRow, startCol, +1);
    };
    var MatrixNavigation_cycleLeft = function(matrix, startRow, startCol) {
      return MatrixNavigation_cycleHorizontal(matrix, startRow, startCol, -1);
    };
    var MatrixNavigation_cycleUp = function(matrix, startRow, startCol) {
      return MatrixNavigation_cycleVertical(matrix, startCol, startRow, -1);
    };
    var MatrixNavigation_cycleDown = function(matrix, startRow, startCol) {
      return MatrixNavigation_cycleVertical(matrix, startCol, startRow, +1);
    };
    var MatrixNavigation_moveLeft = function(matrix, startRow, startCol) {
      return moveHorizontal(matrix, startRow, startCol, -1);
    };
    var MatrixNavigation_moveRight = function(matrix, startRow, startCol) {
      return moveHorizontal(matrix, startRow, startCol, +1);
    };
    var moveUp = function(matrix, startRow, startCol) {
      return moveVertical(matrix, startCol, startRow, -1);
    };
    var moveDown = function(matrix, startRow, startCol) {
      return moveVertical(matrix, startCol, startRow, +1);
    };
    var MatrixType_schema = [
      strictObjOf("selectors", [FieldSchema_strict("row"), FieldSchema_strict("cell")]),
      FieldSchema_defaulted("cycles", true),
      FieldSchema_defaulted("previousSelector", Option.none),
      FieldSchema_defaulted("execute", defaultExecute),
    ];
    var MatrixType_focusIn = function(component, matrixConfig) {
      var focused = matrixConfig.previousSelector(component).orThunk(function() {
        var selectors = matrixConfig.selectors;
        return SelectorFind_descendant(component.element(), selectors.cell);
      });
      focused.each(function(cell) {
        matrixConfig.focusManager.set(component, cell);
      });
    };
    var MatrixType_execute = function(component, simulatedEvent, matrixConfig) {
      return search(component.element()).bind(function(focused) {
        return matrixConfig.execute(component, simulatedEvent, focused);
      });
    };
    var toMatrix = function(rows, matrixConfig) {
      return Arr_map(rows, function(row) {
        return SelectorFilter_descendants(row, matrixConfig.selectors.cell);
      });
    };
    var MatrixType_doMove = function(ifCycle, ifMove) {
      return function(element, focused, matrixConfig) {
        var move = matrixConfig.cycles ? ifCycle : ifMove;
        return SelectorFind_closest(focused, matrixConfig.selectors.row).bind(function(inRow) {
          var cellsInRow = SelectorFilter_descendants(inRow, matrixConfig.selectors.cell);
          return DomPinpoint_findIndex(cellsInRow, focused).bind(function(colIndex) {
            var allRows = SelectorFilter_descendants(element, matrixConfig.selectors.row);
            return DomPinpoint_findIndex(allRows, inRow).bind(function(rowIndex) {
              var matrix = toMatrix(allRows, matrixConfig);
              return move(matrix, rowIndex, colIndex).map(function(next) {
                return next.cell();
              });
            });
          });
        });
      };
    };
    var MatrixType_moveLeft = MatrixType_doMove(MatrixNavigation_cycleLeft, MatrixNavigation_moveLeft);
    var MatrixType_moveRight = MatrixType_doMove(MatrixNavigation_cycleRight, MatrixNavigation_moveRight);
    var MatrixType_moveNorth = MatrixType_doMove(MatrixNavigation_cycleUp, moveUp);
    var MatrixType_moveSouth = MatrixType_doMove(MatrixNavigation_cycleDown, moveDown);
    var MatrixType_getKeydownRules = constant([
      rule(inSet(LEFT()), DomMovement_west(MatrixType_moveLeft, MatrixType_moveRight)),
      rule(inSet(RIGHT()), DomMovement_east(MatrixType_moveLeft, MatrixType_moveRight)),
      rule(inSet(UP()), DomMovement_north(MatrixType_moveNorth)),
      rule(inSet(DOWN()), DomMovement_south(MatrixType_moveSouth)),
      rule(inSet(SPACE().concat(ENTER())), MatrixType_execute),
    ]);
    var MatrixType_getKeyupRules = constant([rule(inSet(SPACE()), stopEventForFirefox)]);
    var MatrixType = typical(MatrixType_schema, NoState.init, MatrixType_getKeydownRules, MatrixType_getKeyupRules, function() {
      return Option.some(MatrixType_focusIn);
    });
    var MenuType_schema = [FieldSchema_strict("selector"), FieldSchema_defaulted("execute", defaultExecute), FieldSchema_defaulted("moveOnTab", false)];
    var MenuType_execute = function(component, simulatedEvent, menuConfig) {
      return menuConfig.focusManager.get(component).bind(function(focused) {
        return menuConfig.execute(component, simulatedEvent, focused);
      });
    };
    var MenuType_focusIn = function(component, menuConfig) {
      SelectorFind_descendant(component.element(), menuConfig.selector).each(function(first) {
        menuConfig.focusManager.set(component, first);
      });
    };
    var MenuType_moveUp = function(element, focused, info) {
      return horizontal(element, info.selector, focused, -1);
    };
    var MenuType_moveDown = function(element, focused, info) {
      return horizontal(element, info.selector, focused, +1);
    };
    var fireShiftTab = function(component, simulatedEvent, menuConfig) {
      return menuConfig.moveOnTab ? DomMovement_move(MenuType_moveUp)(component, simulatedEvent, menuConfig) : Option.none();
    };
    var fireTab = function(component, simulatedEvent, menuConfig) {
      return menuConfig.moveOnTab ? DomMovement_move(MenuType_moveDown)(component, simulatedEvent, menuConfig) : Option.none();
    };
    var MenuType_getKeydownRules = constant([
      rule(inSet(UP()), DomMovement_move(MenuType_moveUp)),
      rule(inSet(DOWN()), DomMovement_move(MenuType_moveDown)),
      rule(and([isShift, inSet(TAB())]), fireShiftTab),
      rule(and([isNotShift, inSet(TAB())]), fireTab),
      rule(inSet(ENTER()), MenuType_execute),
      rule(inSet(SPACE()), MenuType_execute),
    ]);
    var MenuType_getKeyupRules = constant([rule(inSet(SPACE()), stopEventForFirefox)]);
    var MenuType = typical(MenuType_schema, NoState.init, MenuType_getKeydownRules, MenuType_getKeyupRules, function() {
      return Option.some(MenuType_focusIn);
    });
    var SpecialType_schema = [
      onKeyboardHandler("onSpace"),
      onKeyboardHandler("onEnter"),
      onKeyboardHandler("onShiftEnter"),
      onKeyboardHandler("onLeft"),
      onKeyboardHandler("onRight"),
      onKeyboardHandler("onTab"),
      onKeyboardHandler("onShiftTab"),
      onKeyboardHandler("onUp"),
      onKeyboardHandler("onDown"),
      onKeyboardHandler("onEscape"),
      FieldSchema_defaulted("stopSpaceKeyup", false),
      FieldSchema_option("focusIn"),
    ];
    var SpecialType_getKeydownRules = function(component, simulatedEvent, specialInfo) {
      return [
        rule(inSet(SPACE()), specialInfo.onSpace),
        rule(and([isNotShift, inSet(ENTER())]), specialInfo.onEnter),
        rule(and([isShift, inSet(ENTER())]), specialInfo.onShiftEnter),
        rule(and([isShift, inSet(TAB())]), specialInfo.onShiftTab),
        rule(and([isNotShift, inSet(TAB())]), specialInfo.onTab),
        rule(inSet(UP()), specialInfo.onUp),
        rule(inSet(DOWN()), specialInfo.onDown),
        rule(inSet(LEFT()), specialInfo.onLeft),
        rule(inSet(RIGHT()), specialInfo.onRight),
        rule(inSet(SPACE()), specialInfo.onSpace),
        rule(inSet(ESCAPE()), specialInfo.onEscape),
      ];
    };
    var SpecialType_getKeyupRules = function(component, simulatedEvent, specialInfo) {
      return specialInfo.stopSpaceKeyup ? [rule(inSet(SPACE()), stopEventForFirefox)] : [];
    };
    var SpecialType = typical(SpecialType_schema, NoState.init, SpecialType_getKeydownRules, SpecialType_getKeyupRules, function(specialInfo) {
      return specialInfo.focusIn;
    });
    var acyclic = AcyclicType.schema();
    var cyclic = CyclicType.schema();
    var flow = FlowType.schema();
    var KeyboardBranches_flatgrid = FlatgridType.schema();
    var KeyboardBranches_matrix = MatrixType.schema();
    var execution = ExecutionType.schema();
    var KeyboardBranches_menu = MenuType.schema();
    var special = SpecialType.schema();
    var Keying = Behaviour_createModes({
      branchKey: "mode",
      branches: KeyboardBranches_namespaceObject,
      name: "keying",
      active: {
        events: function(keyingConfig, keyingState) {
          var handler = keyingConfig.handler;
          return handler.toEvents(keyingConfig, keyingState);
        },
      },
      apis: {
        focusIn: function(component, keyConfig, keyState) {
          keyConfig.sendFocusIn(keyConfig).fold(
            function() {
              component.getSystem().triggerFocus(component.element(), component.element());
            },
            function(sendFocusIn) {
              sendFocusIn(component, keyConfig, keyState);
            }
          );
        },
        setGridSize: function(component, keyConfig, keyState, numRows, numColumns) {
          if (!Objects_hasKey(keyState, "setGridSize")) {
            console$1.error("Layout does not support setGridSize");
          } else {
            keyState.setGridSize(numRows, numColumns);
          }
        },
      },
      state: KeyingState_namespaceObject,
    });
    var onLoad = function(component, repConfig, repState) {
      repConfig.store.manager.onLoad(component, repConfig, repState);
    };
    var onUnload = function(component, repConfig, repState) {
      repConfig.store.manager.onUnload(component, repConfig, repState);
    };
    var setValue = function(component, repConfig, repState, data) {
      repConfig.store.manager.setValue(component, repConfig, repState, data);
    };
    var getValue = function(component, repConfig, repState) {
      return repConfig.store.manager.getValue(component, repConfig, repState);
    };
    var getState = function(component, repConfig, repState) {
      return repState;
    };
    var ActiveRepresenting_events = function(repConfig, repState) {
      var es = repConfig.resetOnDom ?
        [
          runOnAttached(function(comp, se) {
            onLoad(comp, repConfig, repState);
          }),
          runOnDetached(function(comp, se) {
            onUnload(comp, repConfig, repState);
          }),
        ] :
        [loadEvent(repConfig, repState, onLoad)];
      return derive(es);
    };
    var memory = function() {
      var data = Cell(null);
      var readState = function() {
        return {
          mode: "memory",
          value: data.get()
        };
      };
      var isNotSet = function() {
        return data.get() === null;
      };
      var clear = function() {
        data.set(null);
      };
      return BehaviourState_nu({
        set: data.set,
        get: data.get,
        isNotSet: isNotSet,
        clear: clear,
        readState: readState
      });
    };
    var manual = function() {
      var readState = function() {};
      return BehaviourState_nu({
        readState: readState
      });
    };
    var dataset = function() {
      var dataByValue = Cell({});
      var dataByText = Cell({});
      var readState = function() {
        return {
          mode: "dataset",
          dataByValue: dataByValue.get(),
          dataByText: dataByText.get()
        };
      };
      var clear = function() {
        dataByValue.set({});
        dataByText.set({});
      };
      var lookup = function(itemString) {
        return Objects_readOptFrom(dataByValue.get(), itemString).orThunk(function() {
          return Objects_readOptFrom(dataByText.get(), itemString);
        });
      };
      var update = function(items) {
        var currentDataByValue = dataByValue.get();
        var currentDataByText = dataByText.get();
        var newDataByValue = {};
        var newDataByText = {};
        Arr_each(items, function(item) {
          newDataByValue[item.value] = item;
          Objects_readOptFrom(item, "meta").each(function(meta) {
            Objects_readOptFrom(meta, "text").each(function(text) {
              newDataByText[text] = item;
            });
          });
        });
        dataByValue.set(__assign({}, currentDataByValue, newDataByValue));
        dataByText.set(__assign({}, currentDataByText, newDataByText));
      };
      return BehaviourState_nu({
        readState: readState,
        lookup: lookup,
        update: update,
        clear: clear
      });
    };
    var RepresentState_init = function(spec) {
      return spec.store.manager.state(spec);
    };
    var DatasetStore_setValue = function(component, repConfig, repState, data) {
      var store = repConfig.store;
      repState.update([data]);
      store.setValue(component, data);
      repConfig.onSetValue(component, data);
    };
    var DatasetStore_getValue = function(component, repConfig, repState) {
      var store = repConfig.store;
      var key = store.getDataKey(component);
      return repState.lookup(key).fold(
        function() {
          return store.getFallbackEntry(key);
        },
        function(data) {
          return data;
        }
      );
    };
    var DatasetStore_onLoad = function(component, repConfig, repState) {
      var store = repConfig.store;
      store.initialValue.each(function(data) {
        DatasetStore_setValue(component, repConfig, repState, data);
      });
    };
    var DatasetStore_onUnload = function(component, repConfig, repState) {
      repState.clear();
    };
    var DatasetStore = [
      FieldSchema_option("initialValue"),
      FieldSchema_strict("getFallbackEntry"),
      FieldSchema_strict("getDataKey"),
      FieldSchema_strict("setValue"),
      Fields_output("manager", {
        setValue: DatasetStore_setValue,
        getValue: DatasetStore_getValue,
        onLoad: DatasetStore_onLoad,
        onUnload: DatasetStore_onUnload,
        state: dataset
      }),
    ];
    var ManualStore_getValue = function(component, repConfig, repState) {
      return repConfig.store.getValue(component);
    };
    var ManualStore_setValue = function(component, repConfig, repState, data) {
      repConfig.store.setValue(component, data);
      repConfig.onSetValue(component, data);
    };
    var ManualStore_onLoad = function(component, repConfig, repState) {
      repConfig.store.initialValue.each(function(data) {
        repConfig.store.setValue(component, data);
      });
    };
    var ManualStore = [
      FieldSchema_strict("getValue"),
      FieldSchema_defaulted("setValue", Fun_noop),
      FieldSchema_option("initialValue"),
      Fields_output("manager", {
        setValue: ManualStore_setValue,
        getValue: ManualStore_getValue,
        onLoad: ManualStore_onLoad,
        onUnload: Fun_noop,
        state: NoState.init
      }),
    ];
    var MemoryStore_setValue = function(component, repConfig, repState, data) {
      repState.set(data);
      repConfig.onSetValue(component, data);
    };
    var MemoryStore_getValue = function(component, repConfig, repState) {
      return repState.get();
    };
    var MemoryStore_onLoad = function(component, repConfig, repState) {
      repConfig.store.initialValue.each(function(initVal) {
        if (repState.isNotSet()) {
          repState.set(initVal);
        }
      });
    };
    var MemoryStore_onUnload = function(component, repConfig, repState) {
      repState.clear();
    };
    var MemoryStore = [FieldSchema_option("initialValue"), Fields_output("manager", {
      setValue: MemoryStore_setValue,
      getValue: MemoryStore_getValue,
      onLoad: MemoryStore_onLoad,
      onUnload: MemoryStore_onUnload,
      state: memory
    })];
    var RepresentSchema = [defaultedOf("store", {
      mode: "memory"
    }, ValueSchema_choose("mode", {
      memory: MemoryStore,
      manual: ManualStore,
      dataset: DatasetStore
    })), onHandler("onSetValue"), FieldSchema_defaulted("resetOnDom", false)];
    var Representing = Behaviour_create({
      fields: RepresentSchema,
      name: "representing",
      active: ActiveRepresenting_namespaceObject,
      apis: RepresentApis_namespaceObject,
      extra: {
        setValueFrom: function(component, source) {
          var value = Representing.getValue(source);
          Representing.setValue(component, value);
        },
      },
      state: RepresentState_namespaceObject,
    });
    var FocusApis_focus = function(component, focusConfig) {
      if (!focusConfig.ignore) {
        Focus_focus(component.element());
        focusConfig.onFocus(component);
      }
    };
    var FocusApis_blur = function(component, focusConfig) {
      if (!focusConfig.ignore) {
        Focus_blur(component.element());
      }
    };
    var isFocused = function(component) {
      return Focus_hasFocus(component.element());
    };
    var ActiveFocus_exhibit = function(base, focusConfig) {
      var mod = focusConfig.ignore ? {} : {
        attributes: {
          tabindex: "-1"
        }
      };
      return DomModification_nu(mod);
    };
    var ActiveFocus_events = function(focusConfig) {
      return derive(
        [
          AlloyEvents_run(SystemEvents_focus(), function(component, simulatedEvent) {
            FocusApis_focus(component, focusConfig);
            simulatedEvent.stop();
          }),
        ].concat(
          focusConfig.stopMousedown ?
          [
            AlloyEvents_run(mousedown(), function(_, simulatedEvent) {
              simulatedEvent.event().prevent();
            }),
          ] :
          []
        )
      );
    };
    var FocusSchema = [onHandler("onFocus"), FieldSchema_defaulted("stopMousedown", false), FieldSchema_defaulted("ignore", false)];
    var Focusing = Behaviour_create({
      fields: FocusSchema,
      name: "focusing",
      active: ActiveFocus_namespaceObject,
      apis: FocusApis_namespaceObject
    });
    var updateAriaState = function(component, toggleConfig, toggleState) {
      var ariaInfo = toggleConfig.aria;
      ariaInfo.update(component, ariaInfo, toggleState.get());
    };
    var updateClass = function(component, toggleConfig, toggleState) {
      toggleConfig.toggleClass.each(function(toggleClass) {
        if (toggleState.get()) {
          Class_add(component.element(), toggleClass);
        } else {
          Class_remove(component.element(), toggleClass);
        }
      });
    };
    var ToggleApis_toggle = function(component, toggleConfig, toggleState) {
      ToggleApis_set(component, toggleConfig, toggleState, !toggleState.get());
    };
    var ToggleApis_on = function(component, toggleConfig, toggleState) {
      toggleState.set(true);
      updateClass(component, toggleConfig, toggleState);
      updateAriaState(component, toggleConfig, toggleState);
    };
    var ToggleApis_off = function(component, toggleConfig, toggleState) {
      toggleState.set(false);
      updateClass(component, toggleConfig, toggleState);
      updateAriaState(component, toggleConfig, toggleState);
    };
    var ToggleApis_set = function(component, toggleConfig, toggleState, state) {
      var action = state ? ToggleApis_on : ToggleApis_off;
      action(component, toggleConfig, toggleState);
    };
    var isOn = function(component, toggleConfig, toggleState) {
      return toggleState.get();
    };
    var ToggleApis_onLoad = function(component, toggleConfig, toggleState) {
      ToggleApis_set(component, toggleConfig, toggleState, toggleConfig.selected);
    };
    var ActiveToggle_exhibit = function(base, toggleConfig, toggleState) {
      return DomModification_nu({});
    };
    var ActiveToggle_events = function(toggleConfig, toggleState) {
      var execute = executeEvent(toggleConfig, toggleState, ToggleApis_toggle);
      var load = loadEvent(toggleConfig, toggleState, ToggleApis_onLoad);
      return derive(flatten([toggleConfig.toggleOnExecute ? [execute] : [],
        [load]
      ]));
    };
    var TogglingState_init = function(spec) {
      var cell = Cell(false);
      var set = function(state) {
        return cell.set(state);
      };
      var clear = function() {
        return cell.set(false);
      };
      var get = function() {
        return cell.get();
      };
      var readState = function() {
        return cell.get();
      };
      return {
        readState: readState,
        get: get,
        set: set,
        clear: clear
      };
    };
    var updatePressed = function(component, ariaInfo, status) {
      Attr_set(component.element(), "aria-pressed", status);
      if (ariaInfo.syncWithExpanded) {
        updateExpanded(component, ariaInfo, status);
      }
    };
    var updateSelected = function(component, ariaInfo, status) {
      Attr_set(component.element(), "aria-selected", status);
    };
    var updateChecked = function(component, ariaInfo, status) {
      Attr_set(component.element(), "aria-checked", status);
    };
    var updateExpanded = function(component, ariaInfo, status) {
      Attr_set(component.element(), "aria-expanded", status);
    };
    var tagAttributes = {
      button: ["aria-pressed"],
      "input:checkbox": ["aria-checked"]
    };
    var roleAttributes = {
      button: ["aria-pressed"],
      listbox: ["aria-pressed", "aria-expanded"],
      menuitemcheckbox: ["aria-checked"]
    };
    var detectFromTag = function(component) {
      var elem = component.element();
      var rawTag = Node_name(elem);
      var suffix = rawTag === "input" && Attr_has(elem, "type") ? ":" + Attr_get(elem, "type") : "";
      return Objects_readOptFrom(tagAttributes, rawTag + suffix);
    };
    var detectFromRole = function(component) {
      var elem = component.element();
      if (!Attr_has(elem, "role")) {
        return Option.none();
      } else {
        var role = Attr_get(elem, "role");
        return Objects_readOptFrom(roleAttributes, role);
      }
    };
    var updateAuto = function(component, _ariaInfo, status) {
      var attributes = detectFromRole(component)
        .orThunk(function() {
          return detectFromTag(component);
        })
        .getOr([]);
      Arr_each(attributes, function(attr) {
        Attr_set(component.element(), attr, status);
      });
    };
    var ToggleSchema = [
      FieldSchema_defaulted("selected", false),
      FieldSchema_option("toggleClass"),
      FieldSchema_defaulted("toggleOnExecute", true),
      defaultedOf(
        "aria", {
          mode: "none"
        },
        ValueSchema_choose("mode", {
          pressed: [FieldSchema_defaulted("syncWithExpanded", false), Fields_output("update", updatePressed)],
          checked: [Fields_output("update", updateChecked)],
          expanded: [Fields_output("update", updateExpanded)],
          selected: [Fields_output("update", updateSelected)],
          none: [Fields_output("update", Fun_noop)],
        })
      ),
    ];
    var Toggling = Behaviour_create({
      fields: ToggleSchema,
      name: "toggling",
      active: ActiveToggle_namespaceObject,
      apis: ToggleApis_namespaceObject,
      state: TogglingState_namespaceObject
    });
    var hoverEvent = "alloy.item-hover";
    var focusEvent = "alloy.item-focus";
    var onHover = function(item) {
      if (search(item.element()).isNone() || Focusing.isFocused(item)) {
        if (!Focusing.isFocused(item)) {
          Focusing.focus(item);
        }
        emitWith(item, hoverEvent, {
          item: item
        });
      }
    };
    var onFocus = function(item) {
      emitWith(item, focusEvent, {
        item: item
      });
    };
    var hover = constant(hoverEvent);
    var ItemEvents_focus = constant(focusEvent);
    var builder = function(detail) {
      return {
        dom: detail.dom,
        domModification: __assign({}, detail.domModification, {
          attributes: __assign({
            role: detail.toggling.isSome() ? "menuitemcheckbox" : "menuitem"
          }, detail.domModification.attributes, {
            "aria-haspopup": detail.hasSubmenu
          }, detail.hasSubmenu ? {
            "aria-expanded": false
          } : {}),
        }),
        behaviours: SketchBehaviours.augment(detail.itemBehaviours, [
          detail.toggling.fold(Toggling.revoke, function(tConfig) {
            return Toggling.config(__assign({
              aria: {
                mode: "checked"
              }
            }, tConfig));
          }),
          Focusing.config({
            ignore: detail.ignoreFocus,
            stopMousedown: detail.ignoreFocus,
            onFocus: function(component) {
              onFocus(component);
            },
          }),
          Keying.config({
            mode: "execution"
          }),
          Representing.config({
            store: {
              mode: "memory",
              initialValue: detail.data
            }
          }),
          AddEventsBehaviour_config("item-type-events", [AlloyEvents_run(tapOrClick(), emitExecute), AlloyEvents_cutter(mousedown()), AlloyEvents_run(mouseover(), onHover), AlloyEvents_run(focusItem(), Focusing.focus)]),
        ]),
        components: detail.components,
        eventOrder: detail.eventOrder,
      };
    };
    var ItemType_schema = [
      FieldSchema_strict("data"),
      FieldSchema_strict("components"),
      FieldSchema_strict("dom"),
      FieldSchema_defaulted("hasSubmenu", false),
      FieldSchema_option("toggling"),
      SketchBehaviours.field("itemBehaviours", [Toggling, Focusing, Keying, Representing]),
      FieldSchema_defaulted("ignoreFocus", false),
      FieldSchema_defaulted("domModification", {}),
      Fields_output("builder", builder),
      FieldSchema_defaulted("eventOrder", {}),
    ];
    var ItemType = ItemType_schema;
    var SeparatorType_builder = function(detail) {
      return {
        dom: detail.dom,
        components: detail.components,
        events: derive([AlloyEvents_stopper(focusItem())])
      };
    };
    var SeparatorType_schema = [FieldSchema_strict("dom"), FieldSchema_strict("components"), Fields_output("builder", SeparatorType_builder)];
    var SeparatorType = SeparatorType_schema;
    var WidgetParts_owner = function() {
      return "item-widget";
    };
    var WidgetParts_parts = constant([
      PartType_required({
        name: "widget",
        overrides: function(detail) {
          return {
            behaviours: Behaviour_derive([
              Representing.config({
                store: {
                  mode: "manual",
                  getValue: function(component) {
                    return detail.data;
                  },
                  setValue: function() {},
                },
              }),
            ]),
          };
        },
      }),
    ]);
    var WidgetType_builder = function(detail) {
      var subs = substitutes(WidgetParts_owner(), detail, WidgetParts_parts());
      var components = AlloyParts_components(WidgetParts_owner(), detail, subs.internals());
      var focusWidget = function(component) {
        return getPart(component, detail, "widget").map(function(widget) {
          Keying.focusIn(widget);
          return widget;
        });
      };
      var onHorizontalArrow = function(component, simulatedEvent) {
        return EditableFields_inside(simulatedEvent.event().target()) ?
          Option.none() :
          (function() {
            if (detail.autofocus) {
              simulatedEvent.setSource(component.element());
              return Option.none();
            } else {
              return Option.none();
            }
          })();
      };
      return {
        dom: detail.dom,
        components: components,
        domModification: detail.domModification,
        events: derive([
          runOnExecute(function(component, simulatedEvent) {
            focusWidget(component).each(function(widget) {
              simulatedEvent.stop();
            });
          }),
          AlloyEvents_run(mouseover(), onHover),
          AlloyEvents_run(focusItem(), function(component, simulatedEvent) {
            if (detail.autofocus) {
              focusWidget(component);
            } else {
              Focusing.focus(component);
            }
          }),
        ]),
        behaviours: SketchBehaviours.augment(detail.widgetBehaviours, [
          Representing.config({
            store: {
              mode: "memory",
              initialValue: detail.data
            }
          }),
          Focusing.config({
            ignore: detail.ignoreFocus,
            onFocus: function(component) {
              onFocus(component);
            },
          }),
          Keying.config({
            mode: "special",
            focusIn: detail.autofocus ?
              function(component) {
                focusWidget(component);
              } :
              revoke(),
            onLeft: onHorizontalArrow,
            onRight: onHorizontalArrow,
            onEscape: function(component, simulatedEvent) {
              if (!Focusing.isFocused(component) && !detail.autofocus) {
                Focusing.focus(component);
                return Option.some(true);
              } else if (detail.autofocus) {
                simulatedEvent.setSource(component.element());
                return Option.none();
              } else {
                return Option.none();
              }
            },
          }),
        ]),
      };
    };
    var WidgetType_schema = [
      FieldSchema_strict("uid"),
      FieldSchema_strict("data"),
      FieldSchema_strict("components"),
      FieldSchema_strict("dom"),
      FieldSchema_defaulted("autofocus", false),
      FieldSchema_defaulted("ignoreFocus", false),
      SketchBehaviours.field("widgetBehaviours", [Representing, Focusing, Keying]),
      FieldSchema_defaulted("domModification", {}),
      defaultUidsSchema(WidgetParts_parts()),
      Fields_output("builder", WidgetType_builder),
    ];
    var WidgetType = WidgetType_schema;
    var MenuSchema_itemSchema = ValueSchema_choose("type", {
      widget: WidgetType,
      item: ItemType,
      separator: SeparatorType
    });
    var configureGrid = function(detail, movementInfo) {
      return {
        mode: "flatgrid",
        selector: "." + detail.markers.item,
        initSize: {
          numColumns: movementInfo.initSize.numColumns,
          numRows: movementInfo.initSize.numRows
        },
        focusManager: detail.focusManager
      };
    };
    var configureMatrix = function(detail, movementInfo) {
      return {
        mode: "matrix",
        selectors: {
          row: movementInfo.rowSelector,
          cell: "." + detail.markers.item
        },
        focusManager: detail.focusManager
      };
    };
    var configureMenu = function(detail, movementInfo) {
      return {
        mode: "menu",
        selector: "." + detail.markers.item,
        moveOnTab: movementInfo.moveOnTab,
        focusManager: detail.focusManager
      };
    };
    var MenuSchema_parts = constant([
      group({
        factory: {
          sketch: function(spec) {
            var itemInfo = asRawOrDie("menu.spec item", MenuSchema_itemSchema, spec);
            return itemInfo.builder(itemInfo);
          },
        },
        name: "items",
        unit: "item",
        defaults: function(detail, u) {
          return u.hasOwnProperty("uid") ? u : __assign({}, u, {
            uid: Tagger_generate("item")
          });
        },
        overrides: function(detail, u) {
          return {
            type: u.type,
            ignoreFocus: detail.fakeFocus,
            domModification: {
              classes: [detail.markers.item]
            }
          };
        },
      }),
    ]);
    var MenuSchema_schema = constant([
      FieldSchema_strict("value"),
      FieldSchema_strict("items"),
      FieldSchema_strict("dom"),
      FieldSchema_strict("components"),
      FieldSchema_defaulted("eventOrder", {}),
      SketchBehaviours_field("menuBehaviours", [Highlighting, Representing, Composing, Keying]),
      defaultedOf(
        "movement", {
          mode: "menu",
          moveOnTab: true
        },
        ValueSchema_choose("mode", {
          grid: [initSize(), Fields_output("config", configureGrid)],
          matrix: [Fields_output("config", configureMatrix), FieldSchema_strict("rowSelector")],
          menu: [FieldSchema_defaulted("moveOnTab", true), Fields_output("config", configureMenu)],
        })
      ),
      itemMarkers(),
      FieldSchema_defaulted("fakeFocus", false),
      FieldSchema_defaulted("focusManager", FocusManagers_dom()),
      onHandler("onHighlight"),
    ]);
    var MenuSchema_name = constant("menu");
    var MenuEvents_focus = constant("alloy.menu-focus");
    var MenuSpec_make = function(detail, components, spec, externals) {
      return {
        uid: detail.uid,
        dom: detail.dom,
        markers: detail.markers,
        behaviours: augment(detail.menuBehaviours, [
          Highlighting.config({
            highlightClass: detail.markers.selectedItem,
            itemClass: detail.markers.item,
            onHighlight: detail.onHighlight
          }),
          Representing.config({
            store: {
              mode: "memory",
              initialValue: detail.value
            }
          }),
          Composing.config({
            find: Option.some
          }),
          Keying.config(detail.movement.config(detail, detail.movement)),
        ]),
        events: derive([
          AlloyEvents_run(ItemEvents_focus(), function(menu, simulatedEvent) {
            var event = simulatedEvent.event();
            menu.getSystem()
              .getByDom(event.target())
              .each(function(item) {
                Highlighting.highlight(menu, item);
                simulatedEvent.stop();
                emitWith(menu, MenuEvents_focus(), {
                  menu: menu,
                  item: item
                });
              });
          }),
          AlloyEvents_run(hover(), function(menu, simulatedEvent) {
            var item = simulatedEvent.event().item();
            Highlighting.highlight(menu, item);
          }),
        ]),
        components: components,
        eventOrder: detail.eventOrder,
        domModification: {
          attributes: {
            role: "menu"
          }
        },
      };
    };
    var Menu = Sketcher_composite({
      name: "Menu",
      configFields: MenuSchema_schema(),
      partFields: MenuSchema_parts(),
      factory: MenuSpec_make
    });
    var AriaFocus_preserve = function(f, container) {
      var ownerDoc = Traverse_owner(container);
      var refocus = Focus_active(ownerDoc).bind(function(focused) {
        var hasFocus = function(elem) {
          return Compare_eq(focused, elem);
        };
        return hasFocus(container) ? Option.some(container) : descendant(container, hasFocus);
      });
      var result = f(container);
      refocus.each(function(oldFocus) {
        Focus_active(ownerDoc)
          .filter(function(newFocus) {
            return Compare_eq(newFocus, oldFocus);
          })
          .fold(function() {
            Focus_focus(oldFocus);
          }, Fun_noop);
      });
      return result;
    };
    var ReplaceApis_set = function(component, replaceConfig, replaceState, data) {
      detachChildren(component);
      AriaFocus_preserve(function() {
        var children = Arr_map(data, component.getSystem().build);
        Arr_each(children, function(l) {
          attach(component, l);
        });
      }, component.element());
    };
    var insert = function(component, replaceConfig, insertion, childSpec) {
      var child = component.getSystem().build(childSpec);
      attachWith(component, child, insertion);
    };
    var ReplaceApis_append = function(component, replaceConfig, replaceState, appendee) {
      insert(component, replaceConfig, append, appendee);
    };
    var ReplaceApis_prepend = function(component, replaceConfig, replaceState, prependee) {
      insert(component, replaceConfig, prepend, prependee);
    };
    var ReplaceApis_remove = function(component, replaceConfig, replaceState, removee) {
      var children = contents(component, replaceConfig);
      var foundChild = Arr_find(children, function(child) {
        return Compare_eq(removee.element(), child.element());
      });
      foundChild.each(detach);
    };
    var contents = function(component, replaceConfig) {
      return component.components();
    };
    var replaceAt = function(component, replaceConfig, replaceState, replaceeIndex, replacer) {
      var children = contents(component, replaceConfig);
      return Option.from(children[replaceeIndex]).map(function(replacee) {
        ReplaceApis_remove(component, replaceConfig, replaceState, replacee);
        replacer.each(function(r) {
          insert(
            component,
            replaceConfig,
            function(p, c) {
              appendAt(p, c, replaceeIndex);
            },
            r
          );
        });
        return replacee;
      });
    };
    var replaceBy = function(component, replaceConfig, replaceState, replaceePred, replacer) {
      var children = contents(component, replaceConfig);
      return findIndex(children, replaceePred).bind(function(replaceeIndex) {
        return replaceAt(component, replaceConfig, replaceState, replaceeIndex, replacer);
      });
    };
    var Replacing = Behaviour_create({
      fields: [],
      name: "replacing",
      apis: ReplaceApis_namespaceObject
    });
    var ButtonBase_events = function(optAction) {
      var executeHandler = function(action) {
        return AlloyEvents_run(SystemEvents_execute(), function(component, simulatedEvent) {
          action(component);
          simulatedEvent.stop();
        });
      };
      var onClick = function(component, simulatedEvent) {
        simulatedEvent.stop();
        emitExecute(component);
      };
      var onMousedown = function(component, simulatedEvent) {
        simulatedEvent.cut();
      };
      var pointerEvents = api_PlatformDetection.detect().deviceType.isTouch() ? [AlloyEvents_run(tap(), onClick)] : [AlloyEvents_run(click(), onClick), AlloyEvents_run(mousedown(), onMousedown)];
      return derive(flatten([optAction.map(executeHandler).toArray(), pointerEvents]));
    };
    var Button_factory = function(detail) {
      var events = ButtonBase_events(detail.action);
      var tag = detail.dom.tag;
      var lookupAttr = function(attr) {
        return Objects_readOptFrom(detail.dom, "attributes").bind(function(attrs) {
          return Objects_readOptFrom(attrs, attr);
        });
      };
      var getModAttributes = function() {
        if (tag === "button") {
          var type = lookupAttr("type").getOr("button");
          var roleAttrs = lookupAttr("role")
            .map(function(role) {
              return {
                role: role
              };
            })
            .getOr({});
          return __assign({
            type: type
          }, roleAttrs);
        } else {
          var role = lookupAttr("role").getOr("button");
          return {
            role: role
          };
        }
      };
      return {
        uid: detail.uid,
        dom: detail.dom,
        components: detail.components,
        events: events,
        behaviours: SketchBehaviours.augment(detail.buttonBehaviours, [Focusing.config({}), Keying.config({
          mode: "execution",
          useSpace: true,
          useEnter: true
        })]),
        domModification: {
          attributes: getModAttributes()
        },
        eventOrder: detail.eventOrder,
      };
    };
    var Button = Sketcher_single({
      name: "Button",
      factory: Button_factory,
      configFields: [
        FieldSchema_defaulted("uid", undefined),
        FieldSchema_strict("dom"),
        FieldSchema_defaulted("components", []),
        SketchBehaviours.field("buttonBehaviours", [Focusing, Keying]),
        FieldSchema_option("action"),
        FieldSchema_option("role"),
        FieldSchema_defaulted("eventOrder", {}),
      ],
    });
    var nativeDisabled = ["input", "button", "textarea"];
    var DisableApis_onLoad = function(component, disableConfig, disableState) {
      if (disableConfig.disabled) {
        disable(component, disableConfig, disableState);
      }
    };
    var hasNative = function(component) {
      return contains(nativeDisabled, Node_name(component.element()));
    };
    var nativeIsDisabled = function(component) {
      return Attr_has(component.element(), "disabled");
    };
    var nativeDisable = function(component) {
      Attr_set(component.element(), "disabled", "disabled");
    };
    var nativeEnable = function(component) {
      Attr_remove(component.element(), "disabled");
    };
    var ariaIsDisabled = function(component) {
      return Attr_get(component.element(), "aria-disabled") === "true";
    };
    var ariaDisable = function(component) {
      Attr_set(component.element(), "aria-disabled", "true");
    };
    var ariaEnable = function(component) {
      Attr_set(component.element(), "aria-disabled", "false");
    };
    var disable = function(component, disableConfig, disableState) {
      disableConfig.disableClass.each(function(disableClass) {
        Class_add(component.element(), disableClass);
      });
      var f = hasNative(component) ? nativeDisable : ariaDisable;
      f(component);
    };
    var enable = function(component, disableConfig, disableState) {
      disableConfig.disableClass.each(function(disableClass) {
        Class_remove(component.element(), disableClass);
      });
      var f = hasNative(component) ? nativeEnable : ariaEnable;
      f(component);
    };
    var isDisabled = function(component) {
      return hasNative(component) ? nativeIsDisabled(component) : ariaIsDisabled(component);
    };
    var ActiveDisable_exhibit = function(base, disableConfig, disableState) {
      return DomModification_nu({
        classes: disableConfig.disabled ? disableConfig.disableClass.map(pure).getOr([]) : []
      });
    };
    var ActiveDisable_events = function(disableConfig, disableState) {
      return derive([
        AlloyEvents_abort(SystemEvents_execute(), function(component, simulatedEvent) {
          return isDisabled(component);
        }),
        loadEvent(disableConfig, disableState, DisableApis_onLoad),
      ]);
    };
    var DisableSchema = [FieldSchema_defaulted("disabled", false), FieldSchema_option("disableClass")];
    var Disabling = Behaviour_create({
      fields: DisableSchema,
      name: "disabling",
      active: ActiveDisable_namespaceObject,
      apis: DisableApis_namespaceObject
    });
    var InputBase_schema = constant([
      FieldSchema_option("data"),
      FieldSchema_defaulted("inputAttributes", {}),
      FieldSchema_defaulted("inputStyles", {}),
      FieldSchema_defaulted("tag", "input"),
      FieldSchema_defaulted("inputClasses", []),
      onHandler("onSetValue"),
      FieldSchema_defaulted("styles", {}),
      FieldSchema_defaulted("eventOrder", {}),
      SketchBehaviours_field("inputBehaviours", [Representing, Focusing]),
      FieldSchema_defaulted("selectOnFocus", true),
    ]);
    var focusBehaviours = function(detail) {
      return Behaviour_derive([
        Focusing.config({
          onFocus: detail.selectOnFocus === false ?
            Fun_noop :
            function(component) {
              var input = component.element();
              var value = Value_get(input);
              input.dom().setSelectionRange(0, value.length);
            },
        }),
      ]);
    };
    var InputBase_behaviours = function(detail) {
      return __assign({},
        focusBehaviours(detail),
        augment(detail.inputBehaviours, [
          Representing.config({
            store: {
              mode: "manual",
              initialValue: detail.data.getOr(undefined),
              getValue: function(input) {
                return Value_get(input.element());
              },
              setValue: function(input, data) {
                var current = Value_get(input.element());
                if (current !== data) {
                  Value_set(input.element(), data);
                }
              },
            },
            onSetValue: detail.onSetValue,
          }),
        ])
      );
    };
    var InputBase_dom = function(detail) {
      return {
        tag: detail.tag,
        attributes: __assign({
          type: "text"
        }, detail.inputAttributes),
        styles: detail.inputStyles,
        classes: detail.inputClasses
      };
    };
    var Input_factory = function(detail, spec) {
      return {
        uid: detail.uid,
        dom: InputBase_dom(detail),
        components: [],
        behaviours: InputBase_behaviours(detail),
        eventOrder: detail.eventOrder
      };
    };
    var Input = Sketcher_single({
      name: "Input",
      configFields: InputBase_schema(),
      factory: Input_factory
    });
    var record = function(spec) {
      var uid = isSketchSpec(spec) && Objects_hasKey(spec, "uid") ? spec.uid : Tagger_generate("memento");
      var get = function(anyInSystem) {
        return anyInSystem.getSystem().getByUid(uid).getOrDie();
      };
      var getOpt = function(anyInSystem) {
        return anyInSystem.getSystem().getByUid(uid).fold(Option.none, Option.some);
      };
      var asSpec = function() {
        return __assign({}, spec, {
          uid: uid
        });
      };
      return {
        get: get,
        getOpt: getOpt,
        asSpec: asSpec
      };
    };
    var TextContent_get = function(element) {
      return element.dom().textContent;
    };
    var TextContent_set = function(element, value) {
      element.dom().textContent = value;
    };
    var searchTerm = "UNSUPPORTED-HTML:begin";
    var highlightTerm = function(index) {
      return {
        start: index,
        finish: index + searchTerm.length
      };
    };
    var findPrevious = function(value, endIndex) {
      var prevUnsupported = value.lastIndexOf(searchTerm, endIndex - 1);
      if (prevUnsupported > -1) {
        return Option.some(highlightTerm(prevUnsupported));
      } else {
        var cycleUnsupported = value.lastIndexOf(searchTerm);
        if (cycleUnsupported > -1) {
          return Option.some(highlightTerm(cycleUnsupported));
        }
      }
      return Option.none();
    };
    var findNext = function(value, startIndex) {
      var nextUnsupported = value.indexOf(searchTerm, startIndex + 1);
      if (nextUnsupported > -1) {
        return Option.some(highlightTerm(nextUnsupported));
      } else {
        var cycleUnsupported = value.indexOf(searchTerm);
        if (cycleUnsupported > -1) {
          return Option.some(highlightTerm(cycleUnsupported));
        }
      }
      return Option.none();
    };
    var hasUnsupported = function(value) {
      return value.indexOf(searchTerm) > -1;
    };
    var hideOnMaximize = function(target) {
      return {
        target: target,
        stylesOnMaximize: {
          display: Option.some("none")
        },
        stylesOnNormal: {
          display: Option.none()
        }
      };
    };
    var viewables = [{
        ancestor: ".tox-sidebar-wrap",
        subjects: [{
            target: ".tox-edit-area",
            stylesOnMaximize: {
              "max-width": Option.some("0px")
            },
            stylesOnNormal: {
              "max-width": Option.some("100%")
            }
          },
          {
            target: ".tox-sidebar",
            stylesOnMaximize: {
              "flex-grow": Option.some("1")
            },
            stylesOnNormal: {
              "flex-grow": Option.none()
            }
          },
          {
            target: ".tox-sidebar__slider",
            stylesOnMaximize: {
              "flex-grow": Option.some("1")
            },
            stylesOnNormal: {
              "flex-grow": Option.none()
            }
          },
          {
            target: ".tox-sidebar__pane",
            stylesOnMaximize: {
              width: Option.some("100%")
            },
            stylesOnNormal: {}
          },
          hideOnMaximize(".tox-resize-slider"),
        ],
      },
      {
        ancestor: ".tox-editor-container",
        subjects: [hideOnMaximize(".tox-menubar"), hideOnMaximize(".tox-toolbar")]
      },
    ];
    var applyFix = function(viewable, comp, mode) {
      SelectorFind_closest(comp.element(), viewable.ancestor).each(function(ancestor) {
        Arr_each(viewable.subjects, function(subject) {
          SelectorFind_descendant(ancestor, subject.target).each(function(target) {
            var styles = mode === ViewMode.Maximized ? subject.stylesOnMaximize : subject.stylesOnNormal;
            setOptions(target, styles);
            reflow(target);
          });
        });
      });
    };
    var updateView = function(comp, mode) {
      Arr_each(viewables, function(viewable) {
        applyFix(viewable, comp, mode);
      });
    };
    var showHintsEvent = generate("show-hints-event");
    var navigateHintsEvent = generate("navigate-hints-event");
    var closeHintsEvent = generate("close-hints-event");
    var executeHintEvent = generate("execute-hint-event");
    var showHelpEvent = generate("show-help-event");
    var showCompletionDialogEvent = generate("show-completion-dialog-event");
    var MarkdownEditor = function(handlers, icons) {
      var memInput = record(
        Input.sketch({
          tag: "textarea",
          inputStyles: {
            "flex-grow": "1",
            padding: "5px",
            "font-size": "14px",
            "font-family": "monospace",
            "white-space": "pre-wrap",
            "box-sizing": "border-box",
            "min-width": "100%",
            "max-width": "100%"
          },
          selectOnFocus: false,
          inputBehaviours: Behaviour_derive([
            AddEventsBehaviour_config("markdown-input-events", [
              AlloyEvents_run(NativeEvents_input(), handlers.onChange),
              AlloyEvents_run(keydown(), function(input, se) {
                var raw = se.event().raw();
                if (raw.which === 27) {
                  emit(input, closeHintsEvent);
                } else if (raw.which === 32 && raw.ctrlKey) {
                  emit(input, raw.shiftKey ? showHelpEvent : showHintsEvent);
                } else if (raw.which === 40 || raw.which === 38) {
                  emitWith(input, navigateHintsEvent, {
                    se: se
                  });
                } else if (raw.which === 13) {
                  emitWith(input, executeHintEvent, {
                    se: se
                  });
                } else if (raw.which === 190 && raw.ctrlKey) {
                  emit(input, showCompletionDialogEvent);
                }
              }),
            ]),
          ]),
        })
      );
      var apis = {
        focusEditor: function(comp) {
          memInput.getOpt(comp).each(Focusing.focus);
        },
        setHint: function(comp, hint) {
          var dialogIndicator = hint.dialog
            .map(function() {
              return "...";
            })
            .getOr("");
          var replacements = [{
              dom: {
                tag: "span",
                styles: {
                  padding: "5px"
                },
                innerHtml: escapeText(hint.description + dialogIndicator)
              }
            },
            {
              dom: {
                tag: "code",
                styles: {
                  "font-family": "monospace",
                  "font-size": "small",
                  padding: "5px",
                  "white-space": "pre-wrap"
                },
                innerHtml: escapeText(hint.example)
              }
            },
          ];
          /*console.log({
            replacements: replacements
          });*/
          memHintFooter.getOpt(comp).each(function(hintFooter) {
            Replacing.set(hintFooter, replacements);
          });
        },
        insertAtCursor: function(comp, operation) {
          memInput.getOpt(comp).each(function(input) {
            console.log({
              operation: operation
            });
            var dom = input.element().dom();
            var initStart = dom.selectionStart;
            var initFinish = dom.selectionEnd;
            var currentValue = Representing.getValue(input);
            var nextValue = currentValue.substring(0, initStart) + operation.insertion + currentValue.substring(initFinish);
            Representing.setValue(input, nextValue);
            input.element().dom().selectionStart = initStart + operation.offset;
            input.element().dom().selectionEnd = input.element().dom().selectionStart;
            updateButtonDisabledStates.throttle(comp);
          });
        },
        setContent: function(comp, content) {
          memInput.getOpt(comp).each(function(input) {
            Representing.setValue(input, content);
            updateButtonDisabledStates.throttle(comp);
          });
        },
        getContent: function(comp) {
          return memInput.getOpt(comp).map(Representing.getValue).getOr("");
        },
        setSelection: function(comp, start, finish) {
          memInput.getOpt(comp).each(function(input) {
            input.element().dom().selectionStart = start;
            input.element().dom().selectionEnd = finish;
          });
        },
        getSelection: function(comp) {
          return memInput.getOpt(comp).map(function(input) {
            return {
              start: input.element().dom().selectionStart,
              finish: input.element().dom().selectionEnd
            };
          });
        },
        getAnchor: function(comp) {
          return memInput.getOpt(comp).map(function(input) {
            var element = input.element();
            var div = node_Element.fromTag("div");
            var copyStyle = window$1.getComputedStyle(element.dom());
            for (var _i = 0, _a = copyStyle; _i < _a.length; _i++) {
              var prop = _a[_i];
              Css_set(div, prop, copyStyle[prop]);
            }
            Css_set(div, "top", "0px");
            Css_set(div, "left", "0px");
            Css_set(div, "white-space", "pre-wrap");
            Css_set(div, "display", "block");
            Css_set(div, "visibility", "hidden");
            var value = Value_get(element);
            var textContent = value.substring(0, element.dom().selectionStart);
            TextContent_set(div, textContent);
            append(Body_body(), div);
            var marker = node_Element.fromHtml('<span style="display: inline-block;">\ufeff</span>');
            append(div, marker);
            var rng = document$1.createRange();
            rng.setStartBefore(marker.dom());
            rng.setEndAfter(marker.dom());
            var pos = {
              x: rng.getBoundingClientRect().right - div.dom().offsetLeft + element.dom().offsetLeft - element.dom().scrollLeft,
              y: rng.getBoundingClientRect().bottom - div.dom().offsetTop + element.dom().offsetTop - element.dom().scrollTop,
            };
            Remove_remove(div);
            return pos;
          });
        },
      };
      var memHintFooter = record({
        dom: {
          tag: "div",
          classes: ["markdown-tips"],
          styles: {
            "background-color": "#eee",
            color: "#333",
            // Remove hints footer
            //display: "flex",
            display: "none",
            "flex-direction": "row",
            "justify-content": "space-between"
          }
        },
        behaviours: Behaviour_derive([Replacing.config({})]),
      });
      var updateInputSelection = function(input, found) {
        input.element().dom().selectionStart = found.start;
        input.element().dom().selectionEnd = found.start;
        Focusing.focus(input);
        input.element().dom().selectionEnd = found.finish;
      };
      var updateButtonDisabledStates = Throttler_last(function(comp) {
        var value = comp.getApis().getContent(comp);
        var hasIssues = hasUnsupported(value);
        memPreviousButton.getOpt(comp).each(function(prevButton) {
          var f = hasIssues ? Disabling.enable : Disabling.disable;
          f(prevButton);
        });
        memNextButton.getOpt(comp).each(function(nextButton) {
          var f = hasIssues ? Disabling.enable : Disabling.disable;
          f(nextButton);
        });
      }, 100);
      var makeFullscreenButton = function() {
        return Button.sketch({
          dom: {
            tag: "button",
            classes: ["tox-button", "tox-button--secondary", "tox-button--icon", "tox-button--naked"],
            attributes: {
              type: "button"
            },
            styles: {
              float: "right",
              "background-color": "white",
              margin: "5px"
            }
          },
          components: [{
            dom: {
              tag: "div",
              classes: ["tox-icon"],
              innerHtml: icons.fullscreen
            }
          }],
          action: function(comp) {
            var mode = Toggling.isOn(comp) ? ViewMode.Normal : ViewMode.Maximized;
            updateView(comp, mode);
          },
          buttonBehaviours: Behaviour_derive([Toggling.config({})]),
        });
      };
      var makeSearchButton = function(settings) {
        return Button.sketch({
          dom: {
            tag: "button",
            classes: ["tox-button", "tox-button--secondary", "markdown-navigation-button", "tox-button--icon", "tox-button--naked"],
            attributes: {
              title: settings.tooltip
            },
            styles: {
              "background-color": "white",
              margin: "5px",
              "padding-left": "12px",
              "padding-right": "12px"
            },
          },
          components: [{
            dom: {
              tag: "span",
              classes: ["tox-icon", "tox-tbtn__icon-wrap"],
              innerHtml: icons[settings.iconName]
            }
          }],
          action: function(nextComp) {
            memInput.getOpt(nextComp).each(function(input) {
              var value = Representing.getValue(input);
              var start = input.element().dom().selectionStart;
              settings.finder(value, start).each(function(found) {
                updateInputSelection(input, found);
              });
            });
          },
          buttonBehaviours: Behaviour_derive([Disabling.config({})]),
        });
      };
      var memPreviousButton = record(makeSearchButton({
        iconName: "previous",
        finder: findPrevious,
        tooltip: "Previous Conversion Issue"
      }));
      var memNextButton = record(makeSearchButton({
        iconName: "next",
        finder: findNext,
        tooltip: "Next Conversion Issue"
      }));
      return {
        dom: {
          tag: "div",
          classes: ["markdown-preview"],
          styles: {
            display: "flex",
            flex: "1",
            "min-width": "0",
            "border-left": "1px solid #ccc",
            "flex-direction": "column"
          }
        },
        components: [{
            dom: {
              tag: "div",
              classes: ["markdown-toolbar"],
              styles: {
                "background-color": "#eee",
                color: "#333",
                padding: "5px",
                // Remove top header
                //display: "flex"
                display: "none",
                "flex-direction": "row",
                "justify-content": "space-between"
              }
            },
            components: [makeFullscreenButton(), {
              dom: {
                tag: "div",
                classes: ["tox-navigations"],
                styles: {
                  display: "flex"
                }
              },
              components: [memPreviousButton.asSpec(), memNextButton.asSpec()]
            }],
          },
          memInput.asSpec(),
          memHintFooter.asSpec(),
        ],
        behaviours: Behaviour_derive([
          AddEventsBehaviour_config("footer-events", [
            runOnAttached(function(comp) {
              return comp.getApis().setHint(comp, {
                description: "\ufeff",
                example: "\ufeff",
                dialog: Option.none()
              });
            }),
            AlloyEvents_run(NativeEvents_input(), updateButtonDisabledStates.throttle),
          ]),
        ]),
        apis: apis,
      };
    };
    var HintMenu = function() {
      var handleNavigationKey = function(hintMenu, se) {
        var all = Replacing.contents(hintMenu);
        return Arr_head(all).map(function(menu) {
          Highlighting.getHighlighted(menu).fold(
            function() {
              return Highlighting.highlightFirst(menu);
            },
            function(item) {
              emitWith(item, "keydown", {
                raw: se.event().raw()
              });
            }
          );
          return true;
        });
      };
      var handleExecuteKey = function(hintMenu) {
        var all = Replacing.contents(hintMenu);
        return Arr_head(all).bind(function(menu) {
          return Highlighting.getHighlighted(menu).fold(
            function() {
              emit(hintMenu, closeHintsEvent);
              return Option.none();
            },
            function(item) {
              emitExecute(item);
              return Option.some(true);
            }
          );
        });
      };
      var apis = {
        handleExecuteKey: handleExecuteKey,
        handleNavigationKey: handleNavigationKey,
        showHints: function(comp, hints, onAction) {
          Replacing.set(comp, [
            Menu.sketch({
              dom: {
                tag: "div",
                classes: ["tox-menu", "tox-collection", "tox-collection--list", "tox-selected-menu"]
              },
              components: [{
                dom: {
                  tag: "div",
                  classes: ["tox-collection__group"]
                },
                components: [Menu.parts().items({})]
              }],
              value: "dog",
              fakeFocus: true,
              items: Arr_map(hints, function(hint) {
                return {
                  type: "item",
                  data: {
                    value: hint.hint
                  },
                  dom: {
                    tag: "div",
                    classes: ["tox-collection__item"]
                  },
                  itemBehaviours: Behaviour_derive([
                    AddEventsBehaviour_config("item-events", [
                      runOnExecute(function(item) {
                        return onAction(hint);
                      }),
                    ]),
                  ]),
                  components: [{
                    dom: {
                      tag: "div",
                      classes: ["tox-collection__item-label"],
                      innerHtml: hint.hint
                    }
                  }],
                };
              }),
              markers: {
                item: "tox-collection__item",
                selectedItem: "tox-collection__item--active"
              },
              focusManager: highlights(),
            }),
          ]);
        },
        hideHints: function(comp) {
          Replacing.set(comp, []);
        },
      };
      return {
        dom: {
          tag: "div",
          classes: ["menu-container"],
          styles: {
            "z-index": "50000"
          }
        },
        components: [],
        behaviours: Behaviour_derive([Replacing.config({})]),
        apis: apis
      };
    };
    var MarkdownDescriptions_getCandidates = function(icons) {
      return [{
          value: "bold",
          text: "Bold",
          icon: icons.bold,
          keywords: ["bold", "strong", "important", "star"],
          instructions: "\n  <p>The <code>**</code> and <code>__</code> characters are used to create bold in markdown. You must use <strong>two</strong> of them, otherwise it will be italics. They must start after a space (or on a new line)</p>\n\n  <p>Examples</p>\n  <p><code>  This **word** is bold</code></p>",
          hint: boldHintInstance,
        },
        {
          value: "italic",
          text: "Italic",
          icon: icons.italic,
          keywords: ["italic", "em", "slant", "emphasis", "emphasise", "star"],
          instructions: "\n  <p>The <code>*</code> and <code>_</code> characters are used to create italic in markdown. They must start after a space (or on a new line)</p>\n\n  <p>Examples</p>\n  <p><code>  This *word* is italic</code></p>",
          hint: italicHintInstance,
        },
        {
          value: "strikethrough",
          text: "Strikethrough",
          icon: icons["strike-through"],
          keywords: ["del", "strike", "cross", "line", "ruled"],
          instructions: "\n  <p>The <code>~~</code> character is used to create strikethrough in markdown. You must use <strong>two</strong> of them. They must start after a space (or on a new line)</p>\n\n  <p>Examples</p>\n  <p><code>  This is a ~~strikethrough~~ element</code></p>",
          hint: strikeHintInstance,
        },
        {
          value: "code",
          text: "Inline Code",
          icon: icons["code-sample"],
          keywords: ["code", "backtick", "monospace", "span", "inline"],
          instructions: "\n  <p>The <code>`</code> character is used to create inline code or special monospace format in markdown. It must start after a space (or on a new line)</p>\n\n  <p>Examples</p>\n  <p><code>  This `word` is an inline code</code></p>",
          hint: codeHintInstance,
        },
        {
          value: "codeblock",
          text: "Code Block",
          icon: icons.sourcecode,
          keywords: ["code", "backtick", "monospace", "block", "function"],
          instructions: "\n  <p>The <code>```</code> characters are used to create code blocks in markdown. You must use <strong>three</strong> of them.\n  They must start after a space (or on a new line). Indenting text by <strong>four spaces</stong> also creates code blocks. A code block can have multiple lines inside it</p>\n\n  <p>Examples</p>\n  <p><code>  ```This  is <br /> a code block```</code></p>",
          hint: codeblockHintInstance,
        },
        {
          value: "comment",
          text: "Comment",
          icon: icons.comment,
          keywords: ["comment", "html", "ignore"],
          instructions: "\n  <p>The <code>&lt;!--</code> and <code>--&gt;</code> characters are used to start and end HTML comments respectively. They must start after a space (or on a new line)</p>\n\n  <p>Examples</p>\n  <p><code>&lt;!-- This is a HTML comment --&gt;</code></p>",
          hint: commentHintInstance,
        },
        {
          value: "hr",
          text: "Horizontal Rule",
          icon: icons["horizontal-rule"],
          keywords: ["hr", "line", "horizontal", "rule"],
          instructions: "\n  <p>The <code>---</code> and <code>***</code> characters are used to create a horizontal rule in markdown. You must use <strong>three</strong> of them. They must be preceeded by two new lines</p>\n\n  <p>Examples</p>\n  <p><code>This is a horizontal rule </code><br /><br />---</p>",
          hint: hrHintInstance,
        },
        {
          value: "table",
          text: "Table",
          icon: icons.table,
          keywords: ["table", "grid", "rows", "columns", "row", "column", "cell"],
          instructions: "\n  <p>The <code>|</code> and <code>-</code> characters are used to create tables in markdown. Hyphens are used to create each column's header, while pipes separate each column. Tables must be preceeded by a new line.\n  The pipes on either end of the table are optional. Width of the cells need to be perfectly aligned within columns. You must use at least three hyphens in each column of the header row.\n  You must align text to the left, right, or center of a column by including <code>:</code> to the left, right, or on both sides of the hyphens within the header row.\n  You must use a <code><code> before the <code>|</code> to include a pipe as content within your cell. You can use other markdown elements inside the table.</p>\n\n  <p>Examples</p>\n  <p><code>  | Left-aligned | Center-aligned | Right-aligned | <br /> | :---     |   :---:    |      ---: | <br /> | Cell one   | cell two   | cell three  |</code></p>",
          hint: tableHintInstance,
        },
        {
          value: "tasklist",
          text: "Task List",
          icon: "checklist",
          keywords: ["checkbox", "check", "task", "tick", "box", "item"],
          instructions: "\n  <p>The <code>- [x]</code> and <code>- [ ]</code> characters are used to create checked and unchecked list items respectively in markdown. They must start on a new line</p>\n\n  <p>Examples</p>\n  <p><code>- [x] This is a checked list item <br /> - [ ] This is an unchecked list item</code></p>",
          hint: taskHintInstance,
        },
        {
          value: "blockquote",
          text: "Blockquote",
          icon: icons.quote,
          keywords: ["quote", "blockquote", "cite", "reference"],
          instructions: "\n  <p>The <code>></code> character is used to create a blockquote in markdown. Blockquotes can have multiple paragraphs and can have other block elements inside. They must start  on a new line</p>\n\n  <p>Examples</p>\n  <p><code>  >This is a blockquote</code></p>",
          hint: blockquoteHintInstance,
        },
        {
          value: "image",
          text: "Image",
          icon: icons.image,
          keywords: ["picture", "image", "jpg", "video", "gif"],
          instructions: '\n  <p>The <code>![Alt text](url/to/image "Optional title")</code> format is used to insert an image in markdown. You must use an exclamation mark: !;\n  followed by a set of square brackets, containing the alt attribute text for the image;\n  followed by a set of parentheses, containing the URL or path to the image, and an optional title attribute enclosed in double or single quotes. They must start after a space (or on a new line)</p>\n\n  <p>Examples</p>\n  <p><code>  ![Super cute kitty](http://pictures.com/scottishfold.jpg)</code></p>',
          hint: imageHintInstance,
        },
        {
          value: "link",
          text: "Link",
          icon: icons.link,
          keywords: ["link", "href", "hyperlink", "anchor", "a"],
          instructions: "\n  <p>The <code><link></code> and <code>[link text](url)</code> characters are used to create links in markdown. Wrapping a valid URL or email in <strong><></strong> will turn it into a link whose text is the link itself.\n  To create an inline link you must wrap the link text in brackets <strong>[ ]</strong>, and then wrap the link URL in parentheses ( ). They must start after a space (or on a new line)</p>\n\n  <p>Examples</p>\n  <p><code>  This **word** is bold</code></p>",
          hint: linkHintInstance,
        },
        {
          value: "outer-ul",
          text: "Unordered List",
          icon: icons["list-bull-default"],
          keywords: ["list", "bullet", "ul", "unordered", "item", "dot", "dash"],
          instructions: "\n  <p>Preceding list items with a <code>*</code>, <code>+</code> or <code>-</code> characters create unordered list in markdown. You can use the characters interchangeably.\n  They must start on a new line. You must use a HTML comment to differentiate between two different lists. </p>\n\n  <p>Examples</p>\n  <p><code>  * This <br />+ is a <br />- bullet list</code></p>",
          hint: outerUlHintInstance,
        },
        {
          value: "outer-ol",
          text: "Ordered List",
          icon: icons["list-num-default"],
          keywords: ["list", "num", "ordered", "ol", "item", "alpha", "greek"],
          instructions: "\n  <p>Preceding list items with a <code>number</code> followed by a <code>.</code> creates unordered list in markdown. They must start on a new line. You must use a HTML comment to differentiate between two different lists. </p>\n\n  <p>Examples</p>\n  <p><code>  1. This <br />2. is a <br />3. numbered list</code></p>",
          hint: outerOlHintInstance,
        },
        {
          value: "h1",
          text: "Header 1",
          icon: "",
          keywords: ["heading", "header", "level", "h1"],
          instructions: "\n  <p>The <code>#</code> character is used to create h1 headings in markdown. You must use <strong>one</strong> of them to indicate size 1. They must start on a new line</p>\n\n  <p>Examples</p>\n  <p><code>  # This is a heading of size 1</code></p>",
          hint: h1HintInstance,
        },
        {
          value: "h2",
          text: "Header 2",
          icon: "",
          keywords: ["heading", "header", "level", "h2"],
          instructions: "\n  <p>The <code>##</code> characters are used to create h2 headings in markdown. You must use <strong>two</strong> of them to indicate size 2. They must start on a new line</p>\n\n  <p>Examples</p>\n  <p><code>  ## This is a heading of size 2</code></p>",
          hint: h2HintInstance,
        },
        {
          value: "h3",
          text: "Header 3",
          icon: "",
          keywords: ["heading", "header", "level", "h3"],
          instructions: "\n  <p>The <code>###</code> characters are used to create h3 headings in markdown. You must use <strong>three</strong> of them to indicate size 3. They must start on a new line</p>\n\n  <p>Examples</p>\n  <p><code>  ### This is a heading of size 3</code></p>",
          hint: h3HintInstance,
        },
        {
          value: "h4",
          text: "Header 4",
          icon: "",
          keywords: ["heading", "header", "level", "h4"],
          instructions: "\n  <p>The <code>####</code> characters are used to create h4 headings in markdown. You must use <strong>four</strong> of them to indicate size 4. They must start or on a new line</p>\n\n  <p>Examples</p>\n  <p><code>  #### This is a heading of size 4</code></p>",
          hint: h4HintInstance,
        },
        {
          value: "h5",
          text: "Header 5",
          icon: "",
          keywords: ["heading", "header", "level", "h5"],
          instructions: "\n  <p>The <code>#####</code> characters are used to create h5 headings in markdown. You must use <strong>five</strong> of them to indicate size 5. They must start or on a new line</p>\n\n  <p>Examples</p>\n  <p><code>  ##### This is a heading of size 5</code></p>",
          hint: h5HintInstance,
        },
        {
          value: "h6",
          text: "Header 6",
          icon: "",
          keywords: ["heading", "header", "level", "h6"],
          instructions: "\n  <p>The <code>######</code> characters are used to create h6 headings in markdown. You must use <strong>six</strong> of them to indicate size 6. They must start on a new line</p>\n\n  <p>Examples</p>\n  <p><code>  ###### This is a heading of size 6</code></p>",
          hint: h6HintInstance,
        },
      ];
    };
    var openHelpDialogWith = function(editor, params, settings) {
      var focused = Focus_active();
      var candidates = MarkdownDescriptions_getCandidates(editor.ui.registry.getAll().icons);
      var wrapInstructions = function(name, instructions) {
        var wrapper = node_Element.fromTag("div");
        Css_setAll(wrapper, {
          "padding-top": "1em",
          "padding-left": "1em",
          "border-left": "1px solid #ccc",
          display: "flex",
          "margin-left": "-5em",
          "flex-direction": "column",
          "flex-grow": "1"
        });
        var info = Elements_fromHtml(instructions);
        var header = node_Element.fromTag("h3");
        Html_set(header, name);
        Css_setAll(header, {
          "margin-bottom": "1em",
          "font-weight": "bold",
          "font-size": "larger"
        });
        InsertAll_append(wrapper, [header].concat(info));
        return Html_getOuter(wrapper);
      };
      var setInstructions = function(name, instructions) {
        dialogApi.setPartialData("instructions", wrapInstructions(name, instructions));
      };
      var updateInstructions = function(val) {
        Arr_find(candidates, function(candidate) {
          return candidate.value === val;
        }).fold(
          function() {
            return dialogApi.setPartialData("instructions", "No information");
          },
          function(candidate) {
            setInstructions(candidate.text, candidate.instructions);
          }
        );
      };
      var updateCandidates = function(pattern) {
        var matches = Arr_filter(candidates, function(candidate) {
          return Arr_exists(candidate.keywords, function(kw) {
            return kw.toLowerCase().indexOf(pattern.toLowerCase()) > -1;
          });
        });
        var rest = difference(candidates, matches);
        var all = matches.concat(rest).slice(0, settings.pageSize);
        dialogApi.setPartialData("markdowns", all);
        Arr_head(all).each(function(first) {
          setInstructions(first.text, first.instructions);
        });
      };
      var chooseHint = function(api, hintValue) {
        Arr_find(candidates, function(candidate) {
          return candidate.value === hintValue;
        }).each(function(candidate) {
          settings.onChoose(candidate);
          api.close();
        });
      };
      var dialogApi = editor.windowManager.open({
          title: "Markdown Cheatsheet",
          size: settings.pageSize > 3 ? "large" : "medium",
          body: {
            type: "panel",
            items: [{
                type: "input",
                name: "markdown-term"
              },
              {
                type: "grid",
                columns: 2,
                items: [{
                    type: "collection",
                    columns: 1,
                    name: "markdowns",
                    onFocus: updateInstructions
                  },
                  {
                    type: "htmlpanel",
                    name: "instructions",
                    html: "",
                    size: 2
                  },
                ],
              },
            ],
          },
          buttons: [],
          onChange: function(_dialogApi, changeData) {
            if (changeData.name === "markdown-term") {
              var pattern = dialogApi.getData()["markdown-term"];
              updateCandidates(pattern);
            }
          },
          onAction: function(api, details) {
            if (details.name === "markdowns") {
              chooseHint(api, details.value);
            }
          },
          onSubmit: function(api, details) {
            var data = api.getData();
            var first = Arr_head(data.markdowns);
            first.each(function(hint) {
              chooseHint(api, hint.value);
            });
          },
          onClose: function() {
            focused.each(Focus_focus);
          },
          initialData: {
            "markdown-term": "",
            markdowns: candidates.slice(0, settings.pageSize),
            instructions: wrapInstructions(candidates[0].text, candidates[0].instructions)
          },
        },
        params
      );
      return dialogApi;
    };
    var openHelpDialogInline = function(editor, position, onChoose) {
      return openHelpDialogWith(editor, {
        inline: "custom",
        anchor: {
          anchor: "makeshift",
          x: position.x,
          y: position.y
        }
      }, {
        pageSize: 3,
        onChoose: onChoose
      });
    };
    var openHelpDialogModal = function(editor, onChoose) {
      return openHelpDialogWith(editor, {}, {
        pageSize: 15,
        onChoose: onChoose
      });
    };
    var openCompletionDialog = function(editor, pos, title, dialog, onAccept) {
      var items = Arr_map(dialog.params, function(param) {
        return __assign({
          name: param.name
        }, param.field);
      });
      var initialData = {};
      Arr_each(dialog.params, function(param) {
        initialData[param.name] = param.field.type === "sizeinput" ? {
          width: "",
          height: ""
        } : "";
      });
      console.log({
        items: items,
        initialData: initialData
      });
      var dialogSpec = {
        title: title,
        body: {
          type: "panel",
          items: items
        },
        buttons: [],
        onSubmit: function(api) {
          var output = dialog.accept(api.getData());
          api.close();
          onAccept(output);
        },
        initialData: initialData,
      };
      var dialogApi = editor.windowManager.open(dialogSpec, {
        inline: "custom",
        anchor: {
          anchor: "makeshift",
          x: pos.x,
          y: pos.y
        }
      });
      dialogApi.focus(dialog.params[0].name);
    };
    var createMothership = function(settings) {
      var root = GuiFactory_build({
        dom: {
          tag: "div",
          styles: {
            display: "flex",
            "flex-grow": "1",
            "max-width": "100%"
          }
        },
        behaviours: Behaviour_derive([
          AddEventsBehaviour_config("mothership-events", [
            AlloyEvents_run(showHintsEvent, settings.onListHints),
            AlloyEvents_run(navigateHintsEvent, function(comp, se) {
              return settings.onMarkdownEditorNavigation(se.event().se());
            }),
            AlloyEvents_run(closeHintsEvent, function(comp, se) {
              return settings.onCloseHints();
            }),
            AlloyEvents_run(executeHintEvent, function(comp, se) {
              return settings.onExecuteHint(se.event().se());
            }),
            AlloyEvents_run(showHelpEvent, function(comp, se) {
              return settings.showHelp();
            }),
            AlloyEvents_run(showCompletionDialogEvent, function(comp, se) {
              return settings.showCompletionDialog();
            }),
          ]),
        ]),
      });
      return takeover(root);
    };
    var createSink = function() {
      return GuiFactory_build({
        dom: {
          tag: "div"
        },
        behaviours: Behaviour_derive([Positioning.config({
          useFixed: true
        })])
      });
    };
    var createMarkdownEditor = function(editor, settings) {
      var icons = editor.ui.registry.getAll().icons;
      return GuiFactory_build(MarkdownEditor({
        onChange: settings.onChange
      }, {
        fullscreen: icons.fullscreen,
        previous: icons["chevron-left"],
        next: icons["chevron-right"]
      }));
    };
    var updateHtml = function(converter, editor, markdown) {
      converter.markdownToHtml(markdown).get(function(response) {
        editor.fire(response.type, {
          content: response.content
        });
      });
    };
    var updateMarkdown = function(converter, editor, html) {
      converter.htmlToMarkdown(html).get(function(response) {
        editor.fire(response.type, {
          content: response.content
        });
      });
    };
    var showHintTip = function(markdownEditor, sink, hintMenu, result) {
      markdownEditor.getApis().setHint(markdownEditor, result);
    };
    var listHints = function(editor, markdownEditor, sink, hintMenu) {
      var value = markdownEditor.getApis().getContent(markdownEditor);
      markdownEditor
        .getApis()
        .getSelection(markdownEditor)
        .each(function(selection) {
          var hints = getHints(value, selection.start, selection.finish);
          markdownEditor
            .getApis()
            .getAnchor(markdownEditor)
            .each(function(pos) {
              Css_set(sink.element(), "visibility", "hidden");
              attach(sink, hintMenu);
              Positioning.position(sink, {
                anchor: "makeshift",
                x: pos.x,
                y: pos.y
              }, hintMenu);
              hintMenu.getApis().showHints(hintMenu, hints, function(hint) {
                if (hint.type === "operation") {
                  markdownEditor.getApis().setContent(markdownEditor, hint.content);
                  markdownEditor.getApis().setSelection(markdownEditor, hint.selectionStart, hint.selectionEnd);
                } else if (hint.type === "action") {
                  if (hint.action === HintActions.ShowHelpDialog) {
                    openHelpDialogModal(editor, function(candidate) {
                      markdownEditor.getApis().insertAtCursor(markdownEditor, candidate.hint.operation);
                    });
                  }
                }
                hintMenu.getApis().hideHints(hintMenu);
                detach(hintMenu);
              });
              Positioning.position(sink, {
                anchor: "makeshift",
                x: pos.x,
                y: pos.y
              }, hintMenu);
              Css_remove(sink.element(), "visibility");
            });
        });
    };
    var updateHintTip = function(value, markdownEditor, sink, hintMenu) {
      var optHint = markdownEditor
        .getApis()
        .getSelection(markdownEditor)
        .bind(function(selection) {
          return getHint(value, selection.start, selection.finish);
        });
      optHint.fold(
        function() {
          hintMenu.getApis().hideHints(hintMenu);
        },
        function(result) {
          showHintTip(markdownEditor, sink, hintMenu, result);
        }
      );
    };
    var onMarkdownChange = Throttler_last(function(converter, editor, markdownEditor, sink, hintMenu) {
      var value = markdownEditor.getApis().getContent(markdownEditor);
      updateHtml(converter, editor, value);
      updateHintTip(value, markdownEditor, sink, hintMenu);
    }, 100);
    var Sidebar = function(editor, converter, elem) {
      var mothership = createMothership({
        onListHints: function() {
          listHints(editor, markdownEditor, sink, hintMenu);
        },
        onMarkdownEditorNavigation: function(se) {
          if (hintMenu.getSystem().isConnected()) {
            hintMenu
              .getApis()
              .handleNavigationKey(hintMenu, se)
              .each(function() {
                return se.stop();
              });
          }
        },
        onCloseHints: function() {
          hintMenu.getApis().hideHints(hintMenu);
        },
        onExecuteHint: function(se) {
          hintMenu
            .getApis()
            .handleExecuteKey(hintMenu)
            .each(function() {
              return se.stop();
            });
        },
        showHelp: function() {
          markdownEditor
            .getApis()
            .getAnchor(markdownEditor)
            .each(function(pos) {
              openHelpDialogInline(editor, pos, function(candidate) {
                markdownEditor.getApis().insertAtCursor(markdownEditor, candidate.hint.operation);
              });
            });
        },
        showCompletionDialog: function() {
          var markdownApis = markdownEditor.getApis();
          var content = markdownApis.getContent(markdownEditor);
          markdownApis.getSelection(markdownEditor).each(function(selection) {
            getHint(content, selection.start, selection.finish).each(function(hintTooltip) {
              markdownEditor
                .getApis()
                .getAnchor(markdownEditor)
                .each(function(pos) {
                  hintTooltip.dialog.each(function(hintDialog) {
                    openCompletionDialog(editor, pos, hintTooltip.description, hintDialog, function(output) {
                      markdownApis.insertAtCursor(markdownEditor, output);
                      markdownApis.focusEditor(markdownEditor);
                    });
                  });
                });
            });
          });
        },
      });
      registerInspector("mothership", mothership);
      var sink = createSink();
      var hintMenu = GuiFactory_build(HintMenu());
      var markdownEditor = createMarkdownEditor(editor, {
        onChange: function() {
          onMarkdownChange.throttle(converter, editor, markdownEditor, sink, hintMenu);
        },
      });
      var editorChangeHandler = function() {
        var content = editor.getContent();
        updateMarkdown(converter, editor, content);
        Decoration.forHtml(converter, node_Element.fromDom(editor.getBody()));
      };
      editor.on("change", editorChangeHandler);
      editorChangeHandler();
      onMarkdownChange.throttle(converter, editor, markdownEditor, sink, hintMenu);
      var onConvertedMarkdownToHtml = function(e) {
        var unsupportedHtmlRegex = /\n?<!-- (UNSUPPORTED-HTML:(begin|end)\(\w*\)|Comment ends this list) -->\n?/g;
        var strippedContent = e.content.replace(unsupportedHtmlRegex, "");
        editor.setContent(strippedContent);
      };
      var onConvertedHtmlToMarkdown = function(e) {
        markdownEditor.getApis().setContent(markdownEditor, e.content);
      };
      editor.on("markdown->html", onConvertedMarkdownToHtml);
      editor.on("html->markdown", onConvertedHtmlToMarkdown);
      attachSystem(elem, mothership);
      mothership.add(markdownEditor);
      mothership.add(sink);
      var destroy = function() {
        detachSystem(mothership);
        editor.off("change", editorChangeHandler);
        editor.off("markdown->html", onConvertedMarkdownToHtml);
        editor.off("html->markdown", onConvertedHtmlToMarkdown);
      };
      return {
        destroy: destroy
      };
    };
    tinymce.PluginManager.add("markdown", function(editor, pluginUrl) {
      addMenuItems(editor);
      var converter = createJs();
      var syncConverter = createSync();
      editor.on("init", function(e) {

        // Add css file
        var cssText = `
          [data-ephox-redpen-violation] {
            outline-color: rgba(200, 0, 0, 0.2);
            background-color: rgba(200, 0, 0, 0.2);
          }`;
        editor.dom.parseStyle(cssText);
        editor.serializer.addTempAttr("data-ephox-redpen-violation");
      });

      // tinymce.getContent() format handler for 'markdown'
      editor.on("GetContent", function(e) {
        if (e.format === "markdown") {
          e.content = syncConverter.htmlToMarkdown(e.content).content;
        }
      });
      // tinymce.setContent() format handler for 'markdown'
      editor.on("BeforeSetContent", function(e) {
        if (e.format === "markdown") {
          e.content = syncConverter.markdownToHtml(e.content).content;
        }
      });
      editor.ui.registry.addSidebar("markdown", {
        tooltip: "Markdown (Ctrl+M)",
        icon: "markdown",
        onSetup: function(api) {
          var sidebar = Sidebar(editor, converter, node_Element.fromDom(api.element()));
          return function() {
            sidebar.destroy();
          };
        },
        onShow: function(api) {
          var event = new CustomEvent('markdown-sidebar-toggle-state', {'detail': true});
          window.parent.document.dispatchEvent(event);
          // Hack to fix width of the markdown pane
          var width = (window.innerWidth * 0.50).toString() + "px";
          document.getElementsByClassName("markdown-preview")[0].style.width = width;
        },
        onHide: function(api) {
          var event = new CustomEvent('markdown-sidebar-toggle-state', {'detail': false});
          window.parent.document.dispatchEvent(event);
        },
      });
    });
    var Plugin = (__webpack_exports__["default"] = function() {});
  },
]);

