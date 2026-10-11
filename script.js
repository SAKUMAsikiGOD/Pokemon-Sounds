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
    "steel": "はがね", "fairy": "フェアリー"
};

const EMBEDDED_FALLBACK_POKEMON = [
    // 通常種
    { id: 1, baseId: 1, name: "フシギダネ", formType: "normal", formLabel: "通常", types: ["くさ", "どく"], hp: 45, atk: 49, def: 49, spa: 65, spd: 65, spe: 45, total: 318, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/sprites/pokemon/latest/1.ogg" },
    { id: 4, baseId: 4, name: "ヒトカゲ", formType: "normal", formLabel: "通常", types: ["ほのお"], hp: 39, atk: 52, def: 43, spa: 60, spd: 50, spe: 65, total: 309, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/sprites/pokemon/latest/4.ogg" },
    { id: 6, baseId: 6, name: "リザードン", formType: "normal", formLabel: "通常", types: ["ほのお", "ひこう"], hp: 78, atk: 84, def: 78, spa: 109, spd: 85, spe: 100, total: 534, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/sprites/pokemon/latest/6.ogg" },
    { id: 7, baseId: 7, name: "ゼニガメ", formType: "normal", formLabel: "通常", types: ["みず"], hp: 44, atk: 48, def: 65, spa: 50, spd: 64, spe: 43, total: 314, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/sprites/pokemon/latest/7.ogg" },
    { id: 25, baseId: 25, name: "ピカチュウ", formType: "normal", formLabel: "通常", types: ["でんき"], hp: 35, atk: 55, def: 40, spa: 50, spd: 50, spe: 90, total: 320, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/sprites/pokemon/latest/25.ogg" },
    { id: 133, baseId: 133, name: "イーブイ", formType: "normal", formLabel: "通常", types: ["ノーマル"], hp: 55, atk: 55, def: 50, spa: 45, spd: 65, spe: 55, total: 325, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/sprites/pokemon/latest/133.ogg" },
    { id: 150, baseId: 150, name: "ミュウツー", formType: "normal", formLabel: "通常", types: ["エスパー"], hp: 106, atk: 110, def: 90, spa: 154, spd: 90, spe: 130, total: 680, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/sprites/pokemon/latest/150.ogg" },
    { id: 151, baseId: 151, name: "ミュウ", formType: "normal", formLabel: "通常", types: ["エスパー"], hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100, total: 600, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/sprites/pokemon/latest/151.ogg" },
    // メガシンカ
    { id: 10034, baseId: 6, name: "メガリザードンX", formType: "mega", formLabel: "メガシンカ", types: ["ほのお", "ドラゴン"], hp: 78, atk: 130, def: 111, spa: 130, spd: 85, spe: 100, total: 634, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10034.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/sprites/pokemon/latest/6.ogg" },
    { id: 10035, baseId: 6, name: "メガリザードンY", formType: "mega", formLabel: "メガシンカ", types: ["ほのお", "ひこう"], hp: 78, atk: 104, def: 78, spa: 159, spd: 115, spe: 100, total: 634, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10035.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/sprites/pokemon/latest/6.ogg" },
    { id: 10044, baseId: 150, name: "メガミュウツーY", formType: "mega", formLabel: "メガシンカ", types: ["エスパー"], hp: 106, atk: 150, def: 70, spa: 194, spd: 120, spe: 140, total: 780, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10044.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/sprites/pokemon/latest/150.ogg" },
    { id: 10059, baseId: 448, name: "メガルカリオ", formType: "mega", formLabel: "メガシンカ", types: ["かくとう", "はがね"], hp: 70, atk: 145, def: 88, spa: 140, spd: 70, spe: 112, total: 625, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10059.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/sprites/pokemon/latest/448.ogg" },
    { id: 10038, baseId: 94, name: "メガゲンガー", formType: "mega", formLabel: "メガシンカ", types: ["ゴースト", "どく"], hp: 60, atk: 65, def: 80, spa: 170, spd: 95, spe: 130, total: 600, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10038.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/sprites/pokemon/latest/94.ogg" },
    // リージョンフォーム
    { id: 10091, baseId: 19, name: "コラッタ (アローラのすがた)", formType: "regional", formLabel: "アローラ", types: ["あく", "ノーマル"], hp: 30, atk: 56, def: 35, spa: 25, spd: 35, spe: 72, total: 253, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10091.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/sprites/pokemon/latest/19.ogg" },
    { id: 10100, baseId: 26, name: "ライチュウ (アローラのすがた)", formType: "regional", formLabel: "アローラ", types: ["でんき", "エスパー"], hp: 60, atk: 85, def: 50, spa: 95, spd: 85, spe: 110, total: 485, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10100.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/sprites/pokemon/latest/26.ogg" },
    { id: 10103, baseId: 37, name: "ロコン (アローラのすがた)", formType: "regional", formLabel: "アローラ", types: ["こおり"], hp: 38, atk: 41, def: 40, spa: 50, spd: 65, spe: 65, total: 299, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10103.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/sprites/pokemon/latest/37.ogg" },
    { id: 10165, baseId: 263, name: "ジグザグマ (ガラルのすがた)", formType: "regional", formLabel: "ガラル", types: ["あく", "ノーマル"], hp: 38, atk: 30, def: 41, spa: 30, spd: 41, spe: 60, total: 240, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10165.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/sprites/pokemon/latest/263.ogg" },
    { id: 10238, baseId: 570, name: "ゾロア (ヒスイのすがた)", formType: "regional", formLabel: "ヒスイ", types: ["ノーマル", "ゴースト"], hp: 35, atk: 60, def: 40, spa: 85, spd: 40, spe: 70, total: 330, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10238.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/sprites/pokemon/latest/570.ogg" }
];

let pokemonList = [];
let selectedTypes = new Set();
let currentFormFilter = 'all';
let compareList = [];
const TOTAL_POKEMON_TARGET = 1351;
let isPlayingAudio = false;

// フォルム情報の自動判定
function determineFormInfo(rawName, id, speciesName) {
    if (id <= 1025) {
        return {
            formType: 'normal',
            formLabel: '通常',
            displayName: speciesName
        };
    }

    const n = rawName.toLowerCase();
    
    // メガシンカ / ゲンシカイキ
    if (n.includes('-mega-x')) {
        return { formType: 'mega', formLabel: 'メガシンカ', displayName: `メガ${speciesName}X` };
    }
    if (n.includes('-mega-y')) {
        return { formType: 'mega', formLabel: 'メガシンカ', displayName: `メガ${speciesName}Y` };
    }
    if (n.includes('-mega')) {
        return { formType: 'mega', formLabel: 'メガシンカ', displayName: `メガ${speciesName}` };
    }
    if (n.includes('-primal')) {
        return { formType: 'mega', formLabel: 'ゲンシカイキ', displayName: `ゲンシ${speciesName}` };
    }

    // リージョンフォーム
    if (n.includes('-alola')) {
        return { formType: 'regional', formLabel: 'アローラ', displayName: `${speciesName} (アローラのすがた)` };
    }
    if (n.includes('-galar')) {
        return { formType: 'regional', formLabel: 'ガラル', displayName: `${speciesName} (ガラルのすがた)` };
    }
    if (n.includes('-hisui')) {
        return { formType: 'regional', formLabel: 'ヒスイ', displayName: `${speciesName} (ヒスイのすがた)` };
    }
    if (n.includes('-paldea')) {
        return { formType: 'regional', formLabel: 'パルデア', displayName: `${speciesName} (パルデアのすがた)` };
    }

    // キョダイマックス
    if (n.includes('-gmax')) {
        return { formType: 'other', formLabel: 'キョダイマックス', displayName: `${speciesName} (キョダイマックス)` };
    }

    // その他の形態
    if (n.includes('-origin')) {
        return { formType: 'other', formLabel: 'オリジン', displayName: `${speciesName} (オリジンフォルム)` };
    }
    if (n.includes('-therian')) {
        return { formType: 'other', formLabel: 'れいじゅう', displayName: `${speciesName} (れいじゅうフォルム)` };
    }
    if (n.includes('-crowned')) {
        return { formType: 'other', formLabel: 'けんのおう/たてのおう', displayName: `${speciesName} (けんのおう/たてのおう)` };
    }
    if (n.includes('-attack')) {
        return { formType: 'other', formLabel: 'アタック', displayName: `${speciesName} (アタックフォルム)` };
    }
    if (n.includes('-defense')) {
        return { formType: 'other', formLabel: 'ディフェンス', displayName: `${speciesName} (ディフェンスフォルム)` };
    }
    if (n.includes('-speed')) {
        return { formType: 'other', formLabel: 'スピード', displayName: `${speciesName} (スピードフォルム)` };
    }
    if (n.includes('-wash')) return { formType: 'other', formLabel: 'ウォッシュ', displayName: `${speciesName} (ウォッシュ)` };
    if (n.includes('-heat')) return { formType: 'other', formLabel: 'ヒート', displayName: `${speciesName} (ヒート)` };
    if (n.includes('-frost')) return { formType: 'other', formLabel: 'フロスト', displayName: `${speciesName} (フロスト)` };
    if (n.includes('-fan')) return { formType: 'other', formLabel: 'スピン', displayName: `${speciesName} (スピン)` };
    if (n.includes('-mow')) return { formType: 'other', formLabel: 'カット', displayName: `${speciesName} (カット)` };

    const suffix = rawName.split('-').slice(1).join(' ');
    return {
        formType: 'other',
        formLabel: suffix || '別フォルム',
        displayName: suffix ? `${speciesName} (${suffix})` : speciesName
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
    renderTypeFilters();
    initFormFilterEvents();
    fetchOptimizedPokemonData();

    document.getElementById('search-input').addEventListener('input', filterAndRenderPokemon);
    document.getElementById('sort-select').addEventListener('change', filterAndRenderPokemon);
    document.getElementById('reset-types').addEventListener('click', () => {
        selectedTypes.clear();
        document.querySelectorAll('.type-chip').forEach(el => {
            el.classList.remove('ring-2', 'ring-slate-900', 'scale-105', 'font-bold');
        });
        document.getElementById('reset-types').classList.add('hidden');
        filterAndRenderPokemon();
    });

    document.getElementById('compare-toggle-btn').addEventListener('click', openCompareModal);
    document.getElementById('close-compare-modal').addEventListener('click', closeCompareModal);
    document.getElementById('detail-modal').addEventListener('click', (e) => {
        if (e.target.id === 'detail-modal') closeDetailModal();
    });
});

function initFormFilterEvents() {
    const chips = document.querySelectorAll('.form-filter-chip');
    chips.forEach(chip => {
        chip.addEventListener('click', () => {
            chips.forEach(c => {
                c.classList.remove('bg-slate-900', 'text-white', 'border-slate-900', 'shadow-xs');
                c.classList.add('bg-slate-100', 'text-slate-700', 'border-slate-200');
            });
            chip.classList.add('bg-slate-900', 'text-white', 'border-slate-900', 'shadow-xs');
            chip.classList.remove('bg-slate-100', 'text-slate-700', 'border-slate-200');
            currentFormFilter = chip.dataset.form;
            filterAndRenderPokemon();
        });
    });
}

function updateFormCounts() {
    const counts = {
        all: pokemonList.length,
        mega: pokemonList.filter(p => p.formType === 'mega').length,
        regional: pokemonList.filter(p => p.formType === 'regional').length,
        normal: pokemonList.filter(p => p.formType === 'normal').length,
        other: pokemonList.filter(p => p.formType === 'other').length
    };
    
    const countAll = document.getElementById('count-all');
    const countMega = document.getElementById('count-mega');
    const countRegional = document.getElementById('count-regional');
    const countNormal = document.getElementById('count-normal');
    const countOther = document.getElementById('count-other');

    if (countAll) countAll.textContent = counts.all;
    if (countMega) countMega.textContent = counts.mega;
    if (countRegional) countRegional.textContent = counts.regional;
    if (countNormal) countNormal.textContent = counts.normal;
    if (countOther) countOther.textContent = counts.other;
}

async function fetchOptimizedPokemonData() {
    const CACHE_KEY = 'pokestats_master_v1351_all_forms';
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
        try {
            pokemonList = JSON.parse(cached);
            updateLoadedCount();
            updateFormCounts();
            document.getElementById('loading-banner').classList.add('hidden');
            filterAndRenderPokemon();
            return;
        } catch (e) {
            console.warn("Cache parse error, re-fetching...");
        }
    }

    // 初期状態は内蔵フォールバック（メガシンカやアローラ姿を含む）を表示
    pokemonList = [...EMBEDDED_FALLBACK_POKEMON];
    updateLoadedCount();
    updateFormCounts();
    filterAndRenderPokemon();

    try {
        // 全ポケモン（通常種1025 + 特殊フォルム326 = 計1351種）を取得
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10000`);
        if (!res.ok) throw new Error('API limit reached');
        const data = await res.json();
        const allItems = data.results;
        
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

                    // 日本語種族名を取得（キャッシュにあれば再利用してAPI節約）
                    let speciesName = speciesNameCache[baseId];
                    if (!speciesName) {
                        try {
                            const sRes = await fetch(speciesUrl || `https://pokeapi.co/api/v2/pokemon-species/${baseId}/`);
                            const sData = await sRes.json();
                            const jpObj = sData.names?.find(n => n.language.name === 'ja' || n.language.name === 'roomaji');
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
                    
                    // 鳴き声（特殊フォルムでも基本種の鳴き声をフォールバック指定）
                    const cry = pData.cries?.latest 
                        || `https://raw.githubusercontent.com/PokeAPI/cries/main/sprites/pokemon/latest/${baseId}.ogg`;

                    const pokemonObj = {
                        id,
                        baseId,
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

            // ソート: 全国図鑑番号（baseId）順かつ同一番号内はID順（通常ポケモンの直後にメガシンカやアローラが並ぶ）
            pokemonList = loaded.sort((a, b) => {
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
        mew = pokemonList.find(p => p.name.includes('ミュウ')) || pokemonList[0];
    }
    openDetailModal(mew);
    setTimeout(() => {
        playStatMelody(mew);
    }, 300);
}

function renderTypeFilters() {
    const container = document.getElementById('type-filters');
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
                btn.classList.remove('ring-2', 'ring-slate-900', 'scale-105');
            } else {
                selectedTypes.add(jpName);
                btn.classList.add('ring-2', 'ring-slate-900', 'scale-105');
            }
            document.getElementById('reset-types').classList.toggle('hidden', selectedTypes.size === 0);
            filterAndRenderPokemon();
        };
        container.appendChild(btn);
    });
}

function filterAndRenderPokemon() {
    const query = document.getElementById('search-input').value.trim().toLowerCase();
    const sortType = document.getElementById('sort-select').value;

    let filtered = pokemonList.filter(p => {
        // 検索クエリマッチ（名前、図鑑番号、PokeAPI-ID、フォルム名、rawName）
        const matchQuery = !query || 
            p.name.toLowerCase().includes(query) || 
            (p.rawName && p.rawName.toLowerCase().includes(query)) ||
            (p.formLabel && p.formLabel.toLowerCase().includes(query)) ||
            p.id.toString() === query ||
            (p.baseId && p.baseId.toString() === query) ||
            (p.baseId && p.baseId.toString().padStart(3, '0') === query) ||
            (p.baseId && p.baseId.toString().padStart(4, '0') === query);

        // フォルムフィルター
        let matchForm = true;
        if (currentFormFilter === 'mega') {
            matchForm = (p.formType === 'mega');
        } else if (currentFormFilter === 'regional') {
            matchForm = (p.formType === 'regional');
        } else if (currentFormFilter === 'normal') {
            matchForm = (p.formType === 'normal');
        } else if (currentFormFilter === 'other') {
            matchForm = (p.formType === 'other');
        }

        // タイプフィルター
        const matchType = selectedTypes.size === 0 || 
            Array.from(selectedTypes).every(t => p.types.includes(t));

        return matchQuery && matchForm && matchType;
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
        return `<span class="px-2 py-0.5 rounded-md text-[10px] font-black bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-xs"><i class="fa-solid fa-dna mr-0.5"></i>${p.formLabel}</span>`;
    }
    if (p.formType === 'regional') {
        let col = "from-sky-500 to-blue-600";
        if (p.formLabel.includes('ガラル')) col = "from-fuchsia-500 to-rose-600";
        if (p.formLabel.includes('ヒスイ')) col = "from-emerald-600 to-teal-700";
        if (p.formLabel.includes('パルデア')) col = "from-amber-500 to-orange-600";
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
    const resCountSpan = document.getElementById('result-count')?.querySelector('span');
    if (resCountSpan) resCountSpan.textContent = list.length;

    if (list.length === 0) {
        grid.innerHTML = '';
        emptyState.classList.remove('hidden');
        return;
    }

    emptyState.classList.add('hidden');
    grid.innerHTML = list.map(p => {
        const isComparing = compareList.some(c => c.id === p.id);
        const badge = getFormBadgeHtml(p);
        const displayId = (p.baseId || p.id).toString().padStart(4, '0');

        return `
            <div onclick="openDetailModalFromId(${p.id})" class="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group relative">
                <div class="flex justify-between items-start">
                    <div class="flex items-center gap-1.5 flex-wrap">
                        <span class="text-xs font-black text-slate-400">#${displayId}</span>
                        ${badge}
                    </div>
                    <button onclick="event.stopPropagation(); toggleCompare(${p.id})" class="text-xs px-2 py-1 rounded-lg border transition-colors ${isComparing ? 'bg-red-500 text-white border-red-500 font-bold' : 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200'}">
                        ${isComparing ? '比較中' : '比較'}
                    </button>
                </div>
                <div class="my-2 flex justify-center">
                    <img src="${p.image}" alt="${p.name}" class="w-28 h-28 object-contain group-hover:scale-110 transition-transform duration-300" onerror="this.src='https://placehold.co/150x150/f1f5f1/94a3b8?text=No+Image'">
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
                <img src="${p.image}" alt="${p.name}" class="w-36 h-36 object-contain drop-shadow-md" onerror="this.src='https://placehold.co/150x150/f1f5f1/94a3b8?text=No+Image'">
                <div class="flex flex-col gap-2.5 w-full">
                    <button onclick='playPokemonCrySafe(${JSON.stringify(p)})' class="w-full py-2.5 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer">
                        <i class="fa-solid fa-volume-high"></i>
                        <span>ポケモンの鳴き声を聴く (安全再生)</span>
                    </button>
                    <button onclick='playStatMelody(${JSON.stringify(p)})' id="play-melody-btn" class="w-full py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer">
                        <i class="fa-solid fa-music"></i>
                        <span>種族値メロディを聴く (合計含む)</span>
                    </button>
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

    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        modal.querySelector('#modal-content').classList.remove('scale-95');
    }, 10);
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
    const url = p.cry || `https://raw.githubusercontent.com/PokeAPI/cries/main/sprites/pokemon/latest/${p.baseId || p.id}.ogg`;
    const audio = new Audio(url);
    audio.volume = 0.6;
    
    audio.play().then(() => {
        // 成功
    }).catch(e => {
        console.warn("Official cry failed, falling back to synthetic stat melody:", e);
        playStatMelody(p);
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
        const noteDuration = 0.28;

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
            gain.gain.linearRampToValueAtTime(0.25, startTime + 0.05);
            gain.gain.exponentialRampToValueAtTime(0.001, startTime + noteDuration - 0.02);

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
        const totalDuration = 0.5;
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
        totalGain.gain.linearRampToValueAtTime(0.35, totalStartTime + 0.08);
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

function toggleCompare(id) {
    const p = pokemonList.find(item => item.id === id);
    if (!p) return;
    const index = compareList.findIndex(c => c.id === id);
    if (index > -1) {
        compareList.splice(index, 1);
    } else {
        if (compareList.length >= 3) {
            showAlert('比較できるのは最大3匹までです。');
            return;
        }
        compareList.push(p);
    }
    filterAndRenderPokemon();
}

function openCompareModal() {
    if (compareList.length === 0) {
        showAlert('比較するポケモンが選択されていません。カードの「比較」ボタンを押してください。');
        return;
    }
    const container = document.getElementById('compare-container');
    container.innerHTML = `
        <div class="grid grid-cols-${compareList.length + 1} gap-4 min-w-[500px]">
            <div class="flex flex-col gap-4 font-bold text-xs text-slate-500 pt-32">
                <div>HP</div>
                <div>こうげき</div>
                <div>ぼうぎょ</div>
                <div>とくこう</div>
                <div>とくぼう</div>
                <div>すばやさ</div>
                <div class="pt-2 border-t">合計</div>
            </div>
            ${compareList.map(p => `
                <div class="flex flex-col gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center">
                    <button onclick="removeCompare(${p.id})" class="self-end text-xs text-slate-400 hover:text-red-600 cursor-pointer"><i class="fa-solid fa-xmark"></i></button>
                    <img src="${p.image}" class="w-20 h-20 object-contain mx-auto" onerror="this.src='https://placehold.co/150x150/f1f5f1/94a3b8?text=No+Image'">
                    <h4 class="font-bold text-xs sm:text-sm text-slate-800 line-clamp-2">${p.name}</h4>
                    <div class="flex flex-col gap-4 text-xs font-black text-slate-900 mt-2">
                        <div>${p.hp}</div>
                        <div>${p.atk}</div>
                        <div>${p.def}</div>
                        <div>${p.spa}</div>
                        <div>${p.spd}</div>
                        <div>${p.spe}</div>
                        <div class="pt-2 border-t text-red-600">${p.total}</div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    document.getElementById('compare-modal').classList.remove('hidden');
}

function removeCompare(id) {
    compareList = compareList.filter(c => c.id !== id);
    filterAndRenderPokemon();
    if (compareList.length === 0) {
        closeCompareModal();
    } else {
        openCompareModal();
    }
}

function closeCompareModal() {
    document.getElementById('compare-modal').classList.add('hidden');
}
