tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Noto Sans JP"', 'Inter', 'sans-serif'],
            },
        }
    }
};

const typeColors = {
    "ノーマル": { bg: "bg-slate-400", text: "text-white" },
    "ほのお": { bg: "bg-orange-500", text: "text-white" },
    "みず": { bg: "bg-blue-500", text: "text-white" },
    "でんき": { bg: "bg-amber-400", text: "text-slate-900" },
    "くさ": { bg: "bg-emerald-500", text: "text-white" },
    "こおり": { bg: "bg-cyan-400", text: "text-slate-900" },
    "かくとう": { bg: "bg-rose-600", text: "text-white" },
    "どく": { bg: "bg-purple-500", text: "text-white" },
    "じめん": { bg: "bg-amber-600", text: "text-white" },
    "ひこう": { bg: "bg-indigo-400", text: "text-white" },
    "エスパー": { bg: "bg-pink-500", text: "text-white" },
    "むし": { bg: "bg-lime-500", text: "text-slate-900" },
    "いわ": { bg: "bg-stone-500", text: "text-white" },
    "ゴースト": { bg: "bg-violet-700", text: "text-white" },
    "ドラゴン": { bg: "bg-blue-700", text: "text-white" },
    "あく": { bg: "bg-zinc-800", text: "text-white" },
    "はがね": { bg: "bg-slate-500", text: "text-white" },
    "フェアリー": { bg: "bg-pink-300", text: "text-slate-900" }
};

const typeEnToJp = {
    "normal": "ノーマル", "fire": "ほのお", "water": "みず", "electric": "でんき",
    "grass": "くさ", "ice": "こおり", "fighting": "かくとう", "poison": "どく",
    "ground": "じめん", "flying": "ひこう", "psychic": "エスパー", "bug": "むし",
    "rock": "いわ", "ghost": "ゴースト", "dragon": "ドラゴン", "dark": "あく",
};

// オフライン・通信遮断時でも100%確実に表示される安全なインラインSVGモンスターボール
const POKEBALL_FALLBACK_SVG = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='46' fill='%23ef4444' stroke='%231e293b' stroke-width='6'/%3E%3Cpath d='M 4 50 A 46 46 0 0 0 96 50 Z' fill='%23ffffff' stroke='%231e293b' stroke-width='6'/%3E%3Cline x1='4' y1='50' x2='96' y2='50' stroke='%231e293b' stroke-width='6'/%3E%3Ccircle cx='50' cy='50' r='14' fill='%23ffffff' stroke='%231e293b' stroke-width='6'/%3E%3Ccircle cx='50' cy='50' r='6' fill='%2394a3b8'/%3E%3C/svg%3E";
window.POKEBALL_FALLBACK_SVG = POKEBALL_FALLBACK_SVG;

