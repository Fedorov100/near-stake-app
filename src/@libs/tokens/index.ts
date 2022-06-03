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

export const variants = ['id', 'symbol', 'name', 'img', 'description', 'publish', 'is_stable', 'deposit_amount', 'usd_value', 'apy'] as const;

export type Coin = typeof coins[number];
export type TokenVariant = typeof variants[number];

export type TokenImage = { src: string };

export const tokens: Record<Coin, Record<TokenVariant, string | number | boolean | TokenImage>> = {
    usdc: {
        'id': "usdc",
        'symbol': "usdc",
        'name': "USDC",
        'img': tokenImages["usdc"].svg,
        'description': "USD Coin",
        'publish': true,
        'is_stable': true,
        'deposit_amount': 12937345,
        'usd_value': 12937345,
        'apy': 14.87,
    },
    usdt: {
        'id': "usdt",
        'symbol': "usdt",
        'name': "USDT",
        'img': tokenImages["usdt"].svg,
        'description': "USD Tether",
        'publish': true,
        'is_stable': true,
        'deposit_amount': 12937345,
        'usd_value': 12937345,
        'apy': 14.87,
    },
    dai: {
        'id': "dai",
        'symbol': "dai",
        'name': "DAI",
        'img': tokenImages["dai"].svg,
        'description': "Dai",
        'publish': true,
        'is_stable': true,
        'deposit_amount': 12937345,
        'usd_value': 12937345,
        'apy': 14.87,
    },
    usn: {
        'id': "usn",
        'symbol': "usn",
        'name': "USN",
        'img': tokenImages["usn"].svg,
        'description': "USD NEAR",
        'publish': true,
        'is_stable': true,
        'deposit_amount': 12937345,
        'usd_value': 12937345,
        'apy': 14.87,
    },
    wbtc: {
        'id': "wbtc",
        'symbol': "wbtc",
        'name': "wBTC",
        'img': tokenImages["wbtc"].svg,
        'description': "Wrapped Bitcoin",
        'publish': true,
        'is_stable': false,
        'deposit_amount': 3,
        'usd_value': 88381.28,
        'apy': 9.87,
    },
    eth: {
        'id': "eth",
        'symbol': "eth",
        'name': "ETH",
        'img': tokenImages["eth"].svg,
        'description': "Ethereum",
        'publish': true,
        'is_stable': false,
        'deposit_amount': 21.55,
        'usd_value': 43455.81,
        'apy': 9.87,
    },
    wnear: {
        'id': "wnear",
        'symbol': "wnear",
        'name': "wNEAR",
        'img': tokenImages["wnear"].svg,
        'description': "Wrapped Near",
        'publish': true,
        'is_stable': false,
        'deposit_amount': 16829.00,
        'usd_value': 107289.97,
        'apy': 9.87,
    },
    neart: {
        'id': "neart",
        'symbol': "neart",
        'name': "NEARt",
        'img': tokenImages["neart"].svg,
        'description': "Near Treasury",
        'publish': false,
        'is_stable': false,
        'deposit_amount': 0,
        'usd_value': 0,
        'apy': 9.87,
    },
};

export function getCoinDetail(coin: Coin): Record<TokenVariant, string | number | boolean | TokenImage> {
    return tokens[coin];
}