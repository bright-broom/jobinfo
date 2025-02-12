# コンポーネント仕様書

## 共通コンポーネント

### SectionHeader
セクションのヘッダーを表示する共通コンポーネント

#### Props
```typescript
{
  children: ReactNode; // ヘッダーのテキストコンテンツ
}
```

#### 使用例
```jsx
<SectionHeader>職務経歴</SectionHeader>
```

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

#### 使用例
```jsx
// テキストとして表示
<ContentSection 
  title="自己PR" 
  content="テキストコンテンツ" 
/>

// リストとして表示
<ContentSection 
  title="資格" 
  content={["資格1", "資格2"]} 
  type="list" 
/>
```

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

#### 使用例
```jsx
<CompanyInfo company={companyData} />
```

### JobSection
職務情報を表示するコンポーネント群

#### JobSummary Props
```typescript
{
  summary: string; // 職務概要テキスト
}
```

#### JobResponsibilities Props
```typescript
{
  responsibilities: string[]; // 業務内容のリスト
}
```

#### 使用例
```jsx
<JobSummary summary={jobSummaryText} />
<JobResponsibilities responsibilities={responsibilitiesList} />
```

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

#### 使用例
```jsx
<SkillsSection skills={skillsData} />
```

## コンポーネント設計の原則

### 1. 単一責任の原則
各コンポーネントは単一の責任を持ち、明確な目的を持つように設計されています。

### 2. コンポジション
小さなコンポーネントを組み合わせて、より複雑な機能を実現します。

### 3. Props インターフェース
- 必要最小限のpropsを定義
- 型安全性の確保（TypeScript移行後）
- デフォルト値の適切な設定

### 4. エラー処理
- 必須propsの検証
- 無効なデータの適切なフォールバック
- 開発時の警告表示

### 5. パフォーマンス最適化
- メモ化の準備
- 不要な再レンダリングの防止
- 適切なキー管理

## スタイリングガイドライン

### TailwindCSSクラスの優先順位
1. レイアウト (display, position)
2. スペーシング (margin, padding)
3. サイズ (width, height)
4. タイポグラフィ (font, text)
5. 視覚効果 (color, background)
6. その他 (transform, animation)

### レスポンシブデザイン
- モバイルファーストアプローチ
- ブレークポイントの一貫した使用
- フレックスボックス/グリッドの活用

## アクセシビリティガイドライン

### ARIA属性
- 適切なroleの使用
- 状態の明確な伝達
- キーボードナビゲーション

### セマンティックHTML
- 適切な見出しレベル
- リスト構造の活用
- フォーム要素の適切なラベリング

## テスト戦略

### 単体テスト
- コンポーネントの基本機能
- プロップスのバリデーション
- エラーケースの処理

### インテグレーションテスト
- コンポーネント間の相互作用
- データフローの検証
- イベントハンドリング

### E2Eテスト
- ユーザーフロー
- レスポンシブ動作
- アクセシビリティ

## 今後の改善計画

### 短期的な改善
- TypeScript移行
- テストカバレッジの向上
- パフォーマンス最適化

### 中長期的な改善
- コンポーネントライブラリ化
- スタイルシステムの確立
- 国際化対応