// 画像ロードエラー時の安全な多段階フォールバック処理（特殊フォルム破損時は通常種アートワークへ、それでもダメならモンスターボールへ）
window.handlePokemonImageError = function(imgEl, baseId) {
    if (!imgEl) return;
    imgEl.onerror = null; // 無限ループ抑止

    // 1. 特殊フォルム等の画像が取得できない場合、まず通常種(baseId)の公式アートワークを試す
    if (baseId && !imgEl.dataset.fallbackAttempted) {
        imgEl.dataset.fallbackAttempted = 'base';
        imgEl.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${baseId}.png`;
        imgEl.onerror = function() {
            this.onerror = null;
            this.src = POKEBALL_FALLBACK_SVG;
        };
        return;
    }

    // 2. それでも取得できない場合は確実にインラインSVGモンスターボールを表示
    imgEl.src = POKEBALL_FALLBACK_SVG;
};

const EMBEDDED_FALLBACK_POKEMON = [
    // 通常種
    { id: 1, baseId: 1, name: "フシギダネ", _baseSpeciesName: "フシギダネ", formType: "normal", formLabel: "通常", types: ["くさ", "どく"], hp: 45, atk: 49, def: 49, spa: 65, spd: 65, spe: 45, total: 318, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1.ogg" },
    { id: 4, baseId: 4, name: "ヒトカゲ", _baseSpeciesName: "ヒトカゲ", formType: "normal", formLabel: "通常", types: ["ほのお"], hp: 39, atk: 52, def: 43, spa: 60, spd: 50, spe: 65, total: 309, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/4.ogg" },
    { id: 6, baseId: 6, name: "リザードン", _baseSpeciesName: "リザードン", formType: "normal", formLabel: "通常", types: ["ほのお", "ひこう"], hp: 78, atk: 84, def: 78, spa: 109, spd: 85, spe: 100, total: 534, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/6.ogg" },
    { id: 7, baseId: 7, name: "ゼニガメ", _baseSpeciesName: "ゼニガメ", formType: "normal", formLabel: "通常", types: ["みず"], hp: 44, atk: 48, def: 65, spa: 50, spd: 64, spe: 43, total: 314, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/7.ogg" },
    { id: 25, baseId: 25, name: "ピカチュウ", _baseSpeciesName: "ピカチュウ", formType: "normal", formLabel: "通常", types: ["でんき"], hp: 35, atk: 55, def: 40, spa: 50, spd: 50, spe: 90, total: 320, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/25.ogg" },
    { id: 80, baseId: 80, name: "ヤドラン", _baseSpeciesName: "ヤドラン", formType: "normal", formLabel: "通常", types: ["みず", "エスパー"], hp: 95, atk: 75, def: 110, spa: 100, spd: 80, spe: 30, total: 490, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/80.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/80.ogg" },
    { id: 128, baseId: 128, name: "ケンタロス", _baseSpeciesName: "ケンタロス", formType: "normal", formLabel: "通常", types: ["ノーマル"], hp: 75, atk: 100, def: 95, spa: 40, spd: 70, spe: 110, total: 490, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/128.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/128.ogg" },
    { id: 133, baseId: 133, name: "イーブイ", _baseSpeciesName: "イーブイ", formType: "normal", formLabel: "通常", types: ["ノーマル"], hp: 55, atk: 55, def: 50, spa: 45, spd: 65, spe: 55, total: 325, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/133.ogg" },
    { id: 150, baseId: 150, name: "ミュウツー", _baseSpeciesName: "ミュウツー", formType: "normal", formLabel: "通常", types: ["エスパー"], hp: 106, atk: 110, def: 90, spa: 154, spd: 90, spe: 130, total: 680, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/150.ogg" },
    { id: 151, baseId: 151, name: "ミュウ", _baseSpeciesName: "ミュウ", formType: "normal", formLabel: "通常", types: ["エスパー"], hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100, total: 600, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/151.ogg" },
    { id: 154, baseId: 154, name: "メガニウム", _baseSpeciesName: "メガニウム", formType: "normal", formLabel: "通常", types: ["くさ"], hp: 80, atk: 82, def: 100, spa: 83, spd: 100, spe: 80, total: 525, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/154.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/154.ogg" },
    { id: 469, baseId: 469, name: "メガヤンマ", _baseSpeciesName: "メガヤンマ", formType: "normal", formLabel: "通常", types: ["むし", "ひこう"], hp: 86, atk: 76, def: 86, spa: 116, spd: 56, spe: 95, total: 515, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/469.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/469.ogg" },
    { id: 628, baseId: 628, name: "ウォーグル", _baseSpeciesName: "ウォーグル", formType: "normal", formLabel: "通常", types: ["ノーマル", "ひこう"], hp: 100, atk: 123, def: 75, spa: 57, spd: 75, spe: 80, total: 510, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/628.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/628.ogg" },
    { id: 706, baseId: 706, name: "ヌメルゴン", _baseSpeciesName: "ヌメルゴン", formType: "normal", formLabel: "通常", types: ["ドラゴン"], hp: 90, atk: 100, def: 70, spa: 110, spd: 150, spe: 80, total: 600, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/706.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/706.ogg" },
    // メガシンカ
    { id: 10034, baseId: 6, name: "メガリザードンX", rawName: "charizard-mega-x", _baseSpeciesName: "リザードン", formType: "mega", formLabel: "メガシンカX", types: ["ほのお", "ドラゴン"], hp: 78, atk: 130, def: 111, spa: 130, spd: 85, spe: 100, total: 634, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10034.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10034.ogg" },
    { id: 10035, baseId: 6, name: "メガリザードンY", rawName: "charizard-mega-y", _baseSpeciesName: "リザードン", formType: "mega", formLabel: "メガシンカY", types: ["ほのお", "ひこう"], hp: 78, atk: 104, def: 78, spa: 159, spd: 115, spe: 100, total: 634, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10035.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10035.ogg" },
    { id: 10044, baseId: 150, name: "メガミュウツーY", rawName: "mewtwo-mega-y", _baseSpeciesName: "ミュウツー", formType: "mega", formLabel: "メガシンカY", types: ["エスパー"], hp: 106, atk: 150, def: 70, spa: 194, spd: 120, spe: 140, total: 780, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10044.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10044.ogg" },
    { id: 10059, baseId: 448, name: "メガルカリオ", rawName: "lucario-mega", _baseSpeciesName: "ルカリオ", formType: "mega", formLabel: "メガシンカ", types: ["かくとう", "はがね"], hp: 70, atk: 145, def: 88, spa: 140, spd: 70, spe: 112, total: 625, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10059.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10059.ogg" },
    { id: 10038, baseId: 94, name: "メガゲンガー", rawName: "gengar-mega", _baseSpeciesName: "ゲンガー", formType: "mega", formLabel: "メガシンカ", types: ["ゴースト", "どく"], hp: 60, atk: 65, def: 80, spa: 170, spd: 95, spe: 130, total: 600, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10038.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10038.ogg" },
    { id: 10282, baseId: 154, name: "メガメガニウム", rawName: "meganium-mega", _baseSpeciesName: "メガニウム", formType: "mega", formLabel: "メガシンカ", types: ["くさ", "フェアリー"], hp: 80, atk: 92, def: 115, spa: 143, spd: 115, spe: 80, total: 625, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10282.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/154.ogg" },
    { id: 10999, baseId: 469, name: "メガメガヤンマ", rawName: "yanmega-mega", _baseSpeciesName: "メガヤンマ", formType: "mega", formLabel: "メガシンカ", types: ["むし", "ひこう"], hp: 86, atk: 86, def: 96, spa: 156, spd: 76, spe: 115, total: 615, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/469.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/469.ogg" },
    // 全リージョンフォーム (アローラ・ガラル・ヒスイ・パルデア)
    { id: 10091, baseId: 19, name: "コラッタ (アローラのすがた)", rawName: "rattata-alola", _baseSpeciesName: "コラッタ", formType: "regional", formLabel: "アローラ", types: ["あく", "ノーマル"], hp: 30, atk: 56, def: 35, spa: 25, spd: 35, spe: 72, total: 253, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10091.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10091.ogg" },
    { id: 10092, baseId: 20, name: "ラッタ (アローラのすがた)", rawName: "raticate-alola", _baseSpeciesName: "ラッタ", formType: "regional", formLabel: "アローラ", types: ["あく", "ノーマル"], hp: 75, atk: 71, def: 70, spa: 40, spd: 80, spe: 77, total: 413, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10092.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10092.ogg" },
    { id: 10100, baseId: 26, name: "ライチュウ (アローラのすがた)", rawName: "raichu-alola", _baseSpeciesName: "ライチュウ", formType: "regional", formLabel: "アローラ", types: ["でんき", "エスパー"], hp: 60, atk: 85, def: 50, spa: 95, spd: 85, spe: 110, total: 485, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10100.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10100.ogg" },
    { id: 10101, baseId: 27, name: "サンド (アローラのすがた)", rawName: "sandshrew-alola", _baseSpeciesName: "サンド", formType: "regional", formLabel: "アローラ", types: ["こおり", "はがね"], hp: 50, atk: 75, def: 90, spa: 10, spd: 35, spe: 40, total: 300, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10101.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10101.ogg" },
    { id: 10102, baseId: 28, name: "サンドパン (アローラのすがた)", rawName: "sandslash-alola", _baseSpeciesName: "サンドパン", formType: "regional", formLabel: "アローラ", types: ["こおり", "はがね"], hp: 75, atk: 100, def: 120, spa: 25, spd: 65, spe: 65, total: 450, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10102.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10102.ogg" },
    { id: 10103, baseId: 37, name: "ロコン (アローラのすがた)", rawName: "vulpix-alola", _baseSpeciesName: "ロコン", formType: "regional", formLabel: "アローラ", types: ["こおり"], hp: 38, atk: 41, def: 40, spa: 50, spd: 65, spe: 65, total: 299, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10103.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10103.ogg" },
    { id: 10104, baseId: 38, name: "キュウコン (アローラのすがた)", rawName: "ninetales-alola", _baseSpeciesName: "キュウコン", formType: "regional", formLabel: "アローラ", types: ["こおり", "フェアリー"], hp: 73, atk: 67, def: 75, spa: 81, spd: 100, spe: 109, total: 505, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10104.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10104.ogg" },
    { id: 10105, baseId: 50, name: "ディグダ (アローラのすがた)", rawName: "diglett-alola", _baseSpeciesName: "ディグダ", formType: "regional", formLabel: "アローラ", types: ["じめん", "はがね"], hp: 10, atk: 55, def: 30, spa: 35, spd: 45, spe: 90, total: 265, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10105.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10105.ogg" },
    { id: 10106, baseId: 51, name: "ダグトリオ (アローラのすがた)", rawName: "dugtrio-alola", _baseSpeciesName: "ダグトリオ", formType: "regional", formLabel: "アローラ", types: ["じめん", "はがね"], hp: 35, atk: 100, def: 60, spa: 50, spd: 70, spe: 110, total: 425, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10106.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10106.ogg" },
    { id: 10107, baseId: 52, name: "ニャース (アローラのすがた)", rawName: "meowth-alola", _baseSpeciesName: "ニャース", formType: "regional", formLabel: "アローラ", types: ["あく"], hp: 40, atk: 35, def: 35, spa: 50, spd: 40, spe: 90, total: 290, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10107.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10107.ogg" },
    { id: 10108, baseId: 53, name: "ペルシアン (アローラのすがた)", rawName: "persian-alola", _baseSpeciesName: "ペルシアン", formType: "regional", formLabel: "アローラ", types: ["あく"], hp: 65, atk: 60, def: 60, spa: 75, spd: 65, spe: 115, total: 440, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10108.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10108.ogg" },
    { id: 10109, baseId: 74, name: "イシツブテ (アローラのすがた)", rawName: "geodude-alola", _baseSpeciesName: "イシツブテ", formType: "regional", formLabel: "アローラ", types: ["いわ", "でんき"], hp: 40, atk: 80, def: 100, spa: 30, spd: 30, spe: 20, total: 300, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10109.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10109.ogg" },
    { id: 10110, baseId: 75, name: "ゴローン (アローラのすがた)", rawName: "graveler-alola", _baseSpeciesName: "ゴローン", formType: "regional", formLabel: "アローラ", types: ["いわ", "でんき"], hp: 55, atk: 95, def: 115, spa: 45, spd: 45, spe: 35, total: 390, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10110.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10110.ogg" },
    { id: 10111, baseId: 76, name: "ゴローニャ (アローラのすがた)", rawName: "golem-alola", _baseSpeciesName: "ゴローニャ", formType: "regional", formLabel: "アローラ", types: ["いわ", "でんき"], hp: 80, atk: 120, def: 130, spa: 55, spd: 65, spe: 45, total: 495, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10111.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10111.ogg" },
    { id: 10112, baseId: 88, name: "ベトベター (アローラのすがた)", rawName: "grimer-alola", _baseSpeciesName: "ベトベター", formType: "regional", formLabel: "アローラ", types: ["どく", "あく"], hp: 80, atk: 80, def: 50, spa: 40, spd: 50, spe: 25, total: 325, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10112.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10112.ogg" },
    { id: 10113, baseId: 89, name: "ベトベトン (アローラのすがた)", rawName: "muk-alola", _baseSpeciesName: "ベトベトン", formType: "regional", formLabel: "アローラ", types: ["どく", "あく"], hp: 105, atk: 105, def: 75, spa: 65, spd: 100, spe: 50, total: 500, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10113.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10113.ogg" },
    { id: 10114, baseId: 103, name: "ナッシー (アローラのすがた)", rawName: "exeggutor-alola", _baseSpeciesName: "ナッシー", formType: "regional", formLabel: "アローラ", types: ["くさ", "ドラゴン"], hp: 95, atk: 105, def: 85, spa: 125, spd: 75, spe: 45, total: 530, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10114.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10114.ogg" },
    { id: 10115, baseId: 105, name: "ガラガラ (アローラのすがた)", rawName: "marowak-alola", _baseSpeciesName: "ガラガラ", formType: "regional", formLabel: "アローラ", types: ["ほのお", "ゴースト"], hp: 60, atk: 80, def: 110, spa: 50, spd: 80, spe: 45, total: 425, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10115.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10115.ogg" },
    { id: 10161, baseId: 52, name: "ニャース (ガラルのすがた)", rawName: "meowth-galar", _baseSpeciesName: "ニャース", formType: "regional", formLabel: "ガラル", types: ["はがね"], hp: 50, atk: 65, def: 55, spa: 40, spd: 40, spe: 40, total: 290, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10161.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10161.ogg" },
    { id: 10162, baseId: 77, name: "ポニータ (ガラルのすがた)", rawName: "ponyta-galar", _baseSpeciesName: "ポニータ", formType: "regional", formLabel: "ガラル", types: ["エスパー"], hp: 50, atk: 85, def: 55, spa: 65, spd: 65, spe: 90, total: 410, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10162.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10162.ogg" },
    { id: 10163, baseId: 78, name: "ギャロップ (ガラルのすがた)", rawName: "rapidash-galar", _baseSpeciesName: "ギャロップ", formType: "regional", formLabel: "ガラル", types: ["エスパー", "フェアリー"], hp: 65, atk: 100, def: 70, spa: 80, spd: 80, spe: 105, total: 500, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10163.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10163.ogg" },
    { id: 10164, baseId: 79, name: "ヤドン (ガラルのすがた)", rawName: "slowpoke-galar", _baseSpeciesName: "ヤドン", formType: "regional", formLabel: "ガラル", types: ["エスパー"], hp: 90, atk: 65, def: 65, spa: 40, spd: 40, spe: 15, total: 315, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10164.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10164.ogg" },
    { id: 10165, baseId: 80, name: "ヤドラン (ガラルのすがた)", rawName: "slowbro-galar", _baseSpeciesName: "ヤドラン", formType: "regional", formLabel: "ガラル", types: ["どく", "エスパー"], hp: 95, atk: 100, def: 95, spa: 100, spd: 70, spe: 30, total: 490, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10165.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10165.ogg" },
    { id: 10166, baseId: 83, name: "カモネギ (ガラルのすがた)", rawName: "farfetchd-galar", _baseSpeciesName: "カモネギ", formType: "regional", formLabel: "ガラル", types: ["かくとう"], hp: 52, atk: 95, def: 55, spa: 58, spd: 62, spe: 55, total: 377, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10166.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10166.ogg" },
    { id: 10167, baseId: 110, name: "マタドガス (ガラルのすがた)", rawName: "weezing-galar", _baseSpeciesName: "マタドガス", formType: "regional", formLabel: "ガラル", types: ["どく", "フェアリー"], hp: 65, atk: 90, def: 120, spa: 85, spd: 70, spe: 60, total: 490, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10167.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10167.ogg" },
    { id: 10168, baseId: 122, name: "バリヤード (ガラルのすがた)", rawName: "mr-mime-galar", _baseSpeciesName: "バリヤード", formType: "regional", formLabel: "ガラル", types: ["こおり", "エスパー"], hp: 50, atk: 65, def: 65, spa: 90, spd: 90, spe: 100, total: 460, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10168.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10168.ogg" },
    { id: 10169, baseId: 144, name: "フリーザー (ガラルのすがた)", rawName: "articuno-galar", _baseSpeciesName: "フリーザー", formType: "regional", formLabel: "ガラル", types: ["エスパー", "ひこう"], hp: 90, atk: 85, def: 85, spa: 125, spd: 100, spe: 95, total: 580, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10169.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10169.ogg" },
    { id: 10170, baseId: 145, name: "サンダー (ガラルのすがた)", rawName: "zapdos-galar", _baseSpeciesName: "サンダー", formType: "regional", formLabel: "ガラル", types: ["かくとう", "ひこう"], hp: 90, atk: 125, def: 90, spa: 85, spd: 90, spe: 100, total: 580, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10170.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10170.ogg" },
    { id: 10171, baseId: 146, name: "ファイヤー (ガラルのすがた)", rawName: "moltres-galar", _baseSpeciesName: "ファイヤー", formType: "regional", formLabel: "ガラル", types: ["あく", "ひこう"], hp: 90, atk: 85, def: 90, spa: 100, spd: 125, spe: 90, total: 580, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10171.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10171.ogg" },
    { id: 10172, baseId: 199, name: "ヤドキング (ガラルのすがた)", rawName: "slowking-galar", _baseSpeciesName: "ヤドキング", formType: "regional", formLabel: "ガラル", types: ["どく", "エスパー"], hp: 95, atk: 65, def: 80, spa: 110, spd: 110, spe: 30, total: 490, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10172.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10172.ogg" },
    { id: 10173, baseId: 222, name: "サニーゴ (ガラルのすがた)", rawName: "corsola-galar", _baseSpeciesName: "サニーゴ", formType: "regional", formLabel: "ガラル", types: ["ゴースト"], hp: 60, atk: 55, def: 100, spa: 65, spd: 100, spe: 30, total: 410, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10173.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10173.ogg" },
    { id: 10174, baseId: 263, name: "ジグザグマ (ガラルのすがた)", rawName: "zigzagoon-galar", _baseSpeciesName: "ジグザグマ", formType: "regional", formLabel: "ガラル", types: ["あく", "ノーマル"], hp: 38, atk: 30, def: 41, spa: 30, spd: 41, spe: 60, total: 240, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10174.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10174.ogg" },
    { id: 10175, baseId: 264, name: "マッスグマ (ガラルのすがた)", rawName: "linoone-galar", _baseSpeciesName: "マッスグマ", formType: "regional", formLabel: "ガラル", types: ["あく", "ノーマル"], hp: 78, atk: 70, def: 61, spa: 50, spd: 61, spe: 100, total: 420, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10175.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10175.ogg" },
    { id: 10176, baseId: 554, name: "ダルマッカ (ガラルのすがた)", rawName: "darumaka-galar", _baseSpeciesName: "ダルマッカ", formType: "regional", formLabel: "ガラル", types: ["こおり"], hp: 70, atk: 90, def: 45, spa: 15, spd: 45, spe: 50, total: 315, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10176.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10176.ogg" },
    { id: 10177, baseId: 555, name: "ヒヒダルマ (ガラルのすがた)", rawName: "darmanitan-galar-standard", _baseSpeciesName: "ヒヒダルマ", formType: "regional", formLabel: "ガラル", types: ["こおり"], hp: 105, atk: 140, def: 55, spa: 30, spd: 55, spe: 95, total: 480, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10177.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10177.ogg" },
    { id: 10178, baseId: 555, name: "ヒヒダルマ (ガラルのすがた・ダルマモード)", rawName: "darmanitan-galar-zen", _baseSpeciesName: "ヒヒダルマ", formType: "regional", formLabel: "ガラル (ダルマモード)", types: ["こおり", "ほのお"], hp: 105, atk: 160, def: 55, spa: 30, spd: 55, spe: 135, total: 540, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10178.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10178.ogg" },
    { id: 10179, baseId: 562, name: "デスマス (ガラルのすがた)", rawName: "yamask-galar", _baseSpeciesName: "デスマス", formType: "regional", formLabel: "ガラル", types: ["じめん", "ゴースト"], hp: 38, atk: 55, def: 85, spa: 30, spd: 65, spe: 30, total: 303, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10179.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10179.ogg" },
    { id: 10180, baseId: 618, name: "マッギョ (ガラルのすがた)", rawName: "stunfisk-galar", _baseSpeciesName: "マッギョ", formType: "regional", formLabel: "ガラル", types: ["じめん", "はがね"], hp: 109, atk: 81, def: 99, spa: 66, spd: 84, spe: 32, total: 471, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10180.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10180.ogg" },
    { id: 10229, baseId: 58, name: "ガーディ (ヒスイのすがた)", rawName: "growlithe-hisui", _baseSpeciesName: "ガーディ", formType: "regional", formLabel: "ヒスイ", types: ["ほのお", "いわ"], hp: 60, atk: 75, def: 45, spa: 65, spd: 50, spe: 55, total: 350, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10229.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10229.ogg" },
    { id: 10230, baseId: 59, name: "ウインディ (ヒスイのすがた)", rawName: "arcanine-hisui", _baseSpeciesName: "ウインディ", formType: "regional", formLabel: "ヒスイ", types: ["ほのお", "いわ"], hp: 95, atk: 115, def: 80, spa: 95, spd: 80, spe: 90, total: 555, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10230.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10230.ogg" },
    { id: 10231, baseId: 100, name: "ビリリダマ (ヒスイのすがた)", rawName: "voltorb-hisui", _baseSpeciesName: "ビリリダマ", formType: "regional", formLabel: "ヒスイ", types: ["でんき", "くさ"], hp: 40, atk: 30, def: 50, spa: 55, spd: 55, spe: 100, total: 330, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10231.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10231.ogg" },
    { id: 10232, baseId: 101, name: "マルマイン (ヒスイのすがた)", rawName: "electrode-hisui", _baseSpeciesName: "マルマイン", formType: "regional", formLabel: "ヒスイ", types: ["でんき", "くさ"], hp: 60, atk: 50, def: 70, spa: 80, spd: 80, spe: 150, total: 490, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10232.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10232.ogg" },
    { id: 10233, baseId: 157, name: "バクフーン (ヒスイのすがた)", rawName: "typhlosion-hisui", _baseSpeciesName: "バクフーン", formType: "regional", formLabel: "ヒスイ", types: ["ほのお", "ゴースト"], hp: 73, atk: 84, def: 78, spa: 119, spd: 85, spe: 95, total: 534, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10233.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10233.ogg" },
    { id: 10234, baseId: 211, name: "ハリーセン (ヒスイのすがた)", rawName: "qwilfish-hisui", _baseSpeciesName: "ハリーセン", formType: "regional", formLabel: "ヒスイ", types: ["あく", "どく"], hp: 65, atk: 95, def: 85, spa: 55, spd: 55, spe: 85, total: 440, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10234.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10234.ogg" },
    { id: 10235, baseId: 215, name: "ニューラ (ヒスイのすがた)", rawName: "sneasel-hisui", _baseSpeciesName: "ニューラ", formType: "regional", formLabel: "ヒスイ", types: ["かくとう", "どく"], hp: 55, atk: 95, def: 55, spa: 35, spd: 75, spe: 115, total: 430, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10235.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10235.ogg" },
    { id: 10236, baseId: 503, name: "ダイケンキ (ヒスイのすがた)", rawName: "samurott-hisui", _baseSpeciesName: "ダイケンキ", formType: "regional", formLabel: "ヒスイ", types: ["みず", "あく"], hp: 90, atk: 108, def: 80, spa: 100, spd: 65, spe: 85, total: 528, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10236.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10236.ogg" },
    { id: 10237, baseId: 549, name: "ドレディア (ヒスイのすがた)", rawName: "lilligant-hisui", _baseSpeciesName: "ドレディア", formType: "regional", formLabel: "ヒスイ", types: ["くさ", "かくとう"], hp: 70, atk: 105, def: 75, spa: 50, spd: 75, spe: 105, total: 480, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10237.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10237.ogg" },
    { id: 10238, baseId: 570, name: "ゾロア (ヒスイのすがた)", rawName: "zorua-hisui", _baseSpeciesName: "ゾロア", formType: "regional", formLabel: "ヒスイ", types: ["ノーマル", "ゴースト"], hp: 35, atk: 60, def: 40, spa: 85, spd: 40, spe: 70, total: 330, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10238.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10238.ogg" },
    { id: 10239, baseId: 571, name: "ゾロアーク (ヒスイのすがた)", rawName: "zoroark-hisui", _baseSpeciesName: "ゾロアーク", formType: "regional", formLabel: "ヒスイ", types: ["ノーマル", "ゴースト"], hp: 55, atk: 100, def: 60, spa: 125, spd: 60, spe: 110, total: 510, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10239.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10239.ogg" },
    { id: 10240, baseId: 628, name: "ウォーグル (ヒスイのすがた)", rawName: "braviary-hisui", _baseSpeciesName: "ウォーグル", formType: "regional", formLabel: "ヒスイ", types: ["エスパー", "ひこう"], hp: 110, atk: 83, def: 70, spa: 112, spd: 70, spe: 65, total: 510, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10240.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10240.ogg" },
    { id: 10241, baseId: 705, name: "ヌメイル (ヒスイのすがた)", rawName: "sliggoo-hisui", _baseSpeciesName: "ヌメイル", formType: "regional", formLabel: "ヒスイ", types: ["はがね", "ドラゴン"], hp: 58, atk: 75, def: 83, spa: 83, spd: 113, spe: 40, total: 452, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10241.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10241.ogg" },
    { id: 10242, baseId: 706, name: "ヌメルゴン (ヒスイのすがた)", rawName: "goodra-hisui", _baseSpeciesName: "ヌメルゴン", formType: "regional", formLabel: "ヒスイ", types: ["はがね", "ドラゴン"], hp: 80, atk: 100, def: 100, spa: 110, spd: 150, spe: 60, total: 600, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10242.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10242.ogg" },
    { id: 10243, baseId: 713, name: "クレベース (ヒスイのすがた)", rawName: "avalugg-hisui", _baseSpeciesName: "クレベース", formType: "regional", formLabel: "ヒスイ", types: ["こおり", "いわ"], hp: 95, atk: 127, def: 184, spa: 34, spd: 36, spe: 38, total: 514, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10243.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10243.ogg" },
    { id: 10244, baseId: 724, name: "ジュナイパー (ヒスイのすがた)", rawName: "decidueye-hisui", _baseSpeciesName: "ジュナイパー", formType: "regional", formLabel: "ヒスイ", types: ["くさ", "かくとう"], hp: 88, atk: 112, def: 80, spa: 95, spd: 95, spe: 60, total: 530, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10244.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10244.ogg" },
    { id: 10250, baseId: 128, name: "ケンタロス (パルデアのすがた・コンバット種)", rawName: "tauros-paldea-combat-breed", _baseSpeciesName: "ケンタロス", formType: "regional", formLabel: "パルデア (かくとう)", types: ["かくとう"], hp: 75, atk: 110, def: 105, spa: 30, spd: 70, spe: 100, total: 490, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10250.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10250.ogg" },
    { id: 10251, baseId: 128, name: "ケンタロス (パルデアのすがた・ブレイズ種)", rawName: "tauros-paldea-blaze-breed", _baseSpeciesName: "ケンタロス", formType: "regional", formLabel: "パルデア (ほのお)", types: ["かくとう", "ほのお"], hp: 75, atk: 110, def: 105, spa: 30, spd: 70, spe: 100, total: 490, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10251.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10251.ogg" },
    { id: 10252, baseId: 128, name: "ケンタロス (パルデアのすがた・ウォーター種)", rawName: "tauros-paldea-aqua-breed", _baseSpeciesName: "ケンタロス", formType: "regional", formLabel: "パルデア (みず)", types: ["かくとう", "みず"], hp: 75, atk: 110, def: 105, spa: 30, spd: 70, spe: 100, total: 490, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10252.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10252.ogg" },
    { id: 10253, baseId: 194, name: "ウパー (パルデアのすがた)", rawName: "wooper-paldea", _baseSpeciesName: "ウパー", formType: "regional", formLabel: "パルデア", types: ["どく", "じめん"], hp: 55, atk: 45, def: 45, spa: 25, spd: 25, spe: 15, total: 210, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10253.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10253.ogg" },

];

let pokemonList = [];
let selectedTypes = new Set();
let currentFormFilter = 'all';
const TOTAL_POKEMON_TARGET = 1257;
let isPlayingAudio = false;

// 描画パフォーマンス向上のための変数
const PAGE_SIZE = 48;
let renderedCount = 0;
let currentFilteredList = [];
let infiniteScrollObserver = null;
let searchDebounceTimeout = null;

// 除外判定：キョダイマックス、ピカチュウ/イーブイ/コライドン/ミライドンの不要な姿、重複アローラ姿(totem)、パルデアケンタロスの重複、ノココッチ等同種族値の姿違い重複等
function shouldExcludePokemon(rawName, id, baseId) {
    const n = (rawName || '').toLowerCase();

    // 1. キョダイマックスの姿の完全除外
    if (n.includes('-gmax')) {
        return true;
    }

    // 2. ピカチュウの姿違いを除外 (ID 25 の基本姿のみ残す)
    if ((n.startsWith('pikachu-') || baseId === 25) && id !== 25) {
        return true;
    }

    // 3. イーブイの姿違いを除外 (ID 133 の基本姿のみ残す。パートナーイーブイ等を除外)
    if ((n.startsWith('eevee-') || baseId === 133) && id !== 133) {
        return true;
    }

    // 4. コライドンの派生形態を除外 (ID 1007 の基本姿のみ残す)
    if ((n.startsWith('koraidon-') || baseId === 1007) && id !== 1007) {
        return true;
    }

    // 5. ミライドンの派生形態を除外 (ID 1008 の基本姿のみ残す)
    if ((n.startsWith('miraidon-') || baseId === 1008) && id !== 1008) {
        return true;
    }

    // 6. アローララッタ (ID 20)、ガラガラ (ID 105) などのぬしポケモン(totem)重複を除外
    // 例: raticate-totem-alola, marowak-totem 等の重複を除外
    if (n.includes('-totem')) {
        return true;
    }

    // 7. パルデアケンタロス (ID 128) はコンバット種 (かくとう)、ブレイズ種 (ほのお)、ウォーター種 (みず) の全3種をすべて収録

    // 8. ノココッチの姿違い統一 (ふたふしフォルム ID 982 を残し、みつふしフォルム ID 10255 を除外)
    if (n.includes('dudunsparce-three-segment') || id === 10255) {
        return true;
    }

    // 9. イッカネズミの姿違い統一 (4ひきかぞく ID 925 を残し、3びきかぞく ID 10257 を除外)
    if (n.includes('maushold-family-of-three') || id === 10257) {
        return true;
    }

    // 10. シャリタツの姿違い統一 (そったすがた ID 978, 10322 を残し、たれた/のびた姿 ID 10258, 10259, 10323, 10324 を除外)
    if (n.includes('tatsugiri-droopy') || n.includes('tatsugiri-stretchy') || id === 10258 || id === 10259 || id === 10323 || id === 10324) {
        return true;
    }

    // 11. イキリンコの色違い姿統一 (みどりのすがお ID 931 を残し、あお/きいろ/しろ ID 10260-10262 を除外)
    if (n.includes('squawkabilly-blue') || n.includes('squawkabilly-yellow') || n.includes('squawkabilly-white') || (id >= 10260 && id <= 10262)) {
        return true;
    }

    // 12. バスラオのすじ違い統一 (あかすじ ID 550 を残し、あおすじ ID 10016 / しろすじ ID 10247 を除外)
    if (n.includes('basculin-blue') || n.includes('basculin-white') || id === 10016 || id === 10247) {
        return true;
    }

    // 13. メテノの同値カラーバリエーション除外 (流星ID 774 と コアID 10136 のみを残す)
    if (n.startsWith('minior-') && (n.includes('-meteor') || (id >= 10130 && id <= 10142)) && id !== 774 && id !== 10136) {
        return true;
    }

    // 14. マギアナ (500年前のすがた) の重複除外 (ID 10147, 10318)
    if (n.includes('magearna-original') || id === 10147 || id === 10318) {
        return true;
    }

    // 15. ザルード (とうちゃん) の重複除外 (ID 10192)
    if (n.includes('zarude-dada') || id === 10192) {
        return true;
    }

    // 16. ニャオニクス (メス) の重複除外 (種族値がオスID 678と同一のため ID 10025, 10326 を除外)
    if (n.includes('meowstic-female') || id === 10025 || id === 10326) {
        return true;
    }

    // 17. ストリンダー (ローなすがた) の重複除外 (種族値がハイID 849と同一のため ID 10184 を除外)
    if (n.includes('toxtricity-low-key') || id === 10184) {
        return true;
    }

    return false;
}

// ポケモンの基本種族名（メガ、ゲンシ、リージョン名、フォルム名などの付加情報を除去した純粋な名前）を取得
function cleanBaseSpeciesName(name) {
    if (!name) return '';
    let s = String(name).trim();

    // 半角・全角の丸括弧以降（「 (ヒスイのすがた)」「（ガラルのすがた）」等）をすべて一括除去
    // 複数回連結されている場合でも、最初の丸括弧から後ろをすべて切り落とす
    s = s.replace(/[\s\u3000]*[\(\uff08].*$/, '').trim();

    // 「メガニウム」「メガヤンマ」のように元の種族名自体に「メガ」が含まれるポケモンの特殊処理
    // 例: 「メガメガニウム」 -> 「メガニウム」 / 「メガニウム」 -> 「メガニウム」（先頭のメガを削らない）
    if (/^メガメガニウム/i.test(s)) {
        s = s.replace(/^メガ/, '');
    } else if (/^メガメガヤンマ/i.test(s)) {
        s = s.replace(/^メガ/, '');
    } else if (/^メガニウム/i.test(s) || /^メガヤンマ/i.test(s)) {
        // 元々の種族名が「メガニウム」「メガヤンマ」なので先頭の「メガ」は削らない
    } else {
        // 通常のポケモン：先頭の「メガ」「ゲンシ」を除去（例: メガルカリオ -> ルカリオ）
        s = s.replace(/^(メガ|ゲンシ)/, '');
    }

    // 末尾のメガシンカ記号 (X, Y, Z) を除去
    // ※ ポリゴンZなどの通常種名の末尾Zを誤って削らないよう保護
    if (s !== 'ポリゴンZ') {
        s = s.replace(/[XYZ]$/, '');
    }

    return s.trim();
}

// フォルム情報の自動判定
function determineFormInfo(rawName, id, speciesName) {
    const baseName = cleanBaseSpeciesName(speciesName);

    if (id <= 1025) {
        return {
            formType: 'normal',
            formLabel: '通常',
            displayName: speciesName || baseName
        };
    }

    const n = (rawName || '').toLowerCase();
    
    // メガシンカ / ゲンシカイキ
    if (n.includes('-mega-z')) {
        return { formType: 'mega', formLabel: 'メガシンカZ', displayName: `メガ${baseName}Z` };
    }
    if (n.includes('-mega-x')) {
        return { formType: 'mega', formLabel: 'メガシンカX', displayName: `メガ${baseName}X` };
    }
    if (n.includes('-mega-y')) {
        return { formType: 'mega', formLabel: 'メガシンカY', displayName: `メガ${baseName}Y` };
    }
    if (n.includes('-mega')) {
        return { formType: 'mega', formLabel: 'メガシンカ', displayName: `メガ${baseName}` };
    }
    if (n.includes('-primal')) {
        return { formType: 'mega', formLabel: 'ゲンシカイキ', displayName: `ゲンシ${baseName}` };
    }

    // リージョンフォーム
    if (n.includes('-alola')) {
        return { formType: 'regional', formLabel: 'アローラ', displayName: `${baseName} (アローラのすがた)` };
    }
    if (n.includes('-galar')) {
        if (n.includes('darmanitan-galar-zen')) {
            return { formType: 'regional', formLabel: 'ガラル (ダルマモード)', displayName: `${baseName} (ガラルのすがた・ダルマモード)` };
        }
        return { formType: 'regional', formLabel: 'ガラル', displayName: `${baseName} (ガラルのすがた)` };
    }
    if (n.includes('-hisui')) {
        return { formType: 'regional', formLabel: 'ヒスイ', displayName: `${baseName} (ヒスイのすがた)` };
    }
    if (n.includes('tauros-paldea-combat') || (n.includes('tauros-paldea') && n.includes('combat'))) {
        return { formType: 'regional', formLabel: 'パルデア (かくとう)', displayName: `${baseName} (パルデアのすがた・コンバット種)` };
    }
    if (n.includes('tauros-paldea-blaze') || (n.includes('tauros-paldea') && n.includes('blaze'))) {
        return { formType: 'regional', formLabel: 'パルデア (ほのお)', displayName: `${baseName} (パルデアのすがた・ブレイズ種)` };
    }
    if (n.includes('tauros-paldea-aqua') || (n.includes('tauros-paldea') && n.includes('aqua'))) {
        return { formType: 'regional', formLabel: 'パルデア (みず)', displayName: `${baseName} (パルデアのすがた・ウォーター種)` };
    }
    if (n.includes('-paldea')) {
        return { formType: 'regional', formLabel: 'パルデア', displayName: `${baseName} (パルデアのすがた)` };
    }

    // キョダイマックス
    if (n.includes('-gmax')) {
        return { formType: 'other', formLabel: 'キョダイマックス', displayName: `${baseName} (キョダイマックス)` };
    }

    // その他の形態
    if (n.includes('-origin')) {
        return { formType: 'other', formLabel: 'オリジン', displayName: `${baseName} (オリジンフォルム)` };
    }
    if (n.includes('-therian')) {
        return { formType: 'other', formLabel: 'れいじゅう', displayName: `${baseName} (れいじゅうフォルム)` };
    }
    if (n.includes('-crowned')) {
        return { formType: 'other', formLabel: 'けんのおう/たてのおう', displayName: `${baseName} (けんのおう/たてのおう)` };
    }
    if (n.includes('-attack')) {
        return { formType: 'other', formLabel: 'アタック', displayName: `${baseName} (アタックフォルム)` };
    }
    if (n.includes('-defense')) {
        return { formType: 'other', formLabel: 'ディフェンス', displayName: `${baseName} (ディフェンスフォルム)` };
    }
    if (n.includes('-speed')) {
        return { formType: 'other', formLabel: 'スピード', displayName: `${baseName} (スピードフォルム)` };
    }
    if (n.includes('-wash')) return { formType: 'other', formLabel: 'ウォッシュ', displayName: `${baseName} (ウォッシュ)` };
    if (n.includes('-heat')) return { formType: 'other', formLabel: 'ヒート', displayName: `${baseName} (ヒート)` };
    if (n.includes('-frost')) return { formType: 'other', formLabel: 'フロスト', displayName: `${baseName} (フロスト)` };
    if (n.includes('-fan')) return { formType: 'other', formLabel: 'スピン', displayName: `${baseName} (スピン)` };
    if (n.includes('-mow')) return { formType: 'other', formLabel: 'カット', displayName: `${baseName} (カット)` };

    // バドレックス合体フォルム（レイスポス・ブリザポス合体）
    if (n.includes('calyrex-ice')) {
        return { formType: 'other', formLabel: 'はくばじょう', displayName: `${baseName} (はくばじょうのすがた)` };
    }
    if (n.includes('calyrex-shadow')) {
        return { formType: 'other', formLabel: 'こくばじょう', displayName: `${baseName} (こくばじょうのすがた)` };
    }

    // キュレム合体フォルム (レシラム・ゼクロム合体)
    if (n.includes('kyurem-white')) {
        return { formType: 'other', formLabel: 'ホワイトキュレム', displayName: `ホワイトキュレム` };
    }
    if (n.includes('kyurem-black')) {
        return { formType: 'other', formLabel: 'ブラックキュレム', displayName: `ブラックキュレム` };
    }

    // ネクロズマ合体フォルム (ソルガレオ・ルナアーラ合体)
    if (n.includes('necrozma-dusk')) {
        return { formType: 'other', formLabel: 'たそがれ', displayName: `${baseName} (たそがれのたてがみ)` };
    }
    if (n.includes('necrozma-dawn')) {
        return { formType: 'other', formLabel: 'あかつき', displayName: `${baseName} (あかつきのつばさ)` };
    }
    if (n.includes('necrozma-ultra')) {
        return { formType: 'other', formLabel: 'ウルトラ', displayName: `ウルトラ${baseName}` };
    }

    // ウーラオス
    if (n.includes('urshifu-rapid-strike')) {
        return { formType: 'other', formLabel: 'れんげき', displayName: `${baseName} (れんげきのかた)` };
    }
    if (n.includes('urshifu-single-strike')) {
        return { formType: 'other', formLabel: 'いちげき', displayName: `${baseName} (いちげきのかた)` };
    }

    const suffix = rawName.split('-').slice(1).join(' ');
    return {
        formType: 'other',
        formLabel: suffix || '別フォルム',
        displayName: suffix ? `${baseName} (${suffix})` : baseName
    };
}

function showAlert(msg) {
    document.getElementById('custom-alert-message').textContent = msg;
    document.getElementById('custom-alert-modal').classList.remove('hidden');
}
function closeCustomAlert() {
    document.getElementById('custom-alert-modal').classList.add('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
    switchAppMode('quiz'); // クイズモードを初期表示（メイン機能）
    renderTypeFilters();
    initFormFilterEvents();
    fetchOptimizedPokemonData();

    const searchInput = document.getElementById('search-input');
    const stickySearchInput = document.getElementById('sticky-search-input');
    const sortSelect = document.getElementById('sort-select');
    const stickySortSelect = document.getElementById('sticky-sort-select');

    function onSearchChange(val) {
        if (searchInput && searchInput.value !== val) searchInput.value = val;
        if (stickySearchInput && stickySearchInput.value !== val) stickySearchInput.value = val;
        clearTimeout(searchDebounceTimeout);
        searchDebounceTimeout = setTimeout(() => {
            filterAndRenderPokemon();
        }, 350);
    }

    if (searchInput) {
        searchInput.addEventListener('input', (e) => onSearchChange(e.target.value));
    }
    if (stickySearchInput) {
        stickySearchInput.addEventListener('input', (e) => onSearchChange(e.target.value));
    }

    function onSortChange(val) {
        if (sortSelect && sortSelect.value !== val) sortSelect.value = val;
        if (stickySortSelect && stickySortSelect.value !== val) stickySortSelect.value = val;
        filterAndRenderPokemon();
    }

    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => onSortChange(e.target.value));
    }
    if (stickySortSelect) {
        stickySortSelect.addEventListener('change', (e) => onSortChange(e.target.value));
    }

    function handleResetTypes() {
        selectedTypes.clear();
        syncTypeChips();
        filterAndRenderPokemon();
    }

    const resetBtn1 = document.getElementById('reset-types');
    const resetBtn2 = document.getElementById('sticky-reset-types');
    if (resetBtn1) resetBtn1.addEventListener('click', handleResetTypes);
    if (resetBtn2) resetBtn2.addEventListener('click', handleResetTypes);

    document.getElementById('detail-modal').addEventListener('click', (e) => {
        if (e.target.id === 'detail-modal') closeDetailModal();
    });
});

function initFormFilterEvents() {
    const chips = document.querySelectorAll('.form-filter-chip');
    chips.forEach(chip => {
        chip.addEventListener('click', () => {
            const formVal = chip.dataset.form;
            // 既に選択されている項目を再クリックしたら解除（未選択＝すべて表示）
            if (currentFormFilter === formVal) {
                currentFormFilter = 'all';
            } else {
                currentFormFilter = formVal;
            }

            // メイン・sticky両方のすべてのチップのアクティブ状態を同期
            document.querySelectorAll('.form-filter-chip').forEach(c => {
                if (c.dataset.form === currentFormFilter) {
                    c.classList.add('bg-slate-900', 'text-white', 'border-slate-900', 'shadow-xs');
                    c.classList.remove('bg-slate-100', 'text-slate-700', 'border-slate-200');
                } else {
                    c.classList.remove('bg-slate-900', 'text-white', 'border-slate-900', 'shadow-xs');
                    c.classList.add('bg-slate-100', 'text-slate-700', 'border-slate-200');
                }
            });
            filterAndRenderPokemon();
        });
    });
}

function updateFormCounts() {
    const counts = {
        mega: pokemonList.filter(p => p.formType === 'mega').length,
        regional: pokemonList.filter(p => p.formType === 'regional').length,
        normal: pokemonList.filter(p => p.formType === 'normal').length,
        other: pokemonList.filter(p => p.formType === 'other').length
    };
    
    ['mega', 'regional', 'normal', 'other'].forEach(key => {
        const el1 = document.getElementById(`count-${key}`);
        const el2 = document.getElementById(`sticky-count-${key}`);
        if (el1) el1.textContent = counts[key];
        if (el2) el2.textContent = counts[key];
    });
}

async function fetchOptimizedPokemonData() {
    const CACHE_KEY = 'poketone_clean_v8';
    // 既存キャッシュからキョダイマックス・重複姿を除外し、ガラルヤドラン修正・ヒスイウォーグル・パルデアケンタロス全3種・メガメガニウム・メガメガヤンマを反映
    const cached = localStorage.getItem(CACHE_KEY) || localStorage.getItem('poketone_clean_v7') || localStorage.getItem('poketone_clean_v6') || localStorage.getItem('poketone_clean_v5') || localStorage.getItem('poketone_clean_v4') || localStorage.getItem('poketone_clean_v3') || localStorage.getItem('poketone_clean_v2') || localStorage.getItem('poketone_clean_v1') || localStorage.getItem('pokestats_master_v1351_all_forms');
    if (cached) {
        try {
            const rawList = JSON.parse(cached);
            let cleanedList = rawList
                .filter(p => !shouldExcludePokemon(p.rawName || p.name, p.id, p.baseId))
                .map(p => {
                    // ID 10165 はヤドラン (ガラルのすがた) であるべき（旧キャッシュで誤ってジグザグマになっていた場合の自動補正）
                    if (p.id === 10165 && (p.rawName?.includes('zigzagoon') || p.name?.includes('ジグザグマ'))) {
                        p.baseId = 80;
                        p.rawName = 'slowbro-galar';
                        p._baseSpeciesName = 'ヤドラン';
                        p.name = 'ヤドラン (ガラルのすがた)';
                        p.formType = 'regional';
                        p.formLabel = 'ガラル';
                        p.types = ['どく', 'エスパー'];
                        p.hp = 95; p.atk = 100; p.def = 95; p.spa = 100; p.spd = 70; p.spe = 30; p.total = 490;
                        p.image = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10165.png';
                        p.cry = 'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10165.ogg';
                    }
                    // メガニウム (ID 154) / メガヤンマ (ID 469) の旧キャッシュ自動修復
                    if (p.id === 154) {
                        p.name = 'メガニウム';
                        p._baseSpeciesName = 'メガニウム';
                        p.formType = 'normal';
                        p.formLabel = '通常';
                    } else if (p.id === 469) {
                        p.name = 'メガヤンマ';
                        p._baseSpeciesName = 'メガヤンマ';
                        p.formType = 'normal';
                        p.formLabel = '通常';
                    } else if (p.id === 10282) {
                        p.name = 'メガメガニウム';
                        p._baseSpeciesName = 'メガニウム';
                        p.formType = 'mega';
                        p.formLabel = 'メガシンカ';
                    }
                    if (p.cry && p.cry.includes('/sprites/pokemon/latest/')) {
                        p.cry = p.cry.replace('/sprites/pokemon/latest/', '/cries/pokemon/latest/');
                    }
                    const cleanBase = cleanBaseSpeciesName(p._baseSpeciesName || p.name);
                    p._baseSpeciesName = cleanBase;
                    // rawNameが存在する場合、最新フォルム判定を再適用
                    if (p.rawName) {
                        const parsed = determineFormInfo(p.rawName, p.id, cleanBase);
                        p.formType = parsed.formType;
                        p.formLabel = parsed.formLabel;
                        p.name = parsed.displayName;
                    } else if (p.formType === 'normal') {
                        p.name = cleanBase;
                    }
                    return p;
                });

            // 必須のフォールバックポケモン（全リージョンフォーム等）でキャッシュに欠けているものを補充
            EMBEDDED_FALLBACK_POKEMON.forEach(fb => {
                if (!cleanedList.some(p => p.id === fb.id)) {
                    cleanedList.push(fb);
                }
            });

            // ソート: 全国図鑑番号（baseId）順かつ同一番号内はID順
            cleanedList.sort((a, b) => {
                const bA = a.baseId || a.id;
                const bB = b.baseId || b.id;
                if (bA === bB) return a.id - b.id;
                return bA - bB;
            });

            pokemonList = cleanedList;
            localStorage.setItem(CACHE_KEY, JSON.stringify(pokemonList));
            updateLoadedCount();
            updateFormCounts();
            filterAndRenderPokemon();

            // すでに全件取得済み（1000匹以上）なら取得バナーを閉じて終了
            if (pokemonList.length >= 1000) {
                document.getElementById('loading-banner').classList.add('hidden');
                return;
            }
        } catch (e) {
            console.warn("Cache parse error, re-fetching...");
        }
    }

    // 初期状態は内蔵フォールバックを表示
    pokemonList = [...EMBEDDED_FALLBACK_POKEMON].filter(p => !shouldExcludePokemon(p.rawName || p.name, p.id, p.baseId));
    updateLoadedCount();
    updateFormCounts();
    filterAndRenderPokemon();

    try {
        // 全ポケモンリストを取得
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10000`);
        if (!res.ok) throw new Error('API limit reached');
        const data = await res.json();
        
        // ピカチュウ、コライドン、ミライドンの不要な派生フォルムを最初から除外
        const allItems = data.results.filter(item => {
            const idMatch = item.url.match(/\/pokemon\/(\d+)\//);
            const id = idMatch ? parseInt(idMatch[1]) : 0;
            return !shouldExcludePokemon(item.name, id);
        });
        
        document.getElementById('total-target-count').textContent = allItems.length;

        let loaded = [...pokemonList];
        const speciesNameCache = {};

        // 既存のフォールバックから種族名をキャッシュに登録
        loaded.forEach(p => {
            if (p.baseId && p.formType === 'normal') {
                speciesNameCache[p.baseId] = p.name;
            }
        });

        const batchSize = 35;

        for (let i = 0; i < allItems.length; i += batchSize) {
            const batch = allItems.slice(i, i + batchSize);
            const promises = batch.map(async (item) => {
                const idMatch = item.url.match(/\/pokemon\/(\d+)\//);
                const id = idMatch ? parseInt(idMatch[1]) : 0;
                if (!id) return;
                if (shouldExcludePokemon(item.name, id)) return;
                
                // すでに読み込み済みでかつformTypeが揃っている場合はスキップ
                const existingIndex = loaded.findIndex(p => p.id === id);
                if (existingIndex > -1 && loaded[existingIndex].formType) return;

                try {
                    const pRes = await fetch(item.url);
                    const pData = await pRes.json();
                    
                    // baseId（全国図鑑番号）を特定
                    let baseId = id;
                    let speciesUrl = pData.species?.url;
                    if (speciesUrl) {
                        const m = speciesUrl.match(/\/pokemon-species\/(\d+)\//);
                        if (m) baseId = parseInt(m[1]);
                    }

                    if (shouldExcludePokemon(pData.name, id, baseId)) return;

                    // 日本語種族名を取得（キャッシュにあれば再利用してAPI節約）
                    let speciesName = speciesNameCache[baseId];
                    if (!speciesName) {
                        try {
                            const sRes = await fetch(speciesUrl || `https://pokeapi.co/api/v2/pokemon-species/${baseId}/`);
                            const sData = await sRes.json();
                            const jpObj = sData.names?.find(n => n.language.name === 'ja') ||
                                          sData.names?.find(n => n.language.name === 'ja-Hrkt' || n.language.name === 'ja-hrkt') ||
                                          sData.names?.find(n => n.language.name === 'roomaji' || n.language.name === 'ja-roma');
                            speciesName = jpObj ? jpObj.name : pData.name;
                            speciesNameCache[baseId] = speciesName;
                        } catch (e) {
                            speciesName = pData.name;
                        }
                    }

                    // フォルム情報の判定（メガシンカ、アローラ、ガラル、ヒスイ、パルデア等）
                    const formInfo = determineFormInfo(pData.name, id, speciesName);
                    const name = formInfo.displayName;

                    const types = pData.types.map(t => typeEnToJp[t.type.name] || t.type.name);
                    const stats = {};
                    pData.stats.forEach(st => {
                        if (st.stat.name === 'hp') stats.hp = st.base_stat;
                        if (st.stat.name === 'attack') stats.atk = st.base_stat;
                        if (st.stat.name === 'defense') stats.def = st.base_stat;
                        if (st.stat.name === 'special-attack') stats.spa = st.base_stat;
                        if (st.stat.name === 'special-defense') stats.spd = st.base_stat;
                        if (st.stat.name === 'speed') stats.spe = st.base_stat;
                    });
                    const total = (stats.hp||0) + (stats.atk||0) + (stats.def||0) + (stats.spa||0) + (stats.spd||0) + (stats.spe||0);
                    
                    // イラスト画像（公式アートワーク優先、なければ通常スプライト、なければ通常種のイラスト）
                    const image = pData.sprites.other?.['official-artwork']?.front_default 
                        || pData.sprites.front_default 
                        || `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${baseId}.png`;
                    
                    // 鳴き声（特殊フォルムでも基本種の鳴き声をフォールバック指定、criesリポジトリパスを使用）
                    const cry = pData.cries?.latest 
                        || `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${id}.ogg`;

                    const pokemonObj = {
                        id,
                        baseId,
                        _baseSpeciesName: cleanBaseSpeciesName(speciesName),
                        rawName: pData.name,
                        name,
                        formType: formInfo.formType,
                        formLabel: formInfo.formLabel,
                        types,
                        ...stats,
                        total,
                        image,
                        cry
                    };

                    if (existingIndex > -1) {
                        loaded[existingIndex] = pokemonObj;
                    } else {
                        loaded.push(pokemonObj);
                    }
                } catch (err) {
                    // 個別取得エラーはスキップ
                }
            });

            await Promise.all(promises);

            // ソート: 全国図鑑番号（baseId）順かつ同一番号内はID順
            pokemonList = loaded.filter(p => !shouldExcludePokemon(p.rawName, p.id, p.baseId)).sort((a, b) => {
                if (a.baseId === b.baseId) return a.id - b.id;
                return a.baseId - b.baseId;
            });

            updateLoadedCount();
            updateFormCounts();
            filterAndRenderPokemon();
            
            const percent = Math.min(100, Math.round((pokemonList.length / allItems.length) * 100));
            document.getElementById('loading-progress').style.width = percent + '%';
        }

        localStorage.setItem(CACHE_KEY, JSON.stringify(pokemonList));
        document.getElementById('loading-banner').classList.add('hidden');
    } catch (error) {
        console.warn("Network or API restricted, using embedded fallback data.", error);
        document.getElementById('loading-text').textContent = "オフライン・内蔵フォールバックデータ（メガシンカ・アローラ含む）で動作中";
        setTimeout(() => {
            document.getElementById('loading-banner').classList.add('hidden');
        }, 3000);
    }
}

function updateLoadedCount() {
    const el = document.getElementById('loaded-count');
    if (el) el.textContent = pokemonList.length;
    const targetEl = document.getElementById('total-target-count');
    if (targetEl) {
        // 最大ポケモン数（全1257匹）を表示。全データ取得完了後は実データ数と連動
        const maxCount = Math.max(TOTAL_POKEMON_TARGET, pokemonList.length);
        targetEl.textContent = maxCount;
    }
    const loadingText = document.getElementById('loading-text');
    const loadingBanner = document.getElementById('loading-banner');
    if (loadingText && loadingBanner && !loadingBanner.classList.contains('hidden')) {
        const maxCount = Math.max(TOTAL_POKEMON_TARGET, pokemonList.length);
        const percent = Math.min(100, Math.round((pokemonList.length / maxCount) * 100));
        loadingText.textContent = `全ポケモンデータを取得中... (${pokemonList.length} / ${maxCount} 匹 - ${percent}%)`;
        const progressBar = document.getElementById('loading-progress');
        if (progressBar) progressBar.style.width = percent + '%';
    }
}

function selectRandomPokemon() {
    if (pokemonList.length === 0) {
        showAlert('ポケモンデータがまだ読み込まれていません。');
        return;
    }
    const randomIndex = Math.floor(Math.random() * pokemonList.length);
    const randomPokemon = pokemonList[randomIndex];
    openDetailModal(randomPokemon);
}

function playMewMelodyDirectly() {
    if (pokemonList.length === 0) {
        showAlert('ポケモンデータがまだ読み込まれていません。');
        return;
    }
    let mew = pokemonList.find(p => p.id === 151 || (p.baseId === 151 && p.formType === 'normal'));
    if (!mew) {
        mew = pokemonList.find(p => p.name.includes('ミュウ')) || { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100, total: 600 };
    }
    // 詳細モーダルを開かずに、ミュウの種族値音（All 100）のみを直接再生
    playStatMelody(mew);
}

function renderTypeFilters() {
    const containers = [
        document.getElementById('type-filters'),
        document.getElementById('sticky-type-filters')
    ].filter(Boolean);

    containers.forEach(container => {
        container.innerHTML = '';
        Object.keys(typeEnToJp).forEach(enKey => {
            const jpName = typeEnToJp[enKey];
            const colorInfo = typeColors[jpName] || { bg: "bg-slate-500", text: "text-white" };
            const btn = document.createElement('button');
            btn.className = `type-chip px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer border border-slate-200/50 shadow-xs hover:scale-105 ${colorInfo.bg} ${colorInfo.text} opacity-90 hover:opacity-100`;
            btn.textContent = jpName;
            btn.dataset.type = jpName;
            btn.onclick = () => {
                if (selectedTypes.has(jpName)) {
                    selectedTypes.delete(jpName);
                } else {
                    selectedTypes.add(jpName);
                }
                syncTypeChips();
                filterAndRenderPokemon();
            };
            container.appendChild(btn);
        });
    });
}

function syncTypeChips() {
    document.querySelectorAll('.type-chip').forEach(el => {
        const type = el.dataset.type;
        if (selectedTypes.has(type)) {
            el.classList.add('ring-2', 'ring-slate-900', 'scale-105');
        } else {
            el.classList.remove('ring-2', 'ring-slate-900', 'scale-105');
        }
    });
    const hasSelected = selectedTypes.size > 0;
    const r1 = document.getElementById('reset-types');
    const r2 = document.getElementById('sticky-reset-types');
    if (r1) r1.classList.toggle('hidden', !hasSelected);
    if (r2) r2.classList.toggle('hidden', !hasSelected);
}

// ひらがな・カタカナ相互変換用ユーティリティ
function toKatakana(str) {
    return str.replace(/[\u3041-\u3096]/g, match => String.fromCharCode(match.charCodeAt(0) + 0x60));
}
function toHiragana(str) {
    return str.replace(/[\u30a1-\u30f6]/g, match => String.fromCharCode(match.charCodeAt(0) - 0x60));
}

function filterAndRenderPokemon() {
    const rawQuery = document.getElementById('search-input').value.trim();
    const query = rawQuery.toLowerCase();
    const queryKata = toKatakana(query);
    const queryHira = toHiragana(query);
    const sortType = document.getElementById('sort-select').value;
    const hasQuery = Boolean(query);

    let filtered = pokemonList.filter(p => {
        // 1. フォルムフィルター（最速で判定・脱出）
        if (currentFormFilter === 'mega') {
            if (p.formType !== 'mega') return false;
        } else if (currentFormFilter === 'regional') {
            if (p.formType !== 'regional') return false;
        } else if (currentFormFilter === 'normal') {
            if (p.formType !== 'normal') return false;
        } else if (currentFormFilter === 'other') {
            if (p.formType !== 'other') return false;
        }

        // 2. タイプフィルター（最速で判定・脱出）
        if (selectedTypes.size > 0) {
            for (const t of selectedTypes) {
                if (!p.types.includes(t)) return false;
            }
        }

        if (!hasQuery) return true;

        // 3. 検索文字列キャッシュ（初回のみ計算・2回目以降ゼロコスト）
        if (!p._sc) {
            const nl = (p.name || '').toLowerCase();
            const fl = (p.formLabel || '').toLowerCase();
            const aliases = getPokemonAliases(p);
            p._sc = {
                name: nl,
                nameHira: toHiragana(nl),
                form: fl,
                formHira: toHiragana(fl),
                rawName: (p.rawName || '').toLowerCase(),
                aliasesNorm: aliases.map(a => normalizePokemonQuery(a)),
                aliasesHira: aliases.map(a => toHiragana(normalizePokemonQuery(a))),
                idStr: p.id.toString(),
                baseIdStr: p.baseId ? p.baseId.toString() : '',
                baseIdPad3: p.baseId ? p.baseId.toString().padStart(3, '0') : '',
                baseIdPad4: p.baseId ? p.baseId.toString().padStart(4, '0') : ''
            };
        }

        const sc = p._sc;
        const normQ = normalizePokemonQuery(query);
        const normKataQ = toKatakana(normQ);
        const normHiraQ = toHiragana(normQ);
        const matchAlias = sc.aliasesNorm.some(a => a.includes(normQ) || a.includes(normKataQ)) ||
                           sc.aliasesHira.some(a => a.includes(normHiraQ));

        return sc.name.includes(query) ||
               sc.name.includes(queryKata) ||
               sc.nameHira.includes(query) ||
               sc.nameHira.includes(queryHira) ||
               sc.form.includes(query) ||
               sc.form.includes(queryKata) ||
               sc.formHira.includes(query) ||
               sc.formHira.includes(queryHira) ||
               sc.rawName.includes(query) ||
               matchAlias ||
               sc.idStr === query ||
               sc.baseIdStr === query ||
               sc.baseIdPad3 === query ||
               sc.baseIdPad4 === query;
    });

    // ソート処理
    filtered.sort((a, b) => {
        if (sortType === 'id-asc') {
            if (a.baseId === b.baseId) return a.id - b.id;
            return a.baseId - b.baseId;
        }
        if (sortType === 'id-desc') {
            if (a.baseId === b.baseId) return b.id - a.id;
            return b.baseId - a.baseId;
        }
        if (sortType === 'total-desc') return b.total - a.total;
        if (sortType === 'total-asc') return a.total - b.total;
        if (sortType === 'hp-desc') return b.hp - a.hp;
        if (sortType === 'atk-desc') return b.atk - a.atk;
        if (sortType === 'def-desc') return b.def - a.def;
        if (sortType === 'spa-desc') return b.spa - a.spa;
        if (sortType === 'spd-desc') return b.spd - a.spd;
        if (sortType === 'spe-desc') return b.spe - a.spe;
        return a.baseId - b.baseId;
    });

    renderPokemonGrid(filtered);
}

function getFormBadgeHtml(p) {
    if (p.formType === 'mega') {
        let grad = "from-purple-600 to-pink-600";
        if (p.formLabel.includes('Z')) {
            grad = "from-emerald-600 to-teal-500";
        } else if (p.formLabel.includes('X')) {
            grad = "from-indigo-600 to-blue-500";
        } else if (p.formLabel.includes('Y')) {
            grad = "from-amber-600 to-rose-500";
        }
        return `<span class="px-2 py-0.5 rounded-md text-[10px] font-black bg-gradient-to-r ${grad} text-white shadow-xs"><i class="fa-solid fa-dna mr-0.5"></i>${p.formLabel}</span>`;
    }
    if (p.formType === 'regional') {
        let col = "from-sky-500 to-blue-600";
        if (p.formLabel.includes('ガラル')) col = "from-fuchsia-500 to-rose-600";
        if (p.formLabel.includes('ヒスイ')) col = "from-emerald-600 to-teal-700";
        if (p.formLabel.includes('パルデア')) {
            if (p.formLabel.includes('ほのお')) col = "from-amber-500 to-red-600";
            else if (p.formLabel.includes('みず')) col = "from-sky-500 to-blue-700";
            else if (p.formLabel.includes('かくとう')) col = "from-orange-600 to-amber-700";
            else col = "from-amber-500 to-orange-600";
        }
        return `<span class="px-2 py-0.5 rounded-md text-[10px] font-black bg-gradient-to-r ${col} text-white shadow-xs"><i class="fa-solid fa-earth-asia mr-0.5"></i>${p.formLabel}</span>`;
    }
    if (p.formType === 'other') {
        return `<span class="px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-700 text-white shadow-xs">${p.formLabel}</span>`;
    }
    return '';
}

function renderPokemonGrid(list) {
    const grid = document.getElementById('pokemon-grid');
    const emptyState = document.getElementById('empty-state');
    const sentinel = document.getElementById('scroll-sentinel');
    const resCountSpan = document.getElementById('result-count')?.querySelector('span');
    if (resCountSpan) resCountSpan.textContent = list.length;

    currentFilteredList = list;
    renderedCount = 0;
    grid.innerHTML = '';

    if (list.length === 0) {
        emptyState.classList.remove('hidden');
        if (sentinel) sentinel.classList.add('hidden');
        return;
    }

    emptyState.classList.add('hidden');
    renderNextBatch();
    initInfiniteScroll();
}

function renderNextBatch() {
    if (renderedCount >= currentFilteredList.length) {
        const sentinel = document.getElementById('scroll-sentinel');
        if (sentinel) sentinel.classList.add('hidden');
        return;
    }

    const grid = document.getElementById('pokemon-grid');
    const batch = currentFilteredList.slice(renderedCount, renderedCount + PAGE_SIZE);

    const html = batch.map(p => {
        const badge = getFormBadgeHtml(p);
        const displayId = (p.baseId || p.id).toString().padStart(4, '0');

        return `
            <div onclick="openDetailModalFromId(${p.id})" class="pokemon-card-item bg-white rounded-2xl p-4 border border-slate-200 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group relative">
                <div class="flex justify-between items-start">
                    <div class="flex items-center gap-1.5 flex-wrap">
                        <span class="text-xs font-black text-slate-400">#${displayId}</span>
                        ${badge}
                    </div>
                </div>
                <div class="my-2 flex justify-center">
                    <img src="${p.image || POKEBALL_FALLBACK_SVG}" alt="${p.name}" width="112" height="112" loading="lazy" decoding="async" class="w-28 h-28 object-contain group-hover:scale-110 transition-transform duration-300" onerror="handlePokemonImageError(this, ${p.baseId || p.id})">
                </div>
                <div class="flex flex-col gap-2">
                    <h3 class="text-sm sm:text-base font-bold text-slate-800 text-center line-clamp-1" title="${p.name}">${p.name}</h3>
                    <div class="flex justify-center gap-1 flex-wrap">
                        ${p.types.map(t => {
                            const col = typeColors[t] || { bg: 'bg-slate-500', text: 'text-white' };
                            return `<span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${col.bg} ${col.text}">${t}</span>`;
                        }).join('')}
                    </div>
                    <div class="bg-slate-50 rounded-xl p-2.5 mt-1 border border-slate-100 flex justify-between items-center text-xs">
                        <span class="text-slate-500 font-medium">種族値合計</span>
                        <strong class="text-slate-900 font-black text-sm">${p.total}</strong>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    grid.insertAdjacentHTML('beforeend', html);
    renderedCount += batch.length;

    const sentinel = document.getElementById('scroll-sentinel');
    if (sentinel) {
        sentinel.classList.toggle('hidden', renderedCount >= currentFilteredList.length);
    }
}

function initInfiniteScroll() {
    const sentinel = document.getElementById('scroll-sentinel');
    if (!sentinel) return;

    if (infiniteScrollObserver) {
        infiniteScrollObserver.disconnect();
    }

    infiniteScrollObserver = new IntersectionObserver((entries) => {
        if (entries[0] && entries[0].isIntersecting) {
            renderNextBatch();
        }
    }, { rootMargin: '400px' });

    infiniteScrollObserver.observe(sentinel);
}

function openDetailModalFromId(id) {
    const p = pokemonList.find(item => item.id === id);
    if (p) openDetailModal(p);
}

function openDetailModal(p) {
    const modal = document.getElementById('detail-modal');
    const content = document.getElementById('modal-content');

    const statsArr = [
        { label: 'HP', val: p.hp, key: 'hp' },
        { label: 'こうげき', val: p.atk, key: 'atk' },
        { label: 'ぼうぎょ', val: p.def, key: 'def' },
        { label: 'とくこう', val: p.spa, key: 'spa' },
        { label: 'とくぼう', val: p.spd, key: 'spd' },
        { label: 'すばやさ', val: p.spe, key: 'spe' }
    ];

    const displayId = (p.baseId || p.id).toString().padStart(4, '0');
    const badge = getFormBadgeHtml(p);

    content.innerHTML = `
        <div class="p-6 bg-slate-900 text-white rounded-t-3xl flex justify-between items-center relative overflow-hidden">
            <div class="absolute -right-6 -bottom-6 w-32 h-32 bg-white/5 rounded-full pointer-events-none"></div>
            <div>
                <div class="flex items-center gap-2 mb-1">
                    <span class="text-xs font-bold text-red-400">#${displayId}</span>
                    ${badge}
                </div>
                <h2 class="text-2xl font-black">${p.name}</h2>
                <div class="flex gap-1.5 mt-2 flex-wrap">
                    ${p.types.map(t => {
                        const col = typeColors[t] || { bg: 'bg-slate-500', text: 'text-white' };
                        return `<span class="px-2.5 py-0.5 rounded-full text-xs font-bold ${col.bg} ${col.text}">${t}</span>`;
                    }).join('')}
                </div>
            </div>
            <button onclick="closeDetailModal()" class="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </div>
        <div class="p-6 flex flex-col gap-6">
            <div class="flex flex-col sm:flex-row items-center gap-6 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <img src="${p.image || POKEBALL_FALLBACK_SVG}" alt="${p.name}" class="w-36 h-36 object-contain drop-shadow-md" onerror="handlePokemonImageError(this, ${p.baseId || p.id})">
                <div class="flex flex-col gap-2.5 w-full">
                    <button onclick="playPokemonCrySafeCurrent()" class="w-full py-2.5 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer">
                        <i class="fa-solid fa-volume-high"></i>
                        <span>ポケモンの鳴き声を聴く (安全再生)</span>
                    </button>
                    <div class="grid grid-cols-2 gap-2">
                        <button onclick="playStatMelodyCurrent()" id="play-melody-btn" class="py-2.5 px-2 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer" title="このポケモンの種族値メロディを再生">
                            <i class="fa-solid fa-music"></i>
                            <span class="line-clamp-1">種族値メロディ</span>
                        </button>
                        <button onclick="playMewMelodyDirectly()" class="py-2.5 px-2 bg-pink-600 hover:bg-pink-700 text-white rounded-xl font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer" title="全種族値100の基準音（ミュウ）を聴く">
                            <i class="fa-solid fa-cat text-pink-200"></i>
                            <span class="line-clamp-1">ミュウの基準音</span>
                        </button>
                    </div>
                    <div class="bg-white p-2.5 rounded-xl border border-slate-200 flex justify-between items-center text-xs">
                        <span class="text-slate-500 font-bold">種族値総合計</span>
                        <span id="total-stat-display" class="text-base font-black text-red-600">${p.total}</span>
                    </div>
                </div>
            </div>

            <div class="flex flex-col gap-3">
                <h4 class="text-xs font-bold text-slate-500 uppercase tracking-wider">ステータス詳細</h4>
                <div class="flex flex-col gap-2.5">
                    ${statsArr.map((st, idx) => `
                        <div id="stat-row-${idx}" class="flex items-center gap-3 text-xs transition-colors p-1.5 rounded-lg">
                            <span class="w-20 font-bold text-slate-600">${st.label}</span>
                            <span id="stat-val-${idx}" class="w-8 text-right font-black text-slate-900">${st.val}</span>
                            <div class="flex-grow bg-slate-100 h-2.5 rounded-full overflow-hidden">
                                <div class="bg-red-500 h-full rounded-full transition-all duration-300" style="width: ${Math.min(100, (st.val / 255) * 100)}%"></div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;

    currentModalPokemon = p;
    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        modal.querySelector('#modal-content').classList.remove('scale-95');
    }, 10);
}

