# JobInfo

職務経歴書を表示するNext.jsアプリケーション

## 概要

モダンなWeb技術を活用した職務経歴書表示アプリケーション。コンポーネントベースのアーキテクチャを採用し、保守性と拡張性を重視した設計となっています。

## 技術スタック

- Next.js 14.0.4
- React 18.3.1
- TailwindCSS 3.3.0
- FontAwesome/React Icons

## クイックスタート

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build

# 本番環境での起動
npm start
```

## 詳細ドキュメント

- [アーキテクチャ設計](docs/ARCHITECTURE.md)
  - 設計原則と意思決定の記録
  - 技術選定の根拠
  - スケーラビリティと保守性の考慮事項

- [コンポーネント仕様](docs/COMPONENTS.md)
  - 各コンポーネントの詳細な仕様
  - 使用方法とプロパティの説明
  - スタイリングとアクセシビリティのガイドライン

- [変更履歴](docs/CHANGELOG.md)
  - バージョン管理
  - 機能追加・変更の記録
  - 既知の問題と対応状況

## プロジェクト構造

```
src/
├── app/
│   ├── components/     # UIコンポーネント
│   ├── data/          # データファイル
│   ├── globals.css    # グローバルスタイル
│   ├── layout.js      # アプリケーションレイアウト
│   └── page.jsx       # メインページ
docs/                  # プロジェクトドキュメント
├── ARCHITECTURE.md    # 設計ドキュメント
├── CHANGELOG.md       # 変更履歴
└── COMPONENTS.md      # コンポーネント仕様
```

## 開発環境要件

- Node.js 18.x以上
- npm 9.x以上

## ライセンス

MIT License
