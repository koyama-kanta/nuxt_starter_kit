/**
 * @file サイト内で使用を目的とした「共通化可能」な関数
 * 特定ページ・コンポーネントでしか使用されない場合は pages / components ディレクトリ配下にて定義する
 */

import { BREAKPOINT } from '~/assets/js/common/const'

/**
 * PCビュー表示判定
 * @returns {Boolean} 表示画面がPCビューか否かを返す
 */
export const isPC = () => window.innerWidth > BREAKPOINT

/**
 * SPビュー表示判定
 * @returns {Boolean} 表示画面がSPビューか否かを返す
 */
export const isSP = () => window.innerWidth <= BREAKPOINT
