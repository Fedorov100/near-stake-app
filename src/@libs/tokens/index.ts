import { tokenImages } from '@libs/token-icons';

export const coins = [
    'usdc',
    'usdt',
    'dai',
    'usn',
    'wbtc',
    'eth',
    'wnear',
] as const;

export const stableCoins = [
    'usdc',
    'usdt',
    'usn',
] as const;

export const volatileCoins = [
    'dai',
    'wbtc',
    'eth',
    'wnear',
] as const;

export const variants = ['id', 'symbol', 'name', 'img', 'description'] as const;

export type Coin = typeof coins[number];
export type TokenVariant = typeof variants[number];

export type TokenImage = { src: string };

export const tokens: Record<Coin, Record<TokenVariant, string | TokenImage>> = {
    usdc: {
        'id': "usdc",
        'symbol': "usdc",
        'name': "USDC",
        'img': tokenImages["usdc"].svg,
        'description': "USD Coin",
    },
    usdt: {
        'id': "usdt",
        'symbol': "usdt",
        'name': "USDT",
        'img': tokenImages["usdt"].svg,
        'description': "USD Tether",
    },
    dai: {
        'id': "dai",
        'symbol': "dai",
        'name': "DAI",
        'img': tokenImages["dai"].svg,
        'description': "Dai",
    },
    usn: {
        'id': "usn",
        'symbol': "usn",
        'name': "USN",
        'img': tokenImages["usn"].svg,
        'description': "USD NEAR",
    },
    wbtc: {
        'id': "wbtc",
        'symbol': "wbtc",
        'name': "wBTC",
        'img': tokenImages["wbtc"].svg,
        'description': "Wrapped Bitcoin",
    },
    eth: {
        'id': "eth",
        'symbol': "eth",
        'name': "ETH",
        'img': tokenImages["eth"].svg,
        'description': "Ethereum",
    },
    wnear: {
        'id': "wnear",
        'symbol': "wnear",
        'name': "wNEAR",
        'img': tokenImages["wnear"].svg,
        'description': "Wrapped Near",
    },
};

export function getCoinDetail(coin: Coin): Record<TokenVariant, string | TokenImage> {
    return tokens[coin];
}