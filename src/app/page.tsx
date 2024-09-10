/* eslint-disable @next/next/no-img-element */
import Header from "@/components/Header";
import { Profile } from "@/components/profile";
import { Project } from "@/components/project";

export default function Component() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="w-full max-w-4xl p-8 bg-white shadow-2xl rounded-2xl">
        <div className="mb-5">
          <Header />
        </div>
        <div className="text-bold text-4xl text-center p-1">
          Profile
          <div className="mt-5">
            <Profile />
          </div>
        </div>
        <div>
          <div className="text-bold text-4xl text-center p-1">Works</div>
          <div className="text-xl mt-5 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <Project
              title="お絵描き打ち上げ花火"
              description="タブレットやスマートフォンなどを使って、Web状に描かれたものをドット花火にしてスクリーンに打ち上げる作品"
              details="詳細"
              tantou="担当箇所： 背景の画像設定, "
              personal="チーム制作"
              languages="使用した言語: p5.js"
              imgUrl="/fireworks1.png"
              githubLink=""
              award=""
            />
            <Project
              title="つながる扉"
              description="年齢や性別を跨いで自分の好きなこと、得意なことを見知らぬ他者へ、コンピュータが仲介して伝えてくれる作品"
              details="detail"
              tantou="担当箇所： ドアノブ接触検知, ノック検知, ドア制作"
              personal="チーム制作"
              languages="使用した言語: Arduino言語"
              imgUrl="/door.png"
              githubLink=""
              award=""
            />
            <Project
              title="星空に浮かぶストーリー"
              description="GPT-4oおよびDall-E-3のAPIを用いて、ユーザが入力したキーワードから物語と星座を生成するメディアアート作品"
              details=""
              tantou="担当箇所： 背景"
              personal="チーム制作"
              languages="使用した言語: TypeScript"
              imgUrl="/make_story.jpg"
              githubLink=""
              award=""
            />
            <Project
              title="Moonquake Map"
              description="アポロが観測した月震を月面上にマッピングし、他のデータと表示することで月震のメカニズム調査をサポートするWebアプリ"
              details="detail"
              tantou="担当箇所： 背景"
              personal="チーム制作"
              languages="使用した言語: TypeScript"
              imgUrl="/moonquake_app.png"
              githubLink=""
              award="NASA Space Apps Challenge Yokohama2023 Global Winners選出"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