let currentModalPokemon = null;

function playPokemonCrySafeCurrent() {
    if (currentModalPokemon) {
        playPokemonCrySafe(currentModalPokemon);
    }
}

function playStatMelodyCurrent() {
    if (currentModalPokemon) {
        playStatMelody(currentModalPokemon);
    }
}

function playPokemonCry(url) {
    const audio = new Audio(url);
    audio.volume = 0.5;
    audio.play().catch(e => {
        console.warn("Audio playback failed", e);
        showAlert('鳴き声の再生に失敗しました。代わりの種族値メロディを再生します。');
    });
}

function playPokemonCrySafe(p) {
    if (!p) return;

    const isSpecialForm = (p.id > 1025) || (p.formType && p.formType !== 'normal');

    // 特殊フォルム（メガシンカ、リージョンフォームなど）の場合
    if (isSpecialForm) {
        // 専用音源URLを決定
        let formCryUrl = p.cry ? p.cry.replace('/sprites/pokemon/latest/', '/cries/pokemon/latest/') : null;
        
        // もし元の通常ポケモンのbaseId音源が指定されていた場合は専用音源ではないのでフォルム固有IDを試す
        if (formCryUrl && p.baseId && formCryUrl.endsWith(`/${p.baseId}.ogg`) && p.baseId !== p.id) {
            formCryUrl = `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${p.id}.ogg`;
        }
        if (!formCryUrl) {
            formCryUrl = `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${p.id}.ogg`;
        }

        const audio = new Audio(formCryUrl);
        audio.volume = 0.6;

        audio.play().then(() => {
            // 専用音源の再生成功！
        }).catch(err => {
            console.warn(`専用鳴き声の再生に失敗 (${formCryUrl}):`, err);
            // 元のポケモンの鳴き声にはフォールバックせず、未対応通知を表示
            showAlert(`「${p.name}」の専用鳴き声には対応していません。`);
        });
        return;
    }

    // 通常種ポケモンの場合
    const normalCryUrl = p.cry 
        ? p.cry.replace('/sprites/pokemon/latest/', '/cries/pokemon/latest/')
        : `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${p.id}.ogg`;

    const audio = new Audio(normalCryUrl);
    audio.volume = 0.6;

    audio.play().then(() => {
        // 再生成功
    }).catch(err => {
        console.warn(`鳴き声の再生に失敗 (${normalCryUrl}):`, err);
        showAlert(`「${p.name}」の鳴き声には対応していません。`);
    });
}

