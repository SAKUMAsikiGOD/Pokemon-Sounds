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
    { id: 1, baseId: 1, name: "フシギダネ", formType: "normal", formLabel: "通常", types: ["くさ", "どく"], hp: 45, atk: 49, def: 49, spa: 65, spd: 65, spe: 45, total: 318, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1.ogg" },
    { id: 4, baseId: 4, name: "ヒトカゲ", formType: "normal", formLabel: "通常", types: ["ほのお"], hp: 39, atk: 52, def: 43, spa: 60, spd: 50, spe: 65, total: 309, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/4.ogg" },
    { id: 6, baseId: 6, name: "リザードン", formType: "normal", formLabel: "通常", types: ["ほのお", "ひこう"], hp: 78, atk: 84, def: 78, spa: 109, spd: 85, spe: 100, total: 534, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/6.ogg" },
    { id: 7, baseId: 7, name: "ゼニガメ", formType: "normal", formLabel: "通常", types: ["みず"], hp: 44, atk: 48, def: 65, spa: 50, spd: 64, spe: 43, total: 314, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/7.ogg" },
    { id: 25, baseId: 25, name: "ピカチュウ", formType: "normal", formLabel: "通常", types: ["でんき"], hp: 35, atk: 55, def: 40, spa: 50, spd: 50, spe: 90, total: 320, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/25.ogg" },
    { id: 133, baseId: 133, name: "イーブイ", formType: "normal", formLabel: "通常", types: ["ノーマル"], hp: 55, atk: 55, def: 50, spa: 45, spd: 65, spe: 55, total: 325, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/133.ogg" },
    { id: 150, baseId: 150, name: "ミュウツー", formType: "normal", formLabel: "通常", types: ["エスパー"], hp: 106, atk: 110, def: 90, spa: 154, spd: 90, spe: 130, total: 680, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/150.ogg" },
    { id: 151, baseId: 151, name: "ミュウ", formType: "normal", formLabel: "通常", types: ["エスパー"], hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100, total: 600, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/151.ogg" },
    // メガシンカ
    { id: 10034, baseId: 6, name: "メガリザードンX", formType: "mega", formLabel: "メガシンカ", types: ["ほのお", "ドラゴン"], hp: 78, atk: 130, def: 111, spa: 130, spd: 85, spe: 100, total: 634, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10034.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10034.ogg" },
    { id: 10035, baseId: 6, name: "メガリザードンY", formType: "mega", formLabel: "メガシンカ", types: ["ほのお", "ひこう"], hp: 78, atk: 104, def: 78, spa: 159, spd: 115, spe: 100, total: 634, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10035.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10035.ogg" },
    { id: 10044, baseId: 150, name: "メガミュウツーY", formType: "mega", formLabel: "メガシンカ", types: ["エスパー"], hp: 106, atk: 150, def: 70, spa: 194, spd: 120, spe: 140, total: 780, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10044.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10044.ogg" },
    { id: 10059, baseId: 448, name: "メガルカリオ", formType: "mega", formLabel: "メガシンカ", types: ["かくとう", "はがね"], hp: 70, atk: 145, def: 88, spa: 140, spd: 70, spe: 112, total: 625, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10059.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10059.ogg" },
    { id: 10038, baseId: 94, name: "メガゲンガー", formType: "mega", formLabel: "メガシンカ", types: ["ゴースト", "どく"], hp: 60, atk: 65, def: 80, spa: 170, spd: 95, spe: 130, total: 600, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10038.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10038.ogg" },
    // リージョンフォーム
    { id: 10091, baseId: 19, name: "コラッタ (アローラのすがた)", formType: "regional", formLabel: "アローラ", types: ["あく", "ノーマル"], hp: 30, atk: 56, def: 35, spa: 25, spd: 35, spe: 72, total: 253, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10091.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10091.ogg" },
    { id: 10100, baseId: 26, name: "ライチュウ (アローラのすがた)", formType: "regional", formLabel: "アローラ", types: ["でんき", "エスパー"], hp: 60, atk: 85, def: 50, spa: 95, spd: 85, spe: 110, total: 485, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10100.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10100.ogg" },
    { id: 10103, baseId: 37, name: "ロコン (アローラのすがた)", formType: "regional", formLabel: "アローラ", types: ["こおり"], hp: 38, atk: 41, def: 40, spa: 50, spd: 65, spe: 65, total: 299, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10103.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10103.ogg" },
    { id: 10165, baseId: 263, name: "ジグザグマ (ガラルのすがた)", formType: "regional", formLabel: "ガラル", types: ["あく", "ノーマル"], hp: 38, atk: 30, def: 41, spa: 30, spd: 41, spe: 60, total: 240, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10165.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10165.ogg" },
    { id: 10238, baseId: 570, name: "ゾロア (ヒスイのすがた)", formType: "regional", formLabel: "ヒスイ", types: ["ノーマル", "ゴースト"], hp: 35, atk: 60, def: 40, spa: 85, spd: 40, spe: 70, total: 330, image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10238.png", cry: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10238.ogg" }
];

let pokemonList = [];
let selectedTypes = new Set();
let currentFormFilter = 'all';
const TOTAL_POKEMON_TARGET = 1351;
let isPlayingAudio = false;

// 描画パフォーマンス向上のための変数
const PAGE_SIZE = 48;
let renderedCount = 0;
let currentFilteredList = [];
let infiniteScrollObserver = null;
let searchDebounceTimeout = null;

// 除外判定：キョダイマックス、ピカチュウ/イーブイ/コライドン/ミライドンの不要な姿、重複アローラ姿(totem)、パルデアケンタロスの重複等
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

    // 7. パルデアケンタロス (ID 128) の姿の統一
    // tauros-paldea-combat-breed (ID 10250) のみを「ケンタロス (パルデアのすがた)」として残し、
    // blaze-breed (ID 10251) と aqua-breed (ID 10252) は重複・区別しづらいため除外
    if (n.includes('tauros-paldea-blaze') || n.includes('tauros-paldea-aqua')) {
        return true;
    }

    return false;
}

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
    if (n.includes('-mega-z')) {
        return { formType: 'mega', formLabel: 'メガシンカZ', displayName: `メガ${speciesName}Z` };
    }
    if (n.includes('-mega-x')) {
        return { formType: 'mega', formLabel: 'メガシンカX', displayName: `メガ${speciesName}X` };
    }
    if (n.includes('-mega-y')) {
        return { formType: 'mega', formLabel: 'メガシンカY', displayName: `メガ${speciesName}Y` };
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
            if (val && val.trim().length >= 2) {
                recordAnalyticsLog('SEARCH', { keyword: val.trim() });
            }
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
    const CACHE_KEY = 'poketone_clean_v3';
    // 既存キャッシュからキョダイマックス・重複姿を除外し、Zメガや最新命名規則を自動反映
    const cached = localStorage.getItem(CACHE_KEY) || localStorage.getItem('poketone_clean_v2') || localStorage.getItem('poketone_clean_v1') || localStorage.getItem('pokestats_master_v1351_all_forms');
    if (cached) {
        try {
            const rawList = JSON.parse(cached);
            pokemonList = rawList
                .filter(p => !shouldExcludePokemon(p.rawName || p.name, p.id, p.baseId))
                .map(p => {
                    if (p.cry && p.cry.includes('/sprites/pokemon/latest/')) {
                        p.cry = p.cry.replace('/sprites/pokemon/latest/', '/cries/pokemon/latest/');
                    }
                    // rawNameが存在する場合、メガZなどの最新フォルム判定を再適用
                    if (p.rawName) {
                        const parsed = determineFormInfo(p.rawName, p.id, p._baseSpeciesName || p.name.replace(/^(メガ|ゲンシ)/, '').replace(/ (アローラ|ガラル|ヒスイ|パルデア).*$/, '').replace(/[XYZ]$/, ''));
                        p.formType = parsed.formType;
                        p.formLabel = parsed.formLabel;
                        p.name = parsed.displayName;
                    }
                    return p;
                });
            localStorage.setItem(CACHE_KEY, JSON.stringify(pokemonList));
            updateLoadedCount();
            updateFormCounts();
            document.getElementById('loading-banner').classList.add('hidden');
            filterAndRenderPokemon();
            return;
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
                    
                    // 鳴き声（特殊フォルムでも基本種の鳴き声をフォールバック指定、criesリポジトリパスを使用）
                    const cry = pData.cries?.latest 
                        || `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${id}.ogg`;

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
        // キャッシュ済みあるいは全読み込み時は実データ数と一致させる
        if (pokemonList.length > 50) {
            targetEl.textContent = pokemonList.length;
        }
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
            p._sc = {
                name: nl,
                nameHira: toHiragana(nl),
                form: fl,
                formHira: toHiragana(fl),
                rawName: (p.rawName || '').toLowerCase(),
                idStr: p.id.toString(),
                baseIdStr: p.baseId ? p.baseId.toString() : '',
                baseIdPad3: p.baseId ? p.baseId.toString().padStart(3, '0') : '',
                baseIdPad4: p.baseId ? p.baseId.toString().padStart(4, '0') : ''
            };
        }

        const sc = p._sc;
        return sc.name.includes(query) ||
               sc.name.includes(queryKata) ||
               sc.nameHira.includes(query) ||
               sc.nameHira.includes(queryHira) ||
               sc.form.includes(query) ||
               sc.form.includes(queryKata) ||
               sc.formHira.includes(query) ||
               sc.formHira.includes(queryHira) ||
               sc.rawName.includes(query) ||
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
                    <img src="${p.image}" alt="${p.name}" width="112" height="112" loading="lazy" decoding="async" class="w-28 h-28 object-contain group-hover:scale-110 transition-transform duration-300" onerror="this.src='https://placehold.co/150x150/f1f5f1/94a3b8?text=No+Image'">
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
    recordAnalyticsLog('SELECT', { pokemonName: p.name, pokemonId: p.id, baseId: p.baseId });
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
// クイズモード実装ロジック
// ==========================================
let quizCurrentMode = 'normal'; // 'normal' (ノーマル) | 'hard' (ハード)
let quizTargetPokemon = null;
let quizRemainingAttempts = 10;
const QUIZ_MAX_ATTEMPTS = 10;
let quizGuessedList = []; // 回答済みポケモンオブジェクトの履歴配列

function openQuizModal() {
    if (pokemonList.length === 0) {
        showAlert('ポケモンデータを取得中です。少々お待ちください。');
        return;
    }
    const modal = document.getElementById('quiz-modal');
    modal.classList.remove('hidden');
    requestAnimationFrame(() => {
        modal.classList.remove('opacity-0');
    });
    backToQuizModeSelect();
}

function closeQuizModal() {
    const modal = document.getElementById('quiz-modal');
    modal.classList.add('opacity-0');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
    stopQuizWave();
    if (window.activeAudioTimeout) clearTimeout(window.activeAudioTimeout);
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

function backToQuizModeSelect() {
    document.getElementById('quiz-mode-select-screen').classList.remove('hidden');
    document.getElementById('quiz-playing-screen').classList.add('hidden');
    document.getElementById('quiz-result-screen').classList.add('hidden');
    document.getElementById('quiz-badge-mode').textContent = '';
    stopQuizWave();
}

function startQuiz(mode) {
    quizCurrentMode = mode;
    quizRemainingAttempts = QUIZ_MAX_ATTEMPTS;
    quizGuessedList = [];

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
    quizTargetPokemon = candidates[randIdx];

    document.getElementById('quiz-mode-select-screen').classList.add('hidden');
    document.getElementById('quiz-playing-screen').classList.remove('hidden');
    document.getElementById('quiz-result-screen').classList.add('hidden');

    renderQuizHearts();
    const input = document.getElementById('quiz-guess-input');
    input.value = '';
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
    if (!quizTargetPokemon) return;
    const btn = document.getElementById('quiz-play-target-btn');
    if (btn) {
        btn.classList.add('ring-4', 'ring-amber-400/60');
        setTimeout(() => btn.classList.remove('ring-4', 'ring-amber-400/60'), 1800);
    }
    triggerQuizWave(2.6);
    playStatMelody(quizTargetPokemon);
}

function handleQuizSubmit(e) {
    e.preventDefault();
    const input = document.getElementById('quiz-guess-input');
    const errBox = document.getElementById('quiz-input-error');
    const errText = document.getElementById('quiz-input-error-text');
    const rawVal = (input.value || '').trim();
    if (!rawVal) return;

    errBox.classList.add('hidden');

    const queryKata = toKatakana(rawVal).toLowerCase();
    const queryHira = toHiragana(rawVal).toLowerCase();

    function normalizeName(name) {
        return (name || '').toLowerCase().replace(/\s+/g, '').replace(/[（\(\)）]/g, '');
    }

    const normKata = normalizeName(queryKata);
    const normHira = normalizeName(queryHira);

    const found = pokemonList.find(p => {
        const pNorm = normalizeName(p.name);
        const pNormHira = toHiragana(pNorm);
        const pNormKata = toKatakana(pNorm);
        return pNorm === normKata || pNorm === normHira || 
               pNormHira === normHira || pNormKata === normKata ||
               (p.rawName && p.rawName.toLowerCase() === rawVal.toLowerCase());
    });

    if (!found) {
        if (errText) errText.textContent = `「${rawVal}」というポケモンは見つかりませんでした。正式名を入力してください。`;
        errBox.classList.remove('hidden');
        return;
    }

    if (quizGuessedList.some(g => g.id === found.id)) {
        if (errText) errText.textContent = `「${found.name}」はすでに回答済みです。`;
        errBox.classList.remove('hidden');
        return;
    }

    input.value = '';

    // 1. 完全一致（同ポケモン・フォルム）
    const isExactMatch = (found.id === quizTargetPokemon.id) || 
                         (found.baseId === quizTargetPokemon.baseId && found.name === quizTargetPokemon.name);

    // 2. 種族値完全一致（リザードンとバクフーン等の同値ポケモン判定）
    const isSameStats = (
        found.hp === quizTargetPokemon.hp &&
        found.atk === quizTargetPokemon.atk &&
        found.def === quizTargetPokemon.def &&
        found.spa === quizTargetPokemon.spa &&
        found.spd === quizTargetPokemon.spd &&
        found.spe === quizTargetPokemon.spe
    );

    if (isExactMatch || isSameStats) {
        finishQuiz(true, found, isSameStats && !isExactMatch);
        return;
    }

    quizRemainingAttempts--;
    quizGuessedList.unshift(found);
    renderQuizHearts();
    renderQuizHistory();

    triggerQuizWave(2.4);
    playStatMelody(found);

    if (quizRemainingAttempts <= 0) {
        finishQuiz(false);
    }
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

    list.innerHTML = quizGuessedList.map((p, idx) => {
        const displayId = (p.baseId || p.id).toString().padStart(4, '0');
        const badge = getFormBadgeHtml(p);
        const diffTotal = p.total - quizTargetPokemon.total;
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
                        <img src="${p.image}" class="w-10 h-10 object-contain drop-shadow-sm" onerror="this.src='https://placehold.co/40x40/f1f5f9/94a3b8?text=?'">
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

function finishQuiz(isWin, answeredPokemon = null, isSameStatsVariant = false) {
    document.getElementById('quiz-playing-screen').classList.add('hidden');
    const resultScreen = document.getElementById('quiz-result-screen');
    resultScreen.classList.remove('hidden');

    const iconWrap = document.getElementById('quiz-result-icon-wrap');
    const title = document.getElementById('quiz-result-title');
    const desc = document.getElementById('quiz-result-desc');
    const card = document.getElementById('quiz-result-pokemon-card');

    const p = quizTargetPokemon;
    const badge = getFormBadgeHtml(p);
    const displayId = (p.baseId || p.id).toString().padStart(4, '0');

    if (isWin) {
        iconWrap.className = 'w-24 h-24 rounded-3xl mx-auto flex items-center justify-center text-4xl shadow-md bg-emerald-50 text-emerald-600 border border-emerald-200 animate-bounce';
        iconWrap.innerHTML = '<i class="fa-solid fa-crown text-amber-500"></i>';
        title.className = 'text-2xl sm:text-3xl font-black text-slate-900';
        title.textContent = '正解！';
        const attemptsUsed = QUIZ_MAX_ATTEMPTS - quizRemainingAttempts + 1;
        
        if (isSameStatsVariant && answeredPokemon) {
            desc.textContent = `${attemptsUsed}回目の回答で正解！（「${answeredPokemon.name}」と「${p.name}」は種族値が同じです）`;
        } else {
            desc.textContent = `${attemptsUsed}回目の回答で見事正解しました！`;
        }
    } else {
        iconWrap.className = 'w-24 h-24 rounded-3xl mx-auto flex items-center justify-center text-4xl shadow-md bg-rose-50 text-rose-600 border border-rose-200';
        iconWrap.innerHTML = '<i class="fa-solid fa-skull"></i>';
        title.className = 'text-2xl sm:text-3xl font-black text-slate-900';
        title.textContent = 'GAME OVER...';
        desc.textContent = '10回以内に正解できませんでした。正解はこちらのポケモンでした：';
    }

    card.innerHTML = `
        <div class="relative mx-auto sm:mx-0 flex-shrink-0">
            <div class="w-32 h-32 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-200 p-2 shadow-inner">
                <img src="${p.image}" alt="${p.name}" class="w-28 h-28 object-contain drop-shadow" onerror="this.src='https://placehold.co/120x120/f8fafc/94a3b8?text=?'">
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
                <button type="button" onclick="playStatMelody(quizTargetPokemon)"
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

/* ==========================================================================
   アクセス解析ログ & 管理者コンソール ロジック
   ========================================================================== */

const ANALYTICS_STORAGE_KEY = 'poketone_analytics_logs';
const ADMIN_PASS_HASH = '94c5011f0628fa6ea95d5223abf16df989b5c3ffdf6a8fb48512dd517ff15ef2'; // 'admin1234' のSHA-256ハッシュ値
let isAdminAuthenticated = false;

// SHA-256 ハッシュ計算
async function sha256(str) {
    const buffer = new TextEncoder().encode(str);
    const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// ログ保存関数
function recordAnalyticsLog(type, payload = {}) {
    try {
        const now = new Date();
        const dateStr = now.toISOString();
        const raw = localStorage.getItem(ANALYTICS_STORAGE_KEY);
        const data = raw ? JSON.parse(raw) : {
            description: "Pokétone ユーザー操作ログ・アクセス解析データ",
            createdAt: dateStr,
            version: "1.0",
            summary: { totalSearches: 0, totalSelections: 0 },
            logs: []
        };

        if (type === 'SEARCH') {
            data.summary.totalSearches = (data.summary.totalSearches || 0) + 1;
            data.logs.unshift({
                timestamp: dateStr,
                type: 'SEARCH',
                keyword: payload.keyword || '',
                pokemonName: '',
                pokemonId: null,
                details: `検索キーワード: ${payload.keyword}`
            });
        } else if (type === 'SELECT') {
            data.summary.totalSelections = (data.summary.totalSelections || 0) + 1;
            data.logs.unshift({
                timestamp: dateStr,
                type: 'SELECT',
                keyword: '',
                pokemonName: payload.pokemonName || '',
                pokemonId: payload.pokemonId || null,
                details: `図鑑選択: ${payload.pokemonName} (#${payload.pokemonId})`
            });
        }

        // 直近1000件までに制限してブラウザストレージの圧迫を防止
        if (data.logs.length > 1000) {
            data.logs = data.logs.slice(0, 1000);
        }

        localStorage.setItem(ANALYTICS_STORAGE_KEY, JSON.stringify(data));

        // 管理者画面が開いていればリアルタイム更新
        if (isAdminAuthenticated) {
            renderAdminDashboardData();
        }
    } catch (e) {
        console.warn("Analytics log failed:", e);
    }
}

// 管理者モーダル開閉
function openAdminModal() {
    const modal = document.getElementById('admin-modal');
    if (!modal) return;
    modal.classList.remove('hidden');

    const authSec = document.getElementById('admin-auth-section');
    const dashSec = document.getElementById('admin-dashboard-section');
    const passInput = document.getElementById('admin-password-input');
    const errEl = document.getElementById('admin-auth-error');
    if (errEl) errEl.classList.add('hidden');

    if (isAdminAuthenticated) {
        if (authSec) authSec.classList.add('hidden');
        if (dashSec) dashSec.classList.remove('hidden');
        renderAdminDashboardData();
    } else {
        if (authSec) authSec.classList.remove('hidden');
        if (dashSec) dashSec.classList.add('hidden');
        if (passInput) {
            passInput.value = '';
            setTimeout(() => passInput.focus(), 100);
        }
    }
}

function closeAdminModal() {
    const modal = document.getElementById('admin-modal');
    if (modal) modal.classList.add('hidden');
}

// 管理者ログイン認証
async function handleAdminLogin(e) {
    if (e) e.preventDefault();
    const passInput = document.getElementById('admin-password-input');
    const errEl = document.getElementById('admin-auth-error');
    if (!passInput) return;

    const inputVal = passInput.value.trim();
    const hashed = await sha256(inputVal);

    // パスワード: admin1234
    if (hashed === ADMIN_PASS_HASH || inputVal === 'admin1234') {
        isAdminAuthenticated = true;
        if (errEl) errEl.classList.add('hidden');
        document.getElementById('admin-auth-section').classList.add('hidden');
        document.getElementById('admin-dashboard-section').classList.remove('hidden');
        renderAdminDashboardData();
    } else {
        if (errEl) errEl.classList.remove('hidden');
        passInput.focus();
    }
}

// 管理者ダッシュボードの描画
function renderAdminDashboardData() {
    const raw = localStorage.getItem(ANALYTICS_STORAGE_KEY);
    const data = raw ? JSON.parse(raw) : {
        summary: { totalSearches: 0, totalSelections: 0 },
        logs: []
    };

    const sEl = document.getElementById('admin-total-searches');
    const selEl = document.getElementById('admin-total-selections');
    const lEl = document.getElementById('admin-total-logs');
    const tbody = document.getElementById('admin-logs-table-body');

    if (sEl) sEl.textContent = (data.summary.totalSearches || 0).toLocaleString();
    if (selEl) selEl.textContent = (data.summary.totalSelections || 0).toLocaleString();
    if (lEl) lEl.textContent = (data.logs.length || 0).toLocaleString();

    if (tbody) {
        if (!data.logs || data.logs.length === 0) {
            tbody.innerHTML = `<tr><td colspan="3" class="px-4 py-8 text-center text-slate-400">記録されたログはまだありません</td></tr>`;
            return;
        }

        const recentLogs = data.logs.slice(0, 50);
        tbody.innerHTML = recentLogs.map(l => {
            const time = new Date(l.timestamp).toLocaleString('ja-JP');
            const isSearch = l.type === 'SEARCH';
            const badge = isSearch
                ? `<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-100 text-indigo-700">検索</span>`
                : `<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-700">選択</span>`;
            const content = isSearch
                ? `<span class="font-bold text-indigo-900">「${escapeHtml(l.keyword)}」</span>`
                : `<span class="font-bold text-emerald-900">${escapeHtml(l.pokemonName)}</span> <span class="text-slate-400 text-[10px]">(ID: ${l.pokemonId})</span>`;

            return `
                <tr class="hover:bg-slate-50 transition-colors">
                    <td class="px-3 py-2 text-slate-500 whitespace-nowrap">${time}</td>
                    <td class="px-3 py-2 whitespace-nowrap">${badge}</td>
                    <td class="px-3 py-2 text-slate-800">${content}</td>
                </tr>
            `;
        }).join('');
    }
}

// analytics_data.json のダウンロード
function downloadAnalyticsJson() {
    const raw = localStorage.getItem(ANALYTICS_STORAGE_KEY);
    const data = raw ? JSON.parse(raw) : {
        description: "Pokétone ユーザー操作ログ・アクセス解析データ",
        createdAt: new Date().toISOString(),
        version: "1.0",
        summary: { totalSearches: 0, totalSelections: 0 },
        logs: []
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `analytics_data.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// CSVダウンロード
function downloadAnalyticsCsv() {
    const raw = localStorage.getItem(ANALYTICS_STORAGE_KEY);
    const data = raw ? JSON.parse(raw) : { logs: [] };
    const logs = data.logs || [];

    let csv = "日時,種別,キーワード,ポケモン名,ポケモンID,詳細\n";
    logs.forEach(l => {
        const time = `"${new Date(l.timestamp).toLocaleString('ja-JP')}"`;
        const type = `"${l.type}"`;
        const kw = `"${(l.keyword || '').replace(/"/g, '""')}"`;
        const pName = `"${(l.pokemonName || '').replace(/"/g, '""')}"`;
        const pId = l.pokemonId ? `"${l.pokemonId}"` : '""';
        const details = `"${(l.details || '').replace(/"/g, '""')}"`;
        csv += `${time},${type},${kw},${pName},${pId},${details}\n`;
    });

    const bom = new Uint8Array([0xEF, 0xBB, 0xBF]); // Excel等での文字化け防止用UTF-8 BOM
    const blob = new Blob([bom, csv], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `analytics_logs_${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// ログ初期化
function clearAnalyticsLogs() {
    if (!confirm('本当に蓄積されたすべてのログを消去しますか？\n（この操作は元に戻せません）')) {
        return;
    }
    const emptyData = {
        description: "Pokétone ユーザー操作ログ・アクセス解析データ",
        createdAt: new Date().toISOString(),
        version: "1.0",
        summary: { totalSearches: 0, totalSelections: 0 },
        logs: []
    };
    localStorage.setItem(ANALYTICS_STORAGE_KEY, JSON.stringify(emptyData));
    renderAdminDashboardData();
}

// HTMLエスケープヘルパー
function escapeHtml(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

