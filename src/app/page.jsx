"use client";
import React from "react";

function MainComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 p-4 md:p-8 font-sans">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        <header className="bg-indigo-600 text-white p-4 md:p-6">
          <h1 className="text-2xl md:text-3xl font-bold">職務経歴書</h1>
        </header>

        <main className="p-4 md:p-6">
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-indigo-800">
              日本コンセントリクス株式会社
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-base md:text-lg">
              <li>
                <span className="font-medium">期間:</span> 2020年09月〜現在
              </li>
              <li>
                <span className="font-medium">事業内容:</span>{" "}
                カスタマー・ケア及びビジネス・プロセス・アウトソーシング・サービス
              </li>
              <li>
                <span className="font-medium">資本金:</span> 3億1,000万円
              </li>
              <li>
                <span className="font-medium">売上高:</span>{" "}
                約1兆3,966億4,000万円
              </li>
              <li>
                <span className="font-medium">従業員数:</span>{" "}
                3000人（グローバル22万5000人） NASDAQ上場
              </li>
              <li>
                <span className="font-medium">本社所在地:</span> 〒136-0071
                東京都江東区亀戸1-5-7 錦糸町プライムタワー 2F
              </li>
              <li>
                <span className="font-medium">会社概要:</span>{" "}
                <a
                  href="https://www.concentrix.com/ja/company-profile/"
                  className="text-blue-600 hover:underline"
                >
                  https://www.concentrix.com/ja/company-profile/
                </a>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-indigo-800">
              職務概要
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              テクニカルサポートエンジニアとして、Microsoft Defender for
              EndpointやDefender Antivirus、Azure Security Center、Azure
              Sentinel、Azure Active
              Directory（AAD）などのセキュリティ製品を担当し、セキュリティサポート業務を担当。ユーザーからのセキュリティインシデント対応を行い、システムの保護と安定稼働を支援。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-indigo-800">
              業務内容
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-4 leading-relaxed">
              クライアントから報告されたセキュリティインシデントやシステムパフォーマンスの低下に対応。Microsoft
              Defender for Endpointのアラート分析や、Advanced
              Huntingクエリを用いた脅威のトリアージ、Azure Security
              Centerを活用したセキュリティポスチャの評価を実施し、Azure
              Defenderによるリアルタイム脅威の特定と対応策を提供。クラウドインフラ全体のセキュリティ強化を図り、ネットワーク保護やエクスプロイト防止などの具体的な技術サポートを展開。
            </p>
            <p className="text-base md:text-lg text-gray-700 mb-4 leading-relaxed">
              クライアントからのフィードバックを基に、Azure PolicyやAzure
              Blueprintsを活用したセキュリティのベストプラクティス導入を推進。Azure
              Key Vaultを用いた機密情報保護や、Azure
              Bastionによる安全なリモートアクセスを設定。
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              チームメンバーのセキュリティ意識向上を目的に、Microsoft Defender
              for
              Endpointの脅威防止機能やゼロトラストセキュリティモデルに基づく戦略的セキュリティ運用のトレーニングを実施し、Azure
              Sentinelのワークブックを活用したセキュリティインシデント対応能力の向上を推進。ドキュメンテーション作成においても、トラブルシューティングガイドやセキュリティベストプラクティスの更新を行い、社内ポータルでの情報共有を強化。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-indigo-800">
              成果
            </h2>
            <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-gray-700">
              <li>
                月間60件、年間720件以上のインシデントチケットに対応し、クライアントの問題を迅速に解決。エンドポイントのセキュリティレベルを向上させ、ビジネスの継続性を確保。
              </li>
              <li>
                クライアント満足度を向上させるため、Azureセキュリティ製品のカスタマイズとポリシー見直しを実施し、クライアント満足度向上に貢献。
              </li>
              <li>
                サポートドキュメントの改善により、Security担当者の知見向上をサポートし、ローレベルトラブルシューティングのサポートチケット削減に成功。チームメンバーと協力し、日々の小さな業務プロセスの効率化を推進し、月あたり100時間以上の作業時間を削減。
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-indigo-800">
              スキル
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-indigo-700">
                  Windows関連スキル
                </h3>
                <ul className="list-disc list-inside space-y-1 text-base md:text-lg text-gray-700">
                  <li>Windows Server管理</li>
                  <li>Windowsデスクトップ管理</li>
                  <li>ネットワーク管理</li>
                  <li>仮想化技術</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-indigo-700">
                  Azure関連スキル
                </h3>
                <ul className="list-disc list-inside space-y-1 text-base md:text-lg text-gray-700">
                  <li>クラウドコンピューティング</li>
                  <li>ネットワーキング</li>
                  <li>ストレージ</li>
                  <li>アイデンティティ管理</li>
                  <li>DevOps</li>
                  <li>セキュリティとコンプライアンス</li>
                  <li>データベース管理</li>
                  <li>アプリケーションサービス</li>
                  <li>監視とロギング</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-indigo-800">
              資格・語学
            </h2>
            <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-gray-700">
              <li>普通自動車免許第一種</li>
              <li>Microsoft Certified: Power Platform Fundamentals</li>
              <li>AZ-900:Microsoft Azure Fundamentals</li>
              <li>英語：日常会話レベル</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-indigo-800">
              自己PR
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Microsoft Defender for Endpoint、Azure Security Center、Azure
              Sentinelなどのセキュリティ製品の知見を活かし、高度なセキュリティ課題に迅速かつ効果的に対応が可能。クライアントに合わせたカスタマイズ提案やトレーニングを提案が可能。セキュリティ体制を強化し、満足度向上に貢献。インフラとセキュリティの両方にわたる深い知識と実務経験をほ保有。
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}

export default MainComponent;