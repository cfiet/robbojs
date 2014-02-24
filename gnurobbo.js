
var Module;
if (typeof Module === 'undefined') Module = eval('(function() { try { return Module || {} } catch(e) { return {} } })()');
if (!Module.expectedDataFileDownloads) {
  Module.expectedDataFileDownloads = 0;
  Module.finishedDataFileDownloads = 0;
}
Module.expectedDataFileDownloads++;
(function() {

    var PACKAGE_PATH;
    if (typeof window === 'object') {
      PACKAGE_PATH = window['encodeURIComponent'](window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf('/')) + '/');
    } else {
      // worker
      PACKAGE_PATH = encodeURIComponent(location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf('/')) + '/');
    }
    var PACKAGE_NAME = 'out/gnurobbo.data';
    var REMOTE_PACKAGE_NAME = (Module['filePackagePrefixURL'] || '') + 'gnurobbo.data';
    var REMOTE_PACKAGE_SIZE = 3123660;
    var PACKAGE_UUID = 'ab758d46-8f18-48e5-b86d-862797303941';
  
    function fetchRemotePackage(packageName, packageSize, callback, errback) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', packageName, true);
      xhr.responseType = 'arraybuffer';
      xhr.onprogress = function(event) {
        var url = packageName;
        var size = packageSize;
        if (event.total) size = event.total;
        if (event.loaded) {
          if (!xhr.addedTotal) {
            xhr.addedTotal = true;
            if (!Module.dataFileDownloads) Module.dataFileDownloads = {};
            Module.dataFileDownloads[url] = {
              loaded: event.loaded,
              total: size
            };
          } else {
            Module.dataFileDownloads[url].loaded = event.loaded;
          }
          var total = 0;
          var loaded = 0;
          var num = 0;
          for (var download in Module.dataFileDownloads) {
          var data = Module.dataFileDownloads[download];
            total += data.total;
            loaded += data.loaded;
            num++;
          }
          total = Math.ceil(total * Module.expectedDataFileDownloads/num);
          if (Module['setStatus']) Module['setStatus']('Downloading data... (' + loaded + '/' + total + ')');
        } else if (!Module.dataFileDownloads) {
          if (Module['setStatus']) Module['setStatus']('Downloading data...');
        }
      };
      xhr.onload = function(event) {
        var packageData = xhr.response;
        callback(packageData);
      };
      xhr.send(null);
    };

    function handleError(error) {
      console.error('package error:', error);
    };
  
      var fetched = null, fetchedCallback = null;
      fetchRemotePackage(REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE, function(data) {
        if (fetchedCallback) {
          fetchedCallback(data);
          fetchedCallback = null;
        } else {
          fetched = data;
        }
      }, handleError);
    
  function runWithFS() {

function assert(check, msg) {
  if (!check) throw msg + new Error().stack;
}
Module['FS_createPath']('/', 'data', true, true);
Module['FS_createPath']('/data', 'rob', true, true);
Module['FS_createPath']('/data', 'levels', true, true);
Module['FS_createPath']('/data', 'locales', true, true);
Module['FS_createPath']('/data/locales', 'sk_SK', true, true);
Module['FS_createPath']('/data/locales', 'ru_RU', true, true);
Module['FS_createPath']('/data/locales', 'id_ID', true, true);
Module['FS_createPath']('/data/locales', 'pl_PL', true, true);
Module['FS_createPath']('/data/locales', 'de_DE', true, true);
Module['FS_createPath']('/data/locales', 'es_ES', true, true);
Module['FS_createPath']('/data/locales', 'cz_CZ', true, true);
Module['FS_createPath']('/data/locales', 'en_GB', true, true);
Module['FS_createPath']('/data/locales', 'sv_SE', true, true);
Module['FS_createPath']('/data', 'skins', true, true);
Module['FS_createPath']('/data/skins', 'original', true, true);
Module['FS_createPath']('/data/skins', 'oily', true, true);
Module['FS_createPath']('/data/skins', 'tronic', true, true);
Module['FS_createPath']('/data', 'sounds', true, true);
Module['FS_createPath']('/data/sounds', 'default', true, true);
Module['FS_createPath']('/data/sounds', 'skins', true, true);
Module['FS_createPath']('/data/sounds', 'oily', true, true);
Module['FS_createPath']('/data/sounds', 'free', true, true);

    function DataRequest(start, end, crunched, audio) {
      this.start = start;
      this.end = end;
      this.crunched = crunched;
      this.audio = audio;
    }
    DataRequest.prototype = {
      requests: {},
      open: function(mode, name) {
        this.name = name;
        this.requests[name] = this;
        Module['addRunDependency']('fp ' + this.name);
      },
      send: function() {},
      onload: function() {
        var byteArray = this.byteArray.subarray(this.start, this.end);

          this.finish(byteArray);

      },
      finish: function(byteArray) {
        var that = this;
        Module['FS_createPreloadedFile'](this.name, null, byteArray, true, true, function() {
          Module['removeRunDependency']('fp ' + that.name);
        }, function() {
          if (that.audio) {
            Module['removeRunDependency']('fp ' + that.name); // workaround for chromium bug 124926 (still no audio with this, but at least we don't hang)
          } else {
            Module.printErr('Preloading file ' + that.name + ' failed');
          }
        }, false, true); // canOwn this data in the filesystem, it is a slide into the heap that will never change
        this.requests[this.name] = null;
      },
    };
      new DataRequest(0, 370, 0, 0).open('GET', '/data/rob/robsprites.bmp');
    new DataRequest(370, 1737, 0, 0).open('GET', '/data/levels/millenium_demo.dat');
    new DataRequest(1737, 76566, 0, 0).open('GET', '/data/levels/robbo05.dat');
    new DataRequest(76566, 149580, 0, 0).open('GET', '/data/levels/robbo98.dat');
    new DataRequest(149580, 184478, 0, 0).open('GET', '/data/levels/robbo10.dat');
    new DataRequest(184478, 213427, 0, 0).open('GET', '/data/levels/robbo09.dat');
    new DataRequest(213427, 223361, 0, 0).open('GET', '/data/levels/alex01.dat');
    new DataRequest(223361, 249544, 0, 0).open('GET', '/data/levels/robbo12.dat');
    new DataRequest(249544, 292832, 0, 0).open('GET', '/data/levels/robbo01.dat');
    new DataRequest(292832, 341952, 0, 0).open('GET', '/data/levels/robbo04.dat');
    new DataRequest(341952, 361500, 0, 0).open('GET', '/data/levels/robbo_b.dat');
    new DataRequest(361500, 446241, 0, 0).open('GET', '/data/levels/k-robbo.dat');
    new DataRequest(446241, 491829, 0, 0).open('GET', '/data/levels/robbo3cs.dat');
    new DataRequest(491829, 509791, 0, 0).open('GET', '/data/levels/robbo2009.dat');
    new DataRequest(509791, 536253, 0, 0).open('GET', '/data/levels/robbo13.dat');
    new DataRequest(536253, 575747, 0, 0).open('GET', '/data/levels/warsaw.dat');
    new DataRequest(575747, 622683, 0, 0).open('GET', '/data/levels/forever.dat');
    new DataRequest(622683, 626333, 0, 0).open('GET', '/data/levels/robbo08.dat');
    new DataRequest(626333, 655959, 0, 0).open('GET', '/data/levels/rob653924.dat');
    new DataRequest(655959, 679298, 0, 0).open('GET', '/data/levels/boss.dat');
    new DataRequest(679298, 682407, 0, 0).open('GET', '/data/levels/demo.dat');
    new DataRequest(682407, 756501, 0, 0).open('GET', '/data/levels/robbo02.dat');
    new DataRequest(756501, 806540, 0, 0).open('GET', '/data/levels/original.dat');
    new DataRequest(806540, 820275, 0, 0).open('GET', '/data/levels/robbo2001.dat');
    new DataRequest(820275, 917160, 0, 0).open('GET', '/data/levels/robbo97.dat');
    new DataRequest(917160, 927066, 0, 0).open('GET', '/data/levels/designer.dat');
    new DataRequest(927066, 965435, 0, 0).open('GET', '/data/levels/robbo11.dat');
    new DataRequest(965435, 982747, 0, 0).open('GET', '/data/levels/robbo07.dat');
    new DataRequest(982747, 1028399, 0, 0).open('GET', '/data/levels/robbo03.dat');
    new DataRequest(1028399, 1028458, 0, 0).open('GET', '/data/locales/sk_SK/localerc');
    new DataRequest(1028458, 1039123, 0, 0).open('GET', '/data/locales/sk_SK/text');
    new DataRequest(1039123, 1039177, 0, 0).open('GET', '/data/locales/ru_RU/localerc');
    new DataRequest(1039177, 1051311, 0, 0).open('GET', '/data/locales/ru_RU/text');
    new DataRequest(1051311, 1051380, 0, 0).open('GET', '/data/locales/id_ID/localerc');
    new DataRequest(1051380, 1061198, 0, 0).open('GET', '/data/locales/id_ID/text');
    new DataRequest(1061198, 1061244, 0, 0).open('GET', '/data/locales/pl_PL/localerc');
    new DataRequest(1061244, 1071398, 0, 0).open('GET', '/data/locales/pl_PL/text');
    new DataRequest(1071398, 1071463, 0, 0).open('GET', '/data/locales/de_DE/localerc');
    new DataRequest(1071463, 1081633, 0, 0).open('GET', '/data/locales/de_DE/text');
    new DataRequest(1081633, 1081681, 0, 0).open('GET', '/data/locales/es_ES/_localerc');
    new DataRequest(1081681, 1081682, 0, 0).open('GET', '/data/locales/es_ES/text');
    new DataRequest(1081682, 1081739, 0, 0).open('GET', '/data/locales/cz_CZ/localerc');
    new DataRequest(1081739, 1092418, 0, 0).open('GET', '/data/locales/cz_CZ/text');
    new DataRequest(1092418, 1092455, 0, 0).open('GET', '/data/locales/en_GB/localerc');
    new DataRequest(1092455, 1102095, 0, 0).open('GET', '/data/locales/en_GB/text');
    new DataRequest(1102095, 1102152, 0, 0).open('GET', '/data/locales/sv_SE/localerc');
    new DataRequest(1102152, 1112418, 0, 0).open('GET', '/data/locales/sv_SE/text');
    new DataRequest(1112418, 1153818, 0, 0).open('GET', '/data/skins/original/robbo.ttf');
    new DataRequest(1153818, 1154652, 0, 0).open('GET', '/data/skins/original/ciphers16.bmp');
    new DataRequest(1154652, 1155339, 0, 0).open('GET', '/data/skins/original/skinrc');
    new DataRequest(1155339, 1158349, 0, 0).open('GET', '/data/skins/original/ciphers32.bmp');
    new DataRequest(1158349, 1158931, 0, 0).open('GET', '/data/skins/original/wm_icon.bmp');
    new DataRequest(1158931, 1160981, 0, 0).open('GET', '/data/skins/original/alpha16.bmp');
    new DataRequest(1160981, 1167609, 0, 0).open('GET', '/data/skins/original/icons32.png');
    new DataRequest(1167609, 1174557, 0, 0).open('GET', '/data/skins/original/icons16.png');
    new DataRequest(1174557, 1265607, 0, 0).open('GET', '/data/skins/original/font24x32.bmp');
    new DataRequest(1265607, 1287349, 0, 0).open('GET', '/data/skins/original/k_icons16.png');
    new DataRequest(1287349, 1295223, 0, 0).open('GET', '/data/skins/original/alpha32.bmp');
    new DataRequest(1295223, 1371303, 0, 0).open('GET', '/data/skins/original/k_icons32.png');
    new DataRequest(1371303, 1394149, 0, 0).open('GET', '/data/skins/original/font12x16.bmp');
    new DataRequest(1394149, 1435549, 0, 0).open('GET', '/data/skins/oily/robbo.ttf');
    new DataRequest(1435549, 1436435, 0, 0).open('GET', '/data/skins/oily/ciphers16.bmp');
    new DataRequest(1436435, 1437186, 0, 0).open('GET', '/data/skins/oily/skinrc');
    new DataRequest(1437186, 1440212, 0, 0).open('GET', '/data/skins/oily/ciphers32.bmp');
    new DataRequest(1440212, 1440806, 0, 0).open('GET', '/data/skins/oily/wm_icon.bmp');
    new DataRequest(1440806, 1454315, 0, 0).open('GET', '/data/skins/oily/background16.png');
    new DataRequest(1454315, 1456389, 0, 0).open('GET', '/data/skins/oily/alpha16.bmp');
    new DataRequest(1456389, 1579559, 0, 0).open('GET', '/data/skins/oily/icons32.png');
    new DataRequest(1579559, 1611311, 0, 0).open('GET', '/data/skins/oily/icons16.png');
    new DataRequest(1611311, 1702361, 0, 0).open('GET', '/data/skins/oily/font24x32.bmp');
    new DataRequest(1702361, 1728240, 0, 0).open('GET', '/data/skins/oily/k_icons16.png');
    new DataRequest(1728240, 1736126, 0, 0).open('GET', '/data/skins/oily/alpha32.bmp');
    new DataRequest(1736126, 1814807, 0, 0).open('GET', '/data/skins/oily/k_icons32.png');
    new DataRequest(1814807, 1958142, 0, 0).open('GET', '/data/skins/oily/background32.png');
    new DataRequest(1958142, 1980988, 0, 0).open('GET', '/data/skins/oily/font12x16.bmp');
    new DataRequest(1980988, 2522492, 0, 0).open('GET', '/data/skins/tronic/robbo.ttf');
    new DataRequest(2522492, 2523330, 0, 0).open('GET', '/data/skins/tronic/ciphers16.bmp');
    new DataRequest(2523330, 2529387, 0, 0).open('GET', '/data/skins/tronic/skinrc');
    new DataRequest(2529387, 2532401, 0, 0).open('GET', '/data/skins/tronic/ciphers32.bmp');
    new DataRequest(2532401, 2533003, 0, 0).open('GET', '/data/skins/tronic/wm_icon.bmp');
    new DataRequest(2533003, 2533444, 0, 0).open('GET', '/data/skins/tronic/background16.png');
    new DataRequest(2533444, 2535498, 0, 0).open('GET', '/data/skins/tronic/alpha16.bmp');
    new DataRequest(2535498, 2542094, 0, 0).open('GET', '/data/skins/tronic/icons32.png');
    new DataRequest(2542094, 2547179, 0, 0).open('GET', '/data/skins/tronic/icons16.png');
    new DataRequest(2547179, 2638229, 0, 0).open('GET', '/data/skins/tronic/font24x32.bmp');
    new DataRequest(2638229, 2640658, 0, 0).open('GET', '/data/skins/tronic/k_icons16.png');
    new DataRequest(2640658, 2648536, 0, 0).open('GET', '/data/skins/tronic/alpha32.bmp');
    new DataRequest(2648536, 2651844, 0, 0).open('GET', '/data/skins/tronic/k_icons32.png');
    new DataRequest(2651844, 2652449, 0, 0).open('GET', '/data/skins/tronic/background32.png');
    new DataRequest(2652449, 2675295, 0, 0).open('GET', '/data/skins/tronic/font12x16.bmp');
    new DataRequest(2675295, 2690736, 0, 1).open('GET', '/data/sounds/default/ammo.ogg');
    new DataRequest(2690736, 2705041, 0, 1).open('GET', '/data/sounds/default/key.ogg');
    new DataRequest(2705041, 2713813, 0, 1).open('GET', '/data/sounds/default/shoot_default.ogg');
    new DataRequest(2713813, 2728363, 0, 1).open('GET', '/data/sounds/default/teleport.ogg');
    new DataRequest(2728363, 2745927, 0, 1).open('GET', '/data/sounds/default/bomb.ogg');
    new DataRequest(2745927, 2760305, 0, 1).open('GET', '/data/sounds/default/end_default.ogg');
    new DataRequest(2760305, 2770699, 0, 1).open('GET', '/data/sounds/default/walk_default.ogg');
    new DataRequest(2770699, 2779627, 0, 1).open('GET', '/data/sounds/default/kill.ogg');
    new DataRequest(2779627, 2790796, 0, 1).open('GET', '/data/sounds/default/door_default.ogg');
    new DataRequest(2790796, 2800480, 0, 1).open('GET', '/data/sounds/default/gun_default.ogg');
    new DataRequest(2800480, 2810519, 0, 1).open('GET', '/data/sounds/default/box.ogg');
    new DataRequest(2810519, 2820178, 0, 1).open('GET', '/data/sounds/default/screw.ogg');
    new DataRequest(2820178, 2830707, 0, 1).open('GET', '/data/sounds/default/magnet.ogg');
    new DataRequest(2830707, 2842982, 0, 1).open('GET', '/data/sounds/default/capsule.ogg');
    new DataRequest(2842982, 2849174, 0, 1).open('GET', '/data/sounds/default/bird.ogg');
    new DataRequest(2849174, 2849714, 0, 0).open('GET', '/data/sounds/skins/default.dat');
    new DataRequest(2849714, 2850169, 0, 0).open('GET', '/data/sounds/skins/oily.dat');
    new DataRequest(2850169, 2850582, 0, 0).open('GET', '/data/sounds/skins/free.dat');
    new DataRequest(2850582, 2861277, 0, 1).open('GET', '/data/sounds/oily/shoot.ogg');
    new DataRequest(2861277, 2883401, 0, 1).open('GET', '/data/sounds/oily/door.ogg');
    new DataRequest(2883401, 2892834, 0, 1).open('GET', '/data/sounds/oily/end.ogg');
    new DataRequest(2892834, 2898863, 0, 1).open('GET', '/data/sounds/oily/gun.ogg');
    new DataRequest(2898863, 2903996, 0, 1).open('GET', '/data/sounds/oily/walk.ogg');
    new DataRequest(2903996, 2910721, 0, 1).open('GET', '/data/sounds/free/capsule2.ogg');
    new DataRequest(2910721, 2922283, 0, 1).open('GET', '/data/sounds/free/screw2.ogg');
    new DataRequest(2922283, 2943197, 0, 1).open('GET', '/data/sounds/free/bomb2.ogg');
    new DataRequest(2943197, 2976133, 0, 1).open('GET', '/data/sounds/free/ammo2.ogg');
    new DataRequest(2976133, 2983167, 0, 1).open('GET', '/data/sounds/free/box2.ogg');
    new DataRequest(2983167, 2990568, 0, 1).open('GET', '/data/sounds/free/kill2.ogg');
    new DataRequest(2990568, 3005200, 0, 1).open('GET', '/data/sounds/free/shoot3.ogg');
    new DataRequest(3005200, 3027155, 0, 1).open('GET', '/data/sounds/free/teleport2.ogg');
    new DataRequest(3027155, 3036073, 0, 1).open('GET', '/data/sounds/free/shoot2.ogg');
    new DataRequest(3036073, 3062561, 0, 1).open('GET', '/data/sounds/free/door2.ogg');
    new DataRequest(3062561, 3091881, 0, 1).open('GET', '/data/sounds/free/exit2.ogg');
    new DataRequest(3091881, 3101028, 0, 1).open('GET', '/data/sounds/free/walk2.ogg');
    new DataRequest(3101028, 3107338, 0, 1).open('GET', '/data/sounds/free/magnet.ogg');
    new DataRequest(3107338, 3123660, 0, 1).open('GET', '/data/sounds/free/key2.ogg');

    function processPackageData(arrayBuffer) {
      Module.finishedDataFileDownloads++;
      assert(arrayBuffer, 'Loading data file failed.');
      var byteArray = new Uint8Array(arrayBuffer);
      var curr;
      
      // copy the entire loaded file into a spot in the heap. Files will refer to slices in that. They cannot be freed though.
      var ptr = Module['_malloc'](byteArray.length);
      Module['HEAPU8'].set(byteArray, ptr);
      DataRequest.prototype.byteArray = Module['HEAPU8'].subarray(ptr, ptr+byteArray.length);
          DataRequest.prototype.requests["/data/rob/robsprites.bmp"].onload();
          DataRequest.prototype.requests["/data/levels/millenium_demo.dat"].onload();
          DataRequest.prototype.requests["/data/levels/robbo05.dat"].onload();
          DataRequest.prototype.requests["/data/levels/robbo98.dat"].onload();
          DataRequest.prototype.requests["/data/levels/robbo10.dat"].onload();
          DataRequest.prototype.requests["/data/levels/robbo09.dat"].onload();
          DataRequest.prototype.requests["/data/levels/alex01.dat"].onload();
          DataRequest.prototype.requests["/data/levels/robbo12.dat"].onload();
          DataRequest.prototype.requests["/data/levels/robbo01.dat"].onload();
          DataRequest.prototype.requests["/data/levels/robbo04.dat"].onload();
          DataRequest.prototype.requests["/data/levels/robbo_b.dat"].onload();
          DataRequest.prototype.requests["/data/levels/k-robbo.dat"].onload();
          DataRequest.prototype.requests["/data/levels/robbo3cs.dat"].onload();
          DataRequest.prototype.requests["/data/levels/robbo2009.dat"].onload();
          DataRequest.prototype.requests["/data/levels/robbo13.dat"].onload();
          DataRequest.prototype.requests["/data/levels/warsaw.dat"].onload();
          DataRequest.prototype.requests["/data/levels/forever.dat"].onload();
          DataRequest.prototype.requests["/data/levels/robbo08.dat"].onload();
          DataRequest.prototype.requests["/data/levels/rob653924.dat"].onload();
          DataRequest.prototype.requests["/data/levels/boss.dat"].onload();
          DataRequest.prototype.requests["/data/levels/demo.dat"].onload();
          DataRequest.prototype.requests["/data/levels/robbo02.dat"].onload();
          DataRequest.prototype.requests["/data/levels/original.dat"].onload();
          DataRequest.prototype.requests["/data/levels/robbo2001.dat"].onload();
          DataRequest.prototype.requests["/data/levels/robbo97.dat"].onload();
          DataRequest.prototype.requests["/data/levels/designer.dat"].onload();
          DataRequest.prototype.requests["/data/levels/robbo11.dat"].onload();
          DataRequest.prototype.requests["/data/levels/robbo07.dat"].onload();
          DataRequest.prototype.requests["/data/levels/robbo03.dat"].onload();
          DataRequest.prototype.requests["/data/locales/sk_SK/localerc"].onload();
          DataRequest.prototype.requests["/data/locales/sk_SK/text"].onload();
          DataRequest.prototype.requests["/data/locales/ru_RU/localerc"].onload();
          DataRequest.prototype.requests["/data/locales/ru_RU/text"].onload();
          DataRequest.prototype.requests["/data/locales/id_ID/localerc"].onload();
          DataRequest.prototype.requests["/data/locales/id_ID/text"].onload();
          DataRequest.prototype.requests["/data/locales/pl_PL/localerc"].onload();
          DataRequest.prototype.requests["/data/locales/pl_PL/text"].onload();
          DataRequest.prototype.requests["/data/locales/de_DE/localerc"].onload();
          DataRequest.prototype.requests["/data/locales/de_DE/text"].onload();
          DataRequest.prototype.requests["/data/locales/es_ES/_localerc"].onload();
          DataRequest.prototype.requests["/data/locales/es_ES/text"].onload();
          DataRequest.prototype.requests["/data/locales/cz_CZ/localerc"].onload();
          DataRequest.prototype.requests["/data/locales/cz_CZ/text"].onload();
          DataRequest.prototype.requests["/data/locales/en_GB/localerc"].onload();
          DataRequest.prototype.requests["/data/locales/en_GB/text"].onload();
          DataRequest.prototype.requests["/data/locales/sv_SE/localerc"].onload();
          DataRequest.prototype.requests["/data/locales/sv_SE/text"].onload();
          DataRequest.prototype.requests["/data/skins/original/robbo.ttf"].onload();
          DataRequest.prototype.requests["/data/skins/original/ciphers16.bmp"].onload();
          DataRequest.prototype.requests["/data/skins/original/skinrc"].onload();
          DataRequest.prototype.requests["/data/skins/original/ciphers32.bmp"].onload();
          DataRequest.prototype.requests["/data/skins/original/wm_icon.bmp"].onload();
          DataRequest.prototype.requests["/data/skins/original/alpha16.bmp"].onload();
          DataRequest.prototype.requests["/data/skins/original/icons32.png"].onload();
          DataRequest.prototype.requests["/data/skins/original/icons16.png"].onload();
          DataRequest.prototype.requests["/data/skins/original/font24x32.bmp"].onload();
          DataRequest.prototype.requests["/data/skins/original/k_icons16.png"].onload();
          DataRequest.prototype.requests["/data/skins/original/alpha32.bmp"].onload();
          DataRequest.prototype.requests["/data/skins/original/k_icons32.png"].onload();
          DataRequest.prototype.requests["/data/skins/original/font12x16.bmp"].onload();
          DataRequest.prototype.requests["/data/skins/oily/robbo.ttf"].onload();
          DataRequest.prototype.requests["/data/skins/oily/ciphers16.bmp"].onload();
          DataRequest.prototype.requests["/data/skins/oily/skinrc"].onload();
          DataRequest.prototype.requests["/data/skins/oily/ciphers32.bmp"].onload();
          DataRequest.prototype.requests["/data/skins/oily/wm_icon.bmp"].onload();
          DataRequest.prototype.requests["/data/skins/oily/background16.png"].onload();
          DataRequest.prototype.requests["/data/skins/oily/alpha16.bmp"].onload();
          DataRequest.prototype.requests["/data/skins/oily/icons32.png"].onload();
          DataRequest.prototype.requests["/data/skins/oily/icons16.png"].onload();
          DataRequest.prototype.requests["/data/skins/oily/font24x32.bmp"].onload();
          DataRequest.prototype.requests["/data/skins/oily/k_icons16.png"].onload();
          DataRequest.prototype.requests["/data/skins/oily/alpha32.bmp"].onload();
          DataRequest.prototype.requests["/data/skins/oily/k_icons32.png"].onload();
          DataRequest.prototype.requests["/data/skins/oily/background32.png"].onload();
          DataRequest.prototype.requests["/data/skins/oily/font12x16.bmp"].onload();
          DataRequest.prototype.requests["/data/skins/tronic/robbo.ttf"].onload();
          DataRequest.prototype.requests["/data/skins/tronic/ciphers16.bmp"].onload();
          DataRequest.prototype.requests["/data/skins/tronic/skinrc"].onload();
          DataRequest.prototype.requests["/data/skins/tronic/ciphers32.bmp"].onload();
          DataRequest.prototype.requests["/data/skins/tronic/wm_icon.bmp"].onload();
          DataRequest.prototype.requests["/data/skins/tronic/background16.png"].onload();
          DataRequest.prototype.requests["/data/skins/tronic/alpha16.bmp"].onload();
          DataRequest.prototype.requests["/data/skins/tronic/icons32.png"].onload();
          DataRequest.prototype.requests["/data/skins/tronic/icons16.png"].onload();
          DataRequest.prototype.requests["/data/skins/tronic/font24x32.bmp"].onload();
          DataRequest.prototype.requests["/data/skins/tronic/k_icons16.png"].onload();
          DataRequest.prototype.requests["/data/skins/tronic/alpha32.bmp"].onload();
          DataRequest.prototype.requests["/data/skins/tronic/k_icons32.png"].onload();
          DataRequest.prototype.requests["/data/skins/tronic/background32.png"].onload();
          DataRequest.prototype.requests["/data/skins/tronic/font12x16.bmp"].onload();
          DataRequest.prototype.requests["/data/sounds/default/ammo.ogg"].onload();
          DataRequest.prototype.requests["/data/sounds/default/key.ogg"].onload();
          DataRequest.prototype.requests["/data/sounds/default/shoot_default.ogg"].onload();
          DataRequest.prototype.requests["/data/sounds/default/teleport.ogg"].onload();
          DataRequest.prototype.requests["/data/sounds/default/bomb.ogg"].onload();
          DataRequest.prototype.requests["/data/sounds/default/end_default.ogg"].onload();
          DataRequest.prototype.requests["/data/sounds/default/walk_default.ogg"].onload();
          DataRequest.prototype.requests["/data/sounds/default/kill.ogg"].onload();
          DataRequest.prototype.requests["/data/sounds/default/door_default.ogg"].onload();
          DataRequest.prototype.requests["/data/sounds/default/gun_default.ogg"].onload();
          DataRequest.prototype.requests["/data/sounds/default/box.ogg"].onload();
          DataRequest.prototype.requests["/data/sounds/default/screw.ogg"].onload();
          DataRequest.prototype.requests["/data/sounds/default/magnet.ogg"].onload();
          DataRequest.prototype.requests["/data/sounds/default/capsule.ogg"].onload();
          DataRequest.prototype.requests["/data/sounds/default/bird.ogg"].onload();
          DataRequest.prototype.requests["/data/sounds/skins/default.dat"].onload();
          DataRequest.prototype.requests["/data/sounds/skins/oily.dat"].onload();
          DataRequest.prototype.requests["/data/sounds/skins/free.dat"].onload();
          DataRequest.prototype.requests["/data/sounds/oily/shoot.ogg"].onload();
          DataRequest.prototype.requests["/data/sounds/oily/door.ogg"].onload();
          DataRequest.prototype.requests["/data/sounds/oily/end.ogg"].onload();
          DataRequest.prototype.requests["/data/sounds/oily/gun.ogg"].onload();
          DataRequest.prototype.requests["/data/sounds/oily/walk.ogg"].onload();
          DataRequest.prototype.requests["/data/sounds/free/capsule2.ogg"].onload();
          DataRequest.prototype.requests["/data/sounds/free/screw2.ogg"].onload();
          DataRequest.prototype.requests["/data/sounds/free/bomb2.ogg"].onload();
          DataRequest.prototype.requests["/data/sounds/free/ammo2.ogg"].onload();
          DataRequest.prototype.requests["/data/sounds/free/box2.ogg"].onload();
          DataRequest.prototype.requests["/data/sounds/free/kill2.ogg"].onload();
          DataRequest.prototype.requests["/data/sounds/free/shoot3.ogg"].onload();
          DataRequest.prototype.requests["/data/sounds/free/teleport2.ogg"].onload();
          DataRequest.prototype.requests["/data/sounds/free/shoot2.ogg"].onload();
          DataRequest.prototype.requests["/data/sounds/free/door2.ogg"].onload();
          DataRequest.prototype.requests["/data/sounds/free/exit2.ogg"].onload();
          DataRequest.prototype.requests["/data/sounds/free/walk2.ogg"].onload();
          DataRequest.prototype.requests["/data/sounds/free/magnet.ogg"].onload();
          DataRequest.prototype.requests["/data/sounds/free/key2.ogg"].onload();
          Module['removeRunDependency']('datafile_out/gnurobbo.data');

    };
    Module['addRunDependency']('datafile_out/gnurobbo.data');
  
    if (!Module.preloadResults) Module.preloadResults = {};
  
      Module.preloadResults[PACKAGE_NAME] = {fromCache: false};
      if (fetched) {
        processPackageData(fetched);
        fetched = null;
      } else {
        fetchedCallback = processPackageData;
      }
    
  }
  if (Module['calledRun']) {
    runWithFS();
  } else {
    if (!Module['preRun']) Module['preRun'] = [];
    Module["preRun"].push(runWithFS); // FS is not initialized yet, wait for it
  }

})();

// Note: For maximum-speed code, see "Optimizing Code" on the Emscripten wiki, https://github.com/kripken/emscripten/wiki/Optimizing-Code
// Note: Some Emscripten settings may limit the speed of the generated code.
// The Module object: Our interface to the outside world. We import
// and export values on it, and do the work to get that through
// closure compiler if necessary. There are various ways Module can be used:
// 1. Not defined. We create it here
// 2. A function parameter, function(Module) { ..generated code.. }
// 3. pre-run appended it, var Module = {}; ..generated code..
// 4. External script tag defines var Module.
// We need to do an eval in order to handle the closure compiler
// case, where this code here is minified but Module was defined
// elsewhere (e.g. case 4 above). We also need to check if Module
// already exists (e.g. case 3 above).
// Note that if you want to run closure, and also to use Module
// after the generated code, you will need to define   var Module = {};
// before the code. Then that object will be used in the code, and you
// can continue to use Module afterwards as well.
var Module;
if (!Module) Module = eval('(function() { try { return Module || {} } catch(e) { return {} } })()');

// Sometimes an existing Module object exists with properties
// meant to overwrite the default module functionality. Here
// we collect those properties and reapply _after_ we configure
// the current environment's defaults to avoid having to be so
// defensive during initialization.
var moduleOverrides = {};
for (var key in Module) {
  if (Module.hasOwnProperty(key)) {
    moduleOverrides[key] = Module[key];
  }
}

// The environment setup code below is customized to use Module.
// *** Environment setup code ***
var ENVIRONMENT_IS_NODE = typeof process === 'object' && typeof require === 'function';
var ENVIRONMENT_IS_WEB = typeof window === 'object';
var ENVIRONMENT_IS_WORKER = typeof importScripts === 'function';
var ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;

if (ENVIRONMENT_IS_NODE) {
  // Expose functionality in the same simple way that the shells work
  // Note that we pollute the global namespace here, otherwise we break in node
  if (!Module['print']) Module['print'] = function print(x) {
    process['stdout'].write(x + '\n');
  };
  if (!Module['printErr']) Module['printErr'] = function printErr(x) {
    process['stderr'].write(x + '\n');
  };

  var nodeFS = require('fs');
  var nodePath = require('path');

  Module['read'] = function read(filename, binary) {
    filename = nodePath['normalize'](filename);
    var ret = nodeFS['readFileSync'](filename);
    // The path is absolute if the normalized version is the same as the resolved.
    if (!ret && filename != nodePath['resolve'](filename)) {
      filename = path.join(__dirname, '..', 'src', filename);
      ret = nodeFS['readFileSync'](filename);
    }
    if (ret && !binary) ret = ret.toString();
    return ret;
  };

  Module['readBinary'] = function readBinary(filename) { return Module['read'](filename, true) };

  Module['load'] = function load(f) {
    globalEval(read(f));
  };

  Module['arguments'] = process['argv'].slice(2);

  module['exports'] = Module;
}
else if (ENVIRONMENT_IS_SHELL) {
  if (!Module['print']) Module['print'] = print;
  if (typeof printErr != 'undefined') Module['printErr'] = printErr; // not present in v8 or older sm

  if (typeof read != 'undefined') {
    Module['read'] = read;
  } else {
    Module['read'] = function read() { throw 'no read() available (jsc?)' };
  }

  Module['readBinary'] = function readBinary(f) {
    return read(f, 'binary');
  };

  if (typeof scriptArgs != 'undefined') {
    Module['arguments'] = scriptArgs;
  } else if (typeof arguments != 'undefined') {
    Module['arguments'] = arguments;
  }

  this['Module'] = Module;

  eval("if (typeof gc === 'function' && gc.toString().indexOf('[native code]') > 0) var gc = undefined"); // wipe out the SpiderMonkey shell 'gc' function, which can confuse closure (uses it as a minified name, and it is then initted to a non-falsey value unexpectedly)
}
else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
  Module['read'] = function read(url) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    xhr.send(null);
    return xhr.responseText;
  };

  if (typeof arguments != 'undefined') {
    Module['arguments'] = arguments;
  }

  if (typeof console !== 'undefined') {
    if (!Module['print']) Module['print'] = function print(x) {
      console.log(x);
    };
    if (!Module['printErr']) Module['printErr'] = function printErr(x) {
      console.log(x);
    };
  } else {
    // Probably a worker, and without console.log. We can do very little here...
    var TRY_USE_DUMP = false;
    if (!Module['print']) Module['print'] = (TRY_USE_DUMP && (typeof(dump) !== "undefined") ? (function(x) {
      dump(x);
    }) : (function(x) {
      // self.postMessage(x); // enable this if you want stdout to be sent as messages
    }));
  }

  if (ENVIRONMENT_IS_WEB) {
    this['Module'] = Module;
  } else {
    Module['load'] = importScripts;
  }
}
else {
  // Unreachable because SHELL is dependant on the others
  throw 'Unknown runtime environment. Where are we?';
}

function globalEval(x) {
  eval.call(null, x);
}
if (!Module['load'] == 'undefined' && Module['read']) {
  Module['load'] = function load(f) {
    globalEval(Module['read'](f));
  };
}
if (!Module['print']) {
  Module['print'] = function(){};
}
if (!Module['printErr']) {
  Module['printErr'] = Module['print'];
}
if (!Module['arguments']) {
  Module['arguments'] = [];
}
// *** Environment setup code ***

// Closure helpers
Module.print = Module['print'];
Module.printErr = Module['printErr'];

// Callbacks
Module['preRun'] = [];
Module['postRun'] = [];

// Merge back in the overrides
for (var key in moduleOverrides) {
  if (moduleOverrides.hasOwnProperty(key)) {
    Module[key] = moduleOverrides[key];
  }
}



// === Auto-generated preamble library stuff ===

//========================================
// Runtime code shared with compiler
//========================================

var Runtime = {
  stackSave: function () {
    return STACKTOP;
  },
  stackRestore: function (stackTop) {
    STACKTOP = stackTop;
  },
  forceAlign: function (target, quantum) {
    quantum = quantum || 4;
    if (quantum == 1) return target;
    if (isNumber(target) && isNumber(quantum)) {
      return Math.ceil(target/quantum)*quantum;
    } else if (isNumber(quantum) && isPowerOfTwo(quantum)) {
      return '(((' +target + ')+' + (quantum-1) + ')&' + -quantum + ')';
    }
    return 'Math.ceil((' + target + ')/' + quantum + ')*' + quantum;
  },
  isNumberType: function (type) {
    return type in Runtime.INT_TYPES || type in Runtime.FLOAT_TYPES;
  },
  isPointerType: function isPointerType(type) {
  return type[type.length-1] == '*';
},
  isStructType: function isStructType(type) {
  if (isPointerType(type)) return false;
  if (isArrayType(type)) return true;
  if (/<?\{ ?[^}]* ?\}>?/.test(type)) return true; // { i32, i8 } etc. - anonymous struct types
  // See comment in isStructPointerType()
  return type[0] == '%';
},
  INT_TYPES: {"i1":0,"i8":0,"i16":0,"i32":0,"i64":0},
  FLOAT_TYPES: {"float":0,"double":0},
  or64: function (x, y) {
    var l = (x | 0) | (y | 0);
    var h = (Math.round(x / 4294967296) | Math.round(y / 4294967296)) * 4294967296;
    return l + h;
  },
  and64: function (x, y) {
    var l = (x | 0) & (y | 0);
    var h = (Math.round(x / 4294967296) & Math.round(y / 4294967296)) * 4294967296;
    return l + h;
  },
  xor64: function (x, y) {
    var l = (x | 0) ^ (y | 0);
    var h = (Math.round(x / 4294967296) ^ Math.round(y / 4294967296)) * 4294967296;
    return l + h;
  },
  getNativeTypeSize: function (type) {
    switch (type) {
      case 'i1': case 'i8': return 1;
      case 'i16': return 2;
      case 'i32': return 4;
      case 'i64': return 8;
      case 'float': return 4;
      case 'double': return 8;
      default: {
        if (type[type.length-1] === '*') {
          return Runtime.QUANTUM_SIZE; // A pointer
        } else if (type[0] === 'i') {
          var bits = parseInt(type.substr(1));
          assert(bits % 8 === 0);
          return bits/8;
        } else {
          return 0;
        }
      }
    }
  },
  getNativeFieldSize: function (type) {
    return Math.max(Runtime.getNativeTypeSize(type), Runtime.QUANTUM_SIZE);
  },
  dedup: function dedup(items, ident) {
  var seen = {};
  if (ident) {
    return items.filter(function(item) {
      if (seen[item[ident]]) return false;
      seen[item[ident]] = true;
      return true;
    });
  } else {
    return items.filter(function(item) {
      if (seen[item]) return false;
      seen[item] = true;
      return true;
    });
  }
},
  set: function set() {
  var args = typeof arguments[0] === 'object' ? arguments[0] : arguments;
  var ret = {};
  for (var i = 0; i < args.length; i++) {
    ret[args[i]] = 0;
  }
  return ret;
},
  STACK_ALIGN: 8,
  getAlignSize: function (type, size, vararg) {
    // we align i64s and doubles on 64-bit boundaries, unlike x86
    if (vararg) return 8;
    if (!vararg && (type == 'i64' || type == 'double')) return 8;
    if (!type) return Math.min(size, 8); // align structures internally to 64 bits
    return Math.min(size || (type ? Runtime.getNativeFieldSize(type) : 0), Runtime.QUANTUM_SIZE);
  },
  calculateStructAlignment: function calculateStructAlignment(type) {
    type.flatSize = 0;
    type.alignSize = 0;
    var diffs = [];
    var prev = -1;
    var index = 0;
    type.flatIndexes = type.fields.map(function(field) {
      index++;
      var size, alignSize;
      if (Runtime.isNumberType(field) || Runtime.isPointerType(field)) {
        size = Runtime.getNativeTypeSize(field); // pack char; char; in structs, also char[X]s.
        alignSize = Runtime.getAlignSize(field, size);
      } else if (Runtime.isStructType(field)) {
        if (field[1] === '0') {
          // this is [0 x something]. When inside another structure like here, it must be at the end,
          // and it adds no size
          // XXX this happens in java-nbody for example... assert(index === type.fields.length, 'zero-length in the middle!');
          size = 0;
          if (Types.types[field]) {
            alignSize = Runtime.getAlignSize(null, Types.types[field].alignSize);
          } else {
            alignSize = type.alignSize || QUANTUM_SIZE;
          }
        } else {
          size = Types.types[field].flatSize;
          alignSize = Runtime.getAlignSize(null, Types.types[field].alignSize);
        }
      } else if (field[0] == 'b') {
        // bN, large number field, like a [N x i8]
        size = field.substr(1)|0;
        alignSize = 1;
      } else if (field[0] === '<') {
        // vector type
        size = alignSize = Types.types[field].flatSize; // fully aligned
      } else if (field[0] === 'i') {
        // illegal integer field, that could not be legalized because it is an internal structure field
        // it is ok to have such fields, if we just use them as markers of field size and nothing more complex
        size = alignSize = parseInt(field.substr(1))/8;
        assert(size % 1 === 0, 'cannot handle non-byte-size field ' + field);
      } else {
        assert(false, 'invalid type for calculateStructAlignment');
      }
      if (type.packed) alignSize = 1;
      type.alignSize = Math.max(type.alignSize, alignSize);
      var curr = Runtime.alignMemory(type.flatSize, alignSize); // if necessary, place this on aligned memory
      type.flatSize = curr + size;
      if (prev >= 0) {
        diffs.push(curr-prev);
      }
      prev = curr;
      return curr;
    });
    if (type.name_ && type.name_[0] === '[') {
      // arrays have 2 elements, so we get the proper difference. then we scale here. that way we avoid
      // allocating a potentially huge array for [999999 x i8] etc.
      type.flatSize = parseInt(type.name_.substr(1))*type.flatSize/2;
    }
    type.flatSize = Runtime.alignMemory(type.flatSize, type.alignSize);
    if (diffs.length == 0) {
      type.flatFactor = type.flatSize;
    } else if (Runtime.dedup(diffs).length == 1) {
      type.flatFactor = diffs[0];
    }
    type.needsFlattening = (type.flatFactor != 1);
    return type.flatIndexes;
  },
  generateStructInfo: function (struct, typeName, offset) {
    var type, alignment;
    if (typeName) {
      offset = offset || 0;
      type = (typeof Types === 'undefined' ? Runtime.typeInfo : Types.types)[typeName];
      if (!type) return null;
      if (type.fields.length != struct.length) {
        printErr('Number of named fields must match the type for ' + typeName + ': possibly duplicate struct names. Cannot return structInfo');
        return null;
      }
      alignment = type.flatIndexes;
    } else {
      var type = { fields: struct.map(function(item) { return item[0] }) };
      alignment = Runtime.calculateStructAlignment(type);
    }
    var ret = {
      __size__: type.flatSize
    };
    if (typeName) {
      struct.forEach(function(item, i) {
        if (typeof item === 'string') {
          ret[item] = alignment[i] + offset;
        } else {
          // embedded struct
          var key;
          for (var k in item) key = k;
          ret[key] = Runtime.generateStructInfo(item[key], type.fields[i], alignment[i]);
        }
      });
    } else {
      struct.forEach(function(item, i) {
        ret[item[1]] = alignment[i];
      });
    }
    return ret;
  },
  dynCall: function (sig, ptr, args) {
    if (args && args.length) {
      if (!args.splice) args = Array.prototype.slice.call(args);
      args.splice(0, 0, ptr);
      return Module['dynCall_' + sig].apply(null, args);
    } else {
      return Module['dynCall_' + sig].call(null, ptr);
    }
  },
  functionPointers: [],
  addFunction: function (func) {
    for (var i = 0; i < Runtime.functionPointers.length; i++) {
      if (!Runtime.functionPointers[i]) {
        Runtime.functionPointers[i] = func;
        return 2*(1 + i);
      }
    }
    throw 'Finished up all reserved function pointers. Use a higher value for RESERVED_FUNCTION_POINTERS.';
  },
  removeFunction: function (index) {
    Runtime.functionPointers[(index-2)/2] = null;
  },
  getAsmConst: function (code, numArgs) {
    // code is a constant string on the heap, so we can cache these
    if (!Runtime.asmConstCache) Runtime.asmConstCache = {};
    var func = Runtime.asmConstCache[code];
    if (func) return func;
    var args = [];
    for (var i = 0; i < numArgs; i++) {
      args.push(String.fromCharCode(36) + i); // $0, $1 etc
    }
    code = Pointer_stringify(code);
    if (code[0] === '"') {
      // tolerate EM_ASM("..code..") even though EM_ASM(..code..) is correct
      if (code.indexOf('"', 1) === code.length-1) {
        code = code.substr(1, code.length-2);
      } else {
        // something invalid happened, e.g. EM_ASM("..code($0)..", input)
        abort('invalid EM_ASM input |' + code + '|. Please use EM_ASM(..code..) (no quotes) or EM_ASM({ ..code($0).. }, input) (to input values)');
      }
    }
    return Runtime.asmConstCache[code] = eval('(function(' + args.join(',') + '){ ' + code + ' })'); // new Function does not allow upvars in node
  },
  warnOnce: function (text) {
    if (!Runtime.warnOnce.shown) Runtime.warnOnce.shown = {};
    if (!Runtime.warnOnce.shown[text]) {
      Runtime.warnOnce.shown[text] = 1;
      Module.printErr(text);
    }
  },
  funcWrappers: {},
  getFuncWrapper: function (func, sig) {
    assert(sig);
    if (!Runtime.funcWrappers[func]) {
      Runtime.funcWrappers[func] = function dynCall_wrapper() {
        return Runtime.dynCall(sig, func, arguments);
      };
    }
    return Runtime.funcWrappers[func];
  },
  UTF8Processor: function () {
    var buffer = [];
    var needed = 0;
    this.processCChar = function (code) {
      code = code & 0xFF;

      if (buffer.length == 0) {
        if ((code & 0x80) == 0x00) {        // 0xxxxxxx
          return String.fromCharCode(code);
        }
        buffer.push(code);
        if ((code & 0xE0) == 0xC0) {        // 110xxxxx
          needed = 1;
        } else if ((code & 0xF0) == 0xE0) { // 1110xxxx
          needed = 2;
        } else {                            // 11110xxx
          needed = 3;
        }
        return '';
      }

      if (needed) {
        buffer.push(code);
        needed--;
        if (needed > 0) return '';
      }

      var c1 = buffer[0];
      var c2 = buffer[1];
      var c3 = buffer[2];
      var c4 = buffer[3];
      var ret;
      if (buffer.length == 2) {
        ret = String.fromCharCode(((c1 & 0x1F) << 6)  | (c2 & 0x3F));
      } else if (buffer.length == 3) {
        ret = String.fromCharCode(((c1 & 0x0F) << 12) | ((c2 & 0x3F) << 6)  | (c3 & 0x3F));
      } else {
        // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
        var codePoint = ((c1 & 0x07) << 18) | ((c2 & 0x3F) << 12) |
                        ((c3 & 0x3F) << 6)  | (c4 & 0x3F);
        ret = String.fromCharCode(
          Math.floor((codePoint - 0x10000) / 0x400) + 0xD800,
          (codePoint - 0x10000) % 0x400 + 0xDC00);
      }
      buffer.length = 0;
      return ret;
    }
    this.processJSString = function processJSString(string) {
      string = unescape(encodeURIComponent(string));
      var ret = [];
      for (var i = 0; i < string.length; i++) {
        ret.push(string.charCodeAt(i));
      }
      return ret;
    }
  },
  stackAlloc: function (size) { var ret = STACKTOP;STACKTOP = (STACKTOP + size)|0;STACKTOP = (((STACKTOP)+7)&-8); return ret; },
  staticAlloc: function (size) { var ret = STATICTOP;STATICTOP = (STATICTOP + size)|0;STATICTOP = (((STATICTOP)+7)&-8); return ret; },
  dynamicAlloc: function (size) { var ret = DYNAMICTOP;DYNAMICTOP = (DYNAMICTOP + size)|0;DYNAMICTOP = (((DYNAMICTOP)+7)&-8); if (DYNAMICTOP >= TOTAL_MEMORY) enlargeMemory();; return ret; },
  alignMemory: function (size,quantum) { var ret = size = Math.ceil((size)/(quantum ? quantum : 8))*(quantum ? quantum : 8); return ret; },
  makeBigInt: function (low,high,unsigned) { var ret = (unsigned ? ((+((low>>>0)))+((+((high>>>0)))*(+4294967296))) : ((+((low>>>0)))+((+((high|0)))*(+4294967296)))); return ret; },
  GLOBAL_BASE: 8,
  QUANTUM_SIZE: 4,
  __dummy__: 0
}


Module['Runtime'] = Runtime;









//========================================
// Runtime essentials
//========================================

var __THREW__ = 0; // Used in checking for thrown exceptions.

var ABORT = false; // whether we are quitting the application. no code should run after this. set in exit() and abort()
var EXITSTATUS = 0;

var undef = 0;
// tempInt is used for 32-bit signed values or smaller. tempBigInt is used
// for 32-bit unsigned values or more than 32 bits. TODO: audit all uses of tempInt
var tempValue, tempInt, tempBigInt, tempInt2, tempBigInt2, tempPair, tempBigIntI, tempBigIntR, tempBigIntS, tempBigIntP, tempBigIntD, tempDouble, tempFloat;
var tempI64, tempI64b;
var tempRet0, tempRet1, tempRet2, tempRet3, tempRet4, tempRet5, tempRet6, tempRet7, tempRet8, tempRet9;

function assert(condition, text) {
  if (!condition) {
    abort('Assertion failed: ' + text);
  }
}

var globalScope = this;

// C calling interface. A convenient way to call C functions (in C files, or
// defined with extern "C").
//
// Note: LLVM optimizations can inline and remove functions, after which you will not be
//       able to call them. Closure can also do so. To avoid that, add your function to
//       the exports using something like
//
//         -s EXPORTED_FUNCTIONS='["_main", "_myfunc"]'
//
// @param ident      The name of the C function (note that C++ functions will be name-mangled - use extern "C")
// @param returnType The return type of the function, one of the JS types 'number', 'string' or 'array' (use 'number' for any C pointer, and
//                   'array' for JavaScript arrays and typed arrays; note that arrays are 8-bit).
// @param argTypes   An array of the types of arguments for the function (if there are no arguments, this can be ommitted). Types are as in returnType,
//                   except that 'array' is not possible (there is no way for us to know the length of the array)
// @param args       An array of the arguments to the function, as native JS values (as in returnType)
//                   Note that string arguments will be stored on the stack (the JS string will become a C string on the stack).
// @return           The return value, as a native JS value (as in returnType)
function ccall(ident, returnType, argTypes, args) {
  return ccallFunc(getCFunc(ident), returnType, argTypes, args);
}
Module["ccall"] = ccall;

// Returns the C function with a specified identifier (for C++, you need to do manual name mangling)
function getCFunc(ident) {
  try {
    var func = Module['_' + ident]; // closure exported function
    if (!func) func = eval('_' + ident); // explicit lookup
  } catch(e) {
  }
  assert(func, 'Cannot call unknown function ' + ident + ' (perhaps LLVM optimizations or closure removed it?)');
  return func;
}

// Internal function that does a C call using a function, not an identifier
function ccallFunc(func, returnType, argTypes, args) {
  var stack = 0;
  function toC(value, type) {
    if (type == 'string') {
      if (value === null || value === undefined || value === 0) return 0; // null string
      value = intArrayFromString(value);
      type = 'array';
    }
    if (type == 'array') {
      if (!stack) stack = Runtime.stackSave();
      var ret = Runtime.stackAlloc(value.length);
      writeArrayToMemory(value, ret);
      return ret;
    }
    return value;
  }
  function fromC(value, type) {
    if (type == 'string') {
      return Pointer_stringify(value);
    }
    assert(type != 'array');
    return value;
  }
  var i = 0;
  var cArgs = args ? args.map(function(arg) {
    return toC(arg, argTypes[i++]);
  }) : [];
  var ret = fromC(func.apply(null, cArgs), returnType);
  if (stack) Runtime.stackRestore(stack);
  return ret;
}

// Returns a native JS wrapper for a C function. This is similar to ccall, but
// returns a function you can call repeatedly in a normal way. For example:
//
//   var my_function = cwrap('my_c_function', 'number', ['number', 'number']);
//   alert(my_function(5, 22));
//   alert(my_function(99, 12));
//
function cwrap(ident, returnType, argTypes) {
  var func = getCFunc(ident);
  return function() {
    return ccallFunc(func, returnType, argTypes, Array.prototype.slice.call(arguments));
  }
}
Module["cwrap"] = cwrap;

// Sets a value in memory in a dynamic way at run-time. Uses the
// type data. This is the same as makeSetValue, except that
// makeSetValue is done at compile-time and generates the needed
// code then, whereas this function picks the right code at
// run-time.
// Note that setValue and getValue only do *aligned* writes and reads!
// Note that ccall uses JS types as for defining types, while setValue and
// getValue need LLVM types ('i8', 'i32') - this is a lower-level operation
function setValue(ptr, value, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch(type) {
      case 'i1': HEAP8[(ptr)]=value; break;
      case 'i8': HEAP8[(ptr)]=value; break;
      case 'i16': HEAP16[((ptr)>>1)]=value; break;
      case 'i32': HEAP32[((ptr)>>2)]=value; break;
      case 'i64': (tempI64 = [value>>>0,(tempDouble=value,(+(Math_abs(tempDouble))) >= (+1) ? (tempDouble > (+0) ? ((Math_min((+(Math_floor((tempDouble)/(+4294967296)))), (+4294967295)))|0)>>>0 : (~~((+(Math_ceil((tempDouble - +(((~~(tempDouble)))>>>0))/(+4294967296))))))>>>0) : 0)],HEAP32[((ptr)>>2)]=tempI64[0],HEAP32[(((ptr)+(4))>>2)]=tempI64[1]); break;
      case 'float': HEAPF32[((ptr)>>2)]=value; break;
      case 'double': HEAPF64[((ptr)>>3)]=value; break;
      default: abort('invalid type for setValue: ' + type);
    }
}
Module['setValue'] = setValue;

// Parallel to setValue.
function getValue(ptr, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch(type) {
      case 'i1': return HEAP8[(ptr)];
      case 'i8': return HEAP8[(ptr)];
      case 'i16': return HEAP16[((ptr)>>1)];
      case 'i32': return HEAP32[((ptr)>>2)];
      case 'i64': return HEAP32[((ptr)>>2)];
      case 'float': return HEAPF32[((ptr)>>2)];
      case 'double': return HEAPF64[((ptr)>>3)];
      default: abort('invalid type for setValue: ' + type);
    }
  return null;
}
Module['getValue'] = getValue;

var ALLOC_NORMAL = 0; // Tries to use _malloc()
var ALLOC_STACK = 1; // Lives for the duration of the current function call
var ALLOC_STATIC = 2; // Cannot be freed
var ALLOC_DYNAMIC = 3; // Cannot be freed except through sbrk
var ALLOC_NONE = 4; // Do not allocate
Module['ALLOC_NORMAL'] = ALLOC_NORMAL;
Module['ALLOC_STACK'] = ALLOC_STACK;
Module['ALLOC_STATIC'] = ALLOC_STATIC;
Module['ALLOC_DYNAMIC'] = ALLOC_DYNAMIC;
Module['ALLOC_NONE'] = ALLOC_NONE;

// allocate(): This is for internal use. You can use it yourself as well, but the interface
//             is a little tricky (see docs right below). The reason is that it is optimized
//             for multiple syntaxes to save space in generated code. So you should
//             normally not use allocate(), and instead allocate memory using _malloc(),
//             initialize it with setValue(), and so forth.
// @slab: An array of data, or a number. If a number, then the size of the block to allocate,
//        in *bytes* (note that this is sometimes confusing: the next parameter does not
//        affect this!)
// @types: Either an array of types, one for each byte (or 0 if no type at that position),
//         or a single type which is used for the entire block. This only matters if there
//         is initial data - if @slab is a number, then this does not matter at all and is
//         ignored.
// @allocator: How to allocate memory, see ALLOC_*
function allocate(slab, types, allocator, ptr) {
  var zeroinit, size;
  if (typeof slab === 'number') {
    zeroinit = true;
    size = slab;
  } else {
    zeroinit = false;
    size = slab.length;
  }

  var singleType = typeof types === 'string' ? types : null;

  var ret;
  if (allocator == ALLOC_NONE) {
    ret = ptr;
  } else {
    ret = [_malloc, Runtime.stackAlloc, Runtime.staticAlloc, Runtime.dynamicAlloc][allocator === undefined ? ALLOC_STATIC : allocator](Math.max(size, singleType ? 1 : types.length));
  }

  if (zeroinit) {
    var ptr = ret, stop;
    assert((ret & 3) == 0);
    stop = ret + (size & ~3);
    for (; ptr < stop; ptr += 4) {
      HEAP32[((ptr)>>2)]=0;
    }
    stop = ret + size;
    while (ptr < stop) {
      HEAP8[((ptr++)|0)]=0;
    }
    return ret;
  }

  if (singleType === 'i8') {
    if (slab.subarray || slab.slice) {
      HEAPU8.set(slab, ret);
    } else {
      HEAPU8.set(new Uint8Array(slab), ret);
    }
    return ret;
  }

  var i = 0, type, typeSize, previousType;
  while (i < size) {
    var curr = slab[i];

    if (typeof curr === 'function') {
      curr = Runtime.getFunctionIndex(curr);
    }

    type = singleType || types[i];
    if (type === 0) {
      i++;
      continue;
    }

    if (type == 'i64') type = 'i32'; // special case: we have one i32 here, and one i32 later

    setValue(ret+i, curr, type);

    // no need to look up size unless type changes, so cache it
    if (previousType !== type) {
      typeSize = Runtime.getNativeTypeSize(type);
      previousType = type;
    }
    i += typeSize;
  }

  return ret;
}
Module['allocate'] = allocate;

function Pointer_stringify(ptr, /* optional */ length) {
  // TODO: use TextDecoder
  // Find the length, and check for UTF while doing so
  var hasUtf = false;
  var t;
  var i = 0;
  while (1) {
    t = HEAPU8[(((ptr)+(i))|0)];
    if (t >= 128) hasUtf = true;
    else if (t == 0 && !length) break;
    i++;
    if (length && i == length) break;
  }
  if (!length) length = i;

  var ret = '';

  if (!hasUtf) {
    var MAX_CHUNK = 1024; // split up into chunks, because .apply on a huge string can overflow the stack
    var curr;
    while (length > 0) {
      curr = String.fromCharCode.apply(String, HEAPU8.subarray(ptr, ptr + Math.min(length, MAX_CHUNK)));
      ret = ret ? ret + curr : curr;
      ptr += MAX_CHUNK;
      length -= MAX_CHUNK;
    }
    return ret;
  }

  var utf8 = new Runtime.UTF8Processor();
  for (i = 0; i < length; i++) {
    t = HEAPU8[(((ptr)+(i))|0)];
    ret += utf8.processCChar(t);
  }
  return ret;
}
Module['Pointer_stringify'] = Pointer_stringify;

// Given a pointer 'ptr' to a null-terminated UTF16LE-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.
function UTF16ToString(ptr) {
  var i = 0;

  var str = '';
  while (1) {
    var codeUnit = HEAP16[(((ptr)+(i*2))>>1)];
    if (codeUnit == 0)
      return str;
    ++i;
    // fromCharCode constructs a character from a UTF-16 code unit, so we can pass the UTF16 string right through.
    str += String.fromCharCode(codeUnit);
  }
}
Module['UTF16ToString'] = UTF16ToString;

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF16LE form. The copy will require at most (str.length*2+1)*2 bytes of space in the HEAP.
function stringToUTF16(str, outPtr) {
  for(var i = 0; i < str.length; ++i) {
    // charCodeAt returns a UTF-16 encoded code unit, so it can be directly written to the HEAP.
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    HEAP16[(((outPtr)+(i*2))>>1)]=codeUnit;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP16[(((outPtr)+(str.length*2))>>1)]=0;
}
Module['stringToUTF16'] = stringToUTF16;

// Given a pointer 'ptr' to a null-terminated UTF32LE-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.
function UTF32ToString(ptr) {
  var i = 0;

  var str = '';
  while (1) {
    var utf32 = HEAP32[(((ptr)+(i*4))>>2)];
    if (utf32 == 0)
      return str;
    ++i;
    // Gotcha: fromCharCode constructs a character from a UTF-16 encoded code (pair), not from a Unicode code point! So encode the code point to UTF-16 for constructing.
    if (utf32 >= 0x10000) {
      var ch = utf32 - 0x10000;
      str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
    } else {
      str += String.fromCharCode(utf32);
    }
  }
}
Module['UTF32ToString'] = UTF32ToString;

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF32LE form. The copy will require at most (str.length+1)*4 bytes of space in the HEAP,
// but can use less, since str.length does not return the number of characters in the string, but the number of UTF-16 code units in the string.
function stringToUTF32(str, outPtr) {
  var iChar = 0;
  for(var iCodeUnit = 0; iCodeUnit < str.length; ++iCodeUnit) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    var codeUnit = str.charCodeAt(iCodeUnit); // possibly a lead surrogate
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) {
      var trailSurrogate = str.charCodeAt(++iCodeUnit);
      codeUnit = 0x10000 + ((codeUnit & 0x3FF) << 10) | (trailSurrogate & 0x3FF);
    }
    HEAP32[(((outPtr)+(iChar*4))>>2)]=codeUnit;
    ++iChar;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP32[(((outPtr)+(iChar*4))>>2)]=0;
}
Module['stringToUTF32'] = stringToUTF32;

function demangle(func) {
  try {
    // Special-case the entry point, since its name differs from other name mangling.
    if (func == 'Object._main' || func == '_main') {
      return 'main()';
    }
    if (typeof func === 'number') func = Pointer_stringify(func);
    if (func[0] !== '_') return func;
    if (func[1] !== '_') return func; // C function
    if (func[2] !== 'Z') return func;
    switch (func[3]) {
      case 'n': return 'operator new()';
      case 'd': return 'operator delete()';
    }
    var i = 3;
    // params, etc.
    var basicTypes = {
      'v': 'void',
      'b': 'bool',
      'c': 'char',
      's': 'short',
      'i': 'int',
      'l': 'long',
      'f': 'float',
      'd': 'double',
      'w': 'wchar_t',
      'a': 'signed char',
      'h': 'unsigned char',
      't': 'unsigned short',
      'j': 'unsigned int',
      'm': 'unsigned long',
      'x': 'long long',
      'y': 'unsigned long long',
      'z': '...'
    };
    function dump(x) {
      //return;
      if (x) Module.print(x);
      Module.print(func);
      var pre = '';
      for (var a = 0; a < i; a++) pre += ' ';
      Module.print (pre + '^');
    }
    var subs = [];
    function parseNested() {
      i++;
      if (func[i] === 'K') i++; // ignore const
      var parts = [];
      while (func[i] !== 'E') {
        if (func[i] === 'S') { // substitution
          i++;
          var next = func.indexOf('_', i);
          var num = func.substring(i, next) || 0;
          parts.push(subs[num] || '?');
          i = next+1;
          continue;
        }
        if (func[i] === 'C') { // constructor
          parts.push(parts[parts.length-1]);
          i += 2;
          continue;
        }
        var size = parseInt(func.substr(i));
        var pre = size.toString().length;
        if (!size || !pre) { i--; break; } // counter i++ below us
        var curr = func.substr(i + pre, size);
        parts.push(curr);
        subs.push(curr);
        i += pre + size;
      }
      i++; // skip E
      return parts;
    }
    var first = true;
    function parse(rawList, limit, allowVoid) { // main parser
      limit = limit || Infinity;
      var ret = '', list = [];
      function flushList() {
        return '(' + list.join(', ') + ')';
      }
      var name;
      if (func[i] === 'N') {
        // namespaced N-E
        name = parseNested().join('::');
        limit--;
        if (limit === 0) return rawList ? [name] : name;
      } else {
        // not namespaced
        if (func[i] === 'K' || (first && func[i] === 'L')) i++; // ignore const and first 'L'
        var size = parseInt(func.substr(i));
        if (size) {
          var pre = size.toString().length;
          name = func.substr(i + pre, size);
          i += pre + size;
        }
      }
      first = false;
      if (func[i] === 'I') {
        i++;
        var iList = parse(true);
        var iRet = parse(true, 1, true);
        ret += iRet[0] + ' ' + name + '<' + iList.join(', ') + '>';
      } else {
        ret = name;
      }
      paramLoop: while (i < func.length && limit-- > 0) {
        //dump('paramLoop');
        var c = func[i++];
        if (c in basicTypes) {
          list.push(basicTypes[c]);
        } else {
          switch (c) {
            case 'P': list.push(parse(true, 1, true)[0] + '*'); break; // pointer
            case 'R': list.push(parse(true, 1, true)[0] + '&'); break; // reference
            case 'L': { // literal
              i++; // skip basic type
              var end = func.indexOf('E', i);
              var size = end - i;
              list.push(func.substr(i, size));
              i += size + 2; // size + 'EE'
              break;
            }
            case 'A': { // array
              var size = parseInt(func.substr(i));
              i += size.toString().length;
              if (func[i] !== '_') throw '?';
              i++; // skip _
              list.push(parse(true, 1, true)[0] + ' [' + size + ']');
              break;
            }
            case 'E': break paramLoop;
            default: ret += '?' + c; break paramLoop;
          }
        }
      }
      if (!allowVoid && list.length === 1 && list[0] === 'void') list = []; // avoid (void)
      return rawList ? list : ret + flushList();
    }
    return parse();
  } catch(e) {
    return func;
  }
}

function demangleAll(text) {
  return text.replace(/__Z[\w\d_]+/g, function(x) { var y = demangle(x); return x === y ? x : (x + ' [' + y + ']') });
}

function stackTrace() {
  var stack = new Error().stack;
  return stack ? demangleAll(stack) : '(no stack trace available)'; // Stack trace is not available at least on IE10 and Safari 6.
}

// Memory management

var PAGE_SIZE = 4096;
function alignMemoryPage(x) {
  return (x+4095)&-4096;
}

var HEAP;
var HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;

var STATIC_BASE = 0, STATICTOP = 0, staticSealed = false; // static area
var STACK_BASE = 0, STACKTOP = 0, STACK_MAX = 0; // stack area
var DYNAMIC_BASE = 0, DYNAMICTOP = 0; // dynamic area handled by sbrk

function enlargeMemory() {
  abort('Cannot enlarge memory arrays in asm.js. Either (1) compile with -s TOTAL_MEMORY=X with X higher than the current value ' + TOTAL_MEMORY + ', or (2) set Module.TOTAL_MEMORY before the program runs.');
}

var TOTAL_STACK = Module['TOTAL_STACK'] || 5242880;
var TOTAL_MEMORY = Module['TOTAL_MEMORY'] || 16777216;
var FAST_MEMORY = Module['FAST_MEMORY'] || 2097152;

var totalMemory = 4096;
while (totalMemory < TOTAL_MEMORY || totalMemory < 2*TOTAL_STACK) {
  if (totalMemory < 16*1024*1024) {
    totalMemory *= 2;
  } else {
    totalMemory += 16*1024*1024
  }
}
if (totalMemory !== TOTAL_MEMORY) {
  Module.printErr('increasing TOTAL_MEMORY to ' + totalMemory + ' to be more reasonable');
  TOTAL_MEMORY = totalMemory;
}

// Initialize the runtime's memory
// check for full engine support (use string 'subarray' to avoid closure compiler confusion)
assert(typeof Int32Array !== 'undefined' && typeof Float64Array !== 'undefined' && !!(new Int32Array(1)['subarray']) && !!(new Int32Array(1)['set']),
       'Cannot fallback to non-typed array case: Code is too specialized');

var buffer = new ArrayBuffer(TOTAL_MEMORY);
HEAP8 = new Int8Array(buffer);
HEAP16 = new Int16Array(buffer);
HEAP32 = new Int32Array(buffer);
HEAPU8 = new Uint8Array(buffer);
HEAPU16 = new Uint16Array(buffer);
HEAPU32 = new Uint32Array(buffer);
HEAPF32 = new Float32Array(buffer);
HEAPF64 = new Float64Array(buffer);

// Endianness check (note: assumes compiler arch was little-endian)
HEAP32[0] = 255;
assert(HEAPU8[0] === 255 && HEAPU8[3] === 0, 'Typed arrays 2 must be run on a little-endian system');

Module['HEAP'] = HEAP;
Module['HEAP8'] = HEAP8;
Module['HEAP16'] = HEAP16;
Module['HEAP32'] = HEAP32;
Module['HEAPU8'] = HEAPU8;
Module['HEAPU16'] = HEAPU16;
Module['HEAPU32'] = HEAPU32;
Module['HEAPF32'] = HEAPF32;
Module['HEAPF64'] = HEAPF64;

function callRuntimeCallbacks(callbacks) {
  while(callbacks.length > 0) {
    var callback = callbacks.shift();
    if (typeof callback == 'function') {
      callback();
      continue;
    }
    var func = callback.func;
    if (typeof func === 'number') {
      if (callback.arg === undefined) {
        Runtime.dynCall('v', func);
      } else {
        Runtime.dynCall('vi', func, [callback.arg]);
      }
    } else {
      func(callback.arg === undefined ? null : callback.arg);
    }
  }
}

var __ATPRERUN__  = []; // functions called before the runtime is initialized
var __ATINIT__    = []; // functions called during startup
var __ATMAIN__    = []; // functions called when main() is to be run
var __ATEXIT__    = []; // functions called during shutdown
var __ATPOSTRUN__ = []; // functions called after the runtime has exited

var runtimeInitialized = false;

function preRun() {
  // compatibility - merge in anything from Module['preRun'] at this time
  if (Module['preRun']) {
    if (typeof Module['preRun'] == 'function') Module['preRun'] = [Module['preRun']];
    while (Module['preRun'].length) {
      addOnPreRun(Module['preRun'].shift());
    }
  }
  callRuntimeCallbacks(__ATPRERUN__);
}

function ensureInitRuntime() {
  if (runtimeInitialized) return;
  runtimeInitialized = true;
  callRuntimeCallbacks(__ATINIT__);
}

function preMain() {
  callRuntimeCallbacks(__ATMAIN__);
}

function exitRuntime() {
  callRuntimeCallbacks(__ATEXIT__);
}

function postRun() {
  // compatibility - merge in anything from Module['postRun'] at this time
  if (Module['postRun']) {
    if (typeof Module['postRun'] == 'function') Module['postRun'] = [Module['postRun']];
    while (Module['postRun'].length) {
      addOnPostRun(Module['postRun'].shift());
    }
  }
  callRuntimeCallbacks(__ATPOSTRUN__);
}

function addOnPreRun(cb) {
  __ATPRERUN__.unshift(cb);
}
Module['addOnPreRun'] = Module.addOnPreRun = addOnPreRun;

function addOnInit(cb) {
  __ATINIT__.unshift(cb);
}
Module['addOnInit'] = Module.addOnInit = addOnInit;

function addOnPreMain(cb) {
  __ATMAIN__.unshift(cb);
}
Module['addOnPreMain'] = Module.addOnPreMain = addOnPreMain;

function addOnExit(cb) {
  __ATEXIT__.unshift(cb);
}
Module['addOnExit'] = Module.addOnExit = addOnExit;

function addOnPostRun(cb) {
  __ATPOSTRUN__.unshift(cb);
}
Module['addOnPostRun'] = Module.addOnPostRun = addOnPostRun;

// Tools

// This processes a JS string into a C-line array of numbers, 0-terminated.
// For LLVM-originating strings, see parser.js:parseLLVMString function
function intArrayFromString(stringy, dontAddNull, length /* optional */) {
  var ret = (new Runtime.UTF8Processor()).processJSString(stringy);
  if (length) {
    ret.length = length;
  }
  if (!dontAddNull) {
    ret.push(0);
  }
  return ret;
}
Module['intArrayFromString'] = intArrayFromString;

function intArrayToString(array) {
  var ret = [];
  for (var i = 0; i < array.length; i++) {
    var chr = array[i];
    if (chr > 0xFF) {
      chr &= 0xFF;
    }
    ret.push(String.fromCharCode(chr));
  }
  return ret.join('');
}
Module['intArrayToString'] = intArrayToString;

// Write a Javascript array to somewhere in the heap
function writeStringToMemory(string, buffer, dontAddNull) {
  var array = intArrayFromString(string, dontAddNull);
  var i = 0;
  while (i < array.length) {
    var chr = array[i];
    HEAP8[(((buffer)+(i))|0)]=chr;
    i = i + 1;
  }
}
Module['writeStringToMemory'] = writeStringToMemory;

function writeArrayToMemory(array, buffer) {
  for (var i = 0; i < array.length; i++) {
    HEAP8[(((buffer)+(i))|0)]=array[i];
  }
}
Module['writeArrayToMemory'] = writeArrayToMemory;

function writeAsciiToMemory(str, buffer, dontAddNull) {
  for (var i = 0; i < str.length; i++) {
    HEAP8[(((buffer)+(i))|0)]=str.charCodeAt(i);
  }
  if (!dontAddNull) HEAP8[(((buffer)+(str.length))|0)]=0;
}
Module['writeAsciiToMemory'] = writeAsciiToMemory;

function unSign(value, bits, ignore) {
  if (value >= 0) {
    return value;
  }
  return bits <= 32 ? 2*Math.abs(1 << (bits-1)) + value // Need some trickery, since if bits == 32, we are right at the limit of the bits JS uses in bitshifts
                    : Math.pow(2, bits)         + value;
}
function reSign(value, bits, ignore) {
  if (value <= 0) {
    return value;
  }
  var half = bits <= 32 ? Math.abs(1 << (bits-1)) // abs is needed if bits == 32
                        : Math.pow(2, bits-1);
  if (value >= half && (bits <= 32 || value > half)) { // for huge values, we can hit the precision limit and always get true here. so don't do that
                                                       // but, in general there is no perfect solution here. With 64-bit ints, we get rounding and errors
                                                       // TODO: In i64 mode 1, resign the two parts separately and safely
    value = -2*half + value; // Cannot bitshift half, as it may be at the limit of the bits JS uses in bitshifts
  }
  return value;
}

// check for imul support, and also for correctness ( https://bugs.webkit.org/show_bug.cgi?id=126345 )
if (!Math['imul'] || Math['imul'](0xffffffff, 5) !== -5) Math['imul'] = function imul(a, b) {
  var ah  = a >>> 16;
  var al = a & 0xffff;
  var bh  = b >>> 16;
  var bl = b & 0xffff;
  return (al*bl + ((ah*bl + al*bh) << 16))|0;
};
Math.imul = Math['imul'];


var Math_abs = Math.abs;
var Math_cos = Math.cos;
var Math_sin = Math.sin;
var Math_tan = Math.tan;
var Math_acos = Math.acos;
var Math_asin = Math.asin;
var Math_atan = Math.atan;
var Math_atan2 = Math.atan2;
var Math_exp = Math.exp;
var Math_log = Math.log;
var Math_sqrt = Math.sqrt;
var Math_ceil = Math.ceil;
var Math_floor = Math.floor;
var Math_pow = Math.pow;
var Math_imul = Math.imul;
var Math_fround = Math.fround;
var Math_min = Math.min;

// A counter of dependencies for calling run(). If we need to
// do asynchronous work before running, increment this and
// decrement it. Incrementing must happen in a place like
// PRE_RUN_ADDITIONS (used by emcc to add file preloading).
// Note that you can add dependencies in preRun, even though
// it happens right before run - run will be postponed until
// the dependencies are met.
var runDependencies = 0;
var runDependencyWatcher = null;
var dependenciesFulfilled = null; // overridden to take different actions when all run dependencies are fulfilled

function addRunDependency(id) {
  runDependencies++;
  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }
}
Module['addRunDependency'] = addRunDependency;
function removeRunDependency(id) {
  runDependencies--;
  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }
  if (runDependencies == 0) {
    if (runDependencyWatcher !== null) {
      clearInterval(runDependencyWatcher);
      runDependencyWatcher = null;
    }
    if (dependenciesFulfilled) {
      var callback = dependenciesFulfilled;
      dependenciesFulfilled = null;
      callback(); // can add another dependenciesFulfilled
    }
  }
}
Module['removeRunDependency'] = removeRunDependency;

Module["preloadedImages"] = {}; // maps url to image data
Module["preloadedAudios"] = {}; // maps url to audio data


var memoryInitializer = null;

// === Body ===



STATIC_BASE = 8;

STATICTOP = STATIC_BASE + 286456;


/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });





var _stdout;
var _stdout=_stdout=allocate(1, "i32*", ALLOC_STATIC);
var _stderr;
var _stderr=_stderr=allocate(1, "i32*", ALLOC_STATIC);






































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































/* memory initializer */ allocate([1,0,0,0,69,0,0,0,18,0,0,0,69,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,104,78,4,0,248,25,0,0,0,0,0,0,2,0,0,0,0,0,0,0,168,3,1,0,192,78,0,0,0,0,0,0,3,0,0,0,0,0,0,0,240,217,1,0,168,61,0,0,0,0,0,0,4,0,0,0,0,0,0,0,232,213,1,0,8,55,0,0,0,0,0,0,5,0,0,0,0,0,0,0,216,194,1,0,136,47,0,0,0,0,0,0,6,0,0,0,0,0,0,0,72,185,1,0,96,41,0,0,0,0,0,0,7,0,0,0,0,0,0,0,184,169,1,0,56,37,0,0,0,0,0,0,8,0,0,0,0,0,0,0,136,255,0,0,96,33,0,0,0,0,0,0,9,0,0,0,0,0,0,0,32,74,4,0,200,30,0,0,0,0,0,0,10,0,0,0,0,0,0,0,152,228,0,0,216,24,0,0,0,0,0,0,11,0,0,0,0,0,0,0,40,117,0,0,88,108,0,0,0,0,0,0,12,0,0,0,0,0,0,0,208,209,1,0,80,105,0,0,0,0,0,0,13,0,0,0,0,0,0,0,168,165,1,0,200,101,0,0,0,0,0,0,14,0,0,0,0,0,0,0,240,50,1,0,40,99,0,0,0,0,0,0,15,0,0,0,0,0,0,0,168,190,1,0,224,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,52,0,0,0,1,0,0,0,103,0,0,0,1,0,0,0,137,0,0,0,18,0,0,0,86,0,0,0,103,0,0,0,120,0,0,0,1,0,0,0,137,0,0,0,1,0,0,0,1,0,0,0,18,0,0,0,255,255,255,255,0,0,0,0,35,0,0,0,86,0,0,0,52,0,0,0,86,0,0,0,0,0,0,0,60,0,0,0,4,0,0,0,5,0,0,0,7,0,0,0,8,0,0,0,24,0,0,0,28,0,0,0,50,0,0,0,10,0,0,0,15,0,0,0,0,0,0,0,240,85,0,0,200,81,0,0,56,78,0,0,96,76,0,0,200,73,0,0,224,71,0,0,96,69,0,0,88,67,0,0,88,65,0,0,88,65,0,0,1,0,0,0,35,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,35,0,0,0,1,0,0,0,35,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,35,0,0,0,1,0,0,0,35,0,0,0,1,0,0,0,35,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,35,0,0,0,1,0,0,0,35,0,0,0,1,0,0,0,35,0,0,0,1,0,0,0,35,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,35,0,0,0,1,0,0,0,35,0,0,0,1,0,0,0,35,0,0,0,1,0,0,0,35,0,0,0,1,0,0,0,35,0,0,0,1,0,0,0,35,0,0,0,1,0,0,0,35,0,0,0,1,0,0,0,35,0,0,0,1,0,0,0,35,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,35,0,0,0,1,0,0,0,35,0,0,0,1,0,0,0,35,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,35,0,0,0,1,0,0,0,35,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,35,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,35,0,0,0,35,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,18,0,0,0,35,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,35,0,0,0,35,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,52,0,0,0,35,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,79,81,111,45,113,112,80,115,83,0,0,0,0,0,0,0,48,31,0,0,120,25,0,0,208,108,0,0,200,105,0,0,120,102,0,0,192,99,0,0,192,96,0,0,32,93,0,0,192,89,0,0,192,89,0,0,1,0,0,0,52,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,18,0,0,0,52,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,52,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,18,0,0,0,52,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,52,0,0,0,6,0,0,0,6,0,0,0,2,0,0,0,4,0,0,0,4,0,0,0,6,0,0,0,0,0,0,0,6,0,0,0,6,0,0,0,4,0,0,0,2,0,0,0,6,0,0,0,6,0,0,0,0,0,0,0,6,0,0,0,6,0,0,0,0,0,0,0,4,0,0,0,4,0,0,0,0,0,0,0,2,0,0,0,2,0,0,0,4,0,0,0,6,0,0,0,0,0,0,0,6,0,0,0,4,0,0,0,2,0,0,0,4,0,0,0,4,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,2,0,0,0,4,0,0,0,6,0,0,0,0,0,0,0,6,0,0,0,6,0,0,0,4,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,4,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,30,0,0,0,9,0,0,0,2,0,0,0,30,0,0,0,9,0,0,0,2,0,0,0,9,0,0,0,30,0,0,0,2,0,0,0,2,0,0,0,30,0,0,0,9,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,0,0,0,0,2,0,0,0,2,0,0,0,4,0,0,0,2,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,2,0,0,0,6,0,0,0,30,0,0,0,12,0,0,0,4,0,0,0,6,0,0,0,4,0,0,0,4,0,0,0,0,0,0,0,2,0,0,0,2,0,0,0,4,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,2,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,2,0,0,0,4,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,6,0,0,0,2,0,0,0,0,0,0,0,30,0,0,0,12,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,4,0,0,0,6,0,0,0,6,0,0,0,4,0,0,0,4,0,0,0,2,0,0,0,2,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,6,0,0,0,30,0,0,0,10,0,0,0,6,0,0,0,6,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,6,0,0,0,4,0,0,0,14,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,2,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,2,0,0,0,30,0,0,0,10,0,0,0,2,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,30,0,0,0,11,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,30,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,4,0,0,0,4,0,0,0,30,0,0,0,9,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,30,0,0,0,12,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,30,0,0,0,12,0,0,0,6,0,0,0,6,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,30,0,0,0,12,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,30,0,0,0,12,0,0,0,6,0,0,0,6,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,14,0,0,0,0,0,0,0,2,0,0,0,2,0,0,0,4,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,4,0,0,0,4,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,2,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,2,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,4,0,0,0,30,0,0,0,9,0,0,0,2,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,6,0,0,0,30,0,0,0,10,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,6,0,0,0,0,0,0,0,30,0,0,0,9,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,4,0,0,0,6,0,0,0,0,0,0,0,6,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,2,0,0,0,4,0,0,0,14,0,0,0,0,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,2,0,0,0,4,0,0,0,4,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,4,0,0,0,6,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,6,0,0,0,6,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,4,0,0,0,2,0,0,0,4,0,0,0,4,0,0,0,6,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,4,0,0,0,6,0,0,0,6,0,0,0,14,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,2,0,0,0,4,0,0,0,6,0,0,0,4,0,0,0,4,0,0,0,2,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,0,0,0,0,6,0,0,0,6,0,0,0,4,0,0,0,6,0,0,0,6,0,0,0,0,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,30,0,0,0,30,0,0,0,9,0,0,0,30,0,0,0,4,0,0,0,6,0,0,0,6,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,11,0,0,0,4,0,0,0,30,0,0,0,11,0,0,0,0,0,0,0,30,0,0,0,11,0,0,0,4,0,0,0,30,0,0,0,11,0,0,0,6,0,0,0,0,0,0,0,30,0,0,0,11,0,0,0,4,0,0,0,30,0,0,0,11,0,0,0,6,0,0,0,0,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,4,0,0,0,14,0,0,0,0,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,4,0,0,0,4,0,0,0,0,0,0,0,30,0,0,0,10,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,30,0,0,0,12,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,4,0,0,0,4,0,0,0,30,0,0,0,10,0,0,0,0,0,0,0,30,0,0,0,12,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,12,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,2,0,0,0,30,0,0,0,9,0,0,0,6,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,2,0,0,0,30,0,0,0,9,0,0,0,6,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,2,0,0,0,30,0,0,0,9,0,0,0,6,0,0,0,30,0,0,0,9,0,0,0,2,0,0,0,30,0,0,0,9,0,0,0,6,0,0,0,30,0,0,0,9,0,0,0,2,0,0,0,30,0,0,0,9,0,0,0,6,0,0,0,30,0,0,0,9,0,0,0,2,0,0,0,30,0,0,0,9,0,0,0,6,0,0,0,30,0,0,0,9,0,0,0,2,0,0,0,14,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,4,0,0,0,4,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,2,0,0,0,4,0,0,0,4,0,0,0,0,0,0,0,6,0,0,0,6,0,0,0,4,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,4,0,0,0,6,0,0,0,6,0,0,0,2,0,0,0,2,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,6,0,0,0,6,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,4,0,0,0,4,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,4,0,0,0,6,0,0,0,4,0,0,0,6,0,0,0,4,0,0,0,6,0,0,0,4,0,0,0,4,0,0,0,2,0,0,0,4,0,0,0,4,0,0,0,6,0,0,0,2,0,0,0,4,0,0,0,4,0,0,0,6,0,0,0,2,0,0,0,4,0,0,0,4,0,0,0,6,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,2,0,0,0,4,0,0,0,4,0,0,0,2,0,0,0,14,0,0,0,2,0,0,0,2,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,4,0,0,0,30,0,0,0,10,0,0,0,2,0,0,0,2,0,0,0,6,0,0,0,6,0,0,0,30,0,0,0,10,0,0,0,2,0,0,0,2,0,0,0,6,0,0,0,6,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,2,0,0,0,2,0,0,0,4,0,0,0,4,0,0,0,2,0,0,0,4,0,0,0,6,0,0,0,6,0,0,0,2,0,0,0,2,0,0,0,30,0,0,0,11,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,6,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,6,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,6,0,0,0,6,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,14,0,0,0,0,0,0,0,6,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,4,0,0,0,6,0,0,0,6,0,0,0,0,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,2,0,0,0,4,0,0,0,6,0,0,0,6,0,0,0,0,0,0,0,6,0,0,0,4,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,10,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,4,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,0,0,0,0,6,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,10,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,4,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,30,0,0,0,10,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,14,0,0,0,0,0,0,0,6,0,0,0,2,0,0,0,2,0,0,0,4,0,0,0,4,0,0,0,6,0,0,0,6,0,0,0,0,0,0,0,6,0,0,0,4,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,4,0,0,0,2,0,0,0,4,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,4,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,4,0,0,0,6,0,0,0,6,0,0,0,2,0,0,0,4,0,0,0,4,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,2,0,0,0,2,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,4,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,6,0,0,0,6,0,0,0,6,0,0,0,4,0,0,0,2,0,0,0,2,0,0,0,2,0,0,0,14,0,0,0,86,0,0,0,35,0,0,0,69,0,0,0,35,0,0,0,120,0,0,0,1,0,0,0,52,0,0,0,18,0,0,0,86,0,0,0,1,0,0,0,103,0,0,0,35,0,0,0,137,0,0,0,18,0,0,0,154,0,0,0,52,0,0,0,154,0,0,0,86,0,0,0,1,0,0,0,69,0,0,0,1,0,0,0,52,0,0,0,69,0,0,0,69,0,0,0,103,0,0,0,18,0,0,0,52,0,0,0,86,0,0,0,137,0,0,0,1,0,0,0,18,0,0,0,35,0,0,0,1,0,0,0,35,0,0,0,120,0,0,0,69,0,0,0,52,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,103,0,0,0,1,0,0,0,18,0,0,0,18,0,0,0,69,0,0,0,1,0,0,0,137,0,0,0,35,0,0,0,154,0,0,0,1,0,0,0,1,0,0,0,18,0,0,0,171,0,0,0,1,0,0,0,86,0,0,0,18,0,0,0,103,0,0,0,18,0,0,0,137,0,0,0,35,0,0,0,154,0,0,0,35,0,0,0,35,0,0,0,69,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,52,0,0,0,69,0,0,0,35,0,0,0,69,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,69,0,0,0,69,0,0,0,52,0,0,0,69,0,0,0,35,0,0,0,69,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,52,0,0,0,69,0,0,0,69,0,0,0,69,0,0,0,52,0,0,0,69,0,0,0,35,0,0,0,69,0,0,0,0,0,0,0,0,0,0,0,35,0,0,0,69,0,0,0,52,0,0,0,69,0,0,0,69,0,0,0,69,0,0,0,52,0,0,0,69,0,0,0,35,0,0,0,69,0,0,0,0,0,0,0,0,0,0,0,35,0,0,0,69,0,0,0,52,0,0,0,69,0,0,0,69,0,0,0,69,0,0,0,52,0,0,0,69,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,35,0,0,0,69,0,0,0,52,0,0,0,69,0,0,0,69,0,0,0,69,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,35,0,0,0,69,0,0,0,52,0,0,0,69,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,35,0,0,0,69,0,0,0,103,0,0,0,35,0,0,0,120,0,0,0,35,0,0,0,52,0,0,0,18,0,0,0,69,0,0,0,18,0,0,0,18,0,0,0,18,0,0,0,35,0,0,0,18,0,0,0,154,0,0,0,52,0,0,0,154,0,0,0,69,0,0,0,0,255,0,0,16,240,0,0,32,224,0,0,48,208,0,0,64,192,0,0,80,176,0,0,96,160,0,0,112,144,0,0,128,128,0,0,144,112,0,0,160,96,0,0,176,80,0,0,160,96,0,0,144,112,0,0,128,128,0,0,112,144,0,0,96,160,0,0,80,176,0,0,64,192,0,0,48,208,0,0,32,224,0,0,16,240,0,0,0,255,0,0,0,240,16,0,0,224,32,0,0,208,48,0,0,192,64,0,0,176,80,0,0,160,96,0,0,144,112,0,0,128,128,0,0,112,144,0,0,96,160,0,0,80,176,0,0,96,160,0,0,112,144,0,0,128,128,0,0,144,112,0,0,160,96,0,0,176,80,0,0,192,64,0,0,208,48,0,0,224,32,0,0,240,16,0,0,255,0,0,16,240,16,0,32,224,32,0,48,208,48,0,64,192,64,0,80,176,80,0,96,160,96,0,112,144,112,0,128,128,128,0,144,112,144,0,160,96,160,0,176,80,176,0,160,96,160,0,144,112,144,0,128,128,128,0,112,144,112,0,96,160,96,0,80,176,80,0,64,192,64,0,48,208,48,0,32,224,32,0,16,240,16,0,168,33,0,0,72,85,0,0,240,62,0,0,232,55,0,0,200,48,0,0,0,42,0,0,208,37,0,0,80,34,0,0,255,255,255,255,0,0,0,0,1,0,0,0,0,0,0,0,91,116,101,108,101,112,111,114,116,93,0,0,0,0,0,0,91,65,67,84,73,79,78,95,86,79,76,85,80,46,100,101,118,105,99,101,93,0,0,0,91,116,120,116,95,80,114,101,115,115,95,115,111,109,101,116,104,105,110,103,95,97,110,100,95,114,101,108,101,97,115,101,93,0,0,0,0,0,0,0,73,0,0,0,0,0,0,0,47,0,0,0,0,0,0,0,91,65,67,84,73,79,78,95,84,79,71,71,76,69,95,68,69,83,73,71,78,69,82,46,109,111,100,93,0,0,0,0,91,116,120,116,95,68,101,102,97,117,108,116,95,99,111,110,116,114,111,108,115,95,114,101,115,116,111,114,101,100,93,0,79,79,79,46,46,79,79,79,46,46,46,46,79,35,36,111,46,46,46,46,79,35,36,46,46,46,46,46,46,46,46,46,46,0,0,0,0,0,0,0,72,0,0,0,0,0,0,0,91,65,67,84,73,79,78,95,84,79,71,71,76,69,95,68,69,83,73,71,78,69,82,46,105,100,93,0,0,0,0,0,37,115,58,32,116,97,114,103,101,116,32,105,115,32,105,110,118,97,108,105,100,0,0,0,91,116,120,116,95,67,104,97,110,103,101,115,95,115,97,118,101,100,93,0,0,0,0,0,91,97,109,109,111,93,0,0,71,0,0,0,0,0,0,0,91,65,67,84,73,79,78,95,84,79,71,71,76,69,95,68,69,83,73,71,78,69,82,46,100,101,118,105,99,101,93,0,91,116,120,116,95,86,111,108,117,109,101,93,0,0,0,0,70,0,0,0,0,0,0,0,91,65,67,84,73,79,78,95,80,65,71,69,68,79,87,78,46,109,111,100,93,0,0,0,91,115,111,117,110,100,93,0,91,116,120,116,95,101,110,100,115,99,114,101,101,110,95,99,111,110,103,114,97,116,115,93,0,0,0,0,0,0,0,0,69,0,0,0,0,0,0,0,91,65,67,84,73,79,78,95,80,65,71,69,68,79,87,78,46,105,100,93,0,0,0,0,91,116,120,116,95,76,101,118,101,108,95,65,117,116,104,111,114,93,0,0,0,0,0,0,68,0,0,0,0,0,0,0,91,65,67,84,73,79,78,95,80,65,71,69,68,79,87,78,46,100,101,118,105,99,101,93,0,0,0,0,0,0,0,0,67,97,110,110,111,116,32,102,105,110,100,32,116,104,101,32,100,101,102,97,117,108,116,32,108,111,99,97,108,101,58,32,37,115,10,0,0,0,0,0,91,116,120,116,95,66,121,93,0,0,0,0,0,0,0,0,67,0,0,0,0,0,0,0,91,110,97,109,101,93,10,77,121,76,101,118,101,108,115,10,10,91,108,97,115,116,95,108,101,118,101,108,93,10,49,10,10,91,100,101,102,97,117,108,116,95,108,101,118,101,108,95,99,111,108,111,117,114,93,10,54,48,56,48,53,48,10,10,91,110,111,116,101,115,93,10,68,101,102,97,117,108,116,32,117,115,101,114,32,108,101,118,101,108,32,112,97,99,107,32,102,111,114,32,117,115,101,32,119,105,116,104,32,116,104,101,32,100,101,115,105,103,110,101,114,46,10,10,10,91,108,101,118,101,108,93,10,49,10,91,99,111,108,111,117,114,93,10,54,48,56,48,53,48,10,91,115,105,122,101,93,10,49,54,46,51,49,10,91,97,117,116,104,111,114,93,10,91,108,101,118,101,108,95,110,111,116,101,115,93,10,91,100,97,116,97,93,10,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,10,46,82,46,46,46,46,46,46,46,46,46,46,46,46,46,46,10,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,10,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,10,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,10,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,10,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,10,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,10,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,10,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,10,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,10,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,10,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,10,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,10,46,46,46,46,46,46,46,46,84,46,46,46,46,46,46,46,10,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,10,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,10,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,10,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,10,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,10,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,10,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,10,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,10,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,10,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,10,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,10,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,10,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,10,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,10,46,46,46,46,46,46,46,46,46,46,46,46,46,46,33,46,10,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,10,91,97,100,100,105,116,105,111,110,97,108,93,10,48,10,91,101,110,100,93,10,10,0,91,65,67,84,73,79,78,95,80,65,71,69,85,80,46,109,111,100,93,0,0,0,0,0,91,99,111,108,111,117,114,93,10,0,0,0,0,0,0,0,91,116,120,116,95,83,107,105,110,93,0,0,0,0,0,0,66,0,0,0,0,0,0,0,32,32,45,88,82,69,83,120,89,82,69,83,32,32,101,46,103,46,32,45,56,48,48,120,52,56,48,10,0,0,0,0,91,65,67,84,73,79,78,95,80,65,71,69,85,80,46,105,100,93,0,0,0,0,0,0,91,116,120,116,95,77,111,100,93,0,0,0,0,0,0,0,65,0,0,0,0,0,0,0,91,65,67,84,73,79,78,95,80,65,71,69,85,80,46,100,101,118,105,99,101,93,0,0,91,116,120,116,95,80,116,114,93,0,0,0,0,0,0,0,96,0,0,0,0,0,0,0,91,98,105,114,100,93,0,0,91,65,67,84,73,79,78,95,69,78,68,46,109,111,100,93,0,0,0,0,0,0,0,0,91,116,120,116,95,74,111,121,93,0,0,0,0,0,0,0,95,0,0,0,0,0,0,0,46,47,100,97,116,97,47,115,107,105,110,115,47,0,0,0,91,65,67,84,73,79,78,95,69,78,68,46,105,100,93,0,91,116,120,116,95,75,101,121,93,0,0,0,0,0,0,0,79,79,79,46,46,79,79,79,46,46,46,46,46,46,46,46,46,46,46,46,111,79,35,46,46,46,46,46,46,46,46,46,46,0,0,0,0,0,0,0,94,0,0,0,0,0,0,0,91,65,67,84,73,79,78,95,69,78,68,46,100,101,118,105,99,101,93,0,0,0,0,0,37,115,58,32,111,98,106,101,99,116,32,105,115,32,105,110,118,97,108,105,100,0,0,0,91,116,120,116,95,83,105,109,117,108,97,116,101,100,95,80,111,105,110,116,101,114,93,0,93,0,0,0,0,0,0,0,91,65,67,84,73,79,78,95,72,79,77,69,46,109,111,100,93,0,0,0,0,0,0,0,91,116,120,116,95,83,102,120,95,86,111,108,117,109,101,93,0,0,0,0,0,0,0,0,92,0,0,0,0,0,0,0,91,65,67,84,73,79,78,95,72,79,77,69,46,105,100,93,0,0,0,0,0,0,0,0,91,118,111,108,117,109,101,93,0,0,0,0,0,0,0,0,91,116,120,116,95,83,111,117,110,100,93,0,0,0,0,0,91,0,0,0,0,0,0,0,91,65,67,84,73,79,78,95,72,79,77,69,46,100,101,118,105,99,101,93,0,0,0,0,91,116,120,116,95,83,99,114,101,101,110,93,0,0,0,0,64,0,0,0,0,0,0,0,91,65,67,84,73,79,78,95,78,69,88,84,95,80,65,67,75,46,109,111,100,93,0,0,101,110,95,71,66,0,0,0,91,116,120,116,95,86,105,101,119,112,111,114,116,93,0,0,63,0,0,0,0,0,0,0,37,115,10,0,0,0,0,0,91,65,67,84,73,79,78,95,78,69,88,84,95,80,65,67,75,46,105,100,93,0,0,0,37,100,10,0,0,0,0,0,91,116,120,116,95,80,111,105,110,116,101,114,95,67,111,110,116,114,111,108,115,95,80,97,100,95,84,121,112,101,93,0,62,0,0,0,0,0,0,0,10,79,112,116,105,111,110,115,58,10,0,0,0,0,0,0,91,65,67,84,73,79,78,95,78,69,88,84,95,80,65,67,75,46,100,101,118,105,99,101,93,0,0,0,0,0,0,0,91,116,120,116,95,69,110,97,98,108,101,100,93,0,0,0,61,0,0,0,0,0,0,0,91,65,67,84,73,79,78,95,80,82,69,86,73,79,85,83,95,80,65,67,75,46,109,111,100,93,0,0,0,0,0,0,91,116,120,116,95,68,105,115,97,98,108,101,100,93,0,0,60,0,0,0,0,0,0,0,91,114,111,98,98,111,45,115,104,111,111,116,115,93,0,0,91,65,67,84,73,79,78,95,80,82,69,86,73,79,85,83,95,80,65,67,75,46,105,100,93,0,0,0,0,0,0,0,91,116,120,116,95,83,121,115,116,101,109,95,80,111,105,110,116,101,114,0,0,0,0,0,46,79,79,79,79,79,46,46,46,79,79,46,46,46,79,79,79,46,46,79,79,79,46,46,79,79,79,46,46,46,46,46,111,79,35,36,111,79,46,46,46,46,46,46,46,46,46,46,46,46,46,46,111,79,35,46,46,46,46,46,46,46,35,36,111,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,0,0,0,0,0,0,0,0,59,0,0,0,0,0,0,0,46,46,0,0,0,0,0,0,91,65,67,84,73,79,78,95,80,82,69,86,73,79,85,83,95,80,65,67,75,46,100,101,118,105,99,101,93,0,0,0,91,116,120,116,95,80,114,105,109,97,114,121,95,67,108,105,99,107,93,0,0,0,0,0,58,0,0,0,0,0,0,0,46,79,79,79,79,79,46,46,46,79,79,79,46,46,79,79,79,46,46,46,79,79,79,79,79,79,46,46,46,46,46,46,36,111,79,46,46,46,79,35,46,46,46,35,36,111,79,35,36,46,46,46,36,111,79,35,36,111,79,46,46,46,79,35,36,111,79,35,36,46,46,46,46,111,79,35,36,111,79,46,0,0,0,0,0,0,0,0,91,65,67,84,73,79,78,95,78,69,88,84,95,76,69,86,69,76,46,109,111,100,93,0,37,115,58,32,37,115,10,0,91,116,120,116,95,83,99,114,111,108,108,95,68,111,119,110,93,0,0,0,0,0,0,0,57,0,0,0,0,0,0,0,91,65,67,84,73,79,78,95,78,69,88,84,95,76,69,86,69,76,46,105,100,93,0,0,91,116,120,116,95,83,99,114,111,108,108,95,85,112,93,0,56,0,0,0,0,0,0,0,91,65,67,84,73,79,78,95,78,69,88,84,95,76,69,86,69,76,46,100,101,118,105,99,101,93,0,0,0,0,0,0,91,115,102,120,95,118,111,108,93,0,0,0,0,0,0,0,91,116,120,116,95,84,111,103,103,108,101,95,68,101,115,105,103,110,101,114,93,0,0,0,55,0,0,0,0,0,0,0,91,65,67,84,73,79,78,95,80,82,69,86,73,79,85,83,95,76,69,86,69,76,46,109,111,100,93,0,0,0,0,0,91,116,120,116,95,82,101,115,116,111,114,101,95,68,101,102,97,117,108,116,95,67,111,110,116,114,111,108,115,93,0,0,37,115,58,32,67,97,110,110,111,116,32,99,114,101,97,116,101,32,98,108,101,110,100,32,115,117,114,102,97,99,101,58,32,37,115,0,0,0,0,0,54,0,0,0,0,0,0,0,91,65,67,84,73,79,78,95,80,82,69,86,73,79,85,83,95,76,69,86,69,76,46,105,100,93,0,0,0,0,0,0,114,0,0,0,0,0,0,0,91,116,120,116,95,77,111,100,105,102,105,101,114,93,0,0,53,0,0,0,0,0,0,0,67,97,110,110,111,116,32,119,114,105,116,101,32,116,111,32,102,105,108,101,58,32,37,115,10,0,0,0,0,0,0,0,91,65,67,84,73,79,78,95,80,82,69,86,73,79,85,83,95,76,69,86,69,76,46,100,101,118,105,99,101,93,0,0,37,115,32,51,50,120,51,49,0,0,0,0,0,0,0,0,91,116,120,116,95,86,111,108,117,109,101,95,68,111,119,110,93,0,0,0,0,0,0,0,52,0,0,0,0,0,0,0,85,115,97,103,101,58,32,103,110,117,114,111,98,98,111,32,91,111,112,116,105,111,110,115,93,10,0,0,0,0,0,0,91,65,67,84,73,79,78,95,84,79,71,71,76,69,95,70,85,76,76,83,67,82,69,69,78,46,109,111,100,93,0,0,91,116,120,116,95,86,111,108,117,109,101,95,85,112,93,0,51,0,0,0,0,0,0,0,91,65,67,84,73,79,78,95,84,79,71,71,76,69,95,70,85,76,76,83,67,82,69,69,78,46,105,100,93,0,0,0,91,116,120,116,95,80,97,103,101,95,68,111,119,110,93,0,50,0,0,0,0,0,0,0,67,97,110,110,111,116,32,108,111,97,100,32,102,111,110,116,58,32,37,115,10,0,0,0,32,0,0,0,0,0,0,0,91,107,101,121,93,0,0,0,91,65,67,84,73,79,78,95,84,79,71,71,76,69,95,70,85,76,76,83,67,82,69,69,78,46,100,101,118,105,99,101,93,0,0,0,0,0,0,0,91,116,120,116,95,80,97,103,101,95,85,112,93,0,0,0,49,0,0,0,0,0,0,0,102,111,110,116,50,52,120,51,50,46,98,109,112,0,0,0,46,0,0,0,0,0,0,0,37,115,37,105,0,0,0,0,91,65,67,84,73,79,78,95,79,80,84,73,79,78,83,46,109,111,100,93,0,0,0,0,91,116,120,116,95,69,110,100,93,0,0,0,0,0,0,0,48,0,0,0,0,0,0,0,79,79,79,79,79,79,79,46,46,79,79,79,46,46,79,79,79,46,46,79,79,79,79,79,79,79,79,46,46,46,46,46,35,36,111,46,46,36,111,46,46,46,111,79,35,46,46,46,35,36,46,46,35,36,111,46,46,46,111,79,46,46,111,79,35,46,46,46,35,36,46,46,35,36,111,46,46,46,111,79,0,0,0,0,0,0,0,0,102,111,110,116,49,50,120,49,54,46,98,109,112,0,0,0,45,45,0,0,0,0,0,0,91,65,67,84,73,79,78,95,79,80,84,73,79,78,83,46,105,100,93,0,0,0,0,0,67,97,110,110,111,116,32,99,114,101,97,116,101,32,115,117,114,102,97,99,101,58,32,37,115,10,0,0,0,0,0,0,91,116,120,116,95,72,111,109,101,93,0,0,0,0,0,0,47,0,0,0,0,0,0,0,67,97,110,110,111,116,32,99,114,101,97,116,101,32,82,71,66,32,115,117,114,102,97,99,101,58,32,37,115,10,0,0,37,115,58,32,0,0,0,0,91,65,67,84,73,79,78,95,79,80,84,73,79,78,83,46,100,101,118,105,99,101,93,0,91,116,120,116,95,84,111,103,103,108,101,95,70,117,108,108,115,99,114,101,101,110,93,0,46,0,0,0,0,0,0,0,67,97,110,110,111,116,32,108,111,97,100,32,119,105,110,100,111,119,32,109,97,110,97,103,101,114,32,105,99,111,110,58,32,37,115,10,0,0,0,0,45,0,0,0,0,0,0,0,91,65,67,84,73,79,78,95,72,69,76,80,46,109,111,100,93,0,0,0,0,0,0,0,37,105,0,0,0,0,0,0,91,116,120,116,95,78,101,120,116,95,80,97,99,107,93,0,45,0,0,0,0,0,0,0,119,109,95,105,99,111,110,46,98,109,112,0,0,0,0,0,85,110,107,110,111,119,110,0,91,65,67,84,73,79,78,95,72,69,76,80,46,105,100,93,0,0,0,0,0,0,0,0,91,116,120,116,95,80,114,101,118,105,111,117,115,95,80,97,99,107,93,0,0,0,0,0,44,0,0,0,0,0,0,0,67,97,110,110,111,116,32,115,101,116,32,115,117,114,102,97,99,101,32,99,111,108,111,117,114,32,107,101,121,58,32,37,115,10,0,0,0,0,0,0,37,115,32,37,105,0,0,0,91,65,67,84,73,79,78,95,72,69,76,80,46,100,101,118,105,99,101,93,0,0,0,0,108,111,99,97,108,101,114,99,0,0,0,0,0,0,0,0,91,116,120,116,95,78,101,120], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE);
/* memory initializer */ allocate([116,95,76,101,118,101,108,93,0,0,0,0,0,0,0,0,43,0,0,0,0,0,0,0,67,97,110,110,111,116,32,108,111,97,100,32,98,105,116,109,97,112,58,32,37,115,10,0,119,0,0,0,0,0,0,0,37,115,37,105,32,0,0,0,91,65,67,84,73,79,78,95,69,88,73,84,46,109,111,100,93,0,0,0,0,0,0,0,37,115,32,49,54,120,51,49,0,0,0,0,0,0,0,0,91,116,120,116,95,80,114,101,118,105,111,117,115,95,76,101,118,101,108,93,0,0,0,0,42,0,0,0,0,0,0,0,114,98,0,0,0,0,0,0,32,62,32,32,32,32,0,0,48,46,54,54,0,0,0,0,91,65,67,84,73,79,78,95,69,88,73,84,46,105,100,93,0,0,0,0,0,0,0,0,91,116,120,116,95,79,112,116,105,111,110,115,93,0,0,0,41,0,0,0,0,0,0,0,67,97,110,110,111,116,32,99,114,101,97,116,101,32,115,117,114,102,97,99,101,58,32,37,115,10,0,0,0,0,0,0,37,100,0,0,0,0,0,0,91,65,67,84,73,79,78,95,69,88,73,84,46,100,101,118,105,99,101,93,0,0,0,0,91,116,120,116,95,72,101,108,112,93,0,0,0,0,0,0,40,0,0,0,0,0,0,0,67,97,110,110,111,116,32,108,111,97,100,32,80,78,71,32,105,109,97,103,101,32,37,115,10,0,0,0,0,0,0,0,32,62,32,32,32,32,32,32,0,0,0,0,0,0,0,0,91,103,117,110,93,0,0,0,91,65,67,84,73,79,78,95,83,69,76,69,67,84,46,109,111,100,93,0,0,0,0,0,91,116,120,116,95,67,111,110,102,105,114,109,93,0,0,0,39,0,0,0,0,0,0,0,107,95,105,99,111,110,115,49,54,46,112,110,103,0,0,0,67,111,117,108,100,110,39,116,32,111,112,101,110,32,115,107,105,110,115,32,102,111,108,100,101,114,58,32,37,115,10,0,32,62,32,32,32,0,0,0,91,65,67,84,73,79,78,95,83,69,76,69,67,84,46,105,100,93,0,0,0,0,0,0,91,116,120,116,95,82,101,115,116,97,114,116,93,0,0,0,38,0,0,0,0,0,0,0,79,79,79,46,46,79,79,46,46,79,79,79,46,79,79,79,79,46,46,79,79,79,46,46,79,79,79,46,46,46,46,46,79,35,36,111,79,35,46,46,46,46,36,111,79,46,46,46,79,35,46,46,79,35,36,46,46,46,36,111,46,46,36,111,79,46,46,46,79,35,46,46,79,35,36,46,46,46,36,111,0,0,0,0,0,0,0,0,107,95,105,99,111,110,115,51,50,46,112,110,103,0,0,0,37,115,32,0,0,0,0,0,91,65,67,84,73,79,78,95,83,69,76,69,67,84,46,100,101,118,105,99,101,93,0,0,67,97,110,110,111,116,32,115,101,116,32,115,117,114,102,97,99,101,32,99,111,108,111,117,114,32,107,101,121,58,32,37,115,10,0,0,0,0,0,0,91,116,120,116,95,83,104,111,111,116,95,82,105,103,104,116,93,0,0,0,0,0,0,0,103,101,116,107,101,121,0,0,36,0,0,0,0,0,0,0,98,97,99,107,103,114,111,117,110,100,49,54,46,112,110,103,0,0,0,0,0,0,0,0,32,62,32,32,32,32,32,32,32,32,0,0,0,0,0,0,91,65,67,84,73,79,78,95,83,72,79,79,84,95,82,73,71,72,84,46,109,111,100,93,0,0,0,0,0,0,0,0,91,116,120,116,95,83,104,111,111,116,95,76,101,102,116,93,0,0,0,0,0,0,0,0,85,110,114,101,99,111,103,110,105,115,101,100,32,111,98,106,101,99,116,32,105,100,101,110,116,105,102,105,101,114,58,32,34,37,99,34,46,32,83,101,116,116,105,110,103,32,116,111,32,69,77,80,84,89,95,70,73,69,76,68,10,0,0,0,114,101,115,116,111,114,101,0,35,0,0,0,0,0,0,0,98,97,99,107,103,114,111,117,110,100,51,50,46,112,110,103,0,0,0,0,0,0,0,0,32,62,45,32,32,32,32,32,32,0,0,0,0,0,0,0,91,65,67,84,73,79,78,95,83,72,79,79,84,95,82,73,71,72,84,46,105,100,93,0,91,103,97,109,101,95,99,121,99,108,101,95,108,105,109,105,116,93,0,0,0,0,0,0,91,116,120,116,95,83,104,111,111,116,95,68,111,119,110,93,0,0,0,0,0,0,0,0,42,32,73,110,99,111,109,112,108,101,116,101,32,108,101,118,101,108,32,100,97,116,97,46,10,0,0,0,0,0,0,0,115,97,118,105,110,103,0,0,34,0,0,0,0,0,0,0,97,108,112,104,97,51,50,46,98,109,112,0,0,0,0,0,37,105,109,115,0,0,0,0,91,65,67,84,73,79,78,95,83,72,79,79,84,95,82,73,71,72,84,46,100,101,118,105,99,101,93,0,0,0,0,0,91,116,120,116,95,83,104,111,111,116,95,85,112,93,0,0,42,32,84,104,101,32,91,100,97,116,97,93,32,116,97,103,32,119,97,115,32,110,111,116,32,102,111,117,110,100,46,10,0,0,0,0,0,0,0,0,37,99,37,99,32,125,59,10,10,0,0,0,0,0,0,0,45,49,0,0,0,0,0,0,33,0,0,0,0,0,0,0,97,108,112,104,97,49,54,46,98,109,112,0,0,0,0,0,32,62,32,32,0,0,0,0,37,115,58,32,37,115,10,0,91,65,67,84,73,79,78,95,83,72,79,79,84,95,76,69,70,84,46,109,111,100,93,0,47,0,0,0,0,0,0,0,91,116,120,116,95,77,111,118,101,95,85,112,95,76,101,102,116,93,0,0,0,0,0,0,42,32,73,110,99,111,109,112,108,101,116,101,32,111,114,32,105,110,118,97,108,105,100,32,115,105,122,101,32,100,97,116,97,46,10,0,0,0,0,0,37,105,44,32,0,0,0,0,83,68,76,85,110,107,110,111,119,110,0,0,0,0,0,0,99,105,112,104,101,114,115,51,50,46,98,109,112,0,0,0,47,108,101,118,101,108,115,0,37,105,37,37,0,0,0,0,91,65,67,84,73,79,78,95,83,72,79,79,84,95,76,69,70,84,46,105,100,93,0,0,37,115,32,40,37,100,120,57,32,37,115,41,0,0,0,0,91,116,120,116,95,77,111,118,101,95,76,101,102,116,93,0,42,32,84,104,101,32,91,115,105,122,101,93,32,116,97,103,32,119,97,115,32,110,111,116,32,102,111,117,110,100,46,10,0,0,0,0,0,0,0,0,10,115,116,97,116,105,99,32,105,110,116,32,100,101,109,111,95,109,111,100,101,95,100,101,109,111,95,100,97,116,97,95,37,115,95,108,101,118,101,108,37,105,91,93,32,61,32,123,32,0,0,0,0,0,0,0,37,105,0,0,0,0,0,0,99,105,112,104,101,114,115,49,54,46,98,109,112,0,0,0,32,62,32,0,0,0,0,0,71,78,85,32,82,111,98,98,111,32,118,101,114,115,105,111,110,32,37,115,10,0,0,0,91,65,67,84,73,79,78,95,83,72,79,79,84,95,76,69,70,84,46,100,101,118,105,99,101,93,0,0,0,0,0,0,91,116,120,116,95,77,111,118,101,95,68,111,119,110,95,76,101,102,116,93,0,0,0,0,42,32,84,104,101,32,108,101,118,101,108,32,119,97,115,32,110,111,116,32,102,111,117,110,100,46,10,0,0,0,0,0,68,101,109,111,32,114,101,99,111,114,100,105,110,103,32,114,101,97,99,104,101,100,32,101,110,100,32,111,102,32,98,117,102,102,101,114,10,0,0,0,78,111,32,106,111,121,115,116,105,99,107,32,102,111,117,110,100,10,0,0,0,0,0,0,105,99,111,110,115,51,50,46,112,110,103,0,0,0,0,0,46,46,46,0,0,0,0,0,91,65,67,84,73,79,78,95,83,72,79,79,84,95,68,79,87,78,46,109,111,100,93,0,91,116,120,116,95,77,111,118,101,95,68,111,119,110,93,0,76,111,97,100,105,110,103,32,111,102,32,112,97,99,107,32,37,115,32,108,101,118,101,108,32,37,105,32,104,97,115,32,98,101,101,110,32,97,98,111,114,116,101,100,32,100,117,101,32,116,111,32,58,45,10,0,82,111,98,98,111,88,0,0,74,111,121,115,116,105,99,107,32,102,111,117,110,100,58,32,37,105,58,37,115,10,0,0,105,99,111,110,115,49,54,46,112,110,103,0,0,0,0,0,37,105,58,0,0,0,0,0,91,100,111,111,114,93,0,0,91,65,67,84,73,79,78,95,83,72,79,79,84,95,68,79,87,78,46,105,100,93,0,0,91,116,120,116,95,77,111,118,101,95,68,111,119,110,95,82,105,103,104,116,93,0,0,0,37,115,58,37,105,58,32,73,110,118,97,108,105,100,32,118,97,108,117,101,32,102,111,114,32,115,121,109,98,111,108,32,105,110,32,97,100,100,105,116,105,111,110,97,108,32,100,97,116,97,32,111,98,106,101,99,116,46,10,0,0,0,0,0,82,111,98,98,111,86,0,0,37,105,0,0,0,0,0,0,46,47,100,97,116,97,47,115,107,105,110,115,0,0,0,0,32,60,32,0,0,0,0,0,91,65,67,84,73,79,78,95,83,72,79,79,84,95,68,79,87,78,46,100,101,118,105,99,101,93,0,0,0,0,0,0,91,116,120,116,95,77,111,118,101,95,82,105,103,104,116,93,0,0,0,0,0,0,0,0,37,115,58,37,105,58,32,73,110,118,97,108,105,100,32,118,97,108,117,101,32,102,111,114,32,121,32,105,110,32,97,100,100,105,116,105,111,110,97,108,32,100,97,116,97,32,111,98,106,101,99,116,46,10,0,0,82,111,98,98,111,73,86,0,84,104,101,114,101,32,105,115,32,110,111,32,106,111,121,115,116,105,99,107,32,116,111,32,105,110,105,116,105,97,108,105,115,101,10,0,0,0,0,0,79,79,79,46,79,79,79,46,46,79,79,79,79,79,79,79,79,46,46,79,79,79,46,46,79,79,79,46,46,46,46,46,111,79,35,46,46,79,35,46,46,46,35,36,111,46,46,46,111,79,46,46,111,79,35,46,46,46,35,36,46,46,35,36,111,46,46,46,111,79,46,46,111,79,35,46,46,46,35,36,0,0,0,0,0,0,0,0,91,108,101,118,101,108,95,99,111,108,111,117,114,95,111,118,101,114,114,105,100,101,115,95,101,110,100,93,0,0,0,0,32,62,45,32,32,32,32,32,32,32,0,0,0,0,0,0,91,65,67,84,73,79,78,95,83,72,79,79,84,95,85,80,46,109,111,100,93,0,0,0,67,97,110,110,111,116,32,108,111,97,100,32,98,105,116,109,97,112,58,32,37,115,10,0,91,116,120,116,95,77,111,118,101,95,85,112,95,82,105,103,104,116,93,0,0,0,0,0,37,115,58,37,105,58,32,73,110,118,97,108,105,100,32,118,97,108,117,101,32,102,111,114,32,120,32,105,110,32,97,100,100,105,116,105,111,110,97,108,32,100,97,116,97,32,111,98,106,101,99,116,46,10,0,0,82,111,98,98,111,73,73,0,67,111,117,108,100,110,39,116,32,102,105,110,100,32,106,111,121,115,116,105,99,107,32,37,105,58,37,115,10,0,0,0,91,99,111,108,111,117,114,93,0,0,0,0,0,0,0,0,37,105,72,122,0,0,0,0,91,65,67,84,73,79,78,95,83,72,79,79,84,95,85,80,46,105,100,93,0,0,0,0,91,116,120,116,95,77,111,118,101,95,85,112,93,0,0,0,37,115,58,37,105,58,32,73,110,115,117,102,102,105,99,105,101,110,116,32,110,117,109,98,101,114,32,111,102,32,118,97,108,117,101,115,32,100,101,102,105,110,105,110,103,32,97,100,100,105,116,105,111,110,97,108,32,100,97,116,97,32,111,98,106,101,99,116,46,10,0,0,82,111,98,98,111,66,111,115,115,0,0,0,0,0,0,0,67,111,117,108,100,110,39,116,32,111,112,101,110,32,106,111,121,115,116,105,99,107,32,37,105,10,0,0,0,0,0,0,91,108,101,118,101,108,93,0,32,43,60,32,0,0,0,0,91,65,67,84,73,79,78,95,83,72,79,79,84,95,85,80,46,100,101,118,105,99,101,93,0,0,0,0,0,0,0,0,37,115,0,0,0,0,0,0,91,116,120,116,95,79,110,95,67,104,97,110,103,101,93,0,37,105,46,37,105,46,37,99,46,37,105,46,37,105,46,37,105,46,37,105,46,37,105,46,37,105,0,0,0,0,0,0,82,111,98,98,111,45,66,0,45,49,0,0,0,0,0,0,91,100,101,102,97,117,108,116,95,108,101,118,101,108,95,99,111,108,111,117,114,93,0,0,60,32,37,115,0,0,0,0,91,65,67,84,73,79,78,95,82,69,83,84,65,82,84,46,109,111,100,93,0,0,0,0,91,116,120,116,95,79,110,95,69,120,105,116,93,0,0,0,37,115,58,37,105,58,32,84,104,101,32,97,100,100,105,116,105,111,110,97,108,32,100,97,116,97,32,111,98,106,101,99,116,32,99,111,117,110,116,32,105,115,32,109,105,115,115,105,110,103,46,32,84,104,105,115,32,115,104,111,117,108,100,32,98,101,32,100,105,114,101,99,116,108,121,32,98,101,108,111,119,32,116,104,101,32,91,97,100,100,105,116,105,111,110,97,108,93,32,116,97,103,46,10,0,0,0,0,0,0,0,0,82,111,98,98,111,57,56,0,67,111,117,108,100,110,39,116,32,111,112,101,110,32,97,110,121,32,111,102,32,37,105,32,106,111,121,115,116,105,99,107,40,115,41,33,10,0,0,0,91,108,101,118,101,108,95,112,97,99,107,95,110,97,109,101,93,0,0,0,0,0,0,0,37,115,32,62,0,0,0,0,91,65,67,84,73,79,78,95,82,69,83,84,65,82,84,46,105,100,93,0,0,0,0,0,46,47,100,97,116,97,47,108,111,99,97,108,101,115,47,0,91,116,120,116,95,83,97,118,101,95,70,114,101,113,117,101,110,99,121,93,0,0,0,0,37,115,58,37,105,58,32,73,110,115,117,102,102,105,99,105,101,110,116,32,100,97,116,97,32,102,111,114,32,100,101,99,108,97,114,101,100,32,119,105,100,116,104,32,111,102,32,37,105,46,10,0,0,0,0,0,82,111,98,98,111,88,73,0,67,111,117,108,100,110,39,116,32,111,112,101,110,32,106,111,121,115,116,105,99,107,32,37,105,58,37,115,33,10,0,0,91,108,101,118,101,108,95,99,111,108,111,117,114,95,111,118,101,114,114,105,100,101,115,93,0,0,0,0,0,0,0,0,47,46,103,110,117,114,111,98,98,111,0,0,0,0,0,0,32,62,0,0,0,0,0,0,91,65,67,84,73,79,78,95,82,69,83,84,65,82,84,46,100,101,118,105,99,101,93,0,63,32,40,37,100,32,37,115,41,0,0,0,0,0,0,0,91,116,120,116,95,84,114,97,110,115,108,97,116,105,111,110,95,98,121,93,0,0,0,0,37,115,58,37,105,58,32,73,110,118,97,108,105,100,32,115,105,122,101,32,100,97,116,97,58,32,119,105,100,116,104,32,109,117,115,116,32,98,101,32,60,61,32,37,105,32,97,110,100,32,104,101,105,103,104,116,32,60,61,32,37,105,46,10,0,0,0,0,0,0,0,0,82,111,98,98,111,50,48,48,57,0,0,0,0,0,0,0,74,111,121,115,116,105,99,107,32,111,112,101,110,101,100,58,32,37,105,58,37,115,10,0,67,97,110,110,111,116,32,114,101,97,100,32,102,114,111,109,32,102,105,108,101,58,32,37,115,10,0,0,0,0,0,0,37,105,32,37,115,32,37,105,0,0,0,0,0,0,0,0,45,45,104,101,108,112,0,0,67,97,110,110,111,116,32,99,114,101,97,116,101,32,82,71,66,32,115,117,114,102,97,99,101,58,32,37,115,10,0,0,91,65,67,84,73,79,78,95,76,69,70,84,46,109,111,100,93,0,0,0,0,0,0,0,91,116,120,116,95,76,97,110,103,117,97,103,101,93,0,0,37,105,46,37,105,0,0,0,82,54,53,51,57,50,52,0,74,111,121,115,116,105,99,107,32,99,108,111,115,101,100,58,32,37,105,58,37,115,10,0,91,100,101,115,105,103,110,101,114,95,79,66,74,86,95,116,105,108,101,93,0,0,0,0,60,32,0,0,0,0,0,0,91,65,67,84,73,79,78,95,76,69,70,84,46,105,100,93,0,0,0,0,0,0,0,0,91,116,120,116,95,74,111,121,115,116,105,99,107,95,65,120,101,115,95,68,101,97,100,95,90,111,110,101,93,0,0,0,37,120,0,0,0,0,0,0,75,45,82,111,98,98,111,0,69,114,114,111,114,32,115,101,116,116,105,110,103,32,107,101,121,32,114,101,112,101,97,116,58,32,37,115,10,0,0,0,91,100,101,115,105,103,110,101,114,95,79,66,74,83,95,116,105,108,101,93,0,0,0,0,48,46,54,54,0,0,0,0,91,98,111,120,93,0,0,0,91,65,67,84,73,79,78,95,76,69,70,84,46,100,101,118,105,99,101,93,0,0,0,0,91,116,120,116,95,78,111,95,106,111,121,115,116,105,99,107,95,102,111,117,110,100,93,0,10,0,0,0,0,0,0,0,70,111,114,101,118,101,114,0,91,100,101,115,105,103,110,101,114,95,71,65,77,69,79,66,74,95,116,105,108,101,93,0,91,65,67,84,73,79,78,95,68,79,87,78,46,109,111,100,93,0,0,0,0,0,0,0,91,116,120,116,95,68,101,102,97,117,108,116,95,74,111,121,115,116,105,99,107,93,0,0,37,115,58,37,105,58,32,73,110,115,117,102,102,105,99,105,101,110,116,32,97,100,100,105,116,105,111,110,97,108,32,100,97,116,97,32,111,98,106,101,99,116,115,32,102,111,114,32,100,101,99,108,97,114,101,100,32,99,111,117,110,116,32,111,102,32,37,105,46,10,0,0,37,115,58,32,37,115,10,0,79,79,79,46,46,46,46,46,46,79,79,79,79,46,79,79,79,46,46,79,79,79,46,46,79,79,79,46,46,46,46,46,36,111,79,46,46,46,79,35,46,46,79,35,36,46,46,46,36,111,46,46,36,111,79,46,46,111,79,46,46,46,79,35,36,46,46,35,36,46,46,46,36,111,79,46,46,46,79,35,0,0,0,0,0,0,0,0,91,100,101,115,105,103,110,101,114,95,116,101,120,116,93,0,85,110,97,98,108,101,32,116,111,32,116,111,103,103,108,101,32,102,117,108,108,115,99,114,101,101,110,58,32,37,115,10,0,0,0,0,0,0,0,0,91,65,67,84,73,79,78,95,68,79,87,78,46,105,100,93,0,0,0,0,0,0,0,0,114,98,0,0,0,0,0,0,91,116,120,116,95,73,110,116,101,114,118,97,108,93,0,0,37,115,58,37,105,58,32,73,110,115,117,102,102,105,99,105,101,110,116,32,100,97,116,97,32,102,111,114,32,100,101,99,108,97,114,101,100,32,104,101,105,103,104,116,32,111,102,32,37,105,46,10,0,0,0,0,67,97,110,110,111,116,32,105,110,105,116,105,97,108,105,115,101,32,83,68,76,95,116,116,102,32,109,111,100,117,108,101,10,0,0,0,0,0,0,0,91,97,117,116,104,111,114,95,116,101,120,116,93,0,0,0,70,97,105,108,101,100,58,32,37,115,10,0,0,0,0,0,91,65,67,84,73,79,78,95,68,79,87,78,46,100,101,118,105,99,101,93,0,0,0,0,91,116,120,116,95,68,101,108,97,121,93,0,0,0,0,0,37,115,58,37,105,58,32,73,110,99,111,109,112,108,101,116,101,32,115,105,122,101,32,100,97,116,97,58,32,119,105,100,116,104,32,111,114,32,104,101,105,103,104,116,32,111,114,32,98,111,116,104,32,119,101,114,101,32,102,111,117,110,100,32,116,111,32,98,101,32,109,105,115,115,105,110,103,46,10,0,91,108,101,118,101,108,93,10,0,0,0,0,0,0,0,0,67,97,110,110,111,116,32,105,110,105,116,105,97,108,105,115,101,32,115,99,114,101,101,110,58,32,37,115,10,0,0,0,91,102,97,100,101,93,0,0,84,114,121,105,110,103,32,100,101,102,97,117,108,116,32,108,111,45,114,101,115,32,118,105,100,101,111,32,109,111,100,101,32,37,105,120,37,105,32,49,54,98,112,112,32,37,115,32,115,117,114,102,97,99,101,46,10,0,0,0,0,0,0,0,91,65,67,84,73,79,78,95,82,73,71,72,84,46,109,111,100,93,0,0,0,0,0,0,37,115,32,110,111,116,32,102,111,117,110,100,10,0,0,0,91,116,120,116,95,75,101,121,95,82,101,112,101,97,116,93,0,0,0,0,0,0,0,0,91,101,110,100,93,0,0,0,46,47,100,97,116,97,47,108,111,99,97,108,101,115,0,0,91,108,101,118,101,108,93,0,103,110,117,114,111,98,98,111,0,0,0,0,0,0,0,0,91,99,114,101,100,105,116,115,95,116,101,120,116,93,0,0,84,114,121,105,110,103,32,100,101,102,97,117,108,116,32,104,105,45,114,101,115,32,118,105,100,101,111,32,109,111,100,101,32,37,105,120,37,105,32,49,54,98,112,112,32,37,115,32,115,117,114,102,97,99,101,46,10,0,0,0,0,0,0,0,91,65,67,84,73,79,78,95,82,73,71,72,84,46,105,100,93,0,0,0,0,0,0,0,91,116,120,116,95,83,108,111,119,93,0,0,0,0,0,0,91,97,100,100,105,116,105,111,110,97,108,93,0,0,0,0,91,108,97,115,116,95,108,101,118,101,108,93,0,0,0,0,71,78,85,32,82,111,98,98,111,0,0,0,0,0,0,0,91,100,101,102,97,117,108,116,95,99,111,110,116,114,111,108,115,95,116,101,120,116,93,0,83,101,116,116,105,110,103,32,118,105,100,101,111,32,109,111,100,101,32,37,105,120,37,105,32,49,54,98,112,112,32,37,115,32,115,117,114,102,97,99,101,46,10,0,0,0,0,0,91,65,67,84,73,79,78,95,82,73,71,72,84,46,100,101,118,105,99,101,93,0,0,0,46,46,0,0,0,0,0,0,91,116,120,116,95,78,111,114,109,97,108,93,0,0,0,0,91,100,97,116,97,93,0,0,91,101,110,100,93,0,0,0,67,97,110,110,111,116,32,105,110,105,116,105,97,108,105,115,101,32,83,68,76,58,32,37,115,0,0,0,0,0,0,0,91,109,101,110,117,95,103,114,101,121,101,100,95,116,101,120,116,93,0,0,0,0,0,0,67,114,101,97,116,105,110,103,32,37,115,10,0,0,0,0,115,111,102,116,119,97,114,101,0,0,0,0,0,0,0,0,91,65,67,84,73,79,78,95,85,80,46,109,111,100,93,0,37,115,32,40,37,100,32,37,115,41,0,0,0,0,0,0,91,116,120,116,95,70,97,115,116,93,0,0,0,0,0,0,91,97,117,116,104,111,114,93,0,0,0,0,0,0,0,0,119,43,0,0,0,0,0,0,82,69,83,79,85,82,67,69,95,70,73,76,69,32,105,115,32,37,115,10,0,0,0,0,91,109,101,110,117,95,115,101,108,101,99,116,101,100,95,108,105,109,105,116,95,116,101,120,116,93,0,0,0,0,0,0,45,49,0,0,0,0,0,0,67,97,110,110,111,116,32,99,114,101,97,116,101,32,115,117,114,102,97,99,101,58,32,37,115,10,0,0,0,0,0,0,91,65,67,84,73,79,78,95,85,80,46,105,100,93,0,0,91,116,120,116,95,71,97,109,101,95,83,112,101,101,100,93,0,0,0,0,0,0,0,0,91,115,105,122,101,93,0,0,114,0,0,0,0,0,0,0,46,103,110,117,114,111,98,98,111,114,99,0,0,0,0,0,91,109,101,110,117,95,115,101,108,101,99,116,101,100,95,116,101,120,116,93,0,0,0,0,37,115,58,32,37,115,0,0,91,65,67,84,73,79,78,95,85,80,46,100,101,118,105,99,101,93,0,0,0,0,0,0,91,116,120,116,95,83,97,118,101,93,0,0,0,0,0,0,91,99,111,108,111,117,114,93,0,0,0,0,0,0,0,0,46,116,109,112,0,0,0,0,47,0,0,0,0,0,0,0,77,97,110,97,103,101,100,32,116,111,32,97,108,108,111,99,97,116,101,32,37,100,32,115,111,117,110,100,32,99,104,97,110,110,101,108,115,32,10,0,91,109,101,110,117,95,116,101,120,116,93,0,0,0,0,0,37,115,0,0,0,0,0,0,91,98,111,109,98,93,0,0,84,104,101,114,101,32,97,114,101,32,116,111,111,32,109,97,110,121,32,108,101,118,101,108,32,112,97,99,107,115,32,114,101,99,111,114,100,101,100,32,119,105,116,104,105,110,32,116,104,101,32,114,99,102,105,108,101,32,40,109,97,120,32,37,105,41,46,32,80,111,115,115,105,98,108,121,32,116,104,101,114,101,32,97,114,101,32,115,111,109,101,32,104,105,115,116,111,114,105,99,97,108,32,101,110,116,114,105,101,115,32,116,104,97,116,32,121,111,117,32,99,97,110,32,100,101,108,101,116,101,46,10,0,0,0,0,91,116,120,116,95,111,112,116,105,111,110,115,95,112,97,103,101,49,93,0,0,0,0,0,91,108,101,118,101,108,95,110,111,116,101,115,93,0,0,0,37,115,37,115,0,0,0,0,72,79,77,69,0,0,0,0,85,110,97,98,108,101,32,116,111,32,105,110,105,116,105,97,108,105,122,101,32,97,117,100,105,111,58,32,37,115,10,0,91,103,101,110,101,114,97,108,95,116,101,120,116,93,0,0,37,105,0,0,0,0,0,0,72,79,77,69,0,0,0,0,91,115,101,108,101,99,116,101,100,93,0,0,0,0,0,0,91,116,120,116,95,69,120,105,116,93,0,0,0,0,0,0,91,108,101,118,101,108,93,0,91,101,110,100,93,10,10,0,101,110,95,71,66,0,0,0,32,0,0,0,0,0,0,0,79,79,79,46,46,79,79,46,46,79,79,79,46,46,79,79,79,46,46,79,79,79,46,46,79,79,79,46,46,46,46,46,35,36,111,46,46,46,111,79,46,46,46,79,35,36,46,79,35,46,46,46,35,36,111,79,35,36,46,46,46,46,111,79,35,36,111,79,46,46,46,46,46,36,111,79,46,36,111,46,0,0,0,0,0,0,0,0,91,118,101,114,115,105,111,110,95,116,101,120,116,93,0,0,66,108,105,116,83,117,114,102,97,99,101,32,101,114,114,111,114,58,32,37,115,10,0,0,91,108,101,118,101,108,95,115,101,108,101,99,116,101,100,93,0,0,0,0,0,0,0,0,114,111,98,115,112,114,105,116,101,115,46,98,109,112,0,0,91,116,120,116,95,78,101,120,116,93,0,0,0,0,0,0,91,100,101,102,97,117,108,116,95,108,101,118,101,108,95,99,111,108,111,117,114,93,0,0,37,100,46,37,100,46,38,46,37,100,46,37,100,10,0,0,116,114,111,110,105,99,0,0,114,98,0,0,0,0,0,0,91,98,97,99,107,103,114,111,117,110,100,93,0,0,0,0,37,115,58,32,37,115,10,0,91,108,101,118,101,108,95,114,101,97,99,104,101,100,93,0,91,65,67,84,73,79,78,95,80,82,73,77,65,82,89,95,67,76,73,67,75,46,109,111,100,93,10,37,105,10,0,0,91,116,120,116,95,66,97,99,107,93,0,0,0,0,0,0,67,97,110,110,111,116,32,114,101,97,100,32,102,114,111,109,32,102,105,108,101,58,32,37,115,10,0,0,0,0,0,0,91,65,67,84,73,79,78,95,80,82,73,77,65,82,89,95,67,76,73,67,75,46,105,100,93,10,37,105,10,0,0,0,37,100,46,37,100,46,77,46,37,100,46,37,100,10,0,0,46,47,100,97,116,97,47,108,101,118,101,108,115,47,111,114,105,103,105,110,97,108,46,100,97,116,0,0,0,0,0,0,91,65,67,84,73,79,78,95,80,82,73,77,65,82,89,95,67,76,73,67,75,46,100,101,118,105,99,101,93,10,37,105,10,0,0,0,0,0,0,0,91,65,67,84,73,79,78,95,83,67,82,79,76,76,95,68,79,87,78,46,109,111,100,93,10,37,105,10,0,0,0,0,91,65,67,84,73,79,78,95,83,67,82,79,76,76,95,68,79,87,78,46,105,100,93,10,37,105,10,0,0,0,0,0,37,115,47,37,115,47,115,107,105,110,115,47,100,101,102,97,117,108,116,46,100,97,116,0,83,107,105,110,32,102,111,117,110,100,58,32,37,115,10,0,91,65,67,84,73,79,78,95,83,67,82,79,76,76,95,68,79,87,78,46,100,101,118,105,99,101,93,10,37,105,10,0,46,46,46,46,46,46,46,46,46,46,79,79,79,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,0,0,0,0,91,65,67,84,73,79,78,95,83,67,82,79,76,76,95,85,80,46,109,111,100,93,10,37,105,10,0,0,0,0,0,0,91,65,67,84,73,79,78,95,83,67,82,79,76,76,95,85,80,46,105,100,93,10,37,105,10,0,0,0,0,0,0,0,91,65,67,84,73,79,78,95,83,67,82,79,76,76,95,85,80,46,100,101,118,105,99,101,93,10,37,105,10,0,0,0,91,102,105,108,101,110,97,109,101,93,0,0,0,0,0,0,91,65,67,84,73,79,78,95,77,79,68,73,70,73,69,82,52,46,109,111,100,93,10,37,105,10,0,0,0,0,0,0,114,0,0,0,0,0,0,0,91,65,67,84,73,79,78,95,77,79,68,73,70,73,69,82,52,46,105,100,93,10,37,105,10,0,0,0,0,0,0,0,91,116,120,116,95,104,101,108,112,95,112,97,103,101,51,93,0,0,0,0,0,0,0,0,76,101,118,101,108,32,112,97,99,107,32,102,111,117,110,100,58,32,37,115,32,119,105,116,104,32,37,105,32,108,101,118,101,108,115,10,0,0,0,0,91,65,67,84,73,79,78,95,77,79,68,73,70,73,69,82,52,46,100,101,118,105,99,101,93,10,37,105,10,0,0,0,37,100,46,37,100,46,77,46,37,100,10,0,0,0,0,0,46,47,100,97,116,97,0,0,91,65,67,84,73,79,78,95,77,79,68,73,70,73,69,82,51,46,109,111,100,93,10,37,105,10,0,0,0,0,0,0,91,65,67,84,73,79,78,95,77,79,68,73,70,73,69,82,51,46,105,100,93,10,37,105,10,0,0,0,0,0,0,0,91,65,67,84,73,79,78,95,77,79,68,73,70,73,69,82,51,46,100,101,118,105,99,101,93,10,37,105,10,0,0,0,114,0,0,0,0,0,0,0,37,120,0,0,0,0,0,0,91,65,67,84,73,79,78,95,77,79,68,73,70,73,69,82,50,46,109,111,100,93,10,37,105,10,0,0,0,0,0,0,46,79,79,79,79,79,79,46,46,46,79,79,79,79,79,79,46,46,46,46,46,35,36,111,111,46,46,79,79,79,46,46,46,35,36,111,79,35,36,46,46,46,36,111,79,46,46,46,111,79,46,46,46,79,79,36,111,35,36,46,0,0,0,0,91,65,67,84,73,79,78,95,77,79,68,73,70,73,69,82,50,46,105,100,93,10,37,105,10,0,0,0,0,0,0,0,91,65,67,84,73,79,78,95,77,79,68,73,70,73,69,82,50,46,100,101,118,105,99,101,93,10,37,105,10,0,0,0,91,65,67,84,73,79,78,95,77,79,68,73,70,73,69,82,49,46,109,111,100,93,10,37,105,10,0,0,0,0,0,0,91,115,101,110,115,105,98,108,101,95,115,111,108,105,100,95,108,97,115,101,114,115,93,0,91,65,67,84,73,79,78,95,77,79,68,73,70,73,69,82,49,46,105,100,93,10,37,105,10,0,0,0,0,0,0,0,91,65,67,84,73,79,78,95,77,79,68,73,70,73,69,82,49,46,100,101,118,105,99,101,93,10,37,105,10,0,0,0,91,116,120,116,95,104,101,108,112,95,112,97,103,101,50,93,0,0,0,0,0,0,0,0,91,108,97,115,116,95,108,101,118,101,108,93,32,105,115,32,109,105,115,115,105,110,103,32,102,114,111,109,32,37,115,10,0,0,0,0,0,0,0,0,91,65,67,84,73,79,78,95,86,79,76,68,79,87,78,46,109,111,100,93,10,37,105,10,0,0,0,0,0,0,0,0,37,100,46,37,100,46,42,46,37,100,10,0,0,0,0,0,80,65,67,75,65,71,69,95,68,65,84,65,95,68,73,82,32,105,115,32,37,115,10,0,91,65,67,84,73,79,78,95,86,79,76,68,79,87,78,46,105,100,93,10,37,105,10,0,91,65,67,84,73,79,78,95,86,79,76,68,79,87,78,46,100,101,118,105,99,101,93,10,37,105,10,0,0,0,0,0,91,65,67,84,73,79,78,95,86,79,76,85,80,46,109,111,100,93,10,37,105,10,0,0,115,111,117,110,100,115,0,0,91,112,114,111,106,101,99,116,95,99,111,108,111,117,114,115,95,101,110,100,93,0,0,0,91,65,67,84,73,79,78,95,86,79,76,85,80,46,105,100,93,10,37,105,10,0,0,0,79,79,79,79,79,79,79,79,46,46,79,79,79,46,46,79,79,46,46,46,111,79,35,46,46,46,46,79,79,79,46,46,111,79,35,46,46,46,35,36,46,46,35,36,111,46,46,46,111,79,46,46,79,79,35,46,46,46,35,36,0,0,0,0,91,65,67,84,73,79,78,95,86,79,76,85,80,46,100,101,118,105,99,101,93,10,37,105,10,0,0,0,0,0,0,0,91,65,67,84,73,79,78,95,84,79,71,71,76,69,95,68,69,83,73,71,78,69,82,46,109,111,100,93,10,37,105,10,0,0,0,0,0,0,0,0,66,108,105,116,83,117,114,102,97,99,101,32,101,114,114,111,114,58,32,37,115,10,0,0,91,65,67,84,73,79,78,95,84,79,71,71,76,69,95,68,69,83,73,71,78,69,82,46,105,100,93,10,37,105,10,0,91,115,101,110,115,105,98,108,101,95,113,117,101,115,116,105,111,110,109,97,114,107,115,93,0,0,0,0,0,0,0,0,46,0,0,0,0,0,0,0,91,65,67,84,73,79,78,95,84,79,71,71,76,69,95,68,69,83,73,71,78,69,82,46,100,101,118,105,99,101,93,10,37,105,10,0,0,0,0,0,91,65,67,84,73,79,78,95,80,65,71,69,68,79,87,78,46,109,111,100,93,10,37,105,10,0,0,0,0,0,0,0,91,116,120,116,95,104,101,108,112,95,112,97,103,101,49,93,0,0,0,0,0,0,0,0,91,110,97,109,101,93,32,105,115,32,109,105,115,115,105,110,103,32,102,114,111,109,32,37,115,10,0,0,0,0,0,0,91,65,67,84,73,79,78,95,80,65,71,69,68,79,87,78,46,105,100,93,10,37,105,10,0,0,0,0,0,0,0,0,37,100,46,37,100,46,64,46,37,100,10,0,0,0,0,0,73,110,118,97,108,105,100,32,116,105,108,101,32,115,105,122,101,58,32,65,32,115,105,122,101,32,111,102,32,51,50,32,114,101,113,117,105,114,101,115,32,97,32,109,105,110,105,109,117,109,32,114,101,115,111,108,117,116,105,111,110,32,111,102,32,52,56,48,120,52,56,48,46,10,0,0,0,0,0,0,91,65,67,84,73,79,78,95,80,65,71,69,68,79,87,78,46,100,101,118,105,99,101,93,10,37,105,10,0,0,0,0,91,65,67,84,73,79,78,95,80,65,71,69,85,80,46,109,111,100,93,10,37,105,10,0,91,65,67,84,73,79,78,95,80,65,71,69,85,80,46,105,100,93,10,37,105,10,0,0,37,115,47,37,115,47,115,107,105,110,115,47,37,115,0,0,91,104,101,108,112,95,116,105,108,101,93,0,0,0,0,0,91,65,67,84,73,79,78,95,80,65,71,69,85,80,46,100,101,118,105,99,101,93,10,37,105,10,0,0,0,0,0,0,114,0,0,0,0,0,0,0,79,79,79,46,46,79,79,79,46,46,79,79,79,46,46,46,79,79,46,46,36,111,79,46,46,46,46,79,79,79,46,46,36,111,79,46,46,46,79,35,46,46,79,35,36,46,46,46,36,111,46,46,46,46,46,46,46,46,79,35,0,0,0,0,91,65,67,84,73,79,78,95,69,78,68,46,109,111,100,93,10,37,105,10,0,0,0,0,91,65,67,84,73,79,78,95,69,78,68,46,105,100,93,10,37,105,10,0,0,0,0,0,91,65,67,84,73,79,78,95,69,78,68,46,100,101,118,105,99,101,93,10,37,105,10,0,91,115,101,110,115,105,98,108,101,95,98,101,97,114,115,93,0,0,0,0,0,0,0,0,91,65,67,84,73,79,78,95,72,79,77,69,46,109,111,100,93,10,37,105,10,0,0,0,91,65,67,84,73,79,78,95,72,79,77,69,46,105,100,93,10,37,105,10,0,0,0,0,82,111,98,98,111,0,0,0,91,116,120,116,95,104,101,108,112,95,112,97,103,101,48,93,0,0,0,0,0,0,0,0,37,105,0,0,0,0,0,0,91,65,67,84,73,79,78,95,72,79,77,69,46,100,101,118,105,99,101,93,10,37,105,10,0,0,0,0,0,0,0,0,37,100,46,37,100,46,94,46,37,100,46,37,100,46,37,100,10,0,0,0,0,0,0,0,91,65,67,84,73,79,78,95,78,69,88,84,95,80,65,67,75,46,109,111,100,93,10,37,105,10,0,0,0,0,0,0,85,110,114,101,99,111,103,110,105,115,101,100,32,111,112,116,105,111,110,32,37,115,46,10,0,0,0,0,0,0,0,0,91,65,67,84,73,79,78,95,78,69,88,84,95,80,65,67,75,46,105,100,93,10,37,105,10,0,0,0,0,0,0,0,91,65,67,84,73,79,78,95,78,69,88,84,95,80,65,67,75,46,100,101,118,105,99,101,93,10,37,105,10,0,0,0,46,111,103,103,0,0,0,0,91,115,111,117,110,100,115,107,105,110,93,0,0,0,0,0,91,65,67,84,73,79,78,95,80,82,69,86,73,79,85,83,95,80,65,67,75,46,109,111,100,93,10,37,105,10,0,0,79,79,79,46,46,79,79,79,46,46,79,79,79,46,46,46,79,79,46,46,111,79,35,46,46,46,46,79,79,79,46,46,35,36,111,46,46,46,111,79,46,46,111,79,35,46,46,46,35,36,46,46,46,79,36,111,111,111,79,46,0,0,0,0,91,65,67,84,73,79,78,95,80,82,69,86,73,79,85,83,95,80,65,67,75,46,105,100,93,10,37,105,10,0,0,0,103,101,116,107,101,121,101,114,114,111,114,0,0,0,0,0,67,97,110,110,111,116,32,115,101,116,32,115,117,114,102,97,99,101,32,99,111,108,111,117,114,32,107,101,121,58,32,37,115,10,0,0,0,0,0,0,91,65,67,84,73,79,78,95,80,82,69,86,73,79,85,83,95,80,65,67,75,46,100,101,118,105,99,101,93,10,37,105,10,0,0,0,0,0,0,0,91,65,67,84,73,79,78,95,78,69,88,84,95,76,69,86,69,76,46,109,111,100,93,10,37,105,10,0,0,0,0,0,91,112,111,105,110,116,101,114,95,99,111,110,116,114,111,108,115,46,112,97,100,95,116,121,112,101,93,0,0,0,0,0,91,65,67,84,73,79,78,95,78,69,88,84,95,76,69,86,69,76,46,105,100,93,10,37,105,10,0,0,0,0,0,0,91,65,67,84,73,79,78,95,78,69,88,84,95,76,69,86,69,76,46,100,101,118,105,99,101,93,10,37,105,10,0,0,91,116,120,116,95,105,110,116,114,111,95,99,114,101,100,105,116,115,93,0,0,0,0,0,91,108,97,115,116,95,108,101,118,101,108,93,0,0,0,0,91,65,67,84,73,79,78,95,80,82,69,86,73,79,85,83,95,76,69,86,69,76,46,109,111,100,93,10,37,105,10,0,37,100,46,37,100,46,125,46,37,100,46,37,100,46,37,100,46,37,100,46,37,100,46,37,100,10,0,0,0,0,0,0,91,65,67,84,73,79,78,95,80,82,69,86,73,79,85,83,95,76,69,86,69,76,46,105,100,93,10,37,105,10,0,0,73,110,118,97,108,105,100,32,114,101,115,111,108,117,116,105,111,110,58,32,65,32,109,105,110,105,109,117,109,32,111,102,32,50,52,48,120,50,52,48,32,105,115,32,114,101,113,117,105,114,101,100,46,10,0,0,91,65,67,84,73,79,78,95,80,82,69,86,73,79,85,83,95,76,69,86,69,76,46,100,101,118,105,99,101,93,10,37,105,10,0,0,0,0,0,0,91,65,67,84,73,79,78,95,84,79,71,71,76,69,95,70,85,76,76,83,67,82,69,69,78,46,109,111,100,93,10,37,105,10,0,0,0,0,0,0,37,115,47,37,115,47,0,0,91,112,114,111,106,101,99,116,95,99,111,108,111,117,114,115,93,0,0,0,0,0,0,0,91,65,67,84,73,79,78,95,84,79,71,71,76,69,95,70,85,76,76,83,67,82,69,69,78,46,105,100,93,10,37,105,10,0,0,0,0,0,0,0,79,79,79,46,46,79,79,79,46,46,79,79,79,46,46,79,79,46,46,46,36,111,79,46,46,46,46,79,79,79,46,46,79,35,36,46,46,46,36,111,46,46,36,111,79,46,46,111,79,46,46,46,79,35,36,46,46,46,46,46,0,0,0,0,91,65,67,84,73,79,78,95,84,79,71,71,76,69,95,70,85,76,76,83,67,82,69,69,78,46,100,101,118,105,99,101,93,10,37,105,10,0,0,0,37,115,58,32,101,118,101,110,116,32,105,115,32,105,110,118,97,108,105,100,0,0,0,0,91,65,67,84,73,79,78,95,79,80,84,73,79,78,83,46,109,111,100,93,10,37,105,10,0,0,0,0,0,0,0,0,91,65,67,84,73,79,78,95,79,80,84,73,79,78,83,46,105,100,93,10,37,105,10,0,91,112,111,105,110,116,101,114,95,99,111,110,116,114,111,108,115,46,115,116,97,116,101,93,0,0,0,0,0,0,0,0,91,65,67,84,73,79,78,95,79,80,84,73,79,78,83,46,100,101,118,105,99,101,93,10,37,105,10,0,0,0,0,0,91,65,67,84,73,79,78,95,72,69,76,80,46,109,111,100,93,10,37,105,10,0,0,0,91,116,120,116,95,111,102,93,0,0,0,0,0,0,0,0,91,110,97,109,101,93,0,0,91,65,67,84,73,79,78,95,72,69,76,80,46,105,100,93,10,37,105,10,0,0,0,0,37,100,46,37,100,46,61,46,37,100,10,0,0,0,0,0,91,65,67,84,73,79,78,95,72,69,76,80,46,100,101,118,105,99,101,93,10,37,105,10,0,0,0,0,0,0,0,0,45,37,105,120,37,105,0,0,91,65,67,84,73,79,78,95,69,88,73,84,46,109,111,100,93,10,37,105,10,0,0,0,91,65,67,84,73,79,78,95,69,88,73,84,46,105,100,93,10,37,105,10,0,0,0,0,109,117,115,105,99,0,0,0,91,97,98,111,117,116,93,0,91,65,67,84,73,79,78,95,69,88,73,84,46,100,101,118,105,99,101,93,10,37,105,10,0,0,0,0,0,0,0,0,79,79,79,46,46,79,79,79,46,46,79,79,79,79,79,79,46,46,46,46,35,36,111,111,111,46,46,46,46,46,46,46,46,79,35,36,46,79,35,46,46,46,35,36,111,79,35,36,46,46,46,46,46,79,35,36,46,79,35,46,0,0,0,0,91,65,67,84,73,79,78,95,83,69,76,69,67,84,46,109,111,100,93,10,37,105,10,0,91,65,67,84,73,79,78,95,83,69,76,69,67,84,46,105,100,93,10,37,105,10,0,0,37,115,58,32,104,105,116,112,111,105,110,116,32,105,115,32,105,110,118,97,108,105,100,0,91,115,99,114,101,119,93,0,76,65,78,71,0,0,0,0,91,65,67,84,73,79,78,95,83,69,76,69,67,84,46,100,101,118,105,99,101,93,10,37,105,10,0,0,0,0,0,0,116,101,120,116,0,0,0,0,91,65,67,84,73,79,78,95,83,72,79,79,84,95,82,73,71,72,84,46,109,111,100,93,10,37,105,10,0,0,0,0,91,111,112,95,101,110,118,46,115,121,115,116,101,109,112,111,105,110,116,101,114,93,0,0,91,116,120,116,95,107,111,110,115,116,114,117,107,116,111,114,95,76,101,118,101,108,95,114,101,115,105,122,101,100,95,116,111,93,0,0,0,0,0,0,91,65,67,84,73,79,78,95,83,72,79,79,84,95,82,73,71,72,84,46,105,100,93,10,37,105,10,0,0,0,0,0,91,116,120,116,95,107,111,110,115,116,114,117,107,116,111,114,95,67,104,97,110,103,101,115,95,115,97,118,101,100,93,0,91,65,67,84,73,79,78,95,83,72,79,79,84,95,82,73,71,72,84,46,100,101,118,105,99,101,93,10,37,105,10,0,91,116,120,116,95,105,110,116,114,111,95,109,101,110,117,93,0,0,0,0,0,0,0,0,32,0,0,0,0,0,0,0,91,116,120,116,95,107,111,110,115,116,114,117,107,116,111,114,95,83,97,118,101,95,115,101,108,101,99,116,95,97,103,97,105,110,95,116,111,95,115,97,118,101,95,99,104,97,110,103], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+10240);
/* memory initializer */ allocate([101,115,93,0,0,0,0,0,91,65,67,84,73,79,78,95,83,72,79,79,84,95,76,69,70,84,46,109,111,100,93,10,37,105,10,0,0,0,0,0,37,100,46,37,100,46,108,46,37,100,10,0,0,0,0,0,91,116,120,116,95,107,111,110,115,116,114,117,107,116,111,114,95,76,101,118,101,108,95,99,108,101,97,114,101,100,93,0,73,110,118,97,108,105,100,32,116,105,108,101,32,115,105,122,101,58,32,86,97,108,105,100,32,115,105,122,101,115,32,97,114,101,32,49,54,32,97,110,100,32,51,50,46,10,0,0,91,65,67,84,73,79,78,95,83,72,79,79,84,95,76,69,70,84,46,105,100,93,10,37,105,10,0,0,0,0,0,0,91,116,120,116,95,107,111,110,115,116,114,117,107,116,111,114,95,67,108,101,97,114,95,108,101,118,101,108,95,115,101,108,101,99,116,95,97,103,97,105,110,95,116,111,95,99,108,101,97,114,93,0,0,0,0,0,91,65,67,84,73,79,78,95,83,72,79,79,84,95,76,69,70,84,46,100,101,118,105,99,101,93,10,37,105,10,0,0,91,116,120,116,95,107,111,110,115,116,114,117,107,116,111,114,95,78,101,119,95,108,101,118,101,108,95,97,112,112,101,110,100,101,100,95,116,111,95,112,97,99,107,93,0,0,0,0,46,47,100,97,116,97,0,0,91,65,67,84,73,79,78,95,83,72,79,79,84,95,68,79,87,78,46,109,111,100,93,10,37,105,10,0,0,0,0,0,91,97,117,116,104,111,114,93,0,0,0,0,0,0,0,0,91,116,120,116,95,107,111,110,115,116,114,117,107,116,111,114,95,83,97,118,101,95,115,101,108,101,99,116,95,97,103,97,105,110,95,116,111,95,115,97,118,101,95,110,101,119,95,108,101,118,101,108,93,0,0,0,91,65,67,84,73,79,78,95,83,72,79,79,84,95,68,79,87,78,46,105,100,93,10,37,105,10,0,0,0,0,0,0,79,79,79,79,79,79,79,79,46,46,46,46,46,46,46,46,46,46,46,46,79,35,36,46,46,46,46,79,79,79,46,46,46,46,79,35,36,111,46,46,46,46,111,111,111,46,46,46,46,46,46,46,46,46,79,35,36,111,46,46,0,0,0,0,91,116,120,116,95,107,111,110,115,116,114,117,107,116,111,114,95,76,101,118,101,108,95,99,114,101,97,116,101,100,93,0,91,65,67,84,73,79,78,95,83,72,79,79,84,95,68,79,87,78,46,100,101,118,105,99,101,93,10,37,105,10,0,0,37,115,58,32,67,97,110,110,111,116,32,98,108,105,116,32,115,117,114,102,97,99,101,58,32,37,115,0,0,0,0,0,91,116,120,116,95,107,111,110,115,116,114,117,107,116,111,114,95,78,101,119,95,108,101,118,101,108,95,115,101,108,101,99,116,95,97,103,97,105,110,95,116,111,95,99,114,101,97,116,101,93,0,0,0,0,0,0,91,65,67,84,73,79,78,95,83,72,79,79,84,95,85,80,46,109,111,100,93,10,37,105,10,0,0,0,0,0,0,0,91,116,120,116,95,107,111,110,115,116,114,117,107,116,111,114,95,76,101,118,101,108,95,114,101,108,111,97,100,101,100,93,0,0,0,0,0,0,0,0,91,65,67,84,73,79,78,95,83,72,79,79,84,95,85,80,46,105,100,93,10,37,105,10,0,0,0,0,0,0,0,0,91,115,97,118,101,95,102,114,101,113,117,101,110,99,121,93,0,0,0,0,0,0,0,0,91,116,120,116,95,107,111,110,115,116,114,117,107,116,111,114,95,82,101,108,111,97,100,95,108,101,118,101,108,95,115,101,108,101,99,116,95,97,103,97,105,110,95,116,111,95,114,101,108,111,97,100,93,0,0,0,91,65,67,84,73,79,78,95,83,72,79,79,84,95,85,80,46,100,101,118,105,99,101,93,10,37,105,10,0,0,0,0,91,116,120,116,95,107,111,110,115,116,114,117,107,116,111,114,95,69,120,105,116,95,100,101,115,105,103,110,101,114,95,115,101,108,101,99,116,95,97,103,97,105,110,95,116,111,95,101,120,105,116,93,0,0,0,0,91,65,67,84,73,79,78,95,82,69,83,84,65,82,84,46,109,111,100,93,10,37,105,10,0,0,0,0,0,0,0,0,91,116,120,116,95,105,110,116,114,111,95,107,101,121,115,95,100,101,115,99,114,105,112,116,105,111,110,93,0,0,0,0,67,97,110,110,111,116,32,114,101,97,100,32,102,114,111,109,32,102,105,108,101,32,37,115,10,0,0,0,0,0,0,0,91,116,120,116,95,107,111,110,115,116,114,117,107,116,111,114,95,87,101,108,99,111,109,101,95,116,111,95,71,78,85,95,82,111,98,98,111,95,68,101,115,105,103,110,101,114,93,0,91,65,67,84,73,79,78,95,82,69,83,84,65,82,84,46,105,100,93,10,37,105,10,0,37,100,46,37,100,46,76,46,37,100,10,0,0,0,0,0,91,116,120,116,95,107,111,110,115,116,114,117,107,116,111,114,95,68,105,114,101,99,116,105,111,110,95,117,112,93,0,0,37,105,0,0,0,0,0,0,91,65,67,84,73,79,78,95,82,69,83,84,65,82,84,46,100,101,118,105,99,101,93,10,37,105,10,0,0,0,0,0,91,116,120,116,95,107,111,110,115,116,114,117,107,116,111,114,95,68,105,114,101,99,116,105,111,110,95,108,101,102,116,93,0,0,0,0,0,0,0,0,91,65,67,84,73,79,78,95,85,80,95,76,69,70,84,46,109,111,100,93,10,37,105,10,0,0,0,0,0,0,0,0,91,116,120,116,95,107,111,110,115,116,114,117,107,116,111,114,95,68,105,114,101,99,116,105,111,110,95,100,111,119,110,93,0,0,0,0,0,0,0,0,37,115,47,37,115,47,37,115,0,0,0,0,0,0,0,0,91,65,67,84,73,79,78,95,85,80,95,76,69,70,84,46,105,100,93,10,37,105,10,0,79,79,79,79,79,79,79,46,46,79,79,79,46,46,79,79,79,46,46,79,79,79,46,46,79,79,79,46,46,46,46,46,79,35,36,46,46,35,36,46,46,46,46,46,79,35,36,111,46,46,46,46,79,35,36,46,46,46,46,46,46,46,36,111,79,46,46,46,46,46,46,46,46,46,36,111,79,35,46,46,0,0,0,0,0,0,0,0,91,110,97,109,101,93,0,0,91,116,120,116,95,107,111,110,115,116,114,117,107,116,111,114,95,68,105,114,101,99,116,105,111,110,95,114,105,103,104,116,93,0,0,0,0,0,0,0,91,65,67,84,73,79,78,95,85,80,95,76,69,70,84,46,100,101,118,105,99,101,93,10,37,105,10,0,0,0,0,0,46,79,79,79,79,79,79,46,46,46,46,46,46,46,46,46,46,46,46,46,111,79,35,46,46,46,46,79,79,79,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,0,0,0,0,91,116,120,116,95,107,111,110,115,116,114,117,107,116,111,114,95,77,111,118,101,97,98,108,101,95,82,111,116,97,116,105,110,103,93,0,0,0,0,0,91,65,67,84,73,79,78,95,76,69,70,84,46,109,111,100,93,10,37,105,10,0,0,0,37,115,58,32,67,97,110,110,111,116,32,115,101,116,32,115,117,114,102,97,99,101,32,97,108,112,104,97,58,32,37,115,0,0,0,0,0,0,0,0,91,116,120,116,95,107,111,110,115,116,114,117,107,116,111,114,95,82,111,116,97,116,105,110,103,93,0,0,0,0,0,0,69,120,105,116,32,100,101,115,105,103,110,101,114,32,45,32,115,101,108,101,99,116,32,97,103,97,105,110,32,116,111,32,101,120,105,116,0,0,0,0,91,65,67,84,73,79,78,95,76,69,70,84,46,105,100,93,10,37,105,10,0,0,0,0,91,116,120,116,95,107,111,110,115,116,114,117,107,116,111,114,95,77,111,118,101,97,98,108,101,93,0,0,0,0,0,0,91,65,67,84,73,79,78,95,76,69,70,84,46,100,101,118,105,99,101,93,10,37,105,10,0,0,0,0,0,0,0,0,91,115,101,108,101,99,116,101,100,95,108,111,99,97,108,101,93,0,0,0,0,0,0,0,91,116,120,116,95,107,111,110,115,116,114,117,107,116,111,114,95,70,105,120,101,100,93,0,91,65,67,84,73,79,78,95,68,79,87,78,95,76,69,70,84,46,109,111,100,93,10,37,105,10,0,0,0,0,0,0,46,47,100,97,116,97,47,114,111,98,47,0,0,0,0,0,91,116,120,116,95,107,111,110,115,116,114,117,107,116,111,114,95,82,101,103,117,108,97,114,95,71,117,110,93,0,0,0,91,65,67,84,73,79,78,95,68,79,87,78,95,76,69,70,84,46,105,100,93,10,37,105,10,0,0,0,0,0,0,0,91,116,120,116,95,105,110,116,114,111,95,107,101,121,115,95,80,76,65,84,70,79,82,77,95,80,67,93,0,0,0,0,46,47,100,97,116,97,47,108,101,118,101,108,115,47,111,114,105,103,105,110,97,108,46,100,97,116,0,0,0,0,0,0,91,116,120,116,95,107,111,110,115,116,114,117,107,116,111,114,95,66,108,97,115,116,101,114,95,71,117,110,93,0,0,0,91,65,67,84,73,79,78,95,68,79,87,78,95,76,69,70,84,46,100,101,118,105,99,101,93,10,37,105,10,0,0,0,91,97,100,100,105,116,105,111,110,97,108,93,10,37,100,10,0,0,0,0,0,0,0,0,91,116,120,116,95,107,111,110,115,116,114,117,107,116,111,114,95,76,97,115,101,114,95,71,117,110,93,0,0,0,0,0,114,98,0,0,0,0,0,0,45,116,115,0,0,0,0,0,91,65,67,84,73,79,78,95,68,79,87,78,46,109,111,100,93,10,37,105,10,0,0,0,91,116,120,116,95,107,111,110,115,116,114,117,107,116,111,114,95,111,110,95,109,97,112,93,0,0,0,0,0,0,0,0,74,111,121,80,117,115,104,0,91,65,67,84,73,79,78,95,68,79,87,78,46,105,100,93,10,37,105,10,0,0,0,0,91,116,120,116,95,107,111,110,115,116,114,117,107,116,111,114,95,66,117,108,108,101,116,115,93,0,0,0,0,0,0,0,86,111,108,68,110,0,0,0,118,111,108,117,109,101,0,0,91,65,67,84,73,79,78,95,68,79,87,78,46,100,101,118,105,99,101,93,10,37,105,10,0,0,0,0,0,0,0,0,91,116,120,116,95,107,111,110,115,116,114,117,107,116,111,114,95,75,101,121,93,0,0,0,67,97,110,110,111,116,32,114,101,97,100,32,102,114,111,109,32,102,105,108,101,32,37,115,10,0,0,0,0,0,0,0,86,111,108,85,112,0,0,0,91,65,67,84,73,79,78,95,68,79,87,78,95,82,73,71,72,84,46,109,111,100,93,10,37,105,10,0,0,0,0,0,91,116,120,116,95,107,111,110,115,116,114,117,107,116,111,114,95,66,105,114,100,93,0,0,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,46,79,79,79,46,46,46,46,46,0,0,0,0,0,0,0,83,101,108,101,99,116,0,0,91,65,67,84,73,79,78,95,68,79,87,78,95,82,73,71,72,84,46,105,100,93,10,37,105,10,0,0,0,0,0,0,37,115,58,32,67,97,110,110,111,116,32,102,105,108,108,32,115,117,114,102,97,99,101,58,32,37,115,0,0,0,0,0,91,116,120,116,95,107,111,110,115,116,114,117,107,116,111,114,95,66,108,97,99,107,95,66,101,97,114,93,0,0,0,0,83,116,97,114,116,0,0,0,91,65,67,84,73,79,78,95,68,79,87,78,95,82,73,71,72,84,46,100,101,118,105,99,101,93,10,37,105,10,0,0,91,116,120,116,95,107,111,110,115,116,114,117,107,116,111,114,95,66,101,97,114,93,0,0,85,112,82,105,103,104,116,0,91,65,67,84,73,79,78,95,82,73,71,72,84,46,109,111,100,93,10,37,105,10,0,0,91,115,101,108,101,99,116,101,100,95,115,107,105,110,93,0,91,116,120,116,95,107,111,110,115,116,114,117,107,116,111,114,95,77,97,103,110,101,116,93,0,0,0,0,0,0,0,0,68,111,119,110,82,105,103,104,116,0,0,0,0,0,0,0,91,65,67,84,73,79,78,95,82,73,71,72,84,46,105,100,93,10,37,105,10,0,0,0,91,116,120,116,95,107,111,110,115,116,114,117,107,116,111,114,95,71,117,110,93,0,0,0,68,111,119,110,76,101,102,116,0,0,0,0,0,0,0,0,91,65,67,84,73,79,78,95,82,73,71,72,84,46,100,101,118,105,99,101,93,10,37,105,10,0,0,0,0,0,0,0,91,116,120,116,95,105,110,116,114,111,95,115,116,111,114,121,93,0,0,0,0,0,0,0,91,116,120,116,95,107,111,110,115,116,114,117,107,116,111,114,95,84,101,108,101,112,111,114,116,93,0,0,0,0,0,0,67,97,110,110,111,116,32,102,105,110,100,32,116,104,101,32,100,101,102,97,117,108,116,32,108,101,118,101,108,32,102,105,108,101,58,32,37,115,10,0,85,112,76,101,102,116,0,0,91,65,67,84,73,79,78,95,85,80,95,82,73,71,72,84,46,109,111,100,93,10,37,105,10,0,0,0,0,0,0,0,91,100,97,116,97,93,10,0,91,116,120,116,95,107,111,110,115,116,114,117,107,116,111,114,95,66,108,97,99,107,95,87,97,108,108,93,0,0,0,0,71,80,50,88,95,74,79,89,83,84,73,67,75,0,0,0,45,118,112,120,0,0,0,0,91,65,67,84,73,79,78,95,85,80,95,82,73,71,72,84,46,105,100,93,10,37,105,10,0,0,0,0,0,0,0,0,91,116,120,116,95,107,111,110,115,116,114,117,107,116,111,114,95,87,97,108,108,93,0,0,80,69,80,32,74,111,121,0,91,65,67,84,73,79,78,95,85,80,95,82,73,71,72,84,46,100,101,118,105,99,101,93,10,37,105,10,0,0,0,0,91,116,120,116,95,107,111,110,115,116,114,117,107,116,111,114,95,83,99,114,101,119,93,0,49,50,0,0,0,0,0,0,37,115,58,32,37,105,0,0,91,65,67,84,73,79,78,95,85,80,46,109,111,100,93,10,37,105,10,0,0,0,0,0,91,116,120,116,95,107,111,110,115,116,114,117,107,116,111,114,95,70,111,114,99,101,95,70,105,101,108,100,93,0,0,0,32,0,0,0,0,0,0,0,49,49,0,0,0,0,0,0,91,65,67,84,73,79,78,95,85,80,46,105,100,93,10,37,105,10,0,0,0,0,0,0,91,116,120,116,95,107,111,110,115,116,114,117,107,116,111,114,95,71,117,110,95,70,105,114,101,93,0,0,0,0,0,0,79,79,79,46,46,79,79,79,46,46,46,35,36,111,79,35,36,46,46,46,79,35,36,46,46,79,79,79,79,79,79,46,46,0,0,0,0,0,0,0,49,48,0,0,0,0,0,0,91,65,67,84,73,79,78,95,85,80,46,100,101,118,105,99,101,93,10,37,105,10,0,0,37,115,58,32,84,104,101,114,101,32,105,115,32,110,111,32,111,98,106,101,99,116,32,116,111,32,102,114,101,101,0,0,91,116,120,116,95,107,111,110,115,116,114,117,107,116,111,114,95,66,117,116,116,101,114,102,108,121,93,0,0,0,0,0,77,77,56,48,57,32,67,111,109,109,97,110,100,101,114,32,80,97,100,0,0,0,0,0,91,115,101,108,101,99,116,101,100,93,10,37,105,10,0,0,91,116,120,116,95,107,111,110,115,116,114,117,107,116,111,114,95,69,109,112,116,121,95,70,105,101,108,100,93,0,0,0,68,111,119,110,0,0,0,0,91,108,101,118,101,108,95,115,101,108,101,99,116,101,100,93,10,37,105,10,0,0,0,0,91,107,101,121,95,114,101,112,101,97,116,95,105,110,116,101,114,118,97,108,93,0,0,0,91,116,120,116,95,107,111,110,115,116,114,117,107,116,111,114,95,66,111,120,93,0,0,0,85,112,0,0,0,0,0,0,91,108,101,118,101,108,95,114,101,97,99,104,101,100,93,10,37,105,10,0,0,0,0,0,91,116,120,116,95,107,111,110,115,116,114,117,107,116,111,114,95,68,111,111,114,93,0,0,82,101,97,100,105,110,103,32,102,114,111,109,32,37,115,10,0,0,0,0,0,0,0,0,82,105,103,104,116,0,0,0,91,102,105,108,101,110,97,109,101,93,10,37,115,10,0,0,76,111,99,97,108,101,32,102,111,117,110,100,58,32,37,115,10,0,0,0,0,0,0,0,91,116,120,116,95,107,111,110,115,116,114,117,107,116,111,114,95,66,111,109,98,50,93,0,67,111,117,108,100,110,39,116,32,111,112,101,110,32,108,101,118,101,108,115,32,102,111,108,100,101,114,58,32,37,115,10,0,0,0,0,0,0,0,0,76,101,102,116,0,0,0,0,91,115,101,110,115,105,98,108,101,95,115,111,108,105,100,95,108,97,115,101,114,115,93,10,37,105,10,0,0,0,0,0,37,115,0,0,0,0,0,0,91,116,120,116,95,107,111,110,115,116,114,117,107,116,111,114,95,66,111,109,98,93,0,0,83,104,105,102,116,0,0,0,45,102,0,0,0,0,0,0,91,115,101,110,115,105,98,108,101,95,113,117,101,115,116,105,111,110,109,97,114,107,115,93,10,37,105,10,0,0,0,0,91,116,120,116,95,107,111,110,115,116,114,117,107,116,111,114,95,67,97,112,115,117,108,101,93,0,0,0,0,0,0,0,82,84,114,105,103,0,0,0,91,115,101,110,115,105,98,108,101,95,98,101,97,114,115,93,10,37,105,10,0,0,0,0,91,116,120,116,95,107,111,110,115,116,114,117,107,116,111,114,95,80,117,115,104,95,66,111,120,93,0,0,0,0,0,0,76,84,114,105,103,0,0,0,91,101,120,105,116,45,111,112,101,110,93,0,0,0,0,0,91,112,111,105,110,116,101,114,95,99,111,110,116,114,111,108,115,46,112,97,100,95,116,121,112,101,93,10,37,105,10,0,91,116,120,116,95,107,111,110,115,116,114,117,107,116,111,114,95,82,97,100,105,111,97,99,116,105,118,101,95,70,105,101,108,100,93,0,0,0,0,0,46,47,100,97,116,97,47,115,107,105,110,115,47,116,114,111,110,105,99,0,0,0,0,0,77,105,99,114,111,115,111,102,116,32,83,105,100,101,87,105,110,100,101,114,32,71,97,109,101,32,80,97,100,32,80,114,111,32,85,83,66,32,118,101,114,115,105,111,110,32,49,46,48,0,0,0,0,0,0,0,91,112,111,105,110,116,101,114,95,99,111,110,116,114,111,108,115,46,115,116,97,116,101,93,10,37,105,10,0,0,0,0,91,116,120,116,95,107,111,110,115,116,114,117,107,116,111,114,95,83,116,111,112,93,0,0,79,79,79,46,46,79,79,79,46,46,111,79,35,46,46,46,35,36,46,46,111,79,35,46,46,79,79,79,46,46,79,79,46,0,0,0,0,0,0,0,70,49,53,0,0,0,0,0,91,111,112,95,101,110,118,46,115,121,115,116,101,109,112,111,105,110,116,101,114,93,10,37,105,10,0,0,0,0,0,0,37,115,58,32,97,110,99,101,115,116,111,114,32,105,115,32,105,110,118,97,108,105,100,0,91,116,120,116,95,107,111,110,115,116,114,117,107,116,111,114,95,71,114,111,117,110,100,93,0,0,0,0,0,0,0,0,70,49,52,0,0,0,0,0,91,115,97,118,101,95,102,114,101,113,117,101,110,99,121,93,10,37,105,10,0,0,0,0,91,116,120,116,95,107,101,121,95,85,110,100,111,93,0,0,70,49,51,0,0,0,0,0,91,115,101,108,101,99,116,101,100,95,108,111,99,97,108,101,93,10,37,115,10,0,0,0,91,107,101,121,95,114,101,112,101,97,116,95,100,101,108,97,121,93,0,0,0,0,0,0,91,116,120,116,95,107,101,121,95,69,117,114,111,93,0,0,70,49,50,0,0,0,0,0,91,115,101,108,101,99,116,101,100,95,115,107,105,110,93,10,37,115,10,0,0,0,0,0,91,116,120,116,95,107,101,121,95,80,111,119,101,114,93,0,70,49,49,0,0,0,0,0,91,107,101,121,95,114,101,112,101,97,116,95,105,110,116,101,114,118,97,108,93,10,37,105,10,0,0,0,0,0,0,0,91,97,117,116,104,111,114,93,0,0,0,0,0,0,0,0,91,116,120,116,95,107,101,121,95,77,101,110,117,93,0,0,47,0,0,0,0,0,0,0,70,49,48,0,0,0,0,0,91,107,101,121,95,114,101,112,101,97,116,95,100,101,108,97,121,93,10,37,105,10,0,0,91,108,101,118,101,108,95,110,111,116,101,115,93,10,0,0,91,116,120,116,95,107,101,121,95,66,114,101,97,107,93,0,70,57,0,0,0,0,0,0,104,116,116,112,58,47,47,115,111,117,114,99,101,102,111,114,103,101,46,110,101,116,47,112,114,111,106,101,99,116,115,47,103,110,117,114,111,98,98,111,10,0,0,0,0,0,0,0,91,106,111,121,115,116,105,99,107,95,100,101,97,100,95,122,111,110,101,93,10,37,105,10,0,0,0,0,0,0,0,0,91,116,120,116,95,107,101,121,95,83,121,115,82,113,93,0,70,56,0,0,0,0,0,0,91,100,101,102,97,117,108,116,95,106,111,121,115,116,105,99,107,95,110,97,109,101,93,10,37,115,10,0,0,0,0,0,91,116,120,116,95,107,101,121,95,80,114,83,99,114,93,0,70,55,0,0,0,0,0,0,91,109,97,103,110,101,116,93,0,0,0,0,0,0,0,0,91,100,101,102,97,117,108,116,95,106,111,121,115,116,105,99,107,93,10,37,105,10,0,0,91,116,120,116,95,107,101,121,95,72,101,108,112,93,0,0,70,54,0,0,0,0,0,0,67,97,110,110,111,116,32,102,105,110,100,32,116,104,101,32,100,101,102,97,117,108,116,32,115,107,105,110,58,32,37,115,10,0,0,0,0,0,0,0,91,103,97,109,101,95,99,121,99,108,101,95,100,101,108,97,121,93,10,37,105,10,0,0,91,116,120,116,95,107,101,121,95,67,111,109,112,111,115,101,93,0,0,0,0,0,0,0,79,79,79,46,46,79,79,79,46,46,36,111,79,46,46,46,46,46,46,46,36,111,79,46,46,79,79,79,46,46,46,79,79,0,0,0,0,0,0,0,70,53,0,0,0,0,0,0,91,103,97,109,101,95,99,121,99,108,101,95,108,105,109,105,116,93,10,37,105,10,0,0,91,116,120,116,95,107,101,121,95,65,108,116,71,114,93,0,70,52,0,0,0,0,0,0,91,118,111,108,117,109,101,93,10,37,100,10,0,0,0,0,91,116,120,116,95,107,101,121,95,82,83,117,112,101,114,93,0,0,0,0,0,0,0,0,70,51,0,0,0,0,0,0,91,115,102,120,95,118,111,108,93,10,37,100,10,0,0,0,91,106,111,121,115,116,105,99,107,95,100,101,97,100,95,122,111,110,101,93,0,0,0,0,91,116,120,116,95,107,101,121,95,76,83,117,112,101,114,93,0,0,0,0,0,0,0,0,67,111,117,108,100,110,39,116,32,111,112,101,110,32,108,111,99,97,108,101,115,32,102,111,108,100,101,114,58,32,37,115,10,0,0,0,0,0,0,0,70,50,0,0,0,0,0,0,91,115,111,117,110,100,93,10,37,100,10,0,0,0,0,0,91,116,120,116,95,107,101,121,95,76,77,101,116,97,93,0,70,49,0,0,0,0,0,0,48,46,54,54,0,0,0,0,91,110,97,109,101,93,0,0,91,116,120,116,95,107,101,121,95,82,77,101,116,97,93,0,37,115,61,0,0,0,0,0,111,114,105,103,105,110,97,108,46,100,97,116,0,0,0,0,91,118,101,114,115,105,111,110,93,10,37,115,10,0,0,0,37,115,10,0,0,0,0,0,91,116,120,116,95,107,101,121,95,76,65,108,116,93,0,0,37,115,69,110,116,101,114,0,10,82,101,112,111,114,116,32,98,117,103,115,32,116,111,32,58,45,10,0,0,0,0,0,87,114,105,116,105,110,103,32,116,111,32,37,115,10,0,0,91,116,120,116,95,107,101,121,95,82,65,108,116,93,0,0,37,115,43,0,0,0,0,0,67,97,110,110,111,116,32,119,114,105,116,101,32,116,111,32,102,105,108,101,58,32,37,115,10,0,0,0,0,0,0,0,91,116,120,116,95,107,101,121,95,76,67,116,114,108,93,0,37,115,45,0,0,0,0,0,91,107,105,108,108,93,0,0,119,0,0,0,0,0,0,0,91,116,120,116,95,107,101,121,95,82,67,116,114,108,93,0,37,115,42,0,0,0,0,0,116,114,111,110,105,99,0,0,47,46,103,110,117,114,111,98,98,111,47,108,101,118,101,108,115,47,109,121,108,101,118,101,108,115,46,100,97,116,0,0,68,101,108,101,116,105,110,103,32,116,104,101,32,102,105,108,101,32,119,105,108,108,32,114,101,115,101,116,32,97,108,108,32,108,101,118,101,108,115,32,114,101,97,99,104,101,100,32,102,111,114,32,97,108,108,32,112,97,99,107,115,32,112,108,97,121,101,100,33,10,0,0,91,116,120,116,95,107,101,121,95,76,83,104,105,102,116,93,0,0,0,0,0,0,0,0,79,79,79,79,79,79,79,79,46,46,35,36,111,79,79,79,111,79,46,46,111,79,35,46,46,79,79,79,46,46,46,79,79,0,0,0,0,0,0,0,37,115,47,0,0,0,0,0,80,108,101,97,115,101,32,102,105,120,32,105,116,32,111,114,32,100,101,108,101,116,101,32,116,104,101,32,102,105,108,101,32,116,111,32,104,97,118,101,32,103,110,117,114,111,98,98,111,32,99,114,101,97,116,101,32,97,32,110,101,119,32,111,110,101,46,32,0,0,0,0,91,116,120,116,95,107,101,121,95,82,83,104,105,102,116,93,0,0,0,0,0,0,0,0,37,115,46,0,0,0,0,0,84,104,101,114,101,32,105,115,32,97,32,109,105,115,115,105,110,103,32,37,115,32,115,101,116,116,105,110,103,32,105,110,32,37,115,46,32,0,0,0,91,116,120,116,95,107,101,121,95,83,99,114,108,76,107,93,0,0,0,0,0,0,0,0,37,115,57,0,0,0,0,0,91,65,67,84,73,79,78,95,80,82,73,77,65,82,89,95,67,76,73,67,75,46,109,111,100,93,0,0,0,0,0,0,91,100,101,102,97,117,108,116,95,106,111,121,115,116,105,99,107,95,110,97,109,101,93,0,91,116,120,116,95,107,101,121,95,67,97,112,115,76,107,93,0,0,0,0,0,0,0,0,37,115,56,0,0,0,0,0,91,65,67,84,73,79,78,95,80,82,73,77,65,82,89,95,67,76,73,67,75,46,105,100,93,0,0,0,0,0,0,0,91,116,120,116,95,107,101,121,95,78,117,109,76,107,93,0,37,115,55,0,0,0,0,0,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,0,0,0,0,91,65,67,84,73,79,78,95,80,82,73,77,65,82,89,95,67,76,73,67,75,46,100,101,118,105,99,101,93,0,0,0,67,97,110,110,111,116,32,114,101,97,100,32,102,114,111,109,32,102,105,108,101,32,37,115,10,0,0,0,0,0,0,0,91,116,120,116,95,107,101,121,95,80,103,68,110,93,0,0,37,115,54,0,0,0,0,0,46,100,97,116,0,0,0,0,91,65,67,84,73,79,78,95,83,67,82,79,76,76,95,68,79,87,78,46,109,111,100,93,0,0,0,0,0,0,0,0,91,97,117,116,104,111,114,93,10,0,0,0,0,0,0,0,91,116,120,116,95,107,101,121,95,80,103,85,112,93,0,0,37,115,53,0,0,0,0,0,32,32,45,102,32,32,32,32,32,32,32,32,32,32,82,117,110,32,116,104,101,32,103,97,109,101,32,102,117,108,108,115,99,114,101,101,110,10,0,0,91,65,67,84,73,79,78,95,83,67,82,79,76,76,95,68,79,87,78,46,105,100,93,0,91,116,120,116,95,107,101,121,95,69,110,100,93,0,0,0,37,115,52,0,0,0,0,0,91,65,67,84,73,79,78,95,83,67,82,79,76,76,95,68,79,87,78,46,100,101,118,105,99,101,93,0,0,0,0,0,91,116,120,116,95,107,101,121,95,72,111,109,101,93,0,0,37,115,51,0,0,0,0,0,91,99,97,112,115,117,108,101,93,0,0,0,0,0,0,0,91,65,67,84,73,79,78,95,83,67,82,79,76,76,95,85,80,46,109,111,100,93,0,0,91,116,120,116,95,107,101,121,95,73,110,115,101,114,116,93,0,0,0,0,0,0,0,0,37,115,50,0,0,0,0,0,114,0,0,0,0,0,0,0,91,65,67,84,73,79,78,95,83,67,82,79,76,76,95,85,80,46,105,100,93,0,0,0,91,116,120,116,95,107,101,121,95,76,101,102,116,93,0,0,79,79,79,46,46,79,79,79,46,46,79,35,36,46,46,46,36,111,46,46,36,111,79,46,46,79,79,79,46,46,79,79,46,0,0,0,0,0,0,0,37,115,49,0,0,0,0,0,32,32,0,0,0,0,0,0,91,65,67,84,73,79,78,95,83,67,82,79,76,76,95,85,80,46,100,101,118,105,99,101,93,0,0,0,0,0,0,0,37,115,58,32,73,110,118,97,108,105,100,32,100,117,112,108,105,99,97,116,101,32,105,100,32,112,114,111,112,101,114,116,121,0,0,0,0,0,0,0,91,116,120,116,95,107,101,121,95,82,105,103,104,116,93,0,67,97,110,110,111,116,32,108,111,97,100,32,98,105,116,109,97,112,58,32,37,115,10,0,37,115,48,0,0,0,0,0,91,65,67,84,73,79,78,95,77,79,68,73,70,73,69,82,52,46,109,111,100,93,0,0,91,116,120,116,95,107,101,121,95,68,111,119,110,93,0,0,90,0,0,0,0,0,0,0,91,65,67,84,73,79,78,95,77,79,68,73,70,73,69,82,52,46,105,100,93,0,0,0,91,100,101,102,97,117,108,116,95,106,111,121,115,116,105,99,107,93,0,0,0,0,0,0,91,116,120,116,95,107,101,121,95,85,112,93,0,0,0,0,89,0,0,0,0,0,0,0,91,65,67,84,73,79,78,95,77,79,68,73,70,73,69,82,52,46,100,101,118,105,99,101,93,0,0,0,0,0,0,0,91,116,120,116,95,107,101,121,95,75,80,93,0,0,0,0,88,0,0,0,0,0,0,0,91,65,67,84,73,79,78,95,77,79,68,73,70,73,69,82,51,46,109,111,100,93,0,0,32,0,0,0,0,0,0,0,91,116,120,116,95,107,101,121,95,68,101,108,101,116,101,93,0,0,0,0,0,0,0,0,87,0,0,0,0,0,0,0,47,46,103,110,117,114,111,98,98,111,47,108,101,118,101,108,115,0,0,0,0,0,0,0,91,65,67,84,73,79,78,95,77,79,68,73,70,73,69,82,51,46,105,100,93,0,0,0,91,115,105,122,101,93,10,37,100,46,37,100,10,0,0,0,91,116,120,116,95,107,101,121,95,83,112,97,99,101,93,0,86,0,0,0,0,0,0,0,32,32,45,118,112,120,32,32,32,32,32,32,32,32,77,97,120,105,109,105,115,101,32,116,104,101,32,118,105,101,119,112,111,114,116,10,0,0,0,0,91,65,67,84,73,79,78,95,77,79,68,73,70,73,69,82,51,46,100,101,118,105,99,101,93,0,0,0,0,0,0,0,91,116,120,116,95,107,101,121,95,69,115,99,97,112,101,93,0,0,0,0,0,0,0,0,85,0,0,0,0,0,0,0,91,65,67,84,73,79,78,95,77,79,68,73,70,73,69,82,50,46,109,111,100,93,0,0,91,116,120,116,95,107,101,121,95,80,97,117,115,101,93,0,84,0,0,0,0,0,0,0,91,119,97,108,107,93,0,0,91,65,67,84,73,79,78,95,77,79,68,73,70,73,69,82,50,46,105,100,93,0,0,0,91,116,120,116,95,107,101,121,95,82,101,116,117,114,110,93,0,0,0,0,0,0,0,0,83,0,0,0,0,0,0,0,115,107,105,110,114,99,0,0,91,65,67,84,73,79,78,95,77,79,68,73,70,73,69,82,50,46,100,101,118,105,99,101,93,0,0,0,0,0,0,0,91,116,120,116,95,107,101,121,95,67,108,101,97,114,93,0,79,79,79,46,46,79,79,79,46,46,46,79,35,36,46,79,35,46,46,46,35,36,111,46,46,79,79,79,79,79,79,46,46,0,0,0,0,0,0,0,82,0,0,0,0,0,0,0,91,65,67,84,73,79,78,95,77,79,68,73,70,73,69,82,49,46,109,111,100,93,0,0,37,115,58,32,84,111,111,32,109,97,110,121,32,111,98,106,101,99,116,115,32,40,109,97,120,32,37,105,41,0,0,0,91,116,120,116,95,107,101,121,95,84,97,98,93,0,0,0,81,0,0,0,0,0,0,0,91,65,67,84,73,79,78,95,77,79,68,73,70,73,69,82,49,46,105,100,93,0,0,0,91,116,120,116,95,107,101,121,95,66,97,99,107,115,112,97,99,101,93,0,0,0,0,0,80,0,0,0,0,0,0,0,91,65,67,84,73,79,78,95,77,79,68,73,70,73,69,82,49,46,100,101,118,105,99,101,93,0,0,0,0,0,0,0,91,103,97,109,101,95,99,121,99,108,101,95,100,101,108,97,121,93,0,0,0,0,0,0,91,116,120,116,95,112,116,114,95,87,104,101,101,108,68,111,119,110,93,0,0,0,0,0,79,0,0,0,0,0,0,0,91,65,67,84,73,79,78,95,86,79,76,68,79,87,78,46,109,111,100,93,0,0,0,0,91,116,120,116,95,112,116,114,95,87,104,101,101,108,85,112,93,0,0,0,0,0,0,0,78,0,0,0,0,0,0,0,91,65,67,84,73,79,78,95,86,79,76,68,79,87,78,46,105,100,93,0,0,0,0,0,46,47,100,97,116,97,47,108,111,99,97,108,101,115,47,101,110,95,71,66,0,0,0,0,91,116,120,116,95,112,116,114,95,66,116,110,82,105,103,104,116,93,0,0,0,0,0,0,77,0,0,0,0,0,0,0,46,47,100,97,116,97,47,108,101,118,101,108,115,0,0,0,91,65,67,84,73,79,78,95,86,79,76,68,79,87,78,46,100,101,118,105,99,101,93,0,37,48,54,120,10,0,0,0,91,116,120,116,95,112,116,114,95,66,116,110,77,105,100,100,108,101,93,0,0,0,0,0,76,0,0,0,0,0,0,0,32,32,45,116,115,32,110,32,32,32,32,32,32,32,84,105,108,101,32,115,105,122,101,32,49,54,32,111,114,32,51,50,10,0,0,0,0,0,0,0,91,65,67,84,73,79,78,95,86,79,76,85,80,46,109,111,100,93,0,0,0,0,0,0,91,116,120,116,95,112,116,114,95,66,116,110,76,101,102,116,93,0,0,0,0,0,0,0,75,0,0,0,0,0,0,0,91,65,67,84,73,79,78,95,86,79,76,85,80,46,105,100,93,0,0,0,0,0,0,0,91,116,120,116,95,78,111,95,105,110,112,117,116,95,119,97,115,95,100,101,116,101,99,116,101,100,93,0,0,0,0,0,74,0,0,0,0,0,0,0,115,104,111,119,95,111,112,116,105,111,110,115,115,99,114,101,101,110,0,0,0,0,0,0,115,104,111,119,95,105,110,116,114,111,115,99,114,101,101,110,0,0,0,0,0,0,0,0,115,104,111,119,95,104,101,108,112,115,99,114,101,101,110,0,115,104,111,119,95,103,97,109,101,95,97,114,101,97,0,0,114,101,103,105,115,116,101,114,95,104,111,116,115,112,111,116,0,0,0,0,0,0,0,0,99,114,101,97,116,101,95,112,111,105,110,116,101,114,95,99,111,110,116,114,111,108,115,0,99,108,101,97,110,95,117,112,95,98,101,102,111,114,101,95,101,120,105,116,0,0,0,0,82,79,66,95,83,101,116,79,98,106,101,99,116,90,79,114,100,101,114,0,0,0,0,0,82,79,66,95,83,101,116,79,98,106,101,99,116,68,101,102,97,117,108,116,115,0,0,0,82,79,66,95,83,101,110,100,69,118,101,110,116,0,0,0,82,79,66,95,82,101,110,100,101,114,79,98,106,101,99,116,115,0,0,0,0,0,0,0,82,79,66,95,73,110,105,116,0,0,0,0,0,0,0,0,82,79,66,95,71,101,116,86,105,115,105,98,105,108,105,116,121,0,0,0,0,0,0,0,82,79,66,95,71,101,116,79,98,106,101,99,116,85,110,100,101,114,79,98,106,101,99,116,0,0,0,0,0,0,0,0,82,79,66,95,71,101,116,69,110,97,98,105,108,105,116,121,0,0,0,0,0,0,0,0,82,79,66,95,71,101,116,67,97,110,118,97,115,79,102,102,115,101,116,0,0,0,0,0,82,79,66,95,71,101,116,65,108,112,104,97,0,0,0,0,82,79,66,95,70,114,101,101,79,98,106,101,99,116,0,0,82,79,66,95,70,114,101,101,65,108,108,68,101,115,99,101,110,100,97,110,116,79,98,106,101,99,116,115,0,0,0,0,82,79,66,95,70,105,110,100,65,110,99,101,115,116,111,114,0,0,0,0,0,0,0,0,82,79,66,95,70,105,108,108,82,101,99,116,65,0,0,0,82,79,66,95,67,114,101,97,116,101,79,98,106,101,99,116,0,0,0,0,0,0,0,0,12,0,0,0,8,0,0,0,1,0,0,0,0,0,0,0,255,255,255,255,3,0,0,0,6,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,54,0,0,0,0,0,0,0,2,0,0,0,1,0,0,0,1,0,0,0,54,0,0,0,2,0,0,0,1,0,0,0,7,0,0,0,1,0,0,0,54,0,0,0,1,0,0,0,2,0,0,0,7,0,0,0,1,0,0,0,54,0,0,0,3,0,0,0,6,0,0,0,5,0,0,0,1,0,0,0,50,0,0,0,0,0,0,0,8,0,0,0,5,0,0,0,1,0,0,0,50,0,0,0,2,0,0,0,7,0,0,0,5,0,0,0,1,0,0,0,50,0,0,0,1,0,0,0,9,0,0,0,5,0,0,0,1,0,0,0,50,0,0,0,3,0,0,0,2,0,0,0,2,0,0,0,1,0,0,0,11,0,0,0,255,255,255,255,7,0,0,0,3,0,0,0,1,0,0,0,26,0,0,0,255,255,255,255,9,0,0,0,3,0,0,0,1,0,0,0,28,0,0,0,255,255,255,255,4,0,0,0,2,0,0,0,1,0,0,0,13,0,0,0,255,255,255,255,1,0,0,0,2,0,0,0,1,0,0,0,10,0,0,0,255,255,255,255,5,0,0,0,1,0,0,0,1,0,0,0,4,0,0,0,255,255,255,255,6,0,0,0,1,0,0,0,1,0,0,0,5,0,0,0,255,255,255,255,7,0,0,0,1,0,0,0,1,0,0,0,6,0,0,0,255,255,255,255,8,0,0,0,1,0,0,0,1,0,0,0,7,0,0,0,255,255,255,255,9,0,0,0,1,0,0,0,1,0,0,0,8,0,0,0,255,255,255,255,10,0,0,0,1,0,0,0,1,0,0,0,9,0,0,0,255,255,255,255,6,0,0,0,2,0,0,0,1,0,0,0,15,0,0,0,255,255,255,255,7,0,0,0,7,0,0,0,1,0,0,0,60,0,0,0,255,255,255,255,3,0,0,0,7,0,0,0,1,0,0,0,68,0,0,0,255,255,255,255,5,0,0,0,7,0,0,0,1,0,0,0,69,0,0,0,255,255,255,255,10,0,0,0,4,0,0,0,1,0,0,0,61,0,0,0,255,255,255,255,1,0,0,0,5,0,0,0,1,0,0,0,40,0,0,0,255,255,255,255,6,0,0,0,7,0,0,0,1,0,0,0,24,0,0,0,255,255,255,255,3,0,0,0,1,0,0,0,1,0,0,0,2,0,0,0,255,255,255,255,1,0,0,0,4,0,0,0,1,0,0,0,131,0,0,0,255,255,255,255,0,0,0,0,0,0,0,0,2,0,0,0,117,0,0,0,255,255,255,255,0,0,0,0,0,0,0,0,2,0,0,0,119,0,0,0,255,255,255,255,0,0,0,0,0,0,0,0,2,0,0,0,118,0,0,0,255,255,255,255,6,0,0,0,2,0,0,0,2,0,0,0,120,0,0,0,255,255,255,255,6,0,0,0,4,0,0,0,2,0,0,0,122,0,0,0,255,255,255,255,6,0,0,0,3,0,0,0,2,0,0,0,121,0,0,0,255,255,255,255,8,0,0,0,7,0,0,0,2,0,0,0,127,0,0,0,255,255,255,255,6,0,0,0,5,0,0,0,2,0,0,0,123,0,0,0,255,255,255,255,8,0,0,0,5,0,0,0,3,0,0,0,130,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,3,0,0,0,255,255,255,255,0,0,0,0,8,0,0,0,3,0,0,0,3,0,0,0,125,0,0,0,0,0,0,0,8,0,0,0,1,0,0,0,3,0,0,0,124,0,0,0,0,0,0,0,8,0,0,0,2,0,0,0,3,0,0,0,124,0,0,0,2,0,0,0,8,0,0,0,4,0,0,0,3,0,0,0,125,0,0,0,2,0,0,0,9,0,0,0,4,0,0,0,3,0,0,0,125,0,0,0,1,0,0,0,9,0,0,0,2,0,0,0,3,0,0,0,124,0,0,0,1,0,0,0,9,0,0,0,1,0,0,0,3,0,0,0,124,0,0,0,3,0,0,0,9,0,0,0,3,0,0,0,3,0,0,0,125,0,0,0,3,0,0,0,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+20480);



var tempDoublePtr = Runtime.alignMemory(allocate(12, "i8", ALLOC_STATIC), 8);

assert(tempDoublePtr % 8 == 0);

function copyTempFloat(ptr) { // functions, because inlining this code increases code size too much

  HEAP8[tempDoublePtr] = HEAP8[ptr];

  HEAP8[tempDoublePtr+1] = HEAP8[ptr+1];

  HEAP8[tempDoublePtr+2] = HEAP8[ptr+2];

  HEAP8[tempDoublePtr+3] = HEAP8[ptr+3];

}

function copyTempDouble(ptr) {

  HEAP8[tempDoublePtr] = HEAP8[ptr];

  HEAP8[tempDoublePtr+1] = HEAP8[ptr+1];

  HEAP8[tempDoublePtr+2] = HEAP8[ptr+2];

  HEAP8[tempDoublePtr+3] = HEAP8[ptr+3];

  HEAP8[tempDoublePtr+4] = HEAP8[ptr+4];

  HEAP8[tempDoublePtr+5] = HEAP8[ptr+5];

  HEAP8[tempDoublePtr+6] = HEAP8[ptr+6];

  HEAP8[tempDoublePtr+7] = HEAP8[ptr+7];

}


  var _abs=Math_abs;

  
  
  function _emscripten_memcpy_big(dest, src, num) {
      HEAPU8.set(HEAPU8.subarray(src, src+num), dest);
      return dest;
    } 
  Module["_memcpy"] = _memcpy;var _llvm_memcpy_p0i8_p0i8_i32=_memcpy;

  
  
  
  var ERRNO_CODES={EPERM:1,ENOENT:2,ESRCH:3,EINTR:4,EIO:5,ENXIO:6,E2BIG:7,ENOEXEC:8,EBADF:9,ECHILD:10,EAGAIN:11,EWOULDBLOCK:11,ENOMEM:12,EACCES:13,EFAULT:14,ENOTBLK:15,EBUSY:16,EEXIST:17,EXDEV:18,ENODEV:19,ENOTDIR:20,EISDIR:21,EINVAL:22,ENFILE:23,EMFILE:24,ENOTTY:25,ETXTBSY:26,EFBIG:27,ENOSPC:28,ESPIPE:29,EROFS:30,EMLINK:31,EPIPE:32,EDOM:33,ERANGE:34,ENOMSG:42,EIDRM:43,ECHRNG:44,EL2NSYNC:45,EL3HLT:46,EL3RST:47,ELNRNG:48,EUNATCH:49,ENOCSI:50,EL2HLT:51,EDEADLK:35,ENOLCK:37,EBADE:52,EBADR:53,EXFULL:54,ENOANO:55,EBADRQC:56,EBADSLT:57,EDEADLOCK:35,EBFONT:59,ENOSTR:60,ENODATA:61,ETIME:62,ENOSR:63,ENONET:64,ENOPKG:65,EREMOTE:66,ENOLINK:67,EADV:68,ESRMNT:69,ECOMM:70,EPROTO:71,EMULTIHOP:72,EDOTDOT:73,EBADMSG:74,ENOTUNIQ:76,EBADFD:77,EREMCHG:78,ELIBACC:79,ELIBBAD:80,ELIBSCN:81,ELIBMAX:82,ELIBEXEC:83,ENOSYS:38,ENOTEMPTY:39,ENAMETOOLONG:36,ELOOP:40,EOPNOTSUPP:95,EPFNOSUPPORT:96,ECONNRESET:104,ENOBUFS:105,EAFNOSUPPORT:97,EPROTOTYPE:91,ENOTSOCK:88,ENOPROTOOPT:92,ESHUTDOWN:108,ECONNREFUSED:111,EADDRINUSE:98,ECONNABORTED:103,ENETUNREACH:101,ENETDOWN:100,ETIMEDOUT:110,EHOSTDOWN:112,EHOSTUNREACH:113,EINPROGRESS:115,EALREADY:114,EDESTADDRREQ:89,EMSGSIZE:90,EPROTONOSUPPORT:93,ESOCKTNOSUPPORT:94,EADDRNOTAVAIL:99,ENETRESET:102,EISCONN:106,ENOTCONN:107,ETOOMANYREFS:109,EUSERS:87,EDQUOT:122,ESTALE:116,ENOTSUP:95,ENOMEDIUM:123,EILSEQ:84,EOVERFLOW:75,ECANCELED:125,ENOTRECOVERABLE:131,EOWNERDEAD:130,ESTRPIPE:86};
  
  var ERRNO_MESSAGES={0:"Success",1:"Not super-user",2:"No such file or directory",3:"No such process",4:"Interrupted system call",5:"I/O error",6:"No such device or address",7:"Arg list too long",8:"Exec format error",9:"Bad file number",10:"No children",11:"No more processes",12:"Not enough core",13:"Permission denied",14:"Bad address",15:"Block device required",16:"Mount device busy",17:"File exists",18:"Cross-device link",19:"No such device",20:"Not a directory",21:"Is a directory",22:"Invalid argument",23:"Too many open files in system",24:"Too many open files",25:"Not a typewriter",26:"Text file busy",27:"File too large",28:"No space left on device",29:"Illegal seek",30:"Read only file system",31:"Too many links",32:"Broken pipe",33:"Math arg out of domain of func",34:"Math result not representable",35:"File locking deadlock error",36:"File or path name too long",37:"No record locks available",38:"Function not implemented",39:"Directory not empty",40:"Too many symbolic links",42:"No message of desired type",43:"Identifier removed",44:"Channel number out of range",45:"Level 2 not synchronized",46:"Level 3 halted",47:"Level 3 reset",48:"Link number out of range",49:"Protocol driver not attached",50:"No CSI structure available",51:"Level 2 halted",52:"Invalid exchange",53:"Invalid request descriptor",54:"Exchange full",55:"No anode",56:"Invalid request code",57:"Invalid slot",59:"Bad font file fmt",60:"Device not a stream",61:"No data (for no delay io)",62:"Timer expired",63:"Out of streams resources",64:"Machine is not on the network",65:"Package not installed",66:"The object is remote",67:"The link has been severed",68:"Advertise error",69:"Srmount error",70:"Communication error on send",71:"Protocol error",72:"Multihop attempted",73:"Cross mount point (not really error)",74:"Trying to read unreadable message",75:"Value too large for defined data type",76:"Given log. name not unique",77:"f.d. invalid for this operation",78:"Remote address changed",79:"Can   access a needed shared lib",80:"Accessing a corrupted shared lib",81:".lib section in a.out corrupted",82:"Attempting to link in too many libs",83:"Attempting to exec a shared library",84:"Illegal byte sequence",86:"Streams pipe error",87:"Too many users",88:"Socket operation on non-socket",89:"Destination address required",90:"Message too long",91:"Protocol wrong type for socket",92:"Protocol not available",93:"Unknown protocol",94:"Socket type not supported",95:"Not supported",96:"Protocol family not supported",97:"Address family not supported by protocol family",98:"Address already in use",99:"Address not available",100:"Network interface is not configured",101:"Network is unreachable",102:"Connection reset by network",103:"Connection aborted",104:"Connection reset by peer",105:"No buffer space available",106:"Socket is already connected",107:"Socket is not connected",108:"Can't send after socket shutdown",109:"Too many references",110:"Connection timed out",111:"Connection refused",112:"Host is down",113:"Host is unreachable",114:"Socket already connected",115:"Connection already in progress",116:"Stale file handle",122:"Quota exceeded",123:"No medium (in tape drive)",125:"Operation canceled",130:"Previous owner died",131:"State not recoverable"};
  
  
  var ___errno_state=0;function ___setErrNo(value) {
      // For convenient setting and returning of errno.
      HEAP32[((___errno_state)>>2)]=value;
      return value;
    }
  
  var PATH={splitPath:function (filename) {
        var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        return splitPathRe.exec(filename).slice(1);
      },normalizeArray:function (parts, allowAboveRoot) {
        // if the path tries to go above the root, `up` ends up > 0
        var up = 0;
        for (var i = parts.length - 1; i >= 0; i--) {
          var last = parts[i];
          if (last === '.') {
            parts.splice(i, 1);
          } else if (last === '..') {
            parts.splice(i, 1);
            up++;
          } else if (up) {
            parts.splice(i, 1);
            up--;
          }
        }
        // if the path is allowed to go above the root, restore leading ..s
        if (allowAboveRoot) {
          for (; up--; up) {
            parts.unshift('..');
          }
        }
        return parts;
      },normalize:function (path) {
        var isAbsolute = path.charAt(0) === '/',
            trailingSlash = path.substr(-1) === '/';
        // Normalize the path
        path = PATH.normalizeArray(path.split('/').filter(function(p) {
          return !!p;
        }), !isAbsolute).join('/');
        if (!path && !isAbsolute) {
          path = '.';
        }
        if (path && trailingSlash) {
          path += '/';
        }
        return (isAbsolute ? '/' : '') + path;
      },dirname:function (path) {
        var result = PATH.splitPath(path),
            root = result[0],
            dir = result[1];
        if (!root && !dir) {
          // No dirname whatsoever
          return '.';
        }
        if (dir) {
          // It has a dirname, strip trailing slash
          dir = dir.substr(0, dir.length - 1);
        }
        return root + dir;
      },basename:function (path) {
        // EMSCRIPTEN return '/'' for '/', not an empty string
        if (path === '/') return '/';
        var lastSlash = path.lastIndexOf('/');
        if (lastSlash === -1) return path;
        return path.substr(lastSlash+1);
      },extname:function (path) {
        return PATH.splitPath(path)[3];
      },join:function () {
        var paths = Array.prototype.slice.call(arguments, 0);
        return PATH.normalize(paths.join('/'));
      },join2:function (l, r) {
        return PATH.normalize(l + '/' + r);
      },resolve:function () {
        var resolvedPath = '',
          resolvedAbsolute = false;
        for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
          var path = (i >= 0) ? arguments[i] : FS.cwd();
          // Skip empty and invalid entries
          if (typeof path !== 'string') {
            throw new TypeError('Arguments to path.resolve must be strings');
          } else if (!path) {
            continue;
          }
          resolvedPath = path + '/' + resolvedPath;
          resolvedAbsolute = path.charAt(0) === '/';
        }
        // At this point the path should be resolved to a full absolute path, but
        // handle relative paths to be safe (might happen when process.cwd() fails)
        resolvedPath = PATH.normalizeArray(resolvedPath.split('/').filter(function(p) {
          return !!p;
        }), !resolvedAbsolute).join('/');
        return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
      },relative:function (from, to) {
        from = PATH.resolve(from).substr(1);
        to = PATH.resolve(to).substr(1);
        function trim(arr) {
          var start = 0;
          for (; start < arr.length; start++) {
            if (arr[start] !== '') break;
          }
          var end = arr.length - 1;
          for (; end >= 0; end--) {
            if (arr[end] !== '') break;
          }
          if (start > end) return [];
          return arr.slice(start, end - start + 1);
        }
        var fromParts = trim(from.split('/'));
        var toParts = trim(to.split('/'));
        var length = Math.min(fromParts.length, toParts.length);
        var samePartsLength = length;
        for (var i = 0; i < length; i++) {
          if (fromParts[i] !== toParts[i]) {
            samePartsLength = i;
            break;
          }
        }
        var outputParts = [];
        for (var i = samePartsLength; i < fromParts.length; i++) {
          outputParts.push('..');
        }
        outputParts = outputParts.concat(toParts.slice(samePartsLength));
        return outputParts.join('/');
      }};
  
  var TTY={ttys:[],init:function () {
        // https://github.com/kripken/emscripten/pull/1555
        // if (ENVIRONMENT_IS_NODE) {
        //   // currently, FS.init does not distinguish if process.stdin is a file or TTY
        //   // device, it always assumes it's a TTY device. because of this, we're forcing
        //   // process.stdin to UTF8 encoding to at least make stdin reading compatible
        //   // with text files until FS.init can be refactored.
        //   process['stdin']['setEncoding']('utf8');
        // }
      },shutdown:function () {
        // https://github.com/kripken/emscripten/pull/1555
        // if (ENVIRONMENT_IS_NODE) {
        //   // inolen: any idea as to why node -e 'process.stdin.read()' wouldn't exit immediately (with process.stdin being a tty)?
        //   // isaacs: because now it's reading from the stream, you've expressed interest in it, so that read() kicks off a _read() which creates a ReadReq operation
        //   // inolen: I thought read() in that case was a synchronous operation that just grabbed some amount of buffered data if it exists?
        //   // isaacs: it is. but it also triggers a _read() call, which calls readStart() on the handle
        //   // isaacs: do process.stdin.pause() and i'd think it'd probably close the pending call
        //   process['stdin']['pause']();
        // }
      },register:function (dev, ops) {
        TTY.ttys[dev] = { input: [], output: [], ops: ops };
        FS.registerDevice(dev, TTY.stream_ops);
      },stream_ops:{open:function (stream) {
          var tty = TTY.ttys[stream.node.rdev];
          if (!tty) {
            throw new FS.ErrnoError(ERRNO_CODES.ENODEV);
          }
          stream.tty = tty;
          stream.seekable = false;
        },close:function (stream) {
          // flush any pending line data
          if (stream.tty.output.length) {
            stream.tty.ops.put_char(stream.tty, 10);
          }
        },read:function (stream, buffer, offset, length, pos /* ignored */) {
          if (!stream.tty || !stream.tty.ops.get_char) {
            throw new FS.ErrnoError(ERRNO_CODES.ENXIO);
          }
          var bytesRead = 0;
          for (var i = 0; i < length; i++) {
            var result;
            try {
              result = stream.tty.ops.get_char(stream.tty);
            } catch (e) {
              throw new FS.ErrnoError(ERRNO_CODES.EIO);
            }
            if (result === undefined && bytesRead === 0) {
              throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
            }
            if (result === null || result === undefined) break;
            bytesRead++;
            buffer[offset+i] = result;
          }
          if (bytesRead) {
            stream.node.timestamp = Date.now();
          }
          return bytesRead;
        },write:function (stream, buffer, offset, length, pos) {
          if (!stream.tty || !stream.tty.ops.put_char) {
            throw new FS.ErrnoError(ERRNO_CODES.ENXIO);
          }
          for (var i = 0; i < length; i++) {
            try {
              stream.tty.ops.put_char(stream.tty, buffer[offset+i]);
            } catch (e) {
              throw new FS.ErrnoError(ERRNO_CODES.EIO);
            }
          }
          if (length) {
            stream.node.timestamp = Date.now();
          }
          return i;
        }},default_tty_ops:{get_char:function (tty) {
          if (!tty.input.length) {
            var result = null;
            if (ENVIRONMENT_IS_NODE) {
              result = process['stdin']['read']();
              if (!result) {
                if (process['stdin']['_readableState'] && process['stdin']['_readableState']['ended']) {
                  return null;  // EOF
                }
                return undefined;  // no data available
              }
            } else if (typeof window != 'undefined' &&
              typeof window.prompt == 'function') {
              // Browser.
              result = window.prompt('Input: ');  // returns null on cancel
              if (result !== null) {
                result += '\n';
              }
            } else if (typeof readline == 'function') {
              // Command line.
              result = readline();
              if (result !== null) {
                result += '\n';
              }
            }
            if (!result) {
              return null;
            }
            tty.input = intArrayFromString(result, true);
          }
          return tty.input.shift();
        },put_char:function (tty, val) {
          if (val === null || val === 10) {
            Module['print'](tty.output.join(''));
            tty.output = [];
          } else {
            tty.output.push(TTY.utf8.processCChar(val));
          }
        }},default_tty1_ops:{put_char:function (tty, val) {
          if (val === null || val === 10) {
            Module['printErr'](tty.output.join(''));
            tty.output = [];
          } else {
            tty.output.push(TTY.utf8.processCChar(val));
          }
        }}};
  
  var MEMFS={ops_table:null,CONTENT_OWNING:1,CONTENT_FLEXIBLE:2,CONTENT_FIXED:3,mount:function (mount) {
        return MEMFS.createNode(null, '/', 16384 | 0777, 0);
      },createNode:function (parent, name, mode, dev) {
        if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
          // no supported
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        if (!MEMFS.ops_table) {
          MEMFS.ops_table = {
            dir: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr,
                lookup: MEMFS.node_ops.lookup,
                mknod: MEMFS.node_ops.mknod,
                mknod: MEMFS.node_ops.mknod,
                rename: MEMFS.node_ops.rename,
                unlink: MEMFS.node_ops.unlink,
                rmdir: MEMFS.node_ops.rmdir,
                readdir: MEMFS.node_ops.readdir,
                symlink: MEMFS.node_ops.symlink
              },
              stream: {
                llseek: MEMFS.stream_ops.llseek
              }
            },
            file: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr
              },
              stream: {
                llseek: MEMFS.stream_ops.llseek,
                read: MEMFS.stream_ops.read,
                write: MEMFS.stream_ops.write,
                allocate: MEMFS.stream_ops.allocate,
                mmap: MEMFS.stream_ops.mmap
              }
            },
            link: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr,
                readlink: MEMFS.node_ops.readlink
              },
              stream: {}
            },
            chrdev: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr
              },
              stream: FS.chrdev_stream_ops
            },
          };
        }
        var node = FS.createNode(parent, name, mode, dev);
        if (FS.isDir(node.mode)) {
          node.node_ops = MEMFS.ops_table.dir.node;
          node.stream_ops = MEMFS.ops_table.dir.stream;
          node.contents = {};
        } else if (FS.isFile(node.mode)) {
          node.node_ops = MEMFS.ops_table.file.node;
          node.stream_ops = MEMFS.ops_table.file.stream;
          node.contents = [];
          node.contentMode = MEMFS.CONTENT_FLEXIBLE;
        } else if (FS.isLink(node.mode)) {
          node.node_ops = MEMFS.ops_table.link.node;
          node.stream_ops = MEMFS.ops_table.link.stream;
        } else if (FS.isChrdev(node.mode)) {
          node.node_ops = MEMFS.ops_table.chrdev.node;
          node.stream_ops = MEMFS.ops_table.chrdev.stream;
        }
        node.timestamp = Date.now();
        // add the new node to the parent
        if (parent) {
          parent.contents[name] = node;
        }
        return node;
      },ensureFlexible:function (node) {
        if (node.contentMode !== MEMFS.CONTENT_FLEXIBLE) {
          var contents = node.contents;
          node.contents = Array.prototype.slice.call(contents);
          node.contentMode = MEMFS.CONTENT_FLEXIBLE;
        }
      },node_ops:{getattr:function (node) {
          var attr = {};
          // device numbers reuse inode numbers.
          attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
          attr.ino = node.id;
          attr.mode = node.mode;
          attr.nlink = 1;
          attr.uid = 0;
          attr.gid = 0;
          attr.rdev = node.rdev;
          if (FS.isDir(node.mode)) {
            attr.size = 4096;
          } else if (FS.isFile(node.mode)) {
            attr.size = node.contents.length;
          } else if (FS.isLink(node.mode)) {
            attr.size = node.link.length;
          } else {
            attr.size = 0;
          }
          attr.atime = new Date(node.timestamp);
          attr.mtime = new Date(node.timestamp);
          attr.ctime = new Date(node.timestamp);
          // NOTE: In our implementation, st_blocks = Math.ceil(st_size/st_blksize),
          //       but this is not required by the standard.
          attr.blksize = 4096;
          attr.blocks = Math.ceil(attr.size / attr.blksize);
          return attr;
        },setattr:function (node, attr) {
          if (attr.mode !== undefined) {
            node.mode = attr.mode;
          }
          if (attr.timestamp !== undefined) {
            node.timestamp = attr.timestamp;
          }
          if (attr.size !== undefined) {
            MEMFS.ensureFlexible(node);
            var contents = node.contents;
            if (attr.size < contents.length) contents.length = attr.size;
            else while (attr.size > contents.length) contents.push(0);
          }
        },lookup:function (parent, name) {
          throw FS.genericErrors[ERRNO_CODES.ENOENT];
        },mknod:function (parent, name, mode, dev) {
          return MEMFS.createNode(parent, name, mode, dev);
        },rename:function (old_node, new_dir, new_name) {
          // if we're overwriting a directory at new_name, make sure it's empty.
          if (FS.isDir(old_node.mode)) {
            var new_node;
            try {
              new_node = FS.lookupNode(new_dir, new_name);
            } catch (e) {
            }
            if (new_node) {
              for (var i in new_node.contents) {
                throw new FS.ErrnoError(ERRNO_CODES.ENOTEMPTY);
              }
            }
          }
          // do the internal rewiring
          delete old_node.parent.contents[old_node.name];
          old_node.name = new_name;
          new_dir.contents[new_name] = old_node;
          old_node.parent = new_dir;
        },unlink:function (parent, name) {
          delete parent.contents[name];
        },rmdir:function (parent, name) {
          var node = FS.lookupNode(parent, name);
          for (var i in node.contents) {
            throw new FS.ErrnoError(ERRNO_CODES.ENOTEMPTY);
          }
          delete parent.contents[name];
        },readdir:function (node) {
          var entries = ['.', '..']
          for (var key in node.contents) {
            if (!node.contents.hasOwnProperty(key)) {
              continue;
            }
            entries.push(key);
          }
          return entries;
        },symlink:function (parent, newname, oldpath) {
          var node = MEMFS.createNode(parent, newname, 0777 | 40960, 0);
          node.link = oldpath;
          return node;
        },readlink:function (node) {
          if (!FS.isLink(node.mode)) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
          }
          return node.link;
        }},stream_ops:{read:function (stream, buffer, offset, length, position) {
          var contents = stream.node.contents;
          if (position >= contents.length)
            return 0;
          var size = Math.min(contents.length - position, length);
          assert(size >= 0);
          if (size > 8 && contents.subarray) { // non-trivial, and typed array
            buffer.set(contents.subarray(position, position + size), offset);
          } else
          {
            for (var i = 0; i < size; i++) {
              buffer[offset + i] = contents[position + i];
            }
          }
          return size;
        },write:function (stream, buffer, offset, length, position, canOwn) {
          var node = stream.node;
          node.timestamp = Date.now();
          var contents = node.contents;
          if (length && contents.length === 0 && position === 0 && buffer.subarray) {
            // just replace it with the new data
            if (canOwn && offset === 0) {
              node.contents = buffer; // this could be a subarray of Emscripten HEAP, or allocated from some other source.
              node.contentMode = (buffer.buffer === HEAP8.buffer) ? MEMFS.CONTENT_OWNING : MEMFS.CONTENT_FIXED;
            } else {
              node.contents = new Uint8Array(buffer.subarray(offset, offset+length));
              node.contentMode = MEMFS.CONTENT_FIXED;
            }
            return length;
          }
          MEMFS.ensureFlexible(node);
          var contents = node.contents;
          while (contents.length < position) contents.push(0);
          for (var i = 0; i < length; i++) {
            contents[position + i] = buffer[offset + i];
          }
          return length;
        },llseek:function (stream, offset, whence) {
          var position = offset;
          if (whence === 1) {  // SEEK_CUR.
            position += stream.position;
          } else if (whence === 2) {  // SEEK_END.
            if (FS.isFile(stream.node.mode)) {
              position += stream.node.contents.length;
            }
          }
          if (position < 0) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
          }
          stream.ungotten = [];
          stream.position = position;
          return position;
        },allocate:function (stream, offset, length) {
          MEMFS.ensureFlexible(stream.node);
          var contents = stream.node.contents;
          var limit = offset + length;
          while (limit > contents.length) contents.push(0);
        },mmap:function (stream, buffer, offset, length, position, prot, flags) {
          if (!FS.isFile(stream.node.mode)) {
            throw new FS.ErrnoError(ERRNO_CODES.ENODEV);
          }
          var ptr;
          var allocated;
          var contents = stream.node.contents;
          // Only make a new copy when MAP_PRIVATE is specified.
          if ( !(flags & 2) &&
                (contents.buffer === buffer || contents.buffer === buffer.buffer) ) {
            // We can't emulate MAP_SHARED when the file is not backed by the buffer
            // we're mapping to (e.g. the HEAP buffer).
            allocated = false;
            ptr = contents.byteOffset;
          } else {
            // Try to avoid unnecessary slices.
            if (position > 0 || position + length < contents.length) {
              if (contents.subarray) {
                contents = contents.subarray(position, position + length);
              } else {
                contents = Array.prototype.slice.call(contents, position, position + length);
              }
            }
            allocated = true;
            ptr = _malloc(length);
            if (!ptr) {
              throw new FS.ErrnoError(ERRNO_CODES.ENOMEM);
            }
            buffer.set(contents, ptr);
          }
          return { ptr: ptr, allocated: allocated };
        }}};
  
  var IDBFS={dbs:{},indexedDB:function () {
        return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
      },DB_VERSION:21,DB_STORE_NAME:"FILE_DATA",mount:function (mount) {
        // reuse all of the core MEMFS functionality
        return MEMFS.mount.apply(null, arguments);
      },syncfs:function (mount, populate, callback) {
        IDBFS.getLocalSet(mount, function(err, local) {
          if (err) return callback(err);
  
          IDBFS.getRemoteSet(mount, function(err, remote) {
            if (err) return callback(err);
  
            var src = populate ? remote : local;
            var dst = populate ? local : remote;
  
            IDBFS.reconcile(src, dst, callback);
          });
        });
      },getDB:function (name, callback) {
        // check the cache first
        var db = IDBFS.dbs[name];
        if (db) {
          return callback(null, db);
        }
  
        var req;
        try {
          req = IDBFS.indexedDB().open(name, IDBFS.DB_VERSION);
        } catch (e) {
          return callback(e);
        }
        req.onupgradeneeded = function(e) {
          var db = e.target.result;
          var transaction = e.target.transaction;
  
          var fileStore;
  
          if (db.objectStoreNames.contains(IDBFS.DB_STORE_NAME)) {
            fileStore = transaction.objectStore(IDBFS.DB_STORE_NAME);
          } else {
            fileStore = db.createObjectStore(IDBFS.DB_STORE_NAME);
          }
  
          fileStore.createIndex('timestamp', 'timestamp', { unique: false });
        };
        req.onsuccess = function() {
          db = req.result;
  
          // add to the cache
          IDBFS.dbs[name] = db;
          callback(null, db);
        };
        req.onerror = function() {
          callback(this.error);
        };
      },getLocalSet:function (mount, callback) {
        var entries = {};
  
        function isRealDir(p) {
          return p !== '.' && p !== '..';
        };
        function toAbsolute(root) {
          return function(p) {
            return PATH.join2(root, p);
          }
        };
  
        var check = FS.readdir(mount.mountpoint).filter(isRealDir).map(toAbsolute(mount.mountpoint));
  
        while (check.length) {
          var path = check.pop();
          var stat;
  
          try {
            stat = FS.stat(path);
          } catch (e) {
            return callback(e);
          }
  
          if (FS.isDir(stat.mode)) {
            check.push.apply(check, FS.readdir(path).filter(isRealDir).map(toAbsolute(path)));
          }
  
          entries[path] = { timestamp: stat.mtime };
        }
  
        return callback(null, { type: 'local', entries: entries });
      },getRemoteSet:function (mount, callback) {
        var entries = {};
  
        IDBFS.getDB(mount.mountpoint, function(err, db) {
          if (err) return callback(err);
  
          var transaction = db.transaction([IDBFS.DB_STORE_NAME], 'readonly');
          transaction.onerror = function() { callback(this.error); };
  
          var store = transaction.objectStore(IDBFS.DB_STORE_NAME);
          var index = store.index('timestamp');
  
          index.openKeyCursor().onsuccess = function(event) {
            var cursor = event.target.result;
  
            if (!cursor) {
              return callback(null, { type: 'remote', db: db, entries: entries });
            }
  
            entries[cursor.primaryKey] = { timestamp: cursor.key };
  
            cursor.continue();
          };
        });
      },loadLocalEntry:function (path, callback) {
        var stat, node;
  
        try {
          var lookup = FS.lookupPath(path);
          node = lookup.node;
          stat = FS.stat(path);
        } catch (e) {
          return callback(e);
        }
  
        if (FS.isDir(stat.mode)) {
          return callback(null, { timestamp: stat.mtime, mode: stat.mode });
        } else if (FS.isFile(stat.mode)) {
          return callback(null, { timestamp: stat.mtime, mode: stat.mode, contents: node.contents });
        } else {
          return callback(new Error('node type not supported'));
        }
      },storeLocalEntry:function (path, entry, callback) {
        try {
          if (FS.isDir(entry.mode)) {
            FS.mkdir(path, entry.mode);
          } else if (FS.isFile(entry.mode)) {
            FS.writeFile(path, entry.contents, { encoding: 'binary', canOwn: true });
          } else {
            return callback(new Error('node type not supported'));
          }
  
          FS.utime(path, entry.timestamp, entry.timestamp);
        } catch (e) {
          return callback(e);
        }
  
        callback(null);
      },removeLocalEntry:function (path, callback) {
        try {
          var lookup = FS.lookupPath(path);
          var stat = FS.stat(path);
  
          if (FS.isDir(stat.mode)) {
            FS.rmdir(path);
          } else if (FS.isFile(stat.mode)) {
            FS.unlink(path);
          }
        } catch (e) {
          return callback(e);
        }
  
        callback(null);
      },loadRemoteEntry:function (store, path, callback) {
        var req = store.get(path);
        req.onsuccess = function(event) { callback(null, event.target.result); };
        req.onerror = function() { callback(this.error); };
      },storeRemoteEntry:function (store, path, entry, callback) {
        var req = store.put(entry, path);
        req.onsuccess = function() { callback(null); };
        req.onerror = function() { callback(this.error); };
      },removeRemoteEntry:function (store, path, callback) {
        var req = store.delete(path);
        req.onsuccess = function() { callback(null); };
        req.onerror = function() { callback(this.error); };
      },reconcile:function (src, dst, callback) {
        var total = 0;
  
        var create = [];
        Object.keys(src.entries).forEach(function (key) {
          var e = src.entries[key];
          var e2 = dst.entries[key];
          if (!e2 || e.timestamp > e2.timestamp) {
            create.push(key);
            total++;
          }
        });
  
        var remove = [];
        Object.keys(dst.entries).forEach(function (key) {
          var e = dst.entries[key];
          var e2 = src.entries[key];
          if (!e2) {
            remove.push(key);
            total++;
          }
        });
  
        if (!total) {
          return callback(null);
        }
  
        var errored = false;
        var completed = 0;
        var db = src.type === 'remote' ? src.db : dst.db;
        var transaction = db.transaction([IDBFS.DB_STORE_NAME], 'readwrite');
        var store = transaction.objectStore(IDBFS.DB_STORE_NAME);
  
        function done(err) {
          if (err) {
            if (!done.errored) {
              done.errored = true;
              return callback(err);
            }
            return;
          }
          if (++completed >= total) {
            return callback(null);
          }
        };
  
        transaction.onerror = function() { done(this.error); };
  
        // sort paths in ascending order so directory entries are created
        // before the files inside them
        create.sort().forEach(function (path) {
          if (dst.type === 'local') {
            IDBFS.loadRemoteEntry(store, path, function (err, entry) {
              if (err) return done(err);
              IDBFS.storeLocalEntry(path, entry, done);
            });
          } else {
            IDBFS.loadLocalEntry(path, function (err, entry) {
              if (err) return done(err);
              IDBFS.storeRemoteEntry(store, path, entry, done);
            });
          }
        });
  
        // sort paths in descending order so files are deleted before their
        // parent directories
        remove.sort().reverse().forEach(function(path) {
          if (dst.type === 'local') {
            IDBFS.removeLocalEntry(path, done);
          } else {
            IDBFS.removeRemoteEntry(store, path, done);
          }
        });
      }};
  
  var NODEFS={isWindows:false,staticInit:function () {
        NODEFS.isWindows = !!process.platform.match(/^win/);
      },mount:function (mount) {
        assert(ENVIRONMENT_IS_NODE);
        return NODEFS.createNode(null, '/', NODEFS.getMode(mount.opts.root), 0);
      },createNode:function (parent, name, mode, dev) {
        if (!FS.isDir(mode) && !FS.isFile(mode) && !FS.isLink(mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        var node = FS.createNode(parent, name, mode);
        node.node_ops = NODEFS.node_ops;
        node.stream_ops = NODEFS.stream_ops;
        return node;
      },getMode:function (path) {
        var stat;
        try {
          stat = fs.lstatSync(path);
          if (NODEFS.isWindows) {
            // On Windows, directories return permission bits 'rw-rw-rw-', even though they have 'rwxrwxrwx', so 
            // propagate write bits to execute bits.
            stat.mode = stat.mode | ((stat.mode & 146) >> 1);
          }
        } catch (e) {
          if (!e.code) throw e;
          throw new FS.ErrnoError(ERRNO_CODES[e.code]);
        }
        return stat.mode;
      },realPath:function (node) {
        var parts = [];
        while (node.parent !== node) {
          parts.push(node.name);
          node = node.parent;
        }
        parts.push(node.mount.opts.root);
        parts.reverse();
        return PATH.join.apply(null, parts);
      },flagsToPermissionStringMap:{0:"r",1:"r+",2:"r+",64:"r",65:"r+",66:"r+",129:"rx+",193:"rx+",514:"w+",577:"w",578:"w+",705:"wx",706:"wx+",1024:"a",1025:"a",1026:"a+",1089:"a",1090:"a+",1153:"ax",1154:"ax+",1217:"ax",1218:"ax+",4096:"rs",4098:"rs+"},flagsToPermissionString:function (flags) {
        if (flags in NODEFS.flagsToPermissionStringMap) {
          return NODEFS.flagsToPermissionStringMap[flags];
        } else {
          return flags;
        }
      },node_ops:{getattr:function (node) {
          var path = NODEFS.realPath(node);
          var stat;
          try {
            stat = fs.lstatSync(path);
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
          // node.js v0.10.20 doesn't report blksize and blocks on Windows. Fake them with default blksize of 4096.
          // See http://support.microsoft.com/kb/140365
          if (NODEFS.isWindows && !stat.blksize) {
            stat.blksize = 4096;
          }
          if (NODEFS.isWindows && !stat.blocks) {
            stat.blocks = (stat.size+stat.blksize-1)/stat.blksize|0;
          }
          return {
            dev: stat.dev,
            ino: stat.ino,
            mode: stat.mode,
            nlink: stat.nlink,
            uid: stat.uid,
            gid: stat.gid,
            rdev: stat.rdev,
            size: stat.size,
            atime: stat.atime,
            mtime: stat.mtime,
            ctime: stat.ctime,
            blksize: stat.blksize,
            blocks: stat.blocks
          };
        },setattr:function (node, attr) {
          var path = NODEFS.realPath(node);
          try {
            if (attr.mode !== undefined) {
              fs.chmodSync(path, attr.mode);
              // update the common node structure mode as well
              node.mode = attr.mode;
            }
            if (attr.timestamp !== undefined) {
              var date = new Date(attr.timestamp);
              fs.utimesSync(path, date, date);
            }
            if (attr.size !== undefined) {
              fs.truncateSync(path, attr.size);
            }
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },lookup:function (parent, name) {
          var path = PATH.join2(NODEFS.realPath(parent), name);
          var mode = NODEFS.getMode(path);
          return NODEFS.createNode(parent, name, mode);
        },mknod:function (parent, name, mode, dev) {
          var node = NODEFS.createNode(parent, name, mode, dev);
          // create the backing node for this in the fs root as well
          var path = NODEFS.realPath(node);
          try {
            if (FS.isDir(node.mode)) {
              fs.mkdirSync(path, node.mode);
            } else {
              fs.writeFileSync(path, '', { mode: node.mode });
            }
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
          return node;
        },rename:function (oldNode, newDir, newName) {
          var oldPath = NODEFS.realPath(oldNode);
          var newPath = PATH.join2(NODEFS.realPath(newDir), newName);
          try {
            fs.renameSync(oldPath, newPath);
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },unlink:function (parent, name) {
          var path = PATH.join2(NODEFS.realPath(parent), name);
          try {
            fs.unlinkSync(path);
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },rmdir:function (parent, name) {
          var path = PATH.join2(NODEFS.realPath(parent), name);
          try {
            fs.rmdirSync(path);
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },readdir:function (node) {
          var path = NODEFS.realPath(node);
          try {
            return fs.readdirSync(path);
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },symlink:function (parent, newName, oldPath) {
          var newPath = PATH.join2(NODEFS.realPath(parent), newName);
          try {
            fs.symlinkSync(oldPath, newPath);
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },readlink:function (node) {
          var path = NODEFS.realPath(node);
          try {
            return fs.readlinkSync(path);
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        }},stream_ops:{open:function (stream) {
          var path = NODEFS.realPath(stream.node);
          try {
            if (FS.isFile(stream.node.mode)) {
              stream.nfd = fs.openSync(path, NODEFS.flagsToPermissionString(stream.flags));
            }
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },close:function (stream) {
          try {
            if (FS.isFile(stream.node.mode) && stream.nfd) {
              fs.closeSync(stream.nfd);
            }
          } catch (e) {
            if (!e.code) throw e;
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
        },read:function (stream, buffer, offset, length, position) {
          // FIXME this is terrible.
          var nbuffer = new Buffer(length);
          var res;
          try {
            res = fs.readSync(stream.nfd, nbuffer, 0, length, position);
          } catch (e) {
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
          if (res > 0) {
            for (var i = 0; i < res; i++) {
              buffer[offset + i] = nbuffer[i];
            }
          }
          return res;
        },write:function (stream, buffer, offset, length, position) {
          // FIXME this is terrible.
          var nbuffer = new Buffer(buffer.subarray(offset, offset + length));
          var res;
          try {
            res = fs.writeSync(stream.nfd, nbuffer, 0, length, position);
          } catch (e) {
            throw new FS.ErrnoError(ERRNO_CODES[e.code]);
          }
          return res;
        },llseek:function (stream, offset, whence) {
          var position = offset;
          if (whence === 1) {  // SEEK_CUR.
            position += stream.position;
          } else if (whence === 2) {  // SEEK_END.
            if (FS.isFile(stream.node.mode)) {
              try {
                var stat = fs.fstatSync(stream.nfd);
                position += stat.size;
              } catch (e) {
                throw new FS.ErrnoError(ERRNO_CODES[e.code]);
              }
            }
          }
  
          if (position < 0) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
          }
  
          stream.position = position;
          return position;
        }}};
  
  var _stdin=allocate(1, "i32*", ALLOC_STATIC);
  
  var _stdout=allocate(1, "i32*", ALLOC_STATIC);
  
  var _stderr=allocate(1, "i32*", ALLOC_STATIC);
  
  function _fflush(stream) {
      // int fflush(FILE *stream);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/fflush.html
      // we don't currently perform any user-space buffering of data
    }var FS={root:null,mounts:[],devices:[null],streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:false,ignorePermissions:true,ErrnoError:null,genericErrors:{},handleFSError:function (e) {
        if (!(e instanceof FS.ErrnoError)) throw e + ' : ' + stackTrace();
        return ___setErrNo(e.errno);
      },lookupPath:function (path, opts) {
        path = PATH.resolve(FS.cwd(), path);
        opts = opts || {};
  
        var defaults = {
          follow_mount: true,
          recurse_count: 0
        };
        for (var key in defaults) {
          if (opts[key] === undefined) {
            opts[key] = defaults[key];
          }
        }
  
        if (opts.recurse_count > 8) {  // max recursive lookup of 8
          throw new FS.ErrnoError(ERRNO_CODES.ELOOP);
        }
  
        // split the path
        var parts = PATH.normalizeArray(path.split('/').filter(function(p) {
          return !!p;
        }), false);
  
        // start at the root
        var current = FS.root;
        var current_path = '/';
  
        for (var i = 0; i < parts.length; i++) {
          var islast = (i === parts.length-1);
          if (islast && opts.parent) {
            // stop resolving
            break;
          }
  
          current = FS.lookupNode(current, parts[i]);
          current_path = PATH.join2(current_path, parts[i]);
  
          // jump to the mount's root node if this is a mountpoint
          if (FS.isMountpoint(current)) {
            if (!islast || (islast && opts.follow_mount)) {
              current = current.mounted.root;
            }
          }
  
          // by default, lookupPath will not follow a symlink if it is the final path component.
          // setting opts.follow = true will override this behavior.
          if (!islast || opts.follow) {
            var count = 0;
            while (FS.isLink(current.mode)) {
              var link = FS.readlink(current_path);
              current_path = PATH.resolve(PATH.dirname(current_path), link);
              
              var lookup = FS.lookupPath(current_path, { recurse_count: opts.recurse_count });
              current = lookup.node;
  
              if (count++ > 40) {  // limit max consecutive symlinks to 40 (SYMLOOP_MAX).
                throw new FS.ErrnoError(ERRNO_CODES.ELOOP);
              }
            }
          }
        }
  
        return { path: current_path, node: current };
      },getPath:function (node) {
        var path;
        while (true) {
          if (FS.isRoot(node)) {
            var mount = node.mount.mountpoint;
            if (!path) return mount;
            return mount[mount.length-1] !== '/' ? mount + '/' + path : mount + path;
          }
          path = path ? node.name + '/' + path : node.name;
          node = node.parent;
        }
      },hashName:function (parentid, name) {
        var hash = 0;
  
  
        for (var i = 0; i < name.length; i++) {
          hash = ((hash << 5) - hash + name.charCodeAt(i)) | 0;
        }
        return ((parentid + hash) >>> 0) % FS.nameTable.length;
      },hashAddNode:function (node) {
        var hash = FS.hashName(node.parent.id, node.name);
        node.name_next = FS.nameTable[hash];
        FS.nameTable[hash] = node;
      },hashRemoveNode:function (node) {
        var hash = FS.hashName(node.parent.id, node.name);
        if (FS.nameTable[hash] === node) {
          FS.nameTable[hash] = node.name_next;
        } else {
          var current = FS.nameTable[hash];
          while (current) {
            if (current.name_next === node) {
              current.name_next = node.name_next;
              break;
            }
            current = current.name_next;
          }
        }
      },lookupNode:function (parent, name) {
        var err = FS.mayLookup(parent);
        if (err) {
          throw new FS.ErrnoError(err);
        }
        var hash = FS.hashName(parent.id, name);
        for (var node = FS.nameTable[hash]; node; node = node.name_next) {
          var nodeName = node.name;
          if (node.parent.id === parent.id && nodeName === name) {
            return node;
          }
        }
        // if we failed to find it in the cache, call into the VFS
        return FS.lookup(parent, name);
      },createNode:function (parent, name, mode, rdev) {
        if (!FS.FSNode) {
          FS.FSNode = function(parent, name, mode, rdev) {
            if (!parent) {
              parent = this;  // root node sets parent to itself
            }
            this.parent = parent;
            this.mount = parent.mount;
            this.mounted = null;
            this.id = FS.nextInode++;
            this.name = name;
            this.mode = mode;
            this.node_ops = {};
            this.stream_ops = {};
            this.rdev = rdev;
          };
  
          FS.FSNode.prototype = {};
  
          // compatibility
          var readMode = 292 | 73;
          var writeMode = 146;
  
          // NOTE we must use Object.defineProperties instead of individual calls to
          // Object.defineProperty in order to make closure compiler happy
          Object.defineProperties(FS.FSNode.prototype, {
            read: {
              get: function() { return (this.mode & readMode) === readMode; },
              set: function(val) { val ? this.mode |= readMode : this.mode &= ~readMode; }
            },
            write: {
              get: function() { return (this.mode & writeMode) === writeMode; },
              set: function(val) { val ? this.mode |= writeMode : this.mode &= ~writeMode; }
            },
            isFolder: {
              get: function() { return FS.isDir(this.mode); },
            },
            isDevice: {
              get: function() { return FS.isChrdev(this.mode); },
            },
          });
        }
  
        var node = new FS.FSNode(parent, name, mode, rdev);
  
        FS.hashAddNode(node);
  
        return node;
      },destroyNode:function (node) {
        FS.hashRemoveNode(node);
      },isRoot:function (node) {
        return node === node.parent;
      },isMountpoint:function (node) {
        return !!node.mounted;
      },isFile:function (mode) {
        return (mode & 61440) === 32768;
      },isDir:function (mode) {
        return (mode & 61440) === 16384;
      },isLink:function (mode) {
        return (mode & 61440) === 40960;
      },isChrdev:function (mode) {
        return (mode & 61440) === 8192;
      },isBlkdev:function (mode) {
        return (mode & 61440) === 24576;
      },isFIFO:function (mode) {
        return (mode & 61440) === 4096;
      },isSocket:function (mode) {
        return (mode & 49152) === 49152;
      },flagModes:{"r":0,"rs":1052672,"r+":2,"w":577,"wx":705,"xw":705,"w+":578,"wx+":706,"xw+":706,"a":1089,"ax":1217,"xa":1217,"a+":1090,"ax+":1218,"xa+":1218},modeStringToFlags:function (str) {
        var flags = FS.flagModes[str];
        if (typeof flags === 'undefined') {
          throw new Error('Unknown file open mode: ' + str);
        }
        return flags;
      },flagsToPermissionString:function (flag) {
        var accmode = flag & 2097155;
        var perms = ['r', 'w', 'rw'][accmode];
        if ((flag & 512)) {
          perms += 'w';
        }
        return perms;
      },nodePermissions:function (node, perms) {
        if (FS.ignorePermissions) {
          return 0;
        }
        // return 0 if any user, group or owner bits are set.
        if (perms.indexOf('r') !== -1 && !(node.mode & 292)) {
          return ERRNO_CODES.EACCES;
        } else if (perms.indexOf('w') !== -1 && !(node.mode & 146)) {
          return ERRNO_CODES.EACCES;
        } else if (perms.indexOf('x') !== -1 && !(node.mode & 73)) {
          return ERRNO_CODES.EACCES;
        }
        return 0;
      },mayLookup:function (dir) {
        return FS.nodePermissions(dir, 'x');
      },mayCreate:function (dir, name) {
        try {
          var node = FS.lookupNode(dir, name);
          return ERRNO_CODES.EEXIST;
        } catch (e) {
        }
        return FS.nodePermissions(dir, 'wx');
      },mayDelete:function (dir, name, isdir) {
        var node;
        try {
          node = FS.lookupNode(dir, name);
        } catch (e) {
          return e.errno;
        }
        var err = FS.nodePermissions(dir, 'wx');
        if (err) {
          return err;
        }
        if (isdir) {
          if (!FS.isDir(node.mode)) {
            return ERRNO_CODES.ENOTDIR;
          }
          if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
            return ERRNO_CODES.EBUSY;
          }
        } else {
          if (FS.isDir(node.mode)) {
            return ERRNO_CODES.EISDIR;
          }
        }
        return 0;
      },mayOpen:function (node, flags) {
        if (!node) {
          return ERRNO_CODES.ENOENT;
        }
        if (FS.isLink(node.mode)) {
          return ERRNO_CODES.ELOOP;
        } else if (FS.isDir(node.mode)) {
          if ((flags & 2097155) !== 0 ||  // opening for write
              (flags & 512)) {
            return ERRNO_CODES.EISDIR;
          }
        }
        return FS.nodePermissions(node, FS.flagsToPermissionString(flags));
      },MAX_OPEN_FDS:4096,nextfd:function (fd_start, fd_end) {
        fd_start = fd_start || 0;
        fd_end = fd_end || FS.MAX_OPEN_FDS;
        for (var fd = fd_start; fd <= fd_end; fd++) {
          if (!FS.streams[fd]) {
            return fd;
          }
        }
        throw new FS.ErrnoError(ERRNO_CODES.EMFILE);
      },getStream:function (fd) {
        return FS.streams[fd];
      },createStream:function (stream, fd_start, fd_end) {
        if (!FS.FSStream) {
          FS.FSStream = function(){};
          FS.FSStream.prototype = {};
          // compatibility
          Object.defineProperties(FS.FSStream.prototype, {
            object: {
              get: function() { return this.node; },
              set: function(val) { this.node = val; }
            },
            isRead: {
              get: function() { return (this.flags & 2097155) !== 1; }
            },
            isWrite: {
              get: function() { return (this.flags & 2097155) !== 0; }
            },
            isAppend: {
              get: function() { return (this.flags & 1024); }
            }
          });
        }
        if (stream.__proto__) {
          // reuse the object
          stream.__proto__ = FS.FSStream.prototype;
        } else {
          var newStream = new FS.FSStream();
          for (var p in stream) {
            newStream[p] = stream[p];
          }
          stream = newStream;
        }
        var fd = FS.nextfd(fd_start, fd_end);
        stream.fd = fd;
        FS.streams[fd] = stream;
        return stream;
      },closeStream:function (fd) {
        FS.streams[fd] = null;
      },getStreamFromPtr:function (ptr) {
        return FS.streams[ptr - 1];
      },getPtrForStream:function (stream) {
        return stream ? stream.fd + 1 : 0;
      },chrdev_stream_ops:{open:function (stream) {
          var device = FS.getDevice(stream.node.rdev);
          // override node's stream ops with the device's
          stream.stream_ops = device.stream_ops;
          // forward the open call
          if (stream.stream_ops.open) {
            stream.stream_ops.open(stream);
          }
        },llseek:function () {
          throw new FS.ErrnoError(ERRNO_CODES.ESPIPE);
        }},major:function (dev) {
        return ((dev) >> 8);
      },minor:function (dev) {
        return ((dev) & 0xff);
      },makedev:function (ma, mi) {
        return ((ma) << 8 | (mi));
      },registerDevice:function (dev, ops) {
        FS.devices[dev] = { stream_ops: ops };
      },getDevice:function (dev) {
        return FS.devices[dev];
      },getMounts:function (mount) {
        var mounts = [];
        var check = [mount];
  
        while (check.length) {
          var m = check.pop();
  
          mounts.push(m);
  
          check.push.apply(check, m.mounts);
        }
  
        return mounts;
      },syncfs:function (populate, callback) {
        if (typeof(populate) === 'function') {
          callback = populate;
          populate = false;
        }
  
        var mounts = FS.getMounts(FS.root.mount);
        var completed = 0;
  
        function done(err) {
          if (err) {
            if (!done.errored) {
              done.errored = true;
              return callback(err);
            }
            return;
          }
          if (++completed >= mounts.length) {
            callback(null);
          }
        };
  
        // sync all mounts
        mounts.forEach(function (mount) {
          if (!mount.type.syncfs) {
            return done(null);
          }
          mount.type.syncfs(mount, populate, done);
        });
      },mount:function (type, opts, mountpoint) {
        var root = mountpoint === '/';
        var pseudo = !mountpoint;
        var node;
  
        if (root && FS.root) {
          throw new FS.ErrnoError(ERRNO_CODES.EBUSY);
        } else if (!root && !pseudo) {
          var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
  
          mountpoint = lookup.path;  // use the absolute path
          node = lookup.node;
  
          if (FS.isMountpoint(node)) {
            throw new FS.ErrnoError(ERRNO_CODES.EBUSY);
          }
  
          if (!FS.isDir(node.mode)) {
            throw new FS.ErrnoError(ERRNO_CODES.ENOTDIR);
          }
        }
  
        var mount = {
          type: type,
          opts: opts,
          mountpoint: mountpoint,
          mounts: []
        };
  
        // create a root node for the fs
        var mountRoot = type.mount(mount);
        mountRoot.mount = mount;
        mount.root = mountRoot;
  
        if (root) {
          FS.root = mountRoot;
        } else if (node) {
          // set as a mountpoint
          node.mounted = mount;
  
          // add the new mount to the current mount's children
          if (node.mount) {
            node.mount.mounts.push(mount);
          }
        }
  
        return mountRoot;
      },unmount:function (mountpoint) {
        var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
  
        if (!FS.isMountpoint(lookup.node)) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
  
        // destroy the nodes for this mount, and all its child mounts
        var node = lookup.node;
        var mount = node.mounted;
        var mounts = FS.getMounts(mount);
  
        Object.keys(FS.nameTable).forEach(function (hash) {
          var current = FS.nameTable[hash];
  
          while (current) {
            var next = current.name_next;
  
            if (mounts.indexOf(current.mount) !== -1) {
              FS.destroyNode(current);
            }
  
            current = next;
          }
        });
  
        // no longer a mountpoint
        node.mounted = null;
  
        // remove this mount from the child mounts
        var idx = node.mount.mounts.indexOf(mount);
        assert(idx !== -1);
        node.mount.mounts.splice(idx, 1);
      },lookup:function (parent, name) {
        return parent.node_ops.lookup(parent, name);
      },mknod:function (path, mode, dev) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var err = FS.mayCreate(parent, name);
        if (err) {
          throw new FS.ErrnoError(err);
        }
        if (!parent.node_ops.mknod) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        return parent.node_ops.mknod(parent, name, mode, dev);
      },create:function (path, mode) {
        mode = mode !== undefined ? mode : 0666;
        mode &= 4095;
        mode |= 32768;
        return FS.mknod(path, mode, 0);
      },mkdir:function (path, mode) {
        mode = mode !== undefined ? mode : 0777;
        mode &= 511 | 512;
        mode |= 16384;
        return FS.mknod(path, mode, 0);
      },mkdev:function (path, mode, dev) {
        if (typeof(dev) === 'undefined') {
          dev = mode;
          mode = 0666;
        }
        mode |= 8192;
        return FS.mknod(path, mode, dev);
      },symlink:function (oldpath, newpath) {
        var lookup = FS.lookupPath(newpath, { parent: true });
        var parent = lookup.node;
        var newname = PATH.basename(newpath);
        var err = FS.mayCreate(parent, newname);
        if (err) {
          throw new FS.ErrnoError(err);
        }
        if (!parent.node_ops.symlink) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        return parent.node_ops.symlink(parent, newname, oldpath);
      },rename:function (old_path, new_path) {
        var old_dirname = PATH.dirname(old_path);
        var new_dirname = PATH.dirname(new_path);
        var old_name = PATH.basename(old_path);
        var new_name = PATH.basename(new_path);
        // parents must exist
        var lookup, old_dir, new_dir;
        try {
          lookup = FS.lookupPath(old_path, { parent: true });
          old_dir = lookup.node;
          lookup = FS.lookupPath(new_path, { parent: true });
          new_dir = lookup.node;
        } catch (e) {
          throw new FS.ErrnoError(ERRNO_CODES.EBUSY);
        }
        // need to be part of the same mount
        if (old_dir.mount !== new_dir.mount) {
          throw new FS.ErrnoError(ERRNO_CODES.EXDEV);
        }
        // source must exist
        var old_node = FS.lookupNode(old_dir, old_name);
        // old path should not be an ancestor of the new path
        var relative = PATH.relative(old_path, new_dirname);
        if (relative.charAt(0) !== '.') {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        // new path should not be an ancestor of the old path
        relative = PATH.relative(new_path, old_dirname);
        if (relative.charAt(0) !== '.') {
          throw new FS.ErrnoError(ERRNO_CODES.ENOTEMPTY);
        }
        // see if the new path already exists
        var new_node;
        try {
          new_node = FS.lookupNode(new_dir, new_name);
        } catch (e) {
          // not fatal
        }
        // early out if nothing needs to change
        if (old_node === new_node) {
          return;
        }
        // we'll need to delete the old entry
        var isdir = FS.isDir(old_node.mode);
        var err = FS.mayDelete(old_dir, old_name, isdir);
        if (err) {
          throw new FS.ErrnoError(err);
        }
        // need delete permissions if we'll be overwriting.
        // need create permissions if new doesn't already exist.
        err = new_node ?
          FS.mayDelete(new_dir, new_name, isdir) :
          FS.mayCreate(new_dir, new_name);
        if (err) {
          throw new FS.ErrnoError(err);
        }
        if (!old_dir.node_ops.rename) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        if (FS.isMountpoint(old_node) || (new_node && FS.isMountpoint(new_node))) {
          throw new FS.ErrnoError(ERRNO_CODES.EBUSY);
        }
        // if we are going to change the parent, check write permissions
        if (new_dir !== old_dir) {
          err = FS.nodePermissions(old_dir, 'w');
          if (err) {
            throw new FS.ErrnoError(err);
          }
        }
        // remove the node from the lookup hash
        FS.hashRemoveNode(old_node);
        // do the underlying fs rename
        try {
          old_dir.node_ops.rename(old_node, new_dir, new_name);
        } catch (e) {
          throw e;
        } finally {
          // add the node back to the hash (in case node_ops.rename
          // changed its name)
          FS.hashAddNode(old_node);
        }
      },rmdir:function (path) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var err = FS.mayDelete(parent, name, true);
        if (err) {
          throw new FS.ErrnoError(err);
        }
        if (!parent.node_ops.rmdir) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(ERRNO_CODES.EBUSY);
        }
        parent.node_ops.rmdir(parent, name);
        FS.destroyNode(node);
      },readdir:function (path) {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        if (!node.node_ops.readdir) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOTDIR);
        }
        return node.node_ops.readdir(node);
      },unlink:function (path) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var err = FS.mayDelete(parent, name, false);
        if (err) {
          // POSIX says unlink should set EPERM, not EISDIR
          if (err === ERRNO_CODES.EISDIR) err = ERRNO_CODES.EPERM;
          throw new FS.ErrnoError(err);
        }
        if (!parent.node_ops.unlink) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(ERRNO_CODES.EBUSY);
        }
        parent.node_ops.unlink(parent, name);
        FS.destroyNode(node);
      },readlink:function (path) {
        var lookup = FS.lookupPath(path);
        var link = lookup.node;
        if (!link.node_ops.readlink) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        return link.node_ops.readlink(link);
      },stat:function (path, dontFollow) {
        var lookup = FS.lookupPath(path, { follow: !dontFollow });
        var node = lookup.node;
        if (!node.node_ops.getattr) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        return node.node_ops.getattr(node);
      },lstat:function (path) {
        return FS.stat(path, true);
      },chmod:function (path, mode, dontFollow) {
        var node;
        if (typeof path === 'string') {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        node.node_ops.setattr(node, {
          mode: (mode & 4095) | (node.mode & ~4095),
          timestamp: Date.now()
        });
      },lchmod:function (path, mode) {
        FS.chmod(path, mode, true);
      },fchmod:function (fd, mode) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        FS.chmod(stream.node, mode);
      },chown:function (path, uid, gid, dontFollow) {
        var node;
        if (typeof path === 'string') {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        node.node_ops.setattr(node, {
          timestamp: Date.now()
          // we ignore the uid / gid for now
        });
      },lchown:function (path, uid, gid) {
        FS.chown(path, uid, gid, true);
      },fchown:function (fd, uid, gid) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        FS.chown(stream.node, uid, gid);
      },truncate:function (path, len) {
        if (len < 0) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        var node;
        if (typeof path === 'string') {
          var lookup = FS.lookupPath(path, { follow: true });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(ERRNO_CODES.EPERM);
        }
        if (FS.isDir(node.mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.EISDIR);
        }
        if (!FS.isFile(node.mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        var err = FS.nodePermissions(node, 'w');
        if (err) {
          throw new FS.ErrnoError(err);
        }
        node.node_ops.setattr(node, {
          size: len,
          timestamp: Date.now()
        });
      },ftruncate:function (fd, len) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        FS.truncate(stream.node, len);
      },utime:function (path, atime, mtime) {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        node.node_ops.setattr(node, {
          timestamp: Math.max(atime, mtime)
        });
      },open:function (path, flags, mode, fd_start, fd_end) {
        flags = typeof flags === 'string' ? FS.modeStringToFlags(flags) : flags;
        mode = typeof mode === 'undefined' ? 0666 : mode;
        if ((flags & 64)) {
          mode = (mode & 4095) | 32768;
        } else {
          mode = 0;
        }
        var node;
        if (typeof path === 'object') {
          node = path;
        } else {
          path = PATH.normalize(path);
          try {
            var lookup = FS.lookupPath(path, {
              follow: !(flags & 131072)
            });
            node = lookup.node;
          } catch (e) {
            // ignore
          }
        }
        // perhaps we need to create the node
        if ((flags & 64)) {
          if (node) {
            // if O_CREAT and O_EXCL are set, error out if the node already exists
            if ((flags & 128)) {
              throw new FS.ErrnoError(ERRNO_CODES.EEXIST);
            }
          } else {
            // node doesn't exist, try to create it
            node = FS.mknod(path, mode, 0);
          }
        }
        if (!node) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOENT);
        }
        // can't truncate a device
        if (FS.isChrdev(node.mode)) {
          flags &= ~512;
        }
        // check permissions
        var err = FS.mayOpen(node, flags);
        if (err) {
          throw new FS.ErrnoError(err);
        }
        // do truncation if necessary
        if ((flags & 512)) {
          FS.truncate(node, 0);
        }
        // we've already handled these, don't pass down to the underlying vfs
        flags &= ~(128 | 512);
  
        // register the stream with the filesystem
        var stream = FS.createStream({
          node: node,
          path: FS.getPath(node),  // we want the absolute path to the node
          flags: flags,
          seekable: true,
          position: 0,
          stream_ops: node.stream_ops,
          // used by the file family libc calls (fopen, fwrite, ferror, etc.)
          ungotten: [],
          error: false
        }, fd_start, fd_end);
        // call the new stream's open function
        if (stream.stream_ops.open) {
          stream.stream_ops.open(stream);
        }
        if (Module['logReadFiles'] && !(flags & 1)) {
          if (!FS.readFiles) FS.readFiles = {};
          if (!(path in FS.readFiles)) {
            FS.readFiles[path] = 1;
            Module['printErr']('read file: ' + path);
          }
        }
        return stream;
      },close:function (stream) {
        try {
          if (stream.stream_ops.close) {
            stream.stream_ops.close(stream);
          }
        } catch (e) {
          throw e;
        } finally {
          FS.closeStream(stream.fd);
        }
      },llseek:function (stream, offset, whence) {
        if (!stream.seekable || !stream.stream_ops.llseek) {
          throw new FS.ErrnoError(ERRNO_CODES.ESPIPE);
        }
        return stream.stream_ops.llseek(stream, offset, whence);
      },read:function (stream, buffer, offset, length, position) {
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.EISDIR);
        }
        if (!stream.stream_ops.read) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        var seeking = true;
        if (typeof position === 'undefined') {
          position = stream.position;
          seeking = false;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(ERRNO_CODES.ESPIPE);
        }
        var bytesRead = stream.stream_ops.read(stream, buffer, offset, length, position);
        if (!seeking) stream.position += bytesRead;
        return bytesRead;
      },write:function (stream, buffer, offset, length, position, canOwn) {
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.EISDIR);
        }
        if (!stream.stream_ops.write) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        var seeking = true;
        if (typeof position === 'undefined') {
          position = stream.position;
          seeking = false;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(ERRNO_CODES.ESPIPE);
        }
        if (stream.flags & 1024) {
          // seek to the end before writing in append mode
          FS.llseek(stream, 0, 2);
        }
        var bytesWritten = stream.stream_ops.write(stream, buffer, offset, length, position, canOwn);
        if (!seeking) stream.position += bytesWritten;
        return bytesWritten;
      },allocate:function (stream, offset, length) {
        if (offset < 0 || length <= 0) {
          throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(ERRNO_CODES.EBADF);
        }
        if (!FS.isFile(stream.node.mode) && !FS.isDir(node.mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.ENODEV);
        }
        if (!stream.stream_ops.allocate) {
          throw new FS.ErrnoError(ERRNO_CODES.EOPNOTSUPP);
        }
        stream.stream_ops.allocate(stream, offset, length);
      },mmap:function (stream, buffer, offset, length, position, prot, flags) {
        // TODO if PROT is PROT_WRITE, make sure we have write access
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(ERRNO_CODES.EACCES);
        }
        if (!stream.stream_ops.mmap) {
          throw new FS.ErrnoError(ERRNO_CODES.ENODEV);
        }
        return stream.stream_ops.mmap(stream, buffer, offset, length, position, prot, flags);
      },ioctl:function (stream, cmd, arg) {
        if (!stream.stream_ops.ioctl) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOTTY);
        }
        return stream.stream_ops.ioctl(stream, cmd, arg);
      },readFile:function (path, opts) {
        opts = opts || {};
        opts.flags = opts.flags || 'r';
        opts.encoding = opts.encoding || 'binary';
        if (opts.encoding !== 'utf8' && opts.encoding !== 'binary') {
          throw new Error('Invalid encoding type "' + opts.encoding + '"');
        }
        var ret;
        var stream = FS.open(path, opts.flags);
        var stat = FS.stat(path);
        var length = stat.size;
        var buf = new Uint8Array(length);
        FS.read(stream, buf, 0, length, 0);
        if (opts.encoding === 'utf8') {
          ret = '';
          var utf8 = new Runtime.UTF8Processor();
          for (var i = 0; i < length; i++) {
            ret += utf8.processCChar(buf[i]);
          }
        } else if (opts.encoding === 'binary') {
          ret = buf;
        }
        FS.close(stream);
        return ret;
      },writeFile:function (path, data, opts) {
        opts = opts || {};
        opts.flags = opts.flags || 'w';
        opts.encoding = opts.encoding || 'utf8';
        if (opts.encoding !== 'utf8' && opts.encoding !== 'binary') {
          throw new Error('Invalid encoding type "' + opts.encoding + '"');
        }
        var stream = FS.open(path, opts.flags, opts.mode);
        if (opts.encoding === 'utf8') {
          var utf8 = new Runtime.UTF8Processor();
          var buf = new Uint8Array(utf8.processJSString(data));
          FS.write(stream, buf, 0, buf.length, 0, opts.canOwn);
        } else if (opts.encoding === 'binary') {
          FS.write(stream, data, 0, data.length, 0, opts.canOwn);
        }
        FS.close(stream);
      },cwd:function () {
        return FS.currentPath;
      },chdir:function (path) {
        var lookup = FS.lookupPath(path, { follow: true });
        if (!FS.isDir(lookup.node.mode)) {
          throw new FS.ErrnoError(ERRNO_CODES.ENOTDIR);
        }
        var err = FS.nodePermissions(lookup.node, 'x');
        if (err) {
          throw new FS.ErrnoError(err);
        }
        FS.currentPath = lookup.path;
      },createDefaultDirectories:function () {
        FS.mkdir('/tmp');
      },createDefaultDevices:function () {
        // create /dev
        FS.mkdir('/dev');
        // setup /dev/null
        FS.registerDevice(FS.makedev(1, 3), {
          read: function() { return 0; },
          write: function() { return 0; }
        });
        FS.mkdev('/dev/null', FS.makedev(1, 3));
        // setup /dev/tty and /dev/tty1
        // stderr needs to print output using Module['printErr']
        // so we register a second tty just for it.
        TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
        TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
        FS.mkdev('/dev/tty', FS.makedev(5, 0));
        FS.mkdev('/dev/tty1', FS.makedev(6, 0));
        // we're not going to emulate the actual shm device,
        // just create the tmp dirs that reside in it commonly
        FS.mkdir('/dev/shm');
        FS.mkdir('/dev/shm/tmp');
      },createStandardStreams:function () {
        // TODO deprecate the old functionality of a single
        // input / output callback and that utilizes FS.createDevice
        // and instead require a unique set of stream ops
  
        // by default, we symlink the standard streams to the
        // default tty devices. however, if the standard streams
        // have been overwritten we create a unique device for
        // them instead.
        if (Module['stdin']) {
          FS.createDevice('/dev', 'stdin', Module['stdin']);
        } else {
          FS.symlink('/dev/tty', '/dev/stdin');
        }
        if (Module['stdout']) {
          FS.createDevice('/dev', 'stdout', null, Module['stdout']);
        } else {
          FS.symlink('/dev/tty', '/dev/stdout');
        }
        if (Module['stderr']) {
          FS.createDevice('/dev', 'stderr', null, Module['stderr']);
        } else {
          FS.symlink('/dev/tty1', '/dev/stderr');
        }
  
        // open default streams for the stdin, stdout and stderr devices
        var stdin = FS.open('/dev/stdin', 'r');
        HEAP32[((_stdin)>>2)]=FS.getPtrForStream(stdin);
        assert(stdin.fd === 0, 'invalid handle for stdin (' + stdin.fd + ')');
  
        var stdout = FS.open('/dev/stdout', 'w');
        HEAP32[((_stdout)>>2)]=FS.getPtrForStream(stdout);
        assert(stdout.fd === 1, 'invalid handle for stdout (' + stdout.fd + ')');
  
        var stderr = FS.open('/dev/stderr', 'w');
        HEAP32[((_stderr)>>2)]=FS.getPtrForStream(stderr);
        assert(stderr.fd === 2, 'invalid handle for stderr (' + stderr.fd + ')');
      },ensureErrnoError:function () {
        if (FS.ErrnoError) return;
        FS.ErrnoError = function ErrnoError(errno) {
          this.errno = errno;
          for (var key in ERRNO_CODES) {
            if (ERRNO_CODES[key] === errno) {
              this.code = key;
              break;
            }
          }
          this.message = ERRNO_MESSAGES[errno];
        };
        FS.ErrnoError.prototype = new Error();
        FS.ErrnoError.prototype.constructor = FS.ErrnoError;
        // Some errors may happen quite a bit, to avoid overhead we reuse them (and suffer a lack of stack info)
        [ERRNO_CODES.ENOENT].forEach(function(code) {
          FS.genericErrors[code] = new FS.ErrnoError(code);
          FS.genericErrors[code].stack = '<generic error, no stack>';
        });
      },staticInit:function () {
        FS.ensureErrnoError();
  
        FS.nameTable = new Array(4096);
  
        FS.mount(MEMFS, {}, '/');
  
        FS.createDefaultDirectories();
        FS.createDefaultDevices();
      },init:function (input, output, error) {
        assert(!FS.init.initialized, 'FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)');
        FS.init.initialized = true;
  
        FS.ensureErrnoError();
  
        // Allow Module.stdin etc. to provide defaults, if none explicitly passed to us here
        Module['stdin'] = input || Module['stdin'];
        Module['stdout'] = output || Module['stdout'];
        Module['stderr'] = error || Module['stderr'];
  
        FS.createStandardStreams();
      },quit:function () {
        FS.init.initialized = false;
        for (var i = 0; i < FS.streams.length; i++) {
          var stream = FS.streams[i];
          if (!stream) {
            continue;
          }
          FS.close(stream);
        }
      },getMode:function (canRead, canWrite) {
        var mode = 0;
        if (canRead) mode |= 292 | 73;
        if (canWrite) mode |= 146;
        return mode;
      },joinPath:function (parts, forceRelative) {
        var path = PATH.join.apply(null, parts);
        if (forceRelative && path[0] == '/') path = path.substr(1);
        return path;
      },absolutePath:function (relative, base) {
        return PATH.resolve(base, relative);
      },standardizePath:function (path) {
        return PATH.normalize(path);
      },findObject:function (path, dontResolveLastLink) {
        var ret = FS.analyzePath(path, dontResolveLastLink);
        if (ret.exists) {
          return ret.object;
        } else {
          ___setErrNo(ret.error);
          return null;
        }
      },analyzePath:function (path, dontResolveLastLink) {
        // operate from within the context of the symlink's target
        try {
          var lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          path = lookup.path;
        } catch (e) {
        }
        var ret = {
          isRoot: false, exists: false, error: 0, name: null, path: null, object: null,
          parentExists: false, parentPath: null, parentObject: null
        };
        try {
          var lookup = FS.lookupPath(path, { parent: true });
          ret.parentExists = true;
          ret.parentPath = lookup.path;
          ret.parentObject = lookup.node;
          ret.name = PATH.basename(path);
          lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          ret.exists = true;
          ret.path = lookup.path;
          ret.object = lookup.node;
          ret.name = lookup.node.name;
          ret.isRoot = lookup.path === '/';
        } catch (e) {
          ret.error = e.errno;
        };
        return ret;
      },createFolder:function (parent, name, canRead, canWrite) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(canRead, canWrite);
        return FS.mkdir(path, mode);
      },createPath:function (parent, path, canRead, canWrite) {
        parent = typeof parent === 'string' ? parent : FS.getPath(parent);
        var parts = path.split('/').reverse();
        while (parts.length) {
          var part = parts.pop();
          if (!part) continue;
          var current = PATH.join2(parent, part);
          try {
            FS.mkdir(current);
          } catch (e) {
            // ignore EEXIST
          }
          parent = current;
        }
        return current;
      },createFile:function (parent, name, properties, canRead, canWrite) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(canRead, canWrite);
        return FS.create(path, mode);
      },createDataFile:function (parent, name, data, canRead, canWrite, canOwn) {
        var path = name ? PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name) : parent;
        var mode = FS.getMode(canRead, canWrite);
        var node = FS.create(path, mode);
        if (data) {
          if (typeof data === 'string') {
            var arr = new Array(data.length);
            for (var i = 0, len = data.length; i < len; ++i) arr[i] = data.charCodeAt(i);
            data = arr;
          }
          // make sure we can write to the file
          FS.chmod(node, mode | 146);
          var stream = FS.open(node, 'w');
          FS.write(stream, data, 0, data.length, 0, canOwn);
          FS.close(stream);
          FS.chmod(node, mode);
        }
        return node;
      },createDevice:function (parent, name, input, output) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(!!input, !!output);
        if (!FS.createDevice.major) FS.createDevice.major = 64;
        var dev = FS.makedev(FS.createDevice.major++, 0);
        // Create a fake device that a set of stream ops to emulate
        // the old behavior.
        FS.registerDevice(dev, {
          open: function(stream) {
            stream.seekable = false;
          },
          close: function(stream) {
            // flush any pending line data
            if (output && output.buffer && output.buffer.length) {
              output(10);
            }
          },
          read: function(stream, buffer, offset, length, pos /* ignored */) {
            var bytesRead = 0;
            for (var i = 0; i < length; i++) {
              var result;
              try {
                result = input();
              } catch (e) {
                throw new FS.ErrnoError(ERRNO_CODES.EIO);
              }
              if (result === undefined && bytesRead === 0) {
                throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
              }
              if (result === null || result === undefined) break;
              bytesRead++;
              buffer[offset+i] = result;
            }
            if (bytesRead) {
              stream.node.timestamp = Date.now();
            }
            return bytesRead;
          },
          write: function(stream, buffer, offset, length, pos) {
            for (var i = 0; i < length; i++) {
              try {
                output(buffer[offset+i]);
              } catch (e) {
                throw new FS.ErrnoError(ERRNO_CODES.EIO);
              }
            }
            if (length) {
              stream.node.timestamp = Date.now();
            }
            return i;
          }
        });
        return FS.mkdev(path, mode, dev);
      },createLink:function (parent, name, target, canRead, canWrite) {
        var path = PATH.join2(typeof parent === 'string' ? parent : FS.getPath(parent), name);
        return FS.symlink(target, path);
      },forceLoadFile:function (obj) {
        if (obj.isDevice || obj.isFolder || obj.link || obj.contents) return true;
        var success = true;
        if (typeof XMLHttpRequest !== 'undefined') {
          throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
        } else if (Module['read']) {
          // Command-line.
          try {
            // WARNING: Can't read binary files in V8's d8 or tracemonkey's js, as
            //          read() will try to parse UTF8.
            obj.contents = intArrayFromString(Module['read'](obj.url), true);
          } catch (e) {
            success = false;
          }
        } else {
          throw new Error('Cannot load without read() or XMLHttpRequest.');
        }
        if (!success) ___setErrNo(ERRNO_CODES.EIO);
        return success;
      },createLazyFile:function (parent, name, url, canRead, canWrite) {
        if (typeof XMLHttpRequest !== 'undefined') {
          if (!ENVIRONMENT_IS_WORKER) throw 'Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc';
          // Lazy chunked Uint8Array (implements get and length from Uint8Array). Actual getting is abstracted away for eventual reuse.
          function LazyUint8Array() {
            this.lengthKnown = false;
            this.chunks = []; // Loaded chunks. Index is the chunk number
          }
          LazyUint8Array.prototype.get = function LazyUint8Array_get(idx) {
            if (idx > this.length-1 || idx < 0) {
              return undefined;
            }
            var chunkOffset = idx % this.chunkSize;
            var chunkNum = Math.floor(idx / this.chunkSize);
            return this.getter(chunkNum)[chunkOffset];
          }
          LazyUint8Array.prototype.setDataGetter = function LazyUint8Array_setDataGetter(getter) {
            this.getter = getter;
          }
          LazyUint8Array.prototype.cacheLength = function LazyUint8Array_cacheLength() {
              // Find length
              var xhr = new XMLHttpRequest();
              xhr.open('HEAD', url, false);
              xhr.send(null);
              if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
              var datalength = Number(xhr.getResponseHeader("Content-length"));
              var header;
              var hasByteServing = (header = xhr.getResponseHeader("Accept-Ranges")) && header === "bytes";
              var chunkSize = 1024*1024; // Chunk size in bytes
  
              if (!hasByteServing) chunkSize = datalength;
  
              // Function to get a range from the remote URL.
              var doXHR = (function(from, to) {
                if (from > to) throw new Error("invalid range (" + from + ", " + to + ") or no bytes requested!");
                if (to > datalength-1) throw new Error("only " + datalength + " bytes available! programmer error!");
  
                // TODO: Use mozResponseArrayBuffer, responseStream, etc. if available.
                var xhr = new XMLHttpRequest();
                xhr.open('GET', url, false);
                if (datalength !== chunkSize) xhr.setRequestHeader("Range", "bytes=" + from + "-" + to);
  
                // Some hints to the browser that we want binary data.
                if (typeof Uint8Array != 'undefined') xhr.responseType = 'arraybuffer';
                if (xhr.overrideMimeType) {
                  xhr.overrideMimeType('text/plain; charset=x-user-defined');
                }
  
                xhr.send(null);
                if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
                if (xhr.response !== undefined) {
                  return new Uint8Array(xhr.response || []);
                } else {
                  return intArrayFromString(xhr.responseText || '', true);
                }
              });
              var lazyArray = this;
              lazyArray.setDataGetter(function(chunkNum) {
                var start = chunkNum * chunkSize;
                var end = (chunkNum+1) * chunkSize - 1; // including this byte
                end = Math.min(end, datalength-1); // if datalength-1 is selected, this is the last block
                if (typeof(lazyArray.chunks[chunkNum]) === "undefined") {
                  lazyArray.chunks[chunkNum] = doXHR(start, end);
                }
                if (typeof(lazyArray.chunks[chunkNum]) === "undefined") throw new Error("doXHR failed!");
                return lazyArray.chunks[chunkNum];
              });
  
              this._length = datalength;
              this._chunkSize = chunkSize;
              this.lengthKnown = true;
          }
  
          var lazyArray = new LazyUint8Array();
          Object.defineProperty(lazyArray, "length", {
              get: function() {
                  if(!this.lengthKnown) {
                      this.cacheLength();
                  }
                  return this._length;
              }
          });
          Object.defineProperty(lazyArray, "chunkSize", {
              get: function() {
                  if(!this.lengthKnown) {
                      this.cacheLength();
                  }
                  return this._chunkSize;
              }
          });
  
          var properties = { isDevice: false, contents: lazyArray };
        } else {
          var properties = { isDevice: false, url: url };
        }
  
        var node = FS.createFile(parent, name, properties, canRead, canWrite);
        // This is a total hack, but I want to get this lazy file code out of the
        // core of MEMFS. If we want to keep this lazy file concept I feel it should
        // be its own thin LAZYFS proxying calls to MEMFS.
        if (properties.contents) {
          node.contents = properties.contents;
        } else if (properties.url) {
          node.contents = null;
          node.url = properties.url;
        }
        // override each stream op with one that tries to force load the lazy file first
        var stream_ops = {};
        var keys = Object.keys(node.stream_ops);
        keys.forEach(function(key) {
          var fn = node.stream_ops[key];
          stream_ops[key] = function forceLoadLazyFile() {
            if (!FS.forceLoadFile(node)) {
              throw new FS.ErrnoError(ERRNO_CODES.EIO);
            }
            return fn.apply(null, arguments);
          };
        });
        // use a custom read function
        stream_ops.read = function stream_ops_read(stream, buffer, offset, length, position) {
          if (!FS.forceLoadFile(node)) {
            throw new FS.ErrnoError(ERRNO_CODES.EIO);
          }
          var contents = stream.node.contents;
          if (position >= contents.length)
            return 0;
          var size = Math.min(contents.length - position, length);
          assert(size >= 0);
          if (contents.slice) { // normal array
            for (var i = 0; i < size; i++) {
              buffer[offset + i] = contents[position + i];
            }
          } else {
            for (var i = 0; i < size; i++) { // LazyUint8Array from sync binary XHR
              buffer[offset + i] = contents.get(position + i);
            }
          }
          return size;
        };
        node.stream_ops = stream_ops;
        return node;
      },createPreloadedFile:function (parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn) {
        Browser.init();
        // TODO we should allow people to just pass in a complete filename instead
        // of parent and name being that we just join them anyways
        var fullname = name ? PATH.resolve(PATH.join2(parent, name)) : parent;
        function processData(byteArray) {
          function finish(byteArray) {
            if (!dontCreateFile) {
              FS.createDataFile(parent, name, byteArray, canRead, canWrite, canOwn);
            }
            if (onload) onload();
            removeRunDependency('cp ' + fullname);
          }
          var handled = false;
          Module['preloadPlugins'].forEach(function(plugin) {
            if (handled) return;
            if (plugin['canHandle'](fullname)) {
              plugin['handle'](byteArray, fullname, finish, function() {
                if (onerror) onerror();
                removeRunDependency('cp ' + fullname);
              });
              handled = true;
            }
          });
          if (!handled) finish(byteArray);
        }
        addRunDependency('cp ' + fullname);
        if (typeof url == 'string') {
          Browser.asyncLoad(url, function(byteArray) {
            processData(byteArray);
          }, onerror);
        } else {
          processData(url);
        }
      },indexedDB:function () {
        return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
      },DB_NAME:function () {
        return 'EM_FS_' + window.location.pathname;
      },DB_VERSION:20,DB_STORE_NAME:"FILE_DATA",saveFilesToDB:function (paths, onload, onerror) {
        onload = onload || function(){};
        onerror = onerror || function(){};
        var indexedDB = FS.indexedDB();
        try {
          var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
        } catch (e) {
          return onerror(e);
        }
        openRequest.onupgradeneeded = function openRequest_onupgradeneeded() {
          console.log('creating db');
          var db = openRequest.result;
          db.createObjectStore(FS.DB_STORE_NAME);
        };
        openRequest.onsuccess = function openRequest_onsuccess() {
          var db = openRequest.result;
          var transaction = db.transaction([FS.DB_STORE_NAME], 'readwrite');
          var files = transaction.objectStore(FS.DB_STORE_NAME);
          var ok = 0, fail = 0, total = paths.length;
          function finish() {
            if (fail == 0) onload(); else onerror();
          }
          paths.forEach(function(path) {
            var putRequest = files.put(FS.analyzePath(path).object.contents, path);
            putRequest.onsuccess = function putRequest_onsuccess() { ok++; if (ok + fail == total) finish() };
            putRequest.onerror = function putRequest_onerror() { fail++; if (ok + fail == total) finish() };
          });
          transaction.onerror = onerror;
        };
        openRequest.onerror = onerror;
      },loadFilesFromDB:function (paths, onload, onerror) {
        onload = onload || function(){};
        onerror = onerror || function(){};
        var indexedDB = FS.indexedDB();
        try {
          var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION);
        } catch (e) {
          return onerror(e);
        }
        openRequest.onupgradeneeded = onerror; // no database to load from
        openRequest.onsuccess = function openRequest_onsuccess() {
          var db = openRequest.result;
          try {
            var transaction = db.transaction([FS.DB_STORE_NAME], 'readonly');
          } catch(e) {
            onerror(e);
            return;
          }
          var files = transaction.objectStore(FS.DB_STORE_NAME);
          var ok = 0, fail = 0, total = paths.length;
          function finish() {
            if (fail == 0) onload(); else onerror();
          }
          paths.forEach(function(path) {
            var getRequest = files.get(path);
            getRequest.onsuccess = function getRequest_onsuccess() {
              if (FS.analyzePath(path).exists) {
                FS.unlink(path);
              }
              FS.createDataFile(PATH.dirname(path), PATH.basename(path), getRequest.result, true, true, true);
              ok++;
              if (ok + fail == total) finish();
            };
            getRequest.onerror = function getRequest_onerror() { fail++; if (ok + fail == total) finish() };
          });
          transaction.onerror = onerror;
        };
        openRequest.onerror = onerror;
      }};
  
  var Browser={mainLoop:{scheduler:null,method:"",shouldPause:false,paused:false,queue:[],pause:function () {
          Browser.mainLoop.shouldPause = true;
        },resume:function () {
          if (Browser.mainLoop.paused) {
            Browser.mainLoop.paused = false;
            Browser.mainLoop.scheduler();
          }
          Browser.mainLoop.shouldPause = false;
        },updateStatus:function () {
          if (Module['setStatus']) {
            var message = Module['statusMessage'] || 'Please wait...';
            var remaining = Browser.mainLoop.remainingBlockers;
            var expected = Browser.mainLoop.expectedBlockers;
            if (remaining) {
              if (remaining < expected) {
                Module['setStatus'](message + ' (' + (expected - remaining) + '/' + expected + ')');
              } else {
                Module['setStatus'](message);
              }
            } else {
              Module['setStatus']('');
            }
          }
        }},isFullScreen:false,pointerLock:false,moduleContextCreatedCallbacks:[],workers:[],init:function () {
        if (!Module["preloadPlugins"]) Module["preloadPlugins"] = []; // needs to exist even in workers
  
        if (Browser.initted || ENVIRONMENT_IS_WORKER) return;
        Browser.initted = true;
  
        try {
          new Blob();
          Browser.hasBlobConstructor = true;
        } catch(e) {
          Browser.hasBlobConstructor = false;
          console.log("warning: no blob constructor, cannot create blobs with mimetypes");
        }
        Browser.BlobBuilder = typeof MozBlobBuilder != "undefined" ? MozBlobBuilder : (typeof WebKitBlobBuilder != "undefined" ? WebKitBlobBuilder : (!Browser.hasBlobConstructor ? console.log("warning: no BlobBuilder") : null));
        Browser.URLObject = typeof window != "undefined" ? (window.URL ? window.URL : window.webkitURL) : undefined;
        if (!Module.noImageDecoding && typeof Browser.URLObject === 'undefined') {
          console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available.");
          Module.noImageDecoding = true;
        }
  
        // Support for plugins that can process preloaded files. You can add more of these to
        // your app by creating and appending to Module.preloadPlugins.
        //
        // Each plugin is asked if it can handle a file based on the file's name. If it can,
        // it is given the file's raw data. When it is done, it calls a callback with the file's
        // (possibly modified) data. For example, a plugin might decompress a file, or it
        // might create some side data structure for use later (like an Image element, etc.).
  
        var imagePlugin = {};
        imagePlugin['canHandle'] = function imagePlugin_canHandle(name) {
          return !Module.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(name);
        };
        imagePlugin['handle'] = function imagePlugin_handle(byteArray, name, onload, onerror) {
          var b = null;
          if (Browser.hasBlobConstructor) {
            try {
              b = new Blob([byteArray], { type: Browser.getMimetype(name) });
              if (b.size !== byteArray.length) { // Safari bug #118630
                // Safari's Blob can only take an ArrayBuffer
                b = new Blob([(new Uint8Array(byteArray)).buffer], { type: Browser.getMimetype(name) });
              }
            } catch(e) {
              Runtime.warnOnce('Blob constructor present but fails: ' + e + '; falling back to blob builder');
            }
          }
          if (!b) {
            var bb = new Browser.BlobBuilder();
            bb.append((new Uint8Array(byteArray)).buffer); // we need to pass a buffer, and must copy the array to get the right data range
            b = bb.getBlob();
          }
          var url = Browser.URLObject.createObjectURL(b);
          var img = new Image();
          img.onload = function img_onload() {
            assert(img.complete, 'Image ' + name + ' could not be decoded');
            var canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            var ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            Module["preloadedImages"][name] = canvas;
            Browser.URLObject.revokeObjectURL(url);
            if (onload) onload(byteArray);
          };
          img.onerror = function img_onerror(event) {
            console.log('Image ' + url + ' could not be decoded');
            if (onerror) onerror();
          };
          img.src = url;
        };
        Module['preloadPlugins'].push(imagePlugin);
  
        var audioPlugin = {};
        audioPlugin['canHandle'] = function audioPlugin_canHandle(name) {
          return !Module.noAudioDecoding && name.substr(-4) in { '.ogg': 1, '.wav': 1, '.mp3': 1 };
        };
        audioPlugin['handle'] = function audioPlugin_handle(byteArray, name, onload, onerror) {
          var done = false;
          function finish(audio) {
            if (done) return;
            done = true;
            Module["preloadedAudios"][name] = audio;
            if (onload) onload(byteArray);
          }
          function fail() {
            if (done) return;
            done = true;
            Module["preloadedAudios"][name] = new Audio(); // empty shim
            if (onerror) onerror();
          }
          if (Browser.hasBlobConstructor) {
            try {
              var b = new Blob([byteArray], { type: Browser.getMimetype(name) });
            } catch(e) {
              return fail();
            }
            var url = Browser.URLObject.createObjectURL(b); // XXX we never revoke this!
            var audio = new Audio();
            audio.addEventListener('canplaythrough', function() { finish(audio) }, false); // use addEventListener due to chromium bug 124926
            audio.onerror = function audio_onerror(event) {
              if (done) return;
              console.log('warning: browser could not fully decode audio ' + name + ', trying slower base64 approach');
              function encode64(data) {
                var BASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
                var PAD = '=';
                var ret = '';
                var leftchar = 0;
                var leftbits = 0;
                for (var i = 0; i < data.length; i++) {
                  leftchar = (leftchar << 8) | data[i];
                  leftbits += 8;
                  while (leftbits >= 6) {
                    var curr = (leftchar >> (leftbits-6)) & 0x3f;
                    leftbits -= 6;
                    ret += BASE[curr];
                  }
                }
                if (leftbits == 2) {
                  ret += BASE[(leftchar&3) << 4];
                  ret += PAD + PAD;
                } else if (leftbits == 4) {
                  ret += BASE[(leftchar&0xf) << 2];
                  ret += PAD;
                }
                return ret;
              }
              audio.src = 'data:audio/x-' + name.substr(-3) + ';base64,' + encode64(byteArray);
              finish(audio); // we don't wait for confirmation this worked - but it's worth trying
            };
            audio.src = url;
            // workaround for chrome bug 124926 - we do not always get oncanplaythrough or onerror
            Browser.safeSetTimeout(function() {
              finish(audio); // try to use it even though it is not necessarily ready to play
            }, 10000);
          } else {
            return fail();
          }
        };
        Module['preloadPlugins'].push(audioPlugin);
  
        // Canvas event setup
  
        var canvas = Module['canvas'];
        canvas.requestPointerLock = canvas['requestPointerLock'] ||
                                    canvas['mozRequestPointerLock'] ||
                                    canvas['webkitRequestPointerLock'];
        canvas.exitPointerLock = document['exitPointerLock'] ||
                                 document['mozExitPointerLock'] ||
                                 document['webkitExitPointerLock'] ||
                                 function(){}; // no-op if function does not exist
        canvas.exitPointerLock = canvas.exitPointerLock.bind(document);
  
        function pointerLockChange() {
          Browser.pointerLock = document['pointerLockElement'] === canvas ||
                                document['mozPointerLockElement'] === canvas ||
                                document['webkitPointerLockElement'] === canvas;
        }
  
        document.addEventListener('pointerlockchange', pointerLockChange, false);
        document.addEventListener('mozpointerlockchange', pointerLockChange, false);
        document.addEventListener('webkitpointerlockchange', pointerLockChange, false);
  
        if (Module['elementPointerLock']) {
          canvas.addEventListener("click", function(ev) {
            if (!Browser.pointerLock && canvas.requestPointerLock) {
              canvas.requestPointerLock();
              ev.preventDefault();
            }
          }, false);
        }
      },createContext:function (canvas, useWebGL, setInModule, webGLContextAttributes) {
        var ctx;
        try {
          if (useWebGL) {
            var contextAttributes = {
              antialias: false,
              alpha: false
            };
  
            if (webGLContextAttributes) {
              for (var attribute in webGLContextAttributes) {
                contextAttributes[attribute] = webGLContextAttributes[attribute];
              }
            }
  
  
            var errorInfo = '?';
            function onContextCreationError(event) {
              errorInfo = event.statusMessage || errorInfo;
            }
            canvas.addEventListener('webglcontextcreationerror', onContextCreationError, false);
            try {
              ['experimental-webgl', 'webgl'].some(function(webglId) {
                return ctx = canvas.getContext(webglId, contextAttributes);
              });
            } finally {
              canvas.removeEventListener('webglcontextcreationerror', onContextCreationError, false);
            }
          } else {
            ctx = canvas.getContext('2d');
          }
          if (!ctx) throw ':(';
        } catch (e) {
          Module.print('Could not create canvas: ' + [errorInfo, e]);
          return null;
        }
        if (useWebGL) {
          // Set the background of the WebGL canvas to black
          canvas.style.backgroundColor = "black";
  
          // Warn on context loss
          canvas.addEventListener('webglcontextlost', function(event) {
            alert('WebGL context lost. You will need to reload the page.');
          }, false);
        }
        if (setInModule) {
          GLctx = Module.ctx = ctx;
          Module.useWebGL = useWebGL;
          Browser.moduleContextCreatedCallbacks.forEach(function(callback) { callback() });
          Browser.init();
        }
        return ctx;
      },destroyContext:function (canvas, useWebGL, setInModule) {},fullScreenHandlersInstalled:false,lockPointer:undefined,resizeCanvas:undefined,requestFullScreen:function (lockPointer, resizeCanvas) {
        Browser.lockPointer = lockPointer;
        Browser.resizeCanvas = resizeCanvas;
        if (typeof Browser.lockPointer === 'undefined') Browser.lockPointer = true;
        if (typeof Browser.resizeCanvas === 'undefined') Browser.resizeCanvas = false;
  
        var canvas = Module['canvas'];
        function fullScreenChange() {
          Browser.isFullScreen = false;
          if ((document['webkitFullScreenElement'] || document['webkitFullscreenElement'] ||
               document['mozFullScreenElement'] || document['mozFullscreenElement'] ||
               document['fullScreenElement'] || document['fullscreenElement']) === canvas) {
            canvas.cancelFullScreen = document['cancelFullScreen'] ||
                                      document['mozCancelFullScreen'] ||
                                      document['webkitCancelFullScreen'];
            canvas.cancelFullScreen = canvas.cancelFullScreen.bind(document);
            if (Browser.lockPointer) canvas.requestPointerLock();
            Browser.isFullScreen = true;
            if (Browser.resizeCanvas) Browser.setFullScreenCanvasSize();
          } else if (Browser.resizeCanvas){
            Browser.setWindowedCanvasSize();
          }
          if (Module['onFullScreen']) Module['onFullScreen'](Browser.isFullScreen);
        }
  
        if (!Browser.fullScreenHandlersInstalled) {
          Browser.fullScreenHandlersInstalled = true;
          document.addEventListener('fullscreenchange', fullScreenChange, false);
          document.addEventListener('mozfullscreenchange', fullScreenChange, false);
          document.addEventListener('webkitfullscreenchange', fullScreenChange, false);
        }
  
        canvas.requestFullScreen = canvas['requestFullScreen'] ||
                                   canvas['mozRequestFullScreen'] ||
                                   (canvas['webkitRequestFullScreen'] ? function() { canvas['webkitRequestFullScreen'](Element['ALLOW_KEYBOARD_INPUT']) } : null);
        canvas.requestFullScreen();
      },requestAnimationFrame:function requestAnimationFrame(func) {
        if (typeof window === 'undefined') { // Provide fallback to setTimeout if window is undefined (e.g. in Node.js)
          setTimeout(func, 1000/60);
        } else {
          if (!window.requestAnimationFrame) {
            window.requestAnimationFrame = window['requestAnimationFrame'] ||
                                           window['mozRequestAnimationFrame'] ||
                                           window['webkitRequestAnimationFrame'] ||
                                           window['msRequestAnimationFrame'] ||
                                           window['oRequestAnimationFrame'] ||
                                           window['setTimeout'];
          }
          window.requestAnimationFrame(func);
        }
      },safeCallback:function (func) {
        return function() {
          if (!ABORT) return func.apply(null, arguments);
        };
      },safeRequestAnimationFrame:function (func) {
        return Browser.requestAnimationFrame(function() {
          if (!ABORT) func();
        });
      },safeSetTimeout:function (func, timeout) {
        return setTimeout(function() {
          if (!ABORT) func();
        }, timeout);
      },safeSetInterval:function (func, timeout) {
        return setInterval(function() {
          if (!ABORT) func();
        }, timeout);
      },getMimetype:function (name) {
        return {
          'jpg': 'image/jpeg',
          'jpeg': 'image/jpeg',
          'png': 'image/png',
          'bmp': 'image/bmp',
          'ogg': 'audio/ogg',
          'wav': 'audio/wav',
          'mp3': 'audio/mpeg'
        }[name.substr(name.lastIndexOf('.')+1)];
      },getUserMedia:function (func) {
        if(!window.getUserMedia) {
          window.getUserMedia = navigator['getUserMedia'] ||
                                navigator['mozGetUserMedia'];
        }
        window.getUserMedia(func);
      },getMovementX:function (event) {
        return event['movementX'] ||
               event['mozMovementX'] ||
               event['webkitMovementX'] ||
               0;
      },getMovementY:function (event) {
        return event['movementY'] ||
               event['mozMovementY'] ||
               event['webkitMovementY'] ||
               0;
      },getMouseWheelDelta:function (event) {
        return Math.max(-1, Math.min(1, event.type === 'DOMMouseScroll' ? event.detail : -event.wheelDelta));
      },mouseX:0,mouseY:0,mouseMovementX:0,mouseMovementY:0,calculateMouseEvent:function (event) { // event should be mousemove, mousedown or mouseup
        if (Browser.pointerLock) {
          // When the pointer is locked, calculate the coordinates
          // based on the movement of the mouse.
          // Workaround for Firefox bug 764498
          if (event.type != 'mousemove' &&
              ('mozMovementX' in event)) {
            Browser.mouseMovementX = Browser.mouseMovementY = 0;
          } else {
            Browser.mouseMovementX = Browser.getMovementX(event);
            Browser.mouseMovementY = Browser.getMovementY(event);
          }
          
          // check if SDL is available
          if (typeof SDL != "undefined") {
          	Browser.mouseX = SDL.mouseX + Browser.mouseMovementX;
          	Browser.mouseY = SDL.mouseY + Browser.mouseMovementY;
          } else {
          	// just add the mouse delta to the current absolut mouse position
          	// FIXME: ideally this should be clamped against the canvas size and zero
          	Browser.mouseX += Browser.mouseMovementX;
          	Browser.mouseY += Browser.mouseMovementY;
          }        
        } else {
          // Otherwise, calculate the movement based on the changes
          // in the coordinates.
          var rect = Module["canvas"].getBoundingClientRect();
          var x, y;
          
          // Neither .scrollX or .pageXOffset are defined in a spec, but
          // we prefer .scrollX because it is currently in a spec draft.
          // (see: http://www.w3.org/TR/2013/WD-cssom-view-20131217/)
          var scrollX = ((typeof window.scrollX !== 'undefined') ? window.scrollX : window.pageXOffset);
          var scrollY = ((typeof window.scrollY !== 'undefined') ? window.scrollY : window.pageYOffset);
          if (event.type == 'touchstart' ||
              event.type == 'touchend' ||
              event.type == 'touchmove') {
            var t = event.touches.item(0);
            if (t) {
              x = t.pageX - (scrollX + rect.left);
              y = t.pageY - (scrollY + rect.top);
            } else {
              return;
            }
          } else {
            x = event.pageX - (scrollX + rect.left);
            y = event.pageY - (scrollY + rect.top);
          }
  
          // the canvas might be CSS-scaled compared to its backbuffer;
          // SDL-using content will want mouse coordinates in terms
          // of backbuffer units.
          var cw = Module["canvas"].width;
          var ch = Module["canvas"].height;
          x = x * (cw / rect.width);
          y = y * (ch / rect.height);
  
          Browser.mouseMovementX = x - Browser.mouseX;
          Browser.mouseMovementY = y - Browser.mouseY;
          Browser.mouseX = x;
          Browser.mouseY = y;
        }
      },xhrLoad:function (url, onload, onerror) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'arraybuffer';
        xhr.onload = function xhr_onload() {
          if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
            onload(xhr.response);
          } else {
            onerror();
          }
        };
        xhr.onerror = onerror;
        xhr.send(null);
      },asyncLoad:function (url, onload, onerror, noRunDep) {
        Browser.xhrLoad(url, function(arrayBuffer) {
          assert(arrayBuffer, 'Loading data file "' + url + '" failed (no arrayBuffer).');
          onload(new Uint8Array(arrayBuffer));
          if (!noRunDep) removeRunDependency('al ' + url);
        }, function(event) {
          if (onerror) {
            onerror();
          } else {
            throw 'Loading data file "' + url + '" failed.';
          }
        });
        if (!noRunDep) addRunDependency('al ' + url);
      },resizeListeners:[],updateResizeListeners:function () {
        var canvas = Module['canvas'];
        Browser.resizeListeners.forEach(function(listener) {
          listener(canvas.width, canvas.height);
        });
      },setCanvasSize:function (width, height, noUpdates) {
        var canvas = Module['canvas'];
        canvas.width = width;
        canvas.height = height;
        if (!noUpdates) Browser.updateResizeListeners();
      },windowedWidth:0,windowedHeight:0,setFullScreenCanvasSize:function () {
        var canvas = Module['canvas'];
        this.windowedWidth = canvas.width;
        this.windowedHeight = canvas.height;
        canvas.width = screen.width;
        canvas.height = screen.height;
        // check if SDL is available   
        if (typeof SDL != "undefined") {
        	var flags = HEAPU32[((SDL.screen+Runtime.QUANTUM_SIZE*0)>>2)];
        	flags = flags | 0x00800000; // set SDL_FULLSCREEN flag
        	HEAP32[((SDL.screen+Runtime.QUANTUM_SIZE*0)>>2)]=flags
        }
        Browser.updateResizeListeners();
      },setWindowedCanvasSize:function () {
        var canvas = Module['canvas'];
        canvas.width = this.windowedWidth;
        canvas.height = this.windowedHeight;
        // check if SDL is available       
        if (typeof SDL != "undefined") {
        	var flags = HEAPU32[((SDL.screen+Runtime.QUANTUM_SIZE*0)>>2)];
        	flags = flags & ~0x00800000; // clear SDL_FULLSCREEN flag
        	HEAP32[((SDL.screen+Runtime.QUANTUM_SIZE*0)>>2)]=flags
        }
        Browser.updateResizeListeners();
      }};var SDL={defaults:{width:320,height:200,copyOnLock:true},version:null,surfaces:{},canvasPool:[],events:[],fonts:[null],audios:[null],rwops:[null],music:{audio:null,volume:1},mixerFrequency:22050,mixerFormat:32784,mixerNumChannels:2,mixerChunkSize:1024,channelMinimumNumber:0,GL:false,glAttributes:{0:3,1:3,2:2,3:0,4:0,5:1,6:16,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:1,16:0,17:0,18:0},keyboardState:null,keyboardMap:{},canRequestFullscreen:false,isRequestingFullscreen:false,textInput:false,startTime:null,initFlags:0,buttonState:0,modState:0,DOMButtons:[0,0,0],DOMEventToSDLEvent:{},keyCodes:{16:1249,17:1248,18:1250,33:1099,34:1102,37:1104,38:1106,39:1103,40:1105,46:127,96:1112,97:1113,98:1114,99:1115,100:1116,101:1117,102:1118,103:1119,104:1120,105:1121,112:1082,113:1083,114:1084,115:1085,116:1086,117:1087,118:1088,119:1089,120:1090,121:1091,122:1092,123:1093,173:45,188:44,190:46,191:47,192:96},scanCodes:{8:42,9:43,13:40,27:41,32:44,44:54,46:55,47:56,48:39,49:30,50:31,51:32,52:33,53:34,54:35,55:36,56:37,57:38,59:51,61:46,91:47,92:49,93:48,96:52,97:4,98:5,99:6,100:7,101:8,102:9,103:10,104:11,105:12,106:13,107:14,108:15,109:16,110:17,111:18,112:19,113:20,114:21,115:22,116:23,117:24,118:25,119:26,120:27,121:28,122:29,305:224,308:226},loadRect:function (rect) {
        return {
          x: HEAP32[((rect + 0)>>2)],
          y: HEAP32[((rect + 4)>>2)],
          w: HEAP32[((rect + 8)>>2)],
          h: HEAP32[((rect + 12)>>2)]
        };
      },loadColorToCSSRGB:function (color) {
        var rgba = HEAP32[((color)>>2)];
        return 'rgb(' + (rgba&255) + ',' + ((rgba >> 8)&255) + ',' + ((rgba >> 16)&255) + ')';
      },loadColorToCSSRGBA:function (color) {
        var rgba = HEAP32[((color)>>2)];
        return 'rgba(' + (rgba&255) + ',' + ((rgba >> 8)&255) + ',' + ((rgba >> 16)&255) + ',' + (((rgba >> 24)&255)/255) + ')';
      },translateColorToCSSRGBA:function (rgba) {
        return 'rgba(' + (rgba&0xff) + ',' + (rgba>>8 & 0xff) + ',' + (rgba>>16 & 0xff) + ',' + (rgba>>>24)/0xff + ')';
      },translateRGBAToCSSRGBA:function (r, g, b, a) {
        return 'rgba(' + (r&0xff) + ',' + (g&0xff) + ',' + (b&0xff) + ',' + (a&0xff)/255 + ')';
      },translateRGBAToColor:function (r, g, b, a) {
        return r | g << 8 | b << 16 | a << 24;
      },makeSurface:function (width, height, flags, usePageCanvas, source, rmask, gmask, bmask, amask) {
        flags = flags || 0;
        var is_SDL_HWSURFACE = flags & 0x00000001;
        var is_SDL_HWPALETTE = flags & 0x00200000;
        var is_SDL_OPENGL = flags & 0x04000000;
  
        var surf = _malloc(60);
        var pixelFormat = _malloc(44);
        //surface with SDL_HWPALETTE flag is 8bpp surface (1 byte)
        var bpp = is_SDL_HWPALETTE ? 1 : 4;
        var buffer = 0;
  
        // preemptively initialize this for software surfaces,
        // otherwise it will be lazily initialized inside of SDL_LockSurface
        if (!is_SDL_HWSURFACE && !is_SDL_OPENGL) {
          buffer = _malloc(width * height * 4);
        }
  
        HEAP32[((surf)>>2)]=flags;
        HEAP32[(((surf)+(4))>>2)]=pixelFormat;
        HEAP32[(((surf)+(8))>>2)]=width;
        HEAP32[(((surf)+(12))>>2)]=height;
        HEAP32[(((surf)+(16))>>2)]=width * bpp;  // assuming RGBA or indexed for now,
                                                                                          // since that is what ImageData gives us in browsers
        HEAP32[(((surf)+(20))>>2)]=buffer;
        HEAP32[(((surf)+(36))>>2)]=0;
        HEAP32[(((surf)+(56))>>2)]=1;
  
        HEAP32[((pixelFormat)>>2)]=0 /* XXX missing C define SDL_PIXELFORMAT_RGBA8888 */;
        HEAP32[(((pixelFormat)+(4))>>2)]=0;// TODO
        HEAP8[(((pixelFormat)+(8))|0)]=bpp * 8;
        HEAP8[(((pixelFormat)+(9))|0)]=bpp;
  
        HEAP32[(((pixelFormat)+(12))>>2)]=rmask || 0x000000ff;
        HEAP32[(((pixelFormat)+(16))>>2)]=gmask || 0x0000ff00;
        HEAP32[(((pixelFormat)+(20))>>2)]=bmask || 0x00ff0000;
        HEAP32[(((pixelFormat)+(24))>>2)]=amask || 0xff000000;
  
        // Decide if we want to use WebGL or not
        SDL.GL = SDL.GL || is_SDL_OPENGL;
        var canvas;
        if (!usePageCanvas) {
          if (SDL.canvasPool.length > 0) {
            canvas = SDL.canvasPool.pop();
          } else {
            canvas = document.createElement('canvas');
          }
          canvas.width = width;
          canvas.height = height;
        } else {
          canvas = Module['canvas'];
        }
  
        var webGLContextAttributes = {
          antialias: ((SDL.glAttributes[13 /*SDL_GL_MULTISAMPLEBUFFERS*/] != 0) && (SDL.glAttributes[14 /*SDL_GL_MULTISAMPLESAMPLES*/] > 1)),
          depth: (SDL.glAttributes[6 /*SDL_GL_DEPTH_SIZE*/] > 0),
          stencil: (SDL.glAttributes[7 /*SDL_GL_STENCIL_SIZE*/] > 0)
        };
        
        var ctx = Browser.createContext(canvas, is_SDL_OPENGL, usePageCanvas, webGLContextAttributes);
              
        SDL.surfaces[surf] = {
          width: width,
          height: height,
          canvas: canvas,
          ctx: ctx,
          surf: surf,
          buffer: buffer,
          pixelFormat: pixelFormat,
          alpha: 255,
          flags: flags,
          locked: 0,
          usePageCanvas: usePageCanvas,
          source: source,
  
          isFlagSet: function(flag) {
            return flags & flag;
          }
        };
  
        return surf;
      },copyIndexedColorData:function (surfData, rX, rY, rW, rH) {
        // HWPALETTE works with palette
        // setted by SDL_SetColors
        if (!surfData.colors) {
          return;
        }
        
        var fullWidth  = Module['canvas'].width;
        var fullHeight = Module['canvas'].height;
  
        var startX  = rX || 0;
        var startY  = rY || 0;
        var endX    = (rW || (fullWidth - startX)) + startX;
        var endY    = (rH || (fullHeight - startY)) + startY;
        
        var buffer  = surfData.buffer;
        var data    = surfData.image.data;
        var colors  = surfData.colors;
  
        for (var y = startY; y < endY; ++y) {
          var indexBase = y * fullWidth;
          var colorBase = indexBase * 4;
          for (var x = startX; x < endX; ++x) {
            // HWPALETTE have only 256 colors (not rgba)
            var index = HEAPU8[((buffer + indexBase + x)|0)] * 3;
            var colorOffset = colorBase + x * 4;
  
            data[colorOffset   ] = colors[index   ];
            data[colorOffset +1] = colors[index +1];
            data[colorOffset +2] = colors[index +2];
            //unused: data[colorOffset +3] = color[index +3];
          }
        }
      },freeSurface:function (surf) {
        var refcountPointer = surf + 56;
        var refcount = HEAP32[((refcountPointer)>>2)];
        if (refcount > 1) {
          HEAP32[((refcountPointer)>>2)]=refcount - 1;
          return;
        }
  
        var info = SDL.surfaces[surf];
        if (!info.usePageCanvas && info.canvas) SDL.canvasPool.push(info.canvas);
        if (info.buffer) _free(info.buffer);
        _free(info.pixelFormat);
        _free(surf);
        SDL.surfaces[surf] = null;
      },touchX:0,touchY:0,savedKeydown:null,receiveEvent:function (event) {
        switch(event.type) {
          case 'touchstart':
            event.preventDefault();
            var touch = event.touches[0];
            touchX = touch.pageX;
            touchY = touch.pageY;
            var event = {
              type: 'mousedown',
              button: 0,
              pageX: touchX,
              pageY: touchY
            };
            SDL.DOMButtons[0] = 1;
            SDL.events.push(event);
            break;
          case 'touchmove':
            event.preventDefault();
            var touch = event.touches[0];
            touchX = touch.pageX;
            touchY = touch.pageY;
            event = {
              type: 'mousemove',
              button: 0,
              pageX: touchX,
              pageY: touchY
            };
            SDL.events.push(event);
            break;
          case 'touchend':
            event.preventDefault();
            event = {
              type: 'mouseup',
              button: 0,
              pageX: touchX,
              pageY: touchY
            };
            SDL.DOMButtons[0] = 0;
            SDL.events.push(event);
            break;
          case 'mousemove':
            if (Browser.pointerLock) {
              // workaround for firefox bug 750111
              if ('mozMovementX' in event) {
                event['movementX'] = event['mozMovementX'];
                event['movementY'] = event['mozMovementY'];
              }
              // workaround for Firefox bug 782777
              if (event['movementX'] == 0 && event['movementY'] == 0) {
                // ignore a mousemove event if it doesn't contain any movement info
                // (without pointer lock, we infer movement from pageX/pageY, so this check is unnecessary)
                event.preventDefault();
                return;
              }
            }
            // fall through
          case 'keydown': case 'keyup': case 'keypress': case 'mousedown': case 'mouseup': case 'DOMMouseScroll': case 'mousewheel':
            // If we preventDefault on keydown events, the subsequent keypress events
            // won't fire. However, it's fine (and in some cases necessary) to
            // preventDefault for keys that don't generate a character. Otherwise,
            // preventDefault is the right thing to do in general.
            if (event.type !== 'keydown' || (!SDL.unicode && !SDL.textInput) || (event.keyCode === 8 /* backspace */ || event.keyCode === 9 /* tab */)) {
              event.preventDefault();
            }
  
            if (event.type == 'DOMMouseScroll' || event.type == 'mousewheel') {
              var button = Browser.getMouseWheelDelta(event) > 0 ? 4 : 3;
              var event2 = {
                type: 'mousedown',
                button: button,
                pageX: event.pageX,
                pageY: event.pageY
              };
              SDL.events.push(event2);
              event = {
                type: 'mouseup',
                button: button,
                pageX: event.pageX,
                pageY: event.pageY
              };
            } else if (event.type == 'mousedown') {
              SDL.DOMButtons[event.button] = 1;
            } else if (event.type == 'mouseup') {
              // ignore extra ups, can happen if we leave the canvas while pressing down, then return,
              // since we add a mouseup in that case
              if (!SDL.DOMButtons[event.button]) {
                return;
              }
  
              SDL.DOMButtons[event.button] = 0;
            }
  
            // We can only request fullscreen as the result of user input.
            // Due to this limitation, we toggle a boolean on keydown which
            // SDL_WM_ToggleFullScreen will check and subsequently set another
            // flag indicating for us to request fullscreen on the following
            // keyup. This isn't perfect, but it enables SDL_WM_ToggleFullScreen
            // to work as the result of a keypress (which is an extremely
            // common use case).
            if (event.type === 'keydown') {
              SDL.canRequestFullscreen = true;
            } else if (event.type === 'keyup') {
              if (SDL.isRequestingFullscreen) {
                Module['requestFullScreen'](true, true);
                SDL.isRequestingFullscreen = false;
              }
              SDL.canRequestFullscreen = false;
            }
  
            // SDL expects a unicode character to be passed to its keydown events.
            // Unfortunately, the browser APIs only provide a charCode property on
            // keypress events, so we must backfill in keydown events with their
            // subsequent keypress event's charCode.
            if (event.type === 'keypress' && SDL.savedKeydown) {
              // charCode is read-only
              SDL.savedKeydown.keypressCharCode = event.charCode;
              SDL.savedKeydown = null;
            } else if (event.type === 'keydown') {
              SDL.savedKeydown = event;
            }
  
            // Don't push keypress events unless SDL_StartTextInput has been called.
            if (event.type !== 'keypress' || SDL.textInput) {
              SDL.events.push(event);
            }
            break;
          case 'mouseout':
            // Un-press all pressed mouse buttons, because we might miss the release outside of the canvas
            for (var i = 0; i < 3; i++) {
              if (SDL.DOMButtons[i]) {
                SDL.events.push({
                  type: 'mouseup',
                  button: i,
                  pageX: event.pageX,
                  pageY: event.pageY
                });
                SDL.DOMButtons[i] = 0;
              }
            }
            event.preventDefault();
            break;
          case 'blur':
          case 'visibilitychange': {
            // Un-press all pressed keys: TODO
            for (var code in SDL.keyboardMap) {
              SDL.events.push({
                type: 'keyup',
                keyCode: SDL.keyboardMap[code]
              });
            }
            event.preventDefault();
            break;
          }
          case 'unload':
            if (Browser.mainLoop.runner) {
              SDL.events.push(event);
              // Force-run a main event loop, since otherwise this event will never be caught!
              Browser.mainLoop.runner();
            }
            return;
          case 'resize':
            SDL.events.push(event);
            // manually triggered resize event doesn't have a preventDefault member
            if (event.preventDefault) {
              event.preventDefault();
            }
            break;
        }
        if (SDL.events.length >= 10000) {
          Module.printErr('SDL event queue full, dropping events');
          SDL.events = SDL.events.slice(0, 10000);
        }
        return;
      },handleEvent:function (event) {
        if (event.handled) return;
        event.handled = true;
  
        switch (event.type) {
          case 'keydown': case 'keyup': {
            var down = event.type === 'keydown';
            var code = event.keyCode;
            if (code >= 65 && code <= 90) {
              code += 32; // make lowercase for SDL
            } else {
              code = SDL.keyCodes[event.keyCode] || event.keyCode;
            }
  
            HEAP8[(((SDL.keyboardState)+(code))|0)]=down;
            // TODO: lmeta, rmeta, numlock, capslock, KMOD_MODE, KMOD_RESERVED
            SDL.modState = (HEAP8[(((SDL.keyboardState)+(1248))|0)] ? 0x0040 | 0x0080 : 0) | // KMOD_LCTRL & KMOD_RCTRL
              (HEAP8[(((SDL.keyboardState)+(1249))|0)] ? 0x0001 | 0x0002 : 0) | // KMOD_LSHIFT & KMOD_RSHIFT
              (HEAP8[(((SDL.keyboardState)+(1250))|0)] ? 0x0100 | 0x0200 : 0); // KMOD_LALT & KMOD_RALT
  
            if (down) {
              SDL.keyboardMap[code] = event.keyCode; // save the DOM input, which we can use to unpress it during blur
            } else {
              delete SDL.keyboardMap[code];
            }
  
            break;
          }
          case 'mousedown': case 'mouseup':
            if (event.type == 'mousedown') {
              // SDL_BUTTON(x) is defined as (1 << ((x)-1)).  SDL buttons are 1-3,
              // and DOM buttons are 0-2, so this means that the below formula is
              // correct.
              SDL.buttonState |= 1 << event.button;
            } else if (event.type == 'mouseup') {
              SDL.buttonState &= ~(1 << event.button);
            }
            // fall through
          case 'mousemove': {
            Browser.calculateMouseEvent(event);
            break;
          }
        }
      },makeCEvent:function (event, ptr) {
        if (typeof event === 'number') {
          // This is a pointer to a native C event that was SDL_PushEvent'ed
          _memcpy(ptr, event, 28); // XXX
          return;
        }
  
        SDL.handleEvent(event);
  
        switch (event.type) {
          case 'keydown': case 'keyup': {
            var down = event.type === 'keydown';
            //Module.print('Received key event: ' + event.keyCode);
            var key = event.keyCode;
            if (key >= 65 && key <= 90) {
              key += 32; // make lowercase for SDL
            } else {
              key = SDL.keyCodes[event.keyCode] || event.keyCode;
            }
            var scan;
            if (key >= 1024) {
              scan = key - 1024;
            } else {
              scan = SDL.scanCodes[key] || key;
            }
  
            HEAP32[((ptr)>>2)]=SDL.DOMEventToSDLEvent[event.type];
            HEAP8[(((ptr)+(8))|0)]=down ? 1 : 0;
            HEAP8[(((ptr)+(9))|0)]=0; // TODO
            HEAP32[(((ptr)+(12))>>2)]=scan;
            HEAP32[(((ptr)+(16))>>2)]=key;
            HEAP16[(((ptr)+(20))>>1)]=SDL.modState;
            // some non-character keys (e.g. backspace and tab) won't have keypressCharCode set, fill in with the keyCode.
            HEAP32[(((ptr)+(24))>>2)]=event.keypressCharCode || key;
  
            break;
          }
          case 'keypress': {
            HEAP32[((ptr)>>2)]=SDL.DOMEventToSDLEvent[event.type];
            // Not filling in windowID for now
            var cStr = intArrayFromString(String.fromCharCode(event.charCode));
            for (var i = 0; i < cStr.length; ++i) {
              HEAP8[(((ptr)+(8 + i))|0)]=cStr[i];
            }
            break;
          }
          case 'mousedown': case 'mouseup': case 'mousemove': {
            if (event.type != 'mousemove') {
              var down = event.type === 'mousedown';
              HEAP32[((ptr)>>2)]=SDL.DOMEventToSDLEvent[event.type];
              HEAP8[(((ptr)+(8))|0)]=event.button+1; // DOM buttons are 0-2, SDL 1-3
              HEAP8[(((ptr)+(9))|0)]=down ? 1 : 0;
              HEAP32[(((ptr)+(12))>>2)]=Browser.mouseX;
              HEAP32[(((ptr)+(16))>>2)]=Browser.mouseY;
            } else {
              HEAP32[((ptr)>>2)]=SDL.DOMEventToSDLEvent[event.type];
              HEAP8[(((ptr)+(8))|0)]=SDL.buttonState;
              HEAP32[(((ptr)+(12))>>2)]=Browser.mouseX;
              HEAP32[(((ptr)+(16))>>2)]=Browser.mouseY;
              HEAP32[(((ptr)+(20))>>2)]=Browser.mouseMovementX;
              HEAP32[(((ptr)+(24))>>2)]=Browser.mouseMovementY;
            }
            break;
          }
          case 'unload': {
            HEAP32[((ptr)>>2)]=SDL.DOMEventToSDLEvent[event.type];
            break;
          }
          case 'resize': {
            HEAP32[((ptr)>>2)]=SDL.DOMEventToSDLEvent[event.type];
            HEAP32[(((ptr)+(4))>>2)]=event.w;
            HEAP32[(((ptr)+(8))>>2)]=event.h;
            break;
          }
          case 'joystick_button_up': case 'joystick_button_down': {
            var state = event.type === 'joystick_button_up' ? 0 : 1;
            HEAP32[((ptr)>>2)]=SDL.DOMEventToSDLEvent[event.type];
            HEAP8[(((ptr)+(4))|0)]=event.index;
            HEAP8[(((ptr)+(5))|0)]=event.button;
            HEAP8[(((ptr)+(6))|0)]=state;
            break;
          }
          case 'joystick_axis_motion': {
            HEAP32[((ptr)>>2)]=SDL.DOMEventToSDLEvent[event.type];
            HEAP8[(((ptr)+(4))|0)]=event.index;
            HEAP8[(((ptr)+(5))|0)]=event.axis;
            HEAP32[(((ptr)+(8))>>2)]=SDL.joystickAxisValueConversion(event.value);
            break;
          }
          default: throw 'Unhandled SDL event: ' + event.type;
        }
      },estimateTextWidth:function (fontData, text) {
        var h = fontData.size;
        var fontString = h + 'px ' + fontData.name;
        var tempCtx = SDL.ttfContext;
        tempCtx.save();
        tempCtx.font = fontString;
        var ret = tempCtx.measureText(text).width | 0;
        tempCtx.restore();
        return ret;
      },allocateChannels:function (num) { // called from Mix_AllocateChannels and init
        if (SDL.numChannels && SDL.numChannels >= num && num != 0) return;
        SDL.numChannels = num;
        SDL.channels = [];
        for (var i = 0; i < num; i++) {
          SDL.channels[i] = {
            audio: null,
            volume: 1.0
          };
        }
      },setGetVolume:function (info, volume) {
        if (!info) return 0;
        var ret = info.volume * 128; // MIX_MAX_VOLUME
        if (volume != -1) {
          info.volume = volume / 128;
          if (info.audio) info.audio.volume = info.volume;
        }
        return ret;
      },fillWebAudioBufferFromHeap:function (heapPtr, sizeSamplesPerChannel, dstAudioBuffer) {
        // The input audio data is interleaved across the channels, i.e. [L, R, L, R, L, R, ...] and is either 8-bit or 16-bit as
        // supported by the SDL API. The output audio wave data for Web Audio API must be in planar buffers of [-1,1]-normalized Float32 data,
        // so perform a buffer conversion for the data.
        var numChannels = SDL.audio.channels;
        for(var c = 0; c < numChannels; ++c) {
          var channelData = dstAudioBuffer['getChannelData'](c);
          if (channelData.length != sizeSamplesPerChannel) {
            throw 'Web Audio output buffer length mismatch! Destination size: ' + channelData.length + ' samples vs expected ' + sizeSamplesPerChannel + ' samples!';
          }
          if (SDL.audio.format == 0x8010 /*AUDIO_S16LSB*/) {
            for(var j = 0; j < sizeSamplesPerChannel; ++j) {
              channelData[j] = (HEAP16[(((heapPtr)+((j*numChannels + c)*2))>>1)]) / 0x8000;
            }
          } else if (SDL.audio.format == 0x0008 /*AUDIO_U8*/) {
            for(var j = 0; j < sizeSamplesPerChannel; ++j) {
              var v = (HEAP8[(((heapPtr)+(j*numChannels + c))|0)]);
              channelData[j] = ((v >= 0) ? v-128 : v+128) /128;
            }
          }
        }
      },debugSurface:function (surfData) {
        console.log('dumping surface ' + [surfData.surf, surfData.source, surfData.width, surfData.height]);
        var image = surfData.ctx.getImageData(0, 0, surfData.width, surfData.height);
        var data = image.data;
        var num = Math.min(surfData.width, surfData.height);
        for (var i = 0; i < num; i++) {
          console.log('   diagonal ' + i + ':' + [data[i*surfData.width*4 + i*4 + 0], data[i*surfData.width*4 + i*4 + 1], data[i*surfData.width*4 + i*4 + 2], data[i*surfData.width*4 + i*4 + 3]]);
        }
      },joystickEventState:1,lastJoystickState:{},joystickNamePool:{},recordJoystickState:function (joystick, state) {
        // Standardize button state.
        var buttons = new Array(state.buttons.length);
        for (var i = 0; i < state.buttons.length; i++) {
          buttons[i] = SDL.getJoystickButtonState(state.buttons[i]);
        }
  
        SDL.lastJoystickState[joystick] = {
          buttons: buttons,
          axes: state.axes.slice(0),
          timestamp: state.timestamp,
          index: state.index,
          id: state.id
        };
      },getJoystickButtonState:function (button) {
        if (typeof button === 'object') {
          // Current gamepad API editor's draft (Firefox Nightly)
          // https://dvcs.w3.org/hg/gamepad/raw-file/default/gamepad.html#idl-def-GamepadButton
          return button.pressed;
        } else {
          // Current gamepad API working draft (Firefox / Chrome Stable)
          // http://www.w3.org/TR/2012/WD-gamepad-20120529/#gamepad-interface
          return button > 0;
        }
      },queryJoysticks:function () {
        for (var joystick in SDL.lastJoystickState) {
          var state = SDL.getGamepad(joystick - 1);
          var prevState = SDL.lastJoystickState[joystick];
          // Check only if the timestamp has differed.
          // NOTE: Timestamp is not available in Firefox.
          if (typeof state.timestamp !== 'number' || state.timestamp !== prevState.timestamp) {
            var i;
            for (i = 0; i < state.buttons.length; i++) {
              var buttonState = SDL.getJoystickButtonState(state.buttons[i]);
              // NOTE: The previous state already has a boolean representation of
              //       its button, so no need to standardize its button state here.
              if (buttonState !== prevState.buttons[i]) {
                // Insert button-press event.
                SDL.events.push({
                  type: buttonState ? 'joystick_button_down' : 'joystick_button_up',
                  joystick: joystick,
                  index: joystick - 1,
                  button: i
                });
              }
            }
            for (i = 0; i < state.axes.length; i++) {
              if (state.axes[i] !== prevState.axes[i]) {
                // Insert axes-change event.
                SDL.events.push({
                  type: 'joystick_axis_motion',
                  joystick: joystick,
                  index: joystick - 1,
                  axis: i,
                  value: state.axes[i]
                });
              }
            }
  
            SDL.recordJoystickState(joystick, state);
          }
        }
      },joystickAxisValueConversion:function (value) {
        // Ensures that 0 is 0, 1 is 32767, and -1 is 32768.
        return Math.ceil(((value+1) * 32767.5) - 32768);
      },getGamepads:function () {
        var fcn = navigator.getGamepads || navigator.webkitGamepads || navigator.mozGamepads || navigator.gamepads || navigator.webkitGetGamepads;
        if (fcn !== undefined) {
          // The function must be applied on the navigator object.
          return fcn.apply(navigator);
        } else {
          return [];
        }
      },getGamepad:function (deviceIndex) {
        var gamepads = SDL.getGamepads();
        if (gamepads.length > deviceIndex && deviceIndex >= 0) {
          return gamepads[deviceIndex];
        }
        return null;
      }};function _SDL_PollEvent(ptr) {
      if (SDL.initFlags & 0x200 && SDL.joystickEventState) {
        // If SDL_INIT_JOYSTICK was supplied AND the joystick system is configured
        // to automatically query for events, query for joystick events.
        SDL.queryJoysticks();
      }
      if (SDL.events.length === 0) return 0;
      if (ptr) {
        SDL.makeCEvent(SDL.events.shift(), ptr);
      }
      return 1;
    }

  function _SDL_JoystickNumButtons(joystick) {
      var gamepad = SDL.getGamepad(joystick - 1);
      if (gamepad) {
        return gamepad.buttons.length;
      }
      return 0;
    }

  function _SDL_PushEvent(ptr) {
      SDL.events.push(ptr); // XXX Should we copy it? Not clear from API
      return 0;
    }

  
  
  
  
  
  
  function _mkport() { throw 'TODO' }var SOCKFS={mount:function (mount) {
        return FS.createNode(null, '/', 16384 | 0777, 0);
      },createSocket:function (family, type, protocol) {
        var streaming = type == 1;
        if (protocol) {
          assert(streaming == (protocol == 6)); // if SOCK_STREAM, must be tcp
        }
  
        // create our internal socket structure
        var sock = {
          family: family,
          type: type,
          protocol: protocol,
          server: null,
          peers: {},
          pending: [],
          recv_queue: [],
          sock_ops: SOCKFS.websocket_sock_ops
        };
  
        // create the filesystem node to store the socket structure
        var name = SOCKFS.nextname();
        var node = FS.createNode(SOCKFS.root, name, 49152, 0);
        node.sock = sock;
  
        // and the wrapping stream that enables library functions such
        // as read and write to indirectly interact with the socket
        var stream = FS.createStream({
          path: name,
          node: node,
          flags: FS.modeStringToFlags('r+'),
          seekable: false,
          stream_ops: SOCKFS.stream_ops
        });
  
        // map the new stream to the socket structure (sockets have a 1:1
        // relationship with a stream)
        sock.stream = stream;
  
        return sock;
      },getSocket:function (fd) {
        var stream = FS.getStream(fd);
        if (!stream || !FS.isSocket(stream.node.mode)) {
          return null;
        }
        return stream.node.sock;
      },stream_ops:{poll:function (stream) {
          var sock = stream.node.sock;
          return sock.sock_ops.poll(sock);
        },ioctl:function (stream, request, varargs) {
          var sock = stream.node.sock;
          return sock.sock_ops.ioctl(sock, request, varargs);
        },read:function (stream, buffer, offset, length, position /* ignored */) {
          var sock = stream.node.sock;
          var msg = sock.sock_ops.recvmsg(sock, length);
          if (!msg) {
            // socket is closed
            return 0;
          }
          buffer.set(msg.buffer, offset);
          return msg.buffer.length;
        },write:function (stream, buffer, offset, length, position /* ignored */) {
          var sock = stream.node.sock;
          return sock.sock_ops.sendmsg(sock, buffer, offset, length);
        },close:function (stream) {
          var sock = stream.node.sock;
          sock.sock_ops.close(sock);
        }},nextname:function () {
        if (!SOCKFS.nextname.current) {
          SOCKFS.nextname.current = 0;
        }
        return 'socket[' + (SOCKFS.nextname.current++) + ']';
      },websocket_sock_ops:{createPeer:function (sock, addr, port) {
          var ws;
  
          if (typeof addr === 'object') {
            ws = addr;
            addr = null;
            port = null;
          }
  
          if (ws) {
            // for sockets that've already connected (e.g. we're the server)
            // we can inspect the _socket property for the address
            if (ws._socket) {
              addr = ws._socket.remoteAddress;
              port = ws._socket.remotePort;
            }
            // if we're just now initializing a connection to the remote,
            // inspect the url property
            else {
              var result = /ws[s]?:\/\/([^:]+):(\d+)/.exec(ws.url);
              if (!result) {
                throw new Error('WebSocket URL must be in the format ws(s)://address:port');
              }
              addr = result[1];
              port = parseInt(result[2], 10);
            }
          } else {
            // create the actual websocket object and connect
            try {
              var url = 'ws://' + addr + ':' + port;
              // the node ws library API is slightly different than the browser's
              var opts = ENVIRONMENT_IS_NODE ? {headers: {'websocket-protocol': ['binary']}} : ['binary'];
              // If node we use the ws library.
              var WebSocket = ENVIRONMENT_IS_NODE ? require('ws') : window['WebSocket'];
              ws = new WebSocket(url, opts);
              ws.binaryType = 'arraybuffer';
            } catch (e) {
              throw new FS.ErrnoError(ERRNO_CODES.EHOSTUNREACH);
            }
          }
  
  
          var peer = {
            addr: addr,
            port: port,
            socket: ws,
            dgram_send_queue: []
          };
  
          SOCKFS.websocket_sock_ops.addPeer(sock, peer);
          SOCKFS.websocket_sock_ops.handlePeerEvents(sock, peer);
  
          // if this is a bound dgram socket, send the port number first to allow
          // us to override the ephemeral port reported to us by remotePort on the
          // remote end.
          if (sock.type === 2 && typeof sock.sport !== 'undefined') {
            peer.dgram_send_queue.push(new Uint8Array([
                255, 255, 255, 255,
                'p'.charCodeAt(0), 'o'.charCodeAt(0), 'r'.charCodeAt(0), 't'.charCodeAt(0),
                ((sock.sport & 0xff00) >> 8) , (sock.sport & 0xff)
            ]));
          }
  
          return peer;
        },getPeer:function (sock, addr, port) {
          return sock.peers[addr + ':' + port];
        },addPeer:function (sock, peer) {
          sock.peers[peer.addr + ':' + peer.port] = peer;
        },removePeer:function (sock, peer) {
          delete sock.peers[peer.addr + ':' + peer.port];
        },handlePeerEvents:function (sock, peer) {
          var first = true;
  
          var handleOpen = function () {
            try {
              var queued = peer.dgram_send_queue.shift();
              while (queued) {
                peer.socket.send(queued);
                queued = peer.dgram_send_queue.shift();
              }
            } catch (e) {
              // not much we can do here in the way of proper error handling as we've already
              // lied and said this data was sent. shut it down.
              peer.socket.close();
            }
          };
  
          function handleMessage(data) {
            assert(typeof data !== 'string' && data.byteLength !== undefined);  // must receive an ArrayBuffer
            data = new Uint8Array(data);  // make a typed array view on the array buffer
  
  
            // if this is the port message, override the peer's port with it
            var wasfirst = first;
            first = false;
            if (wasfirst &&
                data.length === 10 &&
                data[0] === 255 && data[1] === 255 && data[2] === 255 && data[3] === 255 &&
                data[4] === 'p'.charCodeAt(0) && data[5] === 'o'.charCodeAt(0) && data[6] === 'r'.charCodeAt(0) && data[7] === 't'.charCodeAt(0)) {
              // update the peer's port and it's key in the peer map
              var newport = ((data[8] << 8) | data[9]);
              SOCKFS.websocket_sock_ops.removePeer(sock, peer);
              peer.port = newport;
              SOCKFS.websocket_sock_ops.addPeer(sock, peer);
              return;
            }
  
            sock.recv_queue.push({ addr: peer.addr, port: peer.port, data: data });
          };
  
          if (ENVIRONMENT_IS_NODE) {
            peer.socket.on('open', handleOpen);
            peer.socket.on('message', function(data, flags) {
              if (!flags.binary) {
                return;
              }
              handleMessage((new Uint8Array(data)).buffer);  // copy from node Buffer -> ArrayBuffer
            });
            peer.socket.on('error', function() {
              // don't throw
            });
          } else {
            peer.socket.onopen = handleOpen;
            peer.socket.onmessage = function peer_socket_onmessage(event) {
              handleMessage(event.data);
            };
          }
        },poll:function (sock) {
          if (sock.type === 1 && sock.server) {
            // listen sockets should only say they're available for reading
            // if there are pending clients.
            return sock.pending.length ? (64 | 1) : 0;
          }
  
          var mask = 0;
          var dest = sock.type === 1 ?  // we only care about the socket state for connection-based sockets
            SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport) :
            null;
  
          if (sock.recv_queue.length ||
              !dest ||  // connection-less sockets are always ready to read
              (dest && dest.socket.readyState === dest.socket.CLOSING) ||
              (dest && dest.socket.readyState === dest.socket.CLOSED)) {  // let recv return 0 once closed
            mask |= (64 | 1);
          }
  
          if (!dest ||  // connection-less sockets are always ready to write
              (dest && dest.socket.readyState === dest.socket.OPEN)) {
            mask |= 4;
          }
  
          if ((dest && dest.socket.readyState === dest.socket.CLOSING) ||
              (dest && dest.socket.readyState === dest.socket.CLOSED)) {
            mask |= 16;
          }
  
          return mask;
        },ioctl:function (sock, request, arg) {
          switch (request) {
            case 21531:
              var bytes = 0;
              if (sock.recv_queue.length) {
                bytes = sock.recv_queue[0].data.length;
              }
              HEAP32[((arg)>>2)]=bytes;
              return 0;
            default:
              return ERRNO_CODES.EINVAL;
          }
        },close:function (sock) {
          // if we've spawned a listen server, close it
          if (sock.server) {
            try {
              sock.server.close();
            } catch (e) {
            }
            sock.server = null;
          }
          // close any peer connections
          var peers = Object.keys(sock.peers);
          for (var i = 0; i < peers.length; i++) {
            var peer = sock.peers[peers[i]];
            try {
              peer.socket.close();
            } catch (e) {
            }
            SOCKFS.websocket_sock_ops.removePeer(sock, peer);
          }
          return 0;
        },bind:function (sock, addr, port) {
          if (typeof sock.saddr !== 'undefined' || typeof sock.sport !== 'undefined') {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);  // already bound
          }
          sock.saddr = addr;
          sock.sport = port || _mkport();
          // in order to emulate dgram sockets, we need to launch a listen server when
          // binding on a connection-less socket
          // note: this is only required on the server side
          if (sock.type === 2) {
            // close the existing server if it exists
            if (sock.server) {
              sock.server.close();
              sock.server = null;
            }
            // swallow error operation not supported error that occurs when binding in the
            // browser where this isn't supported
            try {
              sock.sock_ops.listen(sock, 0);
            } catch (e) {
              if (!(e instanceof FS.ErrnoError)) throw e;
              if (e.errno !== ERRNO_CODES.EOPNOTSUPP) throw e;
            }
          }
        },connect:function (sock, addr, port) {
          if (sock.server) {
            throw new FS.ErrnoError(ERRNO_CODS.EOPNOTSUPP);
          }
  
          // TODO autobind
          // if (!sock.addr && sock.type == 2) {
          // }
  
          // early out if we're already connected / in the middle of connecting
          if (typeof sock.daddr !== 'undefined' && typeof sock.dport !== 'undefined') {
            var dest = SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport);
            if (dest) {
              if (dest.socket.readyState === dest.socket.CONNECTING) {
                throw new FS.ErrnoError(ERRNO_CODES.EALREADY);
              } else {
                throw new FS.ErrnoError(ERRNO_CODES.EISCONN);
              }
            }
          }
  
          // add the socket to our peer list and set our
          // destination address / port to match
          var peer = SOCKFS.websocket_sock_ops.createPeer(sock, addr, port);
          sock.daddr = peer.addr;
          sock.dport = peer.port;
  
          // always "fail" in non-blocking mode
          throw new FS.ErrnoError(ERRNO_CODES.EINPROGRESS);
        },listen:function (sock, backlog) {
          if (!ENVIRONMENT_IS_NODE) {
            throw new FS.ErrnoError(ERRNO_CODES.EOPNOTSUPP);
          }
          if (sock.server) {
             throw new FS.ErrnoError(ERRNO_CODES.EINVAL);  // already listening
          }
          var WebSocketServer = require('ws').Server;
          var host = sock.saddr;
          sock.server = new WebSocketServer({
            host: host,
            port: sock.sport
            // TODO support backlog
          });
  
          sock.server.on('connection', function(ws) {
            if (sock.type === 1) {
              var newsock = SOCKFS.createSocket(sock.family, sock.type, sock.protocol);
  
              // create a peer on the new socket
              var peer = SOCKFS.websocket_sock_ops.createPeer(newsock, ws);
              newsock.daddr = peer.addr;
              newsock.dport = peer.port;
  
              // push to queue for accept to pick up
              sock.pending.push(newsock);
            } else {
              // create a peer on the listen socket so calling sendto
              // with the listen socket and an address will resolve
              // to the correct client
              SOCKFS.websocket_sock_ops.createPeer(sock, ws);
            }
          });
          sock.server.on('closed', function() {
            sock.server = null;
          });
          sock.server.on('error', function() {
            // don't throw
          });
        },accept:function (listensock) {
          if (!listensock.server) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
          }
          var newsock = listensock.pending.shift();
          newsock.stream.flags = listensock.stream.flags;
          return newsock;
        },getname:function (sock, peer) {
          var addr, port;
          if (peer) {
            if (sock.daddr === undefined || sock.dport === undefined) {
              throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
            }
            addr = sock.daddr;
            port = sock.dport;
          } else {
            // TODO saddr and sport will be set for bind()'d UDP sockets, but what
            // should we be returning for TCP sockets that've been connect()'d?
            addr = sock.saddr || 0;
            port = sock.sport || 0;
          }
          return { addr: addr, port: port };
        },sendmsg:function (sock, buffer, offset, length, addr, port) {
          if (sock.type === 2) {
            // connection-less sockets will honor the message address,
            // and otherwise fall back to the bound destination address
            if (addr === undefined || port === undefined) {
              addr = sock.daddr;
              port = sock.dport;
            }
            // if there was no address to fall back to, error out
            if (addr === undefined || port === undefined) {
              throw new FS.ErrnoError(ERRNO_CODES.EDESTADDRREQ);
            }
          } else {
            // connection-based sockets will only use the bound
            addr = sock.daddr;
            port = sock.dport;
          }
  
          // find the peer for the destination address
          var dest = SOCKFS.websocket_sock_ops.getPeer(sock, addr, port);
  
          // early out if not connected with a connection-based socket
          if (sock.type === 1) {
            if (!dest || dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
              throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
            } else if (dest.socket.readyState === dest.socket.CONNECTING) {
              throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
            }
          }
  
          // create a copy of the incoming data to send, as the WebSocket API
          // doesn't work entirely with an ArrayBufferView, it'll just send
          // the entire underlying buffer
          var data;
          if (buffer instanceof Array || buffer instanceof ArrayBuffer) {
            data = buffer.slice(offset, offset + length);
          } else {  // ArrayBufferView
            data = buffer.buffer.slice(buffer.byteOffset + offset, buffer.byteOffset + offset + length);
          }
  
          // if we're emulating a connection-less dgram socket and don't have
          // a cached connection, queue the buffer to send upon connect and
          // lie, saying the data was sent now.
          if (sock.type === 2) {
            if (!dest || dest.socket.readyState !== dest.socket.OPEN) {
              // if we're not connected, open a new connection
              if (!dest || dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
                dest = SOCKFS.websocket_sock_ops.createPeer(sock, addr, port);
              }
              dest.dgram_send_queue.push(data);
              return length;
            }
          }
  
          try {
            // send the actual data
            dest.socket.send(data);
            return length;
          } catch (e) {
            throw new FS.ErrnoError(ERRNO_CODES.EINVAL);
          }
        },recvmsg:function (sock, length) {
          // http://pubs.opengroup.org/onlinepubs/7908799/xns/recvmsg.html
          if (sock.type === 1 && sock.server) {
            // tcp servers should not be recv()'ing on the listen socket
            throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
          }
  
          var queued = sock.recv_queue.shift();
          if (!queued) {
            if (sock.type === 1) {
              var dest = SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport);
  
              if (!dest) {
                // if we have a destination address but are not connected, error out
                throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN);
              }
              else if (dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
                // return null if the socket has closed
                return null;
              }
              else {
                // else, our socket is in a valid state but truly has nothing available
                throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
              }
            } else {
              throw new FS.ErrnoError(ERRNO_CODES.EAGAIN);
            }
          }
  
          // queued.data will be an ArrayBuffer if it's unadulterated, but if it's
          // requeued TCP data it'll be an ArrayBufferView
          var queuedLength = queued.data.byteLength || queued.data.length;
          var queuedOffset = queued.data.byteOffset || 0;
          var queuedBuffer = queued.data.buffer || queued.data;
          var bytesRead = Math.min(length, queuedLength);
          var res = {
            buffer: new Uint8Array(queuedBuffer, queuedOffset, bytesRead),
            addr: queued.addr,
            port: queued.port
          };
  
  
          // push back any unread data for TCP connections
          if (sock.type === 1 && bytesRead < queuedLength) {
            var bytesRemaining = queuedLength - bytesRead;
            queued.data = new Uint8Array(queuedBuffer, queuedOffset + bytesRead, bytesRemaining);
            sock.recv_queue.unshift(queued);
          }
  
          return res;
        }}};function _send(fd, buf, len, flags) {
      var sock = SOCKFS.getSocket(fd);
      if (!sock) {
        ___setErrNo(ERRNO_CODES.EBADF);
        return -1;
      }
      // TODO honor flags
      return _write(fd, buf, len);
    }
  
  function _pwrite(fildes, buf, nbyte, offset) {
      // ssize_t pwrite(int fildes, const void *buf, size_t nbyte, off_t offset);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/write.html
      var stream = FS.getStream(fildes);
      if (!stream) {
        ___setErrNo(ERRNO_CODES.EBADF);
        return -1;
      }
      try {
        var slab = HEAP8;
        return FS.write(stream, slab, buf, nbyte, offset);
      } catch (e) {
        FS.handleFSError(e);
        return -1;
      }
    }function _write(fildes, buf, nbyte) {
      // ssize_t write(int fildes, const void *buf, size_t nbyte);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/write.html
      var stream = FS.getStream(fildes);
      if (!stream) {
        ___setErrNo(ERRNO_CODES.EBADF);
        return -1;
      }
  
  
      try {
        var slab = HEAP8;
        return FS.write(stream, slab, buf, nbyte);
      } catch (e) {
        FS.handleFSError(e);
        return -1;
      }
    }
  
  function _fileno(stream) {
      // int fileno(FILE *stream);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/fileno.html
      return FS.getStreamFromPtr(stream).fd;
    }function _fwrite(ptr, size, nitems, stream) {
      // size_t fwrite(const void *restrict ptr, size_t size, size_t nitems, FILE *restrict stream);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/fwrite.html
      var bytesToWrite = nitems * size;
      if (bytesToWrite == 0) return 0;
      var fd = _fileno(stream);
      var bytesWritten = _write(fd, ptr, bytesToWrite);
      if (bytesWritten == -1) {
        var streamObj = FS.getStreamFromPtr(stream);
        if (streamObj) streamObj.error = true;
        return 0;
      } else {
        return Math.floor(bytesWritten / size);
      }
    }
  
  
   
  Module["_strlen"] = _strlen;
  
  function __reallyNegative(x) {
      return x < 0 || (x === 0 && (1/x) === -Infinity);
    }function __formatString(format, varargs) {
      var textIndex = format;
      var argIndex = 0;
      function getNextArg(type) {
        // NOTE: Explicitly ignoring type safety. Otherwise this fails:
        //       int x = 4; printf("%c\n", (char)x);
        var ret;
        if (type === 'double') {
          ret = HEAPF64[(((varargs)+(argIndex))>>3)];
        } else if (type == 'i64') {
          ret = [HEAP32[(((varargs)+(argIndex))>>2)],
                 HEAP32[(((varargs)+(argIndex+8))>>2)]];
          argIndex += 8; // each 32-bit chunk is in a 64-bit block
  
        } else {
          type = 'i32'; // varargs are always i32, i64, or double
          ret = HEAP32[(((varargs)+(argIndex))>>2)];
        }
        argIndex += Math.max(Runtime.getNativeFieldSize(type), Runtime.getAlignSize(type, null, true));
        return ret;
      }
  
      var ret = [];
      var curr, next, currArg;
      while(1) {
        var startTextIndex = textIndex;
        curr = HEAP8[(textIndex)];
        if (curr === 0) break;
        next = HEAP8[((textIndex+1)|0)];
        if (curr == 37) {
          // Handle flags.
          var flagAlwaysSigned = false;
          var flagLeftAlign = false;
          var flagAlternative = false;
          var flagZeroPad = false;
          var flagPadSign = false;
          flagsLoop: while (1) {
            switch (next) {
              case 43:
                flagAlwaysSigned = true;
                break;
              case 45:
                flagLeftAlign = true;
                break;
              case 35:
                flagAlternative = true;
                break;
              case 48:
                if (flagZeroPad) {
                  break flagsLoop;
                } else {
                  flagZeroPad = true;
                  break;
                }
              case 32:
                flagPadSign = true;
                break;
              default:
                break flagsLoop;
            }
            textIndex++;
            next = HEAP8[((textIndex+1)|0)];
          }
  
          // Handle width.
          var width = 0;
          if (next == 42) {
            width = getNextArg('i32');
            textIndex++;
            next = HEAP8[((textIndex+1)|0)];
          } else {
            while (next >= 48 && next <= 57) {
              width = width * 10 + (next - 48);
              textIndex++;
              next = HEAP8[((textIndex+1)|0)];
            }
          }
  
          // Handle precision.
          var precisionSet = false, precision = -1;
          if (next == 46) {
            precision = 0;
            precisionSet = true;
            textIndex++;
            next = HEAP8[((textIndex+1)|0)];
            if (next == 42) {
              precision = getNextArg('i32');
              textIndex++;
            } else {
              while(1) {
                var precisionChr = HEAP8[((textIndex+1)|0)];
                if (precisionChr < 48 ||
                    precisionChr > 57) break;
                precision = precision * 10 + (precisionChr - 48);
                textIndex++;
              }
            }
            next = HEAP8[((textIndex+1)|0)];
          }
          if (precision === -1) {
            precision = 6; // Standard default.
            precisionSet = false;
          }
  
          // Handle integer sizes. WARNING: These assume a 32-bit architecture!
          var argSize;
          switch (String.fromCharCode(next)) {
            case 'h':
              var nextNext = HEAP8[((textIndex+2)|0)];
              if (nextNext == 104) {
                textIndex++;
                argSize = 1; // char (actually i32 in varargs)
              } else {
                argSize = 2; // short (actually i32 in varargs)
              }
              break;
            case 'l':
              var nextNext = HEAP8[((textIndex+2)|0)];
              if (nextNext == 108) {
                textIndex++;
                argSize = 8; // long long
              } else {
                argSize = 4; // long
              }
              break;
            case 'L': // long long
            case 'q': // int64_t
            case 'j': // intmax_t
              argSize = 8;
              break;
            case 'z': // size_t
            case 't': // ptrdiff_t
            case 'I': // signed ptrdiff_t or unsigned size_t
              argSize = 4;
              break;
            default:
              argSize = null;
          }
          if (argSize) textIndex++;
          next = HEAP8[((textIndex+1)|0)];
  
          // Handle type specifier.
          switch (String.fromCharCode(next)) {
            case 'd': case 'i': case 'u': case 'o': case 'x': case 'X': case 'p': {
              // Integer.
              var signed = next == 100 || next == 105;
              argSize = argSize || 4;
              var currArg = getNextArg('i' + (argSize * 8));
              var origArg = currArg;
              var argText;
              // Flatten i64-1 [low, high] into a (slightly rounded) double
              if (argSize == 8) {
                currArg = Runtime.makeBigInt(currArg[0], currArg[1], next == 117);
              }
              // Truncate to requested size.
              if (argSize <= 4) {
                var limit = Math.pow(256, argSize) - 1;
                currArg = (signed ? reSign : unSign)(currArg & limit, argSize * 8);
              }
              // Format the number.
              var currAbsArg = Math.abs(currArg);
              var prefix = '';
              if (next == 100 || next == 105) {
                if (argSize == 8 && i64Math) argText = i64Math.stringify(origArg[0], origArg[1], null); else
                argText = reSign(currArg, 8 * argSize, 1).toString(10);
              } else if (next == 117) {
                if (argSize == 8 && i64Math) argText = i64Math.stringify(origArg[0], origArg[1], true); else
                argText = unSign(currArg, 8 * argSize, 1).toString(10);
                currArg = Math.abs(currArg);
              } else if (next == 111) {
                argText = (flagAlternative ? '0' : '') + currAbsArg.toString(8);
              } else if (next == 120 || next == 88) {
                prefix = (flagAlternative && currArg != 0) ? '0x' : '';
                if (argSize == 8 && i64Math) {
                  if (origArg[1]) {
                    argText = (origArg[1]>>>0).toString(16);
                    var lower = (origArg[0]>>>0).toString(16);
                    while (lower.length < 8) lower = '0' + lower;
                    argText += lower;
                  } else {
                    argText = (origArg[0]>>>0).toString(16);
                  }
                } else
                if (currArg < 0) {
                  // Represent negative numbers in hex as 2's complement.
                  currArg = -currArg;
                  argText = (currAbsArg - 1).toString(16);
                  var buffer = [];
                  for (var i = 0; i < argText.length; i++) {
                    buffer.push((0xF - parseInt(argText[i], 16)).toString(16));
                  }
                  argText = buffer.join('');
                  while (argText.length < argSize * 2) argText = 'f' + argText;
                } else {
                  argText = currAbsArg.toString(16);
                }
                if (next == 88) {
                  prefix = prefix.toUpperCase();
                  argText = argText.toUpperCase();
                }
              } else if (next == 112) {
                if (currAbsArg === 0) {
                  argText = '(nil)';
                } else {
                  prefix = '0x';
                  argText = currAbsArg.toString(16);
                }
              }
              if (precisionSet) {
                while (argText.length < precision) {
                  argText = '0' + argText;
                }
              }
  
              // Add sign if needed
              if (currArg >= 0) {
                if (flagAlwaysSigned) {
                  prefix = '+' + prefix;
                } else if (flagPadSign) {
                  prefix = ' ' + prefix;
                }
              }
  
              // Move sign to prefix so we zero-pad after the sign
              if (argText.charAt(0) == '-') {
                prefix = '-' + prefix;
                argText = argText.substr(1);
              }
  
              // Add padding.
              while (prefix.length + argText.length < width) {
                if (flagLeftAlign) {
                  argText += ' ';
                } else {
                  if (flagZeroPad) {
                    argText = '0' + argText;
                  } else {
                    prefix = ' ' + prefix;
                  }
                }
              }
  
              // Insert the result into the buffer.
              argText = prefix + argText;
              argText.split('').forEach(function(chr) {
                ret.push(chr.charCodeAt(0));
              });
              break;
            }
            case 'f': case 'F': case 'e': case 'E': case 'g': case 'G': {
              // Float.
              var currArg = getNextArg('double');
              var argText;
              if (isNaN(currArg)) {
                argText = 'nan';
                flagZeroPad = false;
              } else if (!isFinite(currArg)) {
                argText = (currArg < 0 ? '-' : '') + 'inf';
                flagZeroPad = false;
              } else {
                var isGeneral = false;
                var effectivePrecision = Math.min(precision, 20);
  
                // Convert g/G to f/F or e/E, as per:
                // http://pubs.opengroup.org/onlinepubs/9699919799/functions/printf.html
                if (next == 103 || next == 71) {
                  isGeneral = true;
                  precision = precision || 1;
                  var exponent = parseInt(currArg.toExponential(effectivePrecision).split('e')[1], 10);
                  if (precision > exponent && exponent >= -4) {
                    next = ((next == 103) ? 'f' : 'F').charCodeAt(0);
                    precision -= exponent + 1;
                  } else {
                    next = ((next == 103) ? 'e' : 'E').charCodeAt(0);
                    precision--;
                  }
                  effectivePrecision = Math.min(precision, 20);
                }
  
                if (next == 101 || next == 69) {
                  argText = currArg.toExponential(effectivePrecision);
                  // Make sure the exponent has at least 2 digits.
                  if (/[eE][-+]\d$/.test(argText)) {
                    argText = argText.slice(0, -1) + '0' + argText.slice(-1);
                  }
                } else if (next == 102 || next == 70) {
                  argText = currArg.toFixed(effectivePrecision);
                  if (currArg === 0 && __reallyNegative(currArg)) {
                    argText = '-' + argText;
                  }
                }
  
                var parts = argText.split('e');
                if (isGeneral && !flagAlternative) {
                  // Discard trailing zeros and periods.
                  while (parts[0].length > 1 && parts[0].indexOf('.') != -1 &&
                         (parts[0].slice(-1) == '0' || parts[0].slice(-1) == '.')) {
                    parts[0] = parts[0].slice(0, -1);
                  }
                } else {
                  // Make sure we have a period in alternative mode.
                  if (flagAlternative && argText.indexOf('.') == -1) parts[0] += '.';
                  // Zero pad until required precision.
                  while (precision > effectivePrecision++) parts[0] += '0';
                }
                argText = parts[0] + (parts.length > 1 ? 'e' + parts[1] : '');
  
                // Capitalize 'E' if needed.
                if (next == 69) argText = argText.toUpperCase();
  
                // Add sign.
                if (currArg >= 0) {
                  if (flagAlwaysSigned) {
                    argText = '+' + argText;
                  } else if (flagPadSign) {
                    argText = ' ' + argText;
                  }
                }
              }
  
              // Add padding.
              while (argText.length < width) {
                if (flagLeftAlign) {
                  argText += ' ';
                } else {
                  if (flagZeroPad && (argText[0] == '-' || argText[0] == '+')) {
                    argText = argText[0] + '0' + argText.slice(1);
                  } else {
                    argText = (flagZeroPad ? '0' : ' ') + argText;
                  }
                }
              }
  
              // Adjust case.
              if (next < 97) argText = argText.toUpperCase();
  
              // Insert the result into the buffer.
              argText.split('').forEach(function(chr) {
                ret.push(chr.charCodeAt(0));
              });
              break;
            }
            case 's': {
              // String.
              var arg = getNextArg('i8*');
              var argLength = arg ? _strlen(arg) : '(null)'.length;
              if (precisionSet) argLength = Math.min(argLength, precision);
              if (!flagLeftAlign) {
                while (argLength < width--) {
                  ret.push(32);
                }
              }
              if (arg) {
                for (var i = 0; i < argLength; i++) {
                  ret.push(HEAPU8[((arg++)|0)]);
                }
              } else {
                ret = ret.concat(intArrayFromString('(null)'.substr(0, argLength), true));
              }
              if (flagLeftAlign) {
                while (argLength < width--) {
                  ret.push(32);
                }
              }
              break;
            }
            case 'c': {
              // Character.
              if (flagLeftAlign) ret.push(getNextArg('i8'));
              while (--width > 0) {
                ret.push(32);
              }
              if (!flagLeftAlign) ret.push(getNextArg('i8'));
              break;
            }
            case 'n': {
              // Write the length written so far to the next parameter.
              var ptr = getNextArg('i32*');
              HEAP32[((ptr)>>2)]=ret.length;
              break;
            }
            case '%': {
              // Literal percent sign.
              ret.push(curr);
              break;
            }
            default: {
              // Unknown specifiers remain untouched.
              for (var i = startTextIndex; i < textIndex + 2; i++) {
                ret.push(HEAP8[(i)]);
              }
            }
          }
          textIndex += 2;
          // TODO: Support a/A (hex float) and m (last error) specifiers.
          // TODO: Support %1${specifier} for arg selection.
        } else {
          ret.push(curr);
          textIndex += 1;
        }
      }
      return ret;
    }function _fprintf(stream, format, varargs) {
      // int fprintf(FILE *restrict stream, const char *restrict format, ...);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/printf.html
      var result = __formatString(format, varargs);
      var stack = Runtime.stackSave();
      var ret = _fwrite(allocate(result, 'i8', ALLOC_STACK), 1, result.length, stream);
      Runtime.stackRestore(stack);
      return ret;
    }function _printf(format, varargs) {
      // int printf(const char *restrict format, ...);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/printf.html
      var stdout = HEAP32[((_stdout)>>2)];
      return _fprintf(stdout, format, varargs);
    }

  var _ceil=Math_ceil;

  function _SDL_EnableKeyRepeat(delay, interval) {
      // TODO
    }


  function _SDL_GetError() {
      if (!SDL.errorMessage) {
        SDL.errorMessage = allocate(intArrayFromString("unknown SDL-emscripten error"), 'i8', ALLOC_NORMAL);
      }
      return SDL.errorMessage;
    }

  function _SDL_NumJoysticks() {
      var count = 0;
      var gamepads = SDL.getGamepads();
      // The length is not the number of gamepads; check which ones are defined.
      for (var i = 0; i < gamepads.length; i++) {
        if (gamepads[i] !== undefined) count++;
      }
      return count;
    }

  function _SDL_JoystickIndex(joystick) {
      // joystick pointers are simply the deviceIndex+1.
      return joystick - 1;
    }

  function _SDL_JoystickName(deviceIndex) {
      var gamepad = SDL.getGamepad(deviceIndex);
      if (gamepad) {
        var name = gamepad.id;
        if (SDL.joystickNamePool.hasOwnProperty(name)) {
          return SDL.joystickNamePool[name];
        }
        return SDL.joystickNamePool[name] = allocate(intArrayFromString(name), 'i8', ALLOC_NORMAL);
      }
      return 0;
    }

  function _SDL_JoystickClose(joystick) {
      delete SDL.lastJoystickState[joystick];
    }

  function _SDL_JoystickEventState(state) {
      if (state < 0) {
        // SDL_QUERY: Return current state.
        return SDL.joystickEventState;
      }
      return SDL.joystickEventState = state;
    }

  function _SDL_JoystickOpen(deviceIndex) {
      var gamepad = SDL.getGamepad(deviceIndex);
      if (gamepad) {
        // Use this as a unique 'pointer' for this joystick.
        var joystick = deviceIndex+1;
        SDL.recordJoystickState(joystick, gamepad);
        return joystick;
      }
      return 0;
    }

   
  Module["_strncpy"] = _strncpy;

   
  Module["_strcpy"] = _strcpy;

  
  function _snprintf(s, n, format, varargs) {
      // int snprintf(char *restrict s, size_t n, const char *restrict format, ...);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/printf.html
      var result = __formatString(format, varargs);
      var limit = (n === undefined) ? result.length
                                    : Math.min(result.length, Math.max(n - 1, 0));
      if (s < 0) {
        s = -s;
        var buf = _malloc(limit+1);
        HEAP32[((s)>>2)]=buf;
        s = buf;
      }
      for (var i = 0; i < limit; i++) {
        HEAP8[(((s)+(i))|0)]=result[i];
      }
      if (limit < n || (n === undefined)) HEAP8[(((s)+(i))|0)]=0;
      return result.length;
    }function _sprintf(s, format, varargs) {
      // int sprintf(char *restrict s, const char *restrict format, ...);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/printf.html
      return _snprintf(s, undefined, format, varargs);
    }

  
  
  function _SDL_LockSurface(surf) {
      var surfData = SDL.surfaces[surf];
  
      surfData.locked++;
      if (surfData.locked > 1) return 0;
  
      if (!surfData.buffer) {
        surfData.buffer = _malloc(surfData.width * surfData.height * 4);
        HEAP32[(((surf)+(20))>>2)]=surfData.buffer;
      }
  
      // Mark in C/C++-accessible SDL structure
      // SDL_Surface has the following fields: Uint32 flags, SDL_PixelFormat *format; int w, h; Uint16 pitch; void *pixels; ...
      // So we have fields all of the same size, and 5 of them before us.
      // TODO: Use macros like in library.js
      HEAP32[(((surf)+(20))>>2)]=surfData.buffer;
  
      if (surf == SDL.screen && Module.screenIsReadOnly && surfData.image) return 0;
  
      surfData.image = surfData.ctx.getImageData(0, 0, surfData.width, surfData.height);
      if (surf == SDL.screen) {
        var data = surfData.image.data;
        var num = data.length;
        for (var i = 0; i < num/4; i++) {
          data[i*4+3] = 255; // opacity, as canvases blend alpha
        }
      }
  
      if (SDL.defaults.copyOnLock) {
        // Copy pixel data to somewhere accessible to 'C/C++'
        if (surfData.isFlagSet(0x00200000 /* SDL_HWPALETTE */)) {
          // If this is neaded then
          // we should compact the data from 32bpp to 8bpp index.
          // I think best way to implement this is use
          // additional colorMap hash (color->index).
          // Something like this:
          //
          // var size = surfData.width * surfData.height;
          // var data = '';
          // for (var i = 0; i<size; i++) {
          //   var color = SDL.translateRGBAToColor(
          //     surfData.image.data[i*4   ], 
          //     surfData.image.data[i*4 +1], 
          //     surfData.image.data[i*4 +2], 
          //     255);
          //   var index = surfData.colorMap[color];
          //   HEAP8[(((surfData.buffer)+(i))|0)]=index;
          // }
          throw 'CopyOnLock is not supported for SDL_LockSurface with SDL_HWPALETTE flag set' + new Error().stack;
        } else {
        HEAPU8.set(surfData.image.data, surfData.buffer);
        }
      }
  
      return 0;
    }
  
  function _SDL_FreeRW(rwopsID) {
      SDL.rwops[rwopsID] = null;
      while (SDL.rwops.length > 0 && SDL.rwops[SDL.rwops.length-1] === null) {
        SDL.rwops.pop();
      }
    }function _IMG_Load_RW(rwopsID, freeSrc) {
      try {
        // stb_image integration support
        function cleanup() {
          if (rwops && freeSrc) _SDL_FreeRW(rwopsID);
        };
        function addCleanup(func) {
          var old = cleanup;
          cleanup = function added_cleanup() {
            old();
            func();
          }
        }
        function callStbImage(func, params) {
          var x = Module['_malloc'](4);
          var y = Module['_malloc'](4);
          var comp = Module['_malloc'](4);
          addCleanup(function() {
            Module['_free'](x);
            Module['_free'](y);
            Module['_free'](comp);
            if (data) Module['_stbi_image_free'](data);
          });
          var data = Module['_' + func].apply(null, params.concat([x, y, comp, 0]));
          if (!data) return null;
          return {
            rawData: true,
            data: data,
            width: HEAP32[((x)>>2)],
            height: HEAP32[((y)>>2)],
            size: HEAP32[((x)>>2)] * HEAP32[((y)>>2)] * HEAP32[((comp)>>2)],
            bpp: HEAP32[((comp)>>2)]
          };
        }
  
        var rwops = SDL.rwops[rwopsID];
        if (rwops === undefined) {
          return 0;
        }
  
        var filename = rwops.filename;
        if (filename === undefined) {
          Runtime.warnOnce('Only file names that have been preloaded are supported for IMG_Load_RW. Consider using STB_IMAGE=1 if you want synchronous image decoding (see settings.js)');
          return 0;
        }
  
        if (!raw) {
          filename = PATH.resolve(filename);
          var raw = Module["preloadedImages"][filename];
          if (!raw) {
            if (raw === null) Module.printErr('Trying to reuse preloaded image, but freePreloadedMediaOnUse is set!');
            Runtime.warnOnce('Cannot find preloaded image ' + filename);
            Runtime.warnOnce('Cannot find preloaded image ' + filename + '. Consider using STB_IMAGE=1 if you want synchronous image decoding (see settings.js)');
            return 0;
          } else if (Module['freePreloadedMediaOnUse']) {
            Module["preloadedImages"][filename] = null;
          }
        }
  
        var surf = SDL.makeSurface(raw.width, raw.height, 0, false, 'load:' + filename);
        var surfData = SDL.surfaces[surf];
        surfData.ctx.globalCompositeOperation = "copy";
        if (!raw.rawData) {
          surfData.ctx.drawImage(raw, 0, 0, raw.width, raw.height, 0, 0, raw.width, raw.height);
        } else {
          var imageData = surfData.ctx.getImageData(0, 0, surfData.width, surfData.height);
          if (raw.bpp == 4) {
            imageData.data.set(HEAPU8.subarray((raw.data),(raw.data+raw.size)));
          } else if (raw.bpp == 3) {
            var pixels = raw.size/3;
            var data = imageData.data;
            var sourcePtr = raw.data;
            var destPtr = 0;
            for (var i = 0; i < pixels; i++) {
              data[destPtr++] = HEAPU8[((sourcePtr++)|0)];
              data[destPtr++] = HEAPU8[((sourcePtr++)|0)];
              data[destPtr++] = HEAPU8[((sourcePtr++)|0)];
              data[destPtr++] = 255;
            }
          } else {
            Module.printErr('cannot handle bpp ' + raw.bpp);
            return 0;
          }
          surfData.ctx.putImageData(imageData, 0, 0);
        }
        surfData.ctx.globalCompositeOperation = "source-over";
        // XXX SDL does not specify that loaded images must have available pixel data, in fact
        //     there are cases where you just want to blit them, so you just need the hardware
        //     accelerated version. However, code everywhere seems to assume that the pixels
        //     are in fact available, so we retrieve it here. This does add overhead though.
        _SDL_LockSurface(surf);
        surfData.locked--; // The surface is not actually locked in this hack
        if (SDL.GL) {
          // After getting the pixel data, we can free the canvas and context if we do not need to do 2D canvas blitting
          surfData.canvas = surfData.ctx = null;
        }
        return surf;
      } finally {
        cleanup();
      }
    }var _SDL_LoadBMP_RW=_IMG_Load_RW;

  function _SDL_RWFromFile(_name, mode) {
      var id = SDL.rwops.length; // TODO: recycle ids when they are null
      var name = Pointer_stringify(_name)
      SDL.rwops.push({ filename: name, mimetype: Browser.getMimetype(name) });
      return id;
    }

  function _SDL_SetColorKey(surf, flag, key) {
      // SetColorKey assigns one color to be rendered as transparent. I don't
      // think the canvas API allows for anything like this, and iterating through
      // each pixel to replace that color seems prohibitively expensive.
      Runtime.warnOnce('SDL_SetColorKey is a no-op for performance reasons');
      return 0;
    }

  function _SDL_MapRGB(fmt, r, g, b) {
      // Canvas screens are always RGBA. We assume the machine is little-endian.
      return r&0xff|(g&0xff)<<8|(b&0xff)<<16|0xff000000;
    }

  function _SDL_DisplayFormatAlpha(surf) {
      var oldData = SDL.surfaces[surf];
      var ret = SDL.makeSurface(oldData.width, oldData.height, oldData.flags, false, 'copy:' + oldData.source);
      var newData = SDL.surfaces[ret];
      //newData.ctx.putImageData(oldData.ctx.getImageData(0, 0, oldData.width, oldData.height), 0, 0);
      newData.ctx.drawImage(oldData.canvas, 0, 0);
      return ret;
    }

  function _SDL_FreeSurface(surf) {
      if (surf) SDL.freeSurface(surf);
    }


  function _SDL_UnlockSurface(surf) {
      assert(!SDL.GL); // in GL mode we do not keep around 2D canvases and contexts
  
      var surfData = SDL.surfaces[surf];
  
      if (!surfData.locked || --surfData.locked > 0) {
        return;
      }
  
      // Copy pixel data to image
      if (surfData.isFlagSet(0x00200000 /* SDL_HWPALETTE */)) {
        SDL.copyIndexedColorData(surfData);
      } else if (!surfData.colors) {
        var data = surfData.image.data;
        var buffer = surfData.buffer;
        assert(buffer % 4 == 0, 'Invalid buffer offset: ' + buffer);
        var src = buffer >> 2;
        var dst = 0;
        var isScreen = surf == SDL.screen;
        var num;
        if (typeof CanvasPixelArray !== 'undefined' && data instanceof CanvasPixelArray) {
          // IE10/IE11: ImageData objects are backed by the deprecated CanvasPixelArray,
          // not UInt8ClampedArray. These don't have buffers, so we need to revert
          // to copying a byte at a time. We do the undefined check because modern
          // browsers do not define CanvasPixelArray anymore.
          num = data.length;
          while (dst < num) {
            var val = HEAP32[src]; // This is optimized. Instead, we could do HEAP32[(((buffer)+(dst))>>2)];
            data[dst  ] = val & 0xff;
            data[dst+1] = (val >> 8) & 0xff;
            data[dst+2] = (val >> 16) & 0xff;
            data[dst+3] = isScreen ? 0xff : ((val >> 24) & 0xff);
            src++;
            dst += 4;
          }
        } else {
          var data32 = new Uint32Array(data.buffer);
          num = data32.length;
          if (isScreen) {
            while (dst < num) {
              // HEAP32[src++] is an optimization. Instead, we could do HEAP32[(((buffer)+(dst))>>2)];
              data32[dst++] = HEAP32[src++] | 0xff000000;
            }
          } else {
            while (dst < num) {
              data32[dst++] = HEAP32[src++];
            }
          }
        }
      } else {
        var width = Module['canvas'].width;
        var height = Module['canvas'].height;
        var s = surfData.buffer;
        var data = surfData.image.data;
        var colors = surfData.colors;
        for (var y = 0; y < height; y++) {
          var base = y*width*4;
          for (var x = 0; x < width; x++) {
            // See comment above about signs
            var val = HEAPU8[((s++)|0)] * 3;
            var start = base + x*4;
            data[start]   = colors[val];
            data[start+1] = colors[val+1];
            data[start+2] = colors[val+2];
          }
          s += width*3;
        }
      }
      // Copy to canvas
      surfData.ctx.putImageData(surfData.image, 0, 0);
      // Note that we save the image, so future writes are fast. But, memory is not yet released
    }

  function _SDL_CreateRGBSurface(flags, width, height, depth, rmask, gmask, bmask, amask) {
      return SDL.makeSurface(width, height, flags, false, 'CreateRGBSurface', rmask, gmask, bmask, amask);
    }

  function _SDL_FillRect(surf, rect, color) {
      var surfData = SDL.surfaces[surf];
      assert(!surfData.locked); // but we could unlock and re-lock if we must..
      
      if (surfData.isFlagSet(0x00200000 /* SDL_HWPALETTE */)) {
        //in SDL_HWPALETTE color is index (0..255)
        //so we should translate 1 byte value to
        //32 bit canvas
        var index = color * 3;
        color = SDL.translateRGBAToColor(surfData.colors[index], surfData.colors[index +1], surfData.colors[index +2], 255);
      }
  
      var r = rect ? SDL.loadRect(rect) : { x: 0, y: 0, w: surfData.width, h: surfData.height };
      surfData.ctx.save();
      surfData.ctx.fillStyle = SDL.translateColorToCSSRGBA(color);
      surfData.ctx.fillRect(r.x, r.y, r.w, r.h);
      surfData.ctx.restore();
      return 0;
    }

  function _SDL_UpperBlit(src, srcrect, dst, dstrect) {
      var srcData = SDL.surfaces[src];
      var dstData = SDL.surfaces[dst];
      var sr, dr;
      if (srcrect) {
        sr = SDL.loadRect(srcrect);
      } else {
        sr = { x: 0, y: 0, w: srcData.width, h: srcData.height };
      }
      if (dstrect) {
        dr = SDL.loadRect(dstrect);
      } else {
        dr = { x: 0, y: 0, w: -1, h: -1 };
      }
      var oldAlpha = dstData.ctx.globalAlpha;
      dstData.ctx.globalAlpha = srcData.alpha/255;
      dstData.ctx.drawImage(srcData.canvas, sr.x, sr.y, sr.w, sr.h, dr.x, dr.y, sr.w, sr.h);
      dstData.ctx.globalAlpha = oldAlpha;
      if (dst != SDL.screen) {
        // XXX As in IMG_Load, for compatibility we write out |pixels|
        console.log('WARNING: copying canvas data to memory for compatibility');
        _SDL_LockSurface(dst);
        dstData.locked--; // The surface is not actually locked in this hack
      }
      return 0;
    }

  function _SDL_Flip(surf) {
      // We actually do this in Unlock, since the screen surface has as its canvas
      // backing the page canvas element
    }

  function _time(ptr) {
      var ret = Math.floor(Date.now()/1000);
      if (ptr) {
        HEAP32[((ptr)>>2)]=ret;
      }
      return ret;
    }

  
  
  function __getFloat(text) {
      return /^[+-]?[0-9]*\.?[0-9]+([eE][+-]?[0-9]+)?/.exec(text);
    }function __scanString(format, get, unget, varargs) {
      if (!__scanString.whiteSpace) {
        __scanString.whiteSpace = {};
        __scanString.whiteSpace[32] = 1;
        __scanString.whiteSpace[9] = 1;
        __scanString.whiteSpace[10] = 1;
        __scanString.whiteSpace[11] = 1;
        __scanString.whiteSpace[12] = 1;
        __scanString.whiteSpace[13] = 1;
      }
      // Supports %x, %4x, %d.%d, %lld, %s, %f, %lf.
      // TODO: Support all format specifiers.
      format = Pointer_stringify(format);
      var soFar = 0;
      if (format.indexOf('%n') >= 0) {
        // need to track soFar
        var _get = get;
        get = function get() {
          soFar++;
          return _get();
        }
        var _unget = unget;
        unget = function unget() {
          soFar--;
          return _unget();
        }
      }
      var formatIndex = 0;
      var argsi = 0;
      var fields = 0;
      var argIndex = 0;
      var next;
  
      mainLoop:
      for (var formatIndex = 0; formatIndex < format.length;) {
        if (format[formatIndex] === '%' && format[formatIndex+1] == 'n') {
          var argPtr = HEAP32[(((varargs)+(argIndex))>>2)];
          argIndex += Runtime.getAlignSize('void*', null, true);
          HEAP32[((argPtr)>>2)]=soFar;
          formatIndex += 2;
          continue;
        }
  
        if (format[formatIndex] === '%') {
          var nextC = format.indexOf('c', formatIndex+1);
          if (nextC > 0) {
            var maxx = 1;
            if (nextC > formatIndex+1) {
              var sub = format.substring(formatIndex+1, nextC);
              maxx = parseInt(sub);
              if (maxx != sub) maxx = 0;
            }
            if (maxx) {
              var argPtr = HEAP32[(((varargs)+(argIndex))>>2)];
              argIndex += Runtime.getAlignSize('void*', null, true);
              fields++;
              for (var i = 0; i < maxx; i++) {
                next = get();
                HEAP8[((argPtr++)|0)]=next;
                if (next === 0) return i > 0 ? fields : fields-1; // we failed to read the full length of this field
              }
              formatIndex += nextC - formatIndex + 1;
              continue;
            }
          }
        }
  
        // handle %[...]
        if (format[formatIndex] === '%' && format.indexOf('[', formatIndex+1) > 0) {
          var match = /\%([0-9]*)\[(\^)?(\]?[^\]]*)\]/.exec(format.substring(formatIndex));
          if (match) {
            var maxNumCharacters = parseInt(match[1]) || Infinity;
            var negateScanList = (match[2] === '^');
            var scanList = match[3];
  
            // expand "middle" dashs into character sets
            var middleDashMatch;
            while ((middleDashMatch = /([^\-])\-([^\-])/.exec(scanList))) {
              var rangeStartCharCode = middleDashMatch[1].charCodeAt(0);
              var rangeEndCharCode = middleDashMatch[2].charCodeAt(0);
              for (var expanded = ''; rangeStartCharCode <= rangeEndCharCode; expanded += String.fromCharCode(rangeStartCharCode++));
              scanList = scanList.replace(middleDashMatch[1] + '-' + middleDashMatch[2], expanded);
            }
  
            var argPtr = HEAP32[(((varargs)+(argIndex))>>2)];
            argIndex += Runtime.getAlignSize('void*', null, true);
            fields++;
  
            for (var i = 0; i < maxNumCharacters; i++) {
              next = get();
              if (negateScanList) {
                if (scanList.indexOf(String.fromCharCode(next)) < 0) {
                  HEAP8[((argPtr++)|0)]=next;
                } else {
                  unget();
                  break;
                }
              } else {
                if (scanList.indexOf(String.fromCharCode(next)) >= 0) {
                  HEAP8[((argPtr++)|0)]=next;
                } else {
                  unget();
                  break;
                }
              }
            }
  
            // write out null-terminating character
            HEAP8[((argPtr++)|0)]=0;
            formatIndex += match[0].length;
            
            continue;
          }
        }      
        // remove whitespace
        while (1) {
          next = get();
          if (next == 0) return fields;
          if (!(next in __scanString.whiteSpace)) break;
        }
        unget();
  
        if (format[formatIndex] === '%') {
          formatIndex++;
          var suppressAssignment = false;
          if (format[formatIndex] == '*') {
            suppressAssignment = true;
            formatIndex++;
          }
          var maxSpecifierStart = formatIndex;
          while (format[formatIndex].charCodeAt(0) >= 48 &&
                 format[formatIndex].charCodeAt(0) <= 57) {
            formatIndex++;
          }
          var max_;
          if (formatIndex != maxSpecifierStart) {
            max_ = parseInt(format.slice(maxSpecifierStart, formatIndex), 10);
          }
          var long_ = false;
          var half = false;
          var longLong = false;
          if (format[formatIndex] == 'l') {
            long_ = true;
            formatIndex++;
            if (format[formatIndex] == 'l') {
              longLong = true;
              formatIndex++;
            }
          } else if (format[formatIndex] == 'h') {
            half = true;
            formatIndex++;
          }
          var type = format[formatIndex];
          formatIndex++;
          var curr = 0;
          var buffer = [];
          // Read characters according to the format. floats are trickier, they may be in an unfloat state in the middle, then be a valid float later
          if (type == 'f' || type == 'e' || type == 'g' ||
              type == 'F' || type == 'E' || type == 'G') {
            next = get();
            while (next > 0 && (!(next in __scanString.whiteSpace)))  {
              buffer.push(String.fromCharCode(next));
              next = get();
            }
            var m = __getFloat(buffer.join(''));
            var last = m ? m[0].length : 0;
            for (var i = 0; i < buffer.length - last + 1; i++) {
              unget();
            }
            buffer.length = last;
          } else {
            next = get();
            var first = true;
            
            // Strip the optional 0x prefix for %x.
            if ((type == 'x' || type == 'X') && (next == 48)) {
              var peek = get();
              if (peek == 120 || peek == 88) {
                next = get();
              } else {
                unget();
              }
            }
            
            while ((curr < max_ || isNaN(max_)) && next > 0) {
              if (!(next in __scanString.whiteSpace) && // stop on whitespace
                  (type == 's' ||
                   ((type === 'd' || type == 'u' || type == 'i') && ((next >= 48 && next <= 57) ||
                                                                     (first && next == 45))) ||
                   ((type === 'x' || type === 'X') && (next >= 48 && next <= 57 ||
                                     next >= 97 && next <= 102 ||
                                     next >= 65 && next <= 70))) &&
                  (formatIndex >= format.length || next !== format[formatIndex].charCodeAt(0))) { // Stop when we read something that is coming up
                buffer.push(String.fromCharCode(next));
                next = get();
                curr++;
                first = false;
              } else {
                break;
              }
            }
            unget();
          }
          if (buffer.length === 0) return 0;  // Failure.
          if (suppressAssignment) continue;
  
          var text = buffer.join('');
          var argPtr = HEAP32[(((varargs)+(argIndex))>>2)];
          argIndex += Runtime.getAlignSize('void*', null, true);
          switch (type) {
            case 'd': case 'u': case 'i':
              if (half) {
                HEAP16[((argPtr)>>1)]=parseInt(text, 10);
              } else if (longLong) {
                (tempI64 = [parseInt(text, 10)>>>0,(tempDouble=parseInt(text, 10),(+(Math_abs(tempDouble))) >= (+1) ? (tempDouble > (+0) ? ((Math_min((+(Math_floor((tempDouble)/(+4294967296)))), (+4294967295)))|0)>>>0 : (~~((+(Math_ceil((tempDouble - +(((~~(tempDouble)))>>>0))/(+4294967296))))))>>>0) : 0)],HEAP32[((argPtr)>>2)]=tempI64[0],HEAP32[(((argPtr)+(4))>>2)]=tempI64[1]);
              } else {
                HEAP32[((argPtr)>>2)]=parseInt(text, 10);
              }
              break;
            case 'X':
            case 'x':
              HEAP32[((argPtr)>>2)]=parseInt(text, 16);
              break;
            case 'F':
            case 'f':
            case 'E':
            case 'e':
            case 'G':
            case 'g':
            case 'E':
              // fallthrough intended
              if (long_) {
                HEAPF64[((argPtr)>>3)]=parseFloat(text);
              } else {
                HEAPF32[((argPtr)>>2)]=parseFloat(text);
              }
              break;
            case 's':
              var array = intArrayFromString(text);
              for (var j = 0; j < array.length; j++) {
                HEAP8[(((argPtr)+(j))|0)]=array[j];
              }
              break;
          }
          fields++;
        } else if (format[formatIndex].charCodeAt(0) in __scanString.whiteSpace) {
          next = get();
          while (next in __scanString.whiteSpace) {
            if (next <= 0) break mainLoop;  // End of input.
            next = get();
          }
          unget(next);
          formatIndex++;
        } else {
          // Not a specifier.
          next = get();
          if (format[formatIndex].charCodeAt(0) !== next) {
            unget(next);
            break mainLoop;
          }
          formatIndex++;
        }
      }
      return fields;
    }function _sscanf(s, format, varargs) {
      // int sscanf(const char *restrict s, const char *restrict format, ... );
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/scanf.html
      var index = 0;
      function get() { return HEAP8[(((s)+(index++))|0)]; };
      function unget() { index--; };
      return __scanString(format, get, unget, varargs);
    }

  
  
  
  
  var _environ=allocate(1, "i32*", ALLOC_STATIC);var ___environ=_environ;function ___buildEnvironment(env) {
      // WARNING: Arbitrary limit!
      var MAX_ENV_VALUES = 64;
      var TOTAL_ENV_SIZE = 1024;
  
      // Statically allocate memory for the environment.
      var poolPtr;
      var envPtr;
      if (!___buildEnvironment.called) {
        ___buildEnvironment.called = true;
        // Set default values. Use string keys for Closure Compiler compatibility.
        ENV['USER'] = 'root';
        ENV['PATH'] = '/';
        ENV['PWD'] = '/';
        ENV['HOME'] = '/home/emscripten';
        ENV['LANG'] = 'en_US.UTF-8';
        ENV['_'] = './this.program';
        // Allocate memory.
        poolPtr = allocate(TOTAL_ENV_SIZE, 'i8', ALLOC_STATIC);
        envPtr = allocate(MAX_ENV_VALUES * 4,
                          'i8*', ALLOC_STATIC);
        HEAP32[((envPtr)>>2)]=poolPtr;
        HEAP32[((_environ)>>2)]=envPtr;
      } else {
        envPtr = HEAP32[((_environ)>>2)];
        poolPtr = HEAP32[((envPtr)>>2)];
      }
  
      // Collect key=value lines.
      var strings = [];
      var totalSize = 0;
      for (var key in env) {
        if (typeof env[key] === 'string') {
          var line = key + '=' + env[key];
          strings.push(line);
          totalSize += line.length;
        }
      }
      if (totalSize > TOTAL_ENV_SIZE) {
        throw new Error('Environment size exceeded TOTAL_ENV_SIZE!');
      }
  
      // Make new.
      var ptrSize = 4;
      for (var i = 0; i < strings.length; i++) {
        var line = strings[i];
        writeAsciiToMemory(line, poolPtr);
        HEAP32[(((envPtr)+(i * ptrSize))>>2)]=poolPtr;
        poolPtr += line.length + 1;
      }
      HEAP32[(((envPtr)+(strings.length * ptrSize))>>2)]=0;
    }var ENV={};function _getenv(name) {
      // char *getenv(const char *name);
      // http://pubs.opengroup.org/onlinepubs/009695399/functions/getenv.html
      if (name === 0) return 0;
      name = Pointer_stringify(name);
      if (!ENV.hasOwnProperty(name)) return 0;
  
      if (_getenv.ret) _free(_getenv.ret);
      _getenv.ret = allocate(intArrayFromString(ENV[name]), 'i8', ALLOC_NORMAL);
      return _getenv.ret;
    }

   
  Module["_strcat"] = _strcat;

  function _SDL_Init(initFlags) {
      SDL.startTime = Date.now();
      SDL.initFlags = initFlags;
  
      // capture all key events. we just keep down and up, but also capture press to prevent default actions
      if (!Module['doNotCaptureKeyboard']) {
        document.addEventListener("keydown", SDL.receiveEvent);
        document.addEventListener("keyup", SDL.receiveEvent);
        document.addEventListener("keypress", SDL.receiveEvent);
        window.addEventListener("blur", SDL.receiveEvent);
        document.addEventListener("visibilitychange", SDL.receiveEvent);
      }
  
      if (initFlags & 0x200) {
        // SDL_INIT_JOYSTICK
        // Firefox will not give us Joystick data unless we register this NOP
        // callback.
        // https://bugzilla.mozilla.org/show_bug.cgi?id=936104
        addEventListener("gamepadconnected", function() {});
      }
  
      window.addEventListener("unload", SDL.receiveEvent);
      SDL.keyboardState = _malloc(0x10000); // Our SDL needs 512, but 64K is safe for older SDLs
      _memset(SDL.keyboardState, 0, 0x10000);
      // Initialize this structure carefully for closure
      SDL.DOMEventToSDLEvent['keydown'] = 0x300 /* SDL_KEYDOWN */;
      SDL.DOMEventToSDLEvent['keyup'] = 0x301 /* SDL_KEYUP */;
      SDL.DOMEventToSDLEvent['keypress'] = 0x303 /* SDL_TEXTINPUT */;
      SDL.DOMEventToSDLEvent['mousedown'] = 0x401 /* SDL_MOUSEBUTTONDOWN */;
      SDL.DOMEventToSDLEvent['mouseup'] = 0x402 /* SDL_MOUSEBUTTONUP */;
      SDL.DOMEventToSDLEvent['mousemove'] = 0x400 /* SDL_MOUSEMOTION */;
      SDL.DOMEventToSDLEvent['unload'] = 0x100 /* SDL_QUIT */;
      SDL.DOMEventToSDLEvent['resize'] = 0x7001 /* SDL_VIDEORESIZE/SDL_EVENT_COMPAT2 */;
      // These are not technically DOM events; the HTML gamepad API is poll-based.
      // However, we define them here, as the rest of the SDL code assumes that
      // all SDL events originate as DOM events.
      SDL.DOMEventToSDLEvent['joystick_axis_motion'] = 0x600 /* SDL_JOYAXISMOTION */;
      SDL.DOMEventToSDLEvent['joystick_button_down'] = 0x603 /* SDL_JOYBUTTONDOWN */;
      SDL.DOMEventToSDLEvent['joystick_button_up'] = 0x604 /* SDL_JOYBUTTONUP */;
      return 0; // success
    }

  function _atexit(func, arg) {
      __ATEXIT__.unshift({ func: func, arg: arg });
    }

  function _SDL_WM_SetCaption(title, icon) {
      title = title && Pointer_stringify(title);
      icon = icon && Pointer_stringify(icon);
    }

  
  function __exit(status) {
      // void _exit(int status);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/exit.html
      Module['exit'](status);
    }function _exit(status) {
      __exit(status);
    }

  function _SDL_AddTimer(interval, callback, param) {
      return window.setTimeout(function() {
        Runtime.dynCall('iii', callback, [interval, param]);
      }, interval);
    }

  function _emscripten_set_main_loop(func, fps, simulateInfiniteLoop) {
      Module['noExitRuntime'] = true;
  
      Browser.mainLoop.runner = function Browser_mainLoop_runner() {
        if (ABORT) return;
        if (Browser.mainLoop.queue.length > 0) {
          var start = Date.now();
          var blocker = Browser.mainLoop.queue.shift();
          blocker.func(blocker.arg);
          if (Browser.mainLoop.remainingBlockers) {
            var remaining = Browser.mainLoop.remainingBlockers;
            var next = remaining%1 == 0 ? remaining-1 : Math.floor(remaining);
            if (blocker.counted) {
              Browser.mainLoop.remainingBlockers = next;
            } else {
              // not counted, but move the progress along a tiny bit
              next = next + 0.5; // do not steal all the next one's progress
              Browser.mainLoop.remainingBlockers = (8*remaining + next)/9;
            }
          }
          console.log('main loop blocker "' + blocker.name + '" took ' + (Date.now() - start) + ' ms'); //, left: ' + Browser.mainLoop.remainingBlockers);
          Browser.mainLoop.updateStatus();
          setTimeout(Browser.mainLoop.runner, 0);
          return;
        }
        if (Browser.mainLoop.shouldPause) {
          // catch pauses from non-main loop sources
          Browser.mainLoop.paused = true;
          Browser.mainLoop.shouldPause = false;
          return;
        }
  
        // Signal GL rendering layer that processing of a new frame is about to start. This helps it optimize
        // VBO double-buffering and reduce GPU stalls.
  
        if (Browser.mainLoop.method === 'timeout' && Module.ctx) {
          Module.printErr('Looks like you are rendering without using requestAnimationFrame for the main loop. You should use 0 for the frame rate in emscripten_set_main_loop in order to use requestAnimationFrame, as that can greatly improve your frame rates!');
          Browser.mainLoop.method = ''; // just warn once per call to set main loop
        }
  
        if (Module['preMainLoop']) {
          Module['preMainLoop']();
        }
  
        try {
          Runtime.dynCall('v', func);
        } catch (e) {
          if (e instanceof ExitStatus) {
            return;
          } else {
            if (e && typeof e === 'object' && e.stack) Module.printErr('exception thrown: ' + [e, e.stack]);
            throw e;
          }
        }
  
        if (Module['postMainLoop']) {
          Module['postMainLoop']();
        }
  
        if (Browser.mainLoop.shouldPause) {
          // catch pauses from the main loop itself
          Browser.mainLoop.paused = true;
          Browser.mainLoop.shouldPause = false;
          return;
        }
        Browser.mainLoop.scheduler();
      }
      if (fps && fps > 0) {
        Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler() {
          setTimeout(Browser.mainLoop.runner, 1000/fps); // doing this each time means that on exception, we stop
        };
        Browser.mainLoop.method = 'timeout';
      } else {
        Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler() {
          Browser.requestAnimationFrame(Browser.mainLoop.runner);
        };
        Browser.mainLoop.method = 'rAF';
      }
      Browser.mainLoop.scheduler();
  
      if (simulateInfiniteLoop) {
        throw 'SimulateInfiniteLoop';
      }
    }

  function _SDL_RemoveTimer(id) {
      window.clearTimeout(id);
      return true;
    }

  function _SDL_Quit() {
      for (var i = 0; i < SDL.numChannels; ++i) {
        if (SDL.channels[i].audio) {
          SDL.channels[i].audio.pause();
        }
      }
      if (SDL.music.audio) {
        SDL.music.audio.pause();
      }
      Module.print('SDL_Quit called (and ignored)');
    }

  
   
  Module["_rand_r"] = _rand_r;
  
  var ___rand_seed=allocate([0x0273459b, 0, 0, 0], "i32", ALLOC_STATIC); 
  Module["_rand"] = _rand;

  
  function _open(path, oflag, varargs) {
      // int open(const char *path, int oflag, ...);
      // http://pubs.opengroup.org/onlinepubs/009695399/functions/open.html
      var mode = HEAP32[((varargs)>>2)];
      path = Pointer_stringify(path);
      try {
        var stream = FS.open(path, oflag, mode);
        return stream.fd;
      } catch (e) {
        FS.handleFSError(e);
        return -1;
      }
    }function _fopen(filename, mode) {
      // FILE *fopen(const char *restrict filename, const char *restrict mode);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/fopen.html
      var flags;
      mode = Pointer_stringify(mode);
      if (mode[0] == 'r') {
        if (mode.indexOf('+') != -1) {
          flags = 2;
        } else {
          flags = 0;
        }
      } else if (mode[0] == 'w') {
        if (mode.indexOf('+') != -1) {
          flags = 2;
        } else {
          flags = 1;
        }
        flags |= 64;
        flags |= 512;
      } else if (mode[0] == 'a') {
        if (mode.indexOf('+') != -1) {
          flags = 2;
        } else {
          flags = 1;
        }
        flags |= 64;
        flags |= 1024;
      } else {
        ___setErrNo(ERRNO_CODES.EINVAL);
        return 0;
      }
      var fd = _open(filename, flags, allocate([0x1FF, 0, 0, 0], 'i32', ALLOC_STACK));  // All creation permissions.
      return fd === -1 ? 0 : FS.getPtrForStream(FS.getStream(fd));
    }

  
  function _close(fildes) {
      // int close(int fildes);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/close.html
      var stream = FS.getStream(fildes);
      if (!stream) {
        ___setErrNo(ERRNO_CODES.EBADF);
        return -1;
      }
      try {
        FS.close(stream);
        return 0;
      } catch (e) {
        FS.handleFSError(e);
        return -1;
      }
    }
  
  function _fsync(fildes) {
      // int fsync(int fildes);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/fsync.html
      var stream = FS.getStream(fildes);
      if (stream) {
        // We write directly to the file system, so there's nothing to do here.
        return 0;
      } else {
        ___setErrNo(ERRNO_CODES.EBADF);
        return -1;
      }
    }function _fclose(stream) {
      // int fclose(FILE *stream);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/fclose.html
      var fd = _fileno(stream);
      _fsync(fd);
      return _close(fd);
    }

  function _feof(stream) {
      // int feof(FILE *stream);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/feof.html
      stream = FS.getStreamFromPtr(stream);
      return Number(stream && stream.eof);
    }

  
  
  
  
  function _recv(fd, buf, len, flags) {
      var sock = SOCKFS.getSocket(fd);
      if (!sock) {
        ___setErrNo(ERRNO_CODES.EBADF);
        return -1;
      }
      // TODO honor flags
      return _read(fd, buf, len);
    }
  
  function _pread(fildes, buf, nbyte, offset) {
      // ssize_t pread(int fildes, void *buf, size_t nbyte, off_t offset);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/read.html
      var stream = FS.getStream(fildes);
      if (!stream) {
        ___setErrNo(ERRNO_CODES.EBADF);
        return -1;
      }
      try {
        var slab = HEAP8;
        return FS.read(stream, slab, buf, nbyte, offset);
      } catch (e) {
        FS.handleFSError(e);
        return -1;
      }
    }function _read(fildes, buf, nbyte) {
      // ssize_t read(int fildes, void *buf, size_t nbyte);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/read.html
      var stream = FS.getStream(fildes);
      if (!stream) {
        ___setErrNo(ERRNO_CODES.EBADF);
        return -1;
      }
  
  
      try {
        var slab = HEAP8;
        return FS.read(stream, slab, buf, nbyte);
      } catch (e) {
        FS.handleFSError(e);
        return -1;
      }
    }function _fread(ptr, size, nitems, stream) {
      // size_t fread(void *restrict ptr, size_t size, size_t nitems, FILE *restrict stream);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/fread.html
      var bytesToRead = nitems * size;
      if (bytesToRead == 0) {
        return 0;
      }
      var bytesRead = 0;
      var streamObj = FS.getStreamFromPtr(stream);
      if (!streamObj) {
        ___setErrNo(ERRNO_CODES.EBADF);
        return 0;
      }
      while (streamObj.ungotten.length && bytesToRead > 0) {
        HEAP8[((ptr++)|0)]=streamObj.ungotten.pop();
        bytesToRead--;
        bytesRead++;
      }
      var err = _read(streamObj.fd, ptr, bytesToRead);
      if (err == -1) {
        if (streamObj) streamObj.error = true;
        return 0;
      }
      bytesRead += err;
      if (bytesRead < bytesToRead) streamObj.eof = true;
      return Math.floor(bytesRead / size);
    }function _fgetc(stream) {
      // int fgetc(FILE *stream);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/fgetc.html
      var streamObj = FS.getStreamFromPtr(stream);
      if (!streamObj) return -1;
      if (streamObj.eof || streamObj.error) return -1;
      var ret = _fread(_fgetc.ret, 1, 1, stream);
      if (ret == 0) {
        return -1;
      } else if (ret == -1) {
        streamObj.error = true;
        return -1;
      } else {
        return HEAPU8[((_fgetc.ret)|0)];
      }
    }function _fgets(s, n, stream) {
      // char *fgets(char *restrict s, int n, FILE *restrict stream);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/fgets.html
      var streamObj = FS.getStreamFromPtr(stream);
      if (!streamObj) return 0;
      if (streamObj.error || streamObj.eof) return 0;
      var byte_;
      for (var i = 0; i < n - 1 && byte_ != 10; i++) {
        byte_ = _fgetc(stream);
        if (byte_ == -1) {
          if (streamObj.error || (streamObj.eof && i == 0)) return 0;
          else if (streamObj.eof) break;
        }
        HEAP8[(((s)+(i))|0)]=byte_;
      }
      HEAP8[(((s)+(i))|0)]=0;
      return s;
    }

  function _unlink(path) {
      // int unlink(const char *path);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/unlink.html
      path = Pointer_stringify(path);
      try {
        FS.unlink(path);
        return 0;
      } catch (e) {
        FS.handleFSError(e);
        return -1;
      }
    }

  function _rename(old_path, new_path) {
      // int rename(const char *old, const char *new);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/rename.html
      old_path = Pointer_stringify(old_path);
      new_path = Pointer_stringify(new_path);
      try {
        FS.rename(old_path, new_path);
        return 0;
      } catch (e) {
        FS.handleFSError(e);
        return -1;
      }
    }

  
  function _mknod(path, mode, dev) {
      // int mknod(const char *path, mode_t mode, dev_t dev);
      // http://pubs.opengroup.org/onlinepubs/7908799/xsh/mknod.html
      path = Pointer_stringify(path);
      // we don't want this in the JS API as the JS API
      // uses mknod to create all nodes.
      switch (mode & 61440) {
        case 32768:
        case 8192:
        case 24576:
        case 4096:
        case 49152:
          break;
        default:
          ___setErrNo(ERRNO_CODES.EINVAL);
          return -1;
      }
      try {
        FS.mknod(path, mode, dev);
        return 0;
      } catch (e) {
        FS.handleFSError(e);
        return -1;
      }
    }function _mkdir(path, mode) {
      // int mkdir(const char *path, mode_t mode);
      // http://pubs.opengroup.org/onlinepubs/7908799/xsh/mkdir.html
      path = Pointer_stringify(path);
      try {
        FS.mkdir(path, mode, 0);
        return 0;
      } catch (e) {
        FS.handleFSError(e);
        return -1;
      }
    }

  function _opendir(dirname) {
      // DIR *opendir(const char *dirname);
      // http://pubs.opengroup.org/onlinepubs/007908799/xsh/opendir.html
      // NOTE: Calculating absolute path redundantly since we need to associate it
      //       with the opened stream.
      var path = Pointer_stringify(dirname);
      if (!path) {
        ___setErrNo(ERRNO_CODES.ENOENT);
        return 0;
      }
      var node;
      try {
        var lookup = FS.lookupPath(path, { follow: true });
        node = lookup.node;
      } catch (e) {
        FS.handleFSError(e);
        return 0;
      }
      if (!FS.isDir(node.mode)) {
        ___setErrNo(ERRNO_CODES.ENOTDIR);
        return 0;
      }
      var fd = _open(dirname, 0, allocate([0, 0, 0, 0], 'i32', ALLOC_STACK));
      return fd === -1 ? 0 : FS.getPtrForStream(FS.getStream(fd));
    }

  
  function _readdir_r(dirp, entry, result) {
      // int readdir_r(DIR *dirp, struct dirent *entry, struct dirent **result);
      // http://pubs.opengroup.org/onlinepubs/007908799/xsh/readdir_r.html
      var stream = FS.getStreamFromPtr(dirp);
      if (!stream) {
        return ___setErrNo(ERRNO_CODES.EBADF);
      }
      var entries;
      try {
        entries = FS.readdir(stream.path);
      } catch (e) {
        return FS.handleFSError(e);
      }
      if (stream.position < 0 || stream.position >= entries.length) {
        HEAP32[((result)>>2)]=0;
        return 0;
      }
      var id;
      var type;
      var name = entries[stream.position];
      var offset = stream.position + 1;
      if (!name.indexOf('.')) {
        id = 1;
        type = 4;
      } else {
        var child = FS.lookupNode(stream.node, name);
        id = child.id;
        type = FS.isChrdev(child.mode) ? 2 :  // DT_CHR, character device.
               FS.isDir(child.mode) ? 4 :     // DT_DIR, directory.
               FS.isLink(child.mode) ? 10 :   // DT_LNK, symbolic link.
               8;                             // DT_REG, regular file.
      }
      HEAP32[((entry)>>2)]=id;
      HEAP32[(((entry)+(4))>>2)]=offset;
      HEAP32[(((entry)+(8))>>2)]=name.length + 1;
      for (var i = 0; i < name.length; i++) {
        HEAP8[(((entry + 11)+(i))|0)]=name.charCodeAt(i);
      }
      HEAP8[(((entry + 11)+(i))|0)]=0;
      HEAP8[(((entry)+(10))|0)]=type;
      HEAP32[((result)>>2)]=entry;
      stream.position++;
      return 0;
    }function _readdir(dirp) {
      // struct dirent *readdir(DIR *dirp);
      // http://pubs.opengroup.org/onlinepubs/007908799/xsh/readdir_r.html
      var stream = FS.getStreamFromPtr(dirp);
      if (!stream) {
        ___setErrNo(ERRNO_CODES.EBADF);
        return 0;
      }
      // TODO Is it supposed to be safe to execute multiple readdirs?
      if (!_readdir.entry) _readdir.entry = _malloc(268);
      if (!_readdir.result) _readdir.result = _malloc(4);
      var err = _readdir_r(dirp, _readdir.entry, _readdir.result);
      if (err) {
        ___setErrNo(err);
        return 0;
      }
      return HEAP32[((_readdir.result)>>2)];
    }

  function _strstr(ptr1, ptr2) {
      var check = 0, start;
      do {
        if (!check) {
          start = ptr1;
          check = ptr2;
        }
        var curr1 = HEAP8[((ptr1++)|0)];
        var curr2 = HEAP8[((check++)|0)];
        if (curr2 == 0) return start;
        if (curr2 != curr1) {
          // rewind to one character after start, to find ez in eeez
          ptr1 = start + 1;
          check = 0;
        }
      } while (curr1);
      return 0;
    }

  function _closedir(dirp) {
      // int closedir(DIR *dirp);
      // http://pubs.opengroup.org/onlinepubs/007908799/xsh/closedir.html
      var fd = _fileno(dirp);
      return _close(fd);
    }


  function _strncat(pdest, psrc, num) {
      var len = _strlen(pdest);
      var i = 0;
      while(1) {
        HEAP8[((pdest+len+i)|0)]=HEAP8[((psrc+i)|0)];
        if (HEAP8[(((pdest)+(len+i))|0)] == 0) break;
        i ++;
        if (i == num) {
          HEAP8[(((pdest)+(len+i))|0)]=0;
          break;
        }
      }
      return pdest;
    }

  
  function _ungetc(c, stream) {
      // int ungetc(int c, FILE *stream);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/ungetc.html
      stream = FS.getStreamFromPtr(stream);
      if (!stream) {
        return -1;
      }
      if (c === -1) {
        // do nothing for EOF character
        return c;
      }
      c = unSign(c & 0xFF);
      stream.ungotten.push(c);
      stream.eof = false;
      return c;
    }function _fscanf(stream, format, varargs) {
      // int fscanf(FILE *restrict stream, const char *restrict format, ... );
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/scanf.html
      var streamObj = FS.getStreamFromPtr(stream);
      if (!streamObj) {
        return -1;
      }
      var buffer = [];
      function get() {
        var c = _fgetc(stream);
        buffer.push(c);
        return c;
      };
      function unget() {
        _ungetc(buffer.pop(), stream);
      };
      return __scanString(format, get, unget, varargs);
    }

  function _SDL_SetAlpha(surf, flag, alpha) {
      SDL.surfaces[surf].alpha = alpha;
    }

  function _SDL_ShowCursor(toggle) {
      switch (toggle) {
        case 0: // SDL_DISABLE
          if (Browser.isFullScreen) { // only try to lock the pointer when in full screen mode
            Module['canvas'].requestPointerLock();
            return 0;
          } else { // else return SDL_ENABLE to indicate the failure
            return 1;
          }
          break;
        case 1: // SDL_ENABLE
          Module['canvas'].exitPointerLock();
          return 1;
          break;
        case -1: // SDL_QUERY
          return !Browser.pointerLock;
          break;
        default:
          console.log( "SDL_ShowCursor called with unknown toggle parameter value: " + toggle + "." );
          break;
      }
    }

  function _SDL_ListModes(format, flags) {
      return -1; // -1 == all modes are ok. TODO
    }

  function _SDL_SetVideoMode(width, height, depth, flags) {
      ['mousedown', 'mouseup', 'mousemove', 'DOMMouseScroll', 'mousewheel', 'mouseout'].forEach(function(event) {
        Module['canvas'].addEventListener(event, SDL.receiveEvent, true);
      });
  
      // (0,0) means 'use fullscreen' in native; in Emscripten, use the current canvas size.
      if (width == 0 && height == 0) {
        var canvas = Module['canvas'];
        width = canvas.width;
        height = canvas.height;
      }
  
      Browser.setCanvasSize(width, height, true);
      // Free the old surface first.
      if (SDL.screen) {
        SDL.freeSurface(SDL.screen);
        SDL.screen = null;
      }
      SDL.screen = SDL.makeSurface(width, height, flags, true, 'screen');
      if (!SDL.addedResizeListener) {
        SDL.addedResizeListener = true;
        Browser.resizeListeners.push(function(w, h) {
          SDL.receiveEvent({
            type: 'resize',
            w: w,
            h: h
          });
        });
      }
      return SDL.screen;
    }

  function _SDL_WM_ToggleFullScreen(surf) {
      if (Browser.isFullScreen) {
        Module['canvas'].cancelFullScreen();
        return 1;
      } else {
        if (!SDL.canRequestFullscreen) {
          return 0;
        }
        SDL.isRequestingFullscreen = true;
        return 1;
      }
    }

  
   
  Module["_memset"] = _memset;var _llvm_memset_p0i8_i32=_memset;

  function _IMG_Load(filename){
      var rwops = _SDL_RWFromFile(filename);
      var result = _IMG_Load_RW(rwops, 1);
      return result;
    }

  function _SDL_WM_SetIcon() { /* This function would set the application window icon surface, which doesn't apply for web canvases, so a no-op. */ }

  function _Mix_HaltMusic() {
      var audio = SDL.music.audio;
      if (!audio) return 0;
      audio.src = audio.src; // rewind
      audio.pause();
      SDL.music.audio = null;
      if (SDL.hookMusicFinished) {
        Runtime.dynCall('v', SDL.hookMusicFinished);
      }
      return 0;
    }

  
  function _Mix_FreeChunk(id) {
      SDL.audios[id] = null;
    }var _Mix_FreeMusic=_Mix_FreeChunk;

  function _Mix_ResumeMusic() {
      var audio = SDL.music.audio;
      if (!audio) return 0;
      audio.play();
      return 0;
    }

  function _Mix_PauseMusic() {
      var audio = SDL.music.audio;
      if (!audio) return 0;
      audio.pause();
      return 0;
    }

  function _Mix_VolumeMusic(volume) {
      return SDL.setGetVolume(SDL.music, volume);
    }

  
  
  function _Mix_LoadWAV_RW(rwopsID, freesrc) {
      var rwops = SDL.rwops[rwopsID];
  
      if (rwops === undefined)
        return 0;
  
      var filename = '';
      var audio;
      var bytes;
  
      if (rwops.filename !== undefined) {
        filename = PATH.resolve(rwops.filename);
        var raw = Module["preloadedAudios"][filename];
        if (!raw) {
          if (raw === null) Module.printErr('Trying to reuse preloaded audio, but freePreloadedMediaOnUse is set!');
          Runtime.warnOnce('Cannot find preloaded audio ' + filename);
  
          // see if we can read the file-contents from the in-memory FS
          try {
            bytes = FS.readFile(filename);
          } catch (e) {
            Module.printErr('Couldn\'t find file for: ' + filename);
            return 0;
          }
        }
        if (Module['freePreloadedMediaOnUse']) {
          Module["preloadedAudios"][filename] = null;
        }
        audio = raw;
      }
      else if (rwops.bytes !== undefined) {
        bytes = HEAPU8.subarray(rwops.bytes, rwops.bytes + rwops.count);
      }
      else {
        return 0;
      }
  
      // Here, we didn't find a preloaded audio but we either were passed a filepath for
      // which we loaded bytes, or we were passed some bytes
      if (audio === undefined && bytes) {
        var blob = new Blob([bytes], {type: rwops.mimetype});
        var url = URL.createObjectURL(blob);
        audio = new Audio();
        audio.src = url;
      }
  
      var id = SDL.audios.length;
      // Keep the loaded audio in the audio arrays, ready for playback
      SDL.audios.push({
        source: filename,
        audio: audio
      });
      return id;
    }var _Mix_LoadMUS_RW=_Mix_LoadWAV_RW;function _Mix_LoadMUS(filename) {
      var rwops = _SDL_RWFromFile(filename);
      var result = _Mix_LoadMUS_RW(rwops);
      _SDL_FreeRW(rwops);
      return result;
    }

  function _Mix_PlayMusic(id, loops) {
      loops = Math.max(loops, 1);
      var audio = SDL.audios[id].audio;
      if (!audio) return 0;
      audio.loop = loops != 0; // TODO: handle N loops for finite N
      if (SDL.audios[id].buffer) {
        audio["mozWriteAudio"](SDL.audios[id].buffer);
      } else {
        audio.play();
      }
      audio.volume = SDL.music.volume;
      audio['onended'] = _Mix_HaltMusic; // will send callback
      if (SDL.music.audio) {
        if (!SDL.music.audio.paused) {
          Module.printErr('Music is already playing. ' + SDL.music.source);
        }
        SDL.music.audio.pause();
      }
      SDL.music.audio = audio;
      return 0;
    }

  function _Mix_HookMusicFinished(func) {
      SDL.hookMusicFinished = func;
      if (SDL.music.audio) { // ensure the callback will be called, if a music is already playing
        SDL.music.audio['onended'] = _Mix_HaltMusic;
      }
    }



  function _Mix_Playing(channel) {
      if (channel === -1) {
        var count = 0;
        for (var i = 0; i < SDL.channels.length; i++) {
          count += _Mix_Playing(i);
        }
        return count;
      }
      var info = SDL.channels[channel];
      if (info && info.audio && !info.audio.paused) {
        return 1;
      }
      return 0;
    }

  
  function _Mix_PlayChannel(channel, id, loops) {
      // TODO: handle loops
  
      // Get the audio element associated with the ID
      var info = SDL.audios[id];
      if (!info) return -1;
      var audio = info.audio;
      if (!audio) return -1;
  
      // If the user asks us to allocate a channel automatically, get the first
      // free one.
      if (channel == -1) {
        for (var i = SDL.channelMinimumNumber; i < SDL.numChannels; i++) {
          if (!SDL.channels[i].audio) {
            channel = i;
            break;
          }
        }
        if (channel == -1) {
          Module.printErr('All ' + SDL.numChannels + ' channels in use!');
          return -1;
        }
      }
      // We clone the audio node to utilize the preloaded audio buffer, since
      // the browser has already preloaded the audio file.
      var channelInfo = SDL.channels[channel];
      channelInfo.audio = audio = audio.cloneNode(true);
      audio.numChannels = info.audio.numChannels;
      audio.frequency = info.audio.frequency;
      // TODO: handle N loops. Behavior matches Mix_PlayMusic
      audio.loop = loops != 0; 
      audio['onended'] = function SDL_audio_onended() { // TODO: cache these
        channelInfo.audio = null;
        if (SDL.channelFinished) {
          Runtime.getFuncWrapper(SDL.channelFinished, 'vi')(channel);
        }
      }
      // Either play the element, or load the dynamic data into it
      if (info.buffer) {
        var contextCtor = null;
        if (audio && ('mozSetup' in audio)) { // Audio Data API
          try {
            audio['mozSetup'](audio.numChannels, audio.frequency);
            audio["mozWriteAudio"](info.buffer);
          } catch (e) {
            // Workaround for Firefox bug 783052
            // ignore this exception!
          }
        /*
        } else if (contextCtor = (window.AudioContext || // WebAudio API
                                  window.webkitAudioContext)) {
          var currentIndex = 0;
          var numChannels = parseInt(audio.numChannels);
          var context = new contextCtor();
          var source = context.createBufferSource();
          source.loop = false;
          source.buffer = context.createBuffer(numChannels, 1, audio.frequency);
          var jsNode = context.createJavaScriptNode(2048, numChannels, numChannels);
          jsNode.onaudioprocess = function jsNode_onaudioprocess(event) {
            var buffers = new Array(numChannels);
            for (var i = 0; i < numChannels; ++i) {
              buffers[i] = event.outputBuffer.getChannelData(i);
            }
            var remaining = info.buffer.length - currentIndex;
            if (remaining > 2048) {
              remaining = 2048;
            }
            for (var i = 0; i < remaining;) {
              for (var j = 0; j < numChannels; ++j) {
                buffers[j][i] = info.buffer[currentIndex + i + j] * audio.volume;
              }
              i += j;
            }
            currentIndex += remaining * numChannels;
            for (var i = remaining; i < 2048;) {
              for (var j = 0; j < numChannels; ++j) {
                buffers[j][i] = 0; // silence
              }
              i += j;
            }
          };
          source.connect(jsNode);
          jsNode.connect(context.destination);
          source.noteOn(0);
        */
        }
      } else {
        audio.play();
      }
      audio.volume = channelInfo.volume;
      return channel;
    }var _Mix_PlayChannelTimed=_Mix_PlayChannel;

  function _Mix_Volume(channel, volume) {
      if (channel == -1) {
        for (var i = 0; i < SDL.numChannels-1; i++) {
          _Mix_Volume(i, volume);
        }
        return _Mix_Volume(SDL.numChannels-1, volume);
      }
      return SDL.setGetVolume(SDL.channels[channel], volume);
    }

  function _Mix_OpenAudio(frequency, format, channels, chunksize) {
      SDL.allocateChannels(32);
      // Just record the values for a later call to Mix_QuickLoad_RAW
      SDL.mixerFrequency = frequency;
      SDL.mixerFormat = format;
      SDL.mixerNumChannels = channels;
      SDL.mixerChunkSize = chunksize;
      return 0;
    }

  function _Mix_AllocateChannels(num) {
      SDL.allocateChannels(num);
      return num;
    }

  
  
  function _SDL_PauseAudio(pauseOn) {
      if (!SDL.audio) {
        return;
      }
      if (pauseOn) {
        if (SDL.audio.timer !== undefined) {
          clearTimeout(SDL.audio.timer);
          SDL.audio.numAudioTimersPending = 0;
          SDL.audio.timer = undefined;
        }
        if (SDL.audio.scriptProcessorNode !== undefined) {
          SDL.audio.scriptProcessorNode['disconnect']();
          SDL.audio.scriptProcessorNode = undefined;
        }
      } else if (!SDL.audio.timer && !SDL.audio.scriptProcessorNode) {
        // If we are using the same sampling frequency as the native sampling rate of the Web Audio graph is using, we can feed our buffers via
        // Web Audio ScriptProcessorNode, which is a pull-mode API that calls back to our code to get audio data.
        if (SDL.audioContext !== undefined && SDL.audio.freq == SDL.audioContext['sampleRate']) {
          var sizeSamplesPerChannel = SDL.audio.bufferSize / SDL.audio.bytesPerSample / SDL.audio.channels; // How many samples per a single channel fit in the cb buffer?
          SDL.audio.scriptProcessorNode = SDL.audioContext['createScriptProcessor'](sizeSamplesPerChannel, 0, SDL.audio.channels);
          SDL.audio.scriptProcessorNode['onaudioprocess'] = function (e) {
            Runtime.dynCall('viii', SDL.audio.callback, [SDL.audio.userdata, SDL.audio.buffer, SDL.audio.bufferSize]);
            SDL.fillWebAudioBufferFromHeap(SDL.audio.buffer, sizeSamplesPerChannel, e['outputBuffer']);
          }
          SDL.audio.scriptProcessorNode['connect'](SDL.audioContext['destination']);
        } else { // If we are using a different sampling rate, must manually queue audio data to the graph via timers.
          // Start the audio playback timer callback loop.
          SDL.audio.numAudioTimersPending = 1;
          SDL.audio.timer = Browser.safeSetTimeout(SDL.audio.caller, 1);
          SDL.audio.startTime = Date.now() / 1000.0; // Only used for Mozilla Audio Data API. Not needed for Web Audio API.
        }
      }
      SDL.audio.paused = pauseOn;
    }function _SDL_CloseAudio() {
      if (SDL.audio) {
        try{
          for(var i = 0; i < SDL.audio.soundSource.length; ++i) {
            if (!(typeof(SDL.audio.soundSource[i]==='undefined'))) {
              SDL.audio.soundSource[i].stop(0);
            }
          }
        } catch(e) {}
        SDL.audio.soundSource = null;
        _SDL_PauseAudio(1);
        _free(SDL.audio.buffer);
        SDL.audio = null;
        SDL.allocateChannels(0);
      }
    }var _Mix_CloseAudio=_SDL_CloseAudio;

  function _abort() {
      Module['abort']();
    }

  function ___errno_location() {
      return ___errno_state;
    }

  function _sbrk(bytes) {
      // Implement a Linux-like 'memory area' for our 'process'.
      // Changes the size of the memory area by |bytes|; returns the
      // address of the previous top ('break') of the memory area
      // We control the "dynamic" memory - DYNAMIC_BASE to DYNAMICTOP
      var self = _sbrk;
      if (!self.called) {
        DYNAMICTOP = alignMemoryPage(DYNAMICTOP); // make sure we start out aligned
        self.called = true;
        assert(Runtime.dynamicAlloc);
        self.alloc = Runtime.dynamicAlloc;
        Runtime.dynamicAlloc = function() { abort('cannot dynamically allocate, sbrk now has control') };
      }
      var ret = DYNAMICTOP;
      if (bytes != 0) self.alloc(bytes);
      return ret;  // Previous break location.
    }

  function _sysconf(name) {
      // long sysconf(int name);
      // http://pubs.opengroup.org/onlinepubs/009695399/functions/sysconf.html
      switch(name) {
        case 30: return PAGE_SIZE;
        case 132:
        case 133:
        case 12:
        case 137:
        case 138:
        case 15:
        case 235:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        case 149:
        case 13:
        case 10:
        case 236:
        case 153:
        case 9:
        case 21:
        case 22:
        case 159:
        case 154:
        case 14:
        case 77:
        case 78:
        case 139:
        case 80:
        case 81:
        case 79:
        case 82:
        case 68:
        case 67:
        case 164:
        case 11:
        case 29:
        case 47:
        case 48:
        case 95:
        case 52:
        case 51:
        case 46:
          return 200809;
        case 27:
        case 246:
        case 127:
        case 128:
        case 23:
        case 24:
        case 160:
        case 161:
        case 181:
        case 182:
        case 242:
        case 183:
        case 184:
        case 243:
        case 244:
        case 245:
        case 165:
        case 178:
        case 179:
        case 49:
        case 50:
        case 168:
        case 169:
        case 175:
        case 170:
        case 171:
        case 172:
        case 97:
        case 76:
        case 32:
        case 173:
        case 35:
          return -1;
        case 176:
        case 177:
        case 7:
        case 155:
        case 8:
        case 157:
        case 125:
        case 126:
        case 92:
        case 93:
        case 129:
        case 130:
        case 131:
        case 94:
        case 91:
          return 1;
        case 74:
        case 60:
        case 69:
        case 70:
        case 4:
          return 1024;
        case 31:
        case 42:
        case 72:
          return 32;
        case 87:
        case 26:
        case 33:
          return 2147483647;
        case 34:
        case 1:
          return 47839;
        case 38:
        case 36:
          return 99;
        case 43:
        case 37:
          return 2048;
        case 0: return 2097152;
        case 3: return 65536;
        case 28: return 32768;
        case 44: return 32767;
        case 75: return 16384;
        case 39: return 1000;
        case 89: return 700;
        case 71: return 256;
        case 40: return 255;
        case 2: return 100;
        case 180: return 64;
        case 25: return 20;
        case 5: return 16;
        case 6: return 6;
        case 73: return 4;
        case 84: return 1;
      }
      ___setErrNo(ERRNO_CODES.EINVAL);
      return -1;
    }






FS.staticInit();__ATINIT__.unshift({ func: function() { if (!Module["noFSInit"] && !FS.init.initialized) FS.init() } });__ATMAIN__.push({ func: function() { FS.ignorePermissions = false } });__ATEXIT__.push({ func: function() { FS.quit() } });Module["FS_createFolder"] = FS.createFolder;Module["FS_createPath"] = FS.createPath;Module["FS_createDataFile"] = FS.createDataFile;Module["FS_createPreloadedFile"] = FS.createPreloadedFile;Module["FS_createLazyFile"] = FS.createLazyFile;Module["FS_createLink"] = FS.createLink;Module["FS_createDevice"] = FS.createDevice;
___errno_state = Runtime.staticAlloc(4); HEAP32[((___errno_state)>>2)]=0;
__ATINIT__.unshift({ func: function() { TTY.init() } });__ATEXIT__.push({ func: function() { TTY.shutdown() } });TTY.utf8 = new Runtime.UTF8Processor();
if (ENVIRONMENT_IS_NODE) { var fs = require("fs"); NODEFS.staticInit(); }
Module["requestFullScreen"] = function Module_requestFullScreen(lockPointer, resizeCanvas) { Browser.requestFullScreen(lockPointer, resizeCanvas) };
  Module["requestAnimationFrame"] = function Module_requestAnimationFrame(func) { Browser.requestAnimationFrame(func) };
  Module["setCanvasSize"] = function Module_setCanvasSize(width, height, noUpdates) { Browser.setCanvasSize(width, height, noUpdates) };
  Module["pauseMainLoop"] = function Module_pauseMainLoop() { Browser.mainLoop.pause() };
  Module["resumeMainLoop"] = function Module_resumeMainLoop() { Browser.mainLoop.resume() };
  Module["getUserMedia"] = function Module_getUserMedia() { Browser.getUserMedia() }
__ATINIT__.push({ func: function() { SOCKFS.root = FS.mount(SOCKFS, {}, null); } });
___buildEnvironment(ENV);
_fgetc.ret = allocate([0], "i8", ALLOC_STATIC);
STACK_BASE = STACKTOP = Runtime.alignMemory(STATICTOP);

staticSealed = true; // seal the static portion of memory

STACK_MAX = STACK_BASE + 5242880;

DYNAMIC_BASE = DYNAMICTOP = Runtime.alignMemory(STACK_MAX);

assert(DYNAMIC_BASE < TOTAL_MEMORY, "TOTAL_MEMORY not big enough for stack");


var Math_min = Math.min;
function invoke_ii(index,a1) {
  try {
    return Module["dynCall_ii"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}

function invoke_v(index) {
  try {
    Module["dynCall_v"](index);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}

function invoke_iii(index,a1,a2) {
  try {
    return Module["dynCall_iii"](index,a1,a2);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}

function invoke_vi(index,a1) {
  try {
    Module["dynCall_vi"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}

function asmPrintInt(x, y) {
  Module.print('int ' + x + ',' + y);// + ' ' + new Error().stack);
}
function asmPrintFloat(x, y) {
  Module.print('float ' + x + ',' + y);// + ' ' + new Error().stack);
}
// EMSCRIPTEN_START_ASM
var asm=(function(global,env,buffer){"use asm";var a=new global.Int8Array(buffer);var b=new global.Int16Array(buffer);var c=new global.Int32Array(buffer);var d=new global.Uint8Array(buffer);var e=new global.Uint16Array(buffer);var f=new global.Uint32Array(buffer);var g=new global.Float32Array(buffer);var h=new global.Float64Array(buffer);var i=env.STACKTOP|0;var j=env.STACK_MAX|0;var k=env.tempDoublePtr|0;var l=env.ABORT|0;var m=env.___rand_seed|0;var n=env._stdout|0;var o=env._stderr|0;var p=+env.NaN;var q=+env.Infinity;var r=0;var s=0;var t=0;var u=0;var v=0,w=0,x=0,y=0,z=0.0,A=0,B=0,C=0,D=0.0;var E=0;var F=0;var G=0;var H=0;var I=0;var J=0;var K=0;var L=0;var M=0;var N=0;var O=global.Math.floor;var P=global.Math.abs;var Q=global.Math.sqrt;var R=global.Math.pow;var S=global.Math.cos;var T=global.Math.sin;var U=global.Math.tan;var V=global.Math.acos;var W=global.Math.asin;var X=global.Math.atan;var Y=global.Math.atan2;var Z=global.Math.exp;var _=global.Math.log;var $=global.Math.ceil;var aa=global.Math.imul;var ba=env.abort;var ca=env.assert;var da=env.asmPrintInt;var ea=env.asmPrintFloat;var fa=env.min;var ga=env.invoke_ii;var ha=env.invoke_v;var ia=env.invoke_iii;var ja=env.invoke_vi;var ka=env._Mix_VolumeMusic;var la=env.__scanString;var ma=env._fclose;var na=env._Mix_Volume;var oa=env._Mix_Playing;var pa=env._SDL_JoystickOpen;var qa=env._fflush;var ra=env._SDL_ShowCursor;var sa=env._Mix_PlayChannel;var ta=env._fwrite;var ua=env._send;var va=env._SDL_SetAlpha;var wa=env._SDL_NumJoysticks;var xa=env._read;var ya=env._Mix_OpenAudio;var za=env._SDL_WM_SetIcon;var Aa=env._ceil;var Ba=env._fileno;var Ca=env._strstr;var Da=env._fsync;var Ea=env._fscanf;var Fa=env._SDL_PauseAudio;var Ga=env._opendir;var Ha=env._SDL_JoystickIndex;var Ia=env._SDL_JoystickName;var Ja=env._SDL_SetColorKey;var Ka=env._SDL_EnableKeyRepeat;var La=env._SDL_RWFromFile;var Ma=env._fgetc;var Na=env._readdir;var Oa=env.__getFloat;var Pa=env._SDL_JoystickClose;var Qa=env._mknod;var Ra=env._fgets;var Sa=env._close;var Ta=env._SDL_FillRect;var Ua=env._fopen;var Va=env.___setErrNo;var Wa=env._abs;var Xa=env._exit;var Ya=env._sprintf;var Za=env._Mix_PauseMusic;var _a=env._Mix_LoadMUS;var $a=env._Mix_HookMusicFinished;var ab=env._emscripten_memcpy_big;var bb=env._recv;var cb=env._SDL_UnlockSurface;var db=env._SDL_Init;var eb=env._mkport;var fb=env.__exit;var gb=env._SDL_FreeRW;var hb=env._SDL_AddTimer;var ib=env._SDL_JoystickNumButtons;var jb=env._printf;var kb=env._pread;var lb=env._SDL_SetVideoMode;var mb=env._SDL_LockSurface;var nb=env._open;var ob=env._snprintf;var pb=env._SDL_PollEvent;var qb=env._SDL_RemoveTimer;var rb=env._SDL_Flip;var sb=env._mkdir;var tb=env._Mix_HaltMusic;var ub=env._SDL_GetError;var vb=env.__formatString;var wb=env._getenv;var xb=env._SDL_WM_SetCaption;var yb=env._sbrk;var zb=env._atexit;var Ab=env.___errno_location;var Bb=env._SDL_CloseAudio;var Cb=env._SDL_PushEvent;var Db=env._SDL_Quit;var Eb=env._ungetc;var Fb=env._IMG_Load;var Gb=env._rename;var Hb=env._sscanf;var Ib=env._sysconf;var Jb=env._SDL_MapRGB;var Kb=env._fread;var Lb=env._SDL_WM_ToggleFullScreen;var Mb=env._abort;var Nb=env._fprintf;var Ob=env.___buildEnvironment;var Pb=env._feof;var Qb=env._strncat;var Rb=env._SDL_DisplayFormatAlpha;var Sb=env.__reallyNegative;var Tb=env._write;var Ub=env._SDL_UpperBlit;var Vb=env._SDL_CreateRGBSurface;var Wb=env._SDL_ListModes;var Xb=env._emscripten_set_main_loop;var Yb=env._time;var Zb=env._IMG_Load_RW;var _b=env._Mix_FreeChunk;var $b=env._closedir;var ac=env._Mix_LoadWAV_RW;var bc=env._SDL_JoystickEventState;var cc=env._unlink;var dc=env._Mix_AllocateChannels;var ec=env._pwrite;var fc=env._Mix_ResumeMusic;var gc=env._Mix_PlayMusic;var hc=env._SDL_FreeSurface;var ic=env._readdir_r;var jc=0.0;
// EMSCRIPTEN_START_FUNCS
function $e(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0;d=i;i=i+400|0;e=d|0;f=d+16|0;g=d+32|0;h=d+48|0;j=d+64|0;k=d+80|0;l=d+96|0;m=d+112|0;n=d+128|0;o=d+144|0;p=d+160|0;q=d+176|0;r=d+192|0;s=d+208|0;t=d+224|0;u=d+240|0;v=d+256|0;w=d+272|0;x=d+288|0;y=d+304|0;z=d+320|0;A=d+336|0;B=d+352|0;C=d+368|0;D=d+384|0;E=a;a=c[7762]|0;F=c[7763]|0;if((E|0)==3){c[16348]=b;if((c[16348]|0)==0){c[16350]=0}else{if((c[16348]|0)==16){c[16350]=c[7758]}else{c[16350]=c[7768]}}}else{do{if((E|0)==1){if((c[16350]|0)<=0){break}b=0;while(1){if((b|0)>=(c[7759]|0)){break}G=0;while(1){if((G|0)>=(c[7758]|0)){break}if((c[16348]|0)!=0){if((c[16348]|0)==1){H=(aa(G,c[7768]|0)|0)+a|0;I=(aa(b,c[7768]|0)|0)+F|0;Ze(f,H+(((c[7768]|0)-(c[16350]|0)|0)/2|0)|0,I+(((c[7768]|0)-(c[16350]|0)|0)/2|0)|0,c[16350]|0,c[16350]|0);I=e;H=f;c[I>>2]=c[H>>2];c[I+4>>2]=c[H+4>>2];c[I+8>>2]=c[H+8>>2];c[I+12>>2]=c[H+12>>2]}else{if((c[16348]|0)==2){H=(aa(G,c[7768]|0)|0)+a|0;I=(aa(b,c[7768]|0)|0)+F|0;Ze(g,H+(c[7768]|0)-(c[16350]|0)|0,I+(c[7768]|0)-(c[16350]|0)|0,c[16350]|0,c[16350]|0);I=e;H=g;c[I>>2]=c[H>>2];c[I+4>>2]=c[H+4>>2];c[I+8>>2]=c[H+8>>2];c[I+12>>2]=c[H+12>>2]}else{if((c[16348]|0)==3){if(((G|0)%2|0|0)==0){H=(aa(G,c[7768]|0)|0)+a|0;I=(aa(b,c[7768]|0)|0)+F|0;Ze(h,H,I,c[16350]|0,c[16350]|0);I=e;H=h;c[I>>2]=c[H>>2];c[I+4>>2]=c[H+4>>2];c[I+8>>2]=c[H+8>>2];c[I+12>>2]=c[H+12>>2]}else{if(((G|0)%2|0|0)==1){H=(aa(G,c[7768]|0)|0)+a|0;I=(aa(b,c[7768]|0)|0)+F|0;Ze(j,H+(c[7768]|0)-(c[16350]|0)|0,I+(c[7768]|0)-(c[16350]|0)|0,c[16350]|0,c[16350]|0);I=e;H=j;c[I>>2]=c[H>>2];c[I+4>>2]=c[H+4>>2];c[I+8>>2]=c[H+8>>2];c[I+12>>2]=c[H+12>>2]}}}else{if((c[16348]|0)==4){if(((G|0)%2|0|0)==0){H=(aa(G,c[7768]|0)|0)+a|0;I=(aa(b,c[7768]|0)|0)+F|0;Ze(k,H,I+(c[7768]|0)-(c[16350]|0)|0,c[16350]|0,c[16350]|0);I=e;H=k;c[I>>2]=c[H>>2];c[I+4>>2]=c[H+4>>2];c[I+8>>2]=c[H+8>>2];c[I+12>>2]=c[H+12>>2]}else{if(((G|0)%2|0|0)==1){H=(aa(G,c[7768]|0)|0)+a|0;I=(aa(b,c[7768]|0)|0)+F|0;Ze(l,H+(c[7768]|0)-(c[16350]|0)|0,I,c[16350]|0,c[16350]|0);I=e;H=l;c[I>>2]=c[H>>2];c[I+4>>2]=c[H+4>>2];c[I+8>>2]=c[H+8>>2];c[I+12>>2]=c[H+12>>2]}}}else{if((c[16348]|0)==5){H=(aa(G,c[7768]|0)|0)+a|0;I=(aa(b,c[7768]|0)|0)+F|0;Ze(m,H,I+(c[7768]|0)-(c[16350]|0)|0,c[7768]|0,c[16350]|0);I=e;H=m;c[I>>2]=c[H>>2];c[I+4>>2]=c[H+4>>2];c[I+8>>2]=c[H+8>>2];c[I+12>>2]=c[H+12>>2]}else{if((c[16348]|0)==6){H=(aa(G,c[7768]|0)|0)+a|0;I=(aa(b,c[7768]|0)|0)+F|0;Ze(n,H,I,c[16350]|0,c[16350]|0);I=e;H=n;c[I>>2]=c[H>>2];c[I+4>>2]=c[H+4>>2];c[I+8>>2]=c[H+8>>2];c[I+12>>2]=c[H+12>>2]}else{if((c[16348]|0)==7){H=(aa(G,c[7768]|0)|0)+a|0;I=(aa(b,c[7768]|0)|0)+F|0;Ze(o,H+(c[7768]|0)-(c[16350]|0)|0,I,c[16350]|0,c[16350]|0);I=e;H=o;c[I>>2]=c[H>>2];c[I+4>>2]=c[H+4>>2];c[I+8>>2]=c[H+8>>2];c[I+12>>2]=c[H+12>>2]}else{if((c[16348]|0)==8){H=(aa(G,c[7768]|0)|0)+a|0;I=(aa(b,c[7768]|0)|0)+F|0;Ze(p,H,I+(c[7768]|0)-(c[16350]|0)|0,c[16350]|0,c[16350]|0);I=e;H=p;c[I>>2]=c[H>>2];c[I+4>>2]=c[H+4>>2];c[I+8>>2]=c[H+8>>2];c[I+12>>2]=c[H+12>>2]}else{if((c[16348]|0)==9){if(((c[16350]|0)%4|0|0)==0){H=(aa(G,c[7768]|0)|0)+a|0;I=(aa(b,c[7768]|0)|0)+F|0;Ze(q,H,I,c[16350]|0,c[16350]|0);I=e;H=q;c[I>>2]=c[H>>2];c[I+4>>2]=c[H+4>>2];c[I+8>>2]=c[H+8>>2];c[I+12>>2]=c[H+12>>2]}else{if(((c[16350]|0)%4|0|0)==2){H=(aa(G,c[7768]|0)|0)+a|0;I=(aa(b,c[7768]|0)|0)+F|0;Ze(r,H+(c[7768]|0)-(c[16350]|0)|0,I+(c[7768]|0)-(c[16350]|0)|0,c[16350]|0,c[16350]|0);I=e;H=r;c[I>>2]=c[H>>2];c[I+4>>2]=c[H+4>>2];c[I+8>>2]=c[H+8>>2];c[I+12>>2]=c[H+12>>2]}}}else{if((c[16348]|0)==10){H=(aa(G,c[7768]|0)|0)+a|0;I=(aa(b,c[7768]|0)|0)+F|0;Ze(s,H,I,c[16350]|0,c[7768]|0);I=e;H=s;c[I>>2]=c[H>>2];c[I+4>>2]=c[H+4>>2];c[I+8>>2]=c[H+8>>2];c[I+12>>2]=c[H+12>>2]}else{if((c[16348]|0)==11){H=(aa(G,c[7768]|0)|0)+a|0;I=(aa(b,c[7768]|0)|0)+F|0;Ze(t,H+(((c[7768]|0)-(c[16350]|0)|0)/2|0)|0,I,c[16350]|0,c[7768]|0);I=e;H=t;c[I>>2]=c[H>>2];c[I+4>>2]=c[H+4>>2];c[I+8>>2]=c[H+8>>2];c[I+12>>2]=c[H+12>>2]}else{if((c[16348]|0)==12){H=(aa(G,c[7768]|0)|0)+a|0;I=(aa(b,c[7768]|0)|0)+F|0;Ze(u,H,I+(((c[7768]|0)-(c[16350]|0)|0)/2|0)|0,c[7768]|0,c[16350]|0);I=e;H=u;c[I>>2]=c[H>>2];c[I+4>>2]=c[H+4>>2];c[I+8>>2]=c[H+8>>2];c[I+12>>2]=c[H+12>>2]}else{if((c[16348]|0)==13){H=(aa(G,c[7768]|0)|0)+a|0;I=(aa(b,c[7768]|0)|0)+F|0;Ze(v,H,I,c[7768]|0,c[16350]|0);I=e;H=v;c[I>>2]=c[H>>2];c[I+4>>2]=c[H+4>>2];c[I+8>>2]=c[H+8>>2];c[I+12>>2]=c[H+12>>2]}else{if((c[16348]|0)==14){H=(aa(G,c[7768]|0)|0)+a|0;I=(aa(b,c[7768]|0)|0)+F|0;Ze(w,H+(c[7768]|0)-(c[16350]|0)|0,I,c[16350]|0,c[7768]|0);I=e;H=w;c[I>>2]=c[H>>2];c[I+4>>2]=c[H+4>>2];c[I+8>>2]=c[H+8>>2];c[I+12>>2]=c[H+12>>2]}else{if((c[16348]|0)==15){if(((c[16350]|0)%4|0|0)==0){H=(aa(G,c[7768]|0)|0)+a|0;I=(aa(b,c[7768]|0)|0)+F|0;Ze(x,H,I+(c[7768]|0)-(c[16350]|0)|0,c[16350]|0,c[16350]|0);I=e;H=x;c[I>>2]=c[H>>2];c[I+4>>2]=c[H+4>>2];c[I+8>>2]=c[H+8>>2];c[I+12>>2]=c[H+12>>2]}else{if(((c[16350]|0)%4|0|0)==2){H=(aa(G,c[7768]|0)|0)+a|0;I=(aa(b,c[7768]|0)|0)+F|0;Ze(y,H+(c[7768]|0)-(c[16350]|0)|0,I,c[16350]|0,c[16350]|0);I=e;H=y;c[I>>2]=c[H>>2];c[I+4>>2]=c[H+4>>2];c[I+8>>2]=c[H+8>>2];c[I+12>>2]=c[H+12>>2]}}}else{if((c[16348]|0)==16){if((G|0)<(c[16350]|0)){H=(aa(G,c[7768]|0)|0)+a|0;I=(aa(b,c[7768]|0)|0)+F|0;Ze(z,H,I,c[7768]|0,c[7768]|0);I=e;H=z;c[I>>2]=c[H>>2];c[I+4>>2]=c[H+4>>2];c[I+8>>2]=c[H+8>>2];c[I+12>>2]=c[H+12>>2]}}else{if((c[16348]|0)==17){do{if(((G|0)%2|0|0)==0){if(((b|0)%2|0|0)!=0){J=75;break}H=(aa(G,c[7768]|0)|0)+a|0;I=(aa(b,c[7768]|0)|0)+F|0;Ze(A,H,I,c[16350]|0,c[16350]|0);I=e;H=A;c[I>>2]=c[H>>2];c[I+4>>2]=c[H+4>>2];c[I+8>>2]=c[H+8>>2];c[I+12>>2]=c[H+12>>2]}else{J=75}}while(0);if((J|0)==75){J=0;do{if(((G|0)%2|0|0)==1){if(((b|0)%2|0|0)!=0){J=78;break}H=(aa(G,c[7768]|0)|0)+a|0;I=(aa(b,c[7768]|0)|0)+F|0;Ze(B,H+(c[7768]|0)-(c[16350]|0)|0,I,c[16350]|0,c[16350]|0);I=e;H=B;c[I>>2]=c[H>>2];c[I+4>>2]=c[H+4>>2];c[I+8>>2]=c[H+8>>2];c[I+12>>2]=c[H+12>>2]}else{J=78}}while(0);if((J|0)==78){J=0;do{if(((G|0)%2|0|0)==0){if(((b|0)%2|0|0)!=1){J=81;break}H=(aa(G,c[7768]|0)|0)+a|0;I=(aa(b,c[7768]|0)|0)+F|0;Ze(C,H,I+(c[7768]|0)-(c[16350]|0)|0,c[16350]|0,c[16350]|0);I=e;H=C;c[I>>2]=c[H>>2];c[I+4>>2]=c[H+4>>2];c[I+8>>2]=c[H+8>>2];c[I+12>>2]=c[H+12>>2]}else{J=81}}while(0);if((J|0)==81){J=0;do{if(((G|0)%2|0|0)==1){if(((b|0)%2|0|0)!=1){break}H=(aa(G,c[7768]|0)|0)+a|0;I=(aa(b,c[7768]|0)|0)+F|0;Ze(D,H+(c[7768]|0)-(c[16350]|0)|0,I+(c[7768]|0)-(c[16350]|0)|0,c[16350]|0,c[16350]|0);I=e;H=D;c[I>>2]=c[H>>2];c[I+4>>2]=c[H+4>>2];c[I+8>>2]=c[H+8>>2];c[I+12>>2]=c[H+12>>2]}}while(0)}}}}}}}}}}}}}}}}}}}}}H=c[16874]|0;Ta(H|0,e|0,Jb(c[(c[16874]|0)+4>>2]|0,(c[60052+((c[16612]|0)*524|0)>>2]|0)>>>16&255|0,(c[60052+((c[16612]|0)*524|0)>>2]|0)>>>8&255|0,c[60052+((c[16612]|0)*524|0)>>2]&255|0)|0)|0;G=G+1|0}b=b+1|0}if((c[16348]|0)==16){c[16350]=(c[16350]|0)-1}else{c[16350]=(c[16350]|0)-((c[7768]|0)/16|0)}$c();K=1;L=K;i=d;return L|0}}while(0)}K=0;L=K;i=d;return L|0}function af(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0;e=i;i=i+96|0;f=e|0;g=e+16|0;h=e+32|0;j=e+48|0;k=e+64|0;l=e+80|0;m=a;Ze(h,b,d,(c[7768]|0)/2|0,c[7768]|0);d=g;b=h;c[d>>2]=c[b>>2];c[d+4>>2]=c[b+4>>2];c[d+8>>2]=c[b+8>>2];c[d+12>>2]=c[b+12>>2];do{if((m<<24>>24|0)>=97){if((m<<24>>24|0)>122){break}m=(m<<24>>24)-32&255}}while(0);do{if((m<<24>>24|0)>=65){if((m<<24>>24|0)>90){break}b=aa((m<<24>>24)-65|0,((c[7768]|0)/2|0)+((c[7768]|0)/16|0)|0)|0;Ze(j,b,0,(c[7768]|0)/2|0,c[7768]|0);b=f;d=j;c[b>>2]=c[d>>2];c[b+4>>2]=c[d+4>>2];c[b+8>>2]=c[d+8>>2];c[b+12>>2]=c[d+12>>2];Ub(c[70810]|0,f|0,c[16874]|0,g|0)|0;i=e;return}}while(0);do{if((m<<24>>24|0)>=48){if((m<<24>>24|0)>57){n=10;break}j=aa((m<<24>>24)-48|0,((c[7768]|0)/2|0)+((c[7768]|0)/16|0)|0)|0;Ze(k,j,0,(c[7768]|0)/2|0,c[7768]|0);j=f;d=k;c[j>>2]=c[d>>2];c[j+4>>2]=c[d+4>>2];c[j+8>>2]=c[d+8>>2];c[j+12>>2]=c[d+12>>2];Ub(c[29360]|0,f|0,c[16874]|0,g|0)|0}else{n=10}}while(0);if((n|0)==10){if((m<<24>>24|0)==45){Ze(l,(((c[7768]|0)/2|0)+((c[7768]|0)/16|0)|0)*26|0,0,(c[7768]|0)/2|0,c[7768]|0);m=f;n=l;c[m>>2]=c[n>>2];c[m+4>>2]=c[n+4>>2];c[m+8>>2]=c[n+8>>2];c[m+12>>2]=c[n+12>>2];Ub(c[70810]|0,f|0,c[16874]|0,g|0)|0}}i=e;return}function bf(){var a=0,b=0,d=0,e=0,f=0,g=0,h=0,j=0,k=0;a=i;i=i+272|0;b=a|0;d=a+16|0;e=0;while(1){if((e|0)>=3){break}c[b+(e<<2)>>2]=0;e=e+1|0}do{if((c[7766]|0)==-1){f=7}else{if((c[7767]|0)==-1){f=7;break}if((c[7768]|0)==-1){c[7768]=32}if((c[7766]|0)<480){f=14}else{if((c[7767]|0)<480){f=14}}if((f|0)==14){c[7768]=16}}}while(0);if((f|0)==7){c[7766]=640;c[7767]=480;if((c[7768]|0)==-1){c[7768]=32}}if((c[7769]|0)==-1){c[7769]=0}if((c[7760]|0)==-1){f=20}else{if((c[7761]|0)==-1){f=20}}if((f|0)==20){c[7760]=16;c[7761]=12}if((c[7765]|0)==-1){c[7765]=0}g=Wb(0,142606337)|0;if((g|0)!=0){if((g|0)==-1){e=0;while(1){if((e|0)>=3){break}c[b+(e<<2)>>2]=134217729;e=e+1|0}}else{e=0;while(1){if((c[g+(e<<2)>>2]|0)==0){break}do{if((c[(c[g+(e<<2)>>2]|0)+8>>2]|0)==(c[7766]|0)){if((c[(c[g+(e<<2)>>2]|0)+12>>2]|0)!=(c[7767]|0)){f=36;break}c[b>>2]=134217729}else{f=36}}while(0);if((f|0)==36){f=0;do{if((c[(c[g+(e<<2)>>2]|0)+8>>2]|0)==640){if((c[(c[g+(e<<2)>>2]|0)+12>>2]|0)!=480){f=39;break}c[b+4>>2]=134217729}else{f=39}}while(0);if((f|0)==39){f=0;do{if((c[(c[g+(e<<2)>>2]|0)+8>>2]|0)==320){if((c[(c[g+(e<<2)>>2]|0)+12>>2]|0)!=240){break}c[b+8>>2]=134217729}}while(0)}}e=e+1|0}}}g=Wb(0,8388608)|0;if((g|0)!=0){if(!((g|0)==-1)){e=0;while(1){if((c[g+(e<<2)>>2]|0)==0){break}e=e+1|0}}}e=0;while(1){if((e|0)>=3){break}if((e|0)==1){c[7766]=640;c[7767]=480;c[7768]=32}else{if((e|0)==2){c[7766]=320;c[7767]=240;c[7768]=16}}g=1048576|c[7769];Qf(d|0,15360)|0;if((e|0)==0){b=c[7767]|0;Nb(c[n>>2]|0,15176,(h=i,i=i+24|0,c[h>>2]=c[7766],c[h+8>>2]=b,c[h+16>>2]=d,h)|0)|0;i=h}else{if((e|0)==1){b=c[7767]|0;Nb(c[n>>2]|0,15e3,(h=i,i=i+24|0,c[h>>2]=c[7766],c[h+8>>2]=b,c[h+16>>2]=d,h)|0)|0;i=h}else{if((e|0)==2){b=c[7767]|0;Nb(c[n>>2]|0,14808,(h=i,i=i+24|0,c[h>>2]=c[7766],c[h+8>>2]=b,c[h+16>>2]=d,h)|0)|0;i=h}}}c[16874]=lb(c[7766]|0,c[7767]|0,16,g|0)|0;if((c[16874]|0)!=0){f=74;break}if((e|0)>=2){f=77;break}g=c[n>>2]|0;b=ub()|0;Nb(g|0,14616,(h=i,i=i+8|0,c[h>>2]=b,h)|0)|0;i=h;e=e+1|0}if((f|0)!=74)if((f|0)==77){j=1;k=j;i=a;return k|0}c[7770]=0;c[7771]=0;j=0;k=j;i=a;return k|0}function cf(a){a=a|0;var b=0,d=0,e=0;b=i;d=a;if((Lb(c[16874]|0)|0)==0){a=c[n>>2]|0;e=ub()|0;Nb(a|0,14416,(a=i,i=i+8|0,c[a>>2]=e,a)|0)|0;i=a}if((c[d>>2]|0)!=8388608){c[d>>2]=8388608;i=b;return}else{c[d>>2]=0;i=b;return}}function df(){var b=0,d=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0;b=i;i=i+792|0;d=b|0;e=b+136|0;f=b+152|0;g=b+408|0;h=b+424|0;j=b+440|0;k=b+456|0;l=b+472|0;m=b+488|0;n=b+504|0;o=b+520|0;p=b+536|0;q=b+552|0;r=b+568|0;s=b+584|0;t=b+600|0;u=b+616|0;v=b+632|0;w=b+648|0;x=b+664|0;y=b+680|0;z=b+696|0;A=b+712|0;B=b+728|0;C=b+744|0;D=b+760|0;E=b+776|0;F=(((c[(c[16874]|0)+8>>2]|0)-((c[7768]|0)*15|0)|0)/2|0)+(c[7770]|0)|0;G=(((c[(c[16874]|0)+12>>2]|0)-((c[7768]|0)*15|0)|0)/2|0)+(c[7771]|0)|0;a[282152]=(c[60012+((c[16612]|0)*524|0)>>2]|0)>>>16&255;a[282153]=(c[60012+((c[16612]|0)*524|0)>>2]|0)>>>8&255;a[282154]=c[60012+((c[16612]|0)*524|0)>>2]&255;if((c[28158]|0)>=15){c[7777]=~~+$(+(c[27244]|0)/+(1e3/(c[28574]|0)|0|0));c[7778]=~~+$(+(c[27242]|0)/+(1e3/(c[28574]|0)|0|0));c[7784]=~~+$(+(c[27244]|0)/+(1e3/(c[28574]|0)|0|0));c[7785]=~~+$(+(c[27242]|0)/+(1e3/(c[28574]|0)|0|0));c[7791]=~~+$(+(c[27244]|0)/+(1e3/(c[28574]|0)|0|0));c[7792]=~~+$(+(c[27242]|0)/+(1e3/(c[28574]|0)|0|0));c[7798]=~~+$(+(c[27244]|0)/+(1e3/(c[28574]|0)|0|0));c[7799]=~~+$(+(c[27242]|0)/+(1e3/(c[28574]|0)|0|0));c[7805]=~~+$(+(c[27244]|0)/+(1e3/(c[28574]|0)|0|0));c[7806]=~~+$(+(c[27242]|0)/+(1e3/(c[28574]|0)|0|0));c[7812]=~~+$(+(c[27244]|0)/+(1e3/(c[28574]|0)|0|0));c[7813]=~~+$(+(c[27242]|0)/+(1e3/(c[28574]|0)|0|0));c[7819]=~~+$(+(c[27244]|0)/+(1e3/(c[28574]|0)|0|0));c[7820]=~~+$(+(c[27242]|0)/+(1e3/(c[28574]|0)|0|0));c[7826]=~~+$(+(c[27244]|0)/+(1e3/(c[28574]|0)|0|0));c[7827]=~~+$(+(c[27242]|0)/+(1e3/(c[28574]|0)|0|0));c[7840]=~~+$(+(c[27244]|0)/+(1e3/(c[28574]|0)|0|0));c[7841]=~~+$(+(c[27242]|0)/+(1e3/(c[28574]|0)|0|0));c[7847]=~~+$(+(c[27244]|0)/+(1e3/(c[28574]|0)|0|0));c[7848]=~~+$(+(c[27242]|0)/+(1e3/(c[28574]|0)|0|0));c[7854]=~~+$(+(c[27244]|0)/+(1e3/(c[28574]|0)|0|0));c[7855]=~~+$(+(c[27242]|0)/+(1e3/(c[28574]|0)|0|0));c[7861]=~~+$(+(c[27244]|0)/+(1e3/(c[28574]|0)|0|0));c[7862]=~~+$(+(c[27242]|0)/+(1e3/(c[28574]|0)|0|0));c[8022]=~~+$(+(c[27244]|0)/+(1e3/(c[28574]|0)|0|0));c[8023]=~~+$(+(c[27242]|0)/+(1e3/(c[28574]|0)|0|0));Le(He(100)|0,1)|0;se();c[28512]=6;if((De(c[28512]|0)|0)!=0){H=Be()|0;jb(16368,(I=i,i=i+16|0,c[I>>2]=28528,c[I+8>>2]=H,I)|0)|0;i=I}if((Ae(d)|0)!=0){H=Be()|0;jb(16368,(I=i,i=i+16|0,c[I>>2]=28528,c[I+8>>2]=H,I)|0)|0;i=I}c[d>>2]=100;if((Ce(d)|0)!=0){d=Be()|0;jb(16368,(I=i,i=i+16|0,c[I>>2]=28528,c[I+8>>2]=d,I)|0)|0;i=I}}if((c[28158]|0)>=7){Ye();a[114336]=(c[60016+((c[16612]|0)*524|0)>>2]|0)>>>16&255;a[114337]=(c[60016+((c[16612]|0)*524|0)>>2]|0)>>>8&255;a[114338]=c[60016+((c[16612]|0)*524|0)>>2]&255;c[28228]=rd(c[28582]|0,14080,114336,282152)|0;c[16344]=c[(c[28228]|0)+8>>2];if((c[7768]|0)==16){Ze(g,F+((c[7768]|0)*15|0)-(c[(c[28228]|0)+8>>2]|0)|0,G+37|0,c[(c[28228]|0)+8>>2]|0,c[(c[28228]|0)+12>>2]|0);d=e;H=g;c[d>>2]=c[H>>2];c[d+4>>2]=c[H+4>>2];c[d+8>>2]=c[H+8>>2];c[d+12>>2]=c[H+12>>2]}else{if((c[7768]|0)==32){Ze(h,F+((c[7768]|0)*15|0)-(c[(c[28228]|0)+8>>2]|0)|0,G+74|0,c[(c[28228]|0)+8>>2]|0,c[(c[28228]|0)+12>>2]|0);H=e;d=h;c[H>>2]=c[d>>2];c[H+4>>2]=c[d+4>>2];c[H+8>>2]=c[d+8>>2];c[H+12>>2]=c[d+12>>2]}}Ub(c[28228]|0,0,c[16874]|0,e|0)|0;hc(c[28228]|0);a[114336]=(c[60020+((c[16612]|0)*524|0)>>2]|0)>>>16&255;a[114337]=(c[60020+((c[16612]|0)*524|0)>>2]|0)>>>8&255;a[114338]=c[60020+((c[16612]|0)*524|0)>>2]&255;J=0;while(1){if((J|0)>=4){break}c[28228]=rd(c[28582]|0,43328+(J*100|0)|0,114336,282152)|0;d=c[28228]|0;Ja(d|0,131072,Jb(c[(c[28228]|0)+4>>2]|0,a[282152]|0,a[282153]|0,a[282154]|0)|0)|0;if((c[7768]|0)==16){d=G+48+(aa(J,((c[7768]|0)/8|0)+10|0)|0)|0;Ze(j,F+2|0,d,c[(c[28228]|0)+8>>2]|0,c[(c[28228]|0)+12>>2]|0);d=e;H=j;c[d>>2]=c[H>>2];c[d+4>>2]=c[H+4>>2];c[d+8>>2]=c[H+8>>2];c[d+12>>2]=c[H+12>>2]}else{if((c[7768]|0)==32){H=G+96+(aa(J,((c[7768]|0)/8|0)+20|0)|0)|0;Ze(k,F+4|0,H,c[(c[28228]|0)+8>>2]|0,c[(c[28228]|0)+12>>2]|0);H=e;d=k;c[H>>2]=c[d>>2];c[H+4>>2]=c[d+4>>2];c[H+8>>2]=c[d+8>>2];c[H+12>>2]=c[d+12>>2]}}Ub(c[28228]|0,0,c[16874]|0,e|0)|0;hc(c[28228]|0);J=J+1|0}a[114336]=(c[60040+((c[16612]|0)*524|0)>>2]|0)>>>16&255;a[114337]=(c[60040+((c[16612]|0)*524|0)>>2]|0)>>>8&255;a[114338]=c[60040+((c[16612]|0)*524|0)>>2]&255;J=0;while(1){if((J|0)>=7){break}c[28228]=rd(c[28582]|0,45032+(J*100|0)|0,114336,282152)|0;k=c[28228]|0;Ja(k|0,131072,Jb(c[(c[28228]|0)+4>>2]|0,a[282152]|0,a[282153]|0,a[282154]|0)|0)|0;if((c[7768]|0)==16){k=G+105+(aa(J,((c[7768]|0)/8|0)+10|0)|0)|0;Ze(l,F+6|0,k,c[(c[28228]|0)+8>>2]|0,c[(c[28228]|0)+12>>2]|0);k=e;j=l;c[k>>2]=c[j>>2];c[k+4>>2]=c[j+4>>2];c[k+8>>2]=c[j+8>>2];c[k+12>>2]=c[j+12>>2]}else{if((c[7768]|0)==32){j=G+210+(aa(J,((c[7768]|0)/8|0)+20|0)|0)|0;Ze(m,F+12|0,j,c[(c[28228]|0)+8>>2]|0,c[(c[28228]|0)+12>>2]|0);j=e;k=m;c[j>>2]=c[k>>2];c[j+4>>2]=c[k+4>>2];c[j+8>>2]=c[k+8>>2];c[j+12>>2]=c[k+12>>2]}}Ub(c[28228]|0,0,c[16874]|0,e|0)|0;hc(c[28228]|0);J=J+1|0}a[114336]=(c[60040+((c[16612]|0)*524|0)>>2]|0)>>>16&255;a[114337]=(c[60040+((c[16612]|0)*524|0)>>2]|0)>>>8&255;a[114338]=c[60040+((c[16612]|0)*524|0)>>2]&255;J=0;while(1){if((J|0)>=6){break}c[28228]=rd(c[28582]|0,44432+(J*100|0)|0,114336,282152)|0;m=c[28228]|0;Ja(m|0,131072,Jb(c[(c[28228]|0)+4>>2]|0,a[282152]|0,a[282153]|0,a[282154]|0)|0)|0;if((c[7768]|0)==16){m=G+105+(aa(J,((c[7768]|0)/8|0)+10|0)|0)|0;Ze(n,F+79|0,m,c[(c[28228]|0)+8>>2]|0,c[(c[28228]|0)+12>>2]|0);m=e;l=n;c[m>>2]=c[l>>2];c[m+4>>2]=c[l+4>>2];c[m+8>>2]=c[l+8>>2];c[m+12>>2]=c[l+12>>2]}else{if((c[7768]|0)==32){l=G+210+(aa(J,((c[7768]|0)/8|0)+20|0)|0)|0;Ze(o,F+158|0,l,c[(c[28228]|0)+8>>2]|0,c[(c[28228]|0)+12>>2]|0);l=e;m=o;c[l>>2]=c[m>>2];c[l+4>>2]=c[m+4>>2];c[l+8>>2]=c[m+8>>2];c[l+12>>2]=c[m+12>>2]}}Ub(c[28228]|0,0,c[16874]|0,e|0)|0;hc(c[28228]|0);J=J+1|0}a[114336]=(c[60044+((c[16612]|0)*524|0)>>2]|0)>>>16&255;a[114337]=(c[60044+((c[16612]|0)*524|0)>>2]|0)>>>8&255;a[114338]=c[60044+((c[16612]|0)*524|0)>>2]&255;J=0;while(1){if((J|0)>=3){break}c[28228]=rd(c[28582]|0,45736+(J*100|0)|0,114336,282152)|0;o=c[28228]|0;Ja(o|0,131072,Jb(c[(c[28228]|0)+4>>2]|0,a[282152]|0,a[282153]|0,a[282154]|0)|0)|0;if((c[7768]|0)==16){o=G+199+(aa(J,((c[7768]|0)/8|0)+10|0)|0)|0;Ze(p,F+(((c[7768]|0)*15|0|0)/2|0)-((c[(c[28228]|0)+8>>2]|0)/2|0)|0,o,c[(c[28228]|0)+8>>2]|0,c[(c[28228]|0)+12>>2]|0);o=e;n=p;c[o>>2]=c[n>>2];c[o+4>>2]=c[n+4>>2];c[o+8>>2]=c[n+8>>2];c[o+12>>2]=c[n+12>>2]}else{if((c[7768]|0)==32){n=G+398+(aa(J,((c[7768]|0)/8|0)+20|0)|0)|0;Ze(q,F+(((c[7768]|0)*15|0|0)/2|0)-((c[(c[28228]|0)+8>>2]|0)/2|0)|0,n,c[(c[28228]|0)+8>>2]|0,c[(c[28228]|0)+12>>2]|0);n=e;o=q;c[n>>2]=c[o>>2];c[n+4>>2]=c[o+4>>2];c[n+8>>2]=c[o+8>>2];c[n+12>>2]=c[o+12>>2]}}Ub(c[28228]|0,0,c[16874]|0,e|0)|0;hc(c[28228]|0);J=J+1|0}}if((c[28158]|0)>=3){if((c[28158]|0)<=3){Ze(r,F+(((c[7768]|0)*125|0|0)/16|0)|0,G+(((c[7768]|0)*104|0|0)/16|0)|0,((c[7768]|0)*113|0|0)/16|0,((c[7768]|0)*90|0|0)/16|0);q=e;p=r;c[q>>2]=c[p>>2];c[q+4>>2]=c[p+4>>2];c[q+8>>2]=c[p+8>>2];c[q+12>>2]=c[p+12>>2];p=c[16874]|0;Ta(p|0,e|0,Jb(c[(c[16874]|0)+4>>2]|0,(c[60012+((c[16612]|0)*524|0)>>2]|0)>>>16&255|0,(c[60012+((c[16612]|0)*524|0)>>2]|0)>>>8&255|0,c[60012+((c[16612]|0)*524|0)>>2]&255|0)|0)|0}J=0;while(1){if((J|0)>=7){break}if((J|0)!=5){if((J|0)==(c[28156]|0)){a[114336]=(c[60028+((c[16612]|0)*524|0)>>2]|0)>>>16&255;a[114337]=(c[60028+((c[16612]|0)*524|0)>>2]|0)>>>8&255;a[114338]=c[60028+((c[16612]|0)*524|0)>>2]&255}else{a[114336]=(c[60024+((c[16612]|0)*524|0)>>2]|0)>>>16&255;a[114337]=(c[60024+((c[16612]|0)*524|0)>>2]|0)>>>8&255;a[114338]=c[60024+((c[16612]|0)*524|0)>>2]&255}c[28228]=rd(c[28582]|0,43728+(J*100|0)|0,114336,282152)|0;p=c[28228]|0;Ja(p|0,131072,Jb(c[(c[28228]|0)+4>>2]|0,a[282152]|0,a[282153]|0,a[282154]|0)|0)|0;if((c[7768]|0)==16){p=G+105+(aa(J,((c[7768]|0)/8|0)+10|0)|0)|0;Ze(s,F+129|0,p,c[(c[28228]|0)+8>>2]|0,c[(c[28228]|0)+12>>2]|0);p=e;q=s;c[p>>2]=c[q>>2];c[p+4>>2]=c[q+4>>2];c[p+8>>2]=c[q+8>>2];c[p+12>>2]=c[q+12>>2]}else{if((c[7768]|0)==32){q=G+210+(aa(J,((c[7768]|0)/8|0)+20|0)|0)|0;Ze(t,F+258|0,q,c[(c[28228]|0)+8>>2]|0,c[(c[28228]|0)+12>>2]|0);q=e;p=t;c[q>>2]=c[p>>2];c[q+4>>2]=c[p+4>>2];c[q+8>>2]=c[p+8>>2];c[q+12>>2]=c[p+12>>2]}}Ub(c[28228]|0,0,c[16874]|0,e|0)|0;ef(100,J+101|0,e);hc(c[28228]|0)}J=J+1|0}Qf(f|0,13944)|0;if((c[82540+((c[16614]|0)*292|0)>>2]|0)>1){a[114336]=(c[60028+((c[16612]|0)*524|0)>>2]|0)>>>16&255;a[114337]=(c[60028+((c[16612]|0)*524|0)>>2]|0)>>>8&255;a[114338]=c[60028+((c[16612]|0)*524|0)>>2]&255}else{a[114336]=(c[60032+((c[16612]|0)*524|0)>>2]|0)>>>16&255;a[114337]=(c[60032+((c[16612]|0)*524|0)>>2]|0)>>>8&255;a[114338]=c[60032+((c[16612]|0)*524|0)>>2]&255}c[28228]=rd(c[28582]|0,f|0,114336,282152)|0;J=c[28228]|0;Ja(J|0,131072,Jb(c[(c[28228]|0)+4>>2]|0,a[282152]|0,a[282153]|0,a[282154]|0)|0)|0;if((c[7768]|0)==16){Ze(u,F+164|0,G+117|0,c[(c[28228]|0)+8>>2]|0,c[(c[28228]|0)+12>>2]|0);J=e;t=u;c[J>>2]=c[t>>2];c[J+4>>2]=c[t+4>>2];c[J+8>>2]=c[t+8>>2];c[J+12>>2]=c[t+12>>2]}else{if((c[7768]|0)==32){Ze(v,F+330|0,G+234|0,c[(c[28228]|0)+8>>2]|0,c[(c[28228]|0)+12>>2]|0);t=e;J=v;c[t>>2]=c[J>>2];c[t+4>>2]=c[J+4>>2];c[t+8>>2]=c[J+8>>2];c[t+12>>2]=c[J+12>>2]}}Ub(c[28228]|0,0,c[16874]|0,e|0)|0;ef(100,109,e);J=e|0;c[J>>2]=(c[J>>2]|0)+(c[(c[28228]|0)+8>>2]|0);hc(c[28228]|0);J=c[82532+((c[16614]|0)*292|0)>>2]|0;Ya(f|0,13784,(I=i,i=i+24|0,c[I>>2]=c[82540+((c[16614]|0)*292|0)>>2],c[I+8>>2]=33864,c[I+16>>2]=J,I)|0)|0;i=I;a[114336]=(c[60020+((c[16612]|0)*524|0)>>2]|0)>>>16&255;a[114337]=(c[60020+((c[16612]|0)*524|0)>>2]|0)>>>8&255;a[114338]=c[60020+((c[16612]|0)*524|0)>>2]&255;c[28228]=rd(c[28582]|0,f|0,114336,282152)|0;I=c[28228]|0;Ja(I|0,131072,Jb(c[(c[28228]|0)+4>>2]|0,a[282152]|0,a[282153]|0,a[282154]|0)|0)|0;c[e+8>>2]=c[(c[28228]|0)+8>>2];c[e+12>>2]=c[(c[28228]|0)+12>>2];Ub(c[28228]|0,0,c[16874]|0,e|0)|0;I=e|0;c[I>>2]=(c[I>>2]|0)+(c[(c[28228]|0)+8>>2]|0);hc(c[28228]|0);Qf(f|0,13568)|0;if((c[82540+((c[16614]|0)*292|0)>>2]|0)<(c[82536+((c[16614]|0)*292|0)>>2]|0)){a[114336]=(c[60028+((c[16612]|0)*524|0)>>2]|0)>>>16&255;a[114337]=(c[60028+((c[16612]|0)*524|0)>>2]|0)>>>8&255;a[114338]=c[60028+((c[16612]|0)*524|0)>>2]&255}else{a[114336]=(c[60032+((c[16612]|0)*524|0)>>2]|0)>>>16&255;a[114337]=(c[60032+((c[16612]|0)*524|0)>>2]|0)>>>8&255;a[114338]=c[60032+((c[16612]|0)*524|0)>>2]&255}c[28228]=rd(c[28582]|0,f|0,114336,282152)|0;I=c[28228]|0;Ja(I|0,131072,Jb(c[(c[28228]|0)+4>>2]|0,a[282152]|0,a[282153]|0,a[282154]|0)|0)|0;c[e+8>>2]=c[(c[28228]|0)+8>>2];c[e+12>>2]=c[(c[28228]|0)+12>>2];Ub(c[28228]|0,0,c[16874]|0,e|0)|0;ef(100,116,e);hc(c[28228]|0);Qf(f|0,13944)|0;if((c[16614]|0)>0){a[114336]=(c[60028+((c[16612]|0)*524|0)>>2]|0)>>>16&255;a[114337]=(c[60028+((c[16612]|0)*524|0)>>2]|0)>>>8&255;a[114338]=c[60028+((c[16612]|0)*524|0)>>2]&255}else{a[114336]=(c[60032+((c[16612]|0)*524|0)>>2]|0)>>>16&255;a[114337]=(c[60032+((c[16612]|0)*524|0)>>2]|0)>>>8&255;a[114338]=c[60032+((c[16612]|0)*524|0)>>2]&255}c[28228]=rd(c[28582]|0,f|0,114336,282152)|0;I=c[28228]|0;Ja(I|0,131072,Jb(c[(c[28228]|0)+4>>2]|0,a[282152]|0,a[282153]|0,a[282154]|0)|0)|0;if((c[7768]|0)==16){Ze(w,F+165|0,G+129|0,c[(c[28228]|0)+8>>2]|0,c[(c[28228]|0)+12>>2]|0);I=e;J=w;c[I>>2]=c[J>>2];c[I+4>>2]=c[J+4>>2];c[I+8>>2]=c[J+8>>2];c[I+12>>2]=c[J+12>>2]}else{if((c[7768]|0)==32){Ze(x,F+330|0,G+258|0,c[(c[28228]|0)+8>>2]|0,c[(c[28228]|0)+12>>2]|0);J=e;I=x;c[J>>2]=c[I>>2];c[J+4>>2]=c[I+4>>2];c[J+8>>2]=c[I+8>>2];c[J+12>>2]=c[I+12>>2]}}Ub(c[28228]|0,0,c[16874]|0,e|0)|0;ef(100,110,e);I=e|0;c[I>>2]=(c[I>>2]|0)+(c[(c[28228]|0)+8>>2]|0);hc(c[28228]|0);a[114336]=(c[60020+((c[16612]|0)*524|0)>>2]|0)>>>16&255;a[114337]=(c[60020+((c[16612]|0)*524|0)>>2]|0)>>>8&255;a[114338]=c[60020+((c[16612]|0)*524|0)>>2]&255;c[28228]=rd(c[28582]|0,82512+((c[16614]|0)*292|0)|0,114336,282152)|0;I=c[28228]|0;Ja(I|0,131072,Jb(c[(c[28228]|0)+4>>2]|0,a[282152]|0,a[282153]|0,a[282154]|0)|0)|0;c[e+8>>2]=c[(c[28228]|0)+8>>2];c[e+12>>2]=c[(c[28228]|0)+12>>2];Ub(c[28228]|0,0,c[16874]|0,e|0)|0;I=e|0;c[I>>2]=(c[I>>2]|0)+(c[(c[28228]|0)+8>>2]|0);hc(c[28228]|0);Qf(f|0,13568)|0;if((c[16614]|0)<((c[28580]|0)-1|0)){a[114336]=(c[60028+((c[16612]|0)*524|0)>>2]|0)>>>16&255;a[114337]=(c[60028+((c[16612]|0)*524|0)>>2]|0)>>>8&255;a[114338]=c[60028+((c[16612]|0)*524|0)>>2]&255}else{a[114336]=(c[60032+((c[16612]|0)*524|0)>>2]|0)>>>16&255;a[114337]=(c[60032+((c[16612]|0)*524|0)>>2]|0)>>>8&255;a[114338]=c[60032+((c[16612]|0)*524|0)>>2]&255}c[28228]=rd(c[28582]|0,f|0,114336,282152)|0;f=c[28228]|0;Ja(f|0,131072,Jb(c[(c[28228]|0)+4>>2]|0,a[282152]|0,a[282153]|0,a[282154]|0)|0)|0;c[e+8>>2]=c[(c[28228]|0)+8>>2];c[e+12>>2]=c[(c[28228]|0)+12>>2];Ub(c[28228]|0,0,c[16874]|0,e|0)|0;ef(100,117,e);hc(c[28228]|0)}if((c[28158]|0)<1){c[28158]=0;i=b;return}if((c[7768]|0)==16){Ze(y,F|0,G+43|0,240-(c[16344]|0)|0,(c[7768]|0)/8|0);f=e;I=y;c[f>>2]=c[I>>2];c[f+4>>2]=c[I+4>>2];c[f+8>>2]=c[I+8>>2];c[f+12>>2]=c[I+12>>2]}else{if((c[7768]|0)==32){Ze(z,F|0,G+86|0,480-(c[16344]|0)|0,(c[7768]|0)/8|0);I=e;f=z;c[I>>2]=c[f>>2];c[I+4>>2]=c[f+4>>2];c[I+8>>2]=c[f+8>>2];c[I+12>>2]=c[f+12>>2]}}f=c[16874]|0;Ta(f|0,e|0,Jb(c[(c[16874]|0)+4>>2]|0,c[6048+(c[70550]<<2)>>2]>>16&255|0,c[6048+(c[70550]<<2)>>2]>>8&255|0,c[6048+(c[70550]<<2)>>2]&255|0)|0)|0;Ze(A,F|0,G+(((c[7768]|0)*102|0|0)/16|0)|0,((c[7768]|0)*240|0|0)/16|0,(c[7768]|0)/8|0);f=e;I=A;c[f>>2]=c[I>>2];c[f+4>>2]=c[I+4>>2];c[f+8>>2]=c[I+8>>2];c[f+12>>2]=c[I+12>>2];I=c[16874]|0;Ta(I|0,e|0,Jb(c[(c[16874]|0)+4>>2]|0,c[6048+(c[70550]<<2)>>2]>>16&255|0,c[6048+(c[70550]<<2)>>2]>>8&255|0,c[6048+(c[70550]<<2)>>2]&255|0)|0)|0;Ze(B,F|0,G+(((c[7768]|0)*194|0|0)/16|0)|0,((c[7768]|0)*240|0|0)/16|0,(c[7768]|0)/8|0);I=e;f=B;c[I>>2]=c[f>>2];c[I+4>>2]=c[f+4>>2];c[I+8>>2]=c[f+8>>2];c[I+12>>2]=c[f+12>>2];f=c[16874]|0;Ta(f|0,e|0,Jb(c[(c[16874]|0)+4>>2]|0,c[6048+(c[70550]<<2)>>2]>>16&255|0,c[6048+(c[70550]<<2)>>2]>>8&255|0,c[6048+(c[70550]<<2)>>2]&255|0)|0)|0;Ze(C,F|0,G+(((c[7768]|0)*102|0|0)/16|0)|0,(c[7768]|0)/8|0,((c[7768]|0)*92|0|0)/16|0);f=e;I=C;c[f>>2]=c[I>>2];c[f+4>>2]=c[I+4>>2];c[f+8>>2]=c[I+8>>2];c[f+12>>2]=c[I+12>>2];I=c[16874]|0;Ta(I|0,e|0,Jb(c[(c[16874]|0)+4>>2]|0,c[6048+(c[70550]<<2)>>2]>>16&255|0,c[6048+(c[70550]<<2)>>2]>>8&255|0,c[6048+(c[70550]<<2)>>2]&255|0)|0)|0;Ze(D,F+(((c[7768]|0)*123|0|0)/16|0)|0,G+(((c[7768]|0)*102|0|0)/16|0)|0,(c[7768]|0)/8|0,((c[7768]|0)*92|0|0)/16|0);I=e;f=D;c[I>>2]=c[f>>2];c[I+4>>2]=c[f+4>>2];c[I+8>>2]=c[f+8>>2];c[I+12>>2]=c[f+12>>2];f=c[16874]|0;Ta(f|0,e|0,Jb(c[(c[16874]|0)+4>>2]|0,c[6048+(c[70550]<<2)>>2]>>16&255|0,c[6048+(c[70550]<<2)>>2]>>8&255|0,c[6048+(c[70550]<<2)>>2]&255|0)|0)|0;Ze(E,F+(((c[7768]|0)*238|0|0)/16|0)|0,G+(((c[7768]|0)*102|0|0)/16|0)|0,(c[7768]|0)/8|0,((c[7768]|0)*92|0|0)/16|0);f=e;I=E;c[f>>2]=c[I>>2];c[f+4>>2]=c[I+4>>2];c[f+8>>2]=c[I+8>>2];c[f+12>>2]=c[I+12>>2];I=c[16874]|0;Ta(I|0,e|0,Jb(c[(c[16874]|0)+4>>2]|0,c[6048+(c[70550]<<2)>>2]>>16&255|0,c[6048+(c[70550]<<2)>>2]>>8&255|0,c[6048+(c[70550]<<2)>>2]&255|0)|0)|0;if((c[7768]|0)==16){ff(6312,F|0,G+6|0,80,8)}else{if((c[7768]|0)==32){ff(6312,F+40|0,G+19|0,80,8)}}G=(c[70548]|0)-1|0;c[70548]=G;if((G|0)<=0){c[70548]=2;G=(c[70550]|0)+1|0;c[70550]=G;if((G|0)>=66){c[70550]=0}}c[28158]=0;i=b;return}function ef(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,j=0;e=i;i=i+136|0;f=d;d=i;i=i+16|0;c[d>>2]=c[f>>2];c[d+4>>2]=c[f+4>>2];c[d+8>>2]=c[f+8>>2];c[d+12>>2]=c[f+12>>2];f=e|0;g=a;a=b;b=He(a)|0;h=b;if((b|0)==0){if((Ae(f)|0)!=0){b=Be()|0;jb(16368,(j=i,i=i+16|0,c[j>>2]=28584,c[j+8>>2]=b,j)|0)|0;i=j}c[f>>2]=a;c[f+4>>2]=g;if((Ce(f)|0)!=0){f=Be()|0;jb(16368,(j=i,i=i+16|0,c[j>>2]=28584,c[j+8>>2]=f,j)|0)|0;i=j}}j=He(a)|0;h=j;if((j|0)==0){i=e;return}c[h+40>>2]=c[d>>2];c[h+44>>2]=c[d+4>>2];c[h+48>>2]=c[d+8>>2];c[h+52>>2]=c[d+12>>2];i=e;return}function ff(b,d,e,f,g){b=b|0;d=d|0;e=e|0;f=f|0;g=g|0;var h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0;h=i;i=i+48|0;j=h|0;k=h+16|0;l=h+32|0;m=b;b=d;d=e;e=f;f=g;g=c[70550]|0;n=0;while(1){if((n|0)>=(f|0)){break}o=0;while(1){if((o|0)>=(e|0)){break}if((a[(c[m+(n<<2)>>2]|0)+o|0]|0)!=46){if((c[7768]|0)==16){Ze(k,(o*3|0)+b|0,(n<<2)+d|0,2,3);p=j;q=k;c[p>>2]=c[q>>2];c[p+4>>2]=c[q+4>>2];c[p+8>>2]=c[q+8>>2];c[p+12>>2]=c[q+12>>2]}else{Ze(l,(o*5|0)+b|0,(n*7|0)+d|0,4,6);q=j;p=l;c[q>>2]=c[p>>2];c[q+4>>2]=c[p+4>>2];c[q+8>>2]=c[p+8>>2];c[q+12>>2]=c[p+12>>2]}p=c[16874]|0;Ta(p|0,j|0,Jb(c[(c[16874]|0)+4>>2]|0,c[6048+(g<<2)>>2]>>16&255|0,c[6048+(g<<2)>>2]>>8&255|0,c[6048+(g<<2)>>2]&255|0)|0)|0}o=o+1|0}g=g+1|0;if((g|0)>=66){g=0}n=n+1|0}i=h;return}function gf(){var b=0,d=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=0,O=0,P=0,Q=0,R=0,S=0,T=0,U=0,V=0,W=0,X=0,Y=0,Z=0,_=0,ba=0,ca=0,da=0,ea=0,fa=0,ga=0,ha=0,ia=0,ja=0,ka=0,la=0,ma=0,na=0;b=i;i=i+1344|0;d=b|0;e=b+56|0;f=b+112|0;g=b+168|0;h=b+184|0;j=b+200|0;k=b+336|0;l=b+592|0;m=b+608|0;n=b+624|0;o=b+640|0;p=b+656|0;q=b+672|0;r=b+688|0;s=b+704|0;t=b+720|0;u=b+736|0;v=b+752|0;w=b+768|0;x=b+784|0;y=b+800|0;z=b+816|0;A=b+832|0;B=b+848|0;C=b+864|0;D=b+880|0;E=b+896|0;F=b+912|0;G=b+928|0;H=b+944|0;I=b+960|0;J=b+976|0;K=b+992|0;L=b+1008|0;M=b+1024|0;N=b+1040|0;O=b+1056|0;P=b+1072|0;Q=b+1088|0;R=b+1104|0;S=b+1120|0;T=b+1136|0;U=b+1152|0;V=b+1168|0;W=b+1184|0;X=b+1200|0;Y=b+1216|0;Z=b+1232|0;_=b+1248|0;ba=b+1264|0;ca=b+1280|0;da=b+1296|0;ea=b+1312|0;fa=b+1328|0;ga=(c[7768]|0)+((c[7768]|0)/4|0)|0;Nf(d|0,352,56)|0;ha=e;Uf(ha|0,0,56)|0;ia=ha;c[ia>>2]=86;c[ia+4>>2]=1;c[ia+8>>2]=1;c[ia+12>>2]=1;c[ia+16>>2]=69;c[ia+20>>2]=1;ia=f;Uf(ia|0,0,56)|0;ha=ia;c[ha+24>>2]=86;c[ha+28>>2]=69;c[ha+32>>2]=86;c[ha+36>>2]=69;c[ha+40>>2]=86;c[ha+44>>2]=69;ha=c[60048+((c[16612]|0)*524|0)>>2]|0;ia=(((c[(c[16874]|0)+8>>2]|0)-((c[7768]|0)*15|0)|0)/2|0)+(c[7770]|0)|0;ja=(((c[(c[16874]|0)+12>>2]|0)-((c[7768]|0)*15|0)|0)/2|0)+(c[7771]|0)|0;a[282152]=(c[60012+((c[16612]|0)*524|0)>>2]|0)>>>16&255;a[282153]=(c[60012+((c[16612]|0)*524|0)>>2]|0)>>>8&255;a[282154]=c[60012+((c[16612]|0)*524|0)>>2]&255;a[114336]=(c[60020+((c[16612]|0)*524|0)>>2]|0)>>>16&255;a[114337]=(c[60020+((c[16612]|0)*524|0)>>2]|0)>>>8&255;a[114338]=c[60020+((c[16612]|0)*524|0)>>2]&255;if((c[28236]|0)>=15){c[7777]=~~+$(+(c[27244]|0)/+(1e3/(c[28574]|0)|0|0));c[7778]=~~+$(+(c[27242]|0)/+(1e3/(c[28574]|0)|0|0));c[7784]=~~+$(+(c[27244]|0)/+(1e3/(c[28574]|0)|0|0));c[7785]=~~+$(+(c[27242]|0)/+(1e3/(c[28574]|0)|0|0));c[7791]=~~+$(+(c[27244]|0)/+(1e3/(c[28574]|0)|0|0));c[7792]=~~+$(+(c[27242]|0)/+(1e3/(c[28574]|0)|0|0));c[7798]=~~+$(+(c[27244]|0)/+(1e3/(c[28574]|0)|0|0));c[7799]=~~+$(+(c[27242]|0)/+(1e3/(c[28574]|0)|0|0));c[7805]=~~+$(+(c[27244]|0)/+(1e3/(c[28574]|0)|0|0));c[7806]=~~+$(+(c[27242]|0)/+(1e3/(c[28574]|0)|0|0));c[7812]=~~+$(+(c[27244]|0)/+(1e3/(c[28574]|0)|0|0));c[7813]=~~+$(+(c[27242]|0)/+(1e3/(c[28574]|0)|0|0));c[7819]=~~+$(+(c[27244]|0)/+(1e3/(c[28574]|0)|0|0));c[7820]=~~+$(+(c[27242]|0)/+(1e3/(c[28574]|0)|0|0));c[7826]=~~+$(+(c[27244]|0)/+(1e3/(c[28574]|0)|0|0));c[7827]=~~+$(+(c[27242]|0)/+(1e3/(c[28574]|0)|0|0));c[7840]=~~+$(+(c[27244]|0)/+(1e3/(c[28574]|0)|0|0));c[7841]=~~+$(+(c[27242]|0)/+(1e3/(c[28574]|0)|0|0));c[7847]=~~+$(+(c[27244]|0)/+(1e3/(c[28574]|0)|0|0));c[7848]=~~+$(+(c[27242]|0)/+(1e3/(c[28574]|0)|0|0));c[7854]=~~+$(+(c[27244]|0)/+(1e3/(c[28574]|0)|0|0));c[7855]=~~+$(+(c[27242]|0)/+(1e3/(c[28574]|0)|0|0));c[7861]=~~+$(+(c[27244]|0)/+(1e3/(c[28574]|0)|0|0));c[7862]=~~+$(+(c[27242]|0)/+(1e3/(c[28574]|0)|0|0));c[8022]=~~+$(+(c[27244]|0)/+(1e3/(c[28574]|0)|0|0));c[8023]=~~+$(+(c[27242]|0)/+(1e3/(c[28574]|0)|0|0));Le(He(100)|0,1)|0;se();c[28512]=8;if((De(c[28512]|0)|0)!=0){ka=Be()|0;jb(16368,(la=i,i=i+16|0,c[la>>2]=28552,c[la+8>>2]=ka,la)|0)|0;i=la}if((Ae(j)|0)!=0){ka=Be()|0;jb(16368,(la=i,i=i+16|0,c[la>>2]=28552,c[la+8>>2]=ka,la)|0)|0;i=la}c[j>>2]=100;if((Ce(j)|0)!=0){j=Be()|0;jb(16368,(la=i,i=i+16|0,c[la>>2]=28552,c[la+8>>2]=j,la)|0)|0;i=la}}if((c[28236]|0)>=7){if((c[16346]|0)!=(c[28234]|0)){Le(He(100)|0,0)|0}c[16346]=c[28234];Ye();if((c[28234]|0)==0){ma=0;while(1){if((ma|0)>=12){break}c[28228]=rd(c[28582]|0,48152+(ma*100|0)|0,114336,282152)|0;j=c[28228]|0;Ja(j|0,131072,Jb(c[(c[28228]|0)+4>>2]|0,a[282152]|0,a[282153]|0,a[282154]|0)|0)|0;if((c[7768]|0)==16){j=ja+57+(aa(ma,((c[7768]|0)/8|0)+10|0)|0)|0;Ze(l,ia+2|0,j,c[(c[28228]|0)+8>>2]|0,c[(c[28228]|0)+12>>2]|0);j=h;ka=l;c[j>>2]=c[ka>>2];c[j+4>>2]=c[ka+4>>2];c[j+8>>2]=c[ka+8>>2];c[j+12>>2]=c[ka+12>>2]}else{if((c[7768]|0)==32){ka=ja+104+(aa(ma,((c[7768]|0)/8|0)+20|0)|0)|0;Ze(m,ia+4|0,ka,c[(c[28228]|0)+8>>2]|0,c[(c[28228]|0)+12>>2]|0);ka=h;j=m;c[ka>>2]=c[j>>2];c[ka+4>>2]=c[j+4>>2];c[ka+8>>2]=c[j+8>>2];c[ka+12>>2]=c[j+12>>2]}}Ub(c[28228]|0,0,c[16874]|0,h|0)|0;hc(c[28228]|0);ma=ma+1|0}}else{if((c[28234]|0)==1){ma=0;while(1){if((ma|0)>=7){break}m=ja+(((c[7768]|0)*57|0|0)/16|0)+(aa(ma,ga)|0)|0;Ze(n,ia+((c[7768]<<1|0)/16|0)|0,m,c[7768]|0,c[7768]|0);m=h;l=n;c[m>>2]=c[l>>2];c[m+4>>2]=c[l+4>>2];c[m+8>>2]=c[l+8>>2];c[m+12>>2]=c[l+12>>2];l=c[16874]|0;Ta(l|0,h|0,Jb(c[(c[16874]|0)+4>>2]|0,ha>>>16&255|0,ha>>>8&255|0,ha&255|0)|0)|0;l=(aa(c[d+(ma<<1<<2)>>2]|0,c[7768]|0)|0)/16|0;m=(aa(c[d+((ma<<1)+1<<2)>>2]|0,c[7768]|0)|0)/16|0;Ze(o,l,m,c[7768]|0,c[7768]|0);m=g;l=o;c[m>>2]=c[l>>2];c[m+4>>2]=c[l+4>>2];c[m+8>>2]=c[l+8>>2];c[m+12>>2]=c[l+12>>2];l=ja+(((c[7768]|0)*57|0|0)/16|0)+(aa(ma,ga)|0)|0;Ze(p,ia+((c[7768]<<1|0)/16|0)|0,l,c[7768]|0,c[7768]|0);l=h;m=p;c[l>>2]=c[m>>2];c[l+4>>2]=c[m+4>>2];c[l+8>>2]=c[m+8>>2];c[l+12>>2]=c[m+12>>2];Ub(c[28230]|0,g|0,c[16874]|0,h|0)|0;if((ma|0)==4){m=ja+(((c[7768]|0)*57|0|0)/16|0)+(aa(ma,ga)|0)|0;Ze(q,~~(+(ia+((c[7768]<<1|0)/16|0)|0)+ +(c[7768]|0)*1.5),m,c[7768]|0,c[7768]|0);m=h;l=q;c[m>>2]=c[l>>2];c[m+4>>2]=c[l+4>>2];c[m+8>>2]=c[l+8>>2];c[m+12>>2]=c[l+12>>2];l=c[16874]|0;Ta(l|0,h|0,Jb(c[(c[16874]|0)+4>>2]|0,ha>>>16&255|0,ha>>>8&255|0,ha&255|0)|0)|0;Ze(r,((c[7768]|0)*154|0|0)/16|0,(c[7768]|0)/16|0,c[7768]|0,c[7768]|0);l=g;m=r;c[l>>2]=c[m>>2];c[l+4>>2]=c[m+4>>2];c[l+8>>2]=c[m+8>>2];c[l+12>>2]=c[m+12>>2];Ub(c[28230]|0,g|0,c[16874]|0,h|0)|0}c[28228]=rd(c[28582]|0,47448+(ma*100|0)|0,114336,282152)|0;if((ma|0)==4){m=ja+(((c[7768]|0)*57|0|0)/16|0)+(aa(ma,ga)|0)|0;Ze(s,ia+((c[7768]<<1|0)/16|0)+((c[7768]|0)*3|0)|0,m,c[(c[28228]|0)+8>>2]|0,c[(c[28228]|0)+12>>2]|0);m=h;l=s;c[m>>2]=c[l>>2];c[m+4>>2]=c[l+4>>2];c[m+8>>2]=c[l+8>>2];c[m+12>>2]=c[l+12>>2]}else{l=ja+(((c[7768]|0)*57|0|0)/16|0)+(aa(ma,ga)|0)|0;Ze(t,~~(+(ia+((c[7768]<<1|0)/16|0)|0)+ +(c[7768]|0)*1.5),l,c[(c[28228]|0)+8>>2]|0,c[(c[28228]|0)+12>>2]|0);l=h;m=t;c[l>>2]=c[m>>2];c[l+4>>2]=c[m+4>>2];c[l+8>>2]=c[m+8>>2];c[l+12>>2]=c[m+12>>2]}Ub(c[28228]|0,0,c[16874]|0,h|0)|0;hc(c[28228]|0);ma=ma+1|0}}else{if((c[28234]|0)==2){ma=0;while(1){if((ma|0)>=7){break}if((ma|0)<3){t=ja+(((c[7768]|0)*57|0|0)/16|0)+(aa(ma,ga)|0)|0;Ze(u,ia+((c[7768]<<1|0)/16|0)|0,t,c[7768]|0,c[7768]|0);t=h;s=u;c[t>>2]=c[s>>2];c[t+4>>2]=c[s+4>>2];c[t+8>>2]=c[s+8>>2];c[t+12>>2]=c[s+12>>2];s=c[16874]|0;Ta(s|0,h|0,Jb(c[(c[16874]|0)+4>>2]|0,ha>>>16&255|0,ha>>>8&255|0,ha&255|0)|0)|0;s=(aa(c[e+(ma<<1<<2)>>2]|0,c[7768]|0)|0)/16|0;t=(aa(c[e+((ma<<1)+1<<2)>>2]|0,c[7768]|0)|0)/16|0;Ze(v,s,t,c[7768]|0,c[7768]|0);t=g;s=v;c[t>>2]=c[s>>2];c[t+4>>2]=c[s+4>>2];c[t+8>>2]=c[s+8>>2];c[t+12>>2]=c[s+12>>2];s=ja+(((c[7768]|0)*57|0|0)/16|0)+(aa(ma,ga)|0)|0;Ze(w,ia+((c[7768]<<1|0)/16|0)|0,s,c[7768]|0,c[7768]|0);s=h;t=w;c[s>>2]=c[t>>2];c[s+4>>2]=c[t+4>>2];c[s+8>>2]=c[t+8>>2];c[s+12>>2]=c[t+12>>2];Ub(c[28230]|0,g|0,c[16874]|0,h|0)|0}c[28228]=rd(c[28582]|0,46744+(ma*100|0)|0,114336,282152)|0;t=ja+(((c[7768]|0)*57|0|0)/16|0)+(aa(ma,ga)|0)|0;Ze(x,~~(+(ia+((c[7768]<<1|0)/16|0)|0)+ +(c[7768]|0)*1.5),t,c[(c[28228]|0)+8>>2]|0,c[(c[28228]|0)+12>>2]|0);t=h;s=x;c[t>>2]=c[s>>2];c[t+4>>2]=c[s+4>>2];c[t+8>>2]=c[s+8>>2];c[t+12>>2]=c[s+12>>2];Ub(c[28228]|0,0,c[16874]|0,h|0)|0;hc(c[28228]|0);ma=ma+1|0}}else{if((c[28234]|0)==3){ma=0;while(1){if((ma|0)>=7){break}do{if((ma|0)>2){if((ma|0)>=6){break}x=ja+(((c[7768]|0)*57|0|0)/16|0)+(aa(ma,ga)|0)|0;Ze(y,ia+((c[7768]<<1|0)/16|0)|0,x,c[7768]|0,c[7768]|0);x=h;w=y;c[x>>2]=c[w>>2];c[x+4>>2]=c[w+4>>2];c[x+8>>2]=c[w+8>>2];c[x+12>>2]=c[w+12>>2];w=c[16874]|0;Ta(w|0,h|0,Jb(c[(c[16874]|0)+4>>2]|0,ha>>>16&255|0,ha>>>8&255|0,ha&255|0)|0)|0;w=(aa(c[f+(ma<<1<<2)>>2]|0,c[7768]|0)|0)/16|0;x=(aa(c[f+((ma<<1)+1<<2)>>2]|0,c[7768]|0)|0)/16|0;Ze(z,w,x,c[7768]|0,c[7768]|0);x=g;w=z;c[x>>2]=c[w>>2];c[x+4>>2]=c[w+4>>2];c[x+8>>2]=c[w+8>>2];c[x+12>>2]=c[w+12>>2];w=ja+(((c[7768]|0)*57|0|0)/16|0)+(aa(ma,ga)|0)|0;Ze(A,ia+((c[7768]<<1|0)/16|0)|0,w,c[7768]|0,c[7768]|0);w=h;x=A;c[w>>2]=c[x>>2];c[w+4>>2]=c[x+4>>2];c[w+8>>2]=c[x+8>>2];c[w+12>>2]=c[x+12>>2];Ub(c[28230]|0,g|0,c[16874]|0,h|0)|0}}while(0);c[28228]=rd(c[28582]|0,46040+(ma*100|0)|0,114336,282152)|0;do{if((ma|0)>=3){if((ma|0)>5){na=51;break}x=ja+(((c[7768]|0)*57|0|0)/16|0)+(aa(ma,ga)|0)|0;Ze(B,~~(+(ia+((c[7768]<<1|0)/16|0)|0)+ +(c[7768]|0)*6.5),x,c[(c[28228]|0)+8>>2]|0,c[(c[28228]|0)+12>>2]|0);x=h;w=B;c[x>>2]=c[w>>2];c[x+4>>2]=c[w+4>>2];c[x+8>>2]=c[w+8>>2];c[x+12>>2]=c[w+12>>2]}else{na=51}}while(0);if((na|0)==51){na=0;w=ja+(((c[7768]|0)*57|0|0)/16|0)+(aa(ma,ga)|0)|0;Ze(C,~~(+(ia+((c[7768]<<1|0)/16|0)|0)+ +(c[7768]|0)*1.5),w,c[(c[28228]|0)+8>>2]|0,c[(c[28228]|0)+12>>2]|0);w=h;x=C;c[w>>2]=c[x>>2];c[w+4>>2]=c[x+4>>2];c[w+8>>2]=c[x+8>>2];c[w+12>>2]=c[x+12>>2]}Ub(c[28228]|0,0,c[16874]|0,h|0)|0;hc(c[28228]|0);ma=ma+1|0}}}}}}if((c[28236]|0)>=3){if((c[28232]|0)==1){a[114336]=(c[60028+((c[16612]|0)*524|0)>>2]|0)>>>16&255;a[114337]=(c[60028+((c[16612]|0)*524|0)>>2]|0)>>>8&255;a[114338]=c[60028+((c[16612]|0)*524|0)>>2]&255}else{a[114336]=(c[60024+((c[16612]|0)*524|0)>>2]|0)>>>16&255;a[114337]=(c[60024+((c[16612]|0)*524|0)>>2]|0)>>>8&255;a[114338]=c[60024+((c[16612]|0)*524|0)>>2]&255}Ya(k|0,15776,(la=i,i=i+8|0,c[la>>2]=56104,la)|0)|0;i=la;c[28228]=rd(c[28582]|0,k|0,114336,282152)|0;Ze(D,ia+((((c[7768]|0)*240|0|0)/16|0|0)/2|0)-((c[(c[28228]|0)+8>>2]|0)/2|0)|0,ja+(((c[7768]|0)*220|0|0)/16|0)|0,c[(c[28228]|0)+8>>2]|0,c[(c[28228]|0)+12>>2]|0);C=h;na=D;c[C>>2]=c[na>>2];c[C+4>>2]=c[na+4>>2];c[C+8>>2]=c[na+8>>2];c[C+12>>2]=c[na+12>>2];Ub(c[28228]|0,0,c[16874]|0,h|0)|0;ef(100,102,h);hc(c[28228]|0);if((c[28234]|0)<3){if((c[28232]|0)==2){a[114336]=(c[60028+((c[16612]|0)*524|0)>>2]|0)>>>16&255;a[114337]=(c[60028+((c[16612]|0)*524|0)>>2]|0)>>>8&255;a[114338]=c[60028+((c[16612]|0)*524|0)>>2]&255}else{a[114336]=(c[60024+((c[16612]|0)*524|0)>>2]|0)>>>16&255;a[114337]=(c[60024+((c[16612]|0)*524|0)>>2]|0)>>>8&255;a[114338]=c[60024+((c[16612]|0)*524|0)>>2]&255}Ya(k|0,13352,(la=i,i=i+8|0,c[la>>2]=53816,la)|0)|0;i=la;c[28228]=rd(c[28582]|0,k|0,114336,282152)|0;Ze(E,ia+(((c[7768]|0)*238|0|0)/16|0)-(c[(c[28228]|0)+8>>2]|0)|0,ja+(((c[7768]|0)*220|0|0)/16|0)|0,c[(c[28228]|0)+8>>2]|0,c[(c[28228]|0)+12>>2]|0);na=h;C=E;c[na>>2]=c[C>>2];c[na+4>>2]=c[C+4>>2];c[na+8>>2]=c[C+8>>2];c[na+12>>2]=c[C+12>>2];Ub(c[28228]|0,0,c[16874]|0,h|0)|0;ef(100,103,h);hc(c[28228]|0)}if((c[28234]|0)>0){if((c[28232]|0)==0){a[114336]=(c[60028+((c[16612]|0)*524|0)>>2]|0)>>>16&255;a[114337]=(c[60028+((c[16612]|0)*524|0)>>2]|0)>>>8&255;a[114338]=c[60028+((c[16612]|0)*524|0)>>2]&255}else{a[114336]=(c[60024+((c[16612]|0)*524|0)>>2]|0)>>>16&255;a[114337]=(c[60024+((c[16612]|0)*524|0)>>2]|0)>>>8&255;a[114338]=c[60024+((c[16612]|0)*524|0)>>2]&255}Ya(k|0,13120,(la=i,i=i+8|0,c[la>>2]=57144,la)|0)|0;i=la;c[28228]=rd(c[28582]|0,k|0,114336,282152)|0;Ze(F,ia+((c[7768]<<1|0)/16|0)|0,ja+(((c[7768]|0)*220|0|0)/16|0)|0,c[(c[28228]|0)+8>>2]|0,c[(c[28228]|0)+12>>2]|0);k=h;la=F;c[k>>2]=c[la>>2];c[k+4>>2]=c[la+4>>2];c[k+8>>2]=c[la+8>>2];c[k+12>>2]=c[la+12>>2];Ub(c[28228]|0,0,c[16874]|0,h|0)|0;ef(100,101,h);hc(c[28228]|0)}}if((c[28236]|0)<1){c[28236]=0;i=b;return}if((c[28234]|0)==2){la=(aa(c[5592+(c[29810]<<1<<2)>>2]|0,c[7768]|0)|0)/16|0;k=(aa(c[5592+((c[29810]<<1)+1<<2)>>2]|0,c[7768]|0)|0)/16|0;Ze(G,la,k,c[7768]|0,c[7768]|0);k=g;la=G;c[k>>2]=c[la>>2];c[k+4>>2]=c[la+4>>2];c[k+8>>2]=c[la+8>>2];c[k+12>>2]=c[la+12>>2];Ze(H,ia+((c[7768]<<1|0)/16|0)|0,ja+(((c[7768]|0)*57|0|0)/16|0)+(ga*3|0)|0,c[7768]|0,c[7768]|0);la=h;k=H;c[la>>2]=c[k>>2];c[la+4>>2]=c[k+4>>2];c[la+8>>2]=c[k+8>>2];c[la+12>>2]=c[k+12>>2];k=c[16874]|0;Ta(k|0,h|0,Jb(c[(c[16874]|0)+4>>2]|0,ha>>>16&255|0,ha>>>8&255|0,ha&255|0)|0)|0;Ub(c[28230]|0,g|0,c[16874]|0,h|0)|0;k=(c[29808]|0)-1|0;c[29808]=k;if((k|0)<=0){c[29808]=10;k=(c[29810]|0)+1|0;c[29810]=k;if((k|0)>1){c[29810]=0}}k=(aa(c[8+(c[14628]<<1<<2)>>2]|0,c[7768]|0)|0)/16|0;la=(aa(c[8+((c[14628]<<1)+1<<2)>>2]|0,c[7768]|0)|0)/16|0;Ze(I,k,la,c[7768]|0,c[7768]|0);la=g;k=I;c[la>>2]=c[k>>2];c[la+4>>2]=c[k+4>>2];c[la+8>>2]=c[k+8>>2];c[la+12>>2]=c[k+12>>2];Ze(J,ia+((c[7768]<<1|0)/16|0)|0,ja+(((c[7768]|0)*57|0|0)/16|0)+(ga<<2)|0,c[7768]|0,c[7768]|0);k=h;la=J;c[k>>2]=c[la>>2];c[k+4>>2]=c[la+4>>2];c[k+8>>2]=c[la+8>>2];c[k+12>>2]=c[la+12>>2];la=c[16874]|0;Ta(la|0,h|0,Jb(c[(c[16874]|0)+4>>2]|0,ha>>>16&255|0,ha>>>8&255|0,ha&255|0)|0)|0;Ub(c[28230]|0,g|0,c[16874]|0,h|0)|0;la=(c[14626]|0)-1|0;c[14626]=la;if((la|0)<=0){c[14626]=8;la=(c[14628]|0)+1|0;c[14628]=la;if((la|0)>1){c[14628]=0}}la=(aa(c[6032+(c[70546]<<1<<2)>>2]|0,c[7768]|0)|0)/16|0;k=(aa(c[6032+((c[70546]<<1)+1<<2)>>2]|0,c[7768]|0)|0)/16|0;Ze(K,la,k,c[7768]|0,c[7768]|0);k=g;la=K;c[k>>2]=c[la>>2];c[k+4>>2]=c[la+4>>2];c[k+8>>2]=c[la+8>>2];c[k+12>>2]=c[la+12>>2];Ze(L,ia+((c[7768]<<1|0)/16|0)|0,ja+(((c[7768]|0)*57|0|0)/16|0)+(ga*5|0)|0,c[7768]|0,c[7768]|0);la=h;k=L;c[la>>2]=c[k>>2];c[la+4>>2]=c[k+4>>2];c[la+8>>2]=c[k+8>>2];c[la+12>>2]=c[k+12>>2];k=c[16874]|0;Ta(k|0,h|0,Jb(c[(c[16874]|0)+4>>2]|0,ha>>>16&255|0,ha>>>8&255|0,ha&255|0)|0)|0;Ub(c[28230]|0,g|0,c[16874]|0,h|0)|0;k=(c[70544]|0)-1|0;c[70544]=k;if((k|0)<=0){c[70544]=4;k=(c[70546]|0)+1|0;c[70546]=k;if((k|0)>1){c[70546]=0}}k=(aa(c[5608+(c[30072]<<1<<2)>>2]|0,c[7768]|0)|0)/16|0;la=(aa(c[5608+((c[30072]<<1)+1<<2)>>2]|0,c[7768]|0)|0)/16|0;Ze(M,k,la,c[7768]|0,c[7768]|0);la=g;k=M;c[la>>2]=c[k>>2];c[la+4>>2]=c[k+4>>2];c[la+8>>2]=c[k+8>>2];c[la+12>>2]=c[k+12>>2];Ze(N,ia+((c[7768]<<1|0)/16|0)|0,ja+(((c[7768]|0)*57|0|0)/16|0)+(ga*6|0)|0,c[7768]|0,c[7768]|0);k=h;la=N;c[k>>2]=c[la>>2];c[k+4>>2]=c[la+4>>2];c[k+8>>2]=c[la+8>>2];c[k+12>>2]=c[la+12>>2];la=c[16874]|0;Ta(la|0,h|0,Jb(c[(c[16874]|0)+4>>2]|0,ha>>>16&255|0,ha>>>8&255|0,ha&255|0)|0)|0;Ub(c[28230]|0,g|0,c[16874]|0,h|0)|0;la=(c[30070]|0)-1|0;c[30070]=la;if((la|0)<=0){c[30070]=4;la=(c[30072]|0)+1|0;c[30072]=la;if((la|0)>1){c[30072]=0}}}else{if((c[28234]|0)==3){la=(aa(c[6016+(c[70542]<<1<<2)>>2]|0,c[7768]|0)|0)/16|0;k=(aa(c[6016+((c[70542]<<1)+1<<2)>>2]|0,c[7768]|0)|0)/16|0;Ze(O,la,k,c[7768]|0,c[7768]|0);k=g;la=O;c[k>>2]=c[la>>2];c[k+4>>2]=c[la+4>>2];c[k+8>>2]=c[la+8>>2];c[k+12>>2]=c[la+12>>2];Ze(P,ia+((c[7768]<<1|0)/16|0)|0,ja+(((c[7768]|0)*57|0|0)/16|0)|0,c[7768]|0,c[7768]|0);la=h;k=P;c[la>>2]=c[k>>2];c[la+4>>2]=c[k+4>>2];c[la+8>>2]=c[k+8>>2];c[la+12>>2]=c[k+12>>2];k=c[16874]|0;Ta(k|0,h|0,Jb(c[(c[16874]|0)+4>>2]|0,ha>>>16&255|0,ha>>>8&255|0,ha&255|0)|0)|0;Ub(c[28230]|0,g|0,c[16874]|0,h|0)|0;k=(c[70540]|0)-1|0;c[70540]=k;if((k|0)<=0){c[70540]=4;k=(c[70542]|0)+1|0;c[70542]=k;if((k|0)>1){c[70542]=0}}k=(aa(c[5984+(c[70274]<<1<<2)>>2]|0,c[7768]|0)|0)/16|0;la=(aa(c[5984+((c[70274]<<1)+1<<2)>>2]|0,c[7768]|0)|0)/16|0;Ze(Q,k,la,c[7768]|0,c[7768]|0);la=g;k=Q;c[la>>2]=c[k>>2];c[la+4>>2]=c[k+4>>2];c[la+8>>2]=c[k+8>>2];c[la+12>>2]=c[k+12>>2];Ze(R,ia+((c[7768]<<1|0)/16|0)|0,ja+(((c[7768]|0)*57|0|0)/16|0)+ga|0,c[7768]|0,c[7768]|0);k=h;la=R;c[k>>2]=c[la>>2];c[k+4>>2]=c[la+4>>2];c[k+8>>2]=c[la+8>>2];c[k+12>>2]=c[la+12>>2];la=c[16874]|0;Ta(la|0,h|0,Jb(c[(c[16874]|0)+4>>2]|0,ha>>>16&255|0,ha>>>8&255|0,ha&255|0)|0)|0;Ub(c[28230]|0,g|0,c[16874]|0,h|0)|0;la=(c[70272]|0)-1|0;c[70272]=la;if((la|0)<=0){c[70272]=4;la=(c[70274]|0)+1|0;c[70274]=la;if((la|0)>1){c[70274]=0}}la=(aa(c[6e3+(c[70278]<<1<<2)>>2]|0,c[7768]|0)|0)/16|0;k=(aa(c[6e3+((c[70278]<<1)+1<<2)>>2]|0,c[7768]|0)|0)/16|0;Ze(S,la,k,c[7768]|0,c[7768]|0);k=g;la=S;c[k>>2]=c[la>>2];c[k+4>>2]=c[la+4>>2];c[k+8>>2]=c[la+8>>2];c[k+12>>2]=c[la+12>>2];Ze(T,ia+((c[7768]<<1|0)/16|0)|0,ja+(((c[7768]|0)*57|0|0)/16|0)+(ga<<1)|0,c[7768]|0,c[7768]|0);la=h;k=T;c[la>>2]=c[k>>2];c[la+4>>2]=c[k+4>>2];c[la+8>>2]=c[k+8>>2];c[la+12>>2]=c[k+12>>2];k=c[16874]|0;Ta(k|0,h|0,Jb(c[(c[16874]|0)+4>>2]|0,ha>>>16&255|0,ha>>>8&255|0,ha&255|0)|0)|0;Ub(c[28230]|0,g|0,c[16874]|0,h|0)|0;k=(c[70276]|0)-1|0;c[70276]=k;if((k|0)<=0){c[70276]=4;k=(c[70278]|0)+1|0;c[70278]=k;if((k|0)>1){c[70278]=0}}k=c[28240]|0;Ze(U,ia+((c[7768]<<1|0)/16|0)+(c[7768]|0)|0,ja+(((c[7768]|0)*57|0|0)/16|0)+(ga*3|0)|0,(c[7768]|0)*5|0,c[7768]|0);la=h;T=U;c[la>>2]=c[T>>2];c[la+4>>2]=c[T+4>>2];c[la+8>>2]=c[T+8>>2];c[la+12>>2]=c[T+12>>2];T=c[16874]|0;Ta(T|0,h|0,Jb(c[(c[16874]|0)+4>>2]|0,ha>>>16&255|0,ha>>>8&255|0,ha&255|0)|0)|0;ma=0;while(1){if((ma|0)>=5){break}do{if((c[1136+(k<<1<<2)>>2]|0)!=0){if((c[1136+((k<<1)+1<<2)>>2]|0)==0){break}T=(aa(c[1136+(k<<1<<2)>>2]|0,c[7768]|0)|0)/16|0;la=(aa(c[1136+((k<<1)+1<<2)>>2]|0,c[7768]|0)|0)/16|0;Ze(V,T,la,c[7768]|0,c[7768]|0);la=g;T=V;c[la>>2]=c[T>>2];c[la+4>>2]=c[T+4>>2];c[la+8>>2]=c[T+8>>2];c[la+12>>2]=c[T+12>>2];T=ia+((c[7768]<<1|0)/16|0)+(aa(ma+1|0,c[7768]|0)|0)|0;Ze(W,T,ja+(((c[7768]|0)*57|0|0)/16|0)+(ga*3|0)|0,c[7768]|0,c[7768]|0);T=h;la=W;c[T>>2]=c[la>>2];c[T+4>>2]=c[la+4>>2];c[T+8>>2]=c[la+8>>2];c[T+12>>2]=c[la+12>>2];Ub(c[28230]|0,g|0,c[16874]|0,h|0)|0}}while(0);k=k+1|0;if((k|0)>=25){k=0}ma=ma+1|0}W=(c[28238]|0)-1|0;c[28238]=W;if((W|0)<=0){c[28238]=4;c[28240]=(c[28240]|0)+5;if((c[28240]|0)>=25){c[28240]=0}}k=c[26980]|0;Ze(X,ia+((c[7768]<<1|0)/16|0)+(c[7768]|0)|0,ja+(((c[7768]|0)*57|0|0)/16|0)+(ga<<2)|0,(c[7768]|0)*5|0,c[7768]|0);W=h;V=X;c[W>>2]=c[V>>2];c[W+4>>2]=c[V+4>>2];c[W+8>>2]=c[V+8>>2];c[W+12>>2]=c[V+12>>2];V=c[16874]|0;Ta(V|0,h|0,Jb(c[(c[16874]|0)+4>>2]|0,ha>>>16&255|0,ha>>>8&255|0,ha&255|0)|0)|0;ma=0;while(1){if((ma|0)>=5){break}do{if((c[520+(k<<1<<2)>>2]|0)!=0){if((c[520+((k<<1)+1<<2)>>2]|0)==0){break}V=(aa(c[520+(k<<1<<2)>>2]|0,c[7768]|0)|0)/16|0;W=(aa(c[520+((k<<1)+1<<2)>>2]|0,c[7768]|0)|0)/16|0;Ze(Y,V,W,c[7768]|0,c[7768]|0);W=g;V=Y;c[W>>2]=c[V>>2];c[W+4>>2]=c[V+4>>2];c[W+8>>2]=c[V+8>>2];c[W+12>>2]=c[V+12>>2];V=ia+((c[7768]<<1|0)/16|0)+(aa(ma+1|0,c[7768]|0)|0)|0;Ze(Z,V,ja+(((c[7768]|0)*57|0|0)/16|0)+(ga<<2)|0,c[7768]|0,c[7768]|0);V=h;W=Z;c[V>>2]=c[W>>2];c[V+4>>2]=c[W+4>>2];c[V+8>>2]=c[W+8>>2];c[V+12>>2]=c[W+12>>2];Ub(c[28230]|0,g|0,c[16874]|0,h|0)|0}}while(0);k=k+1|0;if((k|0)>=70){k=0}ma=ma+1|0}Z=(c[26978]|0)-1|0;c[26978]=Z;if((Z|0)<=0){c[26980]=(c[26980]|0)+5;if((c[26980]|0)>=70){c[26980]=0}if((c[26980]|0)>=45){c[26978]=2}if((c[26980]|0)<45){c[26978]=4}}k=c[70270]|0;Ze(_,ia+((c[7768]<<1|0)/16|0)+(c[7768]|0)|0,ja+(((c[7768]|0)*57|0|0)/16|0)+(ga*5|0)|0,(c[7768]|0)*5|0,c[7768]|0);Z=h;Y=_;c[Z>>2]=c[Y>>2];c[Z+4>>2]=c[Y+4>>2];c[Z+8>>2]=c[Y+8>>2];c[Z+12>>2]=c[Y+12>>2];Y=c[16874]|0;Ta(Y|0,h|0,Jb(c[(c[16874]|0)+4>>2]|0,ha>>>16&255|0,ha>>>8&255|0,ha&255|0)|0)|0;ma=0;while(1){if((ma|0)>=5){break}do{if((c[5624+(k<<1<<2)>>2]|0)!=0){if((c[5624+((k<<1)+1<<2)>>2]|0)==0){break}Y=(aa(c[5624+(k<<1<<2)>>2]|0,c[7768]|0)|0)/16|0;Z=(aa(c[5624+((k<<1)+1<<2)>>2]|0,c[7768]|0)|0)/16|0;Ze(ba,Y,Z,c[7768]|0,c[7768]|0);Z=g;Y=ba;c[Z>>2]=c[Y>>2];c[Z+4>>2]=c[Y+4>>2];c[Z+8>>2]=c[Y+8>>2];c[Z+12>>2]=c[Y+12>>2];Y=ia+((c[7768]<<1|0)/16|0)+(aa(ma+1|0,c[7768]|0)|0)|0;Ze(ca,Y,ja+(((c[7768]|0)*57|0|0)/16|0)+(ga*5|0)|0,c[7768]|0,c[7768]|0);Y=h;Z=ca;c[Y>>2]=c[Z>>2];c[Y+4>>2]=c[Z+4>>2];c[Y+8>>2]=c[Z+8>>2];c[Y+12>>2]=c[Z+12>>2];Ub(c[28230]|0,g|0,c[16874]|0,h|0)|0}}while(0);k=k+1|0;if((k|0)>=45){k=0}ma=ma+1|0}ma=(c[70268]|0)-1|0;c[70268]=ma;if((ma|0)<=0){c[70268]=4;c[70270]=(c[70270]|0)+5;if((c[70270]|0)>=45){c[70270]=0}}ma=(aa(c[416+(c[16940]<<1<<2)>>2]|0,c[7768]|0)|0)/16|0;k=(aa(c[416+((c[16940]<<1)+1<<2)>>2]|0,c[7768]|0)|0)/16|0;Ze(da,ma,k,c[7768]|0,c[7768]|0);k=g;ma=da;c[k>>2]=c[ma>>2];c[k+4>>2]=c[ma+4>>2];c[k+8>>2]=c[ma+8>>2];c[k+12>>2]=c[ma+12>>2];Ze(ea,ia+((c[7768]<<1|0)/16|0)|0,ja+(((c[7768]|0)*57|0|0)/16|0)+(ga*6|0)|0,c[7768]|0,c[7768]|0);ga=h;ma=ea;c[ga>>2]=c[ma>>2];c[ga+4>>2]=c[ma+4>>2];c[ga+8>>2]=c[ma+8>>2];c[ga+12>>2]=c[ma+12>>2];ma=c[16874]|0;Ta(ma|0,h|0,Jb(c[(c[16874]|0)+4>>2]|0,ha>>>16&255|0,ha>>>8&255|0,ha&255|0)|0)|0;Ub(c[28230]|0,g|0,c[16874]|0,h|0)|0;g=(c[16938]|0)-1|0;c[16938]=g;if((g|0)<=0){c[16938]=4;g=(c[16940]|0)+1|0;c[16940]=g;if((g|0)>1){c[16940]=0}}}}Ze(fa,ia|0,ja+(((c[7768]|0)*43|0|0)/16|0)|0,((c[7768]|0)*240|0|0)/16|0,(c[7768]|0)/8|0);g=h;ha=fa;c[g>>2]=c[ha>>2];c[g+4>>2]=c[ha+4>>2];c[g+8>>2]=c[ha+8>>2];c[g+12>>2]=c[ha+12>>2];ha=c[16874]|0;Ta(ha|0,h|0,Jb(c[(c[16874]|0)+4>>2]|0,c[6048+(c[70550]<<2)>>2]>>16&255|0,c[6048+(c[70550]<<2)>>2]>>8&255|0,c[6048+(c[70550]<<2)>>2]&255|0)|0)|0;if((c[7768]|0)==16){ff(1096,ia+(((c[7768]|0)*15|0|0)/2|0)-49|0,ja+6|0,33,10)}else{if((c[7768]|0)==32){ff(1096,ia+(((c[7768]|0)*15|0|0)/2|0)-82|0,ja+19|0,33,10)}}ja=(c[70548]|0)-1|0;c[70548]=ja;if((ja|0)<=0){c[70548]=2;ja=(c[70550]|0)+1|0;c[70550]=ja;if((ja|0)>=66){c[70550]=0}}c[28236]=0;i=b;return}function hf(){var b=0,d=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=0,O=0,P=0,Q=0,R=0,S=0,T=0,U=0;b=i;i=i+848|0;d=b|0;e=b+8|0;f=b+16|0;g=b+24|0;h=b+32|0;j=b+40|0;k=b+48|0;l=b+56|0;m=b+192|0;n=b+448|0;o=b+464|0;p=b+480|0;q=b+496|0;r=b+512|0;s=b+528|0;t=b+544|0;u=b+560|0;v=b+576|0;w=b+592|0;x=b+608|0;y=b+624|0;z=b+640|0;A=b+656|0;B=b+672|0;C=b+688|0;D=b+704|0;E=b+720|0;F=b+736|0;G=b+752|0;H=b+768|0;I=b+784|0;J=b+800|0;K=b+816|0;L=b+832|0;M=(((c[(c[16874]|0)+8>>2]|0)-((c[7768]|0)*15|0)|0)/2|0)+(c[7770]|0)|0;N=(((c[(c[16874]|0)+12>>2]|0)-((c[7768]|0)*15|0)|0)/2|0)+(c[7771]|0)|0;a[j|0]=(c[60012+((c[16612]|0)*524|0)>>2]|0)>>>16&255;a[j+1|0]=(c[60012+((c[16612]|0)*524|0)>>2]|0)>>>8&255;a[j+2|0]=c[60012+((c[16612]|0)*524|0)>>2]&255;a[k|0]=(c[60020+((c[16612]|0)*524|0)>>2]|0)>>>16&255;a[k+1|0]=(c[60020+((c[16612]|0)*524|0)>>2]|0)>>>8&255;a[k+2|0]=c[60020+((c[16612]|0)*524|0)>>2]&255;a[d|0]=(c[60024+((c[16612]|0)*524|0)>>2]|0)>>>16&255;a[d+1|0]=(c[60024+((c[16612]|0)*524|0)>>2]|0)>>>8&255;a[d+2|0]=c[60024+((c[16612]|0)*524|0)>>2]&255;a[e|0]=(c[60036+((c[16612]|0)*524|0)>>2]|0)>>>16&255;a[e+1|0]=(c[60036+((c[16612]|0)*524|0)>>2]|0)>>>8&255;a[e+2|0]=c[60036+((c[16612]|0)*524|0)>>2]&255;a[f|0]=(c[60028+((c[16612]|0)*524|0)>>2]|0)>>>16&255;a[f+1|0]=(c[60028+((c[16612]|0)*524|0)>>2]|0)>>>8&255;a[f+2|0]=c[60028+((c[16612]|0)*524|0)>>2]&255;a[g|0]=(c[60032+((c[16612]|0)*524|0)>>2]|0)>>>16&255;a[g+1|0]=(c[60032+((c[16612]|0)*524|0)>>2]|0)>>>8&255;a[g+2|0]=c[60032+((c[16612]|0)*524|0)>>2]&255;if((c[19526]|0)>=15){c[14622]=c[28574];c[14608]=c[27244];c[14606]=c[27242];c[14624]=c[29356];c[14610]=c[28150];c[14598]=c[16616];c[14600]=c[18082];c[14612]=c[28506];c[14613]=c[28507];c[14614]=c[28508];c[14615]=c[28509];c[14616]=c[28510];c[14617]=c[28511];c[14618]=c[28512];c[14602]=c[18086];c[14603]=c[18087];c[14604]=c[18088];c[14620]=c[14886];c[14594]=c[16610];c[14596]=c[16612];O=0;while(1){if((O|0)>=37){break}c[57336+(O*28|0)>>2]=c[31088+(O*28|0)>>2];c[57340+(O*28|0)>>2]=c[31092+(O*28|0)>>2];c[57344+(O*28|0)>>2]=c[31096+(O*28|0)>>2];O=O+1|0}c[7777]=~~+$(+(c[27244]|0)/+(1e3/(c[28574]|0)|0|0));c[7778]=~~+$(+(c[27242]|0)/+(1e3/(c[28574]|0)|0|0));c[7784]=~~+$(+(c[27244]|0)/+(1e3/(c[28574]|0)|0|0));c[7785]=~~+$(+(c[27242]|0)/+(1e3/(c[28574]|0)|0|0));c[7791]=~~+$(+(c[27244]|0)/+(1e3/(c[28574]|0)|0|0));c[7792]=~~+$(+(c[27242]|0)/+(1e3/(c[28574]|0)|0|0));c[7798]=~~+$(+(c[27244]|0)/+(1e3/(c[28574]|0)|0|0));c[7799]=~~+$(+(c[27242]|0)/+(1e3/(c[28574]|0)|0|0));c[7805]=~~+$(+(c[27244]|0)/+(1e3/(c[28574]|0)|0|0));c[7806]=~~+$(+(c[27242]|0)/+(1e3/(c[28574]|0)|0|0));c[7812]=~~+$(+(c[27244]|0)/+(1e3/(c[28574]|0)|0|0));c[7813]=~~+$(+(c[27242]|0)/+(1e3/(c[28574]|0)|0|0));c[7819]=~~+$(+(c[27244]|0)/+(1e3/(c[28574]|0)|0|0));c[7820]=~~+$(+(c[27242]|0)/+(1e3/(c[28574]|0)|0|0));c[7826]=~~+$(+(c[27244]|0)/+(1e3/(c[28574]|0)|0|0));c[7827]=~~+$(+(c[27242]|0)/+(1e3/(c[28574]|0)|0|0));c[7840]=~~+$(+(c[27244]|0)/+(1e3/(c[28574]|0)|0|0));c[7841]=~~+$(+(c[27242]|0)/+(1e3/(c[28574]|0)|0|0));c[7847]=~~+$(+(c[27244]|0)/+(1e3/(c[28574]|0)|0|0));c[7848]=~~+$(+(c[27242]|0)/+(1e3/(c[28574]|0)|0|0));c[7854]=~~+$(+(c[27244]|0)/+(1e3/(c[28574]|0)|0|0));c[7855]=~~+$(+(c[27242]|0)/+(1e3/(c[28574]|0)|0|0));c[7861]=~~+$(+(c[27244]|0)/+(1e3/(c[28574]|0)|0|0));c[7862]=~~+$(+(c[27242]|0)/+(1e3/(c[28574]|0)|0|0));c[8022]=~~+$(+(c[27244]|0)/+(1e3/(c[28574]|0)|0|0));c[8023]=~~+$(+(c[27242]|0)/+(1e3/(c[28574]|0)|0|0));O=0;while(1){if((O|0)>=104){break}c[78112+(O<<2)>>2]=1;O=O+1|0}c[19537]=0;c[19529]=0;c[19530]=0;c[19533]=0;c[19536]=0;O=1;while(1){if((O|0)>=9){break}c[78112+(O+13<<2)>>2]=0;O=O+1|0}if((c[28152]|0)==0){c[19554]=0;c[19555]=0}c[19558]=0;c[19561]=0;O=0;while(1){if((O|0)>=9){break}c[78112+(O+39<<2)>>2]=0;O=O+1|0}c[19631]=0;c[19581]=0;c[19583]=0;c[19585]=0;c[19587]=0;O=0;while(1){if((O|0)>=8){break}while(1){if(!((c[78112+((O*13|0)+(c[78064+(O<<2)>>2]|0)<<2)>>2]|0)!=0^1)){break}P=78064+(O<<2)|0;c[P>>2]=(c[P>>2]|0)+1;if((c[78064+(O<<2)>>2]|0)>=9){c[78064+(O<<2)>>2]=11}}O=O+1|0}Le(He(100)|0,1)|0;se();c[28512]=2;if((De(c[28512]|0)|0)!=0){P=Be()|0;jb(16368,(Q=i,i=i+16|0,c[Q>>2]=28504,c[Q+8>>2]=P,Q)|0)|0;i=Q}if((Ae(l)|0)!=0){P=Be()|0;jb(16368,(Q=i,i=i+16|0,c[Q>>2]=28504,c[Q+8>>2]=P,Q)|0)|0;i=Q}c[l>>2]=100;if((Ce(l)|0)!=0){l=Be()|0;jb(16368,(Q=i,i=i+16|0,c[Q>>2]=28504,c[Q+8>>2]=l,Q)|0)|0;i=Q}}if((c[19526]|0)>=7){if((c[16200]|0)!=(c[19524]|0)){Le(He(100)|0,0)|0}c[16200]=c[19524];Ye()}if((c[19526]|0)>=3){l=(c[19524]|0)*13|0;while(1){if((l|0)>=(((c[19524]|0)+1|0)*13|0|0)){break}if(((l|0)%13|0|0)==9){if((c[78112+(l<<2)>>2]|0)!=0){P=h;R=d;a[P]=a[R]|0;a[P+1|0]=a[R+1|0]|0;a[P+2|0]=a[R+2|0]|0;a[P+3|0]=a[R+3|0]|0;if(((l|0)%13|0|0)==(c[78064+(c[19524]<<2)>>2]|0)){R=h;P=f;a[R]=a[P]|0;a[R+1|0]=a[P+1|0]|0;a[R+2|0]=a[P+2|0]|0;a[R+3|0]=a[P+3|0]|0}Ya(m|0,13120,(Q=i,i=i+8|0,c[Q>>2]=57144,Q)|0)|0;i=Q;c[28228]=rd(c[28582]|0,m|0,h,j)|0;Ze(o,M+((c[7768]<<1|0)/16|0)|0,N+(((c[7768]|0)*220|0|0)/16|0)|0,c[(c[28228]|0)+8>>2]|0,c[(c[28228]|0)+12>>2]|0);P=n;R=o;c[P>>2]=c[R>>2];c[P+4>>2]=c[R+4>>2];c[P+8>>2]=c[R+8>>2];c[P+12>>2]=c[R+12>>2];Ub(c[28228]|0,0,c[16874]|0,n|0)|0;if((c[78112+(l<<2)>>2]|0)!=0){ef(100,l+101|0,n)}R=n|0;c[R>>2]=(c[R>>2]|0)+(c[(c[28228]|0)+8>>2]|0);hc(c[28228]|0)}}else{if(((l|0)%13|0|0)==10){R=h;P=d;a[R]=a[P]|0;a[R+1|0]=a[P+1|0]|0;a[R+2|0]=a[P+2|0]|0;a[R+3|0]=a[P+3|0]|0;if(((l|0)%13|0|0)==(c[78064+(c[19524]<<2)>>2]|0)){P=h;R=f;a[P]=a[R]|0;a[P+1|0]=a[R+1|0]|0;a[P+2|0]=a[R+2|0]|0;a[P+3|0]=a[R+3|0]|0}c[28228]=rd(c[28582]|0,51840,h,j)|0;Ze(p,M+(((c[7768]|0)*90|0|0)/16|0)-((c[(c[28228]|0)+8>>2]|0)/2|0)|0,N+(((c[7768]|0)*220|0|0)/16|0)|0,c[(c[28228]|0)+8>>2]|0,c[(c[28228]|0)+12>>2]|0);R=n;P=p;c[R>>2]=c[P>>2];c[R+4>>2]=c[P+4>>2];c[R+8>>2]=c[P+8>>2];c[R+12>>2]=c[P+12>>2];Ub(c[28228]|0,0,c[16874]|0,n|0)|0;if((c[78112+(l<<2)>>2]|0)!=0){ef(100,l+101|0,n)}P=n|0;c[P>>2]=(c[P>>2]|0)+(c[(c[28228]|0)+8>>2]|0);hc(c[28228]|0)}else{if(((l|0)%13|0|0)==11){P=h;R=d;a[P]=a[R]|0;a[P+1|0]=a[R+1|0]|0;a[P+2|0]=a[R+2|0]|0;a[P+3|0]=a[R+3|0]|0;if(((l|0)%13|0|0)==(c[78064+(c[19524]<<2)>>2]|0)){R=h;P=f;a[R]=a[P]|0;a[R+1|0]=a[P+1|0]|0;a[R+2|0]=a[P+2|0]|0;a[R+3|0]=a[P+3|0]|0}c[28228]=rd(c[28582]|0,56104,h,j)|0;Ze(q,M+(((c[7768]|0)*150|0|0)/16|0)-((c[(c[28228]|0)+8>>2]|0)/2|0)|0,N+(((c[7768]|0)*220|0|0)/16|0)|0,c[(c[28228]|0)+8>>2]|0,c[(c[28228]|0)+12>>2]|0);P=n;R=q;c[P>>2]=c[R>>2];c[P+4>>2]=c[R+4>>2];c[P+8>>2]=c[R+8>>2];c[P+12>>2]=c[R+12>>2];Ub(c[28228]|0,0,c[16874]|0,n|0)|0;if((c[78112+(l<<2)>>2]|0)!=0){ef(100,l+101|0,n)}R=n|0;c[R>>2]=(c[R>>2]|0)+(c[(c[28228]|0)+8>>2]|0);hc(c[28228]|0)}else{if(((l|0)%13|0|0)==12){if((c[78112+(l<<2)>>2]|0)!=0){R=h;P=d;a[R]=a[P]|0;a[R+1|0]=a[P+1|0]|0;a[R+2|0]=a[P+2|0]|0;a[R+3|0]=a[P+3|0]|0;if(((l|0)%13|0|0)==(c[78064+(c[19524]<<2)>>2]|0)){P=h;R=f;a[P]=a[R]|0;a[P+1|0]=a[R+1|0]|0;a[P+2|0]=a[R+2|0]|0;a[P+3|0]=a[R+3|0]|0}Ya(m|0,13352,(Q=i,i=i+8|0,c[Q>>2]=53816,Q)|0)|0;i=Q;c[28228]=rd(c[28582]|0,m|0,h,j)|0;Ze(r,M+(((c[7768]|0)*238|0|0)/16|0)-(c[(c[28228]|0)+8>>2]|0)|0,N+(((c[7768]|0)*220|0|0)/16|0)|0,c[(c[28228]|0)+8>>2]|0,c[(c[28228]|0)+12>>2]|0);R=n;P=r;c[R>>2]=c[P>>2];c[R+4>>2]=c[P+4>>2];c[R+8>>2]=c[P+8>>2];c[R+12>>2]=c[P+12>>2];Ub(c[28228]|0,0,c[16874]|0,n|0)|0;if((c[78112+(l<<2)>>2]|0)!=0){ef(100,l+101|0,n)}P=n|0;c[P>>2]=(c[P>>2]|0)+(c[(c[28228]|0)+8>>2]|0);hc(c[28228]|0)}}else{if((l|0)==7){P=h;R=d;a[P]=a[R]|0;a[P+1|0]=a[R+1|0]|0;a[P+2|0]=a[R+2|0]|0;a[P+3|0]=a[R+3|0]|0;if(((l|0)%13|0|0)==(c[78064+(c[19524]<<2)>>2]|0)){R=h;P=f;a[R]=a[P]|0;a[R+1|0]=a[P+1|0]|0;a[R+2|0]=a[P+2|0]|0;a[R+3|0]=a[P+3|0]|0}c[28228]=rd(c[28582]|0,55896,h,j)|0;P=N+(((c[7768]|0)*57|0|0)/16|0)+(aa((l|0)%13|0,c[7768]|0)|0)|0;Ze(s,M+((c[7768]<<1|0)/16|0)|0,P,c[(c[28228]|0)+8>>2]|0,c[(c[28228]|0)+12>>2]|0);P=n;R=s;c[P>>2]=c[R>>2];c[P+4>>2]=c[R+4>>2];c[P+8>>2]=c[R+8>>2];c[P+12>>2]=c[R+12>>2];Ub(c[28228]|0,0,c[16874]|0,n|0)|0;if((c[78112+(l<<2)>>2]|0)!=0){ef(100,l+101|0,n)}R=n|0;c[R>>2]=(c[R>>2]|0)+(c[(c[28228]|0)+8>>2]|0);hc(c[28228]|0);R=h;P=g;a[R]=a[P]|0;a[R+1|0]=a[P+1|0]|0;a[R+2|0]=a[P+2|0]|0;a[R+3|0]=a[P+3|0]|0;if((c[14622]|0)<33){P=h;R=f;a[P]=a[R]|0;a[P+1|0]=a[R+1|0]|0;a[P+2|0]=a[R+2|0]|0;a[P+3|0]=a[R+3|0]|0}c[28228]=rd(c[28582]|0,12984,h,j)|0;c[n+8>>2]=c[(c[28228]|0)+8>>2];c[n+12>>2]=c[(c[28228]|0)+12>>2];Ub(c[28228]|0,0,c[16874]|0,n|0)|0;if((c[78112+(l<<2)>>2]|0)!=0){ef(100,l+205|0,n)}R=n|0;c[R>>2]=(c[R>>2]|0)+(c[(c[28228]|0)+8>>2]|0);hc(c[28228]|0);R=h;P=k;a[R]=a[P]|0;a[R+1|0]=a[P+1|0]|0;a[R+2|0]=a[P+2|0]|0;a[R+3|0]=a[P+3|0]|0;Ya(m|0,12808,(Q=i,i=i+8|0,c[Q>>2]=c[14622],Q)|0)|0;i=Q;if((c[14622]|0)==33){Ya(m|0,15776,(Q=i,i=i+8|0,c[Q>>2]=56e3,Q)|0)|0;i=Q}if((c[14622]|0)==25){Ya(m|0,15776,(Q=i,i=i+8|0,c[Q>>2]=53296,Q)|0)|0;i=Q}if((c[14622]|0)==20){Ya(m|0,15776,(Q=i,i=i+8|0,c[Q>>2]=50592,Q)|0)|0;i=Q}c[28228]=rd(c[28582]|0,m|0,h,j)|0;c[n+8>>2]=c[(c[28228]|0)+8>>2];c[n+12>>2]=c[(c[28228]|0)+12>>2];Ub(c[28228]|0,0,c[16874]|0,n|0)|0;P=n|0;c[P>>2]=(c[P>>2]|0)+(c[(c[28228]|0)+8>>2]|0);hc(c[28228]|0);P=h;R=g;a[P]=a[R]|0;a[P+1|0]=a[R+1|0]|0;a[P+2|0]=a[R+2|0]|0;a[P+3|0]=a[R+3|0]|0;if((c[14622]|0)>20){R=h;P=f;a[R]=a[P]|0;a[R+1|0]=a[P+1|0]|0;a[R+2|0]=a[P+2|0]|0;a[R+3|0]=a[P+3|0]|0}c[28228]=rd(c[28582]|0,12608,h,j)|0;c[n+8>>2]=c[(c[28228]|0)+8>>2];c[n+12>>2]=c[(c[28228]|0)+12>>2];Ub(c[28228]|0,0,c[16874]|0,n|0)|0;if((c[78112+(l<<2)>>2]|0)!=0){ef(100,l+309|0,n)}P=n|0;c[P>>2]=(c[P>>2]|0)+(c[(c[28228]|0)+8>>2]|0);hc(c[28228]|0)}else{if((l|0)==26){P=h;R=d;a[P]=a[R]|0;a[P+1|0]=a[R+1|0]|0;a[P+2|0]=a[R+2|0]|0;a[P+3|0]=a[R+3|0]|0;if(((l|0)%13|0|0)==(c[78064+(c[19524]<<2)>>2]|0)){R=h;P=f;a[R]=a[P]|0;a[R+1|0]=a[P+1|0]|0;a[R+2|0]=a[P+2|0]|0;a[R+3|0]=a[P+3|0]|0}if((c[78112+(l<<2)>>2]|0)==0){P=h;R=e;a[P]=a[R]|0;a[P+1|0]=a[R+1|0]|0;a[P+2|0]=a[R+2|0]|0;a[P+3|0]=a[R+3|0]|0}c[28228]=rd(c[28582]|0,56728,h,j)|0;R=N+(((c[7768]|0)*57|0|0)/16|0)+(aa((l|0)%13|0,c[7768]|0)|0)|0;Ze(t,M+((c[7768]<<1|0)/16|0)|0,R,c[(c[28228]|0)+8>>2]|0,c[(c[28228]|0)+12>>2]|0);R=n;P=t;c[R>>2]=c[P>>2];c[R+4>>2]=c[P+4>>2];c[R+8>>2]=c[P+8>>2];c[R+12>>2]=c[P+12>>2];Ub(c[28228]|0,0,c[16874]|0,n|0)|0;if((c[78112+(l<<2)>>2]|0)!=0){ef(100,l+101|0,n)}P=n|0;c[P>>2]=(c[P>>2]|0)+(c[(c[28228]|0)+8>>2]|0);hc(c[28228]|0);P=h;R=g;a[P]=a[R]|0;a[P+1|0]=a[R+1|0]|0;a[P+2|0]=a[R+2|0]|0;a[P+3|0]=a[R+3|0]|0;if((c[14624]|0)>0){R=h;P=f;a[R]=a[P]|0;a[R+1|0]=a[P+1|0]|0;a[R+2|0]=a[P+2|0]|0;a[R+3|0]=a[P+3|0]|0}if((c[78112+(l<<2)>>2]|0)==0){P=h;R=e;a[P]=a[R]|0;a[P+1|0]=a[R+1|0]|0;a[P+2|0]=a[R+2|0]|0;a[P+3|0]=a[R+3|0]|0}c[28228]=rd(c[28582]|0,12320,h,j)|0;c[n+8>>2]=c[(c[28228]|0)+8>>2];c[n+12>>2]=c[(c[28228]|0)+12>>2];Ub(c[28228]|0,0,c[16874]|0,n|0)|0;if((c[78112+(l<<2)>>2]|0)!=0){ef(100,l+205|0,n)}R=n|0;c[R>>2]=(c[R>>2]|0)+(c[(c[28228]|0)+8>>2]|0);hc(c[28228]|0);R=h;P=k;a[R]=a[P]|0;a[R+1|0]=a[P+1|0]|0;a[R+2|0]=a[P+2|0]|0;a[R+3|0]=a[P+3|0]|0;if((c[28152]|0)==0){Qf(m|0,53400)|0}else{if((Of(110040+(c[14624]<<8)|0)|0)>>>0<=28>>>0){Ya(m|0,12160,(Q=i,i=i+8|0,c[Q>>2]=c[14624],Q)|0)|0;i=Q;Rf(m|0,110040+(c[14624]<<8)|0)|0}else{Ya(m|0,12160,(Q=i,i=i+8|0,c[Q>>2]=c[14624],Q)|0)|0;i=Q;Qb(m|0,110040+(c[14624]<<8)|0,25)|0;a[m+26|0]=0;Rf(m|0,12008)|0}}if((c[78112+(l<<2)>>2]|0)==0){P=h;R=e;a[P]=a[R]|0;a[P+1|0]=a[R+1|0]|0;a[P+2|0]=a[R+2|0]|0;a[P+3|0]=a[R+3|0]|0}c[28228]=rd(c[28582]|0,m|0,h,j)|0;if((c[19526]|0)<=3){c[n+8>>2]=(c[7768]|0)*10|0;c[n+12>>2]=c[7768];R=c[16874]|0;Ta(R|0,n|0,Jb(c[(c[16874]|0)+4>>2]|0,a[j|0]|0,a[j+1|0]|0,a[j+2|0]|0)|0)|0}c[n+8>>2]=c[(c[28228]|0)+8>>2];c[n+12>>2]=c[(c[28228]|0)+12>>2];Ub(c[28228]|0,0,c[16874]|0,n|0)|0;R=n|0;c[R>>2]=(c[R>>2]|0)+(c[(c[28228]|0)+8>>2]|0);hc(c[28228]|0);R=h;P=g;a[R]=a[P]|0;a[R+1|0]=a[P+1|0]|0;a[R+2|0]=a[P+2|0]|0;a[R+3|0]=a[P+3|0]|0;if((c[14624]|0)<((c[28152]|0)-1|0)){P=h;R=f;a[P]=a[R]|0;a[P+1|0]=a[R+1|0]|0;a[P+2|0]=a[R+2|0]|0;a[P+3|0]=a[R+3|0]|0}if((c[78112+(l<<2)>>2]|0)==0){R=h;P=e;a[R]=a[P]|0;a[R+1|0]=a[P+1|0]|0;a[R+2|0]=a[P+2|0]|0;a[R+3|0]=a[P+3|0]|0}c[28228]=rd(c[28582]|0,11808,h,j)|0;c[n+8>>2]=c[(c[28228]|0)+8>>2];c[n+12>>2]=c[(c[28228]|0)+12>>2];Ub(c[28228]|0,0,c[16874]|0,n|0)|0;if((c[78112+(l<<2)>>2]|0)!=0){ef(100,l+309|0,n)}P=n|0;c[P>>2]=(c[P>>2]|0)+(c[(c[28228]|0)+8>>2]|0);hc(c[28228]|0)}else{if((l|0)==27){P=h;R=d;a[P]=a[R]|0;a[P+1|0]=a[R+1|0]|0;a[P+2|0]=a[R+2|0]|0;a[P+3|0]=a[R+3|0]|0;if(((l|0)%13|0|0)==(c[78064+(c[19524]<<2)>>2]|0)){R=h;P=f;a[R]=a[P]|0;a[R+1|0]=a[P+1|0]|0;a[R+2|0]=a[P+2|0]|0;a[R+3|0]=a[P+3|0]|0}if((c[78112+(l<<2)>>2]|0)==0){P=h;R=e;a[P]=a[R]|0;a[P+1|0]=a[R+1|0]|0;a[P+2|0]=a[R+2|0]|0;a[P+3|0]=a[R+3|0]|0}c[28228]=rd(c[28582]|0,55376,h,j)|0;R=N+(((c[7768]|0)*57|0|0)/16|0)+(aa((l|0)%13|0,c[7768]|0)|0)|0;Ze(u,M+((c[7768]<<1|0)/16|0)|0,R,c[(c[28228]|0)+8>>2]|0,c[(c[28228]|0)+12>>2]|0);R=n;P=u;c[R>>2]=c[P>>2];c[R+4>>2]=c[P+4>>2];c[R+8>>2]=c[P+8>>2];c[R+12>>2]=c[P+12>>2];Ub(c[28228]|0,0,c[16874]|0,n|0)|0;if((c[78112+(l<<2)>>2]|0)!=0){ef(100,l+101|0,n)}P=n|0;c[P>>2]=(c[P>>2]|0)+(c[(c[28228]|0)+8>>2]|0);hc(c[28228]|0);P=h;R=g;a[P]=a[R]|0;a[P+1|0]=a[R+1|0]|0;a[P+2|0]=a[R+2|0]|0;a[P+3|0]=a[R+3|0]|0;if((c[14610]|0)>1){R=h;P=f;a[R]=a[P]|0;a[R+1|0]=a[P+1|0]|0;a[R+2|0]=a[P+2|0]|0;a[R+3|0]=a[P+3|0]|0}if((c[78112+(l<<2)>>2]|0)==0){P=h;R=e;a[P]=a[R]|0;a[P+1|0]=a[R+1|0]|0;a[P+2|0]=a[R+2|0]|0;a[P+3|0]=a[R+3|0]|0}c[28228]=rd(c[28582]|0,12320,h,j)|0;c[n+8>>2]=c[(c[28228]|0)+8>>2];c[n+12>>2]=c[(c[28228]|0)+12>>2];Ub(c[28228]|0,0,c[16874]|0,n|0)|0;if((c[78112+(l<<2)>>2]|0)!=0){ef(100,l+205|0,n)}R=n|0;c[R>>2]=(c[R>>2]|0)+(c[(c[28228]|0)+8>>2]|0);hc(c[28228]|0);R=h;P=k;a[R]=a[P]|0;a[R+1|0]=a[P+1|0]|0;a[R+2|0]=a[P+2|0]|0;a[R+3|0]=a[P+3|0]|0;if((c[78112+(l<<2)>>2]|0)==0){P=h;R=e;a[P]=a[R]|0;a[P+1|0]=a[R+1|0]|0;a[P+2|0]=a[R+2|0]|0;a[P+3|0]=a[R+3|0]|0}Ya(m|0,11624,(Q=i,i=i+8|0,c[Q>>2]=c[14610],Q)|0)|0;i=Q;c[28228]=rd(c[28582]|0,m|0,h,j)|0;c[n+8>>2]=c[(c[28228]|0)+8>>2];c[n+12>>2]=c[(c[28228]|0)+12>>2];Ub(c[28228]|0,0,c[16874]|0,n|0)|0;R=n|0;c[R>>2]=(c[R>>2]|0)+(c[(c[28228]|0)+8>>2]|0);hc(c[28228]|0);R=h;P=g;a[R]=a[P]|0;a[R+1|0]=a[P+1|0]|0;a[R+2|0]=a[P+2|0]|0;a[R+3|0]=a[P+3|0]|0;if((c[14610]|0)<99){P=h;R=f;a[P]=a[R]|0;a[P+1|0]=a[R+1|0]|0;a[P+2|0]=a[R+2|0]|0;a[P+3|0]=a[R+3|0]|0}if((c[78112+(l<<2)>>2]|0)==0){R=h;P=e;a[R]=a[P]|0;a[R+1|0]=a[P+1|0]|0;a[R+2|0]=a[P+2|0]|0;a[R+3|0]=a[P+3|0]|0}c[28228]=rd(c[28582]|0,11464,h,j)|0;c[n+8>>2]=c[(c[28228]|0)+8>>2];c[n+12>>2]=c[(c[28228]|0)+12>>2];Ub(c[28228]|0,0,c[16874]|0,n|0)|0;if((c[78112+(l<<2)>>2]|0)!=0){ef(100,l+309|0,n)}P=n|0;c[P>>2]=(c[P>>2]|0)+(c[(c[28228]|0)+8>>2]|0);hc(c[28228]|0)}else{if((l|0)==31){P=h;R=d;a[P]=a[R]|0;a[P+1|0]=a[R+1|0]|0;a[P+2|0]=a[R+2|0]|0;a[P+3|0]=a[R+3|0]|0;c[28228]=rd(c[28582]|0,55168,h,j)|0;R=N+(((c[7768]|0)*57|0|0)/16|0)+(aa(((l|0)%13|0)-1|0,c[7768]|0)|0)|0;Ze(v,M+((c[7768]<<1|0)/16|0)|0,R,c[(c[28228]|0)+8>>2]|0,c[(c[28228]|0)+12>>2]|0);R=n;P=v;c[R>>2]=c[P>>2];c[R+4>>2]=c[P+4>>2];c[R+8>>2]=c[P+8>>2];c[R+12>>2]=c[P+12>>2];Ub(c[28228]|0,0,c[16874]|0,n|0)|0;P=n|0;c[P>>2]=(c[P>>2]|0)+(c[(c[28228]|0)+8>>2]|0);hc(c[28228]|0);P=h;R=d;a[P]=a[R]|0;a[P+1|0]=a[R+1|0]|0;a[P+2|0]=a[R+2|0]|0;a[P+3|0]=a[R+3|0]|0;if(((l|0)%13|0|0)==(c[78064+(c[19524]<<2)>>2]|0)){R=h;P=f;a[R]=a[P]|0;a[R+1|0]=a[P+1|0]|0;a[R+2|0]=a[P+2|0]|0;a[R+3|0]=a[P+3|0]|0}c[28228]=rd(c[28582]|0,56520,h,j)|0;P=N+(((c[7768]|0)*57|0|0)/16|0)+(aa((l|0)%13|0,c[7768]|0)|0)|0;Ze(w,M+(((c[7768]|0)*12|0|0)/16|0)|0,P,c[(c[28228]|0)+8>>2]|0,c[(c[28228]|0)+12>>2]|0);P=n;R=w;c[P>>2]=c[R>>2];c[P+4>>2]=c[R+4>>2];c[P+8>>2]=c[R+8>>2];c[P+12>>2]=c[R+12>>2];Ub(c[28228]|0,0,c[16874]|0,n|0)|0;if((c[78112+(l<<2)>>2]|0)!=0){ef(100,l+101|0,n)}R=n|0;c[R>>2]=(c[R>>2]|0)+(c[(c[28228]|0)+8>>2]|0);hc(c[28228]|0);R=h;P=g;a[R]=a[P]|0;a[R+1|0]=a[P+1|0]|0;a[R+2|0]=a[P+2|0]|0;a[R+3|0]=a[P+3|0]|0;if((c[14608]|0)>20){P=h;R=f;a[P]=a[R]|0;a[P+1|0]=a[R+1|0]|0;a[P+2|0]=a[R+2|0]|0;a[P+3|0]=a[R+3|0]|0}c[28228]=rd(c[28582]|0,12984,h,j)|0;c[n+8>>2]=c[(c[28228]|0)+8>>2];c[n+12>>2]=c[(c[28228]|0)+12>>2];Ub(c[28228]|0,0,c[16874]|0,n|0)|0;if((c[78112+(l<<2)>>2]|0)!=0){ef(100,l+205|0,n)}R=n|0;c[R>>2]=(c[R>>2]|0)+(c[(c[28228]|0)+8>>2]|0);hc(c[28228]|0);R=h;P=k;a[R]=a[P]|0;a[R+1|0]=a[P+1|0]|0;a[R+2|0]=a[P+2|0]|0;a[R+3|0]=a[P+3|0]|0;Ya(m|0,11320,(Q=i,i=i+8|0,c[Q>>2]=c[14608],Q)|0)|0;i=Q;c[28228]=rd(c[28582]|0,m|0,h,j)|0;c[n+8>>2]=c[(c[28228]|0)+8>>2];c[n+12>>2]=c[(c[28228]|0)+12>>2];Ub(c[28228]|0,0,c[16874]|0,n|0)|0;P=n|0;c[P>>2]=(c[P>>2]|0)+(c[(c[28228]|0)+8>>2]|0);hc(c[28228]|0);P=h;R=g;a[P]=a[R]|0;a[P+1|0]=a[R+1|0]|0;a[P+2|0]=a[R+2|0]|0;a[P+3|0]=a[R+3|0]|0;if((c[14608]|0)<1e3){R=h;P=f;a[R]=a[P]|0;a[R+1|0]=a[P+1|0]|0;a[R+2|0]=a[P+2|0]|0;a[R+3|0]=a[P+3|0]|0}c[28228]=rd(c[28582]|0,11168,h,j)|0;c[n+8>>2]=c[(c[28228]|0)+8>>2];c[n+12>>2]=c[(c[28228]|0)+12>>2];Ub(c[28228]|0,0,c[16874]|0,n|0)|0;if((c[78112+(l<<2)>>2]|0)!=0){ef(100,l+309|0,n)}P=n|0;c[P>>2]=(c[P>>2]|0)+(c[(c[28228]|0)+8>>2]|0);hc(c[28228]|0)}else{if((l|0)==32){P=h;R=d;a[P]=a[R]|0;a[P+1|0]=a[R+1|0]|0;a[P+2|0]=a[R+2|0]|0;a[P+3|0]=a[R+3|0]|0;if(((l|0)%13|0|0)==(c[78064+(c[19524]<<2)>>2]|0)){R=h;P=f;a[R]=a[P]|0;a[R+1|0]=a[P+1|0]|0;a[R+2|0]=a[P+2|0]|0;a[R+3|0]=a[P+3|0]|0}c[28228]=rd(c[28582]|0,55584,h,j)|0;P=N+(((c[7768]|0)*57|0|0)/16|0)+(aa((l|0)%13|0,c[7768]|0)|0)|0;Ze(x,M+(((c[7768]|0)*12|0|0)/16|0)|0,P,c[(c[28228]|0)+8>>2]|0,c[(c[28228]|0)+12>>2]|0);P=n;R=x;c[P>>2]=c[R>>2];c[P+4>>2]=c[R+4>>2];c[P+8>>2]=c[R+8>>2];c[P+12>>2]=c[R+12>>2];Ub(c[28228]|0,0,c[16874]|0,n|0)|0;if((c[78112+(l<<2)>>2]|0)!=0){ef(100,l+101|0,n)}R=n|0;c[R>>2]=(c[R>>2]|0)+(c[(c[28228]|0)+8>>2]|0);hc(c[28228]|0);R=h;P=g;a[R]=a[P]|0;a[R+1|0]=a[P+1|0]|0;a[R+2|0]=a[P+2|0]|0;a[R+3|0]=a[P+3|0]|0;if((c[14606]|0)>20){P=h;R=f;a[P]=a[R]|0;a[P+1|0]=a[R+1|0]|0;a[P+2|0]=a[R+2|0]|0;a[P+3|0]=a[R+3|0]|0}c[28228]=rd(c[28582]|0,12984,h,j)|0;c[n+8>>2]=c[(c[28228]|0)+8>>2];c[n+12>>2]=c[(c[28228]|0)+12>>2];Ub(c[28228]|0,0,c[16874]|0,n|0)|0;if((c[78112+(l<<2)>>2]|0)!=0){ef(100,l+205|0,n)}R=n|0;c[R>>2]=(c[R>>2]|0)+(c[(c[28228]|0)+8>>2]|0);hc(c[28228]|0);R=h;P=k;a[R]=a[P]|0;a[R+1|0]=a[P+1|0]|0;a[R+2|0]=a[P+2|0]|0;a[R+3|0]=a[P+3|0]|0;Ya(m|0,11320,(Q=i,i=i+8|0,c[Q>>2]=c[14606],Q)|0)|0;i=Q;c[28228]=rd(c[28582]|0,m|0,h,j)|0;c[n+8>>2]=c[(c[28228]|0)+8>>2];c[n+12>>2]=c[(c[28228]|0)+12>>2];Ub(c[28228]|0,0,c[16874]|0,n|0)|0;P=n|0;c[P>>2]=(c[P>>2]|0)+(c[(c[28228]|0)+8>>2]|0);hc(c[28228]|0);P=h;R=g;a[P]=a[R]|0;a[P+1|0]=a[R+1|0]|0;a[P+2|0]=a[R+2|0]|0;a[P+3|0]=a[R+3|0]|0;if((c[14606]|0)<1e3){R=h;P=f;a[R]=a[P]|0;a[R+1|0]=a[P+1|0]|0;a[R+2|0]=a[P+2|0]|0;a[R+3|0]=a[P+3|0]|0}c[28228]=rd(c[28582]|0,11168,h,j)|0;c[n+8>>2]=c[(c[28228]|0)+8>>2];c[n+12>>2]=c[(c[28228]|0)+12>>2];Ub(c[28228]|0,0,c[16874]|0,n|0)|0;if((c[78112+(l<<2)>>2]|0)!=0){ef(100,l+309|0,n)}P=n|0;c[P>>2]=(c[P>>2]|0)+(c[(c[28228]|0)+8>>2]|0);hc(c[28228]|0)}else{if((l|0)==0){P=h;R=d;a[P]=a[R]|0;a[P+1|0]=a[R+1|0]|0;a[P+2|0]=a[R+2|0]|0;a[P+3|0]=a[R+3|0]|0;if(((l|0)%13|0|0)==(c[78064+(c[19524]<<2)>>2]|0)){R=h;P=f;a[R]=a[P]|0;a[R+1|0]=a[P+1|0]|0;a[R+2|0]=a[P+2|0]|0;a[R+3|0]=a[P+3|0]|0}c[28228]=rd(c[28582]|0,55064,h,j)|0;P=N+(((c[7768]|0)*57|0|0)/16|0)+(aa((l|0)%13|0,c[7768]|0)|0)|0;Ze(y,M+((c[7768]<<1|0)/16|0)|0,P,c[(c[28228]|0)+8>>2]|0,c[(c[28228]|0)+12>>2]|0);P=n;R=y;c[P>>2]=c[R>>2];c[P+4>>2]=c[R+4>>2];c[P+8>>2]=c[R+8>>2];c[P+12>>2]=c[R+12>>2];Ub(c[28228]|0,0,c[16874]|0,n|0)|0;if((c[78112+(l<<2)>>2]|0)!=0){ef(100,l+101|0,n)}R=n|0;c[R>>2]=(c[R>>2]|0)+(c[(c[28228]|0)+8>>2]|0);hc(c[28228]|0);R=h;P=g;a[R]=a[P]|0;a[R+1|0]=a[P+1|0]|0;a[R+2|0]=a[P+2|0]|0;a[R+3|0]=a[P+3|0]|0;if((c[14598]|0)>0){P=h;R=f;a[P]=a[R]|0;a[P+1|0]=a[R+1|0]|0;a[P+2|0]=a[R+2|0]|0;a[P+3|0]=a[R+3|0]|0}c[28228]=rd(c[28582]|0,12320,h,j)|0;c[n+8>>2]=c[(c[28228]|0)+8>>2];c[n+12>>2]=c[(c[28228]|0)+12>>2];Ub(c[28228]|0,0,c[16874]|0,n|0)|0;if((c[78112+(l<<2)>>2]|0)!=0){ef(100,l+205|0,n)}R=n|0;c[R>>2]=(c[R>>2]|0)+(c[(c[28228]|0)+8>>2]|0);hc(c[28228]|0);R=h;P=k;a[R]=a[P]|0;a[R+1|0]=a[P+1|0]|0;a[R+2|0]=a[P+2|0]|0;a[R+3|0]=a[P+3|0]|0;c[28228]=rd(c[28582]|0,79708+((c[14598]|0)*220|0)|0,h,j)|0;c[n+8>>2]=c[(c[28228]|0)+8>>2];c[n+12>>2]=c[(c[28228]|0)+12>>2];Ub(c[28228]|0,0,c[16874]|0,n|0)|0;P=n|0;c[P>>2]=(c[P>>2]|0)+(c[(c[28228]|0)+8>>2]|0);hc(c[28228]|0);P=h;R=g;a[P]=a[R]|0;a[P+1|0]=a[R+1|0]|0;a[P+2|0]=a[R+2|0]|0;a[P+3|0]=a[R+3|0]|0;if((c[14598]|0)<((c[20562]|0)-1|0)){R=h;P=f;a[R]=a[P]|0;a[R+1|0]=a[P+1|0]|0;a[R+2|0]=a[P+2|0]|0;a[R+3|0]=a[P+3|0]|0}c[28228]=rd(c[28582]|0,10992,h,j)|0;c[n+8>>2]=c[(c[28228]|0)+8>>2];c[n+12>>2]=c[(c[28228]|0)+12>>2];Ub(c[28228]|0,0,c[16874]|0,n|0)|0;if((c[78112+(l<<2)>>2]|0)!=0){ef(100,l+309|0,n)}P=n|0;c[P>>2]=(c[P>>2]|0)+(c[(c[28228]|0)+8>>2]|0);hc(c[28228]|0);P=h;R=d;a[P]=a[R]|0;a[P+1|0]=a[R+1|0]|0;a[P+2|0]=a[R+2|0]|0;a[P+3|0]=a[R+3|0]|0;Ya(m|0,10856,(Q=i,i=i+8|0,c[Q>>2]=50072,Q)|0)|0;i=Q;c[28228]=rd(c[28582]|0,m|0,h,j)|0;R=N+(((c[7768]|0)*57|0|0)/16|0)+(aa(((l|0)%13|0)+1|0,c[7768]|0)|0)|0;Ze(z,M+((c[7768]<<1|0)/16|0)|0,R,c[(c[28228]|0)+8>>2]|0,c[(c[28228]|0)+12>>2]|0);R=n;P=z;c[R>>2]=c[P>>2];c[R+4>>2]=c[P+4>>2];c[R+8>>2]=c[P+8>>2];c[R+12>>2]=c[P+12>>2];Ub(c[28228]|0,0,c[16874]|0,n|0)|0;P=n|0;c[P>>2]=(c[P>>2]|0)+(c[(c[28228]|0)+8>>2]|0);hc(c[28228]|0);P=h;R=k;a[P]=a[R]|0;a[P+1|0]=a[R+1|0]|0;a[P+2|0]=a[R+2|0]|0;a[P+3|0]=a[R+3|0]|0;c[28228]=rd(c[28582]|0,79768+((c[14598]|0)*220|0)|0,h,j)|0;if((c[19526]|0)<=3){c[n+8>>2]=(c[7768]|0)*12|0;c[n+12>>2]=c[7768];R=c[16874]|0;Ta(R|0,n|0,Jb(c[(c[16874]|0)+4>>2]|0,a[j|0]|0,a[j+1|0]|0,a[j+2|0]|0)|0)|0}c[n+8>>2]=c[(c[28228]|0)+8>>2];c[n+12>>2]=c[(c[28228]|0)+12>>2];Ub(c[28228]|0,0,c[16874]|0,n|0)|0;R=n|0;c[R>>2]=(c[R>>2]|0)+(c[(c[28228]|0)+8>>2]|0);hc(c[28228]|0)}else{if((l|0)==6){R=h;P=d;a[R]=a[P]|0;a[R+1|0]=a[P+1|0]|0;a[R+2|0]=a[P+2|0]|0;a[R+3|0]=a[P+3|0]|0;if(((l|0)%13|0|0)==(c[78064+(c[19524]<<2)>>2]|0)){P=h;R=f;a[P]=a[R]|0;a[P+1|0]=a[R+1|0]|0;a[P+2|0]=a[R+2|0]|0;a[P+3|0]=a[R+3|0]|0}c[28228]=rd(c[28582]|0,51736,h,j)|0;R=N+(((c[7768]|0)*57|0|0)/16|0)+(aa((l|0)%13|0,c[7768]|0)|0)|0;Ze(A,M+((c[7768]<<1|0)/16|0)|0,R,c[(c[28228]|0)+8>>2]|0,c[(c[28228]|0)+12>>2]|0);R=n;P=A;c[R>>2]=c[P>>2];c[R+4>>2]=c[P+4>>2];c[R+8>>2]=c[P+8>>2];c[R+12>>2]=c[P+12>>2];Ub(c[28228]|0,0,c[16874]|0,n|0)|0;if((c[78112+(l<<2)>>2]|0)!=0){ef(100,l+101|0,n)}P=n|0;c[P>>2]=(c[P>>2]|0)+(c[(c[28228]|0)+8>>2]|0);hc(c[28228]|0);P=h;R=g;a[P]=a[R]|0;a[P+1|0]=a[R+1|0]|0;a[P+2|0]=a[R+2|0]|0;a[P+3|0]=a[R+3|0]|0;if((c[14600]|0)>0){R=h;P=f;a[R]=a[P]|0;a[R+1|0]=a[P+1|0]|0;a[R+2|0]=a[P+2|0]|0;a[R+3|0]=a[P+3|0]|0}c[28228]=rd(c[28582]|0,12320,h,j)|0;c[n+8>>2]=c[(c[28228]|0)+8>>2];c[n+12>>2]=c[(c[28228]|0)+12>>2];Ub(c[28228]|0,0,c[16874]|0,n|0)|0;if((c[78112+(l<<2)>>2]|0)!=0){ef(100,l+205|0,n)}P=n|0;c[P>>2]=(c[P>>2]|0)+(c[(c[28228]|0)+8>>2]|0);hc(c[28228]|0);P=h;R=k;a[P]=a[R]|0;a[P+1|0]=a[R+1|0]|0;a[P+2|0]=a[R+2|0]|0;a[P+3|0]=a[R+3|0]|0;if((c[14600]|0)==0){Ya(m|0,15776,(Q=i,i=i+8|0,c[Q>>2]=53088,Q)|0)|0;i=Q}if((c[14600]|0)==1){Ya(m|0,15776,(Q=i,i=i+8|0,c[Q>>2]=53192,Q)|0)|0;i=Q}c[28228]=rd(c[28582]|0,m|0,h,j)|0;c[n+8>>2]=c[(c[28228]|0)+8>>2];c[n+12>>2]=c[(c[28228]|0)+12>>2];Ub(c[28228]|0,0,c[16874]|0,n|0)|0;R=n|0;c[R>>2]=(c[R>>2]|0)+(c[(c[28228]|0)+8>>2]|0);hc(c[28228]|0);R=h;P=g;a[R]=a[P]|0;a[R+1|0]=a[P+1|0]|0;a[R+2|0]=a[P+2|0]|0;a[R+3|0]=a[P+3|0]|0;if((c[14600]|0)<1){P=h;R=f;a[P]=a[R]|0;a[P+1|0]=a[R+1|0]|0;a[P+2|0]=a[R+2|0]|0;a[P+3|0]=a[R+3|0]|0}c[28228]=rd(c[28582]|0,10992,h,j)|0;c[n+8>>2]=c[(c[28228]|0)+8>>2];c[n+12>>2]=c[(c[28228]|0)+12>>2];Ub(c[28228]|0,0,c[16874]|0,n|0)|0;if((c[78112+(l<<2)>>2]|0)!=0){ef(100,l+309|0,n)}R=n|0;c[R>>2]=(c[R>>2]|0)+(c[(c[28228]|0)+8>>2]|0);hc(c[28228]|0)}else{if((l|0)==39){R=h;P=k;a[R]=a[P]|0;a[R+1|0]=a[P+1|0]|0;a[R+2|0]=a[P+2|0]|0;a[R+3|0]=a[P+3|0]|0;O=0;while(1){if((O|0)>=12){break}c[28228]=rd(c[28582]|0,32664+(O*100|0)|0,h,j)|0;P=c[28228]|0;Ja(P|0,131072,Jb(c[(c[28228]|0)+4>>2]|0,a[j|0]|0,a[j+1|0]|0,a[j+2|0]|0)|0)|0;c[n>>2]=M+((c[7768]<<1|0)/16|0);c[n+4>>2]=N+(((c[7768]|0)*57|0|0)/16|0)+(aa((l|0)%13|0,c[7768]|0)|0);if((c[7768]|0)==16){P=aa(O,((c[7768]|0)/8|0)+10|0)|0;R=n+4|0;c[R>>2]=(c[R>>2]|0)+P}if((c[7768]|0)==32){P=aa(O,((c[7768]|0)/8|0)+20|0)|0;R=n+4|0;c[R>>2]=(c[R>>2]|0)+P}c[n+8>>2]=c[(c[28228]|0)+8>>2];c[n+12>>2]=c[(c[28228]|0)+12>>2];Ub(c[28228]|0,0,c[16874]|0,n|0)|0;P=n|0;c[P>>2]=(c[P>>2]|0)+(c[(c[28228]|0)+8>>2]|0);hc(c[28228]|0);O=O+1|0}}else{if((l|0)==34){P=h;R=d;a[P]=a[R]|0;a[P+1|0]=a[R+1|0]|0;a[P+2|0]=a[R+2|0]|0;a[P+3|0]=a[R+3|0]|0;if(((l|0)%13|0|0)==(c[78064+(c[19524]<<2)>>2]|0)){R=h;P=f;a[R]=a[P]|0;a[R+1|0]=a[P+1|0]|0;a[R+2|0]=a[P+2|0]|0;a[R+3|0]=a[P+3|0]|0}c[28228]=rd(c[28582]|0,51944,h,j)|0;P=N+(((c[7768]|0)*57|0|0)/16|0)+(aa((l|0)%13|0,c[7768]|0)|0)|0;Ze(B,M+((c[7768]<<1|0)/16|0)|0,P,c[(c[28228]|0)+8>>2]|0,c[(c[28228]|0)+12>>2]|0);P=n;R=B;c[P>>2]=c[R>>2];c[P+4>>2]=c[R+4>>2];c[P+8>>2]=c[R+8>>2];c[P+12>>2]=c[R+12>>2];Ub(c[28228]|0,0,c[16874]|0,n|0)|0;if((c[78112+(l<<2)>>2]|0)!=0){ef(100,l+101|0,n)}R=n|0;c[R>>2]=(c[R>>2]|0)+(c[(c[28228]|0)+8>>2]|0);hc(c[28228]|0)}else{if((l|0)==28){R=h;P=d;a[R]=a[P]|0;a[R+1|0]=a[P+1|0]|0;a[R+2|0]=a[P+2|0]|0;a[R+3|0]=a[P+3|0]|0;if(((l|0)%13|0|0)==(c[78064+(c[19524]<<2)>>2]|0)){P=h;R=f;a[P]=a[R]|0;a[P+1|0]=a[R+1|0]|0;a[P+2|0]=a[R+2|0]|0;a[P+3|0]=a[R+3|0]|0}if((c[78112+(l<<2)>>2]|0)==0){R=h;P=e;a[R]=a[P]|0;a[R+1|0]=a[P+1|0]|0;a[R+2|0]=a[P+2|0]|0;a[R+3|0]=a[P+3|0]|0}c[28228]=rd(c[28582]|0,50384,h,j)|0;P=N+(((c[7768]|0)*57|0|0)/16|0)+(aa((l|0)%13|0,c[7768]|0)|0)|0;Ze(C,M+((c[7768]<<1|0)/16|0)|0,P,c[(c[28228]|0)+8>>2]|0,c[(c[28228]|0)+12>>2]|0);P=n;R=C;c[P>>2]=c[R>>2];c[P+4>>2]=c[R+4>>2];c[P+8>>2]=c[R+8>>2];c[P+12>>2]=c[R+12>>2];Ub(c[28228]|0,0,c[16874]|0,n|0)|0;if((c[78112+(l<<2)>>2]|0)!=0){ef(100,l+101|0,n)}R=n|0;c[R>>2]=(c[R>>2]|0)+(c[(c[28228]|0)+8>>2]|0);hc(c[28228]|0);R=h;P=g;a[R]=a[P]|0;a[R+1|0]=a[P+1|0]|0;a[R+2|0]=a[P+2|0]|0;a[R+3|0]=a[P+3|0]|0;if((c[78112+(l<<2)>>2]|0)==0){P=h;R=e;a[P]=a[R]|0;a[P+1|0]=a[R+1|0]|0;a[P+2|0]=a[R+2|0]|0;a[P+3|0]=a[R+3|0]|0}if((c[14612]|0)>0){R=h;P=f;a[R]=a[P]|0;a[R+1|0]=a[P+1|0]|0;a[R+2|0]=a[P+2|0]|0;a[R+3|0]=a[P+3|0]|0}c[28228]=rd(c[28582]|0,12320,h,j)|0;c[n+8>>2]=c[(c[28228]|0)+8>>2];c[n+12>>2]=c[(c[28228]|0)+12>>2];Ub(c[28228]|0,0,c[16874]|0,n|0)|0;if((c[78112+(l<<2)>>2]|0)!=0){ef(100,l+205|0,n)}P=n|0;c[P>>2]=(c[P>>2]|0)+(c[(c[28228]|0)+8>>2]|0);hc(c[28228]|0);P=h;R=k;a[P]=a[R]|0;a[P+1|0]=a[R+1|0]|0;a[P+2|0]=a[R+2|0]|0;a[P+3|0]=a[R+3|0]|0;if((c[78112+(l<<2)>>2]|0)==0){R=h;P=e;a[R]=a[P]|0;a[R+1|0]=a[P+1|0]|0;a[R+2|0]=a[P+2|0]|0;a[R+3|0]=a[P+3|0]|0}if((c[14612]|0)==0){Ya(m|0,15776,(Q=i,i=i+8|0,c[Q>>2]=56416,Q)|0)|0;i=Q}if((c[14612]|0)==1){Ya(m|0,15776,(Q=i,i=i+8|0,c[Q>>2]=56312,Q)|0)|0;i=Q}c[28228]=rd(c[28582]|0,m|0,h,j)|0;c[n+8>>2]=c[(c[28228]|0)+8>>2];c[n+12>>2]=c[(c[28228]|0)+12>>2];Ub(c[28228]|0,0,c[16874]|0,n|0)|0;P=n|0;c[P>>2]=(c[P>>2]|0)+(c[(c[28228]|0)+8>>2]|0);hc(c[28228]|0);P=h;R=g;a[P]=a[R]|0;a[P+1|0]=a[R+1|0]|0;a[P+2|0]=a[R+2|0]|0;a[P+3|0]=a[R+3|0]|0;if((c[14612]|0)<1){R=h;P=f;a[R]=a[P]|0;a[R+1|0]=a[P+1|0]|0;a[R+2|0]=a[P+2|0]|0;a[R+3|0]=a[P+3|0]|0}if((c[78112+(l<<2)>>2]|0)==0){P=h;R=e;a[P]=a[R]|0;a[P+1|0]=a[R+1|0]|0;a[P+2|0]=a[R+2|0]|0;a[P+3|0]=a[R+3|0]|0}c[28228]=rd(c[28582]|0,10696,h,j)|0;c[n+8>>2]=c[(c[28228]|0)+8>>2];c[n+12>>2]=c[(c[28228]|0)+12>>2];Ub(c[28228]|0,0,c[16874]|0,n|0)|0;if((c[78112+(l<<2)>>2]|0)!=0){ef(100,l+309|0,n)}R=n|0;c[R>>2]=(c[R>>2]|0)+(c[(c[28228]|0)+8>>2]|0);hc(c[28228]|0)}else{if((l|0)==29){R=h;P=d;a[R]=a[P]|0;a[R+1|0]=a[P+1|0]|0;a[R+2|0]=a[P+2|0]|0;a[R+3|0]=a[P+3|0]|0;if(((l|0)%13|0|0)==(c[78064+(c[19524]<<2)>>2]|0)){P=h;R=f;a[P]=a[R]|0;a[P+1|0]=a[R+1|0]|0;a[P+2|0]=a[R+2|0]|0;a[P+3|0]=a[R+3|0]|0}if((c[78112+(l<<2)>>2]|0)==0){R=h;P=e;a[R]=a[P]|0;a[R+1|0]=a[P+1|0]|0;a[R+2|0]=a[P+2|0]|0;a[R+3|0]=a[P+3|0]|0}c[28228]=rd(c[28582]|0,52672,h,j)|0;P=N+(((c[7768]|0)*57|0|0)/16|0)+(aa((l|0)%13|0,c[7768]|0)|0)|0;Ze(D,M+((c[7768]<<1|0)/16|0)|0,P,c[(c[28228]|0)+8>>2]|0,c[(c[28228]|0)+12>>2]|0);P=n;R=D;c[P>>2]=c[R>>2];c[P+4>>2]=c[R+4>>2];c[P+8>>2]=c[R+8>>2];c[P+12>>2]=c[R+12>>2];Ub(c[28228]|0,0,c[16874]|0,n|0)|0;if((c[78112+(l<<2)>>2]|0)!=0){ef(100,l+101|0,n)}R=n|0;c[R>>2]=(c[R>>2]|0)+(c[(c[28228]|0)+8>>2]|0);hc(c[28228]|0);R=h;P=g;a[R]=a[P]|0;a[R+1|0]=a[P+1|0]|0;a[R+2|0]=a[P+2|0]|0;a[R+3|0]=a[P+3|0]|0;if((c[78112+(l<<2)>>2]|0)==0){P=h;R=e;a[P]=a[R]|0;a[P+1|0]=a[R+1|0]|0;a[P+2|0]=a[R+2|0]|0;a[P+3|0]=a[R+3|0]|0}if((c[14604]|0)>0){R=h;P=f;a[R]=a[P]|0;a[R+1|0]=a[P+1|0]|0;a[R+2|0]=a[P+2|0]|0;a[R+3|0]=a[P+3|0]|0}c[28228]=rd(c[28582]|0,12320,h,j)|0;c[n+8>>2]=c[(c[28228]|0)+8>>2];c[n+12>>2]=c[(c[28228]|0)+12>>2];Ub(c[28228]|0,0,c[16874]|0,n|0)|0;if((c[78112+(l<<2)>>2]|0)!=0){ef(100,l+205|0,n)}P=n|0;c[P>>2]=(c[P>>2]|0)+(c[(c[28228]|0)+8>>2]|0);hc(c[28228]|0);P=h;R=k;a[P]=a[R]|0;a[P+1|0]=a[R+1|0]|0;a[P+2|0]=a[R+2|0]|0;a[P+3|0]=a[R+3|0]|0;if((c[78112+(l<<2)>>2]|0)==0){R=h;P=e;a[R]=a[P]|0;a[R+1|0]=a[P+1|0]|0;a[R+2|0]=a[P+2|0]|0;a[R+3|0]=a[P+3|0]|0}if((c[14604]|0)==0){Ya(m|0,15776,(Q=i,i=i+8|0,c[Q>>2]=49968,Q)|0)|0;i=Q}if((c[14604]|0)==1){Ya(m|0,15776,(Q=i,i=i+8|0,c[Q>>2]=51632,Q)|0)|0;i=Q}c[28228]=rd(c[28582]|0,m|0,h,j)|0;c[n+8>>2]=c[(c[28228]|0)+8>>2];c[n+12>>2]=c[(c[28228]|0)+12>>2];Ub(c[28228]|0,0,c[16874]|0,n|0)|0;P=n|0;c[P>>2]=(c[P>>2]|0)+(c[(c[28228]|0)+8>>2]|0);hc(c[28228]|0);P=h;R=g;a[P]=a[R]|0;a[P+1|0]=a[R+1|0]|0;a[P+2|0]=a[R+2|0]|0;a[P+3|0]=a[R+3|0]|0;if((c[14604]|0)<1){R=h;P=f;a[R]=a[P]|0;a[R+1|0]=a[P+1|0]|0;a[R+2|0]=a[P+2|0]|0;a[R+3|0]=a[P+3|0]|0}if((c[78112+(l<<2)>>2]|0)==0){P=h;R=e;a[P]=a[R]|0;a[P+1|0]=a[R+1|0]|0;a[P+2|0]=a[R+2|0]|0;a[P+3|0]=a[R+3|0]|0}c[28228]=rd(c[28582]|0,10576,h,j)|0;c[n+8>>2]=c[(c[28228]|0)+8>>2];c[n+12>>2]=c[(c[28228]|0)+12>>2];Ub(c[28228]|0,0,c[16874]|0,n|0)|0;if((c[78112+(l<<2)>>2]|0)!=0){ef(100,l+309|0,n)}R=n|0;c[R>>2]=(c[R>>2]|0)+(c[(c[28228]|0)+8>>2]|0);hc(c[28228]|0)}else{if((l|0)==3){R=h;P=d;a[R]=a[P]|0;a[R+1|0]=a[P+1|0]|0;a[R+2|0]=a[P+2|0]|0;a[R+3|0]=a[P+3|0]|0;if(((l|0)%13|0|0)==(c[78064+(c[19524]<<2)>>2]|0)){P=h;R=f;a[P]=a[R]|0;a[P+1|0]=a[R+1|0]|0;a[P+2|0]=a[R+2|0]|0;a[P+3|0]=a[R+3|0]|0}Ya(m|0,15776,(Q=i,i=i+8|0,c[Q>>2]=50488,Q)|0)|0;i=Q;c[28228]=rd(c[28582]|0,m|0,h,j)|0;R=N+(((c[7768]|0)*57|0|0)/16|0)+(aa((l|0)%13|0,c[7768]|0)|0)|0;Ze(E,M+((c[7768]<<1|0)/16|0)|0,R,c[(c[28228]|0)+8>>2]|0,c[(c[28228]|0)+12>>2]|0);R=n;P=E;c[R>>2]=c[P>>2];c[R+4>>2]=c[P+4>>2];c[R+8>>2]=c[P+8>>2];c[R+12>>2]=c[P+12>>2];Ub(c[28228]|0,0,c[16874]|0,n|0)|0;if((c[78112+(l<<2)>>2]|0)!=0){ef(100,l+101|0,n)}P=n|0;c[P>>2]=(c[P>>2]|0)+(c[(c[28228]|0)+8>>2]|0);hc(c[28228]|0);P=h;R=g;a[P]=a[R]|0;a[P+1|0]=a[R+1|0]|0;a[P+2|0]=a[R+2|0]|0;a[P+3|0]=a[R+3|0]|0;if((c[14620]|0)>0){R=h;P=f;a[R]=a[P]|0;a[R+1|0]=a[P+1|0]|0;a[R+2|0]=a[P+2|0]|0;a[R+3|0]=a[P+3|0]|0}c[28228]=rd(c[28582]|0,12320,h,j)|0;c[n+8>>2]=c[(c[28228]|0)+8>>2];c[n+12>>2]=c[(c[28228]|0)+12>>2];Ub(c[28228]|0,0,c[16874]|0,n|0)|0;if((c[78112+(l<<2)>>2]|0)!=0){ef(100,l+205|0,n)}P=n|0;c[P>>2]=(c[P>>2]|0)+(c[(c[28228]|0)+8>>2]|0);hc(c[28228]|0);P=h;R=k;a[P]=a[R]|0;a[P+1|0]=a[R+1|0]|0;a[P+2|0]=a[R+2|0]|0;a[P+3|0]=a[R+3|0]|0;if((c[14620]|0)==0){Ya(m|0,15776,(Q=i,i=i+8|0,c[Q>>2]=56416,Q)|0)|0;i=Q}if((c[14620]|0)==1){Ya(m|0,15776,(Q=i,i=i+8|0,c[Q>>2]=56312,Q)|0)|0;i=Q}c[28228]=rd(c[28582]|0,m|0,h,j)|0;c[n+8>>2]=c[(c[28228]|0)+8>>2];c[n+12>>2]=c[(c[28228]|0)+12>>2];Ub(c[28228]|0,0,c[16874]|0,n|0)|0;R=n|0;c[R>>2]=(c[R>>2]|0)+(c[(c[28228]|0)+8>>2]|0);hc(c[28228]|0);R=h;P=g;a[R]=a[P]|0;a[R+1|0]=a[P+1|0]|0;a[R+2|0]=a[P+2|0]|0;a[R+3|0]=a[P+3|0]|0;if((c[14620]|0)<1){P=h;R=f;a[P]=a[R]|0;a[P+1|0]=a[R+1|0]|0;a[P+2|0]=a[R+2|0]|0;a[P+3|0]=a[R+3|0]|0}c[28228]=rd(c[28582]|0,10696,h,j)|0;c[n+8>>2]=c[(c[28228]|0)+8>>2];c[n+12>>2]=c[(c[28228]|0)+12>>2];Ub(c[28228]|0,0,c[16874]|0,n|0)|0;if((c[78112+(l<<2)>>2]|0)!=0){ef(100,l+309|0,n)}R=n|0;c[R>>2]=(c[R>>2]|0)+(c[(c[28228]|0)+8>>2]|0);hc(c[28228]|0)}else{if((l|0)==4){R=h;P=d;a[R]=a[P]|0;a[R+1|0]=a[P+1|0]|0;a[R+2|0]=a[P+2|0]|0;a[R+3|0]=a[P+3|0]|0;if(((l|0)%13|0|0)==(c[78064+(c[19524]<<2)>>2]|0)){P=h;R=f;a[P]=a[R]|0;a[P+1|0]=a[R+1|0]|0;a[P+2|0]=a[R+2|0]|0;a[P+3|0]=a[R+3|0]|0}Ya(m|0,15776,(Q=i,i=i+8|0,c[Q>>2]=51320,Q)|0)|0;i=Q;c[28228]=rd(c[28582]|0,m|0,h,j)|0;R=N+(((c[7768]|0)*57|0|0)/16|0)+(aa((l|0)%13|0,c[7768]|0)|0)|0;Ze(F,M+((c[7768]<<1|0)/16|0)|0,R,c[(c[28228]|0)+8>>2]|0,c[(c[28228]|0)+12>>2]|0);R=n;P=F;c[R>>2]=c[P>>2];c[R+4>>2]=c[P+4>>2];c[R+8>>2]=c[P+8>>2];c[R+12>>2]=c[P+12>>2];Ub(c[28228]|0,0,c[16874]|0,n|0)|0;if((c[78112+(l<<2)>>2]|0)!=0){ef(100,l+101|0,n)}P=n|0;c[P>>2]=(c[P>>2]|0)+(c[(c[28228]|0)+8>>2]|0);hc(c[28228]|0);P=h;R=g;a[P]=a[R]|0;a[P+1|0]=a[R+1|0]|0;a[P+2|0]=a[R+2|0]|0;a[P+3|0]=a[R+3|0]|0;if((c[14594]|0)>0){R=h;P=f;a[R]=a[P]|0;a[R+1|0]=a[P+1|0]|0;a[R+2|0]=a[P+2|0]|0;a[R+3|0]=a[P+3|0]|0}c[28228]=rd(c[28582]|0,12320,h,j)|0;c[n+8>>2]=c[(c[28228]|0)+8>>2];c[n+12>>2]=c[(c[28228]|0)+12>>2];Ub(c[28228]|0,0,c[16874]|0,n|0)|0;if((c[78112+(l<<2)>>2]|0)!=0){ef(100,l+205|0,n)}P=n|0;c[P>>2]=(c[P>>2]|0)+(c[(c[28228]|0)+8>>2]|0);hc(c[28228]|0);P=h;R=k;a[P]=a[R]|0;a[P+1|0]=a[R+1|0]|0;a[P+2|0]=a[R+2|0]|0;a[P+3|0]=a[R+3|0]|0;Ya(m|0,10488,(Q=i,i=i+8|0,c[Q>>2]=c[14594],Q)|0)|0;i=Q;c[28228]=rd(c[28582]|0,m|0,h,j)|0;c[n+8>>2]=c[(c[28228]|0)+8>>2];c[n+12>>2]=c[(c[28228]|0)+12>>2];Ub(c[28228]|0,0,c[16874]|0,n|0)|0;R=n|0;c[R>>2]=(c[R>>2]|0)+(c[(c[28228]|0)+8>>2]|0);hc(c[28228]|0);R=h;P=g;a[R]=a[P]|0;a[R+1|0]=a[P+1|0]|0;a[R+2|0]=a[P+2|0]|0;a[R+3|0]=a[P+3|0]|0;if((c[14594]|0)<128){P=h;R=f;a[P]=a[R]|0;a[P+1|0]=a[R+1|0]|0;a[P+2|0]=a[R+2|0]|0;a[P+3|0]=a[R+3|0]|0}c[28228]=rd(c[28582]|0,10392,h,j)|0;c[n+8>>2]=c[(c[28228]|0)+8>>2];c[n+12>>2]=c[(c[28228]|0)+12>>2];Ub(c[28228]|0,0,c[16874]|0,n|0)|0;if((c[78112+(l<<2)>>2]|0)!=0){ef(100,l+309|0,n)}R=n|0;c[R>>2]=(c[R>>2]|0)+(c[(c[28228]|0)+8>>2]|0);hc(c[28228]|0)}else{do{if((l|0)>=52){if((l|0)>99){S=458;break}R=h;P=d;a[R]=a[P]|0;a[R+1|0]=a[P+1|0]|0;a[R+2|0]=a[P+2|0]|0;a[R+3|0]=a[P+3|0]|0;if(((l|0)%13|0|0)==(c[78064+(c[19524]<<2)>>2]|0)){P=h;R=f;a[P]=a[R]|0;a[P+1|0]=a[R+1|0]|0;a[P+2|0]=a[R+2|0]|0;a[P+3|0]=a[R+3|0]|0}if((c[78112+(l<<2)>>2]|0)==0){R=h;P=e;a[R]=a[P]|0;a[R+1|0]=a[P+1|0]|0;a[R+2|0]=a[P+2|0]|0;a[R+3|0]=a[P+3|0]|0}P=l-52-(((l-52|0)/13|0)<<2)|0;if((P|0)==0){Ya(m|0,10856,(Q=i,i=i+8|0,c[Q>>2]=54128,Q)|0)|0;i=Q}else{if((P|0)==1){Ya(m|0,10856,(Q=i,i=i+8|0,c[Q>>2]=53920,Q)|0)|0;i=Q}else{if((P|0)==2){Ya(m|0,10856,(Q=i,i=i+8|0,c[Q>>2]=54232,Q)|0)|0;i=Q}else{if((P|0)==3){Ya(m|0,10856,(Q=i,i=i+8|0,c[Q>>2]=54440,Q)|0)|0;i=Q}else{if((P|0)==4){Ya(m|0,10856,(Q=i,i=i+8|0,c[Q>>2]=54648,Q)|0)|0;i=Q}else{if((P|0)==5){Ya(m|0,10856,(Q=i,i=i+8|0,c[Q>>2]=54544,Q)|0)|0;i=Q}else{if((P|0)==6){Ya(m|0,10856,(Q=i,i=i+8|0,c[Q>>2]=54336,Q)|0)|0;i=Q}else{if((P|0)==7){Ya(m|0,10856,(Q=i,i=i+8|0,c[Q>>2]=54024,Q)|0)|0;i=Q}else{if((P|0)==8){Ya(m|0,10856,(Q=i,i=i+8|0,c[Q>>2]=52048,Q)|0)|0;i=Q}else{if((P|0)==9){Ya(m|0,10856,(Q=i,i=i+8|0,c[Q>>2]=50904,Q)|0)|0;i=Q}else{if((P|0)==10){Ya(m|0,10856,(Q=i,i=i+8|0,c[Q>>2]=51216,Q)|0)|0;i=Q}else{if((P|0)==11){Ya(m|0,10856,(Q=i,i=i+8|0,c[Q>>2]=51112,Q)|0)|0;i=Q}else{if((P|0)==12){Ya(m|0,10856,(Q=i,i=i+8|0,c[Q>>2]=51008,Q)|0)|0;i=Q}else{if((P|0)==13){Ya(m|0,10856,(Q=i,i=i+8|0,c[Q>>2]=56832,Q)|0)|0;i=Q}else{if((P|0)==14){Ya(m|0,10856,(Q=i,i=i+8|0,c[Q>>2]=56104,Q)|0)|0;i=Q}else{if((P|0)==15){Ya(m|0,10856,(Q=i,i=i+8|0,c[Q>>2]=55792,Q)|0)|0;i=Q}else{if((P|0)==16){Ya(m|0,10856,(Q=i,i=i+8|0,c[Q>>2]=52984,Q)|0)|0;i=Q}else{if((P|0)==17){Ya(m|0,10856,(Q=i,i=i+8|0,c[Q>>2]=50176,Q)|0)|0;i=Q}else{if((P|0)==18){Ya(m|0,10856,(Q=i,i=i+8|0,c[Q>>2]=52464,Q)|0)|0;i=Q}else{if((P|0)==19){Ya(m|0,10856,(Q=i,i=i+8|0,c[Q>>2]=53712,Q)|0)|0;i=Q}else{if((P|0)==20){Ya(m|0,10856,(Q=i,i=i+8|0,c[Q>>2]=52360,Q)|0)|0;i=Q}else{if((P|0)==21){Ya(m|0,10856,(Q=i,i=i+8|0,c[Q>>2]=53608,Q)|0)|0;i=Q}else{if((P|0)==22){Ya(m|0,10856,(Q=i,i=i+8|0,c[Q>>2]=55688,Q)|0)|0;i=Q}else{if((P|0)==23){Ya(m|0,10856,(Q=i,i=i+8|0,c[Q>>2]=56208,Q)|0)|0;i=Q}else{if((P|0)==24){Ya(m|0,10856,(Q=i,i=i+8|0,c[Q>>2]=52776,Q)|0)|0;i=Q}else{if((P|0)==25){Ya(m|0,10856,(Q=i,i=i+8|0,c[Q>>2]=52880,Q)|0)|0;i=Q}else{if((P|0)==26){Ya(m|0,10856,(Q=i,i=i+8|0,c[Q>>2]=50280,Q)|0)|0;i=Q}else{if((P|0)==27){Ya(m|0,10856,(Q=i,i=i+8|0,c[Q>>2]=49656,Q)|0)|0;i=Q}else{if((P|0)==28){Ya(m|0,10856,(Q=i,i=i+8|0,c[Q>>2]=49760,Q)|0)|0;i=Q}else{do{if((P|0)>=29){if((P|0)>32){S=372;break}Ya(m|0,10304,(Q=i,i=i+16|0,c[Q>>2]=54752,c[Q+8>>2]=P-29+1,Q)|0)|0;i=Q}else{S=372}}while(0);if((S|0)==372){S=0;if((P|0)==33){Ya(m|0,10856,(Q=i,i=i+8|0,c[Q>>2]=51424,Q)|0)|0;i=Q}else{if((P|0)==34){Ya(m|0,10856,(Q=i,i=i+8|0,c[Q>>2]=51528,Q)|0)|0;i=Q}else{if((P|0)==35){Ya(m|0,10856,(Q=i,i=i+8|0,c[Q>>2]=52256,Q)|0)|0;i=Q}else{Ya(m|0,10192,(Q=i,i=i+16|0,c[Q>>2]=10088,c[Q+8>>2]=P,Q)|0)|0;i=Q}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}c[28228]=rd(c[28582]|0,m|0,h,j)|0;R=N+(((c[7768]|0)*57|0|0)/16|0)+(aa((l|0)%13|0,c[7768]|0)|0)|0;Ze(G,M+((c[7768]<<1|0)/16|0)|0,R,c[(c[28228]|0)+8>>2]|0,c[(c[28228]|0)+12>>2]|0);R=n;T=G;c[R>>2]=c[T>>2];c[R+4>>2]=c[T+4>>2];c[R+8>>2]=c[T+8>>2];c[R+12>>2]=c[T+12>>2];Ub(c[28228]|0,0,c[16874]|0,n|0)|0;if((c[78112+(l<<2)>>2]|0)!=0){ef(100,l+101|0,n)}T=n|0;c[T>>2]=(c[T>>2]|0)+(c[(c[28228]|0)+8>>2]|0);hc(c[28228]|0);T=h;R=k;a[T]=a[R]|0;a[T+1|0]=a[R+1|0]|0;a[T+2|0]=a[R+2|0]|0;a[T+3|0]=a[R+3|0]|0;if((c[78112+(l<<2)>>2]|0)==0){R=h;T=e;a[R]=a[T]|0;a[R+1|0]=a[T+1|0]|0;a[R+2|0]=a[T+2|0]|0;a[R+3|0]=a[T+3|0]|0}c[n>>2]=M+(((c[7768]|0)*110|0|0)/16|0);if((c[57336+(P*28|0)>>2]|0)==-1){Ya(m|0,15776,(Q=i,i=i+8|0,c[Q>>2]=10008,Q)|0)|0;i=Q}if((c[57336+(P*28|0)>>2]|0)==1){Ya(m|0,9904,(Q=i,i=i+8|0,c[Q>>2]=55272,Q)|0)|0;i=Q}if((c[57336+(P*28|0)>>2]|0)==2){Ya(m|0,9904,(Q=i,i=i+8|0,c[Q>>2]=55480,Q)|0)|0;i=Q}if((c[57336+(P*28|0)>>2]|0)==3){Ya(m|0,9904,(Q=i,i=i+8|0,c[Q>>2]=52152,Q)|0)|0;i=Q}c[28228]=rd(c[28582]|0,m|0,h,j)|0;if((c[19526]|0)<=3){c[n+8>>2]=((c[7768]|0)*130|0|0)/16|0;c[n+12>>2]=c[(c[28228]|0)+12>>2];T=c[16874]|0;Ta(T|0,n|0,Jb(c[(c[16874]|0)+4>>2]|0,a[j|0]|0,a[j+1|0]|0,a[j+2|0]|0)|0)|0}c[n+8>>2]=c[(c[28228]|0)+8>>2];c[n+12>>2]=c[(c[28228]|0)+12>>2];Ub(c[28228]|0,0,c[16874]|0,n|0)|0;T=n|0;c[T>>2]=(c[T>>2]|0)+(c[(c[28228]|0)+8>>2]|0);hc(c[28228]|0);if((c[57340+(P*28|0)>>2]|0)==-1){Ya(m|0,10856,(Q=i,i=i+8|0,c[Q>>2]=10008,Q)|0)|0;i=Q}else{if((c[28152]|0)>0){ld(c[57336+(P*28|0)>>2]|0,c[57340+(P*28|0)>>2]|0,110040+(c[14624]<<8)|0,m|0)}else{ld(c[57336+(P*28|0)>>2]|0,c[57340+(P*28|0)>>2]|0,283256,m|0)}Ya(m|0,10856,(Q=i,i=i+8|0,c[Q>>2]=m,Q)|0)|0;i=Q}c[28228]=rd(c[28582]|0,m|0,h,j)|0;c[n+8>>2]=c[(c[28228]|0)+8>>2];c[n+12>>2]=c[(c[28228]|0)+12>>2];Ub(c[28228]|0,0,c[16874]|0,n|0)|0;T=n|0;c[T>>2]=(c[T>>2]|0)+(c[(c[28228]|0)+8>>2]|0);hc(c[28228]|0);if((P|0)<29){S=433}else{if((P|0)>32){S=433}}if((S|0)==433){S=0;c[n>>2]=M+(((c[7768]|0)*190|0|0)/16|0);T=h;R=g;a[T]=a[R]|0;a[T+1|0]=a[R+1|0]|0;a[T+2|0]=a[R+2|0]|0;a[T+3|0]=a[R+3|0]|0;if((c[57344+(P*28|0)>>2]|0)!=-1){R=h;T=f;a[R]=a[T]|0;a[R+1|0]=a[T+1|0]|0;a[R+2|0]=a[T+2|0]|0;a[R+3|0]=a[T+3|0]|0}if((c[57336+(P*28|0)>>2]|0)==-1){T=h;R=e;a[T]=a[R]|0;a[T+1|0]=a[R+1|0]|0;a[T+2|0]=a[R+2|0]|0;a[T+3|0]=a[R+3|0]|0}if((c[78112+(l<<2)>>2]|0)==0){R=h;T=e;a[R]=a[T]|0;a[R+1|0]=a[T+1|0]|0;a[R+2|0]=a[T+2|0]|0;a[R+3|0]=a[T+3|0]|0}c[28228]=rd(c[28582]|0,13944,h,j)|0;c[n+8>>2]=c[(c[28228]|0)+8>>2];c[n+12>>2]=c[(c[28228]|0)+12>>2];Ub(c[28228]|0,0,c[16874]|0,n|0)|0;if((c[78112+(l<<2)>>2]|0)!=0){ef(100,l+205|0,n)}T=n|0;c[T>>2]=(c[T>>2]|0)+(c[(c[28228]|0)+8>>2]|0);hc(c[28228]|0);T=h;R=k;a[T]=a[R]|0;a[T+1|0]=a[R+1|0]|0;a[T+2|0]=a[R+2|0]|0;a[T+3|0]=a[R+3|0]|0;if((c[57336+(P*28|0)>>2]|0)==-1){R=h;T=e;a[R]=a[T]|0;a[R+1|0]=a[T+1|0]|0;a[R+2|0]=a[T+2|0]|0;a[R+3|0]=a[T+3|0]|0}if((c[78112+(l<<2)>>2]|0)==0){T=h;R=e;a[T]=a[R]|0;a[T+1|0]=a[R+1|0]|0;a[T+2|0]=a[R+2|0]|0;a[T+3|0]=a[R+3|0]|0}if((c[57344+(P*28|0)>>2]|0)==-1){Ya(m|0,15776,(Q=i,i=i+8|0,c[Q>>2]=9784,Q)|0)|0;i=Q}else{R=(c[57344+(P*28|0)>>2]|0)-29+1|0;Ya(m|0,9624,(Q=i,i=i+16|0,c[Q>>2]=54856,c[Q+8>>2]=R,Q)|0)|0;i=Q}c[28228]=rd(c[28582]|0,m|0,h,j)|0;c[n+8>>2]=c[(c[28228]|0)+8>>2];c[n+12>>2]=c[(c[28228]|0)+12>>2];Ub(c[28228]|0,0,c[16874]|0,n|0)|0;R=n|0;c[R>>2]=(c[R>>2]|0)+(c[(c[28228]|0)+8>>2]|0);hc(c[28228]|0);R=h;T=g;a[R]=a[T]|0;a[R+1|0]=a[T+1|0]|0;a[R+2|0]=a[T+2|0]|0;a[R+3|0]=a[T+3|0]|0;if((c[57344+(P*28|0)>>2]|0)<32){T=h;R=f;a[T]=a[R]|0;a[T+1|0]=a[R+1|0]|0;a[T+2|0]=a[R+2|0]|0;a[T+3|0]=a[R+3|0]|0}if((c[57336+(P*28|0)>>2]|0)==-1){R=h;T=e;a[R]=a[T]|0;a[R+1|0]=a[T+1|0]|0;a[R+2|0]=a[T+2|0]|0;a[R+3|0]=a[T+3|0]|0}if((c[78112+(l<<2)>>2]|0)==0){T=h;R=e;a[T]=a[R]|0;a[T+1|0]=a[R+1|0]|0;a[T+2|0]=a[R+2|0]|0;a[T+3|0]=a[R+3|0]|0}c[28228]=rd(c[28582]|0,11808,h,j)|0;c[n+8>>2]=c[(c[28228]|0)+8>>2];c[n+12>>2]=c[(c[28228]|0)+12>>2];Ub(c[28228]|0,0,c[16874]|0,n|0)|0;if((c[78112+(l<<2)>>2]|0)!=0){ef(100,l+309|0,n)}R=n|0;c[R>>2]=(c[R>>2]|0)+(c[(c[28228]|0)+8>>2]|0);hc(c[28228]|0)}}else{S=458}}while(0);if((S|0)==458){S=0;if((l|0)==13){R=h;T=d;a[R]=a[T]|0;a[R+1|0]=a[T+1|0]|0;a[R+2|0]=a[T+2|0]|0;a[R+3|0]=a[T+3|0]|0;if(((l|0)%13|0|0)==(c[78064+(c[19524]<<2)>>2]|0)){T=h;R=f;a[T]=a[R]|0;a[T+1|0]=a[R+1|0]|0;a[T+2|0]=a[R+2|0]|0;a[T+3|0]=a[R+3|0]|0}c[28228]=rd(c[28582]|0,50696,h,j)|0;R=N+(((c[7768]|0)*57|0|0)/16|0)+(aa((l|0)%13|0,c[7768]|0)|0)|0;Ze(H,M+((c[7768]<<1|0)/16|0)|0,R,c[(c[28228]|0)+8>>2]|0,c[(c[28228]|0)+12>>2]|0);R=n;T=H;c[R>>2]=c[T>>2];c[R+4>>2]=c[T+4>>2];c[R+8>>2]=c[T+8>>2];c[R+12>>2]=c[T+12>>2];Ub(c[28228]|0,0,c[16874]|0,n|0)|0;if((c[78112+(l<<2)>>2]|0)!=0){ef(100,l+101|0,n)}T=n|0;c[T>>2]=(c[T>>2]|0)+(c[(c[28228]|0)+8>>2]|0);hc(c[28228]|0);T=h;R=g;a[T]=a[R]|0;a[T+1|0]=a[R+1|0]|0;a[T+2|0]=a[R+2|0]|0;a[T+3|0]=a[R+3|0]|0;if((c[14596]|0)>0){R=h;T=f;a[R]=a[T]|0;a[R+1|0]=a[T+1|0]|0;a[R+2|0]=a[T+2|0]|0;a[R+3|0]=a[T+3|0]|0}c[28228]=rd(c[28582]|0,12320,h,j)|0;c[n+8>>2]=c[(c[28228]|0)+8>>2];c[n+12>>2]=c[(c[28228]|0)+12>>2];Ub(c[28228]|0,0,c[16874]|0,n|0)|0;if((c[78112+(l<<2)>>2]|0)!=0){ef(100,l+205|0,n)}T=n|0;c[T>>2]=(c[T>>2]|0)+(c[(c[28228]|0)+8>>2]|0);hc(c[28228]|0);T=h;R=k;a[T]=a[R]|0;a[T+1|0]=a[R+1|0]|0;a[T+2|0]=a[R+2|0]|0;a[T+3|0]=a[R+3|0]|0;c[28228]=rd(c[28582]|0,59652+((c[14596]|0)*524|0)|0,h,j)|0;if((c[19526]|0)<=3){c[n+8>>2]=(c[7768]|0)*13|0;c[n+12>>2]=c[7768];R=c[16874]|0;Ta(R|0,n|0,Jb(c[(c[16874]|0)+4>>2]|0,a[j|0]|0,a[j+1|0]|0,a[j+2|0]|0)|0)|0}c[n+8>>2]=c[(c[28228]|0)+8>>2];c[n+12>>2]=c[(c[28228]|0)+12>>2];Ub(c[28228]|0,0,c[16874]|0,n|0)|0;R=n|0;c[R>>2]=(c[R>>2]|0)+(c[(c[28228]|0)+8>>2]|0);hc(c[28228]|0);R=h;T=g;a[R]=a[T]|0;a[R+1|0]=a[T+1|0]|0;a[R+2|0]=a[T+2|0]|0;a[R+3|0]=a[T+3|0]|0;if((c[14596]|0)<((c[16198]|0)-1|0)){T=h;R=f;a[T]=a[R]|0;a[T+1|0]=a[R+1|0]|0;a[T+2|0]=a[R+2|0]|0;a[T+3|0]=a[R+3|0]|0}c[28228]=rd(c[28582]|0,11808,h,j)|0;c[n+8>>2]=c[(c[28228]|0)+8>>2];c[n+12>>2]=c[(c[28228]|0)+12>>2];Ub(c[28228]|0,0,c[16874]|0,n|0)|0;if((c[78112+(l<<2)>>2]|0)!=0){ef(100,l+309|0,n)}R=n|0;c[R>>2]=(c[R>>2]|0)+(c[(c[28228]|0)+8>>2]|0);hc(c[28228]|0);R=h;T=d;a[R]=a[T]|0;a[R+1|0]=a[T+1|0]|0;a[R+2|0]=a[T+2|0]|0;a[R+3|0]=a[T+3|0]|0;Ya(m|0,10856,(Q=i,i=i+8|0,c[Q>>2]=57040,Q)|0)|0;i=Q;c[28228]=rd(c[28582]|0,m|0,h,j)|0;T=N+(((c[7768]|0)*57|0|0)/16|0)+(aa(((l|0)%13|0)+1|0,c[7768]|0)|0)|0;Ze(I,M+((c[7768]<<1|0)/16|0)|0,T,c[(c[28228]|0)+8>>2]|0,c[(c[28228]|0)+12>>2]|0);T=n;R=I;c[T>>2]=c[R>>2];c[T+4>>2]=c[R+4>>2];c[T+8>>2]=c[R+8>>2];c[T+12>>2]=c[R+12>>2];Ub(c[28228]|0,0,c[16874]|0,n|0)|0;R=n|0;c[R>>2]=(c[R>>2]|0)+(c[(c[28228]|0)+8>>2]|0);hc(c[28228]|0);R=h;T=k;a[R]=a[T]|0;a[R+1|0]=a[T+1|0]|0;a[R+2|0]=a[T+2|0]|0;a[R+3|0]=a[T+3|0]|0;c[28228]=rd(c[28582]|0,59712+((c[14596]|0)*524|0)|0,h,j)|0;if((c[19526]|0)<=3){c[n+8>>2]=(c[7768]|0)*14|0;c[n+12>>2]=c[7768];T=c[16874]|0;Ta(T|0,n|0,Jb(c[(c[16874]|0)+4>>2]|0,a[j|0]|0,a[j+1|0]|0,a[j+2|0]|0)|0)|0}c[n+8>>2]=c[(c[28228]|0)+8>>2];c[n+12>>2]=c[(c[28228]|0)+12>>2];Ub(c[28228]|0,0,c[16874]|0,n|0)|0;T=n|0;c[T>>2]=(c[T>>2]|0)+(c[(c[28228]|0)+8>>2]|0);hc(c[28228]|0);T=h;R=k;a[T]=a[R]|0;a[T+1|0]=a[R+1|0]|0;a[T+2|0]=a[R+2|0]|0;a[T+3|0]=a[R+3|0]|0;R=N+(((c[7768]|0)*57|0|0)/16|0)+(aa(((l|0)%13|0)+2|0,c[7768]|0)|0)|0;Ze(J,M+((c[7768]<<1|0)/16|0)|0,R,((c[7768]|0)*240|0|0)/16|0,(c[7768]|0)*3|0);R=n;T=J;c[R>>2]=c[T>>2];c[R+4>>2]=c[T+4>>2];c[R+8>>2]=c[T+8>>2];c[R+12>>2]=c[T+12>>2];if((c[19526]|0)<=3){T=c[16874]|0;Ta(T|0,n|0,Jb(c[(c[16874]|0)+4>>2]|0,a[j|0]|0,a[j+1|0]|0,a[j+2|0]|0)|0)|0}O=0;while(1){if((O|0)>=3){break}c[28228]=rd(c[28582]|0,59772+((c[14596]|0)*524|0)+(O*60|0)|0,h,j)|0;T=c[28228]|0;Ja(T|0,131072,Jb(c[(c[28228]|0)+4>>2]|0,a[j|0]|0,a[j+1|0]|0,a[j+2|0]|0)|0)|0;c[n+8>>2]=c[(c[28228]|0)+8>>2];c[n+12>>2]=c[(c[28228]|0)+12>>2];Ub(c[28228]|0,0,c[16874]|0,n|0)|0;hc(c[28228]|0);if((c[7768]|0)==16){T=n+4|0;c[T>>2]=(c[T>>2]|0)+(((c[7768]|0)/8|0)+10)}if((c[7768]|0)==32){T=n+4|0;c[T>>2]=(c[T>>2]|0)+(((c[7768]|0)/8|0)+20)}O=O+1|0}T=tf()|0;R=N+(((c[7768]|0)*57|0|0)/16|0)+(aa(((l|0)%13|0)+5|0,c[7768]|0)|0)|0;Ze(K,M+(((c[7768]|0)*15|0|0)/2|0)-((c[T+8>>2]|0)/2|0)|0,R,c[T+8>>2]|0,c[T+12>>2]|0);R=n;U=K;c[R>>2]=c[U>>2];c[R+4>>2]=c[U+4>>2];c[R+8>>2]=c[U+8>>2];c[R+12>>2]=c[U+12>>2];Ub(T|0,0,c[16874]|0,n|0)|0;hc(T|0)}}}}}}}}}}}}}}}}}}}l=l+1|0}}if((c[19526]|0)<1){c[19526]=0;i=b;return}Ze(L,M|0,N+(((c[7768]|0)*43|0|0)/16|0)|0,((c[7768]|0)*240|0|0)/16|0,(c[7768]|0)/8|0);l=n;K=L;c[l>>2]=c[K>>2];c[l+4>>2]=c[K+4>>2];c[l+8>>2]=c[K+8>>2];c[l+12>>2]=c[K+12>>2];K=c[16874]|0;Ta(K|0,n|0,Jb(c[(c[16874]|0)+4>>2]|0,c[6048+(c[70550]<<2)>>2]>>16&255|0,c[6048+(c[70550]<<2)>>2]>>8&255|0,c[6048+(c[70550]<<2)>>2]&255|0)|0)|0;if((c[7768]|0)==16){ff(480,M+(((c[7768]|0)*15|0|0)/2|0)-90|0,N+6|0,60,10)}else{if((c[7768]|0)==32){ff(480,M+(((c[7768]|0)*15|0|0)/2|0)-150|0,N+19|0,60,10)}}N=(c[70548]|0)-1|0;c[70548]=N;if((N|0)<=0){c[70548]=2;N=(c[70550]|0)+1|0;c[70550]=N;if((N|0)>=66){c[70550]=0}}c[19526]=0;i=b;return}function jf(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0;e=i;i=i+112|0;f=e|0;g=e+16|0;h=e+32|0;j=e+48|0;k=e+64|0;l=e+80|0;m=e+96|0;n=b;b=d;do{if((n|0)==1){if((b|0)==0){break}if((c[16330]|0)>0){jf(3,0)}Nf(64808,b|0,552)|0;if((Of(65064)|0)==0){Qf(65064,9520)|0}a[282152]=(c[60012+((c[16612]|0)*524|0)>>2]|0)>>>16&255;a[282153]=(c[60012+((c[16612]|0)*524|0)>>2]|0)>>>8&255;a[282154]=c[60012+((c[16612]|0)*524|0)>>2]&255;a[114336]=(c[60020+((c[16612]|0)*524|0)>>2]|0)>>>16&255;a[114337]=(c[60020+((c[16612]|0)*524|0)>>2]|0)>>>8&255;a[114338]=c[60020+((c[16612]|0)*524|0)>>2]&255;c[28228]=rd(c[28582]|0,65064,114336,282152)|0;if((c[16331]|0)!=0){c[16332]=(c[(c[28228]|0)+8>>2]|0)+(c[7768]|0);c[16333]=(c[(c[28228]|0)+12>>2]|0)+(c[7768]|0)}hc(c[28228]|0);c[16334]=((c[(c[16874]|0)+8>>2]|0)-(c[16332]|0)|0)/2|0;c[16335]=((c[(c[16874]|0)+12>>2]|0)-(c[16333]|0)|0)/2|0;c[16336]=(c[16334]|0)+((c[7768]|0)/8|0);c[16337]=(c[16335]|0)+((c[7768]|0)/8|0);c[16338]=(c[16334]|0)+(c[16332]|0)-((c[7768]|0)/4|0);c[16339]=(c[16335]|0)+(c[16333]|0)-((c[7768]|0)/4|0);i=e;return}}while(0);if((n|0)==2){o=12}else{if((n|0)==3){o=12}}do{if((o|0)==12){if((c[16330]|0)<=0){break}if((n|0)==3){c[16330]=1}a[282152]=(c[60012+((c[16612]|0)*524|0)>>2]|0)>>>16&255;a[282153]=(c[60012+((c[16612]|0)*524|0)>>2]|0)>>>8&255;a[282154]=c[60012+((c[16612]|0)*524|0)>>2]&255;Ze(g,c[16334]|0,c[16335]|0,c[16332]|0,c[16333]|0);b=f;d=g;c[b>>2]=c[d>>2];c[b+4>>2]=c[d+4>>2];c[b+8>>2]=c[d+8>>2];c[b+12>>2]=c[d+12>>2];d=c[16874]|0;Ta(d|0,f|0,Jb(c[(c[16874]|0)+4>>2]|0,a[282152]|0,a[282153]|0,a[282154]|0)|0)|0;Ze(h,c[16336]|0,c[16337]|0,(c[16338]|0)-(c[16336]|0)|0,(c[7768]|0)/8|0);d=f;b=h;c[d>>2]=c[b>>2];c[d+4>>2]=c[b+4>>2];c[d+8>>2]=c[b+8>>2];c[d+12>>2]=c[b+12>>2];b=c[16874]|0;Ta(b|0,f|0,Jb(c[(c[16874]|0)+4>>2]|0,c[6048+(c[16342]<<2)>>2]>>16&255|0,c[6048+(c[16342]<<2)>>2]>>8&255|0,c[6048+(c[16342]<<2)>>2]&255|0)|0)|0;Ze(j,c[16336]|0,c[16339]|0,(c[16338]|0)-(c[16336]|0)|0,(c[7768]|0)/8|0);b=f;d=j;c[b>>2]=c[d>>2];c[b+4>>2]=c[d+4>>2];c[b+8>>2]=c[d+8>>2];c[b+12>>2]=c[d+12>>2];d=c[16874]|0;Ta(d|0,f|0,Jb(c[(c[16874]|0)+4>>2]|0,c[6048+(c[16342]<<2)>>2]>>16&255|0,c[6048+(c[16342]<<2)>>2]>>8&255|0,c[6048+(c[16342]<<2)>>2]&255|0)|0)|0;Ze(k,c[16336]|0,c[16337]|0,(c[7768]|0)/8|0,(c[16339]|0)-(c[16337]|0)|0);d=f;b=k;c[d>>2]=c[b>>2];c[d+4>>2]=c[b+4>>2];c[d+8>>2]=c[b+8>>2];c[d+12>>2]=c[b+12>>2];b=c[16874]|0;Ta(b|0,f|0,Jb(c[(c[16874]|0)+4>>2]|0,c[6048+(c[16342]<<2)>>2]>>16&255|0,c[6048+(c[16342]<<2)>>2]>>8&255|0,c[6048+(c[16342]<<2)>>2]&255|0)|0)|0;Ze(l,c[16338]|0,c[16337]|0,(c[7768]|0)/8|0,(c[16339]|0)-(c[16337]|0)+((c[7768]|0)/8|0)|0);b=f;d=l;c[b>>2]=c[d>>2];c[b+4>>2]=c[d+4>>2];c[b+8>>2]=c[d+8>>2];c[b+12>>2]=c[d+12>>2];d=c[16874]|0;Ta(d|0,f|0,Jb(c[(c[16874]|0)+4>>2]|0,c[6048+(c[16342]<<2)>>2]>>16&255|0,c[6048+(c[16342]<<2)>>2]>>8&255|0,c[6048+(c[16342]<<2)>>2]&255|0)|0)|0;d=(c[16340]|0)-1|0;c[16340]=d;if((d|0)<=0){c[16340]=2;d=(c[16342]|0)+1|0;c[16342]=d;if((d|0)>=66){c[16342]=0}}a[114336]=(c[60020+((c[16612]|0)*524|0)>>2]|0)>>>16&255;a[114337]=(c[60020+((c[16612]|0)*524|0)>>2]|0)>>>8&255;a[114338]=c[60020+((c[16612]|0)*524|0)>>2]&255;c[28228]=rd(c[28582]|0,65064,114336,282152)|0;Ze(m,(c[16334]|0)+(((c[16332]|0)-(c[(c[28228]|0)+8>>2]|0)|0)/2|0)|0,(c[16335]|0)+(((c[16333]|0)-(c[(c[28228]|0)+12>>2]|0)|0)/2|0)|0,c[(c[28228]|0)+8>>2]|0,c[(c[28228]|0)+12>>2]|0);d=f;b=m;c[d>>2]=c[b>>2];c[d+4>>2]=c[b+4>>2];c[d+8>>2]=c[b+8>>2];c[d+12>>2]=c[b+12>>2];Ub(c[28228]|0,0,c[16874]|0,f|0)|0;hc(c[28228]|0);b=(c[16330]|0)-1|0;c[16330]=b;if((b|0)==0){c[16330]=(c[16330]|0)-1;if((c[28568]|0)==5){c[28578]=c[28578]|7}else{if((c[28568]|0)==0){c[28158]=c[28158]|7}else{if((c[28568]|0)==1){c[28578]=c[28578]|7}else{if((c[28568]|0)!=2){if((c[28568]|0)==3){c[28236]=c[28236]|7}else{if((c[28568]|0)==4){c[19526]=c[19526]|7}}}}}}}}}while(0);i=e;return}function kf(){var b=0,d=0,e=0,f=0,g=0,h=0,j=0,k=0;b=i;i=i+32|0;d=b|0;e=b+16|0;f=(((c[(c[16874]|0)+8>>2]|0)-((c[7768]|0)*15|0)|0)/2|0)+(c[7770]|0)|0;g=(((c[(c[16874]|0)+12>>2]|0)-((c[7768]|0)*15|0)|0)/2|0)+(((c[7768]|0)*15|0|0)/2|0)-(((c[7768]|0)*3|0|0)/2|0)+(c[7771]|0)|0;ve();if((c[18086]|0)==1){pe();c[(He(512)|0)+8>>2]=0;c[(He(513)|0)+8>>2]=0;c[(He(514)|0)+8>>2]=0;c[(He(515)|0)+8>>2]=0}Ye();a[282152]=(c[60012+((c[16612]|0)*524|0)>>2]|0)>>>16&255;a[282153]=(c[60012+((c[16612]|0)*524|0)>>2]|0)>>>8&255;a[282154]=c[60012+((c[16612]|0)*524|0)>>2]&255;a[114336]=(c[60020+((c[16612]|0)*524|0)>>2]|0)>>>16&255;a[114337]=(c[60020+((c[16612]|0)*524|0)>>2]|0)>>>8&255;a[114338]=c[60020+((c[16612]|0)*524|0)>>2]&255;h=0;while(1){if((h|0)>=3){break}c[28228]=rd(c[28582]|0,49352+(h*100|0)|0,114336,282152)|0;j=g+(aa(h,c[7768]|0)|0)|0;Ze(e,f+(((c[7768]|0)*15|0|0)/2|0)-((c[(c[28228]|0)+8>>2]|0)/2|0)|0,j,c[(c[28228]|0)+8>>2]|0,c[(c[28228]|0)+12>>2]|0);j=d;k=e;c[j>>2]=c[k>>2];c[j+4>>2]=c[k+4>>2];c[j+8>>2]=c[k+8>>2];c[j+12>>2]=c[k+12>>2];Ub(c[28228]|0,0,c[16874]|0,d|0)|0;hc(c[28228]|0);h=h+1|0}i=b;return}



function ce(b){b=b|0;var d=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0;d=i;i=i+1328|0;e=d|0;f=d+256|0;g=d+264|0;h=d+1288|0;j=d+1296|0;k=d+1304|0;l=b;b=0;c[j>>2]=0;m=-1;o=-1;p=0;q=0;r=0;s=0;t=0;u=0;v=0;w=0;Qf(e|0,82256+((c[16614]|0)*292|0)|0)|0;x=Ua(e|0,18392)|0;y=x;if((x|0)==0){Nb(c[n>>2]|0,16440,(z=i,i=i+8|0,c[z>>2]=e,z)|0)|0;i=z;A=1;B=A;i=d;return B|0}while(1){if((Ra(g|0,1024,y|0)|0)==0){break}b=b+1|0;e=(Of(g|0)|0)-1|0;while(1){if((e|0)<0){break}if((a[g+e|0]|0)==13){C=9}else{if((a[g+e|0]|0)==10){C=9}}if((C|0)==9){C=0;a[g+e|0]=0}e=e-1|0}do{if((Mf(g|0,16296,22)|0)!=0){if((Mf(g|0,16080,7)|0)==0){if((q|0)==0){C=29;break}}if((Mf(g|0,15952,13)|0)==0){if((q|0)==2){C=29;break}}if((Mf(g|0,15688,8)|0)==0){if((q|0)==2){C=29;break}}if((Mf(g|0,15584,6)|0)==0){if((q|0)==2){C=29;break}}if((Mf(g|0,15424,8)|0)==0){if((q|0)==2){C=29;break}}if((Mf(g|0,15272,6)|0)==0){if((q|0)==2){C=29;break}}if((Mf(g|0,15104,12)|0)==0){if((q|0)==2){C=29;break}}if((Mf(g|0,14936,5)|0)==0){if((q|0)==2){C=29;break}}if((w|0)==1){if((Of(106872)|0)>>>0<1021>>>0){e=1021-(Of(106872)|0)|0;if((Of(g|0)|0)>>>0<=e>>>0){Rf(106872,g|0)|0}else{Qb(106872,g|0,e|0)|0;a[107895]=0}Rf(106872,14144)|0}else{w=2}}else{if((p|0)==1){x=Hb(g|0,14008,(z=i,i=i+8|0,c[z>>2]=k,z)|0)|0;i=z;if((x|0)==1){c[26716]=c[k>>2];p=2}else{p=3}}else{if((q|0)==1){x=Hb(g|0,18640,(z=i,i=i+8|0,c[z>>2]=k,z)|0)|0;i=z;if((x|0)==1){if((c[k>>2]|0)==(l|0)){q=2}else{q=0}}else{q=0}}else{if((r|0)==1){x=Hb(g|0,14008,(z=i,i=i+8|0,c[z>>2]=k,z)|0)|0;i=z;if((x|0)==1){c[26716]=c[k>>2];r=2}else{r=3}}else{if((s|0)==1){x=Hb(g|0,13880,(z=i,i=i+16|0,c[z>>2]=k,c[z+8>>2]=k+4,z)|0)|0;i=z;if((x|0)==2){do{if((c[k>>2]|0)>0){if((c[k>>2]|0)>32){C=133;break}if((c[k+4>>2]|0)<=0){C=133;break}if((c[k+4>>2]|0)>31){C=133;break}c[26698]=c[k>>2];c[26699]=c[k+4>>2];s=2}else{C=133}}while(0);if((C|0)==133){C=0;s=3;Nb(c[n>>2]|0,13640,(z=i,i=i+32|0,c[z>>2]=82256+((c[16614]|0)*292|0),c[z+8>>2]=b,c[z+16>>2]=32,c[z+24>>2]=31,z)|0)|0;i=z}}else{s=3;Nb(c[n>>2]|0,14672,(z=i,i=i+16|0,c[z>>2]=82256+((c[16614]|0)*292|0),c[z+8>>2]=b,z)|0)|0;i=z}}else{if((t|0)==1){Pf(106800,g|0,60)|0;a[106859]=0;t=2}else{if((u|0)==1){c[h>>2]=0;while(1){if((a[g+(c[h>>2]|0)|0]|0)==0){C=142;break}x=he(a[g+(c[h>>2]|0)|0]|0)|0;c[122352+((c[h>>2]|0)*4960|0)+((c[j>>2]|0)*160|0)>>2]=x;Qc(c[h>>2]|0,c[j>>2]|0,c[122352+((c[h>>2]|0)*4960|0)+((c[j>>2]|0)*160|0)>>2]|0);switch(c[122352+((c[h>>2]|0)*4960|0)+((c[j>>2]|0)*160|0)>>2]|0){case 4:{c[16979]=(c[16979]|0)+1;break};case 3:{Qc(c[h>>2]|0,c[j>>2]|0,2);c[122352+((c[h>>2]|0)*4960|0)+((c[j>>2]|0)*160|0)+4>>2]=1;break};case 25:{Qc(c[h>>2]|0,c[j>>2]|0,2);c[122352+((c[h>>2]|0)*4960|0)+((c[j>>2]|0)*160|0)+4>>2]=2;break};case 59:{Qc(c[h>>2]|0,c[j>>2]|0,2);c[122352+((c[h>>2]|0)*4960|0)+((c[j>>2]|0)*160|0)+4>>2]=3;break};case 63:{Qc(c[h>>2]|0,c[j>>2]|0,2);c[122352+((c[h>>2]|0)*4960|0)+((c[j>>2]|0)*160|0)+4>>2]=4;break};case 64:{Qc(c[h>>2]|0,c[j>>2]|0,2);c[122352+((c[h>>2]|0)*4960|0)+((c[j>>2]|0)*160|0)+4>>2]=5;break};case 65:{Qc(c[h>>2]|0,c[j>>2]|0,2);c[122352+((c[h>>2]|0)*4960|0)+((c[j>>2]|0)*160|0)+4>>2]=6;break};case 66:{Qc(c[h>>2]|0,c[j>>2]|0,2);c[122352+((c[h>>2]|0)*4960|0)+((c[j>>2]|0)*160|0)+4>>2]=7;break};case 67:{Qc(c[h>>2]|0,c[j>>2]|0,2);c[122352+((c[h>>2]|0)*4960|0)+((c[j>>2]|0)*160|0)+4>>2]=8;break};default:{}}x=(c[h>>2]|0)+1|0;c[h>>2]=x;if((x|0)>=(c[26698]|0)){C=155;break}}if((C|0)==142){C=0;u=3;x=c[26698]|0;Nb(c[n>>2]|0,13424,(z=i,i=i+24|0,c[z>>2]=82256+((c[16614]|0)*292|0),c[z+8>>2]=b,c[z+16>>2]=x,z)|0)|0;i=z}else if((C|0)==155){C=0}x=(c[j>>2]|0)+1|0;c[j>>2]=x;if((x|0)>=(c[26699]|0)){u=2}}else{if((v|0)==1){if((o|0)==-1){x=Hb(g|0,13880,(z=i,i=i+16|0,c[z>>2]=k,c[z+8>>2]=k+4,z)|0)|0;i=z;if((x|0)==1){if((c[k>>2]|0)>0){x=c[k>>2]|0;m=x;o=x}else{v=3}}else{v=3;Nb(c[n>>2]|0,13168,(z=i,i=i+16|0,c[z>>2]=82256+((c[16614]|0)*292|0),c[z+8>>2]=b,z)|0)|0;i=z}}else{x=Hb(g|0,13048,(z=i,i=i+72|0,c[z>>2]=h,c[z+8>>2]=j,c[z+16>>2]=f,c[z+24>>2]=k,c[z+32>>2]=k+4,c[z+40>>2]=k+8,c[z+48>>2]=k+12,c[z+56>>2]=k+16,c[z+64>>2]=k+20,z)|0)|0;i=z;D=x;if((D|0)<=0){v=3;Nb(c[n>>2]|0,14232,(z=i,i=i+24|0,c[z>>2]=82256+((c[16614]|0)*292|0),c[z+8>>2]=b,c[z+16>>2]=o,z)|0)|0;i=z}else{if((D|0)<4){Nb(c[n>>2]|0,12856,(z=i,i=i+16|0,c[z>>2]=82256+((c[16614]|0)*292|0),c[z+8>>2]=b,z)|0)|0;i=z}else{do{if((c[h>>2]|0)<0){C=175}else{if((c[h>>2]|0)>=32){C=175;break}do{if((c[j>>2]|0)<0){C=178}else{if((c[j>>2]|0)>=31){C=178;break}switch(he(a[f]|0)|0){case 30:case 32:{c[122352+((c[h>>2]|0)*4960|0)+((c[j>>2]|0)*160|0)+8>>2]=c[k>>2];break};case 40:{c[122352+((c[h>>2]|0)*4960|0)+((c[j>>2]|0)*160|0)+52>>2]=c[k>>2];c[122352+((c[h>>2]|0)*4960|0)+((c[j>>2]|0)*160|0)+56>>2]=c[k+4>>2];break};case 50:{c[122352+((c[h>>2]|0)*4960|0)+((c[j>>2]|0)*160|0)+8>>2]=c[k>>2];c[122352+((c[h>>2]|0)*4960|0)+((c[j>>2]|0)*160|0)+4>>2]=c[k>>2];c[122352+((c[h>>2]|0)*4960|0)+((c[j>>2]|0)*160|0)+64>>2]=c[k+4>>2];c[122352+((c[h>>2]|0)*4960|0)+((c[j>>2]|0)*160|0)+40>>2]=c[k+8>>2];c[122352+((c[h>>2]|0)*4960|0)+((c[j>>2]|0)*160|0)+68>>2]=c[k+12>>2];c[122352+((c[h>>2]|0)*4960|0)+((c[j>>2]|0)*160|0)+44>>2]=c[k+16>>2];c[122352+((c[h>>2]|0)*4960|0)+((c[j>>2]|0)*160|0)+48>>2]=c[k+20>>2];if((c[122352+((c[h>>2]|0)*4960|0)+((c[j>>2]|0)*160|0)+68>>2]|0)==1){x=122352+((c[h>>2]|0)*4960|0)+((c[j>>2]|0)*160|0)+4|0;c[x>>2]=(c[x>>2]|0)+4}break};case 54:{c[122352+((c[h>>2]|0)*4960|0)+((c[j>>2]|0)*160|0)+4>>2]=c[k>>2];if((D|0)>4){c[122352+((c[h>>2]|0)*4960|0)+((c[j>>2]|0)*160|0)+44>>2]=c[k+4>>2]}else{c[122352+((c[h>>2]|0)*4960|0)+((c[j>>2]|0)*160|0)+44>>2]=0}C=189;break};case 61:{C=189;break};case 13:{c[122352+((c[h>>2]|0)*4960|0)+((c[j>>2]|0)*160|0)+64>>2]=c[k+4>>2];c[122352+((c[h>>2]|0)*4960|0)+((c[j>>2]|0)*160|0)+76>>2]=c[k+8>>2];C=191;break};case 26:case 11:{C=191;break};default:{Nb(c[n>>2]|0,12224,(z=i,i=i+16|0,c[z>>2]=82256+((c[16614]|0)*292|0),c[z+8>>2]=b,z)|0)|0;i=z}}if((C|0)==189){C=0;c[122352+((c[h>>2]|0)*4960|0)+((c[j>>2]|0)*160|0)+8>>2]=c[k>>2]}else if((C|0)==191){C=0;c[122352+((c[h>>2]|0)*4960|0)+((c[j>>2]|0)*160|0)+8>>2]=c[k>>2]}}}while(0);if((C|0)==178){C=0;Nb(c[n>>2]|0,12384,(z=i,i=i+16|0,c[z>>2]=82256+((c[16614]|0)*292|0),c[z+8>>2]=b,z)|0)|0;i=z}}}while(0);if((C|0)==175){C=0;Nb(c[n>>2]|0,12696,(z=i,i=i+16|0,c[z>>2]=82256+((c[16614]|0)*292|0),c[z+8>>2]=b,z)|0)|0;i=z}}}D=m-1|0;m=D;if((D|0)<=0){v=2}}}}}}}}}}}else{C=29}}while(0);if((C|0)==29){C=0;if((w|0)==1){w=3}else{if((p|0)==1){p=3}else{if((q|0)==1){q=0}else{if((r|0)==1){r=3}else{if((s|0)==1){s=3;Nb(c[n>>2]|0,14672,(z=i,i=i+16|0,c[z>>2]=82256+((c[16614]|0)*292|0),c[z+8>>2]=b,z)|0)|0;i=z}else{if((t|0)==1){t=3}else{if((u|0)==1){u=3;e=c[26699]|0;Nb(c[n>>2]|0,14504,(z=i,i=i+24|0,c[z>>2]=82256+((c[16614]|0)*292|0),c[z+8>>2]=b,c[z+16>>2]=e,z)|0)|0;i=z}else{if((v|0)==1){v=3;if((o|0)!=-1){Nb(c[n>>2]|0,14232,(z=i,i=i+24|0,c[z>>2]=82256+((c[16614]|0)*292|0),c[z+8>>2]=b,c[z+16>>2]=o,z)|0)|0;i=z}}}}}}}}}if((Mf(g|0,16296,22)|0)!=0){if((Mf(g|0,16080,7)|0)!=0){if((Mf(g|0,15688,8)|0)!=0){if((Mf(g|0,15584,6)|0)!=0){if((Mf(g|0,15424,8)|0)!=0){if((Mf(g|0,15272,6)|0)!=0){if((Mf(g|0,15104,12)|0)!=0){if((Mf(g|0,15952,13)|0)!=0){if((Mf(g|0,14936,5)|0)==0){C=90;break}}else{if((w|0)==0){w=1}}}else{if((v|0)==0){v=1;m=-1;o=-1}}}else{if((u|0)==0){u=1;c[j>>2]=0}}}else{if((t|0)==0){t=1}}}else{if((s|0)==0){s=1}}}else{if((r|0)==0){r=1}}}else{if((q|0)==0){q=1}else{if((q|0)==2){C=62;break}}}}else{if((p|0)==0){p=1}}}}ma(y|0)|0;do{if((q|0)==2){if((s|0)!=2){break}if((u|0)!=2){break}A=0;B=A;i=d;return B|0}}while(0);Nb(c[n>>2]|0,12056,(z=i,i=i+16|0,c[z>>2]=82256+((c[16614]|0)*292|0),c[z+8>>2]=l,z)|0)|0;i=z;if((q|0)!=2){Nb(c[n>>2]|0,11896,(z=i,i=i+1|0,i=i+7&-8,c[z>>2]=0,z)|0)|0;i=z}else{if((s|0)==0){Nb(c[n>>2]|0,11688,(z=i,i=i+1|0,i=i+7&-8,c[z>>2]=0,z)|0)|0;i=z}else{if((s|0)==3){Nb(c[n>>2]|0,11536,(z=i,i=i+1|0,i=i+7&-8,c[z>>2]=0,z)|0)|0;i=z}}if((u|0)==0){Nb(c[n>>2]|0,11376,(z=i,i=i+1|0,i=i+7&-8,c[z>>2]=0,z)|0)|0;i=z}else{if((u|0)==3){Nb(c[n>>2]|0,11256,(z=i,i=i+1|0,i=i+7&-8,c[z>>2]=0,z)|0)|0;i=z}}}A=1;B=A;i=d;return B|0}function de(){var b=0,d=0,e=0,f=0,g=0;b=i;i=i+512|0;d=b|0;e=b+256|0;a[d|0]=0;Qf(d|0,wb(16040)|0)|0;Rf(d|0,26104)|0;if((a[d|0]|0)==0){i=b;return}f=Ua(d|0,18392)|0;g=f;if((f|0)==0){Nb(c[n>>2]|0,15344,(f=i,i=i+8|0,c[f>>2]=d,f)|0)|0;i=f;Qf(e|0,wb(16040)|0)|0;Rf(e|0,13552)|0;sb(e|0,493)|0;Rf(e|0,11616)|0;sb(e|0,493)|0;e=Ua(d|0,10296)|0;g=e;if((e|0)==0){Nb(c[n>>2]|0,9240,(f=i,i=i+8|0,c[f>>2]=d,f)|0)|0;i=f}else{Nb(g|0,8336,(f=i,i=i+8|0,c[f>>2]=6944,f)|0)|0;i=f;ma(g|0)|0}}else{ma(g|0)|0}i=b;return}function ee(){var a=0,b=0,d=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0;a=i;i=i+256|0;b=a|0;d=0;e=0;while(1){if((e|0)>=2){break}if((e|0)==0){Qf(b|0,28264)|0}else{if((e|0)==1){Qf(b|0,wb(16040)|0)|0;Rf(b|0,27496)|0}}f=Ga(b|0)|0;g=f;if((f|0)!=0){while(1){f=Na(g|0)|0;h=f;if((f|0)==0){break}if((Ca(h+11|0,26736)|0)!=0){if((c[26696]|0)<84){if((Lf(h+11|0,25872)|0)==0){d=1}else{Qf(82256+((c[26696]|0)*292|0)|0,b|0)|0;Rf(82256+((c[26696]|0)*292|0)|0,25144)|0;Rf(82256+((c[26696]|0)*292|0)|0,h+11|0)|0;c[26696]=(c[26696]|0)+1;c[28580]=(c[28580]|0)+1}}}}$b(g|0)|0}else{Nb(c[n>>2]|0,24280,(j=i,i=i+8|0,c[j>>2]=b,j)|0)|0;i=j}e=e+1|0}if((d|0)!=0){k=0;l=k;i=a;return l|0}else{Nb(c[n>>2]|0,23432,(j=i,i=i+8|0,c[j>>2]=22520,j)|0)|0;i=j;k=1;l=k;i=a;return l|0}return 0}function fe(){var b=0,d=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0;b=i;i=i+1280|0;d=b|0;e=b+1024|0;f=0;while(1){if((f|0)>=(c[26696]|0)){break}Qf(e|0,82256+(f*292|0)|0)|0;g=Ua(e|0,18392)|0;h=g;if((g|0)==0){Nb(c[n>>2]|0,21488,(j=i,i=i+8|0,c[j>>2]=e,j)|0)|0;i=j;Qf(82512+(f*292|0)|0,20432)|0;c[82532+(f*292|0)>>2]=1;c[82536+(f*292|0)>>2]=1;c[82540+(f*292|0)>>2]=1;c[82544+(f*292|0)>>2]=0}else{g=0;k=0;while(1){if((Ra(d|0,1024,h|0)|0)==0){break}if((Mf(d|0,19840,6)|0)!=0){if((Mf(d|0,19232,12)|0)==0){Ra(d|0,1024,h|0)|0;Hb(d|0,18640,(j=i,i=i+8|0,c[j>>2]=82532+(f*292|0),j)|0)|0;i=j;g=1}}else{Ra(d|0,1024,h|0)|0;l=(Of(d|0)|0)-1|0;while(1){if((l|0)<0){break}if((a[d+l|0]|0)==13){m=12}else{if((a[d+l|0]|0)==10){m=12}}if((m|0)==12){m=0;a[d+l|0]=0}l=l-1|0}Pf(82512+(f*292|0)|0,d|0,20)|0;a[82531+(f*292|0)|0]=0;k=1}if((k|0)!=0){if((g|0)!=0){m=21;break}}}if((m|0)==21){m=0}if((k|0)!=0){if((g|0)==0){m=25}}else{m=25}if((m|0)==25){m=0;if((k|0)==0){Nb(c[n>>2]|0,18088,(j=i,i=i+8|0,c[j>>2]=e,j)|0)|0;i=j;Qf(82512+(f*292|0)|0,20432)|0}if((g|0)==0){Nb(c[n>>2]|0,17512,(j=i,i=i+8|0,c[j>>2]=e,j)|0)|0;i=j;c[82532+(f*292|0)>>2]=1}}c[82536+(f*292|0)>>2]=1;c[82540+(f*292|0)>>2]=1;if((f|0)!=0){c[82544+(f*292|0)>>2]=0}l=c[82532+(f*292|0)>>2]|0;Nb(c[n>>2]|0,17e3,(j=i,i=i+16|0,c[j>>2]=82512+(f*292|0),c[j+8>>2]=l,j)|0)|0;i=j;ma(h|0)|0}f=f+1|0}i=b;return}function ge(){var a=0,b=0,d=0,e=0;a=i;i=i+296|0;b=a|0;do{d=0;e=0;while(1){if((e|0)>=((c[28580]|0)-1|0)){break}if((Lf(82512+(e*292|0)|0,82512+((e+1|0)*292|0)|0)|0)>0){d=1;Nf(b|0,82256+((e+1|0)*292|0)|0,292)|0;Nf(82256+((e+1|0)*292|0)|0,82256+(e*292|0)|0,292)|0;Nf(82256+(e*292|0)|0,b|0,292)|0}e=e+1|0}}while((d|0)!=0);e=0;while(1){if((e|0)>=(c[28580]|0)){break}if((c[82544+(e*292|0)>>2]|0)!=0){c[16614]=e}e=e+1|0}i=a;return}function he(a){a=a|0;var b=0,d=0,e=0;b=i;d=a;switch(d<<24>>24|0){case 88:{e=69;break};case 107:{e=68;break};case 46:{e=0;break};case 82:{e=1;break};case 79:{e=2;break};case 81:{e=3;break};case 84:{e=4;break};case 39:{e=5;break};case 35:{e=6;break};case 37:{e=7;break};case 66:{e=70;break};case 98:{e=8;break};case 68:{e=9;break};case 63:{e=10;break};case 64:{e=11;break};case 94:{e=13;break};case 33:{e=15;break};case 72:{e=24;break};case 111:{e=25;break};case 42:{e=26;break};case 86:{e=28;break};case 38:{e=40;break};case 125:{e=50;break};case 77:{e=54;break};case 45:{e=59;break};case 126:{e=60;break};case 61:{e=61;break};case 113:{e=63;break};case 112:{e=64;break};case 80:{e=65;break};case 115:{e=66;break};case 83:{e=67;break};case 43:{e=0;break};case 76:{e=30;break};case 108:{e=32;break};default:{Nb(c[n>>2]|0,11064,(a=i,i=i+8|0,c[a>>2]=d<<24>>24,a)|0)|0;i=a;e=0}}i=b;return e|0}function ie(){var b=0,d=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0;b=i;i=i+256|0;d=b|0;e=0;f=Ga(14944)|0;g=f;if((f|0)==0){Nb(c[n>>2]|0,25744,(h=i,i=i+8|0,c[h>>2]=14944,h)|0)|0;i=h;j=1;k=j;i=b;return k|0}while(1){f=Na(g|0)|0;l=f;if((f|0)==0){break}do{if((Lf(l+11|0,17984)|0)!=0){if((Lf(l+11|0,15248)|0)==0){break}if((c[20562]|0)<12){Qf(d|0,13384)|0;Rf(d|0,l+11|0)|0;Rf(d|0,11504)|0;Rf(d|0,10224)|0;f=Ua(d|0,9208)|0;m=f;if((f|0)!=0){if((Lf(l+11|0,8304)|0)!=0){Pf(79608+((c[20562]|0)*220|0)|0,l+11|0,100)|0;a[79707+((c[20562]|0)*220|0)|0]=0;c[20562]=(c[20562]|0)+1}else{e=1}ma(m|0)|0}}}}while(0)}$b(g|0)|0;if((e|0)!=0){j=0;k=j;i=b;return k|0}else{Nb(c[n>>2]|0,6880,(h=i,i=i+8|0,c[h>>2]=28208,h)|0)|0;i=h;j=1;k=j;i=b;return k|0}return 0}function je(){var a=0,b=0,d=0,e=0;a=i;i=i+224|0;b=a|0;do{d=0;e=0;while(1){if((e|0)>=((c[20562]|0)-1|0)){break}if((Lf(79708+(e*220|0)|0,79708+((e+1|0)*220|0)|0)|0)>0){d=1;Nf(b|0,79608+((e+1|0)*220|0)|0,220)|0;Nf(79608+((e+1|0)*220|0)|0,79608+(e*220|0)|0,220)|0;Nf(79608+(e*220|0)|0,b|0,220)|0;if((c[16616]|0)==(e+1|0)){c[16616]=e}else{if((c[16616]|0)==(e|0)){c[16616]=e+1}}}e=e+1|0}}while((d|0)!=0);i=a;return}function ke(){var b=0,d=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,o=0;b=i;i=i+1280|0;d=b|0;e=b+256|0;f=0;g=0;h=0;j=0;while(1){if((j|0)>=(c[20562]|0)){break}f=0;g=0;h=0;Qf(79708+(j*220|0)|0,27456)|0;Qf(79768+(j*220|0)|0,27456)|0;Qf(d|0,13384)|0;Rf(d|0,79608+(j*220|0)|0)|0;Rf(d|0,11504)|0;Rf(d|0,10224)|0;k=Ua(d|0,9208)|0;l=k;if((k|0)==0){Nb(c[n>>2]|0,26680,(m=i,i=i+8|0,c[m>>2]=d,m)|0)|0;i=m}else{while(1){if((Ra(e|0,1024,l|0)|0)==0){break}f=f+1|0;k=(Of(e|0)|0)-1|0;while(1){if((k|0)<0){break}if((a[e+k|0]|0)==13){o=11}else{if((a[e+k|0]|0)==10){o=11}}if((o|0)==11){o=0;a[e+k|0]=0}k=k-1|0}do{if((Mf(e|0,25840,6)|0)!=0){if((Mf(e|0,25112,8)|0)==0){o=16;break}if((g|0)==1){if((Of(e|0)|0)!=0){Pf(79708+(j*220|0)|0,e|0,60)|0;a[79767+(j*220|0)|0]=0}g=2}else{if((h|0)==1){if((Of(e|0)|0)!=0){Pf(79768+(j*220|0)|0,e|0,60)|0;a[79827+(j*220|0)|0]=0}h=2}}}else{o=16}}while(0);if((o|0)==16){o=0;if((g|0)==1){g=3}else{if((h|0)==1){h=3}}if((Mf(e|0,25840,6)|0)!=0){if((Mf(e|0,25112,8)|0)==0){if((h|0)==0){h=1}}}else{if((g|0)==0){g=1}}}}Nb(c[n>>2]|0,24232,(m=i,i=i+8|0,c[m>>2]=79608+(j*220|0),m)|0)|0;i=m;ma(l|0)|0}j=j+1|0}i=b;return}function le(){var b=0,d=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0;b=i;i=i+14240|0;d=b|0;e=b+256|0;f=b+1280|0;g=0;h=0;j=0;while(1){if((j|0)>=180){break}c[f+(j*72|0)+60>>2]=0;c[f+(j*72|0)+68>>2]=1;j=j+1|0}h=-1;k=h+1|0;h=k;Qf(f+(k*72|0)|0,23376)|0;c[f+(h*72|0)+64>>2]=43328;c[f+(h*72|0)+68>>2]=4;k=h+1|0;h=k;Qf(f+(k*72|0)|0,22488)|0;c[f+(h*72|0)+64>>2]=45032;c[f+(h*72|0)+68>>2]=7;k=h+1|0;h=k;Qf(f+(k*72|0)|0,21456)|0;c[f+(h*72|0)+64>>2]=44432;c[f+(h*72|0)+68>>2]=6;k=h+1|0;h=k;Qf(f+(k*72|0)|0,20408)|0;c[f+(h*72|0)+64>>2]=43728;c[f+(h*72|0)+68>>2]=7;k=h+1|0;h=k;Qf(f+(k*72|0)|0,19824)|0;c[f+(h*72|0)+64>>2]=33864;k=h+1|0;h=k;Qf(f+(k*72|0)|0,19208)|0;c[f+(h*72|0)+64>>2]=45736;c[f+(h*72|0)+68>>2]=3;k=h+1|0;h=k;Qf(f+(k*72|0)|0,18616)|0;c[f+(h*72|0)+64>>2]=48152;c[f+(h*72|0)+68>>2]=12;k=h+1|0;h=k;Qf(f+(k*72|0)|0,18064)|0;c[f+(h*72|0)+64>>2]=47448;c[f+(h*72|0)+68>>2]=7;k=h+1|0;h=k;Qf(f+(k*72|0)|0,17488)|0;c[f+(h*72|0)+64>>2]=46744;c[f+(h*72|0)+68>>2]=7;k=h+1|0;h=k;Qf(f+(k*72|0)|0,16976)|0;c[f+(h*72|0)+64>>2]=46040;c[f+(h*72|0)+68>>2]=7;k=h+1|0;h=k;Qf(f+(k*72|0)|0,16424)|0;c[f+(h*72|0)+64>>2]=57144;k=h+1|0;h=k;Qf(f+(k*72|0)|0,16280)|0;c[f+(h*72|0)+64>>2]=53816;k=h+1|0;h=k;Qf(f+(k*72|0)|0,16064)|0;c[f+(h*72|0)+64>>2]=56104;k=h+1|0;h=k;Qf(f+(k*72|0)|0,15928)|0;c[f+(h*72|0)+64>>2]=32664;c[f+(h*72|0)+68>>2]=12;k=h+1|0;h=k;Qf(f+(k*72|0)|0,15672)|0;c[f+(h*72|0)+64>>2]=51840;k=h+1|0;h=k;Qf(f+(k*72|0)|0,15560)|0;c[f+(h*72|0)+64>>2]=55896;k=h+1|0;h=k;Qf(f+(k*72|0)|0,15408)|0;c[f+(h*72|0)+64>>2]=56e3;k=h+1|0;h=k;Qf(f+(k*72|0)|0,15256)|0;c[f+(h*72|0)+64>>2]=53296;k=h+1|0;h=k;Qf(f+(k*72|0)|0,15088)|0;c[f+(h*72|0)+64>>2]=50592;k=h+1|0;h=k;Qf(f+(k*72|0)|0,14912)|0;c[f+(h*72|0)+64>>2]=55168;k=h+1|0;h=k;Qf(f+(k*72|0)|0,14656)|0;c[f+(h*72|0)+64>>2]=56520;k=h+1|0;h=k;Qf(f+(k*72|0)|0,14488)|0;c[f+(h*72|0)+64>>2]=55584;k=h+1|0;h=k;Qf(f+(k*72|0)|0,14208)|0;c[f+(h*72|0)+64>>2]=56728;k=h+1|0;h=k;Qf(f+(k*72|0)|0,14120)|0;c[f+(h*72|0)+64>>2]=53400;k=h+1|0;h=k;Qf(f+(k*72|0)|0,13976)|0;c[f+(h*72|0)+64>>2]=55376;k=h+1|0;h=k;Qf(f+(k*72|0)|0,13864)|0;c[f+(h*72|0)+64>>2]=55064;k=h+1|0;h=k;Qf(f+(k*72|0)|0,13616)|0;c[f+(h*72|0)+64>>2]=50072;k=h+1|0;h=k;Qf(f+(k*72|0)|0,13400)|0;c[f+(h*72|0)+64>>2]=51736;k=h+1|0;h=k;Qf(f+(k*72|0)|0,13152)|0;c[f+(h*72|0)+64>>2]=53088;k=h+1|0;h=k;Qf(f+(k*72|0)|0,13032)|0;c[f+(h*72|0)+64>>2]=53192;k=h+1|0;h=k;Qf(f+(k*72|0)|0,12840)|0;c[f+(h*72|0)+64>>2]=54128;k=h+1|0;h=k;Qf(f+(k*72|0)|0,12672)|0;c[f+(h*72|0)+64>>2]=53920;k=h+1|0;h=k;Qf(f+(k*72|0)|0,12360)|0;c[f+(h*72|0)+64>>2]=54232;k=h+1|0;h=k;Qf(f+(k*72|0)|0,12200)|0;c[f+(h*72|0)+64>>2]=54440;k=h+1|0;h=k;Qf(f+(k*72|0)|0,12040)|0;c[f+(h*72|0)+64>>2]=54648;k=h+1|0;h=k;Qf(f+(k*72|0)|0,11872)|0;c[f+(h*72|0)+64>>2]=54544;k=h+1|0;h=k;Qf(f+(k*72|0)|0,11672)|0;c[f+(h*72|0)+64>>2]=54336;k=h+1|0;h=k;Qf(f+(k*72|0)|0,11512)|0;c[f+(h*72|0)+64>>2]=54024;k=h+1|0;h=k;Qf(f+(k*72|0)|0,11360)|0;c[f+(h*72|0)+64>>2]=50904;k=h+1|0;h=k;Qf(f+(k*72|0)|0,11232)|0;c[f+(h*72|0)+64>>2]=51216;k=h+1|0;h=k;Qf(f+(k*72|0)|0,11040)|0;c[f+(h*72|0)+64>>2]=51112;k=h+1|0;h=k;Qf(f+(k*72|0)|0,10928)|0;c[f+(h*72|0)+64>>2]=51008;k=h+1|0;h=k;Qf(f+(k*72|0)|0,10728)|0;c[f+(h*72|0)+64>>2]=52048;k=h+1|0;h=k;Qf(f+(k*72|0)|0,10624)|0;c[f+(h*72|0)+64>>2]=56832;k=h+1|0;h=k;Qf(f+(k*72|0)|0,10520)|0;c[f+(h*72|0)+64>>2]=55792;k=h+1|0;h=k;Qf(f+(k*72|0)|0,10432)|0;c[f+(h*72|0)+64>>2]=52984;k=h+1|0;h=k;Qf(f+(k*72|0)|0,10352)|0;c[f+(h*72|0)+64>>2]=52464;k=h+1|0;h=k;Qf(f+(k*72|0)|0,10240)|0;c[f+(h*72|0)+64>>2]=53712;k=h+1|0;h=k;Qf(f+(k*72|0)|0,10120)|0;c[f+(h*72|0)+64>>2]=52360;k=h+1|0;h=k;Qf(f+(k*72|0)|0,10048)|0;c[f+(h*72|0)+64>>2]=53608;k=h+1|0;h=k;Qf(f+(k*72|0)|0,9936)|0;c[f+(h*72|0)+64>>2]=50176;k=h+1|0;h=k;Qf(f+(k*72|0)|0,9848)|0;c[f+(h*72|0)+64>>2]=55688;k=h+1|0;h=k;Qf(f+(k*72|0)|0,9656)|0;c[f+(h*72|0)+64>>2]=56208;k=h+1|0;h=k;Qf(f+(k*72|0)|0,9576)|0;c[f+(h*72|0)+64>>2]=52776;k=h+1|0;h=k;Qf(f+(k*72|0)|0,9472)|0;c[f+(h*72|0)+64>>2]=52880;k=h+1|0;h=k;Qf(f+(k*72|0)|0,9416)|0;c[f+(h*72|0)+64>>2]=49656;k=h+1|0;h=k;Qf(f+(k*72|0)|0,9320)|0;c[f+(h*72|0)+64>>2]=49760;k=h+1|0;h=k;Qf(f+(k*72|0)|0,9216)|0;c[f+(h*72|0)+64>>2]=54752;k=h+1|0;h=k;Qf(f+(k*72|0)|0,9096)|0;c[f+(h*72|0)+64>>2]=51944;k=h+1|0;h=k;Qf(f+(k*72|0)|0,9032)|0;c[f+(h*72|0)+64>>2]=50280;k=h+1|0;h=k;Qf(f+(k*72|0)|0,8960)|0;c[f+(h*72|0)+64>>2]=51424;k=h+1|0;h=k;Qf(f+(k*72|0)|0,8904)|0;c[f+(h*72|0)+64>>2]=51528;k=h+1|0;h=k;Qf(f+(k*72|0)|0,8752)|0;c[f+(h*72|0)+64>>2]=52256;k=h+1|0;h=k;Qf(f+(k*72|0)|0,8592)|0;c[f+(h*72|0)+64>>2]=50384;k=h+1|0;h=k;Qf(f+(k*72|0)|0,8520)|0;c[f+(h*72|0)+64>>2]=56416;k=h+1|0;h=k;Qf(f+(k*72|0)|0,8464)|0;c[f+(h*72|0)+64>>2]=56312;k=h+1|0;h=k;Qf(f+(k*72|0)|0,8376)|0;c[f+(h*72|0)+64>>2]=52672;k=h+1|0;h=k;Qf(f+(k*72|0)|0,8312)|0;c[f+(h*72|0)+64>>2]=49968;k=h+1|0;h=k;Qf(f+(k*72|0)|0,8256)|0;c[f+(h*72|0)+64>>2]=51632;k=h+1|0;h=k;Qf(f+(k*72|0)|0,8208)|0;c[f+(h*72|0)+64>>2]=50488;k=h+1|0;h=k;Qf(f+(k*72|0)|0,8136)|0;c[f+(h*72|0)+64>>2]=51320;k=h+1|0;h=k;Qf(f+(k*72|0)|0,8080)|0;c[f+(h*72|0)+64>>2]=50800;k=h+1|0;h=k;Qf(f+(k*72|0)|0,7968)|0;c[f+(h*72|0)+64>>2]=55272;k=h+1|0;h=k;Qf(f+(k*72|0)|0,7912)|0;c[f+(h*72|0)+64>>2]=55480;k=h+1|0;h=k;Qf(f+(k*72|0)|0,7856)|0;c[f+(h*72|0)+64>>2]=52152;k=h+1|0;h=k;Qf(f+(k*72|0)|0,7808)|0;c[f+(h*72|0)+64>>2]=54856;k=h+1|0;h=k;Qf(f+(k*72|0)|0,7728)|0;c[f+(h*72|0)+64>>2]=50696;k=h+1|0;h=k;Qf(f+(k*72|0)|0,6920)|0;c[f+(h*72|0)+64>>2]=57040;k=h+1|0;h=k;Qf(f+(k*72|0)|0,6816)|0;c[f+(h*72|0)+64>>2]=54960;k=h+1|0;h=k;Qf(f+(k*72|0)|0,6752)|0;c[f+(h*72|0)+64>>2]=49352;c[f+(h*72|0)+68>>2]=3;k=h+1|0;h=k;Qf(f+(k*72|0)|0,6696)|0;c[f+(h*72|0)+64>>2]=49864;k=h+1|0;h=k;Qf(f+(k*72|0)|0,6624)|0;c[f+(h*72|0)+64>>2]=56936;k=h+1|0;h=k;Qf(f+(k*72|0)|0,6488)|0;c[f+(h*72|0)+64>>2]=56624;k=h+1|0;h=k;Qf(f+(k*72|0)|0,6400)|0;c[f+(h*72|0)+64>>2]=52568;k=h+1|0;h=k;Qf(f+(k*72|0)|0,28464)|0;c[f+(h*72|0)+64>>2]=53504;k=h+1|0;h=k;Qf(f+(k*72|0)|0,28408)|0;c[f+(h*72|0)+64>>2]=32560;k=h+1|0;h=k;Qf(f+(k*72|0)|0,28312)|0;c[f+(h*72|0)+64>>2]=32456;k=h+1|0;h=k;Qf(f+(k*72|0)|0,28232)|0;c[f+(h*72|0)+64>>2]=32352;k=h+1|0;h=k;Qf(f+(k*72|0)|0,28152)|0;c[f+(h*72|0)+64>>2]=32144;k=h+1|0;h=k;Qf(f+(k*72|0)|0,28096)|0;c[f+(h*72|0)+64>>2]=32248;k=h+1|0;h=k;Qf(f+(k*72|0)|0,28008)|0;c[f+(h*72|0)+64>>2]=43120;k=h+1|0;h=k;Qf(f+(k*72|0)|0,27960)|0;c[f+(h*72|0)+64>>2]=39272;k=h+1|0;h=k;Qf(f+(k*72|0)|0,27840)|0;c[f+(h*72|0)+64>>2]=42808;k=h+1|0;h=k;Qf(f+(k*72|0)|0,27768)|0;c[f+(h*72|0)+64>>2]=39792;k=h+1|0;h=k;Qf(f+(k*72|0)|0,27712)|0;c[f+(h*72|0)+64>>2]=40832;k=h+1|0;h=k;Qf(f+(k*72|0)|0,27656)|0;c[f+(h*72|0)+64>>2]=42288;k=h+1|0;h=k;Qf(f+(k*72|0)|0,27560)|0;c[f+(h*72|0)+64>>2]=39480;k=h+1|0;h=k;Qf(f+(k*72|0)|0,27464)|0;c[f+(h*72|0)+64>>2]=42600;k=h+1|0;h=k;Qf(f+(k*72|0)|0,27408)|0;c[f+(h*72|0)+64>>2]=41768;k=h+1|0;h=k;Qf(f+(k*72|0)|0,27352)|0;c[f+(h*72|0)+64>>2]=39064;k=h+1|0;h=k;Qf(f+(k*72|0)|0,27280)|0;c[f+(h*72|0)+64>>2]=42496;k=h+1|0;h=k;Qf(f+(k*72|0)|0,27208)|0;c[f+(h*72|0)+64>>2]=39688;k=h+1|0;h=k;Qf(f+(k*72|0)|0,27064)|0;c[f+(h*72|0)+64>>2]=41144;k=h+1|0;h=k;Qf(f+(k*72|0)|0,27e3)|0;c[f+(h*72|0)+64>>2]=41872;k=h+1|0;h=k;Qf(f+(k*72|0)|0,26936)|0;c[f+(h*72|0)+64>>2]=41976;k=h+1|0;h=k;Qf(f+(k*72|0)|0,26880)|0;c[f+(h*72|0)+64>>2]=42392;k=h+1|0;h=k;Qf(f+(k*72|0)|0,26792)|0;c[f+(h*72|0)+64>>2]=40624;k=h+1|0;h=k;Qf(f+(k*72|0)|0,26712)|0;c[f+(h*72|0)+64>>2]=40728;k=h+1|0;h=k;Qf(f+(k*72|0)|0,26576)|0;c[f+(h*72|0)+64>>2]=40936;k=h+1|0;h=k;Qf(f+(k*72|0)|0,26512)|0;c[f+(h*72|0)+64>>2]=42912;k=h+1|0;h=k;Qf(f+(k*72|0)|0,26424)|0;c[f+(h*72|0)+64>>2]=39584;k=h+1|0;h=k;Qf(f+(k*72|0)|0,26352)|0;c[f+(h*72|0)+64>>2]=4e4;k=h+1|0;h=k;Qf(f+(k*72|0)|0,26208)|0;c[f+(h*72|0)+64>>2]=41352;k=h+1|0;h=k;Qf(f+(k*72|0)|0,26072)|0;c[f+(h*72|0)+64>>2]=40208;k=h+1|0;h=k;Qf(f+(k*72|0)|0,26032)|0;c[f+(h*72|0)+64>>2]=41560;k=h+1|0;h=k;Qf(f+(k*72|0)|0,25976)|0;c[f+(h*72|0)+64>>2]=40312;k=h+1|0;h=k;Qf(f+(k*72|0)|0,25912)|0;c[f+(h*72|0)+64>>2]=41664;k=h+1|0;h=k;Qf(f+(k*72|0)|0,25848)|0;c[f+(h*72|0)+64>>2]=40104;k=h+1|0;h=k;Qf(f+(k*72|0)|0,25808)|0;c[f+(h*72|0)+64>>2]=41456;k=h+1|0;h=k;Qf(f+(k*72|0)|0,25720)|0;c[f+(h*72|0)+64>>2]=41248;k=h+1|0;h=k;Qf(f+(k*72|0)|0,25648)|0;c[f+(h*72|0)+64>>2]=39896;k=h+1|0;h=k;Qf(f+(k*72|0)|0,25608)|0;c[f+(h*72|0)+64>>2]=43224;k=h+1|0;h=k;Qf(f+(k*72|0)|0,25512)|0;c[f+(h*72|0)+64>>2]=42704;k=h+1|0;h=k;Qf(f+(k*72|0)|0,25424)|0;c[f+(h*72|0)+64>>2]=42080;k=h+1|0;h=k;Qf(f+(k*72|0)|0,25360)|0;c[f+(h*72|0)+64>>2]=40416;k=h+1|0;h=k;Qf(f+(k*72|0)|0,25304)|0;c[f+(h*72|0)+64>>2]=39376;k=h+1|0;h=k;Qf(f+(k*72|0)|0,25200)|0;c[f+(h*72|0)+64>>2]=43016;k=h+1|0;h=k;Qf(f+(k*72|0)|0,25128)|0;c[f+(h*72|0)+64>>2]=41040;k=h+1|0;h=k;Qf(f+(k*72|0)|0,25056)|0;c[f+(h*72|0)+64>>2]=40520;k=h+1|0;h=k;Qf(f+(k*72|0)|0,25008)|0;c[f+(h*72|0)+64>>2]=42184;k=h+1|0;h=k;Qf(f+(k*72|0)|0,24936)|0;c[f+(h*72|0)+64>>2]=39168;k=h+1|0;h=k;Qf(f+(k*72|0)|0,24872)|0;c[f+(h*72|0)+64>>2]=36672;k=h+1|0;h=k;Qf(f+(k*72|0)|0,24744)|0;c[f+(h*72|0)+64>>2]=34384;k=h+1|0;h=k;Qf(f+(k*72|0)|0,24592)|0;c[f+(h*72|0)+64>>2]=35112;k=h+1|0;h=k;Qf(f+(k*72|0)|0,24504)|0;c[f+(h*72|0)+64>>2]=35216;k=h+1|0;h=k;Qf(f+(k*72|0)|0,24440)|0;c[f+(h*72|0)+64>>2]=37920;k=h+1|0;h=k;Qf(f+(k*72|0)|0,24368)|0;c[f+(h*72|0)+64>>2]=38440;k=h+1|0;h=k;Qf(f+(k*72|0)|0,24256)|0;c[f+(h*72|0)+64>>2]=38336;k=h+1|0;h=k;Qf(f+(k*72|0)|0,24160)|0;c[f+(h*72|0)+64>>2]=37192;k=h+1|0;h=k;Qf(f+(k*72|0)|0,24104)|0;c[f+(h*72|0)+64>>2]=38232;k=h+1|0;h=k;Qf(f+(k*72|0)|0,24016)|0;c[f+(h*72|0)+64>>2]=37088;k=h+1|0;h=k;Qf(f+(k*72|0)|0,23944)|0;c[f+(h*72|0)+64>>2]=38024;k=h+1|0;h=k;Qf(f+(k*72|0)|0,23808)|0;c[f+(h*72|0)+64>>2]=36464;k=h+1|0;h=k;Qf(f+(k*72|0)|0,23736)|0;c[f+(h*72|0)+64>>2]=36776;k=h+1|0;h=k;Qf(f+(k*72|0)|0,23672)|0;c[f+(h*72|0)+64>>2]=34488;k=h+1|0;h=k;Qf(f+(k*72|0)|0,23608)|0;c[f+(h*72|0)+64>>2]=34176;k=h+1|0;h=k;Qf(f+(k*72|0)|0,23520)|0;c[f+(h*72|0)+64>>2]=38648;k=h+1|0;h=k;Qf(f+(k*72|0)|0,23400)|0;c[f+(h*72|0)+64>>2]=34280;k=h+1|0;h=k;Qf(f+(k*72|0)|0,23304)|0;c[f+(h*72|0)+64>>2]=36568;k=h+1|0;h=k;Qf(f+(k*72|0)|0,23232)|0;c[f+(h*72|0)+64>>2]=35736;k=h+1|0;h=k;Qf(f+(k*72|0)|0,23160)|0;c[f+(h*72|0)+64>>2]=38960;k=h+1|0;h=k;Qf(f+(k*72|0)|0,23088)|0;c[f+(h*72|0)+64>>2]=38752;k=h+1|0;h=k;Qf(f+(k*72|0)|0,22952)|0;c[f+(h*72|0)+64>>2]=38856;k=h+1|0;h=k;Qf(f+(k*72|0)|0,22856)|0;c[f+(h*72|0)+64>>2]=36360;k=h+1|0;h=k;Qf(f+(k*72|0)|0,22776)|0;c[f+(h*72|0)+64>>2]=38128;k=h+1|0;h=k;Qf(f+(k*72|0)|0,22712)|0;c[f+(h*72|0)+64>>2]=33968;k=h+1|0;h=k;Qf(f+(k*72|0)|0,22640)|0;c[f+(h*72|0)+64>>2]=36256;k=h+1|0;h=k;Qf(f+(k*72|0)|0,22552)|0;c[f+(h*72|0)+64>>2]=38544;k=h+1|0;h=k;Qf(f+(k*72|0)|0,22424)|0;c[f+(h*72|0)+64>>2]=35008;k=h+1|0;h=k;Qf(f+(k*72|0)|0,22352)|0;c[f+(h*72|0)+64>>2]=36880;k=h+1|0;h=k;Qf(f+(k*72|0)|0,22264)|0;c[f+(h*72|0)+64>>2]=35632;k=h+1|0;h=k;Qf(f+(k*72|0)|0,22168)|0;c[f+(h*72|0)+64>>2]=34800;k=h+1|0;h=k;Qf(f+(k*72|0)|0,22064)|0;c[f+(h*72|0)+64>>2]=35528;k=h+1|0;h=k;Qf(f+(k*72|0)|0,21928)|0;c[f+(h*72|0)+64>>2]=37400;k=h+1|0;h=k;Qf(f+(k*72|0)|0,21752)|0;c[f+(h*72|0)+64>>2]=37608;k=h+1|0;h=k;Qf(f+(k*72|0)|0,21680)|0;c[f+(h*72|0)+64>>2]=37504;k=h+1|0;h=k;Qf(f+(k*72|0)|0,21608)|0;c[f+(h*72|0)+64>>2]=37296;k=h+1|0;h=k;Qf(f+(k*72|0)|0,21520)|0;c[f+(h*72|0)+64>>2]=34072;k=h+1|0;h=k;Qf(f+(k*72|0)|0,21368)|0;c[f+(h*72|0)+64>>2]=36984;k=h+1|0;h=k;Qf(f+(k*72|0)|0,21280)|0;c[f+(h*72|0)+64>>2]=34904;k=h+1|0;h=k;Qf(f+(k*72|0)|0,21184)|0;c[f+(h*72|0)+64>>2]=35944;k=h+1|0;h=k;Qf(f+(k*72|0)|0,21096)|0;c[f+(h*72|0)+64>>2]=35320;k=h+1|0;h=k;Qf(f+(k*72|0)|0,21e3)|0;c[f+(h*72|0)+64>>2]=36048;k=h+1|0;h=k;Qf(f+(k*72|0)|0,20848)|0;c[f+(h*72|0)+64>>2]=34592;k=h+1|0;h=k;Qf(f+(k*72|0)|0,20744)|0;c[f+(h*72|0)+64>>2]=35424;k=h+1|0;h=k;Qf(f+(k*72|0)|0,20656)|0;c[f+(h*72|0)+64>>2]=37712;k=h+1|0;h=k;Qf(f+(k*72|0)|0,20544)|0;c[f+(h*72|0)+64>>2]=36152;k=h+1|0;h=k;Qf(f+(k*72|0)|0,20440)|0;c[f+(h*72|0)+64>>2]=34696;k=h+1|0;h=k;Qf(f+(k*72|0)|0,20344)|0;c[f+(h*72|0)+64>>2]=37816;k=h+1|0;h=k;Qf(f+(k*72|0)|0,20272)|0;c[f+(h*72|0)+64>>2]=35840;j=0;while(1){if((j|0)>=180){break}h=0;while(1){if((h|0)>=(c[f+(j*72|0)+68>>2]|0)){break}Qf((c[f+(j*72|0)+64>>2]|0)+(h*100|0)|0,27456)|0;h=h+1|0}j=j+1|0}Qf(d|0,13384)|0;Rf(d|0,79608+((c[16616]|0)*220|0)|0)|0;Rf(d|0,11504)|0;Rf(d|0,20208)|0;k=Ua(d|0,9208)|0;l=k;if((k|0)==0){Nb(c[n>>2]|0,26680,(k=i,i=i+8|0,c[k>>2]=d,k)|0)|0;i=k;i=b;return}while(1){if((Ra(e|0,1024,l|0)|0)==0){break}g=g+1|0;k=(Of(e|0)|0)-1|0;while(1){if((k|0)<0){break}if((a[e+k|0]|0)==13){m=21}else{if((a[e+k|0]|0)==10){m=21}}if((m|0)==21){m=0;a[e+k|0]=0}k=k-1|0}k=0;d=0;while(1){if((d|0)>=180){break}if((Mf(e|0,f+(d*72|0)|0,Of(f+(d*72|0)|0)|0)|0)==0){m=27;break}d=d+1|0}if((m|0)==27){m=0;k=1}if((k|0)!=0){j=0;while(1){if((j|0)>=180){break}if((c[f+(j*72|0)+60>>2]|0)==1){c[f+(j*72|0)+60>>2]=3}j=j+1|0}if((c[f+(d*72|0)+60>>2]|0)==0){c[f+(d*72|0)+60>>2]=1;h=0}}else{j=0;while(1){if((j|0)>=180){break}if((c[f+(j*72|0)+60>>2]|0)==1){m=43;break}j=j+1|0}if((m|0)==43){m=0;if((Of(e|0)|0)>>>0>0>>>0){Pf((c[f+(j*72|0)+64>>2]|0)+(h*100|0)|0,e|0,100)|0;a[(c[f+(j*72|0)+64>>2]|0)+(((h+1|0)*100|0)-1)|0]=0}d=h+1|0;h=d;if((d|0)==(c[f+(j*72|0)+68>>2]|0)){c[f+(j*72|0)+60>>2]=2}}}}ma(l|0)|0;i=b;return}function me(){var a=0,b=0,d=0,e=0,f=0,g=0;a=i;b=0;d=0;e=wb(20168)|0;if((e|0)!=0){b=Of(e|0)|0}if((b|0)>=5){b=5}else{if((b|0)>=2){b=2}else{b=0}}while(1){if((d|0)!=0){f=0}else{f=(b|0)!=0}if(!f){break}g=0;while(1){if((g|0)>=(c[20562]|0)){break}if((Mf(79608+(g*220|0)|0,e,b)|0)==0){d=1;c[16616]=g}g=g+1|0}if((b|0)>2){b=2}else{b=0}}i=a;return}function ne(a){a=a|0;var b=0,d=0,e=0,f=0,g=0;b=i;d=a;a=0;e=0;f=0;if((c[c[d>>2]>>2]|0)<500){i=b;return}if((c[c[d>>2]>>2]|0)>515){i=b;return}switch(c[c[d>>2]>>2]|0){case 502:{a=0;e=9;f=1;g=32;break};case 503:{g=32;break};case 504:{g=35;break};case 505:{g=38;break};case 501:{if((c[d+4>>2]|0)==12){if((c[18087]|0)==0){c[18087]=1}else{if((c[18087]|0)==3){c[18087]=2}}}else{if((c[d+4>>2]|0)==13){if((c[18087]|0)==1){c[18087]=3}else{if((c[18087]|0)==2){c[18087]=0}}}}break};case 510:{break};case 511:{if((c[d+4>>2]|0)==13){yd(14)}break};case 512:{if((c[d+4>>2]|0)==13){yd(16)}break};case 513:{if((c[d+4>>2]|0)==13){yd(26)}break};case 514:{if((c[d+4>>2]|0)==13){yd(8)}break};case 515:{if((c[d+4>>2]|0)==13){c[18086]=0;pe();qe();c[28578]=c[28578]|7}break};case 500:{if((c[d+4>>2]|0)==13){c[18086]=1;oe()}else{if((c[d+4>>2]|0)==14){if((c[18087]|0)==1){c[18087]=0}else{if((c[18087]|0)==2){c[18087]=3}}}}break};default:{}}if((g|0)==32){if((f|0)==0){a=2;e=12;f=1}g=35}if((g|0)==35){if((f|0)==0){a=4;e=10;f=1}g=38}if((g|0)==38){if((f|0)==0){a=6;e=11;f=1}if((c[d+4>>2]|0)==14){if((c[18087]|0)==1){c[18087]=0;yd(e)}else{if((c[18087]|0)==2){c[18087]=3;yd(e)}}}else{if((c[d+4>>2]|0)==38){if((c[18087]|0)==3){yd(e)}else{yd(a)}}}}i=b;return}function oe(){var a=0,b=0;a=i;b=He(510)|0;if((b|0)==0){i=a;return}c[b+8>>2]=-2;i=a;return}function pe(){var a=0,b=0;a=i;b=He(501)|0;if((b|0)==0){i=a;return}c[b+8>>2]=0;i=a;return}function qe(){var a=0,b=0;a=i;b=He(510)|0;if((b|0)==0){i=a;return}c[b+8>>2]=0;i=a;return}function re(){var a=0,b=0,d=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0;a=i;i=i+296|0;b=a|0;d=a+136|0;e=a+152|0;f=a+168|0;g=a+184|0;h=a+200|0;j=a+216|0;k=a+232|0;l=a+248|0;m=a+264|0;n=a+280|0;if((c[7768]|0)==16){Ze(d,188,1,c[7768]|0,c[7768]|0);o=d;c[14320]=c[o>>2];c[14321]=c[o+4>>2];c[14322]=c[o+8>>2];c[14323]=c[o+12>>2];Ze(e,188,18,c[7768]|0,c[7768]|0);o=e;c[14316]=c[o>>2];c[14317]=c[o+4>>2];c[14318]=c[o+8>>2];c[14319]=c[o+12>>2];Ze(f,188,69,c[7768]|0,c[7768]|0);o=f;c[14328]=c[o>>2];c[14329]=c[o+4>>2];c[14330]=c[o+8>>2];c[14331]=c[o+12>>2];Ze(g,188,35,c[7768]|0,c[7768]|0);o=g;c[14312]=c[o>>2];c[14313]=c[o+4>>2];c[14314]=c[o+8>>2];c[14315]=c[o+12>>2];Ze(h,188,52,c[7768]|0,c[7768]|0);o=h;c[14324]=c[o>>2];c[14325]=c[o+4>>2];c[14326]=c[o+8>>2];c[14327]=c[o+12>>2]}else{if((c[7768]|0)==32){Ze(j,376,2,c[7768]|0,c[7768]|0);o=j;c[14320]=c[o>>2];c[14321]=c[o+4>>2];c[14322]=c[o+8>>2];c[14323]=c[o+12>>2];Ze(k,376,36,c[7768]|0,c[7768]|0);o=k;c[14316]=c[o>>2];c[14317]=c[o+4>>2];c[14318]=c[o+8>>2];c[14319]=c[o+12>>2];Ze(l,376,138,c[7768]|0,c[7768]|0);o=l;c[14328]=c[o>>2];c[14329]=c[o+4>>2];c[14330]=c[o+8>>2];c[14331]=c[o+12>>2];Ze(m,376,70,c[7768]|0,c[7768]|0);o=m;c[14312]=c[o>>2];c[14313]=c[o+4>>2];c[14314]=c[o+8>>2];c[14315]=c[o+12>>2];Ze(n,376,104,c[7768]|0,c[7768]|0);o=n;c[14324]=c[o>>2];c[14325]=c[o+4>>2];c[14326]=c[o+8>>2];c[14327]=c[o+12>>2]}}if((Ae(b)|0)!=0){o=Be()|0;jb(11472,(p=i,i=i+16|0,c[p>>2]=28608,c[p+8>>2]=o,p)|0)|0;i=p}c[b>>2]=500;c[b+48>>2]=c[(c[16874]|0)+8>>2];c[b+52>>2]=c[(c[16874]|0)+12>>2];if((Ce(b)|0)!=0){o=Be()|0;jb(11472,(p=i,i=i+16|0,c[p>>2]=28608,c[p+8>>2]=o,p)|0)|0;i=p}if((Ae(b)|0)!=0){o=Be()|0;jb(11472,(p=i,i=i+16|0,c[p>>2]=28608,c[p+8>>2]=o,p)|0)|0;i=p}c[b>>2]=501;c[b+4>>2]=500;c[b+16>>2]=48;c[b+24>>2]=80;c[b+36>>2]=16744448;c[b+40>>2]=0;c[b+44>>2]=0;c[b+48>>2]=c[7768]<<1;c[b+52>>2]=c[7768]<<1;if((Ce(b)|0)!=0){o=Be()|0;jb(11472,(p=i,i=i+16|0,c[p>>2]=28608,c[p+8>>2]=o,p)|0)|0;i=p}if((Ae(b)|0)!=0){o=Be()|0;jb(11472,(p=i,i=i+16|0,c[p>>2]=28608,c[p+8>>2]=o,p)|0)|0;i=p}c[b>>2]=502;c[b+4>>2]=501;c[b+16>>2]=48;c[b+24>>2]=80;c[b+28>>2]=16777215;c[b+40>>2]=0;c[b+44>>2]=0;c[b+48>>2]=c[7768]<<1;c[b+52>>2]=0;if((Ce(b)|0)!=0){o=Be()|0;jb(11472,(p=i,i=i+16|0,c[p>>2]=28608,c[p+8>>2]=o,p)|0)|0;i=p}c[b>>2]=503;c[b+40>>2]=c[7768]<<1;c[b+44>>2]=0;c[b+48>>2]=0;c[b+52>>2]=c[7768]<<1;if((Ce(b)|0)!=0){o=Be()|0;jb(11472,(p=i,i=i+16|0,c[p>>2]=28608,c[p+8>>2]=o,p)|0)|0;i=p}c[b>>2]=504;c[b+40>>2]=0;c[b+44>>2]=c[7768]<<1;c[b+48>>2]=c[7768]<<1;c[b+52>>2]=0;if((Ce(b)|0)!=0){o=Be()|0;jb(11472,(p=i,i=i+16|0,c[p>>2]=28608,c[p+8>>2]=o,p)|0)|0;i=p}c[b>>2]=505;c[b+40>>2]=0;c[b+44>>2]=0;c[b+48>>2]=0;c[b+52>>2]=c[7768]<<1;if((Ce(b)|0)!=0){o=Be()|0;jb(11472,(p=i,i=i+16|0,c[p>>2]=28608,c[p+8>>2]=o,p)|0)|0;i=p}if((Ae(b)|0)!=0){o=Be()|0;jb(11472,(p=i,i=i+16|0,c[p>>2]=28608,c[p+8>>2]=o,p)|0)|0;i=p}c[b>>2]=510;c[b+4>>2]=500;c[b+48>>2]=((c[7768]|0)*5|0)+(((c[7768]|0)/4|0)*6|0);c[b+52>>2]=(c[7768]|0)+(((c[7768]|0)/4|0)<<1);c[b+40>>2]=(c[(c[16874]|0)+8>>2]|0)-(c[b+48>>2]|0);if((Ce(b)|0)!=0){o=Be()|0;jb(11472,(p=i,i=i+16|0,c[p>>2]=28608,c[p+8>>2]=o,p)|0)|0;i=p}if((Ae(b)|0)!=0){o=Be()|0;jb(11472,(p=i,i=i+16|0,c[p>>2]=28608,c[p+8>>2]=o,p)|0)|0;i=p}c[b>>2]=511;c[b+4>>2]=510;o=c[7768]|0;c[b+52>>2]=o;c[b+48>>2]=o;o=c[(He(510)|0)+48>>2]|0;c[b+40>>2]=o-(c[b+48>>2]|0)-((c[7768]|0)/4|0);c[b+44>>2]=(c[7768]|0)/4|0;c[b+56>>2]=c[28230];c[b+60>>2]=c[14320];c[b+64>>2]=c[14321];c[b+68>>2]=c[14322];c[b+72>>2]=c[14323];if((Ce(b)|0)!=0){o=Be()|0;jb(11472,(p=i,i=i+16|0,c[p>>2]=28608,c[p+8>>2]=o,p)|0)|0;i=p}c[b>>2]=512;o=c[(He(510)|0)+48>>2]|0;c[b+40>>2]=o-(c[b+48>>2]<<1)-(((c[7768]|0)/4|0)<<1);c[b+60>>2]=c[14316];c[b+64>>2]=c[14317];if((Ce(b)|0)!=0){o=Be()|0;jb(11472,(p=i,i=i+16|0,c[p>>2]=28608,c[p+8>>2]=o,p)|0)|0;i=p}c[b>>2]=513;o=c[(He(510)|0)+48>>2]|0;c[b+40>>2]=o-((c[b+48>>2]|0)*3|0)-(((c[7768]|0)/4|0)*3|0);c[b+60>>2]=c[14328];c[b+64>>2]=c[14329];if((Ce(b)|0)!=0){o=Be()|0;jb(11472,(p=i,i=i+16|0,c[p>>2]=28608,c[p+8>>2]=o,p)|0)|0;i=p}c[b>>2]=514;o=c[(He(510)|0)+48>>2]|0;c[b+40>>2]=o-(c[b+48>>2]<<2)-(((c[7768]|0)/4|0)<<2);c[b+60>>2]=c[14312];c[b+64>>2]=c[14313];if((Ce(b)|0)!=0){o=Be()|0;jb(11472,(p=i,i=i+16|0,c[p>>2]=28608,c[p+8>>2]=o,p)|0)|0;i=p}c[b>>2]=515;o=c[(He(510)|0)+48>>2]|0;c[b+40>>2]=o-((c[b+48>>2]|0)*5|0)-(((c[7768]|0)/4|0)*5|0);c[b+60>>2]=c[14324];c[b+64>>2]=c[14325];if((Ce(b)|0)!=0){b=Be()|0;jb(11472,(p=i,i=i+16|0,c[p>>2]=28608,c[p+8>>2]=b,p)|0)|0;i=p}se();if((c[18086]|0)==1){te();oe();ue();i=a;return}else{pe();qe();ue();i=a;return}}function se(){var a=0,b=0;a=i;b=He(500)|0;if((b|0)==0){i=a;return}c[b+8>>2]=0;i=a;return}function te(){var a=0,b=0;a=i;b=He(501)|0;if((b|0)==0){i=a;return}c[b+8>>2]=-2;i=a;return}function ue(){var a=0,b=0,d=0;a=i;if((He(500)|0)==0){i=a;return}if((c[26717]|0)!=-1){b=c[26717]|0}else{if((c[26716]|0)!=-1){b=c[26716]|0}else{b=6324304}}d=He(511)|0;c[d+28>>2]=b;c[d+32>>2]=b|5263440;c[d+56>>2]=c[28230];c[d+8>>2]=-2;d=He(512)|0;c[d+28>>2]=b;c[d+32>>2]=b|5263440;c[d+56>>2]=c[28230];c[d+8>>2]=-2;d=He(513)|0;c[d+28>>2]=b;c[d+32>>2]=b|5263440;c[d+56>>2]=c[28230];c[d+8>>2]=-2;d=He(514)|0;c[d+28>>2]=b;c[d+32>>2]=b|5263440;c[d+56>>2]=c[28230];c[d+8>>2]=-2;d=He(515)|0;c[d+28>>2]=b;c[d+32>>2]=b|5263440;c[d+56>>2]=c[28230];c[d+8>>2]=-2;i=a;return}function ve(){var a=0,b=0,d=0;a=i;b=He(500)|0;d=b;if((b|0)==0){i=a;return}c[d+12>>2]=-2;c[d+8>>2]=-2;if((xd(4,0)|0)!=0){c[d+12>>2]=0}i=a;return}function we(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;d=i;e=a;a=b;if((He(500)|0)==0){i=d;return}if((c[18088]|0)==0){b=He(501)|0;f=b;g=b;if(((c[16974]|0)-(c[7756]|0)|0)<2){c[f+40>>2]=e}else{if((c[16974]|0)>((c[7756]|0)+(c[7758]|0)-3|0)){c[f+40>>2]=e-((c[f+48>>2]|0)/2|0)}else{c[f+40>>2]=e-((c[f+48>>2]|0)/4|0)}}if(((c[16975]|0)-(c[7757]|0)|0)<2){c[f+44>>2]=a}else{if((c[16975]|0)>((c[7757]|0)+(c[7759]|0)-3|0)){c[f+44>>2]=a-((c[f+52>>2]|0)/2|0)}else{c[f+44>>2]=a-((c[f+52>>2]|0)/4|0)}}}else{b=He(501)|0;f=b;g=b;c[f+40>>2]=e-((c[f+48>>2]|0)/4|0);c[f+44>>2]=a-((c[f+52>>2]|0)/4|0)}if((c[18088]|0)==0){f=He(502)|0;c[f+44>>2]=-((c[g+44>>2]|0)-(c[7763]|0)|0);c[f+52>>2]=(c[g+44>>2]|0)-(c[7763]|0);f=He(503)|0;a=(c[7762]|0)+(aa(c[7758]|0,c[7768]|0)|0)|0;c[f+48>>2]=a-(c[g+40>>2]|0)-(c[g+48>>2]|0);f=He(504)|0;a=(c[7763]|0)+(aa(c[7759]|0,c[7768]|0)|0)|0;c[f+52>>2]=a-(c[g+44>>2]|0)-(c[g+52>>2]|0);f=He(505)|0;c[f+40>>2]=-((c[g+40>>2]|0)-(c[7762]|0)|0);c[f+48>>2]=(c[g+40>>2]|0)-(c[7762]|0)}else{if((c[18088]|0)==1){f=He(502)|0;c[f+44>>2]=-(c[g+44>>2]|0);c[f+52>>2]=c[g+44>>2];f=He(503)|0;c[f+48>>2]=(c[(c[16874]|0)+8>>2]|0)-(c[g+40>>2]|0)-(c[g+48>>2]|0);f=He(504)|0;c[f+52>>2]=(c[(c[16874]|0)+12>>2]|0)-(c[g+44>>2]|0)-(c[g+52>>2]|0);f=He(505)|0;c[f+40>>2]=-(c[g+40>>2]|0);c[f+48>>2]=c[g+40>>2]}}g=c[18087]|0;if((g|0)==0){f=He(501)|0;c[f+32>>2]=-1;c[f+28>>2]=-1;c[8022]=0;c[8023]=0;h=24}else if((g|0)==3){h=24}else if((g|0)==1|(g|0)==2){c[(He(502)|0)+20>>2]=80;c[(He(503)|0)+20>>2]=80;c[(He(504)|0)+20>>2]=80;c[(He(505)|0)+20>>2]=80;c[8022]=(c[28574]|0)/2|0;c[8023]=(c[28574]|0)/2|0}do{if((h|0)==24){c[(He(502)|0)+20>>2]=-1;c[(He(503)|0)+20>>2]=-1;c[(He(504)|0)+20>>2]=-1;c[(He(505)|0)+20>>2]=-1;if((c[18087]|0)==0){break}else{f=He(501)|0;c[f+28>>2]=16711680;c[8022]=(c[28574]|0)/2|0;c[8023]=(c[28574]|0)/2|0;break}}}while(0);i=d;return}function xe(b){b=b|0;var d=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0;d=i;i=i+27264|0;e=d|0;f=d+1024|0;g=d+1032|0;h=d+1040|0;j=d+1048|0;k=d+1056|0;l=d+1312|0;m=d+1320|0;o=d+1328|0;p=d+1432|0;q=d+1536|0;r=d+1544|0;s=d+1552|0;t=d+1560|0;u=d+1568|0;v=d+26096|0;w=d+27136|0;x=d+27168|0;y=d+27224|0;z=d+27240|0;A=d+27248|0;B=d+27256|0;C=b;c[f>>2]=-1;c[g>>2]=-1;c[h>>2]=-1;c[j>>2]=-1;c[l>>2]=-1;c[m>>2]=-1;c[q>>2]=-1;c[r>>2]=-1;c[s>>2]=-1;c[t>>2]=-1;b=0;D=0;c[z>>2]=-1;c[A>>2]=-1;c[B>>2]=-1;Qf(k|0,11432)|0;Qf(o|0,11432)|0;Qf(p|0,11432)|0;Nb(c[n>>2]|0,24184,(E=i,i=i+8|0,c[E>>2]=C,E)|0)|0;i=E;F=Ua(C|0,16936)|0;G=F;if((F|0)==0){Nb(c[n>>2]|0,14896,(E=i,i=i+8|0,c[E>>2]=C,E)|0)|0;i=E;H=1;I=H;i=d;return I|0}F=0;while(1){if((F|0)>=84){break}Qf(u+(F*292|0)|0,11432)|0;c[u+(F*292|0)+280>>2]=-1;c[u+(F*292|0)+284>>2]=-1;c[u+(F*292|0)+288>>2]=-1;F=F+1|0}F=0;while(1){if((F|0)>=37){break}c[v+(F*28|0)>>2]=-2;c[v+(F*28|0)+4>>2]=-2;c[v+(F*28|0)+8>>2]=-2;F=F+1|0}c[w>>2]=-1;c[w+4>>2]=-1;c[w+8>>2]=-1;c[w+12>>2]=-1;c[w+16>>2]=-1;c[w+20>>2]=-1;c[y>>2]=-1;c[y+4>>2]=-1;c[y+8>>2]=-1;while(1){J=Ea(G|0,13024,(E=i,i=i+8|0,c[E>>2]=e,E)|0)|0;i=E;if((J|0)!=1){break}if((Mf(e|0,11208,18)|0)!=0){if((Mf(e|0,9016,9)|0)!=0){if((Mf(e|0,8192,8)|0)!=0){if((Mf(e|0,6744,7)|0)!=0){if((Mf(e|0,28072,18)|0)!=0){if((Mf(e|0,27328,18)|0)!=0){if((Mf(e|0,26488,23)|0)!=0){if((Mf(e|0,25696,20)|0)!=0){if((Mf(e|0,24984,18)|0)!=0){if((Mf(e|0,24080,21)|0)!=0){if((Mf(e|0,23216,15)|0)!=0){if((Mf(e|0,22328,17)|0)!=0){if((Mf(e|0,21256,16)|0)!=0){if((Mf(e|0,20248,22)|0)!=0){if((Mf(e|0,19736,24)|0)!=0){if((Mf(e|0,19112,27)|0)!=0){if((Mf(e|0,18536,16)|0)!=0){if((Mf(e|0,17952,24)|0)!=0){if((Mf(e|0,17400,23)|0)!=0){if((Mf(e|0,16888,10)|0)!=0){if((Mf(e|0,16376,15)|0)!=0){if((Mf(e|0,16240,16)|0)!=0){if((Mf(e|0,16048,10)|0)!=0){if((Mf(e|0,15648,18)|0)!=0){if((Mf(e|0,15544,14)|0)!=0){if((Mf(e|0,15376,15)|0)!=0){if((Mf(e|0,15224,21)|0)!=0){if((Mf(e|0,15064,17)|0)!=0){if((Mf(e|0,14872,18)|0)!=0){if((Mf(e|0,14632,20)|0)!=0){if((Mf(e|0,14456,16)|0)!=0){if((Mf(e|0,14184,17)|0)!=0){if((Mf(e|0,14096,20)|0)!=0){if((Mf(e|0,13952,16)|0)!=0){if((Mf(e|0,13840,17)|0)!=0){if((Mf(e|0,13576,23)|0)!=0){if((Mf(e|0,13360,19)|0)!=0){if((Mf(e|0,13128,20)|0)!=0){if((Mf(e|0,12992,24)|0)!=0){if((Mf(e|0,12816,20)|0)!=0){if((Mf(e|0,12624,21)|0)!=0){if((Mf(e|0,12328,26)|0)!=0){if((Mf(e|0,12176,22)|0)!=0){if((Mf(e|0,12016,23)|0)!=0){if((Mf(e|0,11840,26)|0)!=0){if((Mf(e|0,11632,22)|0)!=0){if((Mf(e|0,11480,23)|0)!=0){if((Mf(e|0,11328,27)|0)!=0){if((Mf(e|0,11184,23)|0)!=0){if((Mf(e|0,11008,24)|0)!=0){if((Mf(e|0,10864,22)|0)!=0){if((Mf(e|0,10704,18)|0)!=0){if((Mf(e|0,10600,19)|0)!=0){if((Mf(e|0,10496,20)|0)!=0){if((Mf(e|0,10408,16)|0)!=0){if((Mf(e|0,10312,17)|0)!=0){if((Mf(e|0,10200,20)|0)!=0){if((Mf(e|0,10096,16)|0)!=0){if((Mf(e|0,10016,17)|0)!=0){if((Mf(e|0,9912,23)|0)!=0){if((Mf(e|0,9792,19)|0)!=0){if((Mf(e|0,9632,20)|0)!=0){if((Mf(e|0,9536,33)|0)!=0){if((Mf(e|0,9440,29)|0)!=0){if((Mf(e|0,9384,30)|0)!=0){if((Mf(e|0,9272,30)|0)!=0){if((Mf(e|0,9176,26)|0)!=0){if((Mf(e|0,9064,27)|0)!=0){if((Mf(e|0,8984,26)|0)!=0){if((Mf(e|0,8936,22)|0)!=0){if((Mf(e|0,8872,23)|0)!=0){if((Mf(e|0,8720,29)|0)!=0){if((Mf(e|0,8560,25)|0)!=0){if((Mf(e|0,8488,26)|0)!=0){if((Mf(e|0,8432,25)|0)!=0){if((Mf(e|0,8344,21)|0)!=0){if((Mf(e|0,8280,22)|0)!=0){if((Mf(e|0,8232,20)|0)!=0){if((Mf(e|0,8168,16)|0)!=0){if((Mf(e|0,8112,17)|0)!=0){if((Mf(e|0,8032,19)|0)!=0){if((Mf(e|0,7952,15)|0)!=0){if((Mf(e|0,7888,16)|0)!=0){if((Mf(e|0,7832,22)|0)!=0){if((Mf(e|0,7784,18)|0)!=0){if((Mf(e|0,7688,19)|0)!=0){if((Mf(e|0,6848,24)|0)!=0){if((Mf(e|0,6792,20)|0)!=0){if((Mf(e|0,6720,21)|0)!=0){if((Mf(e|0,6664,31)|0)!=0){if((Mf(e|0,6568,27)|0)!=0){if((Mf(e|0,6456,28)|0)!=0){if((Mf(e|0,6376,21)|0)!=0){if((Mf(e|0,28440,17)|0)!=0){if((Mf(e|0,28384,18)|0)!=0){if((Mf(e|0,28280,23)|0)!=0){if((Mf(e|0,28184,19)|0)!=0){if((Mf(e|0,28128,20)|0)!=0){if((Mf(e|0,28040,25)|0)!=0){if((Mf(e|0,27984,21)|0)!=0){if((Mf(e|0,27904,22)|0)!=0){if((Mf(e|0,27808,25)|0)!=0){if((Mf(e|0,27744,21)|0)!=0){if((Mf(e|0,27688,22)|0)!=0){if((Mf(e|0,27624,25)|0)!=0){if((Mf(e|0,27520,21)|0)!=0){if((Mf(e|0,27432,22)|0)!=0){if((Mf(e|0,27376,25)|0)!=0){if((Mf(e|0,27304,21)|0)!=0){if((Mf(e|0,27256,22)|0)!=0){if((Mf(e|0,27136,25)|0)!=0){if((Mf(e|0,27040,21)|0)!=0){if((Mf(e|0,26976,22)|0)!=0){if((Mf(e|0,26904,27)|0)!=0){if((Mf(e|0,26856,23)|0)!=0){if((Mf(e|0,26744,24)|0)!=0){if((Mf(e|0,26648,29)|0)!=0){if((Mf(e|0,26544,25)|0)!=0){if((Mf(e|0,26456,26)|0)==0){Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+988,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+984,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+980,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+960,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+956,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+952,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+932,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+928,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+924,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+904,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+900,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+896,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+876,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+872,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+868,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+848,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+844,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+840,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+820,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+816,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+812,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+792,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+788,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+784,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+764,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+760,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+756,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+736,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+732,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+728,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+708,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+704,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+700,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+680,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+676,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+672,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+652,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+648,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+644,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+624,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+620,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+616,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+596,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+592,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+588,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+568,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+564,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+560,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+540,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+536,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+532,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+512,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+508,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+504,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+484,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+480,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+476,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+456,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+452,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+448,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+428,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+424,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+420,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+400,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+396,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+392,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+372,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+368,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+364,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+344,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+340,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+336,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+316,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+312,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+308,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+288,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+284,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+280,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+260,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+256,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+252,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+232,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+228,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+224,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+176,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+172,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+168,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+120,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+116,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+112,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+64,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+60,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+56,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+8,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v+4,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=v,E)|0)|0;i=E}}else{if((b|0)<84){Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=u+(b*292|0)+288,E)|0)|0;i=E;b=b+1|0;if((b|0)>=84){Nb(c[n>>2]|0,15792,(E=i,i=i+8|0,c[E>>2]=84,E)|0)|0;i=E}}}}else{if((b|0)<84){Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=u+(b*292|0)+284,E)|0)|0;i=E}}}else{if((b|0)<84){Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=u+(b*292|0)+280,E)|0)|0;i=E}}}else{if((b|0)<84){Ea(G|0,13024,(E=i,i=i+8|0,c[E>>2]=u+(b*292|0),E)|0)|0;i=E}}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=s,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=r,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=q,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=y+8,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=y,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=w,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=t,E)|0)|0;i=E}}else{Ea(G|0,13024,(E=i,i=i+8|0,c[E>>2]=p,E)|0)|0;i=E}}else{Ea(G|0,13024,(E=i,i=i+8|0,c[E>>2]=o,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=m,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=l,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=j,E)|0)|0;i=E}}else{Ra(k|0,256,G|0)|0;Ra(k|0,256,G|0)|0;F=(Of(k|0)|0)-1|0;while(1){if((F|0)<0){break}if((a[k+F|0]|0)==13){K=30}else{if((a[k+F|0]|0)==10){K=30}}if((K|0)==30){K=0;a[k+F|0]=0}F=F-1|0}}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=h,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=g,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=z,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=A,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=B,E)|0)|0;i=E}}else{Ea(G|0,10040,(E=i,i=i+8|0,c[E>>2]=f,E)|0)|0;i=E}}ma(G|0)|0;F=0;while(1){if((F|0)>=(b|0)){break}if((Lf(u+(F*292|0)|0,11432)|0)==0){D=1;Qf(x|0,16888)|0}else{if((c[u+(F*292|0)+280>>2]|0)==-1){D=1;Qf(x|0,16376)|0}else{if((c[u+(F*292|0)+284>>2]|0)==-1){D=1;Qf(x|0,16240)|0}else{if((c[u+(F*292|0)+288>>2]|0)==-1){D=1;Qf(x|0,16048)|0}}}}if((D|0)!=0){K=401;break}F=F+1|0}if((K|0)==401){Nb(c[n>>2]|0,26384,(E=i,i=i+16|0,c[E>>2]=x,c[E+8>>2]=C,E)|0)|0;i=E;Nb(c[n>>2]|0,26280,(E=i,i=i+1|0,i=i+7&-8,c[E>>2]=0,E)|0)|0;i=E;Nb(c[n>>2]|0,26136,(E=i,i=i+1|0,i=i+7&-8,c[E>>2]=0,E)|0)|0;i=E;H=2;I=H;i=d;return I|0}if((c[z>>2]|0)!=-1){c[14886]=c[z>>2]}if((c[B>>2]|0)!=-1){c[16610]=c[B>>2]}if((c[A>>2]|0)!=-1){c[7754]=c[A>>2]}if((c[f>>2]|0)!=-1){c[28574]=c[f>>2]}if((c[g>>2]|0)!=-1){c[28576]=c[g>>2]}if((c[h>>2]|0)!=-1){c[29356]=c[h>>2]}if((Lf(k|0,11432)|0)!=0){Qf(117168,k|0)|0}if((c[j>>2]|0)!=-1){c[28150]=c[j>>2]}if((c[l>>2]|0)!=-1){c[27244]=c[l>>2];F=0;while(1){if((F|0)>=37){break}c[31108+(F*28|0)>>2]=~~+$(+(c[27244]|0)/+(1e3/(c[28574]|0)|0|0));F=F+1|0}}if((c[m>>2]|0)!=-1){c[27242]=c[m>>2];F=0;while(1){if((F|0)>=37){break}c[31112+(F*28|0)>>2]=~~+$(+(c[27242]|0)/+(1e3/(c[28574]|0)|0|0));F=F+1|0}}if((Lf(o|0,11432)|0)!=0){F=0;while(1){if((F|0)>=(c[16198]|0)){break}if((Lf(59552+(F*524|0)|0,o|0)|0)==0){K=436;break}F=F+1|0}if((K|0)==436){c[16612]=F}}if((Lf(p|0,11432)|0)!=0){F=0;while(1){if((F|0)>=(c[20562]|0)){break}if((Lf(79608+(F*220|0)|0,p|0)|0)==0){K=444;break}F=F+1|0}if((K|0)==444){c[16616]=F}}if((c[t>>2]|0)!=-1){c[18082]=c[t>>2]}if((c[w>>2]|0)!=-1){c[28506]=c[w>>2]}if((c[y>>2]|0)!=-1){c[18086]=c[y>>2]}if((c[y+8>>2]|0)!=-1){c[18088]=c[y+8>>2]}if((c[q>>2]|0)!=-1){c[28570]=c[q>>2]}if((c[r>>2]|0)!=-1){c[28571]=c[r>>2]}if((c[s>>2]|0)!=-1){c[28572]=c[s>>2]}F=0;while(1){if((F|0)>=37){break}if((c[v+(F*28|0)>>2]|0)!=-2){c[31088+(F*28|0)>>2]=c[v+(F*28|0)>>2]}if((c[v+(F*28|0)+4>>2]|0)!=-2){c[31092+(F*28|0)>>2]=c[v+(F*28|0)+4>>2]}if((c[v+(F*28|0)+8>>2]|0)!=-2){c[31096+(F*28|0)>>2]=c[v+(F*28|0)+8>>2]}F=F+1|0}F=0;while(1){if((F|0)>=(b|0)){break}L=0;M=0;while(1){if((M|0)>=(c[26696]|0)){break}if((Lf(82256+(M*292|0)|0,u+(F*292|0)|0)|0)==0){c[82536+(M*292|0)>>2]=c[u+(F*292|0)+280>>2];c[82540+(M*292|0)>>2]=c[u+(F*292|0)+284>>2];c[82544+(M*292|0)>>2]=c[u+(F*292|0)+288>>2];L=1}M=M+1|0}do{if((L|0)==0){if((c[26696]|0)>=84){break}Qf(82256+((c[26696]|0)*292|0)|0,u+(F*292|0)|0)|0;Qf(82512+((c[26696]|0)*292|0)|0,11432)|0;c[82532+((c[26696]|0)*292|0)>>2]=-1;c[82536+((c[26696]|0)*292|0)>>2]=c[u+(F*292|0)+280>>2];c[82540+((c[26696]|0)*292|0)>>2]=c[u+(F*292|0)+284>>2];c[82544+((c[26696]|0)*292|0)>>2]=c[u+(F*292|0)+288>>2];c[26696]=(c[26696]|0)+1}}while(0);F=F+1|0}L=0;F=0;while(1){if((F|0)>=(c[26696]|0)){break}do{if((c[82544+(F*292|0)>>2]|0)==1){if(!((c[82532+(F*292|0)>>2]|0)==-1)){K=490;break}c[82544+(F*292|0)>>2]=0}else{K=490}}while(0);if((K|0)==490){K=0;if((c[82544+(F*292|0)>>2]|0)==1){c[16614]=F;M=0;while(1){if((M|0)>=(c[26696]|0)){break}if((M|0)!=(F|0)){c[82544+(M*292|0)>>2]=0}M=M+1|0}L=1}}if((L|0)!=0){K=500;break}F=F+1|0}if((L|0)==0){c[20636]=1;c[16614]=0}F=0;while(1){if((F|0)>=(c[26696]|0)){break}if((c[82532+(F*292|0)>>2]|0)!=-1){if((c[82536+(F*292|0)>>2]|0)>(c[82532+(F*292|0)>>2]|0)){c[82536+(F*292|0)>>2]=c[82532+(F*292|0)>>2]}if((c[82540+(F*292|0)>>2]|0)>(c[82536+(F*292|0)>>2]|0)){c[82540+(F*292|0)>>2]=c[82536+(F*292|0)>>2]}}F=F+1|0}H=0;I=H;i=d;return I|0}function ye(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,j=0;d=i;e=a;a=Ua(e|0,26064)|0;f=a;if((a|0)==0){Nb(c[n>>2]|0,26e3,(g=i,i=i+8|0,c[g>>2]=e,g)|0)|0;i=g;h=1;j=h;i=d;return j|0}if((b|0)!=0){Nb(c[n>>2]|0,25960,(g=i,i=i+8|0,c[g>>2]=e,g)|0)|0;i=g}Nb(f|0,25888,(g=i,i=i+8|0,c[g>>2]=25832,g)|0)|0;i=g;Nb(f|0,25792,(g=i,i=i+8|0,c[g>>2]=c[14886],g)|0)|0;i=g;Nb(f|0,25680,(g=i,i=i+8|0,c[g>>2]=c[16610],g)|0)|0;i=g;Nb(f|0,25632,(g=i,i=i+8|0,c[g>>2]=c[7754],g)|0)|0;i=g;Nb(f|0,25584,(g=i,i=i+8|0,c[g>>2]=c[28574],g)|0)|0;i=g;Nb(f|0,25488,(g=i,i=i+8|0,c[g>>2]=c[28576],g)|0)|0;i=g;Nb(f|0,25400,(g=i,i=i+8|0,c[g>>2]=c[29356],g)|0)|0;i=g;if((c[29356]|0)==-1){Nb(f|0,25328,(g=i,i=i+8|0,c[g>>2]=11432,g)|0)|0;i=g}else{Nb(f|0,25328,(g=i,i=i+8|0,c[g>>2]=117168,g)|0)|0;i=g}Nb(f|0,25272,(g=i,i=i+8|0,c[g>>2]=c[28150],g)|0)|0;i=g;Nb(f|0,25160,(g=i,i=i+8|0,c[g>>2]=c[27244],g)|0)|0;i=g;Nb(f|0,25080,(g=i,i=i+8|0,c[g>>2]=c[27242],g)|0)|0;i=g;Nb(f|0,25032,(g=i,i=i+8|0,c[g>>2]=59552+((c[16612]|0)*524|0),g)|0)|0;i=g;Nb(f|0,24960,(g=i,i=i+8|0,c[g>>2]=79608+((c[16616]|0)*220|0),g)|0)|0;i=g;Nb(f|0,24912,(g=i,i=i+8|0,c[g>>2]=c[18082],g)|0)|0;i=g;Nb(f|0,24816,(g=i,i=i+8|0,c[g>>2]=c[28506],g)|0)|0;i=g;Nb(f|0,24712,(g=i,i=i+8|0,c[g>>2]=c[18086],g)|0)|0;i=g;Nb(f|0,24560,(g=i,i=i+8|0,c[g>>2]=c[18088],g)|0)|0;i=g;Nb(f|0,24480,(g=i,i=i+8|0,c[g>>2]=c[28570],g)|0)|0;i=g;Nb(f|0,24408,(g=i,i=i+8|0,c[g>>2]=c[28571],g)|0)|0;i=g;Nb(f|0,24328,(g=i,i=i+8|0,c[g>>2]=c[28572],g)|0)|0;i=g;e=0;while(1){if((e|0)>=(c[26696]|0)){break}Nb(f|0,24216,(g=i,i=i+8|0,c[g>>2]=82256+(e*292|0),g)|0)|0;i=g;Nb(f|0,24136,(g=i,i=i+8|0,c[g>>2]=c[82536+(e*292|0)>>2],g)|0)|0;i=g;Nb(f|0,24056,(g=i,i=i+8|0,c[g>>2]=c[82540+(e*292|0)>>2],g)|0)|0;i=g;Nb(f|0,24e3,(g=i,i=i+8|0,c[g>>2]=c[82544+(e*292|0)>>2],g)|0)|0;i=g;e=e+1|0}Nb(f|0,23888,(g=i,i=i+8|0,c[g>>2]=c[7772],g)|0)|0;i=g;Nb(f|0,23784,(g=i,i=i+8|0,c[g>>2]=c[7773],g)|0)|0;i=g;Nb(f|0,23712,(g=i,i=i+8|0,c[g>>2]=c[7774],g)|0)|0;i=g;Nb(f|0,23640,(g=i,i=i+8|0,c[g>>2]=c[7779],g)|0)|0;i=g;Nb(f|0,23576,(g=i,i=i+8|0,c[g>>2]=c[7780],g)|0)|0;i=g;Nb(f|0,23480,(g=i,i=i+8|0,c[g>>2]=c[7781],g)|0)|0;i=g;Nb(f|0,23344,(g=i,i=i+8|0,c[g>>2]=c[7786],g)|0)|0;i=g;Nb(f|0,23280,(g=i,i=i+8|0,c[g>>2]=c[7787],g)|0)|0;i=g;Nb(f|0,23192,(g=i,i=i+8|0,c[g>>2]=c[7788],g)|0)|0;i=g;Nb(f|0,23128,(g=i,i=i+8|0,c[g>>2]=c[7793],g)|0)|0;i=g;Nb(f|0,23024,(g=i,i=i+8|0,c[g>>2]=c[7794],g)|0)|0;i=g;Nb(f|0,22920,(g=i,i=i+8|0,c[g>>2]=c[7795],g)|0)|0;i=g;Nb(f|0,22824,(g=i,i=i+8|0,c[g>>2]=c[7800],g)|0)|0;i=g;Nb(f|0,22752,(g=i,i=i+8|0,c[g>>2]=c[7801],g)|0)|0;i=g;Nb(f|0,22688,(g=i,i=i+8|0,c[g>>2]=c[7802],g)|0)|0;i=g;Nb(f|0,22584,(g=i,i=i+8|0,c[g>>2]=c[7807],g)|0)|0;i=g;Nb(f|0,22456,(g=i,i=i+8|0,c[g>>2]=c[7808],g)|0)|0;i=g;Nb(f|0,22376,(g=i,i=i+8|0,c[g>>2]=c[7809],g)|0)|0;i=g;Nb(f|0,22296,(g=i,i=i+8|0,c[g>>2]=c[7814],g)|0)|0;i=g;Nb(f|0,22240,(g=i,i=i+8|0,c[g>>2]=c[7815],g)|0)|0;i=g;Nb(f|0,22104,(g=i,i=i+8|0,c[g>>2]=c[7816],g)|0)|0;i=g;Nb(f|0,21968,(g=i,i=i+8|0,c[g>>2]=c[7821],g)|0)|0;i=g;Nb(f|0,21808,(g=i,i=i+8|0,c[g>>2]=c[7822],g)|0)|0;i=g;Nb(f|0,21720,(g=i,i=i+8|0,c[g>>2]=c[7823],g)|0)|0;i=g;Nb(f|0,21648,(g=i,i=i+8|0,c[g>>2]=c[7828],g)|0)|0;i=g;Nb(f|0,21568,(g=i,i=i+8|0,c[g>>2]=c[7829],g)|0)|0;i=g;Nb(f|0,21424,(g=i,i=i+8|0,c[g>>2]=c[7830],g)|0)|0;i=g;Nb(f|0,21336,(g=i,i=i+8|0,c[g>>2]=c[7835],g)|0)|0;i=g;Nb(f|0,21224,(g=i,i=i+8|0,c[g>>2]=c[7836],g)|0)|0;i=g;Nb(f|0,21152,(g=i,i=i+8|0,c[g>>2]=c[7837],g)|0)|0;i=g;Nb(f|0,21032,(g=i,i=i+8|0,c[g>>2]=c[7842],g)|0)|0;i=g;Nb(f|0,20904,(g=i,i=i+8|0,c[g>>2]=c[7843],g)|0)|0;i=g;Nb(f|0,20800,(g=i,i=i+8|0,c[g>>2]=c[7844],g)|0)|0;i=g;Nb(f|0,20712,(g=i,i=i+8|0,c[g>>2]=c[7849],g)|0)|0;i=g;Nb(f|0,20624,(g=i,i=i+8|0,c[g>>2]=c[7850],g)|0)|0;i=g;Nb(f|0,20496,(g=i,i=i+8|0,c[g>>2]=c[7851],g)|0)|0;i=g;Nb(f|0,20376,(g=i,i=i+8|0,c[g>>2]=c[7856],g)|0)|0;i=g;Nb(f|0,20312,(g=i,i=i+8|0,c[g>>2]=c[7857],g)|0)|0;i=g;Nb(f|0,20216,(g=i,i=i+8|0,c[g>>2]=c[7858],g)|0)|0;i=g;Nb(f|0,20176,(g=i,i=i+8|0,c[g>>2]=c[7863],g)|0)|0;i=g;Nb(f|0,20112,(g=i,i=i+8|0,c[g>>2]=c[7864],g)|0)|0;i=g;Nb(f|0,20088,(g=i,i=i+8|0,c[g>>2]=c[7865],g)|0)|0;i=g;Nb(f|0,19992,(g=i,i=i+8|0,c[g>>2]=c[7870],g)|0)|0;i=g;Nb(f|0,19952,(g=i,i=i+8|0,c[g>>2]=c[7871],g)|0)|0;i=g;Nb(f|0,19928,(g=i,i=i+8|0,c[g>>2]=c[7872],g)|0)|0;i=g;Nb(f|0,19888,(g=i,i=i+8|0,c[g>>2]=c[7877],g)|0)|0;i=g;Nb(f|0,19848,(g=i,i=i+8|0,c[g>>2]=c[7878],g)|0)|0;i=g;Nb(f|0,19800,(g=i,i=i+8|0,c[g>>2]=c[7879],g)|0)|0;i=g;Nb(f|0,19768,(g=i,i=i+8|0,c[g>>2]=c[7884],g)|0)|0;i=g;Nb(f|0,19712,(g=i,i=i+8|0,c[g>>2]=c[7885],g)|0)|0;i=g;Nb(f|0,19680,(g=i,i=i+8|0,c[g>>2]=c[7886],g)|0)|0;i=g;Nb(f|0,19616,(g=i,i=i+8|0,c[g>>2]=c[7891],g)|0)|0;i=g;Nb(f|0,19512,(g=i,i=i+8|0,c[g>>2]=c[7892],g)|0)|0;i=g;Nb(f|0,19440,(g=i,i=i+8|0,c[g>>2]=c[7893],g)|0)|0;i=g;Nb(f|0,19400,(g=i,i=i+8|0,c[g>>2]=c[7898],g)|0)|0;i=g;Nb(f|0,19312,(g=i,i=i+8|0,c[g>>2]=c[7899],g)|0)|0;i=g;Nb(f|0,19248,(g=i,i=i+8|0,c[g>>2]=c[7900],g)|0)|0;i=g;Nb(f|0,19176,(g=i,i=i+8|0,c[g>>2]=c[7905],g)|0)|0;i=g;Nb(f|0,19144,(g=i,i=i+8|0,c[g>>2]=c[7906],g)|0)|0;i=g;Nb(f|0,19080,(g=i,i=i+8|0,c[g>>2]=c[7907],g)|0)|0;i=g;Nb(f|0,19040,(g=i,i=i+8|0,c[g>>2]=c[7912],g)|0)|0;i=g;Nb(f|0,18952,(g=i,i=i+8|0,c[g>>2]=c[7913],g)|0)|0;i=g;Nb(f|0,18856,(g=i,i=i+8|0,c[g>>2]=c[7914],g)|0)|0;i=g;Nb(f|0,18800,(g=i,i=i+8|0,c[g>>2]=c[7919],g)|0)|0;i=g;Nb(f|0,18768,(g=i,i=i+8|0,c[g>>2]=c[7920],g)|0)|0;i=g;Nb(f|0,18704,(g=i,i=i+8|0,c[g>>2]=c[7921],g)|0)|0;i=g;Nb(f|0,18648,(g=i,i=i+8|0,c[g>>2]=c[7926],g)|0)|0;i=g;Nb(f|0,18584,(g=i,i=i+8|0,c[g>>2]=c[7927],g)|0)|0;i=g;Nb(f|0,18560,(g=i,i=i+8|0,c[g>>2]=c[7928],g)|0)|0;i=g;Nb(f|0,18512,(g=i,i=i+8|0,c[g>>2]=c[7933],g)|0)|0;i=g;Nb(f|0,18488,(g=i,i=i+8|0,c[g>>2]=c[7934],g)|0)|0;i=g;Nb(f|0,18464,(g=i,i=i+8|0,c[g>>2]=c[7935],g)|0)|0;i=g;Nb(f|0,18360,(g=i,i=i+8|0,c[g>>2]=c[7940],g)|0)|0;i=g;Nb(f|0,18304,(g=i,i=i+8|0,c[g>>2]=c[7941],g)|0)|0;i=g;Nb(f|0,18280,(g=i,i=i+8|0,c[g>>2]=c[7942],g)|0)|0;i=g;Nb(f|0,18248,(g=i,i=i+8|0,c[g>>2]=c[7947],g)|0)|0;i=g;Nb(f|0,18120,(g=i,i=i+8|0,c[g>>2]=c[7948],g)|0)|0;i=g;Nb(f|0,18032,(g=i,i=i+8|0,c[g>>2]=c[7949],g)|0)|0;i=g;Nb(f|0,17992,(g=i,i=i+8|0,c[g>>2]=c[7954],g)|0)|0;i=g;Nb(f|0,17920,(g=i,i=i+8|0,c[g>>2]=c[7955],g)|0)|0;i=g;Nb(f|0,17856,(g=i,i=i+8|0,c[g>>2]=c[7956],g)|0)|0;i=g;Nb(f|0,17824,(g=i,i=i+8|0,c[g>>2]=c[7961],g)|0)|0;i=g;Nb(f|0,17736,(g=i,i=i+8|0,c[g>>2]=c[7962],g)|0)|0;i=g;Nb(f|0,17680,(g=i,i=i+8|0,c[g>>2]=c[7963],g)|0)|0;i=g;Nb(f|0,17648,(g=i,i=i+8|0,c[g>>2]=c[7968],g)|0)|0;i=g;Nb(f|0,17624,(g=i,i=i+8|0,c[g>>2]=c[7969],g)|0)|0;i=g;Nb(f|0,17552,(g=i,i=i+8|0,c[g>>2]=c[7970],g)|0)|0;i=g;Nb(f|0,17456,(g=i,i=i+8|0,c[g>>2]=c[7975],g)|0)|0;i=g;Nb(f|0,17424,(g=i,i=i+8|0,c[g>>2]=c[7976],g)|0)|0;i=g;Nb(f|0,17368,(g=i,i=i+8|0,c[g>>2]=c[7977],g)|0)|0;i=g;Nb(f|0,17336,(g=i,i=i+8|0,c[g>>2]=c[7982],g)|0)|0;i=g;Nb(f|0,17304,(g=i,i=i+8|0,c[g>>2]=c[7983],g)|0)|0;i=g;Nb(f|0,17208,(g=i,i=i+8|0,c[g>>2]=c[7984],g)|0)|0;i=g;Nb(f|0,17160,(g=i,i=i+8|0,c[g>>2]=c[7989],g)|0)|0;i=g;Nb(f|0,17128,(g=i,i=i+8|0,c[g>>2]=c[7990],g)|0)|0;i=g;Nb(f|0,17096,(g=i,i=i+8|0,c[g>>2]=c[7991],g)|0)|0;i=g;Nb(f|0,17040,(g=i,i=i+8|0,c[g>>2]=c[7996],g)|0)|0;i=g;Nb(f|0,16944,(g=i,i=i+8|0,c[g>>2]=c[7997],g)|0)|0;i=g;Nb(f|0,16904,(g=i,i=i+8|0,c[g>>2]=c[7998],g)|0)|0;i=g;Nb(f|0,16856,(g=i,i=i+8|0,c[g>>2]=c[8003],g)|0)|0;i=g;Nb(f|0,16824,(g=i,i=i+8|0,c[g>>2]=c[8004],g)|0)|0;i=g;Nb(f|0,16792,(g=i,i=i+8|0,c[g>>2]=c[8005],g)|0)|0;i=g;Nb(f|0,16696,(g=i,i=i+8|0,c[g>>2]=c[8010],g)|0)|0;i=g;Nb(f|0,16624,(g=i,i=i+8|0,c[g>>2]=c[8011],g)|0)|0;i=g;Nb(f|0,16592,(g=i,i=i+8|0,c[g>>2]=c[8012],g)|0)|0;i=g;Nb(f|0,16552,(g=i,i=i+8|0,c[g>>2]=c[8017],g)|0)|0;i=g;Nb(f|0,16472,(g=i,i=i+8|0,c[g>>2]=c[8018],g)|0)|0;i=g;Nb(f|0,16392,(g=i,i=i+8|0,c[g>>2]=c[8019],g)|0)|0;i=g;ma(f|0)|0;h=0;j=h;i=d;return j|0}function ze(b){b=b|0;var e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,o=0,p=0,q=0,r=0;e=i;i=i+392|0;f=e|0;g=e+136|0;h=b;c[16996]=c[h>>2];c[16997]=c[h+4>>2];c[16998]=c[h+8>>2];c[16999]=c[h+12>>2];c[17e3]=c[h+16>>2];c[17001]=c[h+20>>2];c[17002]=c[h+24>>2];c[18008]=0;a[72048]=0;c[18076]=Vb(c[c[16874]>>2]|65536|0,c[(c[16874]|0)+8>>2]|0,c[(c[16874]|0)+12>>2]|0,d[(c[(c[16874]|0)+4>>2]|0)+8|0]|0|0,c[(c[(c[16874]|0)+4>>2]|0)+12>>2]|0,c[(c[(c[16874]|0)+4>>2]|0)+16>>2]|0,c[(c[(c[16874]|0)+4>>2]|0)+20>>2]|0,c[(c[(c[16874]|0)+4>>2]|0)+24>>2]|0)|0;if((c[18076]|0)==0){h=c[n>>2]|0;b=ub()|0;Nb(h|0,9128,(j=i,i=i+16|0,c[j>>2]=28744,c[j+8>>2]=b,j)|0)|0;i=j;Xa(1)}Qf(g|0,22408)|0;Rf(g|0,16264)|0;b=Zb(La(g|0,14480)|0,1)|0;h=b;if((b|0)==0){Nb(c[n>>2]|0,12648,(j=i,i=i+8|0,c[j>>2]=g,j)|0)|0;i=j;Xa(1)}if((Ja(h|0,131072,Jb(c[h+4>>2]|0,-1|0,0,-1|0)|0)|0)<0){g=c[n>>2]|0;b=ub()|0;Nb(g|0,10888,(j=i,i=i+8|0,c[j>>2]=b,j)|0)|0;i=j;Xa(1)}b=Rb(h|0)|0;hc(h|0);if((b|0)==0){h=c[n>>2]|0;g=ub()|0;Nb(h|0,9816,(j=i,i=i+8|0,c[j>>2]=g,j)|0)|0;i=j;Xa(1)}c[16988]=b;if((Ae(f)|0)!=0){b=Be()|0;jb(8896,(j=i,i=i+16|0,c[j>>2]=28744,c[j+8>>2]=b,j)|0)|0;i=j}c[f>>2]=0;c[f+4>>2]=0;c[f+8>>2]=1;c[f+12>>2]=1;c[f+16>>2]=255;if((Ce(f)|0)!=0){b=Be()|0;jb(8896,(j=i,i=i+16|0,c[j>>2]=28744,c[j+8>>2]=b,j)|0)|0;i=j}if((Ae(f)|0)!=0){b=Be()|0;jb(8896,(j=i,i=i+16|0,c[j>>2]=28744,c[j+8>>2]=b,j)|0)|0;i=j}c[f>>2]=1;c[f+4>>2]=0;c[f+8>>2]=1;c[f+12>>2]=1;c[f+16>>2]=255;c[f+48>>2]=c[(c[16874]|0)+8>>2];c[f+52>>2]=c[(c[16874]|0)+12>>2];if((Ce(f)|0)!=0){b=Be()|0;jb(8896,(j=i,i=i+16|0,c[j>>2]=28744,c[j+8>>2]=b,j)|0)|0;i=j}if((Ae(f)|0)!=0){b=Be()|0;jb(8896,(j=i,i=i+16|0,c[j>>2]=28744,c[j+8>>2]=b,j)|0)|0;i=j}c[f>>2]=98;c[f+4>>2]=99;c[f+16>>2]=50;c[f+40>>2]=4;c[f+44>>2]=4;c[f+48>>2]=13;c[f+52>>2]=19;c[f+56>>2]=c[16988];c[f+60>>2]=13;c[f+64>>2]=0;c[f+68>>2]=c[f+48>>2];c[f+72>>2]=c[f+52>>2];if((Ce(f)|0)!=0){b=Be()|0;jb(8896,(j=i,i=i+16|0,c[j>>2]=28744,c[j+8>>2]=b,j)|0)|0;i=j}if((Ae(f)|0)!=0){b=Be()|0;jb(8896,(j=i,i=i+16|0,c[j>>2]=28744,c[j+8>>2]=b,j)|0)|0;i=j}c[f>>2]=99;c[f+4>>2]=1;c[f+8>>2]=0;c[f+12>>2]=1;c[f+16>>2]=255;c[f+40>>2]=(c[(c[16874]|0)+8>>2]|0)/2|0;c[f+44>>2]=(c[(c[16874]|0)+12>>2]|0)/2|0;c[f+48>>2]=13;c[f+52>>2]=19;c[f+56>>2]=c[16988];c[f+60>>2]=0;c[f+64>>2]=0;c[f+68>>2]=c[f+48>>2];c[f+72>>2]=c[f+52>>2];if((Ce(f)|0)==0){k=c[17002]|0;l=De(k)|0;m=c[16996]|0;o=Ee(m)|0;p=c[16997]|0;q=c[16998]|0;r=Fe(p,q)|0;i=e;return}f=Be()|0;jb(8896,(j=i,i=i+16|0,c[j>>2]=28744,c[j+8>>2]=f,j)|0)|0;i=j;k=c[17002]|0;l=De(k)|0;m=c[16996]|0;o=Ee(m)|0;p=c[16997]|0;q=c[16998]|0;r=Fe(p,q)|0;i=e;return}function Ae(a){a=a|0;var b=0,d=0,e=0,f=0;b=i;d=a;a=0;if((d|0)==0){Ya(72048,8056,(e=i,i=i+8|0,c[e>>2]=28680,e)|0)|0;i=e;a=200;f=a;i=b;return f|0}else{c[d>>2]=-1;c[d+4>>2]=1;c[d+8>>2]=-2;c[d+12>>2]=-2;c[d+16>>2]=-2;c[d+20>>2]=-1;c[d+24>>2]=-1;c[d+28>>2]=-1;c[d+32>>2]=-1;c[d+36>>2]=-1;c[d+40>>2]=0;c[d+44>>2]=0;c[d+48>>2]=0;c[d+52>>2]=0;c[d+56>>2]=0;c[d+60>>2]=-1;c[d+64>>2]=-1;c[d+68>>2]=-1;c[d+72>>2]=-1;c[d+76>>2]=0;c[d+80>>2]=-1;c[d+84>>2]=-1;c[d+88>>2]=-1;c[d+92>>2]=-1;c[d+96>>2]=0;c[d+100>>2]=-1;c[d+104>>2]=-1;c[d+108>>2]=-1;c[d+112>>2]=-1;c[d+116>>2]=0;c[d+120>>2]=0;c[d+124>>2]=1;c[d+128>>2]=-1;c[d+132>>2]=0;f=a;i=b;return f|0}return 0}function Be(){Qf(283768,72048)|0;Qf(72048,283264)|0;return 283768}function Ce(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0;b=i;d=a;a=0;if((d|0)==0){Ya(72048,8056,(e=i,i=i+8|0,c[e>>2]=28968,e)|0)|0;i=e;a=200;f=a;i=b;return f|0}if((c[18004]|0)>=1e3){Ya(72048,27928,(e=i,i=i+16|0,c[e>>2]=28968,c[e+8>>2]=1e3,e)|0)|0;i=e;a=100}else{g=0;while(1){if((g|0)>=(c[18004]|0)){break}if((c[d>>2]|0)==(c[c[68016+(g<<2)>>2]>>2]|0)){h=8;break}g=g+1|0}if((h|0)==8){Ya(72048,27168,(e=i,i=i+8|0,c[e>>2]=28968,e)|0)|0;i=e;a=300}if((a|0)==0){e=Jf(136)|0;Nf(e|0,d|0,136)|0;c[68016+(c[18004]<<2)>>2]=e;c[e+128>>2]=c[18004];c[18004]=(c[18004]|0)+1;if((c[e>>2]|0)==0){c[18006]=e}else{if((c[e>>2]|0)==1){c[18010]=e}else{if((c[e>>2]|0)==98){c[16990]=e}else{if((c[e>>2]|0)==99){c[18008]=e}}}}g=0;while(1){if((g|0)>=(c[18004]|0)){break}if((c[(c[68016+(g<<2)>>2]|0)+132>>2]|0)==0){d=He(c[(c[68016+(g<<2)>>2]|0)+4>>2]|0)|0;c[(c[68016+(g<<2)>>2]|0)+132>>2]=d}g=g+1|0}do{if((c[18008]|0)!=0){if((c[16990]|0)==0){break}Ge(c[18008]|0,1,e)|0;Ge(c[16990]|0,2,c[18008]|0)|0}}while(0)}}f=a;i=b;return f|0}function De(a){a=a|0;c[17002]=a;i=i;return 0}function Ee(a){a=a|0;var b=0,d=0;b=i;d=a;c[16996]=d;ra(d|0)|0;i=b;return 0}function Fe(a,b){a=a|0;b=b|0;var d=0,e=0,f=0;d=i;e=a;a=0;c[16997]=e;c[16998]=b;if((c[18004]|0)<=0){f=a;i=d;return f|0}c[(c[18008]|0)+8>>2]=e;f=a;i=d;return f|0}function Ge(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0;e=i;f=a;a=b;b=d;d=0;g=c[f+128>>2]|0;h=-1;j=0;if((f|0)==0){Ya(72048,8056,(k=i,i=i+8|0,c[k>>2]=28656,k)|0)|0;i=k;d=200;l=d;i=e;return l|0}if((b|0)==0){Ya(72048,6600,(k=i,i=i+8|0,c[k>>2]=28656,k)|0)|0;i=k;d=400}else{if((a|0)==0){k=0;while(1){if((k|0)>=(c[18004]|0)){break}if((c[68016+(k<<2)>>2]|0)==(b|0)){m=10}else{if((c[(c[68016+(k<<2)>>2]|0)+132>>2]|0)==(b|0)){m=10}}if((m|0)==10){m=0;h=k}k=k+1|0}if((h|0)==-1){h=c[f+128>>2]|0}else{if((c[f+128>>2]|0)>(h|0)){h=h+1|0}}}else{if((a|0)==1){h=c[b+128>>2]|0;do{if((c[f+128>>2]|0)==(h|0)){if((h|0)>=((c[18004]|0)-1|0)){m=23;break}h=h+1|0}else{m=23}}while(0);if((m|0)==23){if((c[f+128>>2]|0)>(h|0)){h=h+1|0}}}else{if((a|0)==2){h=c[b+128>>2]|0;do{if((c[f+128>>2]|0)==(h|0)){if((h|0)<=0){m=31;break}h=h-1|0}else{m=31}}while(0);if((m|0)==31){if((c[f+128>>2]|0)<(h|0)){h=h-1|0}}}}}if((g|0)<(h|0)){j=1}else{if((c[f+128>>2]|0)>(h|0)){j=-1}}while(1){if((g|0)==(h|0)){break}f=c[68016+(g<<2)>>2]|0;c[68016+(g<<2)>>2]=c[68016+(g+j<<2)>>2];m=(c[68016+(g<<2)>>2]|0)+128|0;c[m>>2]=(c[m>>2]|0)-j;g=g+j|0;c[68016+(g<<2)>>2]=f;f=(c[68016+(g<<2)>>2]|0)+128|0;c[f>>2]=(c[f>>2]|0)+j}}l=d;i=e;return l|0}function He(a){a=a|0;var b=0,d=0,e=0,f=0,g=0;b=i;d=a;a=0;while(1){if((a|0)>=(c[18004]|0)){e=7;break}if((c[c[68016+(a<<2)>>2]>>2]|0)==(d|0)){e=4;break}a=a+1|0}if((e|0)==4){f=c[68016+(a<<2)>>2]|0;g=f;i=b;return g|0}else if((e|0)==7){f=0;g=f;i=b;return g|0}return 0}function Ie(){var a=0,b=0,d=0;a=i;b=0;Je();if((c[16988]|0)!=0){hc(c[16988]|0)}if((c[18076]|0)==0){d=b;i=a;return d|0}hc(c[18076]|0);d=b;i=a;return d|0}function Je(){var a=0,b=0;a=i;if((c[18004]|0)<=0){i=a;return}b=(c[18004]|0)-1|0;while(1){if((b|0)<0){break}Ke(c[68016+(b<<2)>>2]|0,0)|0;b=b-1|0}i=a;return}function Ke(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,j=0;d=i;e=a;a=b;b=0;if((c[18004]|0)<=0){Ya(72048,23912,(f=i,i=i+8|0,c[f>>2]=28880,f)|0)|0;i=f;b=200;g=b;i=d;return g|0}if((e|0)==0){Ya(72048,8056,(f=i,i=i+8|0,c[f>>2]=28880,f)|0)|0;i=f;b=200}else{f=0;while(1){if((f|0)>=2){break}if((f|0)==0){h=c[e+56>>2]|0}else{h=c[e+76>>2]|0}if((h|0)!=0){j=0;while(1){if((j|0)>=(c[18004]|0)){break}if((c[(c[68016+(j<<2)>>2]|0)+56>>2]|0)==(h|0)){c[(c[68016+(j<<2)>>2]|0)+56>>2]=0}if((c[(c[68016+(j<<2)>>2]|0)+76>>2]|0)==(h|0)){c[(c[68016+(j<<2)>>2]|0)+76>>2]=0}j=j+1|0}do{if((h|0)!=(c[16988]|0)){if((h|0)==(c[7494]|0)){break}if((h|0)==(c[28230]|0)){break}if((h|0)==(c[29360]|0)){break}if((h|0)==(c[70810]|0)){break}if((h|0)==(c[70536]|0)){break}if((h|0)==(c[27508]|0)){break}hc(h|0)}}while(0)}f=f+1|0}if((a|0)==0){f=0;while(1){if((f|0)>=(c[18004]|0)){break}if((c[(c[68016+(f<<2)>>2]|0)+132>>2]|0)==(e|0)){c[(c[68016+(f<<2)>>2]|0)+132>>2]=0}f=f+1|0}f=c[e+128>>2]|0;while(1){if((f|0)>=((c[18004]|0)-1|0)){break}c[68016+(f<<2)>>2]=c[68016+(f+1<<2)>>2];a=(c[68016+(f<<2)>>2]|0)+128|0;c[a>>2]=(c[a>>2]|0)-1;f=f+1|0}if((c[16994]|0)==(e|0)){c[16994]=0}if((c[16992]|0)==(e|0)){c[16992]=0}Kf(e);c[18004]=(c[18004]|0)-1}}g=b;i=d;return g|0}function Le(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;d=i;e=a;a=b;b=0;f=0;if((e|0)==0){Ya(72048,24848,(g=i,i=i+8|0,c[g>>2]=28896,g)|0)|0;i=g;b=200;h=b;i=d;return h|0}if((c[18004]|0)>0){g=(c[18004]|0)-1|0;while(1){if((g|0)<0){break}do{if((c[68016+(g<<2)>>2]|0)!=(e|0)){if((Me(c[68016+(g<<2)>>2]|0,e)|0)==0){break}Ke(c[68016+(g<<2)>>2]|0,0)|0;f=f+1|0}}while(0);g=g-1|0}if((a|0)!=0){Ke(e,0)|0}}h=b;i=d;return h|0}function Me(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,j=0;d=i;e=a;a=b;if((e|0)==0){Ya(72048,8056,(f=i,i=i+8|0,c[f>>2]=28928,f)|0)|0;i=f}else{do{if((a|0)==0){Ya(72048,6600,(f=i,i=i+8|0,c[f>>2]=28928,f)|0)|0;i=f}else{while(1){if((e|0)==(a|0)){g=15;break}if((e|0)==(c[18006]|0)){break}if((e|0)==(c[18010]|0)){break}if((c[e+132>>2]|0)==0){e=c[18010]|0}else{e=c[e+132>>2]|0}}if((g|0)==15){break}h=0;j=h;i=d;return j|0}}while(0)}h=1;j=h;i=d;return j|0}function Ne(){var a=0,b=0,d=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0;a=i;i=i+48|0;b=a|0;d=a+8|0;e=a+16|0;f=a+32|0;g=0;h=0;j=0;k=0;l=0;m=0;n=0;o=0;p=0;while(1){if((p|0)>=(c[18004]|0)){q=58;break}if((Oe(c[68016+(p<<2)>>2]|0)|0)!=0){r=0;s=0;do{if((c[68016+(p<<2)>>2]|0)==(c[16994]|0)){if((Pe(c[68016+(p<<2)>>2]|0)|0)==0){break}s=1;if((c[68016+(p<<2)>>2]|0)==(c[16992]|0)){r=1}}}while(0);Qe(c[68016+(p<<2)>>2]|0,b,d)|0;t=Re(c[68016+(p<<2)>>2]|0)|0;do{if((s|0)!=0){if(!((c[(c[68016+(p<<2)>>2]|0)+20>>2]|0)!=-1)){break}t=c[(c[68016+(p<<2)>>2]|0)+20>>2]|0}}while(0);do{if((r|0)!=0){if(!((c[(c[68016+(p<<2)>>2]|0)+24>>2]|0)!=-1)){break}t=c[(c[68016+(p<<2)>>2]|0)+24>>2]|0}}while(0);o=c[(c[68016+(p<<2)>>2]|0)+28>>2]|0;do{if((s|0)!=0){if(!((c[(c[68016+(p<<2)>>2]|0)+32>>2]|0)!=-1)){break}o=c[(c[68016+(p<<2)>>2]|0)+32>>2]|0}}while(0);do{if((r|0)!=0){if(!((c[(c[68016+(p<<2)>>2]|0)+36>>2]|0)!=-1)){break}o=c[(c[68016+(p<<2)>>2]|0)+36>>2]|0}}while(0);n=c[(c[68016+(p<<2)>>2]|0)+56>>2]|0;g=c[(c[68016+(p<<2)>>2]|0)+60>>2]|0;h=c[(c[68016+(p<<2)>>2]|0)+64>>2]|0;j=c[(c[68016+(p<<2)>>2]|0)+68>>2]|0;k=c[(c[68016+(p<<2)>>2]|0)+72>>2]|0;do{if((s|0)!=0){if((c[(c[68016+(p<<2)>>2]|0)+76>>2]|0)==0){break}n=c[(c[68016+(p<<2)>>2]|0)+76>>2]|0;g=c[(c[68016+(p<<2)>>2]|0)+80>>2]|0;h=c[(c[68016+(p<<2)>>2]|0)+84>>2]|0;j=c[(c[68016+(p<<2)>>2]|0)+88>>2]|0;k=c[(c[68016+(p<<2)>>2]|0)+92>>2]|0}}while(0);do{if((r|0)!=0){if((c[(c[68016+(p<<2)>>2]|0)+96>>2]|0)==0){break}n=c[(c[68016+(p<<2)>>2]|0)+96>>2]|0;g=c[(c[68016+(p<<2)>>2]|0)+100>>2]|0;h=c[(c[68016+(p<<2)>>2]|0)+104>>2]|0;j=c[(c[68016+(p<<2)>>2]|0)+108>>2]|0;k=c[(c[68016+(p<<2)>>2]|0)+112>>2]|0}}while(0);if((o|0)!=-1){o=Jb(c[(c[16874]|0)+4>>2]|0,o>>>16&255|0,o>>>8&255|0,o&255|0)|0;if((t|0)==255){c[f>>2]=c[b>>2];c[f+4>>2]=c[d>>2];c[f+8>>2]=c[(c[68016+(p<<2)>>2]|0)+48>>2];c[f+12>>2]=c[(c[68016+(p<<2)>>2]|0)+52>>2];if((Ta(c[16874]|0,f|0,o|0)|0)<0){q=30;break}}else{c[f>>2]=c[b>>2];c[f+4>>2]=c[d>>2];c[f+8>>2]=c[(c[68016+(p<<2)>>2]|0)+48>>2];c[f+12>>2]=c[(c[68016+(p<<2)>>2]|0)+52>>2];m=Se(c[16874]|0,f,o,t&255)|0;if((m|0)!=0){q=33;break}}}if((n|0)!=0){do{if((g|0)==-1){if(!((h|0)==-1)){break}if(!((j|0)==-1)){break}if(!((k|0)==-1)){break}g=0;h=0;j=c[n+8>>2]|0;k=c[n+12>>2]|0}}while(0);if((t|0)!=255){if((c[n>>2]&134217730|0)!=0){l=2}if((va(n|0,65536,t&255|0)|0)<0){q=46;break}}c[e>>2]=g;c[e+4>>2]=h;c[e+8>>2]=j;c[e+12>>2]=k;c[f>>2]=c[b>>2];c[f+4>>2]=c[d>>2];c[f+8>>2]=c[(c[68016+(p<<2)>>2]|0)+48>>2];c[f+12>>2]=c[(c[68016+(p<<2)>>2]|0)+52>>2];if((Ub(n|0,e|0,c[16874]|0,f|0)|0)<0){q=49;break}if((t|0)!=255){if((va(n|0,65536|l|0,-1|0)|0)<0){q=52;break}}}}p=p+1|0}if((q|0)==30){p=ub()|0;Ya(72048,23056,(u=i,i=i+16|0,c[u>>2]=28720,c[u+8>>2]=p,u)|0)|0;i=u;m=600;v=m;i=a;return v|0}else if((q|0)==33){v=m;i=a;return v|0}else if((q|0)==46){p=ub()|0;Ya(72048,22128,(u=i,i=i+16|0,c[u>>2]=28720,c[u+8>>2]=p,u)|0)|0;i=u;m=500;v=m;i=a;return v|0}else if((q|0)==49){p=ub()|0;Ya(72048,21064,(u=i,i=i+16|0,c[u>>2]=28720,c[u+8>>2]=p,u)|0)|0;i=u;m=700;v=m;i=a;return v|0}else if((q|0)==52){p=ub()|0;Ya(72048,22128,(u=i,i=i+16|0,c[u>>2]=28720,c[u+8>>2]=p,u)|0)|0;i=u;m=500;v=m;i=a;return v|0}else if((q|0)==58){v=m;i=a;return v|0}return 0}function Oe(a){a=a|0;var b=0,d=0,e=0,f=0,g=0;b=i;d=a;if((d|0)==0){Ya(72048,8056,(a=i,i=i+8|0,c[a>>2]=28760,a)|0)|0;i=a;e=1;f=e;i=b;return f|0}while(1){if(!((c[d+8>>2]|0)==-2)){break}if((d|0)==(c[18006]|0)){g=7;break}if((d|0)==(c[18010]|0)){g=7;break}if((c[d+132>>2]|0)==0){d=c[18010]|0}else{d=c[d+132>>2]|0}}do{if((c[d+8>>2]|0)>=0){if((c[d+8>>2]|0)>1){break}e=c[d+8>>2]|0;f=e;i=b;return f|0}}while(0);e=1;f=e;i=b;return f|0}function Pe(a){a=a|0;var b=0,d=0,e=0,f=0,g=0;b=i;d=a;if((d|0)==0){Ya(72048,8056,(a=i,i=i+8|0,c[a>>2]=28816,a)|0)|0;i=a;e=1;f=e;i=b;return f|0}while(1){if(!((c[d+12>>2]|0)==-2)){break}if((d|0)==(c[18006]|0)){g=7;break}if((d|0)==(c[18010]|0)){g=7;break}if((c[d+132>>2]|0)==0){d=c[18010]|0}else{d=c[d+132>>2]|0}}do{if((c[d+12>>2]|0)>=0){if((c[d+12>>2]|0)>1){break}e=c[d+12>>2]|0;f=e;i=b;return f|0}}while(0);e=1;f=e;i=b;return f|0}function Qe(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,j=0;e=i;f=a;a=b;b=d;d=0;if((f|0)==0){Ya(72048,8056,(g=i,i=i+8|0,c[g>>2]=28840,g)|0)|0;i=g;d=200;h=d;i=e;return h|0}c[a>>2]=c[f+40>>2];c[b>>2]=c[f+44>>2];while(1){if((f|0)!=(c[18010]|0)){j=(f|0)!=(c[18006]|0)}else{j=0}if(!j){break}if((c[f+132>>2]|0)==0){f=c[18010]|0}else{f=c[f+132>>2]|0}g=a;c[g>>2]=(c[g>>2]|0)+(c[f+40>>2]|0);g=b;c[g>>2]=(c[g>>2]|0)+(c[f+44>>2]|0)}h=d;i=e;return h|0}function Re(a){a=a|0;var b=0,d=0,e=0,f=0,g=0;b=i;d=a;if((d|0)==0){Ya(72048,8056,(a=i,i=i+8|0,c[a>>2]=28864,a)|0)|0;i=a;e=255;f=e;i=b;return f|0}while(1){if(!((c[d+16>>2]|0)==-2)){break}if((d|0)==(c[18006]|0)){g=7;break}if((d|0)==(c[18010]|0)){g=7;break}if((c[d+132>>2]|0)==0){d=c[18010]|0}else{d=c[d+132>>2]|0}}do{if((c[d+16>>2]|0)>=0){if((c[d+16>>2]|0)>255){break}e=c[d+16>>2]|0;f=e;i=b;return f|0}}while(0);e=255;f=e;i=b;return f|0}function Se(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,j=0;f=i;g=a;a=b;b=0;if((va(c[18076]|0,65536,e|0)|0)<0){e=ub()|0;Ya(72048,22128,(h=i,i=i+16|0,c[h>>2]=28952,c[h+8>>2]=e,h)|0)|0;i=h;b=500}if((b|0)==0){if((Ta(c[18076]|0,a|0,d|0)|0)<0){d=ub()|0;Ya(72048,23056,(h=i,i=i+16|0,c[h>>2]=28952,c[h+8>>2]=d,h)|0)|0;i=h;b=600}}if((b|0)!=0){j=b;i=f;return j|0}if((Ub(c[18076]|0,a|0,g|0,a|0)|0)<0){a=ub()|0;Ya(72048,21064,(h=i,i=i+16|0,c[h>>2]=28952,c[h+8>>2]=a,h)|0)|0;i=h;b=700}j=b;i=f;return j|0}function Te(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0;d=i;i=i+32|0;e=d|0;f=d+8|0;g=d+16|0;h=d+24|0;j=a;a=b;if((j|0)==0){Ya(72048,8056,(k=i,i=i+8|0,c[k>>2]=28784,k)|0)|0;i=k}else{do{if((a|0)!=0){if((a|0)==1){l=6;break}Ya(72048,20136,(k=i,i=i+8|0,c[k>>2]=28784,k)|0)|0;i=k}else{l=6}}while(0);do{if((l|0)==6){Qe(j,e,f)|0;if((a|0)!=0){if((a|0)==1){c[e>>2]=(c[e>>2]|0)+((c[j+48>>2]|0)/2|0);c[f>>2]=(c[f>>2]|0)+((c[j+52>>2]|0)/2|0)}}k=(c[18004]|0)-1|0;a:while(1){if((k|0)<0){l=23;break}do{if((Oe(c[68016+(k<<2)>>2]|0)|0)!=0){if((k|0)>=(c[j+128>>2]|0)){break}Qe(c[68016+(k<<2)>>2]|0,g,h)|0;do{if((c[e>>2]|0)>=(c[g>>2]|0)){if((c[e>>2]|0)>=((c[g>>2]|0)+(c[(c[68016+(k<<2)>>2]|0)+48>>2]|0)|0)){break}if((c[f>>2]|0)<(c[h>>2]|0)){break}if((c[f>>2]|0)<((c[h>>2]|0)+(c[(c[68016+(k<<2)>>2]|0)+52>>2]|0)|0)){break a}}}while(0)}}while(0);k=k-1|0}if((l|0)==23){break}m=c[68016+(k<<2)>>2]|0;n=m;i=d;return n|0}}while(0)}m=0;n=m;i=d;return n|0}function Ue(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0;b=i;i=i+40|0;d=b|0;e=b+8|0;f=b+16|0;g=b+24|0;h=b+32|0;j=a;a=0;k=0;if((c[16998]|0)==0){c[16994]=c[18006];i=b;return}do{if((c[16992]|0)!=0){if((Pe(c[16992]|0)|0)==0){l=22;break}if((c[(c[16992]|0)+116>>2]|0)==0){l=22;break}c[16994]=c[16992];Qe(c[(c[16994]|0)+132>>2]|0,f,g)|0;Qe(c[18008]|0,d,e)|0;c[(c[16994]|0)+40>>2]=(c[d>>2]|0)-(c[f>>2]|0)-(c[71008]|0);c[(c[16994]|0)+44>>2]=(c[e>>2]|0)-(c[g>>2]|0)-(c[71006]|0);if((c[(c[16994]|0)+124>>2]|0)>1){m=aa(((c[(c[16994]|0)+40>>2]|0)%(c[(c[16994]|0)+124>>2]|0)|0|0)/((c[(c[16994]|0)+124>>2]|0)/2|0|0)|0,c[(c[16994]|0)+124>>2]|0)|0;n=(c[16994]|0)+40|0;c[n>>2]=(c[n>>2]|0)+(m-((c[(c[16994]|0)+40>>2]|0)%(c[(c[16994]|0)+124>>2]|0)|0));m=aa(((c[(c[16994]|0)+44>>2]|0)%(c[(c[16994]|0)+124>>2]|0)|0|0)/((c[(c[16994]|0)+124>>2]|0)/2|0|0)|0,c[(c[16994]|0)+124>>2]|0)|0;n=(c[16994]|0)+44|0;c[n>>2]=(c[n>>2]|0)+(m-((c[(c[16994]|0)+44>>2]|0)%(c[(c[16994]|0)+124>>2]|0)|0))}if((c[(c[16994]|0)+116>>2]|0)==2){l=10}else{if((c[(c[16994]|0)+116>>2]|0)==3){l=10}}if((l|0)==10){m=c[(c[16994]|0)+132>>2]|0;if((c[(c[16994]|0)+116>>2]|0)==2){if(((c[(c[16994]|0)+40>>2]|0)+(c[(c[16994]|0)+48>>2]|0)|0)>(c[m+48>>2]|0)){c[(c[16994]|0)+40>>2]=(c[m+48>>2]|0)-(c[(c[16994]|0)+48>>2]|0)}if(((c[(c[16994]|0)+44>>2]|0)+(c[(c[16994]|0)+52>>2]|0)|0)>(c[m+52>>2]|0)){c[(c[16994]|0)+44>>2]=(c[m+52>>2]|0)-(c[(c[16994]|0)+52>>2]|0)}}if((c[(c[16994]|0)+40>>2]|0)<0){c[(c[16994]|0)+40>>2]=0}if((c[(c[16994]|0)+44>>2]|0)<0){c[(c[16994]|0)+44>>2]=0}}}else{l=22}}while(0);if((l|0)==22){m=Te(c[18008]|0,0)|0;if((c[16994]|0)!=(m|0)){do{if((c[16994]|0)!=0){if((Pe(c[16994]|0)|0)==0){break}c[h>>2]=c[16994];c[h+4>>2]=11;Ve(h)|0}}while(0);c[16994]=m;if((Pe(c[16994]|0)|0)!=0){c[h>>2]=c[16994];c[h+4>>2]=10;Ve(h)|0}}Qe(c[(c[16994]|0)+132>>2]|0,f,g)|0}do{if((c[16992]|0)!=0){if((c[16992]|0)!=(c[16994]|0)){break}if((Pe(c[16994]|0)|0)==0){break}if((c[71012]|0)!=(c[(c[18008]|0)+40>>2]|0)){l=35}else{if((c[71010]|0)!=(c[(c[18008]|0)+44>>2]|0)){l=35}}if((l|0)==35){c[h>>2]=c[16994];c[h+4>>2]=15;Ve(h)|0}}}while(0);c[71012]=c[(c[18008]|0)+40>>2];c[71010]=c[(c[18008]|0)+44>>2];if((c[j>>2]|0)!=-1){a:do{switch(c[j>>2]|0){case 13:{if((c[16998]|0)==1){break a}else{l=66;break a}break};case 35:{l=66;break};case 1:{if((c[16998]|0)==2){k=-1;a=1}break};case 2:{if((c[16998]|0)==2){a=1}break};case 5:{if((c[16998]|0)==2){k=1;a=-1}break};case 6:{if((c[16998]|0)==2){a=-1}break};case 7:{if((c[16998]|0)==2){k=-1;a=-1}break};case 0:{if((c[16998]|0)==2){k=-1}break};case 3:{if((c[16998]|0)==2){k=1;a=1}break};case 4:{if((c[16998]|0)==2){k=1}break};case 141:{if((c[16998]|0)==1){break a}else{l=85;break a}break};case 163:{l=85;break};default:{}}}while(0);if((l|0)==66){if((c[16992]|0)==0){c[16992]=c[16994];if((Pe(c[16994]|0)|0)!=0){c[h>>2]=c[16994];c[h+4>>2]=12;Ve(h)|0;c[h>>2]=c[16994];c[h+4>>2]=38;Ve(h)|0;if((c[(c[16994]|0)+116>>2]|0)!=0){Qe(c[18008]|0,d,e)|0;if((c[(c[16994]|0)+120>>2]|0)==0){c[71008]=(c[d>>2]|0)-(c[f>>2]|0)-(c[(c[16994]|0)+40>>2]|0);c[71006]=(c[e>>2]|0)-(c[g>>2]|0)-(c[(c[16994]|0)+44>>2]|0)}else{if((c[(c[16994]|0)+120>>2]|0)==1){c[71008]=(c[(c[16994]|0)+48>>2]|0)/2|0;c[71006]=(c[(c[16994]|0)+52>>2]|0)/2|0}}}}}else{do{if((c[16992]|0)==(c[16994]|0)){if((Pe(c[16994]|0)|0)==0){break}c[h>>2]=c[16994];c[h+4>>2]=38;Ve(h)|0}}while(0)}}else if((l|0)==85){if((c[16992]|0)!=0){if((c[16992]|0)==(c[16994]|0)){if((Pe(c[16994]|0)|0)!=0){c[h>>2]=c[16994];c[h+4>>2]=13;Ve(h)|0}}else{if((Pe(c[16992]|0)|0)!=0){c[h>>2]=c[16994];c[h+4>>2]=14;Ve(h)|0}}}c[16992]=0}if((c[16998]|0)==2){We(a,k)}}i=b;return}function Ve(a){a=a|0;var b=0,d=0,e=0,f=0;b=i;d=a;a=0;if((d|0)==0){Ya(72048,19656,(e=i,i=i+8|0,c[e>>2]=28704,e)|0)|0;i=e;a=800;f=a;i=b;return f|0}else{nc[c[17002]&15](d);f=a;i=b;return f|0}return 0}function We(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;d=i;e=a;a=b;if((e|0)!=0){if((e|0)==(c[70940]|0)){f=5}else{f=3}}else{f=3}do{if((f|0)==3){if((a|0)!=0){if((a|0)==(c[70938]|0)){f=5;break}}c[70936]=0;g=aa(e,c[16999]|0)|0;h=aa(a,c[16999]|0)|0}}while(0);if((f|0)==5){c[70936]=(c[70936]|0)+1;if((c[70936]|0)<(c[17001]|0)){g=aa(e,c[16999]|0)|0;h=aa(a,c[16999]|0)|0}else{g=aa(e,c[17e3]|0)|0;h=aa(a,c[17e3]|0)|0}}c[70940]=e;c[70938]=a;a=(c[18008]|0)+40|0;c[a>>2]=(c[a>>2]|0)+g;g=(c[18008]|0)+44|0;c[g>>2]=(c[g>>2]|0)+h;if((c[(c[18008]|0)+40>>2]|0)<0){c[(c[18008]|0)+40>>2]=0}else{if((c[(c[18008]|0)+40>>2]|0)>((c[(c[16874]|0)+8>>2]|0)-1|0)){c[(c[18008]|0)+40>>2]=(c[(c[16874]|0)+8>>2]|0)-1}}if((c[(c[18008]|0)+44>>2]|0)<0){c[(c[18008]|0)+44>>2]=0;i=d;return}if((c[(c[18008]|0)+44>>2]|0)>((c[(c[16874]|0)+12>>2]|0)-1|0)){c[(c[18008]|0)+44>>2]=(c[(c[16874]|0)+12>>2]|0)-1}i=d;return}function Xe(){var a=0,b=0,d=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0.0,w=0,x=0,y=0,z=0,A=0,B=0,C=0;a=i;i=i+160|0;b=a|0;d=a+16|0;e=a+32|0;f=a+48|0;g=a+64|0;h=a+80|0;j=a+96|0;k=a+112|0;l=a+128|0;m=a+144|0;o=0;p=c[7762]|0;q=c[7763]|0;if((c[28578]|0)>=15){c[7777]=0;c[7778]=0;c[7784]=0;c[7785]=0;c[7791]=0;c[7792]=0;c[7798]=0;c[7799]=0;c[7805]=0;c[7806]=0;c[7812]=0;c[7813]=0;c[7819]=0;c[7820]=0;c[7826]=0;c[7827]=0;c[8022]=0;c[8023]=0;c[7840]=(c[28574]|0)/2|0;c[7841]=(c[28574]|0)/2|0;c[7847]=(c[28574]|0)/2|0;c[7848]=(c[28574]|0)/2|0;c[7854]=(c[28574]|0)/2|0;c[7855]=(c[28574]|0)/2|0;c[7861]=(c[28574]|0)/2|0;c[7862]=(c[28574]|0)/2|0;Le(He(100)|0,1)|0;c[28512]=4;if((De(c[28512]|0)|0)!=0){r=Be()|0;jb(16368,(s=i,i=i+16|0,c[s>>2]=28568,c[s+8>>2]=r,s)|0)|0;i=s}if((He(500)|0)==0){re()}}if((c[18086]|0)==1){pe();if((c[18088]|0)==0){$c()}else{if((c[18088]|0)==1){c[28578]=c[28578]|7}}}if((c[28578]|0)>=7){$c();Ye();c[16878]=255;ve();ue()}r=(c[16974]|0)-((c[7758]|0)/2|0)|0;if((r|0)<0){r=0}else{if((r+(c[7758]|0)|0)>(c[26698]|0)){r=(c[26698]|0)-(c[7758]|0)|0}}t=(c[16975]|0)-((c[7759]|0)/2|0)|0;if((t|0)<0){t=0}else{if((t+(c[7759]|0)|0)>(c[26699]|0)){t=(c[26699]|0)-(c[7759]|0)|0}}if((c[7756]|0)!=(r|0)){u=28}else{if((c[7757]|0)!=(t|0)){u=28}else{u=40}}do{if((u|0)==28){if((c[7764]|0)<=0){u=40;break}if((c[7756]|0)!=(r|0)){if((c[7756]|0)<(r|0)){v=+$(+(r-(c[7756]|0)|0)/+(c[7764]|0));c[7756]=~~(+(c[7756]|0)+v)}else{v=+$(+((c[7756]|0)-r|0)/+(c[7764]|0));c[7756]=~~(+(c[7756]|0)-v)}}if((c[7757]|0)!=(t|0)){if((c[7757]|0)<(t|0)){v=+$(+(t-(c[7757]|0)|0)/+(c[7764]|0));c[7757]=~~(+(c[7757]|0)+v)}else{v=+$(+((c[7757]|0)-t|0)/+(c[7764]|0));c[7757]=~~(+(c[7757]|0)-v)}}c[7764]=(c[7764]|0)-1;$c()}}while(0);if((u|0)==40){c[7764]=1}t=c[7757]|0;while(1){if((t|0)>=((c[7757]|0)+(c[7759]|0)|0)){break}r=c[7756]|0;while(1){if((r|0)>=((c[7756]|0)+(c[7758]|0)|0)){break}w=p+(aa(r-(c[7756]|0)|0,c[7768]|0)|0)|0;x=q+(aa(t-(c[7757]|0)|0,c[7768]|0)|0)|0;Ze(f,w,x,c[7768]|0,c[7768]|0);x=d;w=f;c[x>>2]=c[w>>2];c[x+4>>2]=c[w+4>>2];c[x+8>>2]=c[w+8>>2];c[x+12>>2]=c[w+12>>2];do{if((r|0)<0){u=49}else{if((t|0)<0){u=49;break}if((r|0)>=(c[26698]|0)){u=49;break}if((t|0)>=(c[26699]|0)){u=49;break}if((c[122352+(r*4960|0)+(t*160|0)+84>>2]|0)!=0){c[122352+(r*4960|0)+(t*160|0)+84>>2]=0;if((c[26715]|0)>1){y=16777215}else{if((c[26717]|0)!=-1){y=c[26717]|0}else{if((c[26716]|0)!=-1){y=c[26716]|0}else{y=6324304}}}w=c[16874]|0;Ta(w|0,d|0,Jb(c[(c[16874]|0)+4>>2]|0,y>>>16&255|0,y>>>8&255|0,y&255|0)|0)|0;if((c[70536]|0)!=0){w=(c[(c[70536]|0)+8>>2]|0)/2|0;x=(c[(c[70536]|0)+12>>2]|0)/2|0;z=(c[82540+((c[16614]|0)*292|0)>>2]|0)%4|0;if((z|0)==0){A=(aa(c[7768]|0,r)|0)%(w|0)|0;B=(aa(c[7768]|0,t)|0)%(x|0)|0;Ze(g,A,B,c[7768]|0,c[7768]|0);B=e;A=g;c[B>>2]=c[A>>2];c[B+4>>2]=c[A+4>>2];c[B+8>>2]=c[A+8>>2];c[B+12>>2]=c[A+12>>2]}else if((z|0)==1){A=((aa(c[7768]|0,r)|0)%(w|0)|0)+w|0;B=(aa(c[7768]|0,t)|0)%(x|0)|0;Ze(h,A,B,c[7768]|0,c[7768]|0);B=e;A=h;c[B>>2]=c[A>>2];c[B+4>>2]=c[A+4>>2];c[B+8>>2]=c[A+8>>2];c[B+12>>2]=c[A+12>>2]}else if((z|0)==2){A=(aa(c[7768]|0,r)|0)%(w|0)|0;B=((aa(c[7768]|0,t)|0)%(x|0)|0)+x|0;Ze(j,A,B,c[7768]|0,c[7768]|0);B=e;A=j;c[B>>2]=c[A>>2];c[B+4>>2]=c[A+4>>2];c[B+8>>2]=c[A+8>>2];c[B+12>>2]=c[A+12>>2]}else if((z|0)==3){z=((aa(c[7768]|0,r)|0)%(w|0)|0)+w|0;w=((aa(c[7768]|0,t)|0)%(x|0)|0)+x|0;Ze(k,z,w,c[7768]|0,c[7768]|0);w=e;z=k;c[w>>2]=c[z>>2];c[w+4>>2]=c[z+4>>2];c[w+8>>2]=c[z+8>>2];c[w+12>>2]=c[z+12>>2]}Ub(c[70536]|0,e|0,c[16874]|0,d|0)|0}if((c[122352+(r*4960|0)+(t*160|0)>>2]|0)!=0){Ze(l,c[122352+(r*4960|0)+(t*160|0)+88+(c[122352+(r*4960|0)+(t*160|0)+4>>2]<<3)>>2]|0,c[122352+(r*4960|0)+(t*160|0)+88+(c[122352+(r*4960|0)+(t*160|0)+4>>2]<<3)+4>>2]|0,c[7768]|0,c[7768]|0);z=b;w=l;c[z>>2]=c[w>>2];c[z+4>>2]=c[w+4>>2];c[z+8>>2]=c[w+8>>2];c[z+12>>2]=c[w+12>>2];if((Ub(c[28230]|0,b|0,c[16874]|0,d|0)|0)<0){w=c[n>>2]|0;z=ub()|0;Nb(w|0,16216,(s=i,i=i+8|0,c[s>>2]=z,s)|0)|0;i=s}}do{if((c[16974]|0)==(r|0)){if((c[16975]|0)!=(t|0)){break}if((c[16976]|0)==0){break}if((c[16987]|0)!=0){if((c[16987]|0)==0){break}if((c[16982]|0)>3){break}}Ze(m,c[67768+((c[16978]|0)+(c[16977]|0)<<4)>>2]|0,c[67772+((c[16978]|0)+(c[16977]|0)<<4)>>2]|0,c[67776+((c[16978]|0)+(c[16977]|0)<<4)>>2]|0,c[67780+((c[16978]|0)+(c[16977]|0)<<4)>>2]|0);z=b;w=m;c[z>>2]=c[w>>2];c[z+4>>2]=c[w+4>>2];c[z+8>>2]=c[w+8>>2];c[z+12>>2]=c[w+12>>2];if((Ub(c[28230]|0,b|0,c[16874]|0,d|0)|0)<0){w=c[n>>2]|0;z=ub()|0;Nb(w|0,16216,(s=i,i=i+8|0,c[s>>2]=z,s)|0)|0;i=s}if((c[18086]|0)==1){te();we(c[d>>2]|0,c[d+4>>2]|0)}}}while(0)}}}while(0);if((u|0)==49){u=0;z=c[16874]|0;Ta(z|0,d|0,Jb(c[(c[16874]|0)+4>>2]|0,(c[60012+((c[16612]|0)*524|0)>>2]|0)>>>16&255|0,(c[60012+((c[16612]|0)*524|0)>>2]|0)>>>8&255|0,c[60012+((c[16612]|0)*524|0)>>2]&255|0)|0)|0}r=r+1|0}t=t+1|0}if((c[26715]|0)>1){c[26715]=(c[26715]|0)-1;if((c[26715]|0)==1){$c()}}if((c[16878]|0)==0){c[28578]=0;C=o;i=a;return C|0}_e();c[28578]=0;C=o;i=a;return C|0}function Ye(){var b=0,d=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0;b=i;i=i+104|0;d=b|0;e=b+16|0;f=b+24|0;g=b+40|0;h=b+56|0;j=b+72|0;k=b+88|0;a[e|0]=(c[60012+((c[16612]|0)*524|0)>>2]|0)>>>16&255;a[e+1|0]=(c[60012+((c[16612]|0)*524|0)>>2]|0)>>>8&255;a[e+2|0]=c[60012+((c[16612]|0)*524|0)>>2]&255;switch(c[28568]|0){case 1:{Ze(f,0,0,c[7762]|0,c[(c[16874]|0)+12>>2]|0);l=d;m=f;c[l>>2]=c[m>>2];c[l+4>>2]=c[m+4>>2];c[l+8>>2]=c[m+8>>2];c[l+12>>2]=c[m+12>>2];Ta(c[16874]|0,d|0,Jb(c[(c[16874]|0)+4>>2]|0,a[e|0]|0,a[e+1|0]|0,a[e+2|0]|0)|0)|0;m=(c[7762]|0)+(aa(c[7758]|0,c[7768]|0)|0)|0;Ze(g,m,0,(c[(c[16874]|0)+8>>2]|0)-(c[7762]|0)+(aa(c[7758]|0,c[7768]|0)|0)|0,c[(c[16874]|0)+12>>2]|0);m=d;l=g;c[m>>2]=c[l>>2];c[m+4>>2]=c[l+4>>2];c[m+8>>2]=c[l+8>>2];c[m+12>>2]=c[l+12>>2];Ta(c[16874]|0,d|0,Jb(c[(c[16874]|0)+4>>2]|0,a[e|0]|0,a[e+1|0]|0,a[e+2|0]|0)|0)|0;l=aa(c[7758]|0,c[7768]|0)|0;Ze(h,c[7762]|0,0,l,c[7763]|0);l=d;m=h;c[l>>2]=c[m>>2];c[l+4>>2]=c[m+4>>2];c[l+8>>2]=c[m+8>>2];c[l+12>>2]=c[m+12>>2];Ta(c[16874]|0,d|0,Jb(c[(c[16874]|0)+4>>2]|0,a[e|0]|0,a[e+1|0]|0,a[e+2|0]|0)|0)|0;m=(c[7763]|0)+(aa(c[7759]|0,c[7768]|0)|0)|0;l=aa(c[7758]|0,c[7768]|0)|0;Ze(j,c[7762]|0,m,l,(c[7768]|0)/4|0);l=d;m=j;c[l>>2]=c[m>>2];c[l+4>>2]=c[m+4>>2];c[l+8>>2]=c[m+8>>2];c[l+12>>2]=c[m+12>>2];Ta(c[16874]|0,d|0,Jb(c[(c[16874]|0)+4>>2]|0,a[e|0]|0,a[e+1|0]|0,a[e+2|0]|0)|0)|0;m=aa(c[7758]|0,c[7768]|0)|0;Ze(k,c[7762]|0,(c[16877]|0)+(c[7768]|0)|0,m,(c[(c[16874]|0)+12>>2]|0)-(c[16877]|0)-(c[7768]|0)|0);m=d;l=k;c[m>>2]=c[l>>2];c[m+4>>2]=c[l+4>>2];c[m+8>>2]=c[l+8>>2];c[m+12>>2]=c[l+12>>2];Ta(c[16874]|0,d|0,Jb(c[(c[16874]|0)+4>>2]|0,a[e|0]|0,a[e+1|0]|0,a[e+2|0]|0)|0)|0;i=b;return};case 0:case 2:case 3:case 4:{break};default:{}}d=c[16874]|0;Ta(d|0,0,Jb(c[(c[16874]|0)+4>>2]|0,a[e|0]|0,a[e+1|0]|0,a[e+2|0]|0)|0)|0;i=b;return}function Ze(a,b,d,e,f){a=a|0;b=b|0;d=d|0;e=e|0;f=f|0;var g=0,h=0;g=i;i=i+16|0;h=g|0;c[h>>2]=b;c[h+4>>2]=d;c[h+8>>2]=e;c[h+12>>2]=f;f=a;a=h;c[f>>2]=c[a>>2];c[f+4>>2]=c[a+4>>2];c[f+8>>2]=c[a+8>>2];c[f+12>>2]=c[a+12>>2];i=g;return}function _e(){var b=0,d=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0;b=i;i=i+448|0;d=b|0;e=b+256|0;f=b+272|0;g=b+288|0;h=b+304|0;j=b+320|0;k=b+336|0;l=b+352|0;m=b+368|0;o=b+384|0;p=b+400|0;q=b+416|0;r=b+432|0;s=c[16877]|0;if((c[16878]&1|0)!=0){t=c[16876]|0;Ze(f,t,s,~~(+(c[7768]|0)*10.5),c[7768]|0);u=e;v=f;c[u>>2]=c[v>>2];c[u+4>>2]=c[v+4>>2];c[u+8>>2]=c[v+8>>2];c[u+12>>2]=c[v+12>>2];v=c[16874]|0;Ta(v|0,e|0,Jb(c[(c[16874]|0)+4>>2]|0,(c[60012+((c[16612]|0)*524|0)>>2]|0)>>>16&255|0,(c[60012+((c[16612]|0)*524|0)>>2]|0)>>>8&255|0,c[60012+((c[16612]|0)*524|0)>>2]&255|0)|0)|0;Ze(g,t,s,c[7768]|0,c[7768]|0);v=e;u=g;c[v>>2]=c[u>>2];c[v+4>>2]=c[u+4>>2];c[v+8>>2]=c[u+8>>2];c[v+12>>2]=c[u+12>>2];if((Ub(c[28230]|0,67520,c[16874]|0,e|0)|0)<0){u=c[n>>2]|0;v=ub()|0;Nb(u|0,16216,(w=i,i=i+8|0,c[w>>2]=v,w)|0)|0;i=w}t=t+(c[7768]<<1)+((c[7768]|0)/4|0)|0;Ze(h,t,s,c[7768]|0,c[7768]|0);v=e;u=h;c[v>>2]=c[u>>2];c[v+4>>2]=c[u+4>>2];c[v+8>>2]=c[u+8>>2];c[v+12>>2]=c[u+12>>2];if((Ub(c[28230]|0,67552,c[16874]|0,e|0)|0)<0){u=c[n>>2]|0;v=ub()|0;Nb(u|0,16216,(w=i,i=i+8|0,c[w>>2]=v,w)|0)|0;i=w}t=t+(c[7768]<<1)+((c[7768]|0)/2|0)|0;Ze(j,t,s,c[7768]|0,c[7768]|0);v=e;u=j;c[v>>2]=c[u>>2];c[v+4>>2]=c[u+4>>2];c[v+8>>2]=c[u+8>>2];c[v+12>>2]=c[u+12>>2];if((Ub(c[28230]|0,67728,c[16874]|0,e|0)|0)<0){u=c[n>>2]|0;v=ub()|0;Nb(u|0,16216,(w=i,i=i+8|0,c[w>>2]=v,w)|0)|0;i=w}t=t+((c[7768]|0)*3|0)|0;Ze(k,t,s,c[7768]|0,c[7768]|0);v=e;u=k;c[v>>2]=c[u>>2];c[v+4>>2]=c[u+4>>2];c[v+8>>2]=c[u+8>>2];c[v+12>>2]=c[u+12>>2];if((Ub(c[28230]|0,67536,c[16874]|0,e|0)|0)<0){u=c[n>>2]|0;v=ub()|0;Nb(u|0,16216,(w=i,i=i+8|0,c[w>>2]=v,w)|0)|0;i=w}}if((c[16878]&2|0)!=0){t=(c[16876]|0)+(c[7768]|0)|0;if((c[16878]&1|0)==0){Ze(l,t,s,c[7768]|0,c[7768]|0);v=e;u=l;c[v>>2]=c[u>>2];c[v+4>>2]=c[u+4>>2];c[v+8>>2]=c[u+8>>2];c[v+12>>2]=c[u+12>>2];u=c[16874]|0;Ta(u|0,e|0,Jb(c[(c[16874]|0)+4>>2]|0,(c[60012+((c[16612]|0)*524|0)>>2]|0)>>>16&255|0,(c[60012+((c[16612]|0)*524|0)>>2]|0)>>>8&255|0,c[60012+((c[16612]|0)*524|0)>>2]&255|0)|0)|0}x=10;y=0;while(1){if((y|0)>=2){break}Ya(d|0,16032,(w=i,i=i+8|0,c[w>>2]=((c[16979]|0)/(x|0)|0|0)%10|0,w)|0)|0;i=w;af(a[d|0]|0,t,s);t=t+((c[7768]|0)/2|0)|0;x=(x|0)/10|0;y=y+1|0}}if((c[16878]&4|0)!=0){t=(c[16876]|0)+((c[7768]|0)*3|0)+((c[7768]|0)/2|0)|0;if((c[16878]&1|0)==0){Ze(m,t,s,c[7768]|0,c[7768]|0);u=e;v=m;c[u>>2]=c[v>>2];c[u+4>>2]=c[v+4>>2];c[u+8>>2]=c[v+8>>2];c[u+12>>2]=c[v+12>>2];v=c[16874]|0;Ta(v|0,e|0,Jb(c[(c[16874]|0)+4>>2]|0,(c[60012+((c[16612]|0)*524|0)>>2]|0)>>>16&255|0,(c[60012+((c[16612]|0)*524|0)>>2]|0)>>>8&255|0,c[60012+((c[16612]|0)*524|0)>>2]&255|0)|0)|0}x=10;y=0;while(1){if((y|0)>=2){break}Ya(d|0,16032,(w=i,i=i+8|0,c[w>>2]=((c[16980]|0)/(x|0)|0|0)%10|0,w)|0)|0;i=w;af(a[d|0]|0,t,s);t=t+((c[7768]|0)/2|0)|0;x=(x|0)/10|0;y=y+1|0}}if((c[16878]&8|0)!=0){t=(c[16876]|0)+((c[7768]|0)*6|0)|0;if((c[16878]&1|0)==0){Ze(o,t,s,(c[7768]|0)+((c[7768]|0)/2|0)|0,c[7768]|0);v=e;u=o;c[v>>2]=c[u>>2];c[v+4>>2]=c[u+4>>2];c[v+8>>2]=c[u+8>>2];c[v+12>>2]=c[u+12>>2];u=c[16874]|0;Ta(u|0,e|0,Jb(c[(c[16874]|0)+4>>2]|0,(c[60012+((c[16612]|0)*524|0)>>2]|0)>>>16&255|0,(c[60012+((c[16612]|0)*524|0)>>2]|0)>>>8&255|0,c[60012+((c[16612]|0)*524|0)>>2]&255|0)|0)|0}x=100;y=0;while(1){if((y|0)>=3){break}Ya(d|0,16032,(w=i,i=i+8|0,c[w>>2]=((c[16981]|0)/(x|0)|0|0)%10|0,w)|0)|0;i=w;af(a[d|0]|0,t,s);t=t+((c[7768]|0)/2|0)|0;x=(x|0)/10|0;y=y+1|0}}if((c[16878]&16|0)!=0){t=(c[16876]|0)+((c[7768]|0)*9|0)|0;if((c[16878]&1|0)==0){Ze(p,t,s,(c[7768]|0)+((c[7768]|0)/2|0)|0,c[7768]|0);u=e;v=p;c[u>>2]=c[v>>2];c[u+4>>2]=c[v+4>>2];c[u+8>>2]=c[v+8>>2];c[u+12>>2]=c[v+12>>2];v=c[16874]|0;Ta(v|0,e|0,Jb(c[(c[16874]|0)+4>>2]|0,(c[60012+((c[16612]|0)*524|0)>>2]|0)>>>16&255|0,(c[60012+((c[16612]|0)*524|0)>>2]|0)>>>8&255|0,c[60012+((c[16612]|0)*524|0)>>2]&255|0)|0)|0}x=100;y=0;while(1){if((y|0)>=3){break}Ya(d|0,16032,(w=i,i=i+8|0,c[w>>2]=((c[82540+((c[16614]|0)*292|0)>>2]|0)/(x|0)|0|0)%10|0,w)|0)|0;i=w;af(a[d|0]|0,t,s);t=t+((c[7768]|0)/2|0)|0;x=(x|0)/10|0;y=y+1|0}}if((c[16878]&32|0)!=0){t=(c[16876]|0)+((c[7768]|0)*10|0)+((c[7768]|0)/2|0)|0;Ze(q,t,s,((c[7768]|0)*5|0)+((c[7768]|0)/2|0)|0,c[7768]|0);x=e;v=q;c[x>>2]=c[v>>2];c[x+4>>2]=c[v+4>>2];c[x+8>>2]=c[v+8>>2];c[x+12>>2]=c[v+12>>2];v=c[16874]|0;Ta(v|0,e|0,Jb(c[(c[16874]|0)+4>>2]|0,(c[60012+((c[16612]|0)*524|0)>>2]|0)>>>16&255|0,(c[60012+((c[16612]|0)*524|0)>>2]|0)>>>8&255|0,c[60012+((c[16612]|0)*524|0)>>2]&255|0)|0)|0;a[d|0]=45;af(a[d|0]|0,t,s);y=0;while(1){if(!(y>>>0<(Of(82512+((c[16614]|0)*292|0)|0)|0)>>>0)){break}af(a[82512+((c[16614]|0)*292|0)+y|0]|0,t+((aa(y+1|0,c[7768]|0)|0)/2|0)|0,s);y=y+1|0}}if((c[16878]&64|0)==0){c[16878]=0;i=b;return}a[114336]=(c[60056+((c[16612]|0)*524|0)>>2]|0)>>>16&255;a[114337]=(c[60056+((c[16612]|0)*524|0)>>2]|0)>>>8&255;a[114338]=c[60056+((c[16612]|0)*524|0)>>2]&255;a[282152]=(c[60012+((c[16612]|0)*524|0)>>2]|0)>>>16&255;a[282153]=(c[60012+((c[16612]|0)*524|0)>>2]|0)>>>8&255;a[282154]=c[60012+((c[16612]|0)*524|0)>>2]&255;if((a[106800]|0)==95){Ya(d|0,15776,(w=i,i=i+8|0,c[w>>2]=106801,w)|0)|0;i=w}else{if((Of(106800)|0)>>>0>0>>>0){Ya(d|0,15640,(w=i,i=i+16|0,c[w>>2]=54960,c[w+8>>2]=106800,w)|0)|0;i=w}else{Qf(d|0,283256)|0}}if((Of(d|0)|0)>>>0>0>>>0){c[28228]=rd(c[28582]|0,d|0,114336,282152)|0;Ze(r,c[70552]|0,c[70553]|0,c[(c[28228]|0)+8>>2]|0,c[(c[28228]|0)+12>>2]|0);d=e;w=r;c[d>>2]=c[w>>2];c[d+4>>2]=c[w+4>>2];c[d+8>>2]=c[w+8>>2];c[d+12>>2]=c[w+12>>2];Ub(c[28228]|0,0,c[16874]|0,e|0)|0;hc(c[28228]|0)}c[16878]=0;i=b;return}



function sd(a,b,e){a=a|0;b=b|0;e=e|0;var f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0;f=i;i=i+16|0;g=f|0;h=e;e=95;c[g+4>>2]=(c[7768]|0)/16|0;c[g+12>>2]=(c[b+12>>2]|0)-((c[7768]|0)/16|0);if((d[h]|0|0)<128){e=(d[h]|0)-32|0;j=e;k=117448+(j<<3)|0;l=k|0;m=c[l>>2]|0;n=g|0;c[n>>2]=m;o=e;p=117448+(o<<3)|0;q=p+4|0;r=c[q>>2]|0;s=g|0;t=c[s>>2]|0;u=r-t|0;v=u+1|0;w=g+8|0;c[w>>2]=v;x=a;y=g;c[x>>2]=c[y>>2];c[x+4>>2]=c[y+4>>2];c[x+8>>2]=c[y+8>>2];c[x+12>>2]=c[y+12>>2];i=f;return}do{if((d[h]|0|0)==195){if((d[h+1|0]|0|0)!=132){z=6;break}e=96}else{z=6}}while(0);if((z|0)==6){do{if((d[h]|0|0)==195){if((d[h+1|0]|0|0)!=150){z=9;break}e=97}else{z=9}}while(0);if((z|0)==9){do{if((d[h]|0|0)==195){if((d[h+1|0]|0|0)!=156){z=12;break}e=98}else{z=12}}while(0);if((z|0)==12){do{if((d[h]|0|0)==195){if((d[h+1|0]|0|0)!=159){z=15;break}e=99}else{z=15}}while(0);if((z|0)==15){do{if((d[h]|0|0)==195){if((d[h+1|0]|0|0)!=164){z=18;break}e=100}else{z=18}}while(0);if((z|0)==18){do{if((d[h]|0|0)==195){if((d[h+1|0]|0|0)!=182){z=21;break}e=101}else{z=21}}while(0);if((z|0)==21){do{if((d[h]|0|0)==195){if((d[h+1|0]|0|0)!=188){z=24;break}e=102}else{z=24}}while(0);if((z|0)==24){do{if((d[h]|0|0)==196){if((d[h+1|0]|0|0)!=132){z=27;break}e=103}else{z=27}}while(0);if((z|0)==27){do{if((d[h]|0|0)==196){if((d[h+1|0]|0|0)!=134){z=30;break}e=104}else{z=30}}while(0);if((z|0)==30){do{if((d[h]|0|0)==196){if((d[h+1|0]|0|0)!=152){z=33;break}e=105}else{z=33}}while(0);if((z|0)==33){do{if((d[h]|0|0)==197){if((d[h+1|0]|0|0)!=129){z=36;break}e=106}else{z=36}}while(0);if((z|0)==36){do{if((d[h]|0|0)==197){if((d[h+1|0]|0|0)!=131){z=39;break}e=107}else{z=39}}while(0);if((z|0)==39){do{if((d[h]|0|0)==195){if((d[h+1|0]|0|0)!=147){z=42;break}e=108}else{z=42}}while(0);if((z|0)==42){do{if((d[h]|0|0)==197){if((d[h+1|0]|0|0)!=154){z=45;break}e=109}else{z=45}}while(0);if((z|0)==45){do{if((d[h]|0|0)==197){if((d[h+1|0]|0|0)!=185){z=48;break}e=110}else{z=48}}while(0);if((z|0)==48){do{if((d[h]|0|0)==197){if((d[h+1|0]|0|0)!=187){z=51;break}e=111}else{z=51}}while(0);if((z|0)==51){do{if((d[h]|0|0)==196){if((d[h+1|0]|0|0)!=133){z=54;break}e=112}else{z=54}}while(0);if((z|0)==54){do{if((d[h]|0|0)==196){if((d[h+1|0]|0|0)!=135){z=57;break}e=113}else{z=57}}while(0);if((z|0)==57){do{if((d[h]|0|0)==196){if((d[h+1|0]|0|0)!=153){z=60;break}e=114}else{z=60}}while(0);if((z|0)==60){do{if((d[h]|0|0)==197){if((d[h+1|0]|0|0)!=130){z=63;break}e=115}else{z=63}}while(0);if((z|0)==63){do{if((d[h]|0|0)==197){if((d[h+1|0]|0|0)!=132){z=66;break}e=116}else{z=66}}while(0);if((z|0)==66){do{if((d[h]|0|0)==195){if((d[h+1|0]|0|0)!=179){z=69;break}e=117}else{z=69}}while(0);if((z|0)==69){do{if((d[h]|0|0)==197){if((d[h+1|0]|0|0)!=155){z=72;break}e=118}else{z=72}}while(0);if((z|0)==72){do{if((d[h]|0|0)==197){if((d[h+1|0]|0|0)!=186){z=75;break}e=119}else{z=75}}while(0);if((z|0)==75){do{if((d[h]|0|0)==197){if((d[h+1|0]|0|0)!=188){z=78;break}e=120}else{z=78}}while(0);if((z|0)==78){do{if((d[h]|0|0)==195){if((d[h+1|0]|0|0)!=129){z=81;break}e=121}else{z=81}}while(0);if((z|0)==81){do{if((d[h]|0|0)==196){if((d[h+1|0]|0|0)!=140){z=84;break}e=122}else{z=84}}while(0);if((z|0)==84){do{if((d[h]|0|0)==196){if((d[h+1|0]|0|0)!=142){z=87;break}e=123}else{z=87}}while(0);if((z|0)==87){do{if((d[h]|0|0)==195){if((d[h+1|0]|0|0)!=137){z=90;break}e=124}else{z=90}}while(0);if((z|0)==90){do{if((d[h]|0|0)==195){if((d[h+1|0]|0|0)!=141){z=93;break}e=125}else{z=93}}while(0);if((z|0)==93){do{if((d[h]|0|0)==196){if((d[h+1|0]|0|0)!=185){z=96;break}e=126}else{z=96}}while(0);if((z|0)==96){do{if((d[h]|0|0)==196){if((d[h+1|0]|0|0)!=189){z=99;break}e=127}else{z=99}}while(0);if((z|0)==99){do{if((d[h]|0|0)==197){if((d[h+1|0]|0|0)!=135){z=102;break}e=128}else{z=102}}while(0);if((z|0)==102){do{if((d[h]|0|0)==195){if((d[h+1|0]|0|0)!=148){z=105;break}e=129}else{z=105}}while(0);if((z|0)==105){do{if((d[h]|0|0)==197){if((d[h+1|0]|0|0)!=148){z=108;break}e=130}else{z=108}}while(0);if((z|0)==108){do{if((d[h]|0|0)==197){if((d[h+1|0]|0|0)!=160){z=111;break}e=131}else{z=111}}while(0);if((z|0)==111){do{if((d[h]|0|0)==197){if((d[h+1|0]|0|0)!=164){z=114;break}e=132}else{z=114}}while(0);if((z|0)==114){do{if((d[h]|0|0)==195){if((d[h+1|0]|0|0)!=154){z=117;break}e=133}else{z=117}}while(0);if((z|0)==117){do{if((d[h]|0|0)==195){if((d[h+1|0]|0|0)!=157){z=120;break}e=134}else{z=120}}while(0);if((z|0)==120){do{if((d[h]|0|0)==197){if((d[h+1|0]|0|0)!=189){z=123;break}e=135}else{z=123}}while(0);if((z|0)==123){do{if((d[h]|0|0)==195){if((d[h+1|0]|0|0)!=161){z=126;break}e=136}else{z=126}}while(0);if((z|0)==126){do{if((d[h]|0|0)==196){if((d[h+1|0]|0|0)!=141){z=129;break}e=137}else{z=129}}while(0);if((z|0)==129){do{if((d[h]|0|0)==196){if((d[h+1|0]|0|0)!=143){z=132;break}e=138}else{z=132}}while(0);if((z|0)==132){do{if((d[h]|0|0)==195){if((d[h+1|0]|0|0)!=169){z=135;break}e=139}else{z=135}}while(0);if((z|0)==135){do{if((d[h]|0|0)==195){if((d[h+1|0]|0|0)!=173){z=138;break}e=140}else{z=138}}while(0);if((z|0)==138){do{if((d[h]|0|0)==196){if((d[h+1|0]|0|0)!=186){z=141;break}e=141}else{z=141}}while(0);if((z|0)==141){do{if((d[h]|0|0)==196){if((d[h+1|0]|0|0)!=190){z=144;break}e=142}else{z=144}}while(0);if((z|0)==144){do{if((d[h]|0|0)==197){if((d[h+1|0]|0|0)!=136){z=147;break}e=143}else{z=147}}while(0);if((z|0)==147){do{if((d[h]|0|0)==195){if((d[h+1|0]|0|0)!=180){z=150;break}e=144}else{z=150}}while(0);if((z|0)==150){do{if((d[h]|0|0)==197){if((d[h+1|0]|0|0)!=149){z=153;break}e=145}else{z=153}}while(0);if((z|0)==153){do{if((d[h]|0|0)==197){if((d[h+1|0]|0|0)!=161){z=156;break}e=146}else{z=156}}while(0);if((z|0)==156){do{if((d[h]|0|0)==197){if((d[h+1|0]|0|0)!=165){z=159;break}e=147}else{z=159}}while(0);if((z|0)==159){do{if((d[h]|0|0)==195){if((d[h+1|0]|0|0)!=186){z=162;break}e=148}else{z=162}}while(0);if((z|0)==162){do{if((d[h]|0|0)==195){if((d[h+1|0]|0|0)!=189){z=165;break}e=149}else{z=165}}while(0);if((z|0)==165){do{if((d[h]|0|0)==197){if((d[h+1|0]|0|0)!=190){z=168;break}e=150}else{z=168}}while(0);if((z|0)==168){do{if((d[h]|0|0)==195){if((d[h+1|0]|0|0)!=133){z=171;break}e=151}else{z=171}}while(0);if((z|0)==171){do{if((d[h]|0|0)==195){if((d[h+1|0]|0|0)!=165){z=174;break}e=152}else{z=174}}while(0);if((z|0)==174){do{if((d[h]|0|0)==208){if((d[h+1|0]|0|0)!=144){z=177;break}e=153}else{z=177}}while(0);if((z|0)==177){do{if((d[h]|0|0)==208){if((d[h+1|0]|0|0)!=145){z=180;break}e=154}else{z=180}}while(0);if((z|0)==180){do{if((d[h]|0|0)==208){if((d[h+1|0]|0|0)!=146){z=183;break}e=155}else{z=183}}while(0);if((z|0)==183){do{if((d[h]|0|0)==208){if((d[h+1|0]|0|0)!=147){z=186;break}e=156}else{z=186}}while(0);if((z|0)==186){do{if((d[h]|0|0)==208){if((d[h+1|0]|0|0)!=148){z=189;break}e=157}else{z=189}}while(0);if((z|0)==189){do{if((d[h]|0|0)==208){if((d[h+1|0]|0|0)!=149){z=192;break}e=158}else{z=192}}while(0);if((z|0)==192){do{if((d[h]|0|0)==208){if((d[h+1|0]|0|0)!=150){z=195;break}e=159}else{z=195}}while(0);if((z|0)==195){do{if((d[h]|0|0)==208){if((d[h+1|0]|0|0)!=151){z=198;break}e=160}else{z=198}}while(0);if((z|0)==198){do{if((d[h]|0|0)==208){if((d[h+1|0]|0|0)!=152){z=201;break}e=161}else{z=201}}while(0);if((z|0)==201){do{if((d[h]|0|0)==208){if((d[h+1|0]|0|0)!=153){z=204;break}e=162}else{z=204}}while(0);if((z|0)==204){do{if((d[h]|0|0)==208){if((d[h+1|0]|0|0)!=154){z=207;break}e=163}else{z=207}}while(0);if((z|0)==207){do{if((d[h]|0|0)==208){if((d[h+1|0]|0|0)!=155){z=210;break}e=164}else{z=210}}while(0);if((z|0)==210){do{if((d[h]|0|0)==208){if((d[h+1|0]|0|0)!=156){z=213;break}e=165}else{z=213}}while(0);if((z|0)==213){do{if((d[h]|0|0)==208){if((d[h+1|0]|0|0)!=157){z=216;break}e=166}else{z=216}}while(0);if((z|0)==216){do{if((d[h]|0|0)==208){if((d[h+1|0]|0|0)!=158){z=219;break}e=167}else{z=219}}while(0);if((z|0)==219){do{if((d[h]|0|0)==208){if((d[h+1|0]|0|0)!=159){z=222;break}e=168}else{z=222}}while(0);if((z|0)==222){do{if((d[h]|0|0)==208){if((d[h+1|0]|0|0)!=160){z=225;break}e=169}else{z=225}}while(0);if((z|0)==225){do{if((d[h]|0|0)==208){if((d[h+1|0]|0|0)!=161){z=228;break}e=170}else{z=228}}while(0);if((z|0)==228){do{if((d[h]|0|0)==208){if((d[h+1|0]|0|0)!=162){z=231;break}e=171}else{z=231}}while(0);if((z|0)==231){do{if((d[h]|0|0)==208){if((d[h+1|0]|0|0)!=163){z=234;break}e=172}else{z=234}}while(0);if((z|0)==234){do{if((d[h]|0|0)==208){if((d[h+1|0]|0|0)!=164){z=237;break}e=173}else{z=237}}while(0);if((z|0)==237){do{if((d[h]|0|0)==208){if((d[h+1|0]|0|0)!=165){z=240;break}e=174}else{z=240}}while(0);if((z|0)==240){do{if((d[h]|0|0)==208){if((d[h+1|0]|0|0)!=166){z=243;break}e=175}else{z=243}}while(0);if((z|0)==243){do{if((d[h]|0|0)==208){if((d[h+1|0]|0|0)!=167){z=246;break}e=176}else{z=246}}while(0);if((z|0)==246){do{if((d[h]|0|0)==208){if((d[h+1|0]|0|0)!=168){z=249;break}e=177}else{z=249}}while(0);if((z|0)==249){do{if((d[h]|0|0)==208){if((d[h+1|0]|0|0)!=169){z=252;break}e=178}else{z=252}}while(0);if((z|0)==252){do{if((d[h]|0|0)==208){if((d[h+1|0]|0|0)!=170){z=255;break}e=179}else{z=255}}while(0);if((z|0)==255){do{if((d[h]|0|0)==208){if((d[h+1|0]|0|0)!=171){z=258;break}e=180}else{z=258}}while(0);if((z|0)==258){do{if((d[h]|0|0)==208){if((d[h+1|0]|0|0)!=172){z=261;break}e=181}else{z=261}}while(0);if((z|0)==261){do{if((d[h]|0|0)==208){if((d[h+1|0]|0|0)!=173){z=264;break}e=182}else{z=264}}while(0);if((z|0)==264){do{if((d[h]|0|0)==208){if((d[h+1|0]|0|0)!=174){z=267;break}e=183}else{z=267}}while(0);if((z|0)==267){do{if((d[h]|0|0)==208){if((d[h+1|0]|0|0)!=175){z=270;break}e=184}else{z=270}}while(0);if((z|0)==270){do{if((d[h]|0|0)==208){if((d[h+1|0]|0|0)!=176){z=273;break}e=185}else{z=273}}while(0);if((z|0)==273){do{if((d[h]|0|0)==208){if((d[h+1|0]|0|0)!=177){z=276;break}e=186}else{z=276}}while(0);if((z|0)==276){do{if((d[h]|0|0)==208){if((d[h+1|0]|0|0)!=178){z=279;break}e=187}else{z=279}}while(0);if((z|0)==279){do{if((d[h]|0|0)==208){if((d[h+1|0]|0|0)!=179){z=282;break}e=188}else{z=282}}while(0);if((z|0)==282){do{if((d[h]|0|0)==208){if((d[h+1|0]|0|0)!=180){z=285;break}e=189}else{z=285}}while(0);if((z|0)==285){do{if((d[h]|0|0)==208){if((d[h+1|0]|0|0)!=181){z=288;break}e=190}else{z=288}}while(0);if((z|0)==288){do{if((d[h]|0|0)==208){if((d[h+1|0]|0|0)!=182){z=291;break}e=191}else{z=291}}while(0);if((z|0)==291){do{if((d[h]|0|0)==208){if((d[h+1|0]|0|0)!=183){z=294;break}e=192}else{z=294}}while(0);if((z|0)==294){do{if((d[h]|0|0)==208){if((d[h+1|0]|0|0)!=184){z=297;break}e=193}else{z=297}}while(0);if((z|0)==297){do{if((d[h]|0|0)==208){if((d[h+1|0]|0|0)!=185){z=300;break}e=194}else{z=300}}while(0);if((z|0)==300){do{if((d[h]|0|0)==208){if((d[h+1|0]|0|0)!=186){z=303;break}e=195}else{z=303}}while(0);if((z|0)==303){do{if((d[h]|0|0)==208){if((d[h+1|0]|0|0)!=187){z=306;break}e=196}else{z=306}}while(0);if((z|0)==306){do{if((d[h]|0|0)==208){if((d[h+1|0]|0|0)!=188){z=309;break}e=197}else{z=309}}while(0);if((z|0)==309){do{if((d[h]|0|0)==208){if((d[h+1|0]|0|0)!=189){z=312;break}e=198}else{z=312}}while(0);if((z|0)==312){do{if((d[h]|0|0)==208){if((d[h+1|0]|0|0)!=190){z=315;break}e=199}else{z=315}}while(0);if((z|0)==315){do{if((d[h]|0|0)==208){if((d[h+1|0]|0|0)!=191){z=318;break}e=200}else{z=318}}while(0);if((z|0)==318){do{if((d[h]|0|0)==209){if((d[h+1|0]|0|0)!=128){z=321;break}e=201}else{z=321}}while(0);if((z|0)==321){do{if((d[h]|0|0)==209){if((d[h+1|0]|0|0)!=129){z=324;break}e=202}else{z=324}}while(0);if((z|0)==324){do{if((d[h]|0|0)==209){if((d[h+1|0]|0|0)!=130){z=327;break}e=203}else{z=327}}while(0);if((z|0)==327){do{if((d[h]|0|0)==209){if((d[h+1|0]|0|0)!=131){z=330;break}e=204}else{z=330}}while(0);if((z|0)==330){do{if((d[h]|0|0)==209){if((d[h+1|0]|0|0)!=132){z=333;break}e=205}else{z=333}}while(0);if((z|0)==333){do{if((d[h]|0|0)==209){if((d[h+1|0]|0|0)!=133){z=336;break}e=206}else{z=336}}while(0);if((z|0)==336){do{if((d[h]|0|0)==209){if((d[h+1|0]|0|0)!=134){z=339;break}e=207}else{z=339}}while(0);if((z|0)==339){do{if((d[h]|0|0)==209){if((d[h+1|0]|0|0)!=135){z=342;break}e=208}else{z=342}}while(0);if((z|0)==342){do{if((d[h]|0|0)==209){if((d[h+1|0]|0|0)!=136){z=345;break}e=209}else{z=345}}while(0);if((z|0)==345){do{if((d[h]|0|0)==209){if((d[h+1|0]|0|0)!=137){z=348;break}e=210}else{z=348}}while(0);if((z|0)==348){do{if((d[h]|0|0)==209){if((d[h+1|0]|0|0)!=138){z=351;break}e=211}else{z=351}}while(0);if((z|0)==351){do{if((d[h]|0|0)==209){if((d[h+1|0]|0|0)!=139){z=354;break}e=212}else{z=354}}while(0);if((z|0)==354){do{if((d[h]|0|0)==209){if((d[h+1|0]|0|0)!=140){z=357;break}e=213}else{z=357}}while(0);if((z|0)==357){do{if((d[h]|0|0)==209){if((d[h+1|0]|0|0)!=141){z=360;break}e=214}else{z=360}}while(0);if((z|0)==360){do{if((d[h]|0|0)==209){if((d[h+1|0]|0|0)!=142){z=363;break}e=215}else{z=363}}while(0);if((z|0)==363){do{if((d[h]|0|0)==209){if((d[h+1|0]|0|0)!=143){z=366;break}e=216}else{z=366}}while(0);if((z|0)==366){do{if((d[h]|0|0)==208){if((d[h+1|0]|0|0)!=129){z=369;break}e=217}else{z=369}}while(0);if((z|0)==369){do{if((d[h]|0|0)==209){if((d[h+1|0]|0|0)!=145){z=372;break}e=218}else{z=372}}while(0);if((z|0)==372){do{if((d[h]|0|0)==196){if((d[h+1|0]|0|0)!=155){z=375;break}e=219}else{z=375}}while(0);if((z|0)==375){do{if((d[h]|0|0)==197){if((d[h+1|0]|0|0)!=153){z=378;break}e=220}else{z=378}}while(0);if((z|0)==378){do{if((d[h]|0|0)==197){if((d[h+1|0]|0|0)!=175){z=381;break}e=221}else{z=381}}while(0);if((z|0)==381){e=95}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}j=e;k=117448+(j<<3)|0;l=k|0;m=c[l>>2]|0;n=g|0;c[n>>2]=m;o=e;p=117448+(o<<3)|0;q=p+4|0;r=c[q>>2]|0;s=g|0;t=c[s>>2]|0;u=r-t|0;v=u+1|0;w=g+8|0;c[w>>2]=v;x=a;y=g;c[x>>2]=c[y>>2];c[x+4>>2]=c[y+4>>2];c[x+8>>2]=c[y+8>>2];c[x+12>>2]=c[y+12>>2];i=f;return}function td(e,f,g,h){e=e|0;f=f|0;g=g|0;h=h|0;var j=0,k=0,l=0;j=i;k=e;e=h;h=d[(c[k+4>>2]|0)+9|0]|0;l=(c[k+20>>2]|0)+(aa(g,c[k+16>>2]|0)|0)+(aa(f,h)|0)|0;f=h;if((f|0)==2){b[l>>1]=e;i=j;return}else if((f|0)==3){a[l|0]=e&255;a[l+1|0]=e>>>8&255;a[l+2|0]=e>>>16&255;i=j;return}else if((f|0)==4){c[l>>2]=e;i=j;return}else if((f|0)==1){a[l]=e;i=j;return}else{i=j;return}}function ud(){c[19634]=(aa(c[19634]|0,103515245)|0)+12345;return(c[19634]|0)>>>7|0}function vd(a){a=a|0;c[19634]=(c[19634]|0)+a;i=i;return}function wd(){var a=0,b=0,d=0,e=0,f=0,g=0,h=0;a=i;i=i+560|0;b=a|0;d=a+8|0;if((c[28568]|0)==5){e=fd(b,1,114008,114e3,113992)|0;c[18084]=c[18084]|e;if((c[b>>2]|0)==14){if((c[71614]|0)==1){Td()|0;c[28568]=1;c[71614]=0}else{c[71614]=1;Ya(112648,22200,(f=i,i=i+1|0,i=i+7&-8,c[f>>2]=0,f)|0)|0;i=f;c[28226]=1}}else{if((c[b>>2]|0)!=-1){if((c[71614]|0)==1){c[28226]=1;Ya(112648,27128,(f=i,i=i+1|0,i=i+7&-8,c[f>>2]=0,f)|0)|0;i=f}c[71614]=0}}switch(c[b>>2]|0){case 21:{if((c[16614]|0)<((c[28580]|0)-1|0)){c[82544+((c[16614]|0)*292|0)>>2]=0;c[16614]=(c[16614]|0)+1;c[82544+((c[16614]|0)*292|0)>>2]=1;c[18080]=-1;$e(3,0)|0;Qd()|0}break};case 17:{cf(31076);break};case 18:{if((c[82540+((c[16614]|0)*292|0)>>2]|0)>1){f=82540+((c[16614]|0)*292|0)|0;c[f>>2]=(c[f>>2]|0)-1;c[18080]=-1;$e(3,0)|0;Qd()|0}break};case 0:{Vd(0);break};case 34:{g=0;while(1){if((g|0)>=4){break}Vd(2);g=g+1|0}break};case 28:{vf();break};case 35:{Xd();break};case 33:{g=0;while(1){if((g|0)>=4){break}Vd(0);g=g+1|0}break};case 4:{Vd(2);break};case 6:{Vd(1);break};case 2:{Vd(3);break};case 27:{uf();break};case 20:{if((c[16614]|0)>0){c[82544+((c[16614]|0)*292|0)>>2]=0;c[16614]=(c[16614]|0)-1;c[82544+((c[16614]|0)*292|0)>>2]=1;c[18080]=-1;$e(3,0)|0;Qd()|0}break};case 19:{if((c[82540+((c[16614]|0)*292|0)>>2]|0)<(c[82532+((c[16614]|0)*292|0)>>2]|0)){g=82540+((c[16614]|0)*292|0)|0;c[g>>2]=(c[g>>2]|0)+1;c[18080]=-1;$e(3,0)|0;Qd()|0}break};default:{}}}else{if((c[28568]|0)==1){g=fd(b,1,114008,114e3,113992)|0;c[18084]=c[18084]|g;if((c[18080]|0)!=0){c[18080]=(c[18080]|0)-1}else{if((c[18080]|0)==0){c[18080]=(c[18080]|0)-1;c[b>>2]=8}}if((xd(4,0)|0)!=0){if((c[b>>2]|0)==-1){if((c[16982]|0)==0){c[b>>2]=xd(8,0)|0}}else{c[b>>2]=14}}switch(c[b>>2]|0){case 20:{if((c[16614]|0)>0){c[82544+((c[16614]|0)*292|0)>>2]=0;c[16614]=(c[16614]|0)-1;c[82544+((c[16614]|0)*292|0)>>2]=1;c[18080]=-1;$e(3,0)|0;if((be()|0)!=0){c[28568]=0;c[28158]=c[28158]|15}else{c[28578]=c[28578]|7}}break};case 21:{if((c[16614]|0)<((c[28580]|0)-1|0)){c[82544+((c[16614]|0)*292|0)>>2]=0;c[16614]=(c[16614]|0)+1;c[82544+((c[16614]|0)*292|0)>>2]=1;c[18080]=-1;$e(3,0)|0;if((be()|0)!=0){c[28568]=0;c[28158]=c[28158]|15}else{c[28578]=c[28578]|7}}break};case 22:case 23:{break};case 24:{break};case 25:{break};case 27:{uf();break};case 28:{vf();break};case 29:case 30:case 31:case 32:{break};case 19:{if((c[82540+((c[16614]|0)*292|0)>>2]|0)<(c[82536+((c[16614]|0)*292|0)>>2]|0)){g=82540+((c[16614]|0)*292|0)|0;c[g>>2]=(c[g>>2]|0)+1;c[18080]=-1;$e(3,0)|0;if((be()|0)!=0){c[28568]=0;c[28158]=c[28158]|15}else{c[28578]=c[28578]|7}}break};case 0:case 4:case 6:case 2:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 26:{yd(c[b>>2]|0);break};case 17:{cf(31076);break};case 18:{if((c[82540+((c[16614]|0)*292|0)>>2]|0)>1){g=82540+((c[16614]|0)*292|0)|0;c[g>>2]=(c[g>>2]|0)-1;c[18080]=-1;$e(3,0)|0;if((be()|0)!=0){c[28568]=0;c[28158]=c[28158]|15}else{c[28578]=c[28578]|7}}break};default:{}}}else{if((c[28568]|0)==0){g=fd(b,1,114008,114e3,113992)|0;c[18084]=c[18084]|g;if((c[b>>2]|0)!=-1){xd(1,0)|0}xd(2,0)|0;switch(c[b>>2]|0){case 23:{if((c[28156]|0)==1){c[82540+((c[16614]|0)*292|0)>>2]=c[82536+((c[16614]|0)*292|0)>>2];c[28158]=c[28158]|3}else{if((c[28156]|0)==2){c[82544+((c[16614]|0)*292|0)>>2]=0;c[16614]=(c[28580]|0)-1;c[82544+((c[16614]|0)*292|0)>>2]=1;c[28158]=c[28158]|3}}break};case 24:case 25:{break};case 26:{Bd(5);break};case 27:{uf();break};case 28:{vf();break};case 29:case 30:case 31:case 32:{break};case 9:case 10:case 11:case 12:{break};case 13:{Bd(c[28156]|0);break};case 14:{c[28156]=6;c[28158]=c[28158]|3;break};case 15:{Bd(3);break};case 16:{Bd(4);break};case 17:{cf(31076);break};case 18:{zd(1);break};case 19:{Ad(1);break};case 20:{zd(2);break};case 21:{Ad(2);break};case 22:{if((c[28156]|0)==1){c[82540+((c[16614]|0)*292|0)>>2]=1;c[28158]=c[28158]|3}else{if((c[28156]|0)==2){c[82544+((c[16614]|0)*292|0)>>2]=0;c[16614]=0;c[82544+((c[16614]|0)*292|0)>>2]=1;c[28158]=c[28158]|3}}break};case 4:{c[28156]=(c[28156]|0)+1;if((c[28156]|0)==5){c[28156]=(c[28156]|0)+1}if((c[28156]|0)>=7){c[28156]=0}c[28158]=c[28158]|3;break};case 6:{if((c[28156]|0)==1){h=108}else{if((c[28156]|0)==2){h=108}}if((h|0)==108){zd(c[28156]|0)}break};case 2:{if((c[28156]|0)==1){h=112}else{if((c[28156]|0)==2){h=112}}if((h|0)==112){Ad(c[28156]|0)}break};case 8:{break};case 0:{c[28156]=(c[28156]|0)-1;if((c[28156]|0)==5){c[28156]=(c[28156]|0)-1}if((c[28156]|0)<0){c[28156]=6}c[28158]=c[28158]|3;break};default:{}}}else{if((c[28568]|0)==2){g=fd(b,1,114008,114e3,113992)|0;c[18084]=c[18084]|g;switch(c[b>>2]|0){case 0:case 4:case 6:case 2:case 8:case 9:case 10:case 11:case 12:case 13:{break};case 14:{c[28568]=0;c[28158]=c[28158]|15;break};case 15:case 16:{break};case 17:{cf(31076);break};case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:{break};case 27:{uf();break};case 28:{vf();break};case 29:case 30:case 31:case 32:{break};default:{}}}else{if((c[28568]|0)==3){g=fd(b,1,114008,114e3,113992)|0;c[18084]=c[18084]|g;switch(c[b>>2]|0){case 8:case 9:case 10:case 11:case 12:{break};case 13:{Cd(c[28232]|0);break};case 14:{Cd(1);break};case 15:case 16:{break};case 17:{cf(31076);break};case 18:case 19:case 20:case 21:{break};case 22:{if((c[28234]|0)!=0){c[28234]=0;c[28232]=1;c[28236]=c[28236]|7}break};case 23:{if((c[28234]|0)!=3){c[28234]=3;c[28232]=1;c[28236]=c[28236]|7}break};case 24:{Cd(0);break};case 25:{Cd(2);break};case 26:{break};case 27:{uf();break};case 28:{vf();break};case 29:case 30:case 31:case 32:{break};case 0:case 4:{break};case 6:{c[28232]=(c[28232]|0)-1;do{if((c[28234]|0)>0){if((c[28232]|0)>=0){h=162;break}c[28234]=(c[28234]|0)-1;c[28232]=2;c[28236]=c[28236]|7}else{h=162}}while(0);if((h|0)==162){do{if((c[28234]|0)==0){if((c[28232]|0)>=1){break}c[28232]=1}}while(0);c[28236]=c[28236]|3}break};case 2:{c[28232]=(c[28232]|0)+1;do{if((c[28234]|0)<3){if((c[28232]|0)<=2){h=170;break}c[28234]=(c[28234]|0)+1;c[28232]=0;c[28236]=c[28236]|7}else{h=170}}while(0);if((h|0)==170){do{if((c[28234]|0)==3){if((c[28232]|0)<=1){break}c[28232]=1}}while(0);c[28236]=c[28236]|3}break};default:{}}}else{if((c[28568]|0)==4){if((c[28514]|0)!=0){c[28514]=(c[28514]|0)-1;if((c[28514]|0)==0){Qf(d|0,18984)|0;Qf(d+256|0,53504)|0;c[d+512>>2]=~~(1.5*+(c[28574]|0));c[d+516>>2]=1;c[d+524>>2]=0;c[d+520>>2]=0;jf(1,d)}else{d=fd(b,0,114008,114e3,113992)|0;c[18084]=c[18084]|d;if((c[28498]|0)==1){h=201}else{if((c[28498]|0)==0){h=201}}do{if((h|0)==201){if((c[28516]|0)==(c[28498]|0)){break}c[28516]=c[28498];c[28518]=(c[28518]|0)+1;do{if((c[28516]|0)==0){if((c[28518]|0)<2){break}jf(3,0);c[28514]=0;c[57336+(((c[78064+(c[19524]<<2)>>2]|0)+(((c[19524]|0)-4|0)*9|0)|0)*28|0)>>2]=c[28502];c[57340+(((c[78064+(c[19524]<<2)>>2]|0)+(((c[19524]|0)-4|0)*9|0)|0)*28|0)>>2]=c[28500];c[19526]=c[19526]|3}}while(0)}}while(0)}}else{d=fd(b,1,114008,114e3,113992)|0;c[18084]=c[18084]|d;switch(c[b>>2]|0){case 0:{do{if((c[78064+(c[19524]<<2)>>2]|0)>8){c[78064+(c[19524]<<2)>>2]=9}b=78064+(c[19524]<<2)|0;c[b>>2]=(c[b>>2]|0)-1;if((c[78064+(c[19524]<<2)>>2]|0)<0){c[78064+(c[19524]<<2)>>2]=10}}while((c[78112+(((c[19524]|0)*13|0)+(c[78064+(c[19524]<<2)>>2]|0)<<2)>>2]|0)!=0^1);c[19526]=c[19526]|3;break};case 23:{do{if((c[78064+(c[19524]<<2)>>2]|0)>=9){if((c[78064+(c[19524]<<2)>>2]|0)>12){h=274;break}c[19524]=7;c[78064+(c[19524]<<2)>>2]=11;c[19526]=c[19526]|7}else{h=274}}while(0);if((h|0)==274){if((c[78064+(c[19524]<<2)>>2]|0)<9){Hd(((c[19524]|0)*13|0)+(c[78064+(c[19524]<<2)>>2]|0)|0)}}break};case 24:{Fd(22);break};case 25:{Fd(12);break};case 26:{break};case 27:{uf();break};case 28:{vf();break};case 29:case 30:case 31:case 32:{break};case 2:{do{if((c[78064+(c[19524]<<2)>>2]|0)>=9){if((c[78064+(c[19524]<<2)>>2]|0)>=12){h=243;break}if((c[78112+(((c[19524]|0)*13|0)+(c[78064+(c[19524]<<2)>>2]|0)+1<<2)>>2]|0)!=0){b=78064+(c[19524]<<2)|0;c[b>>2]=(c[b>>2]|0)+1}c[19526]=c[19526]|3}else{h=243}}while(0);if((h|0)==243){if((c[78064+(c[19524]<<2)>>2]|0)==12){if((c[19524]|0)<7){b=(c[19524]|0)+1|0;c[19524]=b;c[78064+(b<<2)>>2]=9;c[19526]=c[19526]|7}}else{if((c[78064+(c[19524]<<2)>>2]|0)<9){Ed(((c[19524]|0)*13|0)+(c[78064+(c[19524]<<2)>>2]|0)|0)}}}break};case 8:{if((c[78064+(c[19524]<<2)>>2]|0)<9){do{if((((c[19524]|0)*13|0)+(c[78064+(c[19524]<<2)>>2]|0)|0)>=52){if((((c[19524]|0)*13|0)+(c[78064+(c[19524]<<2)>>2]|0)|0)>99){break}c[57336+((((c[19524]|0)*13|0)+(c[78064+(c[19524]<<2)>>2]|0)-52-((c[19524]|0)-4<<2)|0)*28|0)>>2]=-1;c[57340+((((c[19524]|0)*13|0)+(c[78064+(c[19524]<<2)>>2]|0)-52-((c[19524]|0)-4<<2)|0)*28|0)>>2]=-1;c[57344+((((c[19524]|0)*13|0)+(c[78064+(c[19524]<<2)>>2]|0)-52-((c[19524]|0)-4<<2)|0)*28|0)>>2]=-1}}while(0);c[19526]=c[19526]|3}break};case 9:case 10:case 11:case 12:{break};case 13:{Fd(((c[19524]|0)*13|0)+(c[78064+(c[19524]<<2)>>2]|0)|0);break};case 14:{Fd(11);break};case 15:case 16:{break};case 17:{cf(31076);break};case 18:case 19:case 20:case 21:{break};case 22:{do{if((c[78064+(c[19524]<<2)>>2]|0)>=9){if((c[78064+(c[19524]<<2)>>2]|0)>12){h=267;break}c[19524]=0;c[78064+(c[19524]<<2)>>2]=10;c[19526]=c[19526]|7}else{h=267}}while(0);if((h|0)==267){if((c[78064+(c[19524]<<2)>>2]|0)<9){Gd(((c[19524]|0)*13|0)+(c[78064+(c[19524]<<2)>>2]|0)|0)}}break};case 4:{do{if((c[78064+(c[19524]<<2)>>2]|0)>8){c[78064+(c[19524]<<2)>>2]=-1}h=78064+(c[19524]<<2)|0;c[h>>2]=(c[h>>2]|0)+1;if((c[78064+(c[19524]<<2)>>2]|0)>8){c[78064+(c[19524]<<2)>>2]=10}}while((c[78112+(((c[19524]|0)*13|0)+(c[78064+(c[19524]<<2)>>2]|0)<<2)>>2]|0)!=0^1);c[19526]=c[19526]|3;break};case 6:{if((c[78064+(c[19524]<<2)>>2]|0)>9){if((c[78112+(((c[19524]|0)*13|0)+(c[78064+(c[19524]<<2)>>2]|0)-1<<2)>>2]|0)!=0){h=78064+(c[19524]<<2)|0;c[h>>2]=(c[h>>2]|0)-1}c[19526]=c[19526]|3}else{if((c[78064+(c[19524]<<2)>>2]|0)==9){if((c[19524]|0)>0){h=(c[19524]|0)-1|0;c[19524]=h;c[78064+(h<<2)>>2]=12;c[19526]=c[19526]|7}}else{if((c[78064+(c[19524]<<2)>>2]|0)<9){Dd(((c[19524]|0)*13|0)+(c[78064+(c[19524]<<2)>>2]|0)|0)}}}break};default:{}}}}}}}}}if((c[28568]|0)==1){Fc();c[28578]=c[28578]|1;Xe()|0;$e(1,0)|0}else{if((c[28568]|0)==5){Ud();c[28578]=c[28578]|1;Sd()}else{if((c[28568]|0)==0){c[28158]=c[28158]|1;df()}else{if((c[28568]|0)==2){kf()}else{if((c[28568]|0)==3){c[28236]=c[28236]|1;gf()}else{if((c[28568]|0)==4){c[19526]=c[19526]|1;hf()}}}}}}Ne()|0;jf(2,0);rb(c[16874]|0)|0;c[29358]=(c[29358]|0)+1;if((c[28568]|0)==0){i=a;return}xd(1,0)|0;i=a;return}function xd(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0;d=i;e=a;a=b;b=-1;if((e|0)!=0){if((e|0)==1){c[29114]=c[28574]<<3}else{if((e|0)==2){f=(c[29114]|0)-1|0;c[29114]=f;if((f|0)==0){xd(3,0)|0}b=c[29290]|0}else{if((e|0)==3){c[29290]=1;c[29120]=0;c[29116]=c[16614];f=(c[29122]|0)+1|0;c[29122]=f;if((f|0)>=12){c[29122]=0}c[16614]=c[116496+(c[29122]<<3)>>2];c[29118]=c[82540+((c[16614]|0)*292|0)>>2];c[82540+((c[16614]|0)*292|0)>>2]=c[116500+(c[29122]<<3)>>2];if((be()|0)!=0){xd(5,0)|0;xd(1,0)|0;c[28568]=0;c[28158]=c[28158]|15}else{c[28568]=1;c[28578]=c[28578]|15;$e(3,16)|0}}else{if((e|0)==4){b=c[29290]|0}else{if((e|0)==5){if((c[29290]|0)!=0){c[29290]=0;c[82540+((c[16614]|0)*292|0)>>2]=c[29118];c[16614]=c[29116]}}else{if((e|0)==6){g=0;while(1){if((g|0)>=128){break}c[(c[29288]|0)+(g<<2)>>2]=-1;g=g+1|0}c[29120]=0}else{if((e|0)==7){if((c[29120]|0)>=128){jb(11928,(h=i,i=i+1|0,i=i+7&-8,c[h>>2]=0,h)|0)|0;i=h;c[(c[29288]|0)+512-4>>2]=14}else{f=c[29288]|0;j=c[29120]|0;c[29120]=j+1;c[f+(j<<2)>>2]=a}}else{if((e|0)==8){a=c[117104+(c[29122]<<2)>>2]|0;j=c[29120]|0;c[29120]=j+1;b=c[a+(j<<2)>>2]|0}else{if((e|0)==9){e=c[82540+((c[16614]|0)*292|0)>>2]|0;jb(11728,(h=i,i=i+16|0,c[h>>2]=82512+((c[16614]|0)*292|0),c[h+8>>2]=e,h)|0)|0;i=h;g=0;while(1){if((g|0)>=128){break}if((c[(c[29288]|0)+(g<<2)>>2]|0)!=-1){jb(11576,(h=i,i=i+8|0,c[h>>2]=c[(c[29288]|0)+(g<<2)>>2],h)|0)|0;i=h}g=g+1|0}jb(11416,(h=i,i=i+16|0,c[h>>2]=8,c[h+8>>2]=8,h)|0)|0;i=h}}}}}}}}}k=b;i=d;return k|0}c[29290]=0;c[29114]=c[28574]<<3;c[29120]=0;c[29122]=-1;g=0;while(1){if((g|0)>=((c[26696]|0)-1|0)){break}if((Lf(82512+(g*292|0)|0,14152)|0)==0){l=5;break}g=g+1|0}c[29124]=g;c[29125]=4;c[29276]=5096;g=0;while(1){if((g|0)>=((c[26696]|0)-1|0)){break}if((Lf(82512+(g*292|0)|0,14016)|0)==0){l=11;break}g=g+1|0}c[29126]=g;c[29127]=17;c[29277]=4744;g=0;while(1){if((g|0)>=((c[26696]|0)-1|0)){break}if((Lf(82512+(g*292|0)|0,13888)|0)==0){l=17;break}g=g+1|0}c[29128]=g;c[29129]=2;c[29278]=4368;g=0;while(1){if((g|0)>=((c[26696]|0)-1|0)){break}if((Lf(82512+(g*292|0)|0,13712)|0)==0){l=23;break}g=g+1|0}c[29130]=g;c[29131]=9;c[29279]=4016;g=0;while(1){if((g|0)>=((c[26696]|0)-1|0)){break}if((Lf(82512+(g*292|0)|0,13480)|0)==0){l=29;break}g=g+1|0}c[29132]=g;c[29133]=3;c[29280]=2064;g=0;while(1){if((g|0)>=((c[26696]|0)-1|0)){break}if((Lf(82512+(g*292|0)|0,13280)|0)==0){l=35;break}g=g+1|0}c[29134]=g;c[29135]=10;c[29281]=3624;g=0;while(1){if((g|0)>=((c[26696]|0)-1|0)){break}if((Lf(82512+(g*292|0)|0,13080)|0)==0){l=41;break}g=g+1|0}c[29136]=g;c[29137]=4;c[29282]=1336;g=0;while(1){if((g|0)>=((c[26696]|0)-1|0)){break}if((Lf(82512+(g*292|0)|0,12928)|0)==0){l=47;break}g=g+1|0}c[29138]=g;c[29139]=12;c[29283]=3296;g=0;while(1){if((g|0)>=((c[26696]|0)-1|0)){break}if((Lf(82512+(g*292|0)|0,12752)|0)==0){l=53;break}g=g+1|0}c[29140]=g;c[29141]=8;c[29284]=3e3;g=0;while(1){if((g|0)>=((c[26696]|0)-1|0)){break}if((Lf(82512+(g*292|0)|0,12440)|0)==0){l=59;break}g=g+1|0}c[29142]=g;c[29143]=7;c[29285]=2616;g=0;while(1){if((g|0)>=((c[26696]|0)-1|0)){break}if((Lf(82512+(g*292|0)|0,12288)|0)==0){l=65;break}g=g+1|0}c[29144]=g;c[29145]=6;c[29286]=2464;g=0;while(1){if((g|0)>=((c[26696]|0)-1|0)){break}if((Lf(82512+(g*292|0)|0,12112)|0)==0){l=71;break}g=g+1|0}c[29146]=g;c[29147]=2;c[29287]=1736;c[29288]=116592;k=b;i=d;return k|0}function yd(a){a=a|0;var b=0;b=i;switch(a|0){case 26:{c[28568]=5;Qd()|0;i=b;return};case 13:{i=b;return};case 14:{xd(5,0)|0;c[18080]=-1;$e(3,0)|0;c[28568]=0;yf();c[28158]=c[28158]|15;i=b;return};case 2:{do{if((xd(4,0)|0)==0){if((c[16987]|0)!=0){break}if((c[7764]|0)<=1){break}c[7764]=1}}while(0);if((c[16976]|0)!=0){cd(1,0)}i=b;return};case 16:{$e(3,0)|0;c[30068]=c[28568];c[28568]=4;c[19526]=c[19526]|15;i=b;return};case 10:{if((c[16976]|0)!=0){dd(0,1)}i=b;return};case 9:{if((c[16976]|0)!=0){dd(0,-1)}i=b;return};case 15:{$e(3,0)|0;c[30068]=c[28568];c[28568]=3;c[28236]=c[28236]|15;i=b;return};case 11:{if((c[16976]|0)!=0){dd(-1,0)}i=b;return};case 0:{do{if((xd(4,0)|0)==0){if((c[16987]|0)!=0){break}if((c[7764]|0)<=1){break}c[7764]=1}}while(0);if((c[16976]|0)!=0){cd(0,-1)}i=b;return};case 4:{do{if((xd(4,0)|0)==0){if((c[16987]|0)!=0){break}if((c[7764]|0)<=1){break}c[7764]=1}}while(0);if((c[16976]|0)!=0){cd(0,1)}i=b;return};case 12:{if((c[16976]|0)!=0){dd(1,0)}i=b;return};case 8:{c[18080]=-1;if((be()|0)!=0){c[28568]=0;yf();c[28158]=c[28158]|15}else{c[28578]=c[28578]|7;$e(3,17)|0}i=b;return};case 6:{do{if((xd(4,0)|0)==0){if((c[16987]|0)!=0){break}if((c[7764]|0)<=1){break}c[7764]=1}}while(0);if((c[16976]|0)!=0){cd(-1,0)}i=b;return};default:{i=b;return}}}function zd(a){a=a|0;var b=0,d=0,e=0,f=0;b=i;d=a;if((d|0)==1){if((c[82540+((c[16614]|0)*292|0)>>2]|0)>1){a=82540+((c[16614]|0)*292|0)|0;c[a>>2]=(c[a>>2]|0)-1}e=c[28158]|0;f=e|3;c[28158]=f;i=b;return}if((d|0)==2){if((c[16614]|0)>0){c[82544+((c[16614]|0)*292|0)>>2]=0;d=(c[16614]|0)-1|0;c[16614]=d;c[82544+(d*292|0)>>2]=1}}e=c[28158]|0;f=e|3;c[28158]=f;i=b;return}function Ad(a){a=a|0;var b=0,d=0,e=0,f=0;b=i;d=a;if((d|0)==1){if((c[82540+((c[16614]|0)*292|0)>>2]|0)<(c[82536+((c[16614]|0)*292|0)>>2]|0)){a=82540+((c[16614]|0)*292|0)|0;c[a>>2]=(c[a>>2]|0)+1}e=c[28158]|0;f=e|3;c[28158]=f;i=b;return}if((d|0)==2){if((c[16614]|0)<((c[28580]|0)-1|0)){c[82544+((c[16614]|0)*292|0)>>2]=0;d=(c[16614]|0)+1|0;c[16614]=d;c[82544+(d*292|0)>>2]=1}}e=c[28158]|0;f=e|3;c[28158]=f;i=b;return}function Bd(a){a=a|0;var b=0,d=0;b=i;d=a;do{if((d|0)!=0){if((d|0)==1){break}if((d|0)==2){break}if((d|0)==3){c[30068]=c[28568];c[28568]=3;c[28236]=c[28236]|15}else{if((d|0)==4){c[30068]=c[28568];c[28568]=4;c[19526]=c[19526]|15}else{if((d|0)!=5){if((d|0)==6){c[18084]=c[18084]|1}}}}i=b;return}}while(0);c[28568]=1;if((be()|0)!=0){c[28568]=0;yf();c[28158]=c[28158]|15}else{c[28578]=c[28578]|15;$e(3,16)|0}i=b;return}function Cd(a){a=a|0;var b=0,d=0;b=i;d=a;if((d|0)==0){if((c[28234]|0)>0){c[28234]=(c[28234]|0)-1;c[28232]=1;c[28236]=c[28236]|7}i=b;return}if((d|0)==1){c[28568]=c[30068];if((c[28568]|0)==0){c[28158]=c[28158]|15}else{if((c[28568]|0)==1){c[28578]=c[28578]|15}}}else{if((d|0)==2){if((c[28234]|0)<3){c[28234]=(c[28234]|0)+1;c[28232]=1;c[28236]=c[28236]|7}}}i=b;return}function Dd(a){a=a|0;var b=0,d=0,e=0;b=i;d=a;if((c[78112+(d<<2)>>2]|0)==0){i=b;return}do{if(((d|0)%13|0|0)>=9){if(((d|0)%13|0|0)>12){e=5;break}}else{e=5}}while(0);if((e|0)==5){if((d|0)==7){if((c[14622]|0)<33){c[14622]=100/((100/(c[14622]|0)|0)-1|0)|0}}else{if((d|0)==26){if((c[14624]|0)>0){c[14624]=(c[14624]|0)-1}}else{if((d|0)==27){if((c[14610]|0)>1){c[14610]=(c[14610]|0)-1}}else{if((d|0)==31){if((c[14608]|0)>20){c[14608]=(c[14608]|0)-20}}else{if((d|0)==32){if((c[14606]|0)>20){c[14606]=(c[14606]|0)-20}}else{if((d|0)==0){if((c[14598]|0)>0){c[14598]=(c[14598]|0)-1}}else{if((d|0)==6){if((c[14600]|0)>0){c[14600]=(c[14600]|0)-1}}else{do{if((d|0)>=52){if((d|0)>99){e=45;break}do{if((c[57336+((d-52-(((d-52|0)/13|0)<<2)|0)*28|0)>>2]|0)!=-1){if((d-52-(((d-52|0)/13|0)<<2)|0)>=29){if((d-52-(((d-52|0)/13|0)<<2)|0)<=32){break}}if((c[57344+((d-52-(((d-52|0)/13|0)<<2)|0)*28|0)>>2]|0)>29){a=57344+((d-52-(((d-52|0)/13|0)<<2)|0)*28|0)|0;c[a>>2]=(c[a>>2]|0)-1}else{if((c[57344+((d-52-(((d-52|0)/13|0)<<2)|0)*28|0)>>2]|0)==29){c[57344+((d-52-(((d-52|0)/13|0)<<2)|0)*28|0)>>2]=-1}}}}while(0)}else{e=45}}while(0);if((e|0)==45){if((d|0)==28){if((c[14612]|0)==1){c[14612]=0}}else{if((d|0)==29){if((c[14604]|0)==1){c[14604]=0}}else{if((d|0)==3){if((c[14620]|0)>0){c[14620]=(c[14620]|0)-1}do{if((c[14620]|0)==0){if((c[14886]|0)!=1){break}c[14886]=0}}while(0);yf()}else{if((d|0)==4){if((c[14594]|0)>0){c[14594]=(c[14594]|0)-1}c[16610]=c[14594];Gf(2,2)}else{if((d|0)==13){if((c[14596]|0)>0){c[14596]=(c[14596]|0)-1}}}}}}}}}}}}}}}c[19526]=c[19526]|3;i=b;return}function Ed(a){a=a|0;var b=0,d=0,e=0;b=i;d=a;if((c[78112+(d<<2)>>2]|0)==0){i=b;return}do{if(((d|0)%13|0|0)>=9){if(((d|0)%13|0|0)>12){e=5;break}}else{e=5}}while(0);if((e|0)==5){if((d|0)==7){if((c[14622]|0)>20){c[14622]=100/((100/(c[14622]|0)|0)+1|0)|0}}else{if((d|0)==26){if((c[14624]|0)<((c[28152]|0)-1|0)){c[14624]=(c[14624]|0)+1}}else{if((d|0)==27){if((c[14610]|0)<99){c[14610]=(c[14610]|0)+1}}else{if((d|0)==31){if((c[14608]|0)<1e3){c[14608]=(c[14608]|0)+20}}else{if((d|0)==32){if((c[14606]|0)<1e3){c[14606]=(c[14606]|0)+20}}else{if((d|0)==0){if((c[14598]|0)<((c[20562]|0)-1|0)){c[14598]=(c[14598]|0)+1}}else{if((d|0)==6){if((c[14600]|0)<1){c[14600]=(c[14600]|0)+1}}else{do{if((d|0)>=52){if((d|0)>99){e=45;break}do{if((c[57336+((d-52-(((d-52|0)/13|0)<<2)|0)*28|0)>>2]|0)!=-1){if((d-52-(((d-52|0)/13|0)<<2)|0)>=29){if((d-52-(((d-52|0)/13|0)<<2)|0)<=32){break}}if((c[57344+((d-52-(((d-52|0)/13|0)<<2)|0)*28|0)>>2]|0)==-1){c[57344+((d-52-(((d-52|0)/13|0)<<2)|0)*28|0)>>2]=29}else{if((c[57344+((d-52-(((d-52|0)/13|0)<<2)|0)*28|0)>>2]|0)<32){a=57344+((d-52-(((d-52|0)/13|0)<<2)|0)*28|0)|0;c[a>>2]=(c[a>>2]|0)+1}}}}while(0)}else{e=45}}while(0);if((e|0)==45){if((d|0)==28){if((c[14612]|0)==0){c[14612]=1}}else{if((d|0)==29){if((c[14604]|0)==0){c[14604]=1}}else{if((d|0)==3){if((c[14620]|0)<1){c[14620]=1}do{if((c[14886]|0)==0){if((c[14620]|0)!=1){break}c[14886]=1;Gf(2,2)}}while(0)}else{if((d|0)==4){if((c[14594]|0)<128){c[14594]=(c[14594]|0)+1}c[16610]=c[14594];Gf(2,2)}else{if((d|0)==13){if((c[14596]|0)<((c[16198]|0)-1|0)){c[14596]=(c[14596]|0)+1}}}}}}}}}}}}}}}c[19526]=c[19526]|3;i=b;return}function Fd(a){a=a|0;var b=0,d=0,e=0,f=0,g=0;b=i;i=i+808|0;d=b|0;e=b+256|0;f=a;if((c[78112+(f<<2)>>2]|0)==0){i=b;return}if(((f|0)%13|0|0)==9){if((c[19524]|0)>0){c[19524]=(c[19524]|0)-1;c[19526]=c[19526]|7}}else{if(((f|0)%13|0|0)==10){c[28574]=c[14622];if((c[28152]|0)>0){if((c[29356]|0)!=(c[14624]|0)){Qf(d|0,15504)|0;a=id(c[14624]|0,d|0,1)|0;if((a|0)!=-1){c[29356]=a;jd(c[29356]|0,117168)|0}}c[28150]=c[14610]}c[27244]=c[14608];c[27242]=c[14606];if((c[16616]|0)!=(c[14598]|0)){c[16616]=c[14598];le()}c[18082]=c[14600];a=0;while(1){if((a|0)>=37){break}c[31088+(a*28|0)>>2]=c[57336+(a*28|0)>>2];c[31092+(a*28|0)>>2]=c[57340+(a*28|0)>>2];c[31096+(a*28|0)>>2]=c[57344+(a*28|0)>>2];c[31100+(a*28|0)>>2]=0;c[31104+(a*28|0)>>2]=0;c[31108+(a*28|0)>>2]=~~+$(+(c[27244]|0)/+(1e3/(c[28574]|0)|0|0));c[31112+(a*28|0)>>2]=~~+$(+(c[27242]|0)/+(1e3/(c[28574]|0)|0|0));a=a+1|0}if((c[28506]|0)!=(c[14612]|0)){c[28506]=c[14612];Ee(c[28506]|0)|0}c[18088]=c[14604];if((c[16612]|0)!=(c[14596]|0)){c[16612]=c[14596];qf();c[26717]=-1;pf()|0;Bf(59952+((c[16612]|0)*524|0)|0)}if((c[18082]|0)==1){ye(77960,0)|0}c[19526]=c[19526]|7;Qf(e|0,11288)|0;Qf(e+256|0,56936)|0;c[e+512>>2]=~~(1.5*+(c[28574]|0));c[e+516>>2]=1;c[e+524>>2]=0;c[e+520>>2]=0;jf(1,e)}else{if(((f|0)%13|0|0)==11){c[28568]=c[30068];if((c[28568]|0)==0){c[28158]=c[28158]|15}else{if((c[28568]|0)==1){c[28578]=c[28578]|15}}}else{if(((f|0)%13|0|0)==12){if((c[19524]|0)<7){c[19524]=(c[19524]|0)+1;c[19526]=c[19526]|7}}else{if((f|0)==34){gd(57336);c[19526]=c[19526]|3;Qf(e|0,11128)|0;Qf(e+256|0,56624)|0;c[e+512>>2]=~~(1.5*+(c[28574]|0));c[e+516>>2]=1;c[e+524>>2]=0;c[e+520>>2]=0;jf(1,e)}else{do{if((f|0)>=52){if((f|0)>99){g=42;break}c[28514]=((c[28574]|0)*5|0)-1;c[28516]=c[28498];c[28518]=0;c[19526]=c[19526]|3;Qf(e|0,10952)|0;Qf(e+256|0,52568)|0;c[e+512>>2]=(c[28574]|0)*5|0;c[e+516>>2]=1;c[e+524>>2]=0;c[e+520>>2]=0;jf(1,e)}else{g=42}}while(0);if((g|0)==42){c[19526]=c[19526]|3}}}}}}i=b;return}function Gd(a){a=a|0;var b=0,d=0,e=0;b=i;d=a;if((c[78112+(d<<2)>>2]|0)==0){i=b;return}do{if(((d|0)%13|0|0)>=9){if(((d|0)%13|0|0)>12){e=5;break}}else{e=5}}while(0);if((e|0)==5){if((d|0)==7){c[14622]=33}else{if((d|0)==26){c[14624]=0}else{if((d|0)==27){c[14610]=1}else{if((d|0)==31){c[14608]=20}else{if((d|0)==32){c[14606]=20}else{if((d|0)==0){c[14598]=0}else{if((d|0)==6){c[14600]=0}else{do{if((d|0)>=52){if((d|0)>99){e=26;break}do{if((c[57336+((d-52-(((d-52|0)/13|0)<<2)|0)*28|0)>>2]|0)!=-1){if((d-52-(((d-52|0)/13|0)<<2)|0)>=29){if((d-52-(((d-52|0)/13|0)<<2)|0)<=32){break}}c[57344+((d-52-(((d-52|0)/13|0)<<2)|0)*28|0)>>2]=-1}}while(0)}else{e=26}}while(0);if((e|0)==26){if((d|0)==28){c[14612]=0}else{if((d|0)==29){c[14604]=0}else{if((d|0)==3){c[14886]=0;c[14620]=0;yf()}else{if((d|0)==4){c[16610]=0;c[14594]=0;Gf(2,2)}else{if((d|0)==13){c[14596]=0}}}}}}}}}}}}}}c[19526]=c[19526]|3;i=b;return}function Hd(a){a=a|0;var b=0,d=0,e=0;b=i;d=a;if((c[78112+(d<<2)>>2]|0)==0){i=b;return}do{if(((d|0)%13|0|0)>=9){if(((d|0)%13|0|0)>12){e=5;break}}else{e=5}}while(0);if((e|0)==5){if((d|0)==7){c[14622]=20}else{if((d|0)==26){c[14624]=(c[28152]|0)-1}else{if((d|0)==27){c[14610]=99}else{if((d|0)==31){c[14608]=1e3}else{if((d|0)==32){c[14606]=1e3}else{if((d|0)==0){c[14598]=(c[20562]|0)-1}else{if((d|0)==6){c[14600]=1}else{do{if((d|0)>=52){if((d|0)>99){e=26;break}do{if((c[57336+((d-52-(((d-52|0)/13|0)<<2)|0)*28|0)>>2]|0)!=-1){if((d-52-(((d-52|0)/13|0)<<2)|0)>=29){if((d-52-(((d-52|0)/13|0)<<2)|0)<=32){break}}c[57344+((d-52-(((d-52|0)/13|0)<<2)|0)*28|0)>>2]=32}}while(0)}else{e=26}}while(0);if((e|0)==26){if((d|0)==28){c[14612]=1}else{if((d|0)==29){c[14604]=1}else{if((d|0)==3){c[14886]=1;c[14620]=1;Gf(2,2)}else{if((d|0)==4){c[16610]=128;c[14594]=128;Gf(2,2)}else{if((d|0)==13){c[14596]=(c[16198]|0)-1}}}}}}}}}}}}}}c[19526]=c[19526]|3;i=b;return}function Id(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,j=0,k=0;d=i;i=i+8|0;e=d|0;f=0;g=a;a=b;c[7494]=0;c[28230]=0;c[29360]=0;c[70810]=0;c[70536]=0;c[27508]=0;c[28582]=0;Yb(e|0)|0;vd(c[e>>2]|0);c[28568]=0;c[28576]=10;c[28574]=25;c[28566]=1;c[28564]=0;c[29358]=0;c[18080]=-1;c[28156]=0;c[28234]=0;c[28232]=1;c[19524]=0;e=0;while(1){if((e|0)>=8){break}c[78064+(e<<2)>>2]=0;e=e+1|0}c[27244]=300;c[27242]=100;c[29356]=-1;Qf(117168,15504)|0;c[28150]=50;c[18086]=0;c[18087]=0;c[18088]=0;c[28506]=1;c[28507]=0;c[28508]=1;c[28509]=-1;c[28510]=-1;c[28511]=-1;c[28570]=1;c[28571]=1;c[28572]=1;c[7769]=-1;c[7768]=-1;c[7767]=-1;c[7766]=-1;c[7765]=-1;c[7761]=-1;c[7760]=-1;c[28158]=c[28158]|15;c[14886]=1;c[7754]=30;c[16610]=30;c[18082]=0;c[71614]=0;gd(31088);do{if((g|0)>1){e=1;while(1){if((e|0)>=(g|0)){h=34;break}if((Lf(c[a+(e<<2)>>2]|0,13800)|0)==0){h=9;break}if((Lf(c[a+(e<<2)>>2]|0,24400)|0)!=0){if((Lf(c[a+(e<<2)>>2]|0,23568)|0)!=0){if((Lf(c[a+(e<<2)>>2]|0,22680)|0)!=0){b=Hb(c[a+(e<<2)>>2]|0,19920,(j=i,i=i+16|0,c[j>>2]=31064,c[j+8>>2]=31068,j)|0)|0;i=j;if((b|0)!=2){h=27;break}if((c[7766]|0)<240){h=25;break}if((c[7767]|0)<240){h=25;break}}else{if((e|0)>=(g-1|0)){h=20;break}b=Hb(c[a+(e+1<<2)>>2]|0,21640,(j=i,i=i+8|0,c[j>>2]=31072,j)|0)|0;i=j;if((b|0)!=1){h=20;break}if((c[7768]|0)!=16){if((c[7768]|0)!=32){h=20;break}}e=e+1|0}}else{c[7765]=1}}else{c[7769]=8388608}e=e+1|0}if((h|0)==9){Nb(c[n>>2]|0,11816,(j=i,i=i+8|0,c[j>>2]=10400,j)|0)|0;i=j;Nb(c[n>>2]|0,9352,(j=i,i=i+1|0,i=i+7&-8,c[j>>2]=0,j)|0)|0;i=j;Nb(c[n>>2]|0,8416,(j=i,i=i+1|0,i=i+7&-8,c[j>>2]=0,j)|0)|0;i=j;Nb(c[n>>2]|0,7752,(j=i,i=i+1|0,i=i+7&-8,c[j>>2]=0,j)|0)|0;i=j;Nb(c[n>>2]|0,28344,(j=i,i=i+1|0,i=i+7&-8,c[j>>2]=0,j)|0)|0;i=j;Nb(c[n>>2]|0,27584,(j=i,i=i+1|0,i=i+7&-8,c[j>>2]=0,j)|0)|0;i=j;Nb(c[n>>2]|0,26816,(j=i,i=i+1|0,i=i+7&-8,c[j>>2]=0,j)|0)|0;i=j;Nb(c[n>>2]|0,25936,(j=i,i=i+1|0,i=i+7&-8,c[j>>2]=0,j)|0)|0;i=j;Nb(c[n>>2]|0,25224,(j=i,i=i+1|0,i=i+7&-8,c[j>>2]=0,j)|0)|0;i=j;f=1;k=f;i=d;return k|0}else if((h|0)==20){Nb(c[n>>2]|0,20576,(j=i,i=i+1|0,i=i+7&-8,c[j>>2]=0,j)|0)|0;i=j;f=1;k=f;i=d;return k|0}else if((h|0)==25){Nb(c[n>>2]|0,19344,(j=i,i=i+1|0,i=i+7&-8,c[j>>2]=0,j)|0)|0;i=j;f=1;k=f;i=d;return k|0}else if((h|0)==27){Nb(c[n>>2]|0,18736,(j=i,i=i+8|0,c[j>>2]=c[a+(e<<2)>>2],j)|0)|0;i=j;f=1;k=f;i=d;return k|0}else if((h|0)==34){do{if((c[7768]|0)==32){if((c[7766]|0)!=-1){if((c[7766]|0)>=480){h=37}}else{h=37}if((h|0)==37){if(!((c[7767]|0)!=-1)){break}if((c[7767]|0)>=480){break}}Nb(c[n>>2]|0,18168,(j=i,i=i+1|0,i=i+7&-8,c[j>>2]=0,j)|0)|0;i=j;f=1;k=f;i=d;return k|0}}while(0);break}}}while(0);jb(17600,(j=i,i=i+8|0,c[j>>2]=17088,j)|0)|0;i=j;de();c[26696]=1;c[28580]=1;c[16614]=0;Qf(82256+((c[16614]|0)*292|0)|0,16520)|0;Qf(82512+((c[16614]|0)*292|0)|0,15504)|0;c[82532+((c[16614]|0)*292|0)>>2]=1;c[82536+((c[16614]|0)*292|0)>>2]=1;c[82540+((c[16614]|0)*292|0)>>2]=1;c[82544+((c[16614]|0)*292|0)>>2]=1;if((ee()|0)!=0){f=1;k=f;i=d;return k|0}fe();c[16198]=1;c[16612]=0;Qf(59552+((c[16612]|0)*524|0)|0,16336)|0;if((lf()|0)!=0){f=1;k=f;i=d;return k|0}mf();c[20562]=1;c[16616]=0;Qf(79608+((c[16616]|0)*220|0)|0,16096)|0;if((ie()|0)!=0){f=1;k=f;i=d;return k|0}ke();me();Qf(77960,wb(15976)|0)|0;Rf(77960,15712)|0;Rf(77960,15600)|0;jb(15448,(j=i,i=i+8|0,c[j>>2]=77960,j)|0)|0;i=j;h=xe(77960)|0;do{if((h|0)==1){ye(77960,1)|0}else{if((h|0)!=2){break}f=1;k=f;i=d;return k|0}}while(0);ge();of();je();if((db(65535)|0)!=0){h=c[n>>2]|0;e=ub()|0;Nb(h|0,15288,(j=i,i=i+8|0,c[j>>2]=e,j)|0)|0;i=j;f=1;k=f;i=d;return k|0}zb(6)|0;e=kd(110040,1)|0;c[28152]=e;if((e|0)!=0){e=id(c[29356]|0,117168,1)|0;c[29356]=e;if((e|0)==-1){c[29356]=id(-1,117168,1)|0}}sf();xb(15136,14968);if((bf()|0)!=0){e=c[n>>2]|0;h=ub()|0;Nb(e|0,14768,(j=i,i=i+8|0,c[j>>2]=h,j)|0)|0;i=j;Xa(1);return 0}c[28564]=hb(10,2,0)|0;if((md()|0)!=0){Nb(c[n>>2]|0,14560,(j=i,i=i+1|0,i=i+7&-8,c[j>>2]=0,j)|0)|0;i=j;Xa(1);return 0}qf();Ff();Bf(59952+((c[16612]|0)*524|0)|0);Af();le();hd(0,30)|0;if((c[28509]|0)==-1){c[28509]=(c[7768]<<2|0)/16|0}if((c[28510]|0)==-1){c[28510]=(c[7768]<<3|0)/16|0}if((c[28511]|0)==-1){c[28511]=((c[7768]|0)*6|0|0)/16|0}c[28512]=6;ze(114024);xd(0,0)|0;Xb(2,0,1)|0;ye(77960,1)|0;f=0;k=f;i=d;return k|0}function Jd(){var a=0,b=0,d=0;a=i;if((c[28564]|0)!=0){qb(c[28564]|0)|0}if((c[28154]|0)!=0){Pa(c[28154]|0)}if((Ie()|0)!=0){b=Be()|0;jb(14304,(d=i,i=i+16|0,c[d>>2]=28632,c[d+8>>2]=b,d)|0)|0;i=d}if((c[7494]|0)!=0){hc(c[7494]|0)}if((c[28230]|0)!=0){hc(c[28230]|0)}if((c[29360]|0)!=0){hc(c[29360]|0)}if((c[70810]|0)!=0){hc(c[70810]|0)}if((c[70536]|0)!=0){hc(c[70536]|0)}if((c[27508]|0)!=0){hc(c[27508]|0)}if((c[28582]|0)==0){Df();nd();Db();i=a;return}qd(c[28582]|0);Df();nd();Db();i=a;return}function Kd(a,b){a=a|0;b=b|0;var d=0,e=0;b=i;d=a;if((c[28574]|0)==0){c[28562]=0;e=d;i=b;return e|0}c[28562]=(c[28562]|0)+1;if((c[28562]|0)>=(100/(c[28574]|0)|0|0)){c[28566]=1;c[28562]=0}e=d;i=b;return e|0}function Ld(a){a=a|0;var b=0,d=0,e=0,f=0;b=i;d=a;a=0;if((c[c[d>>2]>>2]|0)<=100){i=b;return}if((c[c[d>>2]>>2]|0)>=122){i=b;return}if((c[d+4>>2]|0)==13){e=5}else{if((c[d+4>>2]|0)==38){e=5}}if((e|0)==5){f=(c[c[d>>2]>>2]|0)-1-100|0;if(((f|0)/7|0|0)==0){if((c[d+4>>2]|0)==13){if((c[28156]|0)==(f|0)){a=1}c[28156]=f;do{if((f|0)<1){e=11}else{if((f|0)>2){e=11;break}if((a|0)!=0){Bd(f)}else{c[28158]=c[28158]|3}}}while(0);if((e|0)==11){Bd(f)}}}else{if(((f|0)/7|0|0)==1){if((c[d+4>>2]|0)==38){zd((f|0)%7|0)}}else{if(((f|0)/7|0|0)==2){if((c[d+4>>2]|0)==38){Ad((f|0)%7|0)}}}}}i=b;return}function Md(a){a=a|0;var b=0,d=0;b=i;d=a;if((c[c[d>>2]>>2]|0)<=100){i=b;return}if((c[c[d>>2]>>2]|0)>=104){i=b;return}if((c[d+4>>2]|0)==13){Cd((c[c[d>>2]>>2]|0)-1-100|0)}i=b;return}function Nd(a){a=a|0;var b=0,d=0,e=0,f=0;b=i;d=a;a=0;if((c[c[d>>2]>>2]|0)<=100){i=b;return}if((c[c[d>>2]>>2]|0)>=413){i=b;return}if((c[d+4>>2]|0)==13){e=5}else{if((c[d+4>>2]|0)==38){e=5}}if((e|0)==5){f=(c[c[d>>2]>>2]|0)-1-100|0;if(((f|0)/104|0|0)==0){if((c[d+4>>2]|0)==13){if((c[78064+(c[19524]<<2)>>2]|0)==((f|0)%13|0|0)){a=1}c[78064+(c[19524]<<2)>>2]=(f|0)%13|0;do{if((f|0)<52){e=12}else{if((f|0)>99){e=12;break}if(((f|0)%13|0|0)>=9){e=12;break}if((a|0)!=0){Fd(f)}else{c[19526]=c[19526]|3}}}while(0);if((e|0)==12){Fd(f)}}}else{if(((f|0)/104|0|0)==1){if((c[d+4>>2]|0)==38){Dd((f|0)%104|0)}}else{if(((f|0)/104|0|0)==2){if((c[d+4>>2]|0)==38){Ed((f|0)%104|0)}}}}}i=b;return}function Od(){var a=0,b=0,d=0,e=0,f=0,g=0,h=0,j=0,k=0;a=i;b=0;d=c[27504]|0;e=c[27505]|0;f=0;g=0;g=0;while(1){if(!((c[28992+(g*20|0)>>2]|0)!=-1)){break}do{if((c[29e3+(g*20|0)>>2]|0)==3){if((c[29004+(g*20|0)>>2]|0)!=124){if((c[29004+(g*20|0)>>2]|0)!=125){h=10;break}}if(((c[29008+(g*20|0)>>2]|0)%2|0|0)!=1){h=10;break}if((c[26698]|0)<=(c[27504]|0)){c[284056+(g*40|0)>>2]=-1;break}else{h=10;break}}else{h=10}}while(0);do{if((h|0)==10){h=0;if((c[29e3+(g*20|0)>>2]|0)==4){e=e+1|0;b=0;break}if((c[29004+(g*20|0)>>2]|0)==0){c[102]=g}c[284056+(g*40|0)>>2]=c[28992+(g*20|0)>>2];c[284060+(g*40|0)>>2]=c[28996+(g*20|0)>>2];c[284068+(g*40|0)>>2]=c[29004+(g*20|0)>>2];c[284092+(g*40|0)>>2]=1;c[284064+(g*40|0)>>2]=c[29e3+(g*20|0)>>2];c[284084+(g*40|0)>>2]=0;c[284072+(g*40|0)>>2]=c[29008+(g*20|0)>>2];j=c[29e3+(g*20|0)>>2]|0;if((j|0)==3){c[284076+(g*40|0)>>2]=d;k=f;f=k+1|0;c[284080+(g*40|0)>>2]=k}else if((j|0)==2){h=16}else if((j|0)==1){c[284088+(g*40|0)>>2]=0;h=16}if((h|0)==16){h=0;if((b|0)>=(c[27504]|0)){b=0;e=e+1|0}j=b;b=j+1|0;c[284076+(g*40|0)>>2]=j;c[284080+(g*40|0)>>2]=e}}}while(0);g=g+1|0}c[284056+(g*40|0)>>2]=-1;c[284060+(g*40|0)>>2]=-1;i=a;return}function Pd(){var a=0,b=0,d=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0.0,m=0,n=0.0,o=0.0,p=0.0,q=0,r=0,s=0.0,t=0,u=0,v=0,w=0.0,x=0.0,y=0,z=0.0,A=0.0,B=0.0,C=0;a=i;b=0;while(1){if((c[28992+(b*20|0)>>2]|0)!=-1){d=(c[29e3+(b*20|0)>>2]|0)!=3}else{d=0}if(!d){break}b=b+1|0}c[27504]=c[26698];if((c[27504]|0)<14){c[27504]=14}if((c[27504]|0)>=(((c[(c[16874]|0)+8>>2]|0)/(c[7768]|0)|0)-1|0)){c[27504]=((c[(c[16874]|0)+8>>2]|0)/(c[7768]|0)|0)-1}d=((c[(c[16874]|0)+8>>2]|0)-(aa((c[27504]|0)+1|0,c[7768]|0)|0)|0)/2|0;c[27506]=d+(c[7770]|0);d=((b|0)/(c[27504]|0)|0)+1|0;do{if(((b|0)%(c[27504]|0)|0|0)!=0){if(((c[27504]|0)-((b|0)%(c[27504]|0)|0)|0)>=15){break}d=d+1|0}}while(0);c[27505]=c[26699];if((c[27505]|0)<(11-d|0)){c[27505]=11-d}if((c[27505]|0)>=(((c[(c[16874]|0)+12>>2]|0)/(c[7768]|0)|0)-3-d|0)){c[27505]=((c[(c[16874]|0)+12>>2]|0)/(c[7768]|0)|0)-3-d}e=((c[(c[16874]|0)+12>>2]|0)-(aa((c[27505]|0)+d|0,c[7768]|0)|0)|0)/2|0;c[27507]=e+(c[7771]|0);c[8034]=(b|0)%(c[27504]|0)|0;if(((c[27504]|0)-((b|0)%(c[27504]|0)|0)|0)>=15){f=c[27505]|0;g=d;h=f+g|0;j=h-1|0;c[8032]=j;k=c[27507]|0;l=+(k|0);m=c[7768]|0;n=+(m|0);o=n*1.25;p=l-o;q=~~p;c[70553]=q;r=c[27507]|0;s=+(r|0);t=c[27505]|0;u=d;v=t+u|0;w=+(v|0);x=w+.25;y=c[7768]|0;z=+(y|0);A=x*z;B=s+A;C=~~B;c[16877]=C;i=a;return}c[8034]=0;f=c[27505]|0;g=d;h=f+g|0;j=h-1|0;c[8032]=j;k=c[27507]|0;l=+(k|0);m=c[7768]|0;n=+(m|0);o=n*1.25;p=l-o;q=~~p;c[70553]=q;r=c[27507]|0;s=+(r|0);t=c[27505]|0;u=d;v=t+u|0;w=+(v|0);x=w+.25;y=c[7768]|0;z=+(y|0);A=x*z;B=s+A;C=~~B;c[16877]=C;i=a;return}function Qd(){var a=0,b=0;a=i;se();c[28504]=-1;c[28226]=1;c[26976]=0;Ye();be()|0;do{if((c[26698]|0)==16){if((c[26699]|0)!=31){b=4;break}c[28504]=0}else{b=4}}while(0);if((b|0)==4){do{if((c[26698]|0)==32){if((c[26699]|0)!=31){break}c[28504]=1}}while(0)}c[28226]=1;Ya(112648,34072,(b=i,i=i+1|0,i=i+7&-8,c[b>>2]=0,b)|0)|0;i=b;c[16980]=Rd(7)|0;c[16981]=(Rd(5)|0)*9|0;c[28578]=7;c[27502]=0;c[27503]=0;Pd();Od();ae();Sd();i=a;return 0}function Rd(a){a=a|0;var b=0,d=0,e=0,f=0;b=i;d=a;a=0;e=0;while(1){if((e|0)>=(c[26699]|0)){break}f=0;while(1){if((f|0)>=(c[26698]|0)){break}if((c[122352+(f*4960|0)+(e*160|0)>>2]|0)==(d|0)){a=a+1|0}f=f+1|0}e=e+1|0}i=b;return a|0}function Sd(){var a=0,b=0,d=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0;a=i;i=i+144|0;b=a|0;d=a+16|0;e=a+32|0;f=a+48|0;g=a+64|0;h=a+80|0;j=a+96|0;k=a+112|0;l=a+128|0;m=c[27506]|0;o=c[27507]|0;if((c[26976]|0)>0){c[26976]=(c[26976]|0)-1}zf();if((c[28578]|0)>=7){ae();Ye();c[16878]=255}p=c[27503]|0;while(1){if((p|0)>=((c[27503]|0)+(c[27505]|0)|0)){break}q=c[27502]|0;while(1){if((q|0)>=((c[27502]|0)+(c[27504]|0)|0)){break}r=m+(aa(q-(c[27502]|0)|0,c[7768]|0)|0)|0;s=o+(aa(p-(c[27503]|0)|0,c[7768]|0)|0)|0;Ze(f,r,s,c[7768]|0,c[7768]|0);s=d;r=f;c[s>>2]=c[r>>2];c[s+4>>2]=c[r+4>>2];c[s+8>>2]=c[r+8>>2];c[s+12>>2]=c[r+12>>2];a:do{if((q|0)<0){t=13}else{if((p|0)<0){t=13;break}if((q|0)>=(c[26698]|0)){t=13;break}if((p|0)>=(c[26699]|0)){t=13;break}do{if((c[122352+(q*4960|0)+(p*160|0)+84>>2]|0)==0){if((c[28578]|0)==7){break}break a}}while(0);c[122352+(q*4960|0)+(p*160|0)+84>>2]=0;if((c[26717]|0)!=-1){u=c[26717]|0}else{if((c[26716]|0)!=-1){u=c[26716]|0}else{u=6324304}}r=c[16874]|0;Ta(r|0,d|0,Jb(c[(c[16874]|0)+4>>2]|0,u>>>16&255|0,u>>>8&255|0,u&255|0)|0)|0;if((c[70536]|0)!=0){r=(c[(c[70536]|0)+8>>2]|0)/2|0;s=(c[(c[70536]|0)+12>>2]|0)/2|0;v=(c[82540+((c[16614]|0)*292|0)>>2]|0)%4|0;if((v|0)==1){w=((aa(c[7768]|0,q)|0)%(r|0)|0)+r|0;x=(aa(c[7768]|0,p)|0)%(s|0)|0;Ze(h,w,x,c[7768]|0,c[7768]|0);x=e;w=h;c[x>>2]=c[w>>2];c[x+4>>2]=c[w+4>>2];c[x+8>>2]=c[w+8>>2];c[x+12>>2]=c[w+12>>2]}else if((v|0)==2){w=(aa(c[7768]|0,q)|0)%(r|0)|0;x=((aa(c[7768]|0,p)|0)%(s|0)|0)+s|0;Ze(j,w,x,c[7768]|0,c[7768]|0);x=e;w=j;c[x>>2]=c[w>>2];c[x+4>>2]=c[w+4>>2];c[x+8>>2]=c[w+8>>2];c[x+12>>2]=c[w+12>>2]}else if((v|0)==0){w=(aa(c[7768]|0,q)|0)%(r|0)|0;x=(aa(c[7768]|0,p)|0)%(s|0)|0;Ze(g,w,x,c[7768]|0,c[7768]|0);x=e;w=g;c[x>>2]=c[w>>2];c[x+4>>2]=c[w+4>>2];c[x+8>>2]=c[w+8>>2];c[x+12>>2]=c[w+12>>2]}else if((v|0)==3){v=((aa(c[7768]|0,q)|0)%(r|0)|0)+r|0;r=((aa(c[7768]|0,p)|0)%(s|0)|0)+s|0;Ze(k,v,r,c[7768]|0,c[7768]|0);r=e;v=k;c[r>>2]=c[v>>2];c[r+4>>2]=c[v+4>>2];c[r+8>>2]=c[v+8>>2];c[r+12>>2]=c[v+12>>2]}Ub(c[70536]|0,e|0,c[16874]|0,d|0)|0}Wd(6,7,e);Ub(c[27508]|0,e|0,c[16874]|0,d|0)|0;if((c[122352+(q*4960|0)+(p*160|0)>>2]|0)!=0){do{if((c[122352+(q*4960|0)+(p*160|0)+76>>2]|0)!=0){if((c[122352+(q*4960|0)+(p*160|0)>>2]|0)!=13){break}Wd(3,4,b);Ub(c[27508]|0,b|0,c[16874]|0,d|0)|0}}while(0);do{if((c[122352+(q*4960|0)+(p*160|0)>>2]|0)==50){if((c[122352+(q*4960|0)+(p*160|0)+68>>2]|0)!=1){break}c[122352+(q*4960|0)+(p*160|0)+4>>2]=(c[122352+(q*4960|0)+(p*160|0)+8>>2]|0)+4}}while(0);Ze(l,c[122352+(q*4960|0)+(p*160|0)+88+(c[122352+(q*4960|0)+(p*160|0)+4>>2]<<3)>>2]|0,c[122352+(q*4960|0)+(p*160|0)+88+(c[122352+(q*4960|0)+(p*160|0)+4>>2]<<3)+4>>2]|0,c[7768]|0,c[7768]|0);v=b;r=l;c[v>>2]=c[r>>2];c[v+4>>2]=c[r+4>>2];c[v+8>>2]=c[r+8>>2];c[v+12>>2]=c[r+12>>2];if((Ub(c[28230]|0,b|0,c[16874]|0,d|0)|0)<0){r=c[n>>2]|0;v=ub()|0;Nb(r|0,17896,(y=i,i=i+8|0,c[y>>2]=v,y)|0)|0;i=y}switch(c[122352+(q*4960|0)+(p*160|0)>>2]|0){case 40:{z=((c[122352+(q*4960|0)+(p*160|0)+52>>2]|0)/9|0)+4|0;A=((c[122352+(q*4960|0)+(p*160|0)+52>>2]|0)%9|0)+((c[122352+(q*4960|0)+(p*160|0)+52>>2]|0)>8?1:0)|0;Wd(z,A,b);Ub(c[27508]|0,b|0,c[16874]|0,d|0)|0;break};case 50:{z=7;A=(((c[122352+(q*4960|0)+(p*160|0)+40>>2]|0)+2|0)%3|0)+1|0;Wd(z,A,b);Ub(c[27508]|0,b|0,c[16874]|0,d|0)|0;if((c[122352+(q*4960|0)+(p*160|0)+68>>2]|0)!=0){Wd(5,(c[122352+(q*4960|0)+(p*160|0)+64>>2]|0)+5|0,b);Ub(c[27508]|0,b|0,c[16874]|0,d|0)|0}if((c[122352+(q*4960|0)+(p*160|0)+44>>2]|0)!=0){Wd(6,1,b);Ub(c[27508]|0,b|0,c[16874]|0,d|0)|0}break};case 61:{Wd(5,(c[122352+(q*4960|0)+(p*160|0)+8>>2]|0)+5|0,b);Ub(c[27508]|0,b|0,c[16874]|0,d|0)|0;break};case 11:case 26:{Wd(5,(c[122352+(q*4960|0)+(p*160|0)+8>>2]|0)+5|0,b);Ub(c[27508]|0,b|0,c[16874]|0,d|0)|0;break};case 13:{Wd(5,(c[122352+(q*4960|0)+(p*160|0)+8>>2]|0)+5|0,b);Ub(c[27508]|0,b|0,c[16874]|0,d|0)|0;break};case 30:case 32:{Wd(5,(c[122352+(q*4960|0)+(p*160|0)+8>>2]|0)+5|0,b);Ub(c[27508]|0,b|0,c[16874]|0,d|0)|0;break};case 54:{if((c[122352+(q*4960|0)+(p*160|0)+44>>2]|0)!=0){Wd(6,1,b);Ub(c[27508]|0,b|0,c[16874]|0,d|0)|0}break};default:{}}}do{if((c[16974]|0)==(q|0)){if((c[16975]|0)!=(p|0)){break}Wd(3,6,b);if((Ub(c[28230]|0,b|0,c[16874]|0,d|0)|0)<0){v=c[n>>2]|0;r=ub()|0;Nb(v|0,17896,(y=i,i=i+8|0,c[y>>2]=r,y)|0)|0;i=y}}}while(0);t=62}}while(0);if((t|0)==13){t=0;if((c[28578]&7|0)!=0){r=c[16874]|0;Ta(r|0,d|0,Jb(c[(c[16874]|0)+4>>2]|0,(c[60012+((c[16612]|0)*524|0)>>2]|0)>>>16&255|0,(c[60012+((c[16612]|0)*524|0)>>2]|0)>>>8&255|0,c[60012+((c[16612]|0)*524|0)>>2]&255|0)|0)|0}t=62}if((t|0)==62){t=0}q=q+1|0}p=p+1|0}Yd();if((c[16878]|0)==0){c[28578]=0;i=a;return}_e();c[28578]=0;i=a;return}function Td(){Ye();be()|0;c[28578]=c[28578]|7;c[28160]=0;c[102]=-1;c[26974]=0;return 0}function Ud(){var a=0,b=0,d=0,e=0,f=0,g=0;a=i;b=0;while(1){if((b|0)>=(c[26699]|0)){break}d=0;while(1){if((d|0)>=(c[26698]|0)){break}if((c[122352+(d*4960|0)+(b*160|0)>>2]|0)==50){e=7}else{if((c[122352+(d*4960|0)+(b*160|0)>>2]|0)==54){e=7}}do{if((e|0)==7){e=0;if((c[122352+(d*4960|0)+(b*160|0)+36>>2]|0)<=0){break}f=122352+(d*4960|0)+(b*160|0)+36|0;c[f>>2]=(c[f>>2]|0)-1}}while(0);if((c[122352+(d*4960|0)+(b*160|0)+24>>2]|0)>0){f=122352+(d*4960|0)+(b*160|0)+24|0;c[f>>2]=(c[f>>2]|0)-1}if((c[122352+(d*4960|0)+(b*160|0)+24>>2]|0)<=0){switch(c[122352+(d*4960|0)+(b*160|0)>>2]|0){case 11:case 26:case 61:case 13:case 28:case 15:case 68:{c[122352+(d*4960|0)+(b*160|0)+24>>2]=6;Nc(d,b);break};case 40:{Nc(d,b);c[122352+(d*4960|0)+(b*160|0)+24>>2]=8;break};case 50:{if((c[122352+(d*4960|0)+(b*160|0)+44>>2]|0)!=0){if((c[122352+(d*4960|0)+(b*160|0)+36>>2]|0)==0){if((c[122352+(d*4960|0)+(b*160|0)+48>>2]|0)!=0){g=(Tf()|0)&3;if((c[122352+(d*4960|0)+(b*160|0)+68>>2]|0)==1){c[122352+(d*4960|0)+(b*160|0)+64>>2]=(P((c[122352+(d*4960|0)+(b*160|0)+64>>2]|0)+(g-(c[122352+(d*4960|0)+(b*160|0)+8>>2]|0))|0)|0)%4|0}c[122352+(d*4960|0)+(b*160|0)+8>>2]=g}else{c[122352+(d*4960|0)+(b*160|0)+8>>2]=(c[122352+(d*4960|0)+(b*160|0)+8>>2]|0)+1&3}c[122352+(d*4960|0)+(b*160|0)+36>>2]=20;Ic(d,b)}}c[122352+(d*4960|0)+(b*160|0)+4>>2]=c[122352+(d*4960|0)+(b*160|0)+8>>2];break};case 54:{if((c[122352+(d*4960|0)+(b*160|0)+44>>2]|0)!=0){if((c[122352+(d*4960|0)+(b*160|0)+36>>2]|0)==0){g=(Tf()|0)&3;c[122352+(d*4960|0)+(b*160|0)+8>>2]=g;c[122352+(d*4960|0)+(b*160|0)+36>>2]=20;Ic(d,b)}}c[122352+(d*4960|0)+(b*160|0)+4>>2]=c[122352+(d*4960|0)+(b*160|0)+8>>2];break};default:{}}}d=d+1|0}b=b+1|0}i=a;return}function Vd(a){a=a|0;var b=0,d=0;b=i;c[28578]=7;ae();d=a;if((d|0)==3){if((c[27502]|0)<((c[26698]|0)-(c[27504]|0)|0)){c[27502]=(c[27502]|0)+1}i=b;return}else if((d|0)==1){if((c[27502]|0)>0){c[27502]=(c[27502]|0)-1}i=b;return}else if((d|0)==2){if((c[27503]|0)<((c[26699]|0)-(c[27505]|0)|0)){c[27503]=(c[27503]|0)+1}i=b;return}else if((d|0)==0){if((c[27503]|0)>0){c[27503]=(c[27503]|0)-1}i=b;return}else{i=b;return}}function Wd(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0;e=a;a=b;b=d;d=aa((c[7768]|0)/16|0,e)|0;f=d+(aa(e-1|0,c[7768]|0)|0)|0;e=aa((c[7768]|0)/16|0,a)|0;d=e+(aa(a-1|0,c[7768]|0)|0)|0;c[b>>2]=f;c[b+4>>2]=d;c[b+8>>2]=c[7768];c[b+12>>2]=c[7768];i=i;return}function Xd(){var a=0,b=0,d=0,e=0,f=0,g=0,h=0;a=i;b=((c[26984]|0)-(c[27506]|0)|0)/(c[7768]|0)|0;d=((c[26982]|0)-(c[27507]|0)|0)/(c[7768]|0)|0;do{if(((c[26984]|0)-(c[27506]|0)|0)>=0){if(((c[26982]|0)-(c[27507]|0)|0)<0){break}ae();do{if((b|0)>=0){if((d|0)<0){break}if((b|0)>=(c[27504]|0)){break}if((d|0)>=(c[27505]|0)){break}c[26974]=-1;b=b+(c[27502]|0)|0;d=d+(c[27503]|0)|0;if((c[102]|0)!=-1){Ya(112648,26600,(e=i,i=i+1|0,i=i+7&-8,c[e>>2]=0,e)|0)|0;i=e;c[28226]=1;if((c[284068+((c[102]|0)*40|0)>>2]|0)==1){Ic(c[16974]|0,c[16975]|0);Ya(112648,18608,(e=i,i=i+1|0,i=i+7&-8,c[e>>2]=0,e)|0)|0;i=e}f=c[122352+(b*4960|0)+(d*160|0)>>2]|0;if((f|0)==5){c[28578]=7;c[16981]=(c[16981]|0)-9}else if((f|0)==7){c[28578]=7;c[16980]=(c[16980]|0)-1}else if((f|0)==4){c[28578]=7;c[16979]=(c[16979]|0)-1}if((c[284068+((c[102]|0)*40|0)>>2]|0)!=131){Qc(b,d,c[284068+((c[102]|0)*40|0)>>2]|0)}do{if((c[284068+((c[102]|0)*40|0)>>2]|0)==8){if((c[30330]|0)!=1){break}Qc(b,d,70)}}while(0);switch(c[284068+((c[102]|0)*40|0)>>2]|0){case 6:{f=Rd(6)|0;Ya(112648,15392,(e=i,i=i+24|0,c[e>>2]=38232,c[e+8>>2]=f,c[e+16>>2]=33968,e)|0)|0;i=e;break};case 10:{f=Rd(10)|0;Ya(112648,13600,(e=i,i=i+16|0,c[e>>2]=f,c[e+8>>2]=33968,e)|0)|0;i=e;break};case 15:{f=Rd(15)|0;Ya(112648,15392,(e=i,i=i+24|0,c[e>>2]=37920,c[e+8>>2]=f,c[e+16>>2]=33968,e)|0)|0;i=e;break};case 8:{if((c[30330]|0)==0){f=Rd(8)|0;Ya(112648,15392,(e=i,i=i+24|0,c[e>>2]=38440,c[e+8>>2]=f,c[e+16>>2]=33968,e)|0)|0;i=e}else{f=Rd(70)|0;Ya(112648,15392,(e=i,i=i+24|0,c[e>>2]=38336,c[e+8>>2]=f,c[e+16>>2]=33968,e)|0)|0;i=e}break};case 68:{f=Rd(68)|0;Ya(112648,15392,(e=i,i=i+24|0,c[e>>2]=35112,c[e+8>>2]=f,c[e+16>>2]=33968,e)|0)|0;i=e;break};case 60:{f=Rd(60)|0;Ya(112648,15392,(e=i,i=i+24|0,c[e>>2]=35216,c[e+8>>2]=f,c[e+16>>2]=33968,e)|0)|0;i=e;break};case 13:{c[122352+(b*4960|0)+(d*160|0)+8>>2]=c[29110];c[122352+(b*4960|0)+(d*160|0)+64>>2]=1;c[122352+(b*4960|0)+(d*160|0)+4>>2]=0;c[122352+(b*4960|0)+(d*160|0)+76>>2]=c[16352];f=Rd(13)|0;Ya(112648,15392,(e=i,i=i+24|0,c[e>>2]=38856,c[e+8>>2]=f,c[e+16>>2]=33968,e)|0)|0;i=e;break};case 0:{Ya(112648,37088,(e=i,i=i+1|0,i=i+7&-8,c[e>>2]=0,e)|0)|0;i=e;break};case 28:{f=Rd(28)|0;Ya(112648,15392,(e=i,i=i+24|0,c[e>>2]=38024,c[e+8>>2]=f,c[e+16>>2]=33968,e)|0)|0;i=e;break};case 131:{do{if((c[29110]|0)==0){g=37}else{if((c[29110]|0)==2){g=37;break}Qc(b,d,32)}}while(0);if((g|0)==37){Qc(b,d,30)}c[122352+(b*4960|0)+(d*160|0)+8>>2]=c[29110];f=(Rd(30)|0)+(Rd(32)|0)|0;Ya(112648,15392,(e=i,i=i+24|0,c[e>>2]=36464,c[e+8>>2]=f,c[e+16>>2]=33968,e)|0)|0;i=e;break};case 9:{f=Rd(9)|0;Ya(112648,15392,(e=i,i=i+24|0,c[e>>2]=37192,c[e+8>>2]=f,c[e+16>>2]=33968,e)|0)|0;i=e;break};case 61:{c[122352+(b*4960|0)+(d*160|0)+8>>2]=(c[29110]|0)>=2?2:0;f=Rd(61)|0;Ya(112648,15392,(e=i,i=i+24|0,c[e>>2]=36776,c[e+8>>2]=f,c[e+16>>2]=33968,e)|0)|0;i=e;break};case 4:{c[16979]=(c[16979]|0)+1;f=Rd(4)|0;Ya(112648,15392,(e=i,i=i+24|0,c[e>>2]=34488,c[e+8>>2]=f,c[e+16>>2]=33968,e)|0)|0;i=e;c[28578]=7;break};case 24:{Ya(112648,36672,(e=i,i=i+1|0,i=i+7&-8,c[e>>2]=0,e)|0)|0;i=e;break};case 69:{f=Rd(69)|0;Ya(112648,15392,(e=i,i=i+24|0,c[e>>2]=34384,c[e+8>>2]=f,c[e+16>>2]=33968,e)|0)|0;i=e;break};case 2:{c[122352+(b*4960|0)+(d*160|0)+4>>2]=c[7496];if((c[7496]|0)!=3){Ya(112648,34176,(e=i,i=i+1|0,i=i+7&-8,c[e>>2]=0,e)|0)|0;i=e}else{Ya(112648,38648,(e=i,i=i+1|0,i=i+7&-8,c[e>>2]=0,e)|0)|0;i=e}break};case 7:{c[16980]=(c[16980]|0)+1;f=Rd(7)|0;Ya(112648,15392,(e=i,i=i+24|0,c[e>>2]=36360,c[e+8>>2]=f,c[e+16>>2]=33968,e)|0)|0;i=e;c[28578]=7;break};case 11:case 26:{c[122352+(b*4960|0)+(d*160|0)+8>>2]=c[29110];c[122352+(b*4960|0)+(d*160|0)+4>>2]=0;if((c[122352+(b*4960|0)+(d*160|0)>>2]|0)==11){f=Rd(11)|0;Ya(112648,15392,(e=i,i=i+24|0,c[e>>2]=38960,c[e+8>>2]=f,c[e+16>>2]=33968,e)|0)|0;i=e}else{f=Rd(26)|0;Ya(112648,15392,(e=i,i=i+24|0,c[e>>2]=38752,c[e+8>>2]=f,c[e+16>>2]=33968,e)|0)|0;i=e}break};case 40:{c[122352+(b*4960|0)+(d*160|0)+52>>2]=c[6];f=Rd(40)|0;Ya(112648,15392,(e=i,i=i+24|0,c[e>>2]=34280,c[e+8>>2]=f,c[e+16>>2]=33968,e)|0)|0;i=e;break};case 50:{c[122352+(b*4960|0)+(d*160|0)+40>>2]=((c[19900]|0)+1|0)%3|0;c[122352+(b*4960|0)+(d*160|0)+68>>2]=c[19642];c[122352+(b*4960|0)+(d*160|0)+64>>2]=c[29110];c[122352+(b*4960|0)+(d*160|0)+8>>2]=c[284072+((c[102]|0)*40|0)>>2];c[122352+(b*4960|0)+(d*160|0)+4>>2]=c[284072+((c[102]|0)*40|0)>>2];c[122352+(b*4960|0)+(d*160|0)+36>>2]=0;c[122352+(b*4960|0)+(d*160|0)+44>>2]=c[16936];c[122352+(b*4960|0)+(d*160|0)+48>>2]=1;f=Rd(50)|0;Ya(112648,15392,(e=i,i=i+24|0,c[e>>2]=36568,c[e+8>>2]=f,c[e+16>>2]=33968,e)|0)|0;i=e;break};case 54:{c[122352+(b*4960|0)+(d*160|0)+8>>2]=c[284072+((c[102]|0)*40|0)>>2];c[122352+(b*4960|0)+(d*160|0)+4>>2]=c[284072+((c[102]|0)*40|0)>>2];c[122352+(b*4960|0)+(d*160|0)+44>>2]=c[16936];f=Rd(54)|0;Ya(112648,15392,(e=i,i=i+24|0,c[e>>2]=35736,c[e+8>>2]=f,c[e+16>>2]=33968,e)|0)|0;i=e;break};case 5:{c[16981]=(c[16981]|0)+9;f=Rd(5)|0;Ya(112648,11656,(e=i,i=i+24|0,c[e>>2]=38128,c[e+8>>2]=f,c[e+16>>2]=33968,e)|0)|0;i=e;c[28578]=7;break};default:{}}}i=a;return}}while(0);if((c[26976]|0)>0){i=a;return}c[26976]=5;f=0;while(1){if(!((c[284056+(f*40|0)>>2]|0)!=-1)){g=178;break}if((b|0)==(c[284076+(f*40|0)>>2]|0)){if((d|0)==(c[284080+(f*40|0)>>2]|0)){break}}f=f+1|0}if((g|0)==178){i=a;return}c[284084+(f*40|0)>>2]=3;switch(c[284068+(f*40|0)>>2]|0){case 15:{h=Rd(15)|0;Ya(112648,15392,(e=i,i=i+24|0,c[e>>2]=37920,c[e+8>>2]=h,c[e+16>>2]=33968,e)|0)|0;i=e;c[28226]=1;break};case 60:{h=Rd(60)|0;Ya(112648,15392,(e=i,i=i+24|0,c[e>>2]=35216,c[e+8>>2]=h,c[e+16>>2]=33968,e)|0)|0;i=e;c[28226]=1;break};case 4:{h=Rd(4)|0;Ya(112648,15392,(e=i,i=i+24|0,c[e>>2]=34488,c[e+8>>2]=h,c[e+16>>2]=33968,e)|0)|0;i=e;c[28226]=1;break};case 0:{Ya(112648,37088,(e=i,i=i+1|0,i=i+7&-8,c[e>>2]=0,e)|0)|0;i=e;c[28226]=1;break};case 2:{if((f|0)==(c[102]|0)){c[7496]=((c[7496]|0)+1|0)%9|0}if((c[7496]|0)!=3){Ya(112648,34176,(e=i,i=i+1|0,i=i+7&-8,c[e>>2]=0,e)|0)|0;i=e}else{Ya(112648,38648,(e=i,i=i+1|0,i=i+7&-8,c[e>>2]=0,e)|0)|0;i=e}c[28226]=1;break};case 9:{h=Rd(9)|0;Ya(112648,15392,(e=i,i=i+24|0,c[e>>2]=37192,c[e+8>>2]=h,c[e+16>>2]=33968,e)|0)|0;i=e;c[28226]=1;break};case 5:{h=Rd(5)|0;Ya(112648,11656,(e=i,i=i+24|0,c[e>>2]=38128,c[e+8>>2]=h,c[e+16>>2]=33968,e)|0)|0;i=e;c[28226]=1;break};case 6:{h=Rd(6)|0;Ya(112648,15392,(e=i,i=i+24|0,c[e>>2]=38232,c[e+8>>2]=h,c[e+16>>2]=33968,e)|0)|0;i=e;c[28226]=1;break};case 7:{h=Rd(7)|0;Ya(112648,15392,(e=i,i=i+24|0,c[e>>2]=36360,c[e+8>>2]=h,c[e+16>>2]=33968,e)|0)|0;i=e;c[28226]=1;break};case 69:{h=Rd(69)|0;Ya(112648,15392,(e=i,i=i+24|0,c[e>>2]=34384,c[e+8>>2]=h,c[e+16>>2]=33968,e)|0)|0;i=e;c[28226]=1;break};case 61:{h=Rd(61)|0;Ya(112648,15392,(e=i,i=i+24|0,c[e>>2]=36776,c[e+8>>2]=h,c[e+16>>2]=33968,e)|0)|0;i=e;c[28226]=1;break};case 54:{h=Rd(54)|0;Ya(112648,15392,(e=i,i=i+24|0,c[e>>2]=35736,c[e+8>>2]=h,c[e+16>>2]=33968,e)|0)|0;i=e;c[28226]=1;break};case 1:{Ya(112648,18608,(e=i,i=i+1|0,i=i+7&-8,c[e>>2]=0,e)|0)|0;i=e;c[28226]=1;break};case 26:{h=Rd(26)|0;Ya(112648,15392,(e=i,i=i+24|0,c[e>>2]=38752,c[e+8>>2]=h,c[e+16>>2]=33968,e)|0)|0;i=e;c[28226]=1;break};case 28:{h=Rd(28)|0;Ya(112648,15392,(e=i,i=i+24|0,c[e>>2]=38024,c[e+8>>2]=h,c[e+16>>2]=33968,e)|0)|0;i=e;c[28226]=1;break};case 8:{if((f|0)==(c[102]|0)){c[30330]=((c[30330]|0)+1|0)%2|0}if((c[30330]|0)==0){h=Rd(8)|0;Ya(112648,15392,(e=i,i=i+24|0,c[e>>2]=38440,c[e+8>>2]=h,c[e+16>>2]=33968,e)|0)|0;i=e}else{h=Rd(70)|0;Ya(112648,15392,(e=i,i=i+24|0,c[e>>2]=38336,c[e+8>>2]=h,c[e+16>>2]=33968,e)|0)|0;i=e}c[28226]=1;break};case 50:{h=Rd(50)|0;Ya(112648,15392,(e=i,i=i+24|0,c[e>>2]=36568,c[e+8>>2]=h,c[e+16>>2]=33968,e)|0)|0;i=e;c[28226]=1;break};case 11:{h=Rd(11)|0;Ya(112648,15392,(e=i,i=i+24|0,c[e>>2]=38960,c[e+8>>2]=h,c[e+16>>2]=33968,e)|0)|0;i=e;c[28226]=1;break};case 117:{c[19900]=((c[19900]|0)+1|0)%3|0;h=c[19900]|0;if((h|0)==0){Ya(112648,36256,(e=i,i=i+1|0,i=i+7&-8,c[e>>2]=0,e)|0)|0;i=e}else if((h|0)==1){Ya(112648,38544,(e=i,i=i+1|0,i=i+7&-8,c[e>>2]=0,e)|0)|0;i=e}else if((h|0)==2){Ya(112648,35008,(e=i,i=i+1|0,i=i+7&-8,c[e>>2]=0,e)|0)|0;i=e}c[28226]=1;break};case 119:{c[18078]=((c[18078]|0)+1|0)%4|0;c[16936]=(c[18078]&2|0)/2|0;c[19642]=c[18078]&1;h=c[18078]|0;if((h|0)==0){Ya(112648,36880,(e=i,i=i+1|0,i=i+7&-8,c[e>>2]=0,e)|0)|0;i=e}else if((h|0)==1){Ya(112648,35632,(e=i,i=i+1|0,i=i+7&-8,c[e>>2]=0,e)|0)|0;i=e}else if((h|0)==2){Ya(112648,34800,(e=i,i=i+1|0,i=i+7&-8,c[e>>2]=0,e)|0)|0;i=e}else if((h|0)==3){Ya(112648,35528,(e=i,i=i+1|0,i=i+7&-8,c[e>>2]=0,e)|0)|0;i=e}c[28226]=1;break};case 122:{if((c[26974]|0)==(f|0)){Ya(112648,36048,(e=i,i=i+1|0,i=i+7&-8,c[e>>2]=0,e)|0)|0;i=e;c[28160]=1;c[16979]=0;c[16980]=0;c[16981]=0;c[16878]=255;h=c[28504]|0;if((h|0)==0){c[26698]=16;c[26699]=31}else if((h|0)==1){c[26698]=32;c[26699]=31}ed();f=-1}else{Ya(112648,35320,(e=i,i=i+1|0,i=i+7&-8,c[e>>2]=0,e)|0)|0;i=e;c[26976]=50}c[28226]=1;break};case 130:{if((c[26974]|0)==(f|0)){c[28568]=1;Td()|0;f=-1}else{Ya(112648,36984,(e=i,i=i+1|0,i=i+7&-8,c[e>>2]=0,e)|0)|0;i=e;c[26976]=50;c[28226]=1}break};case 120:{if((c[26974]|0)==(f|0)){Ya(112648,36152,(e=i,i=i+1|0,i=i+7&-8,c[e>>2]=0,e)|0)|0;i=e;c[16979]=0;c[16980]=0;c[16981]=0;c[16878]=255;h=c[28504]|0;if((h|0)==0){c[26698]=16;c[26699]=31}else if((h|0)==1){c[26698]=32;c[26699]=31}ed();f=-1}else{Ya(112648,37712,(e=i,i=i+1|0,i=i+7&-8,c[e>>2]=0,e)|0)|0;i=e;c[26976]=50}c[28226]=1;break};case 121:{if((c[26974]|0)==(f|0)){if((c[28160]|0)==1){Ya(112648,35424,(e=i,i=i+1|0,i=i+7&-8,c[e>>2]=0,e)|0)|0;i=e}else{Ya(112648,37816,(e=i,i=i+1|0,i=i+7&-8,c[e>>2]=0,e)|0)|0;i=e}f=-1;$d();c[28160]=0}else{c[26976]=50;if((c[28160]|0)==1){Ya(112648,34592,(e=i,i=i+1|0,i=i+7&-8,c[e>>2]=0,e)|0)|0;i=e}else{Ya(112648,34696,(e=i,i=i+1|0,i=i+7&-8,c[e>>2]=0,e)|0)|0;i=e}}c[28226]=1;break};case 123:{c[28504]=((c[28504]|0)+1|0)%2|0;h=c[28504]|0;if((h|0)==0){c[26698]=16;c[26699]=31;c[27502]=0;Ya(112648,10336,(e=i,i=i+8|0,c[e>>2]=35840,e)|0)|0;i=e;Pd()}else if((h|0)==1){c[26698]=32;c[26699]=31;Ya(112648,9304,(e=i,i=i+8|0,c[e>>2]=35840,e)|0)|0;i=e;Pd()}c[16979]=Rd(4)|0;c[16980]=Rd(7)|0;c[16981]=(Rd(5)|0)*9|0;Od();c[28578]=7;c[28226]=1;break};case 124:{c[26976]=3;Vd(c[284072+(f*40|0)>>2]|0);break};case 125:{c[26976]=3;c[28578]=7;h=c[284072+(f*40|0)>>2]|0;if((h|0)==0){c[27503]=0}else if((h|0)==1){c[27502]=0}else if((h|0)==2){c[27503]=(c[26699]|0)-(c[27505]|0)}else if((h|0)==3){c[27502]=(c[26698]|0)-(c[27504]|0)}break};case 131:{h=(Rd(30)|0)+(Rd(32)|0)|0;Ya(112648,15392,(e=i,i=i+24|0,c[e>>2]=36464,c[e+8>>2]=h,c[e+16>>2]=33968,e)|0)|0;i=e;c[28226]=1;break};case 40:{h=Rd(40)|0;Ya(112648,15392,(e=i,i=i+24|0,c[e>>2]=34280,c[e+8>>2]=h,c[e+16>>2]=33968,e)|0)|0;i=e;c[28226]=1;if((f|0)==(c[102]|0)){c[6]=((c[6]|0)%11|0)+1}break};case 24:{Ya(112648,36672,(e=i,i=i+1|0,i=i+7&-8,c[e>>2]=0,e)|0)|0;i=e;c[28226]=1;break};case 13:{h=Rd(13)|0;Ya(112648,15392,(e=i,i=i+24|0,c[e>>2]=38856,c[e+8>>2]=h,c[e+16>>2]=33968,e)|0)|0;i=e;c[28226]=1;if((f|0)==(c[102]|0)){c[16352]=((c[16352]|0)+1|0)%2|0}break};case 10:{h=Rd(10)|0;Ya(112648,13600,(e=i,i=i+16|0,c[e>>2]=h,c[e+8>>2]=33968,e)|0)|0;i=e;c[28226]=1;break};case 118:{c[29110]=((c[29110]|0)+1|0)%4|0;h=c[29110]|0;if((h|0)==1){Ya(112648,37608,(e=i,i=i+1|0,i=i+7&-8,c[e>>2]=0,e)|0)|0;i=e}else if((h|0)==2){Ya(112648,37504,(e=i,i=i+1|0,i=i+7&-8,c[e>>2]=0,e)|0)|0;i=e}else if((h|0)==3){Ya(112648,37296,(e=i,i=i+1|0,i=i+7&-8,c[e>>2]=0,e)|0)|0;i=e}else if((h|0)==0){Ya(112648,37400,(e=i,i=i+1|0,i=i+7&-8,c[e>>2]=0,e)|0)|0;i=e}c[28226]=1;break};case-1:{i=a;return};case 68:{h=Rd(68)|0;Ya(112648,15392,(e=i,i=i+24|0,c[e>>2]=35112,c[e+8>>2]=h,c[e+16>>2]=33968,e)|0)|0;i=e;c[28226]=1;break};case 127:{if((f|0)==(c[26974]|0)){Ya(112648,35944,(e=i,i=i+1|0,i=i+7&-8,c[e>>2]=0,e)|0)|0;i=e;Ye();be()|0;Pd();do{if((c[26698]|0)==16){if((c[26699]|0)!=31){g=71;break}c[28504]=0}else{g=71}}while(0);if((g|0)==71){do{if((c[26698]|0)==32){if((c[26699]|0)!=31){break}c[28504]=1}}while(0)}c[16980]=Rd(7)|0;c[16981]=(Rd(5)|0)*9|0;c[28578]=7;c[27502]=0;c[27503]=0;Od();ae();f=-1}else{Ya(112648,34904,(e=i,i=i+1|0,i=i+7&-8,c[e>>2]=0,e)|0)|0;i=e;c[26976]=50}c[28226]=1;break};default:{}}if((f|0)>=0){if((c[284064+(f*40|0)>>2]|0)==1){c[102]=f}}c[26974]=f;i=a;return}}while(0);i=a;return}function Yd(){var b=0,d=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0;b=i;i=i+48|0;d=b|0;e=b+8|0;f=b+16|0;g=b+32|0;h=0;if((c[284084+((c[102]|0)*40|0)>>2]|0)==0){c[284084+((c[102]|0)*40|0)>>2]=1}j=0;while(1){if(!((c[284056+(j*40|0)>>2]|0)!=-1)){break}do{if(!((c[284068+(j*40|0)>>2]|0)==-1)){if((c[284084+(j*40|0)>>2]|0)>0){k=284084+(j*40|0)|0;c[k>>2]=(c[k>>2]|0)-1;if((c[284084+(j*40|0)>>2]|0)<=0){if((j|0)==(c[102]|0)){c[284084+(j*40|0)>>2]=3;c[284088+((c[102]|0)*40|0)>>2]=((c[284088+((c[102]|0)*40|0)>>2]|0)+1|0)%2|0}}c[284092+(j*40|0)>>2]=1}if((c[284092+(j*40|0)>>2]|0)<=0){break}c[284092+(j*40|0)>>2]=0;c[f+12>>2]=c[7768];c[f+8>>2]=c[7768];k=c[284064+(j*40|0)>>2]|0;if((k|0)==1){l=aa(c[284076+(j*40|0)>>2]|0,c[7768]|0)|0;c[f>>2]=l+(c[27506]|0);l=aa(c[284080+(j*40|0)>>2]|0,c[7768]|0)|0;c[f+4>>2]=l+(c[27507]|0);h=c[60064+((c[16612]|0)*524|0)>>2]|0}else if((k|0)==2){l=aa(c[284080+(j*40|0)>>2]|0,c[7768]|0)|0;c[f+4>>2]=l+(c[27507]|0);l=aa(c[284076+(j*40|0)>>2]|0,c[7768]|0)|0;c[f>>2]=l+(c[27506]|0);h=c[60068+((c[16612]|0)*524|0)>>2]|0}else if((k|0)==3){k=aa(c[284076+(j*40|0)>>2]|0,c[7768]|0)|0;c[f>>2]=k+(c[27506]|0);k=aa(c[284080+(j*40|0)>>2]|0,c[7768]|0)|0;c[f+4>>2]=k+(c[27507]|0);h=c[60072+((c[16612]|0)*524|0)>>2]|0}k=c[16874]|0;Ta(k|0,f|0,Jb(c[(c[16874]|0)+4>>2]|0,h>>>16&255|0,h>>>8&255|0,h&255|0)|0)|0;switch(c[284068+(j*40|0)>>2]|0){case 8:{if((c[30330]|0)==1){Wd(8,7,g)}else{Wd(9,1,g)}Ub(c[28230]|0,g|0,c[16874]|0,f|0)|0;break};case 2:{switch(c[7496]|0){case 0:{Wd(3,1,g);break};case 1:{Wd(4,1,g);break};case 2:{Wd(6,3,g);break};case 3:{Wd(8,2,g);break};case 4:{Wd(10,2,g);break};case 5:{Wd(9,6,g);break};case 6:{Wd(10,6,g);break};case 7:{Wd(11,1,g);break};case 8:{Wd(11,2,g);break};default:{}}Ub(c[28230]|0,g|0,c[16874]|0,f|0)|0;break};case 117:{Wd(6,8,g);Ub(c[27508]|0,g|0,c[16874]|0,f|0)|0;Wd(3,(c[19900]|0)+1|0,g);Ub(c[27508]|0,g|0,c[16874]|0,f|0)|0;break};case 118:{Wd(2,(c[29110]|0)+4|0,g);Ub(c[27508]|0,g|0,c[16874]|0,f|0)|0;break};case 119:{Wd(6,8,g);Ub(c[27508]|0,g|0,c[16874]|0,f|0)|0;if((c[19642]|0)==1){if((c[16936]|0)==1){Wd(7,7,g)}else{Wd(3,7,g)}}else{if((c[16936]|0)==1){Wd(2,8,g)}else{Wd(7,8,g)}}Ub(c[27508]|0,g|0,c[16874]|0,f|0)|0;break};case 120:case 121:case 122:{m=c[284056+(j*40|0)>>2]|0;n=c[284060+(j*40|0)>>2]|0;Wd(m,n,g);Ub(c[27508]|0,g|0,c[16874]|0,f|0)|0;break};case 123:{do{if((c[28504]|0)>=0){if((c[28504]|0)>=2){o=51;break}m=6;n=(c[28504]|0)+5|0}else{o=51}}while(0);if((o|0)==51){o=0;m=7;n=5}Wd(m,n,g);Ub(c[27508]|0,g|0,c[16874]|0,f|0)|0;break};case 131:{do{if((c[29110]|0)==0){o=55}else{if((c[29110]|0)==2){o=55;break}Wd(3,4,g);Ub(c[28230]|0,g|0,c[16874]|0,f|0)|0}}while(0);if((o|0)==55){o=0;Wd(1,4,g);Ub(c[28230]|0,g|0,c[16874]|0,f|0)|0}Wd(5,(c[29110]|0)+5|0,g);Ub(c[27508]|0,g|0,c[16874]|0,f|0)|0;break};case 50:{Wd(c[284056+(j*40|0)>>2]|0,c[284060+(j*40|0)>>2]|0,g);Ub(c[28230]|0,g|0,c[16874]|0,f|0)|0;m=7;n=(c[19900]|0)+1|0;Wd(m,n,g);Ub(c[27508]|0,g|0,c[16874]|0,f|0)|0;if((c[19642]|0)!=0){Wd(5,(c[29110]|0)+5|0,g);Ub(c[27508]|0,g|0,c[16874]|0,f|0)|0}if((c[16936]|0)!=0){Wd(6,1,g);Ub(c[27508]|0,g|0,c[16874]|0,f|0)|0}break};case 54:{Wd(c[284056+(j*40|0)>>2]|0,c[284060+(j*40|0)>>2]|0,g);Ub(c[28230]|0,g|0,c[16874]|0,f|0)|0;if((c[16936]|0)!=0){Wd(6,1,g);Ub(c[27508]|0,g|0,c[16874]|0,f|0)|0}break};case 40:{Wd(c[284056+(j*40|0)>>2]|0,c[284060+(j*40|0)>>2]|0,g);Ub(c[28230]|0,g|0,c[16874]|0,f|0)|0;m=((c[6]|0)/9|0)+1|0;n=((c[6]|0)%9|0)+((c[6]|0)>8?1:0)|0;Wd(m,n,g);Ub(c[27508]|0,g|0,c[16874]|0,f|0)|0;break};case 11:case 26:{Wd(c[284056+(j*40|0)>>2]|0,c[284060+(j*40|0)>>2]|0,g);Ub(c[28230]|0,g|0,c[16874]|0,f|0)|0;Wd(5,(c[29110]|0)+5|0,g);Ub(c[27508]|0,g|0,c[16874]|0,f|0)|0;break};case 13:{Wd(c[284056+(j*40|0)>>2]|0,c[284060+(j*40|0)>>2]|0,g);Ub(c[28230]|0,g|0,c[16874]|0,f|0)|0;Wd(5,(c[29110]|0)+5|0,g);Ub(c[27508]|0,g|0,c[16874]|0,f|0)|0;if((c[16352]|0)!=0){Wd(3,4,g);Ub(c[27508]|0,g|0,c[16874]|0,f|0)|0}break};case 61:{Wd(c[284056+(j*40|0)>>2]|0,c[284060+(j*40|0)>>2]|0,g);Ub(c[28230]|0,g|0,c[16874]|0,f|0)|0;Wd(5,((c[29110]|0)>=2?2:0)+5|0,g);Ub(c[27508]|0,g|0,c[16874]|0,f|0)|0;break};default:{Wd(c[284056+(j*40|0)>>2]|0,c[284060+(j*40|0)>>2]|0,g);if((c[284064+(j*40|0)>>2]|0)==1){Ub(c[28230]|0,g|0,c[16874]|0,f|0)|0}else{Ub(c[27508]|0,g|0,c[16874]|0,f|0)|0}}}if((c[284084+(j*40|0)>>2]|0)>0){k=c[284088+(j*40|0)>>2]|0;if((k|0)==0){Wd(3,6,g)}else if((k|0)==1){Wd(3,5,g)}Ub(c[27508]|0,g|0,c[16874]|0,f|0)|0}}}while(0);j=j+1|0}if((c[28226]|0)==0){i=b;return}c[28226]=0;a[e|0]=(c[60060+((c[16612]|0)*524|0)>>2]|0)>>>16&255;a[e+1|0]=(c[60060+((c[16612]|0)*524|0)>>2]|0)>>>8&255;a[e+2|0]=c[60060+((c[16612]|0)*524|0)>>2]&255;a[d|0]=(c[60012+((c[16612]|0)*524|0)>>2]|0)>>>16&255;a[d+1|0]=(c[60012+((c[16612]|0)*524|0)>>2]|0)>>>8&255;a[d+2|0]=c[60012+((c[16612]|0)*524|0)>>2]&255;j=rd(c[28582]|0,112648,e,d)|0;c[f+12>>2]=c[j+12>>2];e=aa(c[8034]|0,c[7768]|0)|0;c[f>>2]=e+(c[27506]|0)+((c[7768]|0)/8|0);e=aa(c[8032]|0,c[7768]|0)|0;c[f+4>>2]=e+(c[27507]|0);if((c[f+12>>2]|0)<(c[7768]|0)){e=f+4|0;c[e>>2]=(c[e>>2]|0)+(((c[7768]|0)-(c[f+12>>2]|0)|0)/2|0)}c[f+8>>2]=((c[7768]|0)*15|0)-((c[7768]|0)/8|0);e=c[16874]|0;Ta(e|0,f|0,Jb(c[(c[16874]|0)+4>>2]|0,a[d|0]|0,a[d+1|0]|0,a[d+2|0]|0)|0)|0;c[f+8>>2]=c[j+8>>2];c[f+12>>2]=c[j+12>>2];Ub(j|0,0,c[16874]|0,f|0)|0;hc(j|0);i=b;return}function Zd(b,c){b=b|0;c=c|0;var d=0,e=0,f=0;d=i;i=i+16|0;e=d|0;Nf(e|0,1080,10)|0;switch(b|0){case 54:{f=77;break};case 60:{f=126;break};case 40:{f=38;break};case 50:{f=125;break};case 13:{f=94;break};case 10:{f=63;break};case 6:{f=35;break};case 30:{f=76;break};case 7:{f=37;break};case 11:{f=64;break};case 8:{f=98;break};case 68:{f=107;break};case 32:{f=108;break};case 26:{f=42;break};case 28:{f=86;break};case 70:{f=66;break};case 9:{f=68;break};case 61:{f=61;break};case 4:{f=84;break};case 0:{f=46;break};case 1:{f=82;break};case 2:{f=a[e+c|0]|0;break};case 69:{f=88;break};case 24:{f=72;break};case 15:{f=33;break};case 5:{f=39;break};default:{f=46}}i=d;return f|0}function _d(b,d){b=b|0;d=d|0;var e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0;e=i;i=i+1024|0;f=e|0;g=b;b=0;h=0;Nb(g|0,8368,(j=i,i=i+8|0,c[j>>2]=d,j)|0)|0;i=j;Nb(g|0,7712,(j=i,i=i+1|0,i=i+7&-8,c[j>>2]=0,j)|0)|0;i=j;if((c[26716]|0)!=-1){Nb(g|0,28304,(j=i,i=i+8|0,c[j>>2]=c[26716],j)|0)|0;i=j}d=c[26699]|0;Nb(g|0,27544,(j=i,i=i+16|0,c[j>>2]=c[26698],c[j+8>>2]=d,j)|0)|0;i=j;Nb(g|0,26776,(j=i,i=i+1|0,i=i+7&-8,c[j>>2]=0,j)|0)|0;i=j;if((a[106800]|0)!=0){Nb(g|0,25904,(j=i,i=i+8|0,c[j>>2]=106800,j)|0)|0;i=j}Nb(g|0,25184,(j=i,i=i+1|0,i=i+7&-8,c[j>>2]=0,j)|0)|0;i=j;if((a[106872]|0)!=0){Nb(g|0,24360,(j=i,i=i+8|0,c[j>>2]=106872,j)|0)|0;i=j}Nb(g|0,23512,(j=i,i=i+1|0,i=i+7&-8,c[j>>2]=0,j)|0)|0;i=j;d=0;while(1){if((d|0)>=(c[26699]|0)){break}k=0;while(1){if((k|0)>=(c[26698]|0)){break}do{if((c[16974]|0)==(k|0)){if((c[16975]|0)!=(d|0)){l=14;break}a[f+k|0]=Zd(1,0)|0}else{l=14}}while(0);if((l|0)==14){l=0;a[f+k|0]=Zd(c[122352+(k*4960|0)+(d*160|0)>>2]|0,c[122352+(k*4960|0)+(d*160|0)+4>>2]|0)|0;switch(c[122352+(k*4960|0)+(d*160|0)>>2]|0){case 61:case 30:case 32:case 50:case 13:case 40:case 54:case 11:case 26:{b=b+1|0;break};default:{}}}k=k+1|0}a[f+k|0]=0;Nb(g|0,25904,(j=i,i=i+8|0,c[j>>2]=f,j)|0)|0;i=j;d=d+1|0}Nb(g|0,22616,(j=i,i=i+8|0,c[j>>2]=b,j)|0)|0;i=j;d=0;while(1){if((d|0)>=(c[26699]|0)){break}k=0;while(1){if((k|0)>=(c[26698]|0)){break}switch(c[122352+(k*4960|0)+(d*160|0)>>2]|0){case 40:{b=c[122352+(k*4960|0)+(d*160|0)+52>>2]|0;f=h;h=f+1|0;Nb(g|0,16320,(j=i,i=i+32|0,c[j>>2]=k,c[j+8>>2]=d,c[j+16>>2]=b,c[j+24>>2]=f,j)|0)|0;i=j;break};case 30:{f=c[122352+(k*4960|0)+(d*160|0)+8>>2]|0;Nb(g|0,21592,(j=i,i=i+24|0,c[j>>2]=k,c[j+8>>2]=d,c[j+16>>2]=f,j)|0)|0;i=j;break};case 32:{f=c[122352+(k*4960|0)+(d*160|0)+8>>2]|0;Nb(g|0,20528,(j=i,i=i+24|0,c[j>>2]=k,c[j+8>>2]=d,c[j+16>>2]=f,j)|0)|0;i=j;break};case 54:{if((c[122352+(k*4960|0)+(d*160|0)+44>>2]|0)==0){f=c[122352+(k*4960|0)+(d*160|0)+4>>2]|0;Nb(g|0,17072,(j=i,i=i+24|0,c[j>>2]=k,c[j+8>>2]=d,c[j+16>>2]=f,j)|0)|0;i=j}else{f=c[122352+(k*4960|0)+(d*160|0)+4>>2]|0;b=c[122352+(k*4960|0)+(d*160|0)+44>>2]|0;Nb(g|0,16504,(j=i,i=i+32|0,c[j>>2]=k,c[j+8>>2]=d,c[j+16>>2]=f,c[j+24>>2]=b,j)|0)|0;i=j}break};case 11:{b=c[122352+(k*4960|0)+(d*160|0)+8>>2]|0;Nb(g|0,18152,(j=i,i=i+24|0,c[j>>2]=k,c[j+8>>2]=d,c[j+16>>2]=b,j)|0)|0;i=j;break};case 26:{b=c[122352+(k*4960|0)+(d*160|0)+8>>2]|0;Nb(g|0,17584,(j=i,i=i+24|0,c[j>>2]=k,c[j+8>>2]=d,c[j+16>>2]=b,j)|0)|0;i=j;break};case 13:{b=c[122352+(k*4960|0)+(d*160|0)+8>>2]|0;f=c[122352+(k*4960|0)+(d*160|0)+64>>2]|0;l=c[122352+(k*4960|0)+(d*160|0)+76>>2]|0;Nb(g|0,18680,(j=i,i=i+40|0,c[j>>2]=k,c[j+8>>2]=d,c[j+16>>2]=b,c[j+24>>2]=f,c[j+32>>2]=l,j)|0)|0;i=j;break};case 61:{l=c[122352+(k*4960|0)+(d*160|0)+8>>2]|0;Nb(g|0,19872,(j=i,i=i+24|0,c[j>>2]=k,c[j+8>>2]=d,c[j+16>>2]=l,j)|0)|0;i=j;break};case 50:{l=c[122352+(k*4960|0)+(d*160|0)+8>>2]|0;f=c[122352+(k*4960|0)+(d*160|0)+64>>2]|0;b=c[122352+(k*4960|0)+(d*160|0)+40>>2]|0;m=c[122352+(k*4960|0)+(d*160|0)+68>>2]|0;n=c[122352+(k*4960|0)+(d*160|0)+44>>2]|0;o=c[122352+(k*4960|0)+(d*160|0)+48>>2]|0;Nb(g|0,19280,(j=i,i=i+64|0,c[j>>2]=k,c[j+8>>2]=d,c[j+16>>2]=l,c[j+24>>2]=f,c[j+32>>2]=b,c[j+40>>2]=m,c[j+48>>2]=n,c[j+56>>2]=o,j)|0)|0;i=j;break};default:{}}k=k+1|0}d=d+1|0}Nb(g|0,16088,(j=i,i=i+1|0,i=i+7&-8,c[j>>2]=0,j)|0)|0;i=j;i=e;return}function $d(){var b=0,d=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0;b=i;i=i+3088|0;d=b|0;e=b+8|0;f=b+16|0;g=b+1040|0;h=b+2064|0;j=0;c[d>>2]=-10;c[e>>2]=-10;k=0;Ya(g|0,24360,(l=i,i=i+8|0,c[l>>2]=82256+((c[16614]|0)*292|0),l)|0)|0;i=l;Ya(h|0,15968,(l=i,i=i+16|0,c[l>>2]=82256+((c[16614]|0)*292|0),c[l+8>>2]=15704,l)|0)|0;i=l;m=Ua(g|0,15592)|0;n=Ua(h|0,15440)|0;do{if((n|0)!=0){if((m|0)==0){break}a:while(1){if(!((Pb(m|0)|0)!=0^1)){break}Ra(f|0,1023,m|0)|0;do{if((a[f|0]|0)==10){o=12}else{if((a[f|0]|0)==13){o=12;break}j=0}}while(0);if((o|0)==12){o=0;j=j+1|0}if((j|0)>2){continue}if((k|0)==1){if((Mf(f|0,15280,5)|0)==0){k=0}continue}do{if((c[e>>2]|0)==-5){if((c[28160]|0)!=0){break}Hb(f|0,8368,(l=i,i=i+8|0,c[l>>2]=e,l)|0)|0;i=l;if((c[e>>2]|0)==(c[82540+((c[16614]|0)*292|0)>>2]|0)){_d(n,c[e>>2]|0);k=1;c[e>>2]=-11;continue a}else{c[e>>2]=-10;break}}}while(0);if((c[d>>2]|0)==-5){Hb(f|0,8368,(l=i,i=i+8|0,c[l>>2]=d,l)|0)|0;i=l;if((c[28160]|0)==1){c[d>>2]=(c[d>>2]|0)+1}Ya(f|0,8368,(l=i,i=i+8|0,c[l>>2]=c[d>>2],l)|0)|0;i=l}if((Mf(f|0,15120,12)|0)==0){c[d>>2]=-5}do{if((Mf(f|0,14960,7)|0)==0){if(!((c[e>>2]|0)!=-11)){break}c[e>>2]=-5}}while(0);Nb(n|0,24360,(l=i,i=i+8|0,c[l>>2]=f,l)|0)|0;i=l}if((c[28160]|0)==1){Nb(n|0,14752,(l=i,i=i+1|0,i=i+7&-8,c[l>>2]=0,l)|0)|0;i=l;_d(n,c[d>>2]|0);p=82532+((c[16614]|0)*292|0)|0;c[p>>2]=(c[p>>2]|0)+1}ma(n|0)|0;ma(m|0)|0;cc(g|0)|0;Gb(h|0,g|0)|0;i=b;return}}while(0);if((n|0)!=0){ma(n|0)|0}if((m|0)!=0){ma(m|0)|0}i=b;return}function ae(){var a=0,b=0,d=0;a=i;b=c[27502]|0;while(1){if((b|0)>=((c[27502]|0)+(c[27505]|0)|0)){break}d=c[27503]|0;while(1){if((d|0)>=((c[27503]|0)+(c[27504]|0)|0)){break}Ic(d,b);d=d+1|0}b=b+1|0}b=0;while(1){if(!((c[284056+(b*40|0)>>2]|0)!=-1)){break}c[284092+(b*40|0)>>2]=1;b=b+1|0}i=a;return}function be(){var b=0,d=0,e=0,f=0,g=0;b=i;d=0;bd();c[26698]=0;c[26699]=0;a[106800]=0;a[106872]=0;c[26715]=0;c[26716]=-1;c[26717]=-1;c[18087]=0;ed();if((ce(c[82540+((c[16614]|0)*292|0)>>2]|0)|0)!=0){d=1;e=d;i=b;return e|0}pf()|0;if((c[16979]|0)==0){Uc()}Vc();do{if((c[26698]|0)>=(c[7760]|0)){if((c[7765]|0)!=0){f=8;break}c[7758]=c[7760]}else{f=8}}while(0);if((f|0)==8){c[7758]=c[26698]}if((c[7758]|0)>((c[(c[16874]|0)+8>>2]|0)/(c[7768]|0)|0|0)){c[7758]=(c[(c[16874]|0)+8>>2]|0)/(c[7768]|0)|0}g=((c[(c[16874]|0)+8>>2]|0)-(aa(c[7758]|0,c[7768]|0)|0)|0)/2|0;c[7762]=g+(c[7770]|0);do{if((c[26699]|0)>=(c[7761]|0)){if((c[7765]|0)!=0){f=14;break}c[7759]=c[7761]}else{f=14}}while(0);if((f|0)==14){c[7759]=c[26699]}if((c[7759]|0)>(((c[(c[16874]|0)+12>>2]|0)/(c[7768]|0)|0)-3|0)){c[7759]=((c[(c[16874]|0)+12>>2]|0)/(c[7768]|0)|0)-3}f=((c[(c[16874]|0)+12>>2]|0)-(aa(c[7759]|0,c[7768]|0)|0)|0)/2|0;c[7763]=f+(c[7771]|0);c[16876]=(((c[(c[16874]|0)+8>>2]|0)-(c[7768]<<4)|0)/2|0)+(c[7770]|0);if((c[16876]|0)<0){c[16876]=0}f=((c[(c[16874]|0)+12>>2]|0)/2|0)+((aa(c[7768]|0,c[7759]|0)|0)/2|0)|0;c[16877]=f+((c[7768]|0)/4|0)+(c[7771]|0);c[70552]=(c[16876]|0)+((c[7768]<<1|0)/16|0);f=((c[(c[16874]|0)+12>>2]|0)/2|0)-((aa(c[7768]|0,c[7759]|0)|0)/2|0)|0;c[70553]=f-(c[7768]|0)-((c[7768]|0)/4|0)+(c[7771]|0);if((c[16974]|0)<((c[26698]|0)/2|0|0)){c[7756]=(c[26698]|0)-(c[7758]|0)}else{c[7756]=0}if((c[16975]|0)<((c[26699]|0)/2|0|0)){c[7757]=(c[26699]|0)-(c[7759]|0)}else{c[7757]=0}c[7764]=c[28574]<<1;e=d;i=b;return e|0}



function oc(a){a=a|0;var b=0;b=i;i=i+a|0;i=i+7&-8;return b|0}function pc(){return i|0}function qc(a){a=a|0;i=a}function rc(a,b){a=a|0;b=b|0;if((r|0)==0){r=a;s=b}}function sc(b){b=b|0;a[k]=a[b];a[k+1|0]=a[b+1|0];a[k+2|0]=a[b+2|0];a[k+3|0]=a[b+3|0]}function tc(b){b=b|0;a[k]=a[b];a[k+1|0]=a[b+1|0];a[k+2|0]=a[b+2|0];a[k+3|0]=a[b+3|0];a[k+4|0]=a[b+4|0];a[k+5|0]=a[b+5|0];a[k+6|0]=a[b+6|0];a[k+7|0]=a[b+7|0]}function uc(a){a=a|0;E=a}function vc(a){a=a|0;F=a}function wc(a){a=a|0;G=a}function xc(a){a=a|0;H=a}function yc(a){a=a|0;I=a}function zc(a){a=a|0;J=a}function Ac(a){a=a|0;K=a}function Bc(a){a=a|0;L=a}function Cc(a){a=a|0;M=a}function Dc(a){a=a|0;N=a}function Ec(){}function Fc(){var a=0,b=0,d=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0;a=i;i=i+40|0;b=a|0;d=a+8|0;e=a+16|0;f=a+24|0;g=a+32|0;h=0;j=0;k=0;c[e>>2]=0;c[e+4>>2]=0;zf();if((Gc()|0)!=0){Hc()}if((c[16983]|0)>0){c[16983]=(c[16983]|0)-1}if((c[16982]|0)>0){c[16982]=(c[16982]|0)-1}if((c[16982]|0)==0){c[16987]=0;Ic(c[16974]|0,c[16975]|0);if((c[16985]|0)==1){Jc(b,c[16974]|0,c[16975]|0);if((Kc(b,c[16986]|0)|0)==0){Hc();i=a;return}Gf(14,2);l=c[16986]|0;if((l|0)==0){c[16974]=(c[16974]|0)+1}else if((l|0)==2){c[16974]=(c[16974]|0)-1}else if((l|0)==1){c[16975]=(c[16975]|0)+1}else if((l|0)==3){c[16975]=(c[16975]|0)-1}c[16982]=4;Ic(c[16974]|0,c[16975]|0)}}else{if((c[16982]|0)==2){c[16977]=((c[16977]|0)!=0^1)&1;Ic(c[16974]|0,c[16975]|0)}}l=0;a:while(1){if((l|0)>=(c[26699]|0)){m=367;break}n=0;while(1){if((n|0)>=(c[26698]|0)){break}if((c[122352+(n*4960|0)+(l*160|0)+80>>2]|0)!=(c[29358]|0)){c[122352+(n*4960|0)+(l*160|0)+80>>2]=c[29358];do{if((c[122352+(n*4960|0)+(l*160|0)>>2]|0)==50){m=30}else{if((c[122352+(n*4960|0)+(l*160|0)>>2]|0)==13){m=30;break}if((c[122352+(n*4960|0)+(l*160|0)>>2]|0)==54){m=30}}}while(0);if((m|0)==30){m=0;if((c[122352+(n*4960|0)+(l*160|0)+32>>2]|0)>0){o=122352+(n*4960|0)+(l*160|0)+32|0;c[o>>2]=(c[o>>2]|0)-1}if((c[122352+(n*4960|0)+(l*160|0)+36>>2]|0)>0){o=122352+(n*4960|0)+(l*160|0)+36|0;c[o>>2]=(c[o>>2]|0)-1}}if((c[122352+(n*4960|0)+(l*160|0)+24>>2]|0)>0){o=122352+(n*4960|0)+(l*160|0)+24|0;c[o>>2]=(c[o>>2]|0)-1}if((c[122352+(n*4960|0)+(l*160|0)+24>>2]|0)<=0){Lc(n,l);Jc(b,n,l);b:do{switch(c[122352+(n*4960|0)+(l*160|0)>>2]|0){case 11:case 26:{Jc(b,n,l);if((c[28568]|0)==1){if((c[122352+(n*4960|0)+(l*160|0)>>2]|0)==11){Mc(b,(c[122352+(n*4960|0)+(l*160|0)+8>>2]|0)+3&3)|0}else{Mc(b,(c[122352+(n*4960|0)+(l*160|0)+8>>2]|0)+1&3)|0}}o=0;if((c[28570]|0)!=0){Jc(f,c[b>>2]|0,c[b+4>>2]|0);Mc(f,(c[122352+(n*4960|0)+(l*160|0)+8>>2]|0)+2&3)|0;Jc(g,c[f>>2]|0,c[f+4>>2]|0);if((c[122352+(n*4960|0)+(l*160|0)>>2]|0)==11){Mc(g,(c[122352+(n*4960|0)+(l*160|0)+8>>2]|0)+1&3)|0}else{Mc(g,(c[122352+(n*4960|0)+(l*160|0)+8>>2]|0)+3&3)|0}do{if((c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)>>2]|0)==0){if((c[122352+((c[g>>2]|0)*4960|0)+((c[g+4>>2]|0)*160|0)>>2]|0)!=0){break}if((c[122352+((c[f>>2]|0)*4960|0)+((c[f+4>>2]|0)*160|0)>>2]|0)!=0){if((c[122352+(n*4960|0)+(l*160|0)>>2]|0)!=(c[122352+((c[f>>2]|0)*4960|0)+((c[f+4>>2]|0)*160|0)>>2]|0)){break}}o=1}}while(0)}do{if((c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)>>2]|0)==0){if((o|0)!=0){m=60;break}if((c[122352+(n*4960|0)+(l*160|0)>>2]|0)==11){c[122352+(n*4960|0)+(l*160|0)+8>>2]=(c[122352+(n*4960|0)+(l*160|0)+8>>2]|0)+3&3}else{c[122352+(n*4960|0)+(l*160|0)+8>>2]=(c[122352+(n*4960|0)+(l*160|0)+8>>2]|0)+1&3}c[122352+(n*4960|0)+(l*160|0)+24>>2]=4;Nc(n,l);Oc(n,l,b)}else{m=60}}while(0);if((m|0)==60){m=0;Jc(b,n,l);Mc(b,c[122352+(n*4960|0)+(l*160|0)+8>>2]|0)|0;if((c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)>>2]|0)==0){c[122352+(n*4960|0)+(l*160|0)+24>>2]=4;Nc(n,l);Oc(n,l,b)}else{if((c[122352+(n*4960|0)+(l*160|0)>>2]|0)==11){c[122352+(n*4960|0)+(l*160|0)+8>>2]=(c[122352+(n*4960|0)+(l*160|0)+8>>2]|0)+1&3}else{c[122352+(n*4960|0)+(l*160|0)+8>>2]=(c[122352+(n*4960|0)+(l*160|0)+8>>2]|0)+3&3}c[122352+(n*4960|0)+(l*160|0)+24>>2]=4;c[122352+(n*4960|0)+(l*160|0)+80>>2]=c[29358];Nc(n,l)}}break};case 61:{o=0;p=n;if((c[122352+(n*4960|0)+(l*160|0)+8>>2]|0)==0){while(1){if((p|0)<(c[26698]|0)){q=(c[122352+(p*4960|0)+(l*160|0)>>2]|0)!=2}else{q=0}if(!q){break}p=p+1|0}p=p-1|0;if((c[122352+(p*4960|0)+(l*160|0)>>2]|0)==61){h=c[122352+(p*4960|0)+(l*160|0)+4>>2]|0;j=c[122352+(p*4960|0)+(l*160|0)+28>>2]|0;k=c[122352+(p*4960|0)+(l*160|0)+8>>2]|0;Pc(p,l);Nc(p,l);o=1}while(1){if((p|0)>=0){r=(c[122352+(p*4960|0)+(l*160|0)>>2]|0)!=2}else{r=0}if(!r){break}p=p-1|0;do{if((p|0)>=0){if((c[122352+(p*4960|0)+(l*160|0)>>2]|0)!=61){break}Lc(p,l);c[e>>2]=p+1;c[e+4>>2]=l;if((c[e>>2]|0)==(c[16974]|0)){if((c[e+4>>2]|0)==(c[16975]|0)){m=84;break a}}Oc(p,l,e);c[122352+((c[e>>2]|0)*4960|0)+((c[e+4>>2]|0)*160|0)+24>>2]=4;c[122352+((c[e>>2]|0)*4960|0)+((c[e+4>>2]|0)*160|0)+80>>2]=c[29358];Nc(c[e>>2]|0,c[e+4>>2]|0)}}while(0)}p=p+1|0;if((o|0)==1){if((c[e>>2]|0)==(c[16974]|0)){if((c[e+4>>2]|0)==(c[16975]|0)){m=90;break a}}if((c[16974]|0)==(p|0)){if((c[16975]|0)==(l|0)){m=93;break a}}Qc(p,l,61);c[122352+(p*4960|0)+(l*160|0)+4>>2]=h;c[122352+(p*4960|0)+(l*160|0)+28>>2]=j;c[122352+(p*4960|0)+(l*160|0)+8>>2]=k;c[122352+(p*4960|0)+(l*160|0)+24>>2]=4;Nc(p,l)}}else{if((c[122352+(n*4960|0)+(l*160|0)+8>>2]|0)==2){while(1){if((p|0)>=0){s=(c[122352+(p*4960|0)+(l*160|0)>>2]|0)!=2}else{s=0}if(!s){break}p=p-1|0}p=p+1|0;if((c[122352+(p*4960|0)+(l*160|0)>>2]|0)==61){h=c[122352+(p*4960|0)+(l*160|0)+4>>2]|0;j=c[122352+(p*4960|0)+(l*160|0)+28>>2]|0;k=c[122352+(p*4960|0)+(l*160|0)+8>>2]|0;Pc(p,l);Nc(p,l);o=1}while(1){if((p|0)<(c[26698]|0)){t=(c[122352+(p*4960|0)+(l*160|0)>>2]|0)!=2}else{t=0}if(!t){break}p=p+1|0;do{if((p|0)<(c[26698]|0)){if((c[122352+(p*4960|0)+(l*160|0)>>2]|0)!=61){break}Lc(p,l);c[e>>2]=p-1;c[e+4>>2]=l;if((c[e>>2]|0)==(c[16974]|0)){if((c[e+4>>2]|0)==(c[16975]|0)){m=112;break a}}Oc(p,l,e);c[122352+((c[e>>2]|0)*4960|0)+((c[e+4>>2]|0)*160|0)+24>>2]=4;c[122352+((c[e>>2]|0)*4960|0)+((c[e+4>>2]|0)*160|0)+80>>2]=c[29358];Nc(c[e>>2]|0,c[e+4>>2]|0)}}while(0)}p=p-1|0;do{if((o|0)==1){if((j|0)!=0){break}if((c[e>>2]|0)==(c[16974]|0)){if((c[e+4>>2]|0)==(c[16975]|0)){m=119;break a}}if((c[16974]|0)==(p|0)){if((c[16975]|0)==(l|0)){m=122;break a}}Qc(p,l,61);c[122352+(p*4960|0)+(l*160|0)+4>>2]=h;c[122352+(p*4960|0)+(l*160|0)+24>>2]=4;c[122352+(p*4960|0)+(l*160|0)+8>>2]=k;Nc(p,l)}}while(0)}}break};case 13:{if((Kc(b,c[122352+(n*4960|0)+(l*160|0)+8>>2]|0)|0)!=0){Mc(b,c[122352+(n*4960|0)+(l*160|0)+8>>2]|0)|0;Oc(n,l,b)}else{c[122352+(n*4960|0)+(l*160|0)+8>>2]=(c[122352+(n*4960|0)+(l*160|0)+8>>2]|0)+2&3}if((c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)+76>>2]|0)!=0){if((c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)+32>>2]|0)==0){if(((ud()|0)&7|0)==0){Rc(c[b>>2]|0,c[b+4>>2]|0,c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)+64>>2]|0);if((Sc(n,l)|0)!=0){Gf(9,2)}else{Gf(9,4)}}else{c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)+32>>2]=4}}}c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)+24>>2]=4;Nc(c[b>>2]|0,c[b+4>>2]|0);break};case 28:{if((Kc(b,c[122352+(n*4960|0)+(l*160|0)+8>>2]|0)|0)!=0){Mc(b,c[122352+(n*4960|0)+(l*160|0)+8>>2]|0)|0;Oc(n,l,b)}if(((ud()|0)&7|0)!=0){if(((ud()|0)&1|0)==0){if((c[16974]|0)>(c[b>>2]|0)){c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)+8>>2]=0}else{if((c[16974]|0)<(c[b>>2]|0)){c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)+8>>2]=2}}}else{if((c[16975]|0)>(c[b+4>>2]|0)){c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)+8>>2]=1}else{if((c[16975]|0)<(c[b+4>>2]|0)){c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)+8>>2]=3}}}}else{p=(ud()|0)&3;c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)+8>>2]=p}c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)+24>>2]=4;Nc(c[b>>2]|0,c[b+4>>2]|0);break};case 58:{Jc(b,n,l);Ic(n,l);Jc(d,n,l);h=c[122352+((c[d>>2]|0)*4960|0)+((c[d+4>>2]|0)*160|0)+4>>2]|0;while(1){if((c[122352+((c[d>>2]|0)*4960|0)+((c[d+4>>2]|0)*160|0)>>2]|0)!=58){break}h=c[122352+((c[d>>2]|0)*4960|0)+((c[d+4>>2]|0)*160|0)+4>>2]|0;Mc(d,((c[122352+((c[d>>2]|0)*4960|0)+((c[d+4>>2]|0)*160|0)+8>>2]|0)+2|0)%4|0)|0}do{if((h|0)<3){if((c[122352+((c[d>>2]|0)*4960|0)+((c[d+4>>2]|0)*160|0)>>2]|0)==50){break}Qc(c[b>>2]|0,c[b+4>>2]|0,21);c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)+24>>2]=4;break b}}while(0);do{if((Mc(b,c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)+8>>2]|0)|0)==0){if((c[122352+(n*4960|0)+(l*160|0)+4>>2]|0)!=0){break}if((c[16974]|0)==(c[b>>2]|0)){if((c[16975]|0)==(c[b+4>>2]|0)){m=170;break a}}switch(c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)>>2]|0){case 9:case 2:case 54:case 6:case 40:case 60:case 68:case 69:case 50:case 32:case 30:case 58:case 4:case 7:case 15:{break};case 8:case 70:{c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)+28>>2]=4;break};default:{Pc(c[b>>2]|0,c[b+4>>2]|0);Qc(c[b>>2]|0,c[b+4>>2]|0,58);c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)+8>>2]=c[122352+(n*4960|0)+(l*160|0)+8>>2];c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)+64>>2]=c[122352+(n*4960|0)+(l*160|0)+64>>2];c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)+24>>2]=4}}}}while(0);if((c[122352+(n*4960|0)+(l*160|0)+4>>2]|0)<4){p=122352+(n*4960|0)+(l*160|0)+4|0;c[p>>2]=(c[p>>2]|0)+1;c[122352+(n*4960|0)+(l*160|0)+24>>2]=4}else{Pc(n,l)}break};case 15:{if((c[16984]|0)!=0){Nc(n,l);c[122352+(n*4960|0)+(l*160|0)+24>>2]=10}break};case 21:{Ic(n,l);if((c[122352+(n*4960|0)+(l*160|0)+4>>2]|0)<3){p=122352+(n*4960|0)+(l*160|0)+4|0;c[p>>2]=(c[p>>2]|0)+1;c[122352+(n*4960|0)+(l*160|0)+24>>2]=2}else{Pc(n,l)}break};case 30:case 32:{Ic(n,l);Mc(b,c[122352+(n*4960|0)+(l*160|0)+8>>2]|0)|0;c[122352+(n*4960|0)+(l*160|0)+24>>2]=4;do{if((c[b>>2]|0)==(c[16974]|0)){if((c[b+4>>2]|0)!=(c[16975]|0)){break}if((c[122352+(n*4960|0)+(l*160|0)+72>>2]|0)==0){m=190;break a}}}while(0);Jc(b,n,l);if((c[122352+(n*4960|0)+(l*160|0)+40>>2]|0)==0){Nc(n,l);c:do{if((Kc(b,c[122352+(n*4960|0)+(l*160|0)+8>>2]|0)|0)!=0){Mc(b,c[122352+(n*4960|0)+(l*160|0)+8>>2]|0)|0;Oc(n,l,b);c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)+24>>2]=4}else{do{if((Mc(b,c[122352+(n*4960|0)+(l*160|0)+8>>2]|0)|0)==0){if((c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)+12>>2]|0)==0){break}do{if((c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)>>2]|0)!=8){if((c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)>>2]|0)==70){break}if((Sc(n,l)|0)!=0){Gf(13,2)}else{Gf(13,4)}}}while(0);Pc(n,l);c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)+28>>2]=1;Ic(c[b>>2]|0,c[b+4>>2]|0);break c}}while(0);Pc(n,l);Qc(n,l,21);c[122352+(n*4960|0)+(l*160|0)+24>>2]=2;break b}}while(0)}else{Jc(d,n,l);while(1){do{if((c[122352+((c[d>>2]|0)*4960|0)+((c[d+4>>2]|0)*160|0)>>2]|0)==(c[122352+(n*4960|0)+(l*160|0)>>2]|0)){if((c[d>>2]|0)<0){u=0;break}if((c[d+4>>2]|0)<0){u=0;break}if((c[d>>2]|0)>(c[26698]|0)){u=0;break}u=(c[d+4>>2]|0)<=(c[26699]|0)}else{u=0}}while(0);if(!u){break}if((Mc(d,(c[122352+(n*4960|0)+(l*160|0)+8>>2]|0)+2&3)|0)!=0){m=214;break}}if((m|0)==214){m=0}if((c[122352+((c[d>>2]|0)*4960|0)+((c[d+4>>2]|0)*160|0)>>2]|0)!=50){Qc(n,l,21);break b}Jc(d,n,l);Mc(d,(c[122352+(n*4960|0)+(l*160|0)+8>>2]|0)+2&3)|0;if((c[122352+((c[d>>2]|0)*4960|0)+((c[d+4>>2]|0)*160|0)>>2]|0)==50){h=(c[122352+(n*4960|0)+(l*160|0)+4>>2]|0)==3?2:3;Jc(d,n,l);while(1){do{if((c[122352+((c[d>>2]|0)*4960|0)+((c[d+4>>2]|0)*160|0)>>2]|0)==(c[122352+(n*4960|0)+(l*160|0)>>2]|0)){if((c[122352+((c[d>>2]|0)*4960|0)+((c[d+4>>2]|0)*160|0)+8>>2]|0)!=(c[122352+(n*4960|0)+(l*160|0)+8>>2]|0)){v=0;break}if((c[d>>2]|0)<0){v=0;break}if((c[d+4>>2]|0)<0){v=0;break}if((c[d>>2]|0)>(c[26698]|0)){v=0;break}v=(c[d+4>>2]|0)<=(c[26699]|0)}else{v=0}}while(0);if(!v){break}Ic(c[d>>2]|0,c[d+4>>2]|0);c[122352+((c[d>>2]|0)*4960|0)+((c[d+4>>2]|0)*160|0)+4>>2]=h;if((Mc(d,c[122352+(n*4960|0)+(l*160|0)+8>>2]|0)|0)!=0){m=228;break}}if((m|0)==228){m=0}}do{if((Kc(b,c[122352+(n*4960|0)+(l*160|0)+8>>2]|0)|0)!=0){if((c[122352+(n*4960|0)+(l*160|0)+72>>2]|0)!=0){m=234;break}Mc(b,c[122352+(n*4960|0)+(l*160|0)+8>>2]|0)|0;Rc(n,l,c[122352+(n*4960|0)+(l*160|0)+8>>2]|0);c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)+24>>2]=4}else{m=234}}while(0);if((m|0)==234){m=0;if((c[122352+(n*4960|0)+(l*160|0)+72>>2]|0)==1){Jc(b,n,l);Mc(b,(c[122352+(n*4960|0)+(l*160|0)+8>>2]|0)+2&3)|0;Pc(n,l);if((c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)>>2]|0)==50){Qc(n,l,21);break b}if((c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)>>2]|0)==32){m=239}else{if((c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)>>2]|0)==30){m=239}}if((m|0)==239){m=0;c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)+72>>2]=1;c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)+24>>2]=4;c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)+80>>2]=c[29358]}}else{Jc(b,n,l);if((Mc(b,c[122352+(n*4960|0)+(l*160|0)+8>>2]|0)|0)==0){if((c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)>>2]|0)==32){m=244}else{if((c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)>>2]|0)==30){m=244}}do{if((m|0)==244){m=0;if((c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)+8>>2]|0)==(c[122352+(n*4960|0)+(l*160|0)+8>>2]|0)){break b}else{break}}}while(0);if((c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)+12>>2]|0)!=0){c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)+28>>2]=1;do{if((c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)>>2]|0)!=8){if((c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)>>2]|0)==70){break}if((Sc(n,l)|0)!=0){Gf(13,2)}else{Gf(13,4)}}}while(0)}}c[122352+(n*4960|0)+(l*160|0)+72>>2]=1}}}break};case 42:{Ic(n,l);if((c[122352+(n*4960|0)+(l*160|0)+4>>2]|0)<4){p=122352+(n*4960|0)+(l*160|0)+4|0;c[p>>2]=(c[p>>2]|0)+1;c[122352+(n*4960|0)+(l*160|0)+24>>2]=3}else{w=c[122352+(n*4960|0)+(l*160|0)+60>>2]|0;do{if((w|0)>0){if((c[16976]|0)==0){m=271;break}Pc(n,l);if((w|0)==10){c[122352+(n*4960|0)+(l*160|0)+60>>2]=Tc()|0}Qc(n,l,w);p=w;if((p|0)==15){Uc()}else if((p|0)==50){c[122352+(n*4960|0)+(l*160|0)+44>>2]=1;c[122352+(n*4960|0)+(l*160|0)+48>>2]=1;c[122352+(n*4960|0)+(l*160|0)+8>>2]=(ud()|0)&3}}else{m=271}}while(0);if((m|0)==271){m=0;Pc(n,l)}}break};case 68:{Nc(n,l);c[122352+(n*4960|0)+(l*160|0)+24>>2]=3;break};case 40:{Nc(n,l);c[122352+(n*4960|0)+(l*160|0)+24>>2]=8;break};case 41:{Ic(n,l);if((c[122352+(n*4960|0)+(l*160|0)+4>>2]|0)<4){p=122352+(n*4960|0)+(l*160|0)+4|0;c[p>>2]=(c[p>>2]|0)+1;c[122352+(n*4960|0)+(l*160|0)+24>>2]=3}else{Pc(n,l)}break};case 60:{if((c[122352+(n*4960|0)+(l*160|0)+4>>2]|0)==1){Jc(b,n,l);if((Mc(b,c[122352+(n*4960|0)+(l*160|0)+8>>2]|0)|0)!=0){c[122352+(n*4960|0)+(l*160|0)+4>>2]=0}else{if((c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)>>2]|0)==0){Oc(n,l,b)}else{Rc(n,l,c[122352+(n*4960|0)+(l*160|0)+8>>2]|0);c[122352+(n*4960|0)+(l*160|0)+4>>2]=0;c[122352+(n*4960|0)+(l*160|0)+84>>2]=1}}c[122352+(n*4960|0)+(l*160|0)+84>>2]=1;if((Sc(n,l)|0)!=0){Gf(4,2)}else{Gf(4,4)}c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)+24>>2]=4}break};case 54:{w=0;if((c[16985]|0)==1){break b}if((c[122352+(n*4960|0)+(l*160|0)+44>>2]|0)!=0){if((c[122352+(n*4960|0)+(l*160|0)+36>>2]|0)==0){k=(ud()|0)&3;c[122352+(n*4960|0)+(l*160|0)+8>>2]=k;c[122352+(n*4960|0)+(l*160|0)+4>>2]=k;c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)+36>>2]=20;Ic(c[b>>2]|0,c[b+4>>2]|0)}}while(1){if((w|0)!=0){break}if((Mc(b,c[122352+(n*4960|0)+(l*160|0)+8>>2]|0)|0)!=0){w=1}else{do{if((c[16974]|0)==(c[b>>2]|0)){if((c[16975]|0)!=(c[b+4>>2]|0)){m=304;break}c[16985]=1;c[16986]=(c[122352+(n*4960|0)+(l*160|0)+8>>2]|0)+2&3}else{m=304}}while(0);if((m|0)==304){m=0;if((c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)>>2]|0)!=0){w=1}}}}break};case 50:{Jc(b,n,l);p=0;Jc(d,c[b>>2]|0,c[b+4>>2]|0);Mc(d,c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)+8>>2]|0)|0;if((c[122352+((c[d>>2]|0)*4960|0)+((c[d+4>>2]|0)*160|0)+8>>2]|0)==(c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)+8>>2]|0)){switch(c[122352+((c[d>>2]|0)*4960|0)+((c[d+4>>2]|0)*160|0)>>2]|0){case 58:case 34:case 36:case 30:case 32:{p=1;break};default:{}}}if((p|0)==0){if((c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)+68>>2]|0)!=0){if((Kc(b,c[122352+(n*4960|0)+(l*160|0)+64>>2]|0)|0)!=0){Mc(b,c[122352+(n*4960|0)+(l*160|0)+64>>2]|0)|0;Oc(n,l,b);c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)+24>>2]=8;c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)+4>>2]=c[122352+(n*4960|0)+(l*160|0)+8>>2]|4}else{c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)+64>>2]=(c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)+64>>2]|0)+2&3;c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)+4>>2]=c[122352+(n*4960|0)+(l*160|0)+8>>2]|4;c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)+24>>2]=8}}if((c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)+44>>2]|0)!=0){if((c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)+36>>2]|0)==0){if((c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)+48>>2]|0)!=0){k=(ud()|0)&3;if((c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)+68>>2]|0)==1){p=(P((c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)+64>>2]|0)+(k-(c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)+8>>2]|0))|0)|0)%4|0;c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)+64>>2]=p}c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)+8>>2]=k}else{c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)+8>>2]=(c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)+8>>2]|0)+1&3}c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)+36>>2]=20;Ic(c[b>>2]|0,c[b+4>>2]|0)}}}if((c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)+32>>2]|0)==0){if((c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)+40>>2]|0)==2){if(((ud()|0)&7|0)==0){if((Sc(n,l)|0)!=0){Gf(6,2)}else{Gf(6,4)}Jc(d,c[b>>2]|0,c[b+4>>2]|0);Mc(d,c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)+8>>2]|0)|0;if((c[16974]|0)==(c[d>>2]|0)){if((c[16975]|0)==(c[d+4>>2]|0)){m=340;break a}}switch(c[122352+((c[d>>2]|0)*4960|0)+((c[d+4>>2]|0)*160|0)>>2]|0){case 58:case 40:case 54:case 2:case 6:case 60:case 15:case 4:case 69:case 68:case 7:case 9:case 50:{c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)+32>>2]=4;break};case 70:case 8:{c[122352+((c[d>>2]|0)*4960|0)+((c[d+4>>2]|0)*160|0)+28>>2]=4;break};default:{Pc(c[d>>2]|0,c[d+4>>2]|0);Qc(c[d>>2]|0,c[d+4>>2]|0,58);c[122352+((c[d>>2]|0)*4960|0)+((c[d+4>>2]|0)*160|0)+8>>2]=c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)+8>>2];c[122352+((c[d>>2]|0)*4960|0)+((c[d+4>>2]|0)*160|0)+64>>2]=c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)+8>>2];c[122352+((c[d>>2]|0)*4960|0)+((c[d+4>>2]|0)*160|0)+24>>2]=4;c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)+32>>2]=4}}}else{c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)+32>>2]=4}}else{if(((ud()|0)&7|0)==0){if((Sc(n,l)|0)!=0){Gf(6,2)}else{Gf(6,4)}Rc(c[b>>2]|0,c[b+4>>2]|0,c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)+8>>2]|0)}else{c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)+32>>2]=4}}}do{if((c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)>>2]|0)==50){if((c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)+68>>2]|0)!=1){m=359;break}c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)+4>>2]=(c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)+8>>2]|0)+4}else{m=359}}while(0);if((m|0)==359){m=0;c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)+4>>2]=c[122352+((c[b>>2]|0)*4960|0)+((c[b+4>>2]|0)*160|0)+8>>2]}break};default:{}}}while(0)}}n=n+1|0}l=l+1|0}if((m|0)==84){Hc();i=a;return}else if((m|0)==90){Hc();i=a;return}else if((m|0)==93){Hc();i=a;return}else if((m|0)==112){Hc();i=a;return}else if((m|0)==119){Hc();i=a;return}else if((m|0)==122){Hc();i=a;return}else if((m|0)==170){Hc();i=a;return}else if((m|0)==190){Hc();i=a;return}else if((m|0)==340){Hc();i=a;return}else if((m|0)==367){i=a;return}}function Gc(){var a=0,b=0,d=0,e=0;a=i;b=0;if((c[16987]|0)!=0){d=b;i=a;return d|0}if((c[16974]|0)<((c[26698]|0)-1|0)){if((c[122352+(((c[16974]|0)+1|0)*4960|0)+((c[16975]|0)*160|0)+20>>2]|0)==1){e=10}else{e=4}}else{e=4}do{if((e|0)==4){if((c[16974]|0)>0){if((c[122352+(((c[16974]|0)-1|0)*4960|0)+((c[16975]|0)*160|0)+20>>2]|0)==1){e=10;break}}if((c[16975]|0)<((c[26699]|0)-1|0)){if((c[122352+((c[16974]|0)*4960|0)+(((c[16975]|0)+1|0)*160|0)+20>>2]|0)==1){e=10;break}}if((c[16975]|0)<=0){break}if((c[122352+((c[16974]|0)*4960|0)+(((c[16975]|0)-1|0)*160|0)+20>>2]|0)==1){e=10}}}while(0);if((e|0)==10){b=1}d=b;i=a;return d|0}function Hc(){var a=0,b=0,d=0,e=0;a=i;if((c[16976]|0)==0){i=a;return}c[16976]=0;c[16985]=0;Gf(3,2);Qc(c[16974]|0,c[16975]|0,42);c[122352+((c[16974]|0)*4960|0)+((c[16975]|0)*160|0)+24>>2]=3;b=0;while(1){if((b|0)>=(c[26698]|0)){break}d=0;while(1){if((d|0)>=(c[26699]|0)){break}e=c[122352+(b*4960|0)+(d*160|0)>>2]|0;if(!((e|0)==0|(e|0)==2)){c[122352+(b*4960|0)+(d*160|0)+24>>2]=3;c[122352+(b*4960|0)+(d*160|0)+28>>2]=1}d=d+1|0}b=b+1|0}$c();c[18080]=24;i=a;return}function Ic(a,b){a=a|0;b=b|0;var d=0,e=0;d=i;e=a;a=b;do{if((e|0)>=0){if((a|0)<0){break}if((e|0)>=(c[26698]|0)){break}if((a|0)>=(c[26699]|0)){break}c[122352+(e*4960|0)+(a*160|0)+84>>2]=1}}while(0);i=d;return}function Jc(a,b,d){a=a|0;b=b|0;d=d|0;var e=0;e=a;c[e>>2]=b;c[e+4>>2]=d;i=i;return}function Kc(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0;d=i;e=a;a=i;i=i+8|0;c[a>>2]=c[e>>2];c[a+4>>2]=c[e+4>>2];do{if((Mc(a,b)|0)==0){if((c[122352+((c[a>>2]|0)*4960|0)+((c[a+4>>2]|0)*160|0)>>2]|0)!=0){break}if((c[16974]|0)==(c[a>>2]|0)){if((c[16975]|0)==(c[a+4>>2]|0)){break}}if((c[122352+((c[a>>2]|0)*4960|0)+((c[a+4>>2]|0)*160|0)+24>>2]|0)>0){break}f=1;g=f;i=d;return g|0}}while(0);f=0;g=f;i=d;return g|0}function Lc(a,b){a=a|0;b=b|0;var d=0,e=0;d=i;e=a;a=b;if((c[122352+(e*4960|0)+(a*160|0)+28>>2]|0)==0){i=d;return}if((c[122352+(e*4960|0)+(a*160|0)>>2]|0)==42){i=d;return}if((c[122352+(e*4960|0)+(a*160|0)>>2]|0)==8){Zc(e,a)}if((c[122352+(e*4960|0)+(a*160|0)>>2]|0)==70){_c(e,a)}Qc(e,a,42);c[122352+(e*4960|0)+(a*160|0)+24>>2]=3;i=d;return}function Mc(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;d=i;i=i+8|0;e=d|0;f=a;a=b;c[e>>2]=c[f>>2];c[e+4>>2]=c[f+4>>2];if((a|0)==0){b=f|0;c[b>>2]=(c[b>>2]|0)+1}else{if((a|0)==1){b=f+4|0;c[b>>2]=(c[b>>2]|0)+1}else{if((a|0)==2){a=f|0;c[a>>2]=(c[a>>2]|0)-1}else{a=f+4|0;c[a>>2]=(c[a>>2]|0)-1}}}do{if((c[f>>2]|0)>=0){if((c[f+4>>2]|0)<0){break}if((c[f>>2]|0)>=(c[26698]|0)){break}if((c[f+4>>2]|0)>=(c[26699]|0)){break}g=0;h=g;i=d;return h|0}}while(0);Jc(f,c[e>>2]|0,c[e+4>>2]|0);g=1;h=g;i=d;return h|0}function Nc(a,b){a=a|0;b=b|0;var d=0,e=0;d=i;e=a;a=b;if((e|0)>=(c[26698]|0)){i=d;return}if((a|0)>=(c[26699]|0)){i=d;return}c[122352+(e*4960|0)+(a*160|0)+4>>2]=((c[122352+(e*4960|0)+(a*160|0)+4>>2]|0)!=0^1)&1;c[122352+(e*4960|0)+(a*160|0)+84>>2]=1;i=d;return}function Oc(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0;e=i;f=d;d=i;i=i+8|0;c[d>>2]=c[f>>2];c[d+4>>2]=c[f+4>>2];f=a;a=b;do{if((f|0)==(c[d>>2]|0)){if((a|0)!=(c[d+4>>2]|0)){break}i=e;return}}while(0);b=c[d>>2]|0;g=c[d+4>>2]|0;c[122352+(b*4960|0)+(g*160|0)>>2]=c[122352+(f*4960|0)+(a*160|0)>>2];c[122352+(b*4960|0)+(g*160|0)+4>>2]=c[122352+(f*4960|0)+(a*160|0)+4>>2];c[122352+(b*4960|0)+(g*160|0)+8>>2]=c[122352+(f*4960|0)+(a*160|0)+8>>2];c[122352+(b*4960|0)+(g*160|0)+12>>2]=c[122352+(f*4960|0)+(a*160|0)+12>>2];c[122352+(b*4960|0)+(g*160|0)+16>>2]=c[122352+(f*4960|0)+(a*160|0)+16>>2];c[122352+(b*4960|0)+(g*160|0)+20>>2]=c[122352+(f*4960|0)+(a*160|0)+20>>2];c[122352+(b*4960|0)+(g*160|0)+24>>2]=c[122352+(f*4960|0)+(a*160|0)+24>>2];c[122352+(b*4960|0)+(g*160|0)+28>>2]=c[122352+(f*4960|0)+(a*160|0)+28>>2];c[122352+(b*4960|0)+(g*160|0)+32>>2]=c[122352+(f*4960|0)+(a*160|0)+32>>2];c[122352+(b*4960|0)+(g*160|0)+36>>2]=c[122352+(f*4960|0)+(a*160|0)+36>>2];c[122352+(b*4960|0)+(g*160|0)+40>>2]=c[122352+(f*4960|0)+(a*160|0)+40>>2];c[122352+(b*4960|0)+(g*160|0)+44>>2]=c[122352+(f*4960|0)+(a*160|0)+44>>2];c[122352+(b*4960|0)+(g*160|0)+48>>2]=c[122352+(f*4960|0)+(a*160|0)+48>>2];c[122352+(b*4960|0)+(g*160|0)+60>>2]=c[122352+(f*4960|0)+(a*160|0)+60>>2];c[122352+(b*4960|0)+(g*160|0)+64>>2]=c[122352+(f*4960|0)+(a*160|0)+64>>2];c[122352+(b*4960|0)+(g*160|0)+68>>2]=c[122352+(f*4960|0)+(a*160|0)+68>>2];c[122352+(b*4960|0)+(g*160|0)+76>>2]=c[122352+(f*4960|0)+(a*160|0)+76>>2];c[122352+(b*4960|0)+(g*160|0)+80>>2]=c[122352+(f*4960|0)+(a*160|0)+80>>2];c[122352+(b*4960|0)+(g*160|0)+84>>2]=1;Yc(c[122352+(b*4960|0)+(g*160|0)>>2]|0,b,g);Pc(f,a);i=e;return}function Pc(a,b){a=a|0;b=b|0;var d=0,e=0;d=i;e=a;a=b;Qc(e,a,0);c[122352+(e*4960|0)+(a*160|0)+60>>2]=0;i=d;return}function Qc(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0;e=i;f=a;a=b;b=d;c[122352+(f*4960|0)+(a*160|0)>>2]=b;c[122352+(f*4960|0)+(a*160|0)+4>>2]=0;c[122352+(f*4960|0)+(a*160|0)+8>>2]=0;c[122352+(f*4960|0)+(a*160|0)+12>>2]=0;c[122352+(f*4960|0)+(a*160|0)+16>>2]=0;c[122352+(f*4960|0)+(a*160|0)+20>>2]=0;c[122352+(f*4960|0)+(a*160|0)+24>>2]=0;c[122352+(f*4960|0)+(a*160|0)+28>>2]=0;c[122352+(f*4960|0)+(a*160|0)+32>>2]=0;c[122352+(f*4960|0)+(a*160|0)+36>>2]=0;c[122352+(f*4960|0)+(a*160|0)+40>>2]=0;c[122352+(f*4960|0)+(a*160|0)+44>>2]=0;c[122352+(f*4960|0)+(a*160|0)+48>>2]=0;c[122352+(f*4960|0)+(a*160|0)+52>>2]=0;c[122352+(f*4960|0)+(a*160|0)+56>>2]=0;c[122352+(f*4960|0)+(a*160|0)+64>>2]=0;c[122352+(f*4960|0)+(a*160|0)+68>>2]=0;c[122352+(f*4960|0)+(a*160|0)+72>>2]=0;c[122352+(f*4960|0)+(a*160|0)+76>>2]=0;c[122352+(f*4960|0)+(a*160|0)+80>>2]=c[29358];c[122352+(f*4960|0)+(a*160|0)+84>>2]=1;d=0;while(1){if((d|0)>=9){break}c[122352+(f*4960|0)+(a*160|0)+88+(d<<3)>>2]=0;c[122352+(f*4960|0)+(a*160|0)+88+(d<<3)+4>>2]=0;d=d+1|0}switch(b|0){case 4:case 60:case 6:case 7:case 9:case 30:case 32:case 40:case 50:case 0:{g=9;break};case 5:case 8:case 70:case 10:case 24:case 61:{g=8;break};case 1:{c[16974]=f;c[16975]=a;c[16977]=0;c[122352+(f*4960|0)+(a*160|0)>>2]=0;c[122352+(f*4960|0)+(a*160|0)+60>>2]=0;i=e;return};case 11:case 26:case 13:case 28:{c[122352+(f*4960|0)+(a*160|0)+20>>2]=1;g=8;break};case 69:case 68:{c[122352+(f*4960|0)+(a*160|0)+16>>2]=1;c[122352+(f*4960|0)+(a*160|0)+12>>2]=0;break};default:{}}if((g|0)==8){c[122352+(f*4960|0)+(a*160|0)+12>>2]=1;g=9}if((g|0)==9){c[122352+(f*4960|0)+(a*160|0)+16>>2]=1}Yc(c[122352+(f*4960|0)+(a*160|0)>>2]|0,f,a);i=e;return}function Rc(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,j=0;e=i;i=i+8|0;f=e|0;g=a;a=b;b=d;if((c[122352+(g*4960|0)+(a*160|0)+32>>2]|0)>0){i=e;return}Jc(f,g,a);if((Mc(f,b)|0)!=0){c[122352+((c[f>>2]|0)*4960|0)+((c[f+4>>2]|0)*160|0)+32>>2]=4;i=e;return}do{if((c[f>>2]|0)==(c[16974]|0)){if((c[f+4>>2]|0)!=(c[16975]|0)){break}Hc();i=e;return}}while(0);if((c[122352+((c[f>>2]|0)*4960|0)+((c[f+4>>2]|0)*160|0)+12>>2]|0)==1){do{if((c[122352+((c[f>>2]|0)*4960|0)+((c[f+4>>2]|0)*160|0)>>2]|0)!=8){if((c[122352+((c[f>>2]|0)*4960|0)+((c[f+4>>2]|0)*160|0)>>2]|0)==70){break}if((Sc(g,a)|0)!=0){Gf(13,2)}else{Gf(13,4)}}}while(0);c[122352+((c[f>>2]|0)*4960|0)+((c[f+4>>2]|0)*160|0)+28>>2]=1;c[122352+((c[f>>2]|0)*4960|0)+((c[f+4>>2]|0)*160|0)+32>>2]=4;if((c[122352+(g*4960|0)+(a*160|0)+40>>2]|0)==1){c[122352+(g*4960|0)+(a*160|0)+24>>2]=4}i=e;return}d=c[122352+((c[f>>2]|0)*4960|0)+((c[f+4>>2]|0)*160|0)>>2]|0;if((d|0)==0){do{if((b|0)==0){h=22}else{if((b|0)==2){h=22;break}Pc(c[f>>2]|0,c[f+4>>2]|0);Qc(c[f>>2]|0,c[f+4>>2]|0,32)}}while(0);if((h|0)==22){Pc(c[f>>2]|0,c[f+4>>2]|0);Qc(c[f>>2]|0,c[f+4>>2]|0,30)}c[122352+((c[f>>2]|0)*4960|0)+((c[f+4>>2]|0)*160|0)+8>>2]=b;c[122352+((c[f>>2]|0)*4960|0)+((c[f+4>>2]|0)*160|0)+40>>2]=c[122352+(g*4960|0)+(a*160|0)+40>>2];c[122352+(g*4960|0)+(a*160|0)+32>>2]=4;c[122352+((c[f>>2]|0)*4960|0)+((c[f+4>>2]|0)*160|0)+24>>2]=4;if((c[122352+((c[f>>2]|0)*4960|0)+((c[f+4>>2]|0)*160|0)+40>>2]|0)==1){if((c[122352+(g*4960|0)+(a*160|0)+4>>2]|0)==3){j=c[122352+(g*4960|0)+(a*160|0)+4>>2]|0}else{j=((ud()|0)%2|0)+2|0}c[122352+((c[f>>2]|0)*4960|0)+((c[f+4>>2]|0)*160|0)+4>>2]=j}i=e;return}else if((d|0)==32|(d|0)==30){i=e;return}else{i=e;return}}function Sc(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0;d=i;e=a;a=b;do{if((e-(c[7756]|0)|0)<=(c[7758]|0)){if((e-(c[7756]|0)|0)<0){break}if((a-(c[7757]|0)|0)>(c[7759]|0)){break}if((a-(c[7757]|0)|0)<0){break}f=1;g=f;i=d;return g|0}}while(0);f=0;g=f;i=d;return g|0}function Tc(){var a=0,b=0,d=0,e=0;a=i;i=i+48|0;b=a|0;Nf(b|0,432,44)|0;if((c[28571]|0)!=0){d=c[b+(((ud()|0)%10|0)<<2)>>2]|0;e=d;i=a;return e|0}else{d=c[b+(((ud()|0)%11|0)<<2)>>2]|0;e=d;i=a;return e|0}return 0}function Uc(){c[16984]=1;c[26715]=6;$c();return}function Vc(){var a=0,b=0,d=0;a=i;b=0;while(1){if((b|0)>=(c[26698]|0)){break}d=0;while(1){if((d|0)>=(c[26699]|0)){break}if((c[122352+(b*4960|0)+(d*160|0)>>2]|0)==10){c[122352+(b*4960|0)+(d*160|0)+60>>2]=Tc()|0}d=d+1|0}b=b+1|0}i=a;return}function Wc(a){a=a|0;var b=0,d=0,e=0,f=0;b=i;d=a;a=i;i=i+8|0;c[a>>2]=c[d>>2];c[a+4>>2]=c[d+4>>2];do{if((c[a>>2]|0)>=0){if((c[a>>2]|0)>=(c[26698]|0)){break}if((c[a+4>>2]|0)<0){break}if((c[a+4>>2]|0)>=(c[26699]|0)){break}e=0;f=e;i=b;return f|0}}while(0);e=1;f=e;i=b;return f|0}function Xc(a){a=a|0;var b=0,d=0;b=a;a=aa((c[7768]|0)/16|0,b)|0;d=a+(aa(b-1|0,c[7768]|0)|0)|0;i=i;return d|0}function Yc(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0;d=i;e=b;b=c;switch(a|0){case 0:{Jc(122352+(e*4960|0)+(b*160|0)+88|0,0,0);i=d;return};case 2:{Jc(122352+(e*4960|0)+(b*160|0)+88|0,Xc(3)|0,Xc(1)|0);Jc(122352+(e*4960|0)+(b*160|0)+96|0,Xc(4)|0,Xc(1)|0);Jc(122352+(e*4960|0)+(b*160|0)+104|0,Xc(6)|0,Xc(3)|0);Jc(122352+(e*4960|0)+(b*160|0)+112|0,Xc(8)|0,Xc(2)|0);Jc(122352+(e*4960|0)+(b*160|0)+120|0,Xc(10)|0,Xc(2)|0);Jc(122352+(e*4960|0)+(b*160|0)+128|0,Xc(9)|0,Xc(6)|0);Jc(122352+(e*4960|0)+(b*160|0)+136|0,Xc(10)|0,Xc(6)|0);Jc(122352+(e*4960|0)+(b*160|0)+144|0,Xc(11)|0,Xc(1)|0);Jc(122352+(e*4960|0)+(b*160|0)+152|0,Xc(11)|0,Xc(2)|0);i=d;return};case 4:{Jc(122352+(e*4960|0)+(b*160|0)+88|0,Xc(5)|0,Xc(1)|0);i=d;return};case 5:{Jc(122352+(e*4960|0)+(b*160|0)+88|0,Xc(6)|0,Xc(1)|0);i=d;return};case 6:{Jc(122352+(e*4960|0)+(b*160|0)+88|0,Xc(7)|0,Xc(1)|0);i=d;return};case 60:{Jc(122352+(e*4960|0)+(b*160|0)+88|0,Xc(7)|0,Xc(7)|0);Jc(122352+(e*4960|0)+(b*160|0)+96|0,Xc(9)|0,Xc(2)|0);i=d;return};case 7:{Jc(122352+(e*4960|0)+(b*160|0)+88|0,Xc(8)|0,Xc(1)|0);i=d;return};case 70:{Jc(122352+(e*4960|0)+(b*160|0)+88|0,Xc(8)|0,Xc(7)|0);i=d;return};case 8:{Jc(122352+(e*4960|0)+(b*160|0)+88|0,Xc(9)|0,Xc(1)|0);i=d;return};case 9:{Jc(122352+(e*4960|0)+(b*160|0)+88|0,Xc(10)|0,Xc(1)|0);i=d;return};case 10:{Jc(122352+(e*4960|0)+(b*160|0)+88|0,Xc(1)|0,Xc(2)|0);i=d;return};case 15:{Jc(122352+(e*4960|0)+(b*160|0)+88|0,Xc(6)|0,Xc(2)|0);Jc(122352+(e*4960|0)+(b*160|0)+96|0,Xc(7)|0,Xc(2)|0);i=d;return};case 11:{Jc(122352+(e*4960|0)+(b*160|0)+88|0,Xc(2)|0,Xc(2)|0);Jc(122352+(e*4960|0)+(b*160|0)+96|0,Xc(3)|0,Xc(2)|0);i=d;return};case 13:{Jc(122352+(e*4960|0)+(b*160|0)+88|0,Xc(4)|0,Xc(2)|0);Jc(122352+(e*4960|0)+(b*160|0)+96|0,Xc(5)|0,Xc(2)|0);i=d;return};case 21:{Jc(122352+(e*4960|0)+(b*160|0)+88|0,Xc(2)|0,Xc(3)|0);Jc(122352+(e*4960|0)+(b*160|0)+96|0,Xc(3)|0,Xc(3)|0);Jc(122352+(e*4960|0)+(b*160|0)+104|0,Xc(4)|0,Xc(3)|0);Jc(122352+(e*4960|0)+(b*160|0)+112|0,Xc(5)|0,Xc(3)|0);i=d;return};case 24:{Jc(122352+(e*4960|0)+(b*160|0)+88|0,Xc(6)|0,Xc(7)|0);i=d;return};case 26:{Jc(122352+(e*4960|0)+(b*160|0)+88|0,Xc(7)|0,Xc(3)|0);Jc(122352+(e*4960|0)+(b*160|0)+96|0,Xc(8)|0,Xc(3)|0);i=d;return};case 28:{Jc(122352+(e*4960|0)+(b*160|0)+88|0,Xc(9)|0,Xc(3)|0);Jc(122352+(e*4960|0)+(b*160|0)+96|0,Xc(10)|0,Xc(3)|0);i=d;return};case 30:{Jc(122352+(e*4960|0)+(b*160|0)+88|0,Xc(1)|0,Xc(4)|0);Jc(122352+(e*4960|0)+(b*160|0)+96|0,Xc(2)|0,Xc(4)|0);Jc(122352+(e*4960|0)+(b*160|0)+104|0,Xc(1)|0,Xc(3)|0);Jc(122352+(e*4960|0)+(b*160|0)+112|0,Xc(6)|0,Xc(8)|0);i=d;return};case 32:{Jc(122352+(e*4960|0)+(b*160|0)+88|0,Xc(3)|0,Xc(4)|0);Jc(122352+(e*4960|0)+(b*160|0)+96|0,Xc(4)|0,Xc(4)|0);Jc(122352+(e*4960|0)+(b*160|0)+104|0,Xc(6)|0,Xc(4)|0);Jc(122352+(e*4960|0)+(b*160|0)+112|0,Xc(7)|0,Xc(8)|0);i=d;return};case 40:{Jc(122352+(e*4960|0)+(b*160|0)+88|0,Xc(1)|0,Xc(5)|0);Jc(122352+(e*4960|0)+(b*160|0)+96|0,Xc(2)|0,Xc(5)|0);i=d;return};case 41:{Jc(122352+(e*4960|0)+(b*160|0)+88|0,Xc(11)|0,Xc(4)|0);Jc(122352+(e*4960|0)+(b*160|0)+96|0,Xc(11)|0,Xc(5)|0);Jc(122352+(e*4960|0)+(b*160|0)+104|0,Xc(11)|0,Xc(6)|0);Jc(122352+(e*4960|0)+(b*160|0)+112|0,Xc(11)|0,Xc(7)|0);Jc(122352+(e*4960|0)+(b*160|0)+120|0,Xc(11)|0,Xc(8)|0);i=d;return};case 42:{Jc(122352+(e*4960|0)+(b*160|0)+88|0,Xc(1)|0,Xc(8)|0);Jc(122352+(e*4960|0)+(b*160|0)+96|0,Xc(2)|0,Xc(8)|0);Jc(122352+(e*4960|0)+(b*160|0)+104|0,Xc(3)|0,Xc(8)|0);Jc(122352+(e*4960|0)+(b*160|0)+112|0,Xc(4)|0,Xc(8)|0);Jc(122352+(e*4960|0)+(b*160|0)+120|0,Xc(5)|0,Xc(8)|0);i=d;return};case 50:{Jc(122352+(e*4960|0)+(b*160|0)+88|0,Xc(6)|0,Xc(5)|0);Jc(122352+(e*4960|0)+(b*160|0)+96|0,Xc(7)|0,Xc(5)|0);Jc(122352+(e*4960|0)+(b*160|0)+104|0,Xc(8)|0,Xc(5)|0);Jc(122352+(e*4960|0)+(b*160|0)+112|0,Xc(9)|0,Xc(5)|0);Jc(122352+(e*4960|0)+(b*160|0)+120|0,Xc(9)|0,Xc(8)|0);Jc(122352+(e*4960|0)+(b*160|0)+128|0,Xc(10)|0,Xc(7)|0);Jc(122352+(e*4960|0)+(b*160|0)+136|0,Xc(10)|0,Xc(8)|0);Jc(122352+(e*4960|0)+(b*160|0)+144|0,Xc(9)|0,Xc(7)|0);i=d;return};case 54:{Jc(122352+(e*4960|0)+(b*160|0)+88|0,Xc(1)|0,Xc(1)|0);Jc(122352+(e*4960|0)+(b*160|0)+96|0,Xc(1)|0,Xc(7)|0);Jc(122352+(e*4960|0)+(b*160|0)+104|0,Xc(2)|0,Xc(1)|0);Jc(122352+(e*4960|0)+(b*160|0)+112|0,Xc(2)|0,Xc(7)|0);i=d;return};case 58:{Jc(122352+(e*4960|0)+(b*160|0)+88|0,Xc(3)|0,Xc(5)|0);Jc(122352+(e*4960|0)+(b*160|0)+96|0,Xc(4)|0,Xc(5)|0);Jc(122352+(e*4960|0)+(b*160|0)+104|0,Xc(5)|0,Xc(5)|0);Jc(122352+(e*4960|0)+(b*160|0)+112|0,Xc(4)|0,Xc(5)|0);Jc(122352+(e*4960|0)+(b*160|0)+120|0,Xc(3)|0,Xc(5)|0);i=d;return};case 61:{Jc(122352+(e*4960|0)+(b*160|0)+88|0,Xc(10)|0,Xc(4)|0);Jc(122352+(e*4960|0)+(b*160|0)+96|0,Xc(10)|0,Xc(5)|0);i=d;return};case 68:{Jc(122352+(e*4960|0)+(b*160|0)+88|0,Xc(3)|0,Xc(7)|0);Jc(122352+(e*4960|0)+(b*160|0)+96|0,Xc(4)|0,Xc(7)|0);i=d;return};case 69:{Jc(122352+(e*4960|0)+(b*160|0)+88|0,Xc(5)|0,Xc(7)|0);i=d;return};default:{i=d;return}}}function Zc(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0;d=i;i=i+16|0;e=d|0;f=d+8|0;g=a;a=b;if((c[16976]|0)!=0){if((Sc(g,a)|0)!=0){Gf(3,2)}else{Gf(3,4)}}if((c[16976]|0)==0){Qc(g,a,42);c[122352+(g*4960|0)+(a*160|0)+24>>2]=3;i=d;return}b=0;while(1){if((b|0)>=9){break}if(((b|0)%3|0|0)>1){h=-1}else{h=(b|0)%3|0}if((((b|0)/3|0|0)%3|0|0)>1){j=-1}else{j=((b|0)/3|0|0)%3|0}c[e>>2]=g+h;c[e+4>>2]=a+j;do{if((c[16974]|0)==(c[e>>2]|0)){if((c[16975]|0)!=(c[e+4>>2]|0)){break}Hc()}}while(0);do{if((Wc(e)|0)==0){if((c[122352+((c[e>>2]|0)*4960|0)+((c[e+4>>2]|0)*160|0)+28>>2]|0)!=0){break}if((c[122352+((c[e>>2]|0)*4960|0)+((c[e+4>>2]|0)*160|0)+16>>2]|0)==0){break}if((c[122352+((c[e>>2]|0)*4960|0)+((c[e+4>>2]|0)*160|0)>>2]|0)==50){c[122352+((c[e>>2]|0)*4960|0)+((c[e+4>>2]|0)*160|0)+28>>2]=1;c[122352+((c[e>>2]|0)*4960|0)+((c[e+4>>2]|0)*160|0)+24>>2]=5;do{if((c[122352+((c[e>>2]|0)*4960|0)+((c[e+4>>2]|0)*160|0)+40>>2]|0)!=0){if((c[28572]|0)==0){break}Jc(f,c[e>>2]|0,c[e+4>>2]|0);while(1){do{if((Mc(f,c[122352+((c[e>>2]|0)*4960|0)+((c[e+4>>2]|0)*160|0)+8>>2]|0)|0)!=0){k=0}else{if((c[122352+((c[f>>2]|0)*4960|0)+((c[f+4>>2]|0)*160|0)>>2]|0)!=32){if((c[122352+((c[f>>2]|0)*4960|0)+((c[f+4>>2]|0)*160|0)>>2]|0)!=30){k=0;break}}if((c[122352+((c[f>>2]|0)*4960|0)+((c[f+4>>2]|0)*160|0)+40>>2]|0)==0){k=0;break}k=(c[122352+((c[f>>2]|0)*4960|0)+((c[f+4>>2]|0)*160|0)+8>>2]|0)==(c[122352+((c[e>>2]|0)*4960|0)+((c[e+4>>2]|0)*160|0)+8>>2]|0)}}while(0);if(!k){break}c[122352+((c[f>>2]|0)*4960|0)+((c[f+4>>2]|0)*160|0)+28>>2]=1;c[122352+((c[f>>2]|0)*4960|0)+((c[f+4>>2]|0)*160|0)+24>>2]=5}}}while(0)}else{if((c[122352+((c[e>>2]|0)*4960|0)+((c[e+4>>2]|0)*160|0)>>2]|0)==32){l=37}else{if((c[122352+((c[e>>2]|0)*4960|0)+((c[e+4>>2]|0)*160|0)>>2]|0)==30){l=37}else{l=38}}if((l|0)==37){l=0;if((c[122352+((c[e>>2]|0)*4960|0)+((c[e+4>>2]|0)*160|0)+40>>2]|0)==0){l=38}}if((l|0)==38){l=0;c[122352+((c[e>>2]|0)*4960|0)+((c[e+4>>2]|0)*160|0)+28>>2]=1;c[122352+((c[e>>2]|0)*4960|0)+((c[e+4>>2]|0)*160|0)+24>>2]=5;c[122352+((c[e>>2]|0)*4960|0)+((c[e+4>>2]|0)*160|0)+60>>2]=0}}}}while(0);b=b+1|0}i=d;return}function _c(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0;d=i;i=i+16|0;e=d|0;f=d+8|0;g=a;a=b;b=-1;if((c[16976]|0)!=0){if((Sc(g,a)|0)!=0){Gf(3,2)}else{Gf(3,4)}}if((c[16976]|0)==0){Qc(g,a,42);c[122352+(g*4960|0)+(a*160|0)+24>>2]=3;i=d;return}h=0;while(1){if((h|0)>=9){break}if(((h|0)%3|0|0)>1){j=-1}else{j=(h|0)%3|0}k=j;if((((h|0)/3|0|0)%3|0|0)>1){l=-1}else{l=((h|0)/3|0|0)%3|0}m=l;c[e>>2]=g+k;c[e+4>>2]=a+m;if((k|0)==0){n=18}else{if((m|0)==0){n=18}}if((n|0)==18){n=0;if((k|0)!=0){o=(-k|0)+1|0}else{o=(-m|0)+2|0}b=o}do{if((c[16974]|0)==(c[e>>2]|0)){if((c[16975]|0)!=(c[e+4>>2]|0)){break}Hc()}}while(0);do{if((k|0)!=0){if((m|0)==0){n=50;break}do{if((Wc(e)|0)==0){if((c[122352+((c[e>>2]|0)*4960|0)+((c[e+4>>2]|0)*160|0)+28>>2]|0)!=0){break}if((c[122352+((c[e>>2]|0)*4960|0)+((c[e+4>>2]|0)*160|0)+16>>2]|0)==0){break}if((c[122352+((c[e>>2]|0)*4960|0)+((c[e+4>>2]|0)*160|0)>>2]|0)==50){c[122352+((c[e>>2]|0)*4960|0)+((c[e+4>>2]|0)*160|0)+28>>2]=1;c[122352+((c[e>>2]|0)*4960|0)+((c[e+4>>2]|0)*160|0)+24>>2]=5;do{if((c[122352+((c[e>>2]|0)*4960|0)+((c[e+4>>2]|0)*160|0)+40>>2]|0)!=0){if((c[28572]|0)==0){break}Jc(f,c[e>>2]|0,c[e+4>>2]|0);while(1){do{if((Mc(f,c[122352+((c[e>>2]|0)*4960|0)+((c[e+4>>2]|0)*160|0)+8>>2]|0)|0)!=0){p=0}else{if((c[122352+((c[f>>2]|0)*4960|0)+((c[f+4>>2]|0)*160|0)>>2]|0)!=32){if((c[122352+((c[f>>2]|0)*4960|0)+((c[f+4>>2]|0)*160|0)>>2]|0)!=30){p=0;break}}if((c[122352+((c[f>>2]|0)*4960|0)+((c[f+4>>2]|0)*160|0)+40>>2]|0)==0){p=0;break}p=(c[122352+((c[f>>2]|0)*4960|0)+((c[f+4>>2]|0)*160|0)+8>>2]|0)==(c[122352+((c[e>>2]|0)*4960|0)+((c[e+4>>2]|0)*160|0)+8>>2]|0)}}while(0);if(!p){break}c[122352+((c[f>>2]|0)*4960|0)+((c[f+4>>2]|0)*160|0)+28>>2]=1;c[122352+((c[f>>2]|0)*4960|0)+((c[f+4>>2]|0)*160|0)+24>>2]=5}}}while(0)}else{if((c[122352+((c[e>>2]|0)*4960|0)+((c[e+4>>2]|0)*160|0)>>2]|0)==32){n=45}else{if((c[122352+((c[e>>2]|0)*4960|0)+((c[e+4>>2]|0)*160|0)>>2]|0)==30){n=45}else{n=46}}if((n|0)==45){n=0;if((c[122352+((c[e>>2]|0)*4960|0)+((c[e+4>>2]|0)*160|0)+40>>2]|0)==0){n=46}}if((n|0)==46){n=0;c[122352+((c[e>>2]|0)*4960|0)+((c[e+4>>2]|0)*160|0)+28>>2]=1;c[122352+((c[e>>2]|0)*4960|0)+((c[e+4>>2]|0)*160|0)+24>>2]=5;c[122352+((c[e>>2]|0)*4960|0)+((c[e+4>>2]|0)*160|0)+60>>2]=0}}}}while(0)}else{n=50}}while(0);if((n|0)==50){n=0;Rc(g,a,b);c[122352+((c[e>>2]|0)*4960|0)+((c[e+4>>2]|0)*160|0)+24>>2]=5;if((h|0)<7){c[122352+(g*4960|0)+(a*160|0)+32>>2]=0}}h=h+1|0}i=d;return}function $c(){var a=0,b=0,d=0;a=i;b=c[7757]|0;while(1){if((b|0)>=((c[7757]|0)+(c[7759]|0)|0)){break}d=c[7756]|0;while(1){if((d|0)>=((c[7756]|0)+(c[7758]|0)|0)){break}Ic(d,b);d=d+1|0}b=b+1|0}i=a;return}function ad(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,j=0,k=0;e=i;f=a;a=b;b=d;d=0;a:while(1){if((d|0)>=(c[26698]|0)){g=15;break}h=0;while(1){if((h|0)>=(c[26699]|0)){break}if((c[122352+(d*4960|0)+(h*160|0)>>2]|0)==40){if((a|0)==(c[122352+(d*4960|0)+(h*160|0)+52>>2]|0)){if((b|0)==(c[122352+(d*4960|0)+(h*160|0)+56>>2]|0)){g=8;break a}}}h=h+1|0}d=d+1|0}if((g|0)==8){Jc(f,d,h);j=1;k=j;i=e;return k|0}else if((g|0)==15){j=0;k=j;i=e;return k|0}return 0}function bd(){c[16974]=0;c[16975]=0;c[16976]=1;c[16977]=0;c[16978]=0;c[16979]=0;c[16980]=0;c[16981]=0;c[16982]=4;c[16983]=0;c[16984]=0;c[16985]=0;c[16986]=0;c[16987]=0;return}function cd(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0;d=i;i=i+8|0;e=d|0;f=a;a=b;do{if((c[16985]|0)==0){if((c[16982]|0)>0){break}b=(c[16974]|0)+f|0;g=(c[16975]|0)+a|0;do{if((f|0)==1){if((a|0)!=0){h=7;break}c[16978]=0}else{h=7}}while(0);if((h|0)==7){do{if((f|0)==0){if((a|0)!=1){h=10;break}c[16978]=2}else{h=10}}while(0);if((h|0)==10){do{if((f|0)==-1){if((a|0)!=0){h=13;break}c[16978]=4}else{h=13}}while(0);if((h|0)==13){do{if((f|0)==0){if(!((a|0)==-1)){break}c[16978]=6}}while(0)}}}do{if((b|0)>=0){if((b|0)>=(c[26698]|0)){break}if((g|0)<0){break}if((g|0)>=(c[26699]|0)){break}Ic(c[16974]|0,c[16975]|0);a:do{switch(c[122352+(b*4960|0)+(g*160|0)>>2]|0){case 69:{Pc(b,g);break};case 68:{Pc(b,g);Hc();break};case 0:case 1:{Ic(b,g);break};case 4:{if((c[16979]|0)>0){c[16979]=(c[16979]|0)-1}if((c[16979]|0)==0){Gf(15,2);Uc()}else{Gf(2,2)}c[16878]=c[16878]|2;Pc(b,g);break};case 5:{Gf(1,2);c[16981]=(c[16981]|0)+9;c[16878]=c[16878]|8;Pc(b,g);break};case 7:{Gf(7,2);c[16980]=(c[16980]|0)+1;c[16878]=c[16878]|4;Pc(b,g);break};case 9:{if((c[16980]|0)>0){c[16980]=(c[16980]|0)-1;c[16878]=c[16878]|4;Pc(b,g);c[16982]=4;Gf(5,2)}i=d;return};case 40:{if((c[122352+(b*4960|0)+(g*160|0)+52>>2]|0)==0){break a}Gf(10,2);j=0;k=c[122352+(b*4960|0)+(g*160|0)+56>>2]|0;b:while(1){if((j|0)!=0){h=58;break}k=k+1|0;do{if((ad(e,c[122352+(b*4960|0)+(g*160|0)+52>>2]|0,k)|0)==0){if((k|0)==(c[122352+(b*4960|0)+(g*160|0)+56>>2]|0)){break}if((k|0)>15){k=-1}continue b}}while(0);l=(c[16978]|0)/2|0;m=0;while(1){if((m|0)>=4){break}if((Kc(e,l)|0)!=0){h=51;break}l=l^((m+1|0)%2|0)+2;m=m+1|0}if((h|0)==51){h=0;Qc(c[16974]|0,c[16975]|0,41);Mc(e,l)|0;b=c[e>>2]|0;g=c[e+4>>2]|0;c[16978]=l<<1;Qc(b,g,41);c[16982]=15;c[7764]=c[16982];c[16987]=1;j=1}if((k|0)==(c[122352+(b*4960|0)+(g*160|0)+56>>2]|0)){if((j|0)==0){break}}}if((h|0)==58){break a}Qc(c[16974]|0,c[16975]|0,41);c[16982]=15;c[7764]=c[16982];c[16987]=1;j=1;i=d;return};case 15:{if((c[16984]|0)==0){h=71;break a}Gf(12,2);if((c[82540+((c[16614]|0)*292|0)>>2]|0)>=(c[82532+((c[16614]|0)*292|0)>>2]|0)){c[28568]=2;i=d;return}k=82540+((c[16614]|0)*292|0)|0;c[k>>2]=(c[k>>2]|0)+1;if((c[82540+((c[16614]|0)*292|0)>>2]|0)>(c[82536+((c[16614]|0)*292|0)>>2]|0)){c[82536+((c[16614]|0)*292|0)>>2]=c[82540+((c[16614]|0)*292|0)>>2];if((c[18082]|0)==1){ye(77960,0)|0}}if((be()|0)!=0){c[28568]=0;yf();c[28158]=c[28158]|15}else{c[28578]=c[28578]|7;$e(3,16)|0}i=d;return};case 6:case 60:case 8:case 70:case 10:case 50:{h=71;break};default:{i=d;return}}}while(0);c:do{if((h|0)==71){do{if((c[122352+(b*4960|0)+(g*160|0)>>2]|0)==50){if((c[122352+(b*4960|0)+(g*160|0)+68>>2]|0)!=0){break}i=d;return}}while(0);j=(c[16975]|0)+(a<<1)|0;k=(c[16974]|0)+(f<<1)|0;do{if((k|0)>=0){if((k|0)>=(c[26698]|0)){break}if((j|0)<0){break}if((j|0)>=(c[26699]|0)){break}c[e>>2]=k;c[e+4>>2]=j;if((c[122352+(k*4960|0)+(j*160|0)>>2]|0)!=0){c[16982]=4;i=d;return}Gf(4,2);if((c[122352+(b*4960|0)+(g*160|0)>>2]|0)==60){c[122352+(b*4960|0)+(g*160|0)+4>>2]=1;c[122352+(b*4960|0)+(g*160|0)+8>>2]=(c[16978]|0)/2|0}Oc(b,g,e);if((c[122352+((c[e>>2]|0)*4960|0)+((c[e+4>>2]|0)*160|0)>>2]|0)!=50){c[122352+((c[e>>2]|0)*4960|0)+((c[e+4>>2]|0)*160|0)+24>>2]=4}break c}}while(0);i=d;return}}while(0);c[16974]=b;c[16975]=g;if((c[16982]|0)!=0){i=d;return}c[16982]=4;if((c[16985]|0)==0){Gf(11,2)}i=d;return}}while(0);i=d;return}}while(0);i=d;return}function dd(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;d=i;e=a;a=b;if((c[16983]|0)>0){i=d;return}do{if((c[16985]|0)==0){if((c[16987]|0)!=0){break}b=(c[16974]|0)+e|0;f=(c[16975]|0)+a|0;do{if((e|0)==1){if((a|0)!=0){g=9;break}c[16978]=0}else{g=9}}while(0);if((g|0)==9){do{if((e|0)==0){if((a|0)!=1){g=12;break}c[16978]=2}else{g=12}}while(0);if((g|0)==12){do{if((e|0)==-1){if((a|0)!=0){g=15;break}c[16978]=4}else{g=15}}while(0);if((g|0)==15){do{if((e|0)==0){if(!((a|0)==-1)){break}c[16978]=6}}while(0)}}}Ic(c[16974]|0,c[16975]|0);if((c[16981]|0)==0){i=d;return}do{if((b|0)>=0){if((b|0)>=(c[26698]|0)){break}if((f|0)<0){break}if((f|0)>=(c[26699]|0)){break}h=c[122352+(b*4960|0)+(f*160|0)+12>>2]|0;if((h|0)==1){c[122352+(b*4960|0)+(f*160|0)+28>>2]=1;Gf(8,4);if((c[122352+(b*4960|0)+(f*160|0)>>2]|0)!=8){Gf(13,2)}c[16983]=4;c[16981]=(c[16981]|0)-1;c[16878]=c[16878]|8;i=d;return}else if((h|0)==0){Gf(8,2);c[16983]=4;c[16981]=(c[16981]|0)-1;c[16878]=c[16878]|8}if((c[122352+(b*4960|0)+(f*160|0)>>2]|0)!=0){i=d;return}do{if((c[16978]|0)==0){g=36}else{if((c[16978]|0)==4){g=36;break}Qc(b,f,32)}}while(0);if((g|0)==36){Qc(b,f,30)}c[122352+(b*4960|0)+(f*160|0)+24>>2]=4;c[122352+(b*4960|0)+(f*160|0)+8>>2]=(c[16978]|0)/2|0;i=d;return}}while(0);c[16981]=(c[16981]|0)-1;c[16983]=4;i=d;return}}while(0);i=d;return}function ed(){var a=0,b=0,c=0;a=i;b=0;while(1){if((b|0)>=31){break}c=0;while(1){if((c|0)>=32){break}Pc(c,b);c=c+1|0}b=b+1|0}i=a;return}function fd(b,e,f,g,h){b=b|0;e=e|0;f=f|0;g=g|0;h=h|0;var j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0;j=i;i=i+56|0;k=j|0;l=j+48|0;m=b;b=e;e=f;f=g;g=h;h=0;n=0;o=0;if((c[28520]|0)==0){c[28520]=1;p=0;while(1){if((p|0)>=20){break}c[114088+((p<<1)+1<<2)>>2]=0;c[114088+(p<<1<<2)>>2]=0;p=p+1|0}}c[m>>2]=-1;while(1){if((pb(115368)|0)==0){break}c[g>>2]=-1;c[f>>2]=-1;c[e>>2]=-1;switch(c[28842]|0){case 769:case 768:{c[e>>2]=1;c[f>>2]=c[28846];c[g>>2]=d[115376]|0;break};case 1540:case 1539:{c[e>>2]=2;c[f>>2]=d[115373]|0;c[g>>2]=d[115374]|0;break};case 1026:{c[26976]=0;q=13;break};case 1025:{q=13;break};case 1024:{c[(c[18008]|0)+40>>2]=c[28845];c[(c[18008]|0)+44>>2]=c[28846];c[26984]=c[28845];c[26982]=c[28846];break};case 256:{n=1;break};case 1536:{if((P(c[28844]|0)|0)>=(((c[28150]|0)*32767|0|0)/100|0|0)){o=0;if((c[28844]|0)>=(((c[28150]|0)*32767|0|0)/100|0|0)){o=1}if((c[114088+(((d[115373]|0)<<1)+o<<2)>>2]|0)==0){r=((d[115373]|0)<<1)+o|0;a[k+5|0]=r+(ib(c[28154]|0)|0);c[k>>2]=1539;a[k+6|0]=1;Cb(k|0)|0;c[114088+(((d[115373]|0)<<1)+o<<2)>>2]=1}if((c[114088+(((d[115373]|0)<<1)+(1-o)<<2)>>2]|0)==1){r=((d[115373]|0)<<1)+(1-o)|0;a[k+5|0]=r+(ib(c[28154]|0)|0);c[k>>2]=1540;a[k+6|0]=0;Cb(k|0)|0;c[114088+(((d[115373]|0)<<1)+(1-o)<<2)>>2]=0}}else{p=0;while(1){if((p|0)>=2){break}if((c[114088+(((d[115373]|0)<<1)+p<<2)>>2]|0)==1){r=((d[115373]|0)<<1)+p|0;a[k+5|0]=r+(ib(c[28154]|0)|0);c[k>>2]=1540;a[k+6|0]=0;Cb(k|0)|0;c[114088+(((d[115373]|0)<<1)+p<<2)>>2]=0}p=p+1|0}}break};default:{}}if((q|0)==13){q=0;c[e>>2]=3;c[f>>2]=d[115376]|0;c[g>>2]=d[115377]|0}h=0;if((c[e>>2]|0)!=-1){p=0;while(1){if((p|0)>=37){break}do{if((c[31088+(p*28|0)>>2]|0)==(c[e>>2]|0)){if((c[31092+(p*28|0)>>2]|0)!=(c[f>>2]|0)){break}c[31100+(p*28|0)>>2]=c[g>>2];if((c[g>>2]|0)==0){c[31104+(p*28|0)>>2]=0;c[l>>2]=p|128;Ue(l)}h=1}}while(0);p=p+1|0}if((h|0)!=0){q=45;break}if((b|0)==0){q=45;break}}}h=0;p=0;a:while(1){if((p|0)>=37){break}do{if((c[31100+(p*28|0)>>2]|0)==1){if(!((c[31096+(p*28|0)>>2]|0)!=-1)){break}if((c[31100+((c[31096+(p*28|0)>>2]|0)*28|0)>>2]|0)==1){q=53;break a}}}while(0);p=p+1|0}if((q|0)==53){h=1;c[m>>2]=p}if((h|0)==0){p=0;while(1){if((p|0)>=37){break}if((c[31100+(p*28|0)>>2]|0)==1){if((c[31096+(p*28|0)>>2]|0)==-1){q=61;break}}p=p+1|0}if((q|0)==61){h=1;c[m>>2]=p}}if((h|0)==0){s=m;Ue(s);t=n;i=j;return t|0}if((c[31104+((c[m>>2]|0)*28|0)>>2]|0)!=0){if((c[31104+((c[m>>2]|0)*28|0)>>2]|0)!=(c[31108+((c[m>>2]|0)*28|0)>>2]|0)){if((c[31104+((c[m>>2]|0)*28|0)>>2]|0)>(c[31108+((c[m>>2]|0)*28|0)>>2]|0)){if((c[31112+((c[m>>2]|0)*28|0)>>2]|0)!=0){if((((c[31104+((c[m>>2]|0)*28|0)>>2]|0)-(c[31108+((c[m>>2]|0)*28|0)>>2]|0)|0)%(c[31112+((c[m>>2]|0)*28|0)>>2]|0)|0|0)!=0){h=0}}}else{h=0}}}p=31104+((c[m>>2]|0)*28|0)|0;c[p>>2]=(c[p>>2]|0)+1;if((h|0)==0){c[m>>2]=-1}s=m;Ue(s);t=n;i=j;return t|0}function gd(a){a=a|0;var b=0,d=0;b=i;d=a;a=0;while(1){if((a|0)>=37){break}c[d+(a*28|0)>>2]=1;c[d+(a*28|0)+4>>2]=-1;c[d+(a*28|0)+8>>2]=-1;c[d+(a*28|0)+12>>2]=0;c[d+(a*28|0)+16>>2]=0;c[d+(a*28|0)+20>>2]=~~+$(+(c[27244]|0)/+(1e3/(c[28574]|0)|0|0));c[d+(a*28|0)+24>>2]=~~+$(+(c[27242]|0)/+(1e3/(c[28574]|0)|0|0));a=a+1|0}c[d+4>>2]=1106;c[d+28>>2]=-1;c[d+60>>2]=1103;c[d+84>>2]=-1;c[d+116>>2]=1105;c[d+140>>2]=-1;c[d+172>>2]=1104;c[d+196>>2]=-1;c[d+228>>2]=114;c[d+256>>2]=1106;c[d+260>>2]=30;c[d+284>>2]=1105;c[d+288>>2]=30;c[d+312>>2]=1104;c[d+316>>2]=30;c[d+340>>2]=1103;c[d+344>>2]=30;c[d+368>>2]=13;c[d+396>>2]=27;c[d+424>>2]=1082;c[d+452>>2]=1085;c[d+480>>2]=13;c[d+484>>2]=29;c[d+508>>2]=1086;c[d+536>>2]=1087;c[d+564>>2]=1088;c[d+592>>2]=1089;c[d+620>>2]=1098;c[d+648>>2]=1101;c[d+676>>2]=1099;c[d+704>>2]=1102;c[d+732>>2]=1090;c[d+760>>2]=61;c[d+788>>2]=45;c[d+816>>2]=1250;c[d+844>>2]=1253;c[d+868>>2]=-1;c[d+896>>2]=-1;c[d+924>>2]=3;c[d+928>>2]=4;c[d+952>>2]=3;c[d+956>>2]=5;c[d+980>>2]=3;c[d+984>>2]=1;c[d+1008>>2]=-1;i=b;return}function hd(a,b){a=a|0;b=b|0;var d=0,e=0,f=0;d=i;if((Ka(a|0,b|0)|0)!=0){b=c[n>>2]|0;a=ub()|0;Nb(b|0,14024,(b=i,i=i+8|0,c[b>>2]=a,b)|0)|0;i=b;e=1;f=e;i=d;return f|0}else{e=0;f=e;i=d;return f|0}return 0}function id(a,b,d){a=a|0;b=b|0;d=d|0;var e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,o=0,p=0,q=0,r=0,s=0;e=i;f=a;a=b;b=d;d=0;g=wa()|0;if((g|0)>0){if((c[28154]|0)!=0){if((b|0)!=0){h=c[n>>2]|0;j=Ha(c[28154]|0)|0;k=Ia(Ha(c[28154]|0)|0)|0;Nb(h|0,13896,(l=i,i=i+16|0,c[l>>2]=j,c[l+8>>2]=k,l)|0)|0;i=l}Pa(c[28154]|0)}bc(1)|0;if((f|0)==-1){m=0;while(1){if((m|0)>=(g|0)){break}k=pa(m|0)|0;c[28154]=k;if((k|0)!=0){o=10;break}if((b|0)!=0){k=c[n>>2]|0;j=Ia(m|0)|0;Nb(k|0,13488,(l=i,i=i+16|0,c[l>>2]=m,c[l+8>>2]=j,l)|0)|0;i=l}m=m+1|0}if((o|0)==10){if((b|0)!=0){j=c[n>>2]|0;k=Ia(m|0)|0;Nb(j|0,13728,(l=i,i=i+16|0,c[l>>2]=m,c[l+8>>2]=k,l)|0)|0;i=l}f=m;d=1}if((d|0)==0){if((b|0)!=0){Nb(c[n>>2]|0,13288,(l=i,i=i+8|0,c[l>>2]=g,l)|0)|0;i=l}f=-1}}else{if((Lf(a,13088)|0)!=0){m=0;while(1){if((m|0)>=(g|0)){break}k=pa(m|0)|0;c[28154]=k;if((k|0)!=0){if((f|0)==(m|0)){if((Lf(a,Ia(m|0)|0)|0)==0){o=37;break}}}m=m+1|0}if((o|0)==37){if((b|0)!=0){k=c[n>>2]|0;j=Ia(m|0)|0;Nb(k|0,13728,(l=i,i=i+16|0,c[l>>2]=m,c[l+8>>2]=j,l)|0)|0;i=l}f=m;d=1}if((d|0)==0){m=0;while(1){if((m|0)>=(g|0)){break}j=pa(m|0)|0;c[28154]=j;if((j|0)!=0){if((Lf(a,Ia(m|0)|0)|0)==0){o=48;break}}m=m+1|0}if((o|0)==48){if((b|0)!=0){o=c[n>>2]|0;g=Ia(m|0)|0;Nb(o|0,13728,(l=i,i=i+16|0,c[l>>2]=m,c[l+8>>2]=g,l)|0)|0;i=l}f=m;d=1}if((d|0)==0){if((b|0)!=0){Nb(c[n>>2]|0,12760,(l=i,i=i+16|0,c[l>>2]=f,c[l+8>>2]=a,l)|0)|0;i=l}f=-1}}}else{d=pa(f|0)|0;c[28154]=d;if((d|0)!=0){if((b|0)!=0){d=c[n>>2]|0;m=Ia(f|0)|0;Nb(d|0,13728,(l=i,i=i+16|0,c[l>>2]=f,c[l+8>>2]=m,l)|0)|0;i=l}}else{if((b|0)!=0){Nb(c[n>>2]|0,12944,(l=i,i=i+8|0,c[l>>2]=f,l)|0)|0;i=l}f=-1}}}}else{if((b|0)!=0){Nb(c[n>>2]|0,12448,(l=i,i=i+1|0,i=i+7&-8,c[l>>2]=0,l)|0)|0;i=l}f=-1}if((c[28154]|0)==0){p=f;q=a;r=jd(p,q)|0;s=f;i=e;return s|0}do{}while((pb(115368)|0)!=0);p=f;q=a;r=jd(p,q)|0;s=f;i=e;return s|0}function jd(b,c){b=b|0;c=c|0;var d=0,e=0,f=0,g=0;d=i;e=b;b=c;if((Ia(e|0)|0)!=0){Pf(b|0,Ia(e|0)|0,256)|0;a[b+255|0]=0;f=0;g=f;i=d;return g|0}else{Qf(b|0,13088)|0;f=1;g=f;i=d;return g|0}return 0}function kd(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;d=i;e=a;a=b;b=0;while(1){if((b|0)>=10){break}Qf(e+(b<<8)|0,283248)|0;b=b+1|0}f=wa()|0;if((f|0)>10){f=10}if((f|0)==0){if((a|0)!=0){Nb(c[n>>2]|0,11968,(g=i,i=i+1|0,i=i+7&-8,c[g>>2]=0,g)|0)|0;i=g}h=f;i=d;return h|0}bc(1)|0;b=0;while(1){if((b|0)>=(f|0)){break}jd(b,e+(b<<8)|0)|0;if((a|0)!=0){Nb(c[n>>2]|0,12120,(g=i,i=i+16|0,c[g>>2]=b,c[g+8>>2]=e+(b<<8),g)|0)|0;i=g}b=b+1|0}h=f;i=d;return h|0}function ld(a,b,d,e){a=a|0;b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,j=0;f=i;g=a;a=b;b=d;d=e;if((g|0)==3){switch(a|0){case 1:{Qf(d|0,32560)|0;break};case 2:{Qf(d|0,32456)|0;break};case 3:{Qf(d|0,32352)|0;break};case 4:{Qf(d|0,32144)|0;break};case 5:{Qf(d|0,32248)|0;break};default:{Ya(d|0,11784,(h=i,i=i+8|0,c[h>>2]=a,h)|0)|0;i=h}}i=f;return}if((g|0)==1){switch(a|0){case 0:{Qf(d|0,11584)|0;break};case 8:{Qf(d|0,43120)|0;break};case 9:{Qf(d|0,39272)|0;break};case 1180:{Qf(d|0,42808)|0;break};case 13:{Qf(d|0,39792)|0;break};case 1096:{Qf(d|0,40832)|0;break};case 27:{Qf(d|0,42288)|0;break};case 32:{Qf(d|0,39480)|0;break};case 33:{Qf(d|0,11440)|0;break};case 34:{Qf(d|0,11296)|0;break};case 35:{Qf(d|0,11136)|0;break};case 36:{Qf(d|0,10960)|0;break};case 38:{Qf(d|0,10744)|0;break};case 39:{Qf(d|0,10640)|0;break};case 40:{Qf(d|0,10536)|0;break};case 41:{Qf(d|0,10448)|0;break};case 42:{Qf(d|0,10376)|0;break};case 43:{Qf(d|0,10264)|0;break};case 44:{Qf(d|0,10144)|0;break};case 45:{Qf(d|0,10064)|0;break};case 46:{Qf(d|0,9960)|0;break};case 47:{Qf(d|0,9864)|0;break};case 48:{Qf(d|0,9672)|0;break};case 49:{Qf(d|0,9592)|0;break};case 50:{Qf(d|0,9488)|0;break};case 51:{Qf(d|0,9432)|0;break};case 52:{Qf(d|0,9344)|0;break};case 53:{Qf(d|0,9232)|0;break};case 54:{Qf(d|0,9168)|0;break};case 55:{Qf(d|0,9056)|0;break};case 56:{Qf(d|0,8976)|0;break};case 57:{Qf(d|0,8928)|0;break};case 58:{Qf(d|0,8776)|0;break};case 59:{Qf(d|0,8704)|0;break};case 60:{Qf(d|0,8536)|0;break};case 61:{Qf(d|0,8480)|0;break};case 62:{Qf(d|0,8408)|0;break};case 63:{Qf(d|0,8328)|0;break};case 64:{Qf(d|0,8272)|0;break};case 91:{Qf(d|0,8224)|0;break};case 92:{Qf(d|0,8160)|0;break};case 93:{Qf(d|0,8104)|0;break};case 94:{Qf(d|0,8024)|0;break};case 95:{Qf(d|0,7928)|0;break};case 96:{Qf(d|0,7872)|0;break};case 97:{Qf(d|0,7824)|0;break};case 98:{Qf(d|0,7744)|0;break};case 99:{Qf(d|0,6936)|0;break};case 100:{Qf(d|0,6840)|0;break};case 101:{Qf(d|0,6784)|0;break};case 102:{Qf(d|0,6712)|0;break};case 103:{Qf(d|0,6656)|0;break};case 104:{Qf(d|0,6560)|0;break};case 105:{Qf(d|0,6440)|0;break};case 106:{Qf(d|0,28496)|0;break};case 107:{Qf(d|0,28432)|0;break};case 108:{Qf(d|0,28336)|0;break};case 109:{Qf(d|0,28256)|0;break};case 110:{Qf(d|0,28176)|0;break};case 111:{Qf(d|0,28120)|0;break};case 112:{Qf(d|0,28032)|0;break};case 113:{Qf(d|0,27976)|0;break};case 114:{Qf(d|0,27896)|0;break};case 115:{Qf(d|0,27792)|0;break};case 116:{Qf(d|0,27728)|0;break};case 117:{Qf(d|0,27680)|0;break};case 118:{Qf(d|0,27576)|0;break};case 119:{Qf(d|0,27488)|0;break};case 120:{Qf(d|0,27424)|0;break};case 121:{Qf(d|0,27368)|0;break};case 122:{Qf(d|0,27296)|0;break};case 127:{Qf(d|0,42600)|0;break};case 1122:{Ya(d|0,27248,(h=i,i=i+8|0,c[h>>2]=41768,h)|0)|0;i=h;break};case 1113:{Ya(d|0,27120,(h=i,i=i+8|0,c[h>>2]=41768,h)|0)|0;i=h;break};case 1114:{Ya(d|0,27024,(h=i,i=i+8|0,c[h>>2]=41768,h)|0)|0;i=h;break};case 1115:{Ya(d|0,26952,(h=i,i=i+8|0,c[h>>2]=41768,h)|0)|0;i=h;break};case 1116:{Ya(d|0,26896,(h=i,i=i+8|0,c[h>>2]=41768,h)|0)|0;i=h;break};case 1117:{Ya(d|0,26808,(h=i,i=i+8|0,c[h>>2]=41768,h)|0)|0;i=h;break};case 1118:{Ya(d|0,26728,(h=i,i=i+8|0,c[h>>2]=41768,h)|0)|0;i=h;break};case 1119:{Ya(d|0,26592,(h=i,i=i+8|0,c[h>>2]=41768,h)|0)|0;i=h;break};case 1120:{Ya(d|0,26536,(h=i,i=i+8|0,c[h>>2]=41768,h)|0)|0;i=h;break};case 1121:{Ya(d|0,26448,(h=i,i=i+8|0,c[h>>2]=41768,h)|0)|0;i=h;break};case 1123:{Ya(d|0,26376,(h=i,i=i+8|0,c[h>>2]=41768,h)|0)|0;i=h;break};case 1108:{Ya(d|0,26272,(h=i,i=i+8|0,c[h>>2]=41768,h)|0)|0;i=h;break};case 1109:{Ya(d|0,26088,(h=i,i=i+8|0,c[h>>2]=41768,h)|0)|0;i=h;break};case 1110:{Ya(d|0,26048,(h=i,i=i+8|0,c[h>>2]=41768,h)|0)|0;i=h;break};case 1111:{Ya(d|0,25992,(h=i,i=i+8|0,c[h>>2]=41768,h)|0)|0;i=h;break};case 1112:{Ya(d|0,25928,(h=i,i=i+8|0,c[h>>2]=41768,h)|0)|0;i=h;break};case 1127:{Ya(d|0,25864,(h=i,i=i+8|0,c[h>>2]=41768,h)|0)|0;i=h;break};case 1106:{Qf(d|0,39064)|0;break};case 1105:{Qf(d|0,42496)|0;break};case 1103:{Qf(d|0,39688)|0;break};case 1104:{Qf(d|0,41144)|0;break};case 1097:{Qf(d|0,41872)|0;break};case 1098:{Qf(d|0,41976)|0;break};case 1101:{Qf(d|0,42392)|0;break};case 1099:{Qf(d|0,40624)|0;break};case 1102:{Qf(d|0,40728)|0;break};case 1082:{Qf(d|0,25824)|0;break};case 1083:{Qf(d|0,25784)|0;break};case 1084:{Qf(d|0,25672)|0;break};case 1085:{Qf(d|0,25624)|0;break};case 1086:{Qf(d|0,25576)|0;break};case 1087:{Qf(d|0,25440)|0;break};case 1088:{Qf(d|0,25376)|0;break};case 1089:{Qf(d|0,25320)|0;break};case 1090:{Qf(d|0,25216)|0;break};case 1091:{Qf(d|0,25152)|0;break};case 1092:{Qf(d|0,25072)|0;break};case 1093:{Qf(d|0,25024)|0;break};case 1128:{Qf(d|0,24952)|0;break};case 1129:{Qf(d|0,24904)|0;break};case 1130:{Qf(d|0,24808)|0;break};case 1107:{Qf(d|0,40936)|0;break};case 1081:{Qf(d|0,42912)|0;break};case 1095:{Qf(d|0,39584)|0;break};case 1253:{Qf(d|0,4e4)|0;break};case 1249:{Qf(d|0,41352)|0;break};case 1252:{Qf(d|0,40208)|0;break};case 1248:{Qf(d|0,41560)|0;break};case 1254:{Qf(d|0,40312)|0;break};case 1250:{Qf(d|0,41664)|0;break};case 1255:{Qf(d|0,40104)|0;break};case 1281:{Qf(d|0,43224)|0;break};case 1125:{Qf(d|0,42704)|0;break};case 1141:{Qf(d|0,42080)|0;break};case 1094:{Qf(d|0,40416)|0;break};case 1178:{Qf(d|0,39376)|0;break};case 1144:{Qf(d|0,43016)|0;break};case 1142:{Qf(d|0,41040)|0;break};case 1126:{Qf(d|0,40520)|0;break};case 1146:{Qf(d|0,39168)|0;break};default:{Ya(d|0,11784,(h=i,i=i+8|0,c[h>>2]=a,h)|0)|0;i=h}}}else{if((g|0)==2){if((Lf(b,24656)|0)==0){switch(a|0){case 0:{Qf(d|0,7824)|0;break};case 1:{Qf(d|0,7744)|0;break};case 2:{Qf(d|0,6936)|0;break};case 3:{Qf(d|0,27424)|0;break};case 4:{Qf(d|0,27368)|0;break};case 5:{Qf(d|0,27296)|0;break};case 6:{Qf(d|0,24536)|0;break};case 7:{Qf(d|0,24472)|0;break};case 8:{Qf(d|0,24392)|0;break};case 10:{Qf(d|0,24320)|0;break};case 11:{Qf(d|0,24208)|0;break};case 12:{Qf(d|0,24128)|0;break};case 13:{Qf(d|0,24048)|0;break};default:{Ya(d|0,11784,(h=i,i=i+8|0,c[h>>2]=a,h)|0)|0;i=h}}}else{if((Lf(b,23976)|0)==0){switch(a|0){case 0:{Qf(d|0,9592)|0;break};case 1:{Qf(d|0,9488)|0;break};case 2:{Qf(d|0,9432)|0;break};case 3:{Qf(d|0,9344)|0;break};case 4:{Qf(d|0,9232)|0;break};case 5:{Qf(d|0,9168)|0;break};case 6:{Qf(d|0,9056)|0;break};case 7:{Qf(d|0,8976)|0;break};case 8:{Qf(d|0,8928)|0;break};case 9:{Qf(d|0,23880)|0;break};case 10:{Qf(d|0,23776)|0;break};case 11:{Qf(d|0,23696)|0;break};case 12:{Qf(d|0,24320)|0;break};case 13:{Qf(d|0,24208)|0;break};case 14:{Qf(d|0,24128)|0;break};case 15:{Qf(d|0,24048)|0;break};default:{Ya(d|0,11784,(h=i,i=i+8|0,c[h>>2]=a,h)|0)|0;i=h}}}else{do{if((Lf(b,23632)|0)==0){j=186}else{if((Lf(b,23552)|0)==0){j=186;break}Ya(d|0,11784,(h=i,i=i+8|0,c[h>>2]=a,h)|0)|0;i=h}}while(0);if((j|0)==186){switch(a|0){case 0:{Qf(d|0,24128)|0;break};case 1:{Qf(d|0,23472)|0;break};case 2:{Qf(d|0,24320)|0;break};case 3:{Qf(d|0,23328)|0;break};case 4:{Qf(d|0,24048)|0;break};case 5:{Qf(d|0,23264)|0;break};case 6:{Qf(d|0,24208)|0;break};case 7:{Qf(d|0,23184)|0;break};case 8:{Qf(d|0,23120)|0;break};case 9:{Qf(d|0,23016)|0;break};case 10:{Qf(d|0,24536)|0;break};case 11:{Qf(d|0,24472)|0;break};case 12:{Qf(d|0,7824)|0;break};case 13:{Qf(d|0,7744)|0;break};case 14:{Qf(d|0,27424)|0;break};case 15:{Qf(d|0,27368)|0;break};case 16:{Qf(d|0,22912)|0;break};case 17:{Qf(d|0,22808)|0;break};case 18:{Qf(d|0,22744)|0;break};default:{Ya(d|0,11784,(h=i,i=i+8|0,c[h>>2]=a,h)|0)|0;i=h}}}}}}else{Ya(d|0,11784,(h=i,i=i+8|0,c[h>>2]=g,h)|0)|0;i=h}}i=f;return}function md(){return 0}function nd(){return}function od(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0,j=0,k=0;b=i;d=a;a=Zb(La(d|0,22672)|0,1)|0;e=a;if((a|0)==0){Nb(c[n>>2]|0,27224,(f=i,i=i+8|0,c[f>>2]=d,f)|0)|0;i=f;g=0;h=g;i=b;return h|0}if((Ja(e|0,131072,Jb(c[e+4>>2]|0,-1|0,0,-1|0)|0)|0)<0){d=c[n>>2]|0;a=ub()|0;Nb(d|0,19e3,(f=i,i=i+8|0,c[f>>2]=a,f)|0)|0;i=f;g=0;h=g;i=b;return h|0}a=Rb(e|0)|0;hc(e|0);if((a|0)==0){e=c[n>>2]|0;d=ub()|0;Nb(e|0,15512,(f=i,i=i+8|0,c[f>>2]=d,f)|0)|0;i=f;g=0;h=g;i=b;return h|0}mb(a|0)|0;f=0;while(1){if((f|0)>=223){break}c[117448+(f<<3)>>2]=(aa(f,c[a+8>>2]|0)|0)/223|0;c[117452+(f<<3)>>2]=((aa(f+1|0,c[a+8>>2]|0)|0)/223|0)-1;d=0;e=c[117448+(f<<3)>>2]|0;while(1){if((e|0)>(c[117452+(f<<3)>>2]|0)){break}j=pd(a,e,0)|0;if((j|0)==(Jb(c[a+4>>2]|0,8,24,40)|0)){if((d|0)==0){c[117448+(f<<3)+(d<<2)>>2]=e;if((c[7768]|0)==32){e=e+1|0}}else{if((d|0)==1){if((c[7768]|0)==32){e=e+1|0}c[117448+(f<<3)+(d<<2)>>2]=e}}j=d+1|0;d=j;if((j|0)>1){k=22;break}}e=e+1|0}if((k|0)==22){k=0}f=f+1|0}cb(a|0);g=a;h=g;i=b;return h|0}function pd(a,b,f){a=a|0;b=b|0;f=f|0;var g=0,h=0,j=0,k=0,l=0;g=i;h=a;a=d[(c[h+4>>2]|0)+9|0]|0;j=(c[h+20>>2]|0)+(aa(f,c[h+16>>2]|0)|0)+(aa(b,a)|0)|0;if((a|0)==1){k=d[j]|0;l=k;i=g;return l|0}if((a|0)==2){k=e[j>>1]|0}else{if((a|0)==3){k=d[j|0]|0|(d[j+1|0]|0)<<8|(d[j+2|0]|0)<<16}else{if((a|0)==4){k=c[j>>2]|0}else{k=0}}}l=k;i=g;return l|0}function qd(a){a=a|0;var b=0,c=0;b=i;c=a;if((c|0)!=0){hc(c|0)}i=b;return}function rd(b,e,f,g){b=b|0;e=e|0;f=f|0;g=g|0;var h=0,j=0,k=0,l=0,m=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0;h=i;i=i+64|0;j=f;f=i;i=i+4|0;i=i+7&-8;c[f>>2]=c[j>>2];j=g;g=i;i=i+4|0;i=i+7&-8;c[g>>2]=c[j>>2];j=h|0;k=h+16|0;l=h+32|0;m=h+48|0;o=b;b=(-(c[7768]|0)|0)/16|0;p=0;q=e;e=(c[o+12>>2]|0)-((c[7768]|0)/16|0)|0;r=0;s=0;while(1){if((d[q+r|0]|0|0)==0){break}sd(l,o,q+r|0);t=j;u=l;c[t>>2]=c[u>>2];c[t+4>>2]=c[u+4>>2];c[t+8>>2]=c[u+8>>2];c[t+12>>2]=c[u+12>>2];s=s+(c[j+8>>2]|0)|0;s=s+b|0;do{if((d[q+r|0]|0|0)>=194){if((d[q+r|0]|0|0)>223){v=6;break}w=2}else{v=6}}while(0);if((v|0)==6){v=0;do{if((d[q+r|0]|0|0)>=224){if((d[q+r|0]|0|0)>239){v=9;break}w=3}else{v=9}}while(0);if((v|0)==9){v=0;do{if((d[q+r|0]|0|0)>=240){if((d[q+r|0]|0|0)>244){v=12;break}w=4}else{v=12}}while(0);if((v|0)==12){v=0;w=1}}}while(1){u=w;w=u-1|0;if((u|0)==0){break}r=r+1|0;if((d[q+r|0]|0|0)==0){v=18;break}}if((v|0)==18){v=0;s=s-b|0}}l=Vb(c[c[16874]>>2]|0,s|0,e|0,d[(c[(c[16874]|0)+4>>2]|0)+8|0]|0|0,c[(c[(c[16874]|0)+4>>2]|0)+12>>2]|0,c[(c[(c[16874]|0)+4>>2]|0)+16>>2]|0,c[(c[(c[16874]|0)+4>>2]|0)+20>>2]|0,c[(c[(c[16874]|0)+4>>2]|0)+24>>2]|0)|0;p=l;if((l|0)==0){l=c[n>>2]|0;e=ub()|0;Nb(l|0,13808,(l=i,i=i+8|0,c[l>>2]=e,l)|0)|0;i=l;x=p;i=h;return x|0}Ta(p|0,0,Jb(c[p+4>>2]|0,a[g|0]|0,a[g+1|0]|0,a[g+2|0]|0)|0)|0;r=0;c[k+4>>2]=0;c[k>>2]=0;while(1){if((d[q+r|0]|0|0)==0){break}sd(m,o,q+r|0);g=j;l=m;c[g>>2]=c[l>>2];c[g+4>>2]=c[l+4>>2];c[g+8>>2]=c[l+8>>2];c[g+12>>2]=c[l+12>>2];c[k+8>>2]=c[j+8>>2];c[k+12>>2]=c[j+12>>2];Ub(o|0,j|0,p|0,k|0)|0;l=k|0;c[l>>2]=(c[l>>2]|0)+((c[k+8>>2]|0)+b);do{if((d[q+r|0]|0|0)>=194){if((d[q+r|0]|0|0)>223){v=27;break}w=2}else{v=27}}while(0);if((v|0)==27){v=0;do{if((d[q+r|0]|0|0)>=224){if((d[q+r|0]|0|0)>239){v=30;break}w=3}else{v=30}}while(0);if((v|0)==30){v=0;do{if((d[q+r|0]|0|0)>=240){if((d[q+r|0]|0|0)>244){v=33;break}w=4}else{v=33}}while(0);if((v|0)==33){v=0;w=1}}}while(1){l=w;w=l-1|0;if((l|0)==0){break}r=r+1|0;if((d[q+r|0]|0|0)==0){v=39;break}}if((v|0)==39){v=0}}mb(p|0)|0;v=0;while(1){if((v|0)>=(c[p+12>>2]|0)){break}r=0;while(1){if((r|0)>=(c[p+8>>2]|0)){break}q=pd(p,r,v)|0;if((q|0)==(Jb(c[p+4>>2]|0,-8|0,-24|0,-40|0)|0)){td(p,r,v,Jb(c[p+4>>2]|0,a[f|0]|0,a[f+1|0]|0,a[f+2|0]|0)|0)}r=r+1|0}v=v+1|0}cb(p|0);x=p;i=h;return x|0}



function lf(){var b=0,d=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0;b=i;i=i+256|0;d=b|0;e=0;f=Ga(12304)|0;g=f;if((f|0)==0){Nb(c[n>>2]|0,10664,(h=i,i=i+8|0,c[h>>2]=12304,h)|0)|0;i=h;j=1;k=j;i=b;return k|0}while(1){f=Na(g|0)|0;l=f;if((f|0)==0){break}do{if((Lf(l+11|0,9616)|0)!=0){if((Lf(l+11|0,8712)|0)==0){break}if((c[16198]|0)<10){Qf(d|0,7936)|0;Rf(d|0,l+11|0)|0;Rf(d|0,6448)|0;Rf(d|0,27800)|0;f=Ua(d|0,27032)|0;m=f;if((f|0)!=0){if((Lf(l+11|0,26096)|0)!=0){Pf(59552+((c[16198]|0)*524|0)|0,l+11|0,100)|0;a[59651+((c[16198]|0)*524|0)|0]=0;c[16198]=(c[16198]|0)+1}else{e=1}ma(m|0)|0}}}}while(0)}$b(g|0)|0;if((e|0)!=0){j=0;k=j;i=b;return k|0}else{Nb(c[n>>2]|0,25448,(h=i,i=i+8|0,c[h>>2]=24632,h)|0)|0;i=h;j=1;k=j;i=b;return k|0}return 0}function mf(){var b=0,d=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0;b=i;i=i+1288|0;d=b|0;e=b+256|0;f=b+1280|0;g=0;h=0;j=0;k=0;l=0;m=0;o=0;p=0;q=0;while(1){if((q|0)>=(c[16198]|0)){break}g=0;j=0;k=0;l=0;m=0;o=0;p=0;Qf(59652+(q*524|0)|0,23768)|0;Qf(59712+(q*524|0)|0,23768)|0;Qf(59772+(q*524|0)|0,23768)|0;Qf(59832+(q*524|0)|0,23768)|0;Qf(59892+(q*524|0)|0,23768)|0;Qf(59952+(q*524|0)|0,23768)|0;c[60048+(q*524|0)>>2]=7377008;Qf(d|0,7936)|0;Rf(d|0,59552+(q*524|0)|0)|0;Rf(d|0,6448)|0;Rf(d|0,27800)|0;r=Ua(d|0,27032)|0;s=r;if((r|0)==0){Nb(c[n>>2]|0,22880,(t=i,i=i+8|0,c[t>>2]=d,t)|0)|0;i=t}else{while(1){if((Ra(e|0,1024,s|0)|0)==0){break}g=g+1|0;r=(Of(e|0)|0)-1|0;while(1){if((r|0)<0){break}if((a[e+r|0]|0)==13){u=11}else{if((a[e+r|0]|0)==10){u=11}}if((u|0)==11){u=0;a[e+r|0]=0}r=r-1|0}do{if((Mf(e|0,21920,6)|0)!=0){if((Mf(e|0,20832,8)|0)==0){u=21;break}if((Mf(e|0,19984,7)|0)==0){u=21;break}if((Mf(e|0,19488,17)|0)==0){u=21;break}if((Mf(e|0,18840,11)|0)==0){u=21;break}if((Mf(e|0,18344,11)|0)==0){if((m|0)!=0){u=21;break}}if((j|0)==1){if((Of(e|0)|0)!=0){Pf(59652+(q*524|0)|0,e|0,60)|0;a[59711+(q*524|0)|0]=0}j=2}else{if((k|0)==1){if((Of(e|0)|0)!=0){Pf(59712+(q*524|0)|0,e|0,60)|0;a[59771+(q*524|0)|0]=0}k=2}else{if((l|0)==1){if((Of(e|0)|0)!=0){Pf(59772+(q*524|0)+(h*60|0)|0,e|0,60)|0;a[59772+(q*524|0)+(h*60|0)+59|0]=0}r=h+1|0;h=r;if((r|0)>=3){l=2}}else{if((p|0)==1){if((Of(e|0)|0)!=0){Pf(59952+(q*524|0)|0,e|0,60)|0;a[60011+(q*524|0)|0]=0}}else{if((o|0)==1){r=Hb(e|0,17200,(t=i,i=i+8|0,c[t>>2]=f,t)|0)|0;i=t;if((r|0)==1){c[60048+(q*524|0)>>2]=c[f>>2];o=2}else{o=3}}}}}}}else{u=21}}while(0);if((u|0)==21){u=0;if((j|0)==1){j=3}else{if((k|0)==1){k=3}else{if((l|0)==1){l=3}else{if((m|0)==1){m=2}else{if((o|0)==1){o=3}else{if((p|0)==1){p=3}}}}}}if((Mf(e|0,21920,6)|0)!=0){if((Mf(e|0,20832,8)|0)!=0){if((Mf(e|0,19984,7)|0)!=0){if((Mf(e|0,18840,10)|0)!=0){if((Mf(e|0,19488,17)|0)!=0){if((Mf(e|0,18344,11)|0)!=0){if((Mf(e|0,17712,21)|0)==0){u=63;break}}else{if((o|0)==0){o=1}}}else{if((m|0)==0){m=1}}}else{if((p|0)==0){p=1}}}else{if((l|0)==0){l=1;h=0}}}else{if((k|0)==0){k=1}}}else{if((j|0)==0){j=1}}}}if((u|0)==63){u=0}Nb(c[n>>2]|0,16680,(t=i,i=i+8|0,c[t>>2]=59652+(q*524|0),t)|0)|0;i=t;ma(s|0)|0}q=q+1|0}i=b;return}function nf(){var b=0,d=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,o=0,p=0,q=0;b=i;i=i+2656|0;d=b|0;e=b+256|0;f=b+1280|0;g=b+1288|0;h=0;j=0;k=0;while(1){if((k|0)>=18){break}c[g+(k*76|0)+60>>2]=0;c[g+(k*76|0)+68>>2]=10;c[g+(k*76|0)+72>>2]=0;k=k+1|0}l=-1;m=l+1|0;l=m;Qf(g+(m*76|0)|0,19488)|0;c[g+(l*76|0)+68>>2]=1;m=l+1|0;l=m;Qf(g+(m*76|0)|0,16352)|0;c[g+(l*76|0)+64>>2]=60012+((c[16612]|0)*524|0);m=l+1|0;l=m;Qf(g+(m*76|0)|0,16200)|0;c[g+(l*76|0)+64>>2]=60016+((c[16612]|0)*524|0);m=l+1|0;l=m;Qf(g+(m*76|0)|0,16016)|0;c[g+(l*76|0)+64>>2]=60020+((c[16612]|0)*524|0);m=l+1|0;l=m;Qf(g+(m*76|0)|0,15760)|0;c[g+(l*76|0)+64>>2]=60024+((c[16612]|0)*524|0);m=l+1|0;l=m;Qf(g+(m*76|0)|0,15616)|0;c[g+(l*76|0)+64>>2]=60028+((c[16612]|0)*524|0);m=l+1|0;l=m;Qf(g+(m*76|0)|0,15472)|0;c[g+(l*76|0)+64>>2]=60032+((c[16612]|0)*524|0);m=l+1|0;l=m;Qf(g+(m*76|0)|0,15320)|0;c[g+(l*76|0)+64>>2]=60036+((c[16612]|0)*524|0);m=l+1|0;l=m;Qf(g+(m*76|0)|0,15152)|0;c[g+(l*76|0)+64>>2]=60040+((c[16612]|0)*524|0);m=l+1|0;l=m;Qf(g+(m*76|0)|0,14984)|0;c[g+(l*76|0)+64>>2]=60044+((c[16612]|0)*524|0);m=l+1|0;l=m;Qf(g+(m*76|0)|0,18344)|0;c[g+(l*76|0)+64>>2]=60048+((c[16612]|0)*524|0);m=l+1|0;l=m;Qf(g+(m*76|0)|0,14800)|0;c[g+(l*76|0)+64>>2]=60052+((c[16612]|0)*524|0);m=l+1|0;l=m;Qf(g+(m*76|0)|0,14600)|0;c[g+(l*76|0)+64>>2]=60056+((c[16612]|0)*524|0);m=l+1|0;l=m;Qf(g+(m*76|0)|0,14400)|0;c[g+(l*76|0)+64>>2]=60060+((c[16612]|0)*524|0);m=l+1|0;l=m;Qf(g+(m*76|0)|0,14160)|0;c[g+(l*76|0)+64>>2]=60064+((c[16612]|0)*524|0);m=l+1|0;l=m;Qf(g+(m*76|0)|0,14056)|0;c[g+(l*76|0)+64>>2]=60068+((c[16612]|0)*524|0);m=l+1|0;l=m;Qf(g+(m*76|0)|0,13920)|0;c[g+(l*76|0)+64>>2]=60072+((c[16612]|0)*524|0);m=l+1|0;l=m;Qf(g+(m*76|0)|0,17712)|0;c[g+(l*76|0)+68>>2]=7;c[60012+((c[16612]|0)*524|0)>>2]=0;c[60016+((c[16612]|0)*524|0)>>2]=16744448;c[60020+((c[16612]|0)*524|0)>>2]=16777215;c[60024+((c[16612]|0)*524|0)>>2]=16777215;c[60028+((c[16612]|0)*524|0)>>2]=6527694;c[60032+((c[16612]|0)*524|0)>>2]=16711680;c[60036+((c[16612]|0)*524|0)>>2]=9474192;c[60040+((c[16612]|0)*524|0)>>2]=16711680;c[60044+((c[16612]|0)*524|0)>>2]=16744448;c[60048+((c[16612]|0)*524|0)>>2]=7377008;c[60052+((c[16612]|0)*524|0)>>2]=0;c[60056+((c[16612]|0)*524|0)>>2]=16777215;c[60060+((c[16612]|0)*524|0)>>2]=16776960;c[60064+((c[16612]|0)*524|0)>>2]=240;c[60068+((c[16612]|0)*524|0)>>2]=7274607;c[60072+((c[16612]|0)*524|0)>>2]=2105376;Qf(d|0,7936)|0;Rf(d|0,59552+((c[16612]|0)*524|0)|0)|0;Rf(d|0,6448)|0;Rf(d|0,27800)|0;l=Ua(d|0,27032)|0;m=l;if((l|0)==0){Nb(c[n>>2]|0,22880,(o=i,i=i+8|0,c[o>>2]=d,o)|0)|0;i=o;i=b;return}while(1){if((Ra(e|0,1024,m|0)|0)!=0){p=(j|0)!=0^1}else{p=0}if(!p){break}h=h+1|0;d=(Of(e|0)|0)-1|0;while(1){if((d|0)<0){break}if((a[e+d|0]|0)==13){q=15}else{if((a[e+d|0]|0)==10){q=15}}if((q|0)==15){q=0;a[e+d|0]=0}d=d-1|0}d=0;l=0;a:while(1){if((l|0)>=18){break}if((Mf(e|0,g+(l*76|0)|0,Of(g+(l*76|0)|0)|0)|0)==0){if((c[g+(l*76|0)+68>>2]&2|0)==0){q=25;break}do{if((c[g+(l*76|0)+68>>2]&2|0)!=0){if((c[g+(l*76|0)+72>>2]|0)<0){break}if((c[g+((c[g+(l*76|0)+72>>2]|0)*76|0)+60>>2]|0)==2){q=25;break a}}}while(0)}l=l+1|0}if((q|0)==25){q=0;d=1}if((d|0)!=0){k=0;while(1){if((k|0)>=18){break}if((c[g+(k*76|0)+60>>2]|0)==1){if((c[g+(k*76|0)+68>>2]&1|0)!=0){c[g+(k*76|0)+60>>2]=2}else{c[g+(k*76|0)+60>>2]=3}}k=k+1|0}if((c[g+(l*76|0)+60>>2]|0)==0){if((c[g+(l*76|0)+68>>2]&1|0)!=0){c[g+(l*76|0)+60>>2]=2;if((c[g+(l*76|0)+68>>2]&4|0)!=0){j=1}}else{c[g+(l*76|0)+60>>2]=1}}}else{k=0;while(1){if((k|0)>=18){break}if((c[g+(k*76|0)+60>>2]|0)==1){q=50;break}k=k+1|0}if((q|0)==50){q=0;if((c[g+(k*76|0)+68>>2]&8|0)!=0){l=Hb(e|0,17200,(o=i,i=i+8|0,c[o>>2]=f,o)|0)|0;i=o;if((l|0)==1){c[c[g+(k*76|0)+64>>2]>>2]=c[f>>2];c[g+(k*76|0)+60>>2]=2}else{c[g+(k*76|0)+60>>2]=3}}else{}do{if((c[g+(k*76|0)+60>>2]|0)==2){if((c[g+(k*76|0)+68>>2]&4|0)==0){break}j=1}}while(0)}}}ma(m|0)|0;i=b;return}function of(){var a=0,b=0,d=0,e=0;a=i;i=i+528|0;b=a|0;do{d=0;e=0;while(1){if((e|0)>=((c[16198]|0)-1|0)){break}if((Lf(59652+(e*524|0)|0,59652+((e+1|0)*524|0)|0)|0)>0){d=1;Nf(b|0,59552+((e+1|0)*524|0)|0,524)|0;Nf(59552+((e+1|0)*524|0)|0,59552+(e*524|0)|0,524)|0;Nf(59552+(e*524|0)|0,b|0,524)|0;if((c[16612]|0)==(e+1|0)){c[16612]=e}else{if((c[16612]|0)==(e|0)){c[16612]=e+1}}}e=e+1|0}}while((d|0)!=0);i=a;return}function pf(){var b=0,d=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,o=0,p=0,q=0,r=0,s=0,t=0;b=i;i=i+1288|0;d=b|0;e=b+256|0;f=b+1280|0;g=0;h=0;j=0;k=0;l=0;m=0;Qf(d|0,7936)|0;Rf(d|0,59552+((c[16612]|0)*524|0)|0)|0;Rf(d|0,6448)|0;Rf(d|0,27800)|0;o=Ua(d|0,27032)|0;p=o;if((o|0)==0){Nb(c[n>>2]|0,13752,(q=i,i=i+8|0,c[q>>2]=d,q)|0)|0;i=q;r=1;s=r;i=b;return s|0}while(1){if((Ra(e|0,1024,p|0)|0)==0){break}g=g+1|0;d=(Of(e|0)|0)-1|0;while(1){if((d|0)<0){break}if((a[e+d|0]|0)==13){t=9}else{if((a[e+d|0]|0)==10){t=9}}if((t|0)==9){t=0;a[e+d|0]=0}d=d-1|0}do{if((Mf(e|0,13520,24)|0)!=0){if((Mf(e|0,13328,17)|0)==0){if((h|0)!=0){t=23;break}}if((Mf(e|0,13096,22)|0)==0){if((k|0)==2){t=23;break}}if((Mf(e|0,12976,7)|0)==0){if((k|0)==2){t=23;break}}if((Mf(e|0,12792,8)|0)==0){if((l|0)==2){t=23;break}}if((Mf(e|0,12576,28)|0)==0){if((l|0)==2){t=23;break}}if((j|0)==1){d=Hb(e|0,17200,(q=i,i=i+8|0,c[q>>2]=f,q)|0)|0;i=q;if((d|0)==1){c[26717]=c[f>>2];j=2}else{j=3}}else{if((k|0)==1){if((Lf(82512+((c[16614]|0)*292|0)|0,e|0)|0)!=0){k=0}else{k=2}}else{if((l|0)==1){d=Hb(e|0,12296,(q=i,i=i+8|0,c[q>>2]=f,q)|0)|0;i=q;if((d|0)==1){if((c[f>>2]|0)==(c[82540+((c[16614]|0)*292|0)>>2]|0)){l=2}else{l=0}}else{l=0}}else{if((m|0)==1){d=Hb(e|0,17200,(q=i,i=i+8|0,c[q>>2]=f,q)|0)|0;i=q;if((d|0)==1){c[26717]=c[f>>2];m=2}else{m=3}}}}}}else{t=23}}while(0);if((t|0)==23){t=0;if((h|0)==1){h=2}else{if((j|0)==1){j=3}else{if((k|0)==1){k=0}else{if((l|0)==1){l=0}else{if((m|0)==1){m=3}}}}}if((Mf(e|0,13520,24)|0)!=0){if((Mf(e|0,13328,17)|0)!=0){if((Mf(e|0,13096,22)|0)!=0){if((Mf(e|0,12976,7)|0)!=0){if((Mf(e|0,12792,8)|0)!=0){if((Mf(e|0,12576,28)|0)==0){t=64;break}}else{if((m|0)==0){m=1}}}else{if((l|0)==0){l=1}else{if((l|0)==2){t=56;break}}}}else{if((j|0)==0){j=1}}}else{if((k|0)==0){k=1}else{if((k|0)==2){t=45;break}}}}else{if((h|0)==0){h=1}}}}ma(p|0)|0;do{if((j|0)!=2){if((m|0)==2){break}r=1;s=r;i=b;return s|0}}while(0);r=0;s=r;i=b;return s|0}function qf(){var a=0,b=0,d=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0;a=i;i=i+416|0;b=a|0;d=a+256|0;e=a+272|0;f=a+288|0;g=a+304|0;h=a+320|0;j=a+336|0;k=a+352|0;l=a+368|0;m=a+384|0;o=a+400|0;if((c[28230]|0)!=0){hc(c[28230]|0)}if((c[29360]|0)!=0){hc(c[29360]|0)}if((c[70810]|0)!=0){hc(c[70810]|0)}if((c[28582]|0)!=0){qd(c[28582]|0)}if((c[70536]|0)!=0){hc(c[70536]|0)}c[70536]=0;if((c[27508]|0)!=0){hc(c[27508]|0)}p=0;a:while(1){if((p|0)>=6){break}Qf(b|0,7936)|0;Rf(b|0,59552+((c[16612]|0)*524|0)|0)|0;Rf(b|0,6448)|0;if((p|0)==0){if((c[7768]|0)==16){Rf(b|0,12144)|0}else{if((c[7768]|0)==32){Rf(b|0,11992)|0}}}else{if((p|0)==1){if((c[7768]|0)==16){Rf(b|0,11792)|0}else{if((c[7768]|0)==32){Rf(b|0,11600)|0}}}else{if((p|0)==2){if((c[7768]|0)==16){Rf(b|0,11448)|0}else{if((c[7768]|0)==32){Rf(b|0,11304)|0}}}else{if((p|0)==3){rf()}else{if((p|0)==4){if((c[7768]|0)==32){Rf(b|0,11144)|0}else{Rf(b|0,10968)|0}}else{if((p|0)==5){if((c[7768]|0)==32){Rf(b|0,10840)|0}else{if((c[7768]|0)==16){Rf(b|0,10648)|0}}}}}}}}do{if((p|0)==0){q=58}else{if((p|0)==4){q=58;break}if((p|0)==5){q=58;break}if((p|0)==1){q=79}else{if((p|0)==2){q=79}}if((q|0)==79){q=0;r=Zb(La(b|0,10384)|0,1)|0;s=r;if((r|0)==0){q=80;break a}if((Ja(s|0,131072,Jb(c[s+4>>2]|0,-1|0,0,-1|0)|0)|0)<0){q=82;break a}t=Rb(s|0)|0;hc(s|0);if((t|0)==0){q=84;break a}if((p|0)==1){c[29360]=t}else{if((p|0)==2){c[70810]=t}}}q=92}}while(0);do{if((q|0)==58){q=0;r=Fb(b|0)|0;s=r;if((r|0)==0){Nb(c[n>>2]|0,10544,(u=i,i=i+8|0,c[u>>2]=b,u)|0)|0;i=u;if((p|0)==0){q=61;break a}if((p|0)==5){q=61;break a}c[70536]=0;break}t=Rb(s|0)|0;hc(s|0);if((t|0)==0){q=64;break a}if((p|0)==0){c[28230]=t}else{if((p|0)==4){c[70536]=t}else{if((p|0)==5){c[27508]=t}}}q=92}}while(0);if((q|0)==92){q=0}p=p+1|0}do{if((q|0)==61){Xa(1)}else if((q|0)==64){t=c[n>>2]|0;s=ub()|0;Nb(t|0,10456,(u=i,i=i+8|0,c[u>>2]=s,u)|0)|0;i=u;if((p|0)==0){Xa(1)}if((p|0)==5){Xa(1)}else{c[70536]=0;break}}else if((q|0)==80){Nb(c[n>>2]|0,10272,(u=i,i=i+8|0,c[u>>2]=b,u)|0)|0;i=u;Xa(1)}else if((q|0)==82){s=c[n>>2]|0;t=ub()|0;Nb(s|0,10152,(u=i,i=i+8|0,c[u>>2]=t,u)|0)|0;i=u;Xa(1)}else if((q|0)==84){t=c[n>>2]|0;s=ub()|0;Nb(t|0,10456,(u=i,i=i+8|0,c[u>>2]=s,u)|0)|0;i=u;Xa(1)}}while(0);nf();if((c[7768]|0)==16){Ze(d,69,52,c[7768]|0,c[7768]|0);u=d;c[16880]=c[u>>2];c[16881]=c[u+4>>2];c[16882]=c[u+8>>2];c[16883]=c[u+12>>2];Ze(e,103,52,c[7768]|0,c[7768]|0);u=e;c[16888]=c[u>>2];c[16889]=c[u+4>>2];c[16890]=c[u+8>>2];c[16891]=c[u+12>>2];Ze(f,120,52,c[7768]|0,c[7768]|0);u=f;c[16932]=c[u>>2];c[16933]=c[u+4>>2];c[16934]=c[u+8>>2];c[16935]=c[u+12>>2];Ze(g,137,52,c[7768]|0,c[7768]|0);u=g;c[16884]=c[u>>2];c[16885]=c[u+4>>2];c[16886]=c[u+8>>2];c[16887]=c[u+12>>2]}else{if((c[7768]|0)==32){Ze(h,138,104,c[7768]|0,c[7768]|0);u=h;c[16880]=c[u>>2];c[16881]=c[u+4>>2];c[16882]=c[u+8>>2];c[16883]=c[u+12>>2];Ze(j,206,104,c[7768]|0,c[7768]|0);u=j;c[16888]=c[u>>2];c[16889]=c[u+4>>2];c[16890]=c[u+8>>2];c[16891]=c[u+12>>2];Ze(k,240,104,c[7768]|0,c[7768]|0);u=k;c[16932]=c[u>>2];c[16933]=c[u+4>>2];c[16934]=c[u+8>>2];c[16935]=c[u+12>>2];Ze(l,274,104,c[7768]|0,c[7768]|0);u=l;c[16884]=c[u>>2];c[16885]=c[u+4>>2];c[16886]=c[u+8>>2];c[16887]=c[u+12>>2]}}p=0;while(1){if((p|0)>=8){break}u=((c[7768]|0)/16|0)+(aa(p,(c[7768]|0)+((c[7768]|0)/16|0)|0)|0)|0;Ze(m,u,(((c[7768]|0)+((c[7768]|0)/16|0)|0)*5|0)+((c[7768]|0)/16|0)|0,c[7768]|0,c[7768]|0);u=67768+(p<<4)|0;l=m;c[u>>2]=c[l>>2];c[u+4>>2]=c[l+4>>2];c[u+8>>2]=c[l+8>>2];c[u+12>>2]=c[l+12>>2];p=p+1|0}p=0;while(1){if((p|0)>=10){break}m=aa(p,((c[7768]|0)/2|0)+((c[7768]|0)/16|0)|0)|0;Ze(o,m,0,((c[7768]|0)/2|0)+((c[7768]|0)/16|0)|0,c[7768]|0);m=67568+(p<<4)|0;l=o;c[m>>2]=c[l>>2];c[m+4>>2]=c[l+4>>2];c[m+8>>2]=c[l+8>>2];c[m+12>>2]=c[l+12>>2];p=p+1|0}i=a;return}function rf(){var a=0,b=0,d=0,e=0;a=i;i=i+256|0;b=a|0;d=0;Qf(b|0,7936)|0;Rf(b|0,59552+((c[16612]|0)*524|0)|0)|0;Rf(b|0,6448)|0;d=0;if((c[7768]|0)==16){Rf(b|0,9768)|0}else{if((c[7768]|0)==32){Rf(b|0,9600)|0}}e=od(b|0,d)|0;c[28582]=e;if((e|0)==0){Nb(c[n>>2]|0,9496,(e=i,i=i+8|0,c[e>>2]=b,e)|0)|0;i=e;Xa(1)}else{i=a;return}}function sf(){var a=0,b=0,d=0,e=0;a=i;i=i+256|0;b=a|0;Qf(b|0,7936)|0;Rf(b|0,59552+((c[16612]|0)*524|0)|0)|0;Rf(b|0,6448)|0;Rf(b|0,10072)|0;d=Zb(La(b|0,10384)|0,1)|0;c[7494]=d;if((d|0)==0){Nb(c[n>>2]|0,9968,(e=i,i=i+8|0,c[e>>2]=b,e)|0)|0;i=e;i=a;return}b=c[7494]|0;if((Ja(b|0,131072,Jb(c[(c[7494]|0)+4>>2]|0,-1|0,0,-1|0)|0)|0)<0){b=c[n>>2]|0;d=ub()|0;Nb(b|0,10152,(e=i,i=i+8|0,c[e>>2]=d,e)|0)|0;i=e}else{za(c[7494]|0,0)}i=a;return}function tf(){var a=0,b=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0;a=i;i=i+568|0;b=a|0;e=a+72|0;f=a+144|0;g=a+216|0;h=a+232|0;j=a+248|0;k=a+504|0;l=a+520|0;m=a+536|0;o=a+552|0;Nf(b|0,5520,72)|0;Nf(e|0,5448,72)|0;Nf(f|0,5376,72)|0;p=c[60048+((c[14596]|0)*524|0)>>2]|0;q=0;Qf(j|0,7936)|0;Rf(j|0,59552+((c[14596]|0)*524|0)|0)|0;Rf(j|0,6448)|0;if((c[7768]|0)==16){Rf(j|0,12144)|0}else{if((c[7768]|0)==32){Rf(j|0,11992)|0}}r=Fb(j|0)|0;s=r;if((r|0)==0){Nb(c[n>>2]|0,10272,(t=i,i=i+8|0,c[t>>2]=j,t)|0)|0;i=t;u=q;i=a;return u|0}j=Rb(s|0)|0;hc(s|0);if((j|0)!=0){s=Vb(c[c[16874]>>2]|0,((c[7768]|0)*9|0)+(((c[7768]|0)/4|0)<<3)|0,((c[7768]|0)*3|0)+(((c[7768]|0)/4|0)<<1)|0,d[(c[(c[16874]|0)+4>>2]|0)+8|0]|0|0,c[(c[(c[16874]|0)+4>>2]|0)+12>>2]|0,c[(c[(c[16874]|0)+4>>2]|0)+16>>2]|0,c[(c[(c[16874]|0)+4>>2]|0)+20>>2]|0,c[(c[(c[16874]|0)+4>>2]|0)+24>>2]|0)|0;q=s;if((s|0)!=0){Ta(q|0,0,Jb(c[(c[16874]|0)+4>>2]|0,(c[60012+((c[16612]|0)*524|0)>>2]|0)>>>16&255|0,(c[60012+((c[16612]|0)*524|0)>>2]|0)>>>8&255|0,c[60012+((c[16612]|0)*524|0)>>2]&255|0)|0)|0;s=0;while(1){if((s|0)>=3){break}r=0;while(1){if((r|0)>=9){break}v=aa(r,(c[7768]|0)+((c[7768]|0)/4|0)|0)|0;w=aa(s,(c[7768]|0)+((c[7768]|0)/4|0)|0)|0;Ze(k,v,w,c[7768]|0,c[7768]|0);w=h;v=k;c[w>>2]=c[v>>2];c[w+4>>2]=c[v+4>>2];c[w+8>>2]=c[v+8>>2];c[w+12>>2]=c[v+12>>2];Ta(q|0,h|0,Jb(c[(c[16874]|0)+4>>2]|0,p>>>16&255|0,p>>>8&255|0,p&255|0)|0)|0;if((s|0)==0){v=(aa(c[b+(r<<1<<2)>>2]|0,c[7768]|0)|0)/16|0;w=(aa(c[b+((r<<1)+1<<2)>>2]|0,c[7768]|0)|0)/16|0;Ze(l,v,w,c[7768]|0,c[7768]|0);w=g;v=l;c[w>>2]=c[v>>2];c[w+4>>2]=c[v+4>>2];c[w+8>>2]=c[v+8>>2];c[w+12>>2]=c[v+12>>2]}else{if((s|0)==1){v=(aa(c[e+(r<<1<<2)>>2]|0,c[7768]|0)|0)/16|0;w=(aa(c[e+((r<<1)+1<<2)>>2]|0,c[7768]|0)|0)/16|0;Ze(m,v,w,c[7768]|0,c[7768]|0);w=g;v=m;c[w>>2]=c[v>>2];c[w+4>>2]=c[v+4>>2];c[w+8>>2]=c[v+8>>2];c[w+12>>2]=c[v+12>>2]}else{if((s|0)==2){v=(aa(c[f+(r<<1<<2)>>2]|0,c[7768]|0)|0)/16|0;w=(aa(c[f+((r<<1)+1<<2)>>2]|0,c[7768]|0)|0)/16|0;Ze(o,v,w,c[7768]|0,c[7768]|0);w=g;v=o;c[w>>2]=c[v>>2];c[w+4>>2]=c[v+4>>2];c[w+8>>2]=c[v+8>>2];c[w+12>>2]=c[v+12>>2]}}}Ub(j|0,g|0,q|0,h|0)|0;r=r+1|0}s=s+1|0}}else{s=c[n>>2]|0;h=ub()|0;Nb(s|0,9872,(t=i,i=i+8|0,c[t>>2]=h,t)|0)|0;i=t}}else{h=c[n>>2]|0;s=ub()|0;Nb(h|0,10152,(t=i,i=i+8|0,c[t>>2]=s,t)|0)|0;i=t}hc(j|0);u=q;i=a;return u|0}function uf(){var a=0,b=0,d=0,e=0,f=0;a=i;i=i+808|0;b=a|0;d=a+256|0;if((c[7754]|0)>=128){i=a;return}c[7754]=(c[7754]|0)+1;e=c[7754]|0;Ya(b|0,23704,(f=i,i=i+16|0,c[f>>2]=49864,c[f+8>>2]=e,f)|0)|0;i=f;Qf(d|0,22816)|0;Qf(d+256|0,b|0)|0;c[d+512>>2]=c[28574];c[d+516>>2]=0;c[d+520>>2]=(c[7768]|0)*6|0;c[d+524>>2]=c[7768]<<1;jf(1,d);i=a;return}function vf(){var a=0,b=0,d=0,e=0,f=0;a=i;i=i+808|0;b=a|0;d=a+256|0;if((c[7754]|0)<=0){i=a;return}c[7754]=(c[7754]|0)-1;e=c[7754]|0;Ya(b|0,23704,(f=i,i=i+16|0,c[f>>2]=49864,c[f+8>>2]=e,f)|0)|0;i=f;Qf(d|0,22816)|0;Qf(d+256|0,b|0)|0;c[d+512>>2]=c[28574];c[d+516>>2]=0;c[d+520>>2]=(c[7768]|0)*6|0;c[d+524>>2]=c[7768]<<1;jf(1,d);i=a;return}function wf(){var a=0,b=0;a=i;b=0;c[29112]=1;tb()|0;c[1588]=1;b=0;while(1){if((b|0)>=40){break}if((c[72360+(b*140|0)>>2]|0)==63){_b(c[72364+(b*140|0)>>2]|0)}c[72368+(b*140|0)>>2]=0;c[72364+(b*140|0)>>2]=0;c[72360+(b*140|0)>>2]=60;b=b+1|0}c[19632]=0;i=a;return}function xf(){var a=0,b=0,d=0;a=i;b=0;while(1){if((b|0)>=40){d=7;break}if((c[72364+(b*140|0)>>2]|0)!=0){break}b=b+1|0}if((d|0)==7){i=a;return}c[72368+(b*140|0)>>2]=0;c[72360+(b*140|0)>>2]=64;_b(c[72364+(b*140|0)>>2]|0);c[72364+(b*140|0)>>2]=0;i=a;return}function yf(){var a=0,b=0,d=0;a=i;b=0;d=0;b=0;while(1){if((b|0)>=40){break}do{if((d|0)==0){if((c[72368+(b*140|0)>>2]|0)!=1){if((c[72368+(b*140|0)>>2]|0)!=2){break}}d=1;tb()|0}}while(0);c[72368+(b*140|0)>>2]=0;if((c[72360+(b*140|0)>>2]|0)==63){c[72360+(b*140|0)>>2]=64;_b(c[72364+(b*140|0)>>2]|0);c[72364+(b*140|0)>>2]=0}b=b+1|0}i=a;return}function zf(){var a=0,b=0,d=0,e=0,f=0,g=0,h=0,j=0;a=i;i=i+1024|0;b=a|0;d=0;e=-1;f=0;do{if((c[14886]|0)!=0){if((c[1588]|0)==1){if((c[29112]|0)==0){break}}if((c[29112]|0)!=0){Af();c[29112]=0}d=0;while(1){if((d|0)>=40){g=26;break}if((c[72368+(d*140|0)>>2]|0)==2){g=10;break}if((c[72368+(d*140|0)>>2]|0)==1){g=14;break}if((c[72360+(d*140|0)>>2]|0)==60){f=f+1|0}if((c[72364+(d*140|0)>>2]|0)!=0){e=d}d=d+1|0}if((g|0)==10){if((c[7754]|0)>0){c[72368+(d*140|0)>>2]=1;fc()}i=a;return}else if((g|0)==14){if((c[7754]|0)==0){c[72368+(d*140|0)>>2]=2;Za()}else{if((c[14332]|0)!=(c[7754]|0)){ka(c[7754]|0)|0;c[14332]=c[7754]}}i=a;return}else if((g|0)==26){if((f|0)==40){c[1588]=1;i=a;return}while(1){if((c[72360+((c[19632]|0)*140|0)>>2]|0)==64){break}c[19632]=((c[19632]|0)+1|0)%40|0}h=72372+((c[19632]|0)*140|0)|0;Ya(b|0,21792,(j=i,i=i+24|0,c[j>>2]=20792,c[j+8>>2]=19976,c[j+16>>2]=h,j)|0)|0;i=j;j=_a(b|0)|0;c[72364+((c[19632]|0)*140|0)>>2]=j;if((c[72364+((c[19632]|0)*140|0)>>2]|0)!=0){c[72360+((c[19632]|0)*140|0)>>2]=63;c[72368+((c[19632]|0)*140|0)>>2]=1;ka(c[7754]|0)|0;gc(c[72364+((c[19632]|0)*140|0)>>2]|0,0)|0;$a(4)}else{c[72360+((c[19632]|0)*140|0)>>2]=60}c[19632]=((c[19632]|0)+1|0)%40|0;i=a;return}}}while(0);i=a;return}function Af(){var b=0,d=0,e=0,f=0,g=0,h=0;b=i;i=i+1024|0;d=b|0;e=0;f=0;wf();Ya(d|0,19480,(g=i,i=i+16|0,c[g>>2]=20792,c[g+8>>2]=19976,g)|0)|0;i=g;c[19632]=0;g=Ga(d|0)|0;e=g;if((g|0)==0){i=b;return}while(1){g=Na(e|0)|0;d=g;if((g|0)!=0){h=(f|0)<40}else{h=0}if(!h){break}if((Ca(d+11|0,18832)|0)!=0){Pf(72372+(f*140|0)|0,d+11|0,128)|0;a[72499+(f*140|0)|0]=0;c[72360+(f*140|0)>>2]=64;c[72368+(f*140|0)>>2]=0;f=f+1|0;c[1588]=0}}$b(e|0)|0;i=b;return}function Bf(b){b=b|0;var d=0,e=0,f=0,g=0,h=0,j=0,k=0,l=0,m=0,n=0;d=i;i=i+2048|0;e=d|0;f=d+1024|0;g=b;b=0;h=0;j=0;b=0;while(1){if((c[36+(b*20|0)>>2]|0)==0){break}if((c[32+(b*20|0)>>2]|0)==100){if((c[40+(b*20|0)>>2]|0)!=0){_b(c[40+(b*20|0)>>2]|0)}}c[40+(b*20|0)>>2]=0;c[32+(b*20|0)>>2]=129;b=b+1|0}Ya(e|0,18328,(k=i,i=i+24|0,c[k>>2]=20792,c[k+8>>2]=17704,c[k+16>>2]=g,k)|0)|0;i=k;g=Ua(e|0,17192)|0;l=g;do{if((g|0)==0){Ya(e|0,16656,(k=i,i=i+16|0,c[k>>2]=20792,c[k+8>>2]=17704,k)|0)|0;i=k;m=Ua(e|0,17192)|0;l=m;if((m|0)!=0){break}i=d;return}}while(0);while(1){if((Ra(f|0,1024,l|0)|0)==0){break}b=(Of(f|0)|0)-1|0;a:while(1){if((b|0)<0){break}do{if((a[f+b|0]|0)!=13){if((a[f+b|0]|0)==10){break}if((a[f+b|0]|0)!=32){n=21;break a}}}while(0);a[f+b|0]=0;b=b-1|0}if((n|0)==21){n=0}j=1;b=0;while(1){if((c[36+(b*20|0)>>2]|0)==0){break}e=c[48+(b*20|0)>>2]|0;if((Mf(e,f|0,Of(c[48+(b*20|0)>>2]|0)|0)|0)==0){n=27;break}b=b+1|0}if((n|0)==27){n=0;j=0;h=0;while(1){if((c[36+(h*20|0)>>2]|0)==0){break}do{if((c[32+(h*20|0)>>2]|0)==128){if((h|0)==(b|0)){break}c[32+(h*20|0)>>2]=129}}while(0);h=h+1|0}c[32+(b*20|0)>>2]=128}if((j|0)==1){b=0;while(1){if((c[36+(b*20|0)>>2]|0)==0){break}if((c[32+(b*20|0)>>2]|0)==128){n=41;break}b=b+1|0}if((n|0)==41){n=0;Pf(c[44+(b*20|0)>>2]|0,f|0,1024)|0;a[(c[44+(b*20|0)>>2]|0)+1023|0]=0;c[32+(b*20|0)>>2]=200}}}ma(l|0)|0;b=0;while(1){if((c[36+(b*20|0)>>2]|0)==0){break}if((c[32+(b*20|0)>>2]|0)==128){c[32+(b*20|0)>>2]=129}b=b+1|0}Cf();i=d;return}function Cf(){var a=0,b=0,d=0,e=0,f=0;a=i;i=i+1024|0;b=a|0;d=0;d=0;while(1){if((c[36+(d*20|0)>>2]|0)==0){break}if((c[32+(d*20|0)>>2]|0)!=129){e=c[44+(d*20|0)>>2]|0;Ya(b|0,21792,(f=i,i=i+24|0,c[f>>2]=20792,c[f+8>>2]=17704,c[f+16>>2]=e,f)|0)|0;i=f;c[40+(d*20|0)>>2]=ac(La(b|0,16344)|0,1)|0;if((c[40+(d*20|0)>>2]|0)==0){c[32+(d*20|0)>>2]=200}else{c[32+(d*20|0)>>2]=100}}d=d+1|0}i=a;return}function Df(){var a=0,b=0;a=i;b=0;b=0;while(1){if((c[36+(b*20|0)>>2]|0)==0){break}if((c[32+(b*20|0)>>2]|0)==100){if((c[40+(b*20|0)>>2]|0)!=0){_b(c[40+(b*20|0)>>2]|0)}}c[40+(b*20|0)>>2]=0;c[32+(b*20|0)>>2]=129;b=b+1|0}wf();c[14886]=0;If();i=a;return}function Ef(){i=i;return 0}function Ff(){var a=0,b=0;a=i;b=0;Hf();b=0;while(1){if((c[36+(b*20|0)>>2]|0)==0){break}c[40+(b*20|0)>>2]=0;c[32+(b*20|0)>>2]=129;Qf(c[44+(b*20|0)>>2]|0,16104)|0;b=b+1|0}b=0;while(1){if((b|0)>=40){break}c[72360+(b*140|0)>>2]=60;c[72368+(b*140|0)>>2]=0;c[72364+(b*140|0)>>2]=0;b=b+1|0}c[29112]=1;i=a;return}function Gf(a,b){a=a|0;b=b|0;var d=0,e=0,f=0,g=0,h=0;d=i;e=a;a=b;b=0;f=0;g=oa(-1|0)|0;if((c[14886]|0)==0){i=d;return}if((c[16610]|0)==0){i=d;return}a:do{switch(a|0){case 3:{a=128;break};case 1:{a=(c[16610]|0)/2|0;if((g|0)<=((c[1586]|0)-5|0)){break a}i=d;return};case 4:{a=(c[16610]|0)/8|0;if((g|0)<=((c[1586]|0)-5|0)){break a}i=d;return};case 0:{a=0;break};case 2:{a=c[16610]|0;break};default:{a=(c[16610]|0)/(a-3|0)|0}}}while(0);f=0;while(1){if((c[36+(f*20|0)>>2]|0)==0){break}if((c[36+(f*20|0)>>2]|0)==(e|0)){h=19;break}f=f+1|0}if((h|0)==19){if((c[32+(f*20|0)>>2]|0)==100){b=sa(-1|0,c[40+(f*20|0)>>2]|0,0,-1|0)|0;na(b|0,a|0)|0}}i=d;return}function Hf(){var a=0,b=0,d=0,e=0;a=i;if((Ef()|0)!=0){i=a;return}if((ya(44100,-32752|0,2,1024)|0)!=0){b=c[o>>2]|0;d=ub()|0;Nb(b|0,15984,(e=i,i=i+8|0,c[e>>2]=d,e)|0)|0;i=e;c[14886]=0}else{c[1586]=dc(16)|0;jb(15720,(e=i,i=i+8|0,c[e>>2]=c[1586],e)|0)|0;i=e}i=a;return}function If(){if((Ef()|0)<=0){return}Bb();return}function Jf(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=0,O=0,P=0,Q=0,R=0,S=0,T=0,U=0,V=0,W=0,X=0,Y=0,Z=0,_=0,$=0,aa=0,ba=0,ca=0,da=0,ea=0,fa=0,ga=0,ha=0,ia=0,ja=0,ka=0,la=0,ma=0,na=0,oa=0,pa=0,qa=0,ra=0,sa=0,ta=0,ua=0,va=0,wa=0,xa=0,ya=0,za=0,Aa=0,Ba=0,Ca=0,Da=0,Ea=0,Fa=0,Ga=0,Ha=0,Ia=0,Ja=0,Ka=0,La=0;do{if(a>>>0<245>>>0){if(a>>>0<11>>>0){b=16}else{b=a+11&-8}d=b>>>3;e=c[70818]|0;f=e>>>(d>>>0);if((f&3|0)!=0){g=(f&1^1)+d|0;h=g<<1;i=283312+(h<<2)|0;j=283312+(h+2<<2)|0;h=c[j>>2]|0;k=h+8|0;l=c[k>>2]|0;do{if((i|0)==(l|0)){c[70818]=e&~(1<<g)}else{if(l>>>0<(c[70822]|0)>>>0){Mb();return 0}m=l+12|0;if((c[m>>2]|0)==(h|0)){c[m>>2]=i;c[j>>2]=l;break}else{Mb();return 0}}}while(0);l=g<<3;c[h+4>>2]=l|3;j=h+(l|4)|0;c[j>>2]=c[j>>2]|1;n=k;return n|0}j=c[70820]|0;if(!(b>>>0>j>>>0)){o=b;break}if((f|0)!=0){l=2<<d;i=f<<d&(l|-l);l=(i&-i)-1|0;i=l>>>12&16;m=l>>>(i>>>0);l=m>>>5&8;p=m>>>(l>>>0);m=p>>>2&4;q=p>>>(m>>>0);p=q>>>1&2;r=q>>>(p>>>0);q=r>>>1&1;s=(l|i|m|p|q)+(r>>>(q>>>0))|0;q=s<<1;r=283312+(q<<2)|0;p=283312+(q+2<<2)|0;q=c[p>>2]|0;m=q+8|0;i=c[m>>2]|0;do{if((r|0)==(i|0)){c[70818]=e&~(1<<s);t=j}else{if(i>>>0<(c[70822]|0)>>>0){Mb();return 0}l=i+12|0;if((c[l>>2]|0)==(q|0)){c[l>>2]=r;c[p>>2]=i;t=c[70820]|0;break}else{Mb();return 0}}}while(0);i=s<<3;p=i-b|0;c[q+4>>2]=b|3;r=q;j=r+b|0;c[r+(b|4)>>2]=p|1;c[r+i>>2]=p;if((t|0)!=0){i=c[70823]|0;r=t>>>3;e=r<<1;d=283312+(e<<2)|0;f=c[70818]|0;k=1<<r;do{if((f&k|0)==0){c[70818]=f|k;u=d;v=283312+(e+2<<2)|0}else{r=283312+(e+2<<2)|0;h=c[r>>2]|0;if(!(h>>>0<(c[70822]|0)>>>0)){u=h;v=r;break}Mb();return 0}}while(0);c[v>>2]=i;c[u+12>>2]=i;c[i+8>>2]=u;c[i+12>>2]=d}c[70820]=p;c[70823]=j;n=m;return n|0}e=c[70819]|0;if((e|0)==0){o=b;break}k=(e&-e)-1|0;e=k>>>12&16;f=k>>>(e>>>0);k=f>>>5&8;q=f>>>(k>>>0);f=q>>>2&4;s=q>>>(f>>>0);q=s>>>1&2;r=s>>>(q>>>0);s=r>>>1&1;h=c[283576+((k|e|f|q|s)+(r>>>(s>>>0))<<2)>>2]|0;s=h;r=h;q=(c[h+4>>2]&-8)-b|0;while(1){h=c[s+16>>2]|0;if((h|0)==0){f=c[s+20>>2]|0;if((f|0)==0){break}else{w=f}}else{w=h}h=(c[w+4>>2]&-8)-b|0;f=h>>>0<q>>>0;s=w;r=f?w:r;q=f?h:q}s=r;m=c[70822]|0;if(s>>>0<m>>>0){Mb();return 0}j=s+b|0;p=j;if(!(s>>>0<j>>>0)){Mb();return 0}j=c[r+24>>2]|0;d=c[r+12>>2]|0;do{if((d|0)==(r|0)){i=r+20|0;h=c[i>>2]|0;if((h|0)==0){f=r+16|0;e=c[f>>2]|0;if((e|0)==0){x=0;break}else{y=e;z=f}}else{y=h;z=i}while(1){i=y+20|0;h=c[i>>2]|0;if((h|0)!=0){y=h;z=i;continue}i=y+16|0;h=c[i>>2]|0;if((h|0)==0){break}else{y=h;z=i}}if(z>>>0<m>>>0){Mb();return 0}else{c[z>>2]=0;x=y;break}}else{i=c[r+8>>2]|0;if(i>>>0<m>>>0){Mb();return 0}h=i+12|0;if((c[h>>2]|0)!=(r|0)){Mb();return 0}f=d+8|0;if((c[f>>2]|0)==(r|0)){c[h>>2]=d;c[f>>2]=i;x=d;break}else{Mb();return 0}}}while(0);a:do{if((j|0)!=0){d=c[r+28>>2]|0;m=283576+(d<<2)|0;do{if((r|0)==(c[m>>2]|0)){c[m>>2]=x;if((x|0)!=0){break}c[70819]=c[70819]&~(1<<d);break a}else{if(j>>>0<(c[70822]|0)>>>0){Mb();return 0}i=j+16|0;if((c[i>>2]|0)==(r|0)){c[i>>2]=x}else{c[j+20>>2]=x}if((x|0)==0){break a}}}while(0);d=c[70822]|0;if(x>>>0<d>>>0){Mb();return 0}c[x+24>>2]=j;m=c[r+16>>2]|0;do{if((m|0)!=0){if(m>>>0<d>>>0){Mb();return 0}else{c[x+16>>2]=m;c[m+24>>2]=x;break}}}while(0);m=c[r+20>>2]|0;if((m|0)==0){break}if(m>>>0<(c[70822]|0)>>>0){Mb();return 0}else{c[x+20>>2]=m;c[m+24>>2]=x;break}}}while(0);if(q>>>0<16>>>0){j=q+b|0;c[r+4>>2]=j|3;m=s+(j+4)|0;c[m>>2]=c[m>>2]|1}else{c[r+4>>2]=b|3;c[s+(b|4)>>2]=q|1;c[s+(q+b)>>2]=q;m=c[70820]|0;if((m|0)!=0){j=c[70823]|0;d=m>>>3;m=d<<1;i=283312+(m<<2)|0;f=c[70818]|0;h=1<<d;do{if((f&h|0)==0){c[70818]=f|h;A=i;B=283312+(m+2<<2)|0}else{d=283312+(m+2<<2)|0;e=c[d>>2]|0;if(!(e>>>0<(c[70822]|0)>>>0)){A=e;B=d;break}Mb();return 0}}while(0);c[B>>2]=j;c[A+12>>2]=j;c[j+8>>2]=A;c[j+12>>2]=i}c[70820]=q;c[70823]=p}n=r+8|0;return n|0}else{if(a>>>0>4294967231>>>0){o=-1;break}m=a+11|0;h=m&-8;f=c[70819]|0;if((f|0)==0){o=h;break}s=-h|0;d=m>>>8;do{if((d|0)==0){C=0}else{if(h>>>0>16777215>>>0){C=31;break}m=(d+1048320|0)>>>16&8;e=d<<m;k=(e+520192|0)>>>16&4;g=e<<k;e=(g+245760|0)>>>16&2;l=14-(k|m|e)+(g<<e>>>15)|0;C=h>>>((l+7|0)>>>0)&1|l<<1}}while(0);d=c[283576+(C<<2)>>2]|0;b:do{if((d|0)==0){D=0;E=s;F=0}else{if((C|0)==31){G=0}else{G=25-(C>>>1)|0}r=0;p=s;q=d;i=h<<G;j=0;while(1){l=c[q+4>>2]&-8;e=l-h|0;if(e>>>0<p>>>0){if((l|0)==(h|0)){D=q;E=e;F=q;break b}else{H=q;I=e}}else{H=r;I=p}e=c[q+20>>2]|0;l=c[q+16+(i>>>31<<2)>>2]|0;g=(e|0)==0|(e|0)==(l|0)?j:e;if((l|0)==0){D=H;E=I;F=g;break}else{r=H;p=I;q=l;i=i<<1;j=g}}}}while(0);if((F|0)==0&(D|0)==0){d=2<<C;s=f&(d|-d);if((s|0)==0){o=h;break}d=(s&-s)-1|0;s=d>>>12&16;j=d>>>(s>>>0);d=j>>>5&8;i=j>>>(d>>>0);j=i>>>2&4;q=i>>>(j>>>0);i=q>>>1&2;p=q>>>(i>>>0);q=p>>>1&1;J=c[283576+((d|s|j|i|q)+(p>>>(q>>>0))<<2)>>2]|0}else{J=F}if((J|0)==0){K=E;L=D}else{q=J;p=E;i=D;while(1){j=(c[q+4>>2]&-8)-h|0;s=j>>>0<p>>>0;d=s?j:p;j=s?q:i;s=c[q+16>>2]|0;if((s|0)!=0){q=s;p=d;i=j;continue}s=c[q+20>>2]|0;if((s|0)==0){K=d;L=j;break}else{q=s;p=d;i=j}}}if((L|0)==0){o=h;break}if(!(K>>>0<((c[70820]|0)-h|0)>>>0)){o=h;break}i=L;p=c[70822]|0;if(i>>>0<p>>>0){Mb();return 0}q=i+h|0;f=q;if(!(i>>>0<q>>>0)){Mb();return 0}j=c[L+24>>2]|0;d=c[L+12>>2]|0;do{if((d|0)==(L|0)){s=L+20|0;r=c[s>>2]|0;if((r|0)==0){g=L+16|0;l=c[g>>2]|0;if((l|0)==0){M=0;break}else{N=l;O=g}}else{N=r;O=s}while(1){s=N+20|0;r=c[s>>2]|0;if((r|0)!=0){N=r;O=s;continue}s=N+16|0;r=c[s>>2]|0;if((r|0)==0){break}else{N=r;O=s}}if(O>>>0<p>>>0){Mb();return 0}else{c[O>>2]=0;M=N;break}}else{s=c[L+8>>2]|0;if(s>>>0<p>>>0){Mb();return 0}r=s+12|0;if((c[r>>2]|0)!=(L|0)){Mb();return 0}g=d+8|0;if((c[g>>2]|0)==(L|0)){c[r>>2]=d;c[g>>2]=s;M=d;break}else{Mb();return 0}}}while(0);c:do{if((j|0)!=0){d=c[L+28>>2]|0;p=283576+(d<<2)|0;do{if((L|0)==(c[p>>2]|0)){c[p>>2]=M;if((M|0)!=0){break}c[70819]=c[70819]&~(1<<d);break c}else{if(j>>>0<(c[70822]|0)>>>0){Mb();return 0}s=j+16|0;if((c[s>>2]|0)==(L|0)){c[s>>2]=M}else{c[j+20>>2]=M}if((M|0)==0){break c}}}while(0);d=c[70822]|0;if(M>>>0<d>>>0){Mb();return 0}c[M+24>>2]=j;p=c[L+16>>2]|0;do{if((p|0)!=0){if(p>>>0<d>>>0){Mb();return 0}else{c[M+16>>2]=p;c[p+24>>2]=M;break}}}while(0);p=c[L+20>>2]|0;if((p|0)==0){break}if(p>>>0<(c[70822]|0)>>>0){Mb();return 0}else{c[M+20>>2]=p;c[p+24>>2]=M;break}}}while(0);d:do{if(K>>>0<16>>>0){j=K+h|0;c[L+4>>2]=j|3;p=i+(j+4)|0;c[p>>2]=c[p>>2]|1}else{c[L+4>>2]=h|3;c[i+(h|4)>>2]=K|1;c[i+(K+h)>>2]=K;p=K>>>3;if(K>>>0<256>>>0){j=p<<1;d=283312+(j<<2)|0;s=c[70818]|0;g=1<<p;do{if((s&g|0)==0){c[70818]=s|g;P=d;Q=283312+(j+2<<2)|0}else{p=283312+(j+2<<2)|0;r=c[p>>2]|0;if(!(r>>>0<(c[70822]|0)>>>0)){P=r;Q=p;break}Mb();return 0}}while(0);c[Q>>2]=f;c[P+12>>2]=f;c[i+(h+8)>>2]=P;c[i+(h+12)>>2]=d;break}j=q;g=K>>>8;do{if((g|0)==0){R=0}else{if(K>>>0>16777215>>>0){R=31;break}s=(g+1048320|0)>>>16&8;p=g<<s;r=(p+520192|0)>>>16&4;l=p<<r;p=(l+245760|0)>>>16&2;e=14-(r|s|p)+(l<<p>>>15)|0;R=K>>>((e+7|0)>>>0)&1|e<<1}}while(0);g=283576+(R<<2)|0;c[i+(h+28)>>2]=R;c[i+(h+20)>>2]=0;c[i+(h+16)>>2]=0;d=c[70819]|0;e=1<<R;if((d&e|0)==0){c[70819]=d|e;c[g>>2]=j;c[i+(h+24)>>2]=g;c[i+(h+12)>>2]=j;c[i+(h+8)>>2]=j;break}e=c[g>>2]|0;if((R|0)==31){S=0}else{S=25-(R>>>1)|0}e:do{if((c[e+4>>2]&-8|0)==(K|0)){T=e}else{g=e;d=K<<S;while(1){U=g+16+(d>>>31<<2)|0;p=c[U>>2]|0;if((p|0)==0){break}if((c[p+4>>2]&-8|0)==(K|0)){T=p;break e}else{g=p;d=d<<1}}if(U>>>0<(c[70822]|0)>>>0){Mb();return 0}else{c[U>>2]=j;c[i+(h+24)>>2]=g;c[i+(h+12)>>2]=j;c[i+(h+8)>>2]=j;break d}}}while(0);e=T+8|0;d=c[e>>2]|0;p=c[70822]|0;if(T>>>0>=p>>>0&d>>>0>=p>>>0){c[d+12>>2]=j;c[e>>2]=j;c[i+(h+8)>>2]=d;c[i+(h+12)>>2]=T;c[i+(h+24)>>2]=0;break}else{Mb();return 0}}}while(0);n=L+8|0;return n|0}}while(0);L=c[70820]|0;if(!(L>>>0<o>>>0)){T=L-o|0;U=c[70823]|0;if(T>>>0>15>>>0){K=U;c[70823]=K+o;c[70820]=T;c[K+(o+4)>>2]=T|1;c[K+L>>2]=T;c[U+4>>2]=o|3}else{c[70820]=0;c[70823]=0;c[U+4>>2]=L|3;T=U+(L+4)|0;c[T>>2]=c[T>>2]|1}n=U+8|0;return n|0}U=c[70821]|0;if(U>>>0>o>>>0){T=U-o|0;c[70821]=T;U=c[70824]|0;L=U;c[70824]=L+o;c[L+(o+4)>>2]=T|1;c[U+4>>2]=o|3;n=U+8|0;return n|0}do{if((c[19636]|0)==0){U=Ib(30)|0;if((U-1&U|0)==0){c[19638]=U;c[19637]=U;c[19639]=-1;c[19640]=-1;c[19641]=0;c[70929]=0;c[19636]=(Yb(0)|0)&-16^1431655768;break}else{Mb();return 0}}}while(0);U=o+48|0;T=c[19638]|0;L=o+47|0;K=T+L|0;S=-T|0;T=K&S;if(!(T>>>0>o>>>0)){n=0;return n|0}R=c[70928]|0;do{if((R|0)!=0){P=c[70926]|0;Q=P+T|0;if(Q>>>0<=P>>>0|Q>>>0>R>>>0){n=0}else{break}return n|0}}while(0);f:do{if((c[70929]&4|0)==0){R=c[70824]|0;g:do{if((R|0)==0){V=181}else{Q=R;P=283720;while(1){W=P|0;M=c[W>>2]|0;if(!(M>>>0>Q>>>0)){X=P+4|0;if((M+(c[X>>2]|0)|0)>>>0>Q>>>0){break}}M=c[P+8>>2]|0;if((M|0)==0){V=181;break g}else{P=M}}if((P|0)==0){V=181;break}Q=K-(c[70821]|0)&S;if(!(Q>>>0<2147483647>>>0)){Y=0;break}j=yb(Q|0)|0;if((j|0)==((c[W>>2]|0)+(c[X>>2]|0)|0)){Z=j;_=Q;V=190}else{$=Q;aa=j;V=191}}}while(0);do{if((V|0)==181){R=yb(0)|0;if((R|0)==-1){Y=0;break}j=R;Q=c[19637]|0;M=Q-1|0;if((M&j|0)==0){ba=T}else{ba=T-j+(M+j&-Q)|0}Q=c[70926]|0;j=Q+ba|0;if(!(ba>>>0>o>>>0&ba>>>0<2147483647>>>0)){Y=0;break}M=c[70928]|0;if((M|0)!=0){if(j>>>0<=Q>>>0|j>>>0>M>>>0){Y=0;break}}M=yb(ba|0)|0;if((M|0)==(R|0)){Z=R;_=ba;V=190}else{$=ba;aa=M;V=191}}}while(0);h:do{if((V|0)==190){if((Z|0)==-1){Y=_}else{ca=_;da=Z;V=201;break f}}else if((V|0)==191){M=-$|0;do{if((aa|0)!=-1&$>>>0<2147483647>>>0&U>>>0>$>>>0){R=c[19638]|0;j=L-$+R&-R;if(!(j>>>0<2147483647>>>0)){ea=$;break}if((yb(j|0)|0)==-1){yb(M|0)|0;Y=0;break h}else{ea=j+$|0;break}}else{ea=$}}while(0);if((aa|0)==-1){Y=0}else{ca=ea;da=aa;V=201;break f}}}while(0);c[70929]=c[70929]|4;fa=Y;V=198}else{fa=0;V=198}}while(0);do{if((V|0)==198){if(!(T>>>0<2147483647>>>0)){break}Y=yb(T|0)|0;aa=yb(0)|0;if(!((Y|0)!=-1&(aa|0)!=-1&Y>>>0<aa>>>0)){break}ea=aa-Y|0;aa=ea>>>0>(o+40|0)>>>0;if(aa){ca=aa?ea:fa;da=Y;V=201}}}while(0);do{if((V|0)==201){fa=(c[70926]|0)+ca|0;c[70926]=fa;if(fa>>>0>(c[70927]|0)>>>0){c[70927]=fa}fa=c[70824]|0;i:do{if((fa|0)==0){T=c[70822]|0;if((T|0)==0|da>>>0<T>>>0){c[70822]=da}c[70930]=da;c[70931]=ca;c[70933]=0;c[70827]=c[19636];c[70826]=-1;T=0;do{Y=T<<1;ea=283312+(Y<<2)|0;c[283312+(Y+3<<2)>>2]=ea;c[283312+(Y+2<<2)>>2]=ea;T=T+1|0;}while(T>>>0<32>>>0);T=da+8|0;if((T&7|0)==0){ga=0}else{ga=-T&7}T=ca-40-ga|0;c[70824]=da+ga;c[70821]=T;c[da+(ga+4)>>2]=T|1;c[da+(ca-36)>>2]=40;c[70825]=c[19640]}else{T=283720;while(1){ha=c[T>>2]|0;ia=T+4|0;ja=c[ia>>2]|0;if((da|0)==(ha+ja|0)){V=213;break}ea=c[T+8>>2]|0;if((ea|0)==0){break}else{T=ea}}do{if((V|0)==213){if((c[T+12>>2]&8|0)!=0){break}ea=fa;if(!(ea>>>0>=ha>>>0&ea>>>0<da>>>0)){break}c[ia>>2]=ja+ca;Y=(c[70821]|0)+ca|0;aa=fa+8|0;if((aa&7|0)==0){ka=0}else{ka=-aa&7}aa=Y-ka|0;c[70824]=ea+ka;c[70821]=aa;c[ea+(ka+4)>>2]=aa|1;c[ea+(Y+4)>>2]=40;c[70825]=c[19640];break i}}while(0);T=c[70822]|0;if(da>>>0<T>>>0){c[70822]=da;la=da}else{la=T}T=da+ca|0;Y=283720;while(1){ma=Y|0;if((c[ma>>2]|0)==(T|0)){V=223;break}ea=c[Y+8>>2]|0;if((ea|0)==0){break}else{Y=ea}}do{if((V|0)==223){if((c[Y+12>>2]&8|0)!=0){break}c[ma>>2]=da;T=Y+4|0;c[T>>2]=(c[T>>2]|0)+ca;T=da+8|0;if((T&7|0)==0){na=0}else{na=-T&7}T=da+(ca+8)|0;if((T&7|0)==0){oa=0}else{oa=-T&7}T=da+(oa+ca)|0;ea=T;aa=na+o|0;$=da+aa|0;L=$;U=T-(da+na)-o|0;c[da+(na+4)>>2]=o|3;j:do{if((ea|0)==(fa|0)){Z=(c[70821]|0)+U|0;c[70821]=Z;c[70824]=L;c[da+(aa+4)>>2]=Z|1}else{if((ea|0)==(c[70823]|0)){Z=(c[70820]|0)+U|0;c[70820]=Z;c[70823]=L;c[da+(aa+4)>>2]=Z|1;c[da+(Z+aa)>>2]=Z;break}Z=ca+4|0;_=c[da+(Z+oa)>>2]|0;if((_&3|0)==1){ba=_&-8;X=_>>>3;k:do{if(_>>>0<256>>>0){W=c[da+((oa|8)+ca)>>2]|0;S=c[da+(ca+12+oa)>>2]|0;K=283312+(X<<1<<2)|0;do{if((W|0)!=(K|0)){if(W>>>0<la>>>0){Mb();return 0}if((c[W+12>>2]|0)==(ea|0)){break}Mb();return 0}}while(0);if((S|0)==(W|0)){c[70818]=c[70818]&~(1<<X);break}do{if((S|0)==(K|0)){pa=S+8|0}else{if(S>>>0<la>>>0){Mb();return 0}M=S+8|0;if((c[M>>2]|0)==(ea|0)){pa=M;break}Mb();return 0}}while(0);c[W+12>>2]=S;c[pa>>2]=W}else{K=T;M=c[da+((oa|24)+ca)>>2]|0;P=c[da+(ca+12+oa)>>2]|0;do{if((P|0)==(K|0)){j=oa|16;R=da+(Z+j)|0;Q=c[R>>2]|0;if((Q|0)==0){N=da+(j+ca)|0;j=c[N>>2]|0;if((j|0)==0){qa=0;break}else{ra=j;sa=N}}else{ra=Q;sa=R}while(1){R=ra+20|0;Q=c[R>>2]|0;if((Q|0)!=0){ra=Q;sa=R;continue}R=ra+16|0;Q=c[R>>2]|0;if((Q|0)==0){break}else{ra=Q;sa=R}}if(sa>>>0<la>>>0){Mb();return 0}else{c[sa>>2]=0;qa=ra;break}}else{R=c[da+((oa|8)+ca)>>2]|0;if(R>>>0<la>>>0){Mb();return 0}Q=R+12|0;if((c[Q>>2]|0)!=(K|0)){Mb();return 0}N=P+8|0;if((c[N>>2]|0)==(K|0)){c[Q>>2]=P;c[N>>2]=R;qa=P;break}else{Mb();return 0}}}while(0);if((M|0)==0){break}P=c[da+(ca+28+oa)>>2]|0;W=283576+(P<<2)|0;do{if((K|0)==(c[W>>2]|0)){c[W>>2]=qa;if((qa|0)!=0){break}c[70819]=c[70819]&~(1<<P);break k}else{if(M>>>0<(c[70822]|0)>>>0){Mb();return 0}S=M+16|0;if((c[S>>2]|0)==(K|0)){c[S>>2]=qa}else{c[M+20>>2]=qa}if((qa|0)==0){break k}}}while(0);K=c[70822]|0;if(qa>>>0<K>>>0){Mb();return 0}c[qa+24>>2]=M;P=oa|16;W=c[da+(P+ca)>>2]|0;do{if((W|0)!=0){if(W>>>0<K>>>0){Mb();return 0}else{c[qa+16>>2]=W;c[W+24>>2]=qa;break}}}while(0);W=c[da+(Z+P)>>2]|0;if((W|0)==0){break}if(W>>>0<(c[70822]|0)>>>0){Mb();return 0}else{c[qa+20>>2]=W;c[W+24>>2]=qa;break}}}while(0);ta=da+((ba|oa)+ca)|0;ua=ba+U|0}else{ta=ea;ua=U}Z=ta+4|0;c[Z>>2]=c[Z>>2]&-2;c[da+(aa+4)>>2]=ua|1;c[da+(ua+aa)>>2]=ua;Z=ua>>>3;if(ua>>>0<256>>>0){X=Z<<1;_=283312+(X<<2)|0;W=c[70818]|0;K=1<<Z;do{if((W&K|0)==0){c[70818]=W|K;va=_;wa=283312+(X+2<<2)|0}else{Z=283312+(X+2<<2)|0;M=c[Z>>2]|0;if(!(M>>>0<(c[70822]|0)>>>0)){va=M;wa=Z;break}Mb();return 0}}while(0);c[wa>>2]=L;c[va+12>>2]=L;c[da+(aa+8)>>2]=va;c[da+(aa+12)>>2]=_;break}X=$;K=ua>>>8;do{if((K|0)==0){xa=0}else{if(ua>>>0>16777215>>>0){xa=31;break}W=(K+1048320|0)>>>16&8;ba=K<<W;Z=(ba+520192|0)>>>16&4;M=ba<<Z;ba=(M+245760|0)>>>16&2;S=14-(Z|W|ba)+(M<<ba>>>15)|0;xa=ua>>>((S+7|0)>>>0)&1|S<<1}}while(0);K=283576+(xa<<2)|0;c[da+(aa+28)>>2]=xa;c[da+(aa+20)>>2]=0;c[da+(aa+16)>>2]=0;_=c[70819]|0;S=1<<xa;if((_&S|0)==0){c[70819]=_|S;c[K>>2]=X;c[da+(aa+24)>>2]=K;c[da+(aa+12)>>2]=X;c[da+(aa+8)>>2]=X;break}S=c[K>>2]|0;if((xa|0)==31){ya=0}else{ya=25-(xa>>>1)|0}l:do{if((c[S+4>>2]&-8|0)==(ua|0)){za=S}else{K=S;_=ua<<ya;while(1){Aa=K+16+(_>>>31<<2)|0;ba=c[Aa>>2]|0;if((ba|0)==0){break}if((c[ba+4>>2]&-8|0)==(ua|0)){za=ba;break l}else{K=ba;_=_<<1}}if(Aa>>>0<(c[70822]|0)>>>0){Mb();return 0}else{c[Aa>>2]=X;c[da+(aa+24)>>2]=K;c[da+(aa+12)>>2]=X;c[da+(aa+8)>>2]=X;break j}}}while(0);S=za+8|0;_=c[S>>2]|0;P=c[70822]|0;if(za>>>0>=P>>>0&_>>>0>=P>>>0){c[_+12>>2]=X;c[S>>2]=X;c[da+(aa+8)>>2]=_;c[da+(aa+12)>>2]=za;c[da+(aa+24)>>2]=0;break}else{Mb();return 0}}}while(0);n=da+(na|8)|0;return n|0}}while(0);Y=fa;aa=283720;while(1){Ba=c[aa>>2]|0;if(!(Ba>>>0>Y>>>0)){Ca=c[aa+4>>2]|0;Da=Ba+Ca|0;if(Da>>>0>Y>>>0){break}}aa=c[aa+8>>2]|0}aa=Ba+(Ca-39)|0;if((aa&7|0)==0){Ea=0}else{Ea=-aa&7}aa=Ba+(Ca-47+Ea)|0;$=aa>>>0<(fa+16|0)>>>0?Y:aa;aa=$+8|0;L=da+8|0;if((L&7|0)==0){Fa=0}else{Fa=-L&7}L=ca-40-Fa|0;c[70824]=da+Fa;c[70821]=L;c[da+(Fa+4)>>2]=L|1;c[da+(ca-36)>>2]=40;c[70825]=c[19640];c[$+4>>2]=27;c[aa>>2]=c[70930];c[aa+4>>2]=c[70931];c[aa+8>>2]=c[70932];c[aa+12>>2]=c[70933];c[70930]=da;c[70931]=ca;c[70933]=0;c[70932]=aa;aa=$+28|0;c[aa>>2]=7;if(($+32|0)>>>0<Da>>>0){L=aa;while(1){aa=L+4|0;c[aa>>2]=7;if((L+8|0)>>>0<Da>>>0){L=aa}else{break}}}if(($|0)==(Y|0)){break}L=$-fa|0;aa=Y+(L+4)|0;c[aa>>2]=c[aa>>2]&-2;c[fa+4>>2]=L|1;c[Y+L>>2]=L;aa=L>>>3;if(L>>>0<256>>>0){U=aa<<1;ea=283312+(U<<2)|0;T=c[70818]|0;g=1<<aa;do{if((T&g|0)==0){c[70818]=T|g;Ga=ea;Ha=283312+(U+2<<2)|0}else{aa=283312+(U+2<<2)|0;_=c[aa>>2]|0;if(!(_>>>0<(c[70822]|0)>>>0)){Ga=_;Ha=aa;break}Mb();return 0}}while(0);c[Ha>>2]=fa;c[Ga+12>>2]=fa;c[fa+8>>2]=Ga;c[fa+12>>2]=ea;break}U=fa;g=L>>>8;do{if((g|0)==0){Ia=0}else{if(L>>>0>16777215>>>0){Ia=31;break}T=(g+1048320|0)>>>16&8;Y=g<<T;$=(Y+520192|0)>>>16&4;aa=Y<<$;Y=(aa+245760|0)>>>16&2;_=14-($|T|Y)+(aa<<Y>>>15)|0;Ia=L>>>((_+7|0)>>>0)&1|_<<1}}while(0);g=283576+(Ia<<2)|0;c[fa+28>>2]=Ia;c[fa+20>>2]=0;c[fa+16>>2]=0;ea=c[70819]|0;_=1<<Ia;if((ea&_|0)==0){c[70819]=ea|_;c[g>>2]=U;c[fa+24>>2]=g;c[fa+12>>2]=fa;c[fa+8>>2]=fa;break}_=c[g>>2]|0;if((Ia|0)==31){Ja=0}else{Ja=25-(Ia>>>1)|0}m:do{if((c[_+4>>2]&-8|0)==(L|0)){Ka=_}else{g=_;ea=L<<Ja;while(1){La=g+16+(ea>>>31<<2)|0;Y=c[La>>2]|0;if((Y|0)==0){break}if((c[Y+4>>2]&-8|0)==(L|0)){Ka=Y;break m}else{g=Y;ea=ea<<1}}if(La>>>0<(c[70822]|0)>>>0){Mb();return 0}else{c[La>>2]=U;c[fa+24>>2]=g;c[fa+12>>2]=fa;c[fa+8>>2]=fa;break i}}}while(0);L=Ka+8|0;_=c[L>>2]|0;ea=c[70822]|0;if(Ka>>>0>=ea>>>0&_>>>0>=ea>>>0){c[_+12>>2]=U;c[L>>2]=U;c[fa+8>>2]=_;c[fa+12>>2]=Ka;c[fa+24>>2]=0;break}else{Mb();return 0}}}while(0);fa=c[70821]|0;if(!(fa>>>0>o>>>0)){break}_=fa-o|0;c[70821]=_;fa=c[70824]|0;L=fa;c[70824]=L+o;c[L+(o+4)>>2]=_|1;c[fa+4>>2]=o|3;n=fa+8|0;return n|0}}while(0);c[(Ab()|0)>>2]=12;n=0;return n|0}function Kf(a){a=a|0;var b=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0,v=0,w=0,x=0,y=0,z=0,A=0,B=0,C=0,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=0,O=0;if((a|0)==0){return}b=a-8|0;d=b;e=c[70822]|0;if(b>>>0<e>>>0){Mb()}f=c[a-4>>2]|0;g=f&3;if((g|0)==1){Mb()}h=f&-8;i=a+(h-8)|0;j=i;a:do{if((f&1|0)==0){k=c[b>>2]|0;if((g|0)==0){return}l=-8-k|0;m=a+l|0;n=m;o=k+h|0;if(m>>>0<e>>>0){Mb()}if((n|0)==(c[70823]|0)){p=a+(h-4)|0;q=c[p>>2]|0;if((q&3|0)!=3){r=n;s=o;break}c[70820]=o;c[p>>2]=q&-2;c[a+(l+4)>>2]=o|1;c[i>>2]=o;return}q=k>>>3;if(k>>>0<256>>>0){k=c[a+(l+8)>>2]|0;p=c[a+(l+12)>>2]|0;t=283312+(q<<1<<2)|0;do{if((k|0)!=(t|0)){if(k>>>0<e>>>0){Mb()}if((c[k+12>>2]|0)==(n|0)){break}Mb()}}while(0);if((p|0)==(k|0)){c[70818]=c[70818]&~(1<<q);r=n;s=o;break}do{if((p|0)==(t|0)){u=p+8|0}else{if(p>>>0<e>>>0){Mb()}v=p+8|0;if((c[v>>2]|0)==(n|0)){u=v;break}Mb()}}while(0);c[k+12>>2]=p;c[u>>2]=k;r=n;s=o;break}t=m;q=c[a+(l+24)>>2]|0;v=c[a+(l+12)>>2]|0;do{if((v|0)==(t|0)){w=a+(l+20)|0;x=c[w>>2]|0;if((x|0)==0){y=a+(l+16)|0;z=c[y>>2]|0;if((z|0)==0){A=0;break}else{B=z;C=y}}else{B=x;C=w}while(1){w=B+20|0;x=c[w>>2]|0;if((x|0)!=0){B=x;C=w;continue}w=B+16|0;x=c[w>>2]|0;if((x|0)==0){break}else{B=x;C=w}}if(C>>>0<e>>>0){Mb()}else{c[C>>2]=0;A=B;break}}else{w=c[a+(l+8)>>2]|0;if(w>>>0<e>>>0){Mb()}x=w+12|0;if((c[x>>2]|0)!=(t|0)){Mb()}y=v+8|0;if((c[y>>2]|0)==(t|0)){c[x>>2]=v;c[y>>2]=w;A=v;break}else{Mb()}}}while(0);if((q|0)==0){r=n;s=o;break}v=c[a+(l+28)>>2]|0;m=283576+(v<<2)|0;do{if((t|0)==(c[m>>2]|0)){c[m>>2]=A;if((A|0)!=0){break}c[70819]=c[70819]&~(1<<v);r=n;s=o;break a}else{if(q>>>0<(c[70822]|0)>>>0){Mb()}k=q+16|0;if((c[k>>2]|0)==(t|0)){c[k>>2]=A}else{c[q+20>>2]=A}if((A|0)==0){r=n;s=o;break a}}}while(0);t=c[70822]|0;if(A>>>0<t>>>0){Mb()}c[A+24>>2]=q;v=c[a+(l+16)>>2]|0;do{if((v|0)!=0){if(v>>>0<t>>>0){Mb()}else{c[A+16>>2]=v;c[v+24>>2]=A;break}}}while(0);v=c[a+(l+20)>>2]|0;if((v|0)==0){r=n;s=o;break}if(v>>>0<(c[70822]|0)>>>0){Mb()}else{c[A+20>>2]=v;c[v+24>>2]=A;r=n;s=o;break}}else{r=d;s=h}}while(0);d=r;if(!(d>>>0<i>>>0)){Mb()}A=a+(h-4)|0;e=c[A>>2]|0;if((e&1|0)==0){Mb()}do{if((e&2|0)==0){if((j|0)==(c[70824]|0)){B=(c[70821]|0)+s|0;c[70821]=B;c[70824]=r;c[r+4>>2]=B|1;if((r|0)!=(c[70823]|0)){return}c[70823]=0;c[70820]=0;return}if((j|0)==(c[70823]|0)){B=(c[70820]|0)+s|0;c[70820]=B;c[70823]=r;c[r+4>>2]=B|1;c[d+B>>2]=B;return}B=(e&-8)+s|0;C=e>>>3;b:do{if(e>>>0<256>>>0){u=c[a+h>>2]|0;g=c[a+(h|4)>>2]|0;b=283312+(C<<1<<2)|0;do{if((u|0)!=(b|0)){if(u>>>0<(c[70822]|0)>>>0){Mb()}if((c[u+12>>2]|0)==(j|0)){break}Mb()}}while(0);if((g|0)==(u|0)){c[70818]=c[70818]&~(1<<C);break}do{if((g|0)==(b|0)){D=g+8|0}else{if(g>>>0<(c[70822]|0)>>>0){Mb()}f=g+8|0;if((c[f>>2]|0)==(j|0)){D=f;break}Mb()}}while(0);c[u+12>>2]=g;c[D>>2]=u}else{b=i;f=c[a+(h+16)>>2]|0;v=c[a+(h|4)>>2]|0;do{if((v|0)==(b|0)){t=a+(h+12)|0;q=c[t>>2]|0;if((q|0)==0){m=a+(h+8)|0;k=c[m>>2]|0;if((k|0)==0){E=0;break}else{F=k;G=m}}else{F=q;G=t}while(1){t=F+20|0;q=c[t>>2]|0;if((q|0)!=0){F=q;G=t;continue}t=F+16|0;q=c[t>>2]|0;if((q|0)==0){break}else{F=q;G=t}}if(G>>>0<(c[70822]|0)>>>0){Mb()}else{c[G>>2]=0;E=F;break}}else{t=c[a+h>>2]|0;if(t>>>0<(c[70822]|0)>>>0){Mb()}q=t+12|0;if((c[q>>2]|0)!=(b|0)){Mb()}m=v+8|0;if((c[m>>2]|0)==(b|0)){c[q>>2]=v;c[m>>2]=t;E=v;break}else{Mb()}}}while(0);if((f|0)==0){break}v=c[a+(h+20)>>2]|0;u=283576+(v<<2)|0;do{if((b|0)==(c[u>>2]|0)){c[u>>2]=E;if((E|0)!=0){break}c[70819]=c[70819]&~(1<<v);break b}else{if(f>>>0<(c[70822]|0)>>>0){Mb()}g=f+16|0;if((c[g>>2]|0)==(b|0)){c[g>>2]=E}else{c[f+20>>2]=E}if((E|0)==0){break b}}}while(0);b=c[70822]|0;if(E>>>0<b>>>0){Mb()}c[E+24>>2]=f;v=c[a+(h+8)>>2]|0;do{if((v|0)!=0){if(v>>>0<b>>>0){Mb()}else{c[E+16>>2]=v;c[v+24>>2]=E;break}}}while(0);v=c[a+(h+12)>>2]|0;if((v|0)==0){break}if(v>>>0<(c[70822]|0)>>>0){Mb()}else{c[E+20>>2]=v;c[v+24>>2]=E;break}}}while(0);c[r+4>>2]=B|1;c[d+B>>2]=B;if((r|0)!=(c[70823]|0)){H=B;break}c[70820]=B;return}else{c[A>>2]=e&-2;c[r+4>>2]=s|1;c[d+s>>2]=s;H=s}}while(0);s=H>>>3;if(H>>>0<256>>>0){d=s<<1;e=283312+(d<<2)|0;A=c[70818]|0;E=1<<s;do{if((A&E|0)==0){c[70818]=A|E;I=e;J=283312+(d+2<<2)|0}else{s=283312+(d+2<<2)|0;h=c[s>>2]|0;if(!(h>>>0<(c[70822]|0)>>>0)){I=h;J=s;break}Mb()}}while(0);c[J>>2]=r;c[I+12>>2]=r;c[r+8>>2]=I;c[r+12>>2]=e;return}e=r;I=H>>>8;do{if((I|0)==0){K=0}else{if(H>>>0>16777215>>>0){K=31;break}J=(I+1048320|0)>>>16&8;d=I<<J;E=(d+520192|0)>>>16&4;A=d<<E;d=(A+245760|0)>>>16&2;s=14-(E|J|d)+(A<<d>>>15)|0;K=H>>>((s+7|0)>>>0)&1|s<<1}}while(0);I=283576+(K<<2)|0;c[r+28>>2]=K;c[r+20>>2]=0;c[r+16>>2]=0;s=c[70819]|0;d=1<<K;c:do{if((s&d|0)==0){c[70819]=s|d;c[I>>2]=e;c[r+24>>2]=I;c[r+12>>2]=r;c[r+8>>2]=r}else{A=c[I>>2]|0;if((K|0)==31){L=0}else{L=25-(K>>>1)|0}d:do{if((c[A+4>>2]&-8|0)==(H|0)){M=A}else{J=A;E=H<<L;while(1){N=J+16+(E>>>31<<2)|0;h=c[N>>2]|0;if((h|0)==0){break}if((c[h+4>>2]&-8|0)==(H|0)){M=h;break d}else{J=h;E=E<<1}}if(N>>>0<(c[70822]|0)>>>0){Mb()}else{c[N>>2]=e;c[r+24>>2]=J;c[r+12>>2]=r;c[r+8>>2]=r;break c}}}while(0);A=M+8|0;B=c[A>>2]|0;E=c[70822]|0;if(M>>>0>=E>>>0&B>>>0>=E>>>0){c[B+12>>2]=e;c[A>>2]=e;c[r+8>>2]=B;c[r+12>>2]=M;c[r+24>>2]=0;break}else{Mb()}}}while(0);r=(c[70826]|0)-1|0;c[70826]=r;if((r|0)==0){O=283728}else{return}while(1){r=c[O>>2]|0;if((r|0)==0){break}else{O=r+8|0}}c[70826]=-1;return}function Lf(b,c){b=b|0;c=c|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0;d=a[b]|0;e=a[c]|0;if(d<<24>>24!=e<<24>>24|d<<24>>24==0|e<<24>>24==0){f=d;g=e;h=f&255;i=g&255;j=h-i|0;return j|0}else{k=b;l=c}while(1){c=k+1|0;b=l+1|0;e=a[c]|0;d=a[b]|0;if(e<<24>>24!=d<<24>>24|e<<24>>24==0|d<<24>>24==0){f=e;g=d;break}else{k=c;l=b}}h=f&255;i=g&255;j=h-i|0;return j|0}function Mf(b,c,e){b=b|0;c=c|0;e=e|0;var f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0;if((e|0)==0){f=0;return f|0}g=a[b]|0;a:do{if(g<<24>>24==0){h=c;i=0}else{j=b;k=c;l=e;m=g;while(1){n=l-1|0;o=a[k]|0;if(!(o<<24>>24!=0&(n|0)!=0&m<<24>>24==o<<24>>24)){h=k;i=m;break a}o=j+1|0;p=k+1|0;q=a[o]|0;if(q<<24>>24==0){h=p;i=0;break}else{j=o;k=p;l=n;m=q}}}}while(0);f=(i&255)-(d[h]|0)|0;return f|0}function Nf(b,d,e){b=b|0;d=d|0;e=e|0;var f=0;if((e|0)>=4096)return ab(b|0,d|0,e|0)|0;f=b|0;if((b&3)==(d&3)){while(b&3){if((e|0)==0)return f|0;a[b]=a[d]|0;b=b+1|0;d=d+1|0;e=e-1|0}while((e|0)>=4){c[b>>2]=c[d>>2];b=b+4|0;d=d+4|0;e=e-4|0}}while((e|0)>0){a[b]=a[d]|0;b=b+1|0;d=d+1|0;e=e-1|0}return f|0}function Of(b){b=b|0;var c=0;c=b;while(a[c]|0){c=c+1|0}return c-b|0}function Pf(b,c,d){b=b|0;c=c|0;d=d|0;var e=0,f=0;while((e|0)<(d|0)){a[b+e|0]=f?0:a[c+e|0]|0;f=f?1:(a[c+e|0]|0)==0;e=e+1|0}return b|0}function Qf(b,c){b=b|0;c=c|0;var d=0;do{a[b+d|0]=a[c+d|0];d=d+1|0}while(a[c+(d-1)|0]|0);return b|0}function Rf(b,c){b=b|0;c=c|0;var d=0,e=0;d=b+(Of(b)|0)|0;do{a[d+e|0]=a[c+e|0];e=e+1|0}while(a[c+(e-1)|0]|0);return b|0}function Sf(a){a=a|0;var b=0;b=(aa(c[a>>2]|0,31010991)|0)+1735287159&2147483647;c[a>>2]=b;return b|0}function Tf(){return Sf(m)|0}function Uf(b,d,e){b=b|0;d=d|0;e=e|0;var f=0,g=0,h=0,i=0;f=b+e|0;if((e|0)>=20){d=d&255;g=b&3;h=d|d<<8|d<<16|d<<24;i=f&~3;if(g){g=b+4-g|0;while((b|0)<(g|0)){a[b]=d;b=b+1|0}}while((b|0)<(i|0)){c[b>>2]=h;b=b+4|0}}while((b|0)<(f|0)){a[b]=d;b=b+1|0}return b-e|0}function Vf(a,b){a=a|0;b=b|0;return kc[a&1](b|0)|0}function Wf(a){a=a|0;lc[a&7]()}function Xf(a,b,c){a=a|0;b=b|0;c=c|0;return mc[a&3](b|0,c|0)|0}function Yf(a,b){a=a|0;b=b|0;nc[a&15](b|0)}function Zf(a){a=a|0;ba(0);return 0}function _f(){ba(1)}function $f(a,b){a=a|0;b=b|0;ba(2);return 0}function ag(a){a=a|0;ba(3)}




// EMSCRIPTEN_END_FUNCS
var kc=[Zf,Zf];var lc=[_f,_f,wd,_f,xf,_f,Jd,_f];var mc=[$f,$f,Kd,$f];var nc=[ag,ag,Nd,ag,ne,ag,Ld,ag,Md,ag,ag,ag,ag,ag,ag,ag];return{_strlen:Of,_strcat:Rf,_free:Kf,_main:Id,_rand_r:Sf,_strncpy:Pf,_memset:Uf,_malloc:Jf,_memcpy:Nf,_strcpy:Qf,_rand:Tf,runPostSets:Ec,stackAlloc:oc,stackSave:pc,stackRestore:qc,setThrew:rc,setTempRet0:uc,setTempRet1:vc,setTempRet2:wc,setTempRet3:xc,setTempRet4:yc,setTempRet5:zc,setTempRet6:Ac,setTempRet7:Bc,setTempRet8:Cc,setTempRet9:Dc,dynCall_ii:Vf,dynCall_v:Wf,dynCall_iii:Xf,dynCall_vi:Yf}})


// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_vi": invoke_vi, "_Mix_VolumeMusic": _Mix_VolumeMusic, "__scanString": __scanString, "_fclose": _fclose, "_Mix_Volume": _Mix_Volume, "_Mix_Playing": _Mix_Playing, "_SDL_JoystickOpen": _SDL_JoystickOpen, "_fflush": _fflush, "_SDL_ShowCursor": _SDL_ShowCursor, "_Mix_PlayChannel": _Mix_PlayChannel, "_fwrite": _fwrite, "_send": _send, "_SDL_SetAlpha": _SDL_SetAlpha, "_SDL_NumJoysticks": _SDL_NumJoysticks, "_read": _read, "_Mix_OpenAudio": _Mix_OpenAudio, "_SDL_WM_SetIcon": _SDL_WM_SetIcon, "_ceil": _ceil, "_fileno": _fileno, "_strstr": _strstr, "_fsync": _fsync, "_fscanf": _fscanf, "_SDL_PauseAudio": _SDL_PauseAudio, "_opendir": _opendir, "_SDL_JoystickIndex": _SDL_JoystickIndex, "_SDL_JoystickName": _SDL_JoystickName, "_SDL_SetColorKey": _SDL_SetColorKey, "_SDL_EnableKeyRepeat": _SDL_EnableKeyRepeat, "_SDL_RWFromFile": _SDL_RWFromFile, "_fgetc": _fgetc, "_readdir": _readdir, "__getFloat": __getFloat, "_SDL_JoystickClose": _SDL_JoystickClose, "_mknod": _mknod, "_fgets": _fgets, "_close": _close, "_SDL_FillRect": _SDL_FillRect, "_fopen": _fopen, "___setErrNo": ___setErrNo, "_abs": _abs, "_exit": _exit, "_sprintf": _sprintf, "_Mix_PauseMusic": _Mix_PauseMusic, "_Mix_LoadMUS": _Mix_LoadMUS, "_Mix_HookMusicFinished": _Mix_HookMusicFinished, "_emscripten_memcpy_big": _emscripten_memcpy_big, "_recv": _recv, "_SDL_UnlockSurface": _SDL_UnlockSurface, "_SDL_Init": _SDL_Init, "_mkport": _mkport, "__exit": __exit, "_SDL_FreeRW": _SDL_FreeRW, "_SDL_AddTimer": _SDL_AddTimer, "_SDL_JoystickNumButtons": _SDL_JoystickNumButtons, "_printf": _printf, "_pread": _pread, "_SDL_SetVideoMode": _SDL_SetVideoMode, "_SDL_LockSurface": _SDL_LockSurface, "_open": _open, "_snprintf": _snprintf, "_SDL_PollEvent": _SDL_PollEvent, "_SDL_RemoveTimer": _SDL_RemoveTimer, "_SDL_Flip": _SDL_Flip, "_mkdir": _mkdir, "_Mix_HaltMusic": _Mix_HaltMusic, "_SDL_GetError": _SDL_GetError, "__formatString": __formatString, "_getenv": _getenv, "_SDL_WM_SetCaption": _SDL_WM_SetCaption, "_sbrk": _sbrk, "_atexit": _atexit, "___errno_location": ___errno_location, "_SDL_CloseAudio": _SDL_CloseAudio, "_SDL_PushEvent": _SDL_PushEvent, "_SDL_Quit": _SDL_Quit, "_ungetc": _ungetc, "_IMG_Load": _IMG_Load, "_rename": _rename, "_sscanf": _sscanf, "_sysconf": _sysconf, "_SDL_MapRGB": _SDL_MapRGB, "_fread": _fread, "_SDL_WM_ToggleFullScreen": _SDL_WM_ToggleFullScreen, "_abort": _abort, "_fprintf": _fprintf, "___buildEnvironment": ___buildEnvironment, "_feof": _feof, "_strncat": _strncat, "_SDL_DisplayFormatAlpha": _SDL_DisplayFormatAlpha, "__reallyNegative": __reallyNegative, "_write": _write, "_SDL_UpperBlit": _SDL_UpperBlit, "_SDL_CreateRGBSurface": _SDL_CreateRGBSurface, "_SDL_ListModes": _SDL_ListModes, "_emscripten_set_main_loop": _emscripten_set_main_loop, "_time": _time, "_IMG_Load_RW": _IMG_Load_RW, "_Mix_FreeChunk": _Mix_FreeChunk, "_closedir": _closedir, "_Mix_LoadWAV_RW": _Mix_LoadWAV_RW, "_SDL_JoystickEventState": _SDL_JoystickEventState, "_unlink": _unlink, "_Mix_AllocateChannels": _Mix_AllocateChannels, "_pwrite": _pwrite, "_Mix_ResumeMusic": _Mix_ResumeMusic, "_Mix_PlayMusic": _Mix_PlayMusic, "_SDL_FreeSurface": _SDL_FreeSurface, "_readdir_r": _readdir_r, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "___rand_seed": ___rand_seed, "NaN": NaN, "Infinity": Infinity, "_stdout": _stdout, "_stderr": _stderr }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _strcat = Module["_strcat"] = asm["_strcat"];
var _free = Module["_free"] = asm["_free"];
var _main = Module["_main"] = asm["_main"];
var _rand_r = Module["_rand_r"] = asm["_rand_r"];
var _strncpy = Module["_strncpy"] = asm["_strncpy"];
var _memset = Module["_memset"] = asm["_memset"];
var _malloc = Module["_malloc"] = asm["_malloc"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _strcpy = Module["_strcpy"] = asm["_strcpy"];
var _rand = Module["_rand"] = asm["_rand"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];

Runtime.stackAlloc = function(size) { return asm['stackAlloc'](size) };
Runtime.stackSave = function() { return asm['stackSave']() };
Runtime.stackRestore = function(top) { asm['stackRestore'](top) };

// Warning: printing of i64 values may be slightly rounded! No deep i64 math used, so precise i64 code not included
var i64Math = null;

// === Auto-generated postamble setup entry stuff ===

if (memoryInitializer) {
  function applyData(data) {
    HEAPU8.set(data, STATIC_BASE);
  }
  if (ENVIRONMENT_IS_NODE || ENVIRONMENT_IS_SHELL) {
    applyData(Module['readBinary'](memoryInitializer));
  } else {
    addRunDependency('memory initializer');
    Browser.asyncLoad(memoryInitializer, function(data) {
      applyData(data);
      removeRunDependency('memory initializer');
    }, function(data) {
      throw 'could not load memory initializer ' + memoryInitializer;
    });
  }
}

function ExitStatus(status) {
  this.name = "ExitStatus";
  this.message = "Program terminated with exit(" + status + ")";
  this.status = status;
};
ExitStatus.prototype = new Error();
ExitStatus.prototype.constructor = ExitStatus;

var initialStackTop;
var preloadStartTime = null;
var calledMain = false;

dependenciesFulfilled = function runCaller() {
  // If run has never been called, and we should call run (INVOKE_RUN is true, and Module.noInitialRun is not false)
  if (!Module['calledRun'] && shouldRunNow) run();
  if (!Module['calledRun']) dependenciesFulfilled = runCaller; // try this again later, after new deps are fulfilled
}

Module['callMain'] = Module.callMain = function callMain(args) {
  assert(runDependencies == 0, 'cannot call main when async dependencies remain! (listen on __ATMAIN__)');
  assert(__ATPRERUN__.length == 0, 'cannot call main when preRun functions remain to be called');

  args = args || [];

  if (ENVIRONMENT_IS_WEB && preloadStartTime !== null) {
    Module.printErr('preload time: ' + (Date.now() - preloadStartTime) + ' ms');
  }

  ensureInitRuntime();

  var argc = args.length+1;
  function pad() {
    for (var i = 0; i < 4-1; i++) {
      argv.push(0);
    }
  }
  var argv = [allocate(intArrayFromString("/bin/this.program"), 'i8', ALLOC_NORMAL) ];
  pad();
  for (var i = 0; i < argc-1; i = i + 1) {
    argv.push(allocate(intArrayFromString(args[i]), 'i8', ALLOC_NORMAL));
    pad();
  }
  argv.push(0);
  argv = allocate(argv, 'i32', ALLOC_NORMAL);

  initialStackTop = STACKTOP;

  try {

    var ret = Module['_main'](argc, argv, 0);


    // if we're not running an evented main loop, it's time to exit
    if (!Module['noExitRuntime']) {
      exit(ret);
    }
  }
  catch(e) {
    if (e instanceof ExitStatus) {
      // exit() throws this once it's done to make sure execution
      // has been stopped completely
      return;
    } else if (e == 'SimulateInfiniteLoop') {
      // running an evented main loop, don't immediately exit
      Module['noExitRuntime'] = true;
      return;
    } else {
      if (e && typeof e === 'object' && e.stack) Module.printErr('exception thrown: ' + [e, e.stack]);
      throw e;
    }
  } finally {
    calledMain = true;
  }
}




function run(args) {
  args = args || Module['arguments'];

  if (preloadStartTime === null) preloadStartTime = Date.now();

  if (runDependencies > 0) {
    Module.printErr('run() called, but dependencies remain, so not running');
    return;
  }

  preRun();

  if (runDependencies > 0) return; // a preRun added a dependency, run will be called later
  if (Module['calledRun']) return; // run may have just been called through dependencies being fulfilled just in this very frame

  function doRun() {
    if (Module['calledRun']) return; // run may have just been called while the async setStatus time below was happening
    Module['calledRun'] = true;

    ensureInitRuntime();

    preMain();

    if (Module['_main'] && shouldRunNow) {
      Module['callMain'](args);
    }

    postRun();
  }

  if (Module['setStatus']) {
    Module['setStatus']('Running...');
    setTimeout(function() {
      setTimeout(function() {
        Module['setStatus']('');
      }, 1);
      if (!ABORT) doRun();
    }, 1);
  } else {
    doRun();
  }
}
Module['run'] = Module.run = run;

function exit(status) {
  ABORT = true;
  EXITSTATUS = status;
  STACKTOP = initialStackTop;

  // exit the runtime
  exitRuntime();

  // TODO We should handle this differently based on environment.
  // In the browser, the best we can do is throw an exception
  // to halt execution, but in node we could process.exit and
  // I'd imagine SM shell would have something equivalent.
  // This would let us set a proper exit status (which
  // would be great for checking test exit statuses).
  // https://github.com/kripken/emscripten/issues/1371

  // throw an exception to halt the current execution
  throw new ExitStatus(status);
}
Module['exit'] = Module.exit = exit;

function abort(text) {
  if (text) {
    Module.print(text);
    Module.printErr(text);
  }

  ABORT = true;
  EXITSTATUS = 1;

  throw 'abort() at ' + stackTrace();
}
Module['abort'] = Module.abort = abort;

// {{PRE_RUN_ADDITIONS}}

if (Module['preInit']) {
  if (typeof Module['preInit'] == 'function') Module['preInit'] = [Module['preInit']];
  while (Module['preInit'].length > 0) {
    Module['preInit'].pop()();
  }
}

// shouldRunNow refers to calling main(), not run().
var shouldRunNow = true;
if (Module['noInitialRun']) {
  shouldRunNow = false;
}


run();

// {{POST_RUN_ADDITIONS}}






// {{MODULE_ADDITIONS}}






