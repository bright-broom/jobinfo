# コンポーネント仕様書

## デザインシステム

### カラーシステム
```typescript
{
  primary: {
    50: 'rgb(var(--primary-light) / 0.1)',
    // ... その他のバリエーション
    900: 'rgb(var(--primary-dark) / 1)',
  }
}
```

### タイポグラフィ
- フォントファミリー: Noto Sans JP（最適化済み）
- スケール:
  - 2xs: 0.625rem (10px)
  - base: 1rem (16px)
  - 3xl: 2rem (32px)
  - 4xl: 2.5rem (40px)

### アニメーション
- fade-in: フェードイン + 上方向からのスライド
- slide-up: 下から上へのスライド
- slide-down: 上から下へのスライド
- トランジション: 300ms ease-in-out

## 共通コンポーネント

### SectionHeader
セクションのヘッダーを表示する共通コンポーネント

#### Props
```typescript
{
  children: ReactNode; // ヘッダーのテキストコンテンツ
  id?: string;        // アクセシビリティ用ID
}
```

#### アクセシビリティ
- 適切な見出しレベル（h2）
- aria-labelledby対応

### ContentSection
汎用的なコンテンツセクションを表示するコンポーネント

#### Props
```typescript
{
  title: string;     // セクションタイトル
  content: string | string[]; // コンテンツ（テキストまたはリスト）
  type?: "text" | "list";    // 表示タイプ（デフォルト: "text"）
}
```

#### レスポンシブ対応
- モバイル: シングルカラム
- タブレット以上: 必要に応じてマルチカラム

## 専用コンポーネント

### CompanyInfo
会社情報を表示するコンポーネント

#### Props
```typescript
{
  company: {
    name: string;        // 会社名
    period: string;      // 在籍期間
    business: string;    // 事業内容
    capital: string;     // 資本金
    revenue: string;     // 売上高
    employees: string;   // 従業員数
    address: string;     // 所在地
    profileUrl: string;  // 会社概要URL
  }
}
```

#### アクセシビリティ改善
- セマンティックHTML構造
- ARIA属性の適切な使用
- キーボードナビゲーション対応
- 高コントラスト対応

#### レスポンシブデザイン
- フレックスレイアウト
- モバイル最適化されたスペーシング
- アダプティブなフォントサイズ

### SkillsSection
スキル情報を表示するコンポーネント

#### Props
```typescript
{
  skills: {
    windows: string[]; // Windows関連スキル
    azure: string[];   // Azure関連スキル
  }
}
```

#### UI改善
- カード型レイアウト
- インタラクティブな要素
- ビジュアル階層の強化

#### アクセシビリティ
- ARIAラベル対応
- キーボードフォーカス管理
- リストグループのラベリング

## デザインガイドライン

### ダークモード対応
- カラーシステムの自動切り替え
- 適切なコントラスト比の維持
- スムーズなトランジション

### レスポンシブデザイン原則
1. モバイルファーストアプローチ
2. フレックスブルなグリッドシステム
3. ブレークポイントの一貫性
   - sm: 640px
   - md: 768px
   - lg: 1024px

### アクセシビリティ要件
1. キーボードナビゲーション
2. スクリーンリーダー対応
3. WAI-ARIA準拠
4. 高コントラストモード対応

### パフォーマンス最適化
1. フォント最適化
   - サブセット化
   - プリロード
   - 適切なフォールバック
2. アニメーション最適化
   - CSS transforms優先
   - will-change適用
3. バンドルサイズ最適化

## テスト戦略

### アクセシビリティテスト
- WAVE評価
- キーボード操作テスト
- スクリーンリーダーテスト

### レスポンシブテスト
- 異なる画面サイズ
- 異なるデバイス
- 異なる解像度

### パフォーマンステスト
- Lighthouse評価
- Core Web Vitals
- インタラクション遅延

## 将来の改善計画

### 短期的な改善
- TypeScript移行
- Storybook導入
- テストカバレッジ向上

### 中長期的な改善
- マイクロインタラクション強化
- アニメーション最適化
- 国際化対応