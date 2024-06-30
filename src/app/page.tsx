/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { Project } from "@/components/project";
import Header from "@/components/Header";

export default function Component() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="w-full max-w-4xl p-8 bg-white shadow-2xl rounded-2xl">
        <div className="flex flex-col items-center">
          {/* <div className="flex items-center space-x-4 mb-4">
            <img
              alt="icon"
              className="rounded-full"
              height={64}
              src="/"
              style={{
                aspectRatio: "64/64",
                objectFit: "cover",
              }}
              width={64}
            />
            <div>
              <h1 className="text-5xl font-bold">Portfolio</h1>
              <p className="mt-2 text-2xl font-medium">上樂大治朗</p>
            </div>
          </div> */}
          <Header src="fireworks1.png" />
        </div>
        <div className="mt-12 space-y-6">
          <p className="text-gray-700 text-lg"></p>
          <p className="text-gray-700 text-lg">
            芝浦工業大学　情報工学科4年　実世界インタラクション
          </p>
        </div>
        <div className="mt-12 relative">
          {/* Google Slide */}
          <iframe
            src="https://docs.google.com/presentation/d/e/2PACX-1vQAURrQZokRUB4nVuYXSjNLfltsx9sQeZdZ59ePTOoY1G5jqj5CEBmWzDcA08kh292z7BmSdG1yjdg2/embed?start=false&loop=true&delayms=3000"
            frameBorder="0"
            allowFullScreen
            style={{
              aspectRatio: "1280/750",
              width: "100%",
            }}
          ></iframe>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <Project
            title="お絵描き打ち上げ花火"
            description="タブレットやスマートフォンなどを使って、Web状に描かれたものをドット花火にしてスクリーンに打ち上げる作品"
            details=""
            imgUrl="/fireworks1.png"
            githubLink=""
            award=""
          />
          <Project
            title="つながる扉"
            description="年齢や性別を跨いで自分の好きなこと、得意なことを見知らぬ他者へ、コンピュータが仲介して伝えてくれる作品"
            details=""
            imgUrl="/door.png"
            githubLink=""
            award=""
          />
          <Project
            title="星空に浮かぶストーリー"
            description="GPT-4oおよびDall-E-3のAPIを用いて、ユーザが入力したキーワードから物語と星座を生成するメディアアート作品"
            details=""
            imgUrl="/make_story.jpg"
            githubLink=""
            award=""
          />
          <Project
            title="Moonquake Map"
            description="アポロが観測した月震を月面上にマッピングし、他のデータと表示することで月震のメカニズム調査をサポートするWebアプリ"
            details=""
            imgUrl="/moonquake_app.png"
            githubLink=""
            award="Global Winners選出"
          />
        </div>
      </div>
    </div>
  );
}
