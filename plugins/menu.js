const _0x49459c = function () {
    let _0x3465ee = true;
    return function (_0x17d3f1, _0x1fd680) {
      const _0x4d777b = _0x3465ee ? function () {
        if (_0x1fd680) {
          const _0x5f5714 = _0x1fd680.apply(_0x17d3f1, arguments);
          _0x1fd680 = null;
          return _0x5f5714;
        }
      } : function () {};
      _0x3465ee = false;
      return _0x4d777b;
    };
  }();
  (function () {
    _0x49459c(this, function () {
      const _0x396df0 = new RegExp("function *\\( *\\)");
      const _0x26ae02 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
      const _0x335f34 = _0x3a6a9("init");
      if (!_0x396df0.test(_0x335f34 + "chain") || !_0x26ae02.test(_0x335f34 + "input")) {
        _0x335f34("0");
      } else {
        _0x3a6a9();
      }
    })();
  })();
  const config = require("../settings");
  const {
    malvin,
    commands
  } = require("../malvin");
  const {
    runtime
  } = require("../lib/functions");
  const moment = require("moment-timezone");
  const fs = require("fs");
  const {
    getPrefix
  } = require("../lib/prefix");
  const _0x2c4e81 = {
    "pattern": "menu",
    "alias": "m",
    "desc": "Show interactive menu system",
    category: "main",
    "react": "🤖",
    "filename": __filename
  };
  malvin(_0x2c4e81, async (_0x3d4361, _0x240b0d, _0x204bca, {
    from: _0x231034,
    reply: _0x31cbad
  }) => {
    try {
      const _0x3a7ab9 = moment().tz("Africa/Nairobi").format("HH:mm:ss");
      const _0x3d9990 = moment().tz("Africa/Nairobi").format("dddd, MMMM Do YYYY");
      const _0xaafd21 = getPrefix();
      const _0x1ca3e5 = Object.keys(commands).length;
      const _0x2923dd = "        \n╭─╼『 🤖 *" + config.BOT_NAME + "* 』╾─\n│\n│ 👤 ᴜsᴇʀ  : ©️" + config.OWNER_NAME + "\n│ 🌐 ᴍᴏᴅᴇ  : [ " + config.MODE + " ]\n│ 🕒 ᴛɪᴍᴇ   : " + _0x3a7ab9 + "\n│ 📆 ᴅᴀᴛᴇ   : " + _0x3d9990 + "\n│ 🛠️ ᴘʀᴇғɪx : [ " + _0xaafd21 + " ]\n│ 📊 ᴄᴍᴅs  : " + _0x1ca3e5 + "\n│ 🔁 ᴜᴘᴛɪᴍᴇ : " + runtime(process.uptime()) + "\n│ 👑 ᴅᴇᴠ    :ᴘᴇᴀᴄᴇᴍᴀᴋᴇʀ\n│ 🚀 ᴠᴇʀsɪᴏɴ : " + config.version + "\n│\n╰──────⭑\n\n📚 *ᴍᴇɴᴜ ɴᴀᴠɪɢᴀᴛɪᴏɴ:*\n> _ʀᴇᴘʟʏ ᴡɪᴛʜ ᴀ ɴᴜᴍʙᴇʀ ᴛᴏ ᴏᴘᴇɴ ᴀ ᴄᴀᴛᴇɢᴏʀʏ_\n\n╭──〔 🌐 *ᴄᴀᴛᴇɢᴏʀʏ ʟɪsᴛ* 〕──\n│\n│ ➊  ⬇️  *ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ*\n│ ➋  💬  *ɢʀᴏᴜᴘ ᴍᴇɴᴜ*\n│ ➌  🕹️  *ғᴜɴ ᴍᴇɴᴜ*\n│ ➍  👑  *ᴏᴡɴᴇʀ ᴍᴇɴᴜ*\n│ ➎  🧠  *ᴀɪ ᴍᴇɴᴜ*\n│ ➏  🌸  *ᴀɴɪᴍᴇ ᴍᴇɴᴜ*\n│ ➐  🔁  *ᴄᴏɴᴠᴇʀᴛ ᴍᴇɴᴜ*\n│ ➑  🧩  *ᴏᴛʜᴇʀ ᴍᴇɴᴜ*\n│ ➒  💫  *ʀᴇᴀᴄᴛɪᴏɴ ᴍᴇɴᴜ*\n│ ➓  🏕️  *ᴍᴀɪɴ ᴍᴇɴᴜ*\n│ ⓫  🎨  *ʟᴏɢᴏ ᴍᴀᴋᴇʀ*\n│ ⓬  ⚙️  *sᴇᴛᴛɪɴɢs ᴍᴇɴᴜ*\n│\n╰─⭑\n💡 _ᴛʏᴘᴇ .allmenu ᴛᴏ sᴇᴇ ᴇᴠᴇʀʏᴛʜɪɴɢ_\n\n> " + config.DESCRIPTION;
      const _0x140316 = {
        newsletterJid: "120363421564278292@newsletter",
        newsletterName: config.OWNER_NAME,
        "serverMessageId": 0x8f
      };
      const _0x34ebbd = {
        mentionedJid: [_0x204bca.sender],
        "forwardingScore": 0x3e7,
        "isForwarded": true,
        "forwardedNewsletterMessageInfo": _0x140316
      };
      const _0x5be37e = async () => {
        try {
          const _0x4f3c9c = {
            url: config.MENU_IMAGE_URL || "https://files.catbox.moe/8e3mrm.jpg"
          };
          const _0x556327 = {
            image: _0x4f3c9c,
            "caption": _0x2923dd,
            contextInfo: _0x34ebbd
          };
          const _0x19ebd3 = {
            "quoted": _0x240b0d
          };
          return await _0x3d4361.sendMessage(_0x231034, _0x556327, _0x19ebd3);
        } catch (_0x5cc20d) {
          console.log("Image send failed, fallback to text");
          const _0x622b3 = {
            "text": _0x2923dd,
            "contextInfo": _0x34ebbd
          };
          const _0x295170 = {
            "quoted": _0x240b0d
          };
          return await _0x3d4361.sendMessage(_0x231034, _0x622b3, _0x295170);
        }
      };
      const _0x1575fc = async () => {
        try {
          await new Promise(_0x254731 => setTimeout(_0x254731, 0x3e8));
          const _0x569f7f = {
            quoted: _0x240b0d
          };
          await _0x3d4361.sendMessage(_0x231034, {
            "audio": fs.readFileSync("./autos/menu.m4a"),
            "mimetype": "audio/mp4",
            "ptt": true
          }, _0x569f7f);
        } catch (_0x1128f4) {
          console.log("Audio send failed");
        }
      };
      let _0x18e960;
      try {
        _0x18e960 = await Promise.race([_0x5be37e(), new Promise((_0x484b1e, _0x31ae1a) => setTimeout(() => _0x31ae1a(new Error("Image timeout")), 0x2710))]);
        await Promise.race([_0x1575fc(), new Promise((_0x42912a, _0xaaedb5) => setTimeout(() => _0xaaedb5(new Error("Audio timeout")), 0x1f40))]);
      } catch (_0x238198) {
        console.log("Error sending menu:", _0x238198.message);
        if (!_0x18e960) {
          const _0x563184 = {
            "text": _0x2923dd,
            "contextInfo": _0x34ebbd
          };
          const _0x36a796 = {
            "quoted": _0x240b0d
          };
          await _0x3d4361.sendMessage(_0x231034, _0x563184, _0x36a796);
        }
      }
      const _0x1641f0 = _0x18e960.key.id;
      const _0x940b0 = {
        "title": "📥 *Download Menu* 📥",
        content: "\n\n╭──➊ *ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ* ➊──\n\n📥 ᴅᴏᴡɴʟᴏᴀᴅᴇʀs & ᴍᴇᴅɪᴀ ᴛᴏᴏʟs\n\n│ ⬡ ᴀᴘᴋ\n│ ⬡ ғʙ\n│ ⬡ ɢᴅʀɪᴠᴇ\n│ ⬡ ɪᴍɢ\n│ ⬡ ɪɢɪᴍᴀɢᴇᴅʟ\n│ ⬡ ɪɢᴠɪᴅ\n│ ⬡ ᴍᴇᴅɪᴀғɪʀᴇ\n│ ⬡ ᴍᴇᴅɪᴀғɪʀᴇ2\n│ ⬡ ᴛɪᴋᴛᴏᴋ\n│ ⬡ ᴛɪᴋᴛᴏᴋ2\n│ ⬡ ʏᴛᴘᴏsᴛ\n│ ⬡ ʏᴛ2\n│ ⬡ ᴘɪɴᴅʟ\n│ ⬡ ᴛᴡɪᴛᴛᴇʀ\n\n📚 ᴋɴᴏᴡʟᴇᴅɢᴇ & ᴜᴛɪʟs\n\n│ ⬡ ʙɪʙʟᴇ\n│ ⬡ ʙɪʙʟᴇʟɪsᴛ\n│ ⬡ ɴᴇᴡs\n│ ⬡ ɴᴘᴍ\n│ ⬡ ᴘᴀɪʀ\n│ ⬡ ɢɪᴛᴄʟᴏɴᴇ\n\n🎧 ᴀᴜᴅɪᴏ & ᴠɪᴅᴇᴏ\n\n│ ⬡ sᴏɴɢ\n│ ⬡ ᴘʟᴀʏ\n│ ⬡ ᴠɪᴅᴇᴏ\n│ ⬡ ᴠɪᴅᴇᴏ2\n│ ⬡ ᴛᴛs\n\n🎬 ᴇɴᴛᴇʀᴛᴀɪɴᴍᴇɴᴛ\n│ ⬡ ᴍᴏᴠɪᴇ\n│ ⬡ ʏᴛs\n\n╰──────────\n\n> " + config.DESCRIPTION,
        "image": true
      };
      const _0x3ecb48 = {
        "title": "👥 *Group Menu* 👥",
        "content": "\n\n╭─➋ *ɢʀᴏᴜᴘ ᴍᴇɴᴜ* ➋─\n\n🔧 ɢʀᴏᴜᴘ ᴍᴀɴᴀɢᴇᴍᴇɴᴛ\n│ ⬡ ʀᴇϙᴜᴇsᴛʟɪsᴛ\n│ ⬡ ᴀᴄᴄᴇᴘᴛᴀʟʟ\n│ ⬡ ʀᴇᴊᴇᴄᴛᴀʟʟ\n│ ⬡ ʀᴇᴍᴏᴠᴇᴍᴇᴍʙᴇʀs\n│ ⬡ ʀᴇᴍᴏᴠᴇᴀᴅᴍɪɴs\n│ ⬡ ʀᴇᴍᴏᴠᴇᴀʟʟ2\n│ ⬡ ɢʀᴏᴜᴘsᴘʀɪᴠᴀᴄʏ\n│ ⬡ ᴜᴘᴅᴀᴛᴇɢᴅᴇsᴄ\n│ ⬡ ᴜᴘᴅᴀᴛᴇɢɴᴀᴍᴇ\n│ ⬡ ʀᴇᴠᴏᴋᴇ\n│ ⬡ ɢɪɴғᴏ\n\n👥 ᴍᴇᴍʙᴇʀ ɪɴᴛᴇʀᴀᴄᴛɪᴏɴ\n│ ⬡ ᴊᴏɪɴ\n│ ⬡ ɪɴᴠɪᴛᴇ\n│ ⬡ ʜɪᴅᴇᴛᴀɢ\n│ ⬡ ᴛᴀɢᴀʟʟ\n│ ⬡ ᴛᴀɢᴀᴅᴍɪɴs\n│ ⬡ ᴘᴏʟʟ\n│ ⬡ ʙʀᴏᴀᴅᴄᴀsᴛ\n\n🔒 ɢʀᴏᴜᴘ sᴇᴄᴜʀɪᴛʏ & ᴄᴏɴᴛʀᴏʟ\n│ ⬡ ʟᴏᴄᴋɢᴄ\n│ ⬡ ᴜɴʟᴏᴄᴋɢᴄ\n│ ⬡ ᴍᴜᴛᴇ\n│ ⬡ ᴜɴᴍᴜᴛᴇ\n│ ⬡ ᴀɴᴛɪʟɪɴᴋ\n│ ⬡ ᴀɴᴛɪʟɪɴᴋᴋɪᴄᴋ\n│ ⬡ ᴅᴇʟᴇᴛᴇʟɪɴᴋ\n│ ⬡ ᴀɴᴛɪʙᴏᴛ\n│ ⬡ ᴅᴇʟᴇᴛᴇ\n\n✨ ᴄʀᴇᴀᴛɪᴏɴ & ᴛᴏᴏʟs\n│ ⬡ ɴᴇᴡɢᴄ\n\n╰───────────\n\n> " + config.DESCRIPTION,
        "image": true
      };
      const _0xa042e6 = {
        "title": "😄 *Fun Menu* 😄",
        "content": "\n╭─➌〔 *ғᴜɴ ᴍᴇɴᴜ* 〕➌─\n\n│ ⬡ ᴄᴏᴜᴘʟᴇᴘᴘ\n│ ⬡ ʀɪɴɢᴛᴏɴᴇ\n│ ⬡ ᴇᴍɪx\n│ ⬡ ʜᴀᴘᴘʏ\n│ ⬡ ʜᴇᴀʀᴛ\n│ ⬡ ᴀɴɢʀʏ\n│ ⬡ sᴀᴅ\n│ ⬡ sʜʏ\n│ ⬡ ᴍᴏᴏɴ\n│ ⬡ ᴄᴏɴғᴜsᴇᴅ\n│ ⬡ ʜᴏᴛ\n│ ⬡ ɴɪᴋᴀʟ\n│ ⬡ ᴄᴏᴍᴘᴀᴛɪʙɪʟɪᴛʏ\n│ ⬡ ᴀᴜʀᴀ\n│ ⬡ 8ʙᴀʟʟ\n│ ⬡ ᴄᴏᴍᴘʟɪᴍᴇɴᴛ\n│ ⬡ ʟᴏᴠᴇᴛᴇsᴛ\n│ ⬡ ᴇᴍᴏᴊɪ\n│ ⬡ ғᴀɴᴄʏ\n│ ⬡ ᴅɪᴅʏᴏᴜᴋɴᴏᴡ\n│ ⬡ ᴍᴀʀɪɢᴇ\n│ ⬡ ϙᴜɪᴢ\n│ ⬡ sʜɪᴘ\n│ ⬡ sϙᴜɪᴅɢᴀᴍᴇ\n│ ⬡ ᴋᴏɴᴀᴍɪ\n│ ⬡ ʜᴀᴄᴋ\n│ ⬡ ϙᴜᴏᴛᴇ\n│ ⬡ ʀᴡ\n│ ⬡ ʀᴄᴏʟᴏʀ\n│ ⬡ ʀᴏʟʟ\n│ ⬡ ᴄᴏɪɴғʟɪᴘ\n│ ⬡ ғʟɪᴘ\n│ ⬡ ᴘɪᴄᴋ\n│ ⬡ sʜᴀᴘᴀʀ\n│ ⬡ ʀᴀᴛᴇ\n│ ⬡ ᴄᴏᴜɴᴛx\n│ ⬡ ᴄᴏᴜɴᴛ\n│ ⬡ ᴊᴏᴋᴇ\n│ ⬡ ғʟɪʀᴛ\n│ ⬡ ᴛʀᴜᴛʜ\n│ ⬡ ᴅᴀʀᴇ\n│ ⬡ ғᴀᴄᴛ\n│ ⬡ ᴘɪᴄᴋᴜᴘʟɪɴᴇ\n│ ⬡ ᴄʜᴀʀᴀᴄᴛᴇʀ\n│ ⬡ ʀᴇᴘᴇᴀᴛ\n│ ⬡ sᴇɴᴅ\n\n╰────────────\n                \n> " + config.DESCRIPTION,
        "image": true
      };
      const _0xbf4475 = {
        "title": "👑 *Owner Menu* 👑",
        "content": "\n╭─➍〔 *ᴏᴡɴᴇʀ ᴍᴇɴᴜ* 〕➍─\n\n📦 ᴍᴀɴᴀɢᴇᴍᴇɴᴛ & ᴄᴏɴᴛʀᴏʟ  \n│ ⬡ ʙᴀɴ  \n│ ⬡ ᴜɴʙᴀɴ  \n│ ⬡ ʟɪsᴛʙᴀɴ  \n│ ⬡ ʙʟᴏᴄᴋ  \n│ ⬡ ᴜɴʙʟᴏᴄᴋ  \n│ ⬡ ʙʟᴏᴄᴋʟɪsᴛ  \n│ ⬡ sʜᴜᴛᴅᴏᴡɴ  \n│ ⬡ ʀᴇsᴛᴀʀᴛ  \n│ ⬡ ᴄʟᴇᴀʀᴄʜᴀᴛs  \n│ ⬡ ʟᴇᴀᴠᴇ  \n│ ⬡ ᴄʜᴀɴɴᴇʟʀᴇᴀᴄᴛ  \n│ ⬡ ʙʀᴏᴀᴅᴄᴀsᴛ  \n│ ⬡ sᴇᴛsᴜᴅᴏ  \n│ ⬡ ᴅᴇʟsᴜᴅᴏ  \n│ ⬡ ʟɪsᴛsᴜᴅᴏ  \n\n👤 ᴘʀᴏꜰɪʟᴇ & ᴜsᴇʀ ᴛᴏᴏʟs  \n│ ⬡ ᴘᴘ  \n│ ⬡ sᴇᴛᴘᴘ  \n│ ⬡ sᴇᴛᴘᴘᴀʟʟ  \n│ ⬡ sᴇᴛᴍʏɴᴀᴍᴇ  \n│ ⬡ ᴜᴘᴅᴀᴛᴇʙɪᴏ  \n│ ⬡ ɢᴇᴛʙɪᴏ  \n│ ⬡ ɢᴇᴛᴘᴘ  \n│ ⬡ sᴇᴛᴏɴʟɪɴᴇ  \n│ ⬡ ɢᴇᴛᴘʀɪᴠᴀᴄʏ  \n│ ⬡ ᴘʀɪᴠᴀᴄʏ  \n│ ⬡ ᴘᴇʀsᴏɴ  \n│ ⬡ ɢᴇᴛ  \n│ ⬡ sᴀᴠᴇᴄᴏɴᴛᴀᴄᴛ  \n│ ⬡ ᴊɪᴅ  \n│ ⬡ ɢᴊɪᴅ  \n│ ⬡ ᴀɢᴇ  \n│ ⬡ ᴛɪᴍᴇᴢᴏɴᴇ  \n│ ⬡ ᴀᴅᴍɪɴ  \n│ ⬡ ᴏᴡɴᴇʀ  \n\n🛠️ ᴜᴛɪʟɪᴛʏ & ɢᴇɴᴇʀᴀʟ  \n│ ⬡ ᴠᴠ2  \n│ ⬡ ᴠᴠ  \n│ ⬡ ᴅᴀɪʟʏғᴀᴄᴛ  \n│ ⬡ ᴠᴇʀsɪᴏɴ  \n│ ⬡ ᴍsɢ  \n│ ⬡ ᴘᴏsᴛ  \n│ ⬡ ᴛᴀᴋᴇ  \n│ ⬡ sᴛɪᴄᴋᴇʀ  \n│ ⬡ ғᴏʀᴡᴀʀᴅ\n\n╰─────────────\n                \n> " + config.DESCRIPTION,
        "image": true
      };
      const _0x101e4e = {
        "title": "🤖 *AI Menu* 🤖",
        "content": "\n╭─➎〔 *ᴀɪ ᴍᴇɴᴜ* 〕➎─\n\n┃ 💬 *ᴄʜᴀᴛ ᴀɪ*\n┃ ────────────\n┃ • ᴀɪ [query]\n┃ • ɢᴘᴛ3 [query]\n┃ • ɢᴘᴛ2 [query]\n┃ • ɢᴘᴛᴍɪɴɪ [query]\n┃ • ɢᴘᴛ [query]\n┃ • ᴍᴇᴛᴀ [query]\n┃ • ᴍᴀʟᴠɪɴ [query]\n\n┃ 🖼️ *ɪᴍᴀɢᴇ ᴀɪ*\n┃ ───────────\n┃ • ɪᴍᴀɢɪɴᴇ [text]\n┃ • ɪᴍᴀɢɪɴᴇ2 [text]\n┃ • ᴍᴀʟᴠɪɴᴀɪ [query]\n\n┃ 🔍 *ꜱᴘᴇᴄɪᴀʟɪᴢᴇᴅ*\n┃ ───────────\n┃ • ʙʟᴀᴄᴋʙᴏx [query]\n┃ • ʟᴜᴍᴀ [query]\n┃ • ᴅᴊ [query]\n┃ • ᴍᴀʟᴠɪɴ [query]\n\n╰────────────\n               \n> " + config.DESCRIPTION,
        "image": true
      };
      const _0x551fef = {
        "title": "🎎 *Anime Menu* 🎎",
        "content": "\n╭─➏ *ᴀɴɪᴍᴇ ᴍᴇɴᴜ* ➏─\n\n✨ ᴀɴɪᴍᴇ ɢɪʀʟs & ᴄʜᴀʀᴀᴄᴛᴇʀs\n│ ⬡ ᴀɴɪᴍᴇɢɪʀʟ\n│ ⬡ ᴀɴɪᴍᴇɢɪʀʟ1\n│ ⬡ ᴀɴɪᴍᴇɢɪʀʟ2\n│ ⬡ ᴀɴɪᴍᴇɢɪʀʟ3\n│ ⬡ ᴀɴɪᴍᴇɢɪʀʟ4\n│ ⬡ ᴀɴɪᴍᴇɢɪʀʟ5\n│ ⬡ ᴡᴀɪғᴜ\n│ ⬡ ɢᴀʀʟ\n│ ⬡ ᴍᴇɢᴜᴍɪɴ\n│ ⬡ ᴍᴀɪᴅ\n│ ⬡ ᴀᴡᴏᴏ\n│ ⬡ ɴᴇᴋᴏ\n\n🐾 ᴀɴɪᴍᴀʟ-ᴛʏᴘᴇ\n│ ⬡ ᴅᴏɢ\n│ ⬡ ᴄᴀᴛ\n\n╰─────────────\n\n> " + config.DESCRIPTION,
        "image": true
      };
      const _0x30cfd2 = {
        title: "🔄 *Convert Menu* 🔄",
        content: "\n╭─➐ *ᴄᴏɴᴠᴇʀᴛ ᴍᴇɴᴜ* ➐─\n\n🛠️ ᴄᴏɴᴠᴇʀsɪᴏɴ & ᴛᴏᴏʟs\n│ ⬡ ᴄᴏɴᴠᴇʀᴛ\n│ ⬡ ᴛᴏᴍᴘ3\n│ ⬡ ᴛᴏᴘᴛᴛ\n│ ⬡ ᴛᴏᴘᴅғ\n│ ⬡ ᴀɪᴠᴏɪᴄᴇ\n│ ⬡ ᴛᴛs2\n│ ⬡ ᴛᴛs3\n│ ⬡ ʀᴇᴀᴅᴍᴏʀᴇ\n│ ⬡ ᴛɪɴʏᴜʀʟ\n\n🎨 ɪᴍᴀɢᴇ & sᴛʏʟᴇ\n│ ⬡ ᴘʜᴏᴛᴏ\n│ ⬡ ʙʟᴜʀ\n│ ⬡ ɢʀᴇʏ\n│ ⬡ ɪɴᴠᴇʀᴛ\n│ ⬡ ᴊᴀɪʟ\n│ ⬡ ɴᴏᴋɪᴀ\n│ ⬡ ᴡᴀɴᴛᴇᴅ\n│ ⬡ ʀᴍʙɢ\n│ ⬡ ɪᴍɢᴊᴏᴋᴇ\n\n🎭 sᴛɪᴄᴋᴇʀ & ғᴜɴ\n│ ⬡ ᴠsᴛɪᴄᴋᴇʀ\n│ ⬡ ᴀᴛᴛᴘ\n\n📢 ᴏᴛʜᴇʀs\n│ ⬡ ᴀᴅ\n│ ⬡ ᴀᴅ\n\n\n╰─────────\n\n> " + config.DESCRIPTION,
        "image": true
      };
      const _0x250eb2 = {
        "title": "📌 *Other Menu* 📌",
        "content": "\n╭─➑ *ᴏᴛʜᴇʀ ᴍᴇɴᴜ* ➑─\n\n🔎 ɪɴꜰᴏ & ꜱᴇᴀʀᴄʜ  \n│ ⬡ ᴡᴇᴀᴛʜᴇʀ  \n│ ⬡ ᴡɪᴋɪᴘᴇᴅɪᴀ  \n│ ⬡ ᴄᴏᴜɴᴛʀʏɪɴғᴏ  \n│ ⬡ ᴅᴇғɪɴᴇ  \n│ ⬡ ᴡᴀsᴛᴀʟᴋ  \n│ ⬡ ᴛɪᴋᴛᴏᴋsᴛᴀʟᴋ  \n│ ⬡ xsᴛᴀʟᴋ  \n│ ⬡ ʏᴛsᴛᴀʟᴋ  \n│ ⬡ sʀᴇᴘᴏ  \n│ ⬡ ɴᴘᴍ  \n│ ⬡ ɪᴍɢsᴄᴀɴ  \n\n🧰 ᴛᴏᴏʟꜱ & ᴄᴏɴᴠᴇʀꜱɪᴏɴꜱ  \n│ ⬡ ᴄᴀʟᴄᴜʟᴀᴛᴇ  \n│ ⬡ ʙɪɴᴀʀʏ  \n│ ⬡ ᴅʙɪɴᴀʀʏ  \n│ ⬡ ʙᴀsᴇ64  \n│ ⬡ ᴜɴʙᴀsᴇ64  \n│ ⬡ ᴜʀʟᴇɴᴄᴏᴅᴇ  \n│ ⬡ ᴜʀʟᴅᴇᴄᴏᴅᴇ  \n│ ⬡ ss  \n│ ⬡ ᴄᴀᴘᴛɪᴏɴ  \n│ ⬡ ᴛʀᴛ  \n│ ⬡ ɢᴘᴀss  \n\n📦 ᴀᴘɪꜱ & ᴛᴇᴍᴘ ꜱᴇʀᴠɪᴄᴇꜱ  \n│ ⬡ ᴄʀᴇᴀᴛᴇᴀᴘɪ  \n│ ⬡ ᴛᴇᴍᴘɴᴜᴍ  \n│ ⬡ ᴠᴄᴄ  \n│ ⬡ ᴏᴛᴘʙᴏx  \n│ ⬡ ᴛᴇᴍᴘᴍᴀɪʟ  \n│ ⬡ ᴄʜᴇᴄᴋᴍᴀɪʟ  \n\n\n╰─────────\n\n> " + config.DESCRIPTION,
        image: true
      };
      const _0x18ae01 = {
        "title": "💞 *Reactions Menu* 💞",
        "content": "\n\n╭─➒ *ʀᴇᴀᴄᴛɪᴏɴꜱ ᴍᴇɴᴜ* ➒─\n\n🎭 ʀᴇᴀᴄᴛɪᴏɴ ᴇᴍᴏᴛɪᴏɴs\n│ ⬡ ᴄʀʏ\n│ ⬡ ʙʟᴜsʜ\n│ ⬡ sᴍɪʟᴇ\n│ ⬡ ʜᴀᴘᴘʏ\n│ ⬡ ᴄʀɪɴɢᴇ\n│ ⬡ sᴍᴜɢ\n│ ⬡ ᴡɪɴᴋ\n\n🤗 ᴄᴜᴛᴇ & ᴡʜᴏʟᴇsᴏᴍᴇ\n│ ⬡ ᴄᴜᴅᴅʟᴇ\n│ ⬡ ʜᴜɢ\n│ ⬡ ᴀᴡᴏᴏ\n│ ⬡ ᴘᴀᴛ\n│ ⬡ ʜᴀɴᴅʜᴏʟᴅ\n│ ⬡ ʜɪɢʜғɪᴠᴇ\n│ ⬡ ᴡᴀᴠᴇ\n│ ⬡ ɢʟᴏᴍᴘ\n\n😈 sɪʟʟʏ & sᴀssʏ\n│ ⬡ ʙᴜʟʟʏ\n│ ⬡ ʙᴏɴᴋ\n│ ⬡ ʏᴇᴇᴛ\n│ ⬡ ʟɪᴄᴋ\n│ ⬡ ɴᴏᴍ\n│ ⬡ ᴘᴏᴋᴇ\n│ ⬡ ᴅᴀɴᴄᴇ\n\n💥 ɪɴᴛᴇɴsᴇ ᴀᴄᴛɪᴏɴs\n│ ⬡ ᴋɪʟʟ\n│ ⬡ sʟᴀᴘ\n│ ⬡ ᴋɪss\n\n\n╰────────\n\n> " + config.DESCRIPTION,
        "image": true
      };
      const _0x29389e = {
        "title": "🏠 *Main Menu* 🏠",
        content: "\n╭──➓ *ᴍᴀɪɴ ᴍᴇɴᴜ* ➓──\n│\n│ ℹ️ *ʙᴏᴛ ɪɴғᴏ*✪\n│────────\n│ • ping\n│ • env\n│ • live\n│ • alive\n│ • runtime\n│ • uptime\n│ • repo\n│ • owner\n│ • user\n│ • help\n│ • time\n│ • date\n│ • report\n│ • fetch\n│ • githubstalk\n│ • support\n╰─✪\n╭─❍\n│ 🛠️ *ᴄᴏɴʀᴏʟs*\n│────────\n│ • menu\n│ • menu2\n│ • menu3 /allmenu\n│ • restart\n╰─✪\n\n> " + config.DESCRIPTION,
        "image": true
      };
      const _0x14297e = {
        title: "🏠 *LOGO CMD* 🏠",
        "content": "\n╭──⓫ *ʟᴏɢᴏ ᴍᴇɴᴜ* ⓫──\n\n🎨 ʟᴏɢᴏ & ᴛᴇxᴛ sᴛʏʟᴇs\n\n│ ⬡ 3ᴅᴄᴏᴍɪᴄ\n│ ⬡ 3ᴅᴘᴀᴘᴇʀ\n│ ⬡ ɴᴇᴏɴʟɪɢʜᴛ\n│ ⬡ ғᴜᴛᴜʀɪsᴛɪᴄ\n│ ⬡ ᴄʟᴏᴜᴅs\n│ ⬡ ɢᴀʟᴀxʏ\n│ ⬡ ʟᴇᴀғ\n│ ⬡ sᴜɴsᴇᴛ\n│ ⬡ ᴅᴇᴠɪʟᴡɪɴɢs\n│ ⬡ ᴀɴɢᴇʟᴡɪɴɢs\n│ ⬡ ʙɪʀᴛʜᴅᴀʏ\n│ ⬡ ʙʟᴀᴄᴋᴘɪɴᴋ\n│ ⬡ ᴛʏᴘᴏɢʀᴀᴘʜʏ\n│ ⬡ ᴢᴏᴅɪᴀᴄ\n│ ⬡ ʟᴜxᴜʀʏ\n│ ⬡ ᴘᴀɪɴᴛ\n\n🦸 ᴄʜᴀʀᴀᴄᴛᴇʀ ᴛʜᴇᴍᴇᴅ\n│ ⬡ ᴅʀᴀɢᴏɴʙᴀʟʟ\n│ ⬡ ᴅᴇᴀᴅᴘᴏᴏʟ\n│ ⬡ ɴᴀʀᴜᴛᴏ\n│ ⬡ ᴛʜᴏʀ\n│ ⬡ ᴀᴍᴇʀɪᴄᴀ\n│ ⬡ ʜᴀᴄᴋᴇʀ\n│ ⬡ ᴄᴀsᴛʟᴇ\n│ ⬡ ғʀᴏᴢᴇɴ\n\n😈 ғᴜɴ & sʏᴍʙᴏʟɪᴄ\n│ ⬡ ᴄᴀᴛ\n│ ⬡ sᴀᴅɢɪʀʟ\n│ ⬡ ᴘᴏʀɴʜᴜʙ\n│ ⬡ ɴɪɢᴇʀɪᴀ\n│ ⬡ ʙᴏᴏᴍ\n│ ⬡ ʙᴜʟʙ\n│ ⬡ ᴛᴀᴛᴏᴏ\n│ ⬡ ᴇʀᴀsᴇʀ\n│ ⬡ ʙᴇᴀʀ\n\n📺 ᴍɪsᴄ & ʟᴀʙᴇʟs\n│ ⬡ sᴀɴs\n│ ⬡ ʏᴛʟᴏɢᴏ\n\n╰─✪\n\n> " + config.DESCRIPTION,
        "image": true
      };
      const _0x386d51 = {
        "title": "🎐 *Settings Menu* 🎐",
        content: "\n\n⚙️ ᴀᴜᴛᴏᴍᴀᴛɪᴏɴ & ʙᴇʜᴀᴠɪᴏʀ  \n\n│ ⬡ ᴀᴜᴛᴏ-ᴛʏᴘɪɴɢ  \n│ ⬡ ᴀᴜᴛᴏ-ʀᴇᴄᴏʀᴅɪɴɢ  \n│ ⬡ ᴀᴜᴛᴏ-sᴇᴇɴ  \n│ ⬡ ᴀʟᴡᴀʏs-ᴏɴʟɪɴᴇ  \n│ ⬡ ᴀᴜᴛᴏ-ᴠᴏɪᴄᴇ  \n│ ⬡ ᴀᴜᴛᴏ-sᴛɪᴄᴋᴇʀ  \n│ ⬡ ᴀᴜᴛᴏ-ʀᴇᴘʟʏ  \n│ ⬡ ᴀᴜᴛᴏ-ʀᴇᴀᴄᴛ  \n│ ⬡ sᴛᴀᴛᴜs-ʀᴇᴀᴄᴛ  \n│ ⬡ sᴛᴀᴛᴜs-ʀᴇᴘʟʏ  \n\n👮 ᴀᴅᴍɪɴ & ꜱᴇᴄᴜʀɪᴛʏ  \n│ ⬡ ᴀᴅᴍɪɴ-ᴇᴠᴇɴᴛs  \n│ ⬡ ᴀɴᴛɪᴅᴇʟᴇᴛᴇ  \n│ ⬡ ᴀɴᴛɪ-ʙᴀᴅ  \n│ ⬡ sᴇᴛᴘʀᴇғɪx  \n│ ⬡ sᴇᴛᴠᴀʀ  \n│ ⬡ ᴍᴏᴅᴇ  \n\n💬 ʀᴇᴘʟɪᴇꜱ & ɪɴᴛᴇʀᴀᴄᴛɪᴏɴꜱ  \n│ ⬡ ᴡᴇʟᴄᴏᴍᴇ  \n│ ⬡ ғᴀᴋᴇᴛʏᴘɪɴɢ  \n│ ⬡ ғᴀᴋᴇʀᴇᴄᴏʀᴅɪɴɢ  \n│ ⬡ ᴍᴇɴᴛɪᴏɴ-ʀᴇᴘʟʏ  \n│ ⬡ ʀᴇᴀᴅ-ᴍᴇssᴀɢᴇ  \n│ ⬡ ʜᴇᴀʀᴛʀᴇᴀᴄᴛ  \n\n╰──────────●●►\n\n> 📌 *ɴᴏᴛᴇ*: ᴀᴅᴅ \"ᴏɴ/ᴏғғ\" ᴡɪᴛʜ ᴛʜᴇ ᴅᴇsɪʀᴇᴅ sᴛᴀᴛᴇ ᴛᴏ ᴇɴᴀʙʟᴇ ᴏʀ ᴅɪsᴀʙʟᴇ ᴍᴏsᴛ ᴏ̄ ᴇ̄ ᴀʙᴏᴠᴇ👆 ғᴇᴀᴛᴜʀᴇs. ᴇɢ .ᴀᴜᴛᴏʀᴇᴀᴄᴛ ᴏɴ\n\n📊 ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs ʟɪsᴛ sᴇᴛᴛɪɴɢs: 25\n\n> " + config.DESCRIPTION,
        "image": true
      };
      const _0x8ee93d = {
        "1": _0x940b0,
        "2": _0x3ecb48,
        "3": _0xa042e6,
        "4": _0xbf4475,
        "5": _0x101e4e,
        "6": _0x551fef,
        "7": _0x30cfd2,
        "8": _0x250eb2,
        "9": _0x18ae01,
        "10": _0x29389e,
        "11": _0x14297e,
        "12": _0x386d51
      };
      const _0x295b53 = async _0x43c366 => {
        try {
          const _0x533079 = _0x43c366.messages[0x0];
          if (!_0x533079?.["message"] || !_0x533079.key?.["remoteJid"]) {
            return;
          }
          const _0x5f13cf = _0x533079.message.extendedTextMessage?.["contextInfo"]?.["stanzaId"] === _0x1641f0;
          if (_0x5f13cf) {
            const _0x3f3935 = _0x533079.message.conversation || _0x533079.message.extendedTextMessage?.["text"];
            const _0x3d4b13 = _0x533079.key.remoteJid;
            if (_0x8ee93d[_0x3f3935]) {
              const _0x4a7442 = _0x8ee93d[_0x3f3935];
              try {
                if (_0x4a7442.image) {
                  const _0x324d15 = {
                    url: config.MENU_IMAGE_URL || "https://files.catbox.moe/8e3mrm.jpg"
                  };
                  const _0x1ec447 = {
                    "image": _0x324d15,
                    "caption": _0x4a7442.content,
                    "contextInfo": _0x34ebbd
                  };
                  const _0x369f2f = {
                    quoted: _0x533079
                  };
                  await _0x3d4361.sendMessage(_0x3d4b13, _0x1ec447, _0x369f2f);
                } else {
                  const _0x58d44e = {
                    "text": _0x4a7442.content,
                    "contextInfo": _0x34ebbd
                  };
                  const _0x349c6f = {
                    quoted: _0x533079
                  };
                  await _0x3d4361.sendMessage(_0x3d4b13, _0x58d44e, _0x349c6f);
                }
                const _0x5ab31a = {
                  "text": "✅",
                  "key": _0x533079.key
                };
                const _0x464480 = {
                  "react": _0x5ab31a
                };
                await _0x3d4361.sendMessage(_0x3d4b13, _0x464480);
              } catch (_0x3f19e6) {
                console.log("Menu reply error:", _0x3f19e6);
                const _0xefa4b1 = {
                  "text": _0x4a7442.content,
                  "contextInfo": _0x34ebbd
                };
                const _0x50f6d7 = {
                  "quoted": _0x533079
                };
                await _0x3d4361.sendMessage(_0x3d4b13, _0xefa4b1, _0x50f6d7);
              }
            } else {
              const _0x435718 = {
                text: "❌ *Invalid Option!* ❌\n\nPlease reply with a number between 1-10 to select a menu.\n\n*Example:* Reply with \"1\" for Download Menu\n\n> " + config.DESCRIPTION,
                "contextInfo": _0x34ebbd
              };
              const _0x3a2487 = {
                quoted: _0x533079
              };
              await _0x3d4361.sendMessage(_0x3d4b13, _0x435718, _0x3a2487);
            }
          }
        } catch (_0x54b8b2) {
          console.log("Handler error:", _0x54b8b2);
        }
      };
      _0x3d4361.ev.on("messages.upsert", _0x295b53);
      setTimeout(() => {
        _0x3d4361.ev.off("messages.upsert", _0x295b53);
      }, 0x493e0);
    } catch (_0x4d8f07) {
      console.error("Menu Error:", _0x4d8f07);
      try {
        const _0x265d68 = {
          text: "❌ Menu system is currently busy. Please try again later.\n\n> " + config.DESCRIPTION
        };
        const _0x50f418 = {
          "quoted": _0x240b0d
        };
        await _0x3d4361.sendMessage(_0x231034, _0x265d68, _0x50f418);
      } catch (_0x36f697) {
        console.log("Final error handling failed:", _0x36f697);
      }
    }
  });
  function _0x3a6a9(_0x500d39) {
    function _0x375bc5(_0x5909fc) {
      if (typeof _0x5909fc === "string") {
        return function (_0x1f45ab) {}.constructor("while (true) {}").apply("counter");
      } else if (('' + _0x5909fc / _0x5909fc).length !== 0x1 || _0x5909fc % 0x14 === 0x0) {
        (function () {
          return true;
        }).constructor("debugger").call("action");
      } else {
        (function () {
          return false;
        }).constructor("debugger").apply("stateObject");
      }
      _0x375bc5(++_0x5909fc);
    }
    try {
      if (_0x500d39) {
        return _0x375bc5;
      } else {
        _0x375bc5(0x0);
      }
    } catch (_0x3b8c84) {}
  }
