import { tokenImages } from '@libs/token-icons';

export const coins = [
    'usdc',
    'usdt',
    'dai',
    'usn',
    'wbtc',
    'eth',
    'wnear',
    'neart',
] as const;

export const stableCoins = [
    'usdc',
    'usdt',
    'dai',
    'usn',
] as const;

export const volatileCoins = [
    'wbtc',
    'eth',
    'wnear',
    'neart',
] as const;

export const variants = ['id', 'symbol', 'name', 'img', 'description', 'publish'] as const;

export type Coin = typeof coins[number];
export type TokenVariant = typeof variants[number];

export type TokenImage = { src: string };

export const tokens: Record<Coin, Record<TokenVariant, string | boolean | TokenImage>> = {
    usdc: {
        'id': "usdc",
        'symbol': "usdc",
        'name': "USDC",
        'img': tokenImages["usdc"].svg,
        'description': "USD Coin",
        'publish': true,
    },
    usdt: {
        'id': "usdt",
        'symbol': "usdt",
        'name': "USDT",
        'img': tokenImages["usdt"].svg,
        'description': "USD Tether",
        'publish': true,
    },
    dai: {
        'id': "dai",
        'symbol': "dai",
        'name': "DAI",
        'img': tokenImages["dai"].svg,
        'description': "Dai",
        'publish': true,
    },
    usn: {
        'id': "usn",
        'symbol': "usn",
        'name': "USN",
        'img': tokenImages["usn"].svg,
        'description': "USD NEAR",
        'publish': true,
    },
    wbtc: {
        'id': "wbtc",
        'symbol': "wbtc",
        'name': "wBTC",
        'img': tokenImages["wbtc"].svg,
        'description': "Wrapped Bitcoin",
        'publish': true,
    },
    eth: {
        'id': "eth",
        'symbol': "eth",
        'name': "ETH",
        'img': tokenImages["eth"].svg,
        'description': "Ethereum",
        'publish': true,
    },
    wnear: {
        'id': "wnear",
        'symbol': "wnear",
        'name': "wNEAR",
        'img': tokenImages["wnear"].svg,
        'description': "Wrapped Near",
        'publish': true,
    },
    neart: {
        'id': "neart",
        'symbol': "neart",
        'name': "NEARt",
        'img': tokenImages["neart"].svg,
        'description': "Near Treasury",
        'publish': false,
    },
};

export function getCoinDetail(coin: Coin): Record<TokenVariant, string | boolean | TokenImage> {
    return tokens[coin];
}