function closeDetailModal() {
    const modal = document.getElementById('detail-modal');
    modal.classList.add('opacity-0');
    modal.querySelector('#modal-content').classList.add('scale-95');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
    if (window.activeAudioTimeout) clearTimeout(window.activeAudioTimeout);
}

function playStatMelody(p) {
    if (isPlayingAudio) return;
    isPlayingAudio = true;
    const btn = document.getElementById('play-melody-btn');
    if (btn) {
        btn.disabled = true;
        btn.classList.add('opacity-50');
    }

    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const ctx = new AudioContext();

        const stats = [p.hp, p.atk, p.def, p.spa, p.spd, p.spe];
        const noteDuration = 0.50; // 音の出る速さを約0.5秒おきに調整

        function statToFreq(val) {
            return 130 + (val / 255) * 750;
        }

        stats.forEach((val, i) => {
            const startTime = ctx.currentTime + (i * noteDuration);
            const freq = statToFreq(val);

            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, startTime);

            gain.gain.setValueAtTime(0, startTime);
            gain.gain.linearRampToValueAtTime(0.25, startTime + 0.06);
            gain.gain.exponentialRampToValueAtTime(0.001, startTime + noteDuration - 0.04);

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.start(startTime);
            osc.stop(startTime + noteDuration);

            setTimeout(() => {
                document.querySelectorAll('[id^="stat-row-"]').forEach(el => el.classList.remove('bg-red-100', 'font-black'));
                const row = document.getElementById(`stat-row-${i}`);
                if (row) {
                    row.classList.add('bg-red-100', 'font-black');
                }
            }, i * noteDuration * 1000);
        });

        const totalStartTime = ctx.currentTime + (stats.length * noteDuration);
        const totalDuration = 0.7;
        const totalFreq = 300 + (Math.min(p.total, 720) / 720) * 800;

        setTimeout(() => {
            document.querySelectorAll('[id^="stat-row-"]').forEach(el => el.classList.remove('bg-red-100', 'font-black'));
            const totalDisp = document.getElementById('total-stat-display');
            if (totalDisp) totalDisp.classList.add('scale-125', 'text-red-700', 'transition-transform');
        }, stats.length * noteDuration * 1000);

        const totalOsc = ctx.createOscillator();
        const totalGain = ctx.createGain();

        totalOsc.type = 'sine';
        totalOsc.frequency.setValueAtTime(totalFreq, totalStartTime);

        totalGain.gain.setValueAtTime(0, totalStartTime);
        totalGain.gain.linearRampToValueAtTime(0.35, totalStartTime + 0.1);
        totalGain.gain.exponentialRampToValueAtTime(0.001, totalStartTime + totalDuration);

        totalOsc.connect(totalGain);
        totalGain.connect(ctx.destination);

        totalOsc.start(totalStartTime);
        totalOsc.stop(totalStartTime + totalDuration);

        window.activeAudioTimeout = setTimeout(() => {
            document.querySelectorAll('[id^="stat-row-"]').forEach(el => el.classList.remove('bg-red-100', 'font-black'));
            const totalDisp = document.getElementById('total-stat-display');
            if (totalDisp) totalDisp.classList.remove('scale-125', 'text-red-700');
            if (btn) {
                btn.disabled = false;
                btn.classList.remove('opacity-50');
            }
            isPlayingAudio = false;
        }, (stats.length * noteDuration + totalDuration) * 1000);

    } catch (e) {
        console.error(e);
        isPlayingAudio = false;
        if (btn) {
            btn.disabled = false;
            btn.classList.remove('opacity-50');
        }
    }
}

