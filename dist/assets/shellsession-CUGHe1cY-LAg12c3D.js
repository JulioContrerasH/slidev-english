import e from"./shellscript-4vnCAIm1-DOv5BRyJ.js";const s=Object.freeze({displayName:"Shell Session",fileTypes:["sh-session"],name:"shellsession",patterns:[{captures:{1:{name:"entity.other.prompt-prefix.shell-session"},2:{name:"punctuation.separator.prompt.shell-session"},3:{name:"source.shell",patterns:[{include:"source.shell"}]}},match:"(?x) ^ (?: ( (?:\\(\\S+\\)\\s*)? (?: sh\\S*?                       | \\w+\\S+[@:]\\S+(?:\\s+\\S+)? | \\[\\S+?[@:][^\\n]+?\\].*? ) ) \\s* )? ( [>$#%❯➜] | \\p{Greek} ) \\s+ (.*) $"},{match:"^.+$",name:"meta.output.shell-session"}],scopeName:"text.shell-session",embeddedLangs:["shellscript"],aliases:["console"]});var l=[...e,s];export{l as default};