// ---- Top Sticky Floating Trigger & Accordion Panel on scroll ----
(function () {
    const searchCard = document.getElementById('search-card');
    const header = document.querySelector('header');
    const toggleBtn = document.getElementById('sticky-search-toggle');
    const drawer = document.getElementById('sticky-search-drawer');
    const toggleArrow = document.getElementById('sticky-toggle-arrow');
    const toggleText = document.getElementById('sticky-toggle-text');
    const stickyInput = document.getElementById('sticky-search-input');

    if (!header || !toggleBtn || !drawer) return;

    // ヘッダーの実際の高さをCSSカスタムプロパティで管理
    function updateHeaderHeight() {
        const h = header.getBoundingClientRect().height;
        document.documentElement.style.setProperty('--header-h', h + 'px');
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            requestAnimationFrame(() => setTimeout(updateHeaderHeight, 50));
        });
    } else {
        requestAnimationFrame(() => setTimeout(updateHeaderHeight, 50));
    }

    if (window.ResizeObserver) {
        new ResizeObserver(updateHeaderHeight).observe(header);
    } else {
        window.addEventListener('resize', updateHeaderHeight, { passive: true });
    }

    let isDrawerOpen = false;

    function openDrawer() {
        isDrawerOpen = true;
        drawer.classList.add('open');
        if (toggleArrow) toggleArrow.classList.add('rotate-180');
        if (toggleText) toggleText.textContent = '検索・絞り込みを閉じる';
        setTimeout(() => {
            if (stickyInput) stickyInput.focus();
        }, 150);
    }

    function closeDrawer() {
        isDrawerOpen = false;
        drawer.classList.remove('open');
        if (toggleArrow) toggleArrow.classList.remove('rotate-180');
        if (toggleText) toggleText.textContent = '検索・絞り込みを表示';
    }

    toggleBtn.addEventListener('click', () => {
        if (isDrawerOpen) {
            closeDrawer();
        } else {
            openDrawer();
        }
    });

    // スクロール検知：元の検索カードが画面上部に隠れたら下向き矢印ボタンを出現
    const THRESHOLD_ON = 280;
    const THRESHOLD_OFF = 160;
    let isVisible = false;
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (currentAppMode !== 'pokedex') {
            if (isVisible) {
                isVisible = false;
                toggleBtn.classList.remove('visible');
                if (isDrawerOpen) closeDrawer();
            }
            return;
        }

        if (!ticking) {
            window.requestAnimationFrame(() => {
                const y = window.scrollY;
                if (!isVisible && y > THRESHOLD_ON) {
                    isVisible = true;
                    toggleBtn.classList.add('visible');
                } else if (isVisible && y < THRESHOLD_OFF) {
                    isVisible = false;
                    toggleBtn.classList.remove('visible');
                    // 最上部付近に戻ったらドロワーも自動的に閉じる
                    if (isDrawerOpen) closeDrawer();
                }
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
})();

// ==========================================
// アプリモード管理 (クイズ主役 / 図鑑サブ機能)
// ==========================================
let currentAppMode = 'quiz'; // 'quiz' (メイン) | 'pokedex' (サブ)

// ==========================================
// クイズモード実装ロジック
// ==========================================
let quizCurrentMode = 'normal'; // 'normal' (ノーマル) | 'hard' (ハード)
let quizIsPlaying = false; // クイズ進行中フラグ (セキュリティ監視連動)
let quizRemainingAttempts = 10;
const QUIZ_MAX_ATTEMPTS = 10;
let quizGuessedList = []; // 回答済みポケモンオブジェクトの履歴配列

// ==========================================
// 不正防止・セキュリティ強化ロジック
// ==========================================
// 正解ポケモンの完全隠蔽（コンソールや開発者ツールからのカンニング防止）
let _secretQuizTarget = null;
let _revealedQuizTarget = null;

// window.quizTargetPokemon に対するコンソール直接アクセスの防御プロテクト
Object.defineProperty(window, 'quizTargetPokemon', {
    get() {
        if (quizIsPlaying) {
            console.warn('%c🛡️ セキュリティ警告: クイズプレイ中の正解データへの直接参照はブロックされています。', 'color: #ef4444; font-weight: 900; font-size: 13px;');
            return undefined;
        }
        return _revealedQuizTarget;
    },
    set(val) {
        _revealedQuizTarget = val;
    },
    configurable: true
});

// セキュリティ警告トースト通知の表示
function showSecurityToast(message) {
    const toast = document.getElementById('quiz-security-toast');
    const text = document.getElementById('quiz-security-toast-text');
    if (!toast || !text) return;
    text.textContent = message;
    toast.classList.remove('opacity-0', '-translate-y-4');
    toast.classList.add('opacity-100', 'translate-y-0');
    clearTimeout(window._quizToastTimer);
    window._quizToastTimer = setTimeout(() => {
        toast.classList.remove('opacity-100', 'translate-y-0');
        toast.classList.add('opacity-0', '-translate-y-4');
    }, 2800);
}

// 1. 開発者ツールショートカット (F12, Ctrl+Shift+I/J/C, Ctrl+U) のブロック
window.addEventListener('keydown', (e) => {
    if (!quizIsPlaying) return;

    // F12キー
    if (e.key === 'F12' || e.keyCode === 123) {
        e.preventDefault();
        e.stopPropagation();
        showSecurityToast('🛡️ クイズ中は開発者ツール (F12) の起動は禁止されています');
        return false;
    }

    // Ctrl + Shift + I/J/C (インスペクター・コンソール・要素検証)
    if (e.ctrlKey && e.shiftKey && (['I', 'i', 'J', 'j', 'C', 'c'].includes(e.key) || [73, 74, 67].includes(e.keyCode))) {
        e.preventDefault();
        e.stopPropagation();
        showSecurityToast('🛡️ クイズ中は開発者ツールのショートカットは無効化されています');
        return false;
    }

    // Ctrl + U (ソース表示)
    if (e.ctrlKey && (['U', 'u'].includes(e.key) || e.keyCode === 85)) {
        e.preventDefault();
        e.stopPropagation();
        showSecurityToast('🛡️ クイズ中はソース表示は無効化されています');
        return false;
    }
}, true);

// 2. 右クリック (コンテキストメニュー・検証) のブロック
window.addEventListener('contextmenu', (e) => {
    if (quizIsPlaying) {
        e.preventDefault();
        showSecurityToast('🛡️ クイズ中は右クリック（要素検証メニュー）は無効化されています');
        return false;
    }
}, true);

// 3. 別タブ・別ウィンドウ・画面離脱（カンニング）の検知・ペナルティ
let quizBlurCount = 0;
let isShowingBlurWarning = false;

function handleQuizVisibilityOrBlur() {
    if (!quizIsPlaying || isShowingBlurWarning) return;

    // 画面が非表示、またはフォーカスが別ウィンドウに移った場合
    if (document.hidden || !document.hasFocus()) {
        quizBlurCount++;
        const countEl = document.getElementById('quiz-blur-warning-count');
        if (countEl) countEl.textContent = quizBlurCount;

        if (quizBlurCount === 1) {
            isShowingBlurWarning = true;
            stopQuizWave();
            if (window.activeAudioTimeout) clearTimeout(window.activeAudioTimeout);
            const warningModal = document.getElementById('quiz-blur-warning-modal');
            if (warningModal) warningModal.classList.remove('hidden');
        } else if (quizBlurCount >= 2) {
            // 2回以上の離脱でカンニング防止ルールによる失格
            isShowingBlurWarning = false;
            const warningModal = document.getElementById('quiz-blur-warning-modal');
            if (warningModal) warningModal.classList.add('hidden');
            finishQuiz(false, null, false, false, true); // isDisqualified = true
        }
    }
}

document.addEventListener('visibilitychange', () => {
    if (document.hidden) handleQuizVisibilityOrBlur();
});
window.addEventListener('blur', () => {
    handleQuizVisibilityOrBlur();
});

function resumeFromBlurWarning() {
    isShowingBlurWarning = false;
    const warningModal = document.getElementById('quiz-blur-warning-modal');
    if (warningModal) warningModal.classList.add('hidden');
    const input = document.getElementById('quiz-guess-input');
    if (input) input.focus();
}

// ==========================================
// メイン/サブ モード切替制御 (クイズ主役 / 図鑑サブ)
// ==========================================
function switchAppMode(mode) {
    if (mode === 'pokedex' && quizIsPlaying) {
        if (!confirm('クイズプレイ中です。図鑑を開くと現在のクイズは降参（終了）扱いとなります。\n図鑑を開きますか？')) {
            return;
        }
        giveUpQuiz();
    }

    currentAppMode = mode;

    const quizView = document.getElementById('quiz-main-view');
    const pokedexView = document.getElementById('pokedex-sub-view');
    const stickyWrapper = document.getElementById('sticky-search-wrapper');
    const navBtnQuiz = document.getElementById('nav-btn-quiz');
    const navBtnPokedex = document.getElementById('nav-btn-pokedex');

    if (mode === 'quiz') {
        if (quizView) quizView.classList.remove('hidden');
        if (pokedexView) pokedexView.classList.add('hidden');
        if (stickyWrapper) stickyWrapper.classList.add('hidden');

        // ナビボタンのハイライト更新
        if (navBtnQuiz) {
            navBtnQuiz.className = 'px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center gap-2 bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-md cursor-pointer';
        }
        if (navBtnPokedex) {
            navBtnPokedex.className = 'px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold text-slate-300 hover:text-white transition-all flex items-center gap-2 cursor-pointer';
        }

        // もしクイズ進行中でなく、結果画面も非表示なら難易度選択画面に戻る
        const isResultScreenHidden = document.getElementById('quiz-result-screen')?.classList.contains('hidden') ?? true;
        if (!quizIsPlaying && isResultScreenHidden) {
            backToQuizModeSelect();
        }
    } else {
        if (quizView) quizView.classList.add('hidden');
        if (pokedexView) pokedexView.classList.remove('hidden');
        if (stickyWrapper) stickyWrapper.classList.remove('hidden');

        // ナビボタンのハイライト更新
        if (navBtnQuiz) {
            navBtnQuiz.className = 'px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold text-slate-300 hover:text-white transition-all flex items-center gap-2 cursor-pointer';
        }
        if (navBtnPokedex) {
            navBtnPokedex.className = 'px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center gap-2 bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-md cursor-pointer';
        }

        // 図鑑のカード描画を最新化
        filterAndRenderPokemon();
    }

    // 画面トップへスムーズに移動
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openQuizModal() {
    switchAppMode('quiz');
}

function closeQuizModal() {
    switchAppMode('pokedex');
}

function triggerQuizWave(durationSec) {
    const bars = document.querySelectorAll('.quiz-wave-bar');
    bars.forEach(b => b.classList.add('playing'));

    setTimeout(() => {
        bars.forEach(b => b.classList.remove('playing'));
    }, (durationSec || 2.4) * 1000);
}

function stopQuizWave() {
    document.querySelectorAll('.quiz-wave-bar').forEach(b => b.classList.remove('playing'));
}

function updateQuizCryHintState() {
    const cryBtn = document.getElementById('quiz-cry-hint-btn');
    const statusBox = document.getElementById('quiz-cry-hint-status');
    const statusText = document.getElementById('quiz-cry-hint-status-text');
    const statusIcon = document.getElementById('quiz-cry-hint-icon');

    const wrongCount = quizGuessedList.length;
    const requiredWrong = 5;

    if (wrongCount >= requiredWrong) {
        // 5問以上間違えた場合: 鳴き声ヒント解放！
        if (cryBtn) cryBtn.classList.remove('hidden');
        if (statusBox) {
            statusBox.className = 'flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-xl bg-amber-50 text-amber-700 border border-amber-200 animate-pulse';
        }
        if (statusIcon) statusIcon.className = 'fa-solid fa-volume-high text-amber-500';
        if (statusText) statusText.textContent = '🔊 鳴き声ヒント解放中！';
    } else {
        // 5問未満の場合: 解放までカウントダウン
        const remaining = requiredWrong - wrongCount;
        if (cryBtn) cryBtn.classList.add('hidden');
        if (statusBox) {
            statusBox.className = 'flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-xl bg-slate-100 text-slate-600 border border-slate-200';
        }
        if (statusIcon) statusIcon.className = 'fa-solid fa-volume-high text-slate-400';
        if (statusText) statusText.textContent = `鳴き声ヒント: 5問ミスで解放 (あと${remaining}回)`;
    }
}

function playQuizTargetCryHint() {
    const target = _secretQuizTarget || _revealedQuizTarget;
    if (!target) return;
    if (quizGuessedList.length < 5 && quizIsPlaying) {
        showSecurityToast('鳴き声ヒントは5問間違えると解放されます。');
        return;
    }

    triggerQuizWave(1.8);
    playPokemonCrySafe(target);
}

function backToQuizModeSelect() {
    quizIsPlaying = false;
    _secretQuizTarget = null;
    isShowingBlurWarning = false;
    const warningModal = document.getElementById('quiz-blur-warning-modal');
    if (warningModal) warningModal.classList.add('hidden');

    document.getElementById('quiz-mode-select-screen').classList.remove('hidden');
    document.getElementById('quiz-playing-screen').classList.add('hidden');
    document.getElementById('quiz-result-screen').classList.add('hidden');
    document.getElementById('quiz-badge-mode').textContent = '';
    closeQuizFormSelectionPanel();
    stopQuizWave();
    updateQuizCryHintState();
}

function startQuiz(mode) {
    quizCurrentMode = mode;
    quizRemainingAttempts = QUIZ_MAX_ATTEMPTS;
    quizGuessedList = [];
    quizBlurCount = 0;
    isShowingBlurWarning = false;
    const warningModal = document.getElementById('quiz-blur-warning-modal');
    if (warningModal) warningModal.classList.add('hidden');

    // 出題候補の絞り込み
    let candidates = [];
    if (mode === 'normal') {
        candidates = pokemonList.filter(p => {
            if (p.formType === 'mega') return true;
            if (p.total >= 460) return true;
            return false;
        });
        if (candidates.length === 0) candidates = pokemonList;
        document.getElementById('quiz-badge-mode').textContent = 'ノーマル';
    } else {
        candidates = [...pokemonList];
        document.getElementById('quiz-badge-mode').textContent = 'ハード';
    }

    const randIdx = Math.floor(Math.random() * candidates.length);
    _secretQuizTarget = candidates[randIdx];
    if (_secretQuizTarget && !_secretQuizTarget.image) {
        _secretQuizTarget.image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${_secretQuizTarget.baseId || _secretQuizTarget.id}.png`;
    }
    _revealedQuizTarget = null;
    quizIsPlaying = true; // セキュリティ監視開始 & window.quizTargetPokemon を不可視化

    document.getElementById('quiz-mode-select-screen').classList.add('hidden');
    document.getElementById('quiz-playing-screen').classList.remove('hidden');
    document.getElementById('quiz-result-screen').classList.add('hidden');

    renderQuizHearts();
    updateQuizCryHintState();
    const input = document.getElementById('quiz-guess-input');
    input.value = '';
    closeQuizFormSelectionPanel();
    input.oninput = handleQuizInputSuggestion;
    const errBox = document.getElementById('quiz-input-error');
    if (errBox) errBox.classList.add('hidden');

    renderQuizHistory();

    // 開始時に正解ポケモンのメロディを再生
    setTimeout(() => {
        playQuizTargetMelody();
        input.focus();
    }, 400);
}

function restartQuizSameMode() {
    startQuiz(quizCurrentMode);
}

function renderQuizHearts() {
    const container = document.getElementById('quiz-heart-container');
    const remainingEl = document.getElementById('quiz-remaining-attempts');
    if (remainingEl) remainingEl.textContent = quizRemainingAttempts;

    if (!container) return;
    container.innerHTML = '';
    for (let i = 0; i < QUIZ_MAX_ATTEMPTS; i++) {
        const heart = document.createElement('i');
        if (i < quizRemainingAttempts) {
            heart.className = 'fa-solid fa-heart text-rose-500 transition-all transform hover:scale-110';
        } else {
            heart.className = 'fa-regular fa-heart text-slate-300 transition-all';
        }
        container.appendChild(heart);
    }
}

function playQuizTargetMelody() {
    const target = _secretQuizTarget || _revealedQuizTarget;
    if (!target) return;
    const btn = document.getElementById('quiz-play-target-btn');
    if (btn) {
        btn.classList.add('ring-4', 'ring-amber-400/60');
        setTimeout(() => btn.classList.remove('ring-4', 'ring-amber-400/60'), 1800);
    }
    triggerQuizWave(2.6);
    playStatMelody(target);
}

// 特殊合体・関連フォルムグループの定義（レイスポス、ブリザポス、バドレックス、キュレム、ネクロズマ等）
const SPECIAL_RELATED_FORM_GROUPS = [
    {
        name: 'バドレックス・愛馬',
        keywords: ['レイスポス', 'ブリザポス', 'バドレックス'],
        rawKeys: ['spectrier', 'glastrier', 'calyrex']
    },
    {
        name: 'キュレム合体',
        keywords: ['キュレム', 'レシラム', 'ゼクロム'],
        rawKeys: ['kyurem', 'reshiram', 'zekrom']
    },
    {
        name: 'ネクロズマ合体',
        keywords: ['ネクロズマ', 'ソルガレオ', 'ルナアーラ'],
        rawKeys: ['necrozma', 'solgaleo', 'lunala']
    }
];

// ポケモンのすべての別名（地方名+ポケモン名、メガ+ポケモン名等）を網羅するエイリアス一覧
function getPokemonAliases(p) {
    const aliases = new Set();
    const rawName = p.name || '';
    aliases.add(rawName);

    const baseName = cleanBaseSpeciesName(p._baseSpeciesName || p.name);
    if (baseName) aliases.add(baseName);

    const regions = [
        { label: 'アローラ', hira: 'あろーら', key: 'alola' },
        { label: 'ガラル', hira: 'がらる', key: 'galar' },
        { label: 'ヒスイ', hira: 'ひすい', key: 'hisui' },
        { label: 'パルデア', hira: 'ぱるであ', key: 'paldea' }
    ];

    const pRaw = (p.rawName || '').toLowerCase();
    const isRegional = p.formType === 'regional' || regions.some(r => pRaw.includes(r.key) || rawName.includes(r.label));

    if (isRegional && baseName) {
        regions.forEach(r => {
            if (pRaw.includes(r.key) || rawName.includes(r.label) || (p.formLabel && p.formLabel.includes(r.label))) {
                // 地方名 + ポケモン名（例: ヒスイヌメルゴン, ガラルヤドラン, ヒスイウォーグル, アローラロコン）
                aliases.add(`${r.label}${baseName}`);
                aliases.add(`${r.label}のすがたの${baseName}`);
                aliases.add(`${r.label}の${baseName}`);
                // ポケモン名 + 地方名（例: ヌメルゴンヒスイ）
                aliases.add(`${baseName}${r.label}`);
                aliases.add(`${baseName}(${r.label})`);
                aliases.add(`${baseName} (${r.label})`);
                aliases.add(`${baseName}(${r.label}のすがた)`);
                aliases.add(`${baseName} (${r.label}のすがた)`);
            }
        });
    }

    // パルデアケンタロス専用のエイリアス強化（コンバット種/ブレイズ種/ウォーター種、格闘/炎/水）
    if (baseName === 'ケンタロス') {
        const isCombat = pRaw.includes('combat') || (p.formLabel && p.formLabel.includes('かくとう'));
        const isBlaze = pRaw.includes('blaze') || (p.formLabel && p.formLabel.includes('ほのお'));
        const isAqua = pRaw.includes('aqua') || (p.formLabel && p.formLabel.includes('みず'));

        if (isCombat) {
            aliases.add('パルデアケンタロス');
            aliases.add('ケンタロス(パルデアのすがた・コンバット種)');
            aliases.add('ケンタロス(コンバット種)');
            aliases.add('コンバット種ケンタロス');
            aliases.add('コンバットケンタロス');
            aliases.add('コンバットパルデアケンタロス');
            aliases.add('パルデアケンタロス(コンバット種)');
            aliases.add('パルデアケンタロス(コンバット)');
            aliases.add('パルデアケンタロスコンバット');
            aliases.add('格闘パルデアケンタロス');
            aliases.add('かくとうパルデアケンタロス');
            aliases.add('格闘ケンタロス');
            aliases.add('かくとうケンタロス');
            aliases.add('格闘単パルデアケンタロス');
            aliases.add('単格闘パルデアケンタロス');
            aliases.add('パルデアケンタロス(格闘)');
            aliases.add('パルデアケンタロス(かくとう)');
            aliases.add('パルデアケンタロス格闘');
        } else if (isBlaze) {
            aliases.add('パルデアケンタロス');
            aliases.add('ケンタロス(パルデアのすがた・ブレイズ種)');
            aliases.add('ケンタロス(ブレイズ種)');
            aliases.add('ブレイズ種ケンタロス');
            aliases.add('ブレイズケンタロス');
            aliases.add('ブレイズパルデアケンタロス');
            aliases.add('パルデアケンタロス(ブレイズ種)');
            aliases.add('パルデアケンタロス(ブレイズ)');
            aliases.add('パルデアケンタロスブレイズ');
            aliases.add('炎パルデアケンタロス');
            aliases.add('ほのおパルデアケンタロス');
            aliases.add('炎ケンタロス');
            aliases.add('ほのおケンタロス');
            aliases.add('パルデアケンタロス(炎)');
            aliases.add('パルデアケンタロス(ほのお)');
            aliases.add('パルデアケンタロス炎');
        } else if (isAqua) {
            aliases.add('パルデアケンタロス');
            aliases.add('ケンタロス(パルデアのすがた・ウォーター種)');
            aliases.add('ケンタロス(ウォーター種)');
            aliases.add('ウォーター種ケンタロス');
            aliases.add('ウォーターケンタロス');
            aliases.add('ウォーターパルデアケンタロス');
            aliases.add('パルデアケンタロス(ウォーター種)');
            aliases.add('パルデアケンタロス(ウォーター)');
            aliases.add('パルデアケンタロスウォーター');
            aliases.add('水パルデアケンタロス');
            aliases.add('みずパルデアケンタロス');
            aliases.add('水ケンタロス');
            aliases.add('みずケンタロス');
            aliases.add('パルデアケンタロス(水)');
            aliases.add('パルデアケンタロス(みず)');
            aliases.add('パルデアケンタロス水');
        }
    }

    // メガシンカ
    if (p.formType === 'mega' || pRaw.includes('mega')) {
        let suffix = '';
        if (pRaw.includes('mega-x') || rawName.endsWith('X')) suffix = 'X';
        if (pRaw.includes('mega-y') || rawName.endsWith('Y')) suffix = 'Y';
        if (pRaw.includes('mega-z') || rawName.endsWith('Z')) suffix = 'Z';

        aliases.add(`メガ${baseName}${suffix}`);
        aliases.add(`${baseName}メガ${suffix}`);
        aliases.add(`${baseName}(メガシンカ)${suffix}`);
        aliases.add(`${baseName} (メガシンカ)${suffix}`);
        aliases.add(`${baseName}(メガ)${suffix}`);
        aliases.add(`${baseName} (メガ)${suffix}`);

        // メガメガニウム / メガメガヤンマ専用エイリアス強化
        if (baseName === 'メガニウム') {
            aliases.add('メガメガニウム');
            aliases.add('メガニウムメガ');
            aliases.add('メガニウム(メガシンカ)');
            aliases.add('メガニウム (メガシンカ)');
        }
        if (baseName === 'メガヤンマ') {
            aliases.add('メガメガヤンマ');
            aliases.add('メガヤンマメガ');
            aliases.add('メガヤンマ(メガシンカ)');
            aliases.add('メガヤンマ (メガシンカ)');
        }
    }

    // ゲンシカイキ
    if (pRaw.includes('primal')) {
        aliases.add(`ゲンシ${baseName}`);
        aliases.add(`${baseName}ゲンシ`);
    }

    // オリジン・れいじゅう
    if (pRaw.includes('origin')) {
        aliases.add(`オリジン${baseName}`);
    }
    if (pRaw.includes('therian')) {
        aliases.add(`れいじゅう${baseName}`);
        aliases.add(`霊獣${baseName}`);
    }

    // rawName (PokeAPI英語名)
    if (p.rawName) {
        aliases.add(p.rawName);
    }

    return Array.from(aliases);
}

function normalizePokemonQuery(str) {
    if (!str) return '';
    return str
        .toLowerCase()
        .replace(/[\s\u3000\-_・]/g, '') // 空白・ハイフン・中黒・アンダースコアを除去
        .replace(/[（\(\)）]/g, '');     // 括弧を除去
}

function findPokemonByQuery(rawVal) {
    if (!rawVal) return null;
    const cleanRaw = rawVal.trim();
    if (!cleanRaw) return null;

    const norm = normalizePokemonQuery(cleanRaw);
    const normKata = toKatakana(norm);
    const normHira = toHiragana(norm);

    // 1. 完全一致探索（全エイリアス対象）
    let matched = pokemonList.find(p => {
        const aliases = getPokemonAliases(p);
        return aliases.some(a => {
            const an = normalizePokemonQuery(a);
            const aKata = toKatakana(an);
            const aHira = toHiragana(an);
            return an === norm || aKata === normKata || aHira === normHira;
        });
    });

    if (matched) return matched;

    // 2. 前方一致探索（2文字以上の場合）
    if (normKata.length >= 2) {
        matched = pokemonList.find(p => {
            const aliases = getPokemonAliases(p);
            return aliases.some(a => {
                const an = normalizePokemonQuery(a);
                const aKata = toKatakana(an);
                const aHira = toHiragana(an);
                return an.startsWith(norm) || aKata.startsWith(normKata) || aHira.startsWith(normHira);
            });
        });
    }

    return matched;
}

// 別の姿（フォルム違い・メガ・合体・リージョン）および種族値同一ポケモンの抽出
function findFormsAndSameStats(target) {
    if (!target) return { forms: [], sameStats: [] };

    const formsMap = new Map();
    const targetBaseName = cleanBaseSpeciesName(target._baseSpeciesName || target.name);

    // 1. 同一 baseId または 同一 baseName を持つすべてのポケモン（通常、メガ、リージョン、各種フォルム）
    pokemonList.forEach(p => {
        const pBaseName = cleanBaseSpeciesName(p._baseSpeciesName || p.name);
        const isSameBaseId = Boolean(target.baseId && p.baseId && p.baseId === target.baseId);
        const isSameBaseName = Boolean(targetBaseName && pBaseName && pBaseName === targetBaseName);

        if (isSameBaseId || isSameBaseName) {
            formsMap.set(p.id, p);
        }
    });

    // 2. 特殊関連合体フォルム（レイスポス ⇔ バドレックス など）
    const targetRaw = (target.rawName || '').toLowerCase();
    const targetName = target.name || '';
    SPECIAL_RELATED_FORM_GROUPS.forEach(group => {
        const isMatched = group.rawKeys.some(k => targetRaw.includes(k)) ||
                          group.keywords.some(k => targetName.includes(k));
        if (isMatched) {
            pokemonList.forEach(p => {
                const pRaw = (p.rawName || '').toLowerCase();
                const pName = p.name || '';
                if (group.rawKeys.some(k => pRaw.includes(k)) || group.keywords.some(k => pName.includes(k))) {
                    formsMap.set(p.id, p);
                }
            });
        }
    });

    // 別の姿一覧（自身も含め、ユーザーが任意に選択可能にする）
    const allForms = Array.from(formsMap.values());

    // 3. 全6種族値が完全一致するポケモン（同値）
    const sameStats = pokemonList.filter(p => {
        if (formsMap.has(p.id)) return false;
        return (
            p.hp === target.hp &&
            p.atk === target.atk &&
            p.def === target.def &&
            p.spa === target.spa &&
            p.spd === target.spd &&
            p.spe === target.spe
        );
    });

    return {
        forms: allForms,
        sameStats: sameStats
    };
}

let quizInputDebounceTimer = null;

function handleQuizInputSuggestion() {
    clearTimeout(quizInputDebounceTimer);
    quizInputDebounceTimer = setTimeout(() => {
        const input = document.getElementById('quiz-guess-input');
        if (!input) return;
        const rawVal = (input.value || '').trim();
        if (!rawVal) {
            closeQuizFormSelectionPanel();
            return;
        }

        const matched = findPokemonByQuery(rawVal);

        if (matched) {
            const { forms } = findFormsAndSameStats(matched);
            // 別の姿（メガシンカやリージョンフォームなど）が2つ以上ある場合のみパネルを表示（※同種族値ポケモンは表示しない）
            if (forms.length > 1) {
                renderQuizFormSelectionPanel(matched, forms);
                return;
            }
        }
        closeQuizFormSelectionPanel();
    }, 200);
}

function closeQuizFormSelectionPanel() {
    const panel = document.getElementById('quiz-form-selection-panel');
    if (panel) {
        panel.classList.add('hidden');
        panel.innerHTML = '';
    }
}

function renderQuizFormSelectionPanel(matched, forms) {
    const panel = document.getElementById('quiz-form-selection-panel');
    if (!panel) return;

    panel.classList.remove('hidden');

    function renderPokemonCard(p) {
        const badge = getFormBadgeHtml(p);
        const isGuessed = quizGuessedList.some(g => g.id === p.id);
        const disabledClass = isGuessed ? 'opacity-50 cursor-not-allowed bg-slate-100' : 'bg-white hover:bg-rose-50/80 hover:border-rose-300 cursor-pointer hover:shadow-xs active:scale-98';
        const displayId = (p.baseId || p.id).toString().padStart(4, '0');

        const typesHtml = (p.types || []).map(t => {
            const col = typeColors[t] || { bg: 'bg-slate-500', text: 'text-white' };
            return `<span class="px-1.5 py-0.5 rounded-md text-[9px] font-bold ${col.bg} ${col.text}">${t}</span>`;
        }).join('');

        return `
            <button type="button" 
                ${isGuessed ? 'disabled' : `onclick="selectQuizPokemonToSubmit(${p.id})"`}
                class="p-2.5 rounded-2xl border border-slate-200 ${disabledClass} transition-all flex items-center justify-between gap-2.5 text-left w-full group">
                <div class="flex items-center gap-2.5 min-w-0">
                    <img src="${p.image || POKEBALL_FALLBACK_SVG}" class="w-11 h-11 object-contain drop-shadow-xs flex-shrink-0" onerror="handlePokemonImageError(this, ${p.baseId || p.id})">
                    <div class="min-w-0 flex flex-col gap-1">
                        <div class="flex items-center gap-1.5 flex-wrap">
                            <span class="text-xs sm:text-sm font-black text-slate-900 group-hover:text-rose-600 truncate">${p.name}</span>
                            ${badge}
                        </div>
                        <div class="flex items-center gap-1.5 flex-wrap">
                            <span class="text-[10px] font-bold text-slate-400">#${displayId}</span>
                            ${typesHtml}
                        </div>
                    </div>
                </div>
                <div class="flex-shrink-0 text-slate-400 group-hover:text-rose-500 transition-colors">
                    ${isGuessed ? '<span class="text-[10px] text-slate-400 font-bold">回答済</span>' : '<i class="fa-solid fa-chevron-right text-xs"></i>'}
                </div>
            </button>
        `;
    }

    let formsHtml = '';
    if (forms.length > 0) {
        formsHtml = `
            <div class="flex flex-col gap-2">
                <div class="text-[11px] font-black text-slate-500 uppercase tracking-wider flex items-center gap-1.5 px-1">
                    <i class="fa-solid fa-shapes text-rose-500"></i>
                    <span>別の姿・関連フォルム一覧 (タップして回答)</span>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    ${forms.map(p => renderPokemonCard(p)).join('')}
                </div>
            </div>
        `;
    }

    panel.innerHTML = `
        <div class="flex flex-col gap-3 bg-slate-50/70 p-3.5 rounded-2xl border border-slate-200/80">
            <div class="flex items-center justify-between text-xs font-bold text-slate-700 px-1">
                <span class="flex items-center gap-1.5 text-slate-900 font-black">
                    <i class="fa-solid fa-lightbulb text-amber-500"></i>
                    <span>「${matched.name}」のフォルム選択：</span>
                </span>
                <button type="button" onclick="closeQuizFormSelectionPanel()" class="text-slate-400 hover:text-slate-600 text-xs px-1 cursor-pointer">
                    <i class="fa-solid fa-xmark"></i> 閉じる
                </button>
            </div>
            ${formsHtml}
        </div>
    `;
}

function selectQuizPokemonToSubmit(pokemonId) {
    const found = pokemonList.find(p => p.id === pokemonId);
    if (!found) return;
    closeQuizFormSelectionPanel();
    const input = document.getElementById('quiz-guess-input');
    if (input) input.value = '';
    processQuizAnswer(found);
}

function processQuizAnswer(found) {
    const errBox = document.getElementById('quiz-input-error');
    const errText = document.getElementById('quiz-input-error-text');
    if (errBox) errBox.classList.add('hidden');

    const target = _secretQuizTarget || _revealedQuizTarget;
    if (!target) return;

    if (quizGuessedList.some(g => g.id === found.id)) {
        if (errText) errText.textContent = `「${found.name}」はすでに回答済みです。`;
        if (errBox) errBox.classList.remove('hidden');
        return;
    }

    // 1. 完全一致（同ポケモン・フォルム）
    const isExactMatch = (found.id === target.id) || 
                         (found.baseId === target.baseId && found.name === target.name);

    // 2. 種族値完全一致判定（6ステータスが全て同値）
    // リザードンとバクフーン、コラッタとアローラコラッタ、ロコンとアローラロコンなど、
    // 種族値（メロディ）が完全に同一のポケモンであればどちらを答えても正解
    // ※ メガシンカと通常は種族値が異なるため明確に区別されます
    const isSameStats = (
        found.hp === target.hp &&
        found.atk === target.atk &&
        found.def === target.def &&
        found.spa === target.spa &&
        found.spd === target.spd &&
        found.spe === target.spe
    );

    if (isExactMatch || isSameStats) {
        finishQuiz(true, found, isSameStats && !isExactMatch);
        return;
    }

    quizRemainingAttempts--;
    quizGuessedList.unshift(found);
    renderQuizHearts();
    renderQuizHistory();
    updateQuizCryHintState();

    if (quizGuessedList.length === 5) {
        showSecurityToast('💡 5問ミスにより「正解の鳴き声ヒント」が解放されました！');
    }

    triggerQuizWave(2.4);
    playStatMelody(found);

    if (quizRemainingAttempts <= 0) {
        finishQuiz(false);
    }
}

function handleQuizSubmit(e) {
    e.preventDefault();
    const input = document.getElementById('quiz-guess-input');
    const errBox = document.getElementById('quiz-input-error');
    const errText = document.getElementById('quiz-input-error-text');
    const rawVal = (input.value || '').trim();
    if (!rawVal) return;

    const found = findPokemonByQuery(rawVal);

    if (!found) {
        if (errText) errText.textContent = `「${rawVal}」というポケモンは見つかりませんでした。正式名を入力してください。`;
        errBox.classList.remove('hidden');
        return;
    }

    // もし別の姿が存在する場合、パネルを表示してユーザーが選択できるように促す
    const { forms } = findFormsAndSameStats(found);
    const panel = document.getElementById('quiz-form-selection-panel');
    const isPanelOpen = panel && !panel.classList.contains('hidden');

    // パネルがまだ開いておらず、かつ複数の姿がある場合はパネルを展開して案内
    // ※ただしユーザーが「メガリザードンX」のように完全に姿を指定して入力した場合はそのまま回答へ進む
    const isSpecificFormName = found.formType !== 'normal' && found.name !== (found._baseSpeciesName || '');
    if (forms.length > 1 && !isPanelOpen && !isSpecificFormName) {
        renderQuizFormSelectionPanel(found, forms);
        return;
    }

    closeQuizFormSelectionPanel();
    input.value = '';
    processQuizAnswer(found);
}

function renderQuizHistory() {
    const list = document.getElementById('quiz-history-list');
    const countEl = document.getElementById('quiz-history-count');
    if (countEl) countEl.textContent = `${quizGuessedList.length} / ${QUIZ_MAX_ATTEMPTS} 試行`;

    if (!list) return;

    if (quizGuessedList.length === 0) {
        list.innerHTML = `
            <div id="quiz-history-empty" class="text-center py-10 bg-white rounded-2xl border border-dashed border-slate-200 text-slate-400 text-xs shadow-xs">
                回答すると、そのポケモンの音とステータス値が表示され、正解との違いを聴き比べることができます。
            </div>
        `;
        return;
    }

    const target = _secretQuizTarget || _revealedQuizTarget;
    const targetTotal = target ? target.total : 0;

    list.innerHTML = quizGuessedList.map((p, idx) => {
        const displayId = (p.baseId || p.id).toString().padStart(4, '0');
        const badge = getFormBadgeHtml(p);
        const diffTotal = p.total - targetTotal;
        let diffBadge = '';
        if (diffTotal > 0) {
            diffBadge = `<span class="px-2 py-0.5 rounded-md text-[11px] font-bold bg-rose-50 text-rose-700 border border-rose-200">合計 ${p.total} (正解より +${diffTotal})</span>`;
        } else if (diffTotal < 0) {
            diffBadge = `<span class="px-2 py-0.5 rounded-md text-[11px] font-bold bg-sky-50 text-sky-700 border border-sky-200">合計 ${p.total} (正解より ${diffTotal})</span>`;
        } else {
            diffBadge = `<span class="px-2 py-0.5 rounded-md text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">合計 ${p.total} (正解と同値!)</span>`;
        }

        return `
            <div class="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs flex flex-col gap-3 transition-all hover:border-slate-300">
                <div class="flex justify-between items-center flex-wrap gap-2">
                    <div class="flex items-center gap-3">
                        <span class="text-[10px] font-black tracking-wider text-rose-600 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded-md">
                            #${quizGuessedList.length - idx} 不正解
                        </span>
                        <img src="${p.image || POKEBALL_FALLBACK_SVG}" class="w-10 h-10 object-contain drop-shadow-sm" onerror="handlePokemonImageError(this, ${p.baseId || p.id})">
                        <div class="flex items-center gap-1.5 flex-wrap">
                            <span class="text-xs text-slate-400 font-bold">#${displayId}</span>
                            <span class="text-sm font-black text-slate-900">${p.name}</span>
                            ${badge}
                        </div>
                    </div>
                    <div class="flex items-center gap-2">
                        ${diffBadge}
                        <button type="button" onclick="playGuessedSound(${p.id})"
                            class="px-3.5 py-1.5 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-xl text-xs font-bold shadow-xs border border-slate-200 flex items-center gap-1.5 cursor-pointer transition-all hover:scale-102 active:scale-98">
                            <i class="fa-solid fa-volume-high text-rose-500"></i>
                            <span>この音を聴く</span>
                        </button>
                    </div>
                </div>

                <!-- Stat Comparison Grid -->
                <div class="grid grid-cols-6 gap-1.5 bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-center text-[10px]">
                    <div>
                        <div class="text-slate-400 font-bold">HP</div>
                        <div class="text-slate-800 font-black text-xs">${p.hp}</div>
                    </div>
                    <div>
                        <div class="text-slate-400 font-bold">こうげき</div>
                        <div class="text-slate-800 font-black text-xs">${p.atk}</div>
                    </div>
                    <div>
                        <div class="text-slate-400 font-bold">ぼうぎょ</div>
                        <div class="text-slate-800 font-black text-xs">${p.def}</div>
                    </div>
                    <div>
                        <div class="text-slate-400 font-bold">とくこう</div>
                        <div class="text-slate-800 font-black text-xs">${p.spa}</div>
                    </div>
                    <div>
                        <div class="text-slate-400 font-bold">とくぼう</div>
                        <div class="text-slate-800 font-black text-xs">${p.spd}</div>
                    </div>
                    <div>
                        <div class="text-slate-400 font-bold">すばやさ</div>
                        <div class="text-slate-800 font-black text-xs">${p.spe}</div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function playGuessedSound(id) {
    const p = pokemonList.find(item => item.id === id);
    if (p) {
        triggerQuizWave(2.4);
        playStatMelody(p);
    }
}

function confirmGiveUpQuiz() {
    const target = _secretQuizTarget || _revealedQuizTarget;
    if (!target) return;
    if (confirm('降参して正解のポケモンを確認しますか？')) {
        giveUpQuiz();
    }
}

function giveUpQuiz() {
    closeQuizFormSelectionPanel();
    finishQuiz(false, null, false, true);
}

function finishQuiz(isWin, answeredPokemon = null, isSameStatsVariant = false, isGaveUp = false, isDisqualified = false) {
    quizIsPlaying = false; // クイズ終了 (セキュリティ監視解除 & 正解プロパティ参照可能化)
    _revealedQuizTarget = _secretQuizTarget;
    isShowingBlurWarning = false;
    const warningModal = document.getElementById('quiz-blur-warning-modal');
    if (warningModal) warningModal.classList.add('hidden');

    document.getElementById('quiz-playing-screen').classList.add('hidden');
    const resultScreen = document.getElementById('quiz-result-screen');
    resultScreen.classList.remove('hidden');

    const iconWrap = document.getElementById('quiz-result-icon-wrap');
    const title = document.getElementById('quiz-result-title');
    const desc = document.getElementById('quiz-result-desc');
    const card = document.getElementById('quiz-result-pokemon-card');

    const p = _revealedQuizTarget || _secretQuizTarget;
    if (!p) return;

    const badge = getFormBadgeHtml(p);
    const displayId = (p.baseId || p.id).toString().padStart(4, '0');

    if (isWin) {
        iconWrap.className = 'w-24 h-24 rounded-3xl mx-auto flex items-center justify-center text-4xl shadow-md bg-emerald-50 text-emerald-600 border border-emerald-200 animate-bounce';
        iconWrap.innerHTML = '<i class="fa-solid fa-crown text-amber-500"></i>';
        title.className = 'text-2xl sm:text-3xl font-black text-slate-900';
        title.textContent = '正解！';
        const attemptsUsed = QUIZ_MAX_ATTEMPTS - quizRemainingAttempts + 1;
        
        if (isSameStatsVariant && answeredPokemon && answeredPokemon.name !== p.name) {
            desc.textContent = `${attemptsUsed}回目の回答で見事正解しました！（「${answeredPokemon.name}」と「${p.name}」は種族値が同じです）`;
        } else {
            desc.textContent = `${attemptsUsed}回目の回答で見事正解しました！`;
        }
    } else if (isDisqualified) {
        iconWrap.className = 'w-24 h-24 rounded-3xl mx-auto flex items-center justify-center text-4xl shadow-md bg-amber-50 text-amber-600 border border-amber-200 animate-pulse';
        iconWrap.innerHTML = '<i class="fa-solid fa-triangle-exclamation text-amber-500"></i>';
        title.className = 'text-2xl sm:text-3xl font-black text-rose-600';
        title.textContent = '失格 (カンニング防止)';
        desc.textContent = 'クイズプレイ中に画面や別タブから複数回離脱したため、不正防止ルールにより失格となりました。正解はこちらのポケモンでした：';
    } else if (isGaveUp) {
        iconWrap.className = 'w-24 h-24 rounded-3xl mx-auto flex items-center justify-center text-4xl shadow-md bg-slate-100 text-slate-600 border border-slate-300';
        iconWrap.innerHTML = '<i class="fa-solid fa-flag text-slate-500"></i>';
        title.className = 'text-2xl sm:text-3xl font-black text-slate-900';
        title.textContent = '降参しました';
        desc.textContent = '正解はこちらのポケモンでした：';
    } else {
        iconWrap.className = 'w-24 h-24 rounded-3xl mx-auto flex items-center justify-center text-4xl shadow-md bg-rose-50 text-rose-600 border border-rose-200';
        iconWrap.innerHTML = '<i class="fa-solid fa-skull"></i>';
        title.className = 'text-2xl sm:text-3xl font-black text-slate-900';
        title.textContent = 'GAME OVER...';
        desc.textContent = '10回以内に正解できませんでした。正解はこちらのポケモンでした：';
    }

    card.innerHTML = `
        <div class="relative mx-auto sm:mx-0 flex-shrink-0">
            <div class="w-32 h-32 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200/90 flex items-center justify-center border border-slate-300/80 p-2 shadow-inner">
                <img src="${p.image || POKEBALL_FALLBACK_SVG}" alt="${p.name}" class="w-28 h-28 object-contain drop-shadow" onerror="handlePokemonImageError(this, ${p.baseId || p.id})">
            </div>
        </div>
        <div class="flex flex-col gap-2 flex-grow w-full">
            <div class="flex items-center gap-2">
                <span class="text-xs font-black text-slate-400">#${displayId}</span>
                ${badge}
            </div>
            <h4 class="text-xl sm:text-2xl font-black text-slate-900">${p.name}</h4>
            <div class="flex gap-1.5 flex-wrap">
                ${p.types.map(t => {
                    const col = typeColors[t] || { bg: 'bg-slate-500', text: 'text-white' };
                    return `<span class="px-2.5 py-0.5 rounded-md text-xs font-bold ${col.bg} ${col.text}">${t}</span>`;
                }).join('')}
            </div>
            <div class="bg-slate-50 rounded-xl p-3 border border-slate-200 text-xs mt-1">
                <div class="flex justify-between items-center pb-1 border-b border-slate-200 text-slate-500">
                    <span>種族値総合計</span>
                    <strong class="text-rose-600 font-black text-base">${p.total}</strong>
                </div>
                <div class="grid grid-cols-6 gap-1 pt-2 text-center text-[10px]">
                    <div><span class="text-slate-400 block">H</span><strong class="text-slate-800 font-bold">${p.hp}</strong></div>
                    <div><span class="text-slate-400 block">A</span><strong class="text-slate-800 font-bold">${p.atk}</strong></div>
                    <div><span class="text-slate-400 block">B</span><strong class="text-slate-800 font-bold">${p.def}</strong></div>
                    <div><span class="text-slate-400 block">C</span><strong class="text-slate-800 font-bold">${p.spa}</strong></div>
                    <div><span class="text-slate-400 block">D</span><strong class="text-slate-800 font-bold">${p.spd}</strong></div>
                    <div><span class="text-slate-400 block">S</span><strong class="text-slate-800 font-bold">${p.spe}</strong></div>
                </div>
            </div>
            <div class="flex gap-2.5 mt-2">
                <button type="button" onclick="playStatMelody(_revealedQuizTarget || _secretQuizTarget)"
                    class="px-4 py-2 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white rounded-xl text-xs font-bold shadow-sm flex items-center gap-1.5 cursor-pointer">
                    <i class="fa-solid fa-music"></i>
                    <span>メロディをもう一度聴く</span>
                </button>
            </div>
        </div>
    `;

    setTimeout(() => {
        triggerQuizWave(2.6);
        playStatMelody(p);
    }, 400);
